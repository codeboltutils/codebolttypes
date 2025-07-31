import { z } from 'zod';

// Import types from agent-to-app-ws-types.ts
import {
  // Action Event Types
  type CreateFileEvent,
  type CreateFolderEvent,
  type ReadFileEvent,
  type UpdateFileEvent,
  type DeleteFileEvent,
  type DeleteFolderEvent,
  type FileListEvent,
  type SearchFilesEvent,
  type WriteToFileEvent,
  type GrepSearchEvent,
  type NewPageEvent,
  type GetUrlEvent,
  type GoToPageEvent,
  type ScreenshotEvent,
  type GetHtmlEvent,
  type GetMarkdownEvent,
  type GetPdfEvent,
  type ExtractTextEvent,
  type GetContentEvent,
  type ClickEvent,
  type TypeEvent,
  type ScrollEvent,
  type EnterEvent,
  type CloseEvent,
  type GetBrowserInfoEvent,
  type GetSnapShotEvent,
  type GetChatHistoryEvent,
  type SendMessageEvent,
  type WaitforReplyEvent,
  type ProcessStartedEvent,
  type ProcessStoppedEvent,
  type FindAgentEvent,
  type StartAgentEvent,
  type ListAgentsEvent,
  type GetAgentsDetailEvent,
  type GitInitEvent,
  type GitPullEvent,
  type GitPushEvent,
  type GitStatusEvent,
  type GitAddEvent,
  type GitCommitEvent,
  type GitCheckoutEvent,
  type GitBranchEvent,
  type GitLogsEvent,
  type GitDiffEvent,
  type InferenceEvent,
  type ExecuteCommandEvent,
  type ExecuteCommandWithStreamEvent,
  type AddTaskEvent,
  type GetTasksEvent,
  type UpdateTaskEvent,
  type DeleteTaskEvent,
  type AddSubTaskEvent,
  type UpdateSubTaskEvent,
  type AddVectorItemEvent,
  type QueryVectorItemEvent,
  type MemorySetEvent,
  type MemoryGetEvent,
  type GetApplicationStateEvent,
  type AddToAgentStateEvent,
  type GetAgentStateEvent,
  type GetProjectStateEvent,
  type UpdateProjectStateEvent,
  type AddLogEvent,
  type AddTokenEvent,
  type GetTokenEvent,
  type GetProjectPathEvent,
  type StartCrawlerEvent,
  type GetEnabledToolBoxesEvent,
  type GetToolsEvent,
  type ExecuteToolEvent,
  type SummarizeAllEvent,
  type SummarizeEvent,
  type GetTasksByAgentEvent,
  type OpenDebugBrowserEvent,
  // Additional FS Event Types
  type FsEvent,
  type ListCodeDefinitionNamesEvent,
  type FileSearchEvent,
  type EditFileWithDiffEvent,
  ConfirmationRequestEvent,
  GetProjectSettingsEvent,
  // Additional Browser Event Types - these are not available in current schema exports
} from '../agent-to-app-ws-types';

// Import response types from app-to-agent-ws-types.ts
import {
  type CreateFileSuccessResponse,
  type CreateFileErrorResponse,
  type CreateFolderSuccessResponse,
  type CreateFolderErrorResponse,
  type ReadFileSuccessResponse,
  type ReadFileSuccessResultResponse,
  type UpdateFileSuccessResponse,
  type UpdateFileErrorResponse,
  type DeleteFileSuccessResponse,
  type DeleteFileErrorResponse,
  type DeleteFolderSuccessResponse,
  type DeleteFolderErrorResponse,
  type FileListSuccessResponse,
  type FileListErrorResponse,
  type SearchFilesSuccessResponse,
  type SearchFilesErrorResponse,
  type WriteToFileSuccessResponse,
  type WriteToFileErrorResponse,
  type GrepSearchSuccessResponse,
  type GrepSearchErrorResponse,
  type NewPageResponse,
  type GetChatHistoryResponse,
  type FindAgentByTaskResponse,
  type ListAgentsResponse,
  type AgentsDetailResponse,
  type GitInitResponse,
  type GitPullResponse,
  type GitPushResponse,
  type GitStatusResponse,
  type GitAddResponse,
  type GitCommitResponse,
  type GitCheckoutResponse,
  type GitBranchResponse,
  type GitLogsResponse,
  type GitDiffResponse,
  type AddTaskResponse,
  type GetTasksResponse,
  type UpdateTasksResponse,
  type DeleteTaskResponse,
  type AddSubTaskResponse,
  type UpdateSubTaskResponse,
  type AddVectorItemResponse,
  type QueryVectorItemResponse,
  type GetProjectPathResponse,
  type CrawlerResponse,
  type GetEnabledToolBoxesResponse,
  type GetToolsResponse,
  type AddTokenResponse,
  type GetTokenResponse,
  type GetSummarizeAllResponse,
  type GetSummarizeResponse,
  type GetTasksByAgentResponse, 
  // Additional FS Response Types
  type ListCodeDefinitionNamesSuccessResponse,
  type ListCodeDefinitionNamesErrorResponse,
  type FileSearchSuccessResponse,
  type FileSearchErrorResponse,
  type EditFileAndApplyDiffSuccessResponse,
  type EditFileAndApplyDiffErrorResponse,
  OpenDebugBrowserResponse,
  GetProjectSettingsResponse
} from '../app-to-agent-ws-types';

// Import schemas from agent-to-app-ws-schema.ts
import {
  createFileEventSchema,
  createFolderEventSchema,
  readFileEventSchema,
  updateFileEventSchema,
  deleteFileEventSchema,
  deleteFolderEventSchema,
  fileListEventSchema,
  searchFilesEventSchema,
  writeToFileEventSchema,
  grepSearchEventSchema,
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
  typeEventSchema,
  scrollEventSchema,
  enterEventSchema,
  closeEventSchema,
  getBrowserInfoEventSchema,
  getSnapShotEventSchema,
  getChatHistoryEventSchema,
  confirmationRequestEventSchema,
  sendMessageEventSchema,
  waitforReplyEventSchema,
  processStartedEventSchema,
  processStoppedEventSchema,
  findAgentEventSchema,
  startAgentEventSchema,
  listAgentsEventSchema,
  getAgentsDetailEventSchema,
  gitInitEventSchema,
  gitPullEventSchema,
  gitPushEventSchema,
  gitStatusEventSchema,
  gitAddEventSchema,
  gitCommitEventSchema,
  gitCheckoutEventSchema,
  gitBranchEventSchema,
  gitLogsEventSchema,
  gitDiffEventSchema,
  inferenceEventSchema,
  executeCommandEventSchema,
  executeCommandWithStreamEventSchema,
  addTaskEventSchema,
  getTasksEventSchema,
  updateTaskEventSchema,
  deleteTaskEventSchema,
  addSubTaskEventSchema,
  updateSubTaskEventSchema,
  addVectorItemEventSchema,
  queryVectorItemEventSchema,
  memorySetEventSchema,
  memoryGetEventSchema,
  getApplicationStateEventSchema,
  addToAgentStateEventSchema,
  getAgentStateEventSchema,
  getProjectStateEventSchema,
  updateProjectStateEventSchema,
  addLogEventSchema,
  addTokenEventSchema,
  getTokenEventSchema,
  getProjectPathEventSchema,
  startCrawlerEventSchema,
  getEnabledToolBoxesEventSchema,
  getToolsEventSchema,
  executeToolEventSchema,
  summarizeAllEventSchema,
  summarizeEventSchema,
  getTasksByAgentEventSchema,
  openDebugBrowserEventSchema,
  // Additional FS Event Schemas
  fsEventBaseSchema,
  listCodeDefinitionNamesEventSchema,
  fileSearchEventSchema,
  editFileWithDiffEventSchema,
  getProjectSettingsEventSchema,
  // Additional Browser Event Schemas - these are not available in current schema exports
} from '../agent-to-app-ws-schema';

// Import response schemas from app-to-agent-ws-schema.ts
import {
  CreateFileSuccessResponseSchema,
  CreateFileErrorResponseSchema,
  CreateFolderSuccessResponseSchema,
  CreateFolderErrorResponseSchema,
  ReadFileSuccessResponseSchema,
  ReadFileSuccessResultResponseSchema,
  UpdateFileSuccessResponseSchema,
  UpdateFileErrorResponseSchema,
  DeleteFileSuccessResponseSchema,
  DeleteFileErrorResponseSchema,
  DeleteFolderSuccessResponseSchema,
  DeleteFolderErrorResponseSchema,
  FileListSuccessResponseSchema,
  FileListErrorResponseSchema,
  SearchFilesSuccessResponseSchema,
  SearchFilesErrorResponseSchema,
  WriteToFileSuccessResponseSchema,
  WriteToFileErrorResponseSchema,
  GrepSearchSuccessResponseSchema,
  GrepSearchErrorResponseSchema,
  NewPageResponseSchema,
  GetChatHistoryResponseSchema,
  FindAgentByTaskResponseSchema,
  ListAgentsResponseSchema,
  AgentsDetailResponseSchema,
  GitInitResponseSchema,
  GitPullResponseSchema,
  GitPushResponseSchema,
  GitStatusResponseSchema,
  GitAddResponseSchema,
  GitCommitResponseSchema,
  GitCheckoutResponseSchema,
  GitBranchResponseSchema,
  GitLogsResponseSchema,
  GitDiffResponseSchema,
  AddTaskResponseSchema,
  GetTasksResponseSchema,
  UpdateTasksResponseSchema,
  DeleteTaskResponseSchema,
  AddSubTaskResponseSchema,
  UpdateSubTaskResponseSchema,
  AddVectorItemResponseSchema,
  QueryVectorItemResponseSchema,
  GetProjectPathResponseSchema,
  CrawlerResponseSchema,
  GetEnabledToolBoxesResponseSchema,
  GetToolsResponseSchema,
  AddTokenResponseSchema,
  GetTokenResponseSchema,
  GetSummarizeAllResponseSchema,
  GetSummarizeResponseSchema,
  GetTasksByAgentResponseSchema,
  // Additional FS Response Schemas
  ListCodeDefinitionNamesSuccessResponseSchema,
  ListCodeDefinitionNamesErrorResponseSchema,
  FileSearchSuccessResponseSchema,
  FileSearchErrorResponseSchema,
  EditFileAndApplyDiffSuccessResponseSchema,
  EditFileAndApplyDiffErrorResponseSchema,
  OpenDebugBrowserResponseSchema,
  GetProjectSettingsResponseSchema
} from '../app-to-agent-ws-schema';

