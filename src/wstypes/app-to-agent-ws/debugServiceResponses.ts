import { z } from 'zod';

/**
 * Debug Service Response Schemas
 * Messages sent from debug CLI service back to agents
 */

// Debug add log response schema
export const DebugAddLogResponseSchema = z.object({
    type: z.literal('debugAddLogResponse'),
    succes: z.literal(true) // Note: keeping the typo as it exists in the source code
});

// Open debug browser response schema
export const OpenDebugBrowserResponseSchema = z.object({
    type: z.literal('openDebugBrowserResponse'),
    succes: z.literal(true) // Note: keeping the typo as it exists in the source code
});

// Union of all debug service response schemas
export const DebugServiceResponseSchema = z.union([
    DebugAddLogResponseSchema,
    OpenDebugBrowserResponseSchema
]);

// Export with the expected name for the index file
export const debugServiceResponseSchema = DebugServiceResponseSchema;

// Type exports
export type DebugAddLogResponse = z.infer<typeof DebugAddLogResponseSchema>;
export type OpenDebugBrowserResponse = z.infer<typeof OpenDebugBrowserResponseSchema>;
export type DebugServiceResponse = z.infer<typeof DebugServiceResponseSchema>; 