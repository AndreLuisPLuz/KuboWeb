import { HydratedDocument, Model, Query } from "mongoose";
import IRepository, { Criterion, PaginationOptions } from "../../domain/seed/repository";
import Entity from "../../domain/seed/entity";
import { number } from "ts-pattern/dist/patterns";

abstract class BaseMongoRepository<TInterface, TEntity extends Entity<any>>
        implements IRepository<TEntity> {
    protected model: Model<TInterface>;

    constructor(model: Model<TInterface>) {
        this.model = model;
    }
    
    existsAsync = async (id: string): Promise<boolean> => {
        const document = await this.model.exists({ _id: id });
        return (document != null);
    };
    
    findByIdAsync = async (id: string): Promise<any> => {
        const document = await this.model.findById(id).exec();
        
        if (document == null)
            return null;
        
        const entity = this.loadFromDocument(document);
        return entity;
    };

    async findManyByCriteriaAsync<TInterface>(
            criteria: Criterion<TInterface, keyof TInterface>[],
            pagination?: PaginationOptions
    )       : Promise<TEntity[]> {
        const filter: Record<string, any> = {};

        criteria.forEach(c => {
            filter[c.key as string] = c.value;
        });

        let query = this.model.find(filter);

        if (pagination)
            query = query.skip(pagination.offset).limit(pagination.take);

        const documents = await query.exec();
        const entities = documents.map(d => this.loadFromDocument(d));

        return entities;
    };

    upsertAsync = async (entity: TEntity): Promise<any> => {
        const entityExists = (await this.model.exists({ _id: entity._id }) != null);

        const document = entityExists
            ? await this.model.findOneAndUpdate({ _id: entity._id }, entity).exec()
            : await this.model.create(this.parse(entity));
        
        if (document == null)
            return null;

        const savedEntity = this.loadFromDocument(document);
        return savedEntity;
    };

    protected abstract parse: (entity: TEntity) => TInterface;

    protected abstract loadFromDocument: (document: HydratedDocument<TInterface>) => TEntity;
}

export default BaseMongoRepository;