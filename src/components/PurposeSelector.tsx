/**
 * PurposeSelector Component
 * Dropdown to select the purpose/use case of the prompt
 */

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PromptPurpose } from "@/types/prompt";
import { PURPOSE_LABELS } from "@/lib/promptFrameworks";
import { Target } from "lucide-react";

interface PurposeSelectorProps {
  value: PromptPurpose;
  onChange: (value: PromptPurpose) => void;
}

export const PurposeSelector = ({ value, onChange }: PurposeSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="purpose-select" className="flex items-center gap-2">
        <Target className="h-4 w-4" />
        Purpose
      </Label>
      <Select value={value} onValueChange={(val) => onChange(val as PromptPurpose)}>
        <SelectTrigger id="purpose-select" className="bg-secondary/50 border-border">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(PURPOSE_LABELS).map(([key, label]) => (
            <SelectItem key={key} value={key}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
