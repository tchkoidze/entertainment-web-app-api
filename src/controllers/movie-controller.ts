import express from "express";
import { Movie } from "models";
//import Movie from "models";
//import Movie from "../models/Movie.js";

const getAllmovies = async (req: express.Request, res: express.Response) => {
  const data = await Movie.find();
  console.log(545);
  return res.status(200).json(data);
};

export default getAllmovies;
