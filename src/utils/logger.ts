type LogLevel = 'info' | 'warn' | 'error';

class LoggerClass {
  private log(level: LogLevel, message: string, ...args: unknown[]): void {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
    switch (level) {
      case 'info':
        console.log(prefix, message, ...args);
        break;
      case 'warn':
        console.warn(prefix, message, ...args);
        break;
      case 'error':
        console.error(prefix, message, ...args);
        break;
    }
  }

  /** Log an informational message. */
  info(message: string, ...args: unknown[]): void {
    this.log('info', message, ...args);
  }

  /** Log a warning message. */
  warn(message: string, ...args: unknown[]): void {
    this.log('warn', message, ...args);
  }

  /** Log an error message. */
  error(message: string, ...args: unknown[]): void {
    this.log('error', message, ...args);
  }
}

/** Singleton logger instance for application-wide logging. */
export const Logger = new LoggerClass();
