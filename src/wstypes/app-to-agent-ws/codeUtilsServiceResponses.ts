import { z } from 'zod';

/**
 * Code Utils Service Response Schemas
 * Messages sent from code utils CLI service back to agents
 */

// Get all files markdown response schema
export const GetAllFilesMarkdownResponseSchema = z.object({
    type: z.literal('getAllFilesMarkdownResponse'),
    markdown: z.string() // Markdown content is a string
});

// Problem matcher result structure
const ProblemMatchResultSchema = z.object({
    file: z.string().optional(),
    line: z.number().optional(),
    column: z.number().optional(),
    message: z.string().optional(),
    severity: z.string().optional(),
    code: z.string().optional()
}).passthrough(); // Allow additional problem properties

// Matcher list item structure
const MatcherListItemSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    patterns: z.array(z.string()).optional()
}).passthrough(); // Allow additional matcher properties

// Match problem response schema (reused from problem matcher)
export const CodeUtilsMatchProblemResponseSchema = z.object({
    type: z.literal('matchProblemResponse'),
    payload: z.array(ProblemMatchResultSchema)
});

// Get matcher list tree response schema
export const GetMatcherListTreeResponseSchema = z.object({
    type: z.literal('getMatcherListTreeResponse'),
    payload: z.array(MatcherListItemSchema)
});

// Get match detail response schema
export const GetMatchDetailResponseSchema = z.object({
    type: z.literal('getMatchDetailResponse'),
    payload: z.object({
        name: z.string(),
        description: z.string().optional(),
        patterns: z.array(z.string()),
        examples: z.array(z.string()).optional()
    }).passthrough() // Allow additional match detail properties
});

// Union of all code utils service response schemas
export const CodeUtilsServiceResponseSchema = z.union([
    GetAllFilesMarkdownResponseSchema,
    CodeUtilsMatchProblemResponseSchema,
    GetMatcherListTreeResponseSchema,
    GetMatchDetailResponseSchema
]);

// Export with the expected name for the index file
export const codeUtilsServiceResponseSchema = CodeUtilsServiceResponseSchema;

// Type exports
export type GetAllFilesMarkdownResponse = z.infer<typeof GetAllFilesMarkdownResponseSchema>;
export type CodeUtilsMatchProblemResponse = z.infer<typeof CodeUtilsMatchProblemResponseSchema>;
export type GetMatcherListTreeResponse = z.infer<typeof GetMatcherListTreeResponseSchema>;
export type GetMatchDetailResponse = z.infer<typeof GetMatchDetailResponseSchema>;
export type CodeUtilsServiceResponse = z.infer<typeof CodeUtilsServiceResponseSchema>; 