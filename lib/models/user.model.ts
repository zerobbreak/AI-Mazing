import mongoose, { Schema, Document, Types } from "mongoose";

// Student-specific Schema
interface IStudent extends Document {
  id: string; // Clerk-managed user ID
  username: string;
  name: string;
  onboarded: boolean;
  gradeLevel: string;
  subjects: mongoose.Types.ObjectId[];
  academicProgress: {
    [courseId: string]: { progress: number; milestones: string[] };
  };
  uploadedDocuments: string[]; // URLs or paths to files
  taggedDocuments: { [tag: string]: string[] }; // Tag-to-document mapping
  studyRecommendations: string[]; // AI-driven suggestions
  learningPath: {
    milestone: string;
    completed: boolean;
    recommendedResources: mongoose.Types.ObjectId[]; // Array of references to Resource
  }[];
  notifications: {
    message: string;
    read: boolean;
    createdAt: Date;
  }[];
  preferences: {
    notificationsEnabled: boolean;
    language: string;
    theme: string; // 'light' | 'dark'
  };
  performance: {
    averageTaskCompletionTime: number; // In hours
    grades: Record<string, number>; // { "Math": 85, "English": 90 }
    attendanceRate: number; // As a percentage
  };
  feedbackReceived: {
    from: Types.ObjectId; // Reference to User
    message: string;
    createdAt: Date;
  }[];
  progressInsights: string; // AI-generated insights on student strengths/weaknesses
}

const StudentSchema = new Schema<IStudent>({
  id: { type: String, required: true, unique: true }, // Reference to Clerk user
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  onboarded: {
    type: Boolean,
    default: false,
  },
  gradeLevel: {
    type: String,
    required: true,
  },
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
  academicProgress: {
    type: Map,
    of: {
      progress: { type: Number, default: 0 },
      milestones: [{ type: String }],
    },
  },
  uploadedDocuments: [String],
  taggedDocuments: {
    type: Map,
    of: [String],
  },
  studyRecommendations: [String],
  notifications: [
    {
      message: { type: String, required: true },
      read: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  preferences: {
    notificationsEnabled: { type: Boolean, default: true },
    language: { type: String, default: "en" },
    theme: { type: String, default: "light" },
  },
  performance: {
    averageTaskCompletionTime: { type: Number, default: 0 },
    grades: {
      type: Map,
      of: Number, // Dynamic keys for subjects and their grades
    },
    attendanceRate: { type: Number, default: 100 }, // Default to 100% attendance
  },
  feedbackReceived: [
    {
      from: { type: Schema.Types.ObjectId, ref: "User" },
      message: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  progressInsights: {
    type: String,
  },
});

const Student =
  mongoose.models.Student || mongoose.model<IStudent>("Student", StudentSchema);

export default Student;