// Import SDK module interfaces for function typings
import {
  type FileSystemModule,
  type BrowserModule,
  type ChatModule,
  type GitModule,
  type LLMModule,
  type TerminalModule,
  type TaskModule,
  type VectorDBModule,
  type MemoryModule,
  type StateModule,
  type DebugModule,
  type TokenizerModule,
  type ProjectModule,
  type CrawlerModule,
  type MCPModule,
  type AgentModule,
  type ChatSummaryModule,
  type RAGModule,
  type KnowledgeModule,
  type CodeParsersModule,
  type OutputParsersModule,
  type NotificationModule,
  type SearchModule,
  type CodeUtilsModule
} from '../codeboltjstypes/sdktypes/index';

export const codeboltApiMapping = {
  // File System APIs
  "fs.createFile": {
    "name": "createFile",
    "description": "Creates a new file with specified content at the given path",
    "functionTypings": {} as FileSystemModule['createFile'],
    "websocketSendType": {} as CreateFileEvent,
    "websocketReceiveType": {} as CreateFileSuccessResponse | CreateFileErrorResponse,
    "websocketSendSchema": createFileEventSchema,
    "websocketReceiveSchema": z.union([CreateFileSuccessResponseSchema, CreateFileErrorResponseSchema])
  },
  "fs.createFolder": {
    "name": "createFolder",
    "description": "Creates a new folder at the specified path",
    "functionTypings": {} as FileSystemModule['createFolder'],
    "websocketSendType": {} as CreateFolderEvent,
    "websocketReceiveType": {} as CreateFolderSuccessResponse | CreateFolderErrorResponse,
    "websocketSendSchema": createFolderEventSchema,
    "websocketReceiveSchema": z.union([CreateFolderSuccessResponseSchema, CreateFolderErrorResponseSchema])
  },
  "fs.readFile": {
    "name": "readFile",
    "description": "Reads the content of a file from the specified path",
    "functionTypings": {} as FileSystemModule['readFile'],
    "websocketSendType": {} as ReadFileEvent,
    "websocketReceiveType": {} as ReadFileSuccessResponse | ReadFileSuccessResultResponse,
    "websocketSendSchema": readFileEventSchema,
    "websocketReceiveSchema": z.union([ReadFileSuccessResponseSchema, ReadFileSuccessResultResponseSchema])
  },
  "fs.updateFile": {
    "name": "updateFile",
    "description": "Updates the content of an existing file",
    "functionTypings": {} as FileSystemModule['updateFile'],
    "websocketSendType": {} as UpdateFileEvent,
    "websocketReceiveType": {} as UpdateFileSuccessResponse | UpdateFileErrorResponse,
    "websocketSendSchema": updateFileEventSchema,
    "websocketReceiveSchema": z.union([UpdateFileSuccessResponseSchema, UpdateFileErrorResponseSchema])
  },
  "fs.deleteFile": {
    "name": "deleteFile",
    "description": "Deletes a file from the specified path",
    "functionTypings": {} as FileSystemModule['deleteFile'],
    "websocketSendType": {} as DeleteFileEvent,
    "websocketReceiveType": {} as DeleteFileSuccessResponse | DeleteFileErrorResponse,
    "websocketSendSchema": deleteFileEventSchema,
    "websocketReceiveSchema": z.union([DeleteFileSuccessResponseSchema, DeleteFileErrorResponseSchema])
  },
  "fs.deleteFolder": {
    "name": "deleteFolder",
    "description": "Deletes a folder and its contents from the specified path",
    "functionTypings": {} as FileSystemModule['deleteFolder'],
    "websocketSendType": {} as DeleteFolderEvent,
    "websocketReceiveType": {} as DeleteFolderSuccessResponse | DeleteFolderErrorResponse,
    "websocketSendSchema": deleteFolderEventSchema,
    "websocketReceiveSchema": z.union([DeleteFolderSuccessResponseSchema, DeleteFolderErrorResponseSchema])
  },
  "fs.listFile": {
    "name": "listFile",
    "description": "Lists files and directories in the specified path",
    "functionTypings": {} as FileSystemModule['listFile'],
    "websocketSendType": {} as FileListEvent,
    "websocketReceiveType": {} as FileListSuccessResponse | FileListErrorResponse,
    "websocketSendSchema": fileListEventSchema,
    "websocketReceiveSchema": z.union([FileListSuccessResponseSchema, FileListErrorResponseSchema])
  },
  "fs.searchFiles": {
    "name": "searchFiles",
    "description": "Searches for files matching a pattern or query",
    "functionTypings": {} as FileSystemModule['searchFiles'],
    "websocketSendType": {} as SearchFilesEvent,
    "websocketReceiveType": {} as SearchFilesSuccessResponse | SearchFilesErrorResponse,
    "websocketSendSchema": searchFilesEventSchema,
    "websocketReceiveSchema": z.union([SearchFilesSuccessResponseSchema, SearchFilesErrorResponseSchema])
  },
  "fs.writeToFile": {
    "name": "writeToFile",
    "description": "Writes content to a file, creating it if it doesn't exist",
    "functionTypings": {} as FileSystemModule['writeToFile'],
    "websocketSendType": {} as WriteToFileEvent,
    "websocketReceiveType": {} as WriteToFileSuccessResponse | WriteToFileErrorResponse,
    "websocketSendSchema": writeToFileEventSchema,
    "websocketReceiveSchema": z.union([WriteToFileSuccessResponseSchema, WriteToFileErrorResponseSchema])
  },
  "fs.grepSearch": {
    "name": "grepSearch",
    "description": "Performs a grep-style search across files",
    "functionTypings": {} as FileSystemModule['grepSearch'],
    "websocketSendType": {} as GrepSearchEvent,
    "websocketReceiveType": {} as GrepSearchSuccessResponse | GrepSearchErrorResponse,
    "websocketSendSchema": grepSearchEventSchema,
    "websocketReceiveSchema": z.union([GrepSearchSuccessResponseSchema, GrepSearchErrorResponseSchema])
  },

  // Browser APIs
  "browser.newPage": {
    "name": "newPage",
    "description": "Opens a new browser page or tab",
    "functionTypings": {} as BrowserModule['newPage'],
    "websocketSendType": {} as NewPageEvent,
    "websocketReceiveType": {} as NewPageResponse,
    "websocketSendSchema": newPageEventSchema,
    "websocketReceiveSchema": NewPageResponseSchema
  },
  "browser.getUrl": {
    "name": "getUrl",
    "description": "Retrieves the current URL of the browser's active page",
    "functionTypings": {} as BrowserModule['getUrl'],
    "websocketSendType": {} as GetUrlEvent,
    "websocketReceiveType": {} as { url: string },
    "websocketSendSchema": getUrlEventSchema,
    "websocketReceiveSchema": z.object({ url: z.string() })
  },
  "browser.goToPage": {
    "name": "goToPage",
    "description": "Navigates to a specified URL",
    "functionTypings": {} as BrowserModule['goToPage'],
    "websocketSendType": {} as GoToPageEvent,
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": goToPageEventSchema,
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.screenshot": {
    "name": "screenshot",
    "description": "Takes a screenshot of the current page",
    "functionTypings": {} as BrowserModule['screenshot'],
    "websocketSendType": {} as ScreenshotEvent,
    "websocketReceiveType": {} as { screenshot: string },
    "websocketSendSchema": screenshotEventSchema,
    "websocketReceiveSchema": z.object({ screenshot: z.string() })
  },
  "browser.getHTML": {
    "name": "getHTML",
    "description": "Retrieves the HTML content of the current page",
    "functionTypings": {} as BrowserModule['getHTML'],
    "websocketSendType": {} as GetHtmlEvent,
    "websocketReceiveType": {} as { html: string },
    "websocketSendSchema": getHtmlEventSchema,
    "websocketReceiveSchema": z.object({ html: z.string() })
  },
  "browser.getMarkdown": {
    "name": "getMarkdown",
    "description": "Retrieves the Markdown content of the current page",
    "functionTypings": {} as BrowserModule['getMarkdown'],
    "websocketSendType": {} as GetMarkdownEvent,
    "websocketReceiveType": {} as { markdown: string },
    "websocketSendSchema": getMarkdownEventSchema,
    "websocketReceiveSchema": z.object({ markdown: z.string() })
  },
  "browser.getPDF": {
    "name": "getPDF",
    "description": "Retrieves the PDF content of the current page",
    "functionTypings": {} as BrowserModule['getPDF'],
    "websocketSendType": {} as GetPdfEvent,
    "websocketReceiveType": {} as unknown as void,
    "websocketSendSchema": getPdfEventSchema,
    "websocketReceiveSchema": z.void()
  },
  "browser.extractText": {
    "name": "extractText",
    "description": "Extracts text content from the current page",
    "functionTypings": {} as BrowserModule['extractText'],
    "websocketSendType": {} as ExtractTextEvent,
    "websocketReceiveType": {} as { text: string },
    "websocketSendSchema": extractTextEventSchema,
    "websocketReceiveSchema": z.object({ text: z.string() })
  },
  "browser.getContent": {
    "name": "getContent",
    "description": "Gets the content of the current page",
    "functionTypings": {} as BrowserModule['getContent'],
    "websocketSendType": {} as GetContentEvent,
    "websocketReceiveType": {} as { content: string },
    "websocketSendSchema": getContentEventSchema,
    "websocketReceiveSchema": z.object({ content: z.string() })
  },
  "browser.click": {
    "name": "click",
    "description": "Clicks on an element in the browser",
    "functionTypings": {} as BrowserModule['click'],
    "websocketSendType": {} as ClickEvent,
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": clickEventSchema,
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.type": {
    "name": "type",
    "description": "Types text into an element",
    "functionTypings": {} as BrowserModule['type'],
    "websocketSendType": {} as TypeEvent,
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": typeEventSchema,
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.scroll": {
    "name": "scroll",
    "description": "Scrolls the page in the specified direction",
    "functionTypings": {} as BrowserModule['scroll'],
    "websocketSendType": {} as ScrollEvent,
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": scrollEventSchema,
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.enter": {
    "name": "enter",
    "description": "Presses the Enter key",
    "functionTypings": {} as BrowserModule['enter'],
    "websocketSendType": {} as EnterEvent,
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": enterEventSchema,
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.close": {
    "name": "close",
    "description": "Closes the current page/tab",
    "functionTypings": {} as BrowserModule['close'],
    "websocketSendType": {} as CloseEvent,
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": closeEventSchema,
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.getBrowserInfo": {
    "name": "getBrowserInfo",
    "description": "Gets information about the browser",
    "functionTypings": {} as BrowserModule['getBrowserInfo'],
    "websocketSendType": {} as GetBrowserInfoEvent,
    "websocketReceiveType": {} as { info: any },
    "websocketSendSchema": getBrowserInfoEventSchema,
    "websocketReceiveSchema": z.object({ info: z.any() })
  },
  "browser.getSnapShot": {
    "name": "getSnapShot",
    "description": "Takes a snapshot of the page",
    "functionTypings": {} as BrowserModule['getSnapShot'],
    "websocketSendType": {} as GetSnapShotEvent,
    "websocketReceiveType": {} as { snapshot: any },
    "websocketSendSchema": getSnapShotEventSchema,
    "websocketReceiveSchema": z.object({ snapshot: z.any() })
  },
  "browser.pdfToText": {
    "name": "pdfToText",
    "description": "Converts the PDF content of the current page to text",
    "functionTypings": {} as BrowserModule['pdfToText'],
    "websocketSendType": {} as any, // PdfToTextEvent not available
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": z.any(),
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.search": {
    "name": "search",
    "description": "Performs a search on the current page using a specified query",
    "functionTypings": {} as BrowserModule['search'],
    "websocketSendType": {} as any, // SearchEvent not available
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": z.any(),
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },

  // Chat APIs
  "chat.getChatHistory": {
    "name": "getChatHistory",
    "description": "Retrieves the chat history from the server",
    "functionTypings": {} as ChatModule['getChatHistory'],
    "websocketSendType": {} as GetChatHistoryEvent,
    "websocketReceiveType": {} as GetChatHistoryResponse,
    "websocketSendSchema": getChatHistoryEventSchema,
    "websocketReceiveSchema": GetChatHistoryResponseSchema
  },
  "chat.sendMessage": {
    "name": "sendMessage",
    "description": "Sends a message through the WebSocket connection",
    "functionTypings": {} as ChatModule['sendMessage'],
    "websocketSendType": {} as SendMessageEvent,
    "websocketReceiveType": {} as unknown as void,
    "websocketSendSchema": sendMessageEventSchema,
    "websocketReceiveSchema": z.void()
  },
  "chat.waitforReply": {
    "name": "waitforReply",
    "description": "Waits for a reply to a sent message",
    "functionTypings": {} as ChatModule['waitforReply'],
    "websocketSendType": {} as WaitforReplyEvent,
    "websocketReceiveType": {} as { reply: string },
    "websocketSendSchema": waitforReplyEventSchema,
    "websocketReceiveSchema": z.object({ reply: z.string() })
  },
  "chat.processStarted": {
    "name": "processStarted",
    "description": "Notifies the server that a process has started",
    "functionTypings": {} as ChatModule['processStarted'],
    "websocketSendType": {} as ProcessStartedEvent,
    "websocketReceiveType": {} as { stopProcess: () => void },
    "websocketSendSchema": processStartedEventSchema,
    "websocketReceiveSchema": z.object({ stopProcess: z.function() })
  },
  "chat.stopProcess": {
    "name": "stopProcess",
    "description": "Stops the ongoing process",
    "functionTypings": {} as ChatModule['stopProcess'],
    "websocketSendType": {} as ProcessStoppedEvent,
    "websocketReceiveType": {} as unknown as void,
    "websocketSendSchema": processStoppedEventSchema,
    "websocketReceiveSchema": z.void()
  },
  "chat.processFinished": {
    "name": "processFinished",
    "description": "Indicates that the process has finished",
    "functionTypings": {} as ChatModule['processFinished'],
    "websocketSendType": {} as any, // ProcessFinishedEvent not available
    "websocketReceiveType": {} as unknown as void,
    "websocketSendSchema": z.any(),
    "websocketReceiveSchema": z.void()
  },
  "chat.askQuestion": {
    "name": "askQuestion",
    "description": "Asks a question and waits for a response",
    "functionTypings": {} as ChatModule['askQuestion'],
    "websocketSendType": null, // AskQuestionEvent does not exist
    "websocketReceiveType": {} as { answer: string },
    "websocketSendSchema": null, // askQuestionEventSchema does not exist
    "websocketReceiveSchema": z.object({ answer: z.string() })
  },

  // Agent APIs
  "agent.findAgent": {
    "name": "findAgent",
    "description": "Finds an agent by criteria",
    "functionTypings": {} as AgentModule['findAgent'],
    "websocketSendType": {} as FindAgentEvent,
    "websocketReceiveType": {} as FindAgentByTaskResponse,
    "websocketSendSchema": findAgentEventSchema,
    "websocketReceiveSchema": FindAgentByTaskResponseSchema
  },
  "agent.startAgent": {
    "name": "startAgent",
    "description": "Starts an agent",
    "functionTypings": {} as AgentModule['startAgent'],
    "websocketSendType": {} as StartAgentEvent,
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": startAgentEventSchema,
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "agent.getAgentsList": {
    "name": "getAgentsList",
    "description": "Gets a list of all agents",
    "functionTypings": {} as AgentModule['getAgentsList'],
    "websocketSendType": {} as ListAgentsEvent,
    "websocketReceiveType": {} as ListAgentsResponse,
    "websocketSendSchema": listAgentsEventSchema,
    "websocketReceiveSchema": ListAgentsResponseSchema
  },
  "agent.getAgentsDetail": {
    "name": "getAgentsDetail",
    "description": "Gets details of a specific agent",
    "functionTypings": {} as AgentModule['getAgentsDetail'],
    "websocketSendType": {} as GetAgentsDetailEvent,
    "websocketReceiveType": {} as AgentsDetailResponse,
    "websocketSendSchema": getAgentsDetailEventSchema,
    "websocketReceiveSchema": AgentsDetailResponseSchema
  },

  // Git APIs
  "git.init": {
    "name": "init",
    "description": "Initializes a new Git repository",
    "functionTypings": {} as GitModule['init'],
    "websocketSendType": {} as GitInitEvent,
    "websocketReceiveType": {} as GitInitResponse,
    "websocketSendSchema": gitInitEventSchema,
    "websocketReceiveSchema": GitInitResponseSchema
  },
  "git.addAll": {
    "name": "addAll",
    "description": "Adds all changes in the local repository to the staging area",
    "functionTypings": {} as GitModule['addAll'],
    "websocketSendType": {} as GitAddEvent,
    "websocketReceiveType": {} as GitAddResponse,
    "websocketSendSchema": gitAddEventSchema,
    "websocketReceiveSchema": GitAddResponseSchema
  },
  "git.commit": {
    "name": "commit",
    "description": "Commits staged changes",
    "functionTypings": {} as GitModule['commit'],
    "websocketSendType": {} as GitCommitEvent,
    "websocketReceiveType": {} as GitCommitResponse,
    "websocketSendSchema": gitCommitEventSchema,
    "websocketReceiveSchema": GitCommitResponseSchema
  },
  "git.push": {
    "name": "push",
    "description": "Pushes changes to remote repository",
    "functionTypings": {} as GitModule['push'],
    "websocketSendType": {} as GitPushEvent,
    "websocketReceiveType": {} as GitPushResponse,
    "websocketSendSchema": gitPushEventSchema,
    "websocketReceiveSchema": GitPushResponseSchema
  },
  "git.pull": {
    "name": "pull",
    "description": "Pulls changes from remote repository",
    "functionTypings": {} as GitModule['pull'],
    "websocketSendType": {} as GitPullEvent,
    "websocketReceiveType": {} as GitPullResponse,
    "websocketSendSchema": gitPullEventSchema,
    "websocketReceiveSchema": GitPullResponseSchema
  },
  "git.status": {
    "name": "status",
    "description": "Gets the status of the repository",
    "functionTypings": {} as GitModule['status'],
    "websocketSendType": {} as GitStatusEvent,
    "websocketReceiveType": {} as GitStatusResponse,
    "websocketSendSchema": gitStatusEventSchema,
    "websocketReceiveSchema": GitStatusResponseSchema
  },
  "git.checkout": {
    "name": "checkout",
    "description": "Switches to a different branch",
    "functionTypings": {} as GitModule['checkout'],
    "websocketSendType": {} as GitCheckoutEvent,
    "websocketReceiveType": {} as GitCheckoutResponse,
    "websocketSendSchema": gitCheckoutEventSchema,
    "websocketReceiveSchema": GitCheckoutResponseSchema
  },
  "git.branch": {
    "name": "branch",
    "description": "Creates a new branch",
    "functionTypings": {} as GitModule['branch'],
    "websocketSendType": {} as GitBranchEvent,
    "websocketReceiveType": {} as GitBranchResponse,
    "websocketSendSchema": gitBranchEventSchema,
    "websocketReceiveSchema": GitBranchResponseSchema
  },
  "git.logs": {
    "name": "logs",
    "description": "Retrieves the commit logs",
    "functionTypings": {} as GitModule['logs'],
    "websocketSendType": {} as GitLogsEvent,
    "websocketReceiveType": {} as GitLogsResponse,
    "websocketSendSchema": gitLogsEventSchema,
    "websocketReceiveSchema": GitLogsResponseSchema
  },
  "git.diff": {
    "name": "diff",
    "description": "Gets the diff of changes for a specific commit",
    "functionTypings": {} as GitModule['diff'],
    "websocketSendType": {} as GitDiffEvent,
    "websocketReceiveType": {} as GitDiffResponse,
    "websocketSendSchema": gitDiffEventSchema,
    "websocketReceiveSchema": GitDiffResponseSchema
  },

  // LLM APIs
  "llm.inference": {
    "name": "inference",
    "description": "Performs LLM inference",
    "functionTypings": {} as LLMModule['inference'],
    "websocketSendType": {} as InferenceEvent,
    "websocketReceiveType": {} as { response: any },
    "websocketSendSchema": inferenceEventSchema,
    "websocketReceiveSchema": z.object({ response: z.any() })
  },
  "llm.legacyInference": {
    "name": "legacyInference",
    "description": "Legacy method for backward compatibility - converts simple string prompt to message format",
    "functionTypings": {} as LLMModule['legacyInference'],
    "websocketSendType": {} as InferenceEvent,
    "websocketReceiveType": {} as { response: any },
    "websocketSendSchema": inferenceEventSchema,
    "websocketReceiveSchema": z.object({ response: z.any() })
  },

  // Terminal APIs
  "terminal.executeCommand": {
    "name": "executeCommand",
    "description": "Executes a given command and returns the result",
    "functionTypings": {} as TerminalModule['executeCommand'],
    "websocketSendType": {} as ExecuteCommandEvent,
    "websocketReceiveType": {} as { output: string },
    "websocketSendSchema": executeCommandEventSchema,
    "websocketReceiveSchema": z.object({ output: z.string() })
  },
  "terminal.executeCommandRunUntilError": {
    "name": "executeCommandRunUntilError",
    "description": "Executes a given command and keeps running until an error occurs",
    "functionTypings": {} as TerminalModule['executeCommandRunUntilError'],
    "websocketSendType": {} as any, // ExecuteCommandRunUntilErrorEvent not available
    "websocketReceiveType": {} as { output: string },
    "websocketSendSchema": z.any(),
    "websocketReceiveSchema": z.object({ output: z.string() })
  },
  "terminal.sendManualInterrupt": {
    "name": "sendManualInterrupt", 
    "description": "Sends a manual interrupt signal to the terminal",
    "functionTypings": {} as TerminalModule['sendManualInterrupt'],
    "websocketSendType": {} as any, // SendManualInterruptEvent not available
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": z.any(),
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "terminal.executeCommandWithStream": {
    "name": "executeCommandWithStream",
    "description": "Executes a given command and streams the output",
    "functionTypings": {} as TerminalModule['executeCommandWithStream'],
    "websocketSendType": {} as ExecuteCommandWithStreamEvent,
    "websocketReceiveType": {} as any,
    "websocketSendSchema": executeCommandWithStreamEventSchema,
    "websocketReceiveSchema": z.any()
  },

  // Task APIs
  "taskplaner.addTask": {
    "name": "addTask",
    "description": "Adds a new task with enhanced parameters",
    "functionTypings": {} as TaskModule['addTask'],
    "websocketSendType": {} as AddTaskEvent,
    "websocketReceiveType": {} as AddTaskResponse,
    "websocketSendSchema": addTaskEventSchema,
    "websocketReceiveSchema": AddTaskResponseSchema
  },
  "taskplaner.addSimpleTask": {
    "name": "addSimpleTask", 
    "description": "Adds a task using simple string parameter (legacy support)",
    "functionTypings": {} as TaskModule['addSimpleTask'],
    "websocketSendType": {} as AddTaskEvent,
    "websocketReceiveType": {} as AddTaskResponse,
    "websocketSendSchema": addTaskEventSchema,
    "websocketReceiveSchema": AddTaskResponseSchema
  },
  "taskplaner.getTasks": {
    "name": "getTasks",
    "description": "Gets all tasks with optional filtering",
    "functionTypings": {} as TaskModule['getTasks'],
    "websocketSendType": {} as GetTasksEvent,
    "websocketReceiveType": {} as GetTasksResponse,
    "websocketSendSchema": getTasksEventSchema,
    "websocketReceiveSchema": GetTasksResponseSchema
  },
  "taskplaner.updateTask": {
    "name": "updateTask",
    "description": "Updates an existing task",
    "functionTypings": {} as TaskModule['updateTask'],
    "websocketSendType": {} as UpdateTaskEvent,
    "websocketReceiveType": {} as UpdateTasksResponse,
    "websocketSendSchema": updateTaskEventSchema,
    "websocketReceiveSchema": UpdateTasksResponseSchema
  },
  "taskplaner.deleteTask": {
    "name": "deleteTask",
    "description": "Deletes a task",
    "functionTypings": {} as TaskModule['deleteTask'],
    "websocketSendType": {} as DeleteTaskEvent,
    "websocketReceiveType": {} as DeleteTaskResponse,
    "websocketSendSchema": deleteTaskEventSchema,
    "websocketReceiveSchema": DeleteTaskResponseSchema
  },
  "taskplaner.addSubTask": {
    "name": "addSubTask",
    "description": "Adds a subtask to an existing task",
    "functionTypings": {} as TaskModule['addSubTask'],
    "websocketSendType": {} as AddSubTaskEvent,
    "websocketReceiveType": {} as AddSubTaskResponse,
    "websocketSendSchema": addSubTaskEventSchema,
    "websocketReceiveSchema": AddSubTaskResponseSchema
  },
  "taskplaner.updateSubTask": {
    "name": "updateSubTask",
    "description": "Updates a subtask",
    "functionTypings": {} as TaskModule['updateSubTask'],
    "websocketSendType": {} as UpdateSubTaskEvent,
    "websocketReceiveType": {} as UpdateSubTaskResponse,
    "websocketSendSchema": updateSubTaskEventSchema,
    "websocketReceiveSchema": UpdateSubTaskResponseSchema
  },

  // Vector Database APIs
  "vectordb.addVectorItem": {
    "name": "addVectorItem",
    "description": "Adds a vector item to the database",
    "functionTypings": {} as VectorDBModule['addVectorItem'],
    "websocketSendType": {} as AddVectorItemEvent,
    "websocketReceiveType": {} as AddVectorItemResponse,
    "websocketSendSchema": addVectorItemEventSchema,
    "websocketReceiveSchema": AddVectorItemResponseSchema
  },
  "vectordb.getVector": {
    "name": "getVector",
    "description": "Retrieves a vector from the vector database based on the provided key",
    "functionTypings": {} as VectorDBModule['getVector'],
    "websocketSendType": {} as any, // GetVectorEvent not available
    "websocketReceiveType": {} as any, // GetVectorResponse not available
    "websocketSendSchema": z.any(),
    "websocketReceiveSchema": z.any()
  },
  "vectordb.queryVectorItem": {
    "name": "queryVectorItem",
    "description": "Queries a vector item from the database based on the provided key",
    "functionTypings": {} as VectorDBModule['queryVectorItem'],
    "websocketSendType": {} as QueryVectorItemEvent,
    "websocketReceiveType": {} as QueryVectorItemResponse,
    "websocketSendSchema": queryVectorItemEventSchema,
    "websocketReceiveSchema": QueryVectorItemResponseSchema
  },
  "vectordb.queryVectorItems": {
    "name": "queryVectorItems",
    "description": "Queries multiple vector items from the database",
    "functionTypings": {} as VectorDBModule['queryVectorItems'],
    "websocketSendType": {} as any, // QueryVectorItemsEvent not available  
    "websocketReceiveType": {} as any, // QueryVectorItemsResponse not available
    "websocketSendSchema": z.any(),
    "websocketReceiveSchema": z.any()
  },

  // Memory APIs  
  "dbmemory.set": {
    "name": "set",
    "description": "Sets a memory value",
    "functionTypings": {} as MemoryModule['set'],
    "websocketSendType": {} as MemorySetEvent,
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": memorySetEventSchema,
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "dbmemory.get": {
    "name": "get",
    "description": "Gets a memory value",
    "functionTypings": {} as MemoryModule['get'],
    "websocketSendType": {} as MemoryGetEvent,
    "websocketReceiveType": {} as { value: any },
    "websocketSendSchema": memoryGetEventSchema,
    "websocketReceiveSchema": z.object({ value: z.any() })
  },

  // State APIs
  "cbstate.getApplicationState": {
    "name": "getApplicationState",
    "description": "Gets application state",
    "functionTypings": {} as StateModule['getState'],
    "websocketSendType": {} as GetApplicationStateEvent,
    "websocketReceiveType": {} as { state: any },
    "websocketSendSchema": getApplicationStateEventSchema,
    "websocketReceiveSchema": z.object({ state: z.any() })
  },
  "cbstate.addToAgentState": {
    "name": "addToAgentState",
    "description": "Adds to agent state",
    "functionTypings": {} as StateModule['addToAgentState'],
    "websocketSendType": {} as AddToAgentStateEvent,
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": addToAgentStateEventSchema,
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "cbstate.getAgentState": {
    "name": "getAgentState",
    "description": "Gets agent state",
    "functionTypings": {} as StateModule['getAgentState'],
    "websocketSendType": {} as GetAgentStateEvent,
    "websocketReceiveType": {} as { state: any },
    "websocketSendSchema": getAgentStateEventSchema,
    "websocketReceiveSchema": z.object({ state: z.any() })
  },
  "cbstate.getProjectState": {
    "name": "getProjectState",
    "description": "Gets project state",
    "functionTypings": {} as StateModule['getProjectState'],
    "websocketSendType": {} as GetProjectStateEvent,
    "websocketReceiveType": {} as { state: any },
    "websocketSendSchema": getProjectStateEventSchema,
    "websocketReceiveSchema": z.object({ state: z.any() })
  },
  "cbstate.updateProjectState": {
    "name": "updateProjectState",
    "description": "Updates project state",
    "functionTypings": {} as StateModule['updateProjectState'],
    "websocketSendType": {} as UpdateProjectStateEvent,
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": updateProjectStateEventSchema,
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },

  // Debug APIs
  "debug.log": {
    "name": "log",
    "description": "Logs a debug message",
    "functionTypings": {} as DebugModule['log'],
    "websocketSendType": {} as AddLogEvent,
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": addLogEventSchema,
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },

  // Tokenizer APIs
  "tokenizer.tokenize": {
    "name": "tokenize",
    "description": "Tokenizes text",
    "functionTypings": {} as TokenizerModule['tokenize'],
    "websocketSendType": {} as AddTokenEvent,
    "websocketReceiveType": {} as AddTokenResponse,
    "websocketSendSchema": addTokenEventSchema,
    "websocketReceiveSchema": AddTokenResponseSchema
  },
  "tokenizer.countTokens": {
    "name": "countTokens",
    "description": "Counts tokens in text",
    "functionTypings": {} as TokenizerModule['countTokens'],
    "websocketSendType": {} as GetTokenEvent,
    "websocketReceiveType": {} as GetTokenResponse,
    "websocketSendSchema": getTokenEventSchema,
    "websocketReceiveSchema": GetTokenResponseSchema
  },

  // Project APIs
  "project.getProjectPath": {
    "name": "getProjectPath",
    "description": "Gets project information",
    "functionTypings": {} as ProjectModule['getProjectPath'],
    "websocketSendType": {} as GetProjectPathEvent,
    "websocketReceiveType": {} as GetProjectPathResponse,
    "websocketSendSchema": getProjectPathEventSchema,
    "websocketReceiveSchema": GetProjectPathResponseSchema
  },

  // Crawler APIs
  "crawler.crawl": {
    "name": "crawl",
    "description": "Crawls a website",
    "functionTypings": {} as CrawlerModule['crawl'],
    "websocketSendType": {} as StartCrawlerEvent,
    "websocketReceiveType": {} as CrawlerResponse,
    "websocketSendSchema": startCrawlerEventSchema,
    "websocketReceiveSchema": CrawlerResponseSchema
  },

  // MCP APIs
  "mcp.listMcpFromServers": {
    "name": "listMcpFromServers",
    "description": "Lists available MCP tools from servers",
    "functionTypings": {} as MCPModule['listMcpFromServers'],
    "websocketSendType": {} as GetEnabledToolBoxesEvent,
    "websocketReceiveType": {} as GetEnabledToolBoxesResponse,
    "websocketSendSchema": getEnabledToolBoxesEventSchema,
    "websocketReceiveSchema": GetEnabledToolBoxesResponseSchema
  },
  "mcp.getTools": {
    "name": "getTools",
    "description": "Gets tools from MCPs",
    "functionTypings": {} as MCPModule['getTools'],
    "websocketSendType": {} as GetToolsEvent,
    "websocketReceiveType": {} as GetToolsResponse,
    "websocketSendSchema": getToolsEventSchema,
    "websocketReceiveSchema": GetToolsResponseSchema
  },
  "mcp.executeTool": {
    "name": "executeTool",
    "description": "Executes an MCP tool",
    "functionTypings": {} as MCPModule['executeTool'],
    "websocketSendType": {} as ExecuteToolEvent,
    "websocketReceiveType": {} as { result: any },
    "websocketSendSchema": executeToolEventSchema,
    "websocketReceiveSchema": z.object({ result: z.any() })
  },

  // Chat Summary APIs
  "chatSummary.summarizeAll": {
    "name": "summarizeAll",
    "description": "Summarizes the entire chat history",
    "functionTypings": {} as ChatSummaryModule['summarizeAll'],
    "websocketSendType": {} as SummarizeAllEvent,
    "websocketReceiveType": {} as GetSummarizeAllResponse,
    "websocketSendSchema": summarizeAllEventSchema,
    "websocketReceiveSchema": GetSummarizeAllResponseSchema
  },
  "chatSummary.summarize": {
    "name": "summarize",
    "description": "Summarizes a specific part of the chat history",
    "functionTypings": {} as ChatSummaryModule['summarize'],
    "websocketSendType": {} as SummarizeEvent,
    "websocketReceiveType": {} as GetSummarizeResponse,
    "websocketSendSchema": summarizeEventSchema,
    "websocketReceiveSchema": GetSummarizeResponseSchema
  },
  "fs.listCodeDefinitionNames": {
    "name": "listCodeDefinitionNames",
    "description": "Lists all code definition names in the project",
    "functionTypings": {} as any, // FileSystemModule['listCodeDefinitionNames'] - method exists but not in current SDK types
    "websocketSendType": {} as ListCodeDefinitionNamesEvent,
    "websocketReceiveType": {} as ListCodeDefinitionNamesSuccessResponse | ListCodeDefinitionNamesErrorResponse,
    "websocketSendSchema": listCodeDefinitionNamesEventSchema,
    "websocketReceiveSchema": z.union([ListCodeDefinitionNamesSuccessResponseSchema, ListCodeDefinitionNamesErrorResponseSchema])
  },
  // "fs.searchFiles": {
  //   "name": "searchFiles",
  //   "websocketSendType": "SearchFilesEvent", 
  //   "websocketSendSchema": "searchFilesEventSchema",
  //   "websocketReceiveType": "SearchFilesSuccessResponse | SearchFilesErrorResponse",
  //   "websocketReceiveSchema": "z.union([SearchFilesSuccessResponseSchema, SearchFilesErrorResponseSchema])"
  // },
  // "fs.writeToFile": {
  //   "name": "writeToFile",
  //   "websocketSendType": "FsEvent",
  //   "websocketSendSchema": "fsEventBaseSchema",
  //   "websocketReceiveType": "WriteToFileSuccessResponse | WriteToFileErrorResponse",
  //   "websocketReceiveSchema": "z.union([WriteToFileSuccessResponseSchema, WriteToFileErrorResponseSchema])"
  // },
  // "fs.grepSearch": {
  //   "name": "grepSearch", 
  //   "websocketSendType": "FsEvent",
  //   "websocketSendSchema": "fsEventBaseSchema",
  //   "websocketReceiveType": "GrepSearchSuccessResponse | GrepSearchErrorResponse",
  //   "websocketReceiveSchema": "z.union([GrepSearchSuccessResponseSchema, GrepSearchErrorResponseSchema])"
  // },
  "fs.fileSearch": {
    "name": "fileSearch",
    "description": "Searches for files matching specified criteria",
    "functionTypings": {} as any, // FileSystemModule['fileSearch'] - method exists but not in current SDK types
    "websocketSendType": {} as FileSearchEvent,
    "websocketReceiveType": {} as FileSearchSuccessResponse | FileSearchErrorResponse,
    "websocketSendSchema": fileSearchEventSchema,
    "websocketReceiveSchema": z.union([FileSearchSuccessResponseSchema, FileSearchErrorResponseSchema])
  },
  "fs.editFileAndApplyDiff": {
    "name": "editFileAndApplyDiff",
    "description": "Edits a file by applying a diff patch",
    "functionTypings": {} as any, // FileSystemModule['editFileWithDiff'] - method exists but not in current SDK types
    "websocketSendType": {} as EditFileWithDiffEvent,
    "websocketReceiveType": {} as EditFileAndApplyDiffSuccessResponse | EditFileAndApplyDiffErrorResponse,
    "websocketSendSchema": editFileWithDiffEventSchema,
    "websocketReceiveSchema": z.union([EditFileAndApplyDiffSuccessResponseSchema, EditFileAndApplyDiffErrorResponseSchema])
  },

  // Browser APIs
  // "browser.newPage": {
  //   "name": "newPage",
  //   "websocketSendType": "NewPageEvent",
  //   "websocketSendSchema": "newPageEventSchema",
  //   "websocketReceiveType": "NewPageResponse", 
  //   "websocketReceiveSchema": "newPageResponseSchema"
  // },
  // "browser.getUrl": {
  //   "name": "getUrl",
  //   "websocketSendType": "GetUrlEvent",
  //   "websocketSendSchema": "getUrlEventSchema",
  //   "websocketReceiveType": "BrowserActionResponseData",
  //   "websocketReceiveSchema": "browserActionResponseDataSchema"
  // },
  // "browser.goToPage": {
  //   "name": "goToPage",
  //   "websocketSendType": "GoToPageEvent", 
  //   "websocketSendSchema": "goToPageEventSchema",
  //   "websocketReceiveType": "GoToPageResponse",
  //   "websocketReceiveSchema": "goToPageResponseSchema"
  // },
  // "browser.screenshot": {
  //   "name": "screenshot",
  //   "websocketSendType": "ScreenshotEvent",
  //   "websocketSendSchema": "screenshotEventSchema",
  //   "websocketReceiveType": "BrowserScreenshotResponse",
  //   "websocketReceiveSchema": "browserScreenshotResponseSchema"
  // },
  // "browser.getHTML": {
  //   "name": "getHTML",
  //   "websocketSendType": "GetHtmlEvent",
  //   "websocketSendSchema": "getHtmlEventSchema", 
  //   "websocketReceiveType": "HtmlReceived",
  //   "websocketReceiveSchema": "htmlReceivedSchema"
  // },
  // "browser.getMarkdown": {
  //   "name": "getMarkdown",
  //   "websocketSendType": "GetMarkdownEvent",
  //   "websocketSendSchema": "getMarkdownEventSchema",
  //   "websocketReceiveType": "GetMarkdownResponse",
  //   "websocketReceiveSchema": "getMarkdownResponseSchema"
  // },
  // "browser.getPDF": {
  //   "name": "getPDF",
  //   "websocketSendType": "GetPdfEvent",
  //   "websocketSendSchema": "getPdfEventSchema", 
  //   "websocketReceiveType": "void",
  //   "websocketReceiveSchema": "void"
  // },
  // "browser.extractText": {
  //   "name": "extractText",
  //   "websocketSendType": "ExtractTextEvent",
  //   "websocketSendSchema": "extractTextEventSchema",
  //   "websocketReceiveType": "ExtractTextResponse",
  //   "websocketReceiveSchema": "extractTextResponseSchema"
  // },
  // "browser.getContent": {
  //   "name": "getContent",
  //   "websocketSendType": "GetContentEvent", 
  //   "websocketSendSchema": "getContentEventSchema",
  //   "websocketReceiveType": "GetContentResponse",
  //   "websocketReceiveSchema": "getContentResponseSchema"
  // },
  // "browser.click": {
  //   "name": "click",
  //   "websocketSendType": "ClickEvent",
  //   "websocketSendSchema": "clickEventSchema",
  //   "websocketReceiveType": "BrowserActionResponseData",
  //   "websocketReceiveSchema": "browserActionResponseDataSchema"
  // },
  // "browser.type": {
  //   "name": "type",
  //   "websocketSendType": "TypeTextEvent",
  //   "websocketSendSchema": "typeTextEventSchema", 
  //   "websocketReceiveType": "BrowserActionResponseData",
  //   "websocketReceiveSchema": "browserActionResponseDataSchema"
  // },
  // "browser.scroll": {
  //   "name": "scroll",
  //   "websocketSendType": "ScrollEvent",
  //   "websocketSendSchema": "scrollEventSchema",
  //   "websocketReceiveType": "BrowserActionResponseData",
  //   "websocketReceiveSchema": "browserActionResponseDataSchema"
  // },
  "browser.wait": {
    "name": "wait",
    "description": "Waits for a specified duration or condition",
    "functionTypings": {} as any, // BrowserModule['wait'] - method exists but not in current SDK types
    "websocketSendType": null, // WaitEvent not available in current schema exports
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": null, // waitEventSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.evaluate": {
    "name": "evaluate",
    "description": "Evaluates JavaScript code in the browser context",
    "functionTypings": {} as any, // BrowserModule['evaluate'] - method exists but not in current SDK types
    "websocketSendType": null, // EvaluateEvent not available in current schema exports
    "websocketReceiveType": {} as { result: any },
    "websocketSendSchema": null, // evaluateEventSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ result: z.any() })
  },
  "browser.getElementInfo": {
    "name": "getElementInfo",
    "description": "Gets information about a browser element",
    "functionTypings": {} as any, // BrowserModule['getElementInfo'] - method exists but not in current SDK types
    "websocketSendType": null, // GetElementInfoEvent not available in current schema exports
    "websocketReceiveType": {} as { info: any },
    "websocketSendSchema": null, // getElementInfoEventSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ info: z.any() })
  },
  "browser.takeElementScreenshot": {
    "name": "takeElementScreenshot",
    "description": "Takes a screenshot of a specific element",
    "functionTypings": {} as any, // BrowserModule['takeElementScreenshot'] - method exists but not in current SDK types
    "websocketSendType": null, // TakeElementScreenshotEvent not available in current schema exports
    "websocketReceiveType": {} as { screenshot: string },
    "websocketSendSchema": null, // takeElementScreenshotEventSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ screenshot: z.string() })
  },
  "browser.setViewport": {
    "name": "setViewport",
    "description": "Sets the browser viewport size",
    "functionTypings": {} as any, // BrowserModule['setViewport'] - method exists but not in current SDK types
    "websocketSendType": null, // SetViewportEvent not available in current schema exports
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": null, // setViewportEventSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.reloadPage": {
    "name": "reloadPage",
    "description": "Reloads the current browser page",
    "functionTypings": {} as any, // BrowserModule['reloadPage'] - method exists but not in current SDK types
    "websocketSendType": null, // ReloadPageEvent not available in current schema exports
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": null, // reloadPageEventSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.goBack": {
    "name": "goBack",
    "description": "Navigates back in browser history",
    "functionTypings": {} as any, // BrowserModule['goBack'] - method exists but not in current SDK types
    "websocketSendType": null, // GoBackEvent not available in current schema exports
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": null, // goBackEventSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.goForward": {
    "name": "goForward",
    "description": "Navigates forward in browser history",
    "functionTypings": {} as any, // BrowserModule['goForward'] - method exists but not in current SDK types
    "websocketSendType": null, // GoForwardEvent not available in current schema exports
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": null, // goForwardEventSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.closeBrowser": {
    "name": "closeBrowser",
    "description": "Closes the browser",
    "functionTypings": {} as any, // BrowserModule['closeBrowser'] - method exists but not in current SDK types
    "websocketSendType": null, // CloseBrowserEvent not available in current schema exports
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": null, // closeBrowserEventSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.getSnapshot": {
    "name": "getSnapshot",
    "description": "Gets a snapshot of the current page",
    "functionTypings": {} as BrowserModule['getSnapShot'],
    "websocketSendType": null, // BrowserEvent not available in current schema exports
    "websocketReceiveType": {} as { snapshot: any },
    "websocketSendSchema": null, // browserEventBaseSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ snapshot: z.any() })
  },

  // Chat APIs
  // "chat.getChatHistory": {
  //   "name": "getChatHistory",
  //   "websocketSendType": "GetChatHistoryEvent",
  //   "websocketSendSchema": "getChatHistoryEventSchema",
  //   "websocketReceiveType": "GetChatHistoryResponse",
  //   "websocketReceiveSchema": "getChatHistoryResponseSchema"
  // },
  // "chat.sendMessage": {
  //   "name": "sendMessage",
  //   "websocketSendType": "SendMessageEvent", 
  //   "websocketSendSchema": "sendMessageEventSchema",
  //   "websocketReceiveType": "void",
  //   "websocketReceiveSchema": "void"
  // },
  // "chat.waitforReply": {
  //   "name": "waitforReply",
  //   "websocketSendType": "ChatEvent",
  //   "websocketSendSchema": "chatEventBaseSchema",
  //   "websocketReceiveType": "UserMessage",
  //   "websocketReceiveSchema": "userMessageSchema"
  // },
  // "chat.processStarted": {
  //   "name": "processStarted",
  //   "websocketSendType": "ProcessStoppedEvent", 
  //   "websocketSendSchema": "processStoppedEventSchema",
  //   "websocketReceiveType": "ProcessStoppedResponse",
  //   "websocketReceiveSchema": "processStoppedResponseSchema"
  // },
  // "chat.askQuestion": {
  //   "name": "askQuestion",
  //   "websocketSendType": "ChatEvent",
  //   "websocketSendSchema": "chatEventBaseSchema",
  //   "websocketReceiveType": "string",
  //   "websocketReceiveSchema": "z.string()"
  // },
  // "chat.askQuestionWithChoices": {
  //   "name": "askQuestionWithChoices",
  //   "description": "Asks a question with multiple choice options",
  //   "functionTypings": {} as any, // ChatModule['askQuestionWithChoices'] - method exists but not in current SDK types
  //   "websocketSendType": null, // ChatEvent not available as generic type
  //   "websocketReceiveType": {} as string,
  //   "websocketSendSchema": null, // chatEventBaseSchema not available
  //   "websocketReceiveSchema": z.string()
  // },
  "chat.sendConfirmationRequest": {
    "name": "sendConfirmationRequest",
    "description": "Sends a confirmation request to the user",
    "functionTypings": {} as ChatModule['sendConfirmationRequest'], 
    "websocketSendType": {} as ConfirmationRequestEvent,
    "websocketReceiveType": {} as boolean,
    "websocketSendSchema": confirmationRequestEventSchema,
    "websocketReceiveSchema": z.boolean()
  },

  // Agent APIs
  // "agent.findAgent": {
  //   "name": "findAgent",
  //   "websocketSendType": "FindAgentEvent", 
  //   "websocketSendSchema": "findAgentEventSchema",
  //   "websocketReceiveType": "FindAgentByTaskResponse",
  //   "websocketReceiveSchema": "findAgentByTaskResponseSchema"
  // },
  // "agent.startAgent": {
  //   "name": "startAgent",
  //   "websocketSendType": "StartAgentEvent",
  //   "websocketSendSchema": "startAgentEventSchema",
  //   "websocketReceiveType": "TaskCompletionResponse",
  //   "websocketReceiveSchema": "taskCompletionResponseSchema"
  // },
  // "agent.getAgentsList": {
  //   "name": "getAgentsList",
  //   "websocketSendType": "ListAgentsEvent", 
  //   "websocketSendSchema": "listAgentsEventSchema",
  //   "websocketReceiveType": "ListAgentsResponse",
  //   "websocketReceiveSchema": "listAgentsResponseSchema"
  // },
  // "agent.getAgentsDetail": {
  //   "name": "getAgentsDetail",
  //   "websocketSendType": "GetAgentDetailsEvent",
  //   "websocketSendSchema": "getAgentDetailsEventSchema",
  //   "websocketReceiveType": "AgentsDetailResponse",
  //   "websocketReceiveSchema": "agentsDetailResponseSchema"
  // },

  // // Git APIs
  // "git.init": {
  //   "name": "init",
  //   "websocketSendType": "GitInitEvent", 
  //   "websocketSendSchema": "gitInitEventSchema",
  //   "websocketReceiveType": "GitInitResponse",
  //   "websocketReceiveSchema": "gitInitResponseSchema"
  // },
  // "git.pull": {
  //   "name": "pull",
  //   "websocketSendType": "GitPullEvent",
  //   "websocketSendSchema": "gitPullEventSchema",
  //   "websocketReceiveType": "GitPullResponse",
  //   "websocketReceiveSchema": "gitPullResponseSchema"
  // },
  // "git.push": {
  //   "name": "push",
  //   "websocketSendType": "GitPushEvent", 
  //   "websocketSendSchema": "gitPushEventSchema",
  //   "websocketReceiveType": "GitPushResponse",
  //   "websocketReceiveSchema": "gitPushResponseSchema"
  // },
  // "git.status": {
  //   "name": "status",
  //   "websocketSendType": "GitStatusEvent",
  //   "websocketSendSchema": "gitStatusEventSchema",
  //   "websocketReceiveType": "GitStatusResponse",
  //   "websocketReceiveSchema": "gitStatusResponseSchema"
  // },

  // "git.commit": {
  //   "name": "commit",
  //   "websocketSendType": "GitCommitEvent",
  //   "websocketSendSchema": "gitCommitEventSchema",
  //   "websocketReceiveType": "GitCommitResponse",
  //   "websocketReceiveSchema": "gitCommitResponseSchema"
  // },
  // "git.checkout": {
  //   "name": "checkout",
  //   "websocketSendType": "GitCheckoutEvent", 
  //   "websocketSendSchema": "gitCheckoutEventSchema",
  //   "websocketReceiveType": "GitCheckoutResponse",
  //   "websocketReceiveSchema": "gitCheckoutResponseSchema"
  // },
  // "git.branch": {
  //   "name": "branch",
  //   "websocketSendType": "GitBranchEvent",
  //   "websocketSendSchema": "gitBranchEventSchema",
  //   "websocketReceiveType": "GitBranchResponse",
  //   "websocketReceiveSchema": "gitBranchResponseSchema"
  // },
  // "git.logs": {
  //   "name": "logs",
  //   "websocketSendType": "GitLogsEvent", 
  //   "websocketSendSchema": "gitLogsEventSchema",
  //   "websocketReceiveType": "GitLogsResponse",
  //   "websocketReceiveSchema": "gitLogsResponseSchema"
  // },
  // "git.diff": {
  //   "name": "diff",
  //   "websocketSendType": "GitDiffEvent",
  //   "websocketSendSchema": "gitDiffEventSchema",
  //   "websocketReceiveType": "GitDiffResponse",
  //   "websocketReceiveSchema": "gitDiffResponseSchema"
  // },
  //"git.clone": {
  //  "name": "clone",
  //  "description": "Clones a git repository",
  //  "functionTypings": {} as any, // GitModule['clone'] - method exists but not in current SDK types
  //  "websocketSendType": null, // GitCloneEvent not available in current schema exports
  //  "websocketReceiveType": {} as { success: boolean },
  //  "websocketSendSchema": null, // gitCloneEventSchema not available in current schema exports
  //  "websocketReceiveSchema": z.object({ success: z.boolean() })
  //},

  // LLM APIs
  // "llm.inference": {
  //   "name": "inference",
  //   "websocketSendType": "InferenceEvent",
  //   "websocketSendSchema": "inferenceEventSchema",
  //   "websocketReceiveType": "LLMResponse",
  //   "websocketReceiveSchema": "llmResponseSchema"
  // },

  // Terminal API duplicates removed - using earlier definitions
  // "terminal.sendInterruptToTerminal": {
  //   "name": "sendInterruptToTerminal",
  //   "description": "Sends an interrupt signal to the terminal",
  //   "functionTypings": {} as any, // TerminalModule['sendInterruptToTerminal'] - method exists but not in current SDK types
  //   "websocketSendType": null, // SendInterruptToTerminalEvent not available in current schema exports
  //   "websocketReceiveType": {} as { success: boolean },
  //   "websocketSendSchema": null, // sendInterruptToTerminalEventSchema not available in current schema exports
  //   "websocketReceiveSchema": z.object({ success: z.boolean() })
  // },

  // Task APIs (duplicates removed - using earlier definitions)
  // "taskplaner.getTasks": {
  //   "name": "getTasks",
  //   "websocketSendType": "GetTasksEvent", 
  //   "websocketSendSchema": "getTasksEventSchema",
  //   "websocketReceiveType": "GetTasksResponse",
  //   "websocketReceiveSchema": "getTasksResponseSchema"
  // },
  "taskplaner.getTasksByAgent": {
    "name": "getTasksByAgent",
    "description": "Retrieves tasks for a specific agent",
    "functionTypings": {} as TaskModule['getTasksByAgent'],
    "websocketSendType": {} as GetTasksByAgentEvent,
    "websocketReceiveType": {} as GetTasksByAgentResponse,
    "websocketSendSchema": getTasksByAgentEventSchema, 
    "websocketReceiveSchema": GetTasksByAgentResponseSchema
  },
  // "taskplaner.updateTask": {
  //   "name": "updateTask",
  //   "websocketSendType": "UpdateTaskEvent", 
  //   "websocketSendSchema": "updateTaskEventSchema",
  //   "websocketReceiveType": "UpdateTaskResponse",
  //   "websocketReceiveSchema": "updateTaskResponseSchema"
  // },
  // "taskplaner.deleteTask": {
  //   "name": "deleteTask",
  //   "websocketSendType": "DeleteTaskEvent",
  //   "websocketSendSchema": "deleteTaskEventSchema",
  //   "websocketReceiveType": "DeleteTaskResponse",
  //   "websocketReceiveSchema": "deleteTaskResponseSchema"
  // },
  // "taskplaner.addSubTask": {
  //   "name": "addSubTask",
  //   "websocketSendType": "AddSubTaskEvent", 
  //   "websocketSendSchema": "addSubTaskEventSchema",
  //   "websocketReceiveType": "AddSubTaskResponse",
  //   "websocketReceiveSchema": "addSubTaskResponseSchema"
  // },
  // "taskplaner.updateSubTask": {
  //   "name": "updateSubTask",
  //   "websocketSendType": "UpdateSubTaskEvent",
  //   "websocketSendSchema": "updateSubTaskEventSchema",
  //   "websocketReceiveType": "UpdateSubTaskResponse",
  //   "websocketReceiveSchema": "updateSubTaskResponseSchema"
  // },

  // Vector Database APIs (duplicates removed - using earlier definitions)

  // Memory APIs
  // "dbmemory.set": {
  //   "name": "set",
  //   "websocketSendType": "MemorySetEvent",
  //   "websocketSendSchema": "memorySetEventSchema",
  //   "websocketReceiveType": "MemorySetResponse",
  //   "websocketReceiveSchema": "memorySetResponseSchema"
  // },
  // "dbmemory.get": {
  //   "name": "get",
  //   "websocketSendType": "MemoryGetEvent", 
  //   "websocketSendSchema": "memoryGetEventSchema",
  //   "websocketReceiveType": "MemoryGetResponse",
  //   "websocketReceiveSchema": "memoryGetResponseSchema"
  // },
  // "dbmemory.delete": {
  //   "name": "delete",
  //   "description": "Deletes a memory entry",
  //   "functionTypings": {} as any, // MemoryModule['delete'] - method exists but not in current SDK types
  //   "websocketSendType": null, // MemoryDeleteEvent not available in current schema exports
  //   "websocketReceiveType": {} as { success: boolean },
  //   "websocketSendSchema": null, // memoryDeleteEventSchema not available in current schema exports
  //   "websocketReceiveSchema": z.object({ success: z.boolean() })
  // },

  // State APIs
  // "cbstate.getApplicationState": {
  //   "name": "getApplicationState",
  //   "websocketSendType": "GetApplicationStateEvent", 
  //   "websocketSendSchema": "getApplicationStateEventSchema",
  //   "websocketReceiveType": "GetApplicationStateResponse",
  //   "websocketReceiveSchema": "getApplicationStateResponseSchema"
  // },
  // "cbstate.addToAgentState": {
  //   "name": "addToAgentState",
  //   "websocketSendType": "AddToAgentStateEvent",
  //   "websocketSendSchema": "addToAgentStateEventSchema",
  //   "websocketReceiveType": "AddToAgentStateResponse",
  //   "websocketReceiveSchema": "addToAgentStateResponseSchema"
  // },
  // "cbstate.getAgentState": {
  //   "name": "getAgentState",
  //   "websocketSendType": "GetAgentStateEvent", 
  //   "websocketSendSchema": "getAgentStateEventSchema",
  //   "websocketReceiveType": "GetAgentStateResponse",
  //   "websocketReceiveSchema": "getAgentStateResponseSchema"
  // },
  // "cbstate.getProjectState": {
  //   "name": "getProjectState",
  //   "websocketSendType": "GetProjectStateEvent",
  //   "websocketSendSchema": "getProjectStateEventSchema",
  //   "websocketReceiveType": "GetProjectStateResponse",
  //   "websocketReceiveSchema": "getProjectStateResponseSchema"
  // },
  // "cbstate.updateProjectState": {
  //   "name": "updateProjectState",
  //   "websocketSendType": "UpdateProjectStateEvent", 
  //   "websocketSendSchema": "updateProjectStateEventSchema",
  //   "websocketReceiveType": "UpdateProjectStateResponse",
  //   "websocketReceiveSchema": "updateProjectStateResponseSchema"
  // },

  // Debug APIs
  // "debug.addLog": {
  //   "name": "addLog",
  //   "description": "Adds a debug log entry",
  //   "functionTypings": {} as DebugModule['log'],
  //   "websocketSendType": {} as AddLogEvent,
  //   "websocketReceiveType": {} as { success: boolean },
  //   "websocketSendSchema": addLogEventSchema,
  //   "websocketReceiveSchema": z.object({ success: z.boolean() })
  // },
  "debug.openDebugBrowser": {
    "name": "openDebugBrowser",
    "description": "Opens a debug browser instance",
    "functionTypings": {} as DebugModule['openDebugBrowser'],
    "websocketSendType": {} as OpenDebugBrowserEvent,
    "websocketReceiveType": {} as OpenDebugBrowserResponse,
    "websocketSendSchema": openDebugBrowserEventSchema,
    "websocketReceiveSchema": OpenDebugBrowserResponseSchema
  },

  // Tokenizer APIs
  "tokenizer.addToken": {
    "name": "addToken",
    "description": "Adds a token for tokenization",
    "functionTypings": {} as TokenizerModule['tokenize'],
    "websocketSendType": {} as AddTokenEvent,
    "websocketReceiveType": {} as AddTokenResponse,
    "websocketSendSchema": addTokenEventSchema,
    "websocketReceiveSchema": AddTokenResponseSchema
  },
  "tokenizer.getToken": {
    "name": "getToken",
    "description": "Gets token information",
    "functionTypings": {} as TokenizerModule['countTokens'],
    "websocketSendType": {} as GetTokenEvent,
    "websocketReceiveType": {} as GetTokenResponse,
    "websocketSendSchema": getTokenEventSchema,
    "websocketReceiveSchema": GetTokenResponseSchema
  },

  // Project APIs
  "project.getProjectSettings": {
    "name": "getProjectSettings",
    "description": "Gets project settings and configuration",
    "functionTypings": {} as ProjectModule['getProjectSettings'],
    "websocketReceiveType": {} as GetProjectSettingsResponse,
    "websocketSendSchema": getProjectSettingsEventSchema, 
    "websocketReceiveSchema": GetProjectSettingsResponseSchema
  },
  // "project.getProjectPath": {
  //   "name": "getProjectPath",
  //   "websocketSendType": "GetProjectPathEvent", 
  //   "websocketSendSchema": "getProjectPathEventSchema",
  //   "websocketReceiveType": "GetProjectPathResponse",
  //   "websocketReceiveSchema": "getProjectPathResponseSchema"
  // },
  "project.getRepoMap": {
    "name": "getRepoMap",
    "description": "Gets a map of the repository structure",
    "functionTypings": {} as any, // ProjectModule['getRepoMap'] - method exists but not in current SDK types
    "websocketSendType": null, // GetRepoMapEvent not available in current schema exports
    "websocketReceiveType": {} as { repoMap: any },
    "websocketSendSchema": null, // getRepoMapEventSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ repoMap: z.any() })
  },

  // Crawler APIs
  "crawler.startCrawler": {
    "name": "startCrawler",
    "description": "Starts a web crawler",
    "functionTypings": {} as CrawlerModule['crawl'],
    "websocketSendType": {} as StartCrawlerEvent,
    "websocketReceiveType": {} as CrawlerResponse,
    "websocketSendSchema": startCrawlerEventSchema,
    "websocketReceiveSchema": CrawlerResponseSchema
  },
  "crawler.crawlerGoToPage": {
    "name": "crawlerGoToPage",
    "description": "Navigates crawler to a specific page",
    "functionTypings": {} as any, // CrawlerModule['crawlerGoToPage'] - method exists but not in current SDK types
    "websocketSendType": null, // CrawlerGoToPageEvent not available in current schema exports
    "websocketReceiveType": {} as CrawlerResponse,
    "websocketSendSchema": null, // crawlerGoToPageEventSchema not available in current schema exports
    "websocketReceiveSchema": CrawlerResponseSchema
  },

  // MCP APIs
  "mcp.getEnabledToolBoxes": {
    "name": "getEnabledToolBoxes",
    "description": "Gets enabled MCP toolboxes",
    "functionTypings": {} as MCPModule['listMcpFromServers'],
    "websocketSendType": {} as GetEnabledToolBoxesEvent,
    "websocketReceiveType": {} as GetEnabledToolBoxesResponse,
    "websocketSendSchema": getEnabledToolBoxesEventSchema,
    "websocketReceiveSchema": GetEnabledToolBoxesResponseSchema
  },
  // "mcp.getTools": {
  //   "name": "getTools",
  //   "websocketSendType": "GetToolsEvent",
  //   "websocketSendSchema": "getToolsEventSchema",
  //   "websocketReceiveType": "GetToolsResponse",
  //   "websocketReceiveSchema": "getToolsResponseSchema"
  // },
  // "mcp.executeTool": {
  //   "name": "executeTool",
  //   "websocketSendType": "ExecuteToolEvent", 
  //   "websocketSendSchema": "executeToolEventSchema",
  //   "websocketReceiveType": "ExecuteToolResponse",
  //   "websocketReceiveSchema": "executeToolResponseSchema"
  // },

  // Code Utils APIs
  "codeutils.getAllFilesMarkdown": {
    "name": "getAllFilesMarkdown",
    "description": "Gets all files as markdown",
    "functionTypings": {} as any, // CodeUtilsModule['getAllFilesMarkdown'] - method exists but not in current SDK types
    "websocketSendType": null, // CodeUtilsEvent not available in current schema exports
    "websocketReceiveType": {} as { markdown: string },
    "websocketSendSchema": null, // codeUtilsEventBaseSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ markdown: z.string() })
  },
  "codeutils.getMatcherListTree": {
    "name": "getMatcherListTree",
    "description": "Gets matcher list tree structure",
    "functionTypings": {} as any, // CodeUtilsModule['getMatcherListTree'] - method exists but not in current SDK types
    "websocketSendType": null, // CodeUtilsEvent not available in current schema exports
    "websocketReceiveType": {} as { tree: any },
    "websocketSendSchema": null, // codeUtilsEventBaseSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ tree: z.any() })
  },
  "codeutils.getMatchDetail": {
    "name": "getMatchDetail",
    "description": "Gets details of a specific match",
    "functionTypings": {} as any, // CodeUtilsModule['getMatchDetail'] - method exists but not in current SDK types
    "websocketSendType": null, // CodeUtilsEvent not available in current schema exports
    "websocketReceiveType": {} as { detail: any },
    "websocketSendSchema": null, // codeUtilsEventBaseSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ detail: z.any() })
  },

  // Code Parsers APIs
  "codeparsers.getJSTree": {
    "name": "getJSTree",
    "description": "Gets JavaScript AST tree",
    "functionTypings": {} as any, // CodeParsersModule['getJSTree'] - method exists but not in current SDK types
    "websocketSendType": null, // JSTreeParserEvent not available in current schema exports
    "websocketReceiveType": {} as { tree: any },
    "websocketSendSchema": null, // jsTreeParserEventBaseSchema not available in current schema exports
    "websocketReceiveSchema": z.object({ tree: z.any() })
  },

  // Utils APIs
  "utils.editFileAndApplyDiff": {
    "name": "editFileAndApplyDiff",
    "description": "Edits a file and applies diff changes",
    "functionTypings": {} as any, // Utils module method - exists but not in current SDK types
    "websocketSendType": null, // EditFileAndApplyDiffEvent for utils not same as fs version
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": null, // editFileAndApplyDiffEventSchema for utils not available
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },

  // Chat Summary APIs
  // "chatSummary.summarizeAll": {
  //   "name": "summarizeAll",
  //   "websocketSendType": "SummarizeAllEvent", 
  //   "websocketSendSchema": "summarizeAllEventSchema",
  //   "websocketReceiveType": "GetSummarizeAllResponse",
  //   "websocketReceiveSchema": "getSummarizeAllResponseSchema"
  // },
  // "chatSummary.summarize": {
  //   "name": "summarize",
  //   "websocketSendType": "SummarizeEvent",
  //   "websocketSendSchema": "summarizeEventSchema",
  //   "websocketReceiveType": "GetSummarizeResponse",
  //   "websocketReceiveSchema": "getSummarizeResponseSchema"
  // }
};
