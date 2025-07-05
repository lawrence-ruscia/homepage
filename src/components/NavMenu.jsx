import { Menu } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { useState } from 'react';
import styles from '../assets/styles/NavMenu.module.css';
export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <button
        id='navMenuBtn'
        onClick={handleMenuToggle}
        className={styles.menuBtn}
      >
        <Menu width='1.75rem' height='auto' />
      </button>
      <NavLinks menuOpen={menuOpen} handleMenuClose={handleMenuClose} />
    </>
  );
};
