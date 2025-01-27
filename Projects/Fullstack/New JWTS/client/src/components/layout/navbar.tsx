import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/lib/types";

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
  children?: React.ReactNode;
  onProfileClick: () => void;
  onHomeClick: () => void;
  currentPage: "feed" | "profile";
}

export function Navbar({
  user,
  onLogout,
  children,
  onProfileClick,
  onHomeClick,
  currentPage,
}: NavbarProps) {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Button
          variant="ghost"
          className="text-xl font-bold"
          onClick={onHomeClick}
        >
          Social App
        </Button>
        <div className="flex items-center space-x-4">
          {children}
          {user ? (
            <>
              <Button
                variant={currentPage === "feed" ? "default" : "ghost"}
                onClick={onHomeClick}
                size="sm"
              >
                Feed
              </Button>
              <Button
                variant={currentPage === "profile" ? "default" : "ghost"}
                onClick={onProfileClick}
                size="sm"
              >
                Profile
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.profilePic} alt={user.username} />
                      <AvatarFallback>
                        {user.username[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={onProfileClick}>
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button>Login</Button>
          )}
        </div>
      </div>
    </nav>
  );
}
