import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true},
  username: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  role: { type: String, enum: ["Student", "Teacher"] },
  grade: { type: String },
  goals: { type: [String] },
  learningPath: { type: String },
  subjects: { type: [String], required: true},
  customGoal: { type: String },
  onboarded: { type: Boolean, default: false },
});

// Ensure schema is only compiled once
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
