import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  expertise: { type: String, required: true },
  github: { type: String, required: true },
  linkedin: { type: String, required: true },
  coverLetter: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Application || mongoose.model("Application", ApplicationSchema);