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
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-black to-black pointer-events-none" />
            </div>

            <nav className="relative z-50 p-6 md:p-8 flex justify-between items-center max-w-7xl mx-auto w-full">
                <Link
                    to="/"
                    className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
                >
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/5 group-hover:border-white/10 transition-all">
                        <ArrowLeft size={18} />
                    </div>
                    <span className="font-medium tracking-wide">Back to Home</span>
                </Link>
            </nav>

            <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-24 flex-grow flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex-grow"
                >
                    <div className="relative group">

                        <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-16 shadow-2xl">
                            <article className="prose prose-invert prose-lg max-w-none 
                                prose-headings:font-bold prose-headings:tracking-tight 
                                prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:mb-8 prose-h1:text-white prose-h1:leading-tight
                                prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-white/90
                                prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-white/80
                                prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6
                                prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-a:transition-colors
                                prose-strong:text-white prose-strong:font-semibold
                                prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6 prose-li:marker:text-blue-500/50 prose-li:pl-2
                                prose-blockquote:border-l-4 prose-blockquote:border-blue-500/50 prose-blockquote:bg-blue-900/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:my-8
                                prose-hr:border-white/10 prose-hr:my-12">
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
