import {
    StateUpdateType,
    BaseStateMessage,
    ProjectStateUpdate,
    AgentStateUpdate,
    ApplicationStateUpdate,
    UiStateUpdate,
    ConnectionStateUpdate,
    PermissionStateUpdate,
    ConfigurationStateUpdate,
    FileStateUpdate,
    StateMessage,
    stateUpdateTypeSchema,
    baseStateMessageSchema,
    projectStateUpdateSchema,
    agentStateUpdateSchema,
    applicationStateUpdateSchema,
    uiStateUpdateSchema,
    connectionStateUpdateSchema,
    permissionStateUpdateSchema,
    configurationStateUpdateSchema,
    fileStateUpdateSchema,
    stateMessageSchema
} from "../../wstypes/app-to-ui-ws/stateMessageSchemas";

/**
 * Comprehensive Factory Validators for StateMessage Service Operations
 * Based on stateMessage patterns and message types
 */

/**
 * StateUpdateType Validator
 */
export const createStateUpdateTypeFactory = (message: StateUpdateType): StateUpdateType => {
    const isValidMessage = stateUpdateTypeSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid StateUpdateType format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * BaseStateMessage Validator
 */
export const createBaseStateMessageFactory = (message: BaseStateMessage): BaseStateMessage => {
    const isValidMessage = baseStateMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid BaseStateMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ProjectStateUpdate Validator
 */
export const createProjectStateUpdateFactory = (message: ProjectStateUpdate): ProjectStateUpdate => {
    const isValidMessage = projectStateUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ProjectStateUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * AgentStateUpdate Validator
 */
export const createAgentStateUpdateFactory = (message: AgentStateUpdate): AgentStateUpdate => {
    const isValidMessage = agentStateUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentStateUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ApplicationStateUpdate Validator
 */
export const createApplicationStateUpdateFactory = (message: ApplicationStateUpdate): ApplicationStateUpdate => {
    const isValidMessage = applicationStateUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ApplicationStateUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * UiStateUpdate Validator
 */
export const createUiStateUpdateFactory = (message: UiStateUpdate): UiStateUpdate => {
    const isValidMessage = uiStateUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid UiStateUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ConnectionStateUpdate Validator
 */
export const createConnectionStateUpdateFactory = (message: ConnectionStateUpdate): ConnectionStateUpdate => {
    const isValidMessage = connectionStateUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ConnectionStateUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * PermissionStateUpdate Validator
 */
export const createPermissionStateUpdateFactory = (message: PermissionStateUpdate): PermissionStateUpdate => {
    const isValidMessage = permissionStateUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid PermissionStateUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * ConfigurationStateUpdate Validator
 */
export const createConfigurationStateUpdateFactory = (message: ConfigurationStateUpdate): ConfigurationStateUpdate => {
    const isValidMessage = configurationStateUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid ConfigurationStateUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * FileStateUpdate Validator
 */
export const createFileStateUpdateFactory = (message: FileStateUpdate): FileStateUpdate => {
    const isValidMessage = fileStateUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid FileStateUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * StateMessage Validator
 */
export const createStateMessageValidatorFactory = (message: StateMessage): StateMessage => {
    const isValidMessage = stateMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid StateMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Generic StateMessage Message Validator (Union Type)
 */
export const createStateMessageUnionFactory = (message: StateMessage): StateMessage => {
    const isValidMessage = stateMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid StateMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive StateMessage Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createStateMessageFactory = (message: any): StateMessage => {
    // Try to validate as generic stateMessage message first
    try {
        const genericResult = createStateMessageUnionFactory(message);
        return genericResult;
    } catch (error) {
        // If generic validation fails, try specific validators
        const validators = [
            createStateUpdateTypeFactory,
            createBaseStateMessageFactory,
            createProjectStateUpdateFactory,
            createAgentStateUpdateFactory,
            createApplicationStateUpdateFactory,
            createUiStateUpdateFactory,
            createConnectionStateUpdateFactory,
            createPermissionStateUpdateFactory,
            createConfigurationStateUpdateFactory,
            createFileStateUpdateFactory,
            createStateMessageValidatorFactory
        ];

        for (const validator of validators) {
            try {
                const result = validator(message);
                if (result) {
                    return result as StateMessage;
                }
            } catch (validatorError) {
                // Continue to next validator
                continue;
            }
        }

        console.log(`No suitable stateMessage validator found for message: ${JSON.stringify(message)}`);
        return message as StateMessage;
    }
};