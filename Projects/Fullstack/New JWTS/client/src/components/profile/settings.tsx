import { User } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

interface SettingsProps {
  user: User;
  onLogout: () => void;
  onUpdateProfile?: (updates: Partial<User>) => void;
}

export function Settings({ user, onLogout, onUpdateProfile }: SettingsProps) {
  const [username, setUsername] = useState(user.username);
  const [imageUrl, setImageUrl] = useState(user.profilePic);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (onUpdateProfile) {
      onUpdateProfile({
        username,
        profilePic: imageUrl,
      });
    }
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your profile information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={imageUrl} />
              <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              {isEditing ? (
                <>
                  <div className="space-y-2">
                    <Label>Username</Label>
                    <Input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Profile Image URL</Label>
                    <Input
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Enter image URL"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button onClick={handleSave}>Save Changes</Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsEditing(false);
                        setUsername(user.username);
                        setImageUrl(user.profilePic);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Customize how the app looks and feels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Theme</Label>
              <p className="text-sm text-muted-foreground">
                Switch between light and dark mode
              </p>
            </div>
            <ThemeToggle />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Reduce animations</Label>
              <p className="text-sm text-muted-foreground">
                Disable animations for better performance
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Manage your notification preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Email notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive updates about your account via email
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Push notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications about new posts and comments
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>Manage your account settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label>Email</Label>
            <p className="text-sm">{user.email}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="destructive" onClick={onLogout}>
            Log out
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
