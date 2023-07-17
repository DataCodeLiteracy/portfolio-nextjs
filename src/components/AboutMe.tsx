import React from 'react'
import styles from '../app/page.module.css'
import articleStyles from '../components/About.module.css'
import Image from 'next/image'
import Description from '../components/Description'

const AboutMe = () => {
  return (
    <section id="#about" className={`${styles.section} ${styles.about}`}>
      <div className={articleStyles.img}>이미지</div>
      <article className={articleStyles.article}>
        <p>Full Stack 개발자를 꿈꾸는 Front-end 개발자 입니다.</p>
        <p>실용주의 프로그래밍을 지지하며, 주어진 문제에 신속하게 대응하고 적절한 해결책을 찾는 것에 관심이 많습니다.</p>
        <p>
          개발자로서 세상에 긍정적인 영향을 미치고 싶습니다. 모든 아이들이 교육과 기회의 평등 속에서 자신의 잠재력을 발휘하고 꿈을 이룰 수 있는 세상을 만드는 것이 제 꿈입니다. 그
          꿈에 도달하기 위해 맞닿드릴 수 있는 문제들을 개발자로서 해결해보고 싶습니다.
        </p>
        <p>
          “그릿(장기적인 목표를 이루기 위한 인내와 열정)”은 저를 가장 잘 표현하는 한 단어라고 생각합니다. 제게 주어진 문제를 해결하기 위해 끝까지 포기하지 않는 개발자가 되겠습니다.
        </p>
      </article>
    </section>
  )
}
export default AboutMe
