import { Container, token } from "brandi";
import { infrastructureContainer } from "../infrastructure/container";

import UserCommandHandler from "./handlers/userCommandHandler";
import UserQueryHandler from "./handlers/userQueryHandler";

const APP_TOKENS = {
    userCommandHandler: token<UserCommandHandler>("userCommandHandler"),
    userQueryHandler: token<UserQueryHandler>("userQueryHandler"),
};

const applicationContainer = new Container().extend(infrastructureContainer);

applicationContainer.bind(APP_TOKENS.userCommandHandler)
    .toInstance(UserCommandHandler)
    .inSingletonScope();

applicationContainer.bind(APP_TOKENS.userQueryHandler)
    .toInstance(UserQueryHandler)
    .inSingletonScope();

export { APP_TOKENS, applicationContainer };