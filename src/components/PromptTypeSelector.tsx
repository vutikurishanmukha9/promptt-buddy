/**
 * PromptTypeSelector Component
 * Toggle between Text and JSON output formats
 */

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Code } from "lucide-react";
import { PromptType } from "@/types/prompt";

interface PromptTypeSelectorProps {
  value: PromptType;
  onChange: (value: PromptType) => void;
}

export const PromptTypeSelector = ({ value, onChange }: PromptTypeSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Output Format</label>
      <Tabs value={value} onValueChange={(val) => onChange(val as PromptType)}>
        <TabsList className="grid w-full grid-cols-2 bg-secondary">
          <TabsTrigger value="text" className="gap-2">
            <FileText className="h-4 w-4" />
            Text Prompt
          </TabsTrigger>
          <TabsTrigger value="json" className="gap-2">
            <Code className="h-4 w-4" />
            JSON Prompt
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
