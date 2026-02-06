import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownPageProps {
    file: string;
}

export const MarkdownPage = ({ file }: MarkdownPageProps) => {
    const [content, setContent] = useState("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`/docs/${file}`)
            .then((res) => {
                if (!res.ok) throw new Error(`Failed to load ${file}`);
                return res.text();
            })
            .then(setContent)
            .catch((err) => setError(err.message));
    }, [file]);

    if (error) {
        return (
            <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-8">
                <p className="text-red-400">{error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-8">
            <div className="max-w-2xl text-center text-white prose prose-invert prose-sm">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
};
