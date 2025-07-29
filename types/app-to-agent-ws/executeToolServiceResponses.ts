import { z } from 'zod';

/**
 * Execute Tool Service Response Schemas
 * Messages sent from execute tool CLI service back to agents
 */

// Execute tool operation response
export const executeToolOperationResponseSchema = z.object({
  type: z.string(),
  success: z.boolean().optional(),
  data: z.any().optional(),
  result: z.any().optional(),
  message: z.string().optional(),
  error: z.string().optional(),
  agentId: z.string().optional(),
});

// Execute tool error response
export const executeToolErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.string(),
  error: z.string().optional(),
  success: z.literal(false),
  agentId: z.string().optional(),
});

// Union of all execute tool service responses
export const executeToolServiceResponseSchema = z.union([
  executeToolOperationResponseSchema,
  executeToolErrorResponseSchema,
]);

// TypeScript types
export type ExecuteToolOperationResponse = z.infer<typeof executeToolOperationResponseSchema>;
export type ExecuteToolErrorResponse = z.infer<typeof executeToolErrorResponseSchema>;
export type ExecuteToolServiceResponse = z.infer<typeof executeToolServiceResponseSchema>; 