import ICommand from "./command";

interface ICommandHandler<TCommand extends ICommand<any>> {
    handleAsync(command: TCommand): Promise<void>;
}

export default ICommandHandler;