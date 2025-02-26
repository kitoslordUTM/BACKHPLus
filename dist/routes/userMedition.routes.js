"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userMedition = require("../controllers/userMedition.controller");
var router = (0, _express.Router)();
router.post("/user-meditions", _userMedition.postUserMedition);
router.get("/user-meditions/:id", _userMedition.getUserMeditionsById);
var _default = exports["default"] = router;