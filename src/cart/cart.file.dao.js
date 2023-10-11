import fs from "fs";
import { dirname } from "path";

const __dirname = dirname(new URL(import.meta.url).pathname);

export default class Cart {
    constructor() {
        console.log("fs")
    }
    getAll = async () => {
        try {
            const data = await fs.promises.readFile(__dirname + "/carts.json", "utf-8");
            return JSON.parse(data);
        } catch (error) {
            console.log(error);
        }
    
    };
    getById = async (id) => {
        try {
            const data = await fs.promises.readFile(__dirname + "/carts.json", "utf-8");
            const carts = JSON.parse(data);
            return carts.find(cart => cart.id === id);
        } catch (error) {
            console.log(error);
        }
    };
    create = async (cart) => {
        try {
            const data = await fs.promises.readFile(__dirname + "/carts.json", "utf-8");
            const carts = JSON.parse(data);
            cart.id = carts.length + 1;
            carts.push(cart);
            await fs.promises.writeFile(__dirname + "/carts.json", JSON.stringify(carts, null, 2));
            return cart;
        } catch (error) {
            console.log(error);
        }
    };
}