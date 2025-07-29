import { 
    AiRequestStateEnum,
    BaseResponseMessage,
    SuccessResponse,
    ErrorResponse,
    CreateFileResponse,
    ReadFileResponse,
    UpdateFileResponse,
    DeleteFileResponse,
    FileListResponse,
    GitInitResponse,
    GitCommitResponse,
    GitPushResponse,
    GitStatusResponse,
    GitLogsResponse,
    GitDiffResponse,
    GetEnabledToolBoxesResponse,
    GetAvailableToolBoxesResponse,
    GetLocalToolBoxesResponse,
    ExecuteToolResponse,
    AddTaskResponse,
    GetAppStateResponse,
    CrawlerResponse,
    ResponseMessage,
    aiRequestStateEnumSchema,
    baseResponseMessageSchema,
    successResponseSchema,
    errorResponseSchema,
    createFileResponseSchema,
    readFileResponseSchema,
    updateFileResponseSchema,
    deleteFileResponseSchema,
    fileListResponseSchema,
    gitInitResponseSchema,
    gitCommitResponseSchema,
    gitPushResponseSchema,
    gitStatusResponseSchema,
    gitLogsResponseSchema,
    gitDiffResponseSchema,
    getEnabledToolBoxesResponseSchema,
    getAvailableToolBoxesResponseSchema,
    getLocalToolBoxesResponseSchema,
    executeToolResponseSchema,
    addTaskResponseSchema,
    getAppStateResponseSchema,
    crawlerResponseSchema,
    responseMessageSchema
} from "../../wstypes/app-to-ui-ws/responseMessageSchemas";

/**
 * Comprehensive Factory Validators for ResponseMessage Service Operations
 * Based on responseMessage patterns and message types
 */

/**
 * AiRequestStateEnum Validator
 */
export const createAiRequestStateEnumFactory = (message: AiRequestStateEnum): AiRequestStateEnum => {
    const isValidMessage = aiRequestStateEnumSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AiRequestStateEnum format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * BaseResponseMessage Validator
 */
export const createBaseResponseMessageFactory = (message: BaseResponseMessage): BaseResponseMessage => {
    const isValidMessage = baseResponseMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BaseResponseMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * SuccessResponse Validator
 */
export const createSuccessResponseFactory = (message: SuccessResponse): SuccessResponse => {
    const isValidMessage = successResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid SuccessResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ErrorResponse Validator
 */
export const createErrorResponseFactory = (message: ErrorResponse): ErrorResponse => {
    const isValidMessage = errorResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ErrorResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CreateFileResponse Validator
 */
export const createCreateFileResponseFactory = (message: CreateFileResponse): CreateFileResponse => {
    const isValidMessage = createFileResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CreateFileResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ReadFileResponse Validator
 */
export const createReadFileResponseFactory = (message: ReadFileResponse): ReadFileResponse => {
    const isValidMessage = readFileResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ReadFileResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * UpdateFileResponse Validator
 */
export const createUpdateFileResponseFactory = (message: UpdateFileResponse): UpdateFileResponse => {
    const isValidMessage = updateFileResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid UpdateFileResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * DeleteFileResponse Validator
 */
export const createDeleteFileResponseFactory = (message: DeleteFileResponse): DeleteFileResponse => {
    const isValidMessage = deleteFileResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid DeleteFileResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * FileListResponse Validator
 */
export const createFileListResponseFactory = (message: FileListResponse): FileListResponse => {
    const isValidMessage = fileListResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid FileListResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

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
 * GetEnabledToolBoxesResponse Validator
 */
export const createGetEnabledToolBoxesResponseFactory = (message: GetEnabledToolBoxesResponse): GetEnabledToolBoxesResponse => {
    const isValidMessage = getEnabledToolBoxesResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetEnabledToolBoxesResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetAvailableToolBoxesResponse Validator
 */
export const createGetAvailableToolBoxesResponseFactory = (message: GetAvailableToolBoxesResponse): GetAvailableToolBoxesResponse => {
    const isValidMessage = getAvailableToolBoxesResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetAvailableToolBoxesResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetLocalToolBoxesResponse Validator
 */
export const createGetLocalToolBoxesResponseFactory = (message: GetLocalToolBoxesResponse): GetLocalToolBoxesResponse => {
    const isValidMessage = getLocalToolBoxesResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetLocalToolBoxesResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ExecuteToolResponse Validator
 */
export const createExecuteToolResponseFactory = (message: ExecuteToolResponse): ExecuteToolResponse => {
    const isValidMessage = executeToolResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ExecuteToolResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * AddTaskResponse Validator
 */
export const createAddTaskResponseFactory = (message: AddTaskResponse): AddTaskResponse => {
    const isValidMessage = addTaskResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AddTaskResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetAppStateResponse Validator
 */
export const createGetAppStateResponseFactory = (message: GetAppStateResponse): GetAppStateResponse => {
    const isValidMessage = getAppStateResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetAppStateResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * CrawlerResponse Validator
 */
export const createCrawlerResponseFactory = (message: CrawlerResponse): CrawlerResponse => {
    const isValidMessage = crawlerResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid CrawlerResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ResponseMessage Validator
 */
export const createResponseMessageFactory = (message: ResponseMessage): ResponseMessage => {
    const isValidMessage = responseMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ResponseMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive ResponseMessage Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createResponseFactory = (message: any): ResponseMessage => {
    // Try to validate as generic responseMessage message first
    try {
        const genericResult = createResponseMessageFactory(message);
        return genericResult;
    } catch (error) {
        // If generic validation fails, try specific validators
        const validators = [
            createAiRequestStateEnumFactory,
            createBaseResponseMessageFactory,
            createSuccessResponseFactory,
            createErrorResponseFactory,
            createCreateFileResponseFactory,
            createReadFileResponseFactory,
            createUpdateFileResponseFactory,
            createDeleteFileResponseFactory,
            createFileListResponseFactory,
            createGitInitResponseFactory,
            createGitCommitResponseFactory,
            createGitPushResponseFactory,
            createGitStatusResponseFactory,
            createGitLogsResponseFactory,
            createGitDiffResponseFactory,
            createGetEnabledToolBoxesResponseFactory,
            createGetAvailableToolBoxesResponseFactory,
            createGetLocalToolBoxesResponseFactory,
            createExecuteToolResponseFactory,
            createAddTaskResponseFactory,
            createGetAppStateResponseFactory,
            createCrawlerResponseFactory
        ];

        for (const validator of validators) {
            try {
                const result = validator(message);
                return result as ResponseMessage;
            } catch (validatorError) {
                // Continue to next validator
                continue;
            }
        }

        console.log(`No suitable responseMessage validator found for message: ${JSON.stringify(message)}`);
        return message as ResponseMessage;
    }
};