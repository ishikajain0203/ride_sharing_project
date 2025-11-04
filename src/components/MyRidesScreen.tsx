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
import { fetchMyRides, authHeaders, emitRidesUpdated, cancelRide } from '../utils/api';
import { toRideCard } from '../utils/transforms';

interface RideData {
  ride_id: string;
  id: string;
  driver: string;
  driver_id?: string;
  driverRating: number;
  driverPhone: string;
  from: string;
  to: string;
  date: string;
  time: string;
  fare: string;
  total_fare?: number;
  participants: number;
  maxParticipants: number;
  participantDetails: Array<{ name: string; rating: number; }>;
  vehicleType: string;
  vehicleNumber: string;
  estimatedTime: string;
  pickupPoint: string;
  dropPoint: string;
  start_location?: string;
  end_location?: string;
  start_date?: string;
  start_time?: string;
  max_passengers?: number;
  vehicle_id?: string;
  status: 'upcoming' | 'active' | 'completed' | 'cancelled';
  passengers?: Array<{
    name: string;
    rating: number;
  }>;
}

interface MyRidesScreenProps {
  onNavigate: (screen: string) => void;
  onRideSelect: (ride: RideData) => void;
  onManageRide: (ride: RideData) => void;
}

export function MyRidesScreen({ onNavigate, onRideSelect, onManageRide }: MyRidesScreenProps) {
  const [selectedTab, setSelectedTab] = useState('booked');
  const [bookedRides, setBookedRides] = useState<any[]>([]);
  const [createdRides, setCreatedRides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
  }

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMyRides();
        setBookedRides((data.joined || []).map(toRideCard));
        setCreatedRides((data.hosted || []).map(toRideCard));
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
        setBookedRides((data.joined || []).map(toRideCard));
        setCreatedRides((data.hosted || []).map(toRideCard));
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

  // Find active ride from actual data
  const activeRide = [...bookedRides, ...createdRides].find(ride => ride.status === 'active');

  const getStatusBadge = (status: RideData['status']) => {
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

  const getStatusIcon = (status: RideData['status']) => {
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

  const handleCancelRide = async (rideId: string) => {
    try {
      await cancelRide(rideId);
      
      // Show success message
      alert('Ride cancelled successfully');

      // After successful cancellation, refresh the rides list
      const data = await fetchMyRides();
      setBookedRides((data.joined || []).map(toRideCard));
      setCreatedRides((data.hosted || []).map(toRideCard));
        
      // Emit event to update other components
      emitRidesUpdated();
    } catch (error) {
      console.error('Error cancelling ride:', error);
      alert(error instanceof Error ? error.message : 'Failed to cancel ride');
    }
  };

  const handleTrackRide = (ride: RideData) => {
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
      {activeRide && (
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
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="booked">
            <div className="flex flex-col items-center">
              <span>Booked Rides</span>
              <span className="text-xs text-muted-foreground">
                ({bookedRides.length} rides)
              </span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="created">
            <div className="flex flex-col items-center">
              <span>Created Rides</span>
              <span className="text-xs text-muted-foreground">
                ({createdRides.length} rides)
              </span>
            </div>
          </TabsTrigger>
        </TabsList>

        {/* Booked Rides Tab */}
        <TabsContent value="booked" className="space-y-3">
          {loading ? (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-sm text-muted-foreground">Loading your rides...</p>
              </CardContent>
            </Card>
          ) : bookedRides.length === 0 ? (
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
                              onClick={(e: React.MouseEvent) => {
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
                    <span>Completed Rides History</span>
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
                            <span className="font-medium">{ride.from}</span>
                            <span className="text-muted-foreground">→</span>
                            <span className="font-medium">{ride.to}</span>
                          </div>

                          <div className="space-y-2">
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

                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <div className="text-sm">
                                  <span className="text-muted-foreground">Fare paid: </span>
                                  <span className="font-medium">{ride.fare}</span>
                                </div>
                                <div className="text-sm">
                                  <span className="text-muted-foreground">Vehicle: </span>
                                  <span className="font-medium">{ride.vehicleType}</span>
                                </div>
                              </div>

                              <div className="flex justify-between items-center">
                                <div className="text-sm text-muted-foreground">
                                  {ride.vehicleNumber}
                                </div>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    onNavigate('feedback');
                                  }}
                                >
                                  View Details & Rate
                                </Button>
                              </div>
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

        {/* Created Rides Tab */}
        <TabsContent value="created" className="space-y-3">
          {loading ? (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-sm text-muted-foreground">Loading your rides...</p>
              </CardContent>
            </Card>
          ) : createdRides.length === 0 ? (
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
                                {ride.passengers.map((passenger: { name: string; rating: number }, idx: number) => (
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
                              onClick={(e: React.MouseEvent) => {
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
