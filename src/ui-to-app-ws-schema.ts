/**
 * UI-to-App WebSocket Schemas
 * Zod schemas for UI-to-app communication
 */

// agentMessageSchemas
export {
  agentMcpToolConfirmationSchema,
  agentMcpToolExecutingSchema,
  agentMcpToolSuccessSchema,
  agentMcpToolErrorSchema,
  agentMcpToolRejectedSchema,
  agentStatusSchema,
  agentEventTypeSchema,
  baseAgentMessageSchema,
  agentStatusUpdateSchema,
  agentTaskUpdateSchema,
  agentProgressUpdateSchema,
  agentErrorSchema,
  agentResourceUpdateSchema,
  agentCommunicationSchema,
  agentCapabilityUpdateSchema,
  agentHeartbeatSchema,
  agentLogSchema,
  findAgentByTaskResponseSchema,
  listAgentsResponseSchema,
  agentsDetailResponseSchema,
  agentErrorResponseSchema,
  agentMessageSchema as agentUIMessageSchema
} from './wstypes/ui-to-app-ws/agentMessageSchemas';

// appServiceSchemas
export {
  getAppStateResponseSchema as getAppStateUIResponseSchema,
  appMcpToolConfirmationSchema,
  appMcpToolExecutingSchema,
  appMcpToolSuccessSchema,
  appMcpToolErrorSchema,
  appMcpToolRejectedSchema,
  appErrorResponseSchema,
  appServiceMessageSchema
} from './wstypes/ui-to-app-ws/appServiceSchemas';

// browserServiceSchemas
export {
  newPageResponseSchema as newPageUIResponseSchema,
  browserErrorResponseSchema,
  browserActionResponseSchema,
  browserMcpToolConfirmationSchema,
  browserMcpToolExecutingSchema,
  browserMcpToolSuccessSchema,
  browserMcpToolErrorSchema,
  browserMcpToolRejectedSchema,
  browserActionEnumSchema,
  browserActionMessageSchema,
  browserServiceMessageSchema
} from './wstypes/ui-to-app-ws/browserServiceSchemas';

// chatHistorySchemas
export {
  getSummarizeAllResponseSchema as getSummarizeAllUIResponseSchema,
  getSummarizeResponseSchema as getSummarizeUIResponseSchema,
  getChatHistoryResponseSchema as getChatHistoryUIResponseSchema,
  chatHistoryMcpToolConfirmationSchema,
  chatHistoryMcpToolExecutingSchema,
  chatHistoryMcpToolSuccessSchema,
  chatHistoryMcpToolErrorSchema,
  chatHistoryMcpToolRejectedSchema,
  chatHistoryErrorResponseSchema,
  chatHistoryServiceMessageSchema
} from './wstypes/ui-to-app-ws/chatHistorySchemas';

// codeUtilsSchemas
export {
  getAllFilesMarkdownResponseSchema as getAllFilesMarkdownUIResponseSchema,
  getMatcherListTreeResponseSchema as getMatcherListTreeUIResponseSchema,
  getMatchDetailResponseSchema,
  codeUtilsMcpToolConfirmationSchema,
  codeUtilsMcpToolExecutingSchema,
  codeUtilsMcpToolSuccessSchema,
  codeUtilsMcpToolErrorSchema,
  codeUtilsMcpToolRejectedSchema,
  codeUtilsErrorResponseSchema,
  codeUtilsServiceMessageSchema
} from './wstypes/ui-to-app-ws/codeUtilsSchemas';

// codebaseSearchSchemas
export {
  codebaseSearchStateEnumSchema,
  codebaseSearchConfirmationSchema,
  codebaseSearchExecutingSchema,
  codebaseSearchSuccessSchema,
  codebaseSearchErrorSchema,
  codebaseSearchRejectedSchema,
  codebaseSearchMcpToolConfirmationSchema,
  codebaseSearchMcpToolExecutingSchema,
  codebaseSearchMcpToolSuccessSchema,
  codebaseSearchMcpToolErrorSchema,
  codebaseSearchMcpToolRejectedSchema,
  codebaseSearchErrorResponseSchema,
  codebaseSearchServiceMessageSchema
} from './wstypes/ui-to-app-ws/codebaseSearchSchemas';

