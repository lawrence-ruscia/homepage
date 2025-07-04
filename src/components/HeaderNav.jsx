import { Menu } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { useState } from 'react';
export const HeaderNav = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <button id='navMenuBtn' onClick={handleMenuToggle} className={className}>
        <Menu width='1.75rem' height='auto' />
      </button>
      <NavLinks menuOpen={menuOpen} handleMenuClose={handleMenuClose} />
    </>
  );
};
