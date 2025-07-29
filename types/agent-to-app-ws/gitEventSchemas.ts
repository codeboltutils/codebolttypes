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

// Response Schemas for git operations
export const gitInitResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  path: z.string().optional(),
});

export const gitPullResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  changes: z.array(z.string()).optional(),
});

export const gitPushResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  commits: z.array(z.string()).optional(),
});

export const gitStatusResponseSchema = z.object({
  success: z.boolean(),
  status: z.object({
    staged: z.array(z.string()),
    unstaged: z.array(z.string()),
    untracked: z.array(z.string()),
    currentBranch: z.string(),
    ahead: z.number().optional(),
    behind: z.number().optional(),
  }).optional(),
});

export const gitAddResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  addedFiles: z.array(z.string()).optional(),
});

export const gitCommitResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  hash: z.string().optional(),
  files: z.array(z.string()).optional(),
});

export const gitCheckoutResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  branch: z.string().optional(),
});

export const gitBranchResponseSchema = z.object({
  success: z.boolean(),
  branches: z.array(z.object({
    name: z.string(),
    current: z.boolean(),
    remote: z.boolean().optional(),
  })).optional(),
  message: z.string().optional(),
});

export const gitLogsResponseSchema = z.object({
  success: z.boolean(),
  logs: z.array(z.object({
    hash: z.string(),
    message: z.string(),
    author: z.string(),
    date: z.string(),
    refs: z.string().optional(),
  })).optional(),
});

export const gitDiffResponseSchema = z.object({
  success: z.boolean(),
  diff: z.string().optional(),
  files: z.array(z.object({
    file: z.string(),
    changes: z.string(),
  })).optional(),
});

export const gitResetResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  files: z.array(z.string()).optional(),
});

export const gitStashResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  stashes: z.array(z.object({
    index: z.number(),
    branch: z.string(),
    message: z.string(),
  })).optional(),
});

export const gitTagResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  tags: z.array(z.string()).optional(),
});

export const gitRemoteResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  remotes: z.array(z.object({
    name: z.string(),
    url: z.string(),
    type: z.enum(['fetch', 'push']),
  })).optional(),
});

export const gitMergeResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  conflicts: z.array(z.string()).optional(),
});

export const gitRebaseResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  conflicts: z.array(z.string()).optional(),
});

export const gitCloneResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  directory: z.string().optional(),
});

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

// Inferred TypeScript types for responses
export type GitInitResponse = z.infer<typeof gitInitResponseSchema>;
export type GitPullResponse = z.infer<typeof gitPullResponseSchema>;
export type GitPushResponse = z.infer<typeof gitPushResponseSchema>;
export type GitStatusResponse = z.infer<typeof gitStatusResponseSchema>;
export type GitAddResponse = z.infer<typeof gitAddResponseSchema>;
export type GitCommitResponse = z.infer<typeof gitCommitResponseSchema>;
export type GitCheckoutResponse = z.infer<typeof gitCheckoutResponseSchema>;
export type GitBranchResponse = z.infer<typeof gitBranchResponseSchema>;
export type GitLogsResponse = z.infer<typeof gitLogsResponseSchema>;
export type GitDiffResponse = z.infer<typeof gitDiffResponseSchema>;
export type GitResetResponse = z.infer<typeof gitResetResponseSchema>;
export type GitStashResponse = z.infer<typeof gitStashResponseSchema>;
export type GitTagResponse = z.infer<typeof gitTagResponseSchema>;
export type GitRemoteResponse = z.infer<typeof gitRemoteResponseSchema>;
export type GitMergeResponse = z.infer<typeof gitMergeResponseSchema>;
export type GitRebaseResponse = z.infer<typeof gitRebaseResponseSchema>;
export type GitCloneResponse = z.infer<typeof gitCloneResponseSchema>; 