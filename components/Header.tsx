import styles from "../styles/Header.module.css"
import Link from "next/link"

export default function Header() {

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>

      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/intro">
              <a>Introduction</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/team">
              <a>Team</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/squiggle-demo">
              <a>Squiggle demonstration</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/latex-demo">
              <a>Latex demonstration</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/worldview">
              <a>Worldview</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
