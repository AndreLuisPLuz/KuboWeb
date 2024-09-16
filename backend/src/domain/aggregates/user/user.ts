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

    public createNew = (
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

    };
}

export default User;