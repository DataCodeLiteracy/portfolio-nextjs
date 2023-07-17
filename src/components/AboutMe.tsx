import React from 'react'
import styles from '../app/page.module.css'
import articleStyles from '../components/About.module.css'
import Image from 'next/image'
import Description from '../components/Description'

const AboutMe = () => {
  return (
    <section id="about" className={`${styles.section} ${styles.about}`}>
      <h1 className={articleStyles.h1}>About Me</h1>
      <div className={articleStyles.imgWrapper}>
        <figure className={articleStyles.imgBox}>
          <Image className={articleStyles.front_img} src="/Images/code.jpeg" alt="" width={500} height={500} />
          <Image className={articleStyles.solve_img} src="/Images/problem-solving.jpg" alt="" width={500} height={500} />
          <Image className={articleStyles.children_img} src="/Images/happy-world-children.webp" alt="" width={500} height={500} />
          <Image className={articleStyles.grit_img} src="/Images/grit.png" alt="" width={500} height={500} />
        </figure>
      </div>
      <Description />
    </section>
  )
}
export default AboutMe
