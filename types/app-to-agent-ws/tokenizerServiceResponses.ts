import { z } from 'zod';

export const addTokenResponseSchema = z.object({
  type: z.literal('addTokenResponse'),
  message: z.literal('success'),
  tokens: z.any(),
});

export const getTokenResponseSchema = z.object({
  type: z.literal('getTokenResponse'),
  token: z.any(),
});

export const tokenizerErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.literal('Failed to process task event'),
});

export const tokenizerServiceResponseSchema = z.union([
  addTokenResponseSchema,
  getTokenResponseSchema,
  tokenizerErrorResponseSchema,
]);

export type TokenizerServiceResponse = z.infer<typeof tokenizerServiceResponseSchema>; 