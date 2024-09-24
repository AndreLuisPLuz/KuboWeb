import { INFRA_TOKENS, infrastructureContainer } from "../../infrastructure/container";
import { injected } from "brandi";
import { GetUserDetails, UserDetails } from "../queries/getUserDetails";

import User from "../../domain/aggregates/user/user";
import IRepository from "../../domain/seed/repository";
import IQueryHandler from "../seed/queryHandler";
import NotFoundError from "../errors/notFoundError";

class UserQueryHandler implements IQueryHandler<UserDetails, GetUserDetails> {
    private repo: IRepository<User>;

    constructor(repo: IRepository<User>) {
        this.repo = repo;
    }

    solveDependencies = (): void => {
        this.repo = infrastructureContainer.get(INFRA_TOKENS.userRepository);
    };

    handleAsync = async (query: GetUserDetails): Promise<UserDetails> => {
        const user = await this.repo.findByIdAsync(query.id);

        if (user == null)
            throw new NotFoundError("User not found.");

        return {
            username: user.username,
            email: user.email,
        };
    }
}

injected(UserQueryHandler, INFRA_TOKENS.userRepository);

export default UserQueryHandler;