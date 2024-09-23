import IQuery from "./query";

interface IQueryHandler<TFeedback, TQuery extends IQuery<any, TFeedback>> {
    handleAsync: (query: TQuery) => Promise<TFeedback | null>;
    solveDependencies: () => void;
}

export default IQueryHandler;