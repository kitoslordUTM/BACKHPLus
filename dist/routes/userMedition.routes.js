"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userMedition = require("../controllers/userMedition.controller");
var router = (0, _express.Router)();
router.post("/user-meditions", _userMedition.postPatientMedition);
router.get("/user-meditions/:id", _userMedition.getPatientMeditionsById);
var _default = exports["default"] = router;