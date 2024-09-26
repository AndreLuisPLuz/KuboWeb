import { injected } from "brandi";
import CosmeticCommandHandler from "../../application/handlers/cosmeticCommandHandler";
import KuboCommandHandler from "../../application/handlers/kuboCommandHandler";
import { APP_TOKENS } from "../../application/container";
import { Request, Response } from "express";
import CreateCosmetic from "../../application/commands/createCosmetic";

class KuboController {
    private kuboCommHandler: KuboCommandHandler;
    private cosmeticCommHandler: CosmeticCommandHandler;

    public constructor(
            kuboCommandHandler: KuboCommandHandler,
            cosmeticCommandHandler: CosmeticCommandHandler
    ) {
        this.kuboCommHandler = kuboCommandHandler;
        this.cosmeticCommHandler = cosmeticCommandHandler;
    }

    public CreateCosmeticOption = async (req: Request, res: Response): Promise<Response> => {
        console.log("Cheguei no controller.");

        const cosmeticId = await this.cosmeticCommHandler.handleAsync(
            new CreateCosmetic(req.body)
        );

        console.log("Sou burro não consigo retorarn");

        return res.status(201).json({ id: cosmeticId });
    };
}

injected(
    KuboController,
    APP_TOKENS.kuboCommandHandler, 
    APP_TOKENS.cosmeticCommandHandler
);

export default KuboController;