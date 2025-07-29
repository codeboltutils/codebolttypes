import { z } from 'zod';

/**
 * Task Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/task.ts module operations
 */

// Base task message schema
export const taskEventBaseSchema = z.object({
  type: z.literal('taskEvent'),
  action: z.string(),
  agentId: z.string().optional(),
  message: z.object({}).passthrough().optional(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Task create options schema
const taskCreateOptionsSchema = z.object({
  title: z.string(),
  agentId: z.string().optional(),
  description: z.string().optional(),
  phase: z.string().optional(),
  category: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).optional(),
  tags: z.array(z.string()).optional(),
});

// Task update options schema
const taskUpdateOptionsSchema = z.object({
  taskId: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  phase: z.string().optional(),
  category: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).optional(),
  tags: z.array(z.string()).optional(),
  status: z.enum(['pending', 'in_progress', 'completed', 'cancelled']).optional(),
});

// Task filter options schema
const taskFilterOptionsSchema = z.object({
  agentId: z.string().optional(),
  category: z.string().optional(),
  phase: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).optional(),
  status: z.enum(['pending', 'in_progress', 'completed', 'cancelled']).optional(),
  tags: z.array(z.string()).optional(),
});

// SubTask options schema
const addSubTaskOptionsSchema = z.object({
  taskId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).optional(),
});

const updateSubTaskOptionsSchema = z.object({
  taskId: z.string(),
  subTaskId: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).optional(),
  status: z.enum(['pending', 'in_progress', 'completed', 'cancelled']).optional(),
});

// Add Task Event Schema
export const addTaskEventSchema = taskEventBaseSchema.extend({
  action: z.literal('addTask'),
  agentId: z.string().optional(),
  message: taskCreateOptionsSchema,
});

// Add Simple Task Event Schema (legacy support)
export const addSimpleTaskEventSchema = taskEventBaseSchema.extend({
  action: z.literal('addTask'),
  agentId: z.string().optional(),
  message: z.object({
    task: z.string(),
  }),
});

// Get Tasks Event Schema
export const getTasksEventSchema = taskEventBaseSchema.extend({
  action: z.literal('getTasks'),
  message: taskFilterOptionsSchema.optional(),
});

// Get Tasks By Agent Event Schema
export const getTasksByAgentEventSchema = taskEventBaseSchema.extend({
  action: z.literal('getTasksByAgent'),
  message: z.object({
    agentId: z.string(),
  }),
});

// Get Tasks By Category Event Schema
export const getTasksByCategoryEventSchema = taskEventBaseSchema.extend({
  action: z.literal('getTasksByCategory'),
  message: z.object({
    category: z.string(),
  }),
});

// Get Tasks By Phase Event Schema
export const getTasksByPhaseEventSchema = taskEventBaseSchema.extend({
  action: z.literal('getTasksByPhase'),
  message: z.object({
    phase: z.string(),
  }),
});

// Update Task Event Schema
export const updateTaskEventSchema = taskEventBaseSchema.extend({
  action: z.literal('updateTask'),
  message: taskUpdateOptionsSchema,
});

// Delete Task Event Schema
export const deleteTaskEventSchema = taskEventBaseSchema.extend({
  action: z.literal('deleteTask'),
  message: z.object({
    taskId: z.string(),
  }),
});

// Mark Task Complete Event Schema
export const markTaskCompleteEventSchema = taskEventBaseSchema.extend({
  action: z.literal('markTaskComplete'),
  message: z.object({
    taskId: z.string(),
    completionNote: z.string().optional(),
  }),
});

// Add SubTask Event Schema
export const addSubTaskEventSchema = taskEventBaseSchema.extend({
  action: z.literal('addSubTask'),
  message: addSubTaskOptionsSchema,
});

// Update SubTask Event Schema
export const updateSubTaskEventSchema = taskEventBaseSchema.extend({
  action: z.literal('updateSubTask'),
  message: updateSubTaskOptionsSchema,
});

// Delete SubTask Event Schema
export const deleteSubTaskEventSchema = taskEventBaseSchema.extend({
  action: z.literal('deleteSubTask'),
  message: z.object({
    taskId: z.string(),
    subTaskId: z.string(),
  }),
});

// Get Task Details Event Schema
export const getTaskDetailsEventSchema = taskEventBaseSchema.extend({
  action: z.literal('getTaskDetails'),
  message: z.object({
    taskId: z.string(),
  }),
});

// Import Tasks from Markdown Event Schema
export const importTasksFromMarkdownEventSchema = taskEventBaseSchema.extend({
  action: z.literal('importTasksFromMarkdown'),
  message: z.object({
    markdown: z.string(),
    agentId: z.string().optional(),
  }),
});

// Export Tasks to Markdown Event Schema
export const exportTasksToMarkdownEventSchema = taskEventBaseSchema.extend({
  action: z.literal('exportTasksToMarkdown'),
  message: z.object({
    agentId: z.string().optional(),
    filters: taskFilterOptionsSchema.optional(),
  }),
});

