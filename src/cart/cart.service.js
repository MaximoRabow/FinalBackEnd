import CartRepository from "./cart.repository.js";
import config from "../config/enviroment.config.js";

const cartService = new CartRepository(config.cartDAO);

export default cartService;