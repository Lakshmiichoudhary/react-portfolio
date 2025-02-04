import React from 'react'
import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Skills from './component/Skills'
import Experience from './component/Experience'
import Contact from './component/Contact'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
