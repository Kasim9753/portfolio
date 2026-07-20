import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectAPI } from '../services/api';
import './Home.css';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const response = await projectAPI.getAll({ featured: true });
        setFeaturedProjects(response.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Shekh kasim</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              <p className="hero-description">
  I create responsive and dynamic web applications using the MERN Stack.
  Passionate about problem-solving, continuous learning, and building impactful digital products.
</p>
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>Frontend</h3>
              <p>React, JavaScript, HTML, CSS, Tailwind</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Backend</h3>
              <p>Node.js, Express, MongoDB, PostgreSQL</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🛠️</div>
              <h3>Tools</h3>
              <p>Git, Docker, AWS, VS Code, Postman</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📱</div>
              <h3>Other</h3>
              <p>REST APIs, GraphQL, Agile, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section featured-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          {loading ? (
            <div className="spinner"></div>
          ) : (
            <>
              <div className="projects-grid">
                {featuredProjects.map((project) => (
                  <div key={project._id} className="project-card card">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="tag">{tech}</span>
                        ))}
                      </div>
                      <Link to={`/projects/${project._id}`} className="project-link">
                        View Details →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link to="/projects" className="btn btn-primary">
                  View All Projects
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>Have a project in mind? Let's create something amazing together!</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
