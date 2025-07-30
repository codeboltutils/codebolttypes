import { 
    AddTaskResponse,
    UpdateTasksResponse,
    AddSubTaskResponse,
    UpdateSubTaskResponse,
    DeleteTaskResponse,
    GetTasksResponse,
    GetTasksByAgentResponse,
    GetTasksByCategoryResponse,
    GetAllAgentsResponse,
    CreateTasksFromMarkdownResponse,
    ExportTasksToMarkdownResponse,
    TaskErrorResponse,
    TaskMcpToolConfirmation,
    TaskMcpToolExecuting,
    TaskMcpToolSuccess,
    TaskMcpToolError,
    TaskMcpToolRejected,
    TaskServiceMessage,
    addTaskResponseSchema,
    updateTasksResponseSchema,
    addSubTaskResponseSchema,
    updateSubTaskResponseSchema,
    deleteTaskResponseSchema,
    getTasksResponseSchema,
    getTasksByAgentResponseSchema,
    getTasksByCategoryResponseSchema,
    getAllAgentsResponseSchema,
    createTasksFromMarkdownResponseSchema,
    exportTasksToMarkdownResponseSchema,
    taskErrorResponseSchema,
    taskMcpToolConfirmationSchema,
    taskMcpToolExecutingSchema,
    taskMcpToolSuccessSchema,
    taskMcpToolErrorSchema,
    taskMcpToolRejectedSchema,
    taskServiceMessageSchema
} from "../../wstypes/app-to-ui-ws/taskServiceSchemas";

/**
 * Comprehensive Factory Validators for Task Service Operations
 * Based on task service patterns and message types
 */

/**
 * AddTaskResponse Validator
 */
export const createAddTaskResponseFactory = (message: AddTaskResponse): AddTaskResponse => {
    const isValidMessage = addTaskResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AddTaskResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * UpdateTasksResponse Validator
 */
export const createUpdateTasksResponseFactory = (message: UpdateTasksResponse): UpdateTasksResponse => {
    const isValidMessage = updateTasksResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid UpdateTasksResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * AddSubTaskResponse Validator
 */
export const createAddSubTaskResponseFactory = (message: AddSubTaskResponse): AddSubTaskResponse => {
    const isValidMessage = addSubTaskResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AddSubTaskResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * UpdateSubTaskResponse Validator
 */
export const createUpdateSubTaskResponseFactory = (message: UpdateSubTaskResponse): UpdateSubTaskResponse => {
    const isValidMessage = updateSubTaskResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid UpdateSubTaskResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * DeleteTaskResponse Validator
 */
export const createDeleteTaskResponseFactory = (message: DeleteTaskResponse): DeleteTaskResponse => {
    const isValidMessage = deleteTaskResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid DeleteTaskResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetTasksResponse Validator
 */
export const createGetTasksResponseFactory = (message: GetTasksResponse): GetTasksResponse => {
    const isValidMessage = getTasksResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetTasksResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetTasksByAgentResponse Validator
 */
export const createGetTasksByAgentResponseFactory = (message: GetTasksByAgentResponse): GetTasksByAgentResponse => {
    const isValidMessage = getTasksByAgentResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetTasksByAgentResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetTasksByCategoryResponse Validator
 */
export const createGetTasksByCategoryResponseFactory = (message: GetTasksByCategoryResponse): GetTasksByCategoryResponse => {
    const isValidMessage = getTasksByCategoryResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetTasksByCategoryResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetAllAgentsResponse Validator
 */
export const createGetAllAgentsResponseFactory = (message: GetAllAgentsResponse): GetAllAgentsResponse => {
    const isValidMessage = getAllAgentsResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetAllAgentsResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CreateTasksFromMarkdownResponse Validator
 */
export const createCreateTasksFromMarkdownResponseFactory = (message: CreateTasksFromMarkdownResponse): CreateTasksFromMarkdownResponse => {
    const isValidMessage = createTasksFromMarkdownResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CreateTasksFromMarkdownResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ExportTasksToMarkdownResponse Validator
 */
export const createExportTasksToMarkdownResponseFactory = (message: ExportTasksToMarkdownResponse): ExportTasksToMarkdownResponse => {
    const isValidMessage = exportTasksToMarkdownResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ExportTasksToMarkdownResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * TaskErrorResponse Validator
 */
export const createTaskErrorResponseFactory = (message: TaskErrorResponse): TaskErrorResponse => {
    const isValidMessage = taskErrorResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TaskErrorResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * TaskMcpToolConfirmation Validator
 */
export const createTaskMcpToolConfirmationFactory = (message: TaskMcpToolConfirmation): TaskMcpToolConfirmation => {
    const isValidMessage = taskMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TaskMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * TaskMcpToolExecuting Validator
 */
export const createTaskMcpToolExecutingFactory = (message: TaskMcpToolExecuting): TaskMcpToolExecuting => {
    const isValidMessage = taskMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TaskMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * TaskMcpToolSuccess Validator
 */
export const createTaskMcpToolSuccessFactory = (message: TaskMcpToolSuccess): TaskMcpToolSuccess => {
    const isValidMessage = taskMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TaskMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * TaskMcpToolError Validator
 */
export const createTaskMcpToolErrorFactory = (message: TaskMcpToolError): TaskMcpToolError => {
    const isValidMessage = taskMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TaskMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * TaskMcpToolRejected Validator
 */
export const createTaskMcpToolRejectedFactory = (message: TaskMcpToolRejected): TaskMcpToolRejected => {
    const isValidMessage = taskMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TaskMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Universal Task Service Message Validator
 */
export const createTaskServiceMessageFactory = (message: TaskServiceMessage): TaskServiceMessage => {
    const isValidMessage = taskServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TaskServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive Task Service Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createTaskServiceFactory = (message: any): TaskServiceMessage => {
    // Try to validate as generic task service message first
    try {
        const genericResult = createTaskServiceMessageFactory(message);
        return genericResult;
    } catch (error) {
        // If generic validation fails, try specific validators
        const validators = [
            createAddTaskResponseFactory,
            createUpdateTasksResponseFactory,
            createAddSubTaskResponseFactory,
            createUpdateSubTaskResponseFactory,
            createDeleteTaskResponseFactory,
            createGetTasksResponseFactory,
            createGetTasksByAgentResponseFactory,
            createGetTasksByCategoryResponseFactory,
            createGetAllAgentsResponseFactory,
            createCreateTasksFromMarkdownResponseFactory,
            createExportTasksToMarkdownResponseFactory,
            createTaskErrorResponseFactory,
            createTaskMcpToolConfirmationFactory,
            createTaskMcpToolExecutingFactory,
            createTaskMcpToolSuccessFactory,
            createTaskMcpToolErrorFactory,
            createTaskMcpToolRejectedFactory
        ];

        for (const validator of validators) {
            try {
                const result = validator(message);
                return result as TaskServiceMessage;
            } catch (validatorError) {
                // Continue to next validator
                continue;
            }
        }

        console.log(`No suitable task service validator found for message: ${JSON.stringify(message)}`);
        return message as TaskServiceMessage;
    }
}; 