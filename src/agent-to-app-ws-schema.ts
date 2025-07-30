/**
 * Agent-to-App WebSocket Schemas
 * Zod schemas for agent-to-app communication
 */

// Re-export individual schemas from each module
// This approach allows selective importing of only schemas, not types

// Agent Event Schemas
export {
  agentLocationSchema,
  agentsSchema,
  filterUsingSchema,
  agentEventBaseSchema,
  findAgentEventSchema,
  startAgentEventSchema,
  stopAgentEventSchema,
  listAgentsEventSchema,
  getAgentDetailsEventSchema,
  installAgentEventSchema,
  uninstallAgentEventSchema,
  updateAgentEventSchema,
  configureAgentEventSchema,
  agentEventSchema,
  findAgentByTaskResponseSchema,
  taskCompletionResponseSchema,
  listAgentsResponseSchema,
  agentsDetailResponseSchema,
  installAgentResponseSchema,
  uninstallAgentResponseSchema,
  updateAgentResponseSchema,
  configureAgentResponseSchema,
  stopAgentResponseSchema
} from './wstypes/agent-to-app-ws/actions/agentEventSchemas';

// Notification Schemas
export {
  agentNotificationBaseSchema,
  startSubagentTaskRequestNotificationSchema,
  startSubagentTaskResponseNotificationSchema,
  subagentTaskCompletedNotificationSchema,
  agentNotificationSchema
} from './wstypes/agent-to-app-ws/notification/agentNotificationSchemas';

export {
  AgentMessageBaseSchema
} from './wstypes/agent-to-app-ws/notification/baseSchemas';

export {
  browserNotificationBaseSchema,
  webFetchRequestNotificationSchema,
  webFetchResponseNotificationSchema,
  webSearchRequestNotificationSchema,
  webSearchResponseNotificationSchema,
  browserNotificationSchema
} from './wstypes/agent-to-app-ws/notification/browserNotificationSchemas';

export {
  chatNotificationBaseSchema,
  userMessageRequestNotificationSchema,
  agentTextResponseNotificationSchema,
  getChatHistoryRequestNotificationSchema,
  getChatHistoryResultNotificationSchema,
  chatNotificationSchema
} from './wstypes/agent-to-app-ws/notification/chatNotificationSchemas';

export {
  codeUtilsNotificationBaseSchema,
  grepSearchRequestNotificationSchema,
  grepSearchResponseNotificationSchema,
  globSearchRequestNotificationSchema,
  globSearchResponseNotificationSchema,
  codeUtilsNotificationSchema
} from './wstypes/agent-to-app-ws/notification/codeUtilsNotificationSchemas';

export {
  crawlerNotificationBaseSchema,
  crawlerSearchRequestNotificationSchema,
  crawlerSearchResponseNotificationSchema,
  crawlerStartRequestNotificationSchema,
  crawlerStartResponseNotificationSchema,
  crawlerNotificationSchema
} from './wstypes/agent-to-app-ws/notification/crawlerNotificationSchemas';

export {
  dbMemoryNotificationBaseSchema,
  addMemoryRequestNotificationSchema,
  addMemoryResultNotificationSchema,
  getMemoryRequestNotificationSchema,
  getMemoryResultNotificationSchema,
  dbMemoryNotificationSchema
} from './wstypes/agent-to-app-ws/notification/dbMemoryNotificationSchemas';

export {
  fsNotificationBaseSchema,
  fileCreateRequestNotificationSchema,
  fileCreateResponseNotificationSchema,
  folderCreateRequestNotificationSchema,
  folderCreateResponseNotificationSchema,
  fileReadRequestNotificationSchema,
  fileReadResponseNotificationSchema,
  fileEditRequestNotificationSchema,
  fileEditResponseNotificationSchema,
  fileDeleteRequestNotificationSchema,
  fileDeleteResponseNotificationSchema,
  folderDeleteRequestNotificationSchema,
  folderDeleteResponseNotificationSchema,
  listDirectoryRequestNotificationSchema,
  listDirectoryResponseNotificationSchema,
  writeToFileRequestNotificationSchema,
  writeToFileResponseNotificationSchema,
  appendToFileRequestNotificationSchema,
  appendToFileResponseNotificationSchema,
  copyFileRequestNotificationSchema,
  copyFileResponseNotificationSchema,
  moveFileRequestNotificationSchema,
  moveFileResponseNotificationSchema,
  fsNotificationSchema
} from './wstypes/agent-to-app-ws/notification/fsNotificationSchemas';

