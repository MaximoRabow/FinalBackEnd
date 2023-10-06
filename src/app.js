import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";

import config from "./config/enviroment.config.js";
import usersRouter from "./users/users.router.js";
import productsRouter from "./product/products.router.js";
import cartRouter from "./cart/cart.router.js";
import viewsRouter from "./shaw/views.router.js";

const app = express();
const PORT = process.env.PORT||8080;

if (config.PERSISTENCE === "mongodb") {
    mongoose.connect(config.MONGO_URI);
}

app.engine("handlebars", handlebars.engine());
app.set("views","/views");
app.set("view engine","handlebars");


app.use(express.static("public"));
app.use(express.json);
app.use(express.urlencoded({extended: true}));

app.use("/",viewsRouter);
app.use("/api/users",usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart",cartRouter);  

app.listen(PORT,()=>console.log(`Listening on ${PORT}`));
