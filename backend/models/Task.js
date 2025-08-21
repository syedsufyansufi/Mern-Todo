import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Task", taskSchema);  
