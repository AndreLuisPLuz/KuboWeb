import { Criterion } from "../../../domain/seed/repository";

class CriteriaBuilder<TEntity> {
    private criteria: Criterion<TEntity>[];

    constructor() {
        this.criteria = [];
    }

    tryAdd = (
            key: keyof TEntity,
            value: TEntity[keyof TEntity] | undefined
    ):      CriteriaBuilder<TEntity> => {
        if (value) {
            this.criteria.push({
                key: key,
                value: value
            })
        }

        return this;
    }

    build = (): Criterion<TEntity>[] => {
        return this.criteria;
    }
}

export default CriteriaBuilder;