import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Blog from './pages/Blog'
import About from './pages/About'
import Projects from './pages/Projects'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Blog />} path="/blog" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
