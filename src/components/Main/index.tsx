// Components
import Navbar from '../Navbar'
import Projects from '../Projects'

import styles from './styles.module.scss'

function Main() {
  return (
    <main className={styles.main}>
      <Navbar />
      <a href='/hv.pdf' target='_blank' rel="noreferrer"
        className='text-blue-600 visited:text-purple-600 divide-y mb-10 border-b-2 w-full text-center'>
        Descarga mi HV
      </a>
      <Projects />
    </main>
  )
}

export default Main