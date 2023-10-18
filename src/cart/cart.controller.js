import cartService from "./cart.service.js";


class CartController {
    constructor() {
        this.cartService = cartService;
    }

    async getAll(req, res) {
        try {
            const cart = await this.cartService.getAll(req.params.id);
            res.json(cart);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getById(req, res) {
        try {
            const cart = await this.cartService.getById(req.params.id);
            res.json(cart);
        } catch (error) {
            res.status(500).json({ message: error.message });
        };
    };

    async create(req, res) {
        try {
            const cart = await this.cartService.create(req.body);
            res.status(201).json(cart);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const cart = await this.cartService.update(req.params.id, req.body);
            res.json(cart);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const cart = await this.cartService.delete(req.params.id);
            res.json(cart);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    
    }

}

const cartController = new CartController();

export default cartController;
