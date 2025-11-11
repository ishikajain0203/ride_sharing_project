import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Clock, Users, Car, Star, ArrowLeft, CheckCircle } from 'lucide-react';
import { fetchMyRides } from '../utils/api';

interface RideCard {
  id: string;
  driver: string;
  driverRating: number;
  from: string;
  to: string;
  date: string;
  time: string;
  fare: string;
  participants: number;
  maxParticipants: number;
  vehicleType: string;
  vehicleNumber: string;
}

interface CompletedRidesScreenProps {
  onNavigate: (screen: string) => void;
  onRideSelect: (ride: any) => void;
}

export function CompletedRidesScreen({ onNavigate, onRideSelect }: CompletedRidesScreenProps) {
  const [booked, setBooked] = useState<RideCard[]>([]);
  const [created, setCreated] = useState<RideCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMyRides();
        const toCard = (r: any): RideCard => ({
          id: r.ride_id || r.id,
          driver: r.driver?.name || 'You',
          driverRating: r.driver?.rating || 4.7,
          from: r.start_location,
          to: r.end_location,
          date: new Date(r.start_date).toLocaleDateString(),
          time: new Date(r.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          fare: `₹${Number(r.total_fare)}`,
          participants: (r.participants?.filter((p: any) => p.status === 'booked').length || 0) + 1,
          maxParticipants: r.max_passengers || 4,
          vehicleType: r.vehicle?.vehicle_type || 'Car',
          vehicleNumber: r.vehicle?.vehicle_number || '—',
        });

        setCreated((data.hosted || []).filter((r: any) => r.status === 'completed').map(toCard));
        setBooked(((data.joined || [])).filter((r: any) => r.status === 'completed').map(toCard));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const Section = ({ title, rides }: { title: string; rides: RideCard[] }) => (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center space-x-2">
        <CheckCircle className="h-4 w-4" />
        <span>{title}</span>
      </h3>
      <div className="space-y-3">
        {rides.map((ride) => (
          <Card key={ride.id} className="cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
            onClick={() => onRideSelect(ride)}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <Car className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{ride.driver}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-sm text-muted-foreground">{ride.driverRating}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary">Completed</Badge>
              </div>

              <div className="flex items-center space-x-2 text-sm mb-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span>{ride.from}</span>
                <span className="text-muted-foreground">→</span>
                <span>{ride.to}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{ride.date}, {ride.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{ride.participants}/{ride.maxParticipants} riders</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {rides.length === 0 && (
          <Card><CardContent className="p-6 text-center text-sm text-muted-foreground">No rides</CardContent></Card>
        )}
      </div>
    </div>
  );

  return (
    <div className="p-4 pb-20">
      <div className="flex items-center space-x-3 mb-6 pt-4">
        <Button variant="ghost" size="icon" onClick={() => onNavigate('myRides')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl">Completed Rides</h1>
      </div>

      {loading ? (
        <Card><CardContent className="p-8 text-center text-sm text-muted-foreground">Loading...</CardContent></Card>
      ) : (
        <>
          <Section title="Booked Rides" rides={booked} />
          <Section title="Created Rides" rides={created} />
        </>
      )}
    </div>
  );
}


