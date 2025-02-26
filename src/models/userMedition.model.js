import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    meditionName: { 
        type: String,
        required: true,
        trim: true
    },
    value: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        
    }
});

// Exportar el modelo
const UserMedition = model('UserMedition', userSchema);
export default UserMedition;
