import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Recycle, 
  Leaf, 
  Droplets, 
  TreePine,
  Lightbulb,
  RefreshCw,
  Shield,
  Factory,
  Globe,
  Users,
  Zap,
  BarChart3,
  Smartphone,
  Play,
  ArrowRight,
  CheckCircle,
  Award,
  Target,
  Heart,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import video from "@/assets/video.mp4"
import wasteFacilityImage from "@/assets/waste-facility.jpg";
import beachCleanupImage from "@/assets/beach-cleanup.jpg";
import smartBinsImage from "@/assets/smart-bins.jpg";
import recyclingGuideImage from "@/assets/recycling-guide.jpg";
import wasteSortingImage from "@/assets/waste-sorting.jpg";
import communityCleanupImage from "@/assets/community-cleanup.jpg";

const About = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showButton, setShowButton] = useState(true);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowButton(false);
    }
  };
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-primary/10 to-eco-secondary/10 backdrop-blur-sm rounded-full animate-scale-in">
            <Globe className="h-5 w-5 mr-2 text-primary" />
            <span className="text-primary font-semibold">About CleanCity</span>
          </div>
          <h1 className="text-6xl font-bold text-eco-dark mb-6 animate-fade-in relative">
            <span className="bg-gradient-to-r from-primary to-eco-secondary bg-clip-text text-transparent">
              Revolutionizing
            </span>
            <br />
            Waste Management
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-eco-secondary/20 blur-lg opacity-30 -z-10 animate-pulse"></div>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Discover how CleanCity is transforming communities through smart waste management, 
            the science behind the 3Rs principle, and our mission to create a sustainable future.
          </p>
          <div className="mt-8 flex justify-center space-x-4 animate-fade-in">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90 hover-scale">
              <Link to="/report">
                <MapPin className="h-5 w-5 mr-2" />
                Start Your Impact
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white hover-scale">
              <Link to="#mission">
                <ArrowRight className="h-5 w-5 mr-2" />
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <Card className="border-0 shadow-card bg-gradient-to-r from-primary/5 to-eco-secondary/5 hover:shadow-lg transition-all duration-500 hover-scale group overflow-hidden animate-fade-in">
            <CardContent className="p-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-eco-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-eco-secondary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-eco-dark mb-6 group-hover:text-primary transition-colors duration-300">Our Mission</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  To create the world's most effective waste management ecosystem by connecting communities, 
                  leveraging cutting-edge technology, and rewarding environmental action. We believe that 
                  everyone can be an environmental hero, and together we can build cleaner, 
                  more sustainable cities for future generations.
                </p>
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary mb-2">10,000+</div>
                    <div className="text-sm text-muted-foreground">Community Members</div>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Cities Worldwide</div>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary mb-2">25 Tons</div>
                    <div className="text-sm text-muted-foreground">Waste Collected</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How CleanCity Works */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-eco-dark mb-4">How CleanCity Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our revolutionary platform combines AI technology, community action, and gamification
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-card text-center hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-eco-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-eco-dark">Smart Detection</h3>
                <p className="text-muted-foreground text-sm">
                  AI-powered waste identification with GPS precision and automated categorization, 
                  creating comprehensive environmental data.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card text-center hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-eco-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-eco-dark">Community Network</h3>
                <p className="text-muted-foreground text-sm">
                  Global network of eco-warriors collaborating through gamified challenges 
                  and real-time impact tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card text-center hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-eco-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-eco-dark">Predictive Analytics</h3>
                <p className="text-muted-foreground text-sm">
                  Machine learning algorithms predict waste patterns and optimize 
                  collection routes for maximum efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card text-center hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-eco-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-eco-dark">Reward Ecosystem</h3>
                <p className="text-muted-foreground text-sm">
                  Blockchain-verified CleanTokens reward environmental action 
                  and fund sustainability initiatives worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technology Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Advanced Technology</Badge>
              <h3 className="text-3xl font-bold mb-6 text-eco-dark">Powered by Innovation</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform leverages cutting-edge technologies to create the most effective 
                waste management solution in the world.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Real-time AI waste classification with 95% accuracy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Blockchain verification for transparent impact tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">IoT integration with smart city infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Predictive analytics for optimal resource allocation</span>
                </div>
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90 hover-scale">
                <Link to="/dashboard">
                  <Target className="h-5 w-5 mr-2" />
                  View Live Data
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={smartBinsImage}
                alt="Smart waste management technology"
                className="rounded-lg shadow-lg w-full hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>

          {/* Video Demo */}
              <div className="text-center mb-16">
      <h3 className="text-3xl font-bold mb-6 text-eco-dark">
        How CleanCity Works
      </h3>

      <div className="relative max-w-4xl mx-auto">
        <div className="aspect-video rounded-lg overflow-hidden relative">
          <video
            ref={videoRef}
            src={video} // replace with your `video` import/prop
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
                <span className="text-primary font-semibold">
                  Watch Demo Video
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  

        </section>

        {/* The 3Rs Principle */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-eco-dark mb-4">The Science of the 3Rs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the foundation of sustainable waste management
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <RefreshCw className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl text-eco-dark">Reduce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  The most effective strategy: minimize waste creation at the source through conscious consumption.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">Pro Tip</Badge>
                    <span className="text-sm">Choose products with minimal packaging</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">Impact</Badge>
                    <span className="text-sm">Reduces 60% of potential waste</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">Method</Badge>
                    <span className="text-sm">Digital receipts & documents</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">Strategy</Badge>
                    <span className="text-sm">Quality over quantity mindset</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-eco-dark">Reuse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Extend product lifecycles through creative repurposing and sharing economy principles.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">Creative</Badge>
                    <span className="text-sm">Transform containers into planters</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">Community</Badge>
                    <span className="text-sm">Donate & share with neighbors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">Digital</Badge>
                    <span className="text-sm">Repurpose electronics for new uses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">Artistic</Badge>
                    <span className="text-sm">Upcycle into decorative items</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Recycle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-eco-dark">Recycle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Transform waste into raw materials for new products through advanced processing technologies.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">Smart</Badge>
                    <span className="text-sm">AI-powered sorting systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">Clean</Badge>
                    <span className="text-sm">Pre-wash containers properly</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">Local</Badge>
                    <span className="text-sm">Follow city-specific guidelines</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">E-Waste</Badge>
                    <span className="text-sm">Special programs for electronics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Visualization */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={recyclingGuideImage}
                alt="Comprehensive recycling guide"
                className="rounded-lg shadow-lg w-full hover-scale"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-eco-dark">Measuring Real Impact</h3>
              <p className="text-lg text-muted-foreground mb-6">
                CleanCity tracks the environmental impact of every 3R action, 
                providing transparent metrics on your contribution to sustainability.
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Reduce Impact</h4>
                  <p className="text-sm text-green-700">Save 2.5kg CO2 per avoided plastic bottle purchase</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Reuse Impact</h4>
                  <p className="text-sm text-blue-700">Extend product life by 300% through creative repurposing</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Recycle Impact</h4>
                  <p className="text-sm text-purple-700">Convert 95% of materials back into useful resources</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waste Types */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-eco-dark mb-4">Complete Waste Management Guide</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master every aspect of waste categorization and management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-card hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-2xl text-eco-dark">Biodegradable Waste</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Organic materials that naturally decompose, contributing to soil health and circular economy.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="kitchen-waste">
                    <AccordionTrigger>Kitchen & Food Waste</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Fruit and vegetable peels → Compost in 2-4 weeks</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Coffee grounds → Garden fertilizer</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Eggshells → Calcium-rich soil amendment</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="garden-waste">
                    <AccordionTrigger>Garden & Yard Waste</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Grass clippings → Natural mulch</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Fallen leaves → Compost accelerator</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Tree branches → Wood chips for pathways</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="paper-products">
                    <AccordionTrigger>Paper Products</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Newspaper → Fire starter or packaging</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Cardboard → Garden weed barrier</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Paper towels → Compost brown material</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Factory className="h-8 w-8 text-red-600" />
                  <CardTitle className="text-2xl text-eco-dark">Non-Biodegradable Waste</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Synthetic materials requiring special processing and long-term management strategies.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="plastic-waste">
                    <AccordionTrigger>Plastic Materials</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-blue-100 text-blue-800 text-xs">Type 1</Badge>
                          <span className="text-sm">PET bottles → New bottles or clothing fiber</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-blue-100 text-blue-800 text-xs">Type 2</Badge>
                          <span className="text-sm">HDPE containers → Playground equipment</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-red-100 text-red-800 text-xs">Type 7</Badge>
                          <span className="text-sm">Mixed plastics → Special recycling required</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="metal-waste">
                    <AccordionTrigger>Metal & Electronic Waste</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-green-100 text-green-800 text-xs">Aluminum</Badge>
                          <span className="text-sm">Infinite recyclability, 95% energy savings</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-purple-100 text-purple-800 text-xs">E-Waste</Badge>
                          <span className="text-sm">Precious metals recovery programs</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-yellow-100 text-yellow-800 text-xs">Batteries</Badge>
                          <span className="text-sm">Hazardous waste collection points</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Sorting Guide */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800">Advanced Guide</Badge>
              <h3 className="text-3xl font-bold mb-6 text-eco-dark">Smart Sorting Techniques</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Learn professional-grade waste sorting methods used by CleanCity's 
                verification system and collection network.
              </p>
              
              <div className="space-y-4 mb-8">
                <Card className="border-0 bg-blue-50 p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Color Coding System</h4>
                  <p className="text-sm text-blue-700">Red: Hazardous | Blue: Recyclable | Green: Organic | Yellow: Medical</p>
                </Card>
                <Card className="border-0 bg-green-50 p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Contamination Prevention</h4>
                  <p className="text-sm text-green-700">Clean containers increase recycling value by 40%</p>
                </Card>
                <Card className="border-0 bg-purple-50 p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Volume Optimization</h4>
                  <p className="text-sm text-purple-700">Flatten boxes, nest containers to reduce transport emissions</p>
                </Card>
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90 hover-scale">
                <Link to="/report">
                  <Smartphone className="h-5 w-5 mr-2" />
                  Try Smart Sorting
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={wasteSortingImage}
                alt="Professional waste sorting demonstration"
                className="rounded-lg shadow-lg w-full hover-scale"
              />
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-eco-dark mb-4">Global Environmental Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding how proper waste management protects our planet's future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-card text-center hover:shadow-lg transition-shadow hover-scale animate-fade-in">
              <CardContent className="p-8">
                <Droplets className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Ocean Protection</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Every piece of properly managed plastic prevents marine ecosystem damage 
                  and protects 100,000+ species from pollution.
                </p>
                <Badge className="bg-blue-100 text-blue-800">8M tons prevented</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card text-center hover:shadow-lg transition-shadow hover-scale animate-fade-in">
              <CardContent className="p-8">
                <TreePine className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Forest Conservation</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Recycling paper and cardboard saves ancient forests and reduces 
                  deforestation by up to 40% in participating regions.
                </p>
                <Badge className="bg-green-100 text-green-800">2M trees saved</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card text-center hover:shadow-lg transition-shadow hover-scale animate-fade-in">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Climate Action</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Advanced recycling and waste-to-energy programs reduce greenhouse gas 
                  emissions equivalent to removing cars from roads.
                </p>
                <Badge className="bg-orange-100 text-orange-800">500K tons CO2</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Real-world Success Stories */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={beachCleanupImage}
                alt="Community environmental action"
                className="rounded-lg shadow-lg w-full hover-scale"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-primary">Success Story</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-eco-dark">Real Communities, Real Results</h3>
              <p className="text-lg text-muted-foreground mb-6">
                CleanCity communities worldwide are achieving remarkable environmental transformations.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-800 mb-1">San Francisco Bay Area</h4>
                  <p className="text-sm text-muted-foreground">Reduced landfill waste by 60% in 18 months through community reporting</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-800 mb-1">Stockholm, Sweden</h4>
                  <p className="text-sm text-muted-foreground">Increased recycling rates by 85% using gamification rewards</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-purple-800 mb-1">Singapore</h4>
                  <p className="text-sm text-muted-foreground">Zero-waste neighborhoods achieved through AI-powered optimization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts & Statistics */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-primary/5 to-eco-secondary/5 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-eco-dark mb-4">Eye-Opening Facts</h2>
              <p className="text-lg text-muted-foreground">
                Understanding the scale of the global waste challenge
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-card text-center p-6 hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">2.01B</div>
                <div className="text-sm text-muted-foreground">Tons of municipal waste generated globally per year</div>
              </Card>
              
              <Card className="border-0 shadow-card text-center p-6 hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">450</div>
                <div className="text-sm text-muted-foreground">Years for plastic bottles to decompose naturally</div>
              </Card>
              
              <Card className="border-0 shadow-card text-center p-6 hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Energy saved by recycling aluminum vs. new production</div>
              </Card>
              
              <Card className="border-0 shadow-card text-center p-6 hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">1000</div>
                <div className="text-sm text-muted-foreground">Years for glass to decompose in landfills</div>
              </Card>
              
              <Card className="border-0 shadow-card text-center p-6 hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">8M</div>
                <div className="text-sm text-muted-foreground">Tons of plastic enter oceans annually</div>
              </Card>
              
              <Card className="border-0 shadow-card text-center p-6 hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">17</div>
                <div className="text-sm text-muted-foreground">Trees saved by recycling one ton of paper</div>
              </Card>
              
              <Card className="border-0 shadow-card text-center p-6 hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Of household waste can be recycled or composted</div>
              </Card>
              
              <Card className="border-0 shadow-card text-center p-6 hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">3.4B</div>
                <div className="text-sm text-muted-foreground">Tons of CO2 saved through global recycling efforts</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="mb-20">
          <Card className="border-0 shadow-card bg-gradient-to-r from-primary to-eco-secondary text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">The Future We're Building</h2>
              <p className="text-xl mb-8 max-w-4xl mx-auto opacity-95">
                Imagine cities where waste is completely eliminated through circular economy principles, 
                where every citizen is an environmental steward, and where technology seamlessly 
                integrates sustainability into daily life. This is the CleanCity vision.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold mb-2">2030</div>
                  <div className="text-sm opacity-90">Zero waste cities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100M</div>
                  <div className="text-sm opacity-90">Active eco-warriors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Global</div>
                  <div className="text-sm opacity-90">Impact scale</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 hover-scale">
                  <Link to="/rewards">
                    <Award className="h-5 w-5 mr-2" />
                    Join the Movement
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 hover-scale">
                  <Link to="/report">
                    <ArrowRight className="h-5 w-5 mr-2" />
                    Start Making Impact
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;