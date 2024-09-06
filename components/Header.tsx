import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Header = ({children}:HeaderProps) => {
  return (
    <div className="header">
        <Link href='/' className="md:flex-1">
        <Image 
          src="/assets/icons/logo.svg"
          alt="Logo with name"
          width={120}
          height={32}
          className=" md:block"
        />
       
      </Link>
      {children}
    </div>
  )
}

export default Header