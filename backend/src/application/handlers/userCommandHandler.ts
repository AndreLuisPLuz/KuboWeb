import { injected } from "brandi";
import { INFRA_TOKENS } from "../../infrastructure/container";

import User from "../../domain/aggregates/user/user";
import IRepository from "../../domain/seed/repository";
import ICommandHandler from "../seed/commandHandler";

import RegisterUser from "../commands/registerUser";

class UserCommandHandler implements ICommandHandler<string | null, RegisterUser> {
    private repo: IRepository<User>;

    constructor(repo: IRepository<User>) {
        this.repo = repo;
    }

    handleAsync = async (command: RegisterUser): Promise<string | null> => {
        const newUser = User.createNew(command.props);
        const savedUser = await this.repo.upsertAsync(newUser);

        return savedUser?._id ?? null;
    }
}

injected(UserCommandHandler, INFRA_TOKENS.userRepository);

export default UserCommandHandler;