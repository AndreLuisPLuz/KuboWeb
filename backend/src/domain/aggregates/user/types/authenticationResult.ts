type SucceededAuth = {
    kind: "succeeded";
    userId: string;
};

type FailedAuth = {
    kind: "failed";
    reasons: ("username" | "password")[];
}

type AuthenticationResult =
    | SucceededAuth
    | FailedAuth;

export {
    SucceededAuth,
    FailedAuth,
    AuthenticationResult
};