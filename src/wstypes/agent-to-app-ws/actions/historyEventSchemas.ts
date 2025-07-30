import { z } from 'zod';

/**
 * History/Chat Summary Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/history.ts module operations
 */

// Log type enum schema
export const logTypeSchema = z.enum(['info', 'error', 'warning']);

// Base chat summary message schema
export const chatSummaryEventBaseSchema = z.object({
  type: z.literal('chatSummaryEvent'),
  action: z.string(),
  messages: z.array(z.object({
    role: z.string(),
    content: z.string(),
  })).optional(),
  depth: z.number().optional(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Summarize All Event Schema
export const summarizeAllEventSchema = chatSummaryEventBaseSchema.extend({
  action: z.literal('summarizeAll'),
});

// Summarize Event Schema
export const summarizeEventSchema = chatSummaryEventBaseSchema.extend({
  action: z.literal('summarize'),
  messages: z.array(z.object({
    role: z.string(),
    content: z.string(),
  })),
  depth: z.number(),
});

// Generate Summary Event Schema
export const generateSummaryEventSchema = chatSummaryEventBaseSchema.extend({
  action: z.literal('generateSummary'),
  messages: z.array(z.object({
    role: z.string(),
    content: z.string(),
  })).optional(),
  options: z.object({
    maxLength: z.number().optional(),
    format: z.enum(['bullet', 'paragraph', 'structured']).optional(),
    includeTimestamps: z.boolean().optional(),
  }).optional(),
});

// Get Summary Event Schema
export const getSummaryEventSchema = chatSummaryEventBaseSchema.extend({
  action: z.literal('getSummary'),
  summaryId: z.string().optional(),
  threadId: z.string().optional(),
});

// Clear Summary Event Schema
export const clearSummaryEventSchema = chatSummaryEventBaseSchema.extend({
  action: z.literal('clearSummary'),
  summaryId: z.string().optional(),
  threadId: z.string().optional(),
});

// Union of all history event schemas
export const historyEventSchema = z.union([
  summarizeAllEventSchema,
  summarizeEventSchema,
  generateSummaryEventSchema,
  getSummaryEventSchema,
  clearSummaryEventSchema,
]);

// Message schema for responses
const messageSchema = z.object({
  role: z.string(),
  content: z.string(),
  timestamp: z.string().optional(),
  messageId: z.string().optional(),
  metadata: z.record(z.any()).optional(),
});

// Summary schema for responses
const summarySchema = z.object({
  id: z.string(),
  threadId: z.string(),
  summary: z.string(),
  originalMessageCount: z.number(),
  summaryLength: z.number(),
  createdAt: z.string(),
  format: z.string().optional(),
  metadata: z.object({
    topics: z.array(z.string()).optional(),
    keyPoints: z.array(z.string()).optional(),
    participants: z.array(z.string()).optional(),
    timespan: z.object({
      start: z.string(),
      end: z.string(),
    }).optional(),
  }).optional(),
});


// Inferred TypeScript types for enums
export type LogType = z.infer<typeof logTypeSchema>;

// Inferred TypeScript types for events
export type ChatSummaryEventBase = z.infer<typeof chatSummaryEventBaseSchema>;
export type SummarizeAllEvent = z.infer<typeof summarizeAllEventSchema>;
export type SummarizeEvent = z.infer<typeof summarizeEventSchema>;
export type GenerateSummaryEvent = z.infer<typeof generateSummaryEventSchema>;
export type GetSummaryEvent = z.infer<typeof getSummaryEventSchema>;
export type ClearSummaryEvent = z.infer<typeof clearSummaryEventSchema>;
export type HistoryEvent = z.infer<typeof historyEventSchema>;

// Inferred TypeScript types for data structures
export type Message = z.infer<typeof messageSchema>;
export type Summary = z.infer<typeof summarySchema>;

