import express from "express";
import __dirname from "./utils/dirname.js";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import passport from "passport";
import initializePassport from "./config/passport.config.js";

import config from "./config/enviroment.config.js";
import usersRouter from "./users/users.router.js";
import productsRouter from "./product/products.router.js";
import cartRouter from "./cart/cart.router.js";
import viewsRouter from "./templetes/views.router.js";

const app = express();
const PORT = process.env.PORT||8080;

if (config.PERSISTENCE === "mongodb") {
    mongoose.connect(config.MONGO_URI);
}

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine","handlebars");


app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

initializePassport();
app.use(passport.initialize());

app.use("/",viewsRouter);
app.use("/api/users",usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart",cartRouter);  

app.listen(PORT,()=>console.log(`Listening on ${PORT}`));
