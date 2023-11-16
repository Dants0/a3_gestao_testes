import User from "../../core/User";

export interface UserRepositoryInterface {
    insert(user: User): Promise<void>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(newEmail: string, currentEmail: string): Promise<void>;
}