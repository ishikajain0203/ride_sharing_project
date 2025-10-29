import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  Plus,
  Minus
} from 'lucide-react';
import { createRide, emitRidesUpdated } from '@/utils/api';

export function CreateRideScreen({ onNavigate }) {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    maxPassengers: 3,
    vehicleType: ''
  });

  const popularRoutes = [
    { from: 'JKLU Campus', to: 'Pink City' },
    { from: 'JKLU Campus', to: 'Malviya Nagar' },
    { from: 'JKLU Campus', to: 'Mansarovar' },
    { from: 'JKLU Campus', to: 'Railway Station' }
  ];

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRouteSelect = (route) => {
    setFormData({
      ...formData,
      from: route.from,
      to: route.to
    });
  };

  const handleSubmit = async () => {
    // Validate form
    if (!formData.from || !formData.to || !formData.date || !formData.time || !formData.vehicleType) {
      alert('Please fill all required fields');
      return;
    }
    try {
      const startDate = formData.date; // YYYY-MM-DD
      const startTime = new Date(`${formData.date}T${formData.time}:00`);
      await createRide({
        start_location: formData.from,
        end_location: formData.to,
        start_date: startDate,
        start_time: startTime.toISOString(),
        total_fare: 100 * Math.max(1, formData.maxPassengers), // simple placeholder
      });
      emitRidesUpdated();
      alert('Ride created successfully!');
      onNavigate('home');
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
              <Select onValueChange={(value) => handleInputChange('vehicleType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="car">Car (4-seater)</SelectItem>
                  <SelectItem value="suv">SUV (6-seater)</SelectItem>
                  <SelectItem value="auto">Auto Rickshaw</SelectItem>
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
                  onClick={() => handleInputChange('maxPassengers', Math.min(6, formData.maxPassengers + 1))}
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