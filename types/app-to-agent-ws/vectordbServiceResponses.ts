import { z } from 'zod';

/**
 * Vector DB Service Response Schemas
 * Messages sent from vector DB CLI service back to agents
 */

// Vector add response
export const addVectorItemResponseSchema = z.object({
  type: z.literal('addVectorItemResponse'),
  message: z.literal('success'),
});

// Vector get response  
export const getVectorResponseSchema = z.object({
  type: z.literal('getVectorResponse'),
  vector: z.any(),
});

// Vector query single item response
export const queryVectorItemResponseSchema = z.object({
  type: z.literal('queryVectorItemResponse'),
  item: z.any(),
});

// Vector query multiple items response
export const queryVectorItemsResponseSchema = z.object({
  type: z.literal('queryVectorItemsResponse'),
  items: z.any(),
});

// Vector error response
export const vectorErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.literal('Failed to process task event'),
});

// Union of all vector DB service responses
export const vectordbServiceResponseSchema = z.union([
  addVectorItemResponseSchema,
  getVectorResponseSchema,
  queryVectorItemResponseSchema,
  queryVectorItemsResponseSchema,
  vectorErrorResponseSchema,
]);

// TypeScript types
export type AddVectorItemResponse = z.infer<typeof addVectorItemResponseSchema>;
export type GetVectorResponse = z.infer<typeof getVectorResponseSchema>;
export type QueryVectorItemResponse = z.infer<typeof queryVectorItemResponseSchema>;
export type QueryVectorItemsResponse = z.infer<typeof queryVectorItemsResponseSchema>;
export type VectorErrorResponse = z.infer<typeof vectorErrorResponseSchema>;
export type VectordbServiceResponse = z.infer<typeof vectordbServiceResponseSchema>; 