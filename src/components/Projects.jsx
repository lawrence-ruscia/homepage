import styles from '../assets/styles/Projects.module.css';
import ecommerce_400 from '../assets/images/e-commerce-400.jpg';
import ecommerce_800 from '../assets/images/e-commerce-800.jpg';
import ecommerce_1200 from '../assets/images/e-commerce-1200.jpg';
import ecommerce_1600 from '../assets/images/e-commerce-1600.jpg';
import data_visualization_400 from '../assets/images/data-visualization-400.jpg';
import data_visualization_800 from '../assets/images/data-visualization-800.jpg';
import data_visualization_1200 from '../assets/images/data-visualization-1200.jpg';
import data_visualization_1600 from '../assets/images/data-visualization-1600.jpg';

import { useBreakpoint } from '../utils/useBreakpoint';
import { ExternalLink } from 'lucide-react';
import { Github } from './Github.jsx';
import { ResponsiveImage } from './ResponsiveImage.jsx';

export const Projects = () => {
  const isMobile = useBreakpoint('(max-width: 768px)');
  return (
    <section id='projects' className={styles.projects}>
      <h2 className='section-title'>Projects</h2>
      <div className={styles.projectContainer}>
        <div className={styles.projectItem}>
          <div className={styles.content}>
            <div className={styles.description}>
              <h3>Enterprise E-commerce Platform</h3>
              <p>
                A high-performance e-commerce solution handling 100K+ daily
                transactions with real-time inventory and ML-powered
                recommendations.
              </p>
            </div>

            <div className={styles.technology}>
              <ul className={styles.frontend}>
                <p>Frontend</p>
                <li>Next.js Server Components</li>
                <li>Real-time Cart & Inventory</li>
                <li>Stripe Payment Integration</li>
                <li>PWA with Offline Support</li>
              </ul>
              <ul className={styles.backend}>
                <p>Backend</p>
                <li>Node.js Microservices</li>
                <li>Redis Caching Layer</li>
                <li>Kafka Event Streaming</li>
                <li>Elasticsearch Product Search</li>
              </ul>
              <ul className={styles.features}>
                <p>Key Features</p>
                <li>99.99% Uptime with Blue-Green Deployment</li>
                <li>300ms Average API Response Time</li>
                <li>45% Reduction in Infrastructure Costs</li>
              </ul>
            </div>
          </div>
          <div className={styles.preview}>
            <ResponsiveImage
              src={ecommerce_1600}
              srcSet={`
                ${ecommerce_400} 400w,
                ${ecommerce_800} 800w,
                ${ecommerce_1200} 1200w,
                ${ecommerce_1600} 1600w
              `}
              sizes='(min-width: 1024px) 50vw, 100vw'
            />

            <div className={styles.links}>
              <a
                href='#preview'
                className='cta'
                aria-label='View live demo'
                title='View live demo'
              >
                {isMobile ? (
                  <ExternalLink />
                ) : (
                  <>
                    <ExternalLink /> Live Demo
                  </>
                )}
              </a>
              <a
                href='#preview'
                className='secondaryBtn'
                aria-label='View code on GitHub'
                title='View code on GitHub'
              >
                {isMobile ? (
                  <Github color='var(--color-text-muted)' />
                ) : (
                  <>
                    <Github color='var(--color-text-muted)' /> View Code
                  </>
                )}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.projectItem}>
          <div className={styles.content}>
            <div className={styles.description}>
              <h3>Real-time Analytics Platform</h3>
              <p>
                A scalable analytics platform processing 1M+ events per minute
                with real-time dashboards and ML-powered insights.
              </p>
            </div>

            <div className={styles.technology}>
              <ul className={styles.frontend}>
                <p>Frontend</p>
                <li>Real-time Data Visualization</li>
                <li>Interactive Dashboards</li>
                <li>Custom Chart Components</li>
                <li>Data Export Tools</li>
              </ul>
              <ul className={styles.backend}>
                <p>Backend</p>
                <li>Apache Kafka Streams</li>
                <li>ClickHouse Analytics DB</li>
                <li>Python Data Processing</li>
                <li> Redis Time Series</li>
              </ul>
              <ul className={styles.features}>
                <p>Key Features</p>
                <li>1M+ Events/Minute Processing</li>
                <li>Sub-second Query Response</li>
                <li>99.99% Data Accuracy</li>
              </ul>
            </div>
          </div>
          <div className={styles.preview}>
            <ResponsiveImage
              src={data_visualization_1600}
              srcSet={`
                ${data_visualization_400} 400w,
                ${data_visualization_800} 800w,
                ${data_visualization_1200} 1200w,
                ${data_visualization_1600} 1600w
              `}
              sizes='(min-width: 1024px) 50vw, 100vw'
            />
            <div className={styles.links}>
              <a
                href='#preview'
                className='cta'
                aria-label='View live demo'
                title='View live demo'
              >
                {isMobile ? (
                  <ExternalLink />
                ) : (
                  <>
                    <ExternalLink /> Live Demo
                  </>
                )}
              </a>
              <a
                href='#preview'
                className='secondaryBtn'
                aria-label='View code on GitHub'
                title='View code on GitHub'
              >
                {isMobile ? (
                  <Github color='var(--color-text-muted)' />
                ) : (
                  <>
                    <Github color='var(--color-text-muted)' /> View Code
                  </>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
