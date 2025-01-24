import { model, Schema } from "mongoose";

const alert = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    time: {
        type: String,
        required: true,
        trim: true
    },
    medic: {
        type: Schema.Types.ObjectId,
        ref: 'Medic',
        required: true
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    }
}, {
    timestamps: true
})

export default model('Alert', alert);