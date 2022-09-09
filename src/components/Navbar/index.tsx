import Image from 'next/image'
import { FaGithub, FaTwitter } from 'react-icons/fa'

import styles from './styles.module.scss'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className='img m-auto align-middle'>
        <Image
          src='/esteban.jpeg'
          width={150}
          height={150}
          objectFit='cover'
          alt='Esteban Danilo Diaz Riascos' />
      </div>
      <div className='info'>
        <h1 className='text-8xl font-bold'>
          Portafolio
        </h1>
        <h1 className='text-3xl font-bold'>
          Esteban Danilo Diaz Riascos
        </h1>
        <h1 className='text-xl'>
          stban94diaz@gmail.com
        </h1>
        <h1 className='text-xl'>
          esteban.diaz@avaldigitallabs.com
        </h1>
        <div className='flex gap-3'>
          <a href='https://github.com/stban94diaz' target='_blank' rel="noreferrer">
            <FaGithub className='cursor-pointer' size={30} />
          </a>
          <a href='https://twitter.com/stban94diaz' target='_blank' rel="noreferrer">
            <FaTwitter className='cursor-pointer' size={30} />
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
