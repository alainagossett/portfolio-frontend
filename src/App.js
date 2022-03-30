import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
return (
<div className='text-gray-400 bg-gray-900 body-font'>
  <Navbar />
  <Switch>
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
  </Switch>
</div>
)
}

export default App;