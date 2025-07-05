import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';

export const App = () => {
  return (
    <div>
      <Header />
      <main id='main'>
        <Hero />
        <About />
      </main>
    </div>
  );
};
