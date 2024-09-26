import { injected } from "brandi";
import Cosmetic from "../../domain/aggregates/cosmetic/cosmetic";
import IRepository from "../../domain/seed/repository";
import { CosmeticDetails, GetCosmeticDetails } from "../queries/getCosmeticDetails";
import IQueryHandler from "../seed/queryHandler";
import { INFRA_TOKENS, infrastructureContainer } from "../../infrastructure/container";
import NotFoundError from "../errors/notFoundError";

class CosmeticQueryHandler implements IQueryHandler<CosmeticDetails, GetCosmeticDetails> {
    private repo: IRepository<Cosmetic>;

    constructor(repository: IRepository<Cosmetic>) {
        this.repo = repository;
    }

    solveDependencies = (): void => {
        this.repo = infrastructureContainer.get(INFRA_TOKENS.cosmeticRepository);
    };

    handleAsync = async (query: GetCosmeticDetails): Promise<CosmeticDetails> => {
        this.solveDependencies();

        const cosmetic = await this.repo.findByIdAsync(query.id);

        if (cosmetic == null)
            throw new NotFoundError("Cosmetic not found.");
    
        return {
            id: cosmetic._id,
            name: cosmetic.name,
            imagePath: cosmetic.imagePath,
            type: cosmetic.type.type
        };
    };
}

injected(CosmeticQueryHandler, INFRA_TOKENS.cosmeticRepository);

export default CosmeticQueryHandler;