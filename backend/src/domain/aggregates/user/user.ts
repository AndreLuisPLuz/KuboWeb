import "dotenv/config";
import Entity from "../../seed/entity";
import UserConfiguration from "./configuration";
import Password from "./password";
import AuthenticationResult from "./types/authenticationResult";

type UserProps = {
    username: string;
    email: string;
    password: Password;
    configuration?: UserConfiguration;
};

class User extends Entity<UserProps> {

    public get username() { return this.props.username };
    public get email() { return this.props.email };
    public get password() { return this.props.password.value };
    public get configuration() { return this.props.configuration };

    public set password(value: string) { this.props.password = Password.load({ password: value }) };

    private constructor (
            props: UserProps,
            id: string | null = null,
    ) {
        super(props, id);
    }

    public static createNew = (props: UserProps): User => {
        return new User(props);
    };

    public static load = (id: string, props: UserProps): User => {
        return new User(props, id);
    };

    public authenticateAgainst = (username: string, password: string): AuthenticationResult => {
        const usernameMatches = (this.username == username);
        const passwordMatches = (this.password == password);

        if (usernameMatches && passwordMatches)
            return { kind: "succeeded", userId: this._id };

        return { kind: "failed" };
    };
}

export default User;