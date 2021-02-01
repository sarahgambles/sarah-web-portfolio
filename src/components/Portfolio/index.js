import React from "react";
import Project from '../Project';


import avengersImage from '../../assets/portfolio/avengersassemble.png';
import overdeliverImage from '../../assets/portfolio/overdeliver.png';
import authorHubImage from '../../assets/portfolio/authorhub.png';
import foodFestImage from '../../assets/portfolio/foodfest.png';
import runBuddyImage from '../../assets/portfolio/runbuddy.png';
import weatherdashImage from '../../assets/portfolio/weatherdash.png';

function Portfolio() {
    
    const projects = [
        {
            name: "Overdeliver",
            id: 1, 
            bg: {
                backgroundImage: "url( " + overdeliverImage + ")"
            },
            skills: "CSS | Pug | Express",
            url: "https://shrouded-fortress-41826.herokuapp.com/"
        },
        {
            name: "AuthorHub",
            id: 2,
            bg: {
                backgroundImage: "url( " + authorHubImage + ")"
            },
            skills: "React | CSS | GraphQL",
            url: "https://vast-gorge-54301.herokuapp.com/"
        },
        {
            name: "Avengers Assemble",
            id: 3,
            bg: {
                backgroundImage: "url( " + avengersImage + ")"
            },
            skills: "CSS | JavaScript | JQuery | HTML",
            url: "https://jesseparent.github.io/avengersassembled/"
        },
        {
            name: "Run Buddy",
            id: 4,
            bg: {
                backgroundImage: "url( " + runBuddyImage + ")"
            },
            skills: "HTML | CSS | GitHub",
            url: "https://sarahgambles.github.io/run-buddy/"
        },
        {
            name: "Foodfest",
            id: 5,
            bg: {
                backgroundImage: "url( " + foodFestImage + ")"
            },
            skills: "Express | JavaScript | PWA",
            url: "https://sarahgambles.github.io/food-festival/"
        },
        {
            name: "Weather Dashboard",
            id: 6,
            bg: {
                backgroundImage: "url( " + weatherdashImage + ")"
            },
            skills: "JavaScript | JQuery",
            url: "https://sarahgambles.github.io/weather-dashboard/"
        },
    ];

    return (
        <section className="projectHeader">
            <article id="portfolio">
                <div className="portfolioTitle">
                    <h1>My Portfolio</h1>
                </div>
            <div className="gridContainer">
                {projects.map(project => (
                    <Project {...project}
                    key={project.id}
                    />
                ))}
            </div>
            </article>
        </section>
    );
};

export default Portfolio;