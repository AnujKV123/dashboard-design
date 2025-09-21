"use client"

import * as React from "react"
import {
  ShoppingBag,
  BookOpen,
  PieChart,
  Files,
  ContactRound,
  SquareUserRound,
  Users,
  NotebookText,
  MessageCircleMore,
} from "lucide-react"

import { NavMain } from "./nav-dashboards"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Default",
      url: "#",
      icon: PieChart,
      isActive: true,
      items: [
        {
          title: "Home",
          url: "/",
        },
      ]
    },
    {
      title: "eCommerce",
      url: "#",
      icon: ShoppingBag,
    },
    {
      title: "Projects",
      url: "#",
      icon: Files,
    },
    {
      title: "Online Courses",
      url: "#",
      icon: BookOpen,
    },
  ],
  projects: [
    {
      title: "User Profile",
      url: "",
      icon: ContactRound,
      items: [
        {
          title: "Overview",
          url: "/overview",
        },
        {
          title: "Projects",
          url: "#",
        },
        {
          title: "Campaigns",
          url: "#",
        },
        {
          title: "Documents",
          url: "#",
        },
        {
          title: "Followers",
          url: "#",
        },
      ],
    },
    {
      title: "Account",
      url: "#",
      icon: SquareUserRound,
    },
    {
      title: "Corporate",
      url: "#",
      icon: Users,
    },
    {
      title: "Blog",
      url: "#",
      icon: NotebookText,
    },
    {
      title: "Social",
      url: "#",
      icon: MessageCircleMore,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
        <div className="p-4 ">
          <div className="flex flex-row gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            <div>Anuj</div>
          </div>
        </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Favorites Recently</SidebarGroupLabel>
        </SidebarGroup>
        <NavMain items={data.navMain} groupTitile={"Dashboards"} />
        <NavMain items={data.projects} groupTitile={"Pages"} />
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
