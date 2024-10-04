import { injected } from "brandi";
import Kubo from "../../domain/aggregates/kubo/kubo";
import IRepository from "../../domain/seed/repository";
import GetKuboDetails, { KuboDetails } from "../queries/getKuboDetails";
import IQueryHandler from "../seed/queryHandler";
import { INFRA_TOKENS, infrastructureContainer } from "../../infrastructure/container";
import CriteriaBuilder from "../crossCutting/builders/criteriaBuilder";
import { IKubo } from "../../infrastructure/schemas/kubo/kuboSchema";
import NotFoundError from "../errors/notFoundError";
import Cosmetic from "../../domain/aggregates/cosmetic/cosmetic";

class KuboQueryHandler implements IQueryHandler<KuboDetails, GetKuboDetails> {
    private repo: IRepository<Kubo>;
    private cosmeticRepo: IRepository<Cosmetic>;

    constructor(
            repository: IRepository<Kubo>,
            cosmeticRepository: IRepository<Cosmetic>,
    ) {
        this.repo = repository;
        this.cosmeticRepo = cosmeticRepository;
    }

    solveDependencies = (): void => {
        this.repo = infrastructureContainer.get(INFRA_TOKENS.kuboRepository);
    }

    async handleAsync(query: GetKuboDetails): Promise<KuboDetails> {
        const kubo = await this.repo.findOneAsync(new CriteriaBuilder<IKubo>()
            .tryAdd("userId", query.userId)
            .build()
        );

        if (kubo == null)
            throw new NotFoundError("Kubo not found.");

        const eyes = await this.cosmeticRepo.findAsync(kubo.eyesId);
        const hat = await this.cosmeticRepo.findAsync(kubo.hatId);

        if (eyes == null || hat == null)
            throw new NotFoundError("Cosmetics not found.");

        return {
            id: kubo._id,
            nickname: kubo.nickname.value,
            color: kubo.color,
            health: kubo.health.level,
            hunger: kubo.hunger.level,
            happiness: kubo.happiness.level,
            hat: {
                id: kubo.hatId,
                name: hat.name,
                imagePath: hat.name,
                type: hat.type.type,
            },
            eyes: {
                id: kubo.eyesId,
                name: eyes.name,
                imagePath: eyes.name,
                type: eyes.type.type,
            },
        }
    }
}

injected(
    KuboQueryHandler,
    INFRA_TOKENS.kuboRepository,
    INFRA_TOKENS.cosmeticRepository,
)

export default KuboQueryHandler;