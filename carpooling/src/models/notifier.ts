export class Notifier{
    // Singleton instance
    private static instance: Notifier;
    
    private constructor() {}
    
    // Factory method to get the singleton instance
    public static getInstance(): Notifier {
        if (!Notifier.instance) {
        Notifier.instance = new Notifier();
        }
        return Notifier.instance;
    }
    
    public notify(message: string): void {
        console.log(`Notification: ${message}`);
    }
}