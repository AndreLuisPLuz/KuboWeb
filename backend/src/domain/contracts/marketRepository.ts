import FoodOption from "../aggregates/market/foodOption";
import IRepository from "../seed/repository";

interface IMarketRepository extends IRepository<FoodOption> { }

export default IMarketRepository;