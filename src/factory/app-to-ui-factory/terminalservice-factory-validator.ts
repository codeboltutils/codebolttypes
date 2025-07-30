import { 
    ExecuteCommandResponse,
    ExecuteCommandRunUntilInterruptResponse,
    ExecuteCommandRunUntilErrorResponse,
    ExecuteCommandWithStreamResponse,
    SendInterruptToTerminalResponse,
    GetTerminalStatusResponse,
    SetTerminalDirectoryResponse,
    GetTerminalHistoryResponse,
    ClearTerminalResponse,
    TerminalMcpToolConfirmation,
    TerminalMcpToolExecuting,
    TerminalMcpToolSuccess,
    TerminalMcpToolError,
    TerminalMcpToolRejected,
    TerminalService,
    executeCommandResponseSchema,
    executeCommandRunUntilInterruptResponseSchema,
    executeCommandRunUntilErrorResponseSchema,
    executeCommandWithStreamResponseSchema,
    sendInterruptToTerminalResponseSchema,
    getTerminalStatusResponseSchema,
    setTerminalDirectoryResponseSchema,
    getTerminalHistoryResponseSchema,
    clearTerminalResponseSchema,
    terminalMcpToolConfirmationSchema,
    terminalMcpToolExecutingSchema,
    terminalMcpToolSuccessSchema,
    terminalMcpToolErrorSchema,
    terminalMcpToolRejectedSchema,
    terminalServiceSchema
} from "../../wstypes/app-to-ui-ws/terminalServiceSchemas";

/**
 * Comprehensive Factory Validators for Terminal Service Operations
 * Based on terminal service patterns and message types
 */

/**
 * Execute Command Response Validator
 */
export const createExecuteCommandResponseFactory = (message: ExecuteCommandResponse): ExecuteCommandResponse => {
    const isValidMessage = executeCommandResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ExecuteCommandResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Execute Command Run Until Interrupt Response Validator
 */
export const createExecuteCommandRunUntilInterruptResponseFactory = (message: ExecuteCommandRunUntilInterruptResponse): ExecuteCommandRunUntilInterruptResponse => {
    const isValidMessage = executeCommandRunUntilInterruptResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ExecuteCommandRunUntilInterruptResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Execute Command Run Until Error Response Validator
 */
export const createExecuteCommandRunUntilErrorResponseFactory = (message: ExecuteCommandRunUntilErrorResponse): ExecuteCommandRunUntilErrorResponse => {
    const isValidMessage = executeCommandRunUntilErrorResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ExecuteCommandRunUntilErrorResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Execute Command With Stream Response Validator
 */
export const createExecuteCommandWithStreamResponseFactory = (message: ExecuteCommandWithStreamResponse): ExecuteCommandWithStreamResponse => {
    const isValidMessage = executeCommandWithStreamResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ExecuteCommandWithStreamResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Send Interrupt To Terminal Response Validator
 */
export const createSendInterruptToTerminalResponseFactory = (message: SendInterruptToTerminalResponse): SendInterruptToTerminalResponse => {
    const isValidMessage = sendInterruptToTerminalResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid SendInterruptToTerminalResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Get Terminal Status Response Validator
 */
export const createGetTerminalStatusResponseFactory = (message: GetTerminalStatusResponse): GetTerminalStatusResponse => {
    const isValidMessage = getTerminalStatusResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetTerminalStatusResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Set Terminal Directory Response Validator
 */
export const createSetTerminalDirectoryResponseFactory = (message: SetTerminalDirectoryResponse): SetTerminalDirectoryResponse => {
    const isValidMessage = setTerminalDirectoryResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid SetTerminalDirectoryResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Get Terminal History Response Validator
 */
export const createGetTerminalHistoryResponseFactory = (message: GetTerminalHistoryResponse): GetTerminalHistoryResponse => {
    const isValidMessage = getTerminalHistoryResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid GetTerminalHistoryResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Clear Terminal Response Validator
 */
export const createClearTerminalResponseFactory = (message: ClearTerminalResponse): ClearTerminalResponse => {
    const isValidMessage = clearTerminalResponseSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ClearTerminalResponse format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Terminal MCP Tool Confirmation Validator
 */
export const createTerminalMcpToolConfirmationFactory = (message: TerminalMcpToolConfirmation): TerminalMcpToolConfirmation => {
    const isValidMessage = terminalMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TerminalMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Terminal MCP Tool Executing Validator
 */
export const createTerminalMcpToolExecutingFactory = (message: TerminalMcpToolExecuting): TerminalMcpToolExecuting => {
    const isValidMessage = terminalMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TerminalMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Terminal MCP Tool Success Validator
 */
export const createTerminalMcpToolSuccessFactory = (message: TerminalMcpToolSuccess): TerminalMcpToolSuccess => {
    const isValidMessage = terminalMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TerminalMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Terminal MCP Tool Error Validator
 */
export const createTerminalMcpToolErrorFactory = (message: TerminalMcpToolError): TerminalMcpToolError => {
    const isValidMessage = terminalMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TerminalMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Terminal MCP Tool Rejected Validator
 */
export const createTerminalMcpToolRejectedFactory = (message: TerminalMcpToolRejected): TerminalMcpToolRejected => {
    const isValidMessage = terminalMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TerminalMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Universal Terminal Service Message Validator
 */
export const createTerminalServiceMessageFactory = (message: TerminalService): TerminalService => {
    const isValidMessage = terminalServiceSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid TerminalService format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive Terminal Service Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createTerminalServiceFactory = (message: any): TerminalService => {
    // Try to validate as generic terminal service message first
    try {
        const genericResult = createTerminalServiceMessageFactory(message);
        return genericResult;
    } catch (error) {
        // If generic validation fails, try specific validators
        const validators = [
            createExecuteCommandResponseFactory,
            createExecuteCommandRunUntilInterruptResponseFactory,
            createExecuteCommandRunUntilErrorResponseFactory,
            createExecuteCommandWithStreamResponseFactory,
            createSendInterruptToTerminalResponseFactory,
            createGetTerminalStatusResponseFactory,
            createSetTerminalDirectoryResponseFactory,
            createGetTerminalHistoryResponseFactory,
            createClearTerminalResponseFactory,
            createTerminalMcpToolConfirmationFactory,
            createTerminalMcpToolExecutingFactory,
            createTerminalMcpToolSuccessFactory,
            createTerminalMcpToolErrorFactory,
            createTerminalMcpToolRejectedFactory
        ];

        for (const validator of validators) {
            try {
                const result = validator(message);
                return result as TerminalService;
            } catch (validatorError) {
                // Continue to next validator
                continue;
            }
        }

        console.log(`No suitable terminal service validator found for message: ${JSON.stringify(message)}`);
        return message as TerminalService;
    }
};