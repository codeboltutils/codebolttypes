import { z } from 'zod';

/**
 * Crawler Service Response Schemas
 * Messages sent from crawler CLI service back to agents
 */

// Crawler response schema
export const CrawlerResponseSchema = z.object({
    type: z.literal('crawlerResponse'),
    data: z.union([
        z.string(), // Most common case - message string
        z.object({}).passthrough() // Object response for complex results
    ])
});

// Union of all crawler service response schemas
export const CrawlerServiceResponseSchema = CrawlerResponseSchema;

// Export with the expected name for the index file
export const crawlerServiceResponseSchema = CrawlerServiceResponseSchema;

// Type exports
export type CrawlerResponse = z.infer<typeof CrawlerResponseSchema>;
export type CrawlerServiceResponse = z.infer<typeof CrawlerServiceResponseSchema>; 