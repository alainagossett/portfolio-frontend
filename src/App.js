import React from 'react';
import { Route, Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';

import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
return (
<div className='text-gray-400 bg-gray-900 body-font'>
  <Navbar />
  <Main />
  <Router>
    <Route exact path='/'>
      <Landing />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/contact'>
      <Contact />
    </Route>
    <Route path='/projects'>
      <Projects />
    </Route>
  </Router>
</div>
)
}

export default App;