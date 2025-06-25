// Our app's logging interface
interface AppLogger {
  log(message: string): void;
}

// Third-party logger with a different interface
class ExternalLogger {
  writeToConsole(msg: string) {
    console.log("External:", msg);
  }
}

// Adapter
class LoggerAdapter implements AppLogger {
  constructor(private externalLogger: ExternalLogger) {}

  log(message: string): void {
    this.externalLogger.writeToConsole(message);
  }
}

// Usage
const logger: AppLogger = new LoggerAdapter(new ExternalLogger());
logger.log("App started");
