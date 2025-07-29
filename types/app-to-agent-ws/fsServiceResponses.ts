import { z } from 'zod';

/**
 * File System Service Response Schemas
 * Messages sent from filesystem CLI service back to agents
 */

// Base success response schema
const BaseSuccessResponseSchema = z.object({
    success: z.literal(true)
});

// Base error response schema
const BaseErrorResponseSchema = z.object({
    success: z.literal(false),
    message: z.string(),
    error: z.string().optional()
});

// Create file response schemas
export const CreateFileSuccessResponseSchema = BaseSuccessResponseSchema.extend({
    type: z.literal('createFileResponse'),
    message: z.literal('File created successfully'),
    fileName: z.string()
});

export const CreateFileErrorResponseSchema = BaseErrorResponseSchema.extend({
    type: z.literal('createFileResponse'),
    message: z.literal('Failed to create file'),
    error: z.string()
});

// Create folder response schemas
export const CreateFolderSuccessResponseSchema = BaseSuccessResponseSchema.extend({
    type: z.literal('createFolderResponse'),
    message: z.literal('Folder created successfully'),
    folderName: z.string()
});

export const CreateFolderErrorResponseSchema = BaseErrorResponseSchema.extend({
    type: z.literal('createFolderResponse'),
    message: z.literal('Failed to create folder'),
    error: z.string()
});

// Read file response schemas (two variants)
export const ReadFileSuccessResponseSchema = BaseSuccessResponseSchema.extend({
    type: z.literal('readFileResponse'),
    message: z.literal('File read successfully'),
    filename: z.string(),
    content: z.string()
});

export const ReadFileSuccessResultResponseSchema = z.object({
    type: z.literal('readFileResponse'),
    success: z.literal(true),
    result: z.unknown() // Result from fsService methods
});

export const ReadFileErrorResponseSchema = BaseErrorResponseSchema.extend({
    type: z.literal('readFileResponse'),
    message: z.literal('Failed to read file'),
    error: z.string().optional(),
    result: z.string().optional()
});

// File list response schemas (two variants)
export const FileListSuccessResponseSchema = BaseSuccessResponseSchema.extend({
    type: z.literal('fileListResponse'),
    message: z.literal('Files listed successfully'),
    files: z.array(z.string())
});

export const FileListSuccessResultResponseSchema = z.object({
    type: z.literal('fileListResponse'),
    success: z.literal(true),
    result: z.unknown() // Result from fsService methods
});

export const FileListErrorResponseSchema = BaseErrorResponseSchema.extend({
    type: z.literal('fileListResponse'),
    message: z.literal('Failed to list files'),
    error: z.string().optional(),
    result: z.string().optional()
});

// Update file response schemas
export const UpdateFileSuccessResponseSchema = BaseSuccessResponseSchema.extend({
    type: z.literal('updateFileResponse'),
    message: z.literal('File updated successfully'),
    newContent: z.string()
});

export const UpdateFileErrorResponseSchema = BaseErrorResponseSchema.extend({
    type: z.literal('updateFileResponse'),
    message: z.literal('Failed to update file'),
    error: z.string()
});

// Delete file response schemas
export const DeleteFileSuccessResponseSchema = BaseSuccessResponseSchema.extend({
    type: z.literal('deleteFileResponse'),
    message: z.literal('File deleted successfully'),
    filename: z.string()
});

export const DeleteFileErrorResponseSchema = BaseErrorResponseSchema.extend({
    type: z.literal('deleteFileResponse'),
    message: z.literal('Failed to delete file'),
    error: z.string()
});

// Delete folder response schemas
export const DeleteFolderSuccessResponseSchema = BaseSuccessResponseSchema.extend({
    type: z.literal('deleteFolderResponse'),
    message: z.literal('Folder deleted successfully'),
    foldername: z.string()
});

export const DeleteFolderErrorResponseSchema = BaseErrorResponseSchema.extend({
    type: z.literal('deleteFolderResponse'),
    message: z.literal('Failed to delete folder'),
    error: z.string()
});

// List code definition names response schemas
export const ListCodeDefinitionNamesSuccessResponseSchema = z.object({
    type: z.literal('listCodeDefinitionNamesResponse'),
    success: z.literal(true),
    result: z.unknown()
});

export const ListCodeDefinitionNamesErrorResponseSchema = BaseErrorResponseSchema.extend({
    type: z.literal('listCodeDefinitionNamesResponse'),
    message: z.literal('Failed to list code definition names'),
    result: z.string()
});

// Search files response schemas
export const SearchFilesSuccessResponseSchema = z.object({
    type: z.literal('searchFilesResponse'),
    success: z.literal(true),
    result: z.unknown()
});

export const SearchFilesErrorResponseSchema = BaseErrorResponseSchema.extend({
    type: z.literal('searchFilesResponse'),
    message: z.literal('Failed to search files'),
    result: z.string()
});

// Grep search response schemas
export const GrepSearchSuccessResponseSchema = z.object({
    type: z.literal('grepSearchResponse'),
    success: z.literal(true),
    result: z.unknown()
});

export const GrepSearchErrorResponseSchema = BaseErrorResponseSchema.extend({
    type: z.literal('grepSearchResponse'),
    message: z.literal('Failed to perform grep search'),
    result: z.string()
});

// File search response schemas
export const FileSearchSuccessResponseSchema = z.object({
    type: z.literal('fileSearchResponse'),
    success: z.literal(true),
    result: z.unknown()
});

export const FileSearchErrorResponseSchema = BaseErrorResponseSchema.extend({
    type: z.literal('fileSearchResponse'),
    message: z.literal('Failed to perform file search'),
    result: z.string()
});

