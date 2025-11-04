import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { 
  ArrowLeft, 
  Star, 
  ThumbsUp, 
  ThumbsDown,
  CheckCircle2,
  Car,
  Users
} from 'lucide-react';

export function FeedbackScreen({ onNavigate }) {
  const [ratings, setRatings] = useState({});
  const [comfortFlags, setComfortFlags] = useState({});
  const [comments, setComments] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Mock completed ride data
  const completedRide = {
    id: 1,
    driver: {
      name: "Priya Singh",
      id: "driver_1"
    },
    participants: [
      { name: "Rahul Sharma", id: "participant_1" },
      { name: "Ankita Jain", id: "participant_2" }
    ],
    from: "JKLU Campus",
    to: "Pink City",
    date: "Today",
    completedAt: "5:30 PM",
    duration: "45 mins"
  };

  const allPeople = [completedRide.driver, ...completedRide.participants];

  const handleRatingChange = (personId, rating) => {
    setRatings(prev => ({
      ...prev,
      [personId]: rating
    }));
  };

  const handleComfortChange = (personId, comfort) => {
    setComfortFlags(prev => ({
      ...prev,
      [personId]: comfort
    }));
  };

  const handleCommentChange = (personId, comment) => {
    setComments(prev => ({
      ...prev,
      [personId]: comment
    }));
  };

  const handleSubmit = () => {
    // Validate that all required fields are filled
    const missingRatings = allPeople.filter(person => !ratings[person.id]);
    const missingComfort = allPeople.filter(person => !comfortFlags[person.id]);
    
    if (missingRatings.length > 0 || missingComfort.length > 0) {
      alert('Please provide ratings and comfort feedback for all riders');
      return;
    }

    setSubmitted(true);
    
    // Auto-navigate after submission
    setTimeout(() => {
      onNavigate('home');
    }, 3000);
  };

  const renderStars = (personId, currentRating) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Button
            key={star}
            variant="ghost"
            size="sm"
            className="p-1"
            onClick={() => handleRatingChange(personId, star)}
          >
            <Star 
              className={`h-6 w-6 ${
                star <= currentRating 
                  ? 'text-yellow-500 fill-current' 
                  : 'text-gray-300'
              }`} 
            />
          </Button>
        ))}
      </div>
    );
  };

  if (submitted) {
    return (
      <div className="p-4 min-h-screen flex flex-col justify-center items-center">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-green-600 mb-2">Feedback Submitted!</h1>
            <p className="text-muted-foreground">Thank you for your valuable feedback</p>
          </div>

          <Card className="max-w-sm">
            <CardContent className="p-4 text-center">
              <p className="font-medium mb-2">Ride Completed</p>
              <p className="text-sm text-muted-foreground mb-4">
                {completedRide.from} → {completedRide.to}
              </p>
              <Badge variant="default">Feedback Recorded</Badge>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            Returning to home screen...
          </p>
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
        <h1 className="text-xl">Rate Your Ride</h1>
      </div>

      <div className="space-y-6">
        {/* Ride Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Completed Ride</CardTitle>
            <CardDescription>
              Share your experience to help improve our community
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <Car className="h-5 w-5 text-primary" />
              <span>{completedRide.from} → {completedRide.to}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">
                Completed at {completedRide.completedAt} • Duration: {completedRide.duration}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Driver Feedback */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Car className="h-5 w-5" />
              <span>Rate Driver</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback>
                  {completedRide.driver.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">{completedRide.driver.name}</p>
                <p className="text-sm text-muted-foreground">Driver</p>
              </div>
            </div>

            {/* Star Rating */}
            <div>
              <Label className="text-sm font-medium">Overall Rating</Label>
              <div className="mt-2">
                {renderStars(completedRide.driver.id, ratings[completedRide.driver.id] || 0)}
              </div>
            </div>

            {/* Comfort Flag */}
            <div>
              <Label className="text-sm font-medium">How was your comfort level?</Label>
              <RadioGroup 
                value={comfortFlags[completedRide.driver.id] || ''} 
                onValueChange={(value) => handleComfortChange(completedRide.driver.id, value)}
                className="flex space-x-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id={`comfortable-${completedRide.driver.id}`} />
                  <Label htmlFor={`comfortable-${completedRide.driver.id}`} className="flex items-center space-x-1">
                    <ThumbsUp className="h-4 w-4 text-green-500" />
                    <span>Comfortable</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="uncomfortable" id={`uncomfortable-${completedRide.driver.id}`} />
                  <Label htmlFor={`uncomfortable-${completedRide.driver.id}`} className="flex items-center space-x-1">
                    <ThumbsDown className="h-4 w-4 text-red-500" />
                    <span>Uncomfortable</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Comments */}
            <div>
              <Label className="text-sm font-medium">Comments (Optional)</Label>
              <Textarea
                placeholder="Share your experience with the driver..."
                className="mt-2"
                value={comments[completedRide.driver.id] || ''}
                onChange={(e) => handleCommentChange(completedRide.driver.id, e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Participants Feedback */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Rate Fellow Passengers</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {completedRide.participants.map((participant) => (
              <div key={participant.id} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="text-sm">
                      {participant.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{participant.name}</p>
                    <p className="text-sm text-muted-foreground">Passenger</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="mb-3">
                  <Label className="text-sm font-medium">Rating</Label>
                  <div className="mt-2">
                    {renderStars(participant.id, ratings[participant.id] || 0)}
                  </div>
                </div>

                {/* Comfort Flag */}
                <div className="mb-3">
                  <Label className="text-sm font-medium">Comfort Level</Label>
                  <RadioGroup 
                    value={comfortFlags[participant.id] || ''} 
                    onValueChange={(value) => handleComfortChange(participant.id, value)}
                    className="flex space-x-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfortable" id={`comfortable-${participant.id}`} />
                      <Label htmlFor={`comfortable-${participant.id}`} className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4 text-green-500" />
                        <span>Comfortable</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="uncomfortable" id={`uncomfortable-${participant.id}`} />
                      <Label htmlFor={`uncomfortable-${participant.id}`} className="flex items-center space-x-1">
                        <ThumbsDown className="h-4 w-4 text-red-500" />
                        <span>Uncomfortable</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Comments */}
                <div>
                  <Label className="text-sm font-medium">Comments (Optional)</Label>
                  <Textarea
                    placeholder={`Share your experience with ${participant.name}...`}
                    className="mt-2"
                    value={comments[participant.id] || ''}
                    onChange={(e) => handleCommentChange(participant.id, e.target.value)}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4">
            <Button 
              onClick={handleSubmit}
              className="w-full bg-white text-primary hover:bg-gray-100"
              size="lg"
            >
              Submit Feedback
            </Button>
            <p className="text-xs text-center mt-2 opacity-90">
              Your feedback helps maintain a safe and comfortable community
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}