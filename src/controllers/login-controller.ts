import express from "express";
import { Login } from "models";

const getLogin = async (req: express.Request, res: express.Response) => {
  const data = await Login.find();
  return res.json(data);
};

export default getLogin;
