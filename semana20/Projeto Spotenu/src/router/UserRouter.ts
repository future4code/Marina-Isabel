import express from "express";
import { UserController } from "../controller/UserController";
import { BandController } from "../controller/bandController";


//linha responsável por criar um módulo de rotas no express
export const userRouter = express.Router();
const userController = new UserController();
const bandController = new BandController();

userRouter.post("/signup", userController.signup);
userRouter.post("/signup-admin", userController.signupAdmin)
userRouter.post("/login", userController.login);

userRouter.post("/signup-band", bandController.signup)
