import { NextFunction, Request, Response } from "express";
import FailedAuthenticationError from "../../application/errors/failedAuthenticationError";
import NotFoundError from "../../application/errors/notFoundError";
import UpsertError from "../../application/errors/upsertError";

const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    switch (true) {
        case (err instanceof FailedAuthenticationError): res.status(400).json(err.result);
        case (err instanceof NotFoundError): res.status(404).json({ message: err.message });
        case (err instanceof UpsertError): res.status(400).json({ message: err.message });
    }
};

export default handleError;