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

        <h1>Afzal Amanullah</h1>

        <p className="intro">
          I am a Data Science and Applications student at IIT Madras, specializing in Artificial Intelligence, Machine Learning, and Computer Vision. I build practical, scalable systems ranging from automated malware detection engines to predictive IoT solutions.
        </p>

        <a className="resume-button" href="/portfolio/resume.pdf" target="_blank">
          Open Resume ↗
        </a>
      </section>

      <section id="about">
        <p className="eyebrow">ABOUT</p>

        <div className="about-content">
          <div className="about-text">
            <h2>A little about me.</h2>

            <p>
              I am currently pursuing a Bachelor of Science in Data Science and Application at the Indian Institute of Technology, Madras. 
            </p>

            <p>
              My technical expertise bridges software engineering and AI. I enjoy architecting high-performance machine learning pipelines, designing real-time forecasting platforms, and building secure backend architectures that solve real-world problems.
            </p>
          </div>

          <div className="about-photo">
            <img src="/portfolio/af.jpeg" alt="Profile photo" />
          </div>
        </div>
      </section>

      <section id="skills">
        <p className="eyebrow">SKILLS</p>

        <h2>What I work with.</h2>

        <div className="skills-list">
          <span>Python & SQL</span>
          <span>JavaScript / TypeScript</span>
          <span>React.js / Node.js</span>
          <span>PyTorch & XGBoost</span>
          <span>Computer Vision</span>
          <span>Gemini / Claude APIs</span>
          <span>Data Structures (DSA)</span>
          <span>IoT & Hardware</span>
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
            <h3>Super Resolution Satellite Mapping</h3>
            <p>
              Engineered a 4x Super-Resolution framework using a ResNet and PixelShuffle to upscale 10m Sentinel-2 imagery, generating pixel-level confidence heatmaps via Monte Carlo Dropout.
            </p>
          </div>
          <div className="project-card">
            <p className="project-number">02</p>
            <h3>Hybrid AI Malware Detection Engine</h3>
            <p>
              Architected a pipeline to analyze real-world APK binaries, processing 27.3M records efficiently and piping semantic profiles into Gemini for explainable threat verdicts.
            </p>
          </div>
          <div className="project-card">
            <p className="project-number">03</p>
            <h3>AI Financial Fraud Detection System</h3>
            <p>
              Built a GPU-accelerated XGBoost classifier with dynamic scaling weights to identify fraudulent mule accounts from high-dimensional, real-world banking transaction data.
            </p>
          </div>
          <div className="project-card">
            <p className="project-number">04</p>
            <h3>Air Quality Prediction & IoT System</h3>
            <p>
              Developed a spatial forecasting platform and low-cost mesh IoT prototype to predict pollution spread 24 hours in advance using Advection-Diffusion mathematical models.
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <p className="eyebrow">CONTACT</p>
        <h2>Let's connect.</h2>
        <div className="social-links">
          <h3>LinkedIn Profile</h3>
          <a href="https://linkedin.com/in/afzalamanullah" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>

          <h3>My Github</h3>
          <a href="https://github.com/afzalamanullah0511" target="_blank" rel="noopener noreferrer">
            Github ↗
          </a>

          <h3>My Email</h3>
          <a href="mailto:afzalamanullah0511@gmail.com">
            Mail ↗
          </a>
        </div>
      </section>
    </main>
  );
}
