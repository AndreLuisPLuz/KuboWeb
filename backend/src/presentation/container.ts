import { Container, token } from "brandi";
import AuthController from "./controllers/authController";
import { applicationContainer } from "../application/container";

const PRES_TOKENS = {
    authController: token<AuthController>("authController"),
};

const presentationContainer = new Container().extend(applicationContainer);

presentationContainer.bind(PRES_TOKENS.authController)
    .toInstance(AuthController)
    .inResolutionScope();

export { PRES_TOKENS, presentationContainer };