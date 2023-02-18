import { social } from '../data'

export const Socials = () => {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, index) => {
        return (
          <li className='flex justify-center text-accent' key={index}>
            <a className='text-base' href={item.href}>
              {item.icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
