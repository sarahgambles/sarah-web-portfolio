import React, { useState } from "react";
import Wrapper from '../Wrapper';
import ProjectCard from '../ProjectCard';
import avengersImage from '../../assets/portfolio/avengersassemble.png';
import overdeliverImage from '../../assets/portfolio/overdeliver.png';
import authorHubImage from '../../assets/portfolio/authorhub.png';
import foodFestImage from '../../assets/portfolio/foodfest.png';
import runBuddyImage from '../../assets/portfolio/runbuddy.png';
import weatherdashImage from '../../assets/portfolio/weatherdash.png';

function Project() {
    const [projectList] = useState([
        {
            "name": "Overdeliver",
            "id": 1, 
            "image": overdeliverImage,
            "description": "Delivery ratings app where users can interact with each other, learn about new restaurants that deliver, and discover how a restaurant's delivery service transfers.",
            "link": "https://shrouded-fortress-41826.herokuapp.com/"
        },
        {
            "name": "AuthorHub",
            "id": 2,
            "image": authorHubImage,
            "description": "AuthorHub is a site for authors to share ideas and get feedback, as well as a place for editors to offer their skills and readers to read up and coming authors’ work. ",
            "link": "https://vast-gorge-54301.herokuapp.com/"
        },
        {
            "name": "Avengers Assemble",
            "id": 3,
            "image": avengersImage,
            "description": "Assemble your Avengers team to learn more about some of your favorite characters.",
            "link": "https://jesseparent.github.io/avengersassembled/"
        },
        {
            "name": "Run Buddy",
            "id": 4,
            "image": runBuddyImage,
            "description": "Run Buddy is a fitness website for customers to learn more about their favorite gym and workout experience.",
            "link": "https://sarahgambles.github.io/run-buddy/"
        },
        {
            "name": "Foodfest",
            "id": 5,
            "image": foodFestImage,
            "description": "This is an event website where users can purchase tickets, see the schedule, and learn more about the event.",
            "link": "https://sarahgambles.github.io/food-festival/"
        },
        {
            "name": "Weather Dashboard",
            "id": 6,
            "image": weatherdashImage,
            "description": "Weather Dashboard provides a way for users to search a city and explore the five-day forecast, including the wind, temperature, and UV index.",
            "link": "https://sarahgambles.github.io/weather-dashboard/"
        },
    ]);

    return (
        <section className="projectHeader">
            <div className="top">
                <h1 className="projectTitle">My Portfolio</h1>
            </div>
            <Wrapper>
                {projectList.map(project=>(
                    <ProjectCard
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    link={project.link}
                    />
                ))}
            </Wrapper>
        </section>
    );
};

export default Project;