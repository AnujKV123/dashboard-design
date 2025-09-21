import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarProvider
} from "@/components/ui/sidebar"
import { Navbar } from "./Navbar"

interface propsType {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export default function Page({ setIsExpanded, isExpanded }: propsType) {
  return (
    <SidebarProvider>
      <AppSidebar />
      < Navbar setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
    </SidebarProvider>
  )
}
