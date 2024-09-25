import { Router } from "express";
import { PRES_TOKENS, presentationContainer } from "../container";

const kuboController = presentationContainer.get(PRES_TOKENS.kuboController);

const kuboRouter = Router();
kuboRouter.post("/cosmetic", kuboController.CreateCosmeticOption);

export default kuboRouter;