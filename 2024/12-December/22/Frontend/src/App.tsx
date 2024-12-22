import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "@/pages/HomePage";
import CreatePost from "@/pages/CreatePost";
import EditPost from "@/pages/EditPost";
import ViewPost from "@/pages/ViewPost";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <main className="container mx-auto py-8 px-4">
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
    </QueryClientProvider>
  );
}
