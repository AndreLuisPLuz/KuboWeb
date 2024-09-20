import ICommand from "../seed/command";
import { v4 as uuid } from "uuid";

type RegisterUserProps = {
    username: string;
    email: string;
    password: string;
};

class RegisterUser implements ICommand<RegisterUserProps>
{
    public commandId: string;
    public props: RegisterUserProps;

    public constructor(props: RegisterUserProps) {
        this.commandId = uuid();
        this.props = props;
    }
}

export default RegisterUser;