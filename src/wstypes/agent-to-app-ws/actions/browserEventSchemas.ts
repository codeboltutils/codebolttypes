import { z } from 'zod';

/**
 * Browser Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/browser.ts module operations
 */

// Base browser message schema
export const browserEventBaseSchema = z.object({
  type: z.literal('browserEvent'),
  action: z.string(),
  url: z.string().optional(),
  message: z.object({}).passthrough().optional(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// New Page Event Schema
export const newPageEventSchema = browserEventBaseSchema.extend({
  action: z.literal('newPage'),
});

// Get URL Event Schema
export const getUrlEventSchema = browserEventBaseSchema.extend({
  action: z.literal('getUrl'),
});

// Go To Page Event Schema
export const goToPageEventSchema = browserEventBaseSchema.extend({
  action: z.literal('goToPage'),
  url: z.string(),
});

// Screenshot Event Schema
export const screenshotEventSchema = browserEventBaseSchema.extend({
  action: z.literal('screenshot'),
});

// Get HTML Event Schema
export const getHtmlEventSchema = browserEventBaseSchema.extend({
  action: z.literal('getHTML'),
});

// Get Markdown Event Schema
export const getMarkdownEventSchema = browserEventBaseSchema.extend({
  action: z.literal('getMarkdown'),
});

// Get PDF Event Schema
export const getPdfEventSchema = browserEventBaseSchema.extend({
  action: z.literal('getPDF'),
});

// Extract Text Event Schema
export const extractTextEventSchema = browserEventBaseSchema.extend({
  action: z.literal('extractText'),
  message: z.object({
    selector: z.string().optional(),
  }),
});

// Get Content Event Schema
export const getContentEventSchema = browserEventBaseSchema.extend({
  action: z.literal('getContent'),
  message: z.object({
    type: z.enum(['html', 'text', 'markdown']),
  }),
});

// Click Event Schema
export const clickEventSchema = browserEventBaseSchema.extend({
  action: z.literal('click'),
  message: z.object({
    selector: z.string(),
    coordinates: z.object({
      x: z.number(),
      y: z.number(),
    }).optional(),
  }),
});

// Type Text Event Schema
export const typeTextEventSchema = browserEventBaseSchema.extend({
  action: z.literal('type'),
  message: z.object({
    selector: z.string(),
    text: z.string(),
    clear: z.boolean().optional(),
  }),
});

// Scroll Event Schema
export const scrollEventSchema = browserEventBaseSchema.extend({
  action: z.literal('scroll'),
  message: z.object({
    direction: z.enum(['up', 'down', 'left', 'right']),
    amount: z.number().optional(),
    selector: z.string().optional(),
  }),
});

// Wait Event Schema
export const waitEventSchema = browserEventBaseSchema.extend({
  action: z.literal('wait'),
  message: z.object({
    selector: z.string().optional(),
    timeout: z.number().optional(),
    visible: z.boolean().optional(),
  }),
});

// Evaluate Event Schema
export const evaluateEventSchema = browserEventBaseSchema.extend({
  action: z.literal('evaluate'),
  message: z.object({
    script: z.string(),
    args: z.array(z.any()).optional(),
  }),
});

// Get Element Info Event Schema
export const getElementInfoEventSchema = browserEventBaseSchema.extend({
  action: z.literal('getElementInfo'),
  message: z.object({
    selector: z.string(),
  }),
});

// Take Element Screenshot Event Schema
export const takeElementScreenshotEventSchema = browserEventBaseSchema.extend({
  action: z.literal('takeElementScreenshot'),
  message: z.object({
    selector: z.string(),
  }),
});

// Set Viewport Event Schema
export const setViewportEventSchema = browserEventBaseSchema.extend({
  action: z.literal('setViewport'),
  message: z.object({
    width: z.number(),
    height: z.number(),
  }),
});

// Reload Page Event Schema
export const reloadPageEventSchema = browserEventBaseSchema.extend({
  action: z.literal('reload'),
});

// Go Back Event Schema
export const goBackEventSchema = browserEventBaseSchema.extend({
  action: z.literal('goBack'),
});

// Go Forward Event Schema
export const goForwardEventSchema = browserEventBaseSchema.extend({
  action: z.literal('goForward'),
});

// Close Browser Event Schema
export const closeBrowserEventSchema = browserEventBaseSchema.extend({
  action: z.literal('closeBrowser'),
});

// Union of all browser event schemas
export const browserEventSchema = z.union([
  newPageEventSchema,
  getUrlEventSchema,
  goToPageEventSchema,
  screenshotEventSchema,
  getHtmlEventSchema,
  getMarkdownEventSchema,
  getPdfEventSchema,
  extractTextEventSchema,
  getContentEventSchema,
  clickEventSchema,
  typeTextEventSchema,
  scrollEventSchema,
  waitEventSchema,
  evaluateEventSchema,
  getElementInfoEventSchema,
  takeElementScreenshotEventSchema,
  setViewportEventSchema,
  reloadPageEventSchema,
  goBackEventSchema,
  goForwardEventSchema,
  closeBrowserEventSchema,
]);


// Inferred TypeScript types for events
export type BrowserEventBase = z.infer<typeof browserEventBaseSchema>;
export type NewPageEvent = z.infer<typeof newPageEventSchema>;
export type GetUrlEvent = z.infer<typeof getUrlEventSchema>;
export type GoToPageEvent = z.infer<typeof goToPageEventSchema>;
export type ScreenshotEvent = z.infer<typeof screenshotEventSchema>;
export type GetHtmlEvent = z.infer<typeof getHtmlEventSchema>;
export type GetMarkdownEvent = z.infer<typeof getMarkdownEventSchema>;
export type GetPdfEvent = z.infer<typeof getPdfEventSchema>;
export type ExtractTextEvent = z.infer<typeof extractTextEventSchema>;
export type GetContentEvent = z.infer<typeof getContentEventSchema>;
export type ClickEvent = z.infer<typeof clickEventSchema>;
export type TypeTextEvent = z.infer<typeof typeTextEventSchema>;
export type ScrollEvent = z.infer<typeof scrollEventSchema>;
export type WaitEvent = z.infer<typeof waitEventSchema>;
export type EvaluateEvent = z.infer<typeof evaluateEventSchema>;
export type GetElementInfoEvent = z.infer<typeof getElementInfoEventSchema>;
export type TakeElementScreenshotEvent = z.infer<typeof takeElementScreenshotEventSchema>;
export type SetViewportEvent = z.infer<typeof setViewportEventSchema>;
export type ReloadPageEvent = z.infer<typeof reloadPageEventSchema>;
export type GoBackEvent = z.infer<typeof goBackEventSchema>;
export type GoForwardEvent = z.infer<typeof goForwardEventSchema>;
export type CloseBrowserEvent = z.infer<typeof closeBrowserEventSchema>;
export type BrowserEvent = z.infer<typeof browserEventSchema>;