// Union of all task event schemas
export const taskEventSchema = z.union([
  addTaskEventSchema,
  addSimpleTaskEventSchema,
  getTasksEventSchema,
  getTasksByAgentEventSchema,
  getTasksByCategoryEventSchema,
  getTasksByPhaseEventSchema,
  updateTaskEventSchema,
  deleteTaskEventSchema,
  markTaskCompleteEventSchema,
  addSubTaskEventSchema,
  updateSubTaskEventSchema,
  deleteSubTaskEventSchema,
  getTaskDetailsEventSchema,
  importTasksFromMarkdownEventSchema,
  exportTasksToMarkdownEventSchema,
]);

// Task and SubTask schemas for responses
const subTaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  status: z.enum(['pending', 'in_progress', 'completed', 'cancelled']),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  agentId: z.string(),
  phase: z.string().optional(),
  category: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).optional(),
  status: z.enum(['pending', 'in_progress', 'completed', 'cancelled']),
  tags: z.array(z.string()).optional(),
  subTasks: z.array(subTaskSchema).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  completedAt: z.string().optional(),
});

// Response Schemas for task operations
export const taskResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  task: taskSchema.optional(),
  tasks: z.array(taskSchema).optional(),
  subTask: subTaskSchema.optional(),
  markdown: z.string().optional(),
  totalCount: z.number().optional(),
});

export const addTaskResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  task: taskSchema,
});

export const getTasksResponseSchema = z.object({
  success: z.boolean(),
  tasks: z.array(taskSchema),
  totalCount: z.number(),
  filters: taskFilterOptionsSchema.optional(),
});

export const getTasksByAgentResponseSchema = z.object({
  success: z.boolean(),
  tasks: z.array(taskSchema),
  agentId: z.string(),
  totalCount: z.number(),
});

export const updateTaskResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  task: taskSchema,
});

export const deleteTaskResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  taskId: z.string(),
});

export const addSubTaskResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  subTask: subTaskSchema,
  taskId: z.string(),
});

export const getTaskDetailsResponseSchema = z.object({
  success: z.boolean(),
  task: taskSchema,
});

export const importTasksResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  importedTasks: z.array(taskSchema),
  totalImported: z.number(),
});

export const exportTasksResponseSchema = z.object({
  success: z.boolean(),
  markdown: z.string(),
  taskCount: z.number(),
});

// Inferred TypeScript types for events
export type TaskEventBase = z.infer<typeof taskEventBaseSchema>;
export type TaskCreateOptions = z.infer<typeof taskCreateOptionsSchema>;
export type TaskUpdateOptions = z.infer<typeof taskUpdateOptionsSchema>;
export type TaskFilterOptions = z.infer<typeof taskFilterOptionsSchema>;
export type AddSubTaskOptions = z.infer<typeof addSubTaskOptionsSchema>;
export type UpdateSubTaskOptions = z.infer<typeof updateSubTaskOptionsSchema>;

export type AddTaskEvent = z.infer<typeof addTaskEventSchema>;
export type AddSimpleTaskEvent = z.infer<typeof addSimpleTaskEventSchema>;
export type GetTasksEvent = z.infer<typeof getTasksEventSchema>;
export type GetTasksByAgentEvent = z.infer<typeof getTasksByAgentEventSchema>;
export type GetTasksByCategoryEvent = z.infer<typeof getTasksByCategoryEventSchema>;
export type GetTasksByPhaseEvent = z.infer<typeof getTasksByPhaseEventSchema>;
export type UpdateTaskEvent = z.infer<typeof updateTaskEventSchema>;
export type DeleteTaskEvent = z.infer<typeof deleteTaskEventSchema>;
export type MarkTaskCompleteEvent = z.infer<typeof markTaskCompleteEventSchema>;
export type AddSubTaskEvent = z.infer<typeof addSubTaskEventSchema>;
export type UpdateSubTaskEvent = z.infer<typeof updateSubTaskEventSchema>;
export type DeleteSubTaskEvent = z.infer<typeof deleteSubTaskEventSchema>;
export type GetTaskDetailsEvent = z.infer<typeof getTaskDetailsEventSchema>;
export type ImportTasksFromMarkdownEvent = z.infer<typeof importTasksFromMarkdownEventSchema>;
export type ExportTasksToMarkdownEvent = z.infer<typeof exportTasksToMarkdownEventSchema>;
export type TaskEvent = z.infer<typeof taskEventSchema>;

// Inferred TypeScript types for task data
export type SubTask = z.infer<typeof subTaskSchema>;
export type Task = z.infer<typeof taskSchema>;

// Inferred TypeScript types for responses
export type TaskResponse = z.infer<typeof taskResponseSchema>;
export type AddTaskResponse = z.infer<typeof addTaskResponseSchema>;
export type GetTasksResponse = z.infer<typeof getTasksResponseSchema>;
export type GetTasksByAgentResponse = z.infer<typeof getTasksByAgentResponseSchema>;
export type UpdateTaskResponse = z.infer<typeof updateTaskResponseSchema>;
export type DeleteTaskResponse = z.infer<typeof deleteTaskResponseSchema>;
export type AddSubTaskResponse = z.infer<typeof addSubTaskResponseSchema>;
export type GetTaskDetailsResponse = z.infer<typeof getTaskDetailsResponseSchema>;
export type ImportTasksResponse = z.infer<typeof importTasksResponseSchema>;
export type ExportTasksResponse = z.infer<typeof exportTasksResponseSchema>; 