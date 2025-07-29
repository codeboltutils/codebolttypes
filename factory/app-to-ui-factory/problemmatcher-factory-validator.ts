import { 
    MatchProblemResponse,
    ProblemMatcherMcpToolConfirmation,
    ProblemMatcherMcpToolExecuting,
    ProblemMatcherMcpToolSuccess,
    ProblemMatcherMcpToolError,
    ProblemMatcherMcpToolRejected,
    ProblemMatcherServiceMessage,
    matchProblemResponseSchema,
    problemMatcherServiceMessageSchema
} from "../../../messagesSchemas/app-to-ui/problemMatcherSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for ProblemMatcher Service Operations
 * Based on problemMatcher patterns and message types
 */

/**
 * MatchProblemResponse Validator
 */
export const createMatchProblemResponseFactory = (message: MatchProblemResponse): PLACEHOLDER => {
    const isValidMessage = matchProblemResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid MatchProblemResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProblemMatcherMcpToolConfirmation Validator
 */
export const createProblemMatcherMcpToolConfirmationFactory = (message: ProblemMatcherMcpToolConfirmation): PLACEHOLDER => {
    const isValidMessage = problemMatcherMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProblemMatcherMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProblemMatcherMcpToolExecuting Validator
 */
export const createProblemMatcherMcpToolExecutingFactory = (message: ProblemMatcherMcpToolExecuting): PLACEHOLDER => {
    const isValidMessage = problemMatcherMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProblemMatcherMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProblemMatcherMcpToolSuccess Validator
 */
export const createProblemMatcherMcpToolSuccessFactory = (message: ProblemMatcherMcpToolSuccess): PLACEHOLDER => {
    const isValidMessage = problemMatcherMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProblemMatcherMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProblemMatcherMcpToolError Validator
 */
export const createProblemMatcherMcpToolErrorFactory = (message: ProblemMatcherMcpToolError): PLACEHOLDER => {
    const isValidMessage = problemMatcherMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProblemMatcherMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProblemMatcherMcpToolRejected Validator
 */
export const createProblemMatcherMcpToolRejectedFactory = (message: ProblemMatcherMcpToolRejected): PLACEHOLDER => {
    const isValidMessage = problemMatcherMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProblemMatcherMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProblemMatcherServiceMessage Validator
 */
export const createProblemMatcherServiceMessageFactory = (message: ProblemMatcherServiceMessage): PLACEHOLDER => {
    const isValidMessage = problemMatcherServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProblemMatcherServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Generic ProblemMatcher Message Validator (Union Type)
 */
export const createProblemMatcherMessageFactory = (message: ProblemMatcherServiceMessage): PLACEHOLDER => {
    const isValidMessage = problemMatcherServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProblemMatcherServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive ProblemMatcher Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createProblemMatcherFactory = (message: any): PLACEHOLDER => {
    // Try to validate as generic problemMatcher message first
    const genericResult = createProblemMatcherMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createMatchProblemResponseFactory,
        createProblemMatcherMcpToolConfirmationFactory,
        createProblemMatcherMcpToolExecutingFactory,
        createProblemMatcherMcpToolSuccessFactory,
        createProblemMatcherMcpToolErrorFactory,
        createProblemMatcherMcpToolRejectedFactory,
        createProblemMatcherServiceMessageFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message);
            if (result) {
                return result as ProblemMatcherServiceMessage;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    logger.error(`No suitable problemMatcher validator found for message: ${JSON.stringify(message)}`);
    return message;
};