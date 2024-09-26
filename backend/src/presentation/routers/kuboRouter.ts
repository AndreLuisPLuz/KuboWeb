import { Router } from "express";
import { PRES_TOKENS, presentationContainer } from "../container";
import authenticate from "../middlewares/authMiddleware";

const kuboController = presentationContainer.get(PRES_TOKENS.kuboController);

const kuboRouter = Router();
kuboRouter.post("/cosmetic", kuboController.CreateCosmeticOption);
kuboRouter.use(authenticate);

export default kuboRouter;