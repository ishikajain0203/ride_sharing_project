import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Shield, 
  Phone, 
  MapPin, 
  Clock, 
  Users,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

export function SOSScreen({ onNavigate }) {
  const [sosTriggered, setSosTriggered] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [currentLocation, setCurrentLocation] = useState("Loading...");

  // Mock current ride data
  const currentRide = {
    driver: "Rahul Sharma",
    driverPhone: "+91 98765 43210",
    vehicle: "RJ 14 AB 1234",
    from: "JKLU Campus",
    to: "Pink City",
    participants: ["Priya Singh", "Arjun Patel"]
  };

  const emergencyContacts = [
    { name: "Campus Security", number: "+91 1234567890", type: "campus" },
    { name: "Local Police", number: "100", type: "police" },
    { name: "Medical Emergency", number: "108", type: "medical" }
  ];

  useEffect(() => {
    // Mock location fetch
    setTimeout(() => {
      setCurrentLocation("Pink City, Jaipur - Near Hawa Mahal");
    }, 1000);
  }, []);

  useEffect(() => {
    let timer;
    if (sosTriggered && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (sosTriggered && countdown === 0) {
      // SOS would be automatically sent here
      console.log("SOS Alert sent to authorities and committee");
    }
    return () => clearTimeout(timer);
  }, [sosTriggered, countdown]);

  const handleSOSTrigger = () => {
    setSosTriggered(true);
  };

  const handleSOSCancel = () => {
    setSosTriggered(false);
    setCountdown(10);
  };

  const handleCall = (number) => {
    // In a real app, this would initiate a phone call
    alert(`Calling ${number}...`);
  };

  if (sosTriggered) {
    return (
      <div className="p-4 min-h-screen bg-red-50">
        {/* SOS Active Header */}
        <div className="text-center pt-8 pb-6">
          <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-red-600 mb-2">SOS ACTIVATED</h1>
          <p className="text-red-600">Emergency alert will be sent in</p>
          <div className="text-4xl font-bold text-red-600 mt-2">{countdown}s</div>
        </div>

        {/* Cancel Option */}
        {countdown > 0 && (
          <Card className="mb-6 border-red-200">
            <CardContent className="p-4 text-center">
              <p className="text-sm mb-4">
                Alert will be automatically sent to campus security and committee in {countdown} seconds
              </p>
              <Button 
                variant="outline" 
                onClick={handleSOSCancel}
                className="w-full"
              >
                Cancel Alert
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Alert Sent Confirmation */}
        {countdown === 0 && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-700">
              Emergency alert sent successfully! Authorities have been notified with your location and ride details.
            </AlertDescription>
          </Alert>
        )}

        {/* Current Location */}
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-red-500" />
              <div>
                <p className="font-medium">Current Location</p>
                <p className="text-sm text-muted-foreground">{currentLocation}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ride Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Ride Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-medium">Driver: {currentRide.driver}</p>
              <p className="text-sm text-muted-foreground">Vehicle: {currentRide.vehicle}</p>
            </div>
            <div>
              <p className="text-sm">Route: {currentRide.from} → {currentRide.to}</p>
            </div>
            <div>
              <p className="text-sm">Other Passengers:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {currentRide.participants.map((participant, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {participant}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Contacts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleCall(contact.number)}
                className="w-full justify-between h-auto p-4"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.number}</p>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Return Home */}
        <div className="mt-6">
          <Button 
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="w-full"
          >
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

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
        <h1 className="text-xl">Emergency SOS</h1>
      </div>

      <div className="space-y-6">
        {/* Warning Message */}
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-700">
            Use SOS only in genuine emergencies. False alarms may result in penalties.
          </AlertDescription>
        </Alert>

        {/* SOS Button */}
        <Card className="border-red-200">
          <CardHeader className="text-center">
            <CardTitle className="text-red-600">Emergency Alert</CardTitle>
            <CardDescription>
              Press and hold to send an emergency alert to campus security and committee
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              size="lg"
              onClick={handleSOSTrigger}
              className="w-32 h-32 rounded-full bg-red-500 hover:bg-red-600 text-white text-xl font-bold"
            >
              SOS
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              This will immediately alert authorities with your location and ride details
            </p>
          </CardContent>
        </Card>

        {/* Current Ride Info */}
        <Card>
          <CardHeader>
            <CardTitle>Current Ride</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">{currentRide.driver}</p>
                <p className="text-sm text-muted-foreground">{currentRide.vehicle}</p>
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
              <span>Started 15 minutes ago</span>
            </div>
          </CardContent>
        </Card>

        {/* What Happens */}
        <Card>
          <CardHeader>
            <CardTitle>What happens when you trigger SOS?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">1</div>
                <p>Your current location is immediately shared</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">2</div>
                <p>Campus security and committee are notified</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">3</div>
                <p>Your ride and participant details are shared</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">4</div>
                <p>Emergency contacts receive immediate alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Contacts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleCall(contact.number)}
                className="w-full justify-between h-auto p-4"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.number}</p>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}