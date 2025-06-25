interface DataService {
  fetch(): string;
}

class RealDataService implements DataService {
  fetch(): string {
    return "Data from DB";
  }
}

class LoggingDecorator implements DataService {
  constructor(private wrapped: DataService) {}

  fetch(): string {
    console.log("Logging: Fetch called");
    return this.wrapped.fetch();
  }
}

// Usage
const service = new LoggingDecorator(new RealDataService());
console.log(service.fetch());
