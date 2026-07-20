import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { category, featured } = req.query;
    let query = {};

    if (category) {
      query.category = category;
    }

    if (featured === "true") {
      query.featured = true;
    }

    const projects = await Project.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error("Get Projects Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// @route   GET /api/projects/:id
// @desc    Get single project
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error("Get Project Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// @route   POST /api/projects
// @desc    Create new project (Admin only - add auth later)
// @access  Private
router.post("/", async (req, res) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      data: project,
      message: "Project created successfully"
    });
  } catch (error) {
    console.error("Create Project Error:", error);
    
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: errors.join(", ")
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

export default router;
