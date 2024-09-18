import Language from "../../domain/aggregates/translation/language";
import ITranslationRepository from "../../domain/contracts/translationRepository";

import { ILanguage, LanguageModel } from "../schemas/translation/languageSchema";
import { HydratedDocument } from "mongoose";

class MongoTranslationRepository implements ITranslationRepository {
    existsAsync = async(id: string): Promise<boolean> => {
        const document = await LanguageModel.exists({ _id: id });
        return (document != null);
    }

    findByIdAsync = async(id: string): Promise<Language | null> => {
        const document = await LanguageModel.findById(id).exec();

        if (document == null)
            return null;

        const language = this.loadFromDocument(document);
        return language;
    }

    upsertAsync = async(entity: Language): Promise<Language | null> => {
        const entityExists = (await LanguageModel.exists({ _id: entity._id }) != null);

        const document = entityExists
            ? await LanguageModel.findOneAndUpdate({ _id: entity._id }, entity).exec()
            : await LanguageModel.create(entity);
        
        if (document == null)
            return null;

        const language = this.loadFromDocument(document);
        return language;
    }

    private loadFromDocument(document: HydratedDocument<ILanguage>): Language {
        return Language.load(
            { name: document.name },
            document._id
        );
    };
}

export default MongoTranslationRepository;