import productsService from "./products.service.js";

class ProductsController {
    constructor() {
        this.productsService = productsService;
    }

    async create(req, res) {
        try {
            const product = await this.productsService.createProduct(req.body);

            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getAll(req, res) {
        try {
            const products = await this.productsService.getAllProducts();

            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getById(req, res) {
        try {
            const product = await this.productsService.getProductById(req.params.id);

            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const product = await this.productsService.updateProduct(req.params.id, req.body);

            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    
    }

    async delete(req, res) {
        try {
            const product = await this.productsService.deleteProduct(req.params.id);

            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    
    };
}

const productsController = new ProductsController();
export default productsController;