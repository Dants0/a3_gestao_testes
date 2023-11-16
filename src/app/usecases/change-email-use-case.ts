import { UserRepositoryInterface } from "../repositories/user-repository";
import { changeEmailInput } from "./create-user-dto";

export default class ChangeEmailUseCase {
    constructor(private userRepository: UserRepositoryInterface){}

    async execute({ currentEmail, newEmail }: changeEmailInput): Promise<void> {
        const user = await this.userRepository.findByEmail(currentEmail);

        console.log(user);

        await this.userRepository.update(newEmail, currentEmail);
    }
}