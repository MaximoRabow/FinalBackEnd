import config from "../config/enviroment.config.js";
import ProductsRepository from "./products.repository.js";

const productsService = new ProductsRepository(config.mongoDB.productDAO);

export default productsService;