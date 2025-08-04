import { z } from 'zod';

/**
 * FS Service Response Schemas
 * Messages sent from FS CLI service back to agents
 */

// Create file success response schema
export const CreateFileSuccessResponseSchema = z.object({
  type: z.literal('createFileResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Create file error response schema
export const CreateFileErrorResponseSchema = z.object({
  type: z.literal('createFileResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Create folder success response schema
export const CreateFolderSuccessResponseSchema = z.object({
  type: z.literal('createFolderResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Create folder error response schema
export const CreateFolderErrorResponseSchema = z.object({
  type: z.literal('createFolderResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Read file success response schema
export const ReadFileSuccessResponseSchema = z.object({
  type: z.literal('readFileResponse'),
  messageId: z.string(),
  content: z.string().optional(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Read file success result response schema
export const ReadFileSuccessResultResponseSchema = z.object({
  type: z.literal('readFileResponse'),
  messageId: z.string(),
  content: z.string().optional(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Update file success response schema
export const UpdateFileSuccessResponseSchema = z.object({
  type: z.literal('updateFileResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Update file error response schema
export const UpdateFileErrorResponseSchema = z.object({
  type: z.literal('updateFileResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Delete file success response schema
export const DeleteFileSuccessResponseSchema = z.object({
  type: z.literal('deleteFileResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Delete file error response schema
export const DeleteFileErrorResponseSchema = z.object({
  type: z.literal('deleteFileResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Delete folder success response schema
export const DeleteFolderSuccessResponseSchema = z.object({
  type: z.literal('deleteFolderResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Delete folder error response schema
export const DeleteFolderErrorResponseSchema = z.object({
  type: z.literal('deleteFolderResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// File list success response schema
export const FileListSuccessResponseSchema = z.object({
  type: z.literal('fileListResponse'),
  messageId: z.string(),
  files: z.array(z.any()).optional(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// File list error response schema
export const FileListErrorResponseSchema = z.object({
  type: z.literal('fileListResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Search files success response schema
export const SearchFilesSuccessResponseSchema = z.object({
  type: z.literal('searchFilesResponse'),
  messageId: z.string(),
  files: z.array(z.any()).optional(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Search files error response schema
export const SearchFilesErrorResponseSchema = z.object({
  type: z.literal('searchFilesResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Write to file success response schema
export const WriteToFileSuccessResponseSchema = z.object({
  type: z.literal('writeToFileResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Write to file error response schema
export const WriteToFileErrorResponseSchema = z.object({
  type: z.literal('writeToFileResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Grep search success response schema
export const GrepSearchSuccessResponseSchema = z.object({
  type: z.literal('grepSearchResponse'),
  messageId: z.string(),
  results: z.array(z.any()).optional(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Grep search error response schema
export const GrepSearchErrorResponseSchema = z.object({
  type: z.literal('grepSearchResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// List code definition names success response schema
export const ListCodeDefinitionNamesSuccessResponseSchema = z.object({
  type: z.literal('listCodeDefinitionNamesResponse'),
  messageId: z.string(),
  definitions: z.array(z.any()).optional(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// List code definition names error response schema
export const ListCodeDefinitionNamesErrorResponseSchema = z.object({
  type: z.literal('listCodeDefinitionNamesResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// File search success response schema
export const FileSearchSuccessResponseSchema = z.object({
  type: z.literal('fileSearchResponse'),
  messageId: z.string(),
  files: z.array(z.any()).optional(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// File search error response schema
export const FileSearchErrorResponseSchema = z.object({
  type: z.literal('fileSearchResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Edit file and apply diff success response schema
export const EditFileAndApplyDiffSuccessResponseSchema = z.object({
  type: z.literal('editFileAndApplyDiffResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Edit file and apply diff error response schema
export const EditFileAndApplyDiffErrorResponseSchema = z.object({
  type: z.literal('editFileAndApplyDiffResponse'),
  messageId: z.string(),
  success: z.boolean().optional(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional()
});

// Union of all FS service response schemas
export const FsServiceResponseSchema = z.union([
  CreateFileSuccessResponseSchema,
  CreateFileErrorResponseSchema,
  CreateFolderSuccessResponseSchema,
  CreateFolderErrorResponseSchema,
  ReadFileSuccessResponseSchema,
  ReadFileSuccessResultResponseSchema,
  UpdateFileSuccessResponseSchema,
  UpdateFileErrorResponseSchema,
  DeleteFileSuccessResponseSchema,
  DeleteFileErrorResponseSchema,
  DeleteFolderSuccessResponseSchema,
  DeleteFolderErrorResponseSchema,
  FileListSuccessResponseSchema,
  FileListErrorResponseSchema,
  SearchFilesSuccessResponseSchema,
  SearchFilesErrorResponseSchema,
  WriteToFileSuccessResponseSchema,
  WriteToFileErrorResponseSchema,
  GrepSearchSuccessResponseSchema,
  GrepSearchErrorResponseSchema,
  ListCodeDefinitionNamesSuccessResponseSchema,
  ListCodeDefinitionNamesErrorResponseSchema,
  FileSearchSuccessResponseSchema,
  FileSearchErrorResponseSchema,
  EditFileAndApplyDiffSuccessResponseSchema,
  EditFileAndApplyDiffErrorResponseSchema
]);

// Export with the expected name for the index file
export const fsServiceResponseSchema = FsServiceResponseSchema;

// Type exports
export type CreateFileSuccessResponse = z.infer<typeof CreateFileSuccessResponseSchema>;
export type CreateFileErrorResponse = z.infer<typeof CreateFileErrorResponseSchema>;
export type CreateFolderSuccessResponse = z.infer<typeof CreateFolderSuccessResponseSchema>;
export type CreateFolderErrorResponse = z.infer<typeof CreateFolderErrorResponseSchema>;
export type ReadFileSuccessResponse = z.infer<typeof ReadFileSuccessResponseSchema>;
export type ReadFileSuccessResultResponse = z.infer<typeof ReadFileSuccessResultResponseSchema>;
export type UpdateFileSuccessResponse = z.infer<typeof UpdateFileSuccessResponseSchema>;
export type UpdateFileErrorResponse = z.infer<typeof UpdateFileErrorResponseSchema>;
export type DeleteFileSuccessResponse = z.infer<typeof DeleteFileSuccessResponseSchema>;
export type DeleteFileErrorResponse = z.infer<typeof DeleteFileErrorResponseSchema>;
export type DeleteFolderSuccessResponse = z.infer<typeof DeleteFolderSuccessResponseSchema>;
export type DeleteFolderErrorResponse = z.infer<typeof DeleteFolderErrorResponseSchema>;
export type FileListSuccessResponse = z.infer<typeof FileListSuccessResponseSchema>;
export type FileListErrorResponse = z.infer<typeof FileListErrorResponseSchema>;
export type SearchFilesSuccessResponse = z.infer<typeof SearchFilesSuccessResponseSchema>;
export type SearchFilesErrorResponse = z.infer<typeof SearchFilesErrorResponseSchema>;
export type WriteToFileSuccessResponse = z.infer<typeof WriteToFileSuccessResponseSchema>;
export type WriteToFileErrorResponse = z.infer<typeof WriteToFileErrorResponseSchema>;
export type GrepSearchSuccessResponse = z.infer<typeof GrepSearchSuccessResponseSchema>;
export type GrepSearchErrorResponse = z.infer<typeof GrepSearchErrorResponseSchema>;
export type ListCodeDefinitionNamesSuccessResponse = z.infer<typeof ListCodeDefinitionNamesSuccessResponseSchema>;
export type ListCodeDefinitionNamesErrorResponse = z.infer<typeof ListCodeDefinitionNamesErrorResponseSchema>;
export type FileSearchSuccessResponse = z.infer<typeof FileSearchSuccessResponseSchema>;
export type FileSearchErrorResponse = z.infer<typeof FileSearchErrorResponseSchema>;
export type EditFileAndApplyDiffSuccessResponse = z.infer<typeof EditFileAndApplyDiffSuccessResponseSchema>;
export type EditFileAndApplyDiffErrorResponse = z.infer<typeof EditFileAndApplyDiffErrorResponseSchema>;
export type FsServiceResponse = z.infer<typeof FsServiceResponseSchema>;
