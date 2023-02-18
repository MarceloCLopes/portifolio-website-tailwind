import { useEffect, useState } from 'react'

import { Nav } from './Nav'
import { Socials } from './Socials'
import { NavMobile } from './NavMobile'
import logoImg from '../assets/img/logo.svg'

export const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  }, [])

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
      <div className='container mx-auto h-full flex items-center justify-between'>
        <a href='#'>
          <img src={logoImg} alt='Logo name' />
        </a>

        <div className='hidden lg:block'>
          <Nav />
        </div>

        <div className='hidden lg:block'>
          <Socials />
        </div>

        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  )
}
