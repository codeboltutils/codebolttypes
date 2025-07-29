import { z } from 'zod';

/**
 * MCP Service Response Schemas
 * Messages sent from MCP CLI service back to agents
 */

// Get enabled toolboxes response
export const getEnabledToolBoxesResponseSchema = z.object({
  type: z.literal('getEnabledToolBoxesResponse'),
  data: z.record(z.any()),
});

// Get available toolboxes response
export const getAvailableToolBoxesResponseSchema = z.object({
  type: z.literal('getAvailableToolBoxesResponse'),
  data: z.record(z.any()),
});

// Get local toolboxes response
export const getLocalToolBoxesResponseSchema = z.object({
  type: z.literal('getLocalToolBoxesResponse'),
  data: z.record(z.any()),
});

// Search available toolboxes response
export const searchAvailableToolBoxesResponseSchema = z.object({
  type: z.literal('searchAvailableToolBoxesResponse'),
  data: z.record(z.any()),
});

// List tools from toolboxes response
export const listToolsFromToolBoxesResponseSchema = z.object({
  type: z.literal('listToolsFromToolBoxesResponse'),
  data: z.array(z.any()),
});

// Configure toolbox response
export const configureToolBoxResponseSchema = z.object({
  type: z.literal('configureToolBoxResponse'),
  data: z.any(),
});

// Get tools response
export const getToolsResponseSchema = z.object({
  type: z.literal('getToolsResponse'),
  data: z.array(z.any()),
});

// Execute tool response
export const executeToolResponseSchema = z.object({
  type: z.literal('executeToolResponse'),
  data: z.array(z.any()),
});

// Get MCP tools response
export const getMcpToolsResponseSchema = z.object({
  type: z.literal('getMcpToolsResponse'),
  data: z.array(z.any()),
});

// Get MCP list response
export const getMcpListResponseSchema = z.object({
  type: z.literal('getMcpListResponse'),
  data: z.array(z.any()),
});

// Get all MCP tools response
export const getAllMCPToolsResponseSchema = z.object({
  type: z.literal('getAllMCPToolsResponse'),
  data: z.array(z.any()),
});

// Get enabled MCPs response
export const getEnabledMCPSResponseSchema = z.object({
  type: z.literal('getEnabledMCPSResponse'),
  data: z.record(z.any()),
});

// Configure MCP tool response
export const configureMCPToolResponseSchema = z.object({
  type: z.literal('configureMCPToolResponse'),
  data: z.any().optional(),
  error: z.string().optional(),
});

// MCP error response
export const mcpErrorResponseSchema = z.object({
  type: z.literal('error'),
  message: z.literal('Failed to process task event'),
});

// Union of all MCP service responses
export const mcpServiceResponseSchema = z.union([
  getEnabledToolBoxesResponseSchema,
  getAvailableToolBoxesResponseSchema,
  getLocalToolBoxesResponseSchema,
  searchAvailableToolBoxesResponseSchema,
  listToolsFromToolBoxesResponseSchema,
  configureToolBoxResponseSchema,
  getToolsResponseSchema,
  executeToolResponseSchema,
  getMcpToolsResponseSchema,
  getMcpListResponseSchema,
  getAllMCPToolsResponseSchema,
  getEnabledMCPSResponseSchema,
  configureMCPToolResponseSchema,
  mcpErrorResponseSchema,
]);

// TypeScript types
export type GetEnabledToolBoxesResponse = z.infer<typeof getEnabledToolBoxesResponseSchema>;
export type GetAvailableToolBoxesResponse = z.infer<typeof getAvailableToolBoxesResponseSchema>;
export type GetLocalToolBoxesResponse = z.infer<typeof getLocalToolBoxesResponseSchema>;
export type SearchAvailableToolBoxesResponse = z.infer<typeof searchAvailableToolBoxesResponseSchema>;
export type ListToolsFromToolBoxesResponse = z.infer<typeof listToolsFromToolBoxesResponseSchema>;
export type ConfigureToolBoxResponse = z.infer<typeof configureToolBoxResponseSchema>;
export type GetToolsResponse = z.infer<typeof getToolsResponseSchema>;
export type ExecuteToolResponse = z.infer<typeof executeToolResponseSchema>;
export type GetMcpToolsResponse = z.infer<typeof getMcpToolsResponseSchema>;
export type GetMcpListResponse = z.infer<typeof getMcpListResponseSchema>;
export type GetAllMCPToolsResponse = z.infer<typeof getAllMCPToolsResponseSchema>;
export type GetEnabledMCPSResponse = z.infer<typeof getEnabledMCPSResponseSchema>;
export type ConfigureMCPToolResponse = z.infer<typeof configureMCPToolResponseSchema>;
export type McpErrorResponse = z.infer<typeof mcpErrorResponseSchema>;
export type McpServiceResponse = z.infer<typeof mcpServiceResponseSchema>; 