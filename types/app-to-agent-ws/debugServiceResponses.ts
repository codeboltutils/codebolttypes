import { z } from 'zod';

/**
 * Debug Service Response Schemas
 * Messages sent from debug CLI service back to agents
 */

// Debug add log response
export const debugAddLogResponseSchema = z.object({
  type: z.literal('debugAddLogResponse'),
  succes: z.literal(true),
});

// Open debug browser response
export const openDebugBrowserResponseSchema = z.object({
  type: z.literal('openDebugBrowserResponse'),
  succes: z.literal(true),
});

// Union of all debug service responses
export const debugServiceResponseSchema = z.union([
  debugAddLogResponseSchema,
  openDebugBrowserResponseSchema,
]);

// TypeScript types
export type DebugAddLogResponse = z.infer<typeof debugAddLogResponseSchema>;
export type OpenDebugBrowserResponse = z.infer<typeof openDebugBrowserResponseSchema>;
export type DebugServiceResponse = z.infer<typeof debugServiceResponseSchema>; 