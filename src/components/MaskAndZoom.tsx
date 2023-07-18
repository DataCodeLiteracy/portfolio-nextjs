'use client'
import React, { useEffect, useRef, useState } from 'react'
import homeStyles from '../components/Home/Home.module.css'
import useScroll from '../Hooks/useScroll'

const MaskAndZoom = () => {
  const { scrollPercent } = useScroll()

  const [maskValue, setMaskValue] = useState(50)
  const [scaleValue, setScaleValue] = useState(1)

  const titleElementRef = useRef<HTMLDivElement | null>(null as unknown as HTMLDivElement)
  const endingElementRef = useRef<HTMLDivElement | null>(null as unknown as HTMLDivElement)
  const maskLeftRef = useRef<HTMLDivElement | null>(null as unknown as HTMLDivElement)
  const maskRightRef = useRef<HTMLDivElement | null>(null as unknown as HTMLDivElement)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    titleElementRef.current = document.querySelector(`.${homeStyles.intro_txt}`)
    endingElementRef.current = document.querySelector(`.${homeStyles.ending_txt}`)

    if (scrollPercent > 0.5) {
      titleElementRef.current?.classList.add(homeStyles.active)
    } else {
      titleElementRef.current?.classList.remove(homeStyles.active)
    }

    if (scrollPercent >= 70) {
      endingElementRef.current?.classList.add(homeStyles.active)
    } else {
      endingElementRef.current?.classList.remove(homeStyles.active)
    }
  }, [scrollPercent])

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

    if (maskLeftRef.current && maskRightRef.current) {
      maskLeftRef.current.style.width = `${maskValue}%`
      maskRightRef.current.style.width = `${maskValue}%`
    }

    if (imageRef.current) {
      imageRef.current.style.transform = `scale(${scaleValue})`
    }
  }, [maskValue, scaleValue, scrollPercent])

  return null
}

export default MaskAndZoom
