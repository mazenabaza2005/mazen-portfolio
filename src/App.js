import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { FaReact, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaUser, FaProjectDiagram, FaEnvelope, FaTools, FaPhone, FaLinkedin, FaPhotoVideo, FaLayerGroup, FaStar } from "react-icons/fa";
import codingAnimation from "./coding-lottie.json"; // You will need to add a Lottie JSON file for animation
import "./App.css";
import Lottie from 'react-lottie-player';

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaPython />, name: "Django" },
  { icon: <FaDatabase />, name: "PostgreSQL" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJsSquare />, name: "JavaScript" },
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
    link: "https://https://github.com/mazenabaza2005/AI-Chat",
  },
  {
    title: "Weather Dashboard",
    desc: "A visually appealing weather app using OpenWeatherMap API, React, and modern CSS. Features real-time weather updates, location search, and responsive design for all devices.",
    link: "https://github.com/mazenabaza2005/Weather-App",
  },
];

function App() {
  return (
    <ParallaxProvider>
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
        <Parallax className="hero" y={[-80, 80]} tagOuter="section">
          <Parallax y={[-120, 120]} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <div className="hero-bg" />
          </Parallax>
          <Parallax y={[-60, 60]} style={{ position: 'absolute', top: '20%', left: '10%', zIndex: 1 }}>
            <div className="parallax-shape parallax-shape-1" />
          </Parallax>
          <Parallax y={[60, -60]} style={{ position: 'absolute', bottom: '15%', right: '12%', zIndex: 1 }}>
            <div className="parallax-shape parallax-shape-2" />
          </Parallax>
          <div className="hero-content">
            <h1>Mazen Salah Abaza</h1>
            <p>Full Stack React & Django Developer</p>
            <a href="#projects" className="cta-btn">View Projects</a>
            <Parallax y={[-40, 40]}>
              <div className="hero-lottie">
                <Lottie
                  loop
                  play
                  animationData={codingAnimation}
                  style={{ width: 180, height: 180 }}
                />
              </div>
            </Parallax>
          </div>
        </Parallax>

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="about-card">
            <div className="section-header">
              <span className="section-header-icon"><FaUser /></span>
              <h2>About Me</h2>
            </div>
            <h2 style={{display: 'none'}}><span className="about-emoji">👋</span>Hey, I'm <span className="about-highlight">Mazen</span></h2>
            <p>
              <span className="about-emoji">💻</span>
              I'm a <span className="about-highlight">Full Stack Developer</span> who loves turning ideas into interactive, beautiful web experiences. Whether it's a sleek frontend in React or a robust backend in Django, I enjoy every step of the process.
            </p>
            <p>
              <span className="about-emoji">🚀</span>
              I thrive on <span className="about-highlight">learning new tech</span> and pushing my boundaries. From building e-commerce platforms to book review sites, I always aim for clean code and creative solutions.
            </p>
            <p>
              <span className="about-emoji">🌈</span>
              Beyond coding, I'm passionate about <span className="about-highlight">UI/UX design</span>, open source, and sharing knowledge. I love reading, reviewing books, and collaborating with other curious minds.
            </p>
            <p>
              <span className="about-emoji">🤝</span>
              Let's connect and create something amazing together!
            </p>
          </div>
        </section>
        {/* SVG Wave Divider */}
        <div className="section-divider"><svg viewBox="0 0 1440 100" preserveAspectRatio="none"><path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="#f8f7fa" /></svg></div>
        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <div className="section-header">
            <span className="section-header-icon"><FaTools /></span>
            <h2>Skills</h2>
          </div>
          <Parallax y={[-30, 30]}>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <Parallax key={skill.name} y={[(i % 2 === 0) ? -20 : 20, (i % 2 === 0) ? 20 : -20]}>
                  <div className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                </Parallax>
              ))}
            </div>
          </Parallax>
        </section>
        {/* SVG Wave Divider */}
        <div className="section-divider"><svg viewBox="0 0 1440 100" preserveAspectRatio="none"><path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="#f5f5f5" /></svg></div>
        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="section-header">
            <span className="section-header-icon"><FaProjectDiagram /></span>
            <h2>Projects</h2>
          </div>
          <Parallax y={[30, -30]}>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <Parallax key={p.title} y={[(i % 2 === 0) ? -15 : 15, (i % 2 === 0) ? 15 : -15]}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                  >
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </a>
                </Parallax>
              ))}
            </div>
          </Parallax>
        </section>
        {/* SVG Wave Divider */}
        <div className="section-divider"><svg viewBox="0 0 1440 100" preserveAspectRatio="none"><path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="#f8f7fa" /></svg></div>
        {/* Additional Skills Section */}
        <section id="additional-skills" className="section skills-section">
          <div className="section-header">
            <span className="section-header-icon"><FaStar /></span>
            <h2>Additional Skills</h2>
          </div>
          <Parallax y={[-20, 20]}>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon"><FaDatabase /></div>
                <div className="skill-name">PHP</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon"><FaPython /></div>
                <div className="skill-name">Data Science<br/>(NumPy, Pandas)</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon"><FaDatabase /></div>
                <div className="skill-name">Anaconda</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon"><FaTools /></div>
                <div className="skill-name">Figma</div>
              </div>
              <div className="skill-card">
                <div className="skill-icon"><FaPhotoVideo /></div>
                <div className="skill-name">Media Editing</div>
              </div>
            </div>
          </Parallax>
        </section>
        {/* SVG Wave Divider */}
        <div className="section-divider"><svg viewBox="0 0 1440 100" preserveAspectRatio="none"><path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="#fff" /></svg></div>
        {/* Contact Section */}
        <section id="contact" className="section contact-section">
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
              <a href="https://www.linkedin.com/in/mazenabaza2005/" className="contact-icon" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin /> linkedin.com/in/mazenabaza2005
              </a>
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
}

export default App;
