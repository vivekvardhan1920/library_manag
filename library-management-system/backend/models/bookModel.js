
import mongoose, { Schema } from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publicationyear: {
            type: Number,
            required: true,
        },
        isbn: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        borrowedBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "users",
            }
        ],
        quantityHistory: {
            type: Array,
            required: true,
            default: [],
        },
        image: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema); 
