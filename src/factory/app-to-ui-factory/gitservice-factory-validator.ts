import { 
    GitInitResponse,
    AddResponse,
    GitCommitResponse,
    GitPushResponse,
    GitPullResponse,
    GitCheckoutResponse,
    GitBranchResponse,
    GitLogsResponse,
    GitDiffResponse,
    GitStatusResponse,
    GitCloneResponse,
    GitMcpToolConfirmation,
    GitMcpToolExecuting,
    GitMcpToolSuccess,
    GitMcpToolError,
    GitMcpToolRejected,
    GitServiceMessage,
    gitInitResponseSchema,
    addResponseSchema,
    gitCommitResponseSchema,
    gitPushResponseSchema,
    gitPullResponseSchema,
    gitCheckoutResponseSchema,
    gitBranchResponseSchema,
    gitLogsResponseSchema,
    gitDiffResponseSchema,
    gitStatusResponseSchema,
    gitCloneResponseSchema,
    gitMcpToolConfirmationSchema,
    gitMcpToolExecutingSchema,
    gitMcpToolSuccessSchema,
    gitMcpToolErrorSchema,
    gitMcpToolRejectedSchema,
    gitServiceMessageSchema
} from "../../wstypes/app-to-ui-ws/gitServiceSchemas";

/**
 * Comprehensive Factory Validators for GitService Service Operations
 * Based on gitService patterns and message types
 */

/**
 * GitInitResponse Validator
 */
export const createGitInitResponseFactory = (message: GitInitResponse): GitInitResponse => {
    const isValidMessage = gitInitResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitInitResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * AddResponse Validator
 */
export const createAddResponseFactory = (message: AddResponse): AddResponse => {
    const isValidMessage = addResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AddResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitCommitResponse Validator
 */
export const createGitCommitResponseFactory = (message: GitCommitResponse): GitCommitResponse => {
    const isValidMessage = gitCommitResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitCommitResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitPushResponse Validator
 */
export const createGitPushResponseFactory = (message: GitPushResponse): GitPushResponse => {
    const isValidMessage = gitPushResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitPushResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitPullResponse Validator
 */
export const createGitPullResponseFactory = (message: GitPullResponse): GitPullResponse => {
    const isValidMessage = gitPullResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitPullResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitCheckoutResponse Validator
 */
export const createGitCheckoutResponseFactory = (message: GitCheckoutResponse): GitCheckoutResponse => {
    const isValidMessage = gitCheckoutResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitCheckoutResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitBranchResponse Validator
 */
export const createGitBranchResponseFactory = (message: GitBranchResponse): GitBranchResponse => {
    const isValidMessage = gitBranchResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitBranchResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitLogsResponse Validator
 */
export const createGitLogsResponseFactory = (message: GitLogsResponse): GitLogsResponse => {
    const isValidMessage = gitLogsResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitLogsResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitDiffResponse Validator
 */
export const createGitDiffResponseFactory = (message: GitDiffResponse): GitDiffResponse => {
    const isValidMessage = gitDiffResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitDiffResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitStatusResponse Validator
 */
export const createGitStatusResponseFactory = (message: GitStatusResponse): GitStatusResponse => {
    const isValidMessage = gitStatusResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitStatusResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitCloneResponse Validator
 */
export const createGitCloneResponseFactory = (message: GitCloneResponse): GitCloneResponse => {
    const isValidMessage = gitCloneResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitCloneResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitMcpToolConfirmation Validator
 */
export const createGitMcpToolConfirmationFactory = (message: GitMcpToolConfirmation): GitMcpToolConfirmation => {
    const isValidMessage = gitMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitMcpToolExecuting Validator
 */
export const createGitMcpToolExecutingFactory = (message: GitMcpToolExecuting): GitMcpToolExecuting => {
    const isValidMessage = gitMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitMcpToolSuccess Validator
 */
export const createGitMcpToolSuccessFactory = (message: GitMcpToolSuccess): GitMcpToolSuccess => {
    const isValidMessage = gitMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitMcpToolError Validator
 */
export const createGitMcpToolErrorFactory = (message: GitMcpToolError): GitMcpToolError => {
    const isValidMessage = gitMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GitMcpToolRejected Validator
 */
export const createGitMcpToolRejectedFactory = (message: GitMcpToolRejected): GitMcpToolRejected => {
    const isValidMessage = gitMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Generic GitService Message Validator (Union Type)
 */
export const createGitServiceMessageFactory = (message: GitServiceMessage): GitServiceMessage => {
    const isValidMessage = gitServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GitServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive GitService Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createGitServiceFactory = (message: any): GitServiceMessage => {
    // Try to validate as generic gitService message first
    const genericResult = createGitServiceMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createGitInitResponseFactory,
        createAddResponseFactory,
        createGitCommitResponseFactory,
        createGitPushResponseFactory,
        createGitPullResponseFactory,
        createGitCheckoutResponseFactory,
        createGitBranchResponseFactory,
        createGitLogsResponseFactory,
        createGitDiffResponseFactory,
        createGitStatusResponseFactory,
        createGitCloneResponseFactory,
        createGitMcpToolConfirmationFactory,
        createGitMcpToolExecutingFactory,
        createGitMcpToolSuccessFactory,
        createGitMcpToolErrorFactory,
        createGitMcpToolRejectedFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message);
            if (result) {
                return result as GitServiceMessage;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    console.log(`No suitable gitService validator found for message: ${JSON.stringify(message)}`);
    return message;
};