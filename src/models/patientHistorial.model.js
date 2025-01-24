import { model, Schema } from "mongoose";

const patientHistorial = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    vitalSigns: {
        type: String,
        ref: 'VitalSigns',    
        required: true
    },
}, {
    timestamps: true
})