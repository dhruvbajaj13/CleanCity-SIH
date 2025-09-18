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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Save,
  Settings as SettingsIcon,
  Lock,
  Eye,
  Smartphone,
  Award,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SettingsSection from "@/components/SettingsSection";

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

        {/* Profile Overview */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300">
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

          <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">42</div>
              <div className="text-sm text-muted-foreground">Total Reports</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-eco-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">1,250</div>
              <div className="text-sm text-muted-foreground">CleanTokens</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">#47</div>
              <div className="text-sm text-muted-foreground">Community Rank</div>
            </CardContent>
          </Card>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <SettingsSection
              title="Profile Information"
              icon={<User className="h-5 w-5 mr-2" />}
              items={[
                {
                  id: "name",
                  title: "Full Name",
                  value: profileData.name,
                  description: "Your display name across the platform"
                },
                {
                  id: "email",
                  title: "Email Address",
                  value: profileData.email,
                  description: "Primary contact email",
                  status: "active"
                },
                {
                  id: "phone",
                  title: "Phone Number",
                  value: profileData.phone,
                  description: "For account recovery and alerts"
                },
                {
                  id: "location",
                  title: "Location",
                  value: profileData.location,
                  description: "Your general location for local content"
                },
                {
                  id: "bio",
                  title: "Bio",
                  value: profileData.bio.substring(0, 50) + "...",
                  description: "Tell others about your environmental mission"
                }
              ]}
              onItemClick={(id) => toast({ title: "Edit Profile", description: `Edit ${id} clicked` })}
            />
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <SettingsSection
              title="Notification Preferences"
              icon={<Bell className="h-5 w-5 mr-2" />}
              items={[
                {
                  id: "email-reports",
                  title: "Email Reports",
                  value: notifications.emailReports ? "Enabled" : "Disabled",
                  description: "Receive email notifications for report updates",
                  status: notifications.emailReports ? "active" : "inactive"
                },
                {
                  id: "push-notifications",
                  title: "Push Notifications",
                  value: notifications.pushNotifications ? "Enabled" : "Disabled",
                  description: "Get instant notifications on your device",
                  status: notifications.pushNotifications ? "active" : "inactive"
                },
                {
                  id: "weekly-updates",
                  title: "Weekly Updates",
                  value: notifications.weeklyUpdates ? "Enabled" : "Disabled",
                  description: "Weekly summary of your environmental impact",
                  status: notifications.weeklyUpdates ? "active" : "inactive"
                },
                {
                  id: "community-events",
                  title: "Community Events",
                  value: notifications.communityEvents ? "Enabled" : "Disabled",
                  description: "Notifications about local cleanup events",
                  status: notifications.communityEvents ? "active" : "inactive"
                },
                {
                  id: "reward-alerts",
                  title: "Reward Alerts",
                  value: notifications.rewardAlerts ? "Enabled" : "Disabled",
                  description: "Get notified about new rewards and achievements",
                  status: notifications.rewardAlerts ? "active" : "inactive"
                }
              ]}
              onItemClick={(id) => toast({ title: "Notification Settings", description: `${id} setting clicked` })}
            />
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <SettingsSection
              title="Privacy Settings"
              icon={<Eye className="h-5 w-5 mr-2" />}
              items={[
                {
                  id: "profile-visibility",
                  title: "Profile Visibility",
                  value: privacy.profileVisibility.charAt(0).toUpperCase() + privacy.profileVisibility.slice(1),
                  description: "Who can see your profile information",
                  status: "active"
                },
                {
                  id: "show-location",
                  title: "Location Sharing",
                  value: privacy.showLocation ? "Enabled" : "Disabled",
                  description: "Display your general location on your profile",
                  status: privacy.showLocation ? "active" : "inactive"
                },
                {
                  id: "show-stats",
                  title: "Statistics Visibility",
                  value: privacy.showStats ? "Public" : "Private",
                  description: "Display your environmental impact stats publicly",
                  status: privacy.showStats ? "active" : "inactive"
                },
                {
                  id: "data-sharing",
                  title: "Research Data Sharing",
                  value: privacy.dataSharing ? "Enabled" : "Disabled",
                  description: "Share anonymized data for environmental research",
                  status: privacy.dataSharing ? "active" : "inactive"
                }
              ]}
              onItemClick={(id) => toast({ title: "Privacy Settings", description: `${id} setting clicked` })}
            />
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <SettingsSection
              title="Security & Account"
              icon={<Lock className="h-5 w-5 mr-2" />}
              items={[
                {
                  id: "password",
                  title: "Password",
                  value: "••••••••",
                  description: "Last changed 3 months ago",
                  status: "active"
                },
                {
                  id: "two-factor",
                  title: "Two-Factor Authentication",
                  value: "Disabled",
                  description: "Add an extra layer of security",
                  status: "inactive"
                },
                {
                  id: "sessions",
                  title: "Active Sessions",
                  value: "3 devices",
                  description: "Manage your logged-in devices",
                  status: "active"
                },
                {
                  id: "export-data",
                  title: "Export Data",
                  value: "Download",
                  description: "Get a copy of all your account data"
                },
                {
                  id: "delete-account",
                  title: "Delete Account",
                  value: "Permanently Delete",
                  description: "This action cannot be undone",
                  status: "pending"
                }
              ]}
              onItemClick={(id) => {
                if (id === "export-data") {
                  handleExportData();
                } else if (id === "delete-account") {
                  handleDeleteAccount();
                } else {
                  toast({ title: "Security Settings", description: `${id} setting clicked` });
                }
              }}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;