import React, { useEffect, useState } from "react";
import axios from "axios";

const QuizDashboard = () => {
  interface Quiz {
    id: number;
    title: string;
    description: string;
  }
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const response = await axios.get("http://localhost:5000/quizzes");
      setQuizzes(response.data);
    };
    fetchQuizzes();
  }, []);

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:5000/quizzes/${id}`);
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
  };

  return (
    <div>
      <h2>Quiz Dashboard</h2>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <h3>{quiz.title}</h3>
          <p>{quiz.description}</p>
          <button onClick={() => handleDelete(quiz.id)}>Delete</button>
        </div>
      ))}
      <a href="/create-quiz">Create New Quiz</a>
    </div>
  );
};

export default QuizDashboard;
