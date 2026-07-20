import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// @route   POST /api/contact
// @desc    Send contact message
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and message"
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message
    });

    res.status(201).json({
      success: true,
      data: newMessage,
      message: "Message sent successfully! ✅"
    });
  } catch (error) {
    console.error("Contact Error:", error);
    
    // Handle validation errors
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: errors.join(", ")
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later."
    });
  }
});

// @route   GET /api/contact
// @desc    Get all messages (Admin only - add auth later)
// @access  Private
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    console.error("Get Messages Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// @route   GET /api/contact/:id
// @desc    Get single message
// @access  Private
router.get("/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    
    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found"
      });
    }

    res.status(200).json({
      success: true,
      data: message
    });
  } catch (error) {
    console.error("Get Message Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

export default router;
