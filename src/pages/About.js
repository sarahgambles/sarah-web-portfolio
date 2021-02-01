import React from 'react';
import profileImage from "../assets/profile/profile-image.png";
import coverImage from "../assets/cover/cover-image.png";

function About() {
    return (
        <section className="aboutMe">
        <div>
     
      <div className="container-fluid">
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </div>
    </div>
    
        <h1 id="about">ABOUT ME</h1>
        <img src={profileImage} className="aboutImg" style={{ width: "35%" }} alt="profile" />
        <div>
            <p className="aboutDescription text-right">
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