// coreMessageSchemas
export {
  templateEnumSchema,
  senderEnumSchema,
  webSocketMessageTypeSchema,
  componentTypeSchema,
  baseMessageSchema,
  buttonOptionSchema,
  messagePayloadSchema,
  messageDataSchema,
  coreMessageSchema,
  sendMessageSchema,
  processStartedSchema,
  processStoppedSchema,
  waitForReplySchema,
  confirmationRequestSchema,
  infoWithLinkSchema,
  codeViewInEditorSchema,
  codeConfirmationSchema,
  allCoreMessagesSchema
} from './wstypes/ui-to-app-ws/coreMessageSchemas';

// crawlerServiceSchemas
export {
  crawlerResponseSchema as crawlerUIResponseSchema,
  crawlerMcpToolConfirmationSchema,
  crawlerMcpToolExecutingSchema,
  crawlerMcpToolSuccessSchema,
  crawlerMcpToolErrorSchema,
  crawlerMcpToolRejectedSchema,
  crawlerErrorResponseSchema,
  crawlerServiceMessageSchema
} from './wstypes/ui-to-app-ws/crawlerServiceSchemas';

// debugServiceSchemas
export {
  debugAddLogResponseSchema as debugAddLogUIResponseSchema,
  openDebugBrowserResponseSchema,
  debugMcpToolConfirmationSchema,
  debugMcpToolExecutingSchema,
  debugMcpToolSuccessSchema,
  debugMcpToolErrorSchema,
  debugMcpToolRejectedSchema,
  debugServiceSchema
} from './wstypes/ui-to-app-ws/debugServiceSchemas';

// fileMessageSchemas
export {
  fileStateEnumSchema,
  fileWriteStateEnumSchema,
  filePayloadSchema,
  baseFileMessageSchema,
  fileReadConfirmationSchema,
  fileReadSuccessSchema,
  fileReadErrorSchema,
  fileReadRejectedSchema,
  fileWriteConfirmationSchema,
  fileWriteSuccessSchema,
  fileWriteErrorSchema,
  fileWriteRejectedSchema,
  fileCodeViewSchema,
  fileDataFormatSchema,
  directoryOperationSchema,
  fileSearchResultSchema,
  codebaseSearchMessageSchema,
  folderPayloadSchema,
  baseFolderMessageSchema,
  folderReadConfirmationSchema,
  folderReadSuccessSchema,
  folderReadErrorSchema,
  folderReadRejectedSchema,
  searchPayloadSchema,
  baseSearchMessageSchema,
  searchConfirmationSchema,
  searchInProgressSchema,
  searchSuccessSchema,
  searchErrorSchema,
  searchRejectedSchema,
  mcpToolPayloadSchema,
  baseMcpToolMessageSchema,
  mcpToolConfirmationSchema as fileUIToolConfirmationSchema,
  mcpToolExecutingSchema as fileUIToolExecutingSchema,
  mcpToolSuccessSchema as fileUIToolSuccessSchema,
  mcpToolErrorSchema as fileUIToolErrorSchema,
  mcpToolRejectedSchema as fileUIToolRejectedSchema,
  editFilePayloadSchema,
  editFileMessageSchema,
  fileMessageSchema
} from './wstypes/ui-to-app-ws/fileMessageSchemas';

// fsServiceSchemas
export {
  createFileResponseSchema,
  createFolderResponseSchema,
  readFileResponseSchema,
  updateFileResponseSchema,
  deleteFileResponseSchema,
  deleteFolderResponseSchema,
  fileListResponseSchema,
  listCodeDefinitionNamesResponseSchema,
  searchFilesResponseSchema,
  grepSearchResponseSchema,
  fileSearchResponseSchema,
  editFileAndApplyDiffResponseSchema,
  fsMcpToolConfirmationSchema,
  fsMcpToolExecutingSchema,
  fsMcpToolSuccessSchema,
  fsMcpToolErrorSchema,
  fsMcpToolRejectedSchema,
  fsErrorResponseSchema,
  fsServiceMessageSchema
} from './wstypes/ui-to-app-ws/fsServiceSchemas';

// gitServiceSchemas
export {
  gitInitResponseSchema,
  addResponseSchema,
  gitCommitResponseSchema,
  gitPushResponseSchema,
  gitPullResponseSchema,
  gitCheckoutResponseSchema,
  gitBranchResponseSchema,
  gitLogsResponseSchema,
  gitDiffResponseSchema,
  gitStatusResponseSchema,
  gitCloneResponseSchema,
  gitMcpToolConfirmationSchema,
  gitMcpToolExecutingSchema,
  gitMcpToolSuccessSchema,
  gitMcpToolErrorSchema,
  gitMcpToolRejectedSchema,
  gitErrorResponseSchema,
  gitServiceMessageSchema
} from './wstypes/ui-to-app-ws/gitServiceSchemas';

