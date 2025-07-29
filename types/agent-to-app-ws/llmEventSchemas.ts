import { z } from 'zod';

/**
 * LLM Event Schemas for Agent-to-App Communication
 * Based on codeboltjs/src/modules/llm.ts module operations
 */

// Base message schema for LLM operations
const messageSchema = z.object({
  role: z.enum(['system', 'user', 'assistant', 'tool']),
  content: z.union([
    z.string(),
    z.array(z.object({
      type: z.string(),
      text: z.string().optional(),
      image_url: z.object({
        url: z.string(),
      }).optional(),
    })),
  ]),
  name: z.string().optional(),
  tool_calls: z.array(z.object({
    id: z.string(),
    type: z.string(),
    function: z.object({
      name: z.string(),
      arguments: z.string(),
    }),
  })).optional(),
  tool_call_id: z.string().optional(),
});

// Tool schema for function calling
const toolSchema = z.object({
  type: z.literal('function'),
  function: z.object({
    name: z.string(),
    description: z.string(),
    parameters: z.object({
      type: z.literal('object'),
      properties: z.record(z.any()),
      required: z.array(z.string()).optional(),
    }),
  }),
});

// LLM inference parameters schema
const llmInferenceParamsSchema = z.object({
  messages: z.array(messageSchema),
  tools: z.array(toolSchema).optional(),
  tool_choice: z.union([
    z.literal('none'),
    z.literal('auto'),
    z.object({
      type: z.literal('function'),
      function: z.object({
        name: z.string(),
      }),
    }),
  ]).optional(),
  full: z.boolean().optional(),
  max_tokens: z.number().optional(),
  temperature: z.number().optional(),
  stream: z.boolean().optional(),
});

// Base LLM event schema
export const llmEventBaseSchema = z.object({
  type: z.literal('inference'),
  message: z.object({
    prompt: z.union([llmInferenceParamsSchema, z.string()]),
    llmrole: z.string().optional(),
  }),
  messageId: z.string().optional(),
  threadId: z.string().optional(),
  agentInstanceId: z.string().optional(),
  agentId: z.string().optional(),
  parentAgentInstanceId: z.string().optional(),
  parentId: z.string().optional(),
});

// Modern inference event schema with full OpenAI format
export const inferenceEventSchema = llmEventBaseSchema.extend({
  message: z.object({
    prompt: llmInferenceParamsSchema,
    llmrole: z.string().optional(),
  }),
});

// Legacy inference event schema for backward compatibility
export const legacyInferenceEventSchema = llmEventBaseSchema.extend({
  message: z.object({
    prompt: z.string(),
    llmrole: z.string(),
  }),
});

// Union of all LLM event schemas
export const llmEventSchema = z.union([
  inferenceEventSchema,
  legacyInferenceEventSchema,
]);

// Response Schemas for LLM operations
export const llmResponseSchema = z.object({
  success: z.boolean(),
  completion: z.object({
    id: z.string().optional(),
    object: z.string().optional(),
    created: z.number().optional(),
    model: z.string().optional(),
    choices: z.array(z.object({
      index: z.number(),
      message: z.object({
        role: z.string(),
        content: z.string().nullable(),
        tool_calls: z.array(z.object({
          id: z.string(),
          type: z.string(),
          function: z.object({
            name: z.string(),
            arguments: z.string(),
          }),
        })).optional(),
      }),
      finish_reason: z.string().nullable(),
    })),
    usage: z.object({
      prompt_tokens: z.number(),
      completion_tokens: z.number(),
      total_tokens: z.number(),
    }).optional(),
  }),
  error: z.string().optional(),
  model: z.string().optional(),
  provider: z.string().optional(),
});

// Streaming response schema for LLM operations
export const llmStreamResponseSchema = z.object({
  success: z.boolean(),
  delta: z.object({
    id: z.string().optional(),
    object: z.literal('chat.completion.chunk'),
    created: z.number().optional(),
    model: z.string().optional(),
    choices: z.array(z.object({
      index: z.number(),
      delta: z.object({
        role: z.string().optional(),
        content: z.string().optional(),
        tool_calls: z.array(z.object({
          index: z.number(),
          id: z.string().optional(),
          type: z.string().optional(),
          function: z.object({
            name: z.string().optional(),
            arguments: z.string().optional(),
          }).optional(),
        })).optional(),
      }),
      finish_reason: z.string().nullable(),
    })),
  }),
  done: z.boolean().optional(),
});

// Error response schema for LLM operations
export const llmErrorResponseSchema = z.object({
  success: z.literal(false),
  error: z.string(),
  code: z.string().optional(),
  model: z.string().optional(),
  provider: z.string().optional(),
});

// Union of all LLM response schemas
export const llmResponseUnionSchema = z.union([
  llmResponseSchema,
  llmStreamResponseSchema,
  llmErrorResponseSchema,
]);

// Inferred TypeScript types for LLM operations
export type Message = z.infer<typeof messageSchema>;
export type Tool = z.infer<typeof toolSchema>;
export type LLMInferenceParams = z.infer<typeof llmInferenceParamsSchema>;

// Inferred TypeScript types for events
export type LLMEventBase = z.infer<typeof llmEventBaseSchema>;
export type InferenceEvent = z.infer<typeof inferenceEventSchema>;
export type LegacyInferenceEvent = z.infer<typeof legacyInferenceEventSchema>;
export type LLMEvent = z.infer<typeof llmEventSchema>;

// Inferred TypeScript types for responses
export type LLMResponse = z.infer<typeof llmResponseSchema>;
export type LLMStreamResponse = z.infer<typeof llmStreamResponseSchema>;
export type LLMErrorResponse = z.infer<typeof llmErrorResponseSchema>;
export type LLMResponseUnion = z.infer<typeof llmResponseUnionSchema>; 