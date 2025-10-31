/**
 * Main Application Page
 * Prompt Buddy - AI Prompt Generator
 */

import { useState } from "react";
import { toast } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PromptInput } from "@/components/PromptInput";
import { PromptTypeSelector } from "@/components/PromptTypeSelector";
import { PurposeSelector } from "@/components/PurposeSelector";
import { FrameworkSelector } from "@/components/FrameworkSelector";
import { GenerateButton } from "@/components/GenerateButton";
import { OutputDisplay } from "@/components/OutputDisplay";
import { AboutSection } from "@/components/AboutSection";
import { PromptType, PromptPurpose, PromptFramework, PromptResponse } from "@/types/prompt";
import { generatePrompt } from "@/lib/promptGenerator";
import { Card } from "@/components/ui/card";

const Index = () => {
  // State management
  const [baseIdea, setBaseIdea] = useState("");
  const [promptType, setPromptType] = useState<PromptType>("text");
  const [purpose, setPurpose] = useState<PromptPurpose>("general_knowledge");
  const [framework, setFramework] = useState<PromptFramework>("RACE");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PromptResponse | null>(null);

  /**
   * Handle prompt generation
   */
  const handleGenerate = async () => {
    // Validation
    if (!baseIdea.trim()) {
      toast.error("Please enter your idea or concept");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await generatePrompt({
        baseIdea: baseIdea.trim(),
        type: promptType,
        purpose,
        framework: promptType === "text" ? framework : undefined
      });

      setResult(response);
      toast.success("Prompt generated successfully!");
    } catch (error) {
      console.error("Generation error:", error);
      toast.error("Failed to generate prompt. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-medium mb-4">
            Production-Grade Prompt Engineering
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Craft Perfect Prompts with
            <span className="bg-gradient-primary bg-clip-text text-transparent"> AI Frameworks</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leverage 25+ industry-standard prompt engineering frameworks to generate structured,
            effective prompts for any AI model
          </p>
        </div>

        {/* Main Generator Card */}
        <Card className="max-w-4xl mx-auto p-6 md:p-8 bg-card border-border shadow-elevated">
          <div className="space-y-6">
            {/* Input Section */}
            <PromptInput value={baseIdea} onChange={setBaseIdea} />

            {/* Configuration Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PromptTypeSelector value={promptType} onChange={setPromptType} />
              <PurposeSelector value={purpose} onChange={setPurpose} />
            </div>

            {/* Framework Selector (only for text prompts) */}
            {promptType === "text" && (
              <FrameworkSelector value={framework} onChange={setFramework} />
            )}

            {/* Generate Button */}
            <GenerateButton
              onClick={handleGenerate}
              loading={loading}
              disabled={!baseIdea.trim()}
            />

            {/* Output Display */}
            {result && <OutputDisplay result={result} />}
          </div>
        </Card>

        {/* About Section */}
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
