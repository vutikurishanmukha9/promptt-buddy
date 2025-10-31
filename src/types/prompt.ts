/**
 * Type definitions for Prompt Buddy
 */

export type PromptType = "text" | "json";

export type PromptPurpose = 
  | "image_generation"
  | "research"
  | "code_generation"
  | "general_knowledge"
  | "latest_info"
  | "creative_writing"
  | "analysis"
  | "translation";

export type PromptFramework =
  | "RACE"
  | "TEAM"
  | "CHAIN"
  | "COT"
  | "TOT"
  | "REACT"
  | "STAR"
  | "PEARL"
  | "CRISPE"
  | "INSPIRE"
  | "ICL"
  | "DEEP"
  | "GROVE"
  | "SOAR"
  | "CO-STAR"
  | "CLEAR"
  | "FABRIC"
  | "FRAME"
  | "CARE"
  | "PROMPT"
  | "MAP"
  | "STEP"
  | "RAISE"
  | "LASER"
  | "LEAP";

export interface PromptRequest {
  baseIdea: string;
  type: PromptType;
  purpose: PromptPurpose;
  framework?: PromptFramework;
}

export interface PromptResponse {
  prompt: string;
  framework?: string;
  type: PromptType;
}
