import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Select, 
  SelectContent, 
  SelectGroup,
  SelectItem, 
  SelectLabel,
  SelectTrigger, 
  SelectValue 
} from './ui/select';
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  Plus,
  Minus
} from 'lucide-react';
import { createRide, emitRidesUpdated } from '../utils/api';

import type { Screen } from '../types/navigation';

interface CreateRideScreenProps {
  onNavigate: (screen: Screen) => void;
}

type FormData = {
  from: string;
  to: string;
  date: string;
  time: string;
  maxPassengers: number;
  vehicleType: string;
}

type Route = {
  from: string;
  to: string;
}

export function CreateRideScreen({ onNavigate }: CreateRideScreenProps) {
  const [formData, setFormData] = useState<FormData>({
    from: '',
    to: '',
    date: '',
    time: '',
    maxPassengers: 3,
    vehicleType: ''
  });

  const popularRoutes: Route[] = [
    { from: 'JKLU Campus', to: 'Pink City' },
    { from: 'JKLU Campus', to: 'Malviya Nagar' },
    { from: 'JKLU Campus', to: 'Mansarovar' },
    { from: 'JKLU Campus', to: 'Railway Station' }
  ];

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    console.log(`Updating ${field} to:`, value); // Debug log
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      console.log('New form data:', newData); // Debug log
      return newData;
    });
  };

  const handleRouteSelect = (route: Route) => {
    setFormData({
      ...formData,
      from: route.from,
      to: route.to
    });
  };

  const handleSubmit = async () => {
    // Validate form with specific field checks
    const missingFields = [];
    
    if (!formData.from) missingFields.push('Pickup location');
    if (!formData.to) missingFields.push('Drop location');
    if (!formData.date) missingFields.push('Date');
    if (!formData.time) missingFields.push('Time');
    if (!formData.vehicleType) missingFields.push('Vehicle type');
    
    if (missingFields.length > 0) {
      alert(`Please fill the following required fields:\n${missingFields.join('\n')}`);
      return;
    }

    if (!['car', 'suv', 'auto'].includes(formData.vehicleType)) {
      alert('Please select a valid vehicle type (car, suv, or auto)');
      return;
    }

    // Log the form data to help debug
    console.log('Submitting form data:', formData);

    try {
      // Validate date and time
      const now = new Date();
      const selectedDate = new Date(formData.date);
      
      // Parse time safely with better type safety
      const [hoursStr = '0', minutesStr = '0'] = formData.time.split(':');
      const hours = parseInt(hoursStr, 10) || 0;
      const minutes = parseInt(minutesStr, 10) || 0;
      
      // Set the time to the selected time
      selectedDate.setHours(hours, minutes, 0, 0);
      
      // Check if the selected date/time is in the future
      if (selectedDate <= now) {
        alert('Please select a future date and time');
        return;
      }
      
      // Validate max passengers based on vehicle type
      const maxAllowed = formData.vehicleType === 'suv' ? 6 : formData.vehicleType === 'car' ? 4 : 3;
      const maxPassengers = Math.min(formData.maxPassengers, maxAllowed);

      // Create the request payload
      const payload = {
        start_location: formData.from,
        end_location: formData.to,
        start_date: formData.date, // YYYY-MM-DD format
        start_time: selectedDate.toISOString(), // Full ISO string for time
        total_fare: 100 * Math.max(1, maxPassengers), // simple placeholder
        vehicle_type: formData.vehicleType as 'car' | 'suv' | 'auto',
        max_passengers: maxPassengers,
      };

      console.log('Sending request with payload:', payload); // Debug log

      const response = await createRide(payload);
      
      // Ensure we have a valid response before emitting the update
      if (response && response.ride_id) {
        emitRidesUpdated();
        alert('Ride created successfully!');
        onNavigate('home');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (e: any) {
      alert(e?.message || 'Failed to create ride');
    }
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
        <h1 className="text-xl">Create New Ride</h1>
      </div>

      <div className="space-y-6">
        {/* Popular Routes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Select</CardTitle>
            <CardDescription>Popular routes from campus</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-2">
              {popularRoutes.map((route, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-auto p-3"
                  onClick={() => handleRouteSelect(route)}
                >
                  <div className="flex items-center space-x-2 w-full">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{route.from}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-sm">{route.to}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Route Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Route Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="from">From</Label>
              <Input
                id="from"
                name="from"
                placeholder="Pickup location"
                value={formData.from}
                onChange={(e) => handleInputChange('from', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="to">To</Label>
              <Input
                id="to"
                name="to"
                placeholder="Drop location"
                value={formData.to}
                onChange={(e) => handleInputChange('to', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Date & Time */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle & Capacity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Vehicle Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="vehicle">Vehicle Type</Label>
              <Select
                value={formData.vehicleType}
                onValueChange={(value: string) => {
                  console.log('Selected vehicle type:', value); // Debug log
                  handleInputChange('vehicleType', value);
                  // Update maxPassengers based on vehicle type
                  const maxPassengers = value === 'suv' ? 6 : value === 'car' ? 4 : 3;
                  handleInputChange('maxPassengers', Math.min(maxPassengers, formData.maxPassengers));
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Available Vehicles</SelectLabel>
                    <SelectItem key="car" value="car">Car (4-seater)</SelectItem>
                    <SelectItem key="suv" value="suv">SUV (6-seater)</SelectItem>
                    <SelectItem key="auto" value="auto">Auto Rickshaw (3-seater)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Maximum Passengers</Label>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleInputChange('maxPassengers', Math.max(1, formData.maxPassengers - 1))}
                  disabled={formData.maxPassengers <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span className="text-lg font-medium">{formData.maxPassengers}</span>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    const maxAllowed = formData.vehicleType === 'suv' ? 6 : formData.vehicleType === 'car' ? 4 : 3;
                    handleInputChange('maxPassengers', Math.min(maxAllowed, formData.maxPassengers + 1));
                  }}
                  disabled={
                    formData.maxPassengers >= (formData.vehicleType === 'suv' ? 6 : formData.vehicleType === 'car' ? 4 : 3)
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Create Button */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4">
            <Button 
              onClick={handleSubmit}
              className="w-full bg-white text-primary hover:bg-gray-100"
              size="lg"
            >
              Create Ride
            </Button>
            <p className="text-xs text-center mt-2 opacity-90">
              Fare will be negotiated among participants after ride completion
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}