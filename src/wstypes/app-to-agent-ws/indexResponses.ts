import { z } from 'zod';

/**
 * Index Service Response Schemas
 * Messages sent from index CLI service back to agents
 */

// Chat message schema (basic structure for chat history)
const ChatSchema = z.object({
    type: z.string(),
    messageId: z.string(),
    messageHistory: z.array(z.unknown()).optional()
}).passthrough(); // Allow additional properties

// Get chat history response schema
export const GetChatHistoryResponseSchema = z.object({
    type: z.literal('getChatHistoryResponse'),
    chats: z.array(ChatSchema)
});

// Error response schema
export const ErrorResponseSchema = z.object({
    type: z.literal('error'),
    message: z.string()
});

// Union of all index service response schemas
export const IndexServiceResponseSchema = z.union([
    GetChatHistoryResponseSchema,
    ErrorResponseSchema
]);

// Export with the expected name for the index file
export const indexServiceResponseSchema = IndexServiceResponseSchema;

// Type exports
export type Chat = z.infer<typeof ChatSchema>;
export type GetChatHistoryResponse = z.infer<typeof GetChatHistoryResponseSchema>;
export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;
export type IndexServiceResponse = z.infer<typeof IndexServiceResponseSchema>; 