import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Shield, Users, Car, UserPlus } from 'lucide-react';
import { login, register, setAuthToken } from '@/utils/api';

export function AuthScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEmailSubmit = () => {
    if (!email.endsWith('@jklu.edu.in')) {
      setError('Please use your JKLU email address (@jklu.edu.in)');
      return;
    }
    setError('');
    setShowLogin(true);
  };

  const handleLogin = async () => {
    if (!password) {
      setError('Please enter your password');
      return;
    }
    try {
      const { token } = await login(email, password);
      setAuthToken(token);
      setError('');
      onLogin();
    } catch (e: any) {
      setError(e?.message || 'Login failed');
    }
  };

  const handleRegister = async () => {
    if (!name || !password) {
      setError('Please fill in all required fields');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    try {
      const { token, user } = await register(name, email, password, phone);
      setAuthToken(token);
      setError('');
      setSuccess(`Welcome ${user.name}! Your account has been created successfully.`);
      setTimeout(() => {
        onLogin();
      }, 2000);
    } catch (e: any) {
      setError(e?.message || 'Registration failed');
    }
  };

  if (!showLogin && !showRegister) {
    return (
      <div className="p-6 min-h-screen flex flex-col">
        {/* Logo and Header */}
        <div className="text-center pt-16 pb-8">
          <div className="w-20 h-20 bg-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Car className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-3xl mb-2">JKLU Rides</h1>
          <p className="text-muted-foreground">Safe & affordable rides for JKLU community</p>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Users className="h-5 w-5 text-secondary-foreground" />
            </div>
            <div>
              <h3>Community Only</h3>
              <p className="text-sm text-muted-foreground">Exclusive to JKLU students & staff</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Shield className="h-5 w-5 text-secondary-foreground" />
            </div>
            <div>
              <h3>Safe & Secure</h3>
              <p className="text-sm text-muted-foreground">Verified users with SOS emergency features</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Car className="h-5 w-5 text-secondary-foreground" />
            </div>
            <div>
              <h3>Cost Effective</h3>
              <p className="text-sm text-muted-foreground">Split fares automatically with fellow riders</p>
            </div>
          </div>
        </div>

        {/* Email Input */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>Enter your JKLU email to continue</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.name@jklu.edu.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button onClick={handleEmailSubmit} className="w-full">
              Continue
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowRegister(true)} 
              className="w-full"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Create New Account
            </Button>
          </CardContent>
        </Card>

        <p className="text-xs text-muted-foreground text-center">
          By continuing, you agree to our Terms of Service and acknowledge that you are a member of the JKLU community.
        </p>
      </div>
    );
  }

  if (showRegister) {
    return (
      <div className="p-6 min-h-screen flex flex-col justify-center">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <UserPlus className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl mb-2">Create Account</h1>
          <p className="text-muted-foreground">{email}</p>
        </div>

        <Card>
          <CardContent className="space-y-4 pt-6">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number (Optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Create Password (min 8 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {success && (
              <Alert>
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}
            <Button onClick={handleRegister} className="w-full">
              Create Account
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowRegister(false)} 
              className="w-full"
            >
              Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen flex flex-col justify-center">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
          <Car className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="text-2xl mb-2">Welcome Back</h1>
        <p className="text-muted-foreground">{email}</p>
      </div>

      <Card>
        <CardContent className="space-y-4 pt-6">
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button onClick={handleLogin} className="w-full">
            Sign In
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setShowLogin(false)} 
            className="w-full"
          >
            Back
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => {
              setShowLogin(false);
              setShowRegister(true);
            }} 
            className="w-full"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Don't have an account? Create one
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}