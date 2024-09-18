import { HydratedDocument, Model } from "mongoose";
import IRepository from "../../domain/seed/repository";
import Entity from "../../domain/seed/entity";

abstract class BaseMongoRepository<TInterface, TEntity extends Entity<any>>
        implements IRepository<TEntity> {
    private model: Model<TInterface>;

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

    upsertAsync = async (entity: any): Promise<any> => {
        const entityExists = (await this.model.exists({ _id: entity._id }) != null);

        const document = entityExists
            ? await this.model.findOneAndUpdate({ _id: entity._id }, entity).exec()
            : await this.model.create(entity);
        
        if (document == null)
            return null;

        const savedEntity = this.loadFromDocument(document);
        return savedEntity;
    };

    abstract loadFromDocument: (document: HydratedDocument<TInterface>) => TEntity;
}

export default BaseMongoRepository;