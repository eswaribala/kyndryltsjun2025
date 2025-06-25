interface UIComponent {
  render(indent?: string): void;
}

class Button implements UIComponent {
  constructor(private name: string) {}
  render(indent: string = ""): void {
    console.log(`${indent}Button: ${this.name}`);
  }
}

class Panel implements UIComponent {
  private children: UIComponent[] = [];

  constructor(private name: string) {}

  add(component: UIComponent) {
    this.children.push(component);
  }

  render(indent: string = ""): void {
    console.log(`${indent}Panel: ${this.name}`);
    this.children.forEach(child => child.render(indent + "  "));
  }
}

// Usage
const mainPanel = new Panel("Main");
mainPanel.add(new Button("Submit"));
mainPanel.add(new Button("Cancel"));

const subPanel = new Panel("Options");
subPanel.add(new Button("Dark Mode"));
subPanel.add(new Button("Notifications"));

mainPanel.add(subPanel);

mainPanel.render();