export {
  gitNotificationBaseSchema,
  gitInitRequestNotificationSchema,
  gitInitResponseNotificationSchema,
  gitPullRequestNotificationSchema,
  gitPullResponseNotificationSchema,
  gitPushRequestNotificationSchema,
  gitPushResponseNotificationSchema,
  gitStatusRequestNotificationSchema,
  gitStatusResponseNotificationSchema,
  gitAddRequestNotificationSchema,
  gitAddResponseNotificationSchema,
  gitCommitRequestNotificationSchema,
  gitCommitResponseNotificationSchema,
  gitCheckoutRequestNotificationSchema,
  gitCheckoutResponseNotificationSchema,
  gitBranchRequestNotificationSchema,
  gitBranchResponseNotificationSchema,
  gitLogsRequestNotificationSchema,
  gitLogsResponseNotificationSchema,
  gitDiffRequestNotificationSchema,
  gitDiffResponseNotificationSchema,
  gitRemoteAddRequestNotificationSchema,
  gitRemoteAddResponseNotificationSchema,
  gitRemoteRemoveRequestNotificationSchema,
  gitRemoteRemoveResponseNotificationSchema,
  gitCloneRequestNotificationSchema,
  gitCloneResponseNotificationSchema,
  gitNotificationSchema
} from './wstypes/agent-to-app-ws/notification/gitNotificationSchemas';

export {
  historyNotificationBaseSchema,
  summarizePreviousConversationRequestNotificationSchema,
  summarizePreviousConversationResultNotificationSchema,
  summarizeCurrentMessageRequestNotificationSchema,
  summarizeCurrentMessageResultNotificationSchema,
  historyNotificationSchema
} from './wstypes/agent-to-app-ws/notification/historyNotificationSchemas';

export {
  llmNotificationBaseSchema,
  llmRequestNotificationSchema,
  llmResponseNotificationSchema,
  llmGetTokenCountRequestNotificationSchema,
  llmGetTokenCountResponseNotificationSchema,
  llmNotificationSchema
} from './wstypes/agent-to-app-ws/notification/llmNotificationSchemas';

export {
  mcpNotificationBaseSchema,
  getEnabledMCPServersRequestNotificationSchema,
  getEnabledMCPServersResultNotificationSchema,
  listToolsFromMCPServersRequestNotificationSchema,
  listToolsFromMCPServersResultNotificationSchema,
  getToolsRequestNotificationSchema,
  getToolsResultNotificationSchema,
  executeToolRequestNotificationSchema,
  executeToolResultNotificationSchema,
  mcpNotificationSchema
} from './wstypes/agent-to-app-ws/notification/mcpNotificationSchemas';

export {
  searchNotificationBaseSchema,
  searchInitRequestSchema,
  searchRequestSchema,
  getFirstLinkRequestSchema,
  codebaseSearchRequestSchema,
  searchInitResultSchema,
  searchResultSchema,
  getFirstLinkResultSchema,
  codebaseSearchResultSchema,
  searchNotificationSchema
} from './wstypes/agent-to-app-ws/notification/searchNotificationSchemas';

export {
  systemNotificationBaseSchema,
  agentInitNotificationSchema,
  agentCompletionNotificationSchema,
  systemNotificationSchema
} from './wstypes/agent-to-app-ws/notification/systemNotificationSchemas';

export {
  terminalNotificationBaseSchema,
  commandExecutionRequestNotificationSchema,
  commandExecutionResponseNotificationSchema,
  terminalNotificationSchema
} from './wstypes/agent-to-app-ws/notification/terminalNotificationSchemas';

export {
  todoNotificationBaseSchema,
  addTodoRequestNotificationSchema,
  addTodoResponseNotificationSchema,
  getTodoRequestNotificationSchema,
  getTodoTasksResponseNotificationSchema,
  editTodoTaskRequestNotificationSchema,
  editTodoTaskResponseNotificationSchema,
  todoNotificationSchema
} from './wstypes/agent-to-app-ws/notification/todoNotificationSchemas';

