import Link from 'next/link'; // Next.js uses `Link` for routing between pages
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link href="/" className={styles.navLink}>Home</Link></li>
        <li><Link href="/about" className={styles.navLink}>About</Link></li>
        <li><Link href="/projects" className={styles.navLink}>Projects</Link></li>
        <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
