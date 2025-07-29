import { z } from 'zod';

/**
 * JS Tree Parser Service Response Schemas
 * Messages sent from JS tree parser CLI service back to agents
 */

// Get tree response
export const getTreeResponseSchema = z.object({
  type: z.literal('getTreeResponse'),
  payload: z.any(),
});

// Union of all JS tree parser service responses
export const jsTreeParserServiceResponseSchema = getTreeResponseSchema;

// TypeScript types
export type GetTreeResponse = z.infer<typeof getTreeResponseSchema>;
export type JsTreeParserServiceResponse = z.infer<typeof jsTreeParserServiceResponseSchema>; 