// Action Event Schemas
export {
  browserEventBaseSchema,
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
  typeTextEventSchema,
  scrollEventSchema,
  waitEventSchema,
  evaluateEventSchema,
  getElementInfoEventSchema,
  takeElementScreenshotEventSchema,
  setViewportEventSchema,
  reloadPageEventSchema,
  goBackEventSchema,
  goForwardEventSchema,
  closeBrowserEventSchema,
  browserEventSchema
} from './wstypes/agent-to-app-ws/actions/browserEventSchemas';

export {
  chatEventBaseSchema,
  getChatHistoryEventSchema,
  processStoppedEventSchema,
  sendMessageEventSchema,
  chatSummaryEventSchema,
  notificationEventSchema,
  chatEventSchema,
  getChatHistoryResponseSchema,
  processStoppedResponseSchema,
  sendMessageResponseSchema,
  chatSummaryResponseSchema,
  notificationResponseSchema,
  chatRequestHandlerSchema,
  chatResponseFunctionSchema
} from './wstypes/agent-to-app-ws/actions/chatEventSchemas';

export {
  crawlerEventBaseSchema,
  startCrawlerEventSchema,
  crawlerScreenshotEventSchema,
  crawlerGoToPageEventSchema,
  crawlerScrollEventSchema,
  crawlerClickEventSchema,
  stopCrawlerEventSchema,
  crawlerGetPageContentEventSchema,
  crawlerWaitEventSchema,
  crawlerExtractDataEventSchema,
  crawlerEventSchema,
  crawlerResponseSchema,
  crawlerStartResponseSchema,
  crawlerScreenshotResponseSchema,
  crawlerGoToPageResponseSchema,
  crawlerScrollResponseSchema,
  crawlerClickResponseSchema,
  crawlerStopResponseSchema,
  crawlerGetPageContentResponseSchema,
  crawlerWaitResponseSchema,
  crawlerExtractDataResponseSchema
} from './wstypes/agent-to-app-ws/actions/crawlerEventSchemas';

export {
  logTypeSchema as debugLogTypeSchema,
  debugEventBaseSchema,
  addLogEventSchema,
  openDebugBrowserEventSchema,
  getDebugLogsEventSchema,
  clearDebugLogsEventSchema,
  setDebugLevelEventSchema,
  exportDebugLogsEventSchema,
  debugEventSchema,
  debugAddLogResponseSchema,
  openDebugBrowserResponseSchema,
  getDebugLogsResponseSchema,
  clearDebugLogsResponseSchema,
  setDebugLevelResponseSchema,
  exportDebugLogsResponseSchema
} from './wstypes/agent-to-app-ws/actions/debugEventSchemas';

export {
  fsEventBaseSchema,
  createFileEventSchema,
  createFolderEventSchema,
  readFileEventSchema,
  updateFileEventSchema,
  deleteFileEventSchema,
  deleteFolderEventSchema,
  getFilesEventSchema,
  getAllFilesEventSchema,
  getFoldersEventSchema,
  copyFileEventSchema,
  copyFolderEventSchema,
  moveFileEventSchema,
  moveFolderEventSchema,
  searchFilesEventSchema,
  getFileInfoEventSchema,
  getFolderInfoEventSchema,
  watchFileEventSchema,
  unwatchFileEventSchema,
  fsEventSchema
} from './wstypes/agent-to-app-ws/actions/fsEventSchemas';

export {
  gitEventBaseSchema,
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
  gitResetEventSchema,
  gitStashEventSchema,
  gitTagEventSchema,
  gitRemoteEventSchema,
  gitMergeEventSchema,
  gitRebaseEventSchema,
  gitCloneEventSchema,
  gitEventSchema,
  gitInitResponseSchema,
  gitPullResponseSchema,
  gitPushResponseSchema,
  gitStatusResponseSchema,
  gitAddResponseSchema,
  gitCommitResponseSchema,
  gitCheckoutResponseSchema,
  gitBranchResponseSchema,
  gitLogsResponseSchema,
  gitDiffResponseSchema,
  gitResetResponseSchema,
  gitStashResponseSchema,
  gitTagResponseSchema,
  gitRemoteResponseSchema,
  gitMergeResponseSchema,
  gitRebaseResponseSchema,
  gitCloneResponseSchema
} from './wstypes/agent-to-app-ws/actions/gitEventSchemas';

