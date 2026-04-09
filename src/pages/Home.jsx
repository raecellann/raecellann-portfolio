import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import Switch from "../components/button";
import Skill from "../components/Skill";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope, FaFilePdf, FaBars, FaArrowUp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import darkSvg from "../assets/HELLO! I’M-darkmode.svg";
import lightSvg from "../assets/HELLO! I’M-lightmode.svg";
import galvezDarkSvg from "../assets/GALVEZ-darkmode.svg";
import galvezLightSvg from "../assets/GALVEZ-lightmode.svg";
import raecellLightSvg from "../assets/RAECELL-ANN-lightmode.svg";
import raecelldarkSvg from "../assets/RAECELL-ANN-darkmode.svg";
import profilePic from "../assets/picture.png"; // adjust path if needed
import minicellImage from "../assets/works/Minicell.png";
import minicell2Image from "../assets/works/Minicell2.png";
import minicell3Image from "../assets/works/Minicell3.png";
import eightEastImage from "../assets/works/8EAST.png";
import eightEast1Image from "../assets/works/8EAST1.png";
import eightEast2Image from "../assets/works/8EAST2.png";
import CommuniqueImage from "../assets/works/Communique.jpg";
import Communique1Image from "../assets/works/Communique1.png";
import Communique2Image from "../assets/works/Communique2.png";
import LuckymotoImage from "../assets/works/lucky-moto.png";
import Luckymoto1Image from "../assets/works/lucky-moto1.png";
import Luckymoto2Image from "../assets/works/lucky-moto2.png";
import InfonvaImage from "../assets/works/infonova.png";
import Infonova1Image from "../assets/works/infonova1.png";
import Infonova2Image from "../assets/works/infonova2.png";
import ImmaculearnImage from "../assets/works/Immaculearn.png";
import Immaculearn1 from "../assets/works/Immaculearn-1.png";
import Immaculearn2 from "../assets/works/Immaculearn-2.png";
import Immaculearn3 from "../assets/works/Immaculearn-3.png";
import CollabCanvasImage from "../assets/works/Collab-canvas.png";
import CollabCanvas1Image from "../assets/works/Collab-canvas1.png";
import FakeNewsDetectorImage from "../assets/works/Fake news-detector.png";
import FakeNewsDetector1Image from "../assets/works/Fake news detector1.png";
import FakeNewsDetector2Image from "../assets/works/Fake news-detector2.png";
import studyingGif from "../assets/studying.gif";
import resumeFile from "../assets/RAECELL ANN GALVEZ - RESUME.pdf";

