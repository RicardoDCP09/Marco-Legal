"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <AdminSidebar />

      {/* Mobile Drawer (Simplified for now) */}
      {/* TODO: Implement mobile drawer with shadcn sheet or similar if requested */}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="md:hidden bg-card border-b border-border p-4 flex items-center justify-between sticky top-0 z-20">
          <div className="font-bold text-foreground">CodeRAM Admin</div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-muted rounded-lg"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </header>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="relative z-50 bg-card h-full w-64 shadow-2xl animate-in slide-in-from-left">
              <AdminSidebar />
              {/* Note: AdminSidebar styling might need tweaks for mobile reuse inside a wrapper, 
                    but raw import works for MVP structure. 
                    Ideally we pass a prop to hide 'hidden md:flex' class or create a wrapper. 
                */}
            </div>
          </div>
        )}

        <main className="flex-1 overflow-x-hidden p-4 md:p-8 relative">
          {children}
        </main>
      </div>
    </div>
  );
}
