'use client'
import { useEffect, useState, useRef } from 'react'
import homeStyles from '../components/Home.module.css'

const HomeLogic = () => {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [sectionOffsetTop, setSectionOffsetTop] = useState(0)
  const [scrollRealHeight, setScrollRealHeight] = useState(0)
  const [winScrollTop, setWinScrollTop] = useState(0)
  const [sectionScrollTop, setSectionScrollTop] = useState(0)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [maskValue, setMaskValue] = useState(50)
  const [scaleValue, setScaleValue] = useState(1)

  const titleElementRef = useRef(null)
  const endingElementRef = useRef(null)
  const maskLeftRef = useRef(null)
  const maskRightRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const MASK_START_VALUE = 50
    const MASK_END_VALUE = 0
    const ZOOM__IN_VALUE = 1
    const ZOOM_OUT_VALUE = 1.5
    const smoothMaskValue = MASK_START_VALUE - (scrollPercent * (MASK_START_VALUE - MASK_END_VALUE)) / 100
    const smoothScaleValue = ZOOM__IN_VALUE - (scrollPercent * (ZOOM__IN_VALUE - ZOOM_OUT_VALUE)) / 100

    setMaskValue(smoothMaskValue)
    setScaleValue(smoothScaleValue)

    maskLeftRef.current = document.querySelector(`.${homeStyles.left_mask}`)
    maskRightRef.current = document.querySelector(`.${homeStyles.right_mask}`)
    imageRef.current = document.querySelector(`.${homeStyles.bg_img}`)

    maskLeftRef.current.style.width = `${maskValue}%`
    maskRightRef.current.style.width = `${maskValue}%`

    imageRef.current.style.transform = `scale(${scaleValue})`
  }, [maskValue, scaleValue, scrollPercent])

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const newScrollHeight = scrollBody.offsetHeight
      const newSectionOffsetTop = scrollBody.getBoundingClientRect().top
      const newScrollRealHeight = newScrollHeight - window.innerHeight
      const newSectionScrollTop = winScrollTop - newSectionOffsetTop
      const newScrollPercent = (newSectionScrollTop / newScrollRealHeight) * 100

      setWinScrollTop(scrollTop)
      setScrollHeight(newScrollHeight)
      setSectionOffsetTop(newSectionOffsetTop)
      setScrollRealHeight(newScrollRealHeight)
      setSectionScrollTop(newSectionScrollTop)
      setScrollPercent(newScrollPercent)
    }, 10)

    const scrollBody = document.querySelector(`.${homeStyles.fix_motion}`)
    titleElementRef.current = document.querySelector(`.${homeStyles.intro_txt}`)
    endingElementRef.current = document.querySelector(`.${homeStyles.ending_txt}`)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (scrollPercent > 0.5) {
      titleElementRef.current.classList.add(homeStyles.active)
    } else {
      titleElementRef.current.classList.remove(homeStyles.active)
    }

    if (scrollPercent >= 70) {
      endingElementRef.current.classList.add(homeStyles.active)
    } else {
      endingElementRef.current.classList.remove(homeStyles.active)
    }
  }, [scrollPercent])

  return null
}

export default HomeLogic

function debounce(func, delay) {
  let timerId
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
