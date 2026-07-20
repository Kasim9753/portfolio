import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectAPI } from '../services/api';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await projectAPI.getById(id);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="project-detail-page">
        <div className="container" style={{ paddingTop: '150px' }}>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
          <h2>Project not found</h2>
          <Link to="/projects" className="btn btn-primary" style={{ marginTop: '20px' }}>
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <section className="project-hero" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="hero-overlay">
          <div className="container">
            <Link to="/projects" className="back-link">
              ← Back to Projects
            </Link>
            <h1 className="project-title">{project.title}</h1>
            {project.featured && (
              <span className="featured-badge">Featured Project</span>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-content-grid">
            {/* Main Content */}
            <div className="main-content">
              <h2>About This Project</h2>
              <p className="project-description">{project.description}</p>

              <h3>Technologies Used</h3>
              <div className="tech-grid">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-badge">{tech}</span>
                  </div>
                ))}
              </div>

              <div className="project-links">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    View Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="sidebar">
              <div className="info-card card">
                <h4>Project Info</h4>
                <div className="info-list">
                  <div className="info-row">
                    <span className="label">Category:</span>
                    <span className="value">{project.category}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Status:</span>
                    <span className="value">
                      {project.featured ? 'Featured' : 'Published'}
                    </span>
                  </div>
                  <div className="info-row">
                    <span className="label">Created:</span>
                    <span className="value">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="cta-card card">
                <h4>Interested in Similar Work?</h4>
                <p>Let's discuss how I can help with your project.</p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
