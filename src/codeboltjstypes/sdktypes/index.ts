// These are the types that are used by the SDK that are exposed to the user.

/**
 * TypeScript type definitions for all functions exposed by the CodeboltJS SDK
 * 
 * This file provides comprehensive type definitions for:
 * - Core Codebolt class methods and properties
 * - All module functions (fs, browser, chat, terminal, git, etc.)
 * - Function parameters and return types
 * - Configuration options and interfaces
 */

// ================================
// Import Required Types
// ================================

// Basic types from the library
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  metadata?: Record<string, any>;
}

export interface UserMessage {
  type: string;
  userMessage: string;
  currentFile: string;
  mentionedFiles: string[];
  mentionedFullPaths: string[];
  mentionedMCPs: string[];
  mentionedFolders: string[];
  uploadedImages: string[];
  selectedAgent: {
    id: string;
    name: string;
  };
  messageId: string;
  threadId: string;
  selection?: any;
  remixPrompt?: string;
  mentionedAgents?: any[];
}

export interface Message {
  role: 'user' | 'assistant' | 'tool' | 'system';
  content: any[] | string;
  tool_call_id?: string;
  tool_calls?: ToolCall[];
  [key: string]: any;
}

export interface ToolCall {
  id: string;
  type: 'function';
  function: {
    name: string;
    arguments: string;
  };
}

export interface Tool {
  type: 'function';
  function: {
    name: string;
    description?: string;
    parameters?: any;
  };
}

export interface AgentDetail {
  id: string;
  name: string;
  description: string;
  capabilities?: string[];
  isLocal: boolean;
  version: string;
  status: string;
  unique_id: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  phase?: string;
  category?: string;
  agentId: string;
  subtasks: SubTask[];
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  priority?: 'low' | 'medium' | 'high';
  tags?: string[];
}

export interface SubTask {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  requirements?: string[];
}

export interface VectorItem {
  id: string;
  vector: number[];
  metadata: Record<string, any>;
  content?: string;
}

export interface FileEntry {
  name: string;
  isDirectory: boolean;
  size?: number;
  modified?: string;
  created?: string;
  permissions?: string;
}

export interface BrowserElement {
  id: string;
  tag: string;
  text: string;
  attributes: Record<string, string>;
}

export interface GitFileStatus {
  path: string;
  index: string;
  working_dir: string;
}

export interface StatusResult {
  not_added: string[];
  conflicted: string[];
  created: string[];
  deleted: string[];
  modified: string[];
  renamed: string[];
  files: GitFileStatus[];
  staged: string[];
  ahead: number;
  behind: number;
  current: string | null;
  tracking: string | null;
  detached: boolean;
}

export interface CommitSummary {
  hash: string;
  date: string;
  message: string;
  refs: string;
  body: string;
  author_name: string;
  author_email: string;
}

export interface MCPTool {
  name?: string;
  toolbox?: string;
  toolName?: string;
  tools?: any[];
  description?: string;
  parameters?: Record<string, any>;
}

export interface ASTNode {
  type: string;
  text: string;
  startPosition: { row: number; column: number };
  endPosition: { row: number; column: number };
  children: ASTNode[];
}

// ================================
// File System Module Types
// ================================

export interface FileSystemModule {
  /**
   * Creates a new file
   * @param fileName - The name of the file to create
   * @param source - The source content to write into the file
   * @param filePath - The path where the file should be created
   */
  createFile(fileName: string, source: string, filePath: string): Promise<APIResponse>;

  /**
   * Creates a new folder
   * @param folderName - The name of the folder to create
   * @param folderPath - The path where the folder should be created
   */
  createFolder(folderName: string, folderPath: string): Promise<APIResponse>;

  /**
   * Reads the content of a file
   * @param filePath - The path of the file to read
   */
  readFile(filePath: string): Promise<APIResponse<string>>;

  /**
   * Updates the content of a file
   * @param filename - The name of the file to update
   * @param filePath - The path of the file to update
   * @param newContent - The new content to write into the file
   */
  updateFile(filename: string, filePath: string, newContent: string): Promise<APIResponse>;

  /**
   * Deletes a file
   * @param filename - The name of the file to delete
   * @param filePath - The path of the file to delete
   */
  deleteFile(filename: string, filePath: string): Promise<APIResponse>;

  /**
   * Deletes a folder
   * @param folderName - The name of the folder to delete
   * @param folderPath - The path of the folder to delete
   */
  deleteFolder(folderName: string, folderPath: string): Promise<APIResponse>;

