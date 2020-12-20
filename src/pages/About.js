import React from 'react';
import profileImage from "../../assets/profile/profile-image.png";

function About() {
    return (
    <section className="my-5">
        <h1 id="about">About Me</h1>
        <img src={profileImage} className="my-2" style={{ width: "35%" }} alt="profile" />
        <div className="my-2">
            <p>
            I am a web developer experienced in html, CSS, JavaScript, SQL, and more.
                <br />
                <br />
                Currently, I am enrolled in the University of Utah Frontend developer
                coding bootcamp to hone and train these skills.
                <br />
                <br />
                Currently, I am working in product marketing and experienced in creating Facebook, Pinterest, Instagram, and Google Ads. 
                In my free time, I enjoy teaching and doing yoga, cooking, sewing, writing, and watching The Office.
            </p>
        </div>
    </section>
    );
}

export default About;