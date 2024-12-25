import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "@/pages/HomePage";
import CreatePost from "@/pages/CreatePost";
import EditPost from "@/pages/EditPost";
import ViewPost from "@/pages/ViewPost";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <main className="container mx-auto py-8 px-4">
              <div className="flex justify-end mb-4"></div>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/edit/:id" element={<EditPost />} />
                <Route path="/post/:id" element={<ViewPost />} />
              </Routes>
            </main>
            <Toaster />
          </div>
        </Router>
        <ThemeToggle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
