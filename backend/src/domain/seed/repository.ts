import Entity from "./entity";

type Criterion<TType, TKey extends keyof TType = keyof TType> = {
    key: TKey;
    value: TType[TKey];
};

type PaginationOptions = {
    offset: number;
    take: number;
};

type PaginationInfo = {
    items: number;
    currentPage?: number;
    totalPages?: number;
};

interface IRepository<TEntity extends Entity<any>> {
    existsAsync: (id: string) => Promise<boolean>;

    findByIdAsync: (id: string) => Promise<TEntity | null>;

    findManyByCriteriaAsync<TInterface> (
            criteria: Criterion<TInterface>[],
            pagination?: PaginationOptions,
    ): Promise<{ data: TEntity[] } & PaginationInfo>;
    
    upsertAsync: (entity: TEntity) => Promise<TEntity | null>;
}

export type { Criterion, PaginationOptions, PaginationInfo };
export default IRepository;