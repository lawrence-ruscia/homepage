import styles from '../assets/styles/Skills.module.css';

import { Monitor, Server, Hammer } from 'lucide-react';

export const Skills = () => {
  return (
    <section id='skills' className={styles.skills}>
      <h2 className='section-title'>Skills</h2>
      <div className={styles.content}>
        <div className={styles.grid}>
          <h3 className={styles.heading}>
            <Monitor />
            Frontend Development
          </h3>
          <ul className={styles.skillList}>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Vite</li>
          </ul>
        </div>

        <div className={styles.grid}>
          <h3 className={styles.heading}>
            <Server />
            Backend Development
          </h3>
          <ul className={styles.skillList}>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
          </ul>
        </div>

        <div className={styles.grid}>
          <h3 className={styles.heading}>
            <Hammer />
            Tools & Version Control
          </h3>
          <ul className={styles.skillList}>
            <li>Git</li>
            <li>Github</li>
            <li>Vercel</li>
            <li>Jest</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
