import styles from '../assets/styles/Footer.module.css';
import { MapPin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Download } from 'lucide-react';
import { Github } from './Github';
import { Linkedin } from './Linkedin';
import { X } from './X';

export const Footer = () => {
  return (
    <footer id='contact' className={styles.footer}>
      <h2 className={styles.title}>Let's build something amazing</h2>
      <p className={styles.description}>
        I'm open to freelance work or full-time opportunities. Feel free to
        reach out!
      </p>

      <p className={styles.location}>
        <MapPin /> Metro Manila, Philippines
      </p>

      <div className={styles.links}>
        <a href='mailto:lawrenceruscia2004@gmail.com' className='cta-icon'>
          <Mail />
          Get in touch
        </a>

        <a href='#' className='secondaryBtn'>
          <Download />
          Download CV
        </a>
      </div>

      <ul className={styles.socials}>
        <a
          href='https://github.com/lawrence-ruscia'
          target='_blank'
          aria-label='View Github profile'
          title='View Github profile'
        >
          <Github className={styles.icon} />
        </a>
        <a
          href='#'
          target='_blank'
          aria-label='View Linkedin profile'
          title='View Linkedin profile'
        >
          <Linkedin className={styles.icon} />
        </a>
        <a
          href='#'
          target='_blank'
          aria-label='View X profile'
          title='View X profile'
        >
          <X className={styles.icon} />
        </a>
      </ul>
    </footer>
  );
};
