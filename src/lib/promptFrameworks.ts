/**
 * Prompt Engineering Frameworks
 * Contains descriptions and structures for all supported frameworks
 */

import { PromptFramework } from "@/types/prompt";

export interface FrameworkInfo {
  name: string;
  fullName: string;
  description: string;
  structure: string[];
}

export const FRAMEWORKS: Record<PromptFramework, FrameworkInfo> = {
  RACE: {
    name: "RACE",
    fullName: "Role, Action, Context, Expectation",
    description: "Define your role, action needed, context, and expected outcome",
    structure: ["Role", "Action", "Context", "Expectation"]
  },
  TEAM: {
    name: "TEAM",
    fullName: "Task, Example, Action, Motivation",
    description: "Specify task, provide example, action steps, and motivation",
    structure: ["Task", "Example", "Action", "Motivation"]
  },
  CHAIN: {
    name: "CHAIN",
    fullName: "Context, Hypothesis, Action, Insight, Next step",
    description: "Build prompts through contextual chaining",
    structure: ["Context", "Hypothesis", "Action", "Insight", "Next Step"]
  },
  COT: {
    name: "COT",
    fullName: "Chain of Thought",
    description: "Step-by-step reasoning process",
    structure: ["Problem", "Step 1", "Step 2", "Step 3", "Conclusion"]
  },
  TOT: {
    name: "TOT",
    fullName: "Tree of Thoughts",
    description: "Branching reasoning with multiple paths",
    structure: ["Root Question", "Branch 1", "Branch 2", "Branch 3", "Synthesis"]
  },
  REACT: {
    name: "REACT",
    fullName: "Reason + Act",
    description: "Combine reasoning with actionable steps",
    structure: ["Observation", "Reasoning", "Action", "Result"]
  },
  STAR: {
    name: "STaR",
    fullName: "Self-Taught Reasoner",
    description: "Self-improving reasoning through examples",
    structure: ["Question", "Initial Answer", "Reflection", "Improved Answer"]
  },
  PEARL: {
    name: "PEARL",
    fullName: "Persona, Example, Action, Reflection, Learning",
    description: "Persona-driven learning approach",
    structure: ["Persona", "Example", "Action", "Reflection", "Learning"]
  },
  CRISPE: {
    name: "CRISPE",
    fullName: "Capacity, Role, Insight, Strategy, Process, Execution",
    description: "Comprehensive structured prompt building",
    structure: ["Capacity", "Role", "Insight", "Strategy", "Process", "Execution"]
  },
  INSPIRE: {
    name: "INSPIRE",
    fullName: "Instruction, Strategy, Process, Input, Reflection, Evaluation",
    description: "Detailed instructional framework",
    structure: ["Instruction", "Strategy", "Process", "Input", "Reflection", "Evaluation"]
  },
  ICL: {
    name: "ICL",
    fullName: "In-Context Learning",
    description: "Example-based prompting approach",
    structure: ["Example 1", "Example 2", "Example 3", "Your Task"]
  },
  DEEP: {
    name: "DEEP",
    fullName: "Describe, Explain, Example, Plan",
    description: "Thorough explanation-driven prompts",
    structure: ["Describe", "Explain", "Example", "Plan"]
  },
  GROVE: {
    name: "GROVE",
    fullName: "Goal, Role, Operation, Value, Expectation",
    description: "Goal-oriented prompt structure",
    structure: ["Goal", "Role", "Operation", "Value", "Expectation"]
  },
  SOAR: {
    name: "SOAR",
    fullName: "Situation, Objective, Action, Result",
    description: "Situation-based prompt engineering",
    structure: ["Situation", "Objective", "Action", "Result"]
  },
  "CO-STAR": {
    name: "CO-STAR",
    fullName: "Context, Objective, Style, Tone, Audience, Response",
    description: "Communication-focused framework",
    structure: ["Context", "Objective", "Style", "Tone", "Audience", "Response"]
  },
  CLEAR: {
    name: "CLEAR",
    fullName: "Context, Language, Expectation, Action, Result",
    description: "Clear and actionable prompt design",
    structure: ["Context", "Language", "Expectation", "Action", "Result"]
  },
  FABRIC: {
    name: "FABRIC",
    fullName: "Facts, Assumptions, Background, Reasoning, Inference, Conclusion",
    description: "Analytical reasoning framework",
    structure: ["Facts", "Assumptions", "Background", "Reasoning", "Inference", "Conclusion"]
  },
  FRAME: {
    name: "FRAME",
    fullName: "Format, Role, Action, Method, Example",
    description: "Structured format-driven prompts",
    structure: ["Format", "Role", "Action", "Method", "Example"]
  },
  CARE: {
    name: "CARE",
    fullName: "Context, Action, Result, Evaluation",
    description: "Simple context-action framework",
    structure: ["Context", "Action", "Result", "Evaluation"]
  },
  PROMPT: {
    name: "PROMPT",
    fullName: "Purpose, Role, Output, Method, Parameters, Tone",
    description: "Meta-framework for prompt design",
    structure: ["Purpose", "Role", "Output", "Method", "Parameters", "Tone"]
  },
  MAP: {
    name: "MAP",
    fullName: "Motivation, Action, Purpose",
    description: "Motivation-driven prompts",
    structure: ["Motivation", "Action", "Purpose"]
  },
  STEP: {
    name: "STEP",
    fullName: "Situation, Task, Execution, Purpose",
    description: "Step-by-step task execution",
    structure: ["Situation", "Task", "Execution", "Purpose"]
  },
  RAISE: {
    name: "RAISE",
    fullName: "Role, Audience, Intent, Style, Example",
    description: "Audience-focused prompt crafting",
    structure: ["Role", "Audience", "Intent", "Style", "Example"]
  },
  LASER: {
    name: "LASER",
    fullName: "Limitations, Assumptions, Scope, Examples, Reasoning",
    description: "Precise scope-driven prompts",
    structure: ["Limitations", "Assumptions", "Scope", "Examples", "Reasoning"]
  },
  LEAP: {
    name: "LEAP",
    fullName: "Learn, Evaluate, Apply, Produce",
    description: "Learning-focused framework",
    structure: ["Learn", "Evaluate", "Apply", "Produce"]
  }
};

export const PURPOSE_LABELS: Record<string, string> = {
  image_generation: "Image Generation",
  research: "Research & Analysis",
  code_generation: "Code Generation",
  general_knowledge: "General Knowledge",
  latest_info: "Latest Information",
  creative_writing: "Creative Writing",
  analysis: "Data Analysis",
  translation: "Translation"
};
