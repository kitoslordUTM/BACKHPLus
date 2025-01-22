"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var medic = new _mongoose.Schema({
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
  speciality: {
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
});
var _default = exports["default"] = (0, _mongoose.model)('Medic', medic);