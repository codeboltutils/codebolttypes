import { z } from 'zod';

/**
 * MCP Service Response Schemas
 * Messages sent from MCP CLI service back to agents
 */

// MCP server configuration structure
const MCPServerSchema = z.object({
    name: z.string(),
    command: z.string().optional(),
    args: z.array(z.string()).optional(),
    env: z.record(z.string()).optional(),
    enabled: z.boolean().optional(),
    description: z.string().optional()
}).passthrough(); // Allow additional server properties

// MCP tool structure
const MCPToolSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    inputSchema: z.object({}).passthrough().optional(),
    serverName: z.string().optional(),
    type: z.string().optional()
}).passthrough(); // Allow additional tool properties

// Get enabled toolboxes response schema
export const GetEnabledToolBoxesResponseSchema = z.object({
    type: z.literal('getEnabledToolBoxesResponse'),
    data: z.array(MCPServerSchema)
});

// Get available toolboxes response schema
export const GetAvailableToolBoxesResponseSchema = z.object({
    type: z.literal('getAvailableToolBoxesResponse'),
    data: z.array(MCPServerSchema)
});

// Get local toolboxes response schema
export const GetLocalToolBoxesResponseSchema = z.object({
    type: z.literal('getLocalToolBoxesResponse'),
    data: z.array(MCPToolSchema)
});

// Search available toolboxes response schema
export const SearchAvailableToolBoxesResponseSchema = z.object({
    type: z.literal('searchAvailableToolBoxesResponse'),
    data: z.array(MCPServerSchema)
});

// List tools from toolboxes response schema (success)
export const ListToolsFromToolBoxesResponseSchema = z.object({
    type: z.literal('listToolsFromToolBoxesResponse'),
    data: z.array(MCPToolSchema)
});

// List tools from toolboxes response schema (error)
export const ListToolsFromToolBoxesErrorResponseSchema = z.object({
    type: z.literal('listToolsFromToolBoxesResponse'),
    error: z.string()
});

// Configure toolbox response schema (success)
export const ConfigureToolBoxResponseSchema = z.object({
    type: z.literal('configureToolBoxResponse'),
    data: MCPServerSchema
});

// Configure toolbox response schema (error)
export const ConfigureToolBoxErrorResponseSchema = z.object({
    type: z.literal('configureToolBoxResponse'),
    error: z.string()
});

// Get tools response schema
export const GetToolsResponseSchema = z.object({
    type: z.literal('getToolsResponse'),
    data: z.array(MCPToolSchema)
});

// Execute tool response schema (success with array format)
export const ExecuteToolResponseArraySchema = z.object({
    type: z.literal('executeToolResponse'),
    data: z.tuple([z.boolean(), z.union([z.string(), z.unknown()])])
});

// Execute tool response schema (error with object format)
export const ExecuteToolResponseErrorSchema = z.object({
    type: z.literal('executeToolResponse'),
    data: z.object({
        error: z.string()
    })
});

// Execute tool response schema (direct data format)
export const ExecuteToolResponseDirectSchema = z.object({
    type: z.literal('executeToolResponse'),
    data: z.unknown()
});

// Get MCP tools response schema
export const GetMcpToolsResponseSchema = z.object({
    type: z.literal('getMcpToolsResponse'),
    data: z.array(MCPToolSchema)
});

// Get MCP list response schema
export const GetMcpListResponseSchema = z.object({
    type: z.literal('getMcpListResponse'),
    data: z.array(MCPToolSchema)
});

// Get all MCP tools response schema
export const GetAllMCPToolsResponseSchema = z.object({
    type: z.literal('getAllMCPToolsResponse'),
    data: z.array(MCPToolSchema)
});

// Get enabled MCPS response schema
export const GetEnabledMCPSResponseSchema = z.object({
    type: z.literal('getEnabledMCPSResponse'),
    data: MCPServerSchema
});

