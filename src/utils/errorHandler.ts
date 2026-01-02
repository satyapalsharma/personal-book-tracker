import { Logger } from './logger';

export function handleError(error: unknown, context?: string): void {
  const message = error instanceof Error ? error.message : String(error);
  Logger.error(`Error${context ? ` in ${context}` : ''}: ${message}`);
  // In production, you might send to an error reporting service
}
