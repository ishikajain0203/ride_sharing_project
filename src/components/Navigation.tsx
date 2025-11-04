import React from 'react';
import { Button } from './ui/button';
import { 
  Home, 
  Search, 
  Plus, 
  User, 
  Car 
} from 'lucide-react';

import type { Screen } from '../types/navigation';

interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  const navItems: Array<{id: Screen; label: string; icon: any}> = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'findRides', label: 'Find', icon: Search },
    { id: 'createRide', label: 'Create', icon: Plus },
    { id: 'rides', label: 'My Rides', icon: Car },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-background border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center space-y-1 h-auto py-2 px-3 ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'fill-current' : ''}`} />
              <span className="text-xs">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}