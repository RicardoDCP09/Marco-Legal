"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Check,
  X,
  Clock,
  Mail,
  Building,
  BarChart2,
  PieChart as PieChartIcon,
  TrendingUp,
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

const COLORS = ["#00D4FF", "#0080FF", "#FFBB28", "#FF8042"];

export default function DashboardPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Stats Calculation
  const statusData = [
    {
      name: "Pendientes",
      value: proposals.filter((p) => p.status === "pending").length,
      color: "#FBBF24", // warm yellow
    },
    {
      name: "Aceptadas",
      value: proposals.filter((p) => p.status === "accepted").length,
      color: "#22C55E", // green
    },
    {
      name: "Rechazadas",
      value: proposals.filter((p) => p.status === "rejected").length,
      color: "#EF4444", // red
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
    setMounted(true);
    const user = localStorage.getItem("admin_user");
    if (!user) {
      router.push("/admin/login");
      return;
    }
    fetchProposals();
  }, [router]);

  const fetchProposals = async () => {
    try {
      const res = await fetch("/api/proposals?_sort=date&_order=desc");
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
      await fetch(`/api/proposals/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
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
      await fetch(`/api/proposals/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
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

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Bienvenido al panel de control de{" "}
            <span className="text-primary font-semibold">CodeRAM</span>
          </p>
        </div>
        <div className="flex gap-3">{/* Quick Actions if needed later */}</div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-2xl border border-border shadow-lg shadow-primary/5 hover:border-primary/30 transition-all group">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Total Propuestas
              </p>
              <h3 className="text-4xl font-bold text-foreground mt-2">
                {proposals.length}
              </h3>
            </div>
            <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-green-400">
            <span>+12%</span>
            <span className="text-muted-foreground">vs mes pasado</span>
          </div>
        </div>

        <div className="bg-card p-6 rounded-2xl border border-border hover:border-yellow-500/30 transition-all group">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Pendientes
              </p>
              <h3 className="text-4xl font-bold text-foreground mt-2">
                {proposals.filter((p) => p.status === "pending").length}
              </h3>
            </div>
            <div className="bg-yellow-500/10 p-3 rounded-xl group-hover:bg-yellow-500/20 transition-colors">
              <Clock className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
          <div className="mt-4 text-xs text-muted-foreground bg-yellow-500/5 py-1 px-2 rounded-lg inline-block">
            Requieren atención
          </div>
        </div>

        <div className="bg-card p-6 rounded-2xl border border-border hover:border-green-500/30 transition-all group">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Tasa de Aceptación
              </p>
              <h3 className="text-4xl font-bold text-foreground mt-2">
                {proposals.length > 0
                  ? Math.round(
                      (proposals.filter((p) => p.status === "accepted").length /
                        proposals.length) *
                        100
                    )
                  : 0}
                %
              </h3>
            </div>
            <div className="bg-green-500/10 p-3 rounded-xl group-hover:bg-green-500/20 transition-colors">
              <Check className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <div className="mt-4 h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{
                width: `${
                  proposals.length > 0
                    ? (proposals.filter((p) => p.status === "accepted").length /
                        proposals.length) *
                      100
                    : 0
                }%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-2xl border border-border hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <PieChartIcon className="w-5 h-5 text-primary" />
            Distribución de Estados
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "12px",
                    color: "#fff",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
                  }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card p-6 rounded-2xl border border-border hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-primary" />
            Servicios Más Solicitados
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={serviceData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#374151"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  fontSize={12}
                  tickMargin={10}
                  stroke="#9CA3AF"
                  hide
                />
                <YAxis allowDecimals={false} stroke="#9CA3AF" fontSize={12} />
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.05)" }}
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "12px",
                    color: "#fff",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
                  }}
                  labelStyle={{ color: "#9CA3AF", marginBottom: "0.5rem" }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={60}>
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

      {/* Proposals List */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">
            Solicitudes Recientes
          </h2>
          {/* <button className="text-sm text-primary hover:text-primary/80 font-medium">Ver todas</button> */}
        </div>

        <div className="grid gap-4">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              className="bg-card rounded-xl border border-border p-6 transition-all hover:border-primary/40 hover:shadow-md group"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold border border-gray-600">
                        {proposal.nombre.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">
                          {proposal.nombre}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {new Date(proposal.date).toLocaleDateString()} •{" "}
                          {new Date(proposal.date).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                    <div>
                      {proposal.status === "pending" && (
                        <span className="bg-yellow-500/10 text-yellow-500 text-xs px-3 py-1 rounded-full flex items-center gap-1 border border-yellow-500/20 font-medium w-fit">
                          <Clock className="w-3 h-3" /> Pendiente
                        </span>
                      )}
                      {proposal.status === "accepted" && (
                        <span className="bg-green-500/10 text-green-500 text-xs px-3 py-1 rounded-full flex items-center gap-1 border border-green-500/20 font-medium w-fit">
                          <Check className="w-3 h-3" /> Aceptada
                        </span>
                      )}
                      {proposal.status === "rejected" && (
                        <span className="bg-red-500/10 text-red-500 text-xs px-3 py-1 rounded-full flex items-center gap-1 border border-red-500/20 font-medium w-fit">
                          <X className="w-3 h-3" /> Rechazada
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground bg-muted/30 p-2 rounded-lg">
                      <Mail className="w-4 h-4 text-primary" />
                      {proposal.email}
                    </div>
                    {(proposal.empresa || proposal.servicio) && (
                      <div className="flex items-center gap-2 text-muted-foreground bg-muted/30 p-2 rounded-lg">
                        <Building className="w-4 h-4 text-primary" />
                        <span className="truncate">
                          {proposal.empresa || "Particular"} —{" "}
                          {proposal.servicio}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="bg-muted/10 p-4 rounded-lg text-foreground text-sm leading-relaxed border border-border/50">
                    <p className="font-semibold text-xs text-muted-foreground mb-1 uppercase tracking-wide">
                      Mensaje:
                    </p>
                    {proposal.mensaje}
                  </div>

                  {/* Response Section */}
                  {proposal.response && (
                    <div className="bg-primary/5 p-4 rounded-lg border-l-2 border-primary">
                      <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wide">
                        Tu Respuesta:
                      </p>
                      <p className="text-sm text-foreground/90 italic">
                        "{proposal.response}"
                      </p>
                    </div>
                  )}

                  {replyingTo === proposal.id && (
                    <div className="mt-4 space-y-3 bg-card p-4 rounded-xl border border-primary/30 shadow-lg shadow-primary/5 animate-in fade-in zoom-in-95">
                      <h4 className="text-sm font-semibold text-primary">
                        Redactar Respuesta
                      </h4>
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="w-full bg-background border border-border rounded-lg p-3 text-sm text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition min-h-[100px]"
                        placeholder={`Hola ${
                          proposal.nombre.split(" ")[0]
                        }, gracias por contactarnos...`}
                        autoFocus
                      />
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => {
                            setReplyingTo(null);
                            setReplyText("");
                          }}
                          className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted text-muted-foreground transition-colors"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={() => handleReply(proposal.id)}
                          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95"
                        >
                          Enviar Respuesta
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex lg:flex-col gap-2 justify-start border-t lg:border-t-0 lg:border-l border-border pt-4 lg:pt-0 lg:pl-6 min-w-[160px]">
                  {proposal.status === "pending" && !replyingTo && (
                    <>
                      <button
                        onClick={() => updateStatus(proposal.id, "accepted")}
                        className="flex-1 flex items-center justify-center gap-2 bg-green-500/10 text-green-500 border border-green-500/20 px-4 py-2.5 rounded-lg hover:bg-green-500 hover:text-white transition-all text-sm font-medium group/btn"
                      >
                        <Check className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        Aceptar
                      </button>

                      <button
                        onClick={() => {
                          setReplyingTo(proposal.id);
                          setReplyText("");
                        }}
                        className="flex-1 flex items-center justify-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2.5 rounded-lg hover:bg-primary hover:text-white transition-all text-sm font-medium group/btn"
                      >
                        <Mail className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        Responder
                      </button>

                      <button
                        onClick={() => updateStatus(proposal.id, "rejected")}
                        className="flex-1 flex items-center justify-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-2.5 rounded-lg hover:bg-red-500 hover:text-white transition-all text-sm font-medium group/btn"
                      >
                        <X className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        Rechazar
                      </button>
                    </>
                  )}

                  {!proposal.response &&
                    !replyingTo &&
                    proposal.status === "accepted" && (
                      <button
                        onClick={() => {
                          setReplyingTo(proposal.id);
                          setReplyText("");
                        }}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-lg shadow-blue-500/20"
                      >
                        <Mail className="w-4 h-4" />
                        Enviar Correo
                      </button>
                    )}

                  {proposal.status !== "pending" && !replyingTo && (
                    <button
                      onClick={() => updateStatus(proposal.id, "pending")}
                      className="mt-2 text-xs text-muted-foreground hover:text-white underline decoration-muted-foreground/50 hover:decoration-white transition-all text-center"
                    >
                      Marcar como pendiente
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {proposals.length === 0 && (
            <div className="text-center py-20 bg-card/50 rounded-2xl border border-dashed border-border/50">
              <div className="bg-muted p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground">
                No hay propuestas aún
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto mt-1">
                Las solicitudes de contacto de los clientes aparecerán aquí.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
