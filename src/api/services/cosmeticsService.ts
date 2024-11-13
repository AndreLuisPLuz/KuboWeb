import kuboApi from "../kuboApi";
import { CosmeticsList } from "../types/cosmetics/CosmeticResponses";
import { PaginationOptions } from "../types/shared/paginationOptions";

const fetchCosmeticsService = async(
        pagination: PaginationOptions,
        authToken: string
)       : Promise<CosmeticsList> => {
    const { page, size } = pagination;

    const response = await kuboApi.get<CosmeticsList>(
        `/kubo/cosmetic?page=${page}&size=${size}`,
        {
            headers: {
                Authorization: "Bearer " + authToken
            }
        }
    );

    return response.data;
};

export {
    fetchCosmeticsService,
};