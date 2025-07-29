import { 
    McpToolConfirmation,
    McpToolExecuting,
    McpToolSuccess,
    McpToolError,
    McpToolRejected,
    GetEnabledToolBoxesResponse,
    GetAvailableToolBoxesResponse,
    GetLocalToolBoxesResponse,
    SearchAvailableToolBoxesResponse,
    ListToolsFromToolBoxesResponse,
    ConfigureToolBoxResponse,
    GetToolsResponse,
    ExecuteToolResponse,
    GetMcpToolsResponse,
    GetMcpListResponse,
    GetAllMCPToolsResponse,
    GetEnabledMCPSResponse,
    ConfigureMCPToolResponse,
    McpErrorResponse,
    McpStartupErrorMessage,
    McpServiceMessage,
    mcpToolConfirmationSchema,
    mcpToolExecutingSchema,
    mcpToolSuccessSchema,
    mcpToolErrorSchema,
    mcpToolRejectedSchema,
    getEnabledToolBoxesResponseSchema,
    getAvailableToolBoxesResponseSchema,
    getLocalToolBoxesResponseSchema,
    searchAvailableToolBoxesResponseSchema,
    listToolsFromToolBoxesResponseSchema,
    configureToolBoxResponseSchema,
    getToolsResponseSchema,
    executeToolResponseSchema,
    getMcpToolsResponseSchema,
    getMcpListResponseSchema,
    getAllMCPToolsResponseSchema,
    getEnabledMCPSResponseSchema,
    configureMCPToolResponseSchema,
    mcpErrorResponseSchema,
    mcpStartupErrorMessageSchema,
    mcpServiceMessageSchema
} from "../../wstypes/app-to-ui-ws/mcpServiceSchemas";

/**
 * Comprehensive Factory Validators for McpService Service Operations
 * Based on mcpService patterns and message types
 */

/**
 * MCP Tool Operation Validators
 */
export const createMcpToolConfirmationFactory = (message: McpToolConfirmation): McpToolConfirmation => {
    const isValidMessage = mcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid McpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMcpToolExecutingFactory = (message: McpToolExecuting): McpToolExecuting => {
    const isValidMessage = mcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid McpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMcpToolSuccessFactory = (message: McpToolSuccess): McpToolSuccess => {
    const isValidMessage = mcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid McpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMcpToolErrorFactory = (message: McpToolError): McpToolError => {
    const isValidMessage = mcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid McpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMcpToolRejectedFactory = (message: McpToolRejected): McpToolRejected => {
    const isValidMessage = mcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid McpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
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
 * SearchAvailableToolBoxesResponse Validator
 */
export const createSearchAvailableToolBoxesResponseFactory = (message: SearchAvailableToolBoxesResponse): SearchAvailableToolBoxesResponse => {
    const isValidMessage = searchAvailableToolBoxesResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid SearchAvailableToolBoxesResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ListToolsFromToolBoxesResponse Validator
 */
export const createListToolsFromToolBoxesResponseFactory = (message: ListToolsFromToolBoxesResponse): ListToolsFromToolBoxesResponse => {
    const isValidMessage = listToolsFromToolBoxesResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ListToolsFromToolBoxesResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ConfigureToolBoxResponse Validator
 */
export const createConfigureToolBoxResponseFactory = (message: ConfigureToolBoxResponse): ConfigureToolBoxResponse => {
    const isValidMessage = configureToolBoxResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ConfigureToolBoxResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetToolsResponse Validator
 */
export const createGetToolsResponseFactory = (message: GetToolsResponse): GetToolsResponse => {
    const isValidMessage = getToolsResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetToolsResponse format: ${JSON.stringify(isValidMessage.error)}`);
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
 * GetMcpToolsResponse Validator
 */
export const createGetMcpToolsResponseFactory = (message: GetMcpToolsResponse): GetMcpToolsResponse => {
    const isValidMessage = getMcpToolsResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetMcpToolsResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetMcpListResponse Validator
 */
export const createGetMcpListResponseFactory = (message: GetMcpListResponse): GetMcpListResponse => {
    const isValidMessage = getMcpListResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetMcpListResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetAllMCPToolsResponse Validator
 */
export const createGetAllMCPToolsResponseFactory = (message: GetAllMCPToolsResponse): GetAllMCPToolsResponse => {
    const isValidMessage = getAllMCPToolsResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetAllMCPToolsResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * GetEnabledMCPSResponse Validator
 */
export const createGetEnabledMCPSResponseFactory = (message: GetEnabledMCPSResponse): GetEnabledMCPSResponse => {
    const isValidMessage = getEnabledMCPSResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetEnabledMCPSResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ConfigureMCPToolResponse Validator
 */
export const createConfigureMCPToolResponseFactory = (message: ConfigureMCPToolResponse): ConfigureMCPToolResponse => {
    const isValidMessage = configureMCPToolResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ConfigureMCPToolResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * McpErrorResponse Validator
 */
export const createMcpErrorResponseFactory = (message: McpErrorResponse): McpErrorResponse => {
    const isValidMessage = mcpErrorResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid McpErrorResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * McpStartupErrorMessage Validator
 */
export const createMcpStartupErrorMessageFactory = (message: McpStartupErrorMessage): McpStartupErrorMessage => {
    const isValidMessage = mcpStartupErrorMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid McpStartupErrorMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Generic McpService Message Validator (Union Type)
 */
export const createMcpServiceMessageFactory = (message: McpServiceMessage): McpServiceMessage => {
    const isValidMessage = mcpServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid McpServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive McpService Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createMcpServiceFactory = (message: any): McpServiceMessage => {
    // Try to validate as generic mcpService message first
    const genericResult = createMcpServiceMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createMcpToolConfirmationFactory,
        createMcpToolExecutingFactory,
        createMcpToolSuccessFactory,
        createMcpToolErrorFactory,
        createMcpToolRejectedFactory,
        createGetEnabledToolBoxesResponseFactory,
        createGetAvailableToolBoxesResponseFactory,
        createGetLocalToolBoxesResponseFactory,
        createSearchAvailableToolBoxesResponseFactory,
        createListToolsFromToolBoxesResponseFactory,
        createConfigureToolBoxResponseFactory,
        createGetToolsResponseFactory,
        createExecuteToolResponseFactory,
        createGetMcpToolsResponseFactory,
        createGetMcpListResponseFactory,
        createGetAllMCPToolsResponseFactory,
        createGetEnabledMCPSResponseFactory,
        createConfigureMCPToolResponseFactory,
        createMcpStartupErrorMessageFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message);
            if (result) {
                return result as McpServiceMessage;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    console.log(`No suitable mcpService validator found for message: ${JSON.stringify(message)}`);
    return message;
};