"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
// models/doctor.model.js

var doctorSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  speciality: {
    type: String,
    required: true
  },
  telephone: {
    type: Number,
    required: true
  },
  direction: {
    type: String,
    required: true
  },
  consultory: {
    type: String,
    required: true
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  // Relación con Usuario
  pacientes: [{
    patientId: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'Patient'
    }
  }]
}, {
  timestamps: true
});
var _default = exports["default"] = (0, _mongoose.model)('Doctor', doctorSchema);