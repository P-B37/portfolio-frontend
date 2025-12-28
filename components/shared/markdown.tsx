import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

interface MarkdownProps {
  content: string;
  className?: string;
}

/**
 * Minimal, safe markdown renderer
 */
export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-none",
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h2 className="mt-6 text-xl font-semibold" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h3 className="mt-5 text-lg font-semibold" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="leading-relaxed text-muted-foreground" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-6" {...props} />
          ),
          code: ({ node, inline, ...props }) =>
            inline ? (
              <code
                className="rounded bg-muted px-1 py-0.5 text-sm"
                {...props}
              />
            ) : (
              <code
                className="block rounded-lg bg-muted p-4 text-sm"
                {...props}
              />
            ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
