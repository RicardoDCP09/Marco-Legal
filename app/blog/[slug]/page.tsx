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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <Navigation showSection={showSection} activeSection="" />

      <main className="flex-grow w-full">
        {/* Hero / Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Volver al Blog
            </Link>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
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

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-lg prose-blue max-w-none">
            {/* We use ReactMarkdown to render the content responsibly */}
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
