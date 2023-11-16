import User from "../../core/User";
import { UserRepositoryInterface } from "../repositories/user-repository";
import { CreateUserDtoInput, CreateUserDtoOutput } from "./create-user-dto";

export default class CreateUserUsecase {
    constructor(private userRepository: UserRepositoryInterface){}

    async execute({email, password}: CreateUserDtoInput): Promise<CreateUserDtoOutput> {
        const existingUser = await this.userRepository.findById(email);

        if(existingUser) {
            throw new Error('User already exists')
        }

        const user = User.create({email, password});
        await this.userRepository.insert(user);
        
        return user
    }
}