  /**
   * Lists files in a directory
   * @param path - The directory path to list
   * @param recursive - Whether to list files recursively
   */
  listFile(path: string, recursive?: boolean): Promise<APIResponse<FileEntry[]>>;

  /**
   * Searches for files
   * @param query - Search query
   * @param options - Search options
   */
  searchFiles(query: string, options?: {
    path?: string;
    filePattern?: string;
    caseSensitive?: boolean;
  }): Promise<APIResponse>;

  /**
   * Performs grep search
   * @param query - Search pattern
   * @param options - Grep options
   */
  grepSearch(query: string, options?: {
    path?: string;
    includePattern?: string;
    excludePattern?: string;
    caseSensitive?: boolean;
  }): Promise<APIResponse>;

  /**
   * Writes content to a file (alias for updateFile)
   * @param filePath - The path of the file to write
   * @param content - The content to write
   */
  writeToFile(filePath: string, content: string): Promise<APIResponse>;
}

// ================================
// Browser Module Types
// ================================

export interface BrowserModule {
  /**
   * Opens a new page in the browser
   */
  newPage(): Promise<APIResponse>;

  /**
   * Retrieves the current URL of the browser's active page
   */
  getUrl(): Promise<APIResponse<string>>;

  /**
   * Navigates to a specified URL
   * @param url - The URL to navigate to
   */
  goToPage(url: string): Promise<APIResponse>;

  /**
   * Takes a screenshot of the current page
   */
  screenshot(): Promise<APIResponse<string>>;

  /**
   * Retrieves the HTML content of the current page
   */
  getHTML(): Promise<APIResponse<string>>;

  /**
   * Retrieves the Markdown content of the current page
   */
  getMarkdown(): Promise<APIResponse<string>>;

  /**
   * Retrieves the PDF content of the current page
   */
  getPDF(): void;

  /**
   * Extracts text from the current page
   */
  extractText(): Promise<APIResponse<string>>;

  /**
   * Gets the content of the current page
   */
  getContent(): Promise<APIResponse<string>>;

  /**
   * Clicks on an element
   * @param selector - Element selector
   */
  click(selector: string): Promise<APIResponse>;

  /**
   * Types text into an element
   * @param selector - Element selector
   * @param text - Text to type
   */
  type(selector: string, text: string): Promise<APIResponse>;

  /**
   * Presses Enter key
   */
  enter(): Promise<APIResponse>;

  /**
   * Scrolls the page
   * @param direction - Scroll direction
   * @param amount - Scroll amount
   */
  scroll(direction: 'up' | 'down' | 'left' | 'right', amount?: number): Promise<APIResponse>;

  /**
   * Closes the current page/tab
   */
  close(): Promise<APIResponse>;

  /**
   * Gets browser information
   */
  getBrowserInfo(): Promise<APIResponse>;

  /**
   * Takes a snapshot of the page
   */
  getSnapShot(): Promise<APIResponse>;
}

// ================================
// Chat Module Types
// ================================

export interface ChatModule {
  /**
   * Retrieves the chat history from the server
   */
  getChatHistory(): Promise<APIResponse<any[]>>;

  /**
   * Sets a global request handler for all incoming messages
   * @param handler - The async handler function
   */
  setRequestHandler(handler: (request: any, response: (data: any) => void) => Promise<void> | void): void;

  /**
   * Sends a message through the WebSocket connection
   * @param message - The message to be sent
   * @param payload - Additional payload data
   */
  sendMessage(message: string, payload: any): void;

  /**
   * Waits for a reply to a sent message
   * @param message - The message for which a reply is expected
   */
  waitforReply(message: string): Promise<UserMessage>;

  /**
   * Notifies the server that a process has started
   * @param onStopClicked - Callback function to handle stop process events
   */
  processStarted(onStopClicked?: (message: any) => void): {
    stopProcess: () => void;
  };

  /**
   * Notifies the server that a process has stopped
   * @param message - Optional message to send with the notification
   */
  processStoped(message?: string): void;

  /**
   * Asks a question and waits for a response
   * @param question - The question to ask
   */
  askQuestion(question: string): Promise<APIResponse<string>>;
}

// ================================
// Terminal Module Types
// ================================

