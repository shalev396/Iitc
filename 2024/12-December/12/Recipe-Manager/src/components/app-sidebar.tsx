import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";

const navigation = [
  {
    title: "Main Menu",
    items: [
      {
        route: "home",
        title: "Home",
        url: "/",
      },
      {
        route: "recipes",
        title: "Recipes",
        url: "/recipes",
      },
    ],
  },
  {
    title: "User",
    items: [
      {
        route: "profile",
        title: "Profile Settings",
        url: "/profile",
      },
    ],
  },
];

export function AppSidebar({ currentRoute }: { currentRoute: string }) {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between">
        <span className="text-xl font-bold">Recipe Manager</span>
        <ModeToggle />
      </SidebarHeader>
      <SidebarContent>
        {navigation.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.route}>
                    <SidebarMenuButton
                      isActive={currentRoute === item.route}
                      onClick={() => navigate(item.url)}
                    >
                      {item.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
