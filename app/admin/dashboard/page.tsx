"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Check,
  X,
  LogOut,
  Clock,
  Mail,
  Building,
  User,
  BarChart2,
  PieChart as PieChartIcon,
  FileText,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function DashboardPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const router = useRouter();

  // Stats Calculation
  const statusData = [
    {
      name: "Pendientes",
      value: proposals.filter((p) => p.status === "pending").length,
      color: "#EAB308",
    },
    {
      name: "Aceptadas",
      value: proposals.filter((p) => p.status === "accepted").length,
      color: "#22C55E",
    },
    {
      name: "Rechazadas",
      value: proposals.filter((p) => p.status === "rejected").length,
      color: "#EF4444",
    },
  ].filter((d) => d.value > 0);

  const serviceData = proposals.reduce((acc: any[], curr) => {
    const existing = acc.find((item) => item.name === curr.servicio);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: curr.servicio, value: 1 });
    }
    return acc;
  }, []);

  useEffect(() => {
    // Check auth
    const user = localStorage.getItem("admin_user");
    if (!user) {
      router.push("/admin/login");
      return;
    }

    fetchProposals();
  }, [router]);

  const fetchProposals = async () => {
    try {
      const res = await fetch(
        "http://localhost:3001/proposals?_sort=date&_order=desc"
      );
      const data = await res.json();
      setProposals(data);
    } catch (error) {
      console.error("Error fetching proposals:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (
    id: string,
    status: "accepted" | "rejected" | "pending"
  ) => {
    try {
      await fetch(`http://localhost:3001/proposals/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      fetchProposals();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleReply = async (id: string) => {
    if (!replyText.trim()) return;

    try {
      await fetch(`http://localhost:3001/proposals/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          response: replyText,
          status: "accepted",
        }),
      });
      setReplyingTo(null);
      setReplyText("");
      fetchProposals();
    } catch (error) {
      console.error("Error sending reply:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_user");
    document.cookie =
      "admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Panel Administrativo
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/admin/cms")}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <FileText className="h-5 w-5" />
              <span>Editar Contenido</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <PieChartIcon className="w-5 h-5 text-primary" />
              Estado de Propuestas
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-primary" />
              Servicios Solicitados
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={serviceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" fontSize={12} tickMargin={10} />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]}>
                    {serviceData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">
            Propuestas Recientes
          </h2>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            {proposals.length} Total
          </span>
        </div>

        <div className="grid gap-6">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        {proposal.nombre}
                        {proposal.status === "pending" && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Pendiente
                          </span>
                        )}
                        {proposal.status === "accepted" && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3" /> Aceptada
                          </span>
                        )}
                        {proposal.status === "rejected" && (
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                            <X className="w-3 h-3" /> Rechazada
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(proposal.date).toLocaleDateString()} •{" "}
                        {proposal.servicio}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {proposal.email}
                    </div>
                    {proposal.empresa && (
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        {proposal.empresa}
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg text-gray-700 text-sm leading-relaxed">
                    {proposal.mensaje}
                  </div>

                  {/* Response Section */}
                  {proposal.response && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="text-xs font-semibold text-blue-800 mb-1">
                        Tu Respuesta:
                      </p>
                      <p className="text-sm text-blue-900">
                        {proposal.response}
                      </p>
                    </div>
                  )}

                  {replyingTo === proposal.id && (
                    <div className="mt-4 space-y-3">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Escribe tu respuesta aquí..."
                        rows={3}
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleReply(proposal.id)}
                          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                          Enviar Respuesta
                        </button>
                        <button
                          onClick={() => {
                            setReplyingTo(null);
                            setReplyText("");
                          }}
                          className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex md:flex-col gap-2 justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 min-w-[140px]">
                  {proposal.status === "pending" && (
                    <>
                      <button
                        onClick={() => updateStatus(proposal.id, "accepted")}
                        className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                      >
                        <Check className="w-4 h-4" />
                        Aceptar
                      </button>
                      <button
                        onClick={() => updateStatus(proposal.id, "rejected")}
                        className="flex-1 flex items-center justify-center gap-2 bg-white border border-red-200 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
                      >
                        <X className="w-4 h-4" />
                        Rechazar
                      </button>
                    </>
                  )}

                  {!proposal.response && !replyingTo && (
                    <button
                      onClick={() => {
                        setReplyingTo(proposal.id);
                        setReplyText("");
                      }}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      Responder
                    </button>
                  )}

                  {proposal.status !== "pending" && (
                    <button
                      onClick={() => updateStatus(proposal.id, "pending")}
                      className="flex-1 flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Deshacer
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {proposals.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No hay propuestas registradas aún.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
