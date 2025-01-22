"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var patient = new _mongoose.Schema({
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
  gender: {
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
});
var _default = exports["default"] = model('Patient', patient);