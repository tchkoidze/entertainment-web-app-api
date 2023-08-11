//import { getAllmovies } from "../controllers/movie-controller.js";
import { getAllmovies } from "controllers";
import express from "express";
import { authanticateToken } from "middlewares";

const movieRouter = express.Router();
movieRouter.get("/movies", authanticateToken, getAllmovies);

export default movieRouter;
