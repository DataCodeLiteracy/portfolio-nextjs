import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Home from '../components/Home/Home'
import AboutMe from '../components/About/AboutMe'
import Experience from '../components/Experience/Experience'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

const PortFolio = () => {
  return (
    <main>
      <Home />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default PortFolio
