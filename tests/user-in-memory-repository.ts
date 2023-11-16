import { UserRepositoryInterface } from "../src/app/repositories/user-repository";
import User from "../src/core/User";

export default class UserInMemoryRepository implements UserRepositoryInterface {
  public users: User[] = [];

  async insert(user: User): Promise<void> {
    this.users.push(user);
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findById(email: string): Promise<User | null> {
      const user = this.users.find(user => user.email === email);

      if(!user) {
        return null;
      }

      return user;
  }

  async findByEmail(email: string) {
    const user = this.users.find((user) => user.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async update(newEmail: string, currentEmail: string): Promise<void> {
    const user = this.users.find(user => user.email === currentEmail);

    if (user) {
      user.props.email = newEmail;
    }
  }
}