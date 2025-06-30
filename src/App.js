import React, { useEffect, useState, useCallback } from "react";
import {
  FaReact, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub,
  FaUser, FaProjectDiagram, FaEnvelope, FaTools, FaPhone, FaLinkedin,
  FaPhotoVideo, FaLayerGroup, FaStar, FaBootstrap
} from "react-icons/fa";
import "./App.css";

// Data arrays
const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaPython />, name: "Django" },
  { icon: <FaDatabase />, name: "PostgreSQL" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
];

const projects = [
  {
    title: "Medium Blog App",
    desc: "A robust full-stack blogging platform with user authentication, rich text editing, and real-time comments. Built with Django REST API and React, it features a clean UI, secure backend, and seamless user experience.",
    link: "https://github.com/mazenabaza2005/blog",
  },
  {
    title: "E-Commerce Platform",
    desc: "A modern, responsive e-commerce site with advanced product filtering, shopping cart, and secure checkout. Built in React, it emphasizes performance, scalability, and a smooth user journey.",
    link: "https://github.com/mazenabaza2005/shopify",
  },
  {
    title: "Café Management System",
    desc: "A comprehensive management tool for cafés, featuring table reservation, sales analytics, and staff management. Developed with HTML, CSS, JS, and PHP, it streamlines daily operations and improves efficiency.",
    link: "https://github.com/mazenabaza2005/managment-system",
  },
  {
    title: "AI-Chat",
    desc: "An intelligent chat application leveraging AI for natural language understanding and smart responses. Showcases real-time messaging, user-friendly design, and integration with modern AI APIs.",
    link: "https://github.com/mazenabaza2005/AI-Chat",
  },
  {
    title: "Weather Dashboard",
    desc: "A visually appealing weather app using OpenWeatherMap API, React, and modern CSS. Features real-time weather updates, location search, and responsive design for all devices.",
    link: "https://github.com/mazenabaza2005/Weather-App",
  },
];

const additionalSkills = [
  { icon: <FaDatabase />, name: "PHP" },
  { icon: <FaPython />, name: "Data Science (NumPy, Pandas)" },
  { icon: <FaDatabase />, name: "Anaconda" },
  { icon: <FaTools />, name: "Figma" },
  { icon: <FaPhotoVideo />, name: "Media Editing" },
];

