import { z } from 'zod';

/**
 * Agent Service Response Schemas
 * Messages sent from agent CLI service back to agents
 */

// Base error response schema
export const AgentServiceErrorResponseSchema = z.object({
    type: z.literal('error'),
    message: z.string()
});

// Agent function parameter schema for findAgent response (with strict requirements)
const AgentFunctionParametersStrictSchema = z.object({
    type: z.literal('object'),
    properties: z.object({
        task: z.object({
            type: z.literal('string'),
            description: z.string()
        })
    }),
    required: z.array(z.literal('task')),
    additionalProperties: z.literal(false)
});

// Agent function parameter schema for listAgents response (without additionalProperties)
const AgentFunctionParametersBasicSchema = z.object({
    type: z.literal('object'),
    properties: z.object({
        task: z.object({
            type: z.literal('string'),
            description: z.string()
        })
    }),
    required: z.array(z.literal('task'))
});

// Agent function schema for findAgent response (with strict: true)
const AgentFunctionStrictSchema = z.object({
    name: z.string(),
    description: z.string(),
    parameters: AgentFunctionParametersStrictSchema,
    strict: z.literal(true)
});

// Agent function schema for listAgents response (without strict)
const AgentFunctionBasicSchema = z.object({
    name: z.string(),
    description: z.string(),
    parameters: AgentFunctionParametersBasicSchema
});

// Agent tool schema for findAgent response (with strict requirements)
const AgentToolStrictSchema = z.object({
    type: z.literal('function'),
    function: AgentFunctionStrictSchema
});

// Agent tool schema for listAgents response (basic)
const AgentToolBasicSchema = z.object({
    type: z.literal('function'),
    function: AgentFunctionBasicSchema
});

// Find agent by task response schema
export const FindAgentByTaskResponseSchema = z.object({
    type: z.literal('findAgentByTaskResponse'),
    agents: z.array(AgentToolStrictSchema)
});

// List agents response schema
export const ListAgentsResponseSchema = z.object({
    type: z.literal('listAgentsResponse'),
    agents: z.array(AgentToolBasicSchema)
});

// Agent detail schema
const AgentDetailSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    capabilities: z.array(z.string()),
    isLocal: z.boolean(),
    version: z.string(),
    status: z.string(),
    unique_id: z.string()
});

// Agents detail response schema (success)
export const AgentsDetailResponseSuccessSchema = z.object({
    type: z.literal('agentsDetailResponse'),
    messageId: z.string(),
    threadId: z.string(),
    success: z.literal(true),
    payload: z.object({
        agents: z.array(AgentDetailSchema)
    })
});

// Agents detail response schema (error)
export const AgentsDetailResponseErrorSchema = z.object({
    type: z.literal('agentsDetailResponse'),
    messageId: z.string(),
    threadId: z.string(),
    success: z.literal(false),
    error: z.string()
});

// Union type for agents detail response
export const AgentsDetailResponseSchema = z.union([
    AgentsDetailResponseSuccessSchema,
    AgentsDetailResponseErrorSchema
]);

// Union of all agent service response schemas
export const AgentServiceResponseSchema = z.union([
    AgentServiceErrorResponseSchema,
    FindAgentByTaskResponseSchema,
    ListAgentsResponseSchema,
    AgentsDetailResponseSchema
]);

// Export with the expected name for the index file
export const agentServiceResponseSchema = AgentServiceResponseSchema;

// Type exports
export type AgentServiceErrorResponse = z.infer<typeof AgentServiceErrorResponseSchema>;
export type FindAgentByTaskResponse = z.infer<typeof FindAgentByTaskResponseSchema>;
export type ListAgentsResponse = z.infer<typeof ListAgentsResponseSchema>;
export type AgentsDetailResponseSuccess = z.infer<typeof AgentsDetailResponseSuccessSchema>;
export type AgentsDetailResponseError = z.infer<typeof AgentsDetailResponseErrorSchema>;
export type AgentsDetailResponse = z.infer<typeof AgentsDetailResponseSchema>;
export type AgentServiceResponse = z.infer<typeof AgentServiceResponseSchema>;































