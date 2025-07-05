import { Logo } from './Logo';
import { HeaderNav } from './HeaderNav';
import { useState } from 'react';
import styles from '../assets/styles/Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} iconStyles={styles.icon} />
      <HeaderNav isMobile='true' className={styles.nav} />
    </header>
  );
};
