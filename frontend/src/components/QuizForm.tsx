import React, { useState } from 'react';
import axios from 'axios';

const QuizForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    await axios.post('http://localhost:5000/quizzes', { title, description });
    window.location.href = '/dashboard';
  };

  return (
    <div>
      <h2>Create Quiz</h2>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuizForm;
