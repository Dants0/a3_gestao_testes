import Entity from "./Entity";
import UserInterface from "./interfaces/user-interface";

type UserProps = {
  email: string;
  password: string;
}

export default class User extends Entity<UserProps> implements UserInterface {
  private constructor(props: UserProps, id?: string) {
    super(props, id);
  }

  static create(props: UserProps, id?: string) {
    const user = new User(props);

    user.validate();
    
    return user;
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  // public changeEmail(email: string): void {
  //   this.props.email = email;
  //   this.validate();
  // }

  public validate(): boolean {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this.props.email.length === 0) {
      throw new Error("Name is required");
    }
    if (this.props.password.length === 0) {
      throw new Error("Password is required");
    }
    return true;
  }
}