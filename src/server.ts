import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToMongo from "./config/mongo.js";
import { movieRouter, signUpRouter } from "routes";
import { swaggerMiddleware } from "middlewares";

//import movieRouter from "./routes/movie-router.js";

const app = express();
dotenv.config();
connectToMongo();
app.use(cors());
app.use("/movie", express.static("public"));
app.use("/avatar", express.static("public/avatar"));

app.use(bodyParser.json());
console.log(123);
app.use("/api", cors(), movieRouter);
//app.use("/api", loginRouter);

app.use("/api", cors(), signUpRouter);

app.use("/", ...swaggerMiddleware);

app.listen(process.env.PORT || 3000);
