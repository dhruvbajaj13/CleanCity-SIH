import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 story-link">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-eco-secondary bg-clip-text text-transparent">
                CleanCity
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Transforming communities through smart waste management. Join thousands of eco-warriors making a difference.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors hover-scale" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors hover-scale" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors hover-scale" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors hover-scale" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                Home
              </Link>
              <Link to="/report" className="block text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                Report Waste
              </Link>
              <Link to="/collect" className="block text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                Collect Waste
              </Link>
              <Link to="/rewards" className="block text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                Rewards
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                About Us
              </Link>
              <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                Waste Management Guide
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                Recycling Tips
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                Community Events
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                Environmental Impact
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                Help Center
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@cleancity.app</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © 2024 CleanCity. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;