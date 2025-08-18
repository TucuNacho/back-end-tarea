import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
  inputTarea: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 50,
    unique: true,
  },
});

const Tarea = mongoose.model('tarea', tareaSchema)

export default Tarea
