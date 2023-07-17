import React from 'react'
import styles from '../app/page.module.css'
import skillsStyles from '../components/Skills.module.css'

const Skills = () => {
  return (
    <section id="skills" className={`${styles.section} ${styles.skills}`}>
      <div className={skillsStyles.container}>
        <h1>Skills</h1>
        <div className={skillsStyles.buttonGroup}>
          <button>React</button>
          <button>Next.js</button>
          <button>TypeScript</button>
          <button>JavaScript</button>
          <button>Redux</button>
          <button>styled-components</button>
          <button>Emotion</button>
          <button>HTML/CSS</button>
        </div>
        <div className={skillsStyles.description}>
          <div>
            <h2>HTML/CSS</h2>
            <p>
              웹표준을 지키려 노력합니다. <br />
              SCSS 문법에 익숙합니다. <br />
              styled-component, emotion을 활용할 수 있습니다.
              <br />
              BEM 방법론을 적용할 수 있습니다.
              <br />
              크로스 브라우징에 대응할 수 있습니다.
              <br />
              Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.
              <br />
              keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.
            </p>
          </div>
          <div>
            <h2>HTML/CSS</h2>
            <p>
              웹표준을 지키려 노력합니다. <br />
              SCSS 문법에 익숙합니다. <br />
              styled-component, emotion을 활용할 수 있습니다.
              <br />
              BEM 방법론을 적용할 수 있습니다.
              <br />
              크로스 브라우징에 대응할 수 있습니다.
              <br />
              Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.
              <br />
              keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
