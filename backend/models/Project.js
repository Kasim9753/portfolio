import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true
    },
    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/600x400"
    },
    technologies: [{
      type: String,
      trim: true
    }],
    liveUrl: {
      type: String,
      trim: true
    },
    githubUrl: {
      type: String,
      trim: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    category: {
      type: String,
      enum: ["web", "mobile", "desktop", "other"],
      default: "web"
    }
  },
  { 
    timestamps: true 
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
