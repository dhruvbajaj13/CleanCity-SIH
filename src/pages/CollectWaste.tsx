import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Weight, 
  Award,
  CheckCircle,
  AlertTriangle,
  Filter,
  Route
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CollectWaste = () => {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [filterType, setFilterType] = useState("all");
  const [filterSeverity, setFilterSeverity] = useState("all");
  const [beforePhoto, setBeforePhoto] = useState<File | null>(null);
  const [afterPhoto, setAfterPhoto] = useState<File | null>(null);
  const { toast } = useToast();

  const wasteReports = [
    {
      id: "1",
      location: "Central Park, Near Fountain",
      distance: "0.8 km",
      type: "plastic",
      severity: "medium",
      estimatedWeight: "5-8 kg",
      tokens: 25,
      timeAgo: "2 hours ago",
      description: "Multiple plastic bottles and containers scattered around the fountain area.",
      coordinates: "40.7829, -73.9654"
    },
    {
      id: "2",
      location: "Main Street Bus Stop",
      distance: "1.2 km",
      type: "mixed",
      severity: "high",
      estimatedWeight: "10-15 kg",
      tokens: 40,
      timeAgo: "4 hours ago",
      description: "Large pile of mixed waste including food containers and packaging.",
      coordinates: "40.7589, -73.9851"
    },
    {
      id: "3",
      location: "River Park Trail",
      distance: "2.1 km",
      type: "organic",
      severity: "low",
      estimatedWeight: "2-3 kg",
      tokens: 15,
      timeAgo: "1 day ago",
      description: "Organic waste and food scraps left by picnic area.",
      coordinates: "40.7505, -73.9934"
    },
    {
      id: "4",
      location: "Shopping Center Parking",
      distance: "0.5 km",
      type: "electronic",
      severity: "critical",
      estimatedWeight: "8-12 kg",
      tokens: 60,
      timeAgo: "6 hours ago",
      description: "Old electronics and batteries improperly disposed.",
      coordinates: "40.7614, -73.9776"
    },
    {
      id: "5",
      location: "School Playground",
      distance: "1.8 km",
      type: "plastic",
      severity: "medium",
      estimatedWeight: "4-6 kg",
      tokens: 20,
      timeAgo: "3 hours ago",
      description: "Plastic waste from lunch packaging around playground equipment.",
      coordinates: "40.7480, -73.9857"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low": return "text-green-600 bg-green-100";
      case "medium": return "text-yellow-600 bg-yellow-100";
      case "high": return "text-orange-600 bg-orange-100";
      case "critical": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "plastic": return "text-blue-600 bg-blue-100";
      case "organic": return "text-green-600 bg-green-100";
      case "electronic": return "text-purple-600 bg-purple-100";
      case "mixed": return "text-gray-600 bg-gray-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const handleAcceptTask = (taskId: string) => {
    setSelectedTask(taskId);
    toast({
      title: "Task Accepted!",
      description: "Navigation instructions will be provided. Good luck eco-warrior!",
    });
  };

  const handleCompleteTask = () => {
    if (selectedTask && beforePhoto && afterPhoto) {
      const task = wasteReports.find(r => r.id === selectedTask);

      // Example: send photos + task info to backend
      const formData = new FormData();
      formData.append("taskId", selectedTask);
      formData.append("beforePhoto", beforePhoto);
      formData.append("afterPhoto", afterPhoto);

      fetch("/api/complete-task", {
        method: "POST",
        body: formData,
      });

      toast({
        title: "Task Completed!",
        description: `Excellent work! You earned ${task?.tokens} CleanTokens for collecting waste.`,
      });
      setSelectedTask(null);
      setBeforePhoto(null);
      setAfterPhoto(null);
    }
  };


  const filteredReports = wasteReports.filter(report => {
    if (filterType !== "all" && report.type !== filterType) return false;
    if (filterSeverity !== "all" && report.severity !== filterSeverity) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-eco-light py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-eco-dark mb-4">Collect Waste & Earn Rewards</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our network of eco-warriors. Choose from available collection tasks and earn CleanTokens while making your community cleaner.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="filter-type">Waste Type</Label>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger>
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All types</SelectItem>
                      <SelectItem value="plastic">Plastic</SelectItem>
                      <SelectItem value="organic">Organic</SelectItem>
                      <SelectItem value="electronic">Electronic</SelectItem>
                      <SelectItem value="mixed">Mixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="filter-severity">Severity</Label>
                  <Select value={filterSeverity} onValueChange={setFilterSeverity}>
                    <SelectTrigger>
                      <SelectValue placeholder="All severities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All severities</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setFilterType("all");
                    setFilterSeverity("all");
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-eco-dark">Collection Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Available Tasks</span>
                  <Badge variant="outline">{filteredReports.length}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Tokens</span>
                  <Badge className="bg-green-100 text-green-800">
                    {filteredReports.reduce((sum, r) => sum + r.tokens, 0)}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Critical Tasks</span>
                  <Badge className="bg-red-100 text-red-800">
                    {filteredReports.filter(r => r.severity === "critical").length}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Active Task */}
            {selectedTask && (
              <Card className="border-2 border-primary mb-8 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-eco-dark">
                    <Route className="h-5 w-5 mr-2" />
                    Active Collection Task
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const task = wasteReports.find(r => r.id === selectedTask);
                    return task ? (
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{task.location}</h3>
                            <p className="text-muted-foreground mb-3">{task.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <Navigation className="h-4 w-4 mr-1" />
                                {task.distance}
                              </span>
                              <span className="flex items-center">
                                <Weight className="h-4 w-4 mr-1" />
                                {task.estimatedWeight}
                              </span>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">
                            +{task.tokens} tokens
                          </Badge>
                        </div>
                        
                                        {/* Before photo upload */}
                        <div className="space-y-2">
                          <Label>Before Cleaning Photo *</Label>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="beforePhoto"
                            onChange={(e) => setBeforePhoto(e.target.files?.[0] || null)}
                          />
                          <div
                            className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center cursor-pointer"
                            onClick={() => document.getElementById("beforePhoto")?.click()}
                          >
                            {beforePhoto ? (
                              <p className="text-sm text-green-600">✅ {beforePhoto.name}</p>
                            ) : (
                              <p className="text-sm text-muted-foreground">Upload BEFORE cleaning photo</p>
                            )}
                          </div>
                        </div>

                                        {/* After photo upload */}
                        <div className="space-y-2">
                          <Label>After Cleaning Photo *</Label>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="afterPhoto"
                            onChange={(e) => setAfterPhoto(e.target.files?.[0] || null)}
                          />
                          <div
                            className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center cursor-pointer"
                            onClick={() => document.getElementById("afterPhoto")?.click()}
                          >
                            {afterPhoto ? (
                              <p className="text-sm text-green-600">✅ {afterPhoto.name}</p>
                            ) : (
                              <p className="text-sm text-muted-foreground">Upload AFTER cleaning photo</p>
                            )}
                          </div>
                        </div>

                        
                        <div className="flex space-x-3">
                          <Button 
                            className="bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90"
                            onClick={handleCompleteTask}
                            disabled={!beforePhoto || !afterPhoto}
                          >
                            
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Mark as Completed
                          </Button>
                          <Button 
                            variant="outline"
                            onClick={() => window.open(`https://maps.google.com/?q=${task.coordinates}`, '_blank')}
                          >
                            <Navigation className="h-4 w-4 mr-2" />
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </CardContent>
              </Card>
            )}

            {/* Available Tasks */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-eco-dark">Available Collection Tasks</h2>
              
              {filteredReports.length === 0 ? (
                <Card className="border-0 shadow-card">
                  <CardContent className="p-8 text-center">
                    <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No tasks match your filters</h3>
                    <p className="text-muted-foreground">Try adjusting your filters to see more collection opportunities.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredReports.map((report) => (
                  <Card 
                    key={report.id} 
                    className={`border-0 shadow-card hover:shadow-lg transition-shadow ${
                      selectedTask === report.id ? 'border-2 border-primary' : ''
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-lg font-semibold text-eco-dark">{report.location}</h3>
                            <Badge className={getSeverityColor(report.severity)}>
                              {report.severity}
                            </Badge>
                            <Badge className={getTypeColor(report.type)}>
                              {report.type}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{report.description}</p>
                          
                          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {report.distance} away
                            </span>
                            <span className="flex items-center">
                              <Weight className="h-4 w-4 mr-1" />
                              {report.estimatedWeight}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {report.timeAgo}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end space-y-3">
                          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                            <Award className="h-4 w-4 mr-1" />
                            +{report.tokens}
                          </Badge>
                          
                          {selectedTask === report.id ? (
                            <Badge className="bg-blue-100 text-blue-800">
                              Active Task
                            </Badge>
                          ) : (
                            <Button
                              onClick={() => handleAcceptTask(report.id)}
                              className="bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90"
                              disabled={selectedTask !== null}
                            >
                              Accept Task
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectWaste;
