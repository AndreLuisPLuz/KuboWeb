import ICommand from "./command";

interface ICommandHandler<TFeedBack, TCommand extends ICommand<any>> {
    handleAsync: (command: TCommand) => Promise<TFeedBack>;
}

export default ICommandHandler;