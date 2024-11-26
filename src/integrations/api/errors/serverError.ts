class ServerError extends Error {
    public constructor(message: string) {
        super(message);
    }
}

export default ServerError;