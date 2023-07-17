import React from 'react'
import styles from '../app/page.module.css'
import projectStyles from '../components/Projects.module.css'

const Projects = () => {
  return (
    <section id="projects" className={`${styles.section} ${styles.projects}`}>
      <div className={projectStyles.container}>
        <h1>Projects</h1>
        <div className={projectStyles.projectsContainer}>
          <div className={projectStyles.img}>이미지</div>
          <div className={projectStyles.list}>
            <h2>TODO LIST</h2>
            <p>
              자바스크립트를 이용하여 만든 Todo List <br />내 첫 번쨰 토이 프로젝트이자, 바닐라 자바스크립트를 이용하여 만든 프로젝트 DOM API를 사용하여 처음으로 DOM을 조작해서
              브라우저에서 내가 원하는 결과를 만들어낼 수 있다는 기쁨을 느꼈던 프로젝트
            </p>
            <button>깃허브</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
