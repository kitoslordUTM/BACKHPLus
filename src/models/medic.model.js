import { model, Schema } from "mongoose"


const medic = new Schema ({
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
    speciality :{
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
      consultory: {
        type: String,
        required: true,
        trim: true 
      }
}, {
    timestamps: true
})

export default model('Medic', medic);