import { z } from 'zod';

/**
 * Debug Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/debug.ts module operations
 */

// Log type enum schema
export const logTypeSchema = z.enum(['info', 'error', 'warning']);

// Base debug message schema
export const debugEventBaseSchema = z.object({
  type: z.literal('debugEvent'),
  action: z.string(),
  message: z.object({}).passthrough(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Add Log Event Schema
export const addLogEventSchema = debugEventBaseSchema.extend({
  action: z.literal('addLog'),
  message: z.object({
    log: z.string(),
    type: logTypeSchema,
  }),
});

// Open Debug Browser Event Schema
export const openDebugBrowserEventSchema = debugEventBaseSchema.extend({
  action: z.literal('openDebugBrowser'),
  message: z.object({
    url: z.string(),
    port: z.number(),
  }),
});

// Get Debug Logs Event Schema
export const getDebugLogsEventSchema = debugEventBaseSchema.extend({
  action: z.literal('getDebugLogs'),
  message: z.object({
    limit: z.number().optional(),
    type: logTypeSchema.optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  }),
});

// Clear Debug Logs Event Schema
export const clearDebugLogsEventSchema = debugEventBaseSchema.extend({
  action: z.literal('clearDebugLogs'),
  message: z.object({
    type: logTypeSchema.optional(),
  }),
});

// Set Debug Level Event Schema
export const setDebugLevelEventSchema = debugEventBaseSchema.extend({
  action: z.literal('setDebugLevel'),
  message: z.object({
    level: z.enum(['none', 'error', 'warning', 'info', 'debug', 'verbose']),
  }),
});

// Export Debug Logs Event Schema
export const exportDebugLogsEventSchema = debugEventBaseSchema.extend({
  action: z.literal('exportDebugLogs'),
  message: z.object({
    format: z.enum(['json', 'csv', 'txt']),
    type: logTypeSchema.optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  }),
});

// Union of all debug event schemas
export const debugEventSchema = z.union([
  addLogEventSchema,
  openDebugBrowserEventSchema,
  getDebugLogsEventSchema,
  clearDebugLogsEventSchema,
  setDebugLevelEventSchema,
  exportDebugLogsEventSchema,
]);

// Debug log entry schema for responses
const debugLogEntrySchema = z.object({
  id: z.string(),
  timestamp: z.string(),
  type: logTypeSchema,
  message: z.string(),
  source: z.string().optional(),
  stackTrace: z.string().optional(),
  metadata: z.record(z.any()).optional(),
});

// Response Schemas for debug operations
export const debugAddLogResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  logId: z.string().optional(),
  timestamp: z.string().optional(),
});

export const openDebugBrowserResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  url: z.string(),
  port: z.number(),
  browserProcessId: z.number().optional(),
});

export const getDebugLogsResponseSchema = z.object({
  success: z.boolean(),
  logs: z.array(debugLogEntrySchema),
  totalCount: z.number(),
  filters: z.object({
    type: logTypeSchema.optional(),
    limit: z.number().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  }).optional(),
});

export const clearDebugLogsResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  clearedCount: z.number(),
  type: logTypeSchema.optional(),
});

export const setDebugLevelResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  level: z.string(),
  previousLevel: z.string().optional(),
});

export const exportDebugLogsResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  exportPath: z.string().optional(),
  exportData: z.string().optional(),
  format: z.string(),
  exportedCount: z.number(),
});

// Inferred TypeScript types for log type
export type LogType = z.infer<typeof logTypeSchema>;

// Inferred TypeScript types for events
export type DebugEventBase = z.infer<typeof debugEventBaseSchema>;
export type AddLogEvent = z.infer<typeof addLogEventSchema>;
export type OpenDebugBrowserEvent = z.infer<typeof openDebugBrowserEventSchema>;
export type GetDebugLogsEvent = z.infer<typeof getDebugLogsEventSchema>;
export type ClearDebugLogsEvent = z.infer<typeof clearDebugLogsEventSchema>;
export type SetDebugLevelEvent = z.infer<typeof setDebugLevelEventSchema>;
export type ExportDebugLogsEvent = z.infer<typeof exportDebugLogsEventSchema>;
export type DebugEvent = z.infer<typeof debugEventSchema>;

// Inferred TypeScript types for data structures
export type DebugLogEntry = z.infer<typeof debugLogEntrySchema>;

// Inferred TypeScript types for responses
export type DebugAddLogResponse = z.infer<typeof debugAddLogResponseSchema>;
export type OpenDebugBrowserResponse = z.infer<typeof openDebugBrowserResponseSchema>;
export type GetDebugLogsResponse = z.infer<typeof getDebugLogsResponseSchema>;
export type ClearDebugLogsResponse = z.infer<typeof clearDebugLogsResponseSchema>;
export type SetDebugLevelResponse = z.infer<typeof setDebugLevelResponseSchema>;
export type ExportDebugLogsResponse = z.infer<typeof exportDebugLogsResponseSchema>; 