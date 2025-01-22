"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _medic = require("../controllers/medic.controller");
var router = (0, _express.Router)();
router.get('/Get', _medic.getMedic);
router.post('/Post', _medic.postMedic);
router.put('/Put/:id', _medic.putMedic);
router["delete"]('/Delete/:id', _medic.deleteMedic);
router.patch('/Patch/:id');
var _default = exports["default"] = router;