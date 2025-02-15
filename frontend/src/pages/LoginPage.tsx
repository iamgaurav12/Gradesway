import React from 'react';
import LoginForm from '../components/LoginForm';
import ThemeToggle from '../components/ThemeToggle';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transform transition-transform hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800 dark:text-gray-100">Welcome to Gradesway</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
