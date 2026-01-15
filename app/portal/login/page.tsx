"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Ticket, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";

export default function ClientLoginPage() {
  const [email, setEmail] = useState("");
  const [ticketId, setTicketId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/client/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, ticketId }),
      });

      if (!res.ok) {
        throw new Error("Credenciales inválidas o propuesta no encontrada");
      }

      const data = await res.json();

      // Store rough session
      localStorage.setItem("client_session", JSON.stringify(data));
      router.push("/portal/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="bg-primary/20 p-3 rounded-xl backdrop-blur-sm border border-primary/30">
            <Ticket className="w-10 h-10 text-primary" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold bg-gradient-blue bg-clip-text text-white">
          Portal de Clientes
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Consulta el estado de tu propuesta
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-card py-8 px-4 border border-border rounded-xl sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Correo Electrónico
              </label>
              <div className="mt-1 relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-background border border-border focus:ring-2 focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm rounded-lg p-2.5 text-foreground transition"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="ticketId"
                className="block text-sm font-medium text-foreground"
              >
                ID de Ticket / Propuesta
              </label>
              <div className="mt-1 relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Ticket className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="ticketId"
                  name="ticketId"
                  type="text"
                  required
                  className="bg-background border border-border focus:ring-2 focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm rounded-lg p-2.5 text-foreground transition"
                  placeholder="Ej: f47ac10b..."
                  value={ticketId}
                  onChange={(e) => setTicketId(e.target.value)}
                />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                El ID se encuentra en el correo de confirmación.
              </p>
            </div>

            {error && (
              <div className="rounded-md bg-red-500/10 border border-red-500/20 p-4">
                <div className="flex">
                  <div className="ml-3 text-sm text-red-400 font-medium">
                    {error}
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-lg shadow-primary/20 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-50 hover:shadow-primary/30"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Ingresar <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-muted-foreground">
                  ¿No tienes un ticket?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/"
                className="text-primary font-medium hover:text-primary/80 transition"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
