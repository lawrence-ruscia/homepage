import styles from '../assets/styles/NavLinks.module.css';
import { X, FolderCode, User, Wrench, Mail } from 'lucide-react';

export const NavLinks = ({ menuOpen, handleMenuClose }) => {
  return (
    <>
      <nav
        id='navMenu'
        className={`${styles.nav} ${menuOpen ? styles.navShow : null}`}
      >
        <button
          id='navCloseBtn'
          onClick={handleMenuClose}
          className={styles.close}
        >
          <X width='1.75rem' height='auto' className={styles.closeIcon} />
        </button>
        <ul className={styles.navList}>
          <li className={styles.navLink}>
            <a href='#projects'>
              <FolderCode className={styles.navIcon} />
              Projects
            </a>
          </li>
          <li className={styles.navLink}>
            <a href='#about'>
              <User className={styles.navIcon} />
              About
            </a>
          </li>
          <li className={styles.navLink}>
            <a href='#skills'>
              <Wrench className={styles.navIcon} />
              Skills
            </a>
          </li>
          <li className={styles.navLink}>
            <a href='#contact'>
              <Mail className={styles.navIcon} />
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div
        id='overlay'
        onClick={handleMenuClose}
        className={`${styles.overlay} ${menuOpen ? styles.overlayShow : null}`}
        aria-hidden='true'
      ></div>
    </>
  );
};
