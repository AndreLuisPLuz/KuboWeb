import { Request, Response } from "express";
import { injected } from "brandi";
import { APP_TOKENS } from "../../application/container";

import UserCommandHandler from "../../application/handlers/userCommandHandler";
import UserQueryHandler from "../../application/handlers/userQueryHandler";

import { GetUserDetails } from "../../application/queries/getUserDetails";
import RegisterUser from "../../application/commands/registerUser";

class AuthController {
    private userCommandHandler: UserCommandHandler;
    private userQueryHandler: UserQueryHandler;

    constructor(
            userCommandHandler: UserCommandHandler,
            userQueryHandler: UserQueryHandler
    ) {
        this.userCommandHandler = userCommandHandler;
        this.userQueryHandler = userQueryHandler;
    }

    registerUser = async ( req: Request, res: Response): Promise<Response> => {
        const userId = await this.userCommandHandler.handleAsync(
            new RegisterUser(req.body)
        );

        if (userId == null)
            return res.status(400).json();

        const userDetails = await this.userQueryHandler.handleAsync(
            new GetUserDetails({ id: userId })
        );

        return res.status(401).json(userDetails);
    };
}

injected(AuthController, APP_TOKENS.userCommandHandler, APP_TOKENS.userQueryHandler);

export default AuthController;