// models/doctor.model.js
import { Schema, model } from 'mongoose';

const doctorSchema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    speciality: { type: String, required: true },
    telephone: { type: Number, required: true },
    direction: { type: String, required: true },
    consultory: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },  // Relación con Usuario
    pacientes: [{ patientId: { type: Schema.Types.ObjectId, ref: 'Patient' } }],
  },
  { timestamps: true }
);

export default model('Doctor', doctorSchema);
