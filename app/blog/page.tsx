"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Loader2 } from "lucide-react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

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

  // We need a dummy showSection for Navigation to work,
  // though on this page it might redirect or do nothing if sections aren't present.
  // Ideally Navigation should handle being on a different route.
  // For now, we'll implement a simple redirect to home with hash
  const showSection = (id: string) => {
    window.location.href = `/#${id}`;
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:3001/posts?published=true");
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helper to strip markdown for excerpt (very basic)
  const getExcerpt = (content: string) => {
    return (
      content
        .replace(/[#*`_]/g, "") // Remove common markdown chars
        .substring(0, 150) + "..."
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <Navigation showSection={showSection} activeSection="" />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & Noticias
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre las últimas novedades, tendencias y consejos sobre
            tecnología y desarrollo de software.
          </p>
        </div>

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
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                  >
                    {/* Placeholder Image if no image_url */}
                    <div className="h-48 bg-gray-200 w-full object-cover flex items-center justify-center text-gray-400">
                      {post.image_url ? (
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-4xl font-bold opacity-20">
                          CodeRAM
                        </span>
                      )}
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
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

                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                        {getExcerpt(post.content)}
                      </p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-auto"
                      >
                        Leer artículo <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <p className="text-lg text-gray-500">
                  No hay publicaciones disponibles en este momento.
                </p>
                <p className="text-gray-400 mt-2">
                  ¡Vuelve pronto para ver nuevo contenido!
                </p>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
