import mongoose from "mongoose";
import Grade from "./lib/models/grades.model";
import Student from "./lib/models/student.model";
import Subject from "./lib/models/subject.model";
import Material from "./lib/models/material.model";
import { connectToDB } from "./lib/mongoose";

// MongoDB connection URI
const MONGODB_URL="mongodb+srv://utshuma6:aIZX4DFTPhWHll68@cluster0.zge1n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function seedDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to MongoDB");
    // Clerk-managed Student ID
    const clerkUserId = "user_2pRgzazQ5fqEVSRsr5KagkyinjA";

    // Create Materials
    const materials = await Material.insertMany([
      { resourceCode: "MATH001", name: "Algebra Workbook", content: "markdown" },
      { resourceCode: "SCI001", name: "Physics Experiment Guide", content: "url" },
      { resourceCode: "ENG001", name: "English Literature Notes", content: "plain_text" },
    ]);
    console.log("Materials inserted:", materials);

    // Create Subjects
    const subjects = await Subject.insertMany([
      { curriculumCode: "MATH", name: "Mathematics", description: "Advanced math course", grades: [] },
      { curriculumCode: "SCI", name: "Science", description: "Basic science course", grades: [] },
      { curriculumCode: "ENG", name: "English", description: "English literature and writing", grades: [] },
    ]);
    console.log("Subjects inserted:", subjects);

    // Create Grades
    const grades = await Grade.insertMany([
      {
        name: "Grade 1",
        subjects: [subjects[0]._id, subjects[1]._id],
        level: "Primary",
        materials: [materials[0]._id, materials[1]._id],
      },
      {
        name: "Grade 2",
        subjects: [subjects[2]._id],
        level: "Primary",
        materials: [materials[2]._id],
      },
    ]);
    console.log("Grades inserted:", grades);

    // Update Subjects with Grades
    await Subject.updateOne(
      { _id: subjects[0]._id },
      { $push: { grades: grades[0]._id } }
    );
    await Subject.updateOne(
      { _id: subjects[1]._id },
      { $push: { grades: grades[0]._id } }
    );
    await Subject.updateOne(
      { _id: subjects[2]._id },
      { $push: { grades: grades[1]._id } }
    );
    console.log("Subjects updated with grades");

    // Create a Student
    const student = new Student({
      id: clerkUserId,
      gradeLevel: "Grade 1",
      subjects: [subjects[0]._id, subjects[1]._id],
      academicProgress: {
        [subjects[0]._id.toString()]: { progress: 50, milestones: ["Chapter 1", "Chapter 2"] },
        [subjects[1]._id.toString()]: { progress: 30, milestones: ["Introduction"] },
      },
      uploadedDocuments: ["https://example.com/doc1.pdf", "https://example.com/doc2.pdf"],
      taggedDocuments: {
        notes: ["https://example.com/note1.pdf", "https://example.com/note2.pdf"],
        assignments: ["https://example.com/assignment1.pdf"],
      },
      notifications: [
        { message: "New material available for Mathematics", read: false },
        { message: "Grade 1 Science quiz scheduled", read: true },
      ],
      preferences: {
        notificationsEnabled: true,
        language: "en",
        theme: "light",
      },
      performance: {
        averageTaskCompletionTime: 2.5,
        grades: { Math: 85, Science: 78 },
        attendanceRate: 95,
      },
    });

    await student.save();
    console.log("Student created:", student);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Execute the seeding function
seedDatabase();
