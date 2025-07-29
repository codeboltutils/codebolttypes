import { z } from 'zod';
import { baseMessageSchema, buttonOptionSchema, messagePayloadSchema } from './coreMessageSchemas';

/**
 * File Operation Message Schemas for App-to-UI Communication
 * Based on file operation patterns in fsService.cli.ts
 */

// File state enum schema
export const fileStateEnumSchema = z.enum([
  'ASK_FOR_CONFIRMATION',
  'FILE_READ',
  'FILE_READ_ERROR',
  'REJECTED',
  'SEARCHING',
  'PROCESSING_RESULTS',
  'SEARCH_COMPLETE',
  'SEARCH_ERROR'
]);

// File write state enum schema
export const fileWriteStateEnumSchema = z.enum([
  'askForConfirmation',
  'accepted',
  'rejected',
  'fileWrite',
  'fileWriteError',
  'applyingEdit',
  'editStarting'
]);

// File payload schema
export const filePayloadSchema = messagePayloadSchema.extend({
  type: z.literal('file'),
  path: z.string(),
  content: z.string(),
  originalContent: z.string().optional(),
  stateEvent: z.union([fileStateEnumSchema, fileWriteStateEnumSchema]),
  diff: z.string().optional(),
  language: z.string().optional(),
  size: z.number().optional(),
  encoding: z.string().optional(),
});

// Base file message schema
export const baseFileMessageSchema = baseMessageSchema.extend({
  type: z.literal('message'),
  sender: z.literal('agent'),
  timestamp: z.number(),
  payload: filePayloadSchema,
});

// File read confirmation schema
export const fileReadConfirmationSchema = baseFileMessageSchema.extend({
  actionType: z.literal('READFILE'),
  templateType: z.literal('READFILE'),
  payload: filePayloadSchema.extend({
    stateEvent: z.literal('ASK_FOR_CONFIRMATION'),
  }),
});

// File read success schema
export const fileReadSuccessSchema = baseFileMessageSchema.extend({
  actionType: z.literal('READFILE'),
  templateType: z.literal('READFILE'),
  payload: filePayloadSchema.extend({
    stateEvent: z.literal('FILE_READ'),
  }),
});

// File read error schema
export const fileReadErrorSchema = baseFileMessageSchema.extend({
  actionType: z.literal('READFILE'),
  templateType: z.literal('FILEREAD'),
  payload: filePayloadSchema.extend({
    stateEvent: z.literal('FILE_READ_ERROR'),
  }),
});

// File read rejected schema
export const fileReadRejectedSchema = baseFileMessageSchema.extend({
  actionType: z.literal('READFILE'),
  templateType: z.literal('READFILE'),
  payload: filePayloadSchema.extend({
    stateEvent: z.literal('REJECTED'),
  }),
});

// File write confirmation schema
export const fileWriteConfirmationSchema = baseFileMessageSchema.extend({
  actionType: z.literal('WRITEFILE'),
  templateType: z.literal('WRITEFILE'),
  payload: filePayloadSchema.extend({
    stateEvent: z.literal('askForConfirmation'),
    originalContent: z.string(),
    diff: z.string().optional(),
  }),
});



// File write success schema
export const fileWriteSuccessSchema = baseFileMessageSchema.extend({
  actionType: z.literal('WRITEFILE'),
  templateType: z.literal('WRITEFILE'),
  payload: filePayloadSchema.extend({
    stateEvent: z.literal('fileWrite'),
  }),
});

// File write error schema
export const fileWriteErrorSchema = baseFileMessageSchema.extend({
  actionType: z.literal('WRITEFILE'),
  templateType: z.literal('WRITEFILE'),
  payload: filePayloadSchema.extend({
    stateEvent: z.literal('fileWriteError'),
  }),
});

// File write rejected schema
export const fileWriteRejectedSchema = baseFileMessageSchema.extend({
  actionType: z.literal('WRITEFILE'),
  templateType: z.literal('WRITEFILE'),
  payload: filePayloadSchema.extend({
    stateEvent: z.literal('rejected'),
  }),
});

// Code view in editor schema for file operations
export const fileCodeViewSchema = baseFileMessageSchema.extend({
  templateType: z.literal('CODEVIEWINEDITOR'),
  payload: filePayloadSchema,
});

