import config from "../config/enviroment.config.js";
import UserRepository from "./users.repository.js";


const userService = new UserRepository(config.userDAO);

export default userService;