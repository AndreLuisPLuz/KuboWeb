import { KuboApiResponse } from "../shared/response";

type AuthDto = {
    token: string,
};

type AuthResponse = KuboApiResponse<AuthDto>;

export type {
    AuthDto,
    AuthResponse,
};