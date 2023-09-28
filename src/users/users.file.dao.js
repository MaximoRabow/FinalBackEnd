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
            } else {
                return [];
            }
        }
        getById = async (id) => {
            if (fs.existsSync(path)) {
                try {
                    const data = await fs.promises.readFile(path, "utf-8");
                    const users = JSON.parse(data);
                    return users.find(user => user.id === id);
                } catch (error) {
                    return error;
                };
            } else {
                return [];
            }
        };
        create = async (user) => {
            if (fs.existsSync(path)) {
                try {
                    const data = await fs.promises.readFile(path, "utf-8");
                    const users = JSON.parse(data);
                    user.id = users.length + 1;
                    users.push(user);
                    await fs.promises.writeFile(path, JSON.stringify(users, null, 2));
                    return user;
                } catch (error) {
                    return error;
                };
            } else {
                return [];
            };
        
        }
        update = async (id, user) => {
            if (fs.existsSync(path)) {
                try {
                    const data = await fs.promises.readFile(path, "utf-8");
                    const users = JSON.parse(data);
                    const index = users.findIndex(user => user.id === id);
                    if (index !== -1) {
                        users[index] = user;
                        await fs.promises.writeFile(path, JSON.stringify(users, null, 2));
                        return user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    return error;
                };
            } else {
                return [];
            };
        
        }
        dellete = async (id) => {

        }
    }
}

export default Users;