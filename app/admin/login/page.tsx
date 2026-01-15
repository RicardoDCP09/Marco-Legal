"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, Shield } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );
      const users = await res.json();

      if (users.length > 0) {
        // Simple "auth" by setting a cookie/localStorage
        localStorage.setItem("admin_user", JSON.stringify(users[0]));
        document.cookie = "admin_auth=true; path=/";
        // Redirect to the protected dashboard
        router.push("/admin/dashboard");
      } else {
        setError("Credenciales inválidas");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card p-8 rounded-xl border border-border w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-primary/20 to-blue-600/20 p-4 rounded-2xl backdrop-blur-xl border border-primary/30 shadow-2xl shadow-primary/20 animate-in fade-in zoom-in duration-500">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-blue bg-clip-text text-white mb-2">
            CodeRAM Admin
          </h1>
          <p className="text-muted-foreground text-sm">
            Panel de Control Seguro
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-foreground transition"
                placeholder="admin@codram.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-foreground transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-lg shadow-primary/20 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:shadow-primary/30"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
