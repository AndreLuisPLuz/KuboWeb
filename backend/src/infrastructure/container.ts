import { Container, token } from "brandi";
import IRepository from "../domain/seed/repository";
import Kubo from "../domain/aggregates/kubo/kubo";
import User from "../domain/aggregates/user/user";
import Language from "../domain/aggregates/translation/language";
import MongoKuboRepository from "./repositories/MongoKuboRepository";

const INFRA_TOKENS = {
    kuboRepository: token<IRepository<Kubo>>("kuboRepository"),
    userRepository: token<IRepository<User>>("userRepository"),
    translationRepository: token<IRepository<Language>>("translationRepository"),
};

const infrastructureContainer = new Container();

export { INFRA_TOKENS, infrastructureContainer };