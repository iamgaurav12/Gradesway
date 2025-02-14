import React from 'react';
import { Link } from 'react-router-dom';

interface Quiz {
  id: number;
  title: string;
  description: string;
}

interface QuizListProps {
  quizzes: Quiz[];
  onDelete: (id: number) => void;
}

const QuizList: React.FC<QuizListProps> = ({ quizzes, onDelete }) => {
  return (
    <ul className="space-y-6">
      {quizzes.map((quiz) => (
        <li key={quiz.id} className="mb-6">
          <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{quiz.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{quiz.description}</p>
            <div className="mt-4 flex space-x-4">
              <Link
                to={`/edit/${quiz.id}`}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Edit
              </Link>
              <button
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                onClick={() => onDelete(quiz.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default QuizList;
