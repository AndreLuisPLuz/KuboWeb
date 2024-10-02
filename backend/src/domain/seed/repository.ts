import Entity from "./entity";

type Criterion<TType, TKey extends keyof TType = keyof TType> = {
    key: TKey;
    value: TType[TKey];
};

type PaginationOptions = {
    offset: number,
    take: number,
};

interface IRepository<TEntity extends Entity<any>> {
    existsAsync: (id: string) => Promise<boolean>;

    findByIdAsync: (id: string) => Promise<TEntity | null>;

    findManyByCriteriaAsync<TInterface> (
            criteria: Criterion<TInterface>[],
            pagination?: PaginationOptions,
    ): Promise<TEntity[]>;
    
    upsertAsync: (entity: TEntity) => Promise<TEntity | null>;
}

export type { Criterion, PaginationOptions };
export default IRepository;