// Configure MCP tool response schema (success)
export const ConfigureMCPToolResponseSchema = z.object({
    type: z.literal('configureMCPToolResponse'),
    data: MCPServerSchema
});

// Configure MCP tool response schema (error)
export const ConfigureMCPToolErrorResponseSchema = z.object({
    type: z.literal('configureMCPToolResponse'),
    error: z.string()
});

// Generic error response schema
export const MCPErrorResponseSchema = z.object({
    type: z.literal('error'),
    message: z.string()
});

// Union of all MCP service response schemas
export const MCPServiceResponseSchema = z.union([
    GetEnabledToolBoxesResponseSchema,
    GetAvailableToolBoxesResponseSchema,
    GetLocalToolBoxesResponseSchema,
    SearchAvailableToolBoxesResponseSchema,
    ListToolsFromToolBoxesResponseSchema,
    ListToolsFromToolBoxesErrorResponseSchema,
    ConfigureToolBoxResponseSchema,
    ConfigureToolBoxErrorResponseSchema,
    GetToolsResponseSchema,
    ExecuteToolResponseArraySchema,
    ExecuteToolResponseErrorSchema,
    ExecuteToolResponseDirectSchema,
    GetMcpToolsResponseSchema,
    GetMcpListResponseSchema,
    GetAllMCPToolsResponseSchema,
    GetEnabledMCPSResponseSchema,
    ConfigureMCPToolResponseSchema,
    ConfigureMCPToolErrorResponseSchema,
    MCPErrorResponseSchema
]);

// Export with the expected name for the index file
export const mcpServiceResponseSchema = MCPServiceResponseSchema;

// Type exports
export type MCPServer = z.infer<typeof MCPServerSchema>;
export type MCPTool = z.infer<typeof MCPToolSchema>;
export type GetEnabledToolBoxesResponse = z.infer<typeof GetEnabledToolBoxesResponseSchema>;
export type GetAvailableToolBoxesResponse = z.infer<typeof GetAvailableToolBoxesResponseSchema>;
export type GetLocalToolBoxesResponse = z.infer<typeof GetLocalToolBoxesResponseSchema>;
export type SearchAvailableToolBoxesResponse = z.infer<typeof SearchAvailableToolBoxesResponseSchema>;
export type ListToolsFromToolBoxesResponse = z.infer<typeof ListToolsFromToolBoxesResponseSchema>;
export type ListToolsFromToolBoxesErrorResponse = z.infer<typeof ListToolsFromToolBoxesErrorResponseSchema>;
export type ConfigureToolBoxResponse = z.infer<typeof ConfigureToolBoxResponseSchema>;
export type ConfigureToolBoxErrorResponse = z.infer<typeof ConfigureToolBoxErrorResponseSchema>;
export type GetToolsResponse = z.infer<typeof GetToolsResponseSchema>;
export type ExecuteToolResponseArray = z.infer<typeof ExecuteToolResponseArraySchema>;
export type ExecuteToolResponseError = z.infer<typeof ExecuteToolResponseErrorSchema>;
export type ExecuteToolResponseDirect = z.infer<typeof ExecuteToolResponseDirectSchema>;
export type GetMcpToolsResponse = z.infer<typeof GetMcpToolsResponseSchema>;
export type GetMcpListResponse = z.infer<typeof GetMcpListResponseSchema>;
export type GetAllMCPToolsResponse = z.infer<typeof GetAllMCPToolsResponseSchema>;
export type GetEnabledMCPSResponse = z.infer<typeof GetEnabledMCPSResponseSchema>;
export type ConfigureMCPToolResponse = z.infer<typeof ConfigureMCPToolResponseSchema>;
export type ConfigureMCPToolErrorResponse = z.infer<typeof ConfigureMCPToolErrorResponseSchema>;
export type MCPErrorResponse = z.infer<typeof MCPErrorResponseSchema>;
export type MCPServiceResponse = z.infer<typeof MCPServiceResponseSchema>; 