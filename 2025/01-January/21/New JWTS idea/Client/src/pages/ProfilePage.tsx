import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getProfile, updateProfile, getUserPosts } from "@/services/api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { PostList } from "../components/posts/PostList";

interface Profile {
  _id: string;
  username: string;
  email: string;
  bio: string;
  avatar: string;
}

export function ProfilePage() {
  const { userId } = useParams();
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    bio: "",
    avatar: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const isOwnProfile = !userId || userId === user?._id;

  useEffect(() => {
    loadProfile();
  }, [userId]);

  const loadProfile = async () => {
    try {
      const data = (await getProfile()) as Profile;
      setProfile(data);
      if (isOwnProfile) {
        setFormData({
          username: data.username,
          email: data.email,
          bio: data.bio || "",
          avatar: data.avatar || "",
        });
      }
    } catch (err: any) {
      setError("Failed to load profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const updatedProfile = (await updateProfile(formData)) as Profile;
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to update profile");
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isLoading) return <div>Loading profile...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            {isOwnProfile ? "My Profile" : `${profile.username}'s Profile`}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing && isOwnProfile ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about yourself"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="avatar">Avatar URL</Label>
                <Input
                  id="avatar"
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleChange}
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              <div className="flex space-x-2">
                <Button type="submit">Save</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                {profile.avatar && (
                  <img
                    src={profile.avatar}
                    alt={profile.username}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                )}
                <div>
                  <h2 className="text-xl font-bold">{profile.username}</h2>
                  <p className="text-gray-500">{profile.email}</p>
                </div>
              </div>
              {profile.bio && <p className="text-gray-700">{profile.bio}</p>}
              {isOwnProfile && (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          {isOwnProfile ? "My Posts" : `${profile.username}'s Posts`}
        </h2>
        <PostList userId={profile._id} />
      </div>
    </div>
  );
}
