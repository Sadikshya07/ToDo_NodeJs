import mongoose from "mongoose";

const schema = new mongoose.Schema({ task: String});

export const task = mongoose.model("Task", schema);
