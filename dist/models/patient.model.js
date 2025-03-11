"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var patientSchema = new _mongoose.Schema({
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
    required: true
  },
  gender: {
    type: String,
    required: true,
    trim: true
  },
  telephone: {
    type: String,
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
  },
  rescueNumberOne: {
    type: Number,
    required: true,
    trim: true
  },
  rescueNumberTwo: {
    type: Number,
    required: true,
    trim: true
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  // Relación con Usuario
  doctor: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  } // Relación con Doctor
}, {
  timestamps: true
});
var _default = exports["default"] = (0, _mongoose.model)("Patient", patientSchema);