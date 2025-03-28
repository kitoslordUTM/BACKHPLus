"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireWildcard(require("express"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _cors = _interopRequireDefault(require("cors"));
var _medic = _interopRequireDefault(require("./routes/medic.routes"));
var _patient = _interopRequireDefault(require("./routes/patient.routes"));
var _userMedition = _interopRequireDefault(require("./routes/userMedition.routes"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _reminder = _interopRequireDefault(require("./routes/reminder.routes"));
var _helmet = _interopRequireDefault(require("helmet"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var expressApp = (0, _express["default"])();

//midlewares
expressApp.use((0, _morgan["default"])('dev'));
expressApp.use((0, _cors["default"])());
expressApp.use((0, _helmet["default"])());
expressApp.use((0, _cookieParser["default"])());
expressApp.use((0, _express.urlencoded)({
  extended: false
}));
expressApp.use(_express["default"].json());

//routes

expressApp.use('/User', _user["default"]);
expressApp.use('/Medic', _medic["default"]);
expressApp.use('/Patient', _patient["default"]);
expressApp.use('/Auth', _auth["default"]);
expressApp.use('/Medition', _userMedition["default"]);
expressApp.use('/Reminder', _reminder["default"]);
var _default = exports["default"] = expressApp;