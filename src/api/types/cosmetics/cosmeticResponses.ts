import { PaginationInfo } from "../shared/paginationOptions";

type Cosmetic = {
    id: string,
    name: string,
    type: "Hat" | "Eyes",
    imagePath: string,
};

type CosmeticsList = {
    cosmetics: Cosmetic[]
} & PaginationInfo;

export type {
    Cosmetic,
    CosmeticsList,
}