import Kubo from "../../domain/aggregates/kubo/kubo";
import Nickname from "../../domain/aggregates/kubo/nickname";
import IUserRepository from "../../domain/aggregates/user/contracts/userRepository";
import IRepository from "../../domain/seed/repository";
import { INFRA_TOKENS, infrastructureContainer } from "../../infrastructure/container";
import CreateKubo from "../commands/createKubo";
import NotFoundError from "../errors/notFoundError";
import ICommandHandler from "../seed/commandHandler";

type KuboCommand =
    | CreateKubo;

class KuboCommandHandler implements ICommandHandler<string, CreateKubo> {
    private repo: IRepository<Kubo>;
    private userRepo: IUserRepository;

    constructor(
            repository: IRepository<Kubo>,
            userRepository: IUserRepository
    ) {
        this.repo = repository;
        this.userRepo = userRepository;
    }

    solveDependencies = (): void => {
        this.repo = infrastructureContainer.get(INFRA_TOKENS.kuboRepository);
        this.userRepo = infrastructureContainer.get(INFRA_TOKENS.userRepository);
    };

    async handleAsync(command: CreateKubo): Promise<string>;

    public async handleAsync(command: KuboCommand): Promise<string> {
        this.solveDependencies();

        switch(command.concreteType) {
            case "CreateKubo": return await this.handleCreateKubo(command);
        }
    }

    private async handleCreateKubo(command: CreateKubo): Promise<string> {
        const user = this.userRepo.findByIdAsync(command.userId);

        if (user == null)
            throw new NotFoundError("User not found.");

        const newKubo = Kubo.createNew({
            userId: command.userId,
            nickname: Nickname.createNew({ value: command.nickname }),
            color: command.color,
        });
    }
}

export default KuboCommandHandler;