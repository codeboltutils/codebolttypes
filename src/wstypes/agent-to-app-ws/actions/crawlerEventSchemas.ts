import { z } from 'zod';

/**
 * Crawler Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/crawler.ts module operations
 */

// Base crawler message schema
export const crawlerEventBaseSchema = z.object({
  type: z.literal('crawlerEvent'),
  action: z.string(),
  url: z.string().optional(),
  direction: z.string().optional(),
  id: z.string().optional(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Start Crawler Event Schema
export const startCrawlerEventSchema = crawlerEventBaseSchema.extend({
  action: z.literal('start'),
});

// Crawler Screenshot Event Schema
export const crawlerScreenshotEventSchema = crawlerEventBaseSchema.extend({
  action: z.literal('screenshot'),
});

// Crawler Go To Page Event Schema
export const crawlerGoToPageEventSchema = crawlerEventBaseSchema.extend({
  action: z.literal('goToPage'),
  url: z.string(),
});

// Crawler Scroll Event Schema
export const crawlerScrollEventSchema = crawlerEventBaseSchema.extend({
  action: z.literal('scroll'),
  direction: z.enum(['up', 'down', 'left', 'right']),
});

// Crawler Click Event Schema
export const crawlerClickEventSchema = crawlerEventBaseSchema.extend({
  action: z.literal('click'),
  id: z.string(),
});

// Stop Crawler Event Schema
export const stopCrawlerEventSchema = crawlerEventBaseSchema.extend({
  action: z.literal('stop'),
});

// Crawler Get Page Content Event Schema
export const crawlerGetPageContentEventSchema = crawlerEventBaseSchema.extend({
  action: z.literal('getPageContent'),
});

// Crawler Wait Event Schema
export const crawlerWaitEventSchema = crawlerEventBaseSchema.extend({
  action: z.literal('wait'),
  timeout: z.number().optional(),
  selector: z.string().optional(),
});

// Crawler Extract Data Event Schema
export const crawlerExtractDataEventSchema = crawlerEventBaseSchema.extend({
  action: z.literal('extractData'),
  selector: z.string(),
  attribute: z.string().optional(),
});

// Union of all crawler event schemas
export const crawlerEventSchema = z.union([
  startCrawlerEventSchema,
  crawlerScreenshotEventSchema,
  crawlerGoToPageEventSchema,
  crawlerScrollEventSchema,
  crawlerClickEventSchema,
  stopCrawlerEventSchema,
  crawlerGetPageContentEventSchema,
  crawlerWaitEventSchema,
  crawlerExtractDataEventSchema,
]);


// Inferred TypeScript types for events
export type CrawlerEventBase = z.infer<typeof crawlerEventBaseSchema>;
export type StartCrawlerEvent = z.infer<typeof startCrawlerEventSchema>;
export type CrawlerScreenshotEvent = z.infer<typeof crawlerScreenshotEventSchema>;
export type CrawlerGoToPageEvent = z.infer<typeof crawlerGoToPageEventSchema>;
export type CrawlerScrollEvent = z.infer<typeof crawlerScrollEventSchema>;
export type CrawlerClickEvent = z.infer<typeof crawlerClickEventSchema>;
export type StopCrawlerEvent = z.infer<typeof stopCrawlerEventSchema>;
export type CrawlerGetPageContentEvent = z.infer<typeof crawlerGetPageContentEventSchema>;
export type CrawlerWaitEvent = z.infer<typeof crawlerWaitEventSchema>;
export type CrawlerExtractDataEvent = z.infer<typeof crawlerExtractDataEventSchema>;
export type CrawlerEvent = z.infer<typeof crawlerEventSchema>;

