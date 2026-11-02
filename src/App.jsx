import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<div className="page-enter"><Profile /></div>} />
          <Route path="/about" element={<div className="page-enter"><About /></div>} />
          <Route path="/projects" element={<div className="page-enter"><MyWork /></div>} />
          <Route path="/contact" element={<div className="page-enter"><Contact /></div>} />
        </Routes>
      </main>
    </>
  );
}
