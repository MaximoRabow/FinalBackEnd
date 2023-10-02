import fs from 'fs';

class Products {
    constructor() {
        this.path = 'products.json';
    }

    getAll = async () => {
        if (fs.existsSync(this.path)) {
            try {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                return JSON.parse(data);
            } catch (error) {
                return error;
            }
        } else {
            return [];
        }
    }

    getById = async (id) => {
        if (fs.existsSync(this.path)) {
            try {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const products = JSON.parse(data);
                const product = products.find(product => product.id === id);
                return product;
            } catch (error) {
                return error;
            }
        } else {
            return [];
        }
    }

    creats = async (product) => {
        if (fs.existsSync(this.path)) {
            try {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const products = JSON.parse(data);
                product.id = products.length + 1;
                products.push(product);
                await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
                return product;
            } catch (error) {
                return error;
            }
        } else {
            return [];
        }
    };
    update = async (id, product) => {
        if (fs.existsSync(this.path)) {
            try {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const products = JSON.parse(data);
                const index = products.findIndex(product => product.id === id);
                if (index !== -1) {
                    products[index] = product;
                    await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
                    return product;
                } else {
                    return null;
                }
            } catch (error) {
                return error;
            }
        } else {
            return [];
        }
    };
    dellete = async (id) => {
        if (fs.existsSync(this.path)) {
            try {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const products = JSON.parse(data);
                const index = products.findIndex(product => product.id === id);
                if (index !== -1) {
                    const product = products.splice(index, 1);
                    await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
                    return product;
                } else {
                    return null;
                }
            } catch (error) {
                return error;
            }
        } else {
            return [];
        }
    
    };

}   

export default Products;