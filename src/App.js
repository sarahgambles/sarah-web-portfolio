import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import portfolio from './portfolio.json';
import './App.css';
import coverImage from "./assets/cover/cover-image.png";

function App() {
// using useState, declara a new state variable

const [portfolioList, setPortfolioList] = useState(portfolio);

const removePortfolio = id => {
  const newList = portfolioList.filter(portfolio => portfolio.id !== id);
  setPortfolioList(newList);
}
  return (
    <Router>

    
    <div>
      <Nav
      
      ></Nav>
      <div class="container-fluid">
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </div>
      
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} /> 
      <Route exact path="/resume" component={Resume} />

    </div>
    
    

    <Wrapper>
      <h1 className="title">PORTFOLIO</h1>
      {portfolioList.map(portfolio => (
        <Portfolio
        removePortfolio={removePortfolio}
        id={portfolio.id}
        key={portfolio.id}
        name={portfolio.name}
        image={portfolio.image}
        description={portfolio.description}
        link={portfolio.link}
        />
      ))}
    </Wrapper>
    <div>
      <footer>
      </footer>
    </div>
    </Router>
  );
}

export default App;