// File operation data format
export const fileDataFormatSchema = z.object({
  type: z.literal('message'),
  actionType: z.union([z.literal('READFILE'), z.literal('WRITEFILE')]),
  sender: z.literal('Agent'),
  messageId: z.string(),
  threadId: z.string(),
  templateType: z.union([z.literal('READFILE'), z.literal('WRITEFILE')]),
  timestamp: z.union([z.number(), z.string()]),
  historyType: z.enum(['historical', 'active']).optional(),
  messageHistory: z.array(z.any()).optional(),
  data: z.object({
    text: z.object({
      type: z.literal('message'),
      actionType: z.string(),
      sender: z.string(),
      messageId: z.string(),
      threadId: z.string(),
      templateType: z.string(),
      timestamp: z.string(),
      payload: filePayloadSchema,
      messageHistory: z.array(z.any()).optional(),
    }),
    task: z.string().optional(),
  }).optional(),
  payload: filePayloadSchema.optional(),
});

// Directory operation schemas
export const directoryOperationSchema = z.object({
  type: z.string(),
  path: z.string(),
  operation: z.enum(['create', 'delete', 'list', 'copy', 'move']),
  recursive: z.boolean().optional(),
  items: z.array(z.string()).optional(),
  success: z.boolean().optional(),
  error: z.string().optional(),
});

// File search result schema
export const fileSearchResultSchema = z.object({
  query: z.string(),
  results: z.array(z.object({
    path: z.string(),
    matches: z.array(z.object({
      line: z.number(),
      content: z.string(),
      context: z.string().optional(),
    })),
  })),
  totalMatches: z.number(),
  searchTime: z.number().optional(),
});

// Codebase search message schema
export const codebaseSearchMessageSchema = baseFileMessageSchema.extend({
  actionType: z.literal('CODEBASESEARCH'),
  templateType: z.literal('CODEBASESEARCH'),
  payload: z.object({
    type: z.literal('codebaseSearch'),
    query: z.string(),
    results: z.array(z.object({
      score: z.number(),
      filePath: z.string(),
      lineStart: z.number(),
      lineEnd: z.number(),
      codeSnippet: z.string().optional(),
      language: z.string().optional(),
      namespace: z.string().optional(),
    })).optional(),
    rawResults: z.array(z.object({
      score: z.number(),
      filePath: z.string(),
      lineStart: z.number(),
      lineEnd: z.number(),
      namespace: z.string(),
    })).optional(),
    stateEvent: fileStateEnumSchema,
  }),
});

// ====== FOLDER READ OPERATIONS ======

// Folder payload schema for directory operations
export const folderPayloadSchema = z.object({
  type: z.literal('folder'),
  path: z.string(),
  content: z.array(z.string()),
  stateEvent: z.union([
    z.literal('ASK_FOR_CONFIRMATION'),
    z.literal('FILE_READ'),
    z.literal('FILE_READ_ERROR'),
    z.literal('REJECTED')
  ])
});

// Base folder message schema
export const baseFolderMessageSchema = z.object({
  type: z.literal('message'),
  actionType: z.literal('FOLDERREAD'),
  sender: z.literal('agent'),
  messageId: z.string(),
  threadId: z.string(),
  templateType: z.literal('FOLDERREAD'),
  timestamp: z.number(),
  payload: folderPayloadSchema,
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional()
});

// Folder read confirmation schema
export const folderReadConfirmationSchema = baseFolderMessageSchema.extend({
  payload: folderPayloadSchema.extend({
    stateEvent: z.literal('ASK_FOR_CONFIRMATION')
  })
});

// Folder read success schema
export const folderReadSuccessSchema = baseFolderMessageSchema.extend({
  payload: folderPayloadSchema.extend({
    stateEvent: z.literal('FILE_READ')
  })
});

// Folder read error schema
export const folderReadErrorSchema = baseFolderMessageSchema.extend({
  payload: folderPayloadSchema.extend({
    stateEvent: z.literal('FILE_READ_ERROR')
  })
});

// Folder read rejected schema
export const folderReadRejectedSchema = baseFolderMessageSchema.extend({
  payload: folderPayloadSchema.extend({
    stateEvent: z.literal('REJECTED')
  })
});

// ====== FILE SEARCH OPERATIONS ======

