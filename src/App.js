import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
return (
<div className='text-white bg-purple body-font'>
  <Navbar />
  <Switch className="main">
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
  <Footer />
</div>
)
}

export default App;