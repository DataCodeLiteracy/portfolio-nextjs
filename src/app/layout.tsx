import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from '../app/page.module.css'
import { TbBrandNextjs } from 'react-icons/tb'
import { AiFillGithub, AiOutlineMail, AiOutlineOrderedList } from 'react-icons/ai'
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md'
import { SiVelog } from 'react-icons/si'
import Link from 'next/link'
import ArrowUp from '../components/ArrowUp'
import NavList from '../components/NavList'
import PercentBar from '../components/PercentBar'
import Email from '../components/Email'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'This portfolio belongs to Jonghyun and showcases his work and projects.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <PercentBar />
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="#">
              <TbBrandNextjs className={styles.icon} />
            </Link>
          </div>
          <div className={styles.contactList}>
            <Link href="https://github.com/DataCodeLiteracy" target="_blank">
              <AiFillGithub className={styles.icon} />
            </Link>
            <Link href="https://velog.io/@dataliteracy" target="_blank">
              <SiVelog className={styles.icon} />
            </Link>
            <Email icon={true} />
          </div>
          <NavList />
        </nav>
        {children}
        <ArrowUp />
      </body>
    </html>
  )
}