const projects = [
  {
    title: "Minicell",
    subtitle: "E-Commerce Clothing Line Website",
    images: [minicellImage, minicell2Image, minicell3Image],
    link: "https://www.figma.com/proto/wLFVGNobTR4Opc2jWdT6vQ/SOFTENG-ECOMMERCE?node-id=0-1&t=3aUGIveq2vDZiEhy-1",
    github: "https://github.com/raecellann/minicell"
  },
  {
    title: "ImmacuLearn",
    subtitle: "Online Collaborative Application",
    images: [ImmaculearnImage, Immaculearn1, Immaculearn2, Immaculearn3],
    link: "https://www.figma.com/proto/zdDOXdyNRIojXS5bAb725s/Team-ImmacuLearn?node-id=0-1&t=vhIYtNIuboAWF2Cf-1",
    github: "https://github.com/raecellann/Immaculearn.git"
  },
  {
    title: "Communiqué",
    subtitle: "Social Media Website",
    images: [CommuniqueImage, Communique1Image, Communique2Image],
    link: "https://www.figma.com/proto/P8dPwhOEj1HgYpbAjT1P2M/COMMUNIQUE?node-id=0-1&t=BEEumZfzwUHuxOIi-1",
    github: "https://github.com/raecellann/Communique"
  },
  {
    title: "Lucky Mo To",
    subtitle: "Minute Lotto Website",
    images: [LuckymotoImage, Luckymoto1Image, Luckymoto2Image],
    link: "https://www.figma.com/proto/zWxTc3bit2i9Sgc4pQCIr7/LUCKY-MO-TO--MINUTE-LOTTO-?node-id=1-158&t=1kyReiH0NAOsX8OB-1",
    github: "https://github.com/raecellann/Lucky-Mo-To.git"
  },
  {
    title: "Infonova",
    subtitle: "Search Engine for Articles",
    images: [InfonvaImage, Infonova1Image, Infonova2Image],
    github: "https://github.com/raecellann/Infonova.git"
  },
  {
    title: "8Con - East",
    subtitle: "8Con Enrollment System",
    images: [eightEastImage, eightEast1Image, eightEast2Image]
  },
  {
    title: "Collaborative Canvas",
    subtitle: "Real-time Drawing Application",
    images: [CollabCanvasImage, CollabCanvas1Image],
    github: "https://github.com/raecellann/Collaborative-Canvas"
  },
  {
    title: "Fake News Detector",
    subtitle: "NLP-based News Classification System",
    images: [FakeNewsDetectorImage, FakeNewsDetector1Image, FakeNewsDetector2Image],
    github: "https://github.com/raecellann/NLP-Projects/tree/main/Fake%20News%20Detector"
  }
];

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem("theme") !== "light"
  );
  const [modalImages, setModalImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const aboutRef = useRef(null);
  
  // Email form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  
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

  const handleImageClick = (images, index = 0) => {
    setModalImages(images);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setModalImages(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === modalImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkTheme);
  }, [darkTheme]);

  // Handle scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to About section
  const scrollToAbout = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Scroll-reveal animation with direction awareness
  const lastScrollY = useRef(0);
  const scrollDirection = useRef('down');

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      scrollDirection.current = currentY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    // Set initial hidden state
    revealElements.forEach((el) => {
      el.classList.add('reveal-hidden-up');
    });

    const animating = new WeakSet();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          // Skip if mid-animation to prevent spam
          if (animating.has(el)) return;

          if (entry.isIntersecting) {
            animating.add(el);
            el.classList.remove('reveal-hidden-up', 'reveal-hidden-down');
            el.classList.add('reveal-visible');
            // Release lock after transition completes
            const onEnd = () => {
              animating.delete(el);
              el.removeEventListener('transitionend', onEnd);
            };
            el.addEventListener('transitionend', onEnd);
          } else {
            // Only reset if element is well outside the viewport
            const rect = el.getBoundingClientRect();
            const buffer = 60;
            const fullyAbove = rect.bottom < -buffer;
            const fullyBelow = rect.top > window.innerHeight + buffer;
            if (!fullyAbove && !fullyBelow) return;

            animating.add(el);
            el.classList.remove('reveal-visible');
            if (scrollDirection.current === 'down') {
              el.classList.add('reveal-hidden-up');
              el.classList.remove('reveal-hidden-down');
            } else {
              el.classList.add('reveal-hidden-down');
              el.classList.remove('reveal-hidden-up');
            }
            const onEnd = () => {
              animating.delete(el);
              el.removeEventListener('transitionend', onEnd);
            };
            el.addEventListener('transitionend', onEnd);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    
    if (!name.trim()) {
      setFormStatus('Please enter your name');
      return false;
    }
    
    if (!email.trim()) {
      setFormStatus('Please enter your email');
      return false;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus('Please enter a valid email address');
      return false;
    }
    
    if (!subject.trim()) {
      setFormStatus('Please enter a subject');
      return false;
    }
    
    if (!message.trim()) {
      setFormStatus('Please enter your message');
      return false;
    }
    
    if (message.trim().length < 10) {
      setFormStatus('Message must be at least 10 characters long');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }
    
    setFormStatus('Sending...');
    
    try {
      // EmailJS configuration - you'll need to replace these with your actual EmailJS credentials
      const serviceId = 'service_9rvguc2'; // Your EmailJS service ID
      const templateId = 'template_79mdhza'; // Your EmailJS template ID
      const publicKey = 'tx926UcL2Oyd1ZYFo'; // Your EmailJS public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'raecellanndomingogalvez@gmail.com' // Your actual email address
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      if (response.status === 200) {
        setFormStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
      
      // Clear status after 3 seconds
      setTimeout(() => setFormStatus(''), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      // Fallback to mailto link if EmailJS fails
      setFormStatus('Opening email client...');
      const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  return (
    <div className={`home-container ${darkTheme ? "light" : "dark"}`}>
      <div className="horizontal-divider"></div>
      <div className="mobile-header">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
        <div className="mobile-switch">
          <Switch checked={darkTheme} onChange={(e) => setDarkTheme(e.target.checked)} />
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <a href="#about" onClick={(e) => { scrollToAbout(e); setMenuOpen(false); }}>About Me</a>
            <a href="#works" onClick={() => setMenuOpen(false)}>Works</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
      <main className="main-content">
        <div className="left-section">
          <h3 ref={aboutRef} className="intro">
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
          <img src={profilePic} alt="Profile" className="skills-photo" />
          <p className="subtitle">
            A <span className="highlight">UI/UX Designer</span> and{" "}
            <span className="highlight">Web Developer</span>
          </p>
          <nav className="nav-links">
            <a href="#about" onClick={scrollToAbout}>About Me</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
          </nav>
          <nav className="social-links">
            <a href="https://www.facebook.com/Yeshiii.amiii/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://github.com/raecellann" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/raecell-ann-galvez-03b435359/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="mailto:raecellanndomingogalvez@gmail.com"><FaEnvelope /></a>
            <a href={resumeFile} target="_blank" rel="noopener noreferrer"><FaFilePdf /></a>
          </nav>
          
          {/* Personal Information Section */}
          <div id="about" className="personal-info reveal">
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Philippines</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status</span>
              <span className="info-value">Available for work</span>
            </div>
            <div className="info-item">
              <span className="info-label">Experience</span>
              <span className="info-value">Internship & School Projects</span>
            </div>
            <div className="info-item">
              <span className="info-label">Specialty</span>
              <span className="info-value">UI/UX Design</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="desktop-switch">
            <Switch checked={darkTheme} onChange={(e) => setDarkTheme(e.target.checked)} />
          </div>
          <section className="soft-skills reveal">
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

            <div className="skills-right">
              <img src={profilePic} alt="Profile" className="skills-photo" />
            </div>
          </section>
          <div className="description-container reveal">
            <p className="skills-description">
              I'm a Computer Science graduate passionate about building clean, user-friendly digital experiences. I specialize in front-end development and UI/UX design, turning ideas into functional and visually engaging web applications using modern tools like React, JavaScript, and Figma.
            </p>
            <p className="skills-description">
              I enjoy combining creativity with problem-solving—whether it's developing responsive websites, designing intuitive interfaces, or using data and AI tools to improve efficiency. I'm always exploring new technologies and continuously refining my skills to create meaningful and impactful digital solutions.
            </p>
          </div>

          {/* Works Section */}
          <section id="works" className="works-section reveal">
            <h3 className="works-title">Works</h3>
            <div className="works-divider"></div>

          <div className="works-card reveal">
            <div className="works-image-container">
              <img
                src={minicellImage}
                alt="Minicell Project Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClick(projects[0].images)}
              />
              <div className="project-links">
                {projects[0].link ? (
                  <a 
                    href={projects[0].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    <h4 className="project-title">Minicell</h4>
                  </a>
                ) : (
                  <h4 className="project-title">Minicell</h4>
                )}
                {projects[0].github && (
                  <a 
                    href={projects[0].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
              <p className="project-subtitle">
                E-Commerce Clothing Line Website
              </p>
            </div>
          </div>

          <div className="works-card reveal">
            <div className="works-image-container">
              <img
                src={ImmaculearnImage}
                alt="ImmacuLearn Project Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClick(projects[1].images)}
              />
              <div className="project-links">
                {projects[1].link ? (
                  <a 
                    href={projects[1].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    <h4 className="project-title">ImmacuLearn</h4>
                  </a>
                ) : (
                  <h4 className="project-title">ImmacuLearn</h4>
                )}
                {projects[1].github && (
                  <a 
                    href={projects[1].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
              <p className="project-subtitle">
                Online Collaborative Application
              </p>
            </div>
          </div>

          <div className="works-card reveal">
            <div className="works-image-container">
              <img
                src={CommuniqueImage}
                alt="Project 3 Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClick(projects[2].images)}
              />
              <div className="project-links">
                {projects[2].link ? (
                  <a 
                    href={projects[2].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    <h4 className="project-title">Communiqué</h4>
                  </a>
                ) : (
                  <h4 className="project-title">Communiqué</h4>
                )}
                {projects[2].github && (
                  <a 
                    href={projects[2].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
              <p className="project-subtitle">
                Social Media Website
              </p>
            </div>
          </div>

          <div className="works-card reveal">
            <div className="works-image-container">
              <img
                src={LuckymotoImage}
                alt="Lucky Mo To Project Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClick(projects[3].images)}
              />
              <div className="project-links">
                {projects[3].link ? (
                  <a 
                    href={projects[3].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    <h4 className="project-title">Lucky Mo To</h4>
                  </a>
                ) : (
                  <h4 className="project-title">Lucky Mo To</h4>
                )}
                {projects[3].github && (
                  <a 
                    href={projects[3].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
              <p className="project-subtitle">
                Minute Lotto Website
              </p>
            </div>
          </div>
        </section>
        <section id="works2" className="works_small_card">
          <div className="works-card2 reveal">
            <div className="works-image-container2">
              <img
                src={InfonvaImage}
                alt="Infonova Project Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClick(projects[4].images)}
              />
              <div className="project-links">
                {projects[4].link ? (
                  <a 
                    href={projects[4].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    <h4 className="project-title1">Infonova</h4>
                  </a>
                ) : (
                  <h4 className="project-title1">Infonova</h4>
                )}
                {projects[4].github && (
                  <a 
                    href={projects[4].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
              <p className="project-subtitle1">
                Search Engine for Articles
              </p>
            </div>
          </div>
          <div className="works-card2 reveal">
            <div className="works-image-container2">
              <img
                src={eightEastImage}
                alt="8Con East Project Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClick(projects[5].images)}
              />
              <h4 className="project-title1">8Con - East</h4>
              <p className="project-subtitle1">
                8Con Enrollment System
              </p>
            </div>
          </div>
        </section>

        <section id="works3" className="works_small_card works_centered_row">
          <div className="works-card2 reveal">
            <div className="works-image-container2">
              <img
                src={CollabCanvasImage}
                alt="Collaborative Canvas Project Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClick(projects[6].images)}
              />
              <div className="project-links">
                {projects[6].github ? (
                  <a 
                    href={projects[6].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    <h4 className="project-title1">Collaborative Canvas</h4>
                  </a>
                ) : (
                  <h4 className="project-title1">Collaborative Canvas</h4>
                )}
                {projects[6].github && (
                  <a 
                    href={projects[6].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
              <p className="project-subtitle1">
                Real-time Drawing Application
              </p>
            </div>
          </div>
          <div className="works-card2 reveal">
            <div className="works-image-container2">
              <img
                src={FakeNewsDetectorImage}
                alt="Fake News Detector Project Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClick(projects[7].images)}
              />
              <div className="project-links">
                {projects[7].github ? (
                  <a 
                    href={projects[7].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    <h4 className="project-title1">Fake News Detector</h4>
                  </a>
                ) : (
                  <h4 className="project-title1">Fake News Detector</h4>
                )}
                {projects[7].github && (
                  <a 
                    href={projects[7].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
              <p className="project-subtitle1">
                NLP-based News Classification System
              </p>
            </div>
          </div>
        </section>

      </div>
      </main>

      {/* Contact Section - Full Width */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-left reveal">
            <h3 className="contact-title">Let's build something.</h3>
            <p className="contact-subtitle">Feel free to reach out for collaborations, opportunities, or just a friendly hello!</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="form-textarea"
                />
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
              {formStatus && (
                <div className={`form-status ${formStatus.includes('successfully') ? 'success' : formStatus.includes('Please') || formStatus.includes('Failed') || formStatus.includes('valid') ? 'error' : 'sending'}`}>
                  {formStatus}
                </div>
              )}
            </form>
          </div>
          
          <div className="contact-right">
            {/* Nahida-style Section */}
            <div className="nahida-contact-section">
              {/* GIF as full background */}
              <img 
                src={studyingGif} 
                alt="Studying animation" 
                className="nahida-contact-gif-bg"
              />
              {/* Dark overlay for readability */}
              <div className="nahida-contact-overlay" />
              {/* Text content on top */}
              <div className="nahida-contact-text">
                <p className="nahida-contact-message">
                  Something on your mind again? Let's work through it together. Two heads are better than one
                </p>
                <p className="nahida-contact-signature">
                  - Nahida
                </p>
              </div>
            </div>
            
            <div className="contact-info reveal">
              <h4>Get in Touch</h4>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:raecellanndomingogalvez@gmail.com">raecellanndomingogalvez@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaGithub className="contact-icon" />
                <a href="https://github.com/raecellann" target="_blank" rel="noopener noreferrer">github.com/raecellann</a>
              </div>
              <div className="contact-item">
                <FaLinkedinIn className="contact-icon" />
                <a href="https://www.linkedin.com/in/raecell-ann-galvez-03b435359/" target="_blank" rel="noopener noreferrer">linkedin.com/in/raecell-ann-galvez-03b435359/</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for displaying enlarged image */}
      {modalImages && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img 
              src={modalImages[currentImageIndex]} 
              alt="Enlarged Project Preview" 
              className={`modal-image ${isTransitioning ? 'transitioning' : ''}`} 
            />
            <button className="modal-close" onClick={closeModal}>×</button>
            {modalImages.length > 1 && (
              <>
                <button
                  className="modal-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  &lt;
                </button>

                <button
                className="modal-next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                &gt;
              </button>              </>
            )}
          </div>
        </div>
      )}
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          className="back-to-top" 
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;