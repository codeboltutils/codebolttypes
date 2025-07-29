import { 
    GetAgentStateResponse,
    AddToAgentStateResponse,
    StateServiceMessage,
    getAgentStateResponseSchema,
    addToAgentStateResponseSchema,
    stateServiceMessageSchema
} from "../../../messagesSchemas/app-to-ui/stateServiceSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for StateService Service Operations
 * Based on stateService patterns and message types
 */

/**
 * GetAgentStateResponse Validator
 */
export const createGetAgentStateResponseFactory = (message: GetAgentStateResponse): GetAgentStateResponse => {
    const isValidMessage = getAgentStateResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid GetAgentStateResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * AddToAgentStateResponse Validator
 */
export const createAddToAgentStateResponseFactory = (message: AddToAgentStateResponse): AddToAgentStateResponse => {
    const isValidMessage = addToAgentStateResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid AddToAgentStateResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * StateServiceMessage Validator
 */
export const createStateServiceMessageFactory = (message: StateServiceMessage): StateServiceMessage => {
    const isValidMessage = stateServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid StateServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};



/**
 * Comprehensive StateService Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createStateServiceFactory = (message: any) => {
    // Try to validate as generic stateService message first
    const genericResult = createStateServiceMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createGetAgentStateResponseFactory,
        createAddToAgentStateResponseFactory,
        createStateServiceMessageFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message);
            if (result) {
                return result as StateServiceMessage;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    logger.error(`No suitable stateService validator found for message: ${JSON.stringify(message)}`);
    return message;
};