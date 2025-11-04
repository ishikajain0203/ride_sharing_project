import React, { useEffect, useState } from "react";
import { AuthScreen } from "./components/AuthScreen";
import { HomeScreen } from "./components/HomeScreen";
import { CreateRideScreen } from "./components/CreateRideScreen";
import { FindRidesScreen } from "./components/FindRidesScreen";
import { RideDetailsScreen } from "./components/RideDetailsScreen";
import { MyRidesScreen } from "./components/MyRidesScreen";
import { ManageRideScreen } from "./components/ManageRideScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { EditProfileScreen } from "./components/EditProfileScreen";
import { SOSScreen } from "./components/SOSScreen";
import { PaymentScreen } from "./components/PaymentScreen";
import { FeedbackScreen } from "./components/FeedbackScreen";
import { Navigation } from "./components/Navigation";
import { fetchMe } from "./utils/api";

import type { Screen } from './types/navigation';

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
  status?: string;
}

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  role?: string;
  rating?: number;
  credibility_score?: number;
  cancellation_count?: number;
  created_at?: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("auth");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedRide, setSelectedRide] = useState<RideData | null>(null);
  const [previousScreen, setPreviousScreen] = useState<Screen | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '',
    email: '',
    phone: ''
  });

  // Initial authentication check
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await fetchMe();
        if (userData) {
          setIsAuthenticated(true);
          setUserProfile(userData);
          if (currentScreen === 'auth') {
            setCurrentScreen('home');
          }
        }
      } catch (error) {
        setIsAuthenticated(false);
        setCurrentScreen('auth');
      }
    };
    checkAuth();
  }, []);

  // Handle authentication state
  useEffect(() => {
    const handleSignOut = () => {
      setIsAuthenticated(false);
      setCurrentScreen("auth");
      setSelectedRide(null);
      setPreviousScreen(null);
    };

    window.addEventListener('auth:signout', handleSignOut);
    return () => window.removeEventListener('auth:signout', handleSignOut);
  }, []);

  // Handle navigation events
  // Handle navigation and auth state
  useEffect(() => {
    try {
      // Emit navigation event
      const ev = new CustomEvent('nav:changed', { detail: currentScreen });
      window.dispatchEvent(ev);
      
      // Emit rides event if needed
      if (currentScreen === 'rides') {
        window.dispatchEvent(new Event('nav:rides'));
      }
      
      // Check authentication on auth screen
      if (currentScreen === 'auth' && isAuthenticated) {
        setCurrentScreen('home');
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }, [currentScreen, isAuthenticated]);

  // Handle profile updates
  useEffect(() => {
    const fetchUserData = async () => {
      if (!isAuthenticated) return;
      try {
        const userData = await fetchMe();
        setUserProfile(userData);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();

    const handleProfileUpdate = () => {
      fetchUserData();
    };

    window.addEventListener('profile:updated', handleProfileUpdate);
    return () => {
      window.removeEventListener('profile:updated', handleProfileUpdate);
    };
  }, [isAuthenticated]);

  const handleNavigation = (screen: Screen) => {
    // Map navigation screens to app screens
    const screenMap: Record<string, Screen> = {
      myRides: 'rides',
      editProfile: 'editProfile',
      // add other mappings as needed
    };
    
    setCurrentScreen(screenMap[screen] || screen);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    handleNavigation('home');
  };

  const handleRideSelect = (ride: any) => {
    // Ensure the ride object has all required fields
    const formattedRide: RideData = {
      ride_id: ride.id || ride.ride_id || '',
      id: ride.id || ride.ride_id || '',
      driver: ride.driver || '',
      driverRating: ride.driverRating || 0,
      driverPhone: ride.driverPhone || '',
      from: ride.from || ride.start_location || '',
      to: ride.to || ride.end_location || '',
      date: ride.date || new Date(ride.start_date).toLocaleDateString() || '',
      time: ride.time || new Date(ride.start_time).toLocaleTimeString() || '',
      fare: typeof ride.fare === 'string' ? ride.fare : `₹${ride.total_fare}`,
      participants: ride.participants || 0,
      maxParticipants: ride.maxParticipants || ride.max_passengers || 4,
      participantDetails: ride.participantDetails || [],
      vehicleType: ride.vehicleType || ride.vehicle_type || 'Car',
      vehicleNumber: ride.vehicleNumber || ride.vehicle_number || '',
      estimatedTime: ride.estimatedTime || '—',
      pickupPoint: ride.pickupPoint || ride.start_location || '',
      dropPoint: ride.dropPoint || ride.end_location || '',
      // Optional fields
      driver_id: ride.driver_id,
      total_fare: ride.total_fare,
      start_location: ride.start_location,
      end_location: ride.end_location,
      start_date: ride.start_date,
      start_time: ride.start_time,
      max_passengers: ride.max_passengers,
      vehicle_id: ride.vehicle_id,
      status: ride.status
    };
    
    setSelectedRide(formattedRide);
    setCurrentScreen("rideDetails");
  };

  const handleManageRide = (ride: RideData) => {
    setSelectedRide(ride);
    setPreviousScreen(currentScreen);
    setCurrentScreen("manageRide");
  };

  const handleBackFromManage = () => {
    setCurrentScreen(previousScreen || "rides");
  };

  const renderScreen = () => {
    if (!isAuthenticated) {
      return <AuthScreen onLogin={handleLogin} />;
    }

    switch (currentScreen) {
      case "home":
        return (
          <HomeScreen
            onNavigate={handleNavigation}
            onRideSelect={handleRideSelect}
          />
        );
      case "createRide":
        return (
          <CreateRideScreen onNavigate={handleNavigation} />
        );
      case "findRides":
        return (
          <FindRidesScreen
            onNavigate={handleNavigation}
            onRideSelect={handleRideSelect}
          />
        );
      case "rideDetails":
        return selectedRide ? (
          <RideDetailsScreen
            ride={selectedRide}
            onNavigate={handleNavigation as (screen: string) => void}
          />
        ) : (
          <div className="p-4">
            <h2>Loading ride details...</h2>
          </div>
        );
      case "rides":
        return (
          <MyRidesScreen
            onNavigate={handleNavigation as (screen: string) => void}
            onRideSelect={handleRideSelect}
            onManageRide={handleManageRide}
          />
        );
      case "manageRide":
        return (
          <ManageRideScreen
            ride={selectedRide}
            onNavigate={handleNavigation}
            onBack={handleBackFromManage}
          />
        );
      case "profile":
        return <ProfileScreen onNavigate={handleNavigation} />;
      case "editProfile":
        return <EditProfileScreen onNavigate={handleNavigation} userProfile={userProfile} />;
      case "sos":
        return <SOSScreen onNavigate={handleNavigation} />;
      case "payment":
        return <PaymentScreen onNavigate={handleNavigation} />;
      case "feedback":
        return <FeedbackScreen onNavigate={handleNavigation} />;
      default:
        return (
          <HomeScreen
            onNavigate={handleNavigation}
            onRideSelect={handleRideSelect}
          />
        );
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-background min-h-screen relative">
      {renderScreen()}
      {isAuthenticated && currentScreen !== "sos" && currentScreen !== "manageRide" && (
        <Navigation
          currentScreen={currentScreen}
          onNavigate={handleNavigation}
        />
      )}
    </div>
  );
}