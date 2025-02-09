import React, { useEffect, useRef } from 'react';
import './Home.css'; 
import Typed from "typed.js"

const Home = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const option = {
      strings:["Welcome to my Profile","Hi, I am Lakshmi","A Passionate MERN Stack Developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed = new Typed(typedRef.current,option)

    return () => {
      typed.destroy()
    }
  },[])

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Lakshmi_Resume.pdf";
    link.download = "Lakshmi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="home-container">
      <div className="home-content"
        data-aos="fade-right" 
        data-aos-duration="1000">
        <h3 className="greeting"  ref={typedRef}></h3>
        <button className="resume-button" onClick={handleDownload}>Download Resume</button>
      </div>
      <div className="home-right"
      data-aos="fade-left" 
      data-aos-duration="1000">
      <p className="typing-effect">
      I specialize in building responsive and user-friendly web applications using React.js, Node.js, Express.js, 
      and MongoDB. My experience includes developing full-stack projects, implementing authentication, and optimizing performance. 
      I enjoy solving challenges, learning new technologies, and creating seamless digital experiences
      </p>
      </div>
    </div>
  );
};

export default Home;
