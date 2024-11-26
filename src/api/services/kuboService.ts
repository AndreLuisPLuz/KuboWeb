import kuboApi from "../kuboApi";
import { CreateKuboPayload } from "../types/kubo/kuboRequests";

const CreateKuboService = async (
        authToken: string,
        payload: CreateKuboPayload
) => {
    const response = await kuboApi.post<void>(
        "/kubo", payload,
        { headers: { Authorization: "Bearer " + authToken } }
    );

    if (response.status != 201)
        throw new Error("Could not create kubo."); // TODO: proper error type
};

export { CreateKuboService };