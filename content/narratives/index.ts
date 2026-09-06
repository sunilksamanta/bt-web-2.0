import type { Narrative } from "./types";
import { vibeCodingRescue } from "./vibe-coding-rescue";
import { devopsAndCloudCost } from "./devops-and-cloud-cost";
import { aiSolutions } from "./ai-solutions";
import { stacks } from "./stacks";
import { openSourcePage } from "./open-source";
import { internalSystems } from "./internal-systems";

export const narratives: Narrative[] = [vibeCodingRescue, devopsAndCloudCost, aiSolutions, stacks, openSourcePage, internalSystems];

export const narrativeByPath = Object.fromEntries(narratives.map((n) => [n.path, n])) as Record<string, Narrative>;
export const narrativeBySlug = Object.fromEntries(narratives.map((n) => [n.slug, n])) as Record<string, Narrative>;

/**
 * AI use-case pages live under /ai-solutions/<slug>. Only entries present here are published.
 * Planned (not yet published): agents-and-automation, rag-and-knowledge, document-and-order-understanding,
 * llm-features, conversational-commerce (parked). See content/narratives/_use-case-template.ts.
 */
export const aiUseCases: Record<string, Narrative> = {};
