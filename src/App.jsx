import React, { useEffect } from 'react'
import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Skills from './component/Skills'
import Experience from './component/Experience'
import Contact from './component/Contact'
import Projects from './component/Projects'
import Aos from "aos"
import "aos/dist/aos.css"

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
