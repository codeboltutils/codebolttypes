import { z } from 'zod';

/**
 * Git Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/git.ts module operations
 */

// Base git message schema
export const gitEventBaseSchema = z.object({
  type: z.literal('gitEvent'),
  action: z.string(),
  path: z.string().optional(),
  message: z.object({}).passthrough().optional(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Git Init Event Schema
export const gitInitEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Init'),
  path: z.string(),
});

// Git Pull Event Schema
export const gitPullEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Pull'),
});

// Git Push Event Schema
export const gitPushEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Push'),
});

// Git Status Event Schema
export const gitStatusEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Status'),
});

// Git Add Event Schema
export const gitAddEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Add'),
});

// Git Commit Event Schema
export const gitCommitEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Commit'),
  message: z.object({
    message: z.string(),
  }),
});

// Git Checkout Event Schema
export const gitCheckoutEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Checkout'),
  message: z.object({
    branch: z.string(),
  }),
});

// Git Branch Event Schema
export const gitBranchEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Branch'),
  message: z.object({
    branchName: z.string().optional(),
    deleteBranch: z.boolean().optional(),
  }),
});

// Git Logs Event Schema
export const gitLogsEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Logs'),
  message: z.object({
    limit: z.number().optional(),
    oneline: z.boolean().optional(),
  }),
});

// Git Diff Event Schema
export const gitDiffEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Diff'),
  message: z.object({
    file: z.string().optional(),
    staged: z.boolean().optional(),
  }),
});

// Git Reset Event Schema
export const gitResetEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Reset'),
  message: z.object({
    file: z.string().optional(),
    hard: z.boolean().optional(),
    commit: z.string().optional(),
  }),
});

// Git Stash Event Schema
export const gitStashEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Stash'),
  message: z.object({
    action: z.enum(['save', 'pop', 'list', 'drop']),
    message: z.string().optional(),
    index: z.number().optional(),
  }),
});

// Git Tag Event Schema
export const gitTagEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Tag'),
  message: z.object({
    tagName: z.string(),
    message: z.string().optional(),
    delete: z.boolean().optional(),
  }),
});

// Git Remote Event Schema
export const gitRemoteEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Remote'),
  message: z.object({
    action: z.enum(['add', 'remove', 'list', 'set-url']),
    name: z.string().optional(),
    url: z.string().optional(),
  }),
});

// Git Merge Event Schema
export const gitMergeEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Merge'),
  message: z.object({
    branch: z.string(),
    message: z.string().optional(),
  }),
});

// Git Rebase Event Schema
export const gitRebaseEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Rebase'),
  message: z.object({
    branch: z.string(),
    interactive: z.boolean().optional(),
  }),
});

// Git Clone Event Schema
export const gitCloneEventSchema = gitEventBaseSchema.extend({
  action: z.literal('Clone'),
  message: z.object({
    url: z.string(),
    directory: z.string().optional(),
    branch: z.string().optional(),
  }),
});

// Union of all git event schemas
export const gitEventSchema = z.union([
  gitInitEventSchema,
  gitPullEventSchema,
  gitPushEventSchema,
  gitStatusEventSchema,
  gitAddEventSchema,
  gitCommitEventSchema,
  gitCheckoutEventSchema,
  gitBranchEventSchema,
  gitLogsEventSchema,
  gitDiffEventSchema,
  gitResetEventSchema,
  gitStashEventSchema,
  gitTagEventSchema,
  gitRemoteEventSchema,
  gitMergeEventSchema,
  gitRebaseEventSchema,
  gitCloneEventSchema,
]);


// Inferred TypeScript types for events
export type GitEventBase = z.infer<typeof gitEventBaseSchema>;
export type GitInitEvent = z.infer<typeof gitInitEventSchema>;
export type GitPullEvent = z.infer<typeof gitPullEventSchema>;
export type GitPushEvent = z.infer<typeof gitPushEventSchema>;
export type GitStatusEvent = z.infer<typeof gitStatusEventSchema>;
export type GitAddEvent = z.infer<typeof gitAddEventSchema>;
export type GitCommitEvent = z.infer<typeof gitCommitEventSchema>;
export type GitCheckoutEvent = z.infer<typeof gitCheckoutEventSchema>;
export type GitBranchEvent = z.infer<typeof gitBranchEventSchema>;
export type GitLogsEvent = z.infer<typeof gitLogsEventSchema>;
export type GitDiffEvent = z.infer<typeof gitDiffEventSchema>;
export type GitResetEvent = z.infer<typeof gitResetEventSchema>;
export type GitStashEvent = z.infer<typeof gitStashEventSchema>;
export type GitTagEvent = z.infer<typeof gitTagEventSchema>;
export type GitRemoteEvent = z.infer<typeof gitRemoteEventSchema>;
export type GitMergeEvent = z.infer<typeof gitMergeEventSchema>;
export type GitRebaseEvent = z.infer<typeof gitRebaseEventSchema>;
export type GitCloneEvent = z.infer<typeof gitCloneEventSchema>;
export type GitEvent = z.infer<typeof gitEventSchema>;

