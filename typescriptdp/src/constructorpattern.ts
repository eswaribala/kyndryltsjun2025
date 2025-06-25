class User {
  constructor(
    public username: string,
    public email: string,
    public role: string = "viewer"
  ) {}
}

// Used after a form is submitted:
const newUser = new User("alice", "alice@example.com");
console.log(newUser); // { username: 'alice', email: 'alice@example.com', role: 'viewer' }