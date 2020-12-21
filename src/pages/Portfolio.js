import React from 'react';
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
                <h3></h3> {props.name}
              </li>
              <li>
                <p className="portfolioDescription"></p> {props.description}
              </li>
              <li>
                <p></p> {props.link}
              </li>
            </ul>
          </div>
          {/* The onClick method will invoke the removeFriends function passing through the value of props.id  */}
          <span onClick={() => props.removePortfolio(props.id)} className="remove">
          </span>
        </div>
      );
    }

export default Portfolio;