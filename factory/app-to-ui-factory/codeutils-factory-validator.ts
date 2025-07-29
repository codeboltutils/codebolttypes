import { 
    GetAllFilesMarkdownResponse,
    GetMatcherListTreeResponse,
    GetMatchDetailResponse,
    CodeUtilsMcpToolConfirmation,
    CodeUtilsMcpToolExecuting,
    CodeUtilsMcpToolSuccess,
    CodeUtilsMcpToolError,
    CodeUtilsMcpToolRejected,
    CodeUtilsServiceMessage,
    getAllFilesMarkdownResponseSchema,
    getMatcherListTreeResponseSchema,
    getMatchDetailResponseSchema,
    codeUtilsServiceMessageSchema
} from "../../../messagesSchemas/app-to-ui/codeUtilsSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for CodeUtils Service Operations
 * Based on codeUtils patterns and message types
 */

/**
 * GetAllFilesMarkdownResponse Validator
 */
export const createGetAllFilesMarkdownResponseFactory = (message: GetAllFilesMarkdownResponse): PLACEHOLDER => {
    const isValidMessage = getAllFilesMarkdownResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid GetAllFilesMarkdownResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetMatcherListTreeResponse Validator
 */
export const createGetMatcherListTreeResponseFactory = (message: GetMatcherListTreeResponse): PLACEHOLDER => {
    const isValidMessage = getMatcherListTreeResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid GetMatcherListTreeResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetMatchDetailResponse Validator
 */
export const createGetMatchDetailResponseFactory = (message: GetMatchDetailResponse): PLACEHOLDER => {
    const isValidMessage = getMatchDetailResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid GetMatchDetailResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodeUtilsMcpToolConfirmation Validator
 */
export const createCodeUtilsMcpToolConfirmationFactory = (message: CodeUtilsMcpToolConfirmation): PLACEHOLDER => {
    const isValidMessage = codeUtilsMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CodeUtilsMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodeUtilsMcpToolExecuting Validator
 */
export const createCodeUtilsMcpToolExecutingFactory = (message: CodeUtilsMcpToolExecuting): PLACEHOLDER => {
    const isValidMessage = codeUtilsMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CodeUtilsMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodeUtilsMcpToolSuccess Validator
 */
export const createCodeUtilsMcpToolSuccessFactory = (message: CodeUtilsMcpToolSuccess): PLACEHOLDER => {
    const isValidMessage = codeUtilsMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CodeUtilsMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodeUtilsMcpToolError Validator
 */
export const createCodeUtilsMcpToolErrorFactory = (message: CodeUtilsMcpToolError): PLACEHOLDER => {
    const isValidMessage = codeUtilsMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CodeUtilsMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodeUtilsMcpToolRejected Validator
 */
export const createCodeUtilsMcpToolRejectedFactory = (message: CodeUtilsMcpToolRejected): PLACEHOLDER => {
    const isValidMessage = codeUtilsMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CodeUtilsMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodeUtilsServiceMessage Validator
 */
export const createCodeUtilsServiceMessageFactory = (message: CodeUtilsServiceMessage): PLACEHOLDER => {
    const isValidMessage = codeUtilsServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CodeUtilsServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Generic CodeUtils Message Validator (Union Type)
 */
export const createCodeUtilsMessageFactory = (message: CodeUtilsServiceMessage): PLACEHOLDER => {
    const isValidMessage = codeUtilsServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CodeUtilsServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive CodeUtils Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createCodeUtilsFactory = (message: any): PLACEHOLDER => {
    // Try to validate as generic codeUtils message first
    const genericResult = createCodeUtilsMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createGetAllFilesMarkdownResponseFactory,
        createGetMatcherListTreeResponseFactory,
        createGetMatchDetailResponseFactory,
        createCodeUtilsMcpToolConfirmationFactory,
        createCodeUtilsMcpToolExecutingFactory,
        createCodeUtilsMcpToolSuccessFactory,
        createCodeUtilsMcpToolErrorFactory,
        createCodeUtilsMcpToolRejectedFactory,
        createCodeUtilsServiceMessageFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message);
            if (result) {
                return result as CodeUtilsServiceMessage;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    logger.error(`No suitable codeUtils validator found for message: ${JSON.stringify(message)}`);
    return message;
};