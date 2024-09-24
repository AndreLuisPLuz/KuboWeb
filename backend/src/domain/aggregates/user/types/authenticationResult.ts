type Succeeded = {
    kind: "succeeded";
    userId: string;
};

type Failed = {
    kind: "failed";
}

type AuthenticationResult =
    | Succeeded
    | Failed;

export default AuthenticationResult;