export interface TerminalModule {
  /**
   * Executes a command in the terminal
   * @param command - The command to execute
   * @param options - Execution options
   */
  execute(command: string, options?: {
    cwd?: string;
    env?: Record<string, string>;
    timeout?: number;
    executeInMain?: boolean;
  }): Promise<APIResponse>;

  /**
   * Executes a command and returns a stream for real-time output
   * @param command - The command to execute
   * @param options - Execution options
   */
  executeStream(command: string, options?: {
    cwd?: string;
    env?: Record<string, string>;
    executeInMain?: boolean;
  }): any; // EventEmitter-like object
}

// ================================
// Git Module Types
// ================================

export interface GitModule {
  /**
   * Initializes a new Git repository
   * @param path - The path where to initialize the repository
   */
  init(path: string): Promise<APIResponse>;

  /**
   * Adds files to the staging area
   * @param path - The path of files to add
   * @param files - Specific files to add (optional)
   */
  add(path: string, files?: string[]): Promise<APIResponse>;

  /**
   * Commits staged changes
   * @param path - The repository path
   * @param message - The commit message
   */
  commit(path: string, message: string): Promise<APIResponse>;

  /**
   * Pushes changes to remote repository
   * @param path - The repository path
   * @param remote - The remote name (default: origin)
   * @param branch - The branch name (default: current branch)
   */
  push(path: string, remote?: string, branch?: string): Promise<APIResponse>;

  /**
   * Pulls changes from remote repository
   * @param path - The repository path
   * @param remote - The remote name (default: origin)
   * @param branch - The branch name (default: current branch)
   */
  pull(path: string, remote?: string, branch?: string): Promise<APIResponse>;

  /**
   * Gets the status of the repository
   * @param path - The repository path
   */
  status(path: string): Promise<APIResponse<StatusResult>>;

  /**
   * Creates a new branch
   * @param path - The repository path
   * @param branchName - The name of the new branch
   */
  branch(path: string, branchName: string): Promise<APIResponse>;

  /**
   * Switches to a different branch
   * @param path - The repository path
   * @param branchName - The name of the branch to switch to
   */
  checkout(path: string, branchName: string): Promise<APIResponse>;

  /**
   * Retrieves the commit logs
   * @param path - The repository path
   */
  logs(path: string): Promise<APIResponse<CommitSummary[]>>;

  /**
   * Gets the diff of changes for a specific commit
   * @param commitHash - The hash of the commit
   */
  diff(commitHash: string): Promise<APIResponse>;
}

// ================================
// LLM Module Types
// ================================

export interface LLMModule {
  /**
   * Performs LLM inference
   * @param params - Inference parameters
   */
  inference(params: {
    messages: Message[];
    tools?: Tool[];
    tool_choice?: 'auto' | 'none' | 'required' | { type: 'function'; function: { name: string } };
    llmrole: string;
    max_tokens?: number;
    temperature?: number;
    stream?: boolean;
  }): Promise<APIResponse>;

  /**
   * Sends a chat message to LLM
   * @param options - Chat options
   */
  chat(options: {
    messages: Message[];
    model?: string;
    temperature?: number;
    maxTokens?: number;
    stream?: boolean;
    tools?: Tool[];
    toolChoice?: 'auto' | 'none' | 'required';
  }): Promise<APIResponse>;
}

// ================================
// Task Module Types
// ================================

export interface TaskModule {
  /**
   * Creates a new task
   * @param options - Task creation options
   */
  createTask(options: {
    title: string;
    agentId?: string;
    description?: string;
    phase?: string;
    category?: string;
    priority?: 'low' | 'medium' | 'high';
    tags?: string[];
  }): Promise<APIResponse<Task>>;

  /**
   * Updates an existing task
   * @param options - Task update options
   */
  updateTask(options: {
    taskId: string;
    title?: string;
    description?: string;
    phase?: string;
    category?: string;
    completed?: boolean;
    priority?: 'low' | 'medium' | 'high';
    tags?: string[];
    agentId?: string;
  }): Promise<APIResponse<Task>>;

  /**
   * Deletes a task
   * @param taskId - The ID of the task to delete
   */
  deleteTask(taskId: string): Promise<APIResponse>;

  /**
   * Gets a task by ID
   * @param taskId - The ID of the task
   */
  getTask(taskId: string): Promise<APIResponse<Task>>;

  /**
   * Gets all tasks with optional filtering
   * @param filters - Task filters
   */
  getTasks(filters?: {
    agentId?: string;
    category?: string;
    phase?: string;
    priority?: 'low' | 'medium' | 'high';
    completed?: boolean;
  }): Promise<APIResponse<Task[]>>;

