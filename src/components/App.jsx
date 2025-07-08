import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Footer } from './Footer';
export const App = () => {
  return (
    <div>
      <Header />
      <main id='main'>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};
