import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { useBreakpoint } from '../utils/useBreakpoint';
import styles from '../assets/styles/Header.module.css';

export const Header = () => {
  const isMobile = useBreakpoint('(min-width: 768px)');

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} iconStyles={styles.icon} />
      <NavMenu className={styles.nav} />
    </header>
  );
};
