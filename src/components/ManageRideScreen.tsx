import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Users, 
  Car, 
  Star,
  Phone,
  MessageCircle,
  Edit,
  Trash2,
  PlayCircle,
  AlertTriangle,
  CheckCircle,
  Navigation as NavigationIcon
} from 'lucide-react';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { startRide, completeRide, emitRidesUpdated } from '../utils/api';

export function ManageRideScreen({ ride, onNavigate, onBack }) {
  const [rideStatus, setRideStatus] = useState(ride?.status || 'upcoming');
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  // Mock ride data if none provided
  const rideData = ride || {
    id: 4,
    from: "JKLU Campus",
    to: "Airport",
    date: "Oct 6",
    time: "6:00 AM",
    fare: "₹300",
    status: "upcoming",
    participants: 2,
    maxParticipants: 3,
    vehicleType: "Car",
    vehicleNumber: "RJ 14 EF 3456",
    pickupPoint: "Main Gate, JKLU Campus",
    dropPoint: "Terminal 1, Jaipur Airport",
    estimatedTime: "60 min",
    passengers: [
      { 
        name: "Sneha Gupta", 
        rating: 4.8, 
        phone: "+91 98765 12345",
        pickupPoint: "Main Gate"
      },
      { 
        name: "Vikash Kumar", 
        rating: 4.5, 
        phone: "+91 98765 67890",
        pickupPoint: "Main Gate"
      }
    ]
  };

  const handleStartRide = async () => {
    try {
      if (!ride?.ride_id && !ride?.id) return;
      const id = (ride?.ride_id || ride?.id) as string;
      await startRide(id);
      setRideStatus('active');
      emitRidesUpdated();
    } catch (e: any) {
      alert(e?.message || 'Failed to start ride');
    }
  };

  const handleCompleteRide = async () => {
    try {
      if (!ride?.ride_id && !ride?.id) return;
      const id = (ride?.ride_id || ride?.id) as string;
      await completeRide(id);
      setRideStatus('completed');
      emitRidesUpdated();
      setTimeout(() => {
        onNavigate('payment');
      }, 500);
    } catch (e: any) {
      alert(e?.message || 'Failed to complete ride');
    }
  };

  const handleCancelRide = () => {
    setRideStatus('cancelled');
    console.log('Cancelling ride:', rideData.id);
    setShowCancelDialog(false);
    setTimeout(() => {
      onBack();
    }, 1000);
  };

  const handleEditRide = () => {
    // Navigate to edit ride screen
    console.log('Editing ride:', rideData.id);
    onNavigate('createRide');
  };

  const handleContactPassenger = (passenger) => {
    console.log('Contacting passenger:', passenger.name);
    // In a real app, this would open phone/messaging app
  };

  const getRideStatusBadge = () => {
    switch (rideStatus) {
      case 'upcoming':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Upcoming</Badge>;
      case 'active':
        return <Badge variant="default" className="bg-green-500">Active</Badge>;
      case 'completed':
        return <Badge variant="secondary" className="bg-gray-100">Completed</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{rideStatus}</Badge>;
    }
  };

  return (
    <div className="p-4 pb-20">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6 pt-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onBack}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl">Manage Ride</h1>
        {getRideStatusBadge()}
      </div>

      <div className="space-y-4">
        {/* Status Banner */}
        {rideStatus === 'active' && (
          <Card className="border-2 border-green-500 bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <NavigationIcon className="h-5 w-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium text-green-900">Ride in Progress</p>
                  <p className="text-sm text-green-700">Track your ride and manage passengers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {rideStatus === 'cancelled' && (
          <Card className="border-2 border-red-500 bg-red-50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <div className="flex-1">
                  <p className="font-medium text-red-900">Ride Cancelled</p>
                  <p className="text-sm text-red-700">This ride has been cancelled</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {rideStatus === 'completed' && (
          <Card className="border-2 border-gray-500 bg-gray-50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-gray-600" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Ride Completed</p>
                  <p className="text-sm text-gray-700">Thank you for completing this ride</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Trip Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Trip Details</span>
              <Badge variant="secondary">{rideData.vehicleType}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Route */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">{rideData.from}</p>
                  <p className="text-sm text-muted-foreground">{rideData.pickupPoint}</p>
                </div>
              </div>
              
              <div className="ml-2 border-l-2 border-dashed border-gray-300 h-4"></div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium">{rideData.to}</p>
                  <p className="text-sm text-muted-foreground">{rideData.dropPoint}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Time and Details */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">{rideData.date}, {rideData.time}</span>
                </div>
                <span className="text-sm text-muted-foreground">{rideData.estimatedTime}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Car className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{rideData.vehicleNumber}</span>
                </div>
                <span className="text-sm font-medium">{rideData.fare} per person</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passengers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Passengers ({rideData.participants}/{rideData.maxParticipants})</span>
              <Users className="h-5 w-5" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            {rideData.passengers && rideData.passengers.length > 0 ? (
              <div className="space-y-4">
                {rideData.passengers.map((passenger, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {passenger.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{passenger.name}</p>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 text-yellow-500 fill-current" />
                              <span className="text-sm text-muted-foreground">{passenger.rating}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">• {passenger.pickupPoint}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-1">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleContactPassenger(passenger)}
                        >
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => handleContactPassenger(passenger)}
                        >
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {index < rideData.passengers.length - 1 && <Separator />}
                  </div>
                ))}
                
                {/* Empty seats */}
                {Array.from({ length: rideData.maxParticipants - rideData.participants }).map((_, index) => (
                  <div key={`empty-${index}`}>
                    <Separator />
                    <div className="flex items-center space-x-3 pt-4">
                      <div className="h-10 w-10 bg-muted rounded-full border-2 border-dashed border-muted-foreground/30"></div>
                      <p className="text-sm text-muted-foreground">Available seat</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">No passengers yet</p>
                <p className="text-xs text-muted-foreground">Waiting for riders to book</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Revenue Summary */}
        {rideData.participants > 0 && (
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Expected Revenue</p>
                  <p className="text-2xl font-bold text-blue-900">
                    ₹{parseInt(rideData.fare.replace('₹', '')) * rideData.participants}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {rideData.participants} passenger(s) × {rideData.fare}
                  </p>
                </div>
                <div className="h-12 w-12 bg-blue-200 rounded-full flex items-center justify-center">
                  <Car className="h-6 w-6 text-blue-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        {rideStatus === 'upcoming' && (
          <div className="space-y-3">
            <Button 
              onClick={handleStartRide}
              className="w-full bg-green-600 hover:bg-green-700"
              size="lg"
              disabled={rideData.participants === 0}
            >
              <PlayCircle className="h-5 w-5 mr-2" />
              Start Ride
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline"
                onClick={handleEditRide}
                disabled={rideData.participants > 0}
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="text-red-500 border-red-200">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Cancel Ride
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Cancel this ride?</AlertDialogTitle>
                    <AlertDialogDescription>
                      {rideData.participants > 0 ? (
                        <>
                          This ride has {rideData.participants} passenger(s) booked. They will be notified about the cancellation. 
                          Cancellation fees may apply.
                        </>
                      ) : (
                        <>
                          Are you sure you want to cancel this ride? This action cannot be undone.
                        </>
                      )}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Keep Ride</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={handleCancelRide}
                      className="bg-red-500 hover:bg-red-600"
                    >
                      Yes, Cancel Ride
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            {rideData.participants === 0 && (
              <p className="text-xs text-center text-muted-foreground">
                💡 You can edit ride details until passengers book
              </p>
            )}
          </div>
        )}

        {rideStatus === 'active' && (
          <div className="space-y-3">
            <Button 
              onClick={handleCompleteRide}
              className="w-full bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Complete Ride
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => onNavigate('sos')}
              className="w-full text-red-500 border-red-200"
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              Emergency SOS
            </Button>
          </div>
        )}

        {rideStatus === 'completed' && (
          <div className="space-y-3">
            <Button 
              onClick={() => onNavigate('payment')}
              className="w-full"
              size="lg"
            >
              View Payment Details
            </Button>
            
            <Button 
              variant="outline"
              onClick={onBack}
              className="w-full"
            >
              Back to My Rides
            </Button>
          </div>
        )}

        {rideStatus === 'cancelled' && (
          <Button 
            variant="outline"
            onClick={onBack}
            className="w-full"
            size="lg"
          >
            Back to My Rides
          </Button>
        )}

        {/* Cancellation Policy */}
        {rideStatus === 'upcoming' && (
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Cancellation Policy</p>
                  <p className="text-xs text-muted-foreground">
                    Free cancellation up to 3 hours before ride. Late cancellations with booked passengers may incur penalty charges.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}