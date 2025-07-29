import { 
    GetAppStateResponse,
    AppMcpToolConfirmation,
    AppMcpToolExecuting,
    AppMcpToolSuccess,
    AppMcpToolError,
    AppMcpToolRejected,
    AppServiceMessage,
    getAppStateResponseSchema,
    appServiceMessageSchema,
    appMcpToolRejectedSchema,
    appMcpToolErrorSchema,
    appMcpToolSuccessSchema,
    appMcpToolExecutingSchema,
    appMcpToolConfirmationSchema
} from "../../../messagesSchemas/app-to-ui/appServiceSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for AppService Service Operations
 * Based on appService patterns and message types
 */

/**
 * GetAppStateResponse Validator
 */
export const createGetAppStateResponseFactory = (message: GetAppStateResponse): GetAppStateResponse => {
    const isValidMessage = getAppStateResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid GetAppStateResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * AppMcpToolConfirmation Validator
 */
export const createAppMcpToolConfirmationFactory = (message: AppMcpToolConfirmation): AppMcpToolConfirmation => {
    const isValidMessage = appMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid AppMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * AppMcpToolExecuting Validator
 */
export const createAppMcpToolExecutingFactory = (message: AppMcpToolExecuting): AppMcpToolExecuting => {
    const isValidMessage = appMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid AppMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * AppMcpToolSuccess Validator
 */
export const createAppMcpToolSuccessFactory = (message: AppMcpToolSuccess): AppMcpToolSuccess => {
    const isValidMessage = appMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid AppMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * AppMcpToolError Validator
 */
export const createAppMcpToolErrorFactory = (message: AppMcpToolError): AppMcpToolError => {
    const isValidMessage = appMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid AppMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * AppMcpToolRejected Validator
 */
export const createAppMcpToolRejectedFactory = (message: AppMcpToolRejected): AppMcpToolRejected => {
    const isValidMessage = appMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid AppMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};


/**
 * Generic AppService Message Validator (Union Type)
 */
export const createAppServiceMessageFactory = (message: AppServiceMessage): AppServiceMessage => {
    const isValidMessage = appServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid AppServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive AppService Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createAppServiceFactory = (message: any) => {
    // Try to validate as generic appService message first
    const genericResult = createAppServiceMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createGetAppStateResponseFactory,
        createAppMcpToolConfirmationFactory,
        createAppMcpToolExecutingFactory,
        createAppMcpToolSuccessFactory,
        createAppMcpToolErrorFactory,
        createAppMcpToolRejectedFactory,
        createAppServiceMessageFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message);
            if (result) {
                return result as AppServiceMessage;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    logger.error(`No suitable appService validator found for message: ${JSON.stringify(message)}`);
    return message;
};