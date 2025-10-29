import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Car, 
  Search, 
  Plus, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Shield,
  AlertTriangle
} from 'lucide-react';
import { fetchMyRides } from '@/utils/api';

export function HomeScreen({ onNavigate, onRideSelect }) {
  const [currentRide, setCurrentRide] = useState<any | null>(null);
  const [recentRides, setRecentRides] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMyRides();
        const upcoming = [...(data.joined || []), ...(data.hosted || [])]
          .sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());
        setCurrentRide(upcoming[0] ? {
          id: upcoming[0].ride_id,
          driver: 'You',
          from: upcoming[0].start_location,
          to: upcoming[0].end_location,
          time: new Date(upcoming[0].start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'upcoming',
          participants: 0,
          maxParticipants: 4,
        } : null);
        setRecentRides(upcoming.slice(0, 5).map(r => ({
          id: r.ride_id,
          driver: 'You',
          from: r.start_location,
          to: r.end_location,
          date: new Date(r.start_date).toLocaleDateString(),
          time: new Date(r.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          fare: `₹${Number(r.total_fare)}`,
          status: r.status,
          participants: 0,
          maxParticipants: 4,
        })));
      } catch {}
    })();
  }, []);

  useEffect(() => {
    const onUpdated = () => {
      (async () => {
        try {
          const data = await fetchMyRides();
          const upcoming = [...(data.joined || []), ...(data.hosted || [])]
            .sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());
          setCurrentRide(upcoming[0] ? {
            id: upcoming[0].ride_id,
            driver: 'You',
            from: upcoming[0].start_location,
            to: upcoming[0].end_location,
            time: new Date(upcoming[0].start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: 'upcoming',
            participants: 0,
            maxParticipants: 4,
          } : null);
          setRecentRides(upcoming.slice(0, 5).map(r => ({
            id: r.ride_id,
            driver: 'You',
            from: r.start_location,
            to: r.end_location,
            date: new Date(r.start_date).toLocaleDateString(),
            time: new Date(r.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            fare: `₹${Number(r.total_fare)}`,
            status: r.status,
            participants: 0,
            maxParticipants: 4,
          })));
        } catch {}
      })();
    };
    window.addEventListener('rides:updated', onUpdated);
    window.addEventListener('focus', onUpdated);
    return () => {
      window.removeEventListener('rides:updated', onUpdated);
      window.removeEventListener('focus', onUpdated);
    };
  }, []);

  const credibilityScore = 4.7;

  return (
    <div className="p-4 pb-20 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pt-4">
        <div>
          <h1 className="text-2xl">Good afternoon!</h1>
          <p className="text-muted-foreground">Ready for your next ride?</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-secondary px-3 py-1 rounded-full">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm">{credibilityScore}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button 
          onClick={() => onNavigate('createRide')}
          className="h-24 flex flex-col space-y-2"
        >
          <Plus className="h-6 w-6" />
          <span>Create Ride</span>
        </Button>
        <Button 
          variant="outline"
          onClick={() => onNavigate('findRides')}
          className="h-24 flex flex-col space-y-2"
        >
          <Search className="h-6 w-6" />
          <span>Find Rides</span>
        </Button>
      </div>

      {/* Active Ride */}
      {currentRide && (
        <Card className="border-2 border-primary">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Active Ride</CardTitle>
              <Badge variant="default">In Progress</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Car className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{currentRide.driver}</p>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{currentRide.participants}/{currentRide.maxParticipants} riders</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-green-500" />
              <span>{currentRide.from}</span>
              <span className="text-muted-foreground">→</span>
              <span>{currentRide.to}</span>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>{currentRide.time}</span>
            </div>

            <div className="flex space-x-2 pt-2">
              <Button size="sm" className="flex-1">
                Track Ride
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onNavigate('sos')}
                className="text-red-500 border-red-200"
              >
                <Shield className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Rides */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Available Rides</h2>
          <Button variant="ghost" size="sm" onClick={() => onNavigate('findRides')}>
            View All
          </Button>
        </div>
        
        <div className="space-y-3">
          {recentRides.map((ride) => (
            <Card key={ride.id} className="cursor-pointer" onClick={() => onRideSelect(ride)}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Car className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">{ride.driver}</p>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>{ride.participants}/{ride.maxParticipants}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{ride.fare}</p>
                    <p className="text-sm text-muted-foreground">{ride.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm mb-2">
                  <MapPin className="h-3 w-3 text-green-500" />
                  <span className="truncate">{ride.from}</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="truncate">{ride.to}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-3 w-3 text-blue-500" />
                    <span>{ride.time}</span>
                  </div>
                  <Badge variant="secondary">{ride.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Safety Notice */}
      <Card className="bg-orange-50 border-orange-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <div>
              <p className="text-sm font-medium">Safety Reminder</p>
              <p className="text-xs text-muted-foreground">
                Always verify driver details and use SOS in emergencies
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}