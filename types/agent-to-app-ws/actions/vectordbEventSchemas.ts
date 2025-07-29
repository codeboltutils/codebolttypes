import { z } from 'zod';

/**
 * Vector Database Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/vectordb.ts module operations
 */

// Base vector database message schema
export const vectordbEventBaseSchema = z.object({
  type: z.literal('vectordbEvent'),
  action: z.string(),
  message: z.object({}).passthrough(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Get Vector Event Schema
export const getVectorEventSchema = vectordbEventBaseSchema.extend({
  action: z.literal('getVector'),
  message: z.object({
    item: z.string(),
  }),
});

// Add Vector Item Event Schema
export const addVectorItemEventSchema = vectordbEventBaseSchema.extend({
  action: z.literal('addVectorItem'),
  message: z.object({
    item: z.any(),
  }),
});

// Query Vector Item Event Schema
export const queryVectorItemEventSchema = vectordbEventBaseSchema.extend({
  action: z.literal('queryVectorItem'),
  message: z.object({
    item: z.string(),
  }),
});

// Query Vector Items Event Schema
export const queryVectorItemsEventSchema = vectordbEventBaseSchema.extend({
  action: z.literal('queryVectorItems'),
  message: z.object({
    items: z.array(z.any()),
    dbPath: z.string(),
  }),
});

// Update Vector Item Event Schema
export const updateVectorItemEventSchema = vectordbEventBaseSchema.extend({
  action: z.literal('updateVectorItem'),
  message: z.object({
    id: z.string(),
    item: z.any(),
  }),
});

// Delete Vector Item Event Schema
export const deleteVectorItemEventSchema = vectordbEventBaseSchema.extend({
  action: z.literal('deleteVectorItem'),
  message: z.object({
    id: z.string(),
  }),
});

// Clear Vector Database Event Schema
export const clearVectorDatabaseEventSchema = vectordbEventBaseSchema.extend({
  action: z.literal('clearVectorDatabase'),
  message: z.object({
    dbPath: z.string().optional(),
  }),
});

// Get Vector Database Info Event Schema
export const getVectorDatabaseInfoEventSchema = vectordbEventBaseSchema.extend({
  action: z.literal('getVectorDatabaseInfo'),
  message: z.object({
    dbPath: z.string().optional(),
  }),
});

// Create Vector Index Event Schema
export const createVectorIndexEventSchema = vectordbEventBaseSchema.extend({
  action: z.literal('createVectorIndex'),
  message: z.object({
    dbPath: z.string(),
    dimension: z.number(),
    metric: z.enum(['cosine', 'euclidean', 'manhattan']).optional(),
  }),
});

// Union of all vector database event schemas
export const vectordbEventSchema = z.union([
  getVectorEventSchema,
  addVectorItemEventSchema,
  queryVectorItemEventSchema,
  queryVectorItemsEventSchema,
  updateVectorItemEventSchema,
  deleteVectorItemEventSchema,
  clearVectorDatabaseEventSchema,
  getVectorDatabaseInfoEventSchema,
  createVectorIndexEventSchema,
]);

// Vector item schema for responses
const vectorItemSchema = z.object({
  id: z.string(),
  vector: z.array(z.number()),
  metadata: z.record(z.any()).optional(),
  content: z.string().optional(),
  timestamp: z.string().optional(),
});

// Vector search result schema
const vectorSearchResultSchema = z.object({
  id: z.string(),
  score: z.number(),
  metadata: z.record(z.any()).optional(),
  content: z.string().optional(),
  vector: z.array(z.number()).optional(),
});

// Response Schemas for vector database operations
export const getVectorResponseSchema = z.object({
  success: z.boolean(),
  vector: vectorItemSchema.optional(),
  message: z.string().optional(),
});

export const addVectorItemResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  id: z.string().optional(),
  vector: vectorItemSchema.optional(),
});

export const queryVectorItemResponseSchema = z.object({
  success: z.boolean(),
  results: z.array(vectorSearchResultSchema),
  query: z.string().optional(),
  totalResults: z.number().optional(),
});

export const queryVectorItemsResponseSchema = z.object({
  success: z.boolean(),
  results: z.array(vectorSearchResultSchema),
  queries: z.array(z.any()).optional(),
  totalResults: z.number().optional(),
  dbPath: z.string().optional(),
});

export const updateVectorItemResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  id: z.string(),
  vector: vectorItemSchema.optional(),
});

export const deleteVectorItemResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  id: z.string(),
});

export const clearVectorDatabaseResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  clearedItems: z.number().optional(),
  dbPath: z.string().optional(),
});

export const getVectorDatabaseInfoResponseSchema = z.object({
  success: z.boolean(),
  info: z.object({
    totalItems: z.number(),
    dimension: z.number(),
    dbPath: z.string(),
    createdAt: z.string(),
    lastUpdated: z.string(),
    size: z.number(),
    metric: z.string().optional(),
  }).optional(),
});

export const createVectorIndexResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  dbPath: z.string(),
  dimension: z.number(),
  metric: z.string().optional(),
});

// Inferred TypeScript types for events
export type VectordbEventBase = z.infer<typeof vectordbEventBaseSchema>;
export type GetVectorEvent = z.infer<typeof getVectorEventSchema>;
export type AddVectorItemEvent = z.infer<typeof addVectorItemEventSchema>;
export type QueryVectorItemEvent = z.infer<typeof queryVectorItemEventSchema>;
export type QueryVectorItemsEvent = z.infer<typeof queryVectorItemsEventSchema>;
export type UpdateVectorItemEvent = z.infer<typeof updateVectorItemEventSchema>;
export type DeleteVectorItemEvent = z.infer<typeof deleteVectorItemEventSchema>;
export type ClearVectorDatabaseEvent = z.infer<typeof clearVectorDatabaseEventSchema>;
export type GetVectorDatabaseInfoEvent = z.infer<typeof getVectorDatabaseInfoEventSchema>;
export type CreateVectorIndexEvent = z.infer<typeof createVectorIndexEventSchema>;
export type VectordbEvent = z.infer<typeof vectordbEventSchema>;

// Inferred TypeScript types for data structures
export type VectorItem = z.infer<typeof vectorItemSchema>;
export type VectorSearchResult = z.infer<typeof vectorSearchResultSchema>;

// Inferred TypeScript types for responses
export type GetVectorResponse = z.infer<typeof getVectorResponseSchema>;
export type AddVectorItemResponse = z.infer<typeof addVectorItemResponseSchema>;
export type QueryVectorItemResponse = z.infer<typeof queryVectorItemResponseSchema>;
export type QueryVectorItemsResponse = z.infer<typeof queryVectorItemsResponseSchema>;
export type UpdateVectorItemResponse = z.infer<typeof updateVectorItemResponseSchema>;
export type DeleteVectorItemResponse = z.infer<typeof deleteVectorItemResponseSchema>;
export type ClearVectorDatabaseResponse = z.infer<typeof clearVectorDatabaseResponseSchema>;
export type GetVectorDatabaseInfoResponse = z.infer<typeof getVectorDatabaseInfoResponseSchema>;
export type CreateVectorIndexResponse = z.infer<typeof createVectorIndexResponseSchema>; 