export {
  logTypeSchema as historyLogTypeSchema,
  chatSummaryEventBaseSchema,
  summarizeAllEventSchema,
  summarizeEventSchema,
  generateSummaryEventSchema,
  getSummaryEventSchema,
  clearSummaryEventSchema,
  historyEventSchema,
  getSummarizeAllResponseSchema,
  getSummarizeResponseSchema,
  generateSummaryResponseSchema,
  getSummaryResponseSchema,
  clearSummaryResponseSchema
} from './wstypes/agent-to-app-ws/actions/historyEventSchemas';

export {
  llmEventBaseSchema,
  inferenceEventSchema,
  legacyInferenceEventSchema,
  llmEventSchema,
  llmResponseSchema,
  llmStreamResponseSchema,
  llmErrorResponseSchema,
  llmResponseUnionSchema
} from './wstypes/agent-to-app-ws/actions/llmEventSchemas';

export {
  mcpEventBaseSchema,
  getEnabledToolBoxesEventSchema,
  getLocalToolBoxesEventSchema,
  getAvailableToolBoxesEventSchema,
  searchAvailableToolBoxesEventSchema,
  listToolsFromToolBoxesEventSchema,
  configureToolBoxEventSchema,
  getToolsEventSchema,
  executeToolEventSchema,
  installToolBoxEventSchema,
  uninstallToolBoxEventSchema,
  updateToolBoxEventSchema,
  mcpEventSchema,
  getEnabledToolBoxesResponseSchema,
  getLocalToolBoxesResponseSchema,
  getAvailableToolBoxesResponseSchema,
  searchAvailableToolBoxesResponseSchema,
  listToolsFromToolBoxesResponseSchema,
  configureToolBoxResponseSchema,
  getToolsResponseSchema,
  executeToolResponseSchema,
  installToolBoxResponseSchema,
  uninstallToolBoxResponseSchema,
  updateToolBoxResponseSchema
} from './wstypes/agent-to-app-ws/actions/mcpEventSchemas';

export {
  memoryEventBaseSchema,
  memorySetEventSchema,
  memoryGetEventSchema,
  memoryDeleteEventSchema,
  memoryListKeysEventSchema,
  memoryClearEventSchema,
  memoryExistsEventSchema,
  memoryGetMultipleEventSchema,
  memorySetMultipleEventSchema,
  memorySearchEventSchema,
  memoryEventSchema,
  memorySetResponseSchema,
  memoryGetResponseSchema,
  memoryDeleteResponseSchema,
  memoryListKeysResponseSchema,
  memoryClearResponseSchema,
  memoryExistsResponseSchema,
  memoryGetMultipleResponseSchema,
  memorySetMultipleResponseSchema,
  memorySearchResponseSchema
} from './wstypes/agent-to-app-ws/actions/memoryEventSchemas';

export {
  projectEventBaseSchema,
  getProjectSettingsEventSchema,
  getProjectPathEventSchema,
  getRepoMapEventSchema,
  runProjectEventSchema,
  getEditorFileStatusEventSchema,
  setProjectSettingsEventSchema,
  createProjectEventSchema,
  deleteProjectEventSchema,
  projectEventSchema,
  getProjectSettingsResponseSchema,
  getProjectPathResponseSchema,
  getRepoMapResponseSchema,
  runProjectResponseSchema,
  getEditorFileStatusResponseSchema,
  setProjectSettingsResponseSchema,
  createProjectResponseSchema,
  deleteProjectResponseSchema
} from './wstypes/agent-to-app-ws/actions/projectEventSchemas';