  /**
   * Adds a subtask to an existing task
   * @param options - Subtask options
   */
  addSubTask(options: {
    taskId: string;
    title: string;
    description?: string;
    requirements?: string[];
  }): Promise<APIResponse<SubTask>>;

  /**
   * Updates a subtask
   * @param options - Subtask update options
   */
  updateSubTask(options: {
    taskId: string;
    subtaskId: string;
    title?: string;
    description?: string;
    completed?: boolean;
    requirements?: string[];
  }): Promise<APIResponse<SubTask>>;

  /**
   * Deletes a subtask
   * @param taskId - The parent task ID
   * @param subtaskId - The subtask ID to delete
   */
  deleteSubTask(taskId: string, subtaskId: string): Promise<APIResponse>;

  /**
   * Imports tasks from markdown
   * @param options - Import options
   */
  importFromMarkdown(options: {
    markdown: string;
    agentId?: string;
    phase?: string;
    category?: string;
  }): Promise<APIResponse<Task[]>>;

  /**
   * Exports tasks to markdown
   * @param options - Export options
   */
  exportToMarkdown(options?: {
    phase?: string;
    agentId?: string;
    category?: string;
  }): Promise<APIResponse<string>>;
}

// ================================
// Vector Database Module Types
// ================================

export interface VectorDBModule {
  /**
   * Adds a vector to the database
   * @param options - Vector add options
   */
  add(options: {
    id: string;
    vector: number[];
    metadata?: Record<string, any>;
    content?: string;
  }): Promise<APIResponse>;

  /**
   * Queries vectors from the database
   * @param options - Vector query options
   */
  query(options: {
    vector: number[];
    topK?: number;
    filter?: Record<string, any>;
    minScore?: number;
  }): Promise<APIResponse<VectorItem[]>>;

  /**
   * Deletes a vector from the database
   * @param id - The ID of the vector to delete
   */
  delete(id: string): Promise<APIResponse>;

  /**
   * Updates a vector in the database
   * @param id - The ID of the vector to update
   * @param options - Update options
   */
  update(id: string, options: {
    vector?: number[];
    metadata?: Record<string, any>;
    content?: string;
  }): Promise<APIResponse>;
}

// ================================
// Agent Module Types
// ================================

export interface AgentModule {
  /**
   * Starts an agent
   * @param agentName - The name of the agent to start
   */
  startAgent(agentName: string): Promise<APIResponse>;

  /**
   * Gets details of a specific agent
   * @param agentName - The name of the agent
   */
  getAgentsDetail(agentName: string): Promise<APIResponse<AgentDetail>>;

  /**
   * Gets a list of all agents
   */
  getAgentsList(): Promise<APIResponse<AgentDetail[]>>;

  /**
   * Finds an agent by criteria
   * @param criteria - Search criteria
   */
  findAgent(criteria: any): Promise<APIResponse<AgentDetail>>;
}

// ================================
// Code Utils Module Types
// ================================

export interface CodeUtilsModule {
  /**
   * Analyzes code for issues and metrics
   * @param options - Analysis options
   */
  analyzeCode(options: {
    path: string;
    language?: string;
    rules?: string[];
  }): Promise<APIResponse>;

  /**
   * Parses code and returns AST
   * @param options - Parse options
   */
  parseCode(options: {
    input: string;
    language: string;
    isFilePath?: boolean;
  }): Promise<APIResponse<ASTNode>>;

  /**
   * Gets code definitions
   * @param path - File or directory path
   */
  getCodeDefinitions(path: string): Promise<APIResponse>;

  /**
   * Lists code definition names
   * @param path - File or directory path
   */
  listCodeDefinitionNames(path: string): Promise<APIResponse<string[]>>;
}

// ================================
// MCP Module Types
// ================================

export interface MCPModule {
  /**
   * Lists available MCP tools from servers
   * @param servers - List of server names
   */
  listMcpFromServers(servers: string[]): Promise<APIResponse<Tool[]>>;

  /**
   * Gets tools from MCPs
   * @param mcps - List of MCP configurations
   */
  getTools(mcps: any[]): Promise<APIResponse<Tool[]>>;

  /**
   * Executes an MCP tool
   * @param toolboxName - The toolbox name
   * @param actualToolName - The actual tool name
   * @param toolInput - The tool input parameters
   */
  executeTool(toolboxName: string, actualToolName: string, toolInput: any): Promise<APIResponse>;

