import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Recipes from "@/pages/Recipes";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";

export default function Page({ route }: { route: string }) {
  const renderContent = () => {
    switch (route) {
      case "home":
        return <Home />;
      case "recipes":
        return <Recipes />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar currentRoute={route} />
        <SidebarInset className="flex-1 overflow-y-auto">
          {renderContent()}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
