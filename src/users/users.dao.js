import mongoose from "mongoose";

const collection = "users";

const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
        type: String,
        select: false,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    }

})

const Users = mongoose.model(collection, userSchema);

export default Users;

