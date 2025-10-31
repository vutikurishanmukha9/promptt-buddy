/**
 * OutputDisplay Component
 * Displays generated prompt with syntax highlighting and copy functionality
 */

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PromptResponse } from "@/types/prompt";

interface OutputDisplayProps {
  result: PromptResponse | null;
}

export const OutputDisplay = ({ result }: OutputDisplayProps) => {
  const [copied, setCopied] = useState(false);

  if (!result) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result.prompt);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="space-y-3 animate-in fade-in-50 slide-in-from-bottom-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Generated Prompt</h3>
          {result.framework && (
            <p className="text-sm text-muted-foreground">Framework: {result.framework}</p>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="gap-2"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-accent" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </Button>
      </div>
      
      <Card className="bg-code-bg border-code-border p-0 overflow-hidden shadow-elevated">
        <div className="bg-muted/30 px-4 py-2 border-b border-code-border flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-accent/50" />
          </div>
          <span className="text-xs text-muted-foreground ml-2">
            {result.type === "json" ? "prompt.json" : "prompt.txt"}
          </span>
        </div>
        <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
          <code className="text-foreground/90">{result.prompt}</code>
        </pre>
      </Card>
    </div>
  );
};
