//import { getAllmovies } from "../controllers/movie-controller.js";
import { getAllmovies } from "controllers";
import express from "express";

const movieRouter = express.Router();
movieRouter.get("/movies", getAllmovies);

export default movieRouter;
