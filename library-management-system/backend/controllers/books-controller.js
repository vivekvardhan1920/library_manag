import { request, response } from "express";
import { Book } from "../models/bookModel.js";

const getAllBooks = async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).json({
            books: books.map((book) => ({
                ...book.toJSON(),
                availableQuantity: book.quantity - book.borrowedBy.length,
            })),
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}
const updateBook = async (request, response) => {
    try {
        const { id } = request.params;
        const updatedBook = await Book.findByIdAndUpdate(id, request.body);

        if (!updatedBook) {
            return response.status(404).json({ message: 'Book not found' });
        }
        // if (!request.body.title ||
        //     !request.body.author ||
        //     !request.body.publicationyear) {
        //     return response.status(400).send({
        //         message: 'Updated Succesfully.'
        //     });
        // }
        // const { ...rest } = request.body
        // const updatedBook = await result.update(rest)
        return response.status(200).json({ result: updatedBook });

        // return response.status(200).send({ message: 'Book updated sucessfully' });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}
const getOneBook = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findById(id);
        if (result == null) {
            return response.status(404).json({ error: "Book not found" });
        }
        return response.status(200).json({
            result: {
                ...result.toJSON(),
                availableQuantity: result.quantity - result.borrowedBy.length,
            },
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}
const deleteBook = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);

        if (result == null) {
            return response.status(404).json({ message: 'Book not found' });

        }
        // await result.delete();
        return response.status(200).json({ message: 'Operation successful' });

    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}
const saveNewBook = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findOne({ _id: id });
        if (result != null) {
            return response.status(400).json({
                error: 'Book with same id found'
            });
        }

        const newBook = await Book.create(request.body)
        return response.status(200).json({ result: newBook });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}

export { getAllBooks, updateBook, getOneBook, deleteBook, saveNewBook };