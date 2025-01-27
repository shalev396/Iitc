import { User } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings } from "./settings";

interface ProfilePageProps {
  user: User;
  onLogout: () => void;
  onUpdateProfile: (updates: Partial<User>) => void;
}

export function ProfilePage({
  user,
  onLogout,
  onUpdateProfile,
}: ProfilePageProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.profilePic} />
            <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{user.username}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="posts" className="flex-1">
            Posts
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex-1">
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
          <Card>
            <CardHeader>
              <CardTitle>Your Posts</CardTitle>
              <CardDescription>View and manage your posts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No posts yet</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Settings
            user={user}
            onLogout={onLogout}
            onUpdateProfile={onUpdateProfile}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
