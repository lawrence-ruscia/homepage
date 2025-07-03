import { Logo } from './Logo';
import { HeaderNav } from './HeaderNav';
import styles from '../assets/styles/Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} iconStyles={styles.icon} />
      <HeaderNav className={styles.nav} />
    </header>
  );
};
