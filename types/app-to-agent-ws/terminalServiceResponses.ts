import { z } from 'zod';

/**
 * Terminal Service Response Schemas
 * Messages sent from terminal CLI service back to agents
 */

// Terminal command execution response
export const terminalExecutionResponseSchema = z.object({
  type: z.string(),
  result: z.any(),
  success: z.boolean(),
  status_code: z.number().optional(),
});

// Terminal error response
export const terminalErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.literal('Failed to process task event'),
});

// Union of all terminal service responses
export const terminalServiceResponseSchema = z.union([
  terminalExecutionResponseSchema,
  terminalErrorResponseSchema,
]);

// TypeScript types
export type TerminalExecutionResponse = z.infer<typeof terminalExecutionResponseSchema>;
export type TerminalErrorResponse = z.infer<typeof terminalErrorResponseSchema>;
export type TerminalServiceResponse = z.infer<typeof terminalServiceResponseSchema>; 