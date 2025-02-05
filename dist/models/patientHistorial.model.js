"use strict";

var _mongoose = require("mongoose");
var patientHistorial = new _mongoose.Schema({
  patient: {
    type: _mongoose.Schema.Types.ObjectId,
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
  }
}, {
  timestamps: true
});