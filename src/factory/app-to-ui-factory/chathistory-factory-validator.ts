import { 
    GetSummarizeAllResponse,
    GetSummarizeResponse,
    GetChatHistoryResponse,
    ChatHistoryMcpToolConfirmation,
    ChatHistoryMcpToolExecuting,
    ChatHistoryMcpToolSuccess,
    ChatHistoryMcpToolError,
    ChatHistoryMcpToolRejected,
    ChatHistoryServiceMessage,
    getSummarizeAllResponseSchema,
    getSummarizeResponseSchema,
    getChatHistoryResponseSchema,
    chatHistoryMcpToolConfirmationSchema,
    chatHistoryMcpToolExecutingSchema,
    chatHistoryMcpToolSuccessSchema,
    chatHistoryMcpToolErrorSchema,
    chatHistoryMcpToolRejectedSchema,
    chatHistoryServiceMessageSchema
} from "../../wstypes/app-to-ui-ws/chatHistorySchemas";

/**
 * Comprehensive Factory Validators for ChatHistory Service Operations
 * Based on chatHistory patterns and message types
 */

/**
 * GetSummarizeAllResponse Validator
 */
export const createGetSummarizeAllResponseFactory = (message: GetSummarizeAllResponse): GetSummarizeAllResponse => {
    const isValidMessage = getSummarizeAllResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetSummarizeAllResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetSummarizeResponse Validator
 */
export const createGetSummarizeResponseFactory = (message: GetSummarizeResponse): GetSummarizeResponse => {
    const isValidMessage = getSummarizeResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetSummarizeResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetChatHistoryResponse Validator
 */
export const createGetChatHistoryResponseFactory = (message: GetChatHistoryResponse): GetChatHistoryResponse => {
    const isValidMessage = getChatHistoryResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetChatHistoryResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ChatHistoryMcpToolConfirmation Validator
 */
export const createChatHistoryMcpToolConfirmationFactory = (message: ChatHistoryMcpToolConfirmation): ChatHistoryMcpToolConfirmation => {
    const isValidMessage = chatHistoryMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ChatHistoryMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ChatHistoryMcpToolExecuting Validator
 */
export const createChatHistoryMcpToolExecutingFactory = (message: ChatHistoryMcpToolExecuting): ChatHistoryMcpToolExecuting => {
    const isValidMessage = chatHistoryMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ChatHistoryMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ChatHistoryMcpToolSuccess Validator
 */
export const createChatHistoryMcpToolSuccessFactory = (message: ChatHistoryMcpToolSuccess): ChatHistoryMcpToolSuccess => {
    const isValidMessage = chatHistoryMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ChatHistoryMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ChatHistoryMcpToolError Validator
 */
export const createChatHistoryMcpToolErrorFactory = (message: ChatHistoryMcpToolError): ChatHistoryMcpToolError => {
    const isValidMessage = chatHistoryMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ChatHistoryMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ChatHistoryMcpToolRejected Validator
 */
export const createChatHistoryMcpToolRejectedFactory = (message: ChatHistoryMcpToolRejected): ChatHistoryMcpToolRejected => {
    const isValidMessage = chatHistoryMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ChatHistoryMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ChatHistoryServiceMessage Validator
 */
export const createChatHistoryServiceMessageFactory = (message: ChatHistoryServiceMessage): ChatHistoryServiceMessage => {
    const isValidMessage = chatHistoryServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ChatHistoryServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive ChatHistory Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createChatHistoryFactory = (message: any): ChatHistoryServiceMessage => {
    // Try to validate as generic chatHistory message first
    try {
        const genericResult = createChatHistoryServiceMessageFactory(message);
        return genericResult;
    } catch (error) {
        // If generic validation fails, try specific validators
        const validators = [
            createGetSummarizeAllResponseFactory,
            createGetSummarizeResponseFactory,
            createGetChatHistoryResponseFactory,
            createChatHistoryMcpToolConfirmationFactory,
            createChatHistoryMcpToolExecutingFactory,
            createChatHistoryMcpToolSuccessFactory,
            createChatHistoryMcpToolErrorFactory,
            createChatHistoryMcpToolRejectedFactory
        ];

        for (const validator of validators) {
            try {
                const result = validator(message);
                return result as ChatHistoryServiceMessage;
            } catch (validatorError) {
                // Continue to next validator
                continue;
            }
        }

        console.log(`No suitable chatHistory validator found for message: ${JSON.stringify(message)}`);
        return message as ChatHistoryServiceMessage;
    }
};