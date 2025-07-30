import { z } from 'zod';

/**
 * State Service Response Schemas
 * Messages sent from state CLI service back to agents
 */

// Agent state structure (based on agentState store)
const AgentStateSchema = z.object({
    userName: z.string(),
    defaultLLM: z.string(),
    agentLogger: z.object({}).passthrough() // Logger object structure
}).passthrough(); // Allow additional dynamic properties

// Get agent state response schema
export const GetAgentStateResponseSchema = z.object({
    type: z.literal('getAgentStateResponse'),
    payload: AgentStateSchema
});

// Add to agent state response schema
export const AddToAgentStateResponseSchema = z.object({
    type: z.literal('addToAgentStateResponse'),
    payload: z.object({
        sucess: z.literal(true) // Note: keeping the typo as it exists in the source code
    })
});

// Union of all state service response schemas
export const StateServiceResponseSchema = z.union([
    GetAgentStateResponseSchema,
    AddToAgentStateResponseSchema
]);

// Export with the expected name for the index file
export const stateServiceResponseSchema = StateServiceResponseSchema;

// Type exports
export type GetAgentStateResponse = z.infer<typeof GetAgentStateResponseSchema>;
export type AddToAgentStateResponse = z.infer<typeof AddToAgentStateResponseSchema>;
export type StateServiceResponse = z.infer<typeof StateServiceResponseSchema>; 