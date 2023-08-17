//import { signUp } from "controllers";
import { userController } from "controllers";
import express from "express";
import multer from "multer";

const signUpRouter = express.Router();
const { signUp, getUserLogin, emailVerification } = userController;

signUpRouter.post("/signup", signUp);
signUpRouter.post("/login", getUserLogin);
signUpRouter.post("/verification", emailVerification);

export default signUpRouter;
