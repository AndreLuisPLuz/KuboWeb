import "dotenv/config";

import { injected } from "brandi";
import { INFRA_TOKENS, infrastructureContainer } from "../../infrastructure/container";

import jsonwebtoken from "jsonwebtoken";
import User from "../../domain/aggregates/user/user";
import ICommandHandler from "../seed/commandHandler";
import RegisterUser from "../commands/registerUser";
import AuthenticateUser from "../commands/authenticateUser";
import UpsertError from "../errors/upsertError";
import Password from "../../domain/aggregates/user/password";
import IUserRepository from "../../domain/aggregates/user/contracts/userRepository";
import NotFoundError from "../errors/notFoundError";
import FailedAuthenticationError from "../errors/failedAuthenticationError";

type UserCommand =
    | AuthenticateUser
    | RegisterUser;

class UserCommandHandler
    implements
        ICommandHandler<string, RegisterUser>,
        ICommandHandler<string, AuthenticateUser> {
    private repo: IUserRepository;

    constructor(repo: IUserRepository) {
        this.repo = repo;
    }

    solveDependencies = (): void => {
        this.repo = infrastructureContainer.get(INFRA_TOKENS.userRepository);
    };

    handleAsync(command: RegisterUser): Promise<string>;
    handleAsync(command: AuthenticateUser): Promise<string>;

    public async handleAsync(command: UserCommand): Promise<string> {
        this.solveDependencies();

        switch (command.concreteType) {
            case "AuthenticateUser": return await this.handleAuthenticateUser(command);
            case "RegisterUser": return await this.handleRegisterUser(command);
        }
    }

    private async handleAuthenticateUser(command: AuthenticateUser): Promise<string> {
        const user = await this.repo.findByUsernameAsync(command.username);

        if (user == null)
            throw new NotFoundError("User corresponding to email not found.");

        const authenticationResult = user.authenticateAgainst(
            command.username,
            command.password
        );

        if (authenticationResult.kind == "failed")
            throw new FailedAuthenticationError("Unable to authenticate.", authenticationResult);

        const secret = process.env.APP_SECRET_KEY;
        const token = jsonwebtoken.sign(
            { userId: authenticationResult.userId },
            secret!,
            { expiresIn: '1 day' }
        );

        return token;
    }

    private async handleRegisterUser(command: RegisterUser): Promise<string> {
        const newUser = User.createNew({
            username: command.username,
            email: command.email,
            password: Password.createNew({ password: command.password }),
        });

        const savedUser = await this.repo.upsertAsync(newUser);

        if (savedUser == null)
            throw new UpsertError("Unuble to create user.");

        return savedUser._id;
    }
}

injected(UserCommandHandler, INFRA_TOKENS.userRepository);

export default UserCommandHandler;