"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
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
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

// Exportar el modelo
var UserMedition = (0, _mongoose.model)('UserMedition', userSchema);
var _default = exports["default"] = UserMedition;