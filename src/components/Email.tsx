'use client'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'

const Email = ({ icon, address }) => {
  const linkPrevent = (e) => {
    e.preventDefault()
    window.location.href = 'mailto:dataliteracy@icloud.com'
  }

  return (
    <>
      {icon && (
        <Link href="#" onClick={linkPrevent}>
          <AiOutlineMail />
        </Link>
      )}
      {address && (
        <Link href="#" onClick={linkPrevent}>
          dataliteracy@icloud.com
        </Link>
      )}
    </>
  )
}
export default Email
