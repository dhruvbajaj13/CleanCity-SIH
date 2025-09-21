import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, Upload, AlertTriangle, CheckCircle, Award, Clock, Zap } from "lucide-react";
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
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Fetch address from OpenStreetMap Nominatim API
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          const data = await response.json();

          if (data && data.display_name) {
            setLocation(data.display_name); // Set address in input
          } else {
            setLocation(`${latitude}, ${longitude}`); // fallback
          }
        } catch (err) {
          console.error("Error fetching address:", err);
          setLocation(`${latitude}, ${longitude}`);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Unable to fetch location. Please allow location access.");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
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
            <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-eco-dark flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Your Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-eco-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">1,250</div>
                  <div className="text-sm text-muted-foreground">Total CleanTokens</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-eco-light rounded-lg">
                    <span className="text-sm font-medium">Reports This Month</span>
                    <Badge className="bg-blue-100 text-blue-800">8</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-eco-light rounded-lg">
                    <span className="text-sm font-medium">Success Rate</span>
                    <Badge className="bg-green-100 text-green-800">95%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-eco-light rounded-lg">
                    <span className="text-sm font-medium">Tokens Earned</span>
                    <Badge className="bg-purple-100 text-purple-800">+180</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tips */}
            <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-eco-dark flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Pro Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
                    <div className="font-medium text-sm mb-1 text-blue-800">📸 Photo Bonus</div>
                    <div className="text-xs text-blue-700">Add clear photos for +5 extra tokens</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
                    <div className="font-medium text-sm mb-1 text-green-800">📍 GPS Precision</div>
                    <div className="text-xs text-green-700">Use location button for accuracy bonus</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500">
                    <div className="font-medium text-sm mb-1 text-purple-800">🎯 Peak Hours</div>
                    <div className="text-xs text-purple-700">Report 9AM-5PM for faster verification</div>
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
                    <p className="text-xs font-semibold text-muted-foreground">
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
                        <SelectItem value="plastic">Garbage Dump</SelectItem>
                        <SelectItem value="organic">Garbage Vehicle Not Arrived</SelectItem>
                        <SelectItem value="electronic">Buring of Garbage in Open Space</SelectItem>
                        <SelectItem value="metal">Sweeping Not Done</SelectItem>
                        <SelectItem value="glass">Dustbins not Cleaned</SelectItem>
                        <SelectItem value="hazardous">OverFlow of  Sewage or Storm Water</SelectItem>
                        <SelectItem value="construction">Stagent Water on Road/Open Area</SelectItem>
                        <SelectItem value="mixed">Blockage in Public Toilet</SelectItem>
                        <SelectItem value="other">Uncleaning Public Toilets</SelectItem>
                        <SelectItem value="other">No Electricity Supply in Public Toilets</SelectItem>
                        <SelectItem value="other">No Water Supply in Public Toilets</SelectItem>

                        <SelectItem value="other">Yellow Spot(Public Urination Spot)</SelectItem>
                        <SelectItem value="other">Improper Disposal of Fecal Waste/Septage</SelectItem>


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

  {/* Hidden File Input */}
  <input
    type="file"
    id="photoInput"
    accept="image/*"
    multiple
    className="hidden"
    onChange={(e) => console.log("Selected files:", e.target.files)}
  />

  {/* Drop Zone */}
  <div
    className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center cursor-pointer"
    onClick={() => document.getElementById("photoInput")?.click()}
  >
    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
    <p className="text-sm text-muted-foreground mb-2">
      Drag and drop photos here, or click to browse
    </p>

    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => document.getElementById("photoInput")?.click()}
    >
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
          <div className="col-span-1 space-y-6">
            {/* Rewards Info */}
            <Card className="border-0 shadow-card hover:shadow-lg w-[400px] transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-eco-dark flex items-center">
                  
                  ♻️ Steps for Reporting Waste
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-5">
                  <div className="pl-2 bg-green-50 text-black dark:text-black rounded-lg h-[50px] border-l-4 border-green-500">
                    <span className="text-md mb-2 font-medium">1️⃣ Click a Clear Photo 📸 <br/>
                  </span>
                  <p className="text-sm ">Capture the waste site clearly along with the waste.</p>
                    
                  </div>
                  <div className="pl-2 bg-blue-50 text-black dark:text-black h-[50px] rounded-lg border-l-4 border-blue-500">
                    <span className="text-md font-medium">2️⃣ Ensure Photo is Geotagged 🌍</span>
                    <p className="text-sm ">Turn on GPS/location so the photo has location info.</p>
                    
                  </div>
                  <div className="pl-2 bg-purple-50 text-black dark:text-black h-[50px] rounded-lg border-l-4 border-purple-500">
                    <span className="text-md font-medium">3️⃣ Enter Location Manually 🏠</span>
                    <p className="text-sm ">Add address or coordinates if GPS is not available.</p>
                    
                  </div>
                  <div className="pl-2 bg-orange-50 text-black dark:text-black h-[50px] rounded-lg border-l-4 border-orange-500">
                    <span className="text-md font-medium">4️⃣ Select Waste Type & Severity ⚠️</span>
                    <p className="text-sm ">Choose the right category and urgency level.</p>
                    
                  </div>
                  <div className="pl-2 bg-green-50 text-black dark:text-black h-[50px] rounded-lg border-l-4 border-yellow-500">
                    <span className="text-md font-medium">5️⃣ Submit Report ✅<br/>
                  </span>
                  <p className="text-sm ">Add a short description and submit to earn tokens.</p>
                    
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reporting Guidelines */}
            <Card className="border-0 shadow-card w-[400px] hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-eco-dark flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-2 bg-eco-light rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-md font-semibold">Be specific about location</span>
                  </div>
                  <div className="flex items-start space-x-3 p-2 bg-eco-light rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-md font-semibold">Include clear photos</span>
                  </div>
                  <div className="flex items-start space-x-3 p-2 bg-eco-light rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-md font-semibold">Categorize accurately</span>
                  </div>
                  <div className="flex items-start space-x-3 p-2 bg-eco-light rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-md font-semibold">Public spaces only</span>
                  </div>
                  <div className="flex items-start space-x-3 p-2 bg-eco-light rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-md font-semibold">Avoid duplicates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            
          </div>
          
        </div>
        <div className="w-full mt-6">
  <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300 hover-scale w-full">
    <CardHeader>
      <CardTitle className="text-eco-dark flex items-center">
        <Clock className="h-5 w-5 mr-2" />
        Recent Activity
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        <div className="p-3 bg-gradient-to-r from-eco-light to-primary/5 rounded-lg border border-primary/20 min-w-[220px]">
          <div className="font-medium text-sm mb-1">Central Park - Plastic bottles</div>
          <div className="text-xs text-muted-foreground mb-2">Reported 2 hours ago</div>
          <Badge variant="outline" className="text-xs">Medium severity</Badge>
        </div>
        <div className="p-3 bg-gradient-to-r from-eco-light to-orange/5 rounded-lg border border-orange/20 min-w-[220px]">
          <div className="font-medium text-sm mb-1">Main Street - Construction debris</div>
          <div className="text-xs text-muted-foreground mb-2">Reported 1 day ago</div>
          <Badge variant="outline" className="text-xs">High severity</Badge>
        </div>
        <div className="p-3 bg-gradient-to-r from-eco-light to-green/5 rounded-lg border border-green/20 min-w-[220px]">
          <div className="font-medium text-sm mb-1">River Park - Mixed waste</div>
          <div className="text-xs text-muted-foreground mb-2">Reported 2 days ago</div>
          <Badge variant="outline" className="text-xs">Low severity</Badge>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
      </div>
    </div>
  );
};

export default ReportWaste;