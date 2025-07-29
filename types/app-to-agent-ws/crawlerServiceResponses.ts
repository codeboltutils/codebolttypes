import { z } from 'zod';

export const crawlerResponseSchema = z.object({
  type: z.literal('crawlerResponse'),
  data: z.any(),
});

export const crawlerServiceResponseSchema = crawlerResponseSchema;

export type CrawlerServiceResponse = z.infer<typeof crawlerServiceResponseSchema>; 