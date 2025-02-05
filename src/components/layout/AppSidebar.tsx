import {
  Clock,
  DollarSign,
  Home,
  LayoutDashboard,
  MessageSquare,
  Users,
  FolderKanban,
  GraduationCap,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Time Tracking", icon: Clock, path: "/timesheet" },
  { title: "Payroll", icon: DollarSign, path: "/payroll" },
  { title: "Projects", icon: FolderKanban, path: "/projects" },
  { title: "Learning", icon: GraduationCap, path: "/learning" },
  { title: "HR Chat", icon: MessageSquare, path: "/hr-chat" },
  { title: "Employee", icon: Users, path: "/employee" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-4">
            <h1 className="text-xl font-bold text-primary">HR Portal</h1>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.path} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}