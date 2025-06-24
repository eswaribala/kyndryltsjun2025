export function login(username: string, password: string): boolean {
    // Simple validation logic
    if (username === "admin" && password === "password123") {
        return true;
    }
    return false;
}