  /**
   * Configures an MCP server
   * @param options - Configuration options
   */
  configure(options: {
    serverName: string;
    config: Record<string, any>;
    enabled?: boolean;
  }): Promise<APIResponse>;
}

// ================================
// State Module Types
// ================================

export interface StateModule {
  /**
   * Updates application state
   * @param options - State update options
   */
  updateState(options: {
    key: string;
    value: any;
    merge?: boolean;
  }): Promise<APIResponse>;

  /**
   * Gets application state
   * @param key - State key to retrieve
   */
  getState(key?: string): Promise<APIResponse>;

  /**
   * Gets project state
   */
  getProjectState(): Promise<APIResponse>;

  /**
   * Updates project state
   * @param state - New project state
   */
  updateProjectState(state: any): Promise<APIResponse>;

  /**
   * Gets agent state
   * @param agentId - Agent ID
   */
  getAgentState(agentId?: string): Promise<APIResponse>;

  /**
   * Adds to agent state
   * @param data - Data to add to agent state
   */
  addToAgentState(data: any): Promise<APIResponse>;
}

// ================================
// Memory Module Types
// ================================

export interface MemoryModule {
  /**
   * Sets a memory value
   * @param options - Memory set options
   */
  set(options: {
    key: string;
    value: any;
    ttl?: number;
  }): Promise<APIResponse>;

  /**
   * Gets a memory value
   * @param options - Memory get options
   */
  get(options: {
    key: string;
    defaultValue?: any;
  }): Promise<APIResponse>;

  /**
   * Deletes a memory value
   * @param key - Memory key to delete
   */
  delete(key: string): Promise<APIResponse>;

  /**
   * Clears all memory
   */
  clear(): Promise<APIResponse>;
}

// ================================
// Debug Module Types
// ================================

export interface DebugModule {
  /**
   * Logs a debug message
   * @param options - Debug log options
   */
  log(options: {
    message: string;
    level?: 'debug' | 'info' | 'warn' | 'error';
    metadata?: Record<string, any>;
    component?: string;
  }): Promise<APIResponse>;

  /**
   * Gets debug logs
   * @param filters - Log filters
   */
  getLogs(filters?: {
    level?: string;
    component?: string;
    limit?: number;
  }): Promise<APIResponse>;
}

// ================================
// Project Module Types
// ================================

export interface ProjectModule {
  /**
   * Gets project information
   */
  getProjectPath(): Promise<APIResponse<{ projectPath: string }>>;

  /**
   * Gets project details
   */
  getProjectInfo(): Promise<APIResponse>;

  /**
   * Updates project configuration
   * @param config - Project configuration
   */
  updateConfig(config: Record<string, any>): Promise<APIResponse>;
}

// ================================
// Notification Module Types
// ================================

/**
 * Agent notification functions for subagent task operations
 */
export interface AgentNotifications {
  StartSubagentTaskRequestNotify(parentAgentId: string, subagentId: string, task: string, priority?: string, dependencies?: string[], toolUseId?: string): void;
  StartSubagentTaskResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  SubagentTaskCompletedNotify(parentAgentId: string, subagentId: string, taskId: string, result: any, status: string, toolUseId?: string): void;
}

/**
 * Browser notification functions for web operations
 */
export interface BrowserNotifications {
  WebFetchRequestNotify(url: string, method?: string, headers?: Record<string, string>, body?: any, timeout?: number, toolUseId?: string): void;
  WebFetchResponseNotify(content: string | any, isError?: boolean, toolUseId?: string, data?: any): void;
  WebSearchRequestNotify(query: string, maxResults?: number, searchEngine?: string, filters?: any, toolUseId?: string): void;
  WebSearchResponseNotify(content: string | any, isError?: boolean, toolUseId?: string, data?: any): void;
}

/**
 * Chat notification functions for messaging
 */
export interface ChatNotifications {
  UserMessageRequestNotify(message: string, payload?: any, toolUseId?: string): void;
  AgentTextResponseNotify(content: string | any, isError?: boolean, toolUseId?: string, data?: any): void;
  GetChatHistoryRequestNotify(data?: any, toolUseId?: string): void;
  GetChatHistoryResultNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
}

/**
 * Code utilities notification functions
 */
