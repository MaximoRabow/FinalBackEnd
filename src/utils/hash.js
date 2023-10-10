import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

export const isValidPassword = (user, password) => {
    bcrypt.compare(password, user.password);
};

