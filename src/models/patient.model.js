import { Schema, Model } from "mongoose";

const patient = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    gender :{
        type: String,
        required: true,
        trim: true
    },
    telephone: {
        type: Number,
        required: true, 
        trim: true
      },
    direction: {
        type: String,
        required: true,
        trim: true
      },
     condition: {
        type: String,
        required: true,
        trim: true 
      }
}, {
    timestamps: true
})

export default model('Patient', patient);