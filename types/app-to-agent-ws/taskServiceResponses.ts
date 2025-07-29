import { z } from 'zod';

/**
 * Task Service Response Schemas
 * Messages sent from task CLI service back to agents
 */

// Add task response
export const addTaskResponseSchema = z.object({
  type: z.literal('addTaskResponse'),
  success: z.boolean(),
  error: z.string().optional(),
  data: z.any().optional(),
  agentId: z.string().optional(),
});

// Update tasks response
export const updateTasksResponseSchema = z.object({
  type: z.literal('updateTasksResponse'),
  success: z.boolean(),
  error: z.string().optional(),
  data: z.any().optional(),
  agentId: z.string().optional(),
});

// Add subtask response
export const addSubTaskResponseSchema = z.object({
  type: z.literal('addSubTaskResponse'),
  success: z.boolean(),
  error: z.string().optional(),
  data: z.any().optional(),
  agentId: z.string().optional(),
});

// Update subtask response
export const updateSubTaskResponseSchema = z.object({
  type: z.literal('updateSubTaskResponse'),
  success: z.boolean(),
  error: z.string().optional(),
  data: z.any().optional(),
  agentId: z.string().optional(),
});

// Delete task response
export const deleteTaskResponseSchema = z.object({
  type: z.literal('deleteTaskResponse'),
  success: z.boolean(),
  error: z.string().optional(),
  agentId: z.string().optional(),
});

// Get tasks by category response
export const getTasksByCategoryResponseSchema = z.object({
  type: z.literal('getTasksByCategoryResponse'),
  success: z.boolean(),
  error: z.string().optional(),
  data: z.any().optional(),
  agentId: z.string().optional(),
});

// Create tasks from markdown response
export const createTasksFromMarkdownResponseSchema = z.object({
  type: z.literal('createTasksFromMarkdownResponse'),
  success: z.boolean(),
  data: z.any().optional(),
  error: z.string().optional(),
  agentId: z.string().optional(),
});

// Export tasks to markdown response
export const exportTasksToMarkdownResponseSchema = z.object({
  type: z.literal('exportTasksToMarkdownResponse'),
  success: z.boolean(),
  data: z.string().optional(),
  agentId: z.string().optional(),
});

// Task error response
export const taskErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.string(),
  error: z.string().optional(),
});

// Union of all task service responses
export const taskServiceResponseSchema = z.union([
  addTaskResponseSchema,
  updateTasksResponseSchema,
  addSubTaskResponseSchema,
  updateSubTaskResponseSchema,
  deleteTaskResponseSchema,
  getTasksByCategoryResponseSchema,
  createTasksFromMarkdownResponseSchema,
  exportTasksToMarkdownResponseSchema,
  taskErrorResponseSchema,
]);

// TypeScript types
export type AddTaskResponse = z.infer<typeof addTaskResponseSchema>;
export type UpdateTasksResponse = z.infer<typeof updateTasksResponseSchema>;
export type AddSubTaskResponse = z.infer<typeof addSubTaskResponseSchema>;
export type UpdateSubTaskResponse = z.infer<typeof updateSubTaskResponseSchema>;
export type DeleteTaskResponse = z.infer<typeof deleteTaskResponseSchema>;
export type GetTasksByCategoryResponse = z.infer<typeof getTasksByCategoryResponseSchema>;
export type CreateTasksFromMarkdownResponse = z.infer<typeof createTasksFromMarkdownResponseSchema>;
export type ExportTasksToMarkdownResponse = z.infer<typeof exportTasksToMarkdownResponseSchema>;
export type TaskErrorResponse = z.infer<typeof taskErrorResponseSchema>;
export type TaskServiceResponse = z.infer<typeof taskServiceResponseSchema>; 