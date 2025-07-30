export const codeboltApiMapping = {
  // File System APIs
  "fs.createFile": {
    "name": "createFile",
    "websocketSendType": "CreateFileEvent",
    "websocketSendSchema": "createFileEventSchema", 
    "websocketReceiveType": "CreateFileSuccessResponse | CreateFileErrorResponse",
    "websocketReceiveSchema": "CreateFileSuccessResponseSchema | CreateFileErrorResponseSchema"
  },
  "fs.createFolder": {
    "name": "createFolder",
    "websocketSendType": "CreateFolderEvent",
    "websocketSendSchema": "createFolderEventSchema",
    "websocketReceiveType": "CreateFolderSuccessResponse | CreateFolderErrorResponse", 
    "websocketReceiveSchema": "CreateFolderSuccessResponseSchema | CreateFolderErrorResponseSchema"
  },
  "fs.readFile": {
    "name": "readFile",
    "websocketSendType": "ReadFileEvent",
    "websocketSendSchema": "readFileEventSchema",
    "websocketReceiveType": "ReadFileSuccessResponse | ReadFileSuccessResultResponse",
    "websocketReceiveSchema": "ReadFileSuccessResponseSchema | ReadFileSuccessResultResponseSchema"
  },
  "fs.updateFile": {
    "name": "updateFile", 
    "websocketSendType": "UpdateFileEvent",
    "websocketSendSchema": "updateFileEventSchema",
    "websocketReceiveType": "UpdateFileSuccessResponse | UpdateFileErrorResponse",
    "websocketReceiveSchema": "UpdateFileSuccessResponseSchema | UpdateFileErrorResponseSchema"
  },
  "fs.deleteFile": {
    "name": "deleteFile",
    "websocketSendType": "DeleteFileEvent", 
    "websocketSendSchema": "deleteFileEventSchema",
    "websocketReceiveType": "DeleteFileSuccessResponse | DeleteFileErrorResponse",
    "websocketReceiveSchema": "DeleteFileSuccessResponseSchema | DeleteFileErrorResponseSchema"
  },
  "fs.deleteFolder": {
    "name": "deleteFolder",
    "websocketSendType": "DeleteFolderEvent",
    "websocketSendSchema": "deleteFolderEventSchema", 
    "websocketReceiveType": "DeleteFolderSuccessResponse | DeleteFolderErrorResponse",
    "websocketReceiveSchema": "DeleteFolderSuccessResponseSchema | DeleteFolderErrorResponseSchema"
  },
  "fs.listFile": {
    "name": "listFile",
    "websocketSendType": "GetFilesEvent",
    "websocketSendSchema": "getFilesEventSchema",
    "websocketReceiveType": "FileListSuccessResponse | FileListErrorResponse", 
    "websocketReceiveSchema": "FileListSuccessResponseSchema | FileListErrorResponseSchema"
  },
  "fs.listCodeDefinitionNames": {
    "name": "listCodeDefinitionNames",
    "websocketSendType": "FsEvent",
    "websocketSendSchema": "fsEventBaseSchema",
    "websocketReceiveType": "ListCodeDefinitionNamesSuccessResponse | ListCodeDefinitionNamesErrorResponse",
    "websocketReceiveSchema": "ListCodeDefinitionNamesSuccessResponseSchema | ListCodeDefinitionNamesErrorResponseSchema"
  },
  "fs.searchFiles": {
    "name": "searchFiles",
    "websocketSendType": "SearchFilesEvent", 
    "websocketSendSchema": "searchFilesEventSchema",
    "websocketReceiveType": "SearchFilesSuccessResponse | SearchFilesErrorResponse",
    "websocketReceiveSchema": "SearchFilesSuccessResponseSchema | SearchFilesErrorResponseSchema"
  },
  "fs.writeToFile": {
    "name": "writeToFile",
    "websocketSendType": "FsEvent",
    "websocketSendSchema": "fsEventBaseSchema",
    "websocketReceiveType": "WriteToFileSuccessResponse | WriteToFileErrorResponse",
    "websocketReceiveSchema": "WriteToFileSuccessResponseSchema | WriteToFileErrorResponseSchema"
  },
  "fs.grepSearch": {
    "name": "grepSearch", 
    "websocketSendType": "FsEvent",
    "websocketSendSchema": "fsEventBaseSchema",
    "websocketReceiveType": "GrepSearchSuccessResponse | GrepSearchErrorResponse",
    "websocketReceiveSchema": "GrepSearchSuccessResponseSchema | GrepSearchErrorResponseSchema"
  },
  "fs.fileSearch": {
    "name": "fileSearch",
    "websocketSendType": "FsEvent",
    "websocketSendSchema": "fsEventBaseSchema", 
    "websocketReceiveType": "FileSearchSuccessResponse | FileSearchErrorResponse",
    "websocketReceiveSchema": "FileSearchSuccessResponseSchema | FileSearchErrorResponseSchema"
  },
  "fs.editFileAndApplyDiff": {
    "name": "editFileAndApplyDiff",
    "websocketSendType": "EditFileAndApplyDiffEvent",
    "websocketSendSchema": "editFileAndApplyDiffEventSchema",
    "websocketReceiveType": "EditFileAndApplyDiffSuccessResponse | EditFileAndApplyDiffErrorResponse",
    "websocketReceiveSchema": "EditFileAndApplyDiffSuccessResponseSchema | EditFileAndApplyDiffErrorResponseSchema"
  },

  // Browser APIs
  "browser.newPage": {
    "name": "newPage",
    "websocketSendType": "NewPageEvent",
    "websocketSendSchema": "newPageEventSchema",
    "websocketReceiveType": "NewPageResponse", 
    "websocketReceiveSchema": "newPageResponseSchema"
  },
  "browser.getUrl": {
    "name": "getUrl",
    "websocketSendType": "GetUrlEvent",
    "websocketSendSchema": "getUrlEventSchema",
    "websocketReceiveType": "BrowserActionResponseData",
    "websocketReceiveSchema": "browserActionResponseDataSchema"
  },
  "browser.goToPage": {
    "name": "goToPage",
    "websocketSendType": "GoToPageEvent", 
    "websocketSendSchema": "goToPageEventSchema",
    "websocketReceiveType": "GoToPageResponse",
    "websocketReceiveSchema": "goToPageResponseSchema"
  },
  "browser.screenshot": {
    "name": "screenshot",
    "websocketSendType": "ScreenshotEvent",
    "websocketSendSchema": "screenshotEventSchema",
    "websocketReceiveType": "BrowserScreenshotResponse",
    "websocketReceiveSchema": "browserScreenshotResponseSchema"
  },
  "browser.getHTML": {
    "name": "getHTML",
    "websocketSendType": "GetHtmlEvent",
    "websocketSendSchema": "getHtmlEventSchema", 
    "websocketReceiveType": "HtmlReceived",
    "websocketReceiveSchema": "htmlReceivedSchema"
  },
  "browser.getMarkdown": {
    "name": "getMarkdown",
    "websocketSendType": "GetMarkdownEvent",
    "websocketSendSchema": "getMarkdownEventSchema",
    "websocketReceiveType": "GetMarkdownResponse",
    "websocketReceiveSchema": "getMarkdownResponseSchema"
  },
  "browser.getPDF": {
    "name": "getPDF",
    "websocketSendType": "GetPdfEvent",
    "websocketSendSchema": "getPdfEventSchema", 
    "websocketReceiveType": "void",
    "websocketReceiveSchema": "void"
  },
  "browser.extractText": {
    "name": "extractText",
    "websocketSendType": "ExtractTextEvent",
    "websocketSendSchema": "extractTextEventSchema",
    "websocketReceiveType": "ExtractTextResponse",
    "websocketReceiveSchema": "extractTextResponseSchema"
  },
  "browser.getContent": {
    "name": "getContent",
    "websocketSendType": "GetContentEvent", 
    "websocketSendSchema": "getContentEventSchema",
    "websocketReceiveType": "GetContentResponse",
    "websocketReceiveSchema": "getContentResponseSchema"
  },
  "browser.click": {
    "name": "click",
    "websocketSendType": "ClickEvent",
    "websocketSendSchema": "clickEventSchema",
    "websocketReceiveType": "BrowserActionResponseData",
    "websocketReceiveSchema": "browserActionResponseDataSchema"
  },
  "browser.type": {
    "name": "type",
    "websocketSendType": "TypeTextEvent",
    "websocketSendSchema": "typeTextEventSchema", 
    "websocketReceiveType": "BrowserActionResponseData",
    "websocketReceiveSchema": "browserActionResponseDataSchema"
  },
  "browser.scroll": {
    "name": "scroll",
    "websocketSendType": "ScrollEvent",
    "websocketSendSchema": "scrollEventSchema",
    "websocketReceiveType": "BrowserActionResponseData",
    "websocketReceiveSchema": "browserActionResponseDataSchema"
  },
  "browser.wait": {
    "name": "wait",
    "websocketSendType": "WaitEvent", 
    "websocketSendSchema": "waitEventSchema",
    "websocketReceiveType": "BrowserActionResponseData",
    "websocketReceiveSchema": "browserActionResponseDataSchema"
  },
  "browser.evaluate": {
    "name": "evaluate",
    "websocketSendType": "EvaluateEvent",
    "websocketSendSchema": "evaluateEventSchema",
    "websocketReceiveType": "BrowserActionResponseData",
    "websocketReceiveSchema": "browserActionResponseDataSchema"
  },
  "browser.getElementInfo": {
    "name": "getElementInfo",
    "websocketSendType": "GetElementInfoEvent",
    "websocketSendSchema": "getElementInfoEventSchema", 
    "websocketReceiveType": "BrowserInfoResponse",
    "websocketReceiveSchema": "browserInfoResponseSchema"
  },
  "browser.takeElementScreenshot": {
    "name": "takeElementScreenshot",
    "websocketSendType": "TakeElementScreenshotEvent",
    "websocketSendSchema": "takeElementScreenshotEventSchema",
    "websocketReceiveType": "BrowserActionResponseData",
    "websocketReceiveSchema": "browserActionResponseDataSchema"
  },
  "browser.setViewport": {
    "name": "setViewport",
    "websocketSendType": "SetViewportEvent",
    "websocketSendSchema": "setViewportEventSchema", 
    "websocketReceiveType": "BrowserActionResponseData",
    "websocketReceiveSchema": "browserActionResponseDataSchema"
  },
  "browser.reloadPage": {
    "name": "reloadPage",
    "websocketSendType": "ReloadPageEvent",
    "websocketSendSchema": "reloadPageEventSchema",
    "websocketReceiveType": "BrowserActionResponseData",
    "websocketReceiveSchema": "browserActionResponseDataSchema"
  },
  "browser.goBack": {
    "name": "goBack",
    "websocketSendType": "GoBackEvent",
    "websocketSendSchema": "goBackEventSchema", 
    "websocketReceiveType": "BrowserActionResponseData",
    "websocketReceiveSchema": "browserActionResponseDataSchema"
  },
  "browser.goForward": {
    "name": "goForward", 
    "websocketSendType": "GoForwardEvent",
    "websocketSendSchema": "goForwardEventSchema",
    "websocketReceiveType": "BrowserActionResponseData",
    "websocketReceiveSchema": "browserActionResponseDataSchema"
  },
  "browser.closeBrowser": {
    "name": "closeBrowser",
    "websocketSendType": "CloseBrowserEvent",
    "websocketSendSchema": "closeBrowserEventSchema",
    "websocketReceiveType": "BrowserActionResponseData",
    "websocketReceiveSchema": "browserActionResponseDataSchema"
  },
  "browser.getSnapshot": {
    "name": "getSnapshot",
    "websocketSendType": "BrowserEvent", 
    "websocketSendSchema": "browserEventBaseSchema",
    "websocketReceiveType": "BrowserSnapshotResponse",
    "websocketReceiveSchema": "browserSnapshotResponseSchema"
  },

  // Chat APIs
  "chat.getChatHistory": {
    "name": "getChatHistory",
    "websocketSendType": "GetChatHistoryEvent",
    "websocketSendSchema": "getChatHistoryEventSchema",
    "websocketReceiveType": "GetChatHistoryResponse",
    "websocketReceiveSchema": "getChatHistoryResponseSchema"
  },
  "chat.sendMessage": {
    "name": "sendMessage",
    "websocketSendType": "SendMessageEvent", 
    "websocketSendSchema": "sendMessageEventSchema",
    "websocketReceiveType": "void",
    "websocketReceiveSchema": "void"
  },
  "chat.waitforReply": {
    "name": "waitforReply",
    "websocketSendType": "ChatEvent",
    "websocketSendSchema": "chatEventBaseSchema",
    "websocketReceiveType": "UserMessage",
    "websocketReceiveSchema": "userMessageSchema"
  },
  "chat.processStarted": {
    "name": "processStarted",
    "websocketSendType": "ProcessStoppedEvent", 
    "websocketSendSchema": "processStoppedEventSchema",
    "websocketReceiveType": "ProcessStoppedResponse",
    "websocketReceiveSchema": "processStoppedResponseSchema"
  },
  "chat.askQuestion": {
    "name": "askQuestion",
    "websocketSendType": "ChatEvent",
    "websocketSendSchema": "chatEventBaseSchema",
    "websocketReceiveType": "string",
    "websocketReceiveSchema": "z.string()"
  },
  "chat.askQuestionWithChoices": {
    "name": "askQuestionWithChoices",
    "websocketSendType": "ChatEvent", 
    "websocketSendSchema": "chatEventBaseSchema",
    "websocketReceiveType": "string",
    "websocketReceiveSchema": "z.string()"
  },
  "chat.sendConfirmationRequest": {
    "name": "sendConfirmationRequest",
    "websocketSendType": "ChatEvent",
    "websocketSendSchema": "chatEventBaseSchema",
    "websocketReceiveType": "boolean",
    "websocketReceiveSchema": "z.boolean()"
  },

  // Agent APIs
  "agent.findAgent": {
    "name": "findAgent",
    "websocketSendType": "FindAgentEvent", 
    "websocketSendSchema": "findAgentEventSchema",
    "websocketReceiveType": "FindAgentByTaskResponse",
    "websocketReceiveSchema": "findAgentByTaskResponseSchema"
  },
  "agent.startAgent": {
    "name": "startAgent",
    "websocketSendType": "StartAgentEvent",
    "websocketSendSchema": "startAgentEventSchema",
    "websocketReceiveType": "TaskCompletionResponse",
    "websocketReceiveSchema": "taskCompletionResponseSchema"
  },
  "agent.getAgentsList": {
    "name": "getAgentsList",
    "websocketSendType": "ListAgentsEvent", 
    "websocketSendSchema": "listAgentsEventSchema",
    "websocketReceiveType": "ListAgentsResponse",
    "websocketReceiveSchema": "listAgentsResponseSchema"
  },
  "agent.getAgentsDetail": {
    "name": "getAgentsDetail",
    "websocketSendType": "GetAgentDetailsEvent",
    "websocketSendSchema": "getAgentDetailsEventSchema",
    "websocketReceiveType": "AgentsDetailResponse",
    "websocketReceiveSchema": "agentsDetailResponseSchema"
  },

  // Git APIs
  "git.init": {
    "name": "init",
    "websocketSendType": "GitInitEvent", 
    "websocketSendSchema": "gitInitEventSchema",
    "websocketReceiveType": "GitInitResponse",
    "websocketReceiveSchema": "gitInitResponseSchema"
  },
  "git.pull": {
    "name": "pull",
    "websocketSendType": "GitPullEvent",
    "websocketSendSchema": "gitPullEventSchema",
    "websocketReceiveType": "GitPullResponse",
    "websocketReceiveSchema": "gitPullResponseSchema"
  },
  "git.push": {
    "name": "push",
    "websocketSendType": "GitPushEvent", 
    "websocketSendSchema": "gitPushEventSchema",
    "websocketReceiveType": "GitPushResponse",
    "websocketReceiveSchema": "gitPushResponseSchema"
  },
  "git.status": {
    "name": "status",
    "websocketSendType": "GitStatusEvent",
    "websocketSendSchema": "gitStatusEventSchema",
    "websocketReceiveType": "GitStatusResponse",
    "websocketReceiveSchema": "gitStatusResponseSchema"
  },
  "git.addAll": {
    "name": "addAll",
    "websocketSendType": "GitAddEvent", 
    "websocketSendSchema": "gitAddEventSchema",
    "websocketReceiveType": "GitAddResponse",
    "websocketReceiveSchema": "gitAddResponseSchema"
  },
  "git.commit": {
    "name": "commit",
    "websocketSendType": "GitCommitEvent",
    "websocketSendSchema": "gitCommitEventSchema",
    "websocketReceiveType": "GitCommitResponse",
    "websocketReceiveSchema": "gitCommitResponseSchema"
  },
  "git.checkout": {
    "name": "checkout",
    "websocketSendType": "GitCheckoutEvent", 
    "websocketSendSchema": "gitCheckoutEventSchema",
    "websocketReceiveType": "GitCheckoutResponse",
    "websocketReceiveSchema": "gitCheckoutResponseSchema"
  },
  "git.branch": {
    "name": "branch",
    "websocketSendType": "GitBranchEvent",
    "websocketSendSchema": "gitBranchEventSchema",
    "websocketReceiveType": "GitBranchResponse",
    "websocketReceiveSchema": "gitBranchResponseSchema"
  },
  "git.logs": {
    "name": "logs",
    "websocketSendType": "GitLogsEvent", 
    "websocketSendSchema": "gitLogsEventSchema",
    "websocketReceiveType": "GitLogsResponse",
    "websocketReceiveSchema": "gitLogsResponseSchema"
  },
  "git.diff": {
    "name": "diff",
    "websocketSendType": "GitDiffEvent",
    "websocketSendSchema": "gitDiffEventSchema",
    "websocketReceiveType": "GitDiffResponse",
    "websocketReceiveSchema": "gitDiffResponseSchema"
  },
  "git.clone": {
    "name": "clone",
    "websocketSendType": "GitCloneEvent", 
    "websocketSendSchema": "gitCloneEventSchema",
    "websocketReceiveType": "GitCloneResponse",
    "websocketReceiveSchema": "gitCloneResponseSchema"
  },

  // LLM APIs
  "llm.inference": {
    "name": "inference",
    "websocketSendType": "InferenceEvent",
    "websocketSendSchema": "inferenceEventSchema",
    "websocketReceiveType": "LLMResponse",
    "websocketReceiveSchema": "llmResponseSchema"
  },
  "llm.legacyInference": {
    "name": "legacyInference",
    "websocketSendType": "LegacyInferenceEvent", 
    "websocketSendSchema": "legacyInferenceEventSchema",
    "websocketReceiveType": "LLMResponse",
    "websocketReceiveSchema": "llmResponseSchema"
  },

  // Terminal APIs
  "terminal.executeCommand": {
    "name": "executeCommand",
    "websocketSendType": "ExecuteCommandEvent",
    "websocketSendSchema": "executeCommandEventSchema",
    "websocketReceiveType": "CommandOutputResponse",
    "websocketReceiveSchema": "commandOutputResponseSchema"
  },
  "terminal.executeCommandRunUntilError": {
    "name": "executeCommandRunUntilError",
    "websocketSendType": "ExecuteCommandRunUntilErrorEvent", 
    "websocketSendSchema": "executeCommandRunUntilErrorEventSchema",
    "websocketReceiveType": "CommandOutputResponse",
    "websocketReceiveSchema": "commandOutputResponseSchema"
  },
  "terminal.executeCommandRunUntilInterrupt": {
    "name": "executeCommandRunUntilInterrupt",
    "websocketSendType": "ExecuteCommandRunUntilInterruptEvent",
    "websocketSendSchema": "executeCommandRunUntilInterruptEventSchema",
    "websocketReceiveType": "CommandOutputResponse",
    "websocketReceiveSchema": "commandOutputResponseSchema"
  },
  "terminal.executeCommandWithStream": {
    "name": "executeCommandWithStream",
    "websocketSendType": "ExecuteCommandWithStreamEvent", 
    "websocketSendSchema": "executeCommandWithStreamEventSchema",
    "websocketReceiveType": "TerminalStreamDataResponse",
    "websocketReceiveSchema": "terminalStreamDataResponseSchema"
  },
  "terminal.sendInterruptToTerminal": {
    "name": "sendInterruptToTerminal",
    "websocketSendType": "SendInterruptToTerminalEvent",
    "websocketSendSchema": "sendInterruptToTerminalEventSchema",
    "websocketReceiveType": "TerminalInterruptResponse",
    "websocketReceiveSchema": "terminalInterruptResponseSchema"
  },

  // Task APIs
  "taskplaner.addTask": {
    "name": "addTask",
    "websocketSendType": "AddTaskEvent", 
    "websocketSendSchema": "addTaskEventSchema",
    "websocketReceiveType": "AddTaskResponse",
    "websocketReceiveSchema": "addTaskResponseSchema"
  },
  "taskplaner.addSimpleTask": {
    "name": "addSimpleTask",
    "websocketSendType": "AddSimpleTaskEvent",
    "websocketSendSchema": "addSimpleTaskEventSchema",
    "websocketReceiveType": "AddTaskResponse",
    "websocketReceiveSchema": "addTaskResponseSchema"
  },
  "taskplaner.getTasks": {
    "name": "getTasks",
    "websocketSendType": "GetTasksEvent", 
    "websocketSendSchema": "getTasksEventSchema",
    "websocketReceiveType": "GetTasksResponse",
    "websocketReceiveSchema": "getTasksResponseSchema"
  },
  "taskplaner.getTasksByAgent": {
    "name": "getTasksByAgent",
    "websocketSendType": "GetTasksByAgentEvent",
    "websocketSendSchema": "getTasksByAgentEventSchema",
    "websocketReceiveType": "GetTasksByAgentResponse",
    "websocketReceiveSchema": "getTasksByAgentResponseSchema"
  },
  "taskplaner.updateTask": {
    "name": "updateTask",
    "websocketSendType": "UpdateTaskEvent", 
    "websocketSendSchema": "updateTaskEventSchema",
    "websocketReceiveType": "UpdateTaskResponse",
    "websocketReceiveSchema": "updateTaskResponseSchema"
  },
  "taskplaner.deleteTask": {
    "name": "deleteTask",
    "websocketSendType": "DeleteTaskEvent",
    "websocketSendSchema": "deleteTaskEventSchema",
    "websocketReceiveType": "DeleteTaskResponse",
    "websocketReceiveSchema": "deleteTaskResponseSchema"
  },
  "taskplaner.addSubTask": {
    "name": "addSubTask",
    "websocketSendType": "AddSubTaskEvent", 
    "websocketSendSchema": "addSubTaskEventSchema",
    "websocketReceiveType": "AddSubTaskResponse",
    "websocketReceiveSchema": "addSubTaskResponseSchema"
  },
  "taskplaner.updateSubTask": {
    "name": "updateSubTask",
    "websocketSendType": "UpdateSubTaskEvent",
    "websocketSendSchema": "updateSubTaskEventSchema",
    "websocketReceiveType": "UpdateSubTaskResponse",
    "websocketReceiveSchema": "updateSubTaskResponseSchema"
  },

  // Vector Database APIs
  "vectordb.addVectorItem": {
    "name": "addVectorItem",
    "websocketSendType": "AddVectorItemEvent", 
    "websocketSendSchema": "addVectorItemEventSchema",
    "websocketReceiveType": "AddVectorItemResponse",
    "websocketReceiveSchema": "addVectorItemResponseSchema"
  },
  "vectordb.getVector": {
    "name": "getVector",
    "websocketSendType": "GetVectorEvent",
    "websocketSendSchema": "getVectorEventSchema",
    "websocketReceiveType": "GetVectorResponse",
    "websocketReceiveSchema": "getVectorResponseSchema"
  },
  "vectordb.queryVectorItem": {
    "name": "queryVectorItem",
    "websocketSendType": "QueryVectorItemEvent", 
    "websocketSendSchema": "queryVectorItemEventSchema",
    "websocketReceiveType": "QueryVectorItemResponse",
    "websocketReceiveSchema": "queryVectorItemResponseSchema"
  },

  // Memory APIs
  "dbmemory.set": {
    "name": "set",
    "websocketSendType": "MemorySetEvent",
    "websocketSendSchema": "memorySetEventSchema",
    "websocketReceiveType": "MemorySetResponse",
    "websocketReceiveSchema": "memorySetResponseSchema"
  },
  "dbmemory.get": {
    "name": "get",
    "websocketSendType": "MemoryGetEvent", 
    "websocketSendSchema": "memoryGetEventSchema",
    "websocketReceiveType": "MemoryGetResponse",
    "websocketReceiveSchema": "memoryGetResponseSchema"
  },
  "dbmemory.delete": {
    "name": "delete",
    "websocketSendType": "MemoryDeleteEvent",
    "websocketSendSchema": "memoryDeleteEventSchema",
    "websocketReceiveType": "MemoryDeleteResponse",
    "websocketReceiveSchema": "memoryDeleteResponseSchema"
  },

  // State APIs
  "cbstate.getApplicationState": {
    "name": "getApplicationState",
    "websocketSendType": "GetApplicationStateEvent", 
    "websocketSendSchema": "getApplicationStateEventSchema",
    "websocketReceiveType": "GetApplicationStateResponse",
    "websocketReceiveSchema": "getApplicationStateResponseSchema"
  },
  "cbstate.addToAgentState": {
    "name": "addToAgentState",
    "websocketSendType": "AddToAgentStateEvent",
    "websocketSendSchema": "addToAgentStateEventSchema",
    "websocketReceiveType": "AddToAgentStateResponse",
    "websocketReceiveSchema": "addToAgentStateResponseSchema"
  },
  "cbstate.getAgentState": {
    "name": "getAgentState",
    "websocketSendType": "GetAgentStateEvent", 
    "websocketSendSchema": "getAgentStateEventSchema",
    "websocketReceiveType": "GetAgentStateResponse",
    "websocketReceiveSchema": "getAgentStateResponseSchema"
  },
  "cbstate.getProjectState": {
    "name": "getProjectState",
    "websocketSendType": "GetProjectStateEvent",
    "websocketSendSchema": "getProjectStateEventSchema",
    "websocketReceiveType": "GetProjectStateResponse",
    "websocketReceiveSchema": "getProjectStateResponseSchema"
  },
  "cbstate.updateProjectState": {
    "name": "updateProjectState",
    "websocketSendType": "UpdateProjectStateEvent", 
    "websocketSendSchema": "updateProjectStateEventSchema",
    "websocketReceiveType": "UpdateProjectStateResponse",
    "websocketReceiveSchema": "updateProjectStateResponseSchema"
  },

  // Debug APIs
  "debug.addLog": {
    "name": "addLog",
    "websocketSendType": "AddLogEvent",
    "websocketSendSchema": "addLogEventSchema",
    "websocketReceiveType": "DebugAddLogResponse",
    "websocketReceiveSchema": "debugAddLogResponseSchema"
  },
  "debug.openDebugBrowser": {
    "name": "openDebugBrowser",
    "websocketSendType": "OpenDebugBrowserEvent", 
    "websocketSendSchema": "openDebugBrowserEventSchema",
    "websocketReceiveType": "OpenDebugBrowserResponse",
    "websocketReceiveSchema": "openDebugBrowserResponseSchema"
  },

  // Tokenizer APIs
  "tokenizer.addToken": {
    "name": "addToken",
    "websocketSendType": "AddTokenEvent",
    "websocketSendSchema": "addTokenEventSchema",
    "websocketReceiveType": "AddTokenResponse",
    "websocketReceiveSchema": "addTokenResponseSchema"
  },
  "tokenizer.getToken": {
    "name": "getToken",
    "websocketSendType": "GetTokenEvent", 
    "websocketSendSchema": "getTokenEventSchema",
    "websocketReceiveType": "GetTokenResponse",
    "websocketReceiveSchema": "getTokenResponseSchema"
  },

  // Project APIs
  "project.getProjectSettings": {
    "name": "getProjectSettings",
    "websocketSendType": "GetProjectSettingsEvent",
    "websocketSendSchema": "getProjectSettingsEventSchema",
    "websocketReceiveType": "GetProjectSettingsResponse",
    "websocketReceiveSchema": "getProjectSettingsResponseSchema"
  },
  "project.getProjectPath": {
    "name": "getProjectPath",
    "websocketSendType": "GetProjectPathEvent", 
    "websocketSendSchema": "getProjectPathEventSchema",
    "websocketReceiveType": "GetProjectPathResponse",
    "websocketReceiveSchema": "getProjectPathResponseSchema"
  },
  "project.getRepoMap": {
    "name": "getRepoMap",
    "websocketSendType": "GetRepoMapEvent",
    "websocketSendSchema": "getRepoMapEventSchema",
    "websocketReceiveType": "GetRepoMapResponse",
    "websocketReceiveSchema": "getRepoMapResponseSchema"
  },

  // Crawler APIs
  "crawler.startCrawler": {
    "name": "startCrawler",
    "websocketSendType": "StartCrawlerEvent", 
    "websocketSendSchema": "startCrawlerEventSchema",
    "websocketReceiveType": "CrawlerResponse",
    "websocketReceiveSchema": "crawlerResponseSchema"
  },
  "crawler.crawlerGoToPage": {
    "name": "crawlerGoToPage",
    "websocketSendType": "CrawlerGoToPageEvent",
    "websocketSendSchema": "crawlerGoToPageEventSchema",
    "websocketReceiveType": "CrawlerResponse",
    "websocketReceiveSchema": "crawlerResponseSchema"
  },

  // MCP APIs
  "mcp.getEnabledToolBoxes": {
    "name": "getEnabledToolBoxes",
    "websocketSendType": "GetEnabledToolBoxesEvent", 
    "websocketSendSchema": "getEnabledToolBoxesEventSchema",
    "websocketReceiveType": "GetEnabledToolBoxesResponse",
    "websocketReceiveSchema": "getEnabledToolBoxesResponseSchema"
  },
  "mcp.getTools": {
    "name": "getTools",
    "websocketSendType": "GetToolsEvent",
    "websocketSendSchema": "getToolsEventSchema",
    "websocketReceiveType": "GetToolsResponse",
    "websocketReceiveSchema": "getToolsResponseSchema"
  },
  "mcp.executeTool": {
    "name": "executeTool",
    "websocketSendType": "ExecuteToolEvent", 
    "websocketSendSchema": "executeToolEventSchema",
    "websocketReceiveType": "ExecuteToolResponse",
    "websocketReceiveSchema": "executeToolResponseSchema"
  },

  // Code Utils APIs
  "codeutils.getAllFilesMarkdown": {
    "name": "getAllFilesMarkdown",
    "websocketSendType": "CodeUtilsEvent",
    "websocketSendSchema": "codeUtilsEventBaseSchema",
    "websocketReceiveType": "GetAllFilesMarkdownResponse",
    "websocketReceiveSchema": "getAllFilesMarkdownResponseSchema"
  },
  "codeutils.getMatcherListTree": {
    "name": "getMatcherListTree",
    "websocketSendType": "CodeUtilsEvent", 
    "websocketSendSchema": "codeUtilsEventBaseSchema",
    "websocketReceiveType": "GetMatcherListTreeResponse",
    "websocketReceiveSchema": "getMatcherListTreeResponseSchema"
  },
  "codeutils.getMatchDetail": {
    "name": "getMatchDetail",
    "websocketSendType": "CodeUtilsEvent",
    "websocketSendSchema": "codeUtilsEventBaseSchema",
    "websocketReceiveType": "GetMatchDetailResponse",
    "websocketReceiveSchema": "getMatchDetailResponseSchema"
  },

  // Code Parsers APIs
  "codeparsers.getJSTree": {
    "name": "getJSTree",
    "websocketSendType": "JSTreeParserEvent", 
    "websocketSendSchema": "jsTreeParserEventBaseSchema",
    "websocketReceiveType": "GetTreeResponse",
    "websocketReceiveSchema": "getTreeResponseSchema"
  },

  // Utils APIs
  "utils.editFileAndApplyDiff": {
    "name": "editFileAndApplyDiff",
    "websocketSendType": "EditFileAndApplyDiffEvent",
    "websocketSendSchema": "editFileAndApplyDiffEventSchema",
    "websocketReceiveType": "FsEditFileAndApplyDiffResponse",
    "websocketReceiveSchema": "fsEditFileAndApplyDiffResponseSchema"
  },

  // Chat Summary APIs
  "chatSummary.summarizeAll": {
    "name": "summarizeAll",
    "websocketSendType": "SummarizeAllEvent", 
    "websocketSendSchema": "summarizeAllEventSchema",
    "websocketReceiveType": "GetSummarizeAllResponse",
    "websocketReceiveSchema": "getSummarizeAllResponseSchema"
  },
  "chatSummary.summarize": {
    "name": "summarize",
    "websocketSendType": "SummarizeEvent",
    "websocketSendSchema": "summarizeEventSchema",
    "websocketReceiveType": "GetSummarizeResponse",
    "websocketReceiveSchema": "getSummarizeResponseSchema"
  }
};
