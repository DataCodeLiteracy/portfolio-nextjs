import styles from '../app/page.module.css'
import homeStyles from '../components/Home.module.css'

const Home = () => {
  return (
    <section id="#home" className={`${styles.section} ${styles.home}`}>
      <h1 className={homeStyles.h1}>
        Hi!
        <br />I am Jong Hyun
      </h1>
    </section>
  )
}

export default Home
