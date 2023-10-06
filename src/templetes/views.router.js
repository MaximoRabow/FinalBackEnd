import { Router } from "express";
import home from "./views.controller.js"   

const viewsRouter = Router();

viewsRouter.get("/", home);
viewsRouter.get("/login", ); 


export default viewsRouter;

