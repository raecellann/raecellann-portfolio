import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import Switch from "../components/button";
import Skill from "../components/Skill";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope, FaFilePdf, FaArrowUp, FaBars, FaTimes } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import darkSvg from "../assets/HELLO! I’M-darkmode.svg";
import lightSvg from "../assets/HELLO! I’M-lightmode.svg";
import galvezDarkSvg from "../assets/GALVEZ-darkmode.svg";
import galvezLightSvg from "../assets/GALVEZ-lightmode.svg";
import raecellLightSvg from "../assets/RAECELL-ANN-lightmode.svg";
import raecelldarkSvg from "../assets/RAECELL-ANN-darkmode.svg";
import profilePic from "../assets/picture.png"; // adjust path if needed
const minicellImage = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228809/Minicell_y05aip.png";
const minicell2Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228810/Minicell2_ovpfyn.png";
const minicell3Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228810/Minicell3_m7mzs5.png";
const eightEastImage = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228809/8EAST_rmlkub.png";
const eightEast1Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228810/8EAST1_d7gvyi.png";
const eightEast2Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228809/8EAST2_zxalho.png";
const CommuniqueImage = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228810/Communique_kupbzy.jpg";
const Communique1Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228810/Communique1_bcpid8.png";
const Communique2Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228810/Communique2_piw3vh.png";
const LuckymotoImage = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228808/lucky-moto_t0ltey.png";
const Luckymoto1Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228809/lucky-moto1_rnog12.png";
const Luckymoto2Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228809/lucky-moto2_umxccw.png";
const Luckymoto3Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228809/lucky-moto3_umxccw.png";
const InfonvaImage = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228807/infonova_yrqniw.png";
const Infonova1Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228808/infonova1_fo80je.png";
const Infonova2Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228809/infonova2_nautnz.png";
const ImmaculearnImage = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228807/Immaculearn_z3qdqk.png";
const Immaculearn1 = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228810/Immaculearn-1_fyuuaa.png";
const Immaculearn2 = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228811/Immaculearn-2_lmuroj.png";
const Immaculearn3 = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228808/Immaculearn-3_ju9rgg.png";
const CollabCanvasImage = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228810/Collab-canvas_pgbbkq.png";
const CollabCanvas1Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228810/Collab-canvas1_skyiu9.png";
const FakeNewsDetectorImage = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228807/Fake_news-detector_ha16rj.png";
const FakeNewsDetector1Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228808/Fake_news-detector1_oik4lf.png";
const FakeNewsDetector2Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228811/Fake_news-detector2_vq5dio.png";
import studyingGif from "../assets/studying.gif";
import chatgptIcon from "../assets/chatgpt-icon.png";
import newYork1Image from "../assets/works/new-york1.png";
import newYork2Image from "../assets/works/new-york2.png";
const jejemonImage = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228808/jejemon_tlsppc.png";
const jejemon1Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228808/jejemon1_exf76r.png";
const jejemon2Image = "https://res.cloudinary.com/diws5bcu6/image/upload/v1776228808/jejemon2_clkmo5.png";
import cursorIcon from "../assets/cursor-icon.png";
import geminiIcon from "../assets/gemini-icon.png";
import windsurfIcon from "../assets/windsurf-icon.png";
import claudeaiIcon from "../assets/claudeai-icon.webp";
import blackboxIcon from "../assets/blackbox-icon.png";

