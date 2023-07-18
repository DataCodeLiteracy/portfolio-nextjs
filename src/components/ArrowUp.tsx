'use client'
import React from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md'
import styles from '../app/page.module.css'
import Link from 'next/link'

const ArrowUp = () => {
  const handleScrollToTop = (e: React.UIEvent<HTMLElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Link href="#home">
      <button className={styles.arrowUp} onClick={handleScrollToTop}>
        <MdOutlineKeyboardDoubleArrowUp className={styles.icon} />
      </button>
    </Link>
  )
}

export default ArrowUp
