'use client'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'

const Email = ({ icon, address, color, size }) => {
  const linkPrevent = (e) => {
    e.preventDefault()
    window.location.href = 'mailto:dataliteracy@icloud.com'
  }

  return (
    <>
      {icon && (
        <Link href="#" onClick={linkPrevent}>
          <AiOutlineMail style={{ color: color }} />
        </Link>
      )}
      {address && (
        <Link href="#" onClick={linkPrevent} style={{ fontSize: size }}>
          dataliteracy@icloud.com
        </Link>
      )}
    </>
  )
}
export default Email