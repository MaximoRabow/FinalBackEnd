
class UserRepository {
    constructor(dao) {
        this.dao = dao
    }
    async getUsers () {
        return await this.dao.getAll()
    };
    async getBy (id) {
        return await this.dao.getById(id)
    };
    async createUsers (data) {
        return await this.dao.create(data)
    };
    async updateUsers (id, data) {
        return await this.dao.update(id, data)
    };
    async delleteUsers (id) {
        return await this.dao.dellete(id)
    };
}

export default UserRepository;