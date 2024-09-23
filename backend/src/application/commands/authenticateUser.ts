import { Type } from "typescript";
import ICommand from "../seed/command";
import { v4 as uuid } from "uuid";

type AuthenticateUserProps = {
    username: string;
    password: string;
};

class AuthenticateUser implements ICommand<AuthenticateUserProps> {
    commandId: string;
    props: AuthenticateUserProps;
    concreteType: "AuthenticateUser" = "AuthenticateUser";

    public constructor(props: AuthenticateUserProps) {
        this.commandId = uuid();
        this.props = props;
    }
}

export default AuthenticateUser;