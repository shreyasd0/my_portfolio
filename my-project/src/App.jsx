import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Shreyas</div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Shreyas</h1>
          <p className="hero-subtitle">Full-Stack Developer & IoT Enthusiast</p>
          <p className="hero-description">
            Computer Science fresher passionate about building innovative solutions using modern technologies
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Objective</h3>
              <p>
                A Computer Science fresher with knowledge of programming languages such as C, C++, Java, and Python, 
                aiming to secure a challenging role where I can enhance my technical skills and contribute to real-world 
                software development.
              </p>
              <div className="contact-info">
                <p><strong>Phone:</strong> +91-7090190039</p>
                <p><strong>Email:</strong> shreyas8088@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h4>Programming Languages</h4>
              <p>Python, C++, HTML, CSS, JavaScript</p>
            </div>
            <div className="skill-card">
              <h4>Frameworks</h4>
              <p>React.js, Vite</p>
            </div>
            <div className="skill-card">
              <h4>Libraries</h4>
              <p>NumPy, Pandas, Matplotlib</p>
            </div>
            <div className="skill-card">
              <h4>Tools & Platforms</h4>
              <p>Git, Postman, VS Code</p>
            </div>
          </div>
          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <ul>
              <li>Communication</li>
              <li>Leadership</li>
              <li>Teamwork</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="project-card">
            <div className="project-header">
              <h3>IoT-Based Accident Detection System</h3>
              <span className="role-badge">IoT Developer / Embedded Systems Engineer</span>
            </div>
            <div className="project-content">
              <div className="project-description">
                <p>
                  Designed and developed an IoT-based system to automatically detect vehicle accidents using vibration 
                  and motion sensors.
                </p>
              </div>
              <div className="project-highlights">
                <h4>Key Features:</h4>
                <ul>
                  <li>Integrated accelerometer and vibration sensors for continuous monitoring</li>
                  <li>Threshold-based accident detection logic using embedded C on Arduino/NodeMCU</li>
                  <li>GSM module integration for automatic emergency alerts to hospitals and contacts</li>
                  <li>GPS module for real-time accident location sharing</li>
                  <li>Improved emergency response time with real-time alerts</li>
                  <li>System accuracy tested under various vibration and impact conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2>Education</h2>
          <div className="education-card">
            <div className="education-header">
              <h3>Bachelor of Technology – Computer Science</h3>
              <p className="duration">2023 – 2027 (Expected)</p>
            </div>
            <div className="education-details">
              <p><strong>Institute:</strong> NMAM Institute of Technology, Nitte</p>
              <p><strong>CGPA:</strong> 8.2</p>
              <div className="coursework">
                <p><strong>Relevant Coursework:</strong></p>
                <p>Data Structures, Algorithms, Database Systems, Operating Systems, Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <p>I'd love to hear from you! Connect with me on social media or reach out directly.</p>
            <div className="social-links">
              <a href="https://github.com/Shreyasd0" target="_blank" rel="noopener noreferrer" className="social-btn">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/shreyas-devadiga" target="_blank" rel="noopener noreferrer" className="social-btn">
                LinkedIn
              </a>
              <a href="mailto:shreyas8088@gmail.com" className="social-btn">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Shreyas Devadiga. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
