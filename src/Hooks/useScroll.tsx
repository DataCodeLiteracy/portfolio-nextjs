import React, { useEffect, useState, useRef } from 'react'
import homeStyles from '../components/Home/Home.module.css'
import debounce from '../utils/debounce.ts'

const useScroll = () => {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [sectionOffsetTop, setSectionOffsetTop] = useState(0)
  const [scrollRealHeight, setScrollRealHeight] = useState(0)
  const [winScrollTop, setWinScrollTop] = useState(0)
  const [sectionScrollTop, setSectionScrollTop] = useState(0)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [totalScrollPercent, setTotalScrollPercent] = useState(0)

  const scrollBodyRef = useRef(null)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const newScrollHeight = scrollBodyRef.current.offsetHeight
      const newSectionOffsetTop = scrollBodyRef.current.getBoundingClientRect().top
      const newScrollRealHeight = newScrollHeight - window.innerHeight
      const newSectionScrollTop = winScrollTop - newSectionOffsetTop
      const newScrollPercent = (newSectionScrollTop / newScrollRealHeight) * 100
      const newTotalScrollPercent = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      setWinScrollTop(scrollTop)
      setScrollHeight(newScrollHeight)
      setSectionOffsetTop(newSectionOffsetTop)
      setScrollRealHeight(newScrollRealHeight)
      setSectionScrollTop(newSectionScrollTop)
      setScrollPercent(newScrollPercent)
      setTotalScrollPercent(newTotalScrollPercent)
    }, 10)

    scrollBodyRef.current = document.querySelector(`.${homeStyles.fix_motion}`)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    scrollHeight,
    sectionOffsetTop,
    scrollRealHeight,
    winScrollTop,
    sectionScrollTop,
    scrollPercent,
    totalScrollPercent
  }
}

export default useScroll
