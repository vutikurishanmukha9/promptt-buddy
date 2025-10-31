/**
 * Header Component
 * Application header with branding
 */

import { Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <div className="absolute inset-0 blur-lg bg-primary/30 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Prompt Buddy
              </h1>
              <p className="text-xs text-muted-foreground">AI Prompt Engineering Assistant</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
