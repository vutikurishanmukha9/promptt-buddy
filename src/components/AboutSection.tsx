/**
 * AboutSection Component
 * Explains what Prompt Buddy does and its features
 */

import { Card } from "@/components/ui/card";
import { BookOpen, Zap, Code2, Brain } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "25+ Frameworks",
      description: "Industry-standard prompt engineering frameworks"
    },
    {
      icon: Code2,
      title: "Text & JSON",
      description: "Generate prompts in multiple formats"
    },
    {
      icon: Zap,
      title: "Purpose-Driven",
      description: "Optimized for specific use cases"
    },
    {
      icon: BookOpen,
      title: "Learn & Apply",
      description: "Understand prompt structure while generating"
    }
  ];

  return (
    <section className="mt-16 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">What is Prompt Buddy?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A production-grade tool that helps you craft effective prompts for AI models using proven
          prompt engineering frameworks. Learn the science of prompting while generating structured,
          high-quality prompts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 bg-card/50 border-border hover:border-primary/50 transition-all hover:shadow-glow"
          >
            <feature.icon className="h-10 w-10 text-primary mb-3" />
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-gradient-glow border-border">
        <h3 className="text-xl font-bold mb-4">Supported AI Models</h3>
        <p className="text-muted-foreground mb-4">
          Generate prompts optimized for:
        </p>
        <div className="flex flex-wrap gap-3">
          {["OpenAI GPT", "Google Gemini", "Anthropic Claude", "Cohere", "Meta Llama"].map((model) => (
            <span
              key={model}
              className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
            >
              {model}
            </span>
          ))}
        </div>
      </Card>
    </section>
  );
};
