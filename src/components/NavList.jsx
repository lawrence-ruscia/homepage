import styles from '../assets/styles/NavList.module.css';
import { useBreakpoint } from '../utils/useBreakpoint';
import { FolderCode, User, Wrench, Mail, FileDown } from 'lucide-react';
export const NavList = () => {
  const isMobile = useBreakpoint('(max-width: 768px)');

  return (
    <ul className={styles.navList}>
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
        <a href='#projects'>
          <FolderCode className={styles.navIcon} />
          Projects
        </a>
      </li>
      <li className={styles.navLink}>
        <a href='#contact'>
          <Mail className={styles.navIcon} />
          Contact
        </a>
      </li>
      <li className={styles.navLink}>
        <button
          className={`${isMobile ? styles.resume : 'cta-icon'}`}
          type='button'
        >
          <FileDown className={styles.navIcon} />
          Download CV
        </button>
      </li>
    </ul>
  );
};
