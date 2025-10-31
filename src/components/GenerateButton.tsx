/**
 * GenerateButton Component
 * Primary CTA button to generate prompts with loading state
 */

import { Button } from "@/components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";

interface GenerateButtonProps {
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}

export const GenerateButton = ({ onClick, loading, disabled }: GenerateButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      className="w-full h-12 text-base font-semibold bg-gradient-primary hover:opacity-90 shadow-glow"
    >
      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="h-5 w-5" />
          Generate Prompt
        </>
      )}
    </Button>
  );
};
