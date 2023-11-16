import User from "../src/core/User";
import { faker } from "@faker-js/faker";

describe("User", () => {
    let user: User;
    const email = faker.internet.email();
    const password = faker.internet.password();

    beforeEach(() => {
        user = User.create({email, password});
    });

    test("Should be able to create a user with correct given inputs", function () {
        const createdUser = User.create({email, password});

        expect(createdUser).toEqual(user);

    })

    test("Should be able to return a user email", function () {
        const userEmail = user.email;

        expect(userEmail).toBe(email);
    })
})