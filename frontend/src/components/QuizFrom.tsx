import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const QuizForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams(); // Used to determine if we're editing
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch the existing quiz details if editing
      const fetchQuiz = async () => {
        const response = await axios.get(`http://localhost:5000/quizzes/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
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
      navigate('/dashboard'); // Redirect to the dashboard after submission
    } catch (error) {
      alert('Error saving quiz');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-4">{id ? 'Edit Quiz' : 'Create Quiz'}</h2>
      <div className="mb-4">
        <label className="block mb-1">Title</label>
        <input
          type="text"
          placeholder="Enter quiz title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Description</label>
        <textarea
          placeholder="Enter quiz description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {id ? 'Update Quiz' : 'Create Quiz'}
      </button>
    </form>
  );
};

export default QuizForm;
