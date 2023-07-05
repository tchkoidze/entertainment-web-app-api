import express from "express";
import { Movie } from "models";
//import Movie from "models";
//import Movie from "../models/Movie.js";

const getAllmovies = async (req: express.Request, res: express.Response) => {
  const data = await Movie.find();
  return res.json(data);
};

export default getAllmovies;
