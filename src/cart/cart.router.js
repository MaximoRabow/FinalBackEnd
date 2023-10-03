import { Router } from "express";
import cartController from "../cart/cart.controller.js";

const cartRouter = Router();

cartRouter.post("/", cartController.createCart);
cartRouter.get("/:cid", cartController.getCart);

export default cartRouter;


