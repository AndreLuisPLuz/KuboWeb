import { createContext, ReactNode, useState } from "react";
import { KuboDto } from "../../integrations/api/types/kubo/kuboResponses";

type User = {
    userId: string;
    kubo?: KuboDto;
    storeUser: (user: Omit<User, "storeUser" | "storeKubo">) => void;
    storeKubo: (kubo: KuboDto) => void;
};

const UserContext = createContext<User>({} as User);

type UserProviderProps = {
    children: ReactNode | ReactNode[];
};

const UserProvider = (props: UserProviderProps): ReactNode => {
    const [userId, setUserId] = useState<string>("");
    const [kubo, setKubo] = useState<KuboDto | undefined>(undefined);

    const storeUser = (user: Omit<User, "storeUser" | "storeKubo">) => {
        setUserId(user.userId);
    };

    const storeKubo = (kubo: KuboDto) => {
        setKubo(kubo);
    }

    return (
        <UserContext.Provider value={{ userId, kubo, storeUser, storeKubo }}>
            { props.children }
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };