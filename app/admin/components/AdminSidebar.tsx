"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Newspaper,
  Settings,
  LogOut,
  ChevronRight,
  Shield,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
    },
    {
      title: "CMS Contenido",
      icon: FileText,
      href: "/admin/cms",
    },
    {
      title: "Blog Manager",
      icon: Newspaper,
      href: "/admin/blog",
    },
    // {
    //   title: "Configuración",
    //   icon: Settings,
    //   href: "/admin/settings",
    // },
  ];

  const handleLogout = () => {
    localStorage.removeItem("admin_user");
    document.cookie =
      "admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/admin/login");
  };

  return (
    <aside className="w-64 bg-card border-r border-border h-screen sticky top-0 md:flex flex-col hidden">
      {/* Header */}
      <div className="p-6 border-b border-border flex items-center gap-3">
        <div className="bg-primary/20 p-2 rounded-lg border border-primary/30">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="font-bold text-foreground text-lg tracking-tight">
            CodeRAM
          </h1>
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
            Admin Panel
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon
                  className={`w-5 h-5 ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                />
                <span className="font-medium text-sm">{item.title}</span>
              </div>
              {isActive && (
                <ChevronRight className="w-4 h-4 text-primary-foreground/50" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User / Footer */}
      <div className="p-4 border-t border-border">
        <div className="bg-muted/50 rounded-xl p-4 flex items-center justify-between mb-3 border border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-background">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-foreground truncate">
                Admin User
              </p>
              <p className="text-xs text-muted-foreground truncate">
                admin@codram.com
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-red-500 hover:bg-red-500/10 w-full px-4 py-2 rounded-lg transition-colors font-medium justify-center border border-transparent hover:border-red-500/20"
        >
          <LogOut className="w-4 h-4" />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
