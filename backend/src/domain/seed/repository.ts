import Entity from "./entity";

type Criteria<TType extends Object, TKey extends keyof TType = keyof TType> = {
    key: TKey;
    value: TType[TKey];
};

interface IRepository<TEntity extends Entity<any>> {
    existsAsync: (id: string) => Promise<boolean>;

    findByIdAsync: (id: string) => Promise<TEntity | null>;

    findManyByCriteriaAsync: (
            criteria: Criteria<TEntity>,
            offset: number | null,
            take: number | null
    ) => Promise<TEntity[]>;
    
    upsertAsync: (entity: TEntity) => Promise<TEntity | null>;
}

export default IRepository;