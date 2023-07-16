import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Home from '../components/Home'
import AboutMe from '../components//AboutMe'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

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
