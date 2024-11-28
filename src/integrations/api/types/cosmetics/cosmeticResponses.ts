import { KuboApiPaginated } from "../shared/response";

type CosmeticDto = {
    id: string,
    name: string,
    type: "Hat" | "Eyes",
    imagePath: string,
};

type CosmeticPaginatedResponse = KuboApiPaginated<CosmeticDto>;

export type {
    CosmeticDto,
    CosmeticPaginatedResponse,
}