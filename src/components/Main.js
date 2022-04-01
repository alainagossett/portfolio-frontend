import { Switch } from 'react-router-dom'

import Landing from '../pages/Landing';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';

function Main() {
  return (
  <main >
  <Landing />
  <About />
  <Projects />
  <Contact />
  </main>
  )
}

export default Main;
