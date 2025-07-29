import { z } from 'zod';

/**
 * Task Service Response Schemas
 * Messages sent from task CLI service back to agents
 */

// SubTask schema
const SubTaskSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional(),
    completed: z.boolean(),
    requirements: z.array(z.string())
});

// Base task schema (based on taskPlannerService.ts structure)
const TaskSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    phase: z.string().optional(),
    category: z.string().optional(),
    agentId: z.string(),
    subtasks: z.array(SubTaskSchema),
    completed: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    priority: z.enum(['low', 'medium', 'high']),
    tags: z.array(z.string())
});

// Add task response schema
export const AddTaskResponseSchema = z.object({
    type: z.literal('addTaskResponse'),
    success: z.boolean(),
    data: TaskSchema.optional(),
    error: z.string().optional()
});

// Get tasks response schema
export const GetTasksResponseSchema = z.object({
    type: z.literal('getTasksResponse'),
    tasks: z.array(TaskSchema)
});

// Update tasks response schema
export const UpdateTasksResponseSchema = z.object({
    type: z.literal('updateTasksResponse'),
    success: z.boolean(),
    data: TaskSchema.optional(),
    error: z.string().optional()
});

// Add sub task response schema
export const AddSubTaskResponseSchema = z.object({
    type: z.literal('addSubTaskResponse'),
    success: z.boolean(),
    data: TaskSchema.optional(),
    error: z.string().optional()
});

// Update sub task response schema
export const UpdateSubTaskResponseSchema = z.object({
    type: z.literal('updateSubTaskResponse'),
    success: z.boolean(),
    data: TaskSchema.optional(),
    error: z.string().optional()
});

// Delete task response schema
export const DeleteTaskResponseSchema = z.object({
    type: z.literal('deleteTaskResponse'),
    success: z.boolean(),
    message: z.string().optional(),
    error: z.string().optional()
});

// Get tasks by agent response schema
export const GetTasksByAgentResponseSchema = z.object({
    type: z.literal('getTasksByAgentResponse'),
    tasks: z.array(TaskSchema)
});

// Get tasks by category response schema
export const GetTasksByCategoryResponseSchema = z.object({
    type: z.literal('getTasksByCategoryResponse'),
    tasks: z.array(TaskSchema),
    error: z.string().optional()
});

// Agent schema (basic structure for task management)
const AgentSchema = z.object({
    id: z.string(),
    name: z.string(),
    type: z.string().optional()
}).passthrough(); // Allow additional agent properties

// Get all agents response schema
export const GetAllAgentsResponseSchema = z.object({
    type: z.literal('getAllAgentsResponse'),
    agents: z.array(AgentSchema)
});

// Create tasks from markdown response schema
export const CreateTasksFromMarkdownResponseSchema = z.object({
    type: z.literal('createTasksFromMarkdownResponse'),
    success: z.boolean(),
    tasks: z.array(TaskSchema).optional(),
    error: z.string().optional()
});

// Export tasks to markdown response schema
export const ExportTasksToMarkdownResponseSchema = z.object({
    type: z.literal('exportTasksToMarkdownResponse'),
    success: z.boolean(),
    markdown: z.string().optional(),
    error: z.string().optional()
});

// Task error response schema
export const TaskErrorResponseSchema = z.object({
    type: z.literal('error'),
    message: z.string()
});

// Union of all task service response schemas
export const TaskServiceResponseSchema = z.union([
    AddTaskResponseSchema,
    GetTasksResponseSchema,
    UpdateTasksResponseSchema,
    AddSubTaskResponseSchema,
    UpdateSubTaskResponseSchema,
    DeleteTaskResponseSchema,
    GetTasksByAgentResponseSchema,
    GetTasksByCategoryResponseSchema,
    GetAllAgentsResponseSchema,
    CreateTasksFromMarkdownResponseSchema,
    ExportTasksToMarkdownResponseSchema,
    TaskErrorResponseSchema
]);

// Export with the expected name for the index file
export const taskServiceResponseSchema = TaskServiceResponseSchema;

// Type exports
export type SubTask = z.infer<typeof SubTaskSchema>;
export type Task = z.infer<typeof TaskSchema>;
export type AddTaskResponse = z.infer<typeof AddTaskResponseSchema>;
export type GetTasksResponse = z.infer<typeof GetTasksResponseSchema>;
export type UpdateTasksResponse = z.infer<typeof UpdateTasksResponseSchema>;
export type AddSubTaskResponse = z.infer<typeof AddSubTaskResponseSchema>;
export type UpdateSubTaskResponse = z.infer<typeof UpdateSubTaskResponseSchema>;
export type DeleteTaskResponse = z.infer<typeof DeleteTaskResponseSchema>;
export type GetTasksByAgentResponse = z.infer<typeof GetTasksByAgentResponseSchema>;
export type GetTasksByCategoryResponse = z.infer<typeof GetTasksByCategoryResponseSchema>;
export type GetAllAgentsResponse = z.infer<typeof GetAllAgentsResponseSchema>;
export type CreateTasksFromMarkdownResponse = z.infer<typeof CreateTasksFromMarkdownResponseSchema>;
export type ExportTasksToMarkdownResponse = z.infer<typeof ExportTasksToMarkdownResponseSchema>;
export type TaskErrorResponse = z.infer<typeof TaskErrorResponseSchema>;
export type TaskServiceResponse = z.infer<typeof TaskServiceResponseSchema>; 