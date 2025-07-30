import { z } from 'zod';

/**
 * Utils Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/utils.ts module operations
 */

// Base utils message schema
export const utilsEventBaseSchema = z.object({
  type: z.literal('fsEvent'),
  action: z.string(),
  message: z.object({}).passthrough(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Edit File And Apply Diff Event Schema
export const editFileAndApplyDiffEventSchema = utilsEventBaseSchema.extend({
  action: z.literal('editFileAndApplyDiff'),
  message: z.object({
    filePath: z.string(),
    diff: z.string(),
    diffIdentifier: z.string(),
    prompt: z.string(),
    applyModel: z.string().optional(),
  }),
});

// Validate Diff Event Schema
export const validateDiffEventSchema = utilsEventBaseSchema.extend({
  action: z.literal('validateDiff'),
  message: z.object({
    filePath: z.string(),
    diff: z.string(),
    strict: z.boolean().optional(),
  }),
});

// Generate Diff Event Schema
export const generateDiffEventSchema = utilsEventBaseSchema.extend({
  action: z.literal('generateDiff'),
  message: z.object({
    originalContent: z.string(),
    modifiedContent: z.string(),
    format: z.enum(['unified', 'context', 'side-by-side']).optional(),
  }),
});

// Apply Patch Event Schema
export const applyPatchEventSchema = utilsEventBaseSchema.extend({
  action: z.literal('applyPatch'),
  message: z.object({
    filePath: z.string(),
    patch: z.string(),
    dryRun: z.boolean().optional(),
  }),
});

// Union of all utils event schemas
export const utilsEventSchema = z.union([
  editFileAndApplyDiffEventSchema,
  validateDiffEventSchema,
  generateDiffEventSchema,
  applyPatchEventSchema,
]);

// Diff result schema for responses
const diffResultSchema = z.object({
  success: z.boolean(),
  diff: z.string(),
  hunks: z.array(z.object({
    oldStart: z.number(),
    oldCount: z.number(),
    newStart: z.number(),
    newCount: z.number(),
    lines: z.array(z.string()),
  })),
  addedLines: z.number(),
  removedLines: z.number(),
  modifiedLines: z.number(),
});

// File edit result schema
const fileEditResultSchema = z.object({
  success: z.boolean(),
  filePath: z.string(),
  originalContent: z.string().optional(),
  modifiedContent: z.string(),
  diff: z.string(),
  backup: z.object({
    path: z.string(),
    timestamp: z.string(),
  }).optional(),
  validation: z.object({
    syntax: z.boolean(),
    errors: z.array(z.string()),
    warnings: z.array(z.string()),
  }).optional(),
});


// Inferred TypeScript types for events
export type UtilsEventBase = z.infer<typeof utilsEventBaseSchema>;
export type EditFileAndApplyDiffEvent = z.infer<typeof editFileAndApplyDiffEventSchema>;
export type ValidateDiffEvent = z.infer<typeof validateDiffEventSchema>;
export type GenerateDiffEvent = z.infer<typeof generateDiffEventSchema>;
export type ApplyPatchEvent = z.infer<typeof applyPatchEventSchema>;
export type UtilsEvent = z.infer<typeof utilsEventSchema>;

// Inferred TypeScript types for data structures
export type DiffResult = z.infer<typeof diffResultSchema>;
export type FileEditResult = z.infer<typeof fileEditResultSchema>;

