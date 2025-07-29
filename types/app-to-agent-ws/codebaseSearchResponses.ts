import { z } from 'zod';

/**
 * Codebase Search Response Schemas
 * Messages sent from codebase search CLI service back to agents
 */

// Codebase search general response
export const codebaseSearchOperationResponseSchema = z.object({
  type: z.string(),
  success: z.boolean().optional(),
  data: z.any().optional(),
  message: z.string().optional(),
  error: z.string().optional(),
  agentId: z.string().optional(),
});

// Codebase search error response
export const codebaseSearchErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.string(),
  error: z.string().optional(),
  success: z.literal(false),
  agentId: z.string().optional(),
});

// Union of all codebase search responses
export const codebaseSearchServiceResponseSchema = z.union([
  codebaseSearchOperationResponseSchema,
  codebaseSearchErrorResponseSchema,
]);

// TypeScript types
export type CodebaseSearchOperationResponse = z.infer<typeof codebaseSearchOperationResponseSchema>;
export type CodebaseSearchErrorResponse = z.infer<typeof codebaseSearchErrorResponseSchema>;
export type CodebaseSearchServiceResponse = z.infer<typeof codebaseSearchServiceResponseSchema>; 