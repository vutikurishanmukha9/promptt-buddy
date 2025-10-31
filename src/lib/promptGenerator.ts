/**
 * Prompt Generator Logic
 * Handles the generation of structured prompts based on frameworks
 */

import { PromptRequest, PromptResponse } from "@/types/prompt";
import { FRAMEWORKS, PURPOSE_LABELS } from "./promptFrameworks";

/**
 * Generate a text prompt using the selected framework
 */
export const generateTextPrompt = (request: PromptRequest): string => {
  const { baseIdea, purpose, framework } = request;
  
  if (!framework) return baseIdea;
  
  const frameworkInfo = FRAMEWORKS[framework];
  const purposeLabel = PURPOSE_LABELS[purpose];
  
  let prompt = `# ${frameworkInfo.fullName} Framework\n\n`;
  prompt += `**Purpose:** ${purposeLabel}\n`;
  prompt += `**Base Idea:** ${baseIdea}\n\n`;
  prompt += `---\n\n`;
  
  frameworkInfo.structure.forEach((section, index) => {
    prompt += `## ${section}\n\n`;
    prompt += `[Define the ${section.toLowerCase()} for: "${baseIdea}"]\n\n`;
  });
  
  prompt += `---\n\n`;
  prompt += `**Instructions:**\n`;
  prompt += `- Fill in each section with specific, actionable details\n`;
  prompt += `- Ensure clarity and precision in your ${purposeLabel.toLowerCase()} goal\n`;
  prompt += `- Use concrete examples where applicable\n`;
  
  return prompt;
};

/**
 * Generate a JSON prompt structure
 */
export const generateJSONPrompt = (request: PromptRequest): string => {
  const { baseIdea, purpose } = request;
  const purposeLabel = PURPOSE_LABELS[purpose];
  
  const jsonStructure = {
    role: "You are an expert AI assistant",
    context: `Purpose: ${purposeLabel}`,
    goal: baseIdea,
    constraints: [
      "Be specific and detailed",
      "Provide actionable insights",
      "Use clear, concise language"
    ],
    format: "structured_output",
    examples: [],
    tone: "professional",
    audience: "general",
    expectedOutput: {
      type: "detailed_response",
      format: "markdown"
    }
  };
  
  return JSON.stringify(jsonStructure, null, 2);
};

/**
 * Mock API call to generate prompt (placeholder for real backend)
 */
export const generatePrompt = async (request: PromptRequest): Promise<PromptResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In production, this would call: https://api.promptbuddy.app/generate
  // For now, generate locally
  
  let prompt: string;
  
  if (request.type === "json") {
    prompt = generateJSONPrompt(request);
  } else {
    prompt = generateTextPrompt(request);
  }
  
  return {
    prompt,
    framework: request.framework,
    type: request.type
  };
};
