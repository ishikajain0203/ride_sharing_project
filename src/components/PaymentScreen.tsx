import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Alert, AlertDescription } from './ui/alert';
import { 
  ArrowLeft, 
  IndianRupee, 
  CreditCard, 
  Smartphone,
  QrCode,
  CheckCircle2,
  Clock,
  Shield
} from 'lucide-react';

export function PaymentScreen({ onNavigate }) {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [paymentStatus, setPaymentStatus] = useState('pending'); // pending, processing, success, failed
  const [showQR, setShowQR] = useState(false);

  const rideDetails = {
    driver: "Priya Singh",
    from: "JKLU Campus",
    to: "Pink City",
    date: "Today",
    time: "4:00 PM",
    fare: 150,
    bookingFee: 0,
    total: 150
  };

  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: Smartphone, description: 'Pay via UPI apps' },
    { id: 'qr', name: 'QR Code', icon: QrCode, description: 'Scan QR to pay' },
    { id: 'wallet', name: 'JKLU Wallet', icon: CreditCard, description: 'Balance: ₹500' }
  ];

  const handlePayment = () => {
    setPaymentStatus('processing');
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus('success');
      // Auto-navigate after success
      setTimeout(() => {
        onNavigate('home');
      }, 3000);
    }, 2000);
  };

  const handleQRPayment = () => {
    setShowQR(true);
    // Simulate QR payment detection
    setTimeout(() => {
      setPaymentStatus('success');
      setTimeout(() => {
        onNavigate('home');
      }, 3000);
    }, 5000);
  };

  if (paymentStatus === 'success') {
    return (
      <div className="p-4 min-h-screen flex flex-col justify-center items-center">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h1>
            <p className="text-muted-foreground">Your ride has been booked</p>
          </div>

          <Card className="max-w-sm">
            <CardContent className="p-4 text-center">
              <p className="font-medium mb-2">Booking Confirmed</p>
              <p className="text-sm text-muted-foreground mb-4">
                {rideDetails.from} → {rideDetails.to}
              </p>
              <Badge variant="default">₹{rideDetails.total} Paid</Badge>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            Redirecting to home screen...
          </p>
        </div>
      </div>
    );
  }

  if (showQR) {
    return (
      <div className="p-4 pb-20">
        <div className="flex items-center space-x-3 mb-6 pt-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setShowQR(false)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl">Scan QR Code</h1>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <QrCode className="h-16 w-16 text-gray-400" />
              </div>
              <p className="font-medium mb-2">Scan to Pay ₹{rideDetails.total}</p>
              <p className="text-sm text-muted-foreground">
                Use any UPI app to scan and pay
              </p>
            </CardContent>
          </Card>

          <Alert>
            <Clock className="h-4 w-4" />
            <AlertDescription>
              Waiting for payment confirmation... This usually takes a few seconds.
            </AlertDescription>
          </Alert>

          <Button 
            variant="outline" 
            onClick={() => setShowQR(false)}
            className="w-full"
          >
            Try Different Payment Method
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
          onClick={() => onNavigate('rideDetails')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl">Payment</h1>
      </div>

      <div className="space-y-6">
        {/* Ride Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Ride Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Driver</span>
              <span className="font-medium">{rideDetails.driver}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Route</span>
              <span className="text-sm">{rideDetails.from} → {rideDetails.to}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Date & Time</span>
              <span className="text-sm">{rideDetails.date}, {rideDetails.time}</span>
            </div>
          </CardContent>
        </Card>

        {/* Fare Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Fare Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Trip fare</span>
              <span>₹{rideDetails.fare}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Booking fee</span>
              <span>₹{rideDetails.bookingFee}</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center font-medium text-lg">
              <span>Total</span>
              <div className="flex items-center space-x-1">
                <IndianRupee className="h-5 w-5" />
                <span>{rideDetails.total}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Choose your preferred payment method</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === method.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:bg-secondary/50'
                  }`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="h-6 w-6" />
                    <div className="flex-1">
                      <p className="font-medium">{method.name}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                    {paymentMethod === method.id && (
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>
            Your payment is secured with 256-bit encryption. Money will only be transferred after ride completion.
          </AlertDescription>
        </Alert>

        {/* Payment Buttons */}
        <div className="space-y-3">
          {paymentMethod === 'qr' ? (
            <Button 
              onClick={handleQRPayment}
              className="w-full"
              size="lg"
              disabled={paymentStatus === 'processing'}
            >
              {paymentStatus === 'processing' ? 'Processing...' : 'Generate QR Code'}
            </Button>
          ) : (
            <Button 
              onClick={handlePayment}
              className="w-full"
              size="lg"
              disabled={paymentStatus === 'processing'}
            >
              {paymentStatus === 'processing' ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing Payment...</span>
                </div>
              ) : (
                `Pay ₹${rideDetails.total}`
              )}
            </Button>
          )}
          
          <Button 
            variant="outline"
            onClick={() => onNavigate('rideDetails')}
            className="w-full"
            disabled={paymentStatus === 'processing'}
          >
            Cancel
          </Button>
        </div>

        {/* Terms */}
        <p className="text-xs text-muted-foreground text-center">
          By proceeding with payment, you agree to our Terms & Conditions and Cancellation Policy.
        </p>
      </div>
    </div>
  );
}