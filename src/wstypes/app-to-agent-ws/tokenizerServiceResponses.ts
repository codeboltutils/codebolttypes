import { z } from 'zod';

/**
 * Tokenizer Service Response Schemas
 * Messages sent from tokenizer CLI service back to agents
 */

// Token structure
const TokenSchema = z.object({
    id: z.string(),
    text: z.string(),
    count: z.number().optional(),
    encoding: z.string().optional()
}).passthrough(); // Allow additional token properties

// Add token response schema
export const AddTokenResponseSchema = z.object({
    type: z.literal('addTokenResponse'),
    message: z.literal('success'),
    tokens: z.array(TokenSchema)
});

// Get token response schema
export const GetTokenResponseSchema = z.object({
    type: z.literal('getTokenResponse'),
    token: TokenSchema.nullable() // Token can be null if not found
});

// Error response schema
export const TokenizerErrorResponseSchema = z.object({
    type: z.literal('error'),
    message: z.string()
});

// Union of all tokenizer service response schemas
export const TokenizerServiceResponseSchema = z.union([
    AddTokenResponseSchema,
    GetTokenResponseSchema,
    TokenizerErrorResponseSchema
]);

// Export with the expected name for the index file
export const tokenizerServiceResponseSchema = TokenizerServiceResponseSchema;

// Type exports
export type AddTokenResponse = z.infer<typeof AddTokenResponseSchema>;
export type GetTokenResponse = z.infer<typeof GetTokenResponseSchema>;
export type TokenizerErrorResponse = z.infer<typeof TokenizerErrorResponseSchema>;
export type TokenizerServiceResponse = z.infer<typeof TokenizerServiceResponseSchema>; 