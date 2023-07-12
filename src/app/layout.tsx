import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from '../app/page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'This portfolio belongs to Jonghyun and showcases his work and projects.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <div>로고</div>
            <div>contact</div>
          </div>
          <div className={styles.toggle}>토글 버튼</div>
        </nav>
        {children}
      </body>
    </html>
  )
}
