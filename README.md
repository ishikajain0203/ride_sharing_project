# JKLU Ride-Sharing Backend

A comprehensive backend system for JKLU community ride-sharing with authentication, payment processing, safety monitoring, and committee governance.

## Features

- **Authentication**: Restricted to @jklu.edu.in email addresses
- **Ride Management**: Create, join, and manage rides with dynamic fare splitting
- **Payment Processing**: UPI-based payments with QR code generation
- **Safety System**: SOS triggers with committee monitoring
- **Feedback System**: User ratings and credibility scoring
- **Committee Governance**: Administrative actions and dispute resolution
- **Business Rules**: Cancellation penalties, one-ride-at-a-time constraint

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT tokens
- **Validation**: Zod schemas
- **Logging**: Pino logger

## Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL 13+
- npm or yarn

### Installation

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd ride-sharing-app-design
npm install
```

2. **Set up environment variables:**
```bash
# Copy the example .env file
cp .env.example .env

# Edit .env with your database credentials
DATABASE_URL="postgresql://username:password@localhost:5432/jklu_ride"
JWT_SECRET="your-super-secret-jwt-key-min-16-chars"
PORT=4000
EMAIL_DOMAIN="@jklu.edu.in"
DATA_RETENTION_MONTHS=6
```

3. **Set up the database:**
```bash
# Generate Prisma client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# Or push schema directly (for development)
npm run db:push
```

4. **Start the development server:**
```bash
npm run dev
```

The API will be available at `http://localhost:4000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user (JKLU email required)
- `POST /api/auth/login` - Login and get JWT token

### Rides
- `POST /api/rides` - Create a new ride
- `GET /api/rides/search` - Search available rides
- `GET /api/rides/:rideId` - Get ride details
- `POST /api/rides/join` - Join a ride
- `POST /api/rides/cancel` - Cancel ride participation

### Payments
- `POST /api/payments/init` - Generate UPI QR code
- `POST /api/payments/confirm` - Confirm payment
- `GET /api/payments/history` - Get payment history

### Feedback
- `POST /api/feedback` - Submit feedback for a ride
- `GET /api/feedback/my` - Get feedback received by user
- `GET /api/feedback/:userId` - Get feedback for specific user

### SOS & Safety
- `POST /api/sos/trigger` - Trigger SOS alert
- `GET /api/sos/logs` - Get SOS logs (committee only)

### Committee (Admin Only)
- `GET /api/committee/sos` - Get all SOS logs
- `POST /api/committee/actions` - Create committee action
- `GET /api/committee/actions` - Get committee actions
- `GET /api/committee/low-credibility` - Get users with low credibility
- `GET /api/committee/weekly-report` - Get weekly SOS report

## Database Schema

### Core Entities

1. **User** - JKLU community members
2. **Vehicle** - Registered vehicles (optional)
3. **Ride** - Ride offerings with details
4. **RideParticipant** - Users joining rides
5. **Payment** - UPI payment records
6. **Feedback** - User ratings and reviews
7. **SOS_Log** - Safety incident reports
8. **Committee_Action** - Administrative actions

### Key Relationships

- User → Vehicle (1:0..1) - Users can have one vehicle
- User → Ride (1:N) - Users can host multiple rides
- Ride → RideParticipant (1:N) - Rides can have multiple participants
- User → RideParticipant (1:N) - Users can join multiple rides
- Ride → Payment (1:N) - Each ride can have multiple payments
- Ride → Feedback (1:N) - Rides can have multiple feedback entries

## Business Rules Implementation

### 1. Cancellation Window Rule
```typescript
// 3-hour cancellation window with penalties
const diffHours = (startDateTime - now) / (1000 * 60 * 60);
if (diffHours < 3) {
  penalty = Math.round(shareFare * 0.25);
  credibilityScore -= 5;
}
```

### 2. One-Ride-at-a-Time Constraint
```sql
-- Check for active ride participation
SELECT * FROM RideParticipant 
WHERE user_id = ? AND status = 'booked' 
AND ride_id IN (SELECT ride_id FROM Ride WHERE status IN ('open', 'booked'))
```

### 3. Dynamic Fare Splitting
```typescript
// Equal split among all participants
const participantCount = ride.participants.length + 1; // +1 for driver
const shareFare = totalFare / participantCount;
```

