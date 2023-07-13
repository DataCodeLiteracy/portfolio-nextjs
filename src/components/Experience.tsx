import styles from '../app/page.module.css'
import experienceStyles from '../components/Experience.module.css'

const Experience = () => {
  return (
    <section id="#home" className={`${styles.section} ${styles.experience}`}>
      <div className={experienceStyles.container}>
        <h1>Experience</h1>
        <ul className="list">
          <li>
            <div>2006.03 ~ 2008.01</div>
            <h2>동양대학교 스포츠과학과</h2>
            <p>2학년까지 다니고 군대 입대</p>
          </li>
          <li>
            <div>2010.05 ~ 2013.05</div>
            <h2>택배 회사 입사</h2>
            <p>군대 전역 후 택배 기사로 취업</p>
          </li>
          <li>
            <div>2013.08 ~ </div>
            <h2>마트, 편의점 운영</h2>
            <p>마트 6년, 편의점 4년째 운영중</p>
          </li>
          <li>
            <div>2022.02 ~ 2023.02</div>
            <h2>숭실 사이버 대학교 컴퓨터공학과 졸업</h2>
            <p>사이버 대학에서 개발자 커리어 전환과 학사 학위 취득을 위해 컴퓨터 공학 과목들 공부</p>
          </li>
          <li>
            <div>2023.01 ~</div>
            <h2>F-Lab 멘토링 진행중..</h2>
            <p>적절한 방법으로 꾸준히 노력하는 개발자가 되기 위해 멘토링을 받기로 결정</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience
