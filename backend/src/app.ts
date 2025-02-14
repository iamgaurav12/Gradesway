import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from "./routes/authRoutes";
import quizRoutes from './routes/quizRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(authRoutes);
app.use(quizRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

export default app;
