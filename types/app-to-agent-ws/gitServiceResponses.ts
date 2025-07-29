import { z } from 'zod';

/**
 * Git Service Response Schemas
 * Messages sent from git CLI service back to agents
 */

// Git init response
export const gitInitResponseSchema = z.object({
  type: z.literal('gitInitResponse'),
  success: z.literal(true),
});

// Git add response
export const addResponseSchema = z.object({
  type: z.literal('AddResponse'),
  success: z.literal(true),
  content: z.any(),
});

// Git commit response
export const gitCommitResponseSchema = z.object({
  type: z.literal('gitCommitResponse'),
  success: z.literal(true),
  content: z.any(),
});

// Git push response
export const gitPushResponseSchema = z.object({
  type: z.literal('gitPushResponse'),
  success: z.literal(true),
});

// Git pull response
export const gitPullResponseSchema = z.object({
  type: z.literal('gitPullResponse'),
  success: z.literal(true),
});

// Git checkout response
export const gitCheckoutResponseSchema = z.object({
  type: z.literal('gitCheckoutResponse'),
  success: z.literal(true),
  branch: z.any(),
});

// Git branch response
export const gitBranchResponseSchema = z.object({
  type: z.literal('gitBranchResponse'),
  success: z.literal(true),
  branch: z.any(),
});

// Git logs response
export const gitLogsResponseSchema = z.object({
  type: z.literal('gitLogsResponse'),
  success: z.literal(true),
  data: z.string(),
});

// Git diff response
export const gitDiffResponseSchema = z.object({
  type: z.literal('gitDiffResponse'),
  success: z.literal(true),
  data: z.string(),
});

// Git status response
export const gitStatusResponseSchema = z.object({
  type: z.literal('gitStatusResponse'),
  success: z.literal(true),
  data: z.string(),
});

// Git clone response
export const gitCloneResponseSchema = z.object({
  type: z.literal('gitCloneResponse'),
  success: z.literal(true),
  url: z.string(),
});

// Git error response
export const gitErrorResponseSchema = z.object({
  type: z.literal('error'),
  success: z.literal(false),
  message: z.literal('Unknown git action'),
});

// Git operation error response
export const gitOperationErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.string(),
  error: z.string().optional(),
  success: z.literal(false),
  agentId: z.string().optional(),
});

// Union of all git service responses
export const gitServiceResponseSchema = z.union([
  gitInitResponseSchema,
  addResponseSchema,
  gitCommitResponseSchema,
  gitPushResponseSchema,
  gitPullResponseSchema,
  gitCheckoutResponseSchema,
  gitBranchResponseSchema,
  gitLogsResponseSchema,
  gitDiffResponseSchema,
  gitStatusResponseSchema,
  gitCloneResponseSchema,
  gitErrorResponseSchema,
  gitOperationErrorResponseSchema,
]);

// TypeScript types
export type GitInitResponse = z.infer<typeof gitInitResponseSchema>;
export type AddResponse = z.infer<typeof addResponseSchema>;
export type GitCommitResponse = z.infer<typeof gitCommitResponseSchema>;
export type GitPushResponse = z.infer<typeof gitPushResponseSchema>;
export type GitPullResponse = z.infer<typeof gitPullResponseSchema>;
export type GitCheckoutResponse = z.infer<typeof gitCheckoutResponseSchema>;
export type GitBranchResponse = z.infer<typeof gitBranchResponseSchema>;
export type GitLogsResponse = z.infer<typeof gitLogsResponseSchema>;
export type GitDiffResponse = z.infer<typeof gitDiffResponseSchema>;
export type GitStatusResponse = z.infer<typeof gitStatusResponseSchema>;
export type GitCloneResponse = z.infer<typeof gitCloneResponseSchema>;
export type GitErrorResponse = z.infer<typeof gitErrorResponseSchema>;
export type GitOperationErrorResponse = z.infer<typeof gitOperationErrorResponseSchema>;
export type GitServiceResponse = z.infer<typeof gitServiceResponseSchema>; 