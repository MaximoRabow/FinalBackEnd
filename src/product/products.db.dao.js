import productsModel from "./produts.model.js";

class Products {
    constructor() {
        getAll = async () => {
            return await productsModel.find();
        };
        getById = async (id) => {
            return await productsModel.findById(id);
        };
        create = async (data) => {
            return await productsModel.create(data);
        };
        update = async (id, data) => {
            return await productsModel.findByIdAndUpdate(id, data);
        };
        dellete = async (id) => {
            return await productsModel.findByIdAndDelete(id);
        };
    }
} 

export default Products;