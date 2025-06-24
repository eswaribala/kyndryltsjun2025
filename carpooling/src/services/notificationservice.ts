import { Notifier } from "../models/notifier"
import { faker } from "@faker-js/faker";
// NotificationService class to handle notifications
// This class uses the singleton Notifier instance to send notifications
let notification:Notifier=Notifier.getInstance();
notification.notify(`Notification Service Initialized: ${faker.lorem.sentence()}`);