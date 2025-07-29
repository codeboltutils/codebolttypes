import { z } from 'zod';

/**
 * State Service Response Schemas
 * Messages sent from state CLI service back to agents
 */

// State operation success response
export const stateOperationSuccessResponseSchema = z.object({
  type: z.string(),
  success: z.boolean(),
  data: z.any().optional(),
  agentId: z.string().optional(),
});

// State operation error response
export const stateOperationErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.string(),
  error: z.string().optional(),
  success: z.literal(false),
  agentId: z.string().optional(),
});

// Union of all state service responses
export const stateServiceResponseSchema = z.union([
  stateOperationSuccessResponseSchema,
  stateOperationErrorResponseSchema,
]);

// TypeScript types
export type StateOperationSuccessResponse = z.infer<typeof stateOperationSuccessResponseSchema>;
export type StateOperationErrorResponse = z.infer<typeof stateOperationErrorResponseSchema>;
export type StateServiceResponse = z.infer<typeof stateServiceResponseSchema>; 