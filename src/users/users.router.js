import { Router } from "express";
import UsersController from "../users/users.controller.js";

const usersController = new UsersController();
const usersRouter = Router();

usersRouter.get("/users", usersController.getAll);
usersRouter.get("/users/:id", usersController.getById);
usersRouter.post("/register", usersController.create);
usersRouter.put("/users/:id", usersController.update);
usersRouter.delete("/users/:id", usersController.delete);

export default usersRouter;