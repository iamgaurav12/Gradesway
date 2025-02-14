import React, { useEffect, useState } from "react";
import axios from "axios";
import QuizList from "../components/QuizList";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

const DashboardPage: React.FC = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const response = await axios.get("http://localhost:5000/quizzes");
      setQuizzes(response.data);
    };
    fetchQuizzes();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/quizzes/${id}`);
      setQuizzes(quizzes.filter((quiz: any) => quiz.id !== id));
    } catch (error) {
      alert("Error deleting quiz");
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Your Quizzes</h2>
      <QuizList quizzes={quizzes} onDelete={handleDelete} />
      <Link to="/create" className="mt-6 inline-block p-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
        Create New Quiz
      </Link>
    </div>
  );
};

export default DashboardPage;
