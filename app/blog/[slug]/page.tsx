"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft, Loader2, User } from "lucide-react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import ReactMarkdown from "react-markdown";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string; // Markdown
  created_at: string;
  image_url?: string;
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  const showSection = (id: string) => {
    window.location.href = `/#${id}`;
  };

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`http://localhost:3001/posts/${slug}`);
      if (!res.ok) {
        if (res.status === 404) {
          router.push("/blog"); // Or 404 page
          return;
        }
        throw new Error("Failed to fetch post");
      }
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans selection:bg-primary/30">
      <Navigation showSection={showSection} activeSection="" />

      <main className="flex-grow w-full pt-20">
        {/* Hero / Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
              Volver al Blog
            </Link>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                <Calendar className="w-3 h-3" />
                {new Date(post.created_at).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" /> Equipo CodeRAM
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-card rounded-2xl shadow-lg shadow-black/20 border border-border p-8 md:p-12 prose prose-invert prose-lg prose-blue max-w-none">
            {/* We use ReactMarkdown to render the content responsibly */}
            <ReactMarkdown
              components={{
                // Custom styling for markdown elements if needed
                h1: ({ node, ...props }) => (
                  <h1 className="text-foreground" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-foreground mt-8 mb-4" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-foreground mt-6 mb-3" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="text-muted-foreground leading-relaxed mb-4"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    className="text-muted-foreground list-disc pl-6 mb-4"
                    {...props}
                  />
                ),
                li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                strong: ({ node, ...props }) => (
                  <strong className="text-foreground font-bold" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a
                    className="text-primary hover:text-primary/80 underline decoration-primary/50"
                    {...props}
                  />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6"
                    {...props}
                  />
                ),
                code: ({ node, ...props }) => (
                  <code
                    className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-sm font-mono"
                    {...props}
                  />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
