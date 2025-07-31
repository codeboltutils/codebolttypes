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
  type SummarizeEvent
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
  type GetSummarizeResponse
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
  getChatHistoryEventSchema,
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
  summarizeEventSchema
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
  GetSummarizeResponseSchema
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
} from './codeboltjstypes/sdktypes/index';

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
    "websocketReceiveType": {} as void,
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
    "websocketSendType": {} as any, // EnterEvent not imported
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": z.any(), // enterEventSchema not imported
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.close": {
    "name": "close",
    "description": "Closes the current page/tab",
    "functionTypings": {} as BrowserModule['close'],
    "websocketSendType": {} as any, // CloseEvent not imported
    "websocketReceiveType": {} as { success: boolean },
    "websocketSendSchema": z.any(), // closeEventSchema not imported
    "websocketReceiveSchema": z.object({ success: z.boolean() })
  },
  "browser.getBrowserInfo": {
    "name": "getBrowserInfo",
    "description": "Gets information about the browser",
    "functionTypings": {} as BrowserModule['getBrowserInfo'],
    "websocketSendType": {} as any, // GetBrowserInfoEvent not imported
    "websocketReceiveType": {} as { info: any },
    "websocketSendSchema": z.any(), // getBrowserInfoEventSchema not imported
    "websocketReceiveSchema": z.object({ info: z.any() })
  },
  "browser.getSnapShot": {
    "name": "getSnapShot",
    "description": "Takes a snapshot of the page",
    "functionTypings": {} as BrowserModule['getSnapShot'],
    "websocketSendType": {} as any, // GetSnapShotEvent not imported
    "websocketReceiveType": {} as { snapshot: any },
    "websocketSendSchema": z.any(), // getSnapShotEventSchema not imported
    "websocketReceiveSchema": z.object({ snapshot: z.any() })
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
    "websocketReceiveType": {} as void,
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
  "chat.processStoped": {
    "name": "processStoped",
    "description": "Notifies the server that a process has stopped",
    "functionTypings": {} as ChatModule['processStoped'],
    "websocketSendType": {} as ProcessStoppedEvent,
    "websocketReceiveType": {} as void,
    "websocketSendSchema": processStoppedEventSchema,
    "websocketReceiveSchema": z.void()
  },
  "chat.askQuestion": {
    "name": "askQuestion",
    "description": "Asks a question and waits for a response",
    "functionTypings": {} as ChatModule['askQuestion'],
    "websocketSendType": {} as any, // AskQuestionEvent not imported
    "websocketReceiveType": {} as { answer: string },
    "websocketSendSchema": z.any(), // askQuestionEventSchema not imported
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
  "git.add": {
    "name": "add",
    "description": "Adds files to the staging area",
    "functionTypings": {} as GitModule['add'],
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
  "llm.chat": {
    "name": "chat",
    "description": "Sends a chat message to LLM",
    "functionTypings": {} as LLMModule['chat'],
    "websocketSendType": {} as any, // ChatEvent not imported
    "websocketReceiveType": {} as { response: any },
    "websocketSendSchema": z.any(), // chatEventSchema not imported
    "websocketReceiveSchema": z.object({ response: z.any() })
  },

  // Terminal APIs
  "terminal.execute": {
    "name": "execute",
    "description": "Executes a command in the terminal",
    "functionTypings": {} as TerminalModule['execute'],
    "websocketSendType": {} as ExecuteCommandEvent,
    "websocketReceiveType": {} as { output: string },
    "websocketSendSchema": executeCommandEventSchema,
    "websocketReceiveSchema": z.object({ output: z.string() })
  },
  "terminal.executeStream": {
    "name": "executeStream",
    "description": "Executes a command and returns a stream for real-time output",
    "functionTypings": {} as TerminalModule['executeStream'],
    "websocketSendType": {} as ExecuteCommandWithStreamEvent,
    "websocketReceiveType": {} as any,
    "websocketSendSchema": executeCommandWithStreamEventSchema,
    "websocketReceiveSchema": z.any()
  },

  // Task APIs
  "taskplaner.createTask": {
    "name": "createTask",
    "description": "Creates a new task",
    "functionTypings": {} as TaskModule['createTask'],
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
  "vectordb.add": {
    "name": "add",
    "description": "Adds a vector to the database",
    "functionTypings": {} as VectorDBModule['add'],
    "websocketSendType": {} as AddVectorItemEvent,
    "websocketReceiveType": {} as AddVectorItemResponse,
    "websocketSendSchema": addVectorItemEventSchema,
    "websocketReceiveSchema": AddVectorItemResponseSchema
  },
  "vectordb.query": {
    "name": "query",
    "description": "Queries vectors from the database",
    "functionTypings": {} as VectorDBModule['query'],
    "websocketSendType": {} as QueryVectorItemEvent,
    "websocketReceiveType": {} as QueryVectorItemResponse,
    "websocketSendSchema": queryVectorItemEventSchema,
    "websocketReceiveSchema": QueryVectorItemResponseSchema
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
  }
};