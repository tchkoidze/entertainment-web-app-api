import { signUp } from "controllers";
import express from "express";

const signUpRouter = express.Router();
signUpRouter.put("/signup", signUp);

export default signUpRouter;
