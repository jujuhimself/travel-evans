import { ArrowLeft, Calendar, MapPin, Plane, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Bookings = () => {
  const mockBookings = [
    {
      id: 'VIS001',
      type: 'visa',
      title: 'US Tourist Visa',
      country: 'United States',
      status: 'processing',
      submittedDate: '2024-01-15',
      expectedDate: '2024-01-20',
      details: 'Tourist visa application for vacation trip'
    },
    {
      id: 'FLT002',
      type: 'flight',
      title: 'JFK to LHR',
      airline: 'British Airways',
      status: 'confirmed',
      departureDate: '2024-02-10',
      departureTime: '10:15',
      details: 'Economy class, 1 adult passenger'
    },
    {
      id: 'VIS003',
      type: 'visa',
      title: 'UK Business Visa',
      country: 'United Kingdom',
      status: 'approved',
      submittedDate: '2024-01-08',
      approvedDate: '2024-01-12',
      details: 'Business visa for conference attendance'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
      case 'approved':
        return 'bg-success text-success-foreground';
      case 'processing':
        return 'bg-warning text-warning-foreground';
      case 'pending':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
      case 'approved':
        return <CheckCircle className="h-4 w-4" />;
      case 'processing':
        return <Clock className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground">My Bookings</h1>
          <p className="text-muted-foreground">Track your visa applications and flight bookings</p>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {mockBookings.map((booking) => (
            <Card key={booking.id} className="card-travel p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  {/* Icon */}
                  <div className="gradient-sky p-3 rounded-lg shadow-soft">
                    {booking.type === 'visa' ? (
                      <MapPin className="h-6 w-6 text-white" />
                    ) : (
                      <Plane className="h-6 w-6 text-white" />
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold">{booking.title}</h3>
                      <Badge className={getStatusColor(booking.status)}>
                        {getStatusIcon(booking.status)}
                        <span className="ml-1 capitalize">{booking.status}</span>
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground">{booking.details}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      {booking.type === 'visa' ? (
                        <>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Submitted: {new Date(booking.submittedDate).toLocaleDateString()}
                          </div>
                          {booking.status === 'processing' && booking.expectedDate && (
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              Expected: {new Date(booking.expectedDate).toLocaleDateString()}
                            </div>
                          )}
                          {booking.status === 'approved' && booking.approvedDate && (
                            <div className="flex items-center gap-1">
                              <CheckCircle className="h-4 w-4" />
                              Approved: {new Date(booking.approvedDate).toLocaleDateString()}
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(booking.departureDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {booking.departureTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Plane className="h-4 w-4" />
                            {booking.airline}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" className="btn-secondary">
                    View Details
                  </Button>
                  {booking.status === 'confirmed' && booking.type === 'flight' && (
                    <Button className="btn-travel">
                      Check In
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {mockBookings.length === 0 && (
          <Card className="card-travel p-12 text-center">
            <div className="space-y-4">
              <div className="gradient-sky p-4 rounded-full w-fit mx-auto opacity-50">
                <Plane className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold">No bookings yet</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Start your journey by booking a visa or flight. Your bookings will appear here.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/visa-booking">
                  <Button className="btn-travel">Book Visa</Button>
                </Link>
                <Link to="/flight-booking">
                  <Button className="btn-accent">Book Flight</Button>
                </Link>
              </div>
            </div>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;