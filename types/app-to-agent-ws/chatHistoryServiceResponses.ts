import { z } from 'zod';

/**
 * Chat History Service Response Schemas
 * Messages sent from chat history CLI service back to agents
 */

// Get summarize all response
export const getSummarizeAllResponseSchema = z.object({
  type: z.literal('getSummarizeAllResponse'),
  payload: z.any(),
});

// Get summarize response
export const getSummarizeResponseSchema = z.object({
  type: z.literal('getSummarizeResponse'),
  payload: z.any(),
});

// Get chat history response (from index.ts)
export const getChatHistoryResponseSchema = z.object({
  type: z.literal('getChatHistoryResponse'),
  chats: z.any(),
});

// Union of all chat history service responses
export const chatHistoryServiceResponseSchema = z.union([
  getSummarizeAllResponseSchema,
  getSummarizeResponseSchema,
  getChatHistoryResponseSchema,
]);

// TypeScript types
export type GetSummarizeAllResponse = z.infer<typeof getSummarizeAllResponseSchema>;
export type GetSummarizeResponse = z.infer<typeof getSummarizeResponseSchema>;
export type GetChatHistoryResponse = z.infer<typeof getChatHistoryResponseSchema>;
export type ChatHistoryServiceResponse = z.infer<typeof chatHistoryServiceResponseSchema>; 