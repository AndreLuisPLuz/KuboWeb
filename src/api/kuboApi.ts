import axios from "axios";
import { match } from "ts-pattern";

const baseUrl = match(process.env.NODE_ENV)
    .with("development", () => "http://localhost:8080/api/v1")
    .with("production", () => "https://kuboback.onrender.com/api/v1")
    .otherwise(() => {
        console.log("[server]: cannot access environment configuration.");
        throw new Error("Killing execution");
    });

const kuboApi = axios.create({
    baseURL: baseUrl
});

export default kuboApi;