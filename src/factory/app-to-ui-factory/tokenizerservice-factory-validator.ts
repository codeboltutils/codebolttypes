import { 
    AddTokenResponse,
    GetTokenResponse,
    TokenizerMcpToolConfirmation,
    TokenizerMcpToolExecuting,
    TokenizerMcpToolSuccess,
    TokenizerMcpToolError,
    TokenizerMcpToolRejected,
    TokenizerServiceMessage,
    addTokenResponseSchema,
    getTokenResponseSchema,
    tokenizerServiceMessageSchema,
    tokenizerMcpToolRejectedSchema,
    tokenizerMcpToolErrorSchema,
    tokenizerMcpToolSuccessSchema,
    tokenizerMcpToolExecutingSchema,
    tokenizerMcpToolConfirmationSchema
} from "../../../messagesSchemas/app-to-ui/tokenizerServiceSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for TokenizerService Service Operations
 * Based on tokenizerService patterns and message types
 */

/**
 * AddTokenResponse Validator
 */
export const createAddTokenResponseFactory = (message: AddTokenResponse): AddTokenResponse => {
    const isValidMessage = addTokenResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid AddTokenResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetTokenResponse Validator
 */
export const createGetTokenResponseFactory = (message: GetTokenResponse): GetTokenResponse => {
    const isValidMessage = getTokenResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid GetTokenResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * TokenizerMcpToolConfirmation Validator
 */
export const createTokenizerMcpToolConfirmationFactory = (message: TokenizerMcpToolConfirmation): TokenizerMcpToolConfirmation => {
    const isValidMessage = tokenizerMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid TokenizerMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * TokenizerMcpToolExecuting Validator
 */
export const createTokenizerMcpToolExecutingFactory = (message: TokenizerMcpToolExecuting): TokenizerMcpToolExecuting => {
    const isValidMessage = tokenizerMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid TokenizerMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * TokenizerMcpToolSuccess Validator
 */
export const createTokenizerMcpToolSuccessFactory = (message: TokenizerMcpToolSuccess): TokenizerMcpToolSuccess => {
    const isValidMessage = tokenizerMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid TokenizerMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * TokenizerMcpToolError Validator
 */
export const createTokenizerMcpToolErrorFactory = (message: TokenizerMcpToolError): TokenizerMcpToolError => {
    const isValidMessage = tokenizerMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid TokenizerMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * TokenizerMcpToolRejected Validator
 */
export const createTokenizerMcpToolRejectedFactory = (message: TokenizerMcpToolRejected): TokenizerMcpToolRejected => {
    const isValidMessage = tokenizerMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid TokenizerMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};



/**
 * Generic TokenizerService Message Validator (Union Type)
 */
export const createTokenizerServiceMessageFactory = (message: TokenizerServiceMessage): TokenizerServiceMessage => {
    const isValidMessage = tokenizerServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid TokenizerServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive TokenizerService Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createTokenizerServiceFactory = (message: any) => {
    // Try to validate as generic tokenizerService message first
    const genericResult = createTokenizerServiceMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createAddTokenResponseFactory,
        createGetTokenResponseFactory,
        createTokenizerMcpToolConfirmationFactory,
        createTokenizerMcpToolExecutingFactory,
        createTokenizerMcpToolSuccessFactory,
        createTokenizerMcpToolErrorFactory,
        createTokenizerMcpToolRejectedFactory,
        createTokenizerServiceMessageFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message);
            if (result) {
                return result as TokenizerServiceMessage;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    logger.error(`No suitable tokenizerService validator found for message: ${JSON.stringify(message)}`);
    return message;
};