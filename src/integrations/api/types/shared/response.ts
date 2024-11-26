import { PaginationInfo } from "./paginationOptions";

type KuboApiResponse<TData> = {
    data: TData;
    message: string;
};

type KuboApiPaginated<TData> = {
    data: TData[];
    message: string;
} & PaginationInfo;

export type { KuboApiResponse, KuboApiPaginated };