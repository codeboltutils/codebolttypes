import { 
    CrawlerResponse,
    CrawlerMcpToolConfirmation,
    CrawlerMcpToolExecuting,
    CrawlerMcpToolSuccess,
    CrawlerMcpToolError,
    CrawlerMcpToolRejected,
    CrawlerServiceMessage,
    crawlerResponseSchema,
    crawlerServiceMessageSchema,
    crawlerMcpToolRejectedSchema,
    crawlerMcpToolErrorSchema,
    crawlerMcpToolSuccessSchema,
    crawlerMcpToolExecutingSchema,
    crawlerMcpToolConfirmationSchema
} from "../../../messagesSchemas/app-to-ui/crawlerServiceSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for CrawlerService Service Operations
 * Based on crawlerService patterns and message types
 */

/**
 * CrawlerResponse Validator
 */
export const createCrawlerResponseFactory = (message: CrawlerResponse): CrawlerResponse => {
    const isValidMessage = crawlerResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CrawlerResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CrawlerMcpToolConfirmation Validator
 */
export const createCrawlerMcpToolConfirmationFactory = (message: CrawlerMcpToolConfirmation): CrawlerMcpToolConfirmation => {
    const isValidMessage = crawlerMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CrawlerMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CrawlerMcpToolExecuting Validator
 */
export const createCrawlerMcpToolExecutingFactory = (message: CrawlerMcpToolExecuting): CrawlerMcpToolExecuting => {
    const isValidMessage = crawlerMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CrawlerMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CrawlerMcpToolSuccess Validator
 */
export const createCrawlerMcpToolSuccessFactory = (message: CrawlerMcpToolSuccess): CrawlerMcpToolSuccess => {
    const isValidMessage = crawlerMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CrawlerMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CrawlerMcpToolError Validator
 */
export const createCrawlerMcpToolErrorFactory = (message: CrawlerMcpToolError): CrawlerMcpToolError => {
    const isValidMessage = crawlerMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CrawlerMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CrawlerMcpToolRejected Validator
 */
export const createCrawlerMcpToolRejectedFactory = (message: CrawlerMcpToolRejected): CrawlerMcpToolRejected => {
    const isValidMessage = crawlerMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CrawlerMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CrawlerServiceMessage Validator
 */
export const createCrawlerServiceMessageFactory = (message: CrawlerServiceMessage): CrawlerServiceMessage => {
    const isValidMessage = crawlerServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CrawlerServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};



/**
 * Comprehensive CrawlerService Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createCrawlerServiceFactory = (message: any) => {
    // Try to validate as generic crawlerService message first
    const genericResult = createCrawlerServiceMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createCrawlerResponseFactory,
        createCrawlerMcpToolConfirmationFactory,
        createCrawlerMcpToolExecutingFactory,
        createCrawlerMcpToolSuccessFactory,
        createCrawlerMcpToolErrorFactory,
        createCrawlerMcpToolRejectedFactory,
        createCrawlerServiceMessageFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message);
            if (result) {
                return result as CrawlerServiceMessage;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    logger.error(`No suitable crawlerService validator found for message: ${JSON.stringify(message)}`);
    return message;
};