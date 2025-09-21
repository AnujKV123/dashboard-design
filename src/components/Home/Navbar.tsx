import React from "react";
import { SidebarInset, SidebarTrigger } from "../ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { PanelRightIcon, Sun, Moon, Bell, TimerReset } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dashboard } from "./Dashboard";
import { useTheme } from "@/hooks/useTheme";
import { Routes, Route } from 'react-router-dom';
import OrderTable from "./OrderTable";

export const Navbar = ({
  setIsExpanded,
  isExpanded
}: {
  setIsExpanded: (isExpanded: boolean) => void,
  isExpanded: boolean
}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <SidebarInset>
      <header className="flex w-full h-[68px] shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[68px] border-b mb-10">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2 px-4 ml-5">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Default</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-row items-center gap-4 mr-9 ">
            <div>
              <Input placeholder="Search" />
            </div>
            <div>
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="size-7 -ml-1"
              >
                {theme === "dark" ? <Moon /> : <Sun />}
                <span className="sr-only">Toggle Theme</span>
              </Button>
            </div>
            <div>
              <Button variant="ghost" size="icon" className="size-7 -ml-1">
                <TimerReset />
                <span className="sr-only">Reset Timer</span>
              </Button>
            </div>
            <div>
              <Button variant="ghost" size="icon" className="size-7 -ml-1">
                <Bell />
                <span className="sr-only">Notifications</span>
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  setIsExpanded(!isExpanded);
                }}
                variant="ghost"
                size="icon"
                className="size-7 -ml-1"
              >
                <PanelRightIcon />
                <span className="sr-only">Toggle Right Pannel</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/overview" element={<OrderTable />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </SidebarInset>
  );
};
