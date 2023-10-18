import productsService from "./products.service.js";
import cartService from "../cart/cart.service.js";
import MailingService from "../mailing/mailing.service.js";

class ProductsController {
    constructor() {
        this.productsService = productsService;
        this.cartService = cartService;
        this.mailingService = MailingService;
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

    async addProductToCart(req, res) {
        const { productId } = req.params;
        const { quantity } = req.body;
        const cart = await this.cartService.getById(productId);
        if (!cart) {
            res.status(404).json({
                message: "Product not found"
            });
            return;
        }
        if (cart.stock < quantity) {
            res.status(400).json({
                message: "Not enough stock"
            });
            return;
        }
        cart.stock -= quantity;
        cart.cart.push({ productId, quantity });
        await cart.save();
        res.status(200).json(cart);
        await this.cartService.update(productId, cart);
        res.status(200).json(cart);
        const mailOption = {
            to: "XXXXXXXXXXXXXXXX",
            subject: "MENSAJE A DESARROLLAR",
            text: "Se ha realizado un nuevo pedido"
        
        };
        this.mailingService.sendMail(mailOption);
        res.send({status: "success",message: "Product added to cart", data: cart})
    }
}
const productsController = new ProductsController();
export default productsController;