import { z } from 'zod';

/**
 * Browser Service Response Schemas
 * Messages sent from browser CLI service back to agents
 */

// New page response schema
// Sent when a new browser page is requested and created
export const NewPageResponseSchema = z.object({
  type: z.literal('newPageResponse')
});

// Browser error response schema
// Sent when browser socket connection is not available
export const BrowserErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.literal('Browser socket not found')
});

// Union of all browser service response schemas
export const BrowserServiceResponseSchema = z.union([
  NewPageResponseSchema,
  BrowserErrorResponseSchema
]);

// Export with the expected name for the index file
export const browserServiceResponseSchema = BrowserServiceResponseSchema;

// Type exports
export type NewPageResponse = z.infer<typeof NewPageResponseSchema>;
export type BrowserErrorResponse = z.infer<typeof BrowserErrorResponseSchema>;
export type BrowserServiceResponse = z.infer<typeof BrowserServiceResponseSchema>;
