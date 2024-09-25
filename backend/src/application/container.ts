import { Container, token } from "brandi";
import { infrastructureContainer } from "../infrastructure/container";

import UserCommandHandler from "./handlers/userCommandHandler";
import UserQueryHandler from "./handlers/userQueryHandler";
import CosmeticCommandHandler from "./handlers/cosmeticCommandHandler";
import KuboCommandHandler from "./handlers/kuboCommandHandler";

const APP_TOKENS = {
    cosmeticCommandHandler: token<CosmeticCommandHandler>("cosmeticCommandHandler"),
    kuboCommandHandler: token<KuboCommandHandler>("kuboCommandHandler"),
    userCommandHandler: token<UserCommandHandler>("userCommandHandler"),
    userQueryHandler: token<UserQueryHandler>("userQueryHandler"),
};

const applicationContainer = new Container().extend(infrastructureContainer);

applicationContainer.bind(APP_TOKENS.cosmeticCommandHandler)
    .toInstance(CosmeticCommandHandler)
    .inSingletonScope();

applicationContainer.bind(APP_TOKENS.kuboCommandHandler)
    .toInstance(KuboCommandHandler)
    .inSingletonScope();

applicationContainer.bind(APP_TOKENS.userCommandHandler)
    .toInstance(UserCommandHandler)
    .inSingletonScope();

applicationContainer.bind(APP_TOKENS.userQueryHandler)
    .toInstance(UserQueryHandler)
    .inSingletonScope();

export { APP_TOKENS, applicationContainer };