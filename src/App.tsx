import BottomBar from './components/BottomBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow max-w-4xl mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <BottomBar />
      </div>
    </Router>
  )
}

export default App
