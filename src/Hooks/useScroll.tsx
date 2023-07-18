import React, { useEffect, useState, useRef } from 'react'
import homeStyles from '../components/Home/Home.module.css'
import debounce from '../utils/debounce'

interface ScrollState {
  scrollHeight: number
  sectionOffsetTop: number
  scrollRealHeight: number
  winScrollTop: number
  sectionScrollTop: number
  scrollPercent: number
  totalScrollPercent: number
}

const useScroll = (): ScrollState => {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [sectionOffsetTop, setSectionOffsetTop] = useState(0)
  const [scrollRealHeight, setScrollRealHeight] = useState(0)
  const [winScrollTop, setWinScrollTop] = useState(0)
  const [sectionScrollTop, setSectionScrollTop] = useState(0)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [totalScrollPercent, setTotalScrollPercent] = useState(0)

  const scrollBodyRef = useRef<HTMLDivElement | null>(null as unknown as HTMLDivElement)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const newScrollHeight = scrollBodyRef.current?.offsetHeight || 0
      const newSectionOffsetTop = scrollBodyRef.current?.getBoundingClientRect().top || 0
      const newScrollRealHeight = newScrollHeight - window.innerHeight
      const newSectionScrollTop = winScrollTop - newSectionOffsetTop
      const newScrollPercent = newScrollRealHeight !== 0 ? (newSectionScrollTop / newScrollRealHeight) * 100 : 0
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
