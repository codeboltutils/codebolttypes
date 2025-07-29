import { z } from 'zod';

/**
 * Vector DB Service Response Schemas
 * Messages sent from vector DB CLI service back to agents
 */

// Add vector item response schema
export const AddVectorItemResponseSchema = z.object({
    type: z.literal('addVectorItemResponse'),
    message: z.literal('success')
});

// Vector embedding response structure (from embedding API)
const VectorResponseSchema = z.object({
    data: z.array(z.object({
        embedding: z.array(z.number())
    })).optional()
}).passthrough(); // Allow additional properties from different embedding providers

// Vector query result item structure
const VectorQueryResultSchema = z.object({
    score: z.number(),
    item: z.object({
        metadata: z.object({
            text: z.string()
        }).passthrough() // Allow additional metadata
    }).passthrough() // Allow additional item properties
}).passthrough();

// Get vector response schema
export const GetVectorResponseSchema = z.object({
    type: z.literal('getVectorResponse'),
    vector: VectorResponseSchema
});

// Query vector item response schema
export const QueryVectorItemResponseSchema = z.object({
    type: z.literal('queryVectorItemResponse'),
    item: z.union([
        z.array(VectorQueryResultSchema), // Array of query results
        z.null() // null when no results or error
    ])
});

// Union of all vector DB service response schemas
export const VectordbServiceResponseSchema = z.union([
    AddVectorItemResponseSchema,
    GetVectorResponseSchema,
    QueryVectorItemResponseSchema
]);

// Export with the expected name for the index file
export const vectordbServiceResponseSchema = VectordbServiceResponseSchema;

// Type exports
export type AddVectorItemResponse = z.infer<typeof AddVectorItemResponseSchema>;
export type GetVectorResponse = z.infer<typeof GetVectorResponseSchema>;
export type QueryVectorItemResponse = z.infer<typeof QueryVectorItemResponseSchema>;
export type VectordbServiceResponse = z.infer<typeof VectordbServiceResponseSchema>; 