import fs from 'fs';
import __dirname from '../utils/dirname.js';

const productsFilePath = __dirname + '/files/products.json';
export default class Products {
    constructor(){
        console.log("fs")
    }
        getAll = async () => {
            if (fs.existsSync(productsFilePath)) {
                try {
                    const data = await fs.promises.readFile(productsFilePath, 'utf-8');
                    return JSON.parse(data);
                } catch (error) {
                    return error;
                }
            }
        };
        getById = async (id) => {
            try {
                const data = await fs.promises.readFile(productsFilePath, 'utf-8');
                const products = JSON.parse(data);
                return products.find(product => product.id === id);
            } catch (error) {
                return error;
            }
        }
        create = async (product) => {
            try {
                const products = await this.getAll();
                if (products.length > 0) {
                    product.id = products[products.length - 1].id + 1;
                    users.push(product);
                    await fs.promises.writeFile(productsFilePath, JSON.stringify(users, null, 2));
                } else {
                    products.id = products [products.length - 1].id + 1;
                    products.push(product);
                    await fs.promises.writeFile(productsFilePath, JSON.stringify(users, null, 2));
                    return product;
                }
            
            } catch (error) {
                return error;
            }
        }
        update = async (id, product) => {
            try {
                const products = await this.getAll();
                const index = products.findIndex(product => product.id === id);
                if (index !== -1) {
                    products[index] = product;
                    await fs.promises.writeFile(productsFilePath, JSON.stringify(products, null, 2));
                    return product;
                } else {
                    return null;
                }
            } catch (error) {
                return error;
            }
        }
        delete = async (id) => {
         
        }
    
    
}
