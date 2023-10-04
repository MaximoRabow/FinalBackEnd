import { Router } from "express";
import usersController from "../users/users.controller.js";

const usersRouter = Router();

usersRouter.get("/users", usersController.getAll);
usersRouter.get("/users/:id", usersController.getById);
usersRouter.post("/register", usersController.create);
usersRouter.put("/users/:id", usersController.update);

export default usersRouter;