// Search payload schema
export const searchPayloadSchema = z.object({
  type: z.union([z.literal('search'), z.literal('fileSearch')]),
  query: z.string(),
  path: z.string().optional(),
  results: z.array(z.any()).default([]),
  includePattern: z.string().optional(),
  excludePattern: z.string().optional(),
  caseSensitive: z.boolean().optional(),
  stateEvent: z.union([
    z.literal('ASK_FOR_CONFIRMATION'),
    z.literal('SEARCHING'),
    z.literal('FILE_READ'),
    z.literal('SEARCH_COMPLETE'),
    z.literal('FILE_READ_ERROR'),
    z.literal('SEARCH_ERROR'),
    z.literal('REJECTED')
  ])
});

// Base search message schema
export const baseSearchMessageSchema = z.object({
  type: z.literal('message'),
  actionType: z.literal('FILESEARCH'),
  sender: z.literal('agent'),
  messageId: z.string(),
  threadId: z.string(),
  templateType: z.literal('FILESEARCH'),
  timestamp: z.number(),
  payload: searchPayloadSchema,
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional()
});

// Search confirmation schema
export const searchConfirmationSchema = baseSearchMessageSchema.extend({
  payload: searchPayloadSchema.extend({
    stateEvent: z.literal('ASK_FOR_CONFIRMATION')
  })
});

// Search in progress schema
export const searchInProgressSchema = baseSearchMessageSchema.extend({
  payload: searchPayloadSchema.extend({
    stateEvent: z.literal('SEARCHING')
  })
});

// Search success schema
export const searchSuccessSchema = baseSearchMessageSchema.extend({
  payload: searchPayloadSchema.extend({
    stateEvent: z.union([z.literal('FILE_READ'), z.literal('SEARCH_COMPLETE')])
  })
});

// Search error schema
export const searchErrorSchema = baseSearchMessageSchema.extend({
  payload: searchPayloadSchema.extend({
    stateEvent: z.literal('FILE_READ_ERROR')
  })
});

// Search rejected schema
export const searchRejectedSchema = baseSearchMessageSchema.extend({
  payload: searchPayloadSchema.extend({
    stateEvent: z.literal('REJECTED')
  })
});

// ====== MCP TOOL OPERATIONS ======

// MCP Tool payload schema
export const mcpToolPayloadSchema = z.object({
  type: z.literal('fs'),
  toolName: z.string(),
  serverName: z.string(),
  params: z.record(z.any()),
  result: z.any().optional(),
  stateEvent: z.union([
    z.literal('ASK_FOR_CONFIRMATION'),
    z.literal('EXECUTING'),
    z.literal('EXECUTION_SUCCESS'),
    z.literal('EXECUTION_ERROR'),
    z.literal('REJECTED')
  ])
});

// Base MCP tool message schema
export const baseMcpToolMessageSchema = z.object({
  type: z.literal('message'),
  actionType: z.literal('MCP_TOOL'),
  sender: z.literal('agent'),
  messageId: z.string(),
  threadId: z.string(),
  templateType: z.literal('MCP_TOOL'),
  timestamp: z.number(),
  payload: mcpToolPayloadSchema,
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional()
});

// MCP tool confirmation schema
export const mcpToolConfirmationSchema = baseMcpToolMessageSchema.extend({
  payload: mcpToolPayloadSchema.extend({
    stateEvent: z.literal('ASK_FOR_CONFIRMATION')
  })
});

// MCP tool executing schema
export const mcpToolExecutingSchema = baseMcpToolMessageSchema.extend({
  payload: mcpToolPayloadSchema.extend({
    stateEvent: z.literal('EXECUTING')
  })
});

// MCP tool success schema
export const mcpToolSuccessSchema = baseMcpToolMessageSchema.extend({
  payload: mcpToolPayloadSchema.extend({
    stateEvent: z.literal('EXECUTION_SUCCESS')
  })
});

// MCP tool error schema
export const mcpToolErrorSchema = baseMcpToolMessageSchema.extend({
  payload: mcpToolPayloadSchema.extend({
    stateEvent: z.literal('EXECUTION_ERROR')
  })
});

// MCP tool rejected schema
export const mcpToolRejectedSchema = baseMcpToolMessageSchema.extend({
  payload: mcpToolPayloadSchema.extend({
    stateEvent: z.literal('REJECTED')
  })
});

// ====== EDIT FILE OPERATIONS ======

// Extended file write payload for edit operations
export const editFilePayloadSchema = filePayloadSchema.extend({
  stateEvent: z.union([
    z.literal('askForConfirmation'),
    z.literal('editStarting'),
    z.literal('applyingEdit'),
    z.literal('fileWrite'),
    z.literal('fileWriteError'),
    z.literal('rejected')
  ])
});

