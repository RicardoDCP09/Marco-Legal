"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Loader2, PenTool, LayoutTemplate } from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  text: string;
}

export default function CMSPage() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("admin_user");
    if (!user) {
      router.push("/admin/login");
      return;
    }
    fetchContent();
  }, [router]);

  const fetchContent = async () => {
    try {
      const res = await fetch("/api/content");
      const data = await res.json();
      setContent(data);
    } catch (error) {
      console.error("Error fetching content:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (item: ContentItem) => {
    setSaving(item.id);
    try {
      await fetch(`/api/content/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    } catch (error) {
      console.error("Error saving content:", error);
      alert("Error al guardar los cambios");
    } finally {
      setSaving(null);
    }
  };

  const handleChange = (
    id: string,
    field: keyof ContentItem,
    value: string
  ) => {
    setContent((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="bg-primary/20 p-3 rounded-xl border border-primary/30">
          <LayoutTemplate className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Gestor de Contenido
          </h1>
          <p className="text-muted-foreground mt-1">
            Edita los textos de las secciones principales de la landing page.
          </p>
        </div>
      </div>

      <div className="grid gap-8">
        {content.map((item) => (
          <div
            key={item.id}
            className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-primary/40 transition-colors shadow-lg shadow-black/20"
          >
            <div className="flex justify-between items-center p-6 border-b border-border bg-muted/20">
              <h2 className="text-lg font-semibold text-foreground capitalize flex items-center gap-2">
                <PenTool className="w-4 h-4 text-primary" />
                Sección: {item.id}
              </h2>
              <button
                onClick={() => handleSave(item)}
                disabled={saving === item.id}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95"
              >
                {saving === item.id ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                {saving === item.id ? "Guardando..." : "Guardar Cambios"}
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Título de la Sección
                </label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) =>
                    handleChange(item.id, "title", e.target.value)
                  }
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition font-medium text-lg"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Contenido del Texto
                </label>
                <textarea
                  value={item.text}
                  onChange={(e) =>
                    handleChange(item.id, "text", e.target.value)
                  }
                  rows={6}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-muted-foreground focus:text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition resize-none leading-relaxed"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
