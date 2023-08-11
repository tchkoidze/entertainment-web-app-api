import express, { NextFunction } from "express";
import jwt from "jsonwebtoken";

const authanticateToken = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  console.log(req.headers);
  console.log("auth ", authorization);
  if (!authorization) {
    return res.status(403).send();
  } else {
    const [, token] = authorization.trim().split(" ");
    console.log(token);
    const verified = jwt.verify(token, process.env.JWT_SECRET || "");
    if (verified) {
      next();
    } else {
      res.status(403).send();
    }
  }
};

export default authanticateToken;
