import "dotenv/config";
import bcrypt from "bcryptjs";
import Entity from "../../seed/entity";
import UserConfiguration from "./configuration";

type UserProps = {
    username: string;
    email: string;
    password: string;
};

class User extends Entity<UserProps> {
    public configuration: UserConfiguration | null = null;

    public get username() { return this.props.username };
    public get email() { return this.props.email };
    public get password() { return this.props.password };

    private constructor (
            props: UserProps,
            id: string | null = null,
    ) {
        super(props, id);
    }

    public static createNew = (props: UserProps): User => {
        props.password = User.hashPassword(props.password);
        const newUser = new User(props);

        return newUser;
    };

    private static hashPassword = (rawPassword: string): string => {
        const numSaltRounds = process.env.NODE_ENV == "development" ? 1 : 32;
        const salt = bcrypt.genSaltSync(numSaltRounds);

        const hash = bcrypt.hashSync(rawPassword, salt);

        return hash;
    };
}

export default User;