// jsTreeParserSchemas
export {
  getTreeResponseSchema as getTreeUIResponseSchema,
  jsTreeParserMcpToolConfirmationSchema,
  jsTreeParserMcpToolExecutingSchema,
  jsTreeParserMcpToolSuccessSchema,
  jsTreeParserMcpToolErrorSchema,
  jsTreeParserMcpToolRejectedSchema,
  jsTreeParserErrorResponseSchema,
  jsTreeParserServiceMessageSchema
} from './wstypes/ui-to-app-ws/jsTreeParserSchemas';

// mcpServiceSchemas
export {
  mcpToolConfirmationSchema as mcpUIToolConfirmationSchema,
  mcpToolExecutingSchema as mcpUIToolExecutingSchema,
  mcpToolSuccessSchema as mcpUIToolSuccessSchema,
  mcpToolErrorSchema as mcpUIToolErrorSchema,
  mcpToolRejectedSchema as mcpUIToolRejectedSchema,
  getEnabledToolBoxesResponseSchema,
  getAvailableToolBoxesResponseSchema,
  getLocalToolBoxesResponseSchema,
  executeToolResponseSchema,
  installToolBoxResponseSchema,
  uninstallToolBoxResponseSchema,
  enableToolBoxResponseSchema,
  disableToolBoxResponseSchema,
  getToolBoxConfigResponseSchema,
  updateToolBoxConfigResponseSchema,
  getToolBoxStatusResponseSchema,
  mcpServiceSchema
} from './wstypes/ui-to-app-ws/mcpServiceSchemas';

// mcpToolMessageSchemas
export {
  mcpToolStateEnumSchema,
  mcpToolPayloadSchema as mcpUIToolPayloadSchema,
  baseMcpToolMessageSchema as baseMcpUIToolMessageSchema,
  mcpToolConfirmationSchema as mcpToolUIConfirmationSchema,
  mcpToolExecutingSchema as mcpToolUIExecutingSchema,
  mcpToolExecutedSchema,
  mcpToolRejectedSchema as mcpToolUIRejectedSchema,
  mcpToolErrorSchema as mcpToolUIErrorSchema,
  mcpStartupErrorSchema,
  fsToolMessageSchema,
  terminalToolMessageSchema,
  browserToolMessageSchema,
  agentToolMessageSchema,
  vectordbToolMessageSchema,
  memoryToolMessageSchema,
  gitToolMessageSchema,
  debugToolMessageSchema,
  notificationToolMessageSchema,
  codebaseToolMessageSchema,
  crawlerToolMessageSchema,
  taskToolMessageSchema,
  problemToolMessageSchema,
  codeToolMessageSchema,
  projectToolMessageSchema,
  messageToolMessageSchema,
  appToolMessageSchema,
  treeToolMessageSchema,
  mcpToolMessageSchema
} from './wstypes/ui-to-app-ws/mcpToolMessageSchemas';

// memoryServiceSchemas
export {
  memoryMcpToolConfirmationSchema,
  memoryMcpToolExecutingSchema,
  memoryMcpToolSuccessSchema,
  memoryMcpToolErrorSchema,
  memoryMcpToolRejectedSchema,
  memoryErrorResponseSchema,
  memoryServiceSchema
} from './wstypes/ui-to-app-ws/memoryServiceSchemas';

// messageServiceSchemas
export {
  messageMcpToolConfirmationSchema,
  messageMcpToolExecutingSchema,
  messageMcpToolSuccessSchema,
  messageMcpToolErrorSchema,
  messageMcpToolRejectedSchema,
  agentMessageSchema as messageUIAgentMessageSchema,
  infoWithLinkMessageSchema,
  codeViewInEditorMessageSchema,
  codeConfirmationMessageSchema,
  sendMessageResponseSchema,
  waitForReplyResponseSchema,
  confirmationRequestResponseSchema,
  fileReadWriteRequestResponseSchema,
  confirmationWithFeedbackResponseSchema,
  messageServiceSchema
} from './wstypes/ui-to-app-ws/messageServiceSchemas';

