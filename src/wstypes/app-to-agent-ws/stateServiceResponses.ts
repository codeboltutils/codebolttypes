import { z } from 'zod';

/**
 * State Service Response Schemas
 * Messages sent from state CLI service back to agents
 */

// Get application state response schema
export const GetAppStateResponseSchema = z.object({
  type: z.literal('getAppStateResponse'),
  messageId: z.string(),
  state: z.record(z.any()).optional(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Add to agent state response schema
export const AddToAgentStateResponseSchema = z.object({
  type: z.literal('addToAgentStateResponse'),
  messageId: z.string(),
  payload: z.object({
    success: z.boolean()
  }).optional(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Get agent state response schema
export const GetAgentStateResponseSchema = z.object({
  type: z.literal('getAgentStateResponse'),
  messageId: z.string(),
  payload: z.record(z.any()).optional(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Get project state response schema
export const GetProjectStateResponseSchema = z.object({
  type: z.literal('getProjectStateResponse'),
  messageId: z.string(),
  projectState: z.record(z.any()).optional(),
  data: z.record(z.any()).optional(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  error: z.string().optional()
});

// Update project state response schema
export const UpdateProjectStateResponseSchema = z.object({
  type: z.literal('updateProjectStateResponse'),
  messageId: z.string(),
  state: z.record(z.any()).optional(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Union of all state service response schemas
export const StateServiceResponseSchema = z.union([
  GetAppStateResponseSchema,
  AddToAgentStateResponseSchema,
  GetAgentStateResponseSchema,
  GetProjectStateResponseSchema,
  UpdateProjectStateResponseSchema
]);

// Export with the expected name for the index file
export const stateServiceResponseSchema = StateServiceResponseSchema;

// Type exports
export type GetAppStateResponse = z.infer<typeof GetAppStateResponseSchema>;
export type AddToAgentStateResponse = z.infer<typeof AddToAgentStateResponseSchema>;
export type GetAgentStateResponse = z.infer<typeof GetAgentStateResponseSchema>;
export type GetProjectStateResponse = z.infer<typeof GetProjectStateResponseSchema>;
export type UpdateProjectStateResponse = z.infer<typeof UpdateProjectStateResponseSchema>;
export type StateServiceResponse = z.infer<typeof StateServiceResponseSchema>; 