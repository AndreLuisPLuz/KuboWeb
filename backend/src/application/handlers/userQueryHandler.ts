import User from "../../domain/aggregates/user/user";
import IRepository from "../../domain/seed/repository";
import IQueryHandler from "../seed/queryHandler";

import { INFRA_TOKENS } from "../../infrastructure/container";
import { injected } from "brandi";
import { GetUserDetails, UserDetails } from "../queries/getUserDetails";

class UserQueryHandler implements IQueryHandler<UserDetails, GetUserDetails> {
    private repo: IRepository<User>;

    constructor(repo: IRepository<User>) {
        this.repo = repo;
    }

    handleAsync = async (query: GetUserDetails): Promise<UserDetails | null> => {
        const user = await this.repo.findByIdAsync(query.id);
        return user;
    }
}

injected(UserQueryHandler, INFRA_TOKENS.userRepository);

export default UserQueryHandler;