import { FailedAuth } from "../../domain/aggregates/user/types/authenticationResult";

class FailedAuthenticationError extends Error {
    result: FailedAuth;

    constructor(message: string, fail: FailedAuth) {
        super(message);
        this.result = fail;
    }
}

export default FailedAuthenticationError;