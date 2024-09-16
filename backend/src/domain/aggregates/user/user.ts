import "dotenv/config";
import bcrypt from "bcryptjs";
import Entity from "../../seed/entity";

class User extends Entity {
    public username: string;
    public email: string;
    public password: string;
    public macAddress: string | null;

    private constructor (
            username: string,
            email: string,
            password: string,
            id: string | null = null
    ) {
        super(id);

        this.username = username;
        this.email = email;
        this.password = password;
        this.macAddress = null;
    }

    public static createNew = (
        username: string,
        email: string,
        password: string
    ): User => {
        const hashedPassword = User.hashPassword(password);

        const newUser = new User(
            username,
            email,
            hashedPassword
        );

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