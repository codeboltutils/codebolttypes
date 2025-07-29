import { z } from 'zod';

/**
 * App-to-Agent Message Schemas
 * Messages sent from CLI services back to agents via WebSocket
 */

// Core service response schemas
export * as TerminalService from './terminalServiceResponses';
export * as VectordbService from './vectordbServiceResponses';
export * as TaskService from './taskServiceResponses';
export * as MemoryService from './memoryServiceResponses';
export * as FsService from './fsServiceResponses';
export * as BrowserService from './browserServiceResponses';
export * as DebugService from './debugServiceResponses';
export * as GitService from './gitServiceResponses';
export * as TokenizerService from './tokenizerServiceResponses';
export * as CrawlerService from './crawlerServiceResponses';
export * as ProblemMatcherService from './problemMatcherServiceResponses';
export * as ProjectService from './projectServiceResponses';
export * as ChatHistoryService from './chatHistoryServiceResponses';
export * as CodeUtilsService from './codeUtilsServiceResponses';
export * as JsTreeParserService from './jsTreeParserServiceResponses';
export * as AppService from './appServiceResponses';
export * as McpService from './mcpServiceResponses';
export * as AgentService from './agentServiceResponses';
export * as StateService from './stateServiceResponses';
export * as NotificationService from './notificationServiceResponses';
export * as CodebaseSearchService from './codebaseSearchResponses';
export * as ExecuteToolService from './executeToolServiceResponses';

// Import individual response schemas
import { terminalServiceResponseSchema } from './terminalServiceResponses';
import { vectordbServiceResponseSchema } from './vectordbServiceResponses';
import { taskServiceResponseSchema } from './taskServiceResponses';
import { memoryServiceResponseSchema } from './memoryServiceResponses';
import { fsServiceResponseSchema } from './fsServiceResponses';
import { browserServiceResponseSchema } from './browserServiceResponses';
import { debugServiceResponseSchema } from './debugServiceResponses';
import { gitServiceResponseSchema } from './gitServiceResponses';
import { tokenizerServiceResponseSchema } from './tokenizerServiceResponses';
import { crawlerServiceResponseSchema } from './crawlerServiceResponses';
import { problemMatcherServiceResponseSchema } from './problemMatcherServiceResponses';
import { projectServiceResponseSchema } from './projectServiceResponses';
import { chatHistoryServiceResponseSchema } from './chatHistoryServiceResponses';
import { codeUtilsServiceResponseSchema } from './codeUtilsServiceResponses';
import { jsTreeParserServiceResponseSchema } from './jsTreeParserServiceResponses';
import { appServiceResponseSchema } from './appServiceResponses';
import { mcpServiceResponseSchema } from './mcpServiceResponses';
import { agentServiceResponseSchema } from './agentServiceResponses';
import { stateServiceResponseSchema } from './stateServiceResponses';
import { notificationServiceResponseSchema } from './notificationServiceResponses';
import { codebaseSearchServiceResponseSchema } from './codebaseSearchResponses';
import { executeToolServiceResponseSchema } from './executeToolServiceResponses';

// Master union of all app-to-agent responses
export const appToAgentResponseSchema = z.union([
  terminalServiceResponseSchema,
  vectordbServiceResponseSchema,
  taskServiceResponseSchema,
  memoryServiceResponseSchema,
  fsServiceResponseSchema,
  browserServiceResponseSchema,
  debugServiceResponseSchema,
  gitServiceResponseSchema,
  tokenizerServiceResponseSchema,
  crawlerServiceResponseSchema,
  problemMatcherServiceResponseSchema,
  projectServiceResponseSchema,
  chatHistoryServiceResponseSchema,
  codeUtilsServiceResponseSchema,
  jsTreeParserServiceResponseSchema,
  appServiceResponseSchema,
  mcpServiceResponseSchema,
  agentServiceResponseSchema,
  stateServiceResponseSchema,
  notificationServiceResponseSchema,
  codebaseSearchServiceResponseSchema,
  executeToolServiceResponseSchema,
]);

// Master response type
export type AppToAgentResponse = z.infer<typeof appToAgentResponseSchema>; 