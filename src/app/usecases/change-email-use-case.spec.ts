import { faker } from "@faker-js/faker";
import UserInMemoryRepository from "../../../tests/user-in-memory-repository";
import ChangeEmailUseCase from "./change-email-use-case";
import User from "../../core/User";

describe('Change email use case', () => {
    it('should be able to change user email', async() => {
        const userRepository = new UserInMemoryRepository();
        const sut = new ChangeEmailUseCase(userRepository);

        const newEmail = 'gruponovo@unifacs.com';
    
        const user = User.create({
            email:  'grupoantigo@unifacs.com',
            password: faker.internet.password(),
        })

        userRepository.users.push(user);

        console.log(user.email);

        await sut.execute({
            newEmail,
            currentEmail: user.email
        })

        expect(user.email).toBe(newEmail);
    })
})