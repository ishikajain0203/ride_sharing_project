import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';
import { bookRide, emitRidesUpdated, cancelRide } from '../utils/api';
import type { Screen } from '../types/navigation';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Users, 
  Car, 
  Star,
  Phone,
  MessageCircle,
  IndianRupee,
  Shield,
  AlertTriangle
} from 'lucide-react';

interface Participant {
  name: string;
  rating: number;
}

interface RideData {
  ride_id: string;
  id: string;
  driver: string;
  driverRating: number;
  driverPhone: string;
  from: string;
  to: string;
  date: string;
  time: string;
  fare: string;
  participants: number;
  participantDetails: Participant[];
  maxParticipants: number;
  vehicleType: string;
  vehicleNumber: string;
  estimatedTime: string;
  pickupPoint: string;
  dropPoint: string;
}

interface RideDetailsScreenProps {
  ride: RideData | null | undefined;
  onNavigate: (screen: string) => void;
}

export function RideDetailsScreen({ ride, onNavigate }: RideDetailsScreenProps) {
  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Effect to check if user is already a participant
  useEffect(() => {
    if (ride?.participantDetails) {
      setIsBooked(ride.participantDetails.some(p => p.name === localStorage.getItem('userName')));
    }
  }, [ride]);

  if (!ride) {
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-screen">
        <Car className="h-12 w-12 text-muted-foreground mb-4" />
        <h2 className="text-lg font-medium mb-2">Loading ride details...</h2>
        <p className="text-sm text-muted-foreground">Please wait while we fetch the ride information.</p>
      </div>
    );
  }

  // Use the ride data directly since we know it exists
  const rideData = ride;

  // Use actual participants from the ride data
  const currentParticipants = ride?.participantDetails || [];

  const handleBookRide = async () => {
    if (!ride?.ride_id) {
      setError('Invalid ride data - missing ride ID');
      return;
    }

    if (ride.participants >= ride.maxParticipants) {
      setError('This ride is already full');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      console.log('Booking ride with ID:', ride.ride_id); // Debug log
      const response = await bookRide(ride.ride_id);
      console.log('Booking response:', response); // Debug log
      
      // Only set booked if the API call succeeds
      setIsBooked(true);
      emitRidesUpdated();
      
      // Show success message and navigate
      alert('Ride booked successfully!');
      onNavigate('myRides');
    } catch (error) {
      console.error('Booking error:', error); // Debug log
      setIsBooked(false);
      setError(error instanceof Error ? error.message : 'Failed to book ride');
      alert(error instanceof Error ? error.message : 'Failed to book ride');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelBooking = async () => {
    if (!ride?.ride_id) return;

    try {
      await cancelRide(ride.ride_id);
      setIsBooked(false);
      emitRidesUpdated();
      alert('Ride cancelled successfully');
      onNavigate('myRides');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to cancel ride');
    }
  };

  return (
    <div className="p-4 pb-20">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6 pt-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => onNavigate('findRides')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl">Ride Details</h1>
      </div>

      <div className="space-y-4">
        {/* Driver Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Driver</span>
              <Badge variant="secondary">{rideData.vehicleType}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback>{rideData.driver.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-medium">{rideData.driver}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm">{rideData.driverRating}</span>
                  <span className="text-sm text-muted-foreground">• Verified</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-secondary p-3 rounded-lg">
              <p className="text-sm font-medium">Vehicle: {rideData.vehicleNumber}</p>
              <p className="text-xs text-muted-foreground">Registered and insured</p>
            </div>
          </CardContent>
        </Card>

        {/* Trip Details */}
        <Card>
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
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

            {/* Time and Duration */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="font-medium">{rideData.date}, {rideData.time}</p>
                  <p className="text-sm text-muted-foreground">Estimated: {rideData.estimatedTime}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Participants */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Participants</span>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span className="text-sm">{rideData.participants}/{rideData.maxParticipants}</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentParticipants.map((participant: Participant, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">
                      {participant.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{participant.name}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-muted-foreground">{participant.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              {Array.from({ length: rideData.maxParticipants - rideData.participants }).map((_, index) => (
                <div key={`empty-${index}`} className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-muted rounded-full border-2 border-dashed border-muted-foreground/30"></div>
                  <p className="text-sm text-muted-foreground">Available seat</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fare Details */}
        <Card>
          <CardHeader>
            <CardTitle>Fare Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Trip fare per person</span>
                <span className="font-medium">{rideData.fare}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Platform fee</span>
                <span>₹0</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <span>Total amount</span>
                <div className="flex items-center space-x-1">
                  <IndianRupee className="h-4 w-4" />
                  <span>{rideData.fare.replace('₹', '')}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety Information */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Safety Features</p>
                <p className="text-xs text-muted-foreground">
                  Trip tracking, emergency SOS, verified drivers
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cancellation Policy */}
        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Cancellation Policy</p>
                <p className="text-xs text-muted-foreground">
                  Free cancellation up to 3 hours before ride. Penalty charges may apply for late cancellations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          {!isBooked ? (
              <div className="space-y-2">
                <Button 
                  onClick={handleBookRide}
                  className="w-full"
                  size="lg"
                  disabled={rideData.participants >= rideData.maxParticipants || isLoading}
                >
                  {rideData.participants >= rideData.maxParticipants ? 'Ride Full' : 
                   isLoading ? 'Booking...' : `Book for ${rideData.fare}`}
                </Button>
                {error && (
                  <p className="text-center text-sm text-red-600">
                    {error}
                  </p>
                )}
              </div>
          ) : (
            <div className="space-y-2">
              <Button 
                variant="outline"
                onClick={handleCancelBooking}
                className="w-full"
                size="lg"
              >
                Cancel Booking
              </Button>
              <p className="text-center text-sm text-green-600">
                ✓ Booking confirmed! Proceeding to payment...
              </p>
            </div>
          )}
          
          <Button 
            variant="outline"
            onClick={() => onNavigate('findRides')}
            className="w-full"
          >
            Back to Search
          </Button>
        </div>
      </div>
    </div>
  );
}