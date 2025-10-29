import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Users, 
  Car, 
  Star,
  Calendar,
  Navigation,
  AlertCircle,
  CheckCircle,
  XCircle,
  MapPinned
} from 'lucide-react';
import { fetchMyRides } from '@/utils/api';

export function MyRidesScreen({ onNavigate, onRideSelect, onManageRide }) {
  const [selectedTab, setSelectedTab] = useState('booked');
  const [bookedRides, setBookedRides] = useState<any[]>([]);
  const [createdRides, setCreatedRides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMyRides();
        const toCard = (r: any) => ({
          id: r.ride_id,
          driver: 'You',
          driverRating: 4.7,
          from: r.start_location,
          to: r.end_location,
          date: new Date(r.start_date).toLocaleDateString(),
          time: new Date(r.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          fare: `₹${Number(r.total_fare)}`,
          status: r.status,
          participants: 0,
          maxParticipants: 4,
          vehicleType: r.vehicle?.vehicle_type || 'Car',
          vehicleNumber: '—',
          passengers: [],
        });
        setBookedRides((data.joined || []).map(toCard));
        setCreatedRides((data.hosted || []).map(toCard));
      } catch {
        setBookedRides([]);
        setCreatedRides([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    const onUpdated = async () => {
      try {
        const data = await fetchMyRides();
        const toCard = (r: any) => ({
          id: r.ride_id,
          driver: 'You',
          driverRating: 4.7,
          from: r.start_location,
          to: r.end_location,
          date: new Date(r.start_date).toLocaleDateString(),
          time: new Date(r.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          fare: `₹${Number(r.total_fare)}`,
          status: r.status,
          participants: 0,
          maxParticipants: 4,
          vehicleType: r.vehicle?.vehicle_type || 'Car',
          vehicleNumber: '—',
          passengers: [],
        });
        setBookedRides((data.joined || []).map(toCard));
        setCreatedRides((data.hosted || []).map(toCard));
      } catch {}
    };
    window.addEventListener('rides:updated', onUpdated);
    window.addEventListener('focus', onUpdated);
    window.addEventListener('nav:rides', onUpdated);
    return () => {
      window.removeEventListener('rides:updated', onUpdated);
      window.removeEventListener('focus', onUpdated);
      window.removeEventListener('nav:rides', onUpdated);
    };
  }, []);

  // Active ride (currently in progress)
  const activeRide = {
    id: 6,
    driver: "Priya Singh",
    driverRating: 4.8,
    from: "JKLU Campus",
    to: "Pink City",
    time: "Now",
    fare: "₹150",
    status: "active",
    participants: 3,
    maxParticipants: 4,
    vehicleType: "Car",
    vehicleNumber: "RJ 14 AB 1234",
    currentLocation: "En route to pickup",
    estimatedArrival: "5 mins"
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Upcoming</Badge>;
      case 'active':
        return <Badge variant="default" className="bg-green-500">Active</Badge>;
      case 'completed':
        return <Badge variant="secondary" className="bg-gray-100">Completed</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'upcoming':
        return <Calendar className="h-4 w-4 text-blue-500" />;
      case 'active':
        return <Navigation className="h-4 w-4 text-green-500" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-gray-500" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const handleCancelRide = (rideId) => {
    // Handle ride cancellation
    console.log('Cancelling ride:', rideId);
    // In a real app, this would call an API
  };

  const handleTrackRide = (ride) => {
    // Navigate to ride tracking/details
    onRideSelect(ride);
  };

  return (
    <div className="p-4 pb-20">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6 pt-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => onNavigate('home')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl">My Rides</h1>
      </div>

      {/* Active Ride Banner */}
      {/* Placeholder for active ride - could compute from my rides */}
      {false && (
        <Card className="mb-4 border-2 border-green-500 bg-green-50">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Navigation className="h-5 w-5 text-green-600" />
                <span>Ride in Progress</span>
              </CardTitle>
              <Badge className="bg-green-500">Live</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Car className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{activeRide.driver}</p>
                <p className="text-sm text-muted-foreground">{activeRide.vehicleNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-600">{activeRide.estimatedArrival}</p>
                <p className="text-xs text-muted-foreground">ETA</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-green-600" />
              <span className="font-medium">{activeRide.from}</span>
              <span className="text-muted-foreground">→</span>
              <span className="font-medium">{activeRide.to}</span>
            </div>

            <div className="bg-white p-2 rounded text-sm">
              <p className="text-muted-foreground">{activeRide.currentLocation}</p>
            </div>

            <div className="flex space-x-2">
              <Button 
                size="sm" 
                className="flex-1 bg-green-600 hover:bg-green-700"
                onClick={() => handleTrackRide(activeRide)}
              >
                <MapPinned className="h-4 w-4 mr-2" />
                Track on Map
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onNavigate('sos')}
                className="text-red-500 border-red-200"
              >
                SOS
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tabs for different ride types */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="booked">Booked Rides</TabsTrigger>
          <TabsTrigger value="created">My Created Rides</TabsTrigger>
        </TabsList>

        {/* Booked Rides Tab */}
        <TabsContent value="booked" className="space-y-3">
          {bookedRides.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Car className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-medium mb-2">No booked rides</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Start exploring available rides
                </p>
                <Button onClick={() => onNavigate('findRides')}>
                  Find Rides
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Upcoming Rides */}
              {bookedRides.filter(r => r.status === 'upcoming').length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Upcoming</span>
                  </h3>
                  <div className="space-y-3">
                    {bookedRides.filter(r => r.status === 'upcoming').map((ride) => (
                      <Card 
                        key={ride.id} 
                        className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => handleTrackRide(ride)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                                {getStatusIcon(ride.status)}
                              </div>
                              <div>
                                <p className="font-medium">{ride.driver}</p>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                  <span className="text-sm text-muted-foreground">{ride.driverRating}</span>
                                </div>
                              </div>
                            </div>
                            {getStatusBadge(ride.status)}
                          </div>

                          <div className="flex items-center space-x-2 text-sm mb-2">
                            <MapPin className="h-4 w-4 text-green-500" />
                            <span className="font-medium">{ride.from}</span>
                            <span className="text-muted-foreground">→</span>
                            <span className="font-medium">{ride.to}</span>
                          </div>

                          <div className="flex items-center space-x-4 text-sm mb-3">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 text-blue-500" />
                              <span>{ride.date}, {ride.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Car className="h-4 w-4 text-gray-500" />
                              <span>{ride.vehicleType}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-gray-500" />
                              <span className="text-sm">{ride.participants}/{ride.maxParticipants} riders</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{ride.fare}</span>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCancelRide(ride.id);
                                }}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Completed Rides */}
              {bookedRides.filter(r => r.status === 'completed').length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Completed</span>
                  </h3>
                  <div className="space-y-3">
                    {bookedRides.filter(r => r.status === 'completed').map((ride) => (
                      <Card 
                        key={ride.id} 
                        className="cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
                        onClick={() => handleTrackRide(ride)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                                {getStatusIcon(ride.status)}
                              </div>
                              <div>
                                <p className="font-medium">{ride.driver}</p>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                  <span className="text-sm text-muted-foreground">{ride.driverRating}</span>
                                </div>
                              </div>
                            </div>
                            {getStatusBadge(ride.status)}
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
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                onNavigate('feedback');
                              }}
                            >
                              Rate
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </TabsContent>

        {/* Created Rides Tab */}
        <TabsContent value="created" className="space-y-3">
          {createdRides.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Car className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-medium mb-2">No created rides</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Create a ride and share your journey
                </p>
                <Button onClick={() => onNavigate('createRide')}>
                  Create Ride
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Upcoming Created Rides */}
              {createdRides.filter(r => r.status === 'upcoming').length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Upcoming</span>
                  </h3>
                  <div className="space-y-3">
                    {createdRides.filter(r => r.status === 'upcoming').map((ride) => (
                      <Card 
                        key={ride.id}
                        className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-primary"
                        onClick={() => handleTrackRide(ride)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="font-medium">You're the driver</p>
                              <p className="text-sm text-muted-foreground">{ride.vehicleNumber}</p>
                            </div>
                            {getStatusBadge(ride.status)}
                          </div>

                          <div className="flex items-center space-x-2 text-sm mb-2">
                            <MapPin className="h-4 w-4 text-green-500" />
                            <span className="font-medium">{ride.from}</span>
                            <span className="text-muted-foreground">→</span>
                            <span className="font-medium">{ride.to}</span>
                          </div>

                          <div className="flex items-center space-x-4 text-sm mb-3">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 text-blue-500" />
                              <span>{ride.date}, {ride.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4 text-gray-500" />
                              <span>{ride.participants}/{ride.maxParticipants} riders</span>
                            </div>
                          </div>

                          {/* Passengers */}
                          {ride.passengers && ride.passengers.length > 0 && (
                            <div className="bg-secondary p-3 rounded-lg mb-3">
                              <p className="text-xs font-medium mb-2">Passengers:</p>
                              <div className="space-y-1">
                                {ride.passengers.map((passenger, idx) => (
                                  <div key={idx} className="flex items-center justify-between text-xs">
                                    <span>{passenger.name}</span>
                                    <div className="flex items-center space-x-1">
                                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                      <span>{passenger.rating}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <span className="font-medium">{ride.fare} per person</span>
                            <Button 
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                onManageRide(ride);
                              }}
                            >
                              Manage Ride
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Completed Created Rides */}
              {createdRides.filter(r => r.status === 'completed').length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Completed</span>
                  </h3>
                  <div className="space-y-3">
                    {createdRides.filter(r => r.status === 'completed').map((ride) => (
                      <Card 
                        key={ride.id}
                        className="cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
                        onClick={() => handleTrackRide(ride)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="font-medium">You drove this ride</p>
                              <p className="text-sm text-muted-foreground">{ride.vehicleNumber}</p>
                            </div>
                            {getStatusBadge(ride.status)}
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
                              <span>{ride.participants} passengers</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
