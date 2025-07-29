import { z } from 'zod';

/**
 * Git Service Response Schemas
 * Messages sent from git CLI service back to agents
 */

// Git init response schema
export const GitInitResponseSchema = z.object({
    type: z.literal('gitInitResponse'),
    success: z.literal(true)
});

// Git add response schema
export const GitAddResponseSchema = z.object({
    type: z.literal('AddResponse'),
    success: z.literal(true),
    content: z.string()
});

// Git commit response schema
export const GitCommitResponseSchema = z.object({
    type: z.literal('gitCommitResponse'),
    success: z.literal(true),
    content: z.string()
});

// Git push response schema
export const GitPushResponseSchema = z.object({
    type: z.literal('gitPushResponse'),
    success: z.literal(true)
});

// Git pull response schema
export const GitPullResponseSchema = z.object({
    type: z.literal('gitPullResponse'),
    success: z.literal(true)
});

// Git checkout response schema
export const GitCheckoutResponseSchema = z.object({
    type: z.literal('gitCheckoutResponse'),
    success: z.literal(true),
    branch: z.string()
});

// Git branch response schema
export const GitBranchResponseSchema = z.object({
    type: z.literal('gitBranchResponse'),
    success: z.literal(true),
    branch: z.string()
});

// Git log entry structure
const GitLogEntrySchema = z.object({
    hash: z.string(),
    message: z.string(),
    author: z.string(),
    date: z.string(),
    refs: z.string().optional()
}).passthrough(); // Allow additional git log properties

// Git status structure
const GitStatusSchema = z.object({
    staged: z.array(z.string()).optional(),
    unstaged: z.array(z.string()).optional(),
    untracked: z.array(z.string()).optional(),
    branch: z.string().optional(),
    ahead: z.number().optional(),
    behind: z.number().optional()
}).passthrough(); // Allow additional git status properties

// Git logs response schema
export const GitLogsResponseSchema = z.object({
    type: z.literal('gitLogsResponse'),
    success: z.literal(true),
    data: z.array(GitLogEntrySchema)
});

// Git diff response schema
export const GitDiffResponseSchema = z.object({
    type: z.literal('gitDiffResponse'),
    success: z.literal(true),
    data: z.string() // Git diff is typically a string
});

// Git status response schema
export const GitStatusResponseSchema = z.object({
    type: z.literal('gitStatusResponse'),
    success: z.literal(true),
    data: GitStatusSchema
});

// Git clone response schema
export const GitCloneResponseSchema = z.object({
    type: z.literal('gitCloneResponse'),
    success: z.literal(true),
    url: z.string()
});

// Git error response schema
export const GitErrorResponseSchema = z.object({
    type: z.literal('error'),
    success: z.literal(false),
    message: z.string()
});

// Union of all git service response schemas
export const GitServiceResponseSchema = z.union([
    GitInitResponseSchema,
    GitAddResponseSchema,
    GitCommitResponseSchema,
    GitPushResponseSchema,
    GitPullResponseSchema,
    GitCheckoutResponseSchema,
    GitBranchResponseSchema,
    GitLogsResponseSchema,
    GitDiffResponseSchema,
    GitStatusResponseSchema,
    GitCloneResponseSchema,
    GitErrorResponseSchema
]);

// Export with the expected name for the index file
export const gitServiceResponseSchema = GitServiceResponseSchema;

// Type exports
export type GitInitResponse = z.infer<typeof GitInitResponseSchema>;
export type GitAddResponse = z.infer<typeof GitAddResponseSchema>;
export type GitCommitResponse = z.infer<typeof GitCommitResponseSchema>;
export type GitPushResponse = z.infer<typeof GitPushResponseSchema>;
export type GitPullResponse = z.infer<typeof GitPullResponseSchema>;
export type GitCheckoutResponse = z.infer<typeof GitCheckoutResponseSchema>;
export type GitBranchResponse = z.infer<typeof GitBranchResponseSchema>;
export type GitLogsResponse = z.infer<typeof GitLogsResponseSchema>;
export type GitDiffResponse = z.infer<typeof GitDiffResponseSchema>;
export type GitStatusResponse = z.infer<typeof GitStatusResponseSchema>;
export type GitCloneResponse = z.infer<typeof GitCloneResponseSchema>;
export type GitErrorResponse = z.infer<typeof GitErrorResponseSchema>;
export type GitServiceResponse = z.infer<typeof GitServiceResponseSchema>; 