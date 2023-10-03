import dotenv from "dotenv";

dotenv.config();

class ConfigManager {
    static #instance = null;
    constructor() {
        if (ConfigManager.#instance) {
            ConfigManager.#instance = this;
            this.PORT = process.env.PORT || 8080;
            this.MONGO_URI = process.env.MONGO_URI;
            this.JWT_SECRET = process.env.JWT_SECRET;
            this.JWT_EXPIRES = process.env.JWT_EXPIRES;
            this.JWT_COOKIE_EXPIRES = process.env.JWT_COOKIE_EXPIRES;
            this.PERSISTENCE = process.env.PERSISTENCE || "mongodb";
            this.userDAO = null;
            this.productDAO = null;
            this.initializePersistance();
        } else {
        return ConfigManager.#instance;
        }
    };
    async initializePersistance() {
        if (this.PERSISTENCE === "mongodb") {
            const { default: UserDAO } = await import("./user.dao.js");
            const { default: ProductDAO } = await import("./product.dao.js");
            this.userDAO = new UserDAO();
            this.productDAO = new ProductDAO();
        } else {
            await import("../users/users.file.dao.js").then(module =>{
                this.userDAO = new module.default();  
            }) 
            await import("../products/products.file.dao.js").then(module =>{
                this.productDAO = new module.default();
            })
        };
    
    }
}

const config = new ConfigManager();

export default config;