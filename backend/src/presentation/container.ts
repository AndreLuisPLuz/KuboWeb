import { Container, token } from "brandi";
import { applicationContainer } from "../application/container";

import AuthController from "./controllers/authController";

const PRES_TOKENS = {
    authController: token<AuthController>("authController"),
};

const presentationContainer = new Container().extend(applicationContainer);

presentationContainer.bind(PRES_TOKENS.authController)
    .toInstance(AuthController)
    .inResolutionScope();

export { PRES_TOKENS, presentationContainer };