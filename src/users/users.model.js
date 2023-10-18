import mongoose from "mongoose";

const usersCollection = "Users";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        lowercase: true,
        match: /^[a-zA-Z]+$/,
    },

    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        lowercase: true,
        match: /^[a-zA-Z]+$/,
    },

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
        minlength: 8,
        maxlength: 20,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    }

})

const usersModel = mongoose.model(usersCollection, userSchema);

export default usersModel;

