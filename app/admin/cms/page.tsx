"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, Loader2 } from "lucide-react";

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
    // Check auth
    const user = localStorage.getItem("admin_user");
    if (!user) {
      router.push("/admin/login");
      return;
    }

    fetchContent();
  }, [router]);

  const fetchContent = async () => {
    try {
      const res = await fetch("http://localhost:3001/content");
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
      await fetch(`http://localhost:3001/content/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      // Show success feedback if needed
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <button
            onClick={() => router.push("/admin/dashboard")}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            Gestor de Contenido
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {content.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 capitalize">
                Sección: {item.id}
              </h2>
              <button
                onClick={() => handleSave(item)}
                disabled={saving === item.id}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {saving === item.id ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                Guardar
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Título
                </label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) =>
                    handleChange(item.id, "title", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contenido
                </label>
                <textarea
                  value={item.text}
                  onChange={(e) =>
                    handleChange(item.id, "text", e.target.value)
                  }
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
