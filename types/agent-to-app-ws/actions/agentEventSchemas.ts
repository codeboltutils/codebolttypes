import { z } from 'zod';

/**
 * Agent Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/agent.ts module operations
 */

// Agent location enum schema
export const agentLocationSchema = z.enum(['all', 'local_only', 'remote_only']);

// Agents enum schema
export const agentsSchema = z.enum(['local', 'all', 'downloaded']);

// Filter using enum schema
export const filterUsingSchema = z.enum(['use_ai', 'use_vector_db', 'use_both']);

// Base agent message schema
export const agentEventBaseSchema = z.object({
  type: z.literal('agentEvent'),
  action: z.string(),
  task: z.string().optional(),
  agents: z.array(z.string()).optional(),
  maxResult: z.number().optional(),
  location: agentLocationSchema.optional(),
  getFrom: filterUsingSchema.optional(),
  agentId: z.string().optional(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Find Agent Event Schema
export const findAgentEventSchema = agentEventBaseSchema.extend({
  action: z.literal('findAgent'),
  task: z.string(),
  agents: z.array(z.string()).optional(),
  maxResult: z.number().optional(),
  location: agentLocationSchema.optional(),
  getFrom: filterUsingSchema.optional(),
});

// Start Agent Event Schema
export const startAgentEventSchema = agentEventBaseSchema.extend({
  action: z.literal('startAgent'),
  task: z.string(),
  agentId: z.string().optional(),
});

// Stop Agent Event Schema
export const stopAgentEventSchema = agentEventBaseSchema.extend({
  action: z.literal('stopAgent'),
  agentId: z.string(),
});

// List Agents Event Schema
export const listAgentsEventSchema = agentEventBaseSchema.extend({
  action: z.literal('listAgents'),
  location: agentLocationSchema.optional(),
  category: z.string().optional(),
});

// Get Agent Details Event Schema
export const getAgentDetailsEventSchema = agentEventBaseSchema.extend({
  action: z.literal('getAgentDetails'),
  agentId: z.string(),
});

// Install Agent Event Schema
export const installAgentEventSchema = agentEventBaseSchema.extend({
  action: z.literal('installAgent'),
  agentId: z.string(),
  source: z.enum(['local', 'remote', 'marketplace']),
  sourceUrl: z.string().optional(),
});

// Uninstall Agent Event Schema
export const uninstallAgentEventSchema = agentEventBaseSchema.extend({
  action: z.literal('uninstallAgent'),
  agentId: z.string(),
});

// Update Agent Event Schema
export const updateAgentEventSchema = agentEventBaseSchema.extend({
  action: z.literal('updateAgent'),
  agentId: z.string(),
});

// Configure Agent Event Schema
export const configureAgentEventSchema = agentEventBaseSchema.extend({
  action: z.literal('configureAgent'),
  agentId: z.string(),
  configuration: z.record(z.any()),
});

// Union of all agent event schemas
export const agentEventSchema = z.union([
  findAgentEventSchema,
  startAgentEventSchema,
  stopAgentEventSchema,
  listAgentsEventSchema,
  getAgentDetailsEventSchema,
  installAgentEventSchema,
  uninstallAgentEventSchema,
  updateAgentEventSchema,
  configureAgentEventSchema,
]);

// Agent schema for responses
const agentSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  version: z.string(),
  author: z.string().optional(),
  category: z.string().optional(),
  type: z.enum(['local', 'remote', 'marketplace']),
  status: z.enum(['idle', 'running', 'stopped', 'error']),
  capabilities: z.array(z.string()),
  configuration: z.record(z.any()).optional(),
  metadata: z.object({
    installDate: z.string().optional(),
    lastUsed: z.string().optional(),
    usageCount: z.number().optional(),
    performance: z.object({
      averageResponseTime: z.number(),
      successRate: z.number(),
      totalExecutions: z.number(),
    }).optional(),
  }).optional(),
  isInstalled: z.boolean(),
  isEnabled: z.boolean(),
});

// Agent execution result schema
const agentExecutionResultSchema = z.object({
  agentId: z.string(),
  task: z.string(),
  result: z.any(),
  success: z.boolean(),
  error: z.string().optional(),
  executionTime: z.number(),
  startTime: z.string(),
  endTime: z.string(),
  output: z.string().optional(),
  logs: z.array(z.object({
    level: z.enum(['info', 'warn', 'error', 'debug']),
    message: z.string(),
    timestamp: z.string(),
  })).optional(),
});

// Response Schemas for agent operations
export const findAgentByTaskResponseSchema = z.object({
  success: z.boolean(),
  agents: z.array(agentSchema),
  task: z.string(),
  totalFound: z.number(),
  searchCriteria: z.object({
    maxResult: z.number(),
    location: agentLocationSchema,
    getFrom: filterUsingSchema,
  }).optional(),
});

export const taskCompletionResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  agentId: z.string(),
  task: z.string(),
  result: agentExecutionResultSchema.optional(),
});

