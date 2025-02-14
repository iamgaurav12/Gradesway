import express from 'express';
import { createQuiz, getAllQuizzes, deleteQuiz, getQuizById, updateQuiz } from '../controllers/quizController';

const router = express.Router();

router.post('/quizzes', createQuiz);
router.get('/quizzes', getAllQuizzes);
router.get('/quizzes/:id', getQuizById); // New route
router.put('/quizzes/:id', updateQuiz);  // New route
router.delete('/quizzes/:id', deleteQuiz);

export default router;
