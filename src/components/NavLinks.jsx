import styles from '../assets/styles/NavLinks.module.css';
import { X } from 'lucide-react';
import { NavList } from './NavList';
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
        <NavList />
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
