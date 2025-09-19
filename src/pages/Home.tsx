import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  MapPin, 
  Users, 
  Award, 
  ArrowRight, 
  Recycle, 
  TreePine, 
  Droplets,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  Zap,
  Heart,
  Target,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/waste-collection-hero.jpg";
import video from "@/assets/video.mp4"
import wasteSortingImage from "@/assets/waste-sorting.jpg";
import communityCleanupImage from "@/assets/community-cleanup.jpg";
import wasteFacilityImage from "@/assets/waste-facility.jpg";
import beachCleanupImage from "@/assets/beach-cleanup.jpg";
import smartBinsImage from "@/assets/smart-bins.jpg";
import recyclingGuideImage from "@/assets/recycling-guide.jpg";



const Home = () => {
  
  const videoRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowButton(false); // hide button after click
    }
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-eco-primary/80 to-eco-secondary/70" />
        
        <div className="relative z-10 container mx-auto  px-4 text-center text-white">
          <div className="inline-flex items-center px-4  py-2 mb-6 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium animate-scale-in">
            <Users className="h-4 w-4 mr-2 " />
            Join 10,000+ Eco Warriors
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Clean<span className="text-eco-light">City</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 animate-fade-in">
            Transform your community with AI-powered waste management. 
            Earn rewards while making your city cleaner and greener.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
            <Button asChild size="lg" className="bg-white text-eco-primary hover:bg-white/90 font-semibold text-md hover-scale">
              <Link to="/report">
                <MapPin className="h-5 w-5 mr-2 " />
                Report Waste
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white/20 text-white text-md border-white/30 hover:bg-white hover:text-eco-primary backdrop-blur-sm hover-scale">
              <Link to="/collect">
                <Recycle className="h-5 w-5 mr-2" />
                Collect Waste
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-8 mb-8">
            
            <div className="hidden md:flex items-center space-x-6 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-xs">Reports</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">25 Tons</div>
                <div className="text-xs">Collected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-xs">Cities</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-eco-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-eco-dark mb-4">Our Impact So Far</h2>
            <p className="text-lg text-muted-foreground">Real numbers from our community of eco-warriors</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className=" shadow-card hover:shadow-lg transition-all  duration-300 hover-scale animate-fade-in group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-eco-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground font-medium">Waste Reports</div>
                <div className="text-xs text-muted-foreground mt-1">Verified locations</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-eco-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Recycle className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">25 Tons</div>
                <div className="text-muted-foreground font-medium">Waste Collected</div>
                <div className="text-xs text-muted-foreground mt-1">Diverted from landfills</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-eco-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground font-medium">Active Users</div>
                <div className="text-xs text-muted-foreground mt-1">Environmental heroes</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-eco-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground font-medium">Cities Served</div>
                <div className="text-xs text-muted-foreground mt-1">Growing globally</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      {/* Real Impact Section */}
      <section className="py-20 bg-eco-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-eco-dark">Real Impact in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our community members are making a real difference every day. 
              Join thousands of environmental heroes transforming neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-card text-center p-6 hover-scale">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Verification Accuracy</div>
                </Card>
                <Card className="border-0 shadow-card text-center p-6 hover-scale">
                  <div className="text-3xl font-bold text-primary mb-2">2.5M</div>
                  <div className="text-sm text-muted-foreground">CleanTokens Earned</div>
                </Card>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-muted-foreground">Reduced landfill waste by 40% in participating cities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-muted-foreground">Increased recycling rates by 60% through gamification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-muted-foreground">Created 500+ green jobs in waste management</span>
                </div>
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90 hover-scale">
                <Link to="/dashboard">
                  View Your Impact
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={wasteFacilityImage}
                alt="Modern waste processing facility with workers"
                className="rounded-lg shadow-lg w-full hover-scale"
              />
            </div>
          </div>

          {/* Video Section */}
          <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-6 text-eco-dark">How CleanCity Works</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden relative">
              <video
                ref={videoRef}
                src={video}
                controls
                className="w-full h-full rounded-lg"
              />

              {showButton && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
                >
                  <div className="flex items-center bg-white/90 px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
                    <Play className="h-8 w-8 mr-3 text-primary" />
                    <span className="text-primary font-semibold">Watch Demo Video</span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={beachCleanupImage}
                alt="Community beach cleanup with volunteers"
                className="rounded-lg shadow-lg w-full hover-scale"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-green-100 text-green-800">Community Impact</Badge>
              <h2 className="text-4xl font-bold mb-6 text-eco-dark">Together We're Stronger</h2>
              <p className="text-xl text-muted-foreground mb-8">
                From neighborhood cleanups to city-wide initiatives, our platform 
                connects people who care about the environment and amplifies their impact.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <TreePine className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Neighborhood Cleanups</h4>
                    <p className="text-muted-foreground text-sm">Organize and join local cleanup events with gamified rewards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Recycle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Recycling Education</h4>
                    <p className="text-muted-foreground text-sm">Interactive learning modules on proper waste sorting and recycling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplets className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Environmental Impact</h4>
                    <p className="text-muted-foreground text-sm">Real-time tracking and measurement of community environmental progress</p>
                  </div>
                </div>
              </div>

              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white hover-scale">
                <Link to="/about">
                  Learn More About Waste Management
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Guide Section */}
      <section className="py-20 bg-eco-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800">Educational Resources</Badge>
              <h2 className="text-4xl font-bold mb-6 text-eco-dark">Master the Art of Recycling</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Learn the science behind waste management and become an expert 
                in sustainable living practices.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-card p-4 hover-scale">
                  <h4 className="font-semibold mb-2">Interactive Guides</h4>
                  <p className="text-sm text-muted-foreground">Step-by-step recycling tutorials</p>
                </Card>
                <Card className="border-0 shadow-card p-4 hover-scale">
                  <h4 className="font-semibold mb-2">Video Tutorials</h4>
                  <p className="text-sm text-muted-foreground">Professional waste sorting demos</p>
                </Card>
                <Card className="border-0 shadow-card p-4 hover-scale">
                  <h4 className="font-semibold mb-2">Local Guidelines</h4>
                  <p className="text-sm text-muted-foreground">City-specific recycling rules</p>
                </Card>
                <Card className="border-0 shadow-card p-4 hover-scale">
                  <h4 className="font-semibold mb-2">Impact Calculator</h4>
                  <p className="text-sm text-muted-foreground">Measure your environmental footprint</p>
                </Card>
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90 hover-scale">
                <Link to="/about">
                  Explore Learning Resources
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={recyclingGuideImage}
                alt="Recycling guide with different waste categories"
                className="rounded-lg shadow-lg w-full hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-eco-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Ready to Transform Your Community?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Join the revolution in sustainable waste management. Every action counts, 
            every report matters, and together we can create cleaner, greener cities for future generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold hover-scale">
              <Link to="/report">
                <MapPin className="h-5 w-5 mr-2" />
                Start Reporting Waste
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm hover-scale">
              <Link to="/collect">
                <Recycle className="h-5 w-5 mr-2" />
                Join Collection Network
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:text-primary hover:bg-white/90 font-semibold hover-scale">
              <Link to="/rewards">
                <Award className="h-5 w-5 mr-2" />
                View Rewards
              </Link>
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-white/80">
            <div className="text-center animate-fade-in">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs">Support Available</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-2xl font-bold">Free</div>
              <div className="text-xs">To Join & Use</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-2xl font-bold">Global</div>
              <div className="text-xs">Impact Network</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;