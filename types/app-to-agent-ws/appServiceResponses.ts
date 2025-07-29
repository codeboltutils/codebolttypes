import { z } from 'zod';

/**
 * App Service Response Schemas
 * Messages sent from app CLI service back to agents
 */

// Get app state response
export const getAppStateResponseSchema = z.object({
  type: z.literal('getAppStateResponse'),
  state: z.any(),
});

// App operation success response
export const appOperationSuccessResponseSchema = z.object({
  type: z.string(),
  success: z.literal(true),
  message: z.string(),
  agentId: z.string().optional(),
});

// App operation error response
export const appOperationErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.string(),
  error: z.string().optional(),
  success: z.literal(false),
  agentId: z.string().optional(),
});

// Union of all app service responses
export const appServiceResponseSchema = z.union([
  getAppStateResponseSchema,
  appOperationSuccessResponseSchema,
  appOperationErrorResponseSchema,
]);

// TypeScript types
export type GetAppStateResponse = z.infer<typeof getAppStateResponseSchema>;
export type AppOperationSuccessResponse = z.infer<typeof appOperationSuccessResponseSchema>;
export type AppOperationErrorResponse = z.infer<typeof appOperationErrorResponseSchema>;
export type AppServiceResponse = z.infer<typeof appServiceResponseSchema>; 