import { Router } from "express";
import productsController from "../product/products.controller.js";

const productsRouter = Router();

productsRouter.get("/products", productsController.getAll);
productsRouter.get("/products/:id", productsController.getById);
productsRouter.post("/products", productsController.create);
productsRouter.put("/products/:id", productsController.update);
productsRouter.delete("/products/:id", productsController.delete);

export default productsRouter;