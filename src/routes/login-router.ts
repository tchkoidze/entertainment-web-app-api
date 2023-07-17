import getLogin from "controllers/login-controller";
import express from "express";

const loginRouter = express.Router();
loginRouter.get("/login", getLogin);

export default loginRouter;
