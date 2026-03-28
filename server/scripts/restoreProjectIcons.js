import dotenv from "dotenv";
import mongoose from "mongoose";
import Project from "../models/project.js";

dotenv.config();

const iconMap = new Map([
  ["Credit Card Fraud Detection", "💳"],
  ["House Price Prediction", "🏠"],
  ["Portfolio Website", "🌐"],
]);

async function run() {
  await mongoose.connect(process.env.MONGO_URI);

  let updated = 0;
  for (const [name, icon] of iconMap.entries()) {
    const result = await Project.updateMany(
      { name, $or: [{ icon: { $exists: false } }, { icon: null }, { icon: "" }] },
      { $set: { icon } }
    );
    updated += result.modifiedCount || 0;
  }

  const docs = await Project.find({}, { name: 1, icon: 1 }).lean();
  console.log("Updated icons:", updated);
  console.log(JSON.stringify(docs, null, 2));

  await mongoose.disconnect();
}

run().catch(async (error) => {
  console.error("Migration failed:", error);
  await mongoose.disconnect();
  process.exit(1);
});
