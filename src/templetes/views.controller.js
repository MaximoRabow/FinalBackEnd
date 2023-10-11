import userService from "../users/users.services.js"

const home = async (req, res) => {
    const users = await userService.getUsers();
    res.render('users', { users });
    }

export default home;
