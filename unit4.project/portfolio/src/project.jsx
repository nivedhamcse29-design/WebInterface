import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./project.css";
function Home() {
  return (
    <div className="page home">
      <div className="home-content">
        <p className="hello">Hello, I'm</p>
        <h1>Nivedha M</h1>
        <h2>Computer Science Student</h2>
        <p>
          I am a Computer Science student who enjoys creating simple,
          useful and creative web applications using modern technologies.
        </p>
        <div className="home-buttons">
          <Link to="/projects" className="btn">
            View My Projects
          </Link>
          <Link to="/contact" className="btn second-btn">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="page">
      <div className="card">
        <h1>About Me</h1>
        <p>
          I am Nivedha M, a Computer Science student with an interest in
          web development, programming and problem solving.
        </p>
        <p>
          I enjoy learning new technologies and building projects that
          help me improve my technical and creative skills.
        </p>
        <p>
          My current learning areas include React, Java, Python, SQL,
          DBMS and Data Science.
        </p>
        <div className="about-box">
          <div>
            <h3>Education</h3>
            <p>Computer Science Engineering</p>
          </div>
          <div>
            <h3>Interest</h3>
            <p>Web Development & Technology</p>
          </div>
          <div>
            <h3>Goal</h3>
            <p>Build useful real-world applications</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Projects() {
  return (
    <div className="page">
      <h1 className="page-title">My Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <h2>🌱 Farmer Collection System</h2>
          <p>
            A web-based system developed to manage farmer collection
            details and maintain collection records.
          </p>
          <span>Flask</span>
          <span>Python</span>
          <span>SQLite</span>
        </div>
        <div className="project-card">
          <h2>⚖️ e-Verify</h2>
          <p>
            An online weighing and measuring instrument verification
            system for registration, inspection and digital certificates.
          </p>
          <span>React</span>
          <span>Node.js</span>
          <span>MySQL</span>
        </div>
        <div className="project-card">
          <h2>💻 Student Dashboard</h2>
          <p>
            A React-based student dashboard displaying student details,
            subjects, attendance and academic information.
          </p>
          <span>React</span>
          <span>JavaScript</span>
          <span>CSS</span>
        </div>
      </div>
    </div>
  );
}
function Skills() {
  return (
    <div className="page">
      <h1 className="page-title">My Skills</h1>
      <div className="skills-container">
        <div className="skill">
          <h3>Java</h3>
          <div className="skill-bar">
            <div className="skill-level java"></div>
          </div>
        </div>
        <div className="skill">
          <h3>Python</h3>
          <div className="skill-bar">
            <div className="skill-level python"></div>
          </div>
        </div>
        <div className="skill">
          <h3>React</h3>
          <div className="skill-bar">
            <div className="skill-level react"></div>
          </div>
        </div>
        <div className="skill">
          <h3>SQL</h3>
          <div className="skill-bar">
            <div className="skill-level sql"></div>
          </div>
        </div>
        <div className="skill">
          <h3>HTML & CSS</h3>
          <div className="skill-bar">
            <div className="skill-level html"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div className="page">
      <div className="contact-card">
        <h1>Let's Connect</h1>
        <p>
          If you would like to discuss a project, collaboration or
          anything related to technology, feel free to contact me.
        </p>
        <div className="contact-info">
          <p>📧 Email: nivedha@example.com</p>
          <p>📱 Phone: +91 XXXXX XXXXX</p>
          <p>📍 Location: Chennai, India</p>
        </div>
        <button className="contact-btn">
          Say Hello
        </button>
      </div>
    </div>
  );
}
function Project() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
export default Project;