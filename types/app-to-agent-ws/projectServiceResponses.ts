import { z } from 'zod';

/**
 * Project Service Response Schemas
 * Messages sent from project CLI service back to agents
 */

// Get project path response
export const getProjectPathResponseSchema = z.object({
  type: z.literal('getProjectPathResponse'),
  success: z.literal(true),
  message: z.literal('Project path retrieved successfully'),
  projectPath: z.string(),
});

// Get project settings response
export const getProjectSettingsResponseSchema = z.object({
  type: z.literal('getProjectSettingsResponse'),
  success: z.literal(true),
  message: z.literal('Project settings retrieved successfully'),
  projectSettings: z.any(),
});

// Get repo map response
export const getRepoMapResponseSchema = z.object({
  type: z.literal('getRepoMapResponse'),
  success: z.literal(true),
  message: z.literal('Project repomap retrieved successfully'),
  repoMap: z.any(),
});

// Project operation success response
export const projectOperationSuccessResponseSchema = z.object({
  type: z.string(),
  success: z.literal(true),
  message: z.string(),
  agentId: z.string().optional(),
});

// Project operation error response
export const projectOperationErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.string(),
  error: z.string().optional(),
  success: z.literal(false),
  agentId: z.string().optional(),
});

// Union of all project service responses
export const projectServiceResponseSchema = z.union([
  getProjectPathResponseSchema,
  getProjectSettingsResponseSchema,
  getRepoMapResponseSchema,
  projectOperationSuccessResponseSchema,
  projectOperationErrorResponseSchema,
]);

// TypeScript types
export type GetProjectPathResponse = z.infer<typeof getProjectPathResponseSchema>;
export type GetProjectSettingsResponse = z.infer<typeof getProjectSettingsResponseSchema>;
export type GetRepoMapResponse = z.infer<typeof getRepoMapResponseSchema>;
export type ProjectOperationSuccessResponse = z.infer<typeof projectOperationSuccessResponseSchema>;
export type ProjectOperationErrorResponse = z.infer<typeof projectOperationErrorResponseSchema>;
export type ProjectServiceResponse = z.infer<typeof projectServiceResponseSchema>; 