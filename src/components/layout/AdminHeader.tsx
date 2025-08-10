import { Bell, Search, Plus } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="flex h-14 items-center gap-3 px-3 md:h-16 md:px-6">
        <SidebarTrigger className="mr-1" />
        <div className="relative hidden md:block max-w-md w-full">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="h-9" aria-label="Search" />
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="hero" className="hidden sm:inline-flex">
            <Plus className="h-4 w-4" /> New Report
          </Button>
          <Avatar>
            <AvatarFallback aria-label="User">JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
