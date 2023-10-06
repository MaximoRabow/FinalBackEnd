import userService from "../users/users.services.js"

const home = async (req, res) => {
    const users = await userService.findAll();
    res.render('index', { users });
    }

export default home;
