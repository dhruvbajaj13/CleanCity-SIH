import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Bell, 
  Shield, 
  MapPin, 
  Camera, 
  Trash2,
  Download,
  LogOut,
  Save
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate about environmental conservation and community engagement.",
    location: "San Francisco, CA",
    joinDate: "January 2024"
  });

  const [notifications, setNotifications] = useState({
    emailReports: true,
    pushNotifications: true,
    weeklyUpdates: false,
    communityEvents: true,
    rewardAlerts: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showLocation: true,
    showStats: true,
    dataSharing: false
  });

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleExportData = () => {
    toast({
      title: "Data Export Initiated",
      description: "Your data export will be emailed to you within 24 hours.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion Request",
      description: "Please check your email to confirm account deletion.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-eco-light py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-eco-dark mb-4">Account Settings</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Manage your profile, preferences, and privacy settings
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="space-y-6">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <Avatar className="w-20 h-20 mx-auto">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-xl">AJ</AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0"
                  >
                    <Camera className="h-3 w-3" />
                  </Button>
                </div>
                <h3 className="font-semibold text-lg mb-1">{profileData.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{profileData.email}</p>
                <Badge className="bg-green-100 text-green-800 mb-3">
                  Eco Champion
                </Badge>
                <div className="text-xs text-muted-foreground">
                  Member since {profileData.joinDate}
                </div>
              </CardContent>
            </Card>

            {/* Account Stats */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-eco-dark">Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Total Reports</span>
                  <Badge variant="outline">42</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Collections</span>
                  <Badge variant="outline">18</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">CleanTokens</span>
                  <Badge className="bg-green-100 text-green-800">1,250</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Community Rank</span>
                  <Badge className="bg-blue-100 text-blue-800">#47</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Information */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <User className="h-5 w-5 mr-2" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={3}
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  />
                </div>

                <Button 
                  onClick={handleSaveProfile}
                  className="bg-gradient-to-r from-primary to-eco-secondary hover:opacity-90"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Profile
                </Button>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <Bell className="h-5 w-5 mr-2" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-reports">Email Reports</Label>
                    <p className="text-sm text-muted-foreground">Receive email notifications for report updates</p>
                  </div>
                  <Switch
                    id="email-reports"
                    checked={notifications.emailReports}
                    onCheckedChange={(checked) => setNotifications({...notifications, emailReports: checked})}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get instant notifications on your device</p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={notifications.pushNotifications}
                    onCheckedChange={(checked) => setNotifications({...notifications, pushNotifications: checked})}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="weekly-updates">Weekly Updates</Label>
                    <p className="text-sm text-muted-foreground">Weekly summary of your environmental impact</p>
                  </div>
                  <Switch
                    id="weekly-updates"
                    checked={notifications.weeklyUpdates}
                    onCheckedChange={(checked) => setNotifications({...notifications, weeklyUpdates: checked})}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="community-events">Community Events</Label>
                    <p className="text-sm text-muted-foreground">Notifications about local cleanup events</p>
                  </div>
                  <Switch
                    id="community-events"
                    checked={notifications.communityEvents}
                    onCheckedChange={(checked) => setNotifications({...notifications, communityEvents: checked})}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="reward-alerts">Reward Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified about new rewards and achievements</p>
                  </div>
                  <Switch
                    id="reward-alerts"
                    checked={notifications.rewardAlerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, rewardAlerts: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-eco-dark">
                  <Shield className="h-5 w-5 mr-2" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="profile-visibility">Profile Visibility</Label>
                  <Select 
                    value={privacy.profileVisibility} 
                    onValueChange={(value) => setPrivacy({...privacy, profileVisibility: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public - Visible to all users</SelectItem>
                      <SelectItem value="community">Community - Visible to CleanCity members</SelectItem>
                      <SelectItem value="private">Private - Only visible to you</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show-location">Show Location</Label>
                    <p className="text-sm text-muted-foreground">Display your general location on your profile</p>
                  </div>
                  <Switch
                    id="show-location"
                    checked={privacy.showLocation}
                    onCheckedChange={(checked) => setPrivacy({...privacy, showLocation: checked})}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show-stats">Show Statistics</Label>
                    <p className="text-sm text-muted-foreground">Display your environmental impact stats publicly</p>
                  </div>
                  <Switch
                    id="show-stats"
                    checked={privacy.showStats}
                    onCheckedChange={(checked) => setPrivacy({...privacy, showStats: checked})}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="data-sharing">Data Sharing for Research</Label>
                    <p className="text-sm text-muted-foreground">Share anonymized data for environmental research</p>
                  </div>
                  <Switch
                    id="data-sharing"
                    checked={privacy.dataSharing}
                    onCheckedChange={(checked) => setPrivacy({...privacy, dataSharing: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Account Actions */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-eco-dark">Account Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Export Your Data</h4>
                    <p className="text-sm text-muted-foreground">Download all your account data and activity</p>
                  </div>
                  <Button variant="outline" onClick={handleExportData}>
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>

                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">Sign Out</h4>
                    <p className="text-sm text-muted-foreground">Sign out of your account on all devices</p>
                  </div>
                  <Button variant="outline">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>

                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-red-600">Delete Account</h4>
                    <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="destructive" onClick={handleDeleteAccount}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;