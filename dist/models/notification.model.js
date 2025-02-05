"use strict";

var _mongoose = require("mongoose");
var notification = new _mongoose.Schema({
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
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Medic',
    required: true
  },
  patient: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  }
}, {
  timestamps: true
});