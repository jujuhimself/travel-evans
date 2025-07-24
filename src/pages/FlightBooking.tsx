import { useState } from "react";
import { ArrowLeft, Plane, Calendar, Users, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const FlightBooking = () => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: { adults: 1, children: 0 },
    tripType: 'roundtrip'
  });
  
  const [showResults, setShowResults] = useState(false);

  const airports = [
    { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York' },
    { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles' },
    { code: 'LHR', name: 'London Heathrow Airport', city: 'London' },
    { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris' },
    { code: 'NRT', name: 'Narita International Airport', city: 'Tokyo' },
    { code: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore' },
    { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai' }
  ];

  const mockFlights = [
    {
      id: 1,
      airline: 'Emirates',
      departure: { time: '08:30', airport: 'JFK' },
      arrival: { time: '14:45', airport: 'LHR' },
      duration: '7h 15m',
      price: 450,
      stops: 'Direct'
    },
    {
      id: 2,
      airline: 'British Airways',
      departure: { time: '10:15', airport: 'JFK' },
      arrival: { time: '16:30', airport: 'LHR' },
      duration: '7h 15m',
      price: 520,
      stops: 'Direct'
    },
    {
      id: 3,
      airline: 'Virgin Atlantic',
      departure: { time: '15:20', airport: 'JFK' },
      arrival: { time: '21:35', airport: 'LHR' },
      duration: '7h 15m',
      price: 380,
      stops: 'Direct'
    }
  ];

  const handleSearch = () => {
    setShowResults(true);
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
          <h1 className="text-3xl font-bold text-foreground">Book Flight</h1>
          <p className="text-muted-foreground">Find and book the perfect flight for your journey</p>
        </div>

        {/* Search Form */}
        <Card className="card-travel p-6 mb-8">
          <div className="space-y-6">
            {/* Trip Type */}
            <div className="flex gap-4">
              <Button 
                variant={searchData.tripType === 'roundtrip' ? 'default' : 'outline'}
                onClick={() => setSearchData({...searchData, tripType: 'roundtrip'})}
                className={searchData.tripType === 'roundtrip' ? 'btn-travel' : ''}
              >
                Round Trip
              </Button>
              <Button 
                variant={searchData.tripType === 'oneway' ? 'default' : 'outline'}
                onClick={() => setSearchData({...searchData, tripType: 'oneway'})}
                className={searchData.tripType === 'oneway' ? 'btn-travel' : ''}
              >
                One Way
              </Button>
            </div>

            {/* Flight Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="from">From</Label>
                <Select value={searchData.from} onValueChange={(value) => setSearchData({...searchData, from: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Departure city" />
                  </SelectTrigger>
                  <SelectContent>
                    {airports.map((airport) => (
                      <SelectItem key={airport.code} value={airport.code}>
                        <div className="flex flex-col">
                          <span className="font-medium">{airport.city}</span>
                          <span className="text-sm text-muted-foreground">{airport.code} - {airport.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="to">To</Label>
                <Select value={searchData.to} onValueChange={(value) => setSearchData({...searchData, to: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Destination city" />
                  </SelectTrigger>
                  <SelectContent>
                    {airports.map((airport) => (
                      <SelectItem key={airport.code} value={airport.code}>
                        <div className="flex flex-col">
                          <span className="font-medium">{airport.city}</span>
                          <span className="text-sm text-muted-foreground">{airport.code} - {airport.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="departDate">Departure Date</Label>
                <Input 
                  id="departDate"
                  type="date"
                  value={searchData.departDate}
                  onChange={(e) => setSearchData({...searchData, departDate: e.target.value})}
                />
              </div>

              {searchData.tripType === 'roundtrip' && (
                <div>
                  <Label htmlFor="returnDate">Return Date</Label>
                  <Input 
                    id="returnDate"
                    type="date"
                    value={searchData.returnDate}
                    onChange={(e) => setSearchData({...searchData, returnDate: e.target.value})}
                  />
                </div>
              )}
            </div>

            {/* Passengers */}
            <div className="flex gap-4">
              <div>
                <Label>Adults</Label>
                <Select 
                  value={searchData.passengers.adults.toString()} 
                  onValueChange={(value) => setSearchData({
                    ...searchData, 
                    passengers: {...searchData.passengers, adults: parseInt(value)}
                  })}
                >
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Children</Label>
                <Select 
                  value={searchData.passengers.children.toString()} 
                  onValueChange={(value) => setSearchData({
                    ...searchData, 
                    passengers: {...searchData.passengers, children: parseInt(value)}
                  })}
                >
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[0,1,2,3,4].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handleSearch}
              className="btn-travel w-full md:w-auto"
              disabled={!searchData.from || !searchData.to || !searchData.departDate}
            >
              <Search className="h-4 w-4 mr-2" />
              Search Flights
            </Button>
          </div>
        </Card>

        {/* Flight Results */}
        {showResults && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Available Flights</h2>
              <Button variant="outline" className="btn-secondary">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="space-y-4">
              {mockFlights.map((flight) => (
                <Card key={flight.id} className="card-travel p-6 hover:scale-[1.01] transition-smooth">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1 space-y-4 md:space-y-0 md:flex md:items-center md:gap-8">
                      {/* Airline */}
                      <div className="text-center md:text-left">
                        <div className="font-bold text-lg">{flight.airline}</div>
                        <div className="text-sm text-muted-foreground">{flight.stops}</div>
                      </div>

                      {/* Flight Details */}
                      <div className="flex items-center gap-4 md:gap-8">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{flight.departure.time}</div>
                          <div className="text-sm text-muted-foreground">{flight.departure.airport}</div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="h-px bg-muted-foreground w-8"></div>
                          <Plane className="h-4 w-4 text-muted-foreground" />
                          <div className="h-px bg-muted-foreground w-8"></div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-2xl font-bold">{flight.arrival.time}</div>
                          <div className="text-sm text-muted-foreground">{flight.arrival.airport}</div>
                        </div>
                      </div>

                      <div className="text-center md:text-left">
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-medium">{flight.duration}</div>
                      </div>
                    </div>

                    {/* Price and Book Button */}
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        ${flight.price}
                      </div>
                      <Button className="btn-travel">
                        Book Flight
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" className="btn-secondary">
                Load More Flights
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FlightBooking;