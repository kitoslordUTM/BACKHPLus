import { Schema, model } from 'mongoose';

const userMeditionSchema = new Schema({
  meditionName: { 
    type: String,
    required: true,
    trim: true
  },
  value: {
    type: Number,
    required: true
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient', // referencia al modelo 'Patient'
    required: true
    }
  }, { timestamps: true });
 
 
const UserMedition = model('UserMedition', userMeditionSchema);
export default UserMedition;
