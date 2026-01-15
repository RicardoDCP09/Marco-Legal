"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Loader2, Sparkles } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  image_url?: string;
}

export default function LatestPostsSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts?published=true");
        if (res.ok) {
          const data = await res.json();
          // Take first 3
          setPosts(data.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getExcerpt = (content: string) => {
    if (!content) return "";
    return content.replace(/[#*`_]/g, "").substring(0, 100) + "...";
  };

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (posts.length === 0) return null;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
              <Sparkles className="w-3 h-3" />
              <span>Blog & Novedades</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Últimas Publicaciones
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mantente al día con las últimas tendencias tecnológicas y noticias
              de CodeRAM.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.1}>
              <article className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                <div className="h-48 bg-muted w-full object-cover flex items-center justify-center text-muted-foreground relative overflow-hidden">
                  {post.image_url ? (
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                        CodeRAM
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-primary mb-3 font-medium">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {new Date(post.created_at).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm flex-grow">
                    {getExcerpt(post.content)}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-foreground text-sm font-semibold hover:text-primary hover:gap-3 transition-all mt-auto"
                  >
                    Leer más <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Ver todas las publicaciones
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
