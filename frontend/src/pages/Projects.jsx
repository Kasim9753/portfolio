import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectAPI } from '../services/api';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, [filter]);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const params = filter !== 'all' ? { category: filter } : {};
      const response = await projectAPI.getAll(params);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="projects-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">My Projects</h1>
          <p className="page-description">
            Explore my latest work and creative solutions
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              Web Apps
            </button>
            <button 
              className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
              onClick={() => setFilter('mobile')}
            >
              Mobile Apps
            </button>
            <button 
              className={`filter-btn ${filter === 'other' ? 'active' : ''}`}
              onClick={() => setFilter('other')}
            >
              Other
            </button>
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="spinner"></div>
          ) : projects.length === 0 ? (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          ) : (
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project._id} className="project-card card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    {project.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-footer">
                      <Link to={`/projects/${project._id}`} className="btn btn-outline">
                        View Details
                      </Link>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="live-link"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
