import userService from "../users/users.services.js"

const home = async (req, res) => {
    const user = await userService.getAll();
    res.render('users', { user });
    }

export default home;
