import { createContext, ReactNode, useState } from "react";

type User = {
    userId: string;
    storeUser: (user: Omit<User, "storeUser">) => void;
};

const UserContext = createContext<User>({} as User);

type UserProviderProps = {
    children: ReactNode | ReactNode[];
};

const UserProvider = (props: UserProviderProps): ReactNode => {
    const [userId, setUserId] = useState<string>("");

    const storeUser = (user: Omit<User, "storeUser">) => {
        setUserId(user.userId);
    };

    return (
        <UserContext.Provider value={{ userId, storeUser }}>
            { props.children }
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };