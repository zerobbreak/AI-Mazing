import mongoose, { Schema, Document, Types } from "mongoose";

interface ISubject extends Document {
  curriculumCode: string;
  name: string;
  description: string;
  grades: mongoose.Types.ObjectId[];
}

const SubjectSchema = new Schema<ISubject>({
  curriculumCode: {
    type: String,
    unique: true, // Ensures no duplicate codes
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  grades: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Grade",
    },
  ],
});

const Subject =
  mongoose.models.Subjects || mongoose.model("Subject", SubjectSchema);

export default Subject;
