import { 
    AddVectorItemResponse,
    GetVectorResponse,
    QueryVectorItemResponse,
    QueryVectorItemsResponse,
    VectordbErrorResponse,
    VectordbMcpToolConfirmation,
    VectordbMcpToolExecuting,
    VectordbMcpToolSuccess,
    VectordbMcpToolError,
    VectordbMcpToolRejected,
    VectordbServiceMessage,
    addVectorItemResponseSchema,
    getVectorResponseSchema,
    queryVectorItemResponseSchema,
    queryVectorItemsResponseSchema,
    vectordbErrorResponseSchema,
    vectordbMcpToolConfirmationSchema,
    vectordbMcpToolExecutingSchema,
    vectordbMcpToolSuccessSchema,
    vectordbMcpToolErrorSchema,
    vectordbMcpToolRejectedSchema,
    vectordbServiceMessageSchema
} from "../../../messagesSchemas/app-to-ui/vectordbServiceSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for VectordbService Service Operations
 * Based on vectordbService patterns and message types
 */

/**
 * AddVectorItemResponse Validator
 */
export const createAddVectorItemResponseFactory = (message: AddVectorItemResponse): AddVectorItemResponse => {
    const isValidMessage = addVectorItemResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid AddVectorItemResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetVectorResponse Validator
 */
export const createGetVectorResponseFactory = (message: GetVectorResponse): GetVectorResponse => {
    const isValidMessage = getVectorResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid GetVectorResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * QueryVectorItemResponse Validator
 */
export const createQueryVectorItemResponseFactory = (message: QueryVectorItemResponse): QueryVectorItemResponse => {
    const isValidMessage = queryVectorItemResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid QueryVectorItemResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * QueryVectorItemsResponse Validator
 */
export const createQueryVectorItemsResponseFactory = (message: QueryVectorItemsResponse): QueryVectorItemsResponse => {
    const isValidMessage = queryVectorItemsResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid QueryVectorItemsResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * VectordbErrorResponse Validator
 */
export const createVectordbErrorResponseFactory = (message: VectordbErrorResponse): VectordbErrorResponse => {
    const isValidMessage = vectordbErrorResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid VectordbErrorResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * VectordbMcpToolConfirmation Validator
 */
export const createVectordbMcpToolConfirmationFactory = (message: VectordbMcpToolConfirmation): VectordbMcpToolConfirmation => {
    const isValidMessage = vectordbMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid VectordbMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * VectordbMcpToolExecuting Validator
 */
export const createVectordbMcpToolExecutingFactory = (message: VectordbMcpToolExecuting): VectordbMcpToolExecuting => {
    const isValidMessage = vectordbMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid VectordbMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * VectordbMcpToolSuccess Validator
 */
export const createVectordbMcpToolSuccessFactory = (message: VectordbMcpToolSuccess): VectordbMcpToolSuccess => {
    const isValidMessage = vectordbMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid VectordbMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * VectordbMcpToolError Validator
 */
export const createVectordbMcpToolErrorFactory = (message: VectordbMcpToolError): VectordbMcpToolError => {
    const isValidMessage = vectordbMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid VectordbMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * VectordbMcpToolRejected Validator
 */
export const createVectordbMcpToolRejectedFactory = (message: VectordbMcpToolRejected): VectordbMcpToolRejected => {
    const isValidMessage = vectordbMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid VectordbMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * VectordbServiceMessage Validator
 */
export const createVectordbServiceMessageFactory = (message: VectordbServiceMessage): VectordbServiceMessage => {
    const isValidMessage = vectordbServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid VectordbServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive VectordbService Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createVectordbServiceFactory = (message: any): VectordbServiceMessage => {
    // Try to validate as generic vectordbService message first
    const genericResult = createVectordbServiceMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createAddVectorItemResponseFactory,
        createGetVectorResponseFactory,
        createQueryVectorItemResponseFactory,
        createQueryVectorItemsResponseFactory,
        createVectordbErrorResponseFactory,
        createVectordbMcpToolConfirmationFactory,
        createVectordbMcpToolExecutingFactory,
        createVectordbMcpToolSuccessFactory,
        createVectordbMcpToolErrorFactory,
        createVectordbMcpToolRejectedFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message);
            if (result) {
                return result as VectordbServiceMessage;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    logger.error(`No suitable vectordbService validator found for message: ${JSON.stringify(message)}`);
    return message;
};