import express from 'express';
// import { Book } from '../models/bookModel.js';
import { deleteBook, getAllBooks, getOneBook, saveNewBook, updateBook } from '../controllers/books-controller.js';
// import { User } from '../models/userModel.js';
import { Book } from '../models/bookModel.js';
// import { AppError } form "../../utils/AppError.js";


const router = express.Router();

// Route to save new books
router.post('/', saveNewBook);

// route to get all books from database
router.get('/', getAllBooks);

// rooute to get one book from database by id.
router.get('/:id', getOneBook);

// route for update a book
router.put('/:id', updateBook);

// route to delete a book
router.delete('/:id', deleteBook);

export default router;