import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";

const app = express();
const PORT = process.env.PORT||8080;


app.engine("handlebars", handlebars.engine());
app.set("views","/views");
app.set("view engine","handlebars");


app.use(express.static("public"));
app.use(express.json);
app.use(express.urlencoded({extended: true}));

app.use('/index', (req, res) => {
    res.send('index');
});

app.listen(PORT,()=>console.log(`Listening on ${PORT}`));
