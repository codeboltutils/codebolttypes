import {
    BaseMessage,
    ButtonOption,
    MessagePayload,
    MessageData,
    CoreMessage,
    SendMessage,
    ProcessStarted,
    ProcessStopped,
    WaitForReply,
    ConfirmationRequest,
    InfoWithLink,
    CodeViewInEditor,
    CodeConfirmation,
    AllCoreMessages,
    baseMessageSchema,
    buttonOptionSchema,
    messagePayloadSchema,
    messageDataSchema,
    coreMessageSchema,
    sendMessageSchema,
    processStartedSchema,
    processStoppedSchema,
    waitForReplySchema,
    confirmationRequestSchema,
    infoWithLinkSchema,
    codeViewInEditorSchema,
    codeConfirmationSchema,
    allCoreMessagesSchema
} from "../../../messagesSchemas/app-to-ui/coreMessageSchemas";
import logger from "../../utils/logger";

/**
 * Comprehensive Factory Validators for Core Message Operations
 * Based on core message patterns and communication types
 */

/**
 * Base Schema Validators
 */
export const createBaseMessageFactory = (message: BaseMessage): BaseMessage => {
    const isValidMessage = baseMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid BaseMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createButtonOptionFactory = (message: ButtonOption): ButtonOption => {
    const isValidMessage = buttonOptionSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ButtonOption format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMessagePayloadFactory = (message: MessagePayload): MessagePayload => {
    const isValidMessage = messagePayloadSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid MessagePayload format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createMessageDataFactory = (message: MessageData): MessageData => {
    const isValidMessage = messageDataSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid MessageData format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Core Message Validators
 */
export const createCoreMessageFactory = (message: CoreMessage): CoreMessage => {
    const isValidMessage = coreMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CoreMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createSendMessageFactory = (message: SendMessage): SendMessage => {
    const isValidMessage = sendMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid SendMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createProcessStartedFactory = (message: ProcessStarted): ProcessStarted => {
    const isValidMessage = processStartedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProcessStarted format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createProcessStoppedFactory = (message: ProcessStopped): ProcessStopped => {
    const isValidMessage = processStoppedSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ProcessStopped format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createWaitForReplyFactory = (message: WaitForReply): WaitForReply => {
    const isValidMessage = waitForReplySchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid WaitForReply format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createConfirmationRequestFactory = (message: ConfirmationRequest): ConfirmationRequest => {
    const isValidMessage = confirmationRequestSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid ConfirmationRequest format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createInfoWithLinkFactory = (message: InfoWithLink): InfoWithLink => {
    const isValidMessage = infoWithLinkSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid InfoWithLink format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createCodeViewInEditorFactory = (message: CodeViewInEditor): CodeViewInEditor => {
    const isValidMessage = codeViewInEditorSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CodeViewInEditor format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createCodeConfirmationFactory = (message: CodeConfirmation): CodeConfirmation => {
    const isValidMessage = codeConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid CodeConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Generic All Core Messages Validator (Union Type)
 */
export const createAllCoreMessagesFactory = (message: AllCoreMessages): AllCoreMessages => {
    const isValidMessage = allCoreMessagesSchema.safeParse(message);
    if (!isValidMessage.success) {
        logger.error(`Invalid AllCoreMessages format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive Core Message Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createCoreFactory = (message: any): AllCoreMessages => {
    // Try to validate as generic core message first
    try {
        const genericResult = createAllCoreMessagesFactory(message);
        return genericResult;
    } catch (error) {
        // If generic validation fails, try specific validators
        const validators = [
            createSendMessageFactory,
            createProcessStartedFactory,
            createProcessStoppedFactory,
            createWaitForReplyFactory,
            createConfirmationRequestFactory,
            createInfoWithLinkFactory,
            createCodeViewInEditorFactory,
            createCodeConfirmationFactory,
            createCoreMessageFactory
        ];

        for (const validator of validators) {
            try {
                const result = validator(message);
                return result as AllCoreMessages;
            } catch (validatorError) {
                // Continue to next validator
                continue;
            }
        }

        logger.error(`No suitable core message validator found for message: ${JSON.stringify(message)}`);
        return message as AllCoreMessages;
    }
}; 