export interface CodeutilsNotifications {
  SearchRequestNotify(query: string, path?: string, filePattern?: string, caseSensitive?: boolean, toolUseId?: string): void;
  SearchResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  GrepSearchRequestNotify(query: string, path?: string, includePattern?: string, excludePattern?: string, caseSensitive?: boolean, toolUseId?: string): void;
  GrepSearchResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
}

/**
 * Crawler notification functions for web crawling
 */
export interface CrawlerNotifications {
  CrawlRequestNotify(url: string, options?: any, toolUseId?: string): void;
  CrawlResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  SearchWebRequestNotify(query: string, options?: any, toolUseId?: string): void;
  SearchWebResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
}

/**
 * Database memory notification functions
 */
export interface DbmemoryNotifications {
  StoreKnowledgeRequestNotify(key: string, value: any, toolUseId?: string): void;
  StoreKnowledgeResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  RetrieveKnowledgeRequestNotify(key: string, toolUseId?: string): void;
  RetrieveKnowledgeResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
}

/**
 * File system notification functions
 */
export interface FsNotifications {
  FileCreateRequestNotify(fileName: string, source: string, filePath: string, toolUseId?: string): void;
  FileCreateResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  FolderCreateRequestNotify(folderName: string, folderPath: string, toolUseId?: string): void;
  FolderCreateResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  FileReadRequestNotify(filePath: string, startLine?: string, endLine?: string, toolUseId?: string): void;
  FileReadResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  FileEditRequestNotify(fileName: string, filePath: string, newContent: string, toolUseId?: string): void;
  FileEditResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  FileDeleteRequestNotify(fileName: string, filePath: string, toolUseId?: string): void;
  FileDeleteResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  FolderDeleteRequestNotify(folderName: string, folderPath: string, toolUseId?: string): void;
  FolderDeleteResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  ListDirectoryRequestNotify(dirPath: string, toolUseId?: string): void;
  ListDirectoryResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  WriteToFileRequestNotify(filePath: string, text: string, toolUseId?: string): void;
  WriteToFileResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  AppendToFileRequestNotify(filePath: string, text: string, toolUseId?: string): void;
  AppendToFileResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  CopyFileRequestNotify(sourceFile: string, destinationFile: string, toolUseId?: string): void;
  CopyFileResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  MoveFileRequestNotify(sourceFile: string, destinationFile: string, toolUseId?: string): void;
  MoveFileResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
}

/**
 * Git notification functions
 */
export interface GitNotifications {
  GitInitRequestNotify(path?: string, toolUseId?: string): void;
  GitInitResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  GitPullRequestNotify(path?: string, toolUseId?: string): void;
  GitPullResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  GitPushRequestNotify(path?: string, toolUseId?: string): void;
  GitPushResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  GitStatusRequestNotify(path?: string, toolUseId?: string): void;
  GitStatusResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  GitAddRequestNotify(path?: string, files?: string[], toolUseId?: string): void;
  GitAddResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  GitCommitRequestNotify(path?: string, message?: string, toolUseId?: string): void;
  GitCommitResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  GitCheckoutRequestNotify(path?: string, branchName?: string, toolUseId?: string): void;
  GitCheckoutResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  GitBranchRequestNotify(path?: string, branchName?: string, toolUseId?: string): void;
  GitBranchResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  GitLogsRequestNotify(path?: string, toolUseId?: string): void;
  GitLogsResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  GitDiffRequestNotify(path?: string, toolUseId?: string): void;
  GitDiffResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  GitRemoteAddRequestNotify(remoteName: string, remoteUrl: string, path?: string, toolUseId?: string): void;
  GitRemoteAddResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  GitCloneRequestNotify(repoUrl: string, targetPath?: string, toolUseId?: string): void;
  GitCloneResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
}

/**
 * History notification functions
 */
export interface HistoryNotifications {
  SummarizeRequestNotify(messages?: any[], depth?: number, toolUseId?: string): void;
  SummarizeResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  SummarizeAllRequestNotify(toolUseId?: string): void;
  SummarizeAllResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
}

/**
 * LLM notification functions
 */
export interface LlmNotifications {
  sendInferenceRequest(data: any, toolUseId?: string): void;
  sendInferenceResponse(content: string | any, isError?: boolean, toolUseId?: string): void;
  getTokenCount(data: any, toolUseId?: string): void;
  sendTokenCountResponse(content: string | any, isError?: boolean, toolUseId?: string, data?: any): void;
}

