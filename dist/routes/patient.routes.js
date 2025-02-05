"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _patient = require("../controllers/patient.controller");
var router = (0, _express.Router)();
router.get('/Get', _patient.getPatient);
router.post('/Post', _patient.postPatient);
var _default = exports["default"] = router;