import { z } from 'zod';

/**
 * State Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/state.ts module operations
 */

// Base state message schema
export const stateEventBaseSchema = z.object({
  type: z.string(),
  action: z.string().optional(),
  payload: z.object({}).passthrough().optional(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Get Application State Event Schema
export const getApplicationStateEventSchema = stateEventBaseSchema.extend({
  type: z.literal('projectStateEvent'),
  action: z.literal('getAppState'),
});

// Add To Agent State Event Schema
export const addToAgentStateEventSchema = stateEventBaseSchema.extend({
  type: z.literal('agentStateEvent'),
  action: z.literal('addToAgentState'),
  payload: z.object({
    key: z.string(),
    value: z.string(),
  }),
});

// Get Agent State Event Schema
export const getAgentStateEventSchema = stateEventBaseSchema.extend({
  type: z.literal('agentStateEvent'),
  action: z.literal('getAgentState'),
});

// Update Agent State Event Schema
export const updateAgentStateEventSchema = stateEventBaseSchema.extend({
  type: z.literal('agentStateEvent'),
  action: z.literal('updateAgentState'),
  payload: z.object({
    key: z.string(),
    value: z.string(),
  }),
});

// Delete Agent State Event Schema
export const deleteAgentStateEventSchema = stateEventBaseSchema.extend({
  type: z.literal('agentStateEvent'),
  action: z.literal('deleteAgentState'),
  payload: z.object({
    key: z.string(),
  }),
});

// Clear Agent State Event Schema
export const clearAgentStateEventSchema = stateEventBaseSchema.extend({
  type: z.literal('agentStateEvent'),
  action: z.literal('clearAgentState'),
});

// Get Project State Event Schema
export const getProjectStateEventSchema = stateEventBaseSchema.extend({
  type: z.literal('projectStateEvent'),
  action: z.literal('getProjectState'),
});

// Update Project State Event Schema
export const updateProjectStateEventSchema = stateEventBaseSchema.extend({
  type: z.literal('projectStateEvent'),
  action: z.literal('updateProjectState'),
  payload: z.object({
    key: z.string(),
    value: z.any(),
  }),
});

// Union of all state event schemas
export const stateEventSchema = z.union([
  getApplicationStateEventSchema,
  addToAgentStateEventSchema,
  getAgentStateEventSchema,
  updateAgentStateEventSchema,
  deleteAgentStateEventSchema,
  clearAgentStateEventSchema,
  getProjectStateEventSchema,
  updateProjectStateEventSchema,
]);

// Application state schema for responses
const applicationStateSchema = z.object({
  projectPath: z.string(),
  currentFile: z.string().optional(),
  openFiles: z.array(z.string()),
  settings: z.record(z.any()),
  gitState: z.object({
    branch: z.string(),
    hasChanges: z.boolean(),
    staged: z.array(z.string()),
    unstaged: z.array(z.string()),
  }).optional(),
  buildState: z.object({
    isBuilding: z.boolean(),
    lastBuildTime: z.string().optional(),
    buildErrors: z.array(z.string()),
  }).optional(),
});

// Agent state schema for responses
const agentStateSchema = z.object({
  agentId: z.string(),
  state: z.record(z.string()),
  lastUpdated: z.string(),
  version: z.number(),
});

// Project state schema for responses
const projectStateSchema = z.object({
  projectId: z.string(),
  name: z.string(),
  path: z.string(),
  state: z.record(z.any()),
  lastUpdated: z.string(),
  version: z.number(),
});

// Response Schemas for state operations
export const getApplicationStateResponseSchema = z.object({
  success: z.boolean(),
  state: applicationStateSchema,
  timestamp: z.string(),
});

export const addToAgentStateResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  key: z.string(),
  value: z.string(),
  agentId: z.string(),
});

export const getAgentStateResponseSchema = z.object({
  success: z.boolean(),
  state: agentStateSchema,
});

export const updateAgentStateResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  key: z.string(),
  value: z.string(),
  agentId: z.string(),
});

export const deleteAgentStateResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  key: z.string(),
  agentId: z.string(),
});

export const clearAgentStateResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  agentId: z.string(),
  clearedKeys: z.array(z.string()),
});

export const getProjectStateResponseSchema = z.object({
  success: z.boolean(),
  state: projectStateSchema,
});

export const updateProjectStateResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  key: z.string(),
  value: z.any(),
  projectId: z.string(),
});

// Inferred TypeScript types for events
export type StateEventBase = z.infer<typeof stateEventBaseSchema>;
export type GetApplicationStateEvent = z.infer<typeof getApplicationStateEventSchema>;
export type AddToAgentStateEvent = z.infer<typeof addToAgentStateEventSchema>;
export type GetAgentStateEvent = z.infer<typeof getAgentStateEventSchema>;
export type UpdateAgentStateEvent = z.infer<typeof updateAgentStateEventSchema>;
export type DeleteAgentStateEvent = z.infer<typeof deleteAgentStateEventSchema>;
export type ClearAgentStateEvent = z.infer<typeof clearAgentStateEventSchema>;
export type GetProjectStateEvent = z.infer<typeof getProjectStateEventSchema>;
export type UpdateProjectStateEvent = z.infer<typeof updateProjectStateEventSchema>;
export type StateEvent = z.infer<typeof stateEventSchema>;

// Inferred TypeScript types for data structures
export type ApplicationState = z.infer<typeof applicationStateSchema>;
export type AgentState = z.infer<typeof agentStateSchema>;
export type ProjectState = z.infer<typeof projectStateSchema>;

// Inferred TypeScript types for responses
export type GetApplicationStateResponse = z.infer<typeof getApplicationStateResponseSchema>;
export type AddToAgentStateResponse = z.infer<typeof addToAgentStateResponseSchema>;
export type GetAgentStateResponse = z.infer<typeof getAgentStateResponseSchema>;
export type UpdateAgentStateResponse = z.infer<typeof updateAgentStateResponseSchema>;
export type DeleteAgentStateResponse = z.infer<typeof deleteAgentStateResponseSchema>;
export type ClearAgentStateResponse = z.infer<typeof clearAgentStateResponseSchema>;
export type GetProjectStateResponse = z.infer<typeof getProjectStateResponseSchema>;
export type UpdateProjectStateResponse = z.infer<typeof updateProjectStateResponseSchema>; 