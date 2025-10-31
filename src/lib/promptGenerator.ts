/**
 * Prompt Generator Logic
 * Handles the generation of structured prompts based on frameworks
 */

import { PromptRequest, PromptResponse } from "@/types/prompt";
import { FRAMEWORKS, PURPOSE_LABELS } from "./promptFrameworks";

/**
 * Generate contextual content for framework sections
 */
const generateSectionContent = (
  section: string,
  baseIdea: string,
  purpose: string,
  framework: string
): string => {
  const purposeContext = getPurposeContext(purpose);
  const sectionLower = section.toLowerCase();
  
  // Generate intelligent content based on section type
  if (sectionLower.includes('role') || sectionLower.includes('persona') || sectionLower.includes('capacity')) {
    return `You are an expert AI assistant specializing in ${purposeContext}. Your expertise includes deep knowledge of best practices, current trends, and proven methodologies in this domain. You approach tasks with precision, creativity, and attention to detail.`;
  }
  
  if (sectionLower.includes('context') || sectionLower.includes('background') || sectionLower.includes('situation')) {
    return `The task involves: ${baseIdea}\n\nThis requires understanding of ${purposeContext} principles and applying them effectively. Consider the current state, challenges, and opportunities related to this objective.`;
  }
  
  if (sectionLower.includes('goal') || sectionLower.includes('objective') || sectionLower.includes('purpose') || sectionLower.includes('task')) {
    return `Primary goal: ${baseIdea}\n\nThe objective is to deliver comprehensive, actionable insights for ${purposeContext}. Focus on creating practical, high-quality output that directly addresses the core requirements.`;
  }
  
  if (sectionLower.includes('action') || sectionLower.includes('execution') || sectionLower.includes('process') || sectionLower.includes('operation')) {
    return `Execute the following approach:\n1. Analyze the requirements thoroughly\n2. Apply ${purposeContext} best practices\n3. Generate detailed, structured output\n4. Ensure quality and relevance\n5. Validate against objectives`;
  }
  
  if (sectionLower.includes('expectation') || sectionLower.includes('result') || sectionLower.includes('output') || sectionLower.includes('response')) {
    return `Expected deliverable:\n- High-quality, detailed response addressing: ${baseIdea}\n- Structured format optimized for ${purposeContext}\n- Actionable insights and recommendations\n- Clear, professional communication\n- Practical implementation guidance`;
  }
  
  if (sectionLower.includes('example') || sectionLower.includes('insight')) {
    return `Reference examples and insights relevant to ${purposeContext}. Draw from proven patterns, industry standards, and successful implementations. Use concrete illustrations to clarify abstract concepts.`;
  }
  
  if (sectionLower.includes('strategy') || sectionLower.includes('method') || sectionLower.includes('approach')) {
    return `Strategic approach for ${purposeContext}:\n- Research-backed methodology\n- Systematic execution\n- Quality-focused delivery\n- Iterative refinement\n- Evidence-based decision making`;
  }
  
  if (sectionLower.includes('constraint') || sectionLower.includes('limitation') || sectionLower.includes('scope')) {
    return `Parameters and boundaries:\n- Stay focused on ${purposeContext}\n- Maintain professional standards\n- Ensure accuracy and reliability\n- Consider practical limitations\n- Balance depth with clarity`;
  }
  
  if (sectionLower.includes('style') || sectionLower.includes('tone') || sectionLower.includes('language')) {
    return `Communication style: Professional, clear, and authoritative. Use precise language appropriate for ${purposeContext}. Balance technical accuracy with accessibility.`;
  }
  
  if (sectionLower.includes('audience') || sectionLower.includes('motivation')) {
    return `Target audience: Professionals and practitioners in ${purposeContext}. Motivation: Achieve excellence in ${baseIdea} through expert guidance and actionable insights.`;
  }
  
  if (sectionLower.includes('reflection') || sectionLower.includes('evaluation') || sectionLower.includes('learning')) {
    return `Continuous improvement approach:\n- Evaluate output quality\n- Identify optimization opportunities\n- Learn from feedback\n- Refine methodologies\n- Enhance effectiveness`;
  }
  
  if (sectionLower.includes('step') || sectionLower.includes('reasoning') || sectionLower.includes('hypothesis')) {
    return `Analytical framework:\n- Break down complex elements\n- Apply logical reasoning\n- Test assumptions\n- Draw evidence-based conclusions\n- Document thought process`;
  }
  
  // Default fallback
  return `For ${section}: Apply comprehensive analysis and expertise to ${baseIdea}, ensuring high-quality output aligned with ${purposeContext} standards.`;
};

/**
 * Get purpose-specific context
 */
const getPurposeContext = (purpose: string): string => {
  const contexts: Record<string, string> = {
    'image_generation': 'visual design, artistic direction, and image creation',
    'research': 'academic research, data analysis, and scholarly investigation',
    'code_generation': 'software development, programming, and technical implementation',
    'general_knowledge': 'information synthesis, education, and knowledge sharing',
    'latest_info': 'current events, trending topics, and up-to-date information',
    'creative_writing': 'storytelling, narrative development, and creative expression',
    'analysis': 'data interpretation, critical thinking, and analytical reasoning',
    'translation': 'linguistic accuracy, cultural context, and language conversion'
  };
  
  return contexts[purpose] || 'expertise and professional execution';
};

/**
 * Generate a text prompt using the selected framework with intelligent content
 */
export const generateTextPrompt = (request: PromptRequest): string => {
  const { baseIdea, purpose, framework } = request;
  
  if (!framework) return baseIdea;
  
  const frameworkInfo = FRAMEWORKS[framework];
  const purposeLabel = PURPOSE_LABELS[purpose];
  
  let prompt = `# Optimized ${frameworkInfo.fullName} Prompt\n\n`;
  prompt += `**Framework:** ${frameworkInfo.name}\n`;
  prompt += `**Purpose:** ${purposeLabel}\n`;
  prompt += `**Objective:** ${baseIdea}\n\n`;
  prompt += `---\n\n`;
  
  // Generate intelligent content for each framework section
  frameworkInfo.structure.forEach((section) => {
    prompt += `## ${section}\n\n`;
    const content = generateSectionContent(section, baseIdea, purpose, framework);
    prompt += `${content}\n\n`;
  });
  
  prompt += `---\n\n`;
  prompt += `## Final Instructions\n\n`;
  prompt += `Using the framework above, provide a comprehensive response that:\n`;
  prompt += `1. Directly addresses: "${baseIdea}"\n`;
  prompt += `2. Maintains focus on ${purposeLabel.toLowerCase()}\n`;
  prompt += `3. Delivers actionable, high-quality insights\n`;
  prompt += `4. Follows professional standards and best practices\n`;
  prompt += `5. Provides clear, structured, and detailed output\n\n`;
  prompt += `Begin your response now, ensuring all framework elements are addressed systematically.`;
  
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
