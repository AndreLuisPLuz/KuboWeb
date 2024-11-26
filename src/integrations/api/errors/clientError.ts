class ClientError extends Error {
    public constructor(message: string) {
        super(message);
    }
}

export default ClientError;