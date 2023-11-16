import { faker } from "@faker-js/faker";
import UserInMemoryRepository from "../../../tests/user-in-memory-repository";
import CreateUserUsecase from "./create-user";

describe('Create user use case', () => {
    it('should be able to create a new user', async() => {
        const userRepository = new UserInMemoryRepository();
        const sut = new CreateUserUsecase(userRepository);

        const response = await sut.execute({
            email: faker.internet.email(),
            password: faker.internet.password()
        })

        expect(response).toBeTruthy();
    })

})