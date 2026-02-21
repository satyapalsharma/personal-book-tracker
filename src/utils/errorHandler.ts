import { Logger } from './logger';

/**
 * Handle an error by logging it with an optional context label.
 * @param error - The thrown value or Error object.
 * @param context - Optional string describing where the error occurred.
 */
export function handleError(error: unknown, context?: string): void {
  const message = error instanceof Error ? error.message : String(error);
  Logger.error(`Error${context ? ` in ${context}` : ''}: ${message}`);
  // In production, you might send to an error reporting service
}
