import React from 'react'
import styles from '../../app/page.module.css'
import homeStyles from '../Home/Home.module.css'
import Image from 'next/image'
import MaskAndZoom from '../../components/MaskAndZoom'

const Home = () => {
  return (
    <section id="home" className={`${styles.section} ${styles.home} ${homeStyles.fix_motion}`}>
      <article className={homeStyles.sticky_cont}>
        <div className={homeStyles.cont_box}>
          <div className={`${homeStyles.intro_txt}`}>
            <h1 className={homeStyles.h1}>
              PORTFOLIO
              <br />
              WEB SITE
            </h1>
          </div>
          <div className={homeStyles.left_mask}></div>
          <div className={homeStyles.right_mask}></div>
          <div className={homeStyles.bg_img_wrapper}>
            <Image className={homeStyles.bg_img} src="/Images/프로필애니.jpeg" alt="main profile image" width={500} height={500} />
          </div>
          <div className={`${homeStyles.ending_txt}`}>
            <div className={homeStyles.tb_row}>
              <div className={homeStyles.tb_cell}>
                <p>
                  HI!
                  <br />
                  I&#39;m JongHyun
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <MaskAndZoom />
    </section>
  )
}

export default Home
