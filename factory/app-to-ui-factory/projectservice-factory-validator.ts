import { 
    GetProjectPathResponse,
    GetProjectSettingsResponse,
    GetRepoMapResponse,
    ProjectMcpToolConfirmation,
    ProjectMcpToolExecuting,
    ProjectMcpToolSuccess,
    ProjectMcpToolError,
    ProjectMcpToolRejected,
    ProjectServiceMessage,
    getProjectPathResponseSchema,
    getProjectSettingsResponseSchema,
    getRepoMapResponseSchema,
    projectMcpToolConfirmationSchema,
    projectMcpToolExecutingSchema,
    projectMcpToolSuccessSchema,
    projectMcpToolErrorSchema,
    projectMcpToolRejectedSchema,
    projectServiceMessageSchema
} from "../../../messagesSchemas/app-to-ui/projectServiceSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for ProjectService Service Operations
 * Based on projectService patterns and message types
 */

/**
 * GetProjectPathResponse Validator
 */
export const createGetProjectPathResponseFactory = (message: GetProjectPathResponse): GetProjectPathResponse => {
    const isValidMessage = getProjectPathResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid GetProjectPathResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetProjectSettingsResponse Validator
 */
export const createGetProjectSettingsResponseFactory = (message: GetProjectSettingsResponse): GetProjectSettingsResponse => {
    const isValidMessage = getProjectSettingsResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid GetProjectSettingsResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetRepoMapResponse Validator
 */
export const createGetRepoMapResponseFactory = (message: GetRepoMapResponse): GetRepoMapResponse => {
    const isValidMessage = getRepoMapResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid GetRepoMapResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProjectMcpToolConfirmation Validator
 */
export const createProjectMcpToolConfirmationFactory = (message: ProjectMcpToolConfirmation): ProjectMcpToolConfirmation => {
    const isValidMessage = projectMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProjectMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProjectMcpToolExecuting Validator
 */
export const createProjectMcpToolExecutingFactory = (message: ProjectMcpToolExecuting): ProjectMcpToolExecuting => {
    const isValidMessage = projectMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProjectMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProjectMcpToolSuccess Validator
 */
export const createProjectMcpToolSuccessFactory = (message: ProjectMcpToolSuccess): ProjectMcpToolSuccess => {
    const isValidMessage = projectMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProjectMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProjectMcpToolError Validator
 */
export const createProjectMcpToolErrorFactory = (message: ProjectMcpToolError): ProjectMcpToolError => {
    const isValidMessage = projectMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProjectMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProjectMcpToolRejected Validator
 */
export const createProjectMcpToolRejectedFactory = (message: ProjectMcpToolRejected): ProjectMcpToolRejected => {
    const isValidMessage = projectMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProjectMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProjectServiceMessage Validator
 */
export const createProjectServiceMessageFactory = (message: ProjectServiceMessage): ProjectServiceMessage => {
    const isValidMessage = projectServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProjectServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive ProjectService Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createProjectServiceFactory = (message: any): ProjectServiceMessage => {
    // Try to validate as generic projectService message first
    try {
        const genericResult = createProjectServiceMessageFactory(message);
        return genericResult;
    } catch (error) {
        // If generic validation fails, try specific validators
        const validators = [
            createGetProjectPathResponseFactory,
            createGetProjectSettingsResponseFactory,
            createGetRepoMapResponseFactory,
            createProjectMcpToolConfirmationFactory,
            createProjectMcpToolExecutingFactory,
            createProjectMcpToolSuccessFactory,
            createProjectMcpToolErrorFactory,
            createProjectMcpToolRejectedFactory
        ];

        for (const validator of validators) {
            try {
                const result = validator(message);
                return result as ProjectServiceMessage;
            } catch (validatorError) {
                // Continue to next validator
                continue;
            }
        }

        logger.error(`No suitable projectService validator found for message: ${JSON.stringify(message)}`);
        return message as ProjectServiceMessage;
    }
};