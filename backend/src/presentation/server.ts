import "dotenv/config";
import app from "./app";
import getMongoSource from "../infrastructure/sources/mongoSource";

getMongoSource();
const port = parseInt(process.env.APP_PORT || "8080");
app.listen(port, () => console.log(`[server]: listening on http://localhost:${port}`));