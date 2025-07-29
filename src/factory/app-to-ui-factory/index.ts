/**
 * App-to-UI Factory Validators Index
 * Comprehensive collection of all factory validators for schema validation
 */

// Filesystem Service Factory Validators
export * from './filesystem-factory-validator';

// Agent Message Factory Validators
export * from './agent-factory-validator';

// Task Service Factory Validators
export * from './task-service-factory-validator';

// Core Message Factory Validators
export * from './core-message-factory-validator';

// Browser Service Factory Validators
export * from './browser-service-factory-validator';

// Individual Service Factory Main Functions (to avoid naming conflicts)
export { createMcpToolMessageFactory } from './mcptoolmessage-factory-validator';
export { createTerminalServiceFactory } from './terminalservice-factory-validator';
export { createGitServiceFactory } from './gitservice-factory-validator';
export { createCodebaseSearchFactory } from './codebasesearch-factory-validator';
export { createStateMessageFactory } from './statemessage-factory-validator';
export { createResponseMessageFactory } from './responsemessage-factory-validator';
export { createNotificationMessageFactory } from './notificationmessage-factory-validator';
export { createDebugServiceFactory } from './debugservice-factory-validator';
export { createMemoryServiceFactory } from './memoryservice-factory-validator';
export { createCrawlerServiceFactory } from './crawlerservice-factory-validator';
export { createCodeUtilsFactory } from './codeutils-factory-validator';
export { createChatHistoryFactory } from './chathistory-factory-validator';
export { createProjectServiceFactory } from './projectservice-factory-validator';
export { createProblemMatcherFactory } from './problemmatcher-factory-validator';
export { createJsTreeParserFactory } from './jstreeparser-factory-validator';
export { createMcpServiceFactory } from './mcpservice-factory-validator';
export { createMessageServiceFactory } from './messageservice-factory-validator';
export { createAppServiceFactory } from './appservice-factory-validator';

export { createStateServiceFactory } from './stateservice-factory-validator';
export { createTokenizerServiceFactory } from './tokenizerservice-factory-validator';
export { createVectordbServiceFactory } from './vectordbservice-factory-validator';

/**
 * Universal Factory Validator
 * Automatically determines the correct factory validator based on message structure
 */
import { createAgentFactory } from './agent-factory-validator';
import { createTaskServiceFactory } from './task-service-factory-validator';
import { createCoreFactory } from './core-message-factory-validator';
import { createBrowserServiceFactory } from './browser-service-factory-validator';
import { 
    createFileReadConfirmationFactory,
    createFileWriteConfirmationFactory,
    createFolderReadConfirmationFactory,
    createSearchConfirmationFactory
} from './filesystem-factory-validator';
import { createMcpToolMessageFactory } from './mcptoolmessage-factory-validator';
import { createTerminalServiceFactory } from './terminalservice-factory-validator';
import { createGitServiceFactory } from './gitservice-factory-validator';
import { createCodebaseSearchFactory } from './codebasesearch-factory-validator';
import { createStateMessageFactory } from './statemessage-factory-validator';
import { createResponseMessageFactory } from './responsemessage-factory-validator';
import { createNotificationMessageFactory } from './notificationmessage-factory-validator';
import { createDebugServiceFactory } from './debugservice-factory-validator';
import { createMemoryServiceFactory } from './memoryservice-factory-validator';
import { createCrawlerServiceFactory } from './crawlerservice-factory-validator';
import { createCodeUtilsFactory } from './codeutils-factory-validator';
import { createChatHistoryFactory } from './chathistory-factory-validator';
import { createProjectServiceFactory } from './projectservice-factory-validator';
import { createProblemMatcherFactory } from './problemmatcher-factory-validator';
import { createJsTreeParserFactory } from './jstreeparser-factory-validator';
import { createMcpServiceFactory } from './mcpservice-factory-validator';
import { createMessageServiceFactory } from './messageservice-factory-validator';
import { createAppServiceFactory } from './appservice-factory-validator';

import { createStateServiceFactory } from './stateservice-factory-validator';
import { createTokenizerServiceFactory } from './tokenizerservice-factory-validator';
import { createVectordbServiceFactory } from './vectordbservice-factory-validator';
import logger from '../../utils/logger';

/**
 * Universal message validator that tries all available factories
 */
export const createUniversalFactory = (message: any): any | null => {
    if (!message || typeof message !== 'object') {
        logger.error('Invalid message format: message must be an object');
        return null;
    }

    // List of all available factory validators
    const universalValidators = [
        // Core message validators
        createCoreFactory,
        
        // Service-specific validators
        createAgentFactory,
        createTaskServiceFactory,
        createBrowserServiceFactory,
        createMcpToolMessageFactory,
        createTerminalServiceFactory,
        createGitServiceFactory,
        createCodebaseSearchFactory,
        createStateMessageFactory,
        createResponseMessageFactory,
        createNotificationMessageFactory,
        createDebugServiceFactory,
        createMemoryServiceFactory,
        createCrawlerServiceFactory,
        createCodeUtilsFactory,
        createChatHistoryFactory,
        createProjectServiceFactory,
        createProblemMatcherFactory,
        createJsTreeParserFactory,
        createMcpServiceFactory,
        createMessageServiceFactory,
        createAppServiceFactory,
        createStateServiceFactory,
        createTokenizerServiceFactory,
        createVectordbServiceFactory,
        
        // File system validators
        createFileReadConfirmationFactory,
        createFileWriteConfirmationFactory,
        createFolderReadConfirmationFactory,
        createSearchConfirmationFactory,
    ];

    // Try each validator until one succeeds
    for (const validator of universalValidators) {
        try {
            const result = validator(message);
            if (result) {
                logger.info(`Message validated successfully with ${validator.name}`);
                return result;
            }
        } catch (error) {
            // Continue to next validator
            continue;
        }
    }

    // If no validator succeeds, log the failure
    logger.error(`No suitable factory validator found for message: ${JSON.stringify(message)}`);
    return null;
};

/**
 * Validation utility functions
 */
export const validateMessage = (message: any, expectedSchema?: string): boolean => {
    const result = createUniversalFactory(message);
    return result !== null;
};

export const getValidationErrors = (message: any): string[] => {
    const errors: string[] = [];
    
    if (!message || typeof message !== 'object') {
        errors.push('Message must be an object');
        return errors;
    }

    // Try validation and collect errors
    try {
        const result = createUniversalFactory(message);
        if (!result) {
            errors.push('Message does not match any known schema');
        }
    } catch (error) {
        errors.push(`Validation error: ${error.message}`);
    }

    return errors;
}; 