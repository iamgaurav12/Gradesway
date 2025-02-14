import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CreateEditQuizPage from './pages/CreateEditQuizPage';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
          </button>
        </div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/create" element={<CreateEditQuizPage />} />
          <Route path="/edit/:id" element={<CreateEditQuizPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
