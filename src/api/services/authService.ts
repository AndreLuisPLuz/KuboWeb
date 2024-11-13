import kuboApi from "../kuboApi";
import { Auth } from "../types/auth/authRequests";
import { LoginResponse } from "../types/auth/authResponses";


const fetchAuthService = async(
    payload: Auth
)       : Promise<LoginResponse> => {

    const response = await kuboApi.post<LoginResponse>(
        `/auth`,
        payload
    );

    return response.data;
};

export {
    fetchAuthService,
};