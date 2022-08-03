import { Router } from 'express';
import { getBooks } from '../controllers/booksController';
import { getGenres } from '../controllers/Genre';

export const router = Router();

router.get('/books', getBooks);
router.get('/genres', getGenres);
