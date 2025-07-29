import { z } from 'zod';


// Response Schemas for filesystem operations
export const createFileResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  filePath: z.string().optional(),
});

export const createFolderResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  folderPath: z.string().optional(),
});

export const readFileResponseSchema = z.object({
  success: z.boolean(),
  content: z.string().optional(),
  filePath: z.string().optional(),
  error: z.string().optional(),
});

export const updateFileResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  filePath: z.string().optional(),
});

export const deleteFileResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  filePath: z.string().optional(),
});

export const deleteFolderResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  folderPath: z.string().optional(),
});

export const getFilesResponseSchema = z.object({
  success: z.boolean(),
  files: z.array(z.string()).optional(),
  folderPath: z.string().optional(),
});

export const getAllFilesResponseSchema = z.object({
  success: z.boolean(),
  files: z.array(z.string()).optional(),
  folderPath: z.string().optional(),
});

export const getFoldersResponseSchema = z.object({
  success: z.boolean(),
  folders: z.array(z.string()).optional(),
  folderPath: z.string().optional(),
});

export const copyFileResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  sourceFilePath: z.string().optional(),
  destinationFilePath: z.string().optional(),
});

export const copyFolderResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  sourceFolderPath: z.string().optional(),
  destinationFolderPath: z.string().optional(),
});

export const moveFileResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  sourceFilePath: z.string().optional(),
  destinationFilePath: z.string().optional(),
});

export const moveFolderResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  sourceFolderPath: z.string().optional(),
  destinationFolderPath: z.string().optional(),
});

export const searchFilesResponseSchema = z.object({
  success: z.boolean(),
  files: z.array(z.string()).optional(),
  query: z.string().optional(),
});

export const getFileInfoResponseSchema = z.object({
  success: z.boolean(),
  info: z.object({
    size: z.number(),
    createdAt: z.string(),
    modifiedAt: z.string(),
    isDirectory: z.boolean(),
    permissions: z.string().optional(),
  }).optional(),
  filePath: z.string().optional(),
});

export const getFolderInfoResponseSchema = z.object({
  success: z.boolean(),
  info: z.object({
    size: z.number(),
    createdAt: z.string(),
    modifiedAt: z.string(),
    isDirectory: z.boolean(),
    permissions: z.string().optional(),
  }).optional(),
  folderPath: z.string().optional(),
});

export const watchFileResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  filePath: z.string().optional(),
});

export const unwatchFileResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  filePath: z.string().optional(),
});

// Response types
export type CreateFileResponse = z.infer<typeof createFileResponseSchema>;
export type CreateFolderResponse = z.infer<typeof createFolderResponseSchema>;
export type ReadFileResponse = z.infer<typeof readFileResponseSchema>;
export type UpdateFileResponse = z.infer<typeof updateFileResponseSchema>;
export type DeleteFileResponse = z.infer<typeof deleteFileResponseSchema>;
export type DeleteFolderResponse = z.infer<typeof deleteFolderResponseSchema>;
export type GetFilesResponse = z.infer<typeof getFilesResponseSchema>;
export type GetAllFilesResponse = z.infer<typeof getAllFilesResponseSchema>;
export type GetFoldersResponse = z.infer<typeof getFoldersResponseSchema>;
export type CopyFileResponse = z.infer<typeof copyFileResponseSchema>;
export type CopyFolderResponse = z.infer<typeof copyFolderResponseSchema>;
export type MoveFileResponse = z.infer<typeof moveFileResponseSchema>;
export type MoveFolderResponse = z.infer<typeof moveFolderResponseSchema>;
export type SearchFilesResponse = z.infer<typeof searchFilesResponseSchema>;
export type GetFileInfoResponse = z.infer<typeof getFileInfoResponseSchema>;
export type GetFolderInfoResponse = z.infer<typeof getFolderInfoResponseSchema>;
export type WatchFileResponse = z.infer<typeof watchFileResponseSchema>;
export type UnwatchFileResponse = z.infer<typeof unwatchFileResponseSchema>; 