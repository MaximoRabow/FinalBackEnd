
class ProductsRepository {
    constructor(model) {
        this.model = model;
    }

    async getAll() {
        return await this.model.find();
    }

    async getById(id) {
        return await this.model.findById(id);
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data);
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }
}

export default ProductsRepository;