import { HydratedDocument, Model, Query } from "mongoose";
import IRepository, { Criterion, PaginationInfo, PaginationOptions } from "../../domain/seed/repository";
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
    )       : Promise<{ data: TEntity[] } & PaginationInfo> {
        const filter: Record<string, any> = {};

        criteria.forEach(c => {
            filter[c.key as string] = c.value;
        });

        let query = this.model.find(filter);
        let paginationInfo: PaginationInfo = { items: 0 };

        if (pagination)
            paginationInfo = await this.applyPagination(query, filter, pagination);

        const documents = await query.exec();
        const entities = documents.map(d => this.loadFromDocument(d));

        return {
            data: entities,
            ...paginationInfo
        };
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

    private async applyPagination(query: any, filter: Record<string, any>, pagination: PaginationOptions): Promise<PaginationInfo> {
        const totalItems = await this.model.countDocuments(filter).exec();
    
        const totalPages = Math.ceil(totalItems / pagination.take);
        const currentPage = Math.floor(pagination.offset / pagination.take) + 1;
    
        query.skip(pagination.offset).limit(pagination.take);
    
        return {
            currentPage,
            totalPages,
            items: totalItems,
        };
    }
}

export default BaseMongoRepository;