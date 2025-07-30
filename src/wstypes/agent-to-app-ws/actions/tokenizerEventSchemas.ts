import { z } from 'zod';

/**
 * Tokenizer Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/tokenizer.ts module operations
 */

// Base tokenizer message schema
export const tokenizerEventBaseSchema = z.object({
  type: z.literal('tokenizerEvent'),
  action: z.string(),
  message: z.object({
    item: z.string(),
  }),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Add Token Event Schema
export const addTokenEventSchema = tokenizerEventBaseSchema.extend({
  action: z.literal('addToken'),
  message: z.object({
    item: z.string(),
  }),
});

// Get Token Event Schema
export const getTokenEventSchema = tokenizerEventBaseSchema.extend({
  action: z.literal('getToken'),
  message: z.object({
    item: z.string(),
  }),
});

// Delete Token Event Schema
export const deleteTokenEventSchema = tokenizerEventBaseSchema.extend({
  action: z.literal('deleteToken'),
  message: z.object({
    item: z.string(),
  }),
});

// List Tokens Event Schema
export const listTokensEventSchema = tokenizerEventBaseSchema.extend({
  action: z.literal('listTokens'),
  message: z.object({
    limit: z.number().optional(),
    offset: z.number().optional(),
    pattern: z.string().optional(),
  }),
});

// Update Token Event Schema
export const updateTokenEventSchema = tokenizerEventBaseSchema.extend({
  action: z.literal('updateToken'),
  message: z.object({
    item: z.string(),
    newValue: z.string(),
  }),
});

// Clear Tokens Event Schema
export const clearTokensEventSchema = tokenizerEventBaseSchema.extend({
  action: z.literal('clearTokens'),
  message: z.object({
    pattern: z.string().optional(),
  }),
});

// Union of all tokenizer event schemas
export const tokenizerEventSchema = z.union([
  addTokenEventSchema,
  getTokenEventSchema,
  deleteTokenEventSchema,
  listTokensEventSchema,
  updateTokenEventSchema,
  clearTokensEventSchema,
]);

// Token schema for responses
const tokenSchema = z.object({
  id: z.string(),
  key: z.string(),
  value: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  metadata: z.object({
    usage: z.number().optional(),
    lastAccessed: z.string().optional(),
    type: z.string().optional(),
  }).optional(),
});


// Inferred TypeScript types for events
export type TokenizerEventBase = z.infer<typeof tokenizerEventBaseSchema>;
export type AddTokenEvent = z.infer<typeof addTokenEventSchema>;
export type GetTokenEvent = z.infer<typeof getTokenEventSchema>;
export type DeleteTokenEvent = z.infer<typeof deleteTokenEventSchema>;
export type ListTokensEvent = z.infer<typeof listTokensEventSchema>;
export type UpdateTokenEvent = z.infer<typeof updateTokenEventSchema>;
export type ClearTokensEvent = z.infer<typeof clearTokensEventSchema>;
export type TokenizerEvent = z.infer<typeof tokenizerEventSchema>;

// Inferred TypeScript types for data structures
export type Token = z.infer<typeof tokenSchema>;

