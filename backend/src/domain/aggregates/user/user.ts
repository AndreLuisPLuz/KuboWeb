import "dotenv/config";
import Entity from "../../seed/entity";
import UserConfiguration from "./configuration";
import Password from "./password";

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
}

export default User;