// Write to file response schemas
export const WriteToFileSuccessResponseSchema = z.object({
    type: z.literal('writeToFileResponse'),
    success: z.literal(true),
    result: z.unknown()
});

export const WriteToFileErrorResponseSchema = BaseErrorResponseSchema.extend({
    type: z.literal('writeToFileResponse'),
    message: z.literal('Failed to write to file'),
    result: z.string()
});

// Edit file and apply diff response schemas
export const EditFileAndApplyDiffSuccessResponseSchema = z.object({
    type: z.literal('editFileAndApplyDiffResponse'),
    success: z.literal(true),
    result: z.unknown()
});

export const EditFileAndApplyDiffErrorResponseSchema = z.object({
    type: z.literal('editFileAndApplyDiffResponse'),
    success: z.literal(false),
    message: z.literal('Failed to edit file and apply diff'),
    result: z.string()
});

// Generic error response schema
export const FsServiceErrorResponseSchema = z.object({
    type: z.literal('error'),
    success: z.literal(false),
    message: z.literal('Unknown message type'),
    result: z.null()
});

// Main union schema for all filesystem service responses
// Consumers can use this if they need to handle any filesystem response
export const FsServiceResponseSchema = z.union([
    CreateFileSuccessResponseSchema,
    CreateFileErrorResponseSchema,
    CreateFolderSuccessResponseSchema,
    CreateFolderErrorResponseSchema,
    ReadFileSuccessResponseSchema,
    ReadFileSuccessResultResponseSchema,
    ReadFileErrorResponseSchema,
    FileListSuccessResponseSchema,
    FileListSuccessResultResponseSchema,
    FileListErrorResponseSchema,
    UpdateFileSuccessResponseSchema,
    UpdateFileErrorResponseSchema,
    DeleteFileSuccessResponseSchema,
    DeleteFileErrorResponseSchema,
    DeleteFolderSuccessResponseSchema,
    DeleteFolderErrorResponseSchema,
    ListCodeDefinitionNamesSuccessResponseSchema,
    ListCodeDefinitionNamesErrorResponseSchema,
    SearchFilesSuccessResponseSchema,
    SearchFilesErrorResponseSchema,
    GrepSearchSuccessResponseSchema,
    GrepSearchErrorResponseSchema,
    FileSearchSuccessResponseSchema,
    FileSearchErrorResponseSchema,
    WriteToFileSuccessResponseSchema,
    WriteToFileErrorResponseSchema,
    EditFileAndApplyDiffSuccessResponseSchema,
    EditFileAndApplyDiffErrorResponseSchema,
    FsServiceErrorResponseSchema
]);

// Export with the expected name for the index file
export const fsServiceResponseSchema = FsServiceResponseSchema;

// Type exports - only success and error types, no redundant union types
export type CreateFileSuccessResponse = z.infer<typeof CreateFileSuccessResponseSchema>;
export type CreateFileErrorResponse = z.infer<typeof CreateFileErrorResponseSchema>;

export type CreateFolderSuccessResponse = z.infer<typeof CreateFolderSuccessResponseSchema>;
export type CreateFolderErrorResponse = z.infer<typeof CreateFolderErrorResponseSchema>;

export type ReadFileSuccessResponse = z.infer<typeof ReadFileSuccessResponseSchema>;
export type ReadFileSuccessResultResponse = z.infer<typeof ReadFileSuccessResultResponseSchema>;


export type FileListSuccessResponse = z.infer<typeof FileListSuccessResponseSchema>;

export type FileListErrorResponse = z.infer<typeof FileListErrorResponseSchema>;

export type UpdateFileSuccessResponse = z.infer<typeof UpdateFileSuccessResponseSchema>;
export type UpdateFileErrorResponse = z.infer<typeof UpdateFileErrorResponseSchema>;

export type DeleteFileSuccessResponse = z.infer<typeof DeleteFileSuccessResponseSchema>;
export type DeleteFileErrorResponse = z.infer<typeof DeleteFileErrorResponseSchema>;

export type DeleteFolderSuccessResponse = z.infer<typeof DeleteFolderSuccessResponseSchema>;
export type DeleteFolderErrorResponse = z.infer<typeof DeleteFolderErrorResponseSchema>;

export type ListCodeDefinitionNamesSuccessResponse = z.infer<typeof ListCodeDefinitionNamesSuccessResponseSchema>;
export type ListCodeDefinitionNamesErrorResponse = z.infer<typeof ListCodeDefinitionNamesErrorResponseSchema>;

export type SearchFilesSuccessResponse = z.infer<typeof SearchFilesSuccessResponseSchema>;
export type SearchFilesErrorResponse = z.infer<typeof SearchFilesErrorResponseSchema>;

export type GrepSearchSuccessResponse = z.infer<typeof GrepSearchSuccessResponseSchema>;
export type GrepSearchErrorResponse = z.infer<typeof GrepSearchErrorResponseSchema>;

export type FileSearchSuccessResponse = z.infer<typeof FileSearchSuccessResponseSchema>;
export type FileSearchErrorResponse = z.infer<typeof FileSearchErrorResponseSchema>;

export type WriteToFileSuccessResponse = z.infer<typeof WriteToFileSuccessResponseSchema>;
export type WriteToFileErrorResponse = z.infer<typeof WriteToFileErrorResponseSchema>;

export type EditFileAndApplyDiffSuccessResponse = z.infer<typeof EditFileAndApplyDiffSuccessResponseSchema>;
export type EditFileAndApplyDiffErrorResponse = z.infer<typeof EditFileAndApplyDiffErrorResponseSchema>;

export type FsServiceErrorResponse = z.infer<typeof FsServiceErrorResponseSchema>;
export type FsServiceResponse = z.infer<typeof FsServiceResponseSchema>;
