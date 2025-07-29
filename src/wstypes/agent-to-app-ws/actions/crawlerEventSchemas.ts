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

// Response Schemas for crawler operations
export const crawlerResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  data: z.any().optional(),
});

export const crawlerStartResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  crawlerId: z.string().optional(),
});

export const crawlerScreenshotResponseSchema = z.object({
  success: z.boolean(),
  screenshot: z.string().optional(), // base64 encoded image
  path: z.string().optional(),
  timestamp: z.string().optional(),
});

export const crawlerGoToPageResponseSchema = z.object({
  success: z.boolean(),
  url: z.string(),
  title: z.string().optional(),
  status: z.number().optional(),
});

export const crawlerScrollResponseSchema = z.object({
  success: z.boolean(),
  direction: z.string(),
  position: z.object({
    x: z.number(),
    y: z.number(),
  }).optional(),
});

export const crawlerClickResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  id: z.string(),
  element: z.object({
    tagName: z.string(),
    text: z.string(),
    attributes: z.record(z.string()),
  }).optional(),
});

export const crawlerStopResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  crawlerId: z.string().optional(),
});

export const crawlerGetPageContentResponseSchema = z.object({
  success: z.boolean(),
  content: z.object({
    html: z.string(),
    text: z.string(),
    url: z.string(),
    title: z.string(),
    links: z.array(z.object({
      href: z.string(),
      text: z.string(),
    })),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string().optional(),
    })),
  }).optional(),
});

export const crawlerWaitResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  timeout: z.number().optional(),
  found: z.boolean().optional(),
});

export const crawlerExtractDataResponseSchema = z.object({
  success: z.boolean(),
  data: z.union([
    z.string(),
    z.array(z.string()),
    z.record(z.any()),
  ]).optional(),
  selector: z.string(),
  count: z.number().optional(),
});

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

// Inferred TypeScript types for responses
export type CrawlerResponse = z.infer<typeof crawlerResponseSchema>;
export type CrawlerStartResponse = z.infer<typeof crawlerStartResponseSchema>;
export type CrawlerScreenshotResponse = z.infer<typeof crawlerScreenshotResponseSchema>;
export type CrawlerGoToPageResponse = z.infer<typeof crawlerGoToPageResponseSchema>;
export type CrawlerScrollResponse = z.infer<typeof crawlerScrollResponseSchema>;
export type CrawlerClickResponse = z.infer<typeof crawlerClickResponseSchema>;
export type CrawlerStopResponse = z.infer<typeof crawlerStopResponseSchema>;
export type CrawlerGetPageContentResponse = z.infer<typeof crawlerGetPageContentResponseSchema>;
export type CrawlerWaitResponse = z.infer<typeof crawlerWaitResponseSchema>;
export type CrawlerExtractDataResponse = z.infer<typeof crawlerExtractDataResponseSchema>; 