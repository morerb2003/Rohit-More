import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About' // Currently acting as Experience
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Marquee from './components/Marquee'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'

function App() {
  return (
    <div className="app-container">
      <Preloader />
      <Cursor />
      <Navbar />
      <main>
        <Home />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
