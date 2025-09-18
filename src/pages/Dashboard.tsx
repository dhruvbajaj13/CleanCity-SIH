import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  MapPin, 
  Recycle, 
  Award, 
  Users, 
  Calendar,
  Target,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-eco-light py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-eco-dark mb-2">Your Impact Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Track your contribution to a cleaner environment and see your positive impact grow
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                REPORTS SUBMITTED
              </CardTitle>
              <MapPin className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-eco-dark mb-1">12</div>
              <div className="flex items-center text-sm">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500">+3 this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                WASTE COLLECTED
              </CardTitle>
              <Recycle className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-eco-dark mb-1">24 kg</div>
              <div className="flex items-center text-sm">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500">+8 kg this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                TOKENS EARNED
              </CardTitle>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-eco-dark mb-1">450</div>
              <div className="text-sm text-muted-foreground">
                Next reward at 500
              </div>
              <Progress value={90} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                COMMUNITY RANK
              </CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-eco-dark mb-1">#42</div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Top 15% this month
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Recent Activity & Goals */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <Calendar className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-eco-light rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Recycle className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-eco-dark">Waste Collected</h4>
                      <p className="text-sm text-muted-foreground">
                        Collected 5kg of plastic waste from Central Park
                      </p>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">+25 tokens</Badge>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-eco-light rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-eco-dark">Waste Reported</h4>
                      <p className="text-sm text-muted-foreground">
                        Reported illegal dumping on Main Street
                      </p>
                      <span className="text-xs text-muted-foreground">1 day ago</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">+10 tokens</Badge>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-eco-light rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-eco-dark">Achievement Unlocked</h4>
                      <p className="text-sm text-muted-foreground">
                        Earned "Eco Warrior" badge for 10 reports
                      </p>
                      <span className="text-xs text-muted-foreground">3 days ago</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Badge</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Goals & Challenges */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <Target className="h-5 w-5 mr-2" />
                  Monthly Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Report 20 Waste Locations</span>
                      <span className="text-sm text-muted-foreground">12/20</span>
                    </div>
                    <Progress value={60} className="mb-2" />
                    <p className="text-xs text-muted-foreground">8 more reports to complete this goal</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Collect 50kg of Waste</span>
                      <span className="text-sm text-muted-foreground">24/50 kg</span>
                    </div>
                    <Progress value={48} className="mb-2" />
                    <p className="text-xs text-muted-foreground">26kg remaining this month</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Earn 1000 Tokens</span>
                      <span className="text-sm text-muted-foreground">450/1000</span>
                    </div>
                    <Progress value={45} className="mb-2" />
                    <p className="text-xs text-muted-foreground">550 tokens to reach monthly target</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Leaderboard */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-eco-dark">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90">
                  <Link to="/report">
                    <MapPin className="h-4 w-4 mr-2" />
                    Report New Waste
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  <Link to="/collect">
                    <Recycle className="h-4 w-4 mr-2" />
                    Find Waste to Collect
                  </Link>
                </Button>
                <Button variant="secondary" className="w-full">
                  <Award className="h-4 w-4 mr-2" />
                  View Rewards
                </Button>
              </CardContent>
            </Card>

            {/* Local Leaderboard */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-eco-dark">Community Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">EcoWarrior2024</p>
                      <p className="text-sm text-muted-foreground">1,250 tokens</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">GreenHero</p>
                      <p className="text-sm text-muted-foreground">1,100 tokens</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">CleanStreets</p>
                      <p className="text-sm text-muted-foreground">950 tokens</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        42
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">You</p>
                        <p className="text-sm text-muted-foreground">450 tokens</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Environmental Impact */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-eco-dark">Your Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">CO2 Saved</span>
                      <span className="text-sm font-bold text-green-600">15.2 kg</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Equivalent to planting 2 trees</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Water Saved</span>
                      <span className="text-sm font-bold text-blue-600">120 L</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Through proper recycling</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Landfill Diverted</span>
                      <span className="text-sm font-bold text-primary">24 kg</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Waste properly disposed</p>
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

export default Dashboard;