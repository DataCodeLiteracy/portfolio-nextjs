'use client'
import React, { useRef, useState, useEffect } from 'react'
import articleStyles from '../components/About/About.module.css'
import Image from 'next/image'

const Description = () => {
  const solveImageRef = useRef(null)
  const frontImageRef = useRef(null)
  const childrenImageRef = useRef(null)
  const gritImageRef = useRef(null)
  const [isImageActive, setImageActive] = useState(false)
  const [isImageActiveSolve, setIsImageActiveSolve] = useState(false)
  const [isImageActiveChildren, setIsImageActiveChildren] = useState(false)
  const [isImageActiveGrit, setIsImageActiveGrit] = useState(false)

  const handleMouseEnterFront = () => {
    setImageActive(true)
  }

  const handleMouseLeaveFront = () => {
    setImageActive(false)
  }

  const handleMouseEnterSolve = () => {
    setIsImageActiveSolve(true)
  }

  const handleMouseLeaveSolve = () => {
    setIsImageActiveSolve(false)
  }

  const handleMouseEnterChildren = () => {
    setIsImageActiveChildren(true)
  }

  const handleMouseLeaveChildren = () => {
    setIsImageActiveChildren(false)
  }

  const handleMouseEnterGrit = () => {
    setIsImageActiveGrit(true)
  }

  const handleMouseLeaveGrit = () => {
    setIsImageActiveGrit(false)
  }

  useEffect(() => {
    frontImageRef.current = document.querySelector(`.${articleStyles.front_img}`)
    solveImageRef.current = document.querySelector(`.${articleStyles.solve_img}`)
    childrenImageRef.current = document.querySelector(`.${articleStyles.children_img}`)
    gritImageRef.current = document.querySelector(`.${articleStyles.grit_img}`)

    if (isImageActive) {
      frontImageRef.current.classList.add(articleStyles.active)
    } else {
      frontImageRef.current.classList.remove(articleStyles.active)
    }

    if (isImageActiveSolve) {
      solveImageRef.current.classList.add(articleStyles.active)
    } else {
      solveImageRef.current.classList.remove(articleStyles.active)
    }

    if (isImageActiveChildren) {
      childrenImageRef.current.classList.add(articleStyles.active)
    } else {
      childrenImageRef.current.classList.remove(articleStyles.active)
    }

    if (isImageActiveGrit) {
      gritImageRef.current.classList.add(articleStyles.active)
    } else {
      gritImageRef.current.classList.remove(articleStyles.active)
    }
  }, [isImageActive, isImageActiveSolve, isImageActiveChildren, isImageActiveGrit])

  return (
    <article className={articleStyles.article}>
      <p>
        Full Stack 개발자를 꿈꾸는
        <strong className={articleStyles.frontend} onMouseEnter={handleMouseEnterFront} onMouseLeave={handleMouseLeaveFront}>
          Front-end 개발자
        </strong>
        입니다.
      </p>
      <p>
        실용주의 프로그래밍을 지지하며, 주어진
        <strong onMouseEnter={handleMouseEnterSolve} onMouseLeave={handleMouseLeaveSolve}>
          문제에 신속하게 대응하고 적절한 해결책
        </strong>
        을 찾는 것에 관심이 많습니다.
      </p>
      <p>
        개발자로서 세상에 긍정적인 영향을 미치고 싶습니다.{' '}
        <strong onMouseEnter={handleMouseEnterChildren} onMouseLeave={handleMouseLeaveChildren}>
          모든 아이들이 교육과 기회의 평등 속에서 자신의 잠재력을 발휘하고 꿈을 이룰 수 있는 세상
        </strong>
        을 만드는 것이 제 꿈입니다. 그 꿈에 도달하기 위해 맞닿드릴 수 있는 문제들을 개발자로서 해결해보고 싶습니다.
      </p>
      <p>
        <strong onMouseEnter={handleMouseEnterGrit} onMouseLeave={handleMouseLeaveGrit}>
          &ldquo;그릿(장기적인 목표를 이루기 위한 인내와 열정)&ldquo;
        </strong>
        은 저를 가장 잘 표현하는 한 단어라고 생각합니다. 제게 주어진 문제를 해결하기 위해 끝까지 포기하지 않는 개발자가 되겠습니다.
      </p>
    </article>
  )
}

export default Description
