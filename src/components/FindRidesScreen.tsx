import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Search, 
  MapPin, 
  Clock, 
  Users, 
  Car, 
  Star,
  Filter,
  SlidersHorizontal
} from 'lucide-react';
import { searchRides } from '../utils/api';

import type { Screen } from '../types/navigation';

interface FindRidesScreenProps {
  onNavigate: (screen: Screen) => void;
  onRideSelect: (ride: any) => void;
}

export function FindRidesScreen({ onNavigate, onRideSelect }: FindRidesScreenProps) {
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const [availableRides, setAvailableRides] = useState<any[]>([]);

  const runSearch = async () => {
    setLoading(true);
    try {
      const data = await searchRides({ start: searchFrom, end: searchTo });
      const mapped = data.map((r: any) => ({
        ride_id: r.ride_id,
        id: r.ride_id,
        driver: r.driver?.name || 'Driver',
        driver_id: r.driver_id, // Add driver_id for validation
        driverRating: r.driver?.rating ?? 4.5,
        from: r.start_location,
        to: r.end_location,
        date: new Date(r.start_date).toLocaleDateString(),
        time: new Date(r.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        fare: `₹${Number(r.total_fare)}`,
        total_fare: r.total_fare, // Add raw fare amount
        // include host as a rider in count and list
        participants: ((r.participants?.filter((p: any) => p.status === 'booked')?.length) ?? 0) + 1,
        participantDetails: [
          { name: r.driver?.name || 'Driver', rating: r.driver?.rating ?? 4.5 },
          ...(
            r.participants
              ?.filter((p: any) => p.status === 'booked')
              ?.map((p: any) => ({ name: p.user.name, rating: p.user.rating })) || []
          )
        ],
        maxParticipants: r.max_passengers || 4,
        vehicleType: r.vehicle?.vehicle_type || 'Car',
        estimatedTime: '—',
        // Add any additional fields needed for booking
        driverPhone: r.driver?.phone || '',
        pickupPoint: r.start_location,
        dropPoint: r.end_location,
        start_date: r.start_date, // Add raw date
        start_time: r.start_time, // Add raw time
        start_location: r.start_location,
        end_location: r.end_location,
        max_passengers: r.max_passengers,
        vehicle_id: r.vehicle_id,
        vehicleNumber: r.vehicle?.vehicle_number || '',
        status: r.status // Add ride status
      }));
      setAvailableRides(mapped);
    } catch (e) {
      console.error('Search error:', e);
      setAvailableRides([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runSearch();
  }, []);

  const quickSearches = [
    "Pink City",
    "Malviya Nagar", 
    "Railway Station",
    "Mansarovar",
    "Airport"
  ];

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
        <h1 className="text-xl">Find Rides</h1>
        <div className="ml-auto">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Search Filters */}
      <Card className="mb-4">
        <CardContent className="p-4 space-y-3">
          <div className="flex space-x-2">
            <div className="flex-1">
              <Input
                id="search-from"
                name="searchFrom"
                placeholder="From (JKLU Campus)"
                value={searchFrom}
                onChange={(e) => setSearchFrom(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" onClick={runSearch}>
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          <Input
            id="search-to"
            name="searchTo"
            placeholder="To destination"
            value={searchTo}
            onChange={(e) => setSearchTo(e.target.value)}
          />

          {/* Quick Search Tags */}
          <div className="flex flex-wrap gap-2">
            {quickSearches.map((destination) => (
              <Badge 
                key={destination}
                variant="secondary" 
                className="cursor-pointer"
                onClick={() => setSearchTo(destination)}
              >
                {destination}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filters Panel */}
      {showFilters && (
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="space-y-3">
              <h3 className="font-medium">Filters</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Today</Badge>
                <Badge variant="outline">Tomorrow</Badge>
                <Badge variant="outline">This Week</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Car</Badge>
                <Badge variant="outline">SUV</Badge>
                <Badge variant="outline">Auto</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Available Rides */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg">Available Rides</h2>
          <span className="text-sm text-muted-foreground">{loading ? 'Loading...' : `${availableRides.length} rides found`}</span>
        </div>

        {availableRides.map((ride) => (
          <Card 
            key={ride.id} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => {
              // Pass the complete ride object to the details screen
              const completeRide = {
                ...ride,
                // Convert the formatted fare back to number if needed
                total_fare: typeof ride.total_fare === 'number' ? ride.total_fare : parseFloat(ride.fare.replace('₹', '')),
              };
              onRideSelect(completeRide);
            }}
          >
            <CardContent className="p-4">
              {/* Driver Info */}
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
                      <span className="text-sm text-muted-foreground">• {ride.vehicleType}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{ride.fare}</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </div>

              {/* Route Info */}
              <div className="flex items-center space-x-2 text-sm mb-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="font-medium">{ride.from}</span>
                <span className="text-muted-foreground">→</span>
                <span className="font-medium">{ride.to}</span>
              </div>

              {/* Time and Duration */}
              <div className="flex items-center space-x-4 text-sm mb-3">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span>{ride.date}, {ride.time}</span>
                </div>
                <span className="text-muted-foreground">• {ride.estimatedTime}</span>
              </div>

              {/* Participants and Action */}
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{ride.participants}/{ride.maxParticipants} riders</span>
                  
                  {ride.participants === ride.maxParticipants && (
                    <Badge variant="destructive" className="text-xs">Full</Badge>
                  )}
                  {ride.maxParticipants - ride.participants === 1 && ride.participants < ride.maxParticipants && (
                    <Badge variant="outline" className="text-xs">1 spot left</Badge>
                  )}
                </div>

                <Button 
                  size="sm"
                  disabled={ride.participants === ride.maxParticipants}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation(); // Prevent triggering the card click
                    const completeRide = {
                      ...ride,
                      ride_id: ride.ride_id,
                      id: ride.ride_id,
                      driver: ride.driver,
                      driverRating: ride.driverRating,
                      driverPhone: ride.driverPhone || '',
                      from: ride.from || ride.start_location,
                      to: ride.to || ride.end_location,
                      date: ride.date,
                      time: ride.time,
                      fare: ride.fare,
                      total_fare: ride.total_fare,
                      participants: ride.participants,
                      maxParticipants: ride.maxParticipants || ride.max_passengers || 4,
                      participantDetails: ride.participantDetails || [],
                      vehicleType: ride.vehicleType || ride.vehicle_type || 'Car',
                      vehicleNumber: ride.vehicleNumber || '',
                      estimatedTime: ride.estimatedTime || '—',
                      pickupPoint: ride.pickupPoint || ride.start_location || '',
                      dropPoint: ride.dropPoint || ride.end_location || ''
                    };
                    onRideSelect(completeRide);
                  }}
                >
                  {ride.participants === ride.maxParticipants ? 'Full' : 'Book'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {availableRides.length === 0 && (
        <div className="text-center py-8">
          <Car className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No rides found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search criteria</p>
          <Button onClick={() => onNavigate('createRide')}>
            Create a Ride
          </Button>
        </div>
      )}
    </div>
  );
}