import Entity from "./entity";

type Criteria<TType extends Object, TKey extends keyof TType = keyof TType> = {
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

    findManyByCriteriaAsync: (
            criteria: Criteria<TEntity>[],
            pagination: PaginationOptions | null,
    ) => Promise<TEntity[]>;
    
    upsertAsync: (entity: TEntity) => Promise<TEntity | null>;
}

export type { Criteria, PaginationOptions };
export default IRepository;