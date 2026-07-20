import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "../models/Project.js";

dotenv.config();

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
    category: "web"
  },
  {
    title: "Task Management App",
    description: "A modern task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    technologies: ["React", "Firebase", "Material-UI", "React DnD"],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/username/task-manager",
    featured: true,
    category: "web"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with beautiful UI, location-based forecasts, and weather alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/username/weather-app",
    featured: false,
    category: "web"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with insights, scheduling, and performance metrics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Express", "PostgreSQL", "D3.js"],
    liveUrl: "https://example-social.com",
    githubUrl: "https://github.com/username/social-dashboard",
    featured: true,
    category: "web"
  },
  {
    title: "Portfolio Website Builder",
    description: "A drag-and-drop portfolio builder with customizable templates and export functionality.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
    liveUrl: "https://example-builder.com",
    githubUrl: "https://github.com/username/portfolio-builder",
    featured: false,
    category: "web"
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with rooms, direct messaging, and file sharing capabilities.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "https://example-chat.com",
    githubUrl: "https://github.com/username/chat-app",
    featured: false,
    category: "web"
  }
];

const seedProjects = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Project.deleteMany({});
    console.log("Projects cleared");

    await Project.insertMany(projects);
    console.log("Sample projects added");

    process.exit(0);
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
};

seedProjects();
