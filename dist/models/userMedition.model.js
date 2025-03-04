"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userMeditionSchema = new _mongoose.Schema({
  meditionName: {
    type: String,
    required: true,
    trim: true
  },
  value: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  patient: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    // referencia al modelo 'Patient'
    required: true
  }
});
var UserMedition = (0, _mongoose.model)('UserMedition', userMeditionSchema);
var _default = exports["default"] = UserMedition;