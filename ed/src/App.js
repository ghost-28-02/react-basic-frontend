import './App.css';
import { Sun, Moon } from 'lucide-react';
import Courses from './components/Courses';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className={`min-h-screen bg-gray-100 transition-colors duration-300` }>
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50 transition-colors duration-300">
        <h1 className="text-2xl font-bold text-gray-800">Learnify</h1>
        <div className="flex gap-3 items-center">
            <Sun className="w-6 h-6 text-yellow-500 cursor-pointer hover:scale-110 transition-transform duration-200"/>
            <Moon className="w-6 h-6 text-gray-700 cursor-pointer hover:scale-110 transition-transform duration-200"/>
        </div>
      </nav>
      <Courses></Courses>
    </div>
  );
}

export default App;