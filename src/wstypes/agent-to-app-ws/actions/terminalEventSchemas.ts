import { z } from 'zod';

/**
 * Terminal Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/terminal.ts module operations
 */

// Base terminal message schema
export const terminalEventBaseSchema = z.object({
  type: z.string(),
  message: z.union([z.string(), z.object({}).passthrough()]).optional(),
  executeInMain: z.boolean().optional(),
  returnEmptyStringOnSuccess: z.boolean().optional(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Execute Command Event Schema
export const executeCommandEventSchema = terminalEventBaseSchema.extend({
  type: z.literal('executeCommand'),
  message: z.string(),
  returnEmptyStringOnSuccess: z.boolean().optional(),
});

// Execute Command Run Until Error Event Schema
export const executeCommandRunUntilErrorEventSchema = terminalEventBaseSchema.extend({
  type: z.literal('executeCommandRunUntilError'),
  message: z.string(),
  executeInMain: z.boolean().optional(),
});

// Execute Command Run Until Interrupt Event Schema  
export const executeCommandRunUntilInterruptEventSchema = terminalEventBaseSchema.extend({
  type: z.literal('executeCommandRunUnitlInterrupt'),
  message: z.string(),
  executeInMain: z.boolean().optional(),
});

// Execute Command With Stream Event Schema
export const executeCommandWithStreamEventSchema = terminalEventBaseSchema.extend({
  type: z.literal('executeCommandWithStream'),
  message: z.string(),
  executeInMain: z.boolean().optional(),
});

// Send Interrupt To Terminal Event Schema
export const sendInterruptToTerminalEventSchema = terminalEventBaseSchema.extend({
  type: z.literal('sendInterruptToTerminal'),
});

// Union of all terminal event schemas
export const terminalEventSchema = z.union([
  executeCommandEventSchema,
  executeCommandRunUntilErrorEventSchema,
  executeCommandRunUntilInterruptEventSchema,
  executeCommandWithStreamEventSchema,
  sendInterruptToTerminalEventSchema,
]);

// Inferred TypeScript types for events
export type TerminalEventBase = z.infer<typeof terminalEventBaseSchema>;
export type ExecuteCommandEvent = z.infer<typeof executeCommandEventSchema>;
export type ExecuteCommandRunUntilErrorEvent = z.infer<typeof executeCommandRunUntilErrorEventSchema>;
export type ExecuteCommandRunUntilInterruptEvent = z.infer<typeof executeCommandRunUntilInterruptEventSchema>;
export type ExecuteCommandWithStreamEvent = z.infer<typeof executeCommandWithStreamEventSchema>;
export type SendInterruptToTerminalEvent = z.infer<typeof sendInterruptToTerminalEventSchema>;
export type TerminalEvent = z.infer<typeof terminalEventSchema>;