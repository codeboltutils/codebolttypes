import { z } from 'zod';

/**
 * Code Utils Service Response Schemas
 * Messages sent from code utils CLI service back to agents
 */

// Get all files markdown response
export const getAllFilesMarkdownResponseSchema = z.object({
  type: z.literal('getAllFilesMarkdownResponse'),
  markdown: z.string(),
});

// Match problem response (from code utils)
export const codeUtilsMatchProblemResponseSchema = z.object({
  type: z.literal('matchProblemResponse'),
  payload: z.any(),
});

// Get matcher list tree response
export const getMatcherListTreeResponseSchema = z.object({
  type: z.literal('getMatcherListTreeResponse'),
  payload: z.any(),
});

// Get match detail response
export const getMatchDetailResponseSchema = z.object({
  type: z.literal('getMatchDetailResponse'),
  payload: z.any(),
});

// Union of all code utils service responses
export const codeUtilsServiceResponseSchema = z.union([
  getAllFilesMarkdownResponseSchema,
  codeUtilsMatchProblemResponseSchema,
  getMatcherListTreeResponseSchema,
  getMatchDetailResponseSchema,
]);

// TypeScript types
export type GetAllFilesMarkdownResponse = z.infer<typeof getAllFilesMarkdownResponseSchema>;
export type CodeUtilsMatchProblemResponse = z.infer<typeof codeUtilsMatchProblemResponseSchema>;
export type GetMatcherListTreeResponse = z.infer<typeof getMatcherListTreeResponseSchema>;
export type GetMatchDetailResponse = z.infer<typeof getMatchDetailResponseSchema>;
export type CodeUtilsServiceResponse = z.infer<typeof codeUtilsServiceResponseSchema>; 