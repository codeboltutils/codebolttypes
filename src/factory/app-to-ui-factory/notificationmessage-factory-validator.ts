import { 
    NotificationMcpToolConfirmation,
    NotificationMcpToolExecuting,
    NotificationMcpToolSuccess,
    NotificationMcpToolError,
    NotificationMcpToolRejected,
    NotificationType,
    NotificationPriority,
    BaseNotificationMessage,
    SimpleNotification,
    RichNotification,
    ProgressNotification,
    ToastNotification,
    SystemStatusNotification,
    AgentNotification,
    FileOperationNotification,
    BuildNotification,
    ConnectionNotification,
    UpdateNotification,
    AiRequestNotification,
    NotificationErrorResponse,
    NotificationMessage,
    notificationMcpToolConfirmationSchema,
    notificationMcpToolExecutingSchema,
    notificationMcpToolSuccessSchema,
    notificationMcpToolErrorSchema,
    notificationMcpToolRejectedSchema,
    notificationTypeSchema,
    notificationPrioritySchema,
    baseNotificationMessageSchema,
    simpleNotificationSchema,
    richNotificationSchema,
    progressNotificationSchema,
    toastNotificationSchema,
    systemStatusNotificationSchema,
    agentNotificationSchema,
    fileOperationNotificationSchema,
    buildNotificationSchema,
    connectionNotificationSchema,
    updateNotificationSchema,
    aiRequestNotificationSchema,
    notificationErrorResponseSchema,
    notificationMessageSchema
} from "../../wstypes/app-to-ui-ws/notificationMessageSchemas";

/**
 * Comprehensive Factory Validators for Notification Service Operations
 * Based on notification patterns and message types
 */

/**
 * Notification MCP Tool Operation Validators
 */
export const createNotificationMcpToolConfirmationFactory = (message: NotificationMcpToolConfirmation): NotificationMcpToolConfirmation => {
    const isValidMessage = notificationMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid NotificationMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createNotificationMcpToolExecutingFactory = (message: NotificationMcpToolExecuting): NotificationMcpToolExecuting => {
    const isValidMessage = notificationMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid NotificationMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createNotificationMcpToolSuccessFactory = (message: NotificationMcpToolSuccess): NotificationMcpToolSuccess => {
    const isValidMessage = notificationMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid NotificationMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createNotificationMcpToolErrorFactory = (message: NotificationMcpToolError): NotificationMcpToolError => {
    const isValidMessage = notificationMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid NotificationMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createNotificationMcpToolRejectedFactory = (message: NotificationMcpToolRejected): NotificationMcpToolRejected => {
    const isValidMessage = notificationMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid NotificationMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * NotificationType Validator
 */
export const createNotificationTypeFactory = (message: NotificationType): NotificationType => {
    const isValidMessage = notificationTypeSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid NotificationType format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * NotificationPriority Validator
 */
export const createNotificationPriorityFactory = (message: NotificationPriority): NotificationPriority => {
    const isValidMessage = notificationPrioritySchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid NotificationPriority format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * BaseNotificationMessage Validator
 */
export const createBaseNotificationMessageFactory = (message: BaseNotificationMessage): BaseNotificationMessage => {
    const isValidMessage = baseNotificationMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BaseNotificationMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * SimpleNotification Validator
 */
export const createSimpleNotificationFactory = (message: SimpleNotification): SimpleNotification => {
    const isValidMessage = simpleNotificationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid SimpleNotification format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * RichNotification Validator
 */
export const createRichNotificationFactory = (message: RichNotification): RichNotification => {
    const isValidMessage = richNotificationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid RichNotification format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProgressNotification Validator
 */
export const createProgressNotificationFactory = (message: ProgressNotification): ProgressNotification => {
    const isValidMessage = progressNotificationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ProgressNotification format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ToastNotification Validator
 */
export const createToastNotificationFactory = (message: ToastNotification): ToastNotification => {
    const isValidMessage = toastNotificationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ToastNotification format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * SystemStatusNotification Validator
 */
export const createSystemStatusNotificationFactory = (message: SystemStatusNotification): SystemStatusNotification => {
    const isValidMessage = systemStatusNotificationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid SystemStatusNotification format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * AgentNotification Validator
 */
export const createAgentNotificationFactory = (message: AgentNotification): AgentNotification => {
    const isValidMessage = agentNotificationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentNotification format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * FileOperationNotification Validator
 */
export const createFileOperationNotificationFactory = (message: FileOperationNotification): FileOperationNotification => {
    const isValidMessage = fileOperationNotificationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid FileOperationNotification format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * BuildNotification Validator
 */
export const createBuildNotificationFactory = (message: BuildNotification): BuildNotification => {
    const isValidMessage = buildNotificationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BuildNotification format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ConnectionNotification Validator
 */
export const createConnectionNotificationFactory = (message: ConnectionNotification): ConnectionNotification => {
    const isValidMessage = connectionNotificationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ConnectionNotification format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * UpdateNotification Validator
 */
export const createUpdateNotificationFactory = (message: UpdateNotification): UpdateNotification => {
    const isValidMessage = updateNotificationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid UpdateNotification format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * AiRequestNotification Validator
 */
export const createAiRequestNotificationFactory = (message: AiRequestNotification): AiRequestNotification => {
    const isValidMessage = aiRequestNotificationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AiRequestNotification format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Generic NotificationMessage Message Validator (Union Type)
 */
export const createNotificationMessageFactory = (message: NotificationMessage): NotificationMessage => {
    const isValidMessage = notificationMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid NotificationMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive NotificationMessage Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createNotificationFactory = (message: any): NotificationMessage => {
    // Try to validate as generic notification message first
    const genericResult = createNotificationMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createNotificationMcpToolConfirmationFactory,
        createNotificationMcpToolExecutingFactory,
        createNotificationMcpToolSuccessFactory,
        createNotificationMcpToolErrorFactory,
        createNotificationMcpToolRejectedFactory,
        createSimpleNotificationFactory,
        createRichNotificationFactory,
        createProgressNotificationFactory,
        createToastNotificationFactory,
        createSystemStatusNotificationFactory,
        createAgentNotificationFactory,
        createFileOperationNotificationFactory,
        createBuildNotificationFactory,
        createConnectionNotificationFactory,
        createUpdateNotificationFactory,
        createAiRequestNotificationFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message as any);
            if (result) {
                return result as NotificationMessage;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    console.log(`No suitable notification validator found for message: ${JSON.stringify(message)}`);
    return message;
};