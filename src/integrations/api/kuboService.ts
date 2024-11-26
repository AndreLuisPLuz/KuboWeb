import { match } from "ts-pattern";
import { AuthPayload } from "./types/auth/authRequests";
import { AuthDto } from "./types/auth/authResponses";
import { PaginationOptions } from "./types/shared/paginationOptions";
import { CreateKuboPayload } from "./types/kubo/kuboRequests";
import { KuboApiPaginated, KuboApiResponse } from "./types/shared/response";
import { CosmeticDto } from "./types/cosmetics/cosmeticResponses";

import MissingTokenError from "./errors/missingTokenError";
import ServerError from "./errors/serverError";
import ClientError from "./errors/clientError";

class KuboService {
    private static service: KuboService | null = null;
    public static getInstance = () => this.service || new KuboService();

    private apiInstance: Axios.AxiosInstance;
    private isAuthenticated: boolean;

    private get authToken() {
        if (!this.isAuthenticated)
            throw new MissingTokenError("Missing authentication.");

        return "Bearer " + localStorage.getItem("@TOKEN") as string
    }

    public constructor() {
        const baseUrl = match(process.env.NODE_ENV)
            .with("development", () => "http://localhost:8080/api/v1")
            .with("production", () => "https://kuboback.onrender.com/api/v1")
            .otherwise(() => {
                console.log("[server/kubo-service]: cannot access environment configuration.");
                throw new Error("Killing execution.");
            });

        this.apiInstance = axios.create({ baseURL: baseUrl });
        this.isAuthenticated = (localStorage.getItem("@TOKEN") !== null);
    }

    public authenticate = async(payload: AuthPayload): Promise<boolean> => {
        const response = await this.apiInstance.post<AuthDto>(
            "/auth", payload
        );

        if (response.status == 200) {
            localStorage.setItem("@TOKEN", response.data.token);
            this.isAuthenticated = true;
        }
    
        return this.isAuthenticated;
    }

    public logout = () => {
        localStorage.removeItem("@TOKEN");
        this.isAuthenticated = false;
    };

    public fetchCosmetics = async(
            type: "Hat" | "Eyes",
            pagination: PaginationOptions
    )       : Promise<KuboApiPaginated<CosmeticDto>> => {
        const { page, size } = pagination;

        const response = await this.apiInstance.get<KuboApiPaginated<CosmeticDto>>(
            `/kubo/cosmetic?page=${page}&size=${size}&type=${type}`,
            { headers: { Authorization: this.authToken } }
        );

        this.throwIfErrorStatus(response);
    
        return response.data;
    };

    public createKubo = async(payload: CreateKuboPayload): Promise<boolean> => {
        const response = await this.apiInstance.post<KuboApiResponse<void>>(
            "/kubo", payload,
            { headers: { Authorization: this.authToken } }
        );

        this.throwIfErrorStatus(response);

        return (response.status == 201);
    };

    private throwIfErrorStatus = (
            response: Axios.AxiosXHR<KuboApiPaginated<any>> | Axios.AxiosXHR<KuboApiResponse<any>>
    )       : void => {
        if (response.status >= 500) 
            throw new ServerError(response.data.message);
        else if (response.status >= 400)
            throw new ClientError(response.data.message);
    }
}

export default KuboService;