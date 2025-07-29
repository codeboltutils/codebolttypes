import { 
    NewPageResponse,
    BrowserErrorResponse,
    BrowserActionResponse,
    BrowserMcpToolConfirmation,
    BrowserMcpToolExecuting,
    BrowserMcpToolSuccess,
    BrowserMcpToolError,
    BrowserMcpToolRejected,
    BrowserActionMessage,
    BrowserServiceMessage,
    newPageResponseSchema,
    browserErrorResponseSchema,
    browserActionResponseSchema,
    browserMcpToolConfirmationSchema,
    browserMcpToolExecutingSchema,
    browserMcpToolSuccessSchema,
    browserMcpToolErrorSchema,
    browserMcpToolRejectedSchema,
    browserActionMessageSchema,
    browserServiceMessageSchema
} from "../../wstypes/app-to-ui-ws/browserServiceSchemas";

/**
 * Comprehensive Factory Validators for Browser Service Operations
 * Based on browser automation patterns and message types
 */

/**
 * Browser Response Validators
 */
export const createNewPageResponseFactory = (message: NewPageResponse): NewPageResponse => {
    const isValidMessage = newPageResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid NewPageResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createBrowserErrorResponseFactory = (message: BrowserErrorResponse): BrowserErrorResponse => {
    const isValidMessage = browserErrorResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BrowserErrorResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createBrowserActionResponseFactory = (message: BrowserActionResponse): BrowserActionResponse => {
    const isValidMessage = browserActionResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BrowserActionResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createBrowserActionMessageFactory = (message: BrowserActionMessage): BrowserActionMessage => {
    const isValidMessage = browserActionMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BrowserActionMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Browser MCP Tool Validators
 */

export const createBrowserMcpToolConfirmationFactory = (message: BrowserMcpToolConfirmation): BrowserMcpToolConfirmation => {
    const isValidMessage = browserMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BrowserMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createBrowserMcpToolExecutingFactory = (message: BrowserMcpToolExecuting): BrowserMcpToolExecuting => {
    const isValidMessage = browserMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BrowserMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createBrowserMcpToolSuccessFactory = (message: BrowserMcpToolSuccess): BrowserMcpToolSuccess => {
    const isValidMessage = browserMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BrowserMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createBrowserMcpToolErrorFactory = (message: BrowserMcpToolError): BrowserMcpToolError => {
    const isValidMessage = browserMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BrowserMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createBrowserMcpToolRejectedFactory = (message: BrowserMcpToolRejected): BrowserMcpToolRejected => {
    const isValidMessage = browserMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BrowserMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Generic Browser Service Message Validator (Union Type)
 */
export const createBrowserServiceMessageFactory = (message: BrowserServiceMessage): BrowserServiceMessage => {
    const isValidMessage = browserServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BrowserServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive Browser Service Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createBrowserServiceFactory = (message: any): BrowserServiceMessage => {
    // Try to validate as generic browser service message first
    const genericResult = createBrowserServiceMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createNewPageResponseFactory,
        createBrowserErrorResponseFactory,
        createBrowserActionResponseFactory,
        createBrowserActionMessageFactory,
        createBrowserMcpToolConfirmationFactory,
        createBrowserMcpToolExecutingFactory,
        createBrowserMcpToolSuccessFactory,
        createBrowserMcpToolErrorFactory,
        createBrowserMcpToolRejectedFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message);
            if (result) {
                return result as BrowserServiceMessage;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    console.log(`No suitable browserService validator found for message: ${JSON.stringify(message)}`);
    return message;
}; 