import { Schema, model } from 'mongoose';
 
const reminderSchema= new Schema ({
    Hour:{
        type: Number,
        required: [true, 'Minute is required'],
        trim: true
    },
    Minute:{
        type: Number,
        required: [true, 'date is required'],
        trim: true
    },
    Day:{
        type: Number,
        trim: true
    },
    Month:
    {
        type: Number,
        trim: true
    },
    Token:{
        type: String,
        trim: true,
        required: true
    }
})

export default model ("Reminder", reminderSchema)





