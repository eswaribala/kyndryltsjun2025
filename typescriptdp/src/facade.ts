class AuthService {
  login(user: string) {
    console.log(`Logged in as ${user}`);
  }
}

class NotificationService {
  sendEmail(message: string) {
    console.log(`Email sent: ${message}`);
  }
}

class OrderService {
  placeOrder() {
    console.log("Order placed");
  }
}

// Facade
class ShopFacade {
  constructor(
    private auth = new AuthService(),
    private notify = new NotificationService(),
    private order = new OrderService()
  ) {}

  completeOrder(user: string) {
    this.auth.login(user);
    this.order.placeOrder();
    this.notify.sendEmail("Your order has been placed!");
  }
}

// Usage
const shop = new ShopFacade();
shop.completeOrder("Alice");
