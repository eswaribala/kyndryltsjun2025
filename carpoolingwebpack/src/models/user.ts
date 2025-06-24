export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  static fromJSON(json: any): User {
    return new User(
      json.id,
      json.name,
      json.email,
      new Date(json.createdAt),
      new Date(json.updatedAt)
    );
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString()
    };
  }
}