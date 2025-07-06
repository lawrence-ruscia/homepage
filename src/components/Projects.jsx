import styles from '../assets/styles/Projects.module.css';
import ecommerce from '../assets/images/preview-e-commerce.png';
import dataVisualization from '../assets/images/preview-data-visualization.png';
import { CodeXml, ExternalLink } from 'lucide-react';
export const Projects = () => {
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
            <img src={ecommerce} alt='' />

            <div className={styles.links}>
              <a href='#preview' className='cta'>
                <ExternalLink />
                Live Demo
              </a>
              <a href='#preview' className='secondaryBtn'>
                <CodeXml />
                View Code
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
            <img src={dataVisualization} alt='' />
            <div className={styles.links}>
              <a href='#preview' className='cta'>
                <ExternalLink />
                Live Demo
              </a>
              <a href='#preview' className='secondaryBtn'>
                <CodeXml />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
