import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import styles from './styles.module.scss'

function Navbar() {
  return (
    <div className={`${styles.navbar} mb-10`}>
      <div className='img m-auto align-middle'>
        <Image
          src='/esteban.jpeg'
          width={150}
          height={150}
          objectFit='cover'
          alt='Esteban Danilo Diaz Riascos' />
      </div>
      <div className='info'>
        <h1 className='md:text-5xl lg:text-8xl font-bold text-right'>
          Portafolio
        </h1>
        <h1 className='text-3xl font-bold text-right'>
          Esteban Danilo Diaz Riascos
        </h1>
        <h1 className='text-xl text-right'>
          stban94diaz@gmail.com
        </h1>
        <h1 className='text-xl text-right'>
          esteban.diaz@avaldigitallabs.com
        </h1>
        <div className='flex gap-3 justify-end'>
          <a href='https://github.com/stban94diaz' target='_blank' rel="noreferrer">
            <FaGithub className='cursor-pointer' size={30} />
          </a>
          <a href='https://twitter.com/stban94diaz' target='_blank' rel="noreferrer">
            <FaTwitter className='cursor-pointer' size={30} />
          </a>
          <a href='https://www.linkedin.com/in/esteban-danilo-diaz-riascos/' target='_blank' rel="noreferrer">
            <FaLinkedin className='cursor-pointer animate-bounce' color='#dc2626' size={30} />
          </a>
          <a href='https://platzi.com/p/stban94diazz/' target='_blank' rel="noreferrer">
            <Image
              className='cursor-pointer'
              src='/platzi.webp'
              width={30}
              height={30}
              alt='platzi' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
