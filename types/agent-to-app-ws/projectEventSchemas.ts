import { z } from 'zod';

/**
 * Project Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/project.ts module operations
 */

// Base project/setting message schema
export const projectEventBaseSchema = z.object({
  type: z.literal('settingEvent'),
  action: z.string(),
  message: z.any().optional(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Get Project Settings Event Schema
export const getProjectSettingsEventSchema = projectEventBaseSchema.extend({
  action: z.literal('getProjectSettings'),
});

// Get Project Path Event Schema
export const getProjectPathEventSchema = projectEventBaseSchema.extend({
  action: z.literal('getProjectPath'),
});

// Get Repo Map Event Schema
export const getRepoMapEventSchema = projectEventBaseSchema.extend({
  action: z.literal('getRepoMap'),
  message: z.any(),
});

// Run Project Event Schema
export const runProjectEventSchema = z.object({
  type: z.literal('runProject'),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Get Editor File Status Event Schema
export const getEditorFileStatusEventSchema = projectEventBaseSchema.extend({
  action: z.literal('getEditorFileStatus'),
});

// Set Project Settings Event Schema
export const setProjectSettingsEventSchema = projectEventBaseSchema.extend({
  action: z.literal('setProjectSettings'),
  message: z.object({
    settings: z.record(z.any()),
  }),
});

// Create Project Event Schema
export const createProjectEventSchema = projectEventBaseSchema.extend({
  action: z.literal('createProject'),
  message: z.object({
    name: z.string(),
    path: z.string(),
    template: z.string().optional(),
    framework: z.string().optional(),
    language: z.string().optional(),
  }),
});

// Delete Project Event Schema
export const deleteProjectEventSchema = projectEventBaseSchema.extend({
  action: z.literal('deleteProject'),
  message: z.object({
    projectId: z.string(),
  }),
});

// Union of all project event schemas
export const projectEventSchema = z.union([
  getProjectSettingsEventSchema,
  getProjectPathEventSchema,
  getRepoMapEventSchema,
  runProjectEventSchema,
  getEditorFileStatusEventSchema,
  setProjectSettingsEventSchema,
  createProjectEventSchema,
  deleteProjectEventSchema,
]);

// Project settings schema for responses
const projectSettingsSchema = z.object({
  name: z.string(),
  version: z.string().optional(),
  description: z.string().optional(),
  framework: z.string().optional(),
  language: z.string().optional(),
  buildCommand: z.string().optional(),
  startCommand: z.string().optional(),
  testCommand: z.string().optional(),
  dependencies: z.record(z.string()).optional(),
  devDependencies: z.record(z.string()).optional(),
  scripts: z.record(z.string()).optional(),
  author: z.string().optional(),
  license: z.string().optional(),
  repository: z.object({
    type: z.string(),
    url: z.string(),
  }).optional(),
});

// File status schema for editor
const fileStatusSchema = z.object({
  path: z.string(),
  isOpen: z.boolean(),
  isDirty: z.boolean(),
  content: z.string().optional(),
  lastModified: z.string().optional(),
  language: z.string().optional(),
});

// Response Schemas for project operations
export const getProjectSettingsResponseSchema = z.object({
  success: z.boolean(),
  settings: projectSettingsSchema.optional(),
  message: z.string().optional(),
});

export const getProjectPathResponseSchema = z.object({
  success: z.boolean(),
  path: z.string(),
  absolutePath: z.string().optional(),
  exists: z.boolean(),
});

export const getRepoMapResponseSchema = z.object({
  success: z.boolean(),
  repoMap: z.object({
    structure: z.record(z.any()),
    files: z.array(z.string()),
    directories: z.array(z.string()),
    totalFiles: z.number(),
    totalDirectories: z.number(),
    size: z.number().optional(),
  }).optional(),
  message: z.string().optional(),
});

export const runProjectResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  processId: z.number().optional(),
  command: z.string().optional(),
});

export const getEditorFileStatusResponseSchema = z.object({
  success: z.boolean(),
  files: z.array(fileStatusSchema),
  activeFile: z.string().optional(),
  totalOpen: z.number(),
});

export const setProjectSettingsResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  settings: projectSettingsSchema.optional(),
});

export const createProjectResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  project: z.object({
    id: z.string(),
    name: z.string(),
    path: z.string(),
    template: z.string().optional(),
    framework: z.string().optional(),
    language: z.string().optional(),
    createdAt: z.string(),
  }).optional(),
});

export const deleteProjectResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  projectId: z.string(),
});

// Inferred TypeScript types for events
export type ProjectEventBase = z.infer<typeof projectEventBaseSchema>;
export type GetProjectSettingsEvent = z.infer<typeof getProjectSettingsEventSchema>;
export type GetProjectPathEvent = z.infer<typeof getProjectPathEventSchema>;
export type GetRepoMapEvent = z.infer<typeof getRepoMapEventSchema>;
export type RunProjectEvent = z.infer<typeof runProjectEventSchema>;
export type GetEditorFileStatusEvent = z.infer<typeof getEditorFileStatusEventSchema>;
export type SetProjectSettingsEvent = z.infer<typeof setProjectSettingsEventSchema>;
export type CreateProjectEvent = z.infer<typeof createProjectEventSchema>;
export type DeleteProjectEvent = z.infer<typeof deleteProjectEventSchema>;
export type ProjectEvent = z.infer<typeof projectEventSchema>;

// Inferred TypeScript types for data structures
export type ProjectSettings = z.infer<typeof projectSettingsSchema>;
export type FileStatus = z.infer<typeof fileStatusSchema>;

// Inferred TypeScript types for responses
export type GetProjectSettingsResponse = z.infer<typeof getProjectSettingsResponseSchema>;
export type GetProjectPathResponse = z.infer<typeof getProjectPathResponseSchema>;
export type GetRepoMapResponse = z.infer<typeof getRepoMapResponseSchema>;
export type RunProjectResponse = z.infer<typeof runProjectResponseSchema>;
export type GetEditorFileStatusResponse = z.infer<typeof getEditorFileStatusResponseSchema>;
export type SetProjectSettingsResponse = z.infer<typeof setProjectSettingsResponseSchema>;
export type CreateProjectResponse = z.infer<typeof createProjectResponseSchema>;
export type DeleteProjectResponse = z.infer<typeof deleteProjectResponseSchema>; 