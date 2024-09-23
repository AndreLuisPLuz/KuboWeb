import { injected } from "brandi";
import { INFRA_TOKENS, infrastructureContainer } from "../../infrastructure/container";

import User from "../../domain/aggregates/user/user";
import IRepository from "../../domain/seed/repository";
import ICommandHandler from "../seed/commandHandler";

import RegisterUser from "../commands/registerUser";
import AuthenticateUser from "../commands/authenticateUser";

type UserCommand = AuthenticateUser | RegisterUser;

class UserCommandHandler
    implements
        ICommandHandler<string | null, RegisterUser>,
        ICommandHandler<string | null, AuthenticateUser> {
    private repo: IRepository<User>;

    constructor(repo: IRepository<User>) {
        this.repo = repo;
    }

    solveDependencies = (): void => {
        this.repo = infrastructureContainer.get(INFRA_TOKENS.userRepository);
    };

    handleAsync(command: RegisterUser): Promise<string | null>;
    handleAsync(command: AuthenticateUser): Promise<string | null>;

    public async handleAsync(command: UserCommand): Promise<string | null> {
        this.solveDependencies();

        switch (command.concreteType) {
            case "AuthenticateUser": return await this.handleAuthenticateUser(command);
            case "RegisterUser": return await this.handleRegisterUser(command);
        }
    }

    private async handleAuthenticateUser(command: AuthenticateUser): Promise<string | null> {
        throw new Error();
    }

    private async handleRegisterUser(command: RegisterUser): Promise<string | null> {
        const newUser = User.createNew(command.props);
        const savedUser = await this.repo.upsertAsync(newUser);

        return savedUser?._id || null;
    }
}

injected(UserCommandHandler, INFRA_TOKENS.userRepository);

export default UserCommandHandler;