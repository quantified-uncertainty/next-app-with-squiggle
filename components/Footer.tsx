import packageJson from "../package.json"
import styles from "../styles/Home.module.css"
import Image from 'next/image'

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <a
          href="https://quantifieduncertainty.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/quri-logo-with-QURI-written-underneath.png" alt="QURI logo" width={72} height={72} />
        </a>
          v{packageJson.version}
      </footer>
  )
}