export {
  stateEventBaseSchema,
  getApplicationStateEventSchema,
  addToAgentStateEventSchema,
  getAgentStateEventSchema,
  updateAgentStateEventSchema,
  deleteAgentStateEventSchema,
  clearAgentStateEventSchema,
  getProjectStateEventSchema,
  updateProjectStateEventSchema,
  stateEventSchema,
  getApplicationStateResponseSchema,
  addToAgentStateResponseSchema,
  getAgentStateResponseSchema,
  updateAgentStateResponseSchema,
  deleteAgentStateResponseSchema,
  clearAgentStateResponseSchema,
  getProjectStateResponseSchema,
  updateProjectStateResponseSchema
} from './wstypes/agent-to-app-ws/actions/stateEventSchemas';

export {
  taskEventBaseSchema,
  addTaskEventSchema,
  addSimpleTaskEventSchema,
  getTasksEventSchema,
  getTasksByAgentEventSchema,
  getTasksByCategoryEventSchema,
  getTasksByPhaseEventSchema,
  updateTaskEventSchema,
  deleteTaskEventSchema,
  markTaskCompleteEventSchema,
  addSubTaskEventSchema,
  updateSubTaskEventSchema,
  deleteSubTaskEventSchema,
  getTaskDetailsEventSchema,
  importTasksFromMarkdownEventSchema,
  exportTasksToMarkdownEventSchema,
  taskEventSchema,
  taskResponseSchema,
  addTaskResponseSchema,
  getTasksResponseSchema,
  getTasksByAgentResponseSchema,
  updateTaskResponseSchema,
  deleteTaskResponseSchema,
  addSubTaskResponseSchema,
  getTaskDetailsResponseSchema,
  importTasksResponseSchema,
  exportTasksResponseSchema
} from './wstypes/agent-to-app-ws/actions/taskEventSchemas';

export {
  terminalEventBaseSchema,
  executeCommandEventSchema,
  executeCommandRunUntilErrorEventSchema,
  executeCommandRunUntilInterruptEventSchema,
  executeCommandWithStreamEventSchema,
  sendInterruptToTerminalEventSchema,
  terminalEventSchema,
  commandOutputResponseSchema,
  commandErrorResponseSchema,
  commandFinishResponseSchema,
  terminalInterruptResponseSchema,
  terminalStreamDataResponseSchema,
  terminalResponseSchema
} from './wstypes/agent-to-app-ws/actions/terminalEventSchemas';

export {
  tokenizerEventBaseSchema,
  addTokenEventSchema,
  getTokenEventSchema,
  deleteTokenEventSchema,
  listTokensEventSchema,
  updateTokenEventSchema,
  clearTokensEventSchema,
  tokenizerEventSchema,
  addTokenResponseSchema,
  getTokenResponseSchema,
  deleteTokenResponseSchema,
  listTokensResponseSchema,
  updateTokenResponseSchema,
  clearTokensResponseSchema
} from './wstypes/agent-to-app-ws/actions/tokenizerEventSchemas';

export {
  utilsEventBaseSchema,
  editFileAndApplyDiffEventSchema,
  validateDiffEventSchema,
  generateDiffEventSchema,
  applyPatchEventSchema,
  utilsEventSchema,
  fsEditFileAndApplyDiffResponseSchema,
  validateDiffResponseSchema,
  generateDiffResponseSchema,
  applyPatchResponseSchema
} from './wstypes/agent-to-app-ws/actions/utilsEventSchemas';

export {
  vectordbEventBaseSchema,
  getVectorEventSchema,
  addVectorItemEventSchema,
  queryVectorItemEventSchema,
  queryVectorItemsEventSchema,
  updateVectorItemEventSchema,
  deleteVectorItemEventSchema,
  clearVectorDatabaseEventSchema,
  getVectorDatabaseInfoEventSchema,
  createVectorIndexEventSchema,
  vectordbEventSchema,
  getVectorResponseSchema,
  addVectorItemResponseSchema,
  queryVectorItemResponseSchema,
  queryVectorItemsResponseSchema,
  updateVectorItemResponseSchema,
  deleteVectorItemResponseSchema,
  clearVectorDatabaseResponseSchema,
  getVectorDatabaseInfoResponseSchema,
  createVectorIndexResponseSchema
} from './wstypes/agent-to-app-ws/actions/vectordbEventSchemas';

// Main Combined Schema
export {
  agentToAppEventSchema
} from './wstypes/agent-to-app-ws/actions/index'; 