import React from 'react';

function projectCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <a href={props.link}><img src={props.image} alt={props.name} onClick={props.link} /></a>
            </div>
            <div className="projectCardPortfolio">
                <ul>
                    <li>
                        {props.name}
                    </li>
                    <li>
                        Description: {props.description}
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default projectCard;