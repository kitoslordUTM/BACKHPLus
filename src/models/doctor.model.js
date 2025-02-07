import { Schema, model } from 'mongoose';

const doctorSchema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    speciality: { type: String, required: true },
    telephone: { type: String, required: true },
    direction: { type: String, required: true },
    consultory: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Relación con Usuario
    pacientes: [{ type: Schema.Types.ObjectId, ref: 'Patient' }] // Relación con Pacientes
  },
  { timestamps: true }
);

export default model('Doctor', doctorSchema);
