import { z } from 'zod';

/**
 * Notification Service Response Schemas
 * Messages sent from notification CLI service back to agents
 */

// Notification error response
export const notificationErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.literal('Failed to process task event'),
});

// Union of all notification service responses
export const notificationServiceResponseSchema = notificationErrorResponseSchema;

// TypeScript types
export type NotificationErrorResponse = z.infer<typeof notificationErrorResponseSchema>;
export type NotificationServiceResponse = z.infer<typeof notificationServiceResponseSchema>; 