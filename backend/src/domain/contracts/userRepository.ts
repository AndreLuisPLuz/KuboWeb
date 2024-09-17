import IRepository from "../seed/repository";
import User from "../aggregates/user/user";

interface IUserRepository extends IRepository<User> { }

export default IUserRepository;