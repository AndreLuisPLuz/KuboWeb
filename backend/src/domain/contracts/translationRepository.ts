import Language from "../aggregates/translation/language";
import IRepository from "../seed/repository";

interface ITranslationRepository extends IRepository<Language> { }

export default ITranslationRepository;