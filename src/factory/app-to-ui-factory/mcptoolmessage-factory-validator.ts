import { 
    McpToolMessage,
    mcpToolMessageSchema
} from "../../../messagesSchemas/app-to-ui/mcpToolMessageSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for MCP Tool Message Operations
 * Based on MCP tool execution patterns and message types
 */

/**
 * Generic MCP Tool Message Validator (Union Type)
 */
export const createMcpToolMessageFactory = (message: McpToolMessage): PLACEHOLDER => {
    const isValidMessage = mcpToolMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid McpToolMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive MCP Tool Message Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createMcpToolMessageFactoryValidator = (message: any): PLACEHOLDER => {
    // Try to validate as MCP tool message
    const result = createMcpToolMessageFactory(message);
    if (result) {
        return result;
    }

    logger.error(`No suitable MCP tool message validator found for message: ${JSON.stringify(message)}`);
    return message;
};

// Export the main factory function with the expected name
export { createMcpToolMessageFactory as createMcpToolMessageMessageFactory }; 