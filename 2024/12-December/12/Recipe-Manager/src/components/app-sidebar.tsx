import * as React from "react";

import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
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
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  versions: ["Guest"],
  navMain: [
    {
      title: "Check this out",
      url: "#",
      items: [
        {
          route: "home",
          title: "Home Page",
          url: "/",
          isActive: true,
        },
        {
          route: "recipes",
          title: "Recipes",
          url: "/recipes",
          isActive: false,
        },
      ],
    },
    {
      title: "username",
      url: "#",
      items: [
        {
          route: "profile",
          title: "Profile",
          url: "/profile",
          isActive: false,
        },
        {
          route: "add",
          title: "Add your own recipe",
          url: "/add",
          isActive: false,
        },
        {
          route: "profile/recipes",
          title: "Manage your recipes ",
          url: "/profile/recipes",
          isActive: false,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const route: string | undefined = props.route;
  for (let i = 0; i < data.navMain.length; i++) {
    for (let j = 0; j < data.navMain[i].items.length; j++) {
      console.log(data.navMain[i].items[j].route, route);
      if (route === data.navMain[i].items[j].route) {
        data.navMain[i].items[j].isActive = true;
        console.log("found");
      } else {
        data.navMain[i].items[j].isActive = false;
        console.log("not");
      }
    }
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
