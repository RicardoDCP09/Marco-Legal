"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  LogOut,
  Clock,
  CheckCircle,
  XCircle,
  FileText,
  Calendar,
  MessageSquare,
  Home,
} from "lucide-react";
import Link from "next/link";

interface Proposal {
  id: string;
  nombre: string;
  email: string;
  empresa: string;
  servicio: string;
  mensaje: string;
  status: "pending" | "accepted" | "rejected";
  date: string;
  response?: string;
}

export default function ClientDashboardPage() {
  const [proposal, setProposal] = useState<Proposal | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check session
    const session = localStorage.getItem("client_session");
    if (!session) {
      router.push("/portal/login");
      return;
    }
    setProposal(JSON.parse(session));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("client_session");
    router.push("/portal/login");
  };

  if (!proposal) return null;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-gray-900 text-lg">
              Portal Cliente
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Home className="w-4 h-4" /> Inicio
            </Link>
            <div className="h-4 w-px bg-gray-300"></div>
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-red-600 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <LogOut className="w-4 h-4" /> Salir
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Hola, {proposal.nombre.split(" ")[0]}
          </h1>
          <p className="text-gray-600">
            Aquí tienes el estado actual de tu solicitud.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Status Banner */}
          <div
            className={`p-6 border-b ${
              proposal.status === "accepted"
                ? "bg-green-50 border-green-100"
                : proposal.status === "rejected"
                ? "bg-red-50 border-red-100"
                : "bg-yellow-50 border-yellow-100"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-full ${
                  proposal.status === "accepted"
                    ? "bg-green-100 text-green-600"
                    : proposal.status === "rejected"
                    ? "bg-red-100 text-red-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {proposal.status === "accepted" ? (
                  <CheckCircle className="w-8 h-8" />
                ) : proposal.status === "rejected" ? (
                  <XCircle className="w-8 h-8" />
                ) : (
                  <Clock className="w-8 h-8" />
                )}
              </div>
              <div>
                <h2
                  className={`text-lg font-bold ${
                    proposal.status === "accepted"
                      ? "text-green-800"
                      : proposal.status === "rejected"
                      ? "text-red-800"
                      : "text-yellow-800"
                  }`}
                >
                  {proposal.status === "accepted"
                    ? "¡Propuesta Aceptada!"
                    : proposal.status === "rejected"
                    ? "Propuesta Rechazada"
                    : "Propuesta en Revisión"}
                </h2>
                <p
                  className={`text-sm ${
                    proposal.status === "accepted"
                      ? "text-green-700"
                      : proposal.status === "rejected"
                      ? "text-red-700"
                      : "text-yellow-700"
                  }`}
                >
                  {proposal.status === "accepted"
                    ? "Hemos aceptado tu proyecto. Pronto nos pondremos en contacto."
                    : proposal.status === "rejected"
                    ? "Lamentablemente no podemos tomar tu proyecto en este momento."
                    : "Nuestro equipo está evaluando tu solicitud."}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Detalles del Proyecto
                </h3>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-4">
                  <div>
                    <span className="block text-xs text-gray-500 mb-1">
                      Servicio Solicitado
                    </span>
                    <span className="font-semibold text-gray-900 block">
                      {proposal.servicio}
                    </span>
                  </div>
                  {proposal.empresa && (
                    <div>
                      <span className="block text-xs text-gray-500 mb-1">
                        Empresa
                      </span>
                      <span className="font-semibold text-gray-900 block">
                        {proposal.empresa}
                      </span>
                    </div>
                  )}
                  <div>
                    <span className="block text-xs text-gray-500 mb-1">
                      Tu Mensaje Original
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {proposal.mensaje}
                    </p>
                  </div>
                </div>
              </div>

              {proposal.response && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Respuesta del Equipo
                  </h3>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 text-blue-900">
                    <p className="leading-relaxed">{proposal.response}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-1 border-l border-gray-100 pl-8 md:block flex flex-col gap-4">
              <div>
                <span className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">
                  Fecha Solicitud
                </span>
                <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  {new Date(proposal.date).toLocaleDateString()}
                </div>
              </div>
              <div className="md:mt-6">
                <span className="block text-xs text-gray-400 mb-1 uppercase tracking-wider">
                  ID de Ticket
                </span>
                <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono text-gray-600 break-all border border-gray-200 block">
                  {proposal.id}
                </code>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
