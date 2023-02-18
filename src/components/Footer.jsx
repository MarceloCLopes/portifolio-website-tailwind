import { social } from '../data'
import logoImg from '../assets/img/logo.svg'

export const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item
              return (
                <a href={href} key={index} className='text-accent text-base'>
                  {icon}
                </a>
              )
            })}
          </div>

          <div>
            <img src={logoImg} alt='logo' />
          </div>

          <p>&copy; 2023 Marcelo Lopes - Web developer</p>
        </div>
      </div>
    </footer>
  )
}
