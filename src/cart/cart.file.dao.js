import fs from "fs";

class Users {
    constructor() {
        getAll = async () => {
            if (fs.existsSync(path)) {
                try {
                    const data = await fs.promises.readFile(path, "utf-8");
                    return JSON.parse(data);
                } catch (error) {
                    return error;
                };
            }
        }
        getById = async (id) => {
            if (fs.existsSync(path)) {
                try {
                    const data = await fs.promises.readFile(path, "utf-8");
                    return JSON.parse(data).find(user => user.id === id);
                } catch (error) {
                    return error;
                }
            };
        };
        update = async (id, user) => {
            try {
                const data = await fs.promises.readFile(path, "utf-8");
                const users = JSON.parse(data);
                const index = users.findIndex(user => user.id === id);
                users[index] = user;
                await fs.promises.writeFile(path, JSON.stringify(users, null, 2));
                return user;
            } catch (error) {
                return error;
            }
        }
        dellete = async (id) => {
            try {
                const data = await fs.promises.readFile(path, "utf-8");
                const users = JSON.parse(data);
                const index = users.findIndex(user => user.id === id);
                users.splice(index, 1);
                await fs.promises.writeFile(path, JSON.stringify(users, null, 2));
                return users;
            } catch (error) {
                return error;
            }
        }    
    }
}

export default Users;   

