import { NextFunction, Request, Response } from "express";
import InvalidHeaderError from "../../application/errors/invalidHeaderError";
import JwtService from "../../application/crossCutting/jwtService";

const authenticate = async(req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;

    if (!authToken)
        throw new InvalidHeaderError("Authorization header not present.");

    JwtService.validateToken(authToken);
};

export default authenticate;