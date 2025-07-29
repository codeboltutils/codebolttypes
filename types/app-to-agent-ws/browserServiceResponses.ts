import { z } from 'zod';

// Response Schemas for browser operations
export const browserActionResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  data: z.any().optional(),
});

export const newPageResponseSchema = z.object({
  success: z.boolean(),
  pageId: z.string().optional(),
  url: z.string().optional(),
});

export const urlResponseSchema = z.object({
  success: z.boolean(),
  url: z.string(),
});

export const goToPageResponseSchema = z.object({
  success: z.boolean(),
  url: z.string(),
  title: z.string().optional(),
});

export const screenshotResponseSchema = z.object({
  success: z.boolean(),
  screenshot: z.string().optional(), // base64 encoded image
  path: z.string().optional(),
});

export const htmlReceivedResponseSchema = z.object({
  success: z.boolean(),
  html: z.string(),
  url: z.string().optional(),
});

export const getMarkdownResponseSchema = z.object({
  success: z.boolean(),
  markdown: z.string(),
  url: z.string().optional(),
});

export const extractTextResponseSchema = z.object({
  success: z.boolean(),
  text: z.string(),
  selector: z.string().optional(),
});

export const getContentResponseSchema = z.object({
  success: z.boolean(),
  content: z.string(),
  type: z.string(),
});

export const clickResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  selector: z.string().optional(),
});

export const typeTextResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  text: z.string().optional(),
});

export const scrollResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  position: z.object({
    x: z.number(),
    y: z.number(),
  }).optional(),
});

export const waitResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  found: z.boolean().optional(),
});

export const evaluateResponseSchema = z.object({
  success: z.boolean(),
  result: z.any(),
  error: z.string().optional(),
});

export const getElementInfoResponseSchema = z.object({
  success: z.boolean(),
  element: z.object({
    tagName: z.string(),
    attributes: z.record(z.string()),
    text: z.string(),
    visible: z.boolean(),
    coordinates: z.object({
      x: z.number(),
      y: z.number(),
      width: z.number(),
      height: z.number(),
    }),
  }).optional(),
});

export const takeElementScreenshotResponseSchema = z.object({
  success: z.boolean(),
  screenshot: z.string().optional(),
  path: z.string().optional(),
});

export const setViewportResponseSchema = z.object({
  success: z.boolean(),
  viewport: z.object({
    width: z.number(),
    height: z.number(),
  }),
});

export const browserInfoResponseSchema = z.object({
  success: z.boolean(),
  info: z.object({
    userAgent: z.string(),
    viewport: z.object({
      width: z.number(),
      height: z.number(),
    }),
    url: z.string(),
    title: z.string(),
  }).optional(),
});

export const browserSnapshotResponseSchema = z.object({
  success: z.boolean(),
  snapshot: z.object({
    url: z.string(),
    title: z.string(),
    screenshot: z.string(),
    html: z.string(),
    timestamp: z.string(),
  }).optional(),
});


// Inferred TypeScript types for responses
export type BrowserActionResponse = z.infer<typeof browserActionResponseSchema>;
export type NewPageResponse = z.infer<typeof newPageResponseSchema>;
export type UrlResponse = z.infer<typeof urlResponseSchema>;
export type GoToPageResponse = z.infer<typeof goToPageResponseSchema>;
export type ScreenshotResponse = z.infer<typeof screenshotResponseSchema>;
export type HtmlReceivedResponse = z.infer<typeof htmlReceivedResponseSchema>;
export type GetMarkdownResponse = z.infer<typeof getMarkdownResponseSchema>;
export type ExtractTextResponse = z.infer<typeof extractTextResponseSchema>;
export type GetContentResponse = z.infer<typeof getContentResponseSchema>;
export type ClickResponse = z.infer<typeof clickResponseSchema>;
export type TypeTextResponse = z.infer<typeof typeTextResponseSchema>;
export type ScrollResponse = z.infer<typeof scrollResponseSchema>;
export type WaitResponse = z.infer<typeof waitResponseSchema>;
export type EvaluateResponse = z.infer<typeof evaluateResponseSchema>;
export type GetElementInfoResponse = z.infer<typeof getElementInfoResponseSchema>;
export type TakeElementScreenshotResponse = z.infer<typeof takeElementScreenshotResponseSchema>;
export type SetViewportResponse = z.infer<typeof setViewportResponseSchema>;
export type BrowserInfoResponse = z.infer<typeof browserInfoResponseSchema>;
export type BrowserSnapshotResponse = z.infer<typeof browserSnapshotResponseSchema>; 