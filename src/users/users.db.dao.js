import usersModel from "./users/users.model.js";

class Users {
    constructor() {
        getAll = async () => {
            const users = await usersModel.find();
            return users;
        };
        getById = async (id) => {
            const user = await usersModel.findById(id);
            return user;
        };
        create = async (user) => {
            const newUser = await usersModel.create(user);
            return newUser;
        };
        update = async (id, user) => {
            const updatedUser = await usersModel.findByIdAndUpdate(id, user, {new: true});
            return updatedUser;
        };
        dellete = async (id) => {
            const deletedUser = await usersModel.findByIdAndDelete(id);
            return deletedUser;
        };
            
        
    }
}

export default Users;