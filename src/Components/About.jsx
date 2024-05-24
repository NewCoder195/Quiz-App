import React from "react";
import "./CSS/About.css"; // Importing About CSS file

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Our App</h1>
        <p>
          Discover the ultimate learning experience with our quizzes and
          tutorials.
        </p>
      </section>
      <section className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide an engaging and effective learning
            platform where users can enhance their knowledge and skills through
            interactive quizzes and comprehensive tutorials.
          </p>
        </div>
        <div className="about-text">
          <h2>Our Values</h2>
          <p>
            We value education, innovation, and user satisfaction. Our platform
            is designed to make learning fun and accessible for everyone,
            ensuring that users can achieve their educational goals.
          </p>
        </div>
        <div className="about-text">
          <h2>What We Offer</h2>
          <p>
            Our app offers a variety of quizzes across different subjects to
            test your knowledge and tutorials that provide explanations and
            learning materials. Whether you're a student looking to improve your
            grades or a lifelong learner eager to acquire new skills, our app is
            designed to meet your needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
