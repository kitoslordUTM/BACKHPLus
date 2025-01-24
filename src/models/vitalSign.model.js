import { model, Schema } from "mongoose";


const vitalSign = new Schema({
    temperature: {
        type: Number,
        required: true,
        trim: true
    },
    heartRate: {
        type: Number,
        required: true,
        trim: true
    },
    bloodPressure: {
        type: Number,
        required: true,
        trim: true
    },
    respiratoryRate: {
        type: Number,
        required: true,
        trim: true
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    }
}, {
    timestamps: true
})