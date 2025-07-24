import { Plane, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="gradient-sky p-2 rounded-lg shadow-soft group-hover:shadow-glow transition-smooth">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              TravelEase
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/bookings" 
              className="text-muted-foreground hover:text-foreground transition-smooth font-medium"
            >
              My Bookings
            </Link>
            <Link 
              to="/support" 
              className="text-muted-foreground hover:text-foreground transition-smooth font-medium"
            >
              Support
            </Link>
            <Button variant="outline" size="sm" className="btn-secondary">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;