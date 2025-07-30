import { 
    DebugAddLogResponse,
    OpenDebugBrowserResponse,
    DebugMcpToolConfirmation,
    DebugMcpToolExecuting,
    DebugMcpToolSuccess,
    DebugMcpToolError,
    DebugMcpToolRejected,
    DebugServiceMessage,
    debugAddLogResponseSchema,
    openDebugBrowserResponseSchema,
    debugServiceMessageSchema,
    debugMcpToolErrorSchema,
    debugMcpToolSuccessSchema,
    debugMcpToolExecutingSchema,
    debugMcpToolConfirmationSchema,
    debugMcpToolRejectedSchema
} from "../../wstypes/app-to-ui-ws/debugServiceSchemas";

/**
 * Comprehensive Factory Validators for DebugService Service Operations
 * Based on debugService patterns and message types
 */

/**
 * DebugAddLogResponse Validator
 */
export const createDebugAddLogResponseFactory = (message: DebugAddLogResponse): DebugAddLogResponse => {
    const isValidMessage = debugAddLogResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid DebugAddLogResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * OpenDebugBrowserResponse Validator
 */
export const createOpenDebugBrowserResponseFactory = (message: OpenDebugBrowserResponse): OpenDebugBrowserResponse => {
    const isValidMessage = openDebugBrowserResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid OpenDebugBrowserResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * DebugMcpToolConfirmation Validator
 */
export const createDebugMcpToolConfirmationFactory = (message: DebugMcpToolConfirmation): DebugMcpToolConfirmation => {
    const isValidMessage = debugMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid DebugMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * DebugMcpToolExecuting Validator
 */
export const createDebugMcpToolExecutingFactory = (message: DebugMcpToolExecuting): DebugMcpToolExecuting => {
    const isValidMessage = debugMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid DebugMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * DebugMcpToolSuccess Validator
 */
export const createDebugMcpToolSuccessFactory = (message: DebugMcpToolSuccess): DebugMcpToolSuccess => {
    const isValidMessage = debugMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid DebugMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * DebugMcpToolError Validator
 */
export const createDebugMcpToolErrorFactory = (message: DebugMcpToolError): DebugMcpToolError => {
    const isValidMessage = debugMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid DebugMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * DebugMcpToolRejected Validator
 */
export const createDebugMcpToolRejectedFactory = (message: DebugMcpToolRejected): DebugMcpToolRejected => {
    const isValidMessage = debugMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid DebugMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * DebugServiceMessage Validator
 */
export const createDebugServiceMessageFactory = (message: DebugServiceMessage): DebugServiceMessage => {
    const isValidMessage = debugServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid DebugServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive DebugService Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createDebugServiceFactory = (message: any): DebugServiceMessage => {
    // Try to validate as generic debugService message first
    try {
        const genericResult = createDebugServiceMessageFactory(message);
        return genericResult;
    } catch (error) {
        // If generic validation fails, try specific validators
        const validators = [
            createDebugAddLogResponseFactory,
            createOpenDebugBrowserResponseFactory,
            createDebugMcpToolConfirmationFactory,
            createDebugMcpToolExecutingFactory,
            createDebugMcpToolSuccessFactory,
            createDebugMcpToolErrorFactory,
            createDebugMcpToolRejectedFactory
        ];

        for (const validator of validators) {
            try {
                const result = validator(message);
                return result as DebugServiceMessage;
            } catch (validatorError) {
                // Continue to next validator
                continue;
            }
        }

        console.log(`No suitable debugService validator found for message: ${JSON.stringify(message)}`);
        return message as DebugServiceMessage;
    }
};