interface Subscriber {
  update(data: string): void;
}

class NewsChannel implements Subscriber {
  constructor(private name: string) {}
  update(data: string) {
    console.log(`${this.name} received: ${data}`);
  }
}

class NewsAgency {
  private subscribers: Subscriber[] = [];

  subscribe(sub: Subscriber) {
    this.subscribers.push(sub);
  }

  notify(data: string) {
    for (const sub of this.subscribers) {
      sub.update(data);
    }
  }
}

// Usage
const agency = new NewsAgency();
agency.subscribe(new NewsChannel("CNN"));
agency.subscribe(new NewsChannel("BBC"));
agency.notify("Breaking news: Observer pattern in TypeScript!");
