import cartModel from "../models/cart.model.js";

class Cart {
    constructor() {
        console.log("mongo cart dao")
    }
        getAll = async () => {
            const cart = await cartModel.find();
            return cartModel.find();
        };
        create = async (cart) => {
            const newCart = await cartModel.create(cart);
            return newCart;
        };
        update = async (id, cart) => {
            const updatedCart = await cartModel.findByIdAndUpdate(id, cart, {new: true});
            return updatedCart;
        };
        dellete = async (id) => {
            const deletedCart = await cartModel.findByIdAndDelete(id);
            return deletedCart;
        };
        
    
}

export default Cart;