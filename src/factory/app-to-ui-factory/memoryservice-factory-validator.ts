import { 
    MemoryMcpToolConfirmation,
    MemoryMcpToolExecuting,
    MemoryMcpToolSuccess,
    MemoryMcpToolError,
    MemoryMcpToolRejected,
    memoryMcpToolRejectedSchema,
    memoryMcpToolErrorSchema,
    memoryMcpToolSuccessSchema,
    memoryMcpToolExecutingSchema,
    memoryMcpToolConfirmationSchema
} from "../../wstypes/app-to-ui-ws/memoryServiceSchemas";

/**
 * Comprehensive Factory Validators for MemoryService Service Operations
 * Based on memoryService patterns and message types
 */

/**
 * MemoryMcpToolConfirmation Validator
 */
export const createMemoryMcpToolConfirmationFactory = (message: MemoryMcpToolConfirmation): MemoryMcpToolConfirmation => {
    const isValidMessage = memoryMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid MemoryMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * MemoryMcpToolExecuting Validator
 */
export const createMemoryMcpToolExecutingFactory = (message: MemoryMcpToolExecuting): MemoryMcpToolExecuting => {
    const isValidMessage = memoryMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid MemoryMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * MemoryMcpToolSuccess Validator
 */
export const createMemoryMcpToolSuccessFactory = (message: MemoryMcpToolSuccess): MemoryMcpToolSuccess => {
    const isValidMessage = memoryMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid MemoryMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * MemoryMcpToolError Validator
 */
export const createMemoryMcpToolErrorFactory = (message: MemoryMcpToolError): MemoryMcpToolError => {
    const isValidMessage = memoryMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid MemoryMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * MemoryMcpToolRejected Validator
 */
export const createMemoryMcpToolRejectedFactory = (message: MemoryMcpToolRejected): MemoryMcpToolRejected => {
    const isValidMessage = memoryMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid MemoryMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};




