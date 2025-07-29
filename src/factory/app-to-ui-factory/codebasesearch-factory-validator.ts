import {
    CodebaseSearchStateEnum,
    CodebaseSearchConfirmation,
    CodebaseSearchExecuting,
    CodebaseSearchSuccess,
    CodebaseSearchError,
    CodebaseSearchRejected,
    CodebaseSearchMcpToolConfirmation,
    CodebaseSearchMcpToolExecuting,
    CodebaseSearchMcpToolSuccess,
    CodebaseSearchMcpToolError,
    CodebaseSearchMcpToolRejected,
    CodebaseSearchServiceMessage,
    codebaseSearchStateEnumSchema,
    codebaseSearchConfirmationSchema,
    codebaseSearchExecutingSchema,
    codebaseSearchSuccessSchema,
    codebaseSearchErrorSchema,
    codebaseSearchRejectedSchema,
    codebaseSearchMcpToolConfirmationSchema,
    codebaseSearchMcpToolExecutingSchema,
    codebaseSearchMcpToolSuccessSchema,
    codebaseSearchMcpToolErrorSchema,
    codebaseSearchMcpToolRejectedSchema,
    codebaseSearchServiceMessageSchema
} from "../../wstypes/app-to-ui-ws/codebaseSearchSchemas";

/**
 * Comprehensive Factory Validators for CodebaseSearch Service Operations
 * Based on codebaseSearch patterns and message types
 */

/**
 * CodebaseSearchStateEnum Validator
 */
export const createCodebaseSearchStateEnumFactory = (message: CodebaseSearchStateEnum): CodebaseSearchStateEnum => {
    const isValidMessage = codebaseSearchStateEnumSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CodebaseSearchStateEnum format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodebaseSearchConfirmation Validator
 */
export const createCodebaseSearchConfirmationFactory = (message: CodebaseSearchConfirmation): CodebaseSearchConfirmation => {
    const isValidMessage = codebaseSearchConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CodebaseSearchConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodebaseSearchExecuting Validator
 */
export const createCodebaseSearchExecutingFactory = (message: CodebaseSearchExecuting): CodebaseSearchExecuting => {
    const isValidMessage = codebaseSearchExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CodebaseSearchExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodebaseSearchSuccess Validator
 */
export const createCodebaseSearchSuccessFactory = (message: CodebaseSearchSuccess): CodebaseSearchSuccess => {
    const isValidMessage = codebaseSearchSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CodebaseSearchSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodebaseSearchError Validator
 */
export const createCodebaseSearchErrorFactory = (message: CodebaseSearchError): CodebaseSearchError => {
    const isValidMessage = codebaseSearchErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CodebaseSearchError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodebaseSearchRejected Validator
 */
export const createCodebaseSearchRejectedFactory = (message: CodebaseSearchRejected): CodebaseSearchRejected => {
    const isValidMessage = codebaseSearchRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CodebaseSearchRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodebaseSearchMcpToolConfirmation Validator
 */
export const createCodebaseSearchMcpToolConfirmationFactory = (message: CodebaseSearchMcpToolConfirmation): CodebaseSearchMcpToolConfirmation => {
    const isValidMessage = codebaseSearchMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CodebaseSearchMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodebaseSearchMcpToolExecuting Validator
 */
export const createCodebaseSearchMcpToolExecutingFactory = (message: CodebaseSearchMcpToolExecuting): CodebaseSearchMcpToolExecuting => {
    const isValidMessage = codebaseSearchMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CodebaseSearchMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodebaseSearchMcpToolSuccess Validator
 */
export const createCodebaseSearchMcpToolSuccessFactory = (message: CodebaseSearchMcpToolSuccess): CodebaseSearchMcpToolSuccess => {
    const isValidMessage = codebaseSearchMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CodebaseSearchMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodebaseSearchMcpToolError Validator
 */
export const createCodebaseSearchMcpToolErrorFactory = (message: CodebaseSearchMcpToolError): CodebaseSearchMcpToolError => {
    const isValidMessage = codebaseSearchMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CodebaseSearchMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodebaseSearchMcpToolRejected Validator
 */
export const createCodebaseSearchMcpToolRejectedFactory = (message: CodebaseSearchMcpToolRejected): CodebaseSearchMcpToolRejected => {
    const isValidMessage = codebaseSearchMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CodebaseSearchMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CodebaseSearchServiceMessage Validator
 */
export const createCodebaseSearchServiceMessageFactory = (message: CodebaseSearchServiceMessage): CodebaseSearchServiceMessage => {
    const isValidMessage = codebaseSearchServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CodebaseSearchServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive CodebaseSearch Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createCodebaseSearchFactory = (message: any): CodebaseSearchServiceMessage => {
    // Try to validate as generic codebaseSearch message first
    try {
        const genericResult = createCodebaseSearchServiceMessageFactory(message);
        return genericResult;
    } catch (error) {
        // If generic validation fails, try specific validators
        const validators = [
            createCodebaseSearchStateEnumFactory,
            createCodebaseSearchConfirmationFactory,
            createCodebaseSearchExecutingFactory,
            createCodebaseSearchSuccessFactory,
            createCodebaseSearchErrorFactory,
            createCodebaseSearchRejectedFactory,
            createCodebaseSearchMcpToolConfirmationFactory,
            createCodebaseSearchMcpToolExecutingFactory,
            createCodebaseSearchMcpToolSuccessFactory,
            createCodebaseSearchMcpToolErrorFactory,
            createCodebaseSearchMcpToolRejectedFactory
        ];

        for (const validator of validators) {
            try {
                const result = validator(message);
                return result as CodebaseSearchServiceMessage;
            } catch (validatorError) {
                // Continue to next validator
                continue;
            }
        }

        console.log(`No suitable codebaseSearch validator found for message: ${JSON.stringify(message)}`);
        return message as CodebaseSearchServiceMessage;
    }
};