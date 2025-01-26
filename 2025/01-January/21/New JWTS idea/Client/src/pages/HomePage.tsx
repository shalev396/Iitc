import { CreatePost } from "../components/posts/CreatePost";
import { PostList } from "../components/posts/PostList";
import { useAuth } from "../contexts/AuthContext";

interface Post {
  _id: string;
  content: string;
  author: {
    _id: string;
    username: string;
  };
  likes: string[];
  comments: {
    _id: string;
    content: string;
    author: {
      _id: string;
      username: string;
    };
    likes: string[];
    createdAt: string;
  }[];
  createdAt: string;
}

export function HomePage() {
  const { user } = useAuth();

  const handlePostCreated = (newPost: Post) => {
    // The PostList component will handle its own state and fetch posts
    // We just need to trigger a re-render
    window.location.reload();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <CreatePost onPostCreated={handlePostCreated} />
      <PostList />
    </div>
  );
}
