interface ThemeButton {
  render(): void;
}

class DarkButton implements ThemeButton {
  render() {
    console.log("Rendering dark-themed button");
  }
}

class LightButton implements ThemeButton {
  render() {
    console.log("Rendering light-themed button");
  }
}

interface ThemeFactory {
  createButton(): ThemeButton;
}

class DarkThemeFactory implements ThemeFactory {
  createButton(): ThemeButton {
    return new DarkButton();
  }
}

class LightThemeFactory implements ThemeFactory {
  createButton(): ThemeButton {
    return new LightButton();
  }
}

// Dynamic selection:
function renderUI(theme: "dark" | "light") {
  const factory: ThemeFactory = theme === "dark" ? new DarkThemeFactory() : new LightThemeFactory();
  const button = factory.createButton();
  button.render();
}

renderUI("dark"); // "Rendering dark-themed button"
