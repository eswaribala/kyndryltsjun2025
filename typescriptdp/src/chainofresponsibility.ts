abstract class Handler {
  protected next?: Handler;

  setNext(handler: Handler): Handler {
    this.next = handler;
    return handler;
  }

  handle(request: string): void {
    if (this.next) this.next.handle(request);
  }
}

class AuthHandler extends Handler {
  handle(request: string) {
    if (request === "auth") {
      console.log("Handled by AuthHandler");
    } else {
      super.handle(request);
    }
  }
}

class LogHandler extends Handler {
  handle(request: string) {
    if (request === "log") {
      console.log("Handled by LogHandler");
    } else {
      super.handle(request);
    }
  }
}

// Usage
const auth = new AuthHandler();
const log = new LogHandler();

auth.setNext(log);

auth.handle("log"); // Handled by LogHandler
auth.handle("auth"); // Handled by AuthHandler
