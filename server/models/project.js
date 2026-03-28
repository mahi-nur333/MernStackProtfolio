import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: String,
  icon: String,
  tech: String,
  description: String,
  githubUrl: String,
  liveUrl: String,
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);