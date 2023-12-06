import mongoose from "mongoose";

const userModel = mongoose.Schema(

    {

        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            // unique: true
        },
        role: {
            type: String, required: true
        },
        issudeBooks: {
            type: Array
        },

    }
);

export const User = mongoose.model('User', userModel);