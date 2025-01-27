import { useState, useEffect } from "react";
import { Navbar } from "./components/layout/navbar";
import { LoginForm } from "./components/auth/login-form";
import { SignupForm } from "./components/auth/signup-form";
import { CreatePost } from "./components/posts/create-post";
import { PostCard } from "./components/posts/post-card";
import { Button } from "./components/ui/button";
import { User, Post } from "./lib/types";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { ProfilePage } from "./components/profile/profile-page";
import * as api from "./lib/api";
import { useToast } from "./components/ui/use-toast";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [showLogin, setShowLogin] = useState(true);
  const [currentPage, setCurrentPage] = useState<"feed" | "profile">("feed");
  const { toast } = useToast();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
      fetchPosts();
    }
  }, []);

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await api.getPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch posts",
        variant: "destructive",
      });
    }
  };

  const handleLogin = async (credentials: {
    email: string;
    password: string;
  }) => {
    try {
      const data = await api.login(credentials);
      setUser(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      await fetchPosts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Login failed",
        variant: "destructive",
      });
    }
  };

  const handleSignup = async (userData: {
    username: string;
    email: string;
    password: string;
  }) => {
    try {
      await api.register(userData);
      setShowLogin(true);
      toast({
        title: "Success",
        description: "Account created successfully! Please log in.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Signup failed",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setUser(null);
    setPosts([]);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setCurrentPage("feed");
  };

  const handleUpdateProfile = async (updates: Partial<User>) => {
    try {
      const updatedUser = await api.updateProfile(updates);
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      toast({
        title: "Success",
        description: "Profile updated successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error.response?.data?.message || "Failed to update profile",
        variant: "destructive",
      });
    }
  };

  const handlePostCreated = async (content: string) => {
    try {
      await api.createPost(content);
      await fetchPosts();
      toast({
        title: "Success",
        description: "Post created successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to create post",
        variant: "destructive",
      });
    }
  };

  const renderContent = () => {
    if (!user) {
      return (
        <div className="flex flex-col items-center space-y-4">
          {showLogin ? (
            <>
              <LoginForm onSuccess={handleLogin} />
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => setShowLogin(false)}
                >
                  Sign up
                </Button>
              </p>
            </>
          ) : (
            <>
              <SignupForm onSuccess={handleSignup} />
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => setShowLogin(true)}
                >
                  Log in
                </Button>
              </p>
            </>
          )}
        </div>
      );
    }

    if (currentPage === "profile") {
      return (
        <ProfilePage
          user={user}
          onLogout={handleLogout}
          onUpdateProfile={handleUpdateProfile}
        />
      );
    }

    return (
      <div className="space-y-8">
        <CreatePost user={user} onPostCreated={handlePostCreated} />
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              currentUser={user}
              onPostUpdated={fetchPosts}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-background">
        <Navbar
          user={user}
          onLogout={handleLogout}
          onProfileClick={() => setCurrentPage("profile")}
          onHomeClick={() => setCurrentPage("feed")}
          currentPage={currentPage}
        >
          <ThemeToggle />
        </Navbar>
        <main className="container mx-auto px-4 py-8 flex justify-center">
          <div className="w-full max-w-2xl">{renderContent()}</div>
        </main>
      </div>
    </ThemeProvider>
  );
}
