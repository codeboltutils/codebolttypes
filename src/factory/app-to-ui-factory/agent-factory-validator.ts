import { 
    AgentMcpToolConfirmation,
    AgentMcpToolExecuting,
    AgentMcpToolSuccess,
    AgentMcpToolError,
    AgentMcpToolRejected,
    AgentStatusUpdate,
    AgentTaskUpdate,
    AgentProgressUpdate,
    AgentError,
    AgentResourceUpdate,
    AgentCommunication,
    AgentCapabilityUpdate,
    AgentHeartbeat,
    AgentLog,
    AgentMessage,
    agentMcpToolConfirmationSchema,
    agentMcpToolExecutingSchema,
    agentMcpToolSuccessSchema,
    agentMcpToolErrorSchema,
    agentMcpToolRejectedSchema,
    agentStatusUpdateSchema,
    agentTaskUpdateSchema,
    agentProgressUpdateSchema,
    agentErrorSchema,
    agentResourceUpdateSchema,
    agentCommunicationSchema,
    agentCapabilityUpdateSchema,
    agentHeartbeatSchema,
    agentLogSchema,
    agentMessageSchema
} from "../../wstypes/app-to-ui-ws/agentMessageSchemas";

/**
 * Comprehensive Factory Validators for Agent Service Operations
 * Based on agent communication patterns and message types
 */

/**
 * Agent MCP Tool Operation Validators
 */
export const createAgentMcpToolConfirmationFactory = (message: AgentMcpToolConfirmation): AgentMcpToolConfirmation => {
    const isValidMessage = agentMcpToolConfirmationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentMcpToolConfirmation format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createAgentMcpToolExecutingFactory = (message: AgentMcpToolExecuting): AgentMcpToolExecuting => {
    const isValidMessage = agentMcpToolExecutingSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentMcpToolExecuting format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createAgentMcpToolSuccessFactory = (message: AgentMcpToolSuccess): AgentMcpToolSuccess => {
    const isValidMessage = agentMcpToolSuccessSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentMcpToolSuccess format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createAgentMcpToolErrorFactory = (message: AgentMcpToolError): AgentMcpToolError => {
    const isValidMessage = agentMcpToolErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentMcpToolError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

export const createAgentMcpToolRejectedFactory = (message: AgentMcpToolRejected): AgentMcpToolRejected => {
    const isValidMessage = agentMcpToolRejectedSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentMcpToolRejected format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Agent Status Update Validator
 */
export const createAgentStatusUpdateFactory = (message: AgentStatusUpdate): AgentStatusUpdate => {
    const isValidMessage = agentStatusUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentStatusUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Agent Task Update Validator
 */
export const createAgentTaskUpdateFactory = (message: AgentTaskUpdate): AgentTaskUpdate => {
    const isValidMessage = agentTaskUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentTaskUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Agent Progress Update Validator
 */
export const createAgentProgressUpdateFactory = (message: AgentProgressUpdate): AgentProgressUpdate => {
    const isValidMessage = agentProgressUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentProgressUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Agent Error Validator
 */
export const createAgentErrorFactory = (message: AgentError): AgentError => {
    const isValidMessage = agentErrorSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentError format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Agent Resource Update Validator
 */
export const createAgentResourceUpdateFactory = (message: AgentResourceUpdate): AgentResourceUpdate => {
    const isValidMessage = agentResourceUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentResourceUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Agent Communication Validator
 */
export const createAgentCommunicationFactory = (message: AgentCommunication): AgentCommunication => {
    const isValidMessage = agentCommunicationSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentCommunication format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Agent Capability Update Validator
 */
export const createAgentCapabilityUpdateFactory = (message: AgentCapabilityUpdate): AgentCapabilityUpdate => {
    const isValidMessage = agentCapabilityUpdateSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentCapabilityUpdate format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Agent Heartbeat Validator
 */
export const createAgentHeartbeatFactory = (message: AgentHeartbeat): AgentHeartbeat => {
    const isValidMessage = agentHeartbeatSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentHeartbeat format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Agent Log Validator
 */
export const createAgentLogFactory = (message: AgentLog): AgentLog => {
    const isValidMessage = agentLogSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentLog format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Generic Agent Message Validator (Union Type)
 */
export const createAgentMessageFactory = (message: AgentMessage): AgentMessage => {
    const isValidMessage = agentMessageSchema.safeParse(message);
    if (!isValidMessage.success) {
        console.log(`Invalid AgentMessage format: ${JSON.stringify(isValidMessage.error)}`);
        return message;
    }
    return isValidMessage.data;
};

/**
 * Comprehensive Agent Factory Validator
 * Automatically determines the correct validator based on message structure
 */
export const createAgentFactory = (message: any): AgentMessage => {
    // Try to validate as generic agent message first
    const genericResult = createAgentMessageFactory(message);
    if (genericResult) {
        return genericResult;
    }

    // If generic validation fails, try specific validators
    const validators = [
        createAgentMcpToolConfirmationFactory,
        createAgentMcpToolExecutingFactory,
        createAgentMcpToolSuccessFactory,
        createAgentMcpToolErrorFactory,
        createAgentMcpToolRejectedFactory,
        createAgentStatusUpdateFactory,
        createAgentTaskUpdateFactory,
        createAgentProgressUpdateFactory,
        createAgentErrorFactory,
        createAgentResourceUpdateFactory,
        createAgentCommunicationFactory,
        createAgentCapabilityUpdateFactory,
        createAgentHeartbeatFactory,
        createAgentLogFactory
    ];

    for (const validator of validators) {
        try {
            const result = validator(message);
            if (result) {
                return result;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    console.log(`No suitable agent validator found for message: ${JSON.stringify(message)}`);
    return message;
}; 