/**
 * MCP notification functions
 */
export interface McpNotifications {
  MCPExecuteRequestNotify(toolboxName: string, actualToolName: string, toolInput: any, toolUseId?: string): void;
  MCPExecuteResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  MCPListToolsRequestNotify(servers?: string[], toolUseId?: string): void;
  MCPListToolsResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
}

/**
 * Search notification functions
 */
export interface SearchNotifications {
  SearchInitRequestNotify(toolUseId?: string): void;
  SearchInitResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  SearchQueryRequestNotify(query: string, options?: any, toolUseId?: string): void;
  SearchQueryResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
}

/**
 * System notification functions
 */
export interface SystemNotifications {
  AgentInitializationRequestNotify(agentId?: string, toolUseId?: string): void;
  AgentInitializationResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
  AgentCompletionRequestNotify(agentId?: string, result?: any, toolUseId?: string): void;
}

/**
 * Terminal notification functions
 */
export interface TerminalNotifications {
  CommandExecutionRequestNotify(command: string, returnEmptyStringOnSuccess?: boolean, executeInMain?: boolean, toolUseId?: string): void;
  CommandExecutionResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
}

/**
 * Todo notification functions
 */
export interface TodoNotifications {
  TaskOperationRequestNotify(operation: string, taskData?: any, toolUseId?: string): void;
  TaskOperationResponseNotify(content: string | any, isError?: boolean, toolUseId?: string): void;
}

/**
 * Comprehensive notification module interface
 * Provides 15 categories of notification functions for the Codebolt SDK
 */
export interface NotificationModule {
  /** Agent notification functions for subagent task operations */
  agent: AgentNotifications;
  
  /** Browser notification functions for web operations */
  browser: BrowserNotifications;
  
  /** Chat notification functions for messaging */
  chat: ChatNotifications;
  
  /** Code utilities notification functions */
  codeutils: CodeutilsNotifications;
  
  /** Crawler notification functions for web crawling */
  crawler: CrawlerNotifications;
  
  /** Database memory notification functions */
  dbmemory: DbmemoryNotifications;
  
  /** File system notification functions */
  fs: FsNotifications;
  
  /** Git notification functions */
  git: GitNotifications;
  
  /** History notification functions */
  history: HistoryNotifications;
  
  /** LLM notification functions */
  llm: LlmNotifications;
  
  /** MCP notification functions */
  mcp: McpNotifications;
  
  /** Search notification functions */
  search: SearchNotifications;
  
  /** System notification functions */
  system: SystemNotifications;
  
  /** Terminal notification functions */
  terminal: TerminalNotifications;
  
  /** Todo notification functions */
  todo: TodoNotifications;
}

// ================================
// Additional Utility Modules
// ================================

export interface CrawlerModule {
  /**
   * Crawls a website
   * @param options - Crawler options
   */
  crawl(options: {
    url: string;
    maxDepth?: number;
    followExternal?: boolean;
    headers?: Record<string, string>;
    timeout?: number;
  }): Promise<APIResponse>;
}

export interface SearchModule {
  /**
   * Performs a search operation
   * @param query - Search query
   * @param options - Search options
   */
  search(query: string, options?: any): Promise<APIResponse>;
}

export interface TokenizerModule {
  /**
   * Tokenizes text
   * @param text - Text to tokenize
   * @param options - Tokenizer options
   */
  tokenize(text: string, options?: any): Promise<APIResponse>;

  /**
   * Counts tokens in text
   * @param text - Text to count tokens for
   */
  countTokens(text: string): Promise<APIResponse<number>>;
}

export interface UtilsModule {
  /**
   * General utility functions
   */
  [key: string]: any;
}

// ================================
// Chat Summary Module Types
// ================================

export interface ChatSummaryModule {
  /**
   * Summarizes the entire chat history
   */
  summarizeAll(): Promise<APIResponse<Array<{ role: string; content: string }>>>;

  /**
   * Summarizes a specific part of the chat history
   * @param messages - Array of message objects to summarize
   * @param depth - How far back in history to consider
   */
  summarize(messages: Array<{ role: string; content: string }>, depth: number): Promise<APIResponse<Array<{ role: string; content: string }>>>;
}

// ================================
// RAG Module Types
// ================================

export interface RAGModule {
  /**
   * Initializes the RAG system
   */
  init(): void;

