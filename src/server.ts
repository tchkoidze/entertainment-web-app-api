import http from "http";
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./config/mongo.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3333);
