import { Menu } from 'lucide-react';
import { NavList } from './NavList';
import { NavLinks } from './NavLinks';
import { useState } from 'react';
import { useBreakpoint } from '../utils/useBreakpoint';
import styles from '../assets/styles/NavMenu.module.css';
export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = useBreakpoint('(max-width: 768px)');

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {isMobile ? (
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
      ) : (
        <nav>
          <NavList />
        </nav>
      )}
    </>
  );
};
