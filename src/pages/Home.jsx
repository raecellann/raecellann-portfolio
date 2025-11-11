import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import Switch from "../components/button";
import Skill from "../components/Skill";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope, FaFilePdf } from "react-icons/fa";
import darkSvg from "../assets/HELLO! I’M-darkmode.svg";
import lightSvg from "../assets/HELLO! I’M-lightmode.svg";
import galvezDarkSvg from "../assets/GALVEZ-darkmode.svg";
import galvezLightSvg from "../assets/GALVEZ-lightmode.svg";
import raecellLightSvg from "../assets/RAECELL-ANN-lightmode.svg";
import raecelldarkSvg from "../assets/RAECELL-ANN-darkmode.svg";
import profilePic from "../assets/picture.png"; // adjust path if needed
import minicellImage from "../assets/works/Minicell.png";
import eightEastImage from "../assets/works/8EAST.png";
import CommuniqueImage from "../assets/works/Communique.jpg";
import LuckymotoImage from "../assets/works/Lucky-moto.png";


const Home = () => {
  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem("theme") !== "light"
  );

  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    document.body.classList.toggle("light-mode", !newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleMouseMove = (e) => {
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -5; // Reduced sensitivity
    const rotateY = (x - centerX) / centerX * 5;
    img.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    const img = e.currentTarget;
    img.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
  };

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkTheme);
  }, [darkTheme]);

  return (
    <div className={`home-container ${darkTheme ? "light" : "dark"}`}>
      <div className="horizontal-divider"></div>
      <main className="main-content">
        <div className="left-section">
          <h3 className="intro">
            <img
              src={darkTheme ? lightSvg : darkSvg}
              alt="HELLO! I'M"
              className="theme-image"
            />
          </h3>
          <h1 className="name">
            <img
                src={darkTheme ? raecellLightSvg : raecelldarkSvg}
                alt="RAECELL"
                className="firstname-image"
              />
          </h1>
          <h2 className="lastname">
            <img
              src={darkTheme ? galvezLightSvg : galvezDarkSvg}
              alt="GALVEZ"
              className="lastname-image"
            />
          </h2>
          <p className="subtitle">
            A <span className="highlight">UI/UX Designer</span> and{" "}
            <span className="highlight">Web Developer</span>
          </p>
          <nav className="nav-links">
            <a href="#about">About Me</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
          </nav>
          <nav className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="mailto:example@email.com"><FaEnvelope /></a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><FaFilePdf /></a>
          </nav>
        </div>
        <div className="right-section">
        <Switch checked={darkTheme} onChange={(e) => setDarkTheme(e.target.checked)} />

        {/* ✅ Soft Skills Section */}
        <section className="soft-skills">
          <div className="skills-left">
            <h3>Soft Skills</h3>
            <div className="skills-container">
              <Skill text="#Creative" filled={true} />
              <Skill text="#Teamwork" filled={false} />
              <Skill text="#Adaptability" filled={false} />
              <Skill text="#Communication" filled={true} />
              <Skill text="#Attention to Detail" filled={true} />
              <Skill text="#Flexibility" filled={false} />
              <Skill text="#Time-Management" filled={true} />
            </div>
          </div>

          {/* ✅ Your right-side image */}
          <div className="skills-right">
          <img src={profilePic} alt="Profile" className="skills-photo" />
          </div>
        </section>
        <p className="skills-description">
          Passionate about collaboration and innovation. I enjoy creating meaningful
          digital experiences that balance creativity and functionality.
        </p>

        {/* Works Section */}
        <section id="works" className="works-section">
          <h3 className="works-title">Works</h3>
          <div className="works-divider"></div>

          <div className="works-card">
            <div className="works-image-container">
              <img
                src={minicellImage}
                alt="Minicell Project Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
              <h4 className="project-title">Minicell</h4>
              <p className="project-subtitle">
                E-Commerce Clothing Line Website
              </p>
            </div>
          </div>

          <div className="works-card">
            <div className="works-image-container">
              <img
                src={eightEastImage}
                alt="8EAST Project Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
              <h4 className="project-title">8Con - East</h4>
              <p className="project-subtitle">
                8Con Enrollment System
              </p>
            </div>
          </div>

          <div className="works-card">
            <div className="works-image-container">
              <img
                src={CommuniqueImage}
                alt="Project 3 Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
              <h4 className="project-title">Communiqué</h4>
              <p className="project-subtitle">
                Social Media Website
              </p>
            </div>
          </div>

          <div className="works-card">
            <div className="works-image-container">
              <img
                src={LuckymotoImage}
                alt="Project 4 Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
              <h4 className="project-title">Lucky Mo To</h4>
              <p className="project-subtitle">
                Minute Lotto Website
              </p>
            </div>
          </div>
        </section>


      </div>
      </main>
    </div>
  );
};

export default Home;
