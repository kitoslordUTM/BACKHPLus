"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var postSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required!"'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'description is required!"'],
    trim: true
  },
  userId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});
var _default = exports["default"] = (0, _mongoose.model)('Post', postSchema);