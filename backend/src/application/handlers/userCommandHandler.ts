import { injected } from "brandi";
import { INFRA_TOKENS, infrastructureContainer } from "../../infrastructure/container";

import User from "../../domain/aggregates/user/user";
import IRepository from "../../domain/seed/repository";
import ICommandHandler from "../seed/commandHandler";

import RegisterUser from "../commands/registerUser";
import AuthenticateUser from "../commands/authenticateUser";
import UpsertError from "../errors/upsertError";
import Password from "../../domain/aggregates/user/password";

type UserCommand =
    | AuthenticateUser
    | RegisterUser;

class UserCommandHandler
    implements
        ICommandHandler<string, RegisterUser>,
        ICommandHandler<string, AuthenticateUser> {
    private repo: IRepository<User>;

    constructor(repo: IRepository<User>) {
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
        throw new Error();
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