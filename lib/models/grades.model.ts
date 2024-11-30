import mongoose, { Schema, Document, Types } from "mongoose";

interface IGrades extends Document {
  name: string;
  subjects: mongoose.Types.ObjectId[];
  level: string,
  materials: mongoose.Types.ObjectId[];
}

const gradeSchema = new Schema<IGrades>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  subjects: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Subject",
    },
  ],
  level: {
    type: String,
    enum: ["Primary", "Secondary", "University"],
  },  
  materials: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Material",
    },
  ],
});

const Grade = mongoose.models.Grade || mongoose.model("Grade", gradeSchema);
export default Grade;
