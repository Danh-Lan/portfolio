import React from 'react';
import BottomBar from './components/BottomBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow max-w-4xl mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </div>
        <BottomBar />
      </div>
    </Router>
  )
}

export default App
