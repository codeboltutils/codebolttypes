import { z } from 'zod';

/**
 * Chat History Service Response Schemas
 * Messages sent from chat history CLI service back to agents
 */

// Message schema (from llmmessage.ts interface)
const MessageSchema = z.object({
    role: z.string(),
    content: z.string()
});

// Get summarize all response schema
// Returns summary from summarize_all() which returns Message[] | null
export const GetSummarizeAllResponseSchema = z.object({
    type: z.literal('getSummarizeAllResponse'),
    payload: z.array(MessageSchema).nullable()
});

// Get summarize response schema  
// Returns summary from summarize() which returns Message[]
export const GetSummarizeResponseSchema = z.object({
    type: z.literal('getSummarizeResponse'),
    payload: z.array(MessageSchema)
});

// Union of all chat history service response schemas
export const ChatHistoryServiceResponseSchema = z.union([
    GetSummarizeAllResponseSchema,
    GetSummarizeResponseSchema
]);

// Export with the expected name for the index file
export const chatHistoryServiceResponseSchema = ChatHistoryServiceResponseSchema;

// Type exports
export type Message = z.infer<typeof MessageSchema>;
export type GetSummarizeAllResponse = z.infer<typeof GetSummarizeAllResponseSchema>;
export type GetSummarizeResponse = z.infer<typeof GetSummarizeResponseSchema>;
export type ChatHistoryServiceResponse = z.infer<typeof ChatHistoryServiceResponseSchema>;
