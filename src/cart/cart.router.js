import { Router } from "express";
import cartController from "../cart/cart.controller.js";

const cartRouter = Router();

cartRouter.post("/", cartController.create);
cartRouter.get("/:cid", cartController.getById);

export default cartRouter;


