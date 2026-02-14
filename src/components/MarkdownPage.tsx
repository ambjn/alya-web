import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";
import { Footer } from "./Footer";

interface MarkdownPageProps {
  file: string;
}

const proseClasses = [
  "prose prose-invert prose-lg max-w-none",
  "selection:bg-white/20 selection:text-white",
  "prose-headings:font-medium prose-headings:tracking-tight",
  "prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:mb-12 prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-b prose-h1:from-white prose-h1:to-white/60 prose-h1:pb-2",
  "prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-white/90 prose-h2:font-normal",
  "prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-white/80 prose-h3:font-normal",
  "prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:mb-6 prose-p:font-light",
  "prose-a:text-blue-400/90 prose-a:no-underline hover:prose-a:text-blue-300 prose-a:transition-colors prose-a:border-b prose-a:border-blue-400/20 hover:prose-a:border-blue-300/50",
  "prose-strong:text-white/90 prose-strong:font-medium",
  "prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6 prose-li:marker:text-zinc-600 prose-li:pl-2 prose-li:text-zinc-400",
  "prose-blockquote:border-l-2 prose-blockquote:border-white/10 prose-blockquote:bg-white/[0.02] prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-zinc-300 prose-blockquote:my-10",
  "prose-hr:border-white/5 prose-hr:my-16",
].join(" ");

export const MarkdownPage = ({ file }: MarkdownPageProps) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/docs/${file}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${file}`);
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [file]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-white/50 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 text-center">
        <div className="bg-red-500/10 p-4 rounded-full mb-4">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Unable to load content</h2>
        <p className="text-white/60 mb-8 max-w-md">{error}</p>
        <Link
          to="/"
          className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none blur-3xl" />
      </div>

      <nav className="relative z-50 p-6 md:p-10 flex justify-between items-center max-w-7xl mx-auto w-full">
        <Link
          to="/"
          className="group flex items-center gap-3 text-white/50 hover:text-white transition-all duration-300"
        >
          <div className="p-2.5 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/5 group-hover:border-white/10 transition-all backdrop-blur-md">
            <ArrowLeft size={16} />
          </div>
          <span className="font-medium text-sm tracking-wide">Back to Home</span>
        </Link>
      </nav>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pb-32 flex-grow flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-grow"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-blue-500/10 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <div className="relative backdrop-blur-2xl bg-black/40 border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl ring-1 ring-white/5">
              <article className={proseClasses}>
                <ReactMarkdown>{content}</ReactMarkdown>
              </article>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
