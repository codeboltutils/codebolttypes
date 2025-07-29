import { z } from 'zod';

export const memoryServiceResponseSchema = z.object({
  type: z.string(),
  message: z.string().optional(),
});

export type MemoryServiceResponse = z.infer<typeof memoryServiceResponseSchema>; 