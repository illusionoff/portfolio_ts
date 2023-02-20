import { About } from './components/About';
import { Contact } from './components/Contact';
import { Intro } from './components/Intro';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Education } from './components/education/Education';
import { Background } from './components/background/Background';
import { Resume } from './components/Resume';
import { WriteMe } from './components/writeMe/WriteMe';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <>
      <main>
        <section id='navbar'>
          <Navbar />
        </section>

        <section id='Intro'>
          <Intro />
        </section>

        <section id='Contact'>
          <Contact />
        </section>

        <section id='About'>
          <About />
        </section>

        <section id='Projects'>
          <Projects />
        </section>

        <section id='Skills'>
          <Skills />
        </section>

        <section id='Education'>
          <Education />
        </section>

        <section id='Background'>
          <Background />
        </section>

        <section id='Resume'>
          <Resume />
        </section>

        <section id='WriteMe' className='full-height'>
          <WriteMe />
        </section>
      </main>
    </>
  );
}

export default App;
