import { ArrowRight, MapPin, Calendar, Users, Star, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/tanzania-hero.jpg";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Beautiful Tanzanian coastline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-accent/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Hero Text */}
            <div className="space-y-6 float">
              <h1 className="text-5xl md:text-7xl text-display leading-tight text-white">
                Your Journey 
                <span className="block text-4xl md:text-6xl font-normal text-white/90">
                  Starts Here
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto font-medium">
                Book visas and flights with ease. Premium travel services from Tanzania for all your journey needs.
              </p>
            </div>

            {/* Main CTAs */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="card-travel p-8 bg-card/95 backdrop-blur-sm border-white/30 hover:scale-105 transition-smooth">
                <div className="space-y-4">
                  <div className="gradient-sky p-3 rounded-full w-fit mx-auto">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground">Book a Visa</h3>
                  <p className="text-muted-foreground">
                    Get your visa processed quickly and hassle-free
                  </p>
                  <Link to="/visa-booking">
                    <Button className="btn-travel w-full">
                      Start Visa Application
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="card-travel p-8 bg-card/95 backdrop-blur-sm border-white/30 hover:scale-105 transition-smooth">
                <div className="space-y-4">
                  <div className="gradient-earth p-3 rounded-full w-fit mx-auto">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground">Book a Flight</h3>
                  <p className="text-muted-foreground">
                    Find the best deals on flights worldwide
                  </p>
                  <Link to="/flight-booking">
                    <Button className="btn-accent w-full">
                      Search Flights
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-8 border-t border-white/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-sm text-white/90 font-medium">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/90 font-medium">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-sm text-white/90 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Top Destinations Section */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Top Destinations from Tanzania
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover amazing destinations with our competitive flight prices and visa assistance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { city: "Nairobi", country: "Kenya", price: "$120", visa: false },
              { city: "Dubai", country: "UAE", price: "$350", visa: true },
              { city: "Istanbul", country: "Turkey", price: "$280", visa: false },
              { city: "Johannesburg", country: "South Africa", price: "$200", visa: false }
            ].map((destination) => (
              <Card key={destination.city} className="card-feature text-center">
                <h3 className="text-xl font-semibold text-foreground mb-1">{destination.city}</h3>
                <p className="text-muted-foreground mb-3">{destination.country}</p>
                <div className="text-2xl font-bold text-primary mb-2">from {destination.price}</div>
                <div className={`text-sm px-3 py-1 rounded-full inline-block ${
                  destination.visa 
                    ? 'bg-warning/20 text-warning-foreground' 
                    : 'bg-success/20 text-success-foreground'
                }`}>
                  {destination.visa ? 'Visa Required' : 'No Visa Required'}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Travel + Evans Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Travel + Evans?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proudly based in Tanzania, we understand your travel needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Fast Processing",
                description: "Quick visa approvals and instant flight bookings"
              },
              {
                icon: Users,
                title: "24/7 Support",
                description: "Round-the-clock customer service in Swahili & English"
              },
              {
                icon: Star,
                title: "Best Prices",
                description: "Competitive rates with no hidden fees"
              },
              {
                icon: Shield,
                title: "Tanzania-Based",
                description: "Local expertise with global connections"
              }
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="gradient-sky p-4 rounded-full w-fit mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;