import { Schema, model } from "mongoose";

const patientSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, trim: true },
    telephone: { type: String, required: true, trim: true },
    direction: { type: String, required: true, trim: true },
    condition: { type: String, required: true, trim: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Relación con Usuario
    doctor: { type: Schema.Types.ObjectId, ref: "Doctor" } // Relación con Doctor
  },
  { timestamps: true }
);

export default model("Patient", patientSchema);
