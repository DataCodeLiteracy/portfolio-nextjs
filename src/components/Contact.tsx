import React from 'react'
import styles from '../app/page.module.css'
import contactStyles from '../components/Contact.module.css'

const Contact = () => {
  return (
    <section id="#about" className={`${styles.section} ${styles.contact}`}>
      <div className={contactStyles.container}>
        <h1>Contact</h1>
        <div className={contactStyles.list}>
          <div>
            <button>Email</button>
            <div>dataliteracy@icloud.com</div>
          </div>
          <div>
            <button>GitHub</button>
            <div>https://github.com/DataCodeLiteracy</div>
          </div>
          <div>
            <button>Blog</button>
            <div>https://velog.io/@dataliteracy</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
