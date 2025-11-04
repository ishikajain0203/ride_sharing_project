/// <reference types="react" />
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';
import { 
  ArrowLeft, 
  Star, 
  Car, 
  Users, 
  Shield, 
  Settings,
  Edit,
  Phone,
  Mail,
  Award,
  History,
  CreditCard,
  Bell,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { fetchMe, fetchMyRides, getAuthToken, setAuthToken } from '../utils/api';

declare module 'react' {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    // Add custom attributes here
    className?: string;
  }
}

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  role: string;
  credibilityScore: number;
  totalRides: number;
  ridesHosted: number;
  ridesJoined: number;
  cancellationCount: number;
  joinDate: string;
}

interface Achievement {
  title: string;
  icon: React.FC<{ className?: string }>;
  description: string;
}

interface Activity {
  type: 'completed' | 'hosted' | 'feedback';
  title: string;
  date: string;
  rating?: number;
  participants?: number;
  from?: string;
}

import type { Screen } from '../types/navigation';

interface ProfileScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const [notifications, setNotifications] = useState(true);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const fetchUserProfile = async () => {
    try {
      // Check if we have a valid auth token
      const token = getAuthToken();
      if (!token) {
        onNavigate('auth');
        return;
      }

      const me = await fetchMe();
      if (!me) {
        throw new Error('Failed to fetch user data');
      }

      setUserProfile({
        name: me.name || 'User',
        email: me.email || '',
        phone: me.phone || '',
        role: me.role === 'committee_admin' ? 'Committee Admin' : 'Student',
        credibilityScore: Number(me.rating) || 4.7,
        totalRides: me.totalRides || 0,
        ridesHosted: me.ridesHosted || 0,
        ridesJoined: me.ridesJoined || 0,
        cancellationCount: me.cancellationCount || 0,
        joinDate: me.created_at ? 
          new Date(me.created_at).toLocaleString('en-US', { month: 'long', year: 'numeric' }) :
          'Recently joined',
      });
    } catch (e) {
      console.error('Error fetching profile:', e);
      // If there's an authentication error, redirect to auth screen
      if (e instanceof Error && (
        e.message.includes('unauthorized') || 
        e.message.includes('token') || 
        e.message.includes('auth')
      )) {
        setAuthToken('');
        onNavigate('auth');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();

    const onRidesUpdated = () => {
      fetchUserProfile();
    };

    window.addEventListener('rides:updated', onRidesUpdated);
    window.addEventListener('nav:rides', onRidesUpdated);
    
    return () => {
      window.removeEventListener('rides:updated', onRidesUpdated);
      window.removeEventListener('nav:rides', onRidesUpdated);
    };
  }, []);

  const recentActivity: Activity[] = [
    {
      type: "completed",
      title: "Ride to Pink City",
      date: "2 days ago",
      rating: 4.8
    },
    {
      type: "hosted",
      title: "Hosted ride to Railway Station",
      date: "1 week ago", 
      participants: 4
    },
    {
      type: "feedback",
      title: "Received 5-star rating",
      date: "1 week ago",
      from: "Rahul Sharma"
    }
  ];

  const achievements: Achievement[] = [
    { title: "Reliable Rider", icon: Award, description: "Completed 25+ rides" },
    { title: "Good Host", icon: Users, description: "Hosted 10+ rides" },
    { title: "Safety First", icon: Shield, description: "No safety incidents" }
  ];

  if (loading || !userProfile) {
    return (
      <div className="p-4 pb-20">
        <h1 className="text-xl">Profile</h1>
        <p className="text-muted-foreground">Loading...</p>
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
        <h1 className="text-xl">Profile</h1>
                  <div className="ml-auto">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onNavigate('editProfile')}
            >
              <Edit className="h-5 w-5" />
            </Button>
          </div>
      </div>

      <div className="space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-medium">{userProfile.name}</h2>
                <p className="text-muted-foreground">{userProfile.role}</p>
                <p className="text-sm text-muted-foreground">Member since {userProfile.joinDate}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-medium">{userProfile.credibilityScore}</span>
                </div>
                <p className="text-xs text-muted-foreground">Rating</p>
              </div>
              <div>
                <p className="font-medium">{userProfile.totalRides}</p>
                <p className="text-xs text-muted-foreground">Total Rides</p>
              </div>
              <div>
                <p className="font-medium">{userProfile.cancellationCount}</p>
                <p className="text-xs text-muted-foreground">Cancellations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">{userProfile.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">{userProfile.phone}</span>
            </div>
          </CardContent>
        </Card>

        {/* Ride Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Ride Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-secondary rounded-lg">
                <Car className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">{userProfile.ridesHosted}</p>
                <p className="text-xs text-muted-foreground">Rides Hosted</p>
              </div>
              <div className="text-center p-3 bg-secondary rounded-lg">
                <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">{userProfile.ridesJoined}</p>
                <p className="text-xs text-muted-foreground">Rides Joined</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'completed' ? 'bg-green-500' :
                    activity.type === 'hosted' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                  {activity.rating && (
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs">{activity.rating}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span>Push Notifications</span>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>

            <Separator />

            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => onNavigate('payment')}
            >
              <CreditCard className="h-5 w-5 mr-3" />
              Payment Methods
            </Button>

            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => onNavigate('myRides')}
            >
              <History className="h-5 w-5 mr-3" />
              Ride History
            </Button>

            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => window.open('https://support.jklu.edu.in', '_blank')}
            >
              <HelpCircle className="h-5 w-5 mr-3" />
              Help & Support
            </Button>

            <Separator />

            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-600"
              onClick={() => {
                // Clear auth token and other stored data
                setAuthToken('');
                localStorage.clear();
                // Force reload state by dispatching an event
                window.dispatchEvent(new Event('auth:signout'));
                // Navigate to login screen
                onNavigate('auth');
              }}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}