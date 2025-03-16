"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var reminderSchema = new _mongoose.Schema({
  Hour: {
    type: Number,
    required: [true, 'Minute is required'],
    trim: true
  },
  Minute: {
    type: Number,
    required: [true, 'date is required'],
    trim: true
  },
  Day: {
    type: Number,
    trim: true
  },
  Month: {
    type: Number,
    trim: true
  },
  Token: {
    type: String,
    trim: true,
    required: true
  }
});
var _default = exports["default"] = (0, _mongoose.model)("Reminder", reminderSchema);