  /**
   * Adds a file to the RAG system
   * @param filename - The name of the file to add
   * @param file_path - The path where the file should be added
   */
  add_file(filename: string, file_path: string): void;

  /**
   * Retrieves related knowledge for a given query and filename
   * @param query - The query to retrieve related knowledge for
   * @param filename - The name of the file associated with the query
   */
  retrieve_related_knowledge(query: string, filename: string): void;
}

// ================================
// Knowledge Module Types
// ================================

export interface KnowledgeModule {
  /**
   * Knowledge handling methods - currently placeholder
   * This module is extensible for future knowledge management features
   */
  [key: string]: any;
}

// ================================
// Code Parsers Module Types
// ================================

export interface ClassInfo {
  name: string;
  location: string;
}

export interface FunctionInfo {
  name: string;
  class?: string;
  location: string;
}

export interface CodeParsersModule {
  /**
   * Retrieves the classes in a given file
   * @param file - The file to parse for classes
   */
  getClassesInFile(file: string): Promise<ClassInfo[] | { error: string }>;

  /**
   * Retrieves the functions/methods in a specific class within a file
   * @param file - The file to parse for functions
   * @param className - The name of the class to search within
   */
  getFunctionsinClass(file: string, className: string): Promise<FunctionInfo[] | { error: string }>;

  /**
   * Generates an Abstract Syntax Tree (AST) for a given file
   * @param file - The file to generate an AST for
   * @param className - Optional class name to focus the AST generation on
   */
  getAstTreeInFile(file: string, className?: string): Promise<ASTNode | { error: string }>;
}

// ================================
// Output Parsers Module Types
// ================================

export interface ParseResult<T = any> {
  success: boolean;
  parsed?: T;
  error?: Error;
}

export interface OutputParsersModule {
  /**
   * Parses JSON string and returns a result object
   * @param jsonString - The JSON string to parse
   */
  parseJSON(jsonString: string): ParseResult<any>;

  /**
   * Parses XML string and returns a result object
   * @param xmlString - The XML string to parse
   */
  parseXML(xmlString: string): ParseResult<any>;

  /**
   * Parses CSV string and returns a result object
   * @param csvString - The CSV string to parse
   */
  parseCSV(csvString: string): ParseResult<any[]>;

  /**
   * Parses text string and returns a result object with lines
   * @param text - The text to parse
   */
  parseText(text: string): ParseResult<string[]>;

  /**
   * Parses the given output and returns all the error messages
   * @param output - The output to parse for error messages
   */
  parseErrors(output: any): string[];

  /**
   * Parses the given output and returns all the warning messages
   * @param output - The output to parse for warning messages
   */
  parseWarnings(output: any): string[];
}

// ================================
// Main Codebolt SDK Interface
// ================================

export interface CodeboltSDK {
  // Core properties
  websocket: WebSocket | null;
  ready: boolean;

  // Core methods
  waitForReady(): Promise<void>;
  onReady(handler: () => void | Promise<void>): void;
  onMessage(handler: (userMessage: UserMessage) => void | Promise<void> | any | Promise<any>): void;

  // Module interfaces
  fs: FileSystemModule;
  git: GitModule;
  llm: LLMModule;
  browser: BrowserModule;
  chat: ChatModule;
  terminal: TerminalModule;
  codeutils: CodeUtilsModule;
  crawler: CrawlerModule;
  search: SearchModule;
  knowledge: KnowledgeModule;
  rag: RAGModule;
  codeparsers: CodeParsersModule;
  outputparsers: OutputParsersModule;
  project: ProjectModule;
  dbmemory: MemoryModule;
  cbstate: StateModule;
  taskplaner: TaskModule;
  vectordb: VectorDBModule;
  debug: DebugModule;
  tokenizer: TokenizerModule;
  chatSummary: ChatSummaryModule;
  mcp: MCPModule;
  agent: AgentModule;
  utils: UtilsModule;
  notify: NotificationModule;
}

// ================================
// Default Export - Main SDK Type
// ================================

/**
 * Main Codebolt SDK instance type
 * This represents the default exported instance from the codeboltjs library
 */
export type CodeboltInstance = CodeboltSDK;

/**
 * Codebolt class constructor type
 * This represents the Codebolt class itself for advanced users
 */
export interface CodeboltConstructor {
  new(): CodeboltSDK;
}

// ================================
// Additional Type Exports
// ================================

// All types are already exported above with their definitions
// This ensures proper TypeScript module resolution and prevents conflicts