// Edit file message schema
export const editFileMessageSchema = baseFileMessageSchema.extend({
  actionType: z.literal('WRITEFILE'),
  templateType: z.literal('WRITEFILE'),
  payload: editFilePayloadSchema
});

// Union of all file message schemas
export const fileMessageSchema = z.union([
  fileReadConfirmationSchema,
  fileReadSuccessSchema,
  fileReadErrorSchema,
  fileReadRejectedSchema,
  fileWriteConfirmationSchema,
  fileWriteSuccessSchema,
  fileWriteErrorSchema,
  fileWriteRejectedSchema,
  fileCodeViewSchema,
  codebaseSearchMessageSchema,
  folderReadConfirmationSchema,
  folderReadSuccessSchema,
  folderReadErrorSchema,
  folderReadRejectedSchema,
  searchConfirmationSchema,
  searchInProgressSchema,
  searchSuccessSchema,
  searchErrorSchema,
  searchRejectedSchema,
  mcpToolConfirmationSchema,
  mcpToolExecutingSchema,
  mcpToolSuccessSchema,
  mcpToolErrorSchema,
  mcpToolRejectedSchema,
  editFileMessageSchema,
]);

// Inferred TypeScript types
export type FileStateEnum = z.infer<typeof fileStateEnumSchema>;
export type FileWriteStateEnum = z.infer<typeof fileWriteStateEnumSchema>;
export type FilePayload = z.infer<typeof filePayloadSchema>;
export type BaseFileMessage = z.infer<typeof baseFileMessageSchema>;
export type FileReadConfirmation = z.infer<typeof fileReadConfirmationSchema>;
export type FileReadSuccess = z.infer<typeof fileReadSuccessSchema>;
export type FileReadError = z.infer<typeof fileReadErrorSchema>;
export type FileReadRejected = z.infer<typeof fileReadRejectedSchema>;
export type FileWriteConfirmation = z.infer<typeof fileWriteConfirmationSchema>;
export type FileWriteSuccess = z.infer<typeof fileWriteSuccessSchema>;
export type FileWriteError = z.infer<typeof fileWriteErrorSchema>;
export type FileWriteRejected = z.infer<typeof fileWriteRejectedSchema>;
export type FileCodeView = z.infer<typeof fileCodeViewSchema>;
export type CodebaseSearchMessage = z.infer<typeof codebaseSearchMessageSchema>;
export type FileDataFormat = z.infer<typeof fileDataFormatSchema>;
export type DirectoryOperation = z.infer<typeof directoryOperationSchema>;
export type FileSearchResult = z.infer<typeof fileSearchResultSchema>;
export type FileMessage = z.infer<typeof fileMessageSchema>;

// Additional TypeScript types for new schemas
export type FolderPayload = z.infer<typeof folderPayloadSchema>;
export type BaseFolderMessage = z.infer<typeof baseFolderMessageSchema>;
export type FolderReadConfirmation = z.infer<typeof folderReadConfirmationSchema>;
export type FolderReadSuccess = z.infer<typeof folderReadSuccessSchema>;
export type FolderReadError = z.infer<typeof folderReadErrorSchema>;
export type FolderReadRejected = z.infer<typeof folderReadRejectedSchema>;

export type SearchPayload = z.infer<typeof searchPayloadSchema>;
export type BaseSearchMessage = z.infer<typeof baseSearchMessageSchema>;
export type SearchConfirmation = z.infer<typeof searchConfirmationSchema>;
export type SearchInProgress = z.infer<typeof searchInProgressSchema>;
export type SearchSuccess = z.infer<typeof searchSuccessSchema>;
export type SearchError = z.infer<typeof searchErrorSchema>;
export type SearchRejected = z.infer<typeof searchRejectedSchema>;

export type McpToolPayload = z.infer<typeof mcpToolPayloadSchema>;
export type BaseMcpToolMessage = z.infer<typeof baseMcpToolMessageSchema>;
export type McpToolConfirmation = z.infer<typeof mcpToolConfirmationSchema>;
export type McpToolExecuting = z.infer<typeof mcpToolExecutingSchema>;
export type McpToolSuccess = z.infer<typeof mcpToolSuccessSchema>;
export type McpToolError = z.infer<typeof mcpToolErrorSchema>;
export type McpToolRejected = z.infer<typeof mcpToolRejectedSchema>;

export type EditFilePayload = z.infer<typeof editFilePayloadSchema>;
export type EditFileMessage = z.infer<typeof editFileMessageSchema>; 