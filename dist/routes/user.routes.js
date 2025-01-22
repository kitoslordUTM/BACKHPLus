"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _user = require("../controllers/user.controller");
var router = (0, _express.Router)();
router.get('/Get', _user.getUser);
router.post('/Post', _user.postUser);
router.put('/Put/:id', _user.putUser);
router["delete"]('/Delete/:id', _user.deleteUser);
router.patch('/Patch/:id', _user.patchUser);
var _default = exports["default"] = router;