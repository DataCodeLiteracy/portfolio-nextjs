import React from 'react'
import styles from '../app/page.module.css'
import contactStyles from '../components/Contact.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
  return (
    <section id="#about" className={`${styles.section} ${styles.contact}`}>
      <div className={contactStyles.container}>
        <h1>Contact</h1>
        <div className={contactStyles.listWrapper}>
          <Image src="/Images/contactme.webp" alt="" width={400} height={400} />
          <div className={contactStyles.list}>
            <div>
              <button>Email</button>
              <div>dataliteracy@icloud.com</div>
            </div>
            <div>
              <Link href="https://github.com/DataCodeLiteracy" target="_blank">
                GitHub
              </Link>
              <Link href="https://github.com/DataCodeLiteracy" target="_blank">
                https://github.com/DataCodeLiteracy
              </Link>
            </div>
            <div>
              <Link href="https://velog.io/@dataliteracy" target="_blank">
                Blog
              </Link>
              <Link href="https://velog.io/@dataliteracy" target="_blank">
                https://velog.io/@dataliteracy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
