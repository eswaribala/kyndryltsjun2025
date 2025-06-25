interface Command {
  execute(): void;
}

class Light {
  turnOn() {
    console.log("Light turned on");
  }

  turnOff() {
    console.log("Light turned off");
  }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}
  execute() {
    this.light.turnOn();
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}
  execute() {
    this.light.turnOff();
  }
}

class RemoteControl {
  private commands: Command[] = [];

  press(command: Command) {
    this.commands.push(command);
    command.execute();
  }
}

// Usage
const light = new Light();
const remote = new RemoteControl();
remote.press(new LightOnCommand(light));
remote.press(new LightOffCommand(light));
