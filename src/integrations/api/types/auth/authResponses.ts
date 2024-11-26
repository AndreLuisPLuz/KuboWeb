import { KuboApiResponse } from "../shared/response";

interface LoginResponse extends KuboApiResponse {
    token: string,
};

export type {
    LoginResponse,
};