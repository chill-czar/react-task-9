import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { AppSidebar } from "@/components/nav/AppSidebar";
import { AdminHeader } from "@/components/layout/AdminHeader";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <AdminHeader />
          <div className="p-4 md:p-6">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
