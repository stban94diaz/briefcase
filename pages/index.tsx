// Components
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Main from '../src/components/Main'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
