'use client'
import React, { useState, useRef, useEffect } from 'react'
import styles from '../app/page.module.css'
import { AiOutlineOrderedList, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

const NavList = () => {
  const [isToggleActive, setToggleActive] = useState(false)
  const navList = useRef<HTMLDivElement | null>(null)

  const handleToggleClick = () => {
    setToggleActive(!isToggleActive)
  }

  const handleCloseClick = () => {
    setToggleActive(!isToggleActive)
    if (!isToggleActive) {
      navList.current?.classList.remove(styles.active)
    }
  }

  useEffect(() => {
    navList.current = document.querySelector(`.${styles.navList}`)

    if (isToggleActive) {
      navList.current?.classList.add(styles.active)
    } else {
      navList.current?.classList.remove(styles.active)
    }
  }, [isToggleActive])

  const navLinks = [
    { id: 'home', href: '#', label: 'Home' },
    { id: 'about', href: '#about', label: 'About Me' },
    { id: 'experience', href: '#experience', label: 'Experience' },
    { id: 'skills', href: '#skills', label: 'Skills' },
    { id: 'projects', href: '#projects', label: 'Projects' },
    { id: 'contact', href: '#contact', label: 'Contact' }
  ]

  return (
    <>
      <button className={styles.toggle} onClick={handleToggleClick}>
        <AiOutlineOrderedList className={styles.icon} />
      </button>
      <div className={styles.navList}>
        <AiOutlineClose className={styles.closeBtn} onClick={handleCloseClick} />
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default NavList
