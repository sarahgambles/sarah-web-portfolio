import React from 'react';

function Project(props) {
    return (
      <a href={props.url} target="_blank" rel="noopener noreferrer"><div className="work-item" style={props.bg}>
        <div className="portfolioLabel">
          <h3>
            {props.name}
          </h3>
          <h4>
            {props.skills}
          </h4>
        </div>
      </div></a>
    )
  }

export default Project;