import React from './node_modules/react';
import './style.css';

// Props are passed through our functional component

function Portfolio(props) {

    return (
        <div className="card">
          <div className="img-container">
            <img alt={props.name} src={props.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong></strong> {props.name}
              </li>
              <li>
                <strong>Description</strong> {props.description}
              </li>
              <li>
                <strong></strong> {props.link}
              </li>
            </ul>
          </div>
          {/* The onClick method will invoke the removeFriends function passing through the value of props.id  */}
          <span onClick={() => props.removePortfolio(props.id)} className="remove">
            𝘅
          </span>
        </div>
      );
    }

export default Portfolio;