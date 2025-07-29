import { 
    MessageMcpToolConfirmation,
    MessageMcpToolExecuting,
    MessageMcpToolSuccess,
    MessageMcpToolError,
    MessageMcpToolRejected,
    AgentMessage,
    InfoWithLinkMessage,
    ConfirmationChatMessage,
    CodeViewInEditorMessage,
    CodeConfirmationMessage,
    SendMessageEvent,
    ProcessStartedEvent,
    ProcessStoppedEvent,
    ConfirmationRequestEvent,
    WaitForReplyEvent,
    MessageServiceMessage,
    messageMcpToolConfirmationSchema,
    messageMcpToolExecutingSchema,
    messageMcpToolSuccessSchema,
    messageMcpToolErrorSchema,
    messageMcpToolRejectedSchema,
    agentMessageSchema,
    infoWithLinkMessageSchema,
    confirmationChatMessageSchema,
    codeViewInEditorMessageSchema,
    codeConfirmationMessageSchema,
    sendMessageEventSchema,
    processStartedEventSchema,
    processStoppedEventSchema,
    confirmationRequestEventSchema,
    waitForReplyEventSchema,
    messageServiceMessageSchema
} from "../../../messagesSchemas/app-to-ui/messageServiceSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for Message Service Operations
 * Based on message service patterns and message types
 */

/**
 * Message MCP Tool Operation Validators
 */
export const createMessageMcpToolConfirmationFactory = (message: MessageMcpToolConfirmation): MessageMcpToolConfirmation => {
    const isValidMessage = messageMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid MessageMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMessageMcpToolExecutingFactory = (message: MessageMcpToolExecuting): MessageMcpToolExecuting => {
    const isValidMessage = messageMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid MessageMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMessageMcpToolSuccessFactory = (message: MessageMcpToolSuccess): MessageMcpToolSuccess => {
    const isValidMessage = messageMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid MessageMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMessageMcpToolErrorFactory = (message: MessageMcpToolError): MessageMcpToolError => {
    const isValidMessage = messageMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid MessageMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMessageMcpToolRejectedFactory = (message: MessageMcpToolRejected): MessageMcpToolRejected => {
    const isValidMessage = messageMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid MessageMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Standard Message Type Validators
 */
export const createAgentMessageFactory = (message: AgentMessage): AgentMessage => {
    const isValidMessage = agentMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid AgentMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createInfoWithLinkMessageFactory = (message: InfoWithLinkMessage): InfoWithLinkMessage => {
    const isValidMessage = infoWithLinkMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid InfoWithLinkMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createConfirmationChatMessageFactory = (message: ConfirmationChatMessage): ConfirmationChatMessage => {
    const isValidMessage = confirmationChatMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ConfirmationChatMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createCodeViewInEditorMessageFactory = (message: CodeViewInEditorMessage): CodeViewInEditorMessage => {
    const isValidMessage = codeViewInEditorMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CodeViewInEditorMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createCodeConfirmationMessageFactory = (message: CodeConfirmationMessage): CodeConfirmationMessage => {
    const isValidMessage = codeConfirmationMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CodeConfirmationMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * WebSocket Event Validators
 */
export const createSendMessageEventFactory = (message: SendMessageEvent): SendMessageEvent => {
    const isValidMessage = sendMessageEventSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid SendMessageEvent format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createProcessStartedEventFactory = (message: ProcessStartedEvent): ProcessStartedEvent => {
    const isValidMessage = processStartedEventSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProcessStartedEvent format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createProcessStoppedEventFactory = (message: ProcessStoppedEvent): ProcessStoppedEvent => {
    const isValidMessage = processStoppedEventSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProcessStoppedEvent format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createConfirmationRequestEventFactory = (message: ConfirmationRequestEvent): ConfirmationRequestEvent => {
    const isValidMessage = confirmationRequestEventSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ConfirmationRequestEvent format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createWaitForReplyEventFactory = (message: WaitForReplyEvent): WaitForReplyEvent => {
    const isValidMessage = waitForReplyEventSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid WaitForReplyEvent format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Universal Message Service Message Validator
 */
export const createMessageServiceMessageFactory = (message: MessageServiceMessage): MessageServiceMessage => {
    const isValidMessage = messageServiceMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid MessageServiceMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};