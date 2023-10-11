import { Router } from "express";
import home from "./views.controller.js"   

const viewsRouter = Router();

viewsRouter.get("/", home);



export default viewsRouter;

