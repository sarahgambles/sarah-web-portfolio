import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import coverImage from "./assets/cover/cover-image.png";
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
    
    <div>
     
      <div className="container-fluid">
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </div>
    </div>
    
    <Footer></Footer>
    </Router>
  );
}

export default App;
