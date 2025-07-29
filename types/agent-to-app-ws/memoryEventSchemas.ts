import { z } from 'zod';

/**
 * Memory Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/dbmemory.ts module operations
 */

// Base memory message schema
export const memoryEventBaseSchema = z.object({
  type: z.literal('memoryEvent'),
  action: z.string(),
  key: z.string().optional(),
  value: z.any().optional(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Memory Set Event Schema
export const memorySetEventSchema = memoryEventBaseSchema.extend({
  action: z.literal('set'),
  key: z.string(),
  value: z.any(),
});

// Memory Get Event Schema
export const memoryGetEventSchema = memoryEventBaseSchema.extend({
  action: z.literal('get'),
  key: z.string(),
});

// Memory Delete Event Schema
export const memoryDeleteEventSchema = memoryEventBaseSchema.extend({
  action: z.literal('delete'),
  key: z.string(),
});

// Memory List Keys Event Schema
export const memoryListKeysEventSchema = memoryEventBaseSchema.extend({
  action: z.literal('listKeys'),
  pattern: z.string().optional(),
});

// Memory Clear Event Schema
export const memoryClearEventSchema = memoryEventBaseSchema.extend({
  action: z.literal('clear'),
});

// Memory Exists Event Schema
export const memoryExistsEventSchema = memoryEventBaseSchema.extend({
  action: z.literal('exists'),
  key: z.string(),
});

// Memory Get Multiple Event Schema
export const memoryGetMultipleEventSchema = memoryEventBaseSchema.extend({
  action: z.literal('getMultiple'),
  keys: z.array(z.string()),
});

// Memory Set Multiple Event Schema
export const memorySetMultipleEventSchema = memoryEventBaseSchema.extend({
  action: z.literal('setMultiple'),
  items: z.record(z.any()),
});

// Memory Search Event Schema
export const memorySearchEventSchema = memoryEventBaseSchema.extend({
  action: z.literal('search'),
  query: z.string(),
  limit: z.number().optional(),
});

// Union of all memory event schemas
export const memoryEventSchema = z.union([
  memorySetEventSchema,
  memoryGetEventSchema,
  memoryDeleteEventSchema,
  memoryListKeysEventSchema,
  memoryClearEventSchema,
  memoryExistsEventSchema,
  memoryGetMultipleEventSchema,
  memorySetMultipleEventSchema,
  memorySearchEventSchema,
]);

// Response Schemas for memory operations
export const memorySetResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  key: z.string(),
  value: z.any().optional(),
});

export const memoryGetResponseSchema = z.object({
  success: z.boolean(),
  value: z.any().optional(),
  key: z.string(),
  exists: z.boolean(),
});

export const memoryDeleteResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  key: z.string(),
  deleted: z.boolean(),
});

export const memoryListKeysResponseSchema = z.object({
  success: z.boolean(),
  keys: z.array(z.string()),
  totalCount: z.number(),
  pattern: z.string().optional(),
});

export const memoryClearResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  clearedCount: z.number(),
});

export const memoryExistsResponseSchema = z.object({
  success: z.boolean(),
  exists: z.boolean(),
  key: z.string(),
});

export const memoryGetMultipleResponseSchema = z.object({
  success: z.boolean(),
  items: z.record(z.any()),
  keys: z.array(z.string()),
  foundCount: z.number(),
});

export const memorySetMultipleResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  setCount: z.number(),
  items: z.record(z.any()),
});

export const memorySearchResponseSchema = z.object({
  success: z.boolean(),
  results: z.array(z.object({
    key: z.string(),
    value: z.any(),
    score: z.number().optional(),
  })),
  query: z.string(),
  totalResults: z.number(),
});

// Inferred TypeScript types for events
export type MemoryEventBase = z.infer<typeof memoryEventBaseSchema>;
export type MemorySetEvent = z.infer<typeof memorySetEventSchema>;
export type MemoryGetEvent = z.infer<typeof memoryGetEventSchema>;
export type MemoryDeleteEvent = z.infer<typeof memoryDeleteEventSchema>;
export type MemoryListKeysEvent = z.infer<typeof memoryListKeysEventSchema>;
export type MemoryClearEvent = z.infer<typeof memoryClearEventSchema>;
export type MemoryExistsEvent = z.infer<typeof memoryExistsEventSchema>;
export type MemoryGetMultipleEvent = z.infer<typeof memoryGetMultipleEventSchema>;
export type MemorySetMultipleEvent = z.infer<typeof memorySetMultipleEventSchema>;
export type MemorySearchEvent = z.infer<typeof memorySearchEventSchema>;
export type MemoryEvent = z.infer<typeof memoryEventSchema>;

// Inferred TypeScript types for responses
export type MemorySetResponse = z.infer<typeof memorySetResponseSchema>;
export type MemoryGetResponse = z.infer<typeof memoryGetResponseSchema>;
export type MemoryDeleteResponse = z.infer<typeof memoryDeleteResponseSchema>;
export type MemoryListKeysResponse = z.infer<typeof memoryListKeysResponseSchema>;
export type MemoryClearResponse = z.infer<typeof memoryClearResponseSchema>;
export type MemoryExistsResponse = z.infer<typeof memoryExistsResponseSchema>;
export type MemoryGetMultipleResponse = z.infer<typeof memoryGetMultipleResponseSchema>;
export type MemorySetMultipleResponse = z.infer<typeof memorySetMultipleResponseSchema>;
export type MemorySearchResponse = z.infer<typeof memorySearchResponseSchema>; 