const projects = [
  {
    title: "Minicell",
    subtitle: "E-Commerce Clothing Line Website",
    description: "A modern e-commerce platform for clothing sales with user authentication, shopping cart, and payment integration.",
    technologies: ["Node.js", "MySQL", "Figma", "HTML", "CSS", "JavaScript", "Bootstrap", "Vite"],
    images: [minicellImage, minicell2Image, minicell3Image],
    link: "https://www.figma.com/proto/wLFVGNobTR4Opc2jWdT6vQ/SOFTENG-ECOMMERCE?node-id=0-1&t=3aUGIveq2vDZiEhy-1",
    github: "https://github.com/raecellann/minicell"
  },
  {
    title: "ImmacuLearn",
    subtitle: "Online Collaborative Application",
    description: "An educational platform enabling real-time collaboration between students and teachers with interactive features.",
    technologies: ["ReactJS", "Supabase", "MySQL", "Socket.io", "Figma", "Vite"],
    images: [ImmaculearnImage, Immaculearn1, Immaculearn2, Immaculearn3],
    link: "https://www.figma.com/proto/zdDOXdyNRIojXS5bAb725s/Team-ImmacuLearn?node-id=0-1&t=vhIYtNIuboAWF2Cf-1",
    github: "https://github.com/raecellann/Immaculearn.git"
  },
  {
    title: "Communiqué",
    subtitle: "Social Media Website",
    description: "A social networking platform with posting, commenting, and real-time messaging capabilities.",
    technologies: ["ReactJS", "Node.js", "MySQL", "Socket.io", "HTML", "CSS", "JavaScript", "Vite"],
    images: [CommuniqueImage, Communique1Image, Communique2Image],
    link: "https://www.figma.com/proto/P8dPwhOEj1HgYpbAjT1P2M/COMMUNIQUE?node-id=0-1&t=BEEumZfzwUHuxOIi-1",
    github: "https://github.com/raecellann/Communique"
  },
  {
    title: "Lucky Mo To",
    subtitle: "Minute Lotto Website",
    description: "A lottery gaming platform with automated number generation and user account management.",
    technologies: ["ReactJS", "HTML", "CSS", "Socket.io", "Dockerfile", "Vite"],
    images: [LuckymotoImage, Luckymoto1Image, Luckymoto2Image, Luckymoto3Image],
    link: "https://www.figma.com/proto/zWxTc3bit2i9Sgc4pQCIr7/LUCKY-MO-TO--MINUTE-LOTTO-?node-id=1-158&t=1kyReiH0NAOsX8OB-1",
    github: "https://github.com/raecellann/Lucky-Mo-To.git"
  },
  {
    title: "Infonova",
    subtitle: "Search Engine for Articles",
    description: "A specialized search engine for finding and categorizing academic and research articles.",
    technologies: ["Python", "React", "HTML", "CSS", "JavaScript", "Bootstrap", "Vite"],
    images: [InfonvaImage, Infonova1Image, Infonova2Image],
    github: "https://github.com/raecellann/Infonova.git"
  },
  {
    title: "Collaborative Canvas",
    subtitle: "Real-time Drawing Application",
    description: "A collaborative drawing tool where multiple users can create art together in real-time.",
    technologies: ["HTML", "CSS", "JavaScript", "Socket.io", "Vite"],
    images: [CollabCanvasImage, CollabCanvas1Image],
    github: "https://github.com/raecellann/Collaborative-Canvas"
  },
  {
    title: "Fake News Detector",
    subtitle: "NLP-based News Classification System",
    description: "An AI-powered system that analyzes and classifies news articles as real or fake using machine learning.",
    technologies: ["Python", "NLTK", "Pickle", "HTML", "CSS", "JavaScript"],
    images: [FakeNewsDetectorImage, FakeNewsDetector1Image, FakeNewsDetector2Image],
    github: "https://github.com/raecellann/NLP-Projects/tree/main/Fake%20News%20Detector"
  },
  {
    title: "New York Times Clone",
    subtitle: "News Website Replica",
    description: "A responsive news website clone featuring modern design, article categorization, and dynamic content management.",
    technologies: ["JavaScript", "HTML", "CSS"],
    images: [newYork1Image, newYork2Image],
    github: "https://github.com/raecellann/new-york-times_clone/tree/main"
  },
  {
    title: "Jejemon Translator",
    subtitle: "Text Translation Tool",
    description: "A fun translation tool that converts regular text to Jejemon language and vice versa with real-time conversion.",
    technologies: ["Python", "Tkinter"],
    images: [jejemonImage, jejemon1Image, jejemon2Image],
    github: "https://github.com/raecellann/NLP-Projects/tree/main/Jejemon%20Translator"
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
  const [currentSkillCard, setCurrentSkillCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const aboutRef = useRef(null);
  const skillsGridRef = useRef(null);
  
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
    const rotateX = (y - centerY) / centerY * -2; // Further reduced sensitivity
    const rotateY = (x - centerX) / centerX * 2;
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

  // Smooth scroll to element
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = document.querySelector('.fixed-navbar')?.offsetHeight || 0;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

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
    smoothScrollTo('about');
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

  // Mobile detection and sliding card functions
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSkillCard = (index) => {
    if (skillsGridRef.current) {
      const cardElement = skillsGridRef.current.children[index];
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const scrollPosition = index * cardWidth;
        console.log('Mobile Slider Debug:', {
          targetIndex: index,
          cardWidth,
          scrollPosition,
          totalCards: skillsGridRef.current.children.length
        });
        skillsGridRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
        setCurrentSkillCard(index);
      }
    }
  };

  const nextSkillCard = () => {
    const maxCards = 5; // Fixed: 5 skill categories
    const nextIndex = currentSkillCard >= maxCards - 1 ? 0 : currentSkillCard + 1;
    console.log('Mobile Slider Debug: Next card', nextIndex);
    scrollToSkillCard(nextIndex);
  };

  const prevSkillCard = () => {
    const maxCards = 5; // Fixed: 5 skill categories
    const prevIndex = currentSkillCard === 0 ? maxCards - 1 : currentSkillCard - 1;
    scrollToSkillCard(prevIndex);
  };

  // Handle scroll to update current card
  useEffect(() => {
    const handleScroll = () => {
      if (skillsGridRef.current && isMobile) {
        const scrollLeft = skillsGridRef.current.scrollLeft;
        const cardWidth = skillsGridRef.current.children[0]?.offsetWidth || 0;
        if (cardWidth > 0) {
          const currentIndex = Math.round(scrollLeft / cardWidth);
          setCurrentSkillCard(Math.max(0, Math.min(4, currentIndex)));
        }
      }
    };

    const skillsGrid = skillsGridRef.current;
    if (skillsGrid) {
      skillsGrid.addEventListener('scroll', handleScroll);
      return () => skillsGrid.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  // Touch/swipe support
  useEffect(() => {
    if (!isMobile || !skillsGridRef.current) return;

    let startX = 0;
    let isDragging = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      if (!isDragging) return;
      isDragging = false;
      
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          nextSkillCard(); // Swipe left - next card
        } else {
          prevSkillCard(); // Swipe right - previous card
        }
      }
    };

    const skillsGrid = skillsGridRef.current;
    skillsGrid.addEventListener('touchstart', handleTouchStart, { passive: true });
    skillsGrid.addEventListener('touchmove', handleTouchMove, { passive: false });
    skillsGrid.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      skillsGrid.removeEventListener('touchstart', handleTouchStart);
      skillsGrid.removeEventListener('touchmove', handleTouchMove);
      skillsGrid.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, currentSkillCard]);

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
    {/* Fixed Navbar */}
    <header className="fixed-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
        </div>
        <nav className="navbar-nav">
          <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('about'); }}>About Me</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); smoothScrollTo('experience'); }}>Experience</a>
          <a href="#works" onClick={(e) => { e.preventDefault(); smoothScrollTo('works'); }}>Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo('contact'); }}>Contact</a>
        </nav>
        <div className="navbar-right">
          <div className="navbar-switch">
            <Switch checked={darkTheme} onChange={(e) => setDarkTheme(e.target.checked)} />
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>

    <div className="horizontal-divider"></div>
    {menuOpen && (
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
        <nav className="mobile-nav">
          <a href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo('about'); setMenuOpen(false); }}>About Me</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); smoothScrollTo('experience'); setMenuOpen(false); }}>Experience</a>
          <a href="#works" onClick={(e) => { e.preventDefault(); smoothScrollTo('works'); setMenuOpen(false); }}>Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Resume</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo('contact'); setMenuOpen(false); }}>Contact</a>
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
          <span className="highlight">Junior Front-End Web Developer</span>
        </p>
        <nav className="social-links">
          <a href="https://www.facebook.com/Yeshiii.amiii/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://github.com/raecellann" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/raecell-ann-galvez-03b435359/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="mailto:raecellanndomingogalvez@gmail.com"><FaEnvelope /></a>
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
        <section className="technical-skills reveal">
          <h3 className="technical-skills-title">Technical Skills</h3>
          <div className="technical-skills-grid">
            <div className="skill-category">
              <h4 className="category-title">Frontend</h4>
              <div className="category-skills">
                <div className="skill-item">
                  <i className="fab fa-html5 skill-icon"></i>
                  <span>HTML</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-css3-alt skill-icon"></i>
                  <span>CSS</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-js skill-icon"></i>
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-react skill-icon"></i>
                  <span>ReactJS</span>
                </div>
              </div>
              <p className="category-description">
                Building responsive and interactive user interfaces with modern web technologies
              </p>
            </div>

            <div className="skill-category">
              <h4 className="category-title">Backend</h4>
              <div className="category-skills">
                <div className="skill-item">
                  <i className="fab fa-node-js skill-icon"></i>
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-python skill-icon"></i>
                  <span>Python</span>
                </div>
              </div>
              <p className="category-description">
                Developing server-side logic and APIs for robust web applications
              </p>
            </div>

            <div className="skill-category">
              <h4 className="category-title">Database</h4>
              <div className="category-skills">
                <div className="skill-item">
                  <i className="fas fa-database skill-icon"></i>
                  <span>MySQL</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-database skill-icon"></i>
                  <span>Supabase</span>
                </div>
              </div>
              <p className="category-description">
                Managing and organizing data with efficient database systems
              </p>
            </div>

            <div className="skill-category">
              <h4 className="category-title">Tools</h4>
              <div className="category-skills">
                <div className="skill-item">
                  <i className="fab fa-git-alt skill-icon"></i>
                  <span>Git</span>
                </div>
                <div className="skill-item">
                  <i className="fab fa-figma skill-icon"></i>
                  <span>Figma</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-cloud skill-icon"></i>
                  <span>Cloudinary</span>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h4 className="category-title">AI Tools</h4>
              <div className="category-skills">
                <div className="skill-item">
                  <img src={chatgptIcon} alt="ChatGPT" className="skill-icon" />
                  <span>ChatGPT</span>
                </div>
                <div className="skill-item">
                  <img src={cursorIcon} alt="Cursor" className="skill-icon" />
                  <span>Cursor</span>
                </div>
                <div className="skill-item">
                  <img src={geminiIcon} alt="Gemini" className="skill-icon" />
                  <span>Gemini</span>
                </div>
                <div className="skill-item">
                  <img src={windsurfIcon} alt="Windsurf" className="skill-icon" />
                  <span>Windsurf</span>
                </div>
                <div className="skill-item">
                  <img src={claudeaiIcon} alt="Claude AI" className="skill-icon" />
                  <span>Claude AI</span>
                </div>
                <div className="skill-item">
                  <img src={blackboxIcon} alt="Blackbox" className="skill-icon" />
                  <span>Blackbox</span>
                </div>
              </div>
            </div>
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

          {/* Experience Section */}
          <section id="experience" className="experience-section reveal">
            <h3 className="experience-title">Experience</h3>
            <div className="experience-divider"></div>
            
            <div className="experience-timeline">
              <div className="experience-item">
                <div className="experience-content">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h4 className="experience-position">Web Developer and Marketing Intern</h4>
                      <h5 className="experience-company">8Con East - Meycauayan, Bulacan, Philippines</h5>
                    </div>
                    <div className="project-image-container">
                      <img 
                        src={eightEastImage} 
                        alt="8Con Enrollment System" 
                        className="project-image"
                        onClick={() => handleImageClick([eightEastImage, eightEast1Image, eightEast2Image])}
                      />
                    </div>
                  </div>
                  
                  {/* 8Con East Project Showcase */}
                  <div className="experience-project">
                    <h5 className="project-name">8Con Enrollment System</h5>
                    <div className="project-details">
                      <p className="project-description">
                        <strong>Web Development:</strong> Built functional web pages from design mockups using HTML5 and CSS. Added interactive features and ensured the site worked across different browsers while maintaining visual consistency.
                      </p>
                      <p className="project-description">
                        <strong>UI/UX Design:</strong> Improved the enrollment system interface for better user flow and accessibility. Created clear navigation patterns and conducted user testing to validate design improvements.
                      </p>
                      <p className="project-description">
                        <strong>Digital Marketing:</strong> Managed social media accounts by creating content calendars and posting updates. Designed social media templates and graphics to maintain brand consistency across platforms.
                      </p>
                      <div className="project-technologies">
                        <span className="tech-tag">PHP</span>
                        <span className="tech-tag">HTML5</span>
                        <span className="tech-tag">CSS3</span>
                        <span className="tech-tag">JavaScript</span>
                        <span className="tech-tag">Figma</span>
                        <span className="tech-tag">MySQL</span>
                        <span className="tech-tag">UI/UX Design</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Immaculearn Project */}
              <div className="experience-item">
                <div className="experience-content">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h4 className="experience-position">Immaculearn - Thesis Project (Collaborative Learning Web Application)</h4>
                      <h5 className="experience-company">React, Node.js, MySQL</h5>
                    </div>
                    <div className="project-image-container">
                      <img 
                        src={ImmaculearnImage} 
                        alt="Immaculearn Platform" 
                        className="project-image"
                        onClick={() => handleImageClick([ImmaculearnImage, Immaculearn1, Immaculearn2, Immaculearn3])}
                      />
                    </div>
                  </div>
                  
                  {/* Immaculearn Project Showcase */}
                  <div className="experience-project">
                    <h5 className="project-name">Immaculearn</h5>
                    <div className="project-details">
                      <p className="project-description">
                        <strong>Project Leadership:</strong> Led front-end development and UI/UX design for a collaborative learning platform supporting real-time communication, task management, and file sharing for students and instructors.
                      </p>
                      <p className="project-description">
                        <strong>Frontend Development:</strong> Built responsive and user-friendly interfaces using React, improving accessibility and user engagement across devices.
                      </p>
                      <p className="project-description">
                        <strong>Feature Integration:</strong> Integrated key features including real-time collaboration, secure authentication, and organized file management, enhancing productivity and academic workflow.
                      </p>
                      <div className="project-technologies">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">MySQL</span>
                        <span className="tech-tag">Real-time Communication</span>
                        <span className="tech-tag">Authentication</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
                       </div>
          </section>

          {/* Projects Section */}
          <section id="works" className="works-section reveal">
            <h3 className="works-title">Projects</h3>
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
              <p className="project-description">
                {projects[0].description}
              </p>
              <div className="project-technologies">
                {projects[0].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
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
                    <h4 className="project-title">Communiqué</h4>
                  </a>
                ) : (
                  <h4 className="project-title">Communiqué</h4>
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
                Social Media Website
              </p>
              <p className="project-description">
                {projects[1].description}
              </p>
              <div className="project-technologies">
                {projects[1].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
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
                    <h4 className="project-title">Lucky Mo To</h4>
                  </a>
                ) : (
                  <h4 className="project-title">Lucky Mo To</h4>
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
                Minute Lotto Website
              </p>
              <p className="project-description">
                {projects[2].description}
              </p>
              <div className="project-technologies">
                {projects[2].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
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
                    <h4 className="project-title1">Collaborative Canvas</h4>
                  </a>
                ) : (
                  <h4 className="project-title1">Collaborative Canvas</h4>
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
                Real-time Drawing Application
              </p>
              <p className="project-description1">
                {projects[4].description}
                A web-based collaborative drawing application that allows multiple users to draw and interact with each other in real-time.
              </p>
              <div className="project-technologies1">
                {projects[4].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
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
                onClick={() => handleImageClick(projects[5].images)}
              />
              <div className="project-links">
                {projects[5].github ? (
                  <a 
                    href={projects[5].github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    <h4 className="project-title1">Fake News Detector</h4>
                  </a>
                ) : (
                  <h4 className="project-title1">Fake News Detector</h4>
                )}
                {projects[5].github && (
                  <a 
                    href={projects[5].github} 
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
              <p className="project-description1">
                A machine learning-based system that uses natural language processing (NLP) to classify news articles as fake or real.
              </p>
              <div className="project-technologies1">
                {projects[5].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="works4" className="works_small_card works_centered_row" style={{marginTop: '50px'}}>
          <div className="works-card2 reveal">
            <div className="works-image-container2">
              <img
                src={newYork1Image}
                alt="New York Times Clone Project Preview"
                className="works-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleImageClick(projects[6].images)}
              />
              <div className="project-links">
                {projects[6].link ? (
                  <a 
                    href={projects[6].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    <h4 className="project-title1">New York Times Clone</h4>
                  </a>
                ) : (
                  <h4 className="project-title1">New York Times Clone</h4>
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
                News Website Replica
              </p>
              <p className="project-description1">
                {projects[6].description}
              </p>
              <div className="project-technologies1">
                {projects[6].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="works-card2 reveal">
            <div className="works-image-container2">
              <img
                src={InfonvaImage}
                alt="Infonova Project Preview"
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
                    <h4 className="project-title1">Infonova</h4>
                  </a>
                ) : (
                  <h4 className="project-title1">Infonova</h4>
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
              <p className="project-subtitle1">
                Search Engine for Articles
              </p>
              <p className="project-description1">
                {projects[3].description}
              </p>
              <div className="project-technologies1">
                {projects[3].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
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
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text"> 2026 Raecell Ann Galvez. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;