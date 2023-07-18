'use client'
import React, { useRef, useEffect } from 'react'
import styles from '../app/page.module.css'
import useScroll from '../Hooks/useScroll'

const PercentBar = () => {
  const { totalScrollPercent } = useScroll()

  const percentBar = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    percentBar.current = document.querySelector(`.${styles.percent}`)
    if (percentBar.current) {
      percentBar.current.style.width = `${totalScrollPercent}%`
    }
  }, [totalScrollPercent])

  return <div className={styles.percent}></div>
}

export default PercentBar
