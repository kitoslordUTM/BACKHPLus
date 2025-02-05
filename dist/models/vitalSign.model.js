"use strict";

var _mongoose = require("mongoose");
var vitalSign = new _mongoose.Schema({
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
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  }
}, {
  timestamps: true
});