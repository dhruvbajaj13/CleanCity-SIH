import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  Coins, 
  Gift, 
  Trophy, 
  Star, 
  ShoppingBag, 
  Zap,
  TrendingUp,
  Calendar,
  Target
} from "lucide-react";

const Rewards = () => {
  const userStats = {
    totalTokens: 1250,
    monthlyTokens: 380,
    rank: "Eco Champion",
    level: 7,
    nextLevelTokens: 1500,
    streakDays: 15
  };

  const recentActivity = [
    { action: "Waste Report Verified", tokens: 20, time: "2 hours ago" },
    { action: "Collection Task Completed", tokens: 35, time: "1 day ago" },
    { action: "Photo Bonus", tokens: 5, time: "2 days ago" },
    { action: "Weekly Goal Achievement", tokens: 50, time: "3 days ago" },
    { action: "Community Event Participation", tokens: 25, time: "5 days ago" }
  ];

  const availableRewards = [
    { 
      id: 1, 
      name: "Eco-Friendly Water Bottle", 
      cost: 200, 
      category: "Products", 
      inStock: true,
      description: "Stainless steel, BPA-free bottle"
    },
    { 
      id: 2, 
      name: "CleanCity T-Shirt", 
      cost: 150, 
      category: "Apparel", 
      inStock: true,
      description: "100% organic cotton, various sizes"
    },
    { 
      id: 3, 
      name: "$10 Green Store Voucher", 
      cost: 300, 
      category: "Vouchers", 
      inStock: true,
      description: "Use at partner eco-friendly stores"
    },
    { 
      id: 4, 
      name: "Tree Planting Certificate", 
      cost: 500, 
      category: "Environmental", 
      inStock: true,
      description: "Plant a tree in your name"
    },
    { 
      id: 5, 
      name: "Premium Recycling Kit", 
      cost: 400, 
      category: "Products", 
      inStock: false,
      description: "Complete home recycling solution"
    },
    { 
      id: 6, 
      name: "Monthly Gym Membership", 
      cost: 800, 
      category: "Services", 
      inStock: true,
      description: "One month at partner fitness centers"
    }
  ];

  const specialOffers = [
    { 
      title: "Weekend Bonus", 
      description: "Double tokens for weekend collections!", 
      expires: "2 days left",
      bonus: "2x tokens"
    },
    { 
      title: "Streak Reward", 
      description: "Maintain 20-day streak for bonus rewards", 
      progress: 75,
      target: "20 days"
    },
    { 
      title: "Community Goal", 
      description: "Help reach 1000 reports this month", 
      progress: 68,
      target: "1000 reports"
    }
  ];

  const achievements = [
    { name: "First Reporter", description: "Submit your first waste report", earned: true },
    { name: "Collector Hero", description: "Complete 10 collection tasks", earned: true },
    { name: "Photo Master", description: "Submit 50 reports with photos", earned: true },
    { name: "Community Leader", description: "Maintain top 10% ranking", earned: false },
    { name: "Streak Master", description: "Maintain 30-day activity streak", earned: false },
    { name: "Eco Champion", description: "Earn 2000 total CleanTokens", earned: false }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Products": return "bg-blue-100 text-blue-800";
      case "Apparel": return "bg-purple-100 text-purple-800";
      case "Vouchers": return "bg-green-100 text-green-800";
      case "Environmental": return "bg-emerald-100 text-emerald-800";
      case "Services": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-eco-light py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-eco-dark mb-4">CleanTokens & Rewards</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Earn tokens for your environmental actions and redeem them for amazing rewards!
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Stats Sidebar */}
          <div className="space-y-6">
            {/* Token Balance */}
            <Card className="border-0 shadow-card">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-eco-dark">Your Balance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {userStats.totalTokens}
                </div>
                <div className="text-sm text-muted-foreground mb-4">CleanTokens</div>
                <Badge className="bg-green-100 text-green-800">
                  +{userStats.monthlyTokens} this month
                </Badge>
              </CardContent>
            </Card>

            {/* Level Progress */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <Trophy className="h-5 w-5 mr-2" />
                  Level {userStats.level}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>{userStats.totalTokens}</span>
                    <span>{userStats.nextLevelTokens}</span>
                  </div>
                  <Progress 
                    value={(userStats.totalTokens / userStats.nextLevelTokens) * 100} 
                    className="h-2"
                  />
                  <div className="text-xs text-muted-foreground text-center">
                    {userStats.nextLevelTokens - userStats.totalTokens} tokens to next level
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-eco-dark">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Current Rank</span>
                  <Badge variant="outline">{userStats.rank}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Streak</span>
                  <Badge className="bg-orange-100 text-orange-800">
                    {userStats.streakDays} days
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">This Month</span>
                  <Badge className="bg-blue-100 text-blue-800">
                    {userStats.monthlyTokens} tokens
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Special Offers */}
            <div>
              <h2 className="text-2xl font-bold text-eco-dark mb-6">Special Offers</h2>
              <div className="grid gap-4">
                {specialOffers.map((offer, index) => (
                  <Card key={index} className="border-2 border-primary/20 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
                          <p className="text-muted-foreground mb-3">{offer.description}</p>
                          {offer.progress && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>{offer.progress}%</span>
                              </div>
                              <Progress value={offer.progress} className="h-2" />
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          {offer.bonus && (
                            <Badge className="bg-yellow-100 text-yellow-800">
                              {offer.bonus}
                            </Badge>
                          )}
                          {offer.expires && (
                            <Badge variant="outline" className="text-xs">
                              {offer.expires}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Available Rewards */}
            <div>
              <h2 className="text-2xl font-bold text-eco-dark mb-6">Redeem Rewards</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {availableRewards.map((reward) => (
                  <Card key={reward.id} className="border-0 shadow-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold">{reward.name}</h3>
                        <Badge className={getCategoryColor(reward.category)}>
                          {reward.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{reward.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Coins className="h-4 w-4 text-primary" />
                          <span className="font-semibold">{reward.cost}</span>
                        </div>
                        <Button
                          size="sm"
                          disabled={!reward.inStock || userStats.totalTokens < reward.cost}
                          className="bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90"
                        >
                          {!reward.inStock ? "Out of Stock" : "Redeem"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-2xl font-bold text-eco-dark mb-6">Achievements</h2>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <Card key={index} className={`border-0 shadow-card ${achievement.earned ? 'bg-green-50' : 'opacity-60'}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${achievement.earned ? 'bg-green-200' : 'bg-gray-200'}`}>
                          <Award className={`h-5 w-5 ${achievement.earned ? 'text-green-600' : 'text-gray-400'}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{achievement.name}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                        {achievement.earned && (
                          <Badge className="bg-green-100 text-green-800">
                            Earned
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Sidebar */}
          <div className="space-y-6">
            {/* Earn More Tokens */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <Zap className="h-5 w-5 mr-2" />
                  Earn More Tokens
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Report Waste</span>
                  <Badge className="bg-green-100 text-green-800">+10-25</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Collect Waste</span>
                  <Badge className="bg-green-100 text-green-800">+15-60</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Add Photo</span>
                  <Badge className="bg-blue-100 text-blue-800">+5</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Daily Check-in</span>
                  <Badge className="bg-purple-100 text-purple-800">+2</Badge>
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90">
                  Start Earning
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex justify-between items-start text-sm">
                      <div className="flex-1">
                        <div className="font-medium">{activity.action}</div>
                        <div className="text-muted-foreground text-xs">{activity.time}</div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 ml-2">
                        +{activity.tokens}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monthly Goals */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <Target className="h-5 w-5 mr-2" />
                  Monthly Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Reports Goal</span>
                    <span>8/10</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Collections Goal</span>
                    <span>3/5</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tokens Goal</span>
                    <span>380/500</span>
                  </div>
                  <Progress value={76} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;