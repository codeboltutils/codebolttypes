import { z } from 'zod';

/**
 * Chat Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/chat.ts module operations
 */

// Base chat message schema
export const chatEventBaseSchema = z.object({
  type: z.string(),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Get Chat History Event Schema
export const getChatHistoryEventSchema = chatEventBaseSchema.extend({
  type: z.literal('getChatHistory'),
});

// Process Stopped Event Schema
export const processStoppedEventSchema = chatEventBaseSchema.extend({
  type: z.literal('processStoped'),
  message: z.string().optional(),
  data: z.any().optional(),
});

// Send Message Event Schema
export const sendMessageEventSchema = chatEventBaseSchema.extend({
  type: z.literal('sendMessage'),
  message: z.object({
    content: z.string(),
    type: z.string().optional(),
    templateType: z.string().optional(),
  }),
});

// Chat Summary Event Schema
export const chatSummaryEventSchema = chatEventBaseSchema.extend({
  type: z.literal('chatSummaryEvent'),
  action: z.enum(['generateSummary', 'getSummary', 'clearSummary']),
  message: z.object({
    threadId: z.string().optional(),
    limit: z.number().optional(),
  }).optional(),
});

// Notification Event Schema
export const notificationEventSchema = chatEventBaseSchema.extend({
  type: z.literal('notificationEvent'),
  action: z.enum(['send', 'markRead', 'markAllRead', 'getNotifications']),
  message: z.object({
    title: z.string().optional(),
    body: z.string().optional(),
    type: z.enum(['info', 'success', 'warning', 'error']).optional(),
    notificationId: z.string().optional(),
  }).optional(),
});

// Union of all chat event schemas
export const chatEventSchema = z.union([
  getChatHistoryEventSchema,
  processStoppedEventSchema,
  sendMessageEventSchema,
  chatSummaryEventSchema,
  notificationEventSchema,
]);

// Chat message schema for responses
const chatMessageSchema = z.object({
  id: z.string(),
  type: z.string(),
  content: z.union([z.string(), z.object({}).passthrough()]),
  actionType: z.string().optional(),
  messageId: z.string(),
  threadId: z.string(),
  templateType: z.string().optional(),
  data: z.object({
    text: z.string(),
  }).passthrough().optional(),
  sender: z.string().optional(),
  payload: z.object({}).passthrough().optional(),
  timestamp: z.string(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Chat summary schema
const chatSummarySchema = z.object({
  id: z.string(),
  threadId: z.string(),
  summary: z.string(),
  messageCount: z.number(),
  startTime: z.string(),
  endTime: z.string(),
  topics: z.array(z.string()).optional(),
  participants: z.array(z.string()).optional(),
  createdAt: z.string(),
});

// Notification schema
const notificationSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  type: z.enum(['info', 'success', 'warning', 'error']),
  isRead: z.boolean(),
  createdAt: z.string(),
  readAt: z.string().optional(),
  metadata: z.record(z.any()).optional(),
});


// Request handler schema for chat module
export const chatRequestHandlerSchema = z.object({
  type: z.string(),
  data: z.any(),
  messageId: z.string(),
  threadId: z.string(),
  timestamp: z.string(),
});



// Inferred TypeScript types for events
export type ChatEventBase = z.infer<typeof chatEventBaseSchema>;
export type GetChatHistoryEvent = z.infer<typeof getChatHistoryEventSchema>;
export type ProcessStoppedEvent = z.infer<typeof processStoppedEventSchema>;
export type SendMessageEvent = z.infer<typeof sendMessageEventSchema>;
export type ChatSummaryEvent = z.infer<typeof chatSummaryEventSchema>;
export type NotificationEvent = z.infer<typeof notificationEventSchema>;
export type ChatEvent = z.infer<typeof chatEventSchema>;

// Inferred TypeScript types for data structures
export type ChatMessage = z.infer<typeof chatMessageSchema>;
export type ChatSummary = z.infer<typeof chatSummarySchema>;
export type Notification = z.infer<typeof notificationSchema>;
export type ChatRequestHandler = z.infer<typeof chatRequestHandlerSchema>;