// Optimized ParallaxBox component
function ParallaxBox({ speed = 0.5, style = {}, children }) {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setOffsetY(window.pageYOffset);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      style={{
        transform: `translateY(${offsetY * speed}px)`,
        transition: "transform 0.1s ease-out",
        willChange: "transform",
        pointerEvents: "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Side parallax circle component
function SideParallaxCircle({ color, speed, position }) {
  return (
    <ParallaxBox
      speed={speed}
      style={{
        position: "absolute",
        top: "20%",
        left: position === "left" ? "10%" : "85%",
        width: 200,
        height: 200,
        borderRadius: "50%",
        background: color,
        filter: "blur(40px)",
        opacity: 0.35,
        zIndex: 10,
        pointerEvents: "none",
      }}
    />
  );
}

export default function App() {
  return (
    <>
      <div className="animated-bg" />
      <div className="floating-nav">
        <a href="#about" title="About"><FaUser /></a>
        <a href="#skills" title="Skills"><FaTools /></a>
        <a href="#projects" title="Projects"><FaProjectDiagram /></a>
        <a href="#additional-skills" title="Additional Skills"><FaLayerGroup /></a>
        <a href="#contact" title="Contact"><FaEnvelope /></a>
      </div>
      <div className="main-content">
        {/* Hero Section */}
        <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
          <ParallaxBox speed={-0.12} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <div className="hero-bg" />
          </ParallaxBox>
          <ParallaxBox speed={0.18} style={{ position: 'absolute', top: '20%', left: '10%', zIndex: 1 }}>
            <div className="parallax-shape parallax-shape-1" />
          </ParallaxBox>
          <ParallaxBox speed={-0.18} style={{ position: 'absolute', bottom: '15%', right: '12%', zIndex: 1 }}>
            <div className="parallax-shape parallax-shape-2" />
          </ParallaxBox>
          <div className="hero-content">
            <h1>Mazen Salah Abaza</h1>
            <p>Full Stack React & Django Developer</p>
            <a href="#projects" className="cta-btn">View Projects</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section" style={{ position: "relative", overflow: "hidden" }}>
          <SideParallaxCircle color="#764ba2" speed={0.08} position="left" />
          <SideParallaxCircle color="#ff6a00" speed={-0.12} position="right" />
          <div className="about-card" style={{ position: "relative", zIndex: 1 }}>
            <div className="section-header">
              <span className="section-header-icon"><FaUser /></span>
              <h2>About Me</h2>
            </div>
            <p>
              <span className="about-emoji">👋</span>Hey! I'm <span className="about-highlight">Mazen</span>, a curious and self-driven developer who loves building things for the web.
            </p>
            <p>
              <span className="about-emoji">💻</span>I work mainly with <span className="about-highlight">React and Django</span> — combining front-end design with back-end logic to create apps that actually solve problems.
            </p>
            <p>
              <span className="about-emoji">🔧</span>I've worked on projects like e-commerce platforms, café management tools, and even an AI chatbot — not just to learn, but to challenge myself and see ideas come to life.
            </p>
            <p>
              <span className="about-emoji">🎯</span>My favorite part of development is figuring things out — whether that's fixing a bug at 2AM or finally getting a layout just right on mobile.
            </p>
            <p>
              <span className="about-emoji">🌱</span>I'm still learning every day, and I'm always excited to collaborate with other developers, designers, and creative minds.
            </p>
            <p>
              <span className="about-emoji">🤝</span>Open to new opportunities, collaborations, or just a quick hello. Don't hesitate to reach out.
            </p>
          </div>
        </section>

        {/* SVG Wave Divider */}
        <div className="section-divider"><svg viewBox="0 0 1440 100" preserveAspectRatio="none"><path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="#f8f7fa" /></svg></div>

        {/* Skills Section */}
        <section id="skills" className="section skills-section" style={{ position: "relative", overflow: "hidden" }}>
          <SideParallaxCircle color="#43e97b" speed={-0.07} position="left" />
          <SideParallaxCircle color="#764ba2" speed={0.11} position="right" />
          <div className="section-header">
            <span className="section-header-icon"><FaTools /></span>
            <h2>Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SVG Wave Divider */}
        <div className="section-divider"><svg viewBox="0 0 1440 100" preserveAspectRatio="none"><path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="#f5f5f5" /></svg></div>

        {/* Projects Section */}
        <section id="projects" className="section projects-section" style={{ position: "relative", overflow: "visible" }}>
          <SideParallaxCircle color="#ffdd59" speed={0.06} position="left" />
          <SideParallaxCircle color="#38f9d7" speed={-0.09} position="right" />
          <div className="section-header">
            <span className="section-header-icon"><FaProjectDiagram /></span>
            <h2>Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* SVG Wave Divider */}
        <div className="section-divider"><svg viewBox="0 0 1440 100" preserveAspectRatio="none"><path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="#f8f7fa" /></svg></div>

        {/* Additional Skills Section */}
        <section id="additional-skills" className="section skills-section" style={{ position: "relative", overflow: "visible" }}>
          <SideParallaxCircle color="#764ba2" speed={-0.05} position="left" />
          <SideParallaxCircle color="#ff6a00" speed={0.09} position="right" />
          <div className="section-header">
            <span className="section-header-icon"><FaStar /></span>
            <h2>Additional Skills</h2>
          </div>
          <div className="skills-grid">
            {additionalSkills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SVG Wave Divider */}
        <div className="section-divider"><svg viewBox="0 0 1440 100" preserveAspectRatio="none"><path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="#fff" /></svg></div>

        {/* Contact Section */}
        <section id="contact" className="section contact-section" style={{ position: "relative", overflow: "visible" }}>
          <SideParallaxCircle color="#38f9d7" speed={0.04} position="left" />
          <SideParallaxCircle color="#764ba2" speed={-0.08} position="right" />
          <div className="section-header">
            <span className="section-header-icon"><FaEnvelope /></span>
            <h2>Contact</h2>
          </div>
          <div className="contact-card">
            <h2 style={{display: 'none'}}>Contact</h2>
            <div>I'm always open to new opportunities, collaborations, or just a friendly chat. Reach out below!</div>
            <div className="contact-links">
              <a href="mailto:abazamazen55@gmail.com" className="contact-icon" title="Email">
                <FaEnvelope /> abazamazen55@gmail.com
              </a>
              <a href="tel:01208517707" className="contact-icon" title="Phone">
                <FaPhone /> 01208517707
              </a>
              <a href="https://github.com/mazenabaza2005" className="contact-icon" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub /> github.com/mazenabaza2005
              </a>
              <a href="https://www.linkedin.com/in/mazen-abaza-a305a12a6/" className="contact-icon" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin /> linkedin.com/in/mazenabaza2005
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
