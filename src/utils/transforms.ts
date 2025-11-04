interface Participant {
  status: string;
  user?: {
    name: string;
    rating: number;
  };
}

interface RideData {
  ride_id: string;
  driver?: {
    name: string;
    rating: number;
  };
  start_location: string;
  end_location: string;
  start_date: string;
  start_time: string;
  total_fare: number;
  status: string;
  participation_status?: string;
  participants?: Participant[];
  vehicle?: {
    vehicle_type: string;
    vehicle_number: string;
  };
  max_passengers?: number;
}

export interface RideCard {
  id: string;
  driver: string;
  driverRating: number;
  from: string;
  to: string;
  date: string;
  time: string;
  fare: string;
  status: 'upcoming' | 'active' | 'completed' | 'cancelled';
  participationStatus?: string;
  participants: number;
  maxParticipants: number;
  vehicleType: string;
  vehicleNumber: string;
  passengers: Array<{
    name: string;
    rating: number;
  }>;
}

export const toRideCard = (r: RideData): RideCard => ({
  id: r.ride_id,
  driver: r.driver?.name || 'You',
  driverRating: r.driver?.rating || 4.7,
  from: r.start_location,
  to: r.end_location,
  date: new Date(r.start_date).toLocaleDateString(),
  time: new Date(r.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  fare: `₹${Number(r.total_fare)}`,
  status: r.status === 'open' ? 'upcoming' : r.status as 'upcoming' | 'active' | 'completed' | 'cancelled',
  participationStatus: r.participation_status || r.status,
  // include host as a rider in the count
  participants: (r.participants?.filter((p: Participant) => p.status === 'booked').length || 0) + 1,
  maxParticipants: r.max_passengers || 4,
  vehicleType: r.vehicle?.vehicle_type || 'Car',
  vehicleNumber: r.vehicle?.vehicle_number || '—',
  // include host as first passenger for display purposes
  passengers: [
    { name: r.driver?.name || 'You', rating: r.driver?.rating || 4.7 },
    ...(
      r.participants?.filter((p: Participant) => p.status === 'booked').map((p: Participant) => ({
        name: p.user?.name || 'Unknown',
        rating: p.user?.rating || 4.5
      })) || []
    )
  ],
});