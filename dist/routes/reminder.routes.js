"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _reminder = require("../controllers/reminder.controller");
var router = (0, _express.Router)();
router.post('/Post', _reminder.postReminder);
var _default = exports["default"] = router;