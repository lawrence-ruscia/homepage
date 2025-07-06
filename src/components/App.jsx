import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
export const App = () => {
  return (
    <div>
      <Header />
      <main id='main'>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
};
