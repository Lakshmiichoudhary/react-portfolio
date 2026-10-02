import React, { useEffect } from 'react'
import './App.css'
import Header from './component/Header'
import Aos from "aos"
import "aos/dist/aos.css"
import Home from './sections.tsx/Hero'
import Skills from './sections.tsx/Skills'
import Experience from './sections.tsx/Experience'
import Projects from './sections.tsx/Projects'
import Contact from './sections.tsx/Contact'

const App = () => {
  useEffect(() => {
    Aos.init()
  },[])

  return (
    <div>
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
