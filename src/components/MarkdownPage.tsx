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
            <div className="min-h-screen bg-background flex items-center justify-center p-8">
                <p className="text-destructive">{error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-8">
            <div className="max-w-2xl text-center text-foreground prose dark:prose-invert prose-sm">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
};
