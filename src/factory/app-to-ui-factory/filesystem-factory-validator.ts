import { 
    FileReadConfirmation, 
    FileReadSuccess, 
    FileReadError, 
    FileReadRejected,
    FileWriteConfirmation,
    FileWriteSuccess,
    FileWriteError,
    FileWriteRejected,
    FolderReadConfirmation,
    FolderReadSuccess,
    FolderReadError,
    FolderReadRejected,
    SearchConfirmation,
    SearchInProgress,
    SearchSuccess,
    SearchError,
    SearchRejected,
    EditFileMessage,
    McpToolConfirmation,
    McpToolExecuting,
    McpToolSuccess,
    McpToolError,
    McpToolRejected,
    fileReadConfirmationSchema,
    fileReadSuccessSchema,
    fileReadErrorSchema,
    fileReadRejectedSchema,
    fileWriteConfirmationSchema,
    fileWriteSuccessSchema,
    fileWriteErrorSchema,
    fileWriteRejectedSchema,
    folderReadConfirmationSchema,
    folderReadSuccessSchema,
    folderReadErrorSchema,
    folderReadRejectedSchema,
    searchConfirmationSchema,
    searchInProgressSchema,
    searchSuccessSchema,
    searchErrorSchema,
    searchRejectedSchema,
    editFileMessageSchema,
    mcpToolConfirmationSchema,
    mcpToolExecutingSchema,
    mcpToolSuccessSchema,
    mcpToolErrorSchema,
    mcpToolRejectedSchema
} from "../../../messagesSchemas/app-to-ui/fileMessageSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for FileSystem Service Operations
 * Based on fsService.cli.ts functions and their message patterns
 */

/**
 * File Read Operation Validators
 */
export const createFileReadConfirmationFactory = (message: FileReadConfirmation): FileReadConfirmation => {
    const isValidMessage = fileReadConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid FileReadConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        // Return the original message even if validation fails, with error logged
        return message;
    }
    return isValidMessage.data;
};


export const createFileReadSuccessFactory = (message: FileReadSuccess): FileReadSuccess => {
    const isValidMessage = fileReadSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid FileReadSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createFileReadErrorFactory = (message: FileReadError): FileReadError => {
    const isValidMessage = fileReadErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid FileReadError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createFileReadRejectedFactory = (message: FileReadRejected): FileReadRejected => {
    const isValidMessage = fileReadRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid FileReadRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * File Write Operation Validators
 */
export const createFileWriteConfirmationFactory = (message: FileWriteConfirmation): FileWriteConfirmation => {
    const isValidMessage = fileWriteConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid FileWriteConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};



export const createFileWriteSuccessFactory = (message: FileWriteSuccess): FileWriteSuccess => {
    const isValidMessage = fileWriteSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid FileWriteSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createFileWriteErrorFactory = (message: FileWriteError): FileWriteError => {
    const isValidMessage = fileWriteErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid FileWriteError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createFileWriteRejectedFactory = (message: FileWriteRejected): FileWriteRejected => {
    const isValidMessage = fileWriteRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid FileWriteRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Folder Operation Validators
 */
export const createFolderReadConfirmationFactory = (message: FolderReadConfirmation) : FolderReadConfirmation => {
    const isValidMessage = folderReadConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid FolderReadConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createFolderReadSuccessFactory = (message: FolderReadSuccess) :FolderReadSuccess => {
    const isValidMessage = folderReadSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid FolderReadSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createFolderReadErrorFactory = (message: FolderReadError):FolderReadError => {
    const isValidMessage = folderReadErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid FolderReadError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createFolderReadRejectedFactory = (message: FolderReadRejected):FolderReadRejected => {
    const isValidMessage = folderReadRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid FolderReadRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Search Operation Validators
 */
export const createSearchConfirmationFactory = (message: SearchConfirmation):SearchConfirmation => {
    const isValidMessage = searchConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid SearchConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createSearchInProgressFactory = (message: SearchInProgress): SearchInProgress => {
    const isValidMessage = searchInProgressSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid SearchInProgress format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createSearchSuccessFactory = (message: SearchSuccess): SearchSuccess => {
    const isValidMessage = searchSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid SearchSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createSearchErrorFactory = (message: SearchError): SearchError => {
    const isValidMessage = searchErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid SearchError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createSearchRejectedFactory = (message: SearchRejected): SearchRejected => {
    const isValidMessage = searchRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid SearchRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Edit File Operation Validators
 */
export const createEditFileMessageFactory = (message: EditFileMessage): EditFileMessage => {
    const isValidMessage = editFileMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid EditFileMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * MCP Tool Operation Validators
 */
export const createMcpToolConfirmationFactory = (message: McpToolConfirmation): McpToolConfirmation => {
    const isValidMessage = mcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid McpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMcpToolExecutingFactory = (message: McpToolExecuting): McpToolExecuting => {
    const isValidMessage = mcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid McpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMcpToolSuccessFactory = (message: McpToolSuccess): McpToolSuccess => {
    const isValidMessage = mcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid McpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMcpToolErrorFactory = (message: McpToolError): McpToolError => {
    const isValidMessage = mcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid McpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMcpToolRejectedFactory = (message: McpToolRejected): McpToolRejected => {
    const isValidMessage = mcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid McpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};