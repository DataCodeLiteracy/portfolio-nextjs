import React from 'react'
import styles from '../../app/page.module.css'
import skillsStyles from '../Skills/Skills.module.css'

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
            <h2>React</h2>
            <p>
              함수형 프로그래밍을 고려하여 함수 컴포넌트를 사용합니다.
              <br />
              Redux와 같은 상태관리 라이브러리 사용 경험이 있습니다.
              <br />
              React-Router와 React-query 사용 경험이 있습니다.
              <br />
              리액트 생명주기에 대한 고민이 많습니다.
              <br />
              Next.js 사용경험이 있습니다.
            </p>
          </div>
          <div>
            <h2>HTML/CSS</h2>
            <p>
              웹표준을 지키려 노력합니다. <br />
              styled-component, emotion을 활용할 수 있습니다.
              <br />
              BEM 방법론을 적용할 수 있습니다.
              <br />
              Tailwind 라이브러리를 사용할 수 있습니다.
            </p>
          </div>
          <div>
            <h2>JavaScript</h2>
            <p>
              ES6+ 문법에 익숙합니다.
              <br />
              webpack을 통한 번들링 사용경험이 있습니다.
            </p>
          </div>
          <div>
            <h2>TypeScript</h2>
            <p>
              타입스크립트를 통해 안정성과 표현력을 중시하는 코드를 작성합니다.
              <br />
              객체 지향 프로그래밍에 관심이 많습니다.
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
