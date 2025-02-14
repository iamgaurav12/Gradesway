import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const CreateEditQuizPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams(); // Used to determine if editing
  const navigate = useNavigate();

  // Fetch quiz data when editing
  useEffect(() => {
    if (id) {
      const fetchQuiz = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/quizzes/${id}`);
          setTitle(response.data.title);
          setDescription(response.data.description);
        } catch (error) {
          console.error('Error fetching quiz data:', error);
        }
      };
      fetchQuiz();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        // Update existing quiz
        await axios.put(`http://localhost:5000/quizzes/${id}`, { title, description });
      } else {
        // Create new quiz
        await axios.post('http://localhost:5000/quizzes', { title, description });
      }
      navigate('/dashboard'); // Redirect to dashboard after successful submission
    } catch (error) {
      alert('Error saving quiz');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg mx-auto mt-10">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">{id ? 'Edit Quiz' : 'Create Quiz'}</h2>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Title</label>
        <input
          type="text"
          placeholder="Enter quiz title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Description</label>
        <textarea
          placeholder="Enter quiz description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
          required
        />
      </div>
      <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        {id ? 'Update Quiz' : 'Create Quiz'}
      </button>
    </form>
  );
};

export default CreateEditQuizPage;
