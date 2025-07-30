import { z } from 'zod';

/**
 * MCP (Model Context Protocol) Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/mcp.ts module operations
 */

// Base MCP message schema
export const mcpEventBaseSchema = z.object({
  type: z.literal('codebolttools'),
  action: z.string(),
  message: z.object({}).passthrough().optional(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Get Enabled ToolBoxes Event Schema
export const getEnabledToolBoxesEventSchema = mcpEventBaseSchema.extend({
  action: z.literal('getEnabledToolBoxes'),
});

// Get Local ToolBoxes Event Schema
export const getLocalToolBoxesEventSchema = mcpEventBaseSchema.extend({
  action: z.literal('getLocalToolBoxes'),
});

// Get Available ToolBoxes Event Schema
export const getAvailableToolBoxesEventSchema = mcpEventBaseSchema.extend({
  action: z.literal('getAvailableToolBoxes'),
});

// Search Available ToolBoxes Event Schema
export const searchAvailableToolBoxesEventSchema = mcpEventBaseSchema.extend({
  action: z.literal('searchAvailableToolBoxes'),
  message: z.object({
    query: z.string(),
    limit: z.number().optional(),
  }),
});

// List Tools From ToolBoxes Event Schema
export const listToolsFromToolBoxesEventSchema = mcpEventBaseSchema.extend({
  action: z.literal('listToolsFromToolBoxes'),
  message: z.object({
    toolBoxIds: z.array(z.string()),
  }),
});

// Configure ToolBox Event Schema
export const configureToolBoxEventSchema = mcpEventBaseSchema.extend({
  action: z.literal('configureToolBox'),
  message: z.object({
    toolBoxId: z.string(),
    configuration: z.record(z.any()),
    enabled: z.boolean().optional(),
  }),
});

// Get Tools Event Schema
export const getToolsEventSchema = mcpEventBaseSchema.extend({
  action: z.literal('getTools'),
  message: z.object({
    toolBoxId: z.string().optional(),
    category: z.string().optional(),
  }),
});

// Execute Tool Event Schema
export const executeToolEventSchema = mcpEventBaseSchema.extend({
  action: z.literal('executeTool'),
  message: z.object({
    toolId: z.string(),
    parameters: z.record(z.any()),
    toolBoxId: z.string(),
  }),
});

// Install ToolBox Event Schema
export const installToolBoxEventSchema = mcpEventBaseSchema.extend({
  action: z.literal('installToolBox'),
  message: z.object({
    toolBoxId: z.string(),
    source: z.enum(['local', 'remote', 'npm', 'github']),
    sourceUrl: z.string().optional(),
  }),
});

// Uninstall ToolBox Event Schema
export const uninstallToolBoxEventSchema = mcpEventBaseSchema.extend({
  action: z.literal('uninstallToolBox'),
  message: z.object({
    toolBoxId: z.string(),
  }),
});

// Update ToolBox Event Schema
export const updateToolBoxEventSchema = mcpEventBaseSchema.extend({
  action: z.literal('updateToolBox'),
  message: z.object({
    toolBoxId: z.string(),
  }),
});

// Union of all MCP event schemas
export const mcpEventSchema = z.union([
  getEnabledToolBoxesEventSchema,
  getLocalToolBoxesEventSchema,
  getAvailableToolBoxesEventSchema,
  searchAvailableToolBoxesEventSchema,
  listToolsFromToolBoxesEventSchema,
  configureToolBoxEventSchema,
  getToolsEventSchema,
  executeToolEventSchema,
  installToolBoxEventSchema,
  uninstallToolBoxEventSchema,
  updateToolBoxEventSchema,
]);

// ToolBox schema for responses
const toolBoxSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  version: z.string(),
  author: z.string().optional(),
  category: z.string().optional(),
  enabled: z.boolean(),
  installed: z.boolean(),
  configuration: z.record(z.any()).optional(),
  tools: z.array(z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    parameters: z.record(z.any()),
    category: z.string().optional(),
  })).optional(),
  metadata: z.object({
    installDate: z.string().optional(),
    lastUsed: z.string().optional(),
    usageCount: z.number().optional(),
    source: z.string().optional(),
  }).optional(),
});

// Tool schema for responses
const toolSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  parameters: z.record(z.any()),
  category: z.string().optional(),
  toolBoxId: z.string(),
  enabled: z.boolean(),
  metadata: z.object({
    lastUsed: z.string().optional(),
    usageCount: z.number().optional(),
    executionTime: z.number().optional(),
  }).optional(),
});

// Tool execution result schema
const toolExecutionResultSchema = z.object({
  success: z.boolean(),
  result: z.any(),
  output: z.string().optional(),
  error: z.string().optional(),
  executionTime: z.number(),
  toolId: z.string(),
  toolBoxId: z.string(),
  parameters: z.record(z.any()),
});


// Inferred TypeScript types for events
export type McpEventBase = z.infer<typeof mcpEventBaseSchema>;
export type GetEnabledToolBoxesEvent = z.infer<typeof getEnabledToolBoxesEventSchema>;
export type GetLocalToolBoxesEvent = z.infer<typeof getLocalToolBoxesEventSchema>;
export type GetAvailableToolBoxesEvent = z.infer<typeof getAvailableToolBoxesEventSchema>;
export type SearchAvailableToolBoxesEvent = z.infer<typeof searchAvailableToolBoxesEventSchema>;
export type ListToolsFromToolBoxesEvent = z.infer<typeof listToolsFromToolBoxesEventSchema>;
export type ConfigureToolBoxEvent = z.infer<typeof configureToolBoxEventSchema>;
export type GetToolsEvent = z.infer<typeof getToolsEventSchema>;
export type ExecuteToolEvent = z.infer<typeof executeToolEventSchema>;
export type InstallToolBoxEvent = z.infer<typeof installToolBoxEventSchema>;
export type UninstallToolBoxEvent = z.infer<typeof uninstallToolBoxEventSchema>;
export type UpdateToolBoxEvent = z.infer<typeof updateToolBoxEventSchema>;
export type McpEvent = z.infer<typeof mcpEventSchema>;

// Inferred TypeScript types for data structures
export type ToolBox = z.infer<typeof toolBoxSchema>;
export type Tool = z.infer<typeof toolSchema>;
export type ToolExecutionResult = z.infer<typeof toolExecutionResultSchema>;

