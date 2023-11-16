import { faker } from "@faker-js/faker";
import UserInMemoryRepository from "../../../tests/user-in-memory-repository";
import ListAllUsersUseCase from "./list-all-users-use-case";
import User from "../../core/User";

describe('List all user use case', () => {
    it('should be able to list all users', async() => {
        const userRepository = new UserInMemoryRepository();
        const sut = new ListAllUsersUseCase(userRepository);

        const user1 = User.create({
            email: faker.internet.email(),
            password: faker.internet.password()
        })

        const user2 = User.create({
            email: faker.internet.email(),
            password: faker.internet.password()
        })

        userRepository.insert(user1);
        userRepository.insert(user2);

        const response = await Promise.all(
            await sut.execute()
        ) 

        expect(response).toBeTruthy();
    })

})