export const listAgentsResponseSchema = z.object({
  success: z.boolean(),
  agents: z.array(agentSchema),
  totalCount: z.number(),
  location: agentLocationSchema.optional(),
  category: z.string().optional(),
});

export const agentsDetailResponseSchema = z.object({
  success: z.boolean(),
  agent: agentSchema,
});

export const installAgentResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  agent: agentSchema,
  installPath: z.string().optional(),
});

export const uninstallAgentResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  agentId: z.string(),
});

export const updateAgentResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  agent: agentSchema,
  previousVersion: z.string().optional(),
  newVersion: z.string(),
});

export const configureAgentResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  agent: agentSchema,
});

export const stopAgentResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  agentId: z.string(),
  finalResult: agentExecutionResultSchema.optional(),
});

// Inferred TypeScript types for enums
export type AgentLocation = z.infer<typeof agentLocationSchema>;
export type Agents = z.infer<typeof agentsSchema>;
export type FilterUsing = z.infer<typeof filterUsingSchema>;

// Inferred TypeScript types for events
export type AgentEventBase = z.infer<typeof agentEventBaseSchema>;
export type FindAgentEvent = z.infer<typeof findAgentEventSchema>;
export type StartAgentEvent = z.infer<typeof startAgentEventSchema>;
export type StopAgentEvent = z.infer<typeof stopAgentEventSchema>;
export type ListAgentsEvent = z.infer<typeof listAgentsEventSchema>;
export type GetAgentDetailsEvent = z.infer<typeof getAgentDetailsEventSchema>;
export type InstallAgentEvent = z.infer<typeof installAgentEventSchema>;
export type UninstallAgentEvent = z.infer<typeof uninstallAgentEventSchema>;
export type UpdateAgentEvent = z.infer<typeof updateAgentEventSchema>;
export type ConfigureAgentEvent = z.infer<typeof configureAgentEventSchema>;
export type AgentEvent = z.infer<typeof agentEventSchema>;

// Inferred TypeScript types for data structures
export type Agent = z.infer<typeof agentSchema>;
export type AgentExecutionResult = z.infer<typeof agentExecutionResultSchema>;

// Inferred TypeScript types for responses
export type FindAgentByTaskResponse = z.infer<typeof findAgentByTaskResponseSchema>;
export type TaskCompletionResponse = z.infer<typeof taskCompletionResponseSchema>;
export type ListAgentsResponse = z.infer<typeof listAgentsResponseSchema>;
export type AgentsDetailResponse = z.infer<typeof agentsDetailResponseSchema>;
export type InstallAgentResponse = z.infer<typeof installAgentResponseSchema>;
export type UninstallAgentResponse = z.infer<typeof uninstallAgentResponseSchema>;
export type UpdateAgentResponse = z.infer<typeof updateAgentResponseSchema>;
export type ConfigureAgentResponse = z.infer<typeof configureAgentResponseSchema>;
export type StopAgentResponse = z.infer<typeof stopAgentResponseSchema>; 