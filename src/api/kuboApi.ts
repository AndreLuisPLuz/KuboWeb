import axios from "axios";

const kuboApi = axios.create({
    baseURL: "https://kuboback.onrender.com/api/v1"
});

export default kuboApi;