import { PaginationInfo } from "../shared/paginationOptions";

type CosmeticsList = {
    id: string,
    name: string,
    type: "Hat" | "Eyes",
    imagePath: string,
} & PaginationInfo;

export type {
    CosmeticsList,
}