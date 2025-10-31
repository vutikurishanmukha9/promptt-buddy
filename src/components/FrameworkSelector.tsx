/**
 * FrameworkSelector Component
 * Dropdown to select prompt engineering framework
 */

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PromptFramework } from "@/types/prompt";
import { FRAMEWORKS } from "@/lib/promptFrameworks";
import { Layers } from "lucide-react";

interface FrameworkSelectorProps {
  value: PromptFramework;
  onChange: (value: PromptFramework) => void;
}

export const FrameworkSelector = ({ value, onChange }: FrameworkSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="framework-select" className="flex items-center gap-2">
        <Layers className="h-4 w-4" />
        Prompt Framework
      </Label>
      <Select value={value} onValueChange={(val) => onChange(val as PromptFramework)}>
        <SelectTrigger id="framework-select" className="bg-secondary/50 border-border">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {Object.entries(FRAMEWORKS).map(([key, framework]) => (
            <SelectItem key={key} value={key}>
              <div className="flex flex-col">
                <span className="font-semibold">{framework.name}</span>
                <span className="text-xs text-muted-foreground">{framework.fullName}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-xs text-muted-foreground">
        {FRAMEWORKS[value].description}
      </p>
    </div>
  );
};
