import 'dotenv/config';
import bcrypt from "bcryptjs";
import { PrismaClient, UserRole, RideStatus, ComfortFlag, CommitteeActionType } from "../src/generated/prisma";

const prisma = new PrismaClient();

function ensureJKLUDomain(email: string): string {
  const [, local] = email.match(/^([^@]+)@?.*$/) || [];
  return `${local}@jklu.edu.in`;
}

function satisfiesPasswordPolicy(password: string): boolean {
  return /[!@#$%^&*()_+\-={}\[\]|;:'",.<>/?`~]/.test(password);
}

async function createUser(
  name: string,
  emailLocalPart: string,
  plainPassword: string,
  role: UserRole = UserRole.student,
  phone?: string | null,
) {
  const email = ensureJKLUDomain(emailLocalPart);
  if (!satisfiesPasswordPolicy(plainPassword)) {
    throw new Error(`Password for ${email} must include a special character.`);
  }
  const password_hash = await bcrypt.hash(plainPassword, 10);

  return prisma.user.upsert({
    where: { email },
    update: { name, role, phone: phone ?? null, password_hash },
    create: {
      name,
      email,
      role,
      phone: phone ?? null,
      password_hash,
      credibility_score: 100,
      rating: null,
      cancellation_count: 0,
    },
  });
}

async function main() {
  console.log("Seeding database with demo data...");
  
  // Check if we should create demo accounts (set DEMO_ACCOUNTS=false to skip)
  const createDemoAccounts = process.env.DEMO_ACCOUNTS !== 'false';

  if (createDemoAccounts) {
    console.log("Creating demo accounts for testing...");
    
    // Users
    const alice = await createUser("Alice Sharma", "alice.sharma", "Alice@2025!", UserRole.student, "9876543210");
    const bob = await createUser("Bob Verma", "bob.verma", "Bob#Ride@123", UserRole.student, "9876501234");
    const charlie = await createUser("Charlie Gupta", "charlie.gupta", "Char!ie_789", UserRole.student);
    const admin = await createUser("Committee Admin", "admin.committee", "Admin*Panel@1", UserRole.committee_admin, "9998887777");

    // Vehicles (only for some users)
    const aliceVehicle = await prisma.vehicle.upsert({
      where: { user_id: alice.user_id },
      update: { vehicle_type: "car" },
      create: { user_id: alice.user_id, vehicle_type: "car" },
    });

    const bobVehicle = await prisma.vehicle.upsert({
      where: { user_id: bob.user_id },
      update: { vehicle_type: "bike" },
      create: { user_id: bob.user_id, vehicle_type: "bike" },
    });

    // Rides
    const now = new Date();
    const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const timePlus = (hours: number, minutes = 0) => new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), hours, minutes, 0, 0);

    const ride1 = await prisma.ride.create({
      data: {
        driver_id: alice.user_id,
        vehicle_id: aliceVehicle.vehicle_id,
        start_location: "JKLU Campus Gate",
        end_location: "Jaipur Railway Station",
        start_date: todayDate,
        start_time: timePlus(17, 30),
        total_fare: "300.00",
        status: RideStatus.open,
      },
    });

    const ride2 = await prisma.ride.create({
      data: {
        driver_id: bob.user_id,
        vehicle_id: bobVehicle.vehicle_id,
        start_location: "JKLU Hostel A",
        end_location: "World Trade Park",
        start_date: todayDate,
        start_time: timePlus(19, 0),
        total_fare: "150.00",
        status: RideStatus.booked,
      },
    });

    // Participants
    const p1 = await prisma.rideParticipant.create({
      data: {
        ride_id: ride1.ride_id,
        user_id: charlie.user_id,
        share_fare: "150.00",
      },
    });

    const p2 = await prisma.rideParticipant.create({
      data: {
        ride_id: ride2.ride_id,
        user_id: alice.user_id,
        share_fare: "75.00",
      },
    });

    // Payments
    await prisma.payment.create({
      data: {
        ride_id: ride1.ride_id,
        payer_id: charlie.user_id,
        amount: "150.00",
      },
    });

    await prisma.payment.create({
      data: {
        ride_id: ride2.ride_id,
        payer_id: alice.user_id,
        amount: "75.00",
      },
    });

    // Feedbacks
    await prisma.feedback.create({
      data: {
        ride_id: ride1.ride_id,
        giver_id: charlie.user_id,
        receiver_id: alice.user_id,
        rating: 5,
        comfort_flag: ComfortFlag.comfortable,
        comments: "Smooth ride, on time!",
      },
    });

    await prisma.feedback.create({
      data: {
        ride_id: ride2.ride_id,
        giver_id: alice.user_id,
        receiver_id: bob.user_id,
        rating: 4,
        comfort_flag: ComfortFlag.comfortable,
        comments: "Quick and safe.",
      },
    });

    // SOS example
    const sos = await prisma.sOS_Log.create({
      data: {
        ride_id: ride2.ride_id,
        trigger_user_id: alice.user_id,
        location_at_trigger: "Near WTP Gate 2",
        status: "open",
      },
    });

    await prisma.sOS_Involved.createMany({
      data: [
        { sos_id: sos.sos_id, user_id: bob.user_id },
        { sos_id: sos.sos_id, user_id: alice.user_id },
      ],
      skipDuplicates: true,
    });

    await prisma.committee_Action.create({
      data: {
        sos_id: sos.sos_id,
        user_id: admin.user_id,
        action_type: CommitteeActionType.feedback_review,
        notes: "Reviewed SOS event. False alarm.",
      },
    });

    console.log("Demo accounts created:");
    console.log("- alice.sharma@jklu.edu.in / Alice@2025!");
    console.log("- bob.verma@jklu.edu.in / Bob#Ride@123");
    console.log("- charlie.gupta@jklu.edu.in / Char!ie_789");
    console.log("- admin.committee@jklu.edu.in / Admin*Panel@1");
  } else {
    console.log("Skipping demo accounts. Only database schema will be initialized.");
  }

  console.log("✅ Database seeding completed successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


