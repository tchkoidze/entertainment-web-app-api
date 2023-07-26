//import { signUp } from "controllers";
import { userController } from "controllers";
import express from "express";

const signUpRouter = express.Router();
const { signUp, getUserLogin } = userController;

signUpRouter.post("/signup", signUp);
signUpRouter.post("/login", getUserLogin);

export default signUpRouter;
