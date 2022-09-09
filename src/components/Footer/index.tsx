import styles from './styles.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href='https://github.com/stban94diaz'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by Esteban Diaz
      </a>
    </footer>
  )
}

export default Footer