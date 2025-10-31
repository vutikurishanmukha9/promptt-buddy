/**
 * PromptInput Component
 * Main text input area for user's base idea
 */

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const PromptInput = ({ value, onChange }: PromptInputProps) => {
  return (
    <div className="space-y-3">
      <Label htmlFor="prompt-input" className="text-base font-semibold">
        Your Idea or Concept
      </Label>
      <Textarea
        id="prompt-input"
        placeholder="Enter your base idea, question, or concept here... For example: 'Create a marketing campaign for eco-friendly products'"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[120px] bg-secondary/50 border-border focus:border-primary resize-none text-base"
      />
      <p className="text-xs text-muted-foreground">
        Describe what you want to accomplish or explore
      </p>
    </div>
  );
};
