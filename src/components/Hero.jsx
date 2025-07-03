import styles from '@/assets/styles/Hero.module.css';
import avatar from '@/assets/images/avatar.svg';
export const Hero = () => {
  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <h1 className={styles.headline}>
          Hi, I'm Lawrence, a{' '}
          <span className={styles.highlight}>Full-Stack </span>
          Developer
        </h1>
        <p className={styles.description}>
          I build fast, accessible web apps using modern JavaScript technologies
          like React, Node.js, and PostgreSQL. I care about clean code,
          user-friendly design, and performance.
        </p>
        <a className={styles.cta} href='#'>
          View My Work
        </a>
      </header>
      <div className={styles.avatar} aria-hidden='true'>
        <img src={avatar} alt='Avatar' />
      </div>
    </section>
  );
};
