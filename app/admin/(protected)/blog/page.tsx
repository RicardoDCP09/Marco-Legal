"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Loader2,
  Newspaper,
  Calendar,
  PenLine,
  FileText,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published: boolean;
  created_at: string;
}

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("admin_user");
    if (!user) {
      router.push("/admin/login");
      return;
    }
    fetchPosts();
  }, [router]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar este artículo?")) return;
    try {
      await fetch(`http://localhost:3001/posts/${id}`, {
        method: "DELETE",
      });
      setPosts(posts.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          published: true,
          // Auto generate simple slug if not provided logic is in backend usually,
          // but we can ensure title triggers it.
        }),
      });
      if (!res.ok) throw new Error("Failed to create post");
      await fetchPosts();
      setIsCreating(false);
      setFormData({ title: "", excerpt: "", content: "" });
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Error al crear la publicación");
    } finally {
      setSubmitting(false);
    }
  };

  const togglePublish = async (post: Post) => {
    try {
      const updatedPost = { ...post, published: !post.published };
      await fetch(`http://localhost:3001/posts/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: updatedPost.published }),
      });
      setPosts(posts.map((p) => (p.id === post.id ? updatedPost : p)));
    } catch (error) {
      console.error("Error updating publish status", error);
    }
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 p-3 rounded-xl border border-primary/30">
            <Newspaper className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">
              Blog Manager
            </h1>
            <p className="text-muted-foreground mt-1">
              Crea y administra las noticias y artículos de tu blog.
            </p>
          </div>
        </div>

        {!isCreating && (
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95 text-sm font-semibold"
          >
            <Plus className="w-5 h-5" />
            Nueva Publicación
          </button>
        )}
      </div>

      {isCreating ? (
        <div className="bg-card rounded-2xl border border-border shadow-2xl shadow-black/20 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          <div className="p-6 border-b border-border bg-muted/30 flex justify-between items-center">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <PenLine className="w-5 h-5 text-primary" />
              Redactar Nuevo Artículo
            </h3>
            <button
              onClick={() => setIsCreating(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Cerrar"
            >
              <Plus className="w-6 h-6 rotate-45" />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Editor Form */}
            <form
              onSubmit={handleCreate}
              className="p-6 space-y-5 border-b lg:border-b-0 lg:border-r border-border"
            >
              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Título
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition font-semibold text-lg"
                  placeholder="Ej: Transformación Digital 2025"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Extracto Corto
                </label>
                <textarea
                  rows={2}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
                  placeholder="Breve descripción para la tarjeta del blog..."
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Contenido (Markdown)
                </label>
                <textarea
                  required
                  rows={12}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 font-mono text-sm text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition resize-none flex-1"
                  placeholder="# Escribe tu artículo aquí using Markdown..."
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="px-5 py-2.5 text-muted-foreground hover:bg-muted rounded-xl transition font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl hover:bg-primary/90 disabled:opacity-50 flex items-center gap-2 shadow-lg shadow-primary/20 transition font-semibold"
                >
                  {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  Publicar Artículo
                </button>
              </div>
            </form>

            {/* Live Preview */}
            <div className="p-6 bg-muted/10 hidden lg:block h-full overflow-y-auto max-h-[800px]">
              <div className="uppercase tracking-widest text-xs font-bold text-muted-foreground mb-4">
                Vista Previa en Vivo
              </div>
              <div className="prose prose-invert prose-sm max-w-none">
                {formData.title && <h1>{formData.title}</h1>}
                {formData.excerpt && (
                  <p className="text-xl text-muted-foreground lead">
                    {formData.excerpt}
                  </p>
                )}
                <ReactMarkdown>
                  {formData.content || "*El contenido aparecerá aquí...*"}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-card p-5 rounded-2xl border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between group hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="bg-muted p-3 rounded-xl hidden sm:block">
                  <FileText className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <button
                      onClick={() => togglePublish(post)}
                      className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all ${
                        post.published
                          ? "bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20"
                          : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20"
                      }`}
                    >
                      {post.published ? (
                        <>
                          <Eye className="w-3 h-3" /> Publicado
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3 h-3" /> Borrador
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 sm:mt-0 w-full sm:w-auto border-t sm:border-t-0 border-border pt-3 sm:pt-0">
                <button
                  onClick={() => togglePublish(post)}
                  className="flex-1 sm:flex-none p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors text-sm sm:text-base text-center"
                >
                  {post.published ? "Ocultar" : "Publicar"}
                </button>
                <div className="w-px h-4 bg-border hidden sm:block"></div>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="flex-1 sm:flex-none p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors flex items-center justify-center gap-2"
                  title="Eliminar"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="sm:hidden text-sm font-medium">
                    Eliminar
                  </span>
                </button>
              </div>
            </div>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-20 bg-card/50 rounded-2xl border border-dashed border-border/50">
              <div className="bg-muted p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Newspaper className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground">
                No hay publicaciones
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto mt-1">
                Comienza a escribir para compartir noticias con tu audiencia.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
