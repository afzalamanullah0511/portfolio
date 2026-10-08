export default function Home() {
  return (
    <main>
      <nav>
        <div className="logo">PORTFOLIO</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">HELLO, I'M</p>

        <h1>Afzal blah blah</h1>

        <p className="intro">
          A short introduction about yourself, your work,
          interests, and what you build.
        </p>

        <a className="resume-button" href="/resume.pdf" target="_blank">
          Open Resume ↗
        </a>
      </section>

      <section id="about">
  <p className="eyebrow">ABOUT</p>

  <div className="about-content">
    <div className="about-text">
      <h2>A little about me.</h2>

      <p>
        I’m a researcher and developer interested in building practical
        solutions with technology, AI, and data.
      </p>

      <p>
        I enjoy working on projects that combine technical problem-solving
        with clean and useful user experiences.
      </p>
    </div>

    <div className="about-photo">
      <img src="/af.jpeg" alt="Profile photo" />
    </div>
  </div>
</section>
<section id="skills">
  <p className="eyebrow">SKILLS</p>

  <h2>What I work with.</h2>

  <div className="skills-list">
    <span>Python</span>
    <span>React</span>
    <span>Next.js</span>
    <span>JavaScript</span>
    <span>Machine Learning</span>
    <span>Computer Vision</span>
    <span>PyTorch</span>
    <span>Git & GitHub</span>
  </div>
</section>

      <section id="projects">
  <p className="eyebrow">PROJECTS</p>

  <div className="projects-header">
    <h2>Things I have worked on</h2>
  </div>

  <div className="project-grid">
    <div className="project-card">
      <p className="project-number">01</p>
      <h3>Project One</h3>
      <p>
        A short description of the project, what it does, and the
        problem it was designed to solve.
      </p>
    </div>
    <div className="project-card">
      <p className="project-number">01</p>
      <h3>Project One</h3>
      <p>
        A short description of the project, what it does, and the
        problem it was designed to solve.
      </p>
    </div>
    <div className="project-card">
      <p className="project-number">01</p>
      <h3>Project One</h3>
      <p>
        A short description of the project, what it does, and the
        problem it was designed to solve.
      </p>
    </div>
  </div>
</section>

      <section id="contact">
        <p className="eyebrow">CONTACT</p>
        <h2>Let's connect.</h2>
        <div className="social-links">
          <h3>LinkedIn Profile</h3><a href="linkedinl" target="_blank" rel="noopener noreferre">
            LinkedIn ↗
          </a>

          <h3>My Github</h3>
          <a href="github" target="_blank" rel="noopener noreferre">
            Github ↗
          </a>

          <h3>My Email</h3>
          <a href="mailto:afzal@example.com">
            Mail ↗
          </a>
          
        </div>
      </section>
    </main>
  );
}