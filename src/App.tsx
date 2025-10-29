import React, { useEffect, useState } from "react";
import { AuthScreen } from "./components/AuthScreen";
import { HomeScreen } from "./components/HomeScreen";
import { CreateRideScreen } from "./components/CreateRideScreen";
import { FindRidesScreen } from "./components/FindRidesScreen";
import { RideDetailsScreen } from "./components/RideDetailsScreen";
import { MyRidesScreen } from "./components/MyRidesScreen";
import { ManageRideScreen } from "./components/ManageRideScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { SOSScreen } from "./components/SOSScreen";
import { PaymentScreen } from "./components/PaymentScreen";
import { FeedbackScreen } from "./components/FeedbackScreen";
import { Navigation } from "./components/Navigation";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("auth");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);
  const [previousScreen, setPreviousScreen] = useState(null);

  useEffect(() => {
    try {
      const ev = new CustomEvent('nav:changed', { detail: currentScreen });
      window.dispatchEvent(ev);
      if (currentScreen === 'rides') {
        window.dispatchEvent(new Event('nav:rides'));
      }
    } catch {}
  }, [currentScreen]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen("home");
  };

  const handleRideSelect = (ride) => {
    setSelectedRide(ride);
    setCurrentScreen("rideDetails");
  };

  const handleManageRide = (ride) => {
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
            onNavigate={setCurrentScreen}
            onRideSelect={handleRideSelect}
          />
        );
      case "createRide":
        return (
          <CreateRideScreen onNavigate={setCurrentScreen} />
        );
      case "findRides":
        return (
          <FindRidesScreen
            onNavigate={setCurrentScreen}
            onRideSelect={handleRideSelect}
          />
        );
      case "rideDetails":
        return (
          <RideDetailsScreen
            ride={selectedRide}
            onNavigate={setCurrentScreen}
          />
        );
      case "rides":
        return (
          <MyRidesScreen
            onNavigate={setCurrentScreen}
            onRideSelect={handleRideSelect}
            onManageRide={handleManageRide}
          />
        );
      case "manageRide":
        return (
          <ManageRideScreen
            ride={selectedRide}
            onNavigate={setCurrentScreen}
            onBack={handleBackFromManage}
          />
        );
      case "profile":
        return <ProfileScreen onNavigate={setCurrentScreen} />;
      case "sos":
        return <SOSScreen onNavigate={setCurrentScreen} />;
      case "payment":
        return <PaymentScreen onNavigate={setCurrentScreen} />;
      case "feedback":
        return <FeedbackScreen onNavigate={setCurrentScreen} />;
      default:
        return (
          <HomeScreen
            onNavigate={setCurrentScreen}
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
          onNavigate={setCurrentScreen}
        />
      )}
    </div>
  );
}