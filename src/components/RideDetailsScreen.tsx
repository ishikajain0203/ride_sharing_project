import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
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
  IndianRupee,
  Shield,
  AlertTriangle
} from 'lucide-react';

export function RideDetailsScreen({ ride, onNavigate }) {
  const [isBooked, setIsBooked] = useState(false);

  // Mock ride data if none provided
  const rideData = ride || {
    id: 1,
    driver: "Priya Singh",
    driverRating: 4.8,
    driverPhone: "+91 98765 43210",
    from: "JKLU Campus",
    to: "Pink City",
    date: "Today",
    time: "4:00 PM",
    fare: "₹150",
    participants: 2,
    maxParticipants: 4,
    vehicleType: "Car",
    vehicleNumber: "RJ 14 AB 1234",
    estimatedTime: "45 min",
    pickupPoint: "Main Gate, JKLU Campus",
    dropPoint: "Hawa Mahal, Pink City"
  };

  const currentParticipants = [
    { name: "Rahul Sharma", rating: 4.6 },
    { name: "Ankita Jain", rating: 4.7 }
  ];

  const handleBookRide = () => {
    setIsBooked(true);
    // Navigate to payment screen
    setTimeout(() => {
      onNavigate('payment');
    }, 1000);
  };

  const handleCancelBooking = () => {
    setIsBooked(false);
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
              {currentParticipants.map((participant, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">
                      {participant.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{participant.name}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-muted-foreground">{participant.rating}</span>
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
            <Button 
              onClick={handleBookRide}
              className="w-full"
              size="lg"
              disabled={rideData.participants >= rideData.maxParticipants}
            >
              {rideData.participants >= rideData.maxParticipants ? 'Ride Full' : `Book for ${rideData.fare}`}
            </Button>
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