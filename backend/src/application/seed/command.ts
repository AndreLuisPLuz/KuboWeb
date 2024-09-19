interface ICommand<TFeedBack> {
    commandId: string;
    result: TFeedBack;
}

export default ICommand;