// notificationMessageSchemas
export {
  notificationMcpToolConfirmationSchema,
  notificationMcpToolExecutingSchema,
  notificationMcpToolSuccessSchema,
  notificationMcpToolErrorSchema,
  notificationMcpToolRejectedSchema,
  notificationTypeSchema,
  notificationPrioritySchema,
  aiRequestStateSchema,
  baseNotificationMessageSchema,
  simpleNotificationSchema,
  richNotificationSchema,
  progressNotificationSchema,
  toastNotificationSchema,
  systemStatusNotificationSchema,
  agentNotificationSchema as notificationUIAgentNotificationSchema,
  fileOperationNotificationSchema,
  buildNotificationSchema,
  connectionNotificationSchema,
  updateNotificationSchema,
  aiRequestNotificationSchema,
  notificationErrorResponseSchema,
  notificationMessageSchema
} from './wstypes/ui-to-app-ws/notificationMessageSchemas';

// problemMatcherSchemas
export {
  matchProblemResponseSchema,
  problemMatcherMcpToolConfirmationSchema,
  problemMatcherMcpToolExecutingSchema,
  problemMatcherMcpToolSuccessSchema,
  problemMatcherMcpToolErrorSchema,
  problemMatcherMcpToolRejectedSchema,
  problemMatcherErrorResponseSchema,
  problemMatcherServiceMessageSchema
} from './wstypes/ui-to-app-ws/problemMatcherSchemas';

// projectServiceSchemas
export {
  getProjectPathResponseSchema,
  getProjectSettingsResponseSchema,
  getRepoMapResponseSchema,
  projectMcpToolConfirmationSchema,
  projectMcpToolExecutingSchema,
  projectMcpToolSuccessSchema,
  projectMcpToolErrorSchema,
  projectMcpToolRejectedSchema,
  projectErrorResponseSchema,
  projectServiceMessageSchema
} from './wstypes/ui-to-app-ws/projectServiceSchemas';

// responseMessageSchemas
export {
  aiRequestStateEnumSchema,
  baseResponseMessageSchema,
  successResponseSchema,
  errorResponseSchema,
  createFileResponseSchema as createFileUIResponseSchema,
  readFileResponseSchema as readFileUIResponseSchema,
  updateFileResponseSchema as updateFileUIResponseSchema,
  deleteFileResponseSchema as deleteFileUIResponseSchema,
  fileListResponseSchema as fileListUIResponseSchema,
  gitInitResponseSchema as gitInitUIResponseSchema,
  gitCommitResponseSchema as gitCommitUIResponseSchema,
  gitPushResponseSchema as gitPushUIResponseSchema,
  gitStatusResponseSchema as gitStatusUIResponseSchema,
  gitLogsResponseSchema as gitLogsUIResponseSchema,
  gitDiffResponseSchema as gitDiffUIResponseSchema,
  getEnabledToolBoxesResponseSchema as getEnabledToolBoxesUIResponseSchema,
  getAvailableToolBoxesResponseSchema as getAvailableToolBoxesUIResponseSchema,
  getLocalToolBoxesResponseSchema as getLocalToolBoxesUIResponseSchema,
  executeToolResponseSchema as executeToolUIResponseSchema,
  addTaskResponseSchema,
  updateTasksResponseSchema,
  deleteTaskResponseSchema,
  createTasksFromMarkdownResponseSchema,
  getAppStateResponseSchema as getAppStateResponseUISchema,
  getAgentStateResponseSchema,
  addToAgentStateResponseSchema,
  getProjectPathResponseSchema as getProjectPathUIResponseSchema,
  getProjectSettingsResponseSchema as getProjectSettingsUIResponseSchema,
  getRepoMapResponseSchema as getRepoMapUIResponseSchema,
  addVectorItemResponseSchema,
  getVectorResponseSchema,
  queryVectorItemResponseSchema,
  addTokenResponseSchema,
  getTokenResponseSchema,
  getSummarizeAllResponseSchema as getSummarizeAllResponseUISchema,
  getSummarizeResponseSchema as getSummarizeResponseUISchema,
  getChatHistoryResponseSchema as getChatHistoryResponseUISchema,
  getAllFilesMarkdownResponseSchema as getAllFilesMarkdownResponseUISchema,
  matchProblemResponseSchema as matchProblemUIResponseSchema,
  getMatcherListTreeResponseSchema as getMatcherListTreeResponseUISchema,
  debugAddLogResponseSchema as debugAddLogResponseUISchema,
  openDebugBrowserResponseSchema as openDebugBrowserUIResponseSchema,
  newPageResponseSchema as newPageResponseUISchema,
  crawlerResponseSchema as crawlerResponseUISchema,
  getTreeResponseSchema as getTreeResponseUISchema,
  searchFilesResponseSchema as searchFilesUIResponseSchema,
  grepSearchResponseSchema as grepSearchUIResponseSchema,
  fileSearchResponseSchema as fileSearchUIResponseSchema,
  editFileAndApplyDiffResponseSchema as editFileAndApplyDiffUIResponseSchema,
  responseMessageSchema
} from './wstypes/ui-to-app-ws/responseMessageSchemas';

