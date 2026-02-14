/**
 * Global error handlers for uncaught exceptions and unhandled promise rejections.
 * These are registered at the application entry point.
 */

import { Logger } from './utils/logger';

/**
 * Register global error handlers.
 * Call this function at the very top of the application entry point.
 */
export function registerGlobalErrorHandlers(): void {
  // Uncaught exceptions
  window.addEventListener('error', (event: ErrorEvent) => {
    Logger.error('Uncaught exception', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      error: event.error,
    });

    // Prevent default browser error handling if needed
    // event.preventDefault();
  });

  // Unhandled promise rejections
  window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
    Logger.error('Unhandled promise rejection', {
      reason: event.reason,
      promise: event.promise,
    });

    // Prevent default handling
    event.preventDefault();
  });
}
