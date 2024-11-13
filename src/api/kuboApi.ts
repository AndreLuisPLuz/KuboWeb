import axios from "axios";

const kuboApi = axios.create({
    baseURL: "https://kuboback.onrender.com"
});

export default kuboApi;