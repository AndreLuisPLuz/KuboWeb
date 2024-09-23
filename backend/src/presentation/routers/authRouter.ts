import { Router } from "express";
import { PRES_TOKENS, presentationContainer } from "../container";

const authController = presentationContainer.get(PRES_TOKENS.authController);

const authRouter = Router();
authRouter.post("", authController.registerUser);

export default authRouter;