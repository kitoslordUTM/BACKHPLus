"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = require("../controllers/auth.controller");
var router = (0, _express.Router)();
router.post('/signUp', _auth.signup);
router.post('/signIn', _auth.signIn);
router.post('/signOut', _auth.signOut);
router.patch('/verify', _auth.sendVerficationCode);
router.patch('/Update/:userId', _auth.updateUser);
var _default = exports["default"] = router;