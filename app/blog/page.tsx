"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Loader2 } from "lucide-react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import PageHeader from "@/app/components/PageHeader";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string; // Markdown
  created_at: string;
  image_url?: string;
  author_id?: string;
}

export default function BlogListingPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // We need a dummy showSection for Navigation to work
  const showSection = (id: string) => {
    window.location.href = `/#${id}`;
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts?published=true");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  // Helper to strip markdown for excerpt
  const getExcerpt = (content: string) => {
    if (!content) return "";
    return (
      content
        .replace(/[#*`_]/g, "") // Remove common markdown chars
        .substring(0, 150) + "..."
    );
  };

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans selection:bg-primary/30">
      <Navigation showSection={showSection} activeSection="" />

      <PageHeader
        title="Blog & Noticias"
        description="Descubre las últimas novedades, tendencias y consejos sobre tecnología y desarrollo de software."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Blog" }]}
      />

      <main className="flex-grow w-full py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-12 h-12 animate-spin text-primary" />
            </div>
          ) : (
            <>
              {posts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <article
                      key={post.id}
                      className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col hover:-translate-y-1"
                    >
                      {/* Placeholder Image */}
                      <div className="h-48 bg-muted w-full object-cover flex items-center justify-center text-muted-foreground relative overflow-hidden">
                        {post.image_url ? (
                          <img
                            src={post.image_url}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                            <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                              CodeRAM
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center gap-2 text-sm text-primary mb-3 font-medium">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.created_at).toLocaleDateString(
                              "es-ES",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>

                        <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
                          {getExcerpt(post.content)}
                        </p>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary hover:gap-3 transition-all mt-auto"
                        >
                          Leer artículo <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-card rounded-2xl border border-border max-w-2xl mx-auto">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium mb-1">
                    No hay publicaciones disponibles
                  </p>
                  <p className="text-muted-foreground text-sm">
                    ¡Vuelve pronto para ver nuevo contenido de nuestro equipo!
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
