import { IUser, UserModel } from "../schemas/user/userSchema";

import User from "../../domain/aggregates/user/user";
import BaseMongoRepository from "./BaseMongoRepository";
import { Document } from "mongoose";

class MongoUserRepository extends BaseMongoRepository<IUser, User> {
    public constructor() {
        super(UserModel);
    }

    protected loadFromDocument = (document: Document<unknown, {}, IUser> & IUser & Required<{ _id: string; }>): User => {
        return User.load({
            email: document.email,
            password: document.password,
            username: document.username
        });
    }
}

export default MongoUserRepository;