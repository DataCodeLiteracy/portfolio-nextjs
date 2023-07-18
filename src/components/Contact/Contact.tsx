import React from 'react'
import styles from '../../app/page.module.css'
import contactStyles from '../Contact/Contact.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Email from '../../components/Email'
import { AiFillGithub } from 'react-icons/ai'
import { SiVelog } from 'react-icons/si'

const Contact = () => {
  return (
    <section id="contact" className={`${styles.section} ${styles.contact}`}>
      <div className={contactStyles.container}>
        <h1>Contact</h1>
        <div className={contactStyles.listWrapper}>
          <Image src="/Images/contactme.webp" alt="" width={400} height={400} />
          <div className={contactStyles.list}>
            <div>
              <Email icon={true} address={true} size="20px" />
            </div>
            <div>
              <Link href="https://github.com/DataCodeLiteracy" target="_blank">
                <AiFillGithub />
              </Link>
              <Link href="https://github.com/DataCodeLiteracy" target="_blank" className={contactStyles.title}>
                https://github.com/DataCodeLiteracy
              </Link>
            </div>
            <div>
              <Link href="https://velog.io/@dataliteracy" target="_blank">
                <SiVelog />
              </Link>
              <Link href="https://velog.io/@dataliteracy" target="_blank" className={contactStyles.title}>
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
