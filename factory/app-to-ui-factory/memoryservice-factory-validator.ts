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
} from "../../../messagesSchemas/app-to-ui/memoryServiceSchemas";
import logger from "../../utils/logger";

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
        logger.error(`Invalid MemoryMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
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
        logger.error(`Invalid MemoryMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
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
        logger.error(`Invalid MemoryMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
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
        logger.error(`Invalid MemoryMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
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
        logger.error(`Invalid MemoryMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};




