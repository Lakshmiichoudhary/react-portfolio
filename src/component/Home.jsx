import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  
  return (
    <div className="home-container">
      <div className="home-content">
        <h3 className="greeting">Hi, I am Lakshmi</h3>
        <h2 className="tagline">A Passionate MERN Stack Developer</h2>
        <button className="resume-button">Download Resume</button>
      </div>
      <div className="home-right">
      <p className="typing-effect">Committed to building seamless, engaging, and scalable applications by leveraging the full potential of the MERN stack.</p>;
      </div>
    </div>
  );
};

export default Home;
