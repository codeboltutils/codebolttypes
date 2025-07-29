import { z } from 'zod';

/**
 * Problem Matcher Service Response Schemas
 * Messages sent from problem matcher CLI service back to agents
 */

// Match problem response
export const matchProblemResponseSchema = z.object({
  type: z.literal('matchProblemResponse'),
  payload: z.any(),
});

// Union of all problem matcher service responses
export const problemMatcherServiceResponseSchema = matchProblemResponseSchema;

// TypeScript types
export type MatchProblemResponse = z.infer<typeof matchProblemResponseSchema>;
export type ProblemMatcherServiceResponse = z.infer<typeof problemMatcherServiceResponseSchema>; 