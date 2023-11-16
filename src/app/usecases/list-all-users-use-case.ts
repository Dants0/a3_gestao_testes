import User from "../../core/User";
import { UserRepositoryInterface } from "../repositories/user-repository";

export default class ListAllUsersUseCase {
    constructor(private userRepository: UserRepositoryInterface){}

    async execute(): Promise<User[]> {
        const users = await this.userRepository.findAll();

        return users
    }
}