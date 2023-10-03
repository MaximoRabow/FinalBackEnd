
class CartRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return await this.model.create(data);
    }

    async getAll() {
        return await this.model.find();
    };
    async getById(id) {
        return await this.model.findById(id);
    };
    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    };
    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    };
}

export default CartRepository;