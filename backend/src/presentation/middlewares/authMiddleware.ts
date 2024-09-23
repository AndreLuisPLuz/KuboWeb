import { NextFunction, Request, Response } from "express";

const authenticate = async(req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;

    if (!authToken)
        throw new AppError("Missing bearer token.", 401);

    const [_bearer, token] = authToken.split(" ");
};