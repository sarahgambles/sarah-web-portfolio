import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import Footer from './components/Footer/index.js';

function App() {


  return (
    
    <Router>
    <Nav></Nav>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" render={(props) => (<Portfolio image={props.image}/>)} />
      <Route exact path="/contact" component={Contact} /> 
      
      </Switch>
    
    
    <Footer></Footer>
    </Router>
  );
}

export default App;
