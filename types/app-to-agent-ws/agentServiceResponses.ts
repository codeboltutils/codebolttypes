import { z } from 'zod';

/**
 * Agent Service Response Schemas
 * Messages sent from agent CLI service back to agents
 */

// Get agents list response
export const getAgentsListResponseSchema = z.object({
  type: z.string(),
  data: z.array(z.any()),
  success: z.boolean(),
  agentId: z.string().optional(),
});

// Get agent details response
export const getAgentsDetailResponseSchema = z.object({
  type: z.string(),
  data: z.any(),
  success: z.boolean(),
  agentId: z.string().optional(),
});

// Child agent finished response
export const childAgentFinishedResponseSchema = z.object({
  type: z.string(),
  data: z.array(z.any()),
  success: z.boolean(),
  agentId: z.string().optional(),
});

// Agent error response
export const agentErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.literal('Unknown message type'),
});

// Agent operation error response
export const agentOperationErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.string(),
  error: z.string().optional(),
  success: z.literal(false),
  agentId: z.string().optional(),
});

// Union of all agent service responses
export const agentServiceResponseSchema = z.union([
  getAgentsListResponseSchema,
  getAgentsDetailResponseSchema,
  childAgentFinishedResponseSchema,
  agentErrorResponseSchema,
  agentOperationErrorResponseSchema,
]);

// TypeScript types
export type GetAgentsListResponse = z.infer<typeof getAgentsListResponseSchema>;
export type GetAgentsDetailResponse = z.infer<typeof getAgentsDetailResponseSchema>;
export type ChildAgentFinishedResponse = z.infer<typeof childAgentFinishedResponseSchema>;
export type AgentErrorResponse = z.infer<typeof agentErrorResponseSchema>;
export type AgentOperationErrorResponse = z.infer<typeof agentOperationErrorResponseSchema>;
export type AgentServiceResponse = z.infer<typeof agentServiceResponseSchema>; 