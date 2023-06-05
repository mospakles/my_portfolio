import React from 'react'
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About'
import Home from './pages/Home';
import Stack from './pages/Stack';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Switcher from './Hooks/Switcher';

const App = () => {
  return (
    <>
    <Routes>
      <Route
        path="*"
        element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/stack" element={<Stack />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </>
        }
      />
      </Routes>
      </>
  )
}

export default App