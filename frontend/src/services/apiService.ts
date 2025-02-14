import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000', // Ensure the backend is running on this URL
});

export const login = (data: { username: string; password: string }) => api.post('/login', data);

export const getQuizzes = () => api.get('/quizzes');

export const getQuizById = (id: string) => api.get(`/quizzes/${id}`);

export const createQuiz = (data: { title: string; description: string }) => api.post('/quizzes', data);

export const updateQuiz = (id: string, data: { title: string; description: string }) => api.put(`/quizzes/${id}`, data);

export const deleteQuiz = (id: string) => api.delete(`/quizzes/${id}`);
