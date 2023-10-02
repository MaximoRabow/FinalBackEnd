import mongoose from "mongoose";

const productsCollection = "products";

const productsSchema = new mongoose.Schema({
    products: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    ObjectId: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const productsModel = mongoose.model(productsCollection, productsSchema);

export default productsModel;