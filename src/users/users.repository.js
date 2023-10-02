
class UserRepository {
    constructor(dao) {
        this.dao = dao
    }
    async getAll () {
        return await this.dao.getAll()
    };
    async getById (id) {
        return await this.dao.getById(id)
    };
    async create (data) {
        return await this.dao.create(data)
    };
    async update (id, data) {
        return await this.dao.update(id, data)
    };
    async dellete (id) {
        return await this.dao.dellete(id)
    };
}

export default UserRepository;