### 4. Credibility Score Updates
- **Good feedback**: +1 point
- **Poor rating (≤2)**: -3 points  
- **Uncomfortable flag**: -3 points
- **Late cancellation**: -5 points
- **Committee penalty**: -5 points
- **Committee ban**: -100 points

## Sample SQL Queries

### 1. Find Available Rides
```sql
SELECT r.*, u.name as driver_name, u.rating as driver_rating
FROM Ride r
JOIN User u ON r.driver_id = u.user_id
WHERE r.status = 'open' 
  AND r.start_location ILIKE '%campus%'
  AND r.start_date >= CURRENT_DATE
ORDER BY r.start_date ASC;
```

### 2. Calculate User Credibility
```sql
SELECT 
  u.user_id,
  u.name,
  u.credibility_score,
  COUNT(f.feedback_id) as total_feedback,
  AVG(f.rating) as avg_rating,
  COUNT(CASE WHEN f.comfort_flag = 'uncomfortable' THEN 1 END) as uncomfortable_count
FROM User u
LEFT JOIN Feedback f ON u.user_id = f.receiver_id
GROUP BY u.user_id, u.name, u.credibility_score
HAVING u.credibility_score < 50;
```

### 3. Weekly SOS Report
```sql
SELECT 
  s.sos_id,
  s.trigger_time,
  s.location_at_trigger,
  u.name as trigger_user,
  r.start_location,
  r.end_location,
  COUNT(si.user_id) as involved_users_count
FROM SOS_Log s
JOIN User u ON s.trigger_user_id = u.user_id
JOIN Ride r ON s.ride_id = r.ride_id
LEFT JOIN SOS_Involved si ON s.sos_id = si.sos_id
WHERE s.trigger_time >= NOW() - INTERVAL '7 days'
GROUP BY s.sos_id, s.trigger_time, s.location_at_trigger, u.name, r.start_location, r.end_location
ORDER BY s.trigger_time DESC;
```

### 4. Payment Summary
```sql
SELECT 
  u.name,
  COUNT(p.payment_id) as total_payments,
  SUM(p.amount) as total_amount,
  AVG(p.amount) as avg_payment
FROM User u
JOIN Payment p ON u.user_id = p.payer_id
WHERE p.paid_at >= NOW() - INTERVAL '30 days'
GROUP BY u.user_id, u.name
ORDER BY total_amount DESC;
```

### 5. Ride Completion Rate
```sql
SELECT 
  u.name as driver_name,
  COUNT(r.ride_id) as total_rides,
  COUNT(CASE WHEN r.status = 'completed' THEN 1 END) as completed_rides,
  ROUND(
    COUNT(CASE WHEN r.status = 'completed' THEN 1 END) * 100.0 / COUNT(r.ride_id), 2
  ) as completion_rate
FROM User u
JOIN Ride r ON u.user_id = r.driver_id
GROUP BY u.user_id, u.name
HAVING COUNT(r.ride_id) > 0
ORDER BY completion_rate DESC;
```

## Development Scripts

```bash
# Development
npm run dev              # Start development server with hot reload
npm run build           # Build TypeScript to JavaScript
npm run start           # Start production server

# Database
npm run prisma:generate # Generate Prisma client
npm run prisma:migrate  # Run database migrations
npm run db:push         # Push schema changes to database

# Testing
npm test                # Run test suite (when implemented)
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Required |
| `JWT_SECRET` | Secret key for JWT tokens | Required (min 16 chars) |
| `PORT` | Server port | 4000 |
| `EMAIL_DOMAIN` | Allowed email domain | @jklu.edu.in |
| `DATA_RETENTION_MONTHS` | Data retention period | 6 |
| `NODE_ENV` | Environment mode | development |

## Security Features

- **Email Domain Restriction**: Only @jklu.edu.in emails allowed
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Zod schema validation for all inputs
- **SQL Injection Protection**: Prisma ORM with parameterized queries
- **CORS Configuration**: Configurable cross-origin resource sharing
- **Helmet Security**: Security headers middleware

## Data Privacy & Retention

- Personal data retained for 6 months (configurable)
- Automatic anonymization after retention period
- Committee access logs for audit trails
- GDPR-compliant data handling practices

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support and questions, contact the development team or create an issue in the repository.