// stateMessageSchemas
export {
  stateUpdateTypeSchema,
  baseStateMessageSchema,
  projectStateUpdateSchema,
  agentStateUpdateSchema as agentUIStateUpdateSchema,
  applicationStateUpdateSchema,
  uiStateUpdateSchema,
  connectionStateUpdateSchema,
  permissionStateUpdateSchema,
  configurationStateUpdateSchema,
  fileStateUpdateSchema,
  stateMessageSchema
} from './wstypes/ui-to-app-ws/stateMessageSchemas';

// stateServiceSchemas
export {
  getAgentStateResponseSchema as getAgentStateUIResponseSchema,
  addToAgentStateResponseSchema as addToAgentStateUIResponseSchema,
  stateErrorResponseSchema,
  stateServiceMessageSchema
} from './wstypes/ui-to-app-ws/stateServiceSchemas';

// taskServiceSchemas
export {
  taskMcpToolConfirmationSchema,
  taskMcpToolExecutingSchema,
  taskMcpToolSuccessSchema,
  taskMcpToolErrorSchema,
  taskMcpToolRejectedSchema,
  addTaskResponseSchema as addTaskUIResponseSchema,
  updateTasksResponseSchema as updateTasksUIResponseSchema,
  addSubTaskResponseSchema,
  updateSubTaskResponseSchema,
  deleteTaskResponseSchema as deleteTaskUIResponseSchema,
  createTasksFromMarkdownResponseSchema as createTasksFromMarkdownUIResponseSchema,
  getTasksResponseSchema,
  getTasksByAgentResponseSchema,
  getTasksByCategoryResponseSchema,
  getAllAgentsResponseSchema,
  exportTasksToMarkdownResponseSchema,
  taskErrorResponseSchema,
  getTaskByIdResponseSchema,
  completeTaskResponseSchema,
  assignTaskResponseSchema,
  getTaskStatusResponseSchema,
  prioritizeTaskResponseSchema,
  taskServiceSchema,
  taskServiceMessageSchema
} from './wstypes/ui-to-app-ws/taskServiceSchemas';

// terminalServiceSchemas
export {
  terminalMcpToolConfirmationSchema,
  terminalMcpToolExecutingSchema,
  terminalMcpToolSuccessSchema,
  terminalMcpToolErrorSchema,
  terminalMcpToolRejectedSchema,
  executeCommandResponseSchema,
  executeCommandRunUntilInterruptResponseSchema,
  executeCommandRunUntilErrorResponseSchema,
  executeCommandWithStreamResponseSchema,
  sendInterruptToTerminalResponseSchema,
  getTerminalStatusResponseSchema,
  setTerminalDirectoryResponseSchema,
  getTerminalHistoryResponseSchema,
  clearTerminalResponseSchema,
  terminalServiceSchema
} from './wstypes/ui-to-app-ws/terminalServiceSchemas';

// tokenizerServiceSchemas
export {
  addTokenResponseSchema as addTokenUIResponseSchema,
  getTokenResponseSchema as getTokenUIResponseSchema,
  tokenizerMcpToolConfirmationSchema,
  tokenizerMcpToolExecutingSchema,
  tokenizerMcpToolSuccessSchema,
  tokenizerMcpToolErrorSchema,
  tokenizerMcpToolRejectedSchema,
  tokenizerErrorResponseSchema,
  tokenizerServiceMessageSchema
} from './wstypes/ui-to-app-ws/tokenizerServiceSchemas';

// vectordbServiceSchemas
export {
  vectordbMcpToolConfirmationSchema,
  vectordbMcpToolExecutingSchema,
  vectordbMcpToolSuccessSchema,
  vectordbMcpToolErrorSchema,
  vectordbMcpToolRejectedSchema,
  addVectorItemResponseSchema as addVectorItemUIResponseSchema,
  getVectorResponseSchema as getVectorUIResponseSchema,
  queryVectorItemResponseSchema as queryVectorItemUIResponseSchema,
  deleteVectorItemResponseSchema,
  updateVectorItemResponseSchema,
  listVectorItemsResponseSchema,
  searchVectorItemsResponseSchema,
  getVectorStatsResponseSchema,
  clearVectorDatabaseResponseSchema,
  vectordbServiceSchema
} from './wstypes/ui-to-app-ws/vectordbServiceSchemas'; 