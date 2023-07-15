import http from "http";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToMongo from "./config/mongo.js";
import { movieRouter } from "routes";
import { swaggerMiddleware } from "middlewares";
//import movieRouter from "./routes/movie-router.js";

const app = express();
dotenv.config();
connectToMongo();
app.use(cors());
app.use("/movie", express.static("public"));

app.use(bodyParser.json());

app.use("/api", cors(), movieRouter);
app.use("/", ...swaggerMiddleware);

const server = http.createServer(app);

server.listen(3000);
