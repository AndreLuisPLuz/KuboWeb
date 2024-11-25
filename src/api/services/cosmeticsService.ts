import kuboApi from "../kuboApi";
import { CosmeticsList } from "../types/cosmetics/cosmeticResponses";
import { PaginationOptions } from "../types/shared/paginationOptions";

const fetchCosmeticsService = async(
        type: "Hat" | "Eyes",
        pagination: PaginationOptions,
        authToken: string
)       : Promise<CosmeticsList> => {
    const { page, size } = pagination;

    const response = await kuboApi.get<CosmeticsList>(
        `/kubo/cosmetic?page=${page}&size=${size}&type=${type}`,
        { headers: { Authorization: "Bearer " + authToken } }
    );

    return response.data;
};

export {
    fetchCosmeticsService,
};