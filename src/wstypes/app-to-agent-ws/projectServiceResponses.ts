import { z } from 'zod';

/**
 * Project Service Response Schemas
 * Messages sent from project CLI service back to agents
 */

// Get project path response schema
export const GetProjectPathResponseSchema = z.object({
    type: z.literal('getProjectPathResponse'),
    success: z.literal(true),
    message: z.literal('Project path retrieved successfully'),
    projectPath: z.string()
});

// Project settings structure (based on projectSetting from settingService)
const ProjectSettingsSchema = z.object({
    user_active_project_path: z.string(),
    userprofile_llm_settings: z.string(), // JSON string
    userprofile_default_llm: z.string(), // JSON string
    projectName: z.string().optional(),
    workspaceId: z.number().optional()
}).passthrough(); // Allow additional project setting properties

// Repo map structure (typically a string representation of the repository structure)
const RepoMapSchema = z.string(); // Repository map is typically a string

// Get project settings response schema
export const GetProjectSettingsResponseSchema = z.object({
    type: z.literal('getProjectSettingsResponse'),
    success: z.literal(true),
    message: z.literal('Project settings retrieved successfully'),
    projectSettings: ProjectSettingsSchema
});

// Get repo map response schema
export const GetRepoMapResponseSchema = z.object({
    type: z.literal('getRepoMapResponse'),
    success: z.literal(true),
    message: z.literal('Project repomap retrieved successfully'),
    repoMap: RepoMapSchema
});

// Get editor file status response schema (success)
export const GetEditorFileStatusResponseSuccessSchema = z.object({
    type: z.literal('getEditorFileStatusResponse'),
    success: z.literal(true),
    message: z.string(),
    editorStatus: z.string()
});

// Get editor file status response schema (error)
export const GetEditorFileStatusResponseErrorSchema = z.object({
    type: z.literal('getEditorFileStatusResponse'),
    success: z.literal(false),
    message: z.string(),
    editorStatus: z.string()
});

// Union type for editor file status response
export const GetEditorFileStatusResponseSchema = z.union([
    GetEditorFileStatusResponseSuccessSchema,
    GetEditorFileStatusResponseErrorSchema
]);

// Union of all project service response schemas
export const ProjectServiceResponseSchema = z.union([
    GetProjectPathResponseSchema,
    GetProjectSettingsResponseSchema,
    GetRepoMapResponseSchema,
    GetEditorFileStatusResponseSchema
]);

// Export with the expected name for the index file
export const projectServiceResponseSchema = ProjectServiceResponseSchema;

// Type exports
export type GetProjectPathResponse = z.infer<typeof GetProjectPathResponseSchema>;
export type GetProjectSettingsResponse = z.infer<typeof GetProjectSettingsResponseSchema>;
export type GetRepoMapResponse = z.infer<typeof GetRepoMapResponseSchema>;
export type GetEditorFileStatusResponseSuccess = z.infer<typeof GetEditorFileStatusResponseSuccessSchema>;
export type GetEditorFileStatusResponseError = z.infer<typeof GetEditorFileStatusResponseErrorSchema>;
export type GetEditorFileStatusResponse = z.infer<typeof GetEditorFileStatusResponseSchema>;
export type ProjectServiceResponse = z.infer<typeof ProjectServiceResponseSchema>; 