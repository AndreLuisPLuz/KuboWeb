import "dotenv/config";

import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

if (process.env.NODE_ENV == "development") {
    app.use(cors({ origin: "*" }));
    console.log("[server]: using cors");
}

export default app;