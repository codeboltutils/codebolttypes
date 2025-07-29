import { 
    GetTreeResponse,
    JsTreeParserMcpToolConfirmation,
    JsTreeParserMcpToolExecuting,
    JsTreeParserMcpToolSuccess,
    JsTreeParserMcpToolError,
    JsTreeParserMcpToolRejected,
    JsTreeParserServiceMessage,
    getTreeResponseSchema,
    jsTreeParserServiceMessageSchema
} from "../../../messagesSchemas/app-to-ui/jsTreeParserSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for JsTreeParser Service Operations
 * Based on jsTreeParser patterns and message types
 */

/**
 * GetTreeResponse Validator
 */
export const createGetTreeResponseFactory = (message: GetTreeResponse): PLACEHOLDER => {
    const isValidMessage = getTreeResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid GetTreeResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * JsTreeParserMcpToolConfirmation Validator
 */
export const createJsTreeParserMcpToolConfirmationFactory = (message: JsTreeParserMcpToolConfirmation): PLACEHOLDER => {
    const isValidMessage = jsTreeParserMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid JsTreeParserMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * JsTreeParserMcpToolExecuting Validator
 */
export const createJsTreeParserMcpToolExecutingFactory = (message: JsTreeParserMcpToolExecuting): PLACEHOLDER => {
    const isValidMessage = jsTreeParserMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid JsTreeParserMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * JsTreeParserMcpToolSuccess Validator
 */
export const createJsTreeParserMcpToolSuccessFactory = (message: JsTreeParserMcpToolSuccess): PLACEHOLDER => {
    const isValidMessage = jsTreeParserMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid JsTreeParserMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * JsTreeParserMcpToolError Validator
 */
export const createJsTreeParserMcpToolErrorFactory = (message: JsTreeParserMcpToolError): PLACEHOLDER => {
    const isValidMessage = jsTreeParserMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid JsTreeParserMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * JsTreeParserMcpToolRejected Validator
 */
export const createJsTreeParserMcpToolRejectedFactory = (message: JsTreeParserMcpToolRejected): PLACEHOLDER => {
    const isValidMessage = jsTreeParserMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid JsTreeParserMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * JsTreeParserServiceMessage Validator
 */
export const createJsTreeParserServiceMessageFactory = (message: JsTreeParserServiceMessage): PLACEHOLDER => {
    const isValidMessage = jsTreeParserServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid JsTreeParserServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Generic JsTreeParser Message Validator (Union Type)
 */
export const createJsTreeParserMessageFactory = (message: JsTreeParserServiceMessage): PLACEHOLDER => {
    const isValidMessage = jsTreeParserServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid JsTreeParserServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive JsTreeParser Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createJsTreeParserFactory = (message: any): PLACEHOLDER => {
    // Try to validate as generic jsTreeParser message first
    const genericResult = createJsTreeParserMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createGetTreeResponseFactory,
        createJsTreeParserMcpToolConfirmationFactory,
        createJsTreeParserMcpToolExecutingFactory,
        createJsTreeParserMcpToolSuccessFactory,
        createJsTreeParserMcpToolErrorFactory,
        createJsTreeParserMcpToolRejectedFactory,
        createJsTreeParserServiceMessageFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message);
            if (result) {
                return result as JsTreeParserServiceMessage;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    logger.error(`No suitable jsTreeParser validator found for message: ${JSON.stringify(message)}`);
    return message;
};