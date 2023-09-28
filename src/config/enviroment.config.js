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
}

export default ConfigManager;
