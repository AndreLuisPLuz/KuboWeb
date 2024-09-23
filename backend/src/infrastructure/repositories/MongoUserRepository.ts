import { IUser, UserModel } from "../schemas/user/userSchema";

import User from "../../domain/aggregates/user/user";
import BaseMongoRepository from "./BaseMongoRepository";
import { Document } from "mongoose";
import { UserConfigurationModel } from "../schemas/user/configurationSchema";

class MongoUserRepository extends BaseMongoRepository<IUser, User> {
    public constructor() {
        super(UserModel);
    }

    protected parse = (entity: User): IUser => {
        return {
            _id: entity._id,
            email: entity.email,
            password: entity.password,
            username: entity.username,
            configuration: (entity.configuration)
                ? new UserConfigurationModel().fromUserConfiguration(entity.configuration)
                : null,
        };
    };

    protected loadFromDocument = (document: Document<unknown, {}, IUser> & IUser & Required<{ _id: string; }>): User => {
        return User.load(
            document._id,
            {
                email: document.email,
                password: document.password,
                username: document.username,
                configuration: new UserConfigurationModel(document.configuration).toUserConfiguration(),
            }
        );
    }
}

export default MongoUserRepository;