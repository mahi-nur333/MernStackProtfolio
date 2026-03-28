import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Contact from "./models/contact.js";
import Project from "./models/project.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "./models/admin.js";

    dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));


//Project routes
app.get("/api/projects", async (_req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.post("/api/projects", async (req, res) => {
  const { name, icon, tech, description, githubUrl, liveUrl } = req.body;
  const newProject = new Project({ name, icon, tech, description, githubUrl, liveUrl });
  await newProject.save();
  res.json({ message: "Project saved successfully!" });
});

app.delete("/api/projects/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted!" });
});


//Contact routes
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  const newContact = new Contact({ name, email, subject, message });
  await newContact.save();
  res.json({ message: "Message saved successfully!" });
});

app.get("/api/contacts", async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Failed to load contact messages" });
  }
});

app.delete("/api/contacts/:id", async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact message not found" });
    }

    res.json({ message: "Contact message deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete contact message" });
  }
});

// Admin login route
app.post("/api/admin/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(401).json({ message: "Invalid credentials" });
  
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
  
  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.json({ token });
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
    });