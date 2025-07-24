import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Travel Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Text */}
          <div className="space-y-4 float">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Journey
              <span className="block gradient-sunset bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Book visas and flights with confidence. Simple, fast, and reliable travel solutions.
            </p>
          </div>

          {/* Main CTAs */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="card-travel p-8 bg-card/95 backdrop-blur-sm border-white/20 hover:scale-105 transition-smooth">
              <div className="space-y-4">
                <div className="gradient-sky p-3 rounded-full w-fit mx-auto">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Book a Visa</h3>
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

            <Card className="card-travel p-8 bg-card/95 backdrop-blur-sm border-white/20 hover:scale-105 transition-smooth">
              <div className="space-y-4">
                <div className="gradient-sunset p-3 rounded-full w-fit mx-auto">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Book a Flight</h3>
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
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm text-white/80">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">99%</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;