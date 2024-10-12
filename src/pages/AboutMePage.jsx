
import React from "react";
import '../styles/About.css';
import aboutMeImage from '../assets/aboutme.jpg';

 function AboutPage() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={aboutMeImage} alt="About Me" />
      </div>

      <div className="about-content">
        <h2 className="heading">About Me </h2>
        <h3>Web Developer</h3>
        <p>Nice to meet you! My name is Julienne and I am an aspiring full stack web developer. I am also interested in graphic design and UI/UX design. I was born in Belize and moved the United States when I was eight years old. I am new to the tech industry and looking forward to learning new things! </p>
      
      </div>
      <a href="https://docs.google.com/document/d/1s3rTxkAxYEGnGXW60GKdj9qJkR2rrJU_-CL5cgodq5s/edit?usp=sharing">View Resume</a>
    </section>
  );
}

export default AboutPage;