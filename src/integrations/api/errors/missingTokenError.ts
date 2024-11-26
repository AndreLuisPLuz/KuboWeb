class MissingTokenError extends Error {
    constructor(message: string) {
        super(message);
    }
};

export default MissingTokenError;