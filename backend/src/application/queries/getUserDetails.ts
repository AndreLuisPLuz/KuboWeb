import IQuery from "../seed/query";
import { v4 as uuid } from "uuid";

type GetUserDetailsProps = {
    id: string;
};

type UserDetails = {
    username: string;
    email: string;
};

class GetUserDetails implements IQuery<GetUserDetailsProps, UserDetails> {
    queryId: string;
    props: GetUserDetailsProps;

    get id() { return this.props.id };

    public constructor(props: GetUserDetailsProps) {
        this.queryId = uuid();
        this.props = props;
    }
}

export { GetUserDetails, UserDetails };