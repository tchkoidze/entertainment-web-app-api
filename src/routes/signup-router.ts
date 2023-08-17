//import { signUp } from "controllers";
import { userController } from "controllers";
import express from "express";
import multer from "multer";
import { fileFilter, fileStorageAvatar } from "types/multers";

const signUpRouter = express.Router();
const { signUp, getUserLogin, emailVerification } = userController;

signUpRouter.post(
  "/signup",
  multer({ storage: fileStorageAvatar, fileFilter }).single("avatar"),
  signUp
);
signUpRouter.post("/login", getUserLogin);
signUpRouter.post("/verification", emailVerification);

export default signUpRouter;
