import "dotenv/config";

import express from "express";
import cors from "cors";
import authRouter from "./routers/authRouter";

const app = express();
app.use(express.json());

if (process.env.NODE_ENV == "development") {
    app.use(cors({ origin: "*" }));
    console.log("[server]: using cors");
}

app.use("/api/v1/auth", authRouter);

export default app;