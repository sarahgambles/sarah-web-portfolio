import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import './App.css';
import coverImage from "../../assets/cover/cover-image.png";

function App() {

  return (
    <Router>

    
    <div>
      <Nav
      
      ></Nav>
      
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} /> 
      <Route exact path="/resume" component={Resume} />

    </div>
    
    <div>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </div>
    <div>
      <footer>
        
      </footer>
    </div>
    </Router>
  );
}

export default App;
