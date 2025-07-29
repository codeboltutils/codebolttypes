import { z } from 'zod';

/**
 * Filesystem Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/fs.ts module operations
 */

// Base filesystem message schema
export const fsEventBaseSchema = z.object({
  type: z.literal('fsEvent'),
  action: z.string(),
  message: z.object({}).passthrough(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Create File Event Schema
export const createFileEventSchema = fsEventBaseSchema.extend({
  action: z.literal('createFile'),
  message: z.object({
    fileName: z.string(),
    source: z.string(),
    filePath: z.string(),
  }),
});

// Create Folder Event Schema
export const createFolderEventSchema = fsEventBaseSchema.extend({
  action: z.literal('createFolder'),
  message: z.object({
    folderName: z.string(),
    folderPath: z.string(),
  }),
});

// Read File Event Schema
export const readFileEventSchema = fsEventBaseSchema.extend({
  action: z.literal('readFile'),
  message: z.object({
    filePath: z.string(),
  }),
});

// Update File Event Schema
export const updateFileEventSchema = fsEventBaseSchema.extend({
  action: z.literal('updateFile'),
  message: z.object({
    filename: z.string(),
    filePath: z.string(),
    newContent: z.string(),
  }),
});

// Delete File Event Schema
export const deleteFileEventSchema = fsEventBaseSchema.extend({
  action: z.literal('deleteFile'),
  message: z.object({
    filename: z.string(),
    filePath: z.string(),
  }),
});

// Delete Folder Event Schema
export const deleteFolderEventSchema = fsEventBaseSchema.extend({
  action: z.literal('deleteFolder'),
  message: z.object({
    foldername: z.string(),
    folderPath: z.string(),
  }),
});

// Get Files Event Schema
export const getFilesEventSchema = fsEventBaseSchema.extend({
  action: z.literal('getFiles'),
  message: z.object({
    folderPath: z.string(),
  }),
});

// Get All Files Event Schema
export const getAllFilesEventSchema = fsEventBaseSchema.extend({
  action: z.literal('getAllFiles'),
  message: z.object({
    folderPath: z.string(),
  }),
});

// Get Folders Event Schema
export const getFoldersEventSchema = fsEventBaseSchema.extend({
  action: z.literal('getFolders'),
  message: z.object({
    folderPath: z.string(),
  }),
});

// Copy File Event Schema
export const copyFileEventSchema = fsEventBaseSchema.extend({
  action: z.literal('copyFile'),
  message: z.object({
    sourceFilePath: z.string(),
    destinationFilePath: z.string(),
  }),
});

// Copy Folder Event Schema
export const copyFolderEventSchema = fsEventBaseSchema.extend({
  action: z.literal('copyFolder'),
  message: z.object({
    sourceFolderPath: z.string(),
    destinationFolderPath: z.string(),
  }),
});

// Move File Event Schema
export const moveFileEventSchema = fsEventBaseSchema.extend({
  action: z.literal('moveFile'),
  message: z.object({
    sourceFilePath: z.string(),
    destinationFilePath: z.string(),
  }),
});

// Move Folder Event Schema
export const moveFolderEventSchema = fsEventBaseSchema.extend({
  action: z.literal('moveFolder'),
  message: z.object({
    sourceFolderPath: z.string(),
    destinationFolderPath: z.string(),
  }),
});

// Search Files Event Schema
export const searchFilesEventSchema = fsEventBaseSchema.extend({
  action: z.literal('searchFiles'),
  message: z.object({
    query: z.string(),
    folderPath: z.string().optional(),
  }),
});

// Get File Info Event Schema
export const getFileInfoEventSchema = fsEventBaseSchema.extend({
  action: z.literal('getFileInfo'),
  message: z.object({
    filePath: z.string(),
  }),
});

// Get Folder Info Event Schema
export const getFolderInfoEventSchema = fsEventBaseSchema.extend({
  action: z.literal('getFolderInfo'),
  message: z.object({
    folderPath: z.string(),
  }),
});

// Watch File Event Schema
export const watchFileEventSchema = fsEventBaseSchema.extend({
  action: z.literal('watchFile'),
  message: z.object({
    filePath: z.string(),
  }),
});

// Unwatch File Event Schema
export const unwatchFileEventSchema = fsEventBaseSchema.extend({
  action: z.literal('unwatchFile'),
  message: z.object({
    filePath: z.string(),
  }),
});

// Union of all filesystem event schemas
export const fsEventSchema = z.union([
  createFileEventSchema,
  createFolderEventSchema,
  readFileEventSchema,
  updateFileEventSchema,
  deleteFileEventSchema,
  deleteFolderEventSchema,
  getFilesEventSchema,
  getAllFilesEventSchema,
  getFoldersEventSchema,
  copyFileEventSchema,
  copyFolderEventSchema,
  moveFileEventSchema,
  moveFolderEventSchema,
  searchFilesEventSchema,
  getFileInfoEventSchema,
  getFolderInfoEventSchema,
  watchFileEventSchema,
  unwatchFileEventSchema,
]);


// Inferred TypeScript types
export type FsEventBase = z.infer<typeof fsEventBaseSchema>;
export type CreateFileEvent = z.infer<typeof createFileEventSchema>;
export type CreateFolderEvent = z.infer<typeof createFolderEventSchema>;
export type ReadFileEvent = z.infer<typeof readFileEventSchema>;
export type UpdateFileEvent = z.infer<typeof updateFileEventSchema>;
export type DeleteFileEvent = z.infer<typeof deleteFileEventSchema>;
export type DeleteFolderEvent = z.infer<typeof deleteFolderEventSchema>;
export type GetFilesEvent = z.infer<typeof getFilesEventSchema>;
export type GetAllFilesEvent = z.infer<typeof getAllFilesEventSchema>;
export type GetFoldersEvent = z.infer<typeof getFoldersEventSchema>;
export type CopyFileEvent = z.infer<typeof copyFileEventSchema>;
export type CopyFolderEvent = z.infer<typeof copyFolderEventSchema>;
export type MoveFileEvent = z.infer<typeof moveFileEventSchema>;
export type MoveFolderEvent = z.infer<typeof moveFolderEventSchema>;
export type SearchFilesEvent = z.infer<typeof searchFilesEventSchema>;
export type GetFileInfoEvent = z.infer<typeof getFileInfoEventSchema>;
export type GetFolderInfoEvent = z.infer<typeof getFolderInfoEventSchema>;
export type WatchFileEvent = z.infer<typeof watchFileEventSchema>;
export type UnwatchFileEvent = z.infer<typeof unwatchFileEventSchema>;
export type FsEvent = z.infer<typeof fsEventSchema>;