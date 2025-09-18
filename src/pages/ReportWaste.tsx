import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, Upload, AlertTriangle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportWaste = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [location, setLocation] = useState("");
  const [wasteType, setWasteType] = useState("");
  const [severity, setSeverity] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Report Submitted Successfully!",
      description: "Thank you for helping keep our community clean. You earned 10 CleanTokens!",
    });
    
    // Reset form
    setLocation("");
    setWasteType("");
    setSeverity("");
    setDescription("");
    setIsSubmitting(false);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
          toast({
            title: "Location Found",
            description: "Your current location has been added to the report.",
          });
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Unable to get your location. Please enter it manually.",
            variant: "destructive",
          });
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-eco-light py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-eco-dark mb-4">Report Waste Location</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us identify areas that need attention by reporting waste locations in your community.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Stats Sidebar */}
          <div className="space-y-6">
            {/* Token Stats */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-eco-dark">Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1,250</div>
                  <div className="text-xs text-muted-foreground">Total Tokens</div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Reports This Month</span>
                  <Badge className="bg-blue-100 text-blue-800">8</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Success Rate</span>
                  <Badge className="bg-green-100 text-green-800">95%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Tokens Earned</span>
                  <Badge className="bg-purple-100 text-purple-800">+180</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tips */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-eco-dark">Pro Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="p-2 bg-eco-light rounded-lg">
                    <div className="font-medium text-xs mb-1">📸 Photo Bonus</div>
                    <div className="text-xs text-muted-foreground">Add clear photos for +5 extra tokens</div>
                  </div>
                  <div className="p-2 bg-eco-light rounded-lg">
                    <div className="font-medium text-xs mb-1">📍 GPS Precision</div>
                    <div className="text-xs text-muted-foreground">Use location button for accuracy bonus</div>
                  </div>
                  <div className="p-2 bg-eco-light rounded-lg">
                    <div className="font-medium text-xs mb-1">🎯 Peak Hours</div>
                    <div className="text-xs text-muted-foreground">Report between 9AM-5PM for faster verification</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Waste Report Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="location"
                        placeholder="Enter address or coordinates"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={getCurrentLocation}
                        className="flex-shrink-0"
                      >
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Click the location icon to use your current GPS coordinates
                    </p>
                  </div>

                  {/* Waste Type */}
                  <div className="space-y-2">
                    <Label htmlFor="waste-type">Waste Type *</Label>
                    <Select value={wasteType} onValueChange={setWasteType} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select waste category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plastic">Plastic Waste</SelectItem>
                        <SelectItem value="organic">Organic Waste</SelectItem>
                        <SelectItem value="electronic">Electronic Waste</SelectItem>
                        <SelectItem value="metal">Metal Waste</SelectItem>
                        <SelectItem value="glass">Glass Waste</SelectItem>
                        <SelectItem value="hazardous">Hazardous Waste</SelectItem>
                        <SelectItem value="construction">Construction Debris</SelectItem>
                        <SelectItem value="mixed">Mixed Waste</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Severity Level */}
                  <div className="space-y-2">
                    <Label htmlFor="severity">Severity Level *</Label>
                    <Select value={severity} onValueChange={setSeverity} required>
                      <SelectTrigger>
                        <SelectValue placeholder="How urgent is this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Small amount, not urgent</SelectItem>
                        <SelectItem value="medium">Medium - Moderate amount, needs attention</SelectItem>
                        <SelectItem value="high">High - Large amount, urgent cleanup needed</SelectItem>
                        <SelectItem value="critical">Critical - Environmental hazard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide additional details about the waste location..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                    />
                  </div>

                  {/* Photo Upload */}
                  <div className="space-y-2">
                    <Label>Photo Evidence</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop photos here, or click to browse
                      </p>
                      <Button type="button" variant="outline" size="sm">
                        <Camera className="h-4 w-4 mr-2" />
                        Add Photos
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Photos help verify the report and earn you bonus tokens
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting Report..."
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Submit Report
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Rewards Info */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-eco-dark">Earn Rewards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Basic Report</span>
                  <Badge className="bg-green-100 text-green-800">+10 tokens</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">With Photo</span>
                  <Badge className="bg-green-100 text-green-800">+15 tokens</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">GPS Location</span>
                  <Badge className="bg-green-100 text-green-800">+5 tokens</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Verified Report</span>
                  <Badge className="bg-blue-100 text-blue-800">+20 tokens</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Reporting Guidelines */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-eco-dark">Reporting Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Be specific about the location</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Include clear photos if possible</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Categorize waste type accurately</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Report only public spaces</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Avoid duplicate reports</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-eco-dark">Recent Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-xs space-y-3">
                  <div className="p-3 bg-eco-light rounded-lg">
                    <div className="font-medium mb-1">Central Park - Plastic bottles</div>
                    <div className="text-muted-foreground">Reported 2 hours ago</div>
                    <Badge variant="outline" className="mt-1 text-xs">Medium severity</Badge>
                  </div>
                  <div className="p-3 bg-eco-light rounded-lg">
                    <div className="font-medium mb-1">Main Street - Construction debris</div>
                    <div className="text-muted-foreground">Reported 1 day ago</div>
                    <Badge variant="outline" className="mt-1 text-xs">High severity</Badge>
                  </div>
                  <div className="p-3 bg-eco-light rounded-lg">
                    <div className="font-medium mb-1">River Park - Mixed waste</div>
                    <div className="text-muted-foreground">Reported 2 days ago</div>
                    <Badge variant="outline" className="mt-1 text-xs">Low severity</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportWaste;