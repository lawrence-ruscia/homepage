import styles from '@/assets/styles/Hero.module.css';
import avatar from '@/assets/images/avatar.svg';
export const Hero = () => {
  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <h1 className={styles.headline}>
          Lawrence
          <span className={styles.role}>Full-Stack Developer </span>
        </h1>
        <p className={styles.description}>
          Building Full-Stack Web Apps with React, Node.js, Express & PostgreSQL
        </p>
        <a className={`${styles.viewWorkBtn} cta`} href='#'>
          See What I’ve Built
        </a>
      </header>
      <div className={styles.avatar} aria-hidden='true'>
        <img src={avatar} alt='Avatar' />
      </div>
    </section>
  );
};
