import { PaginationInfo } from "../shared/paginationOptions";
import { KuboApiResponse } from "../shared/response";

interface Cosmetic extends KuboApiResponse {
    id: string,
    name: string,
    type: "Hat" | "Eyes",
    imagePath: string,
};

interface CosmeticsList extends KuboApiResponse, PaginationInfo {
    cosmetics: Omit<Cosmetic, "message">[]
};

export type {
    Cosmetic,
    CosmeticsList,
}