"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.signup = exports.signOut = exports.signIn = exports.sendVerficationCode = void 0;
var _validator = require("../middleware/validator");
var _user = _interopRequireDefault(require("../models/user.model"));
var _sendMail = require("../middleware/sendMail");
var _hashing = require("../utils/hashing");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var signup = exports.signup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, email, password, notificationToken, _signupSchema$validat, error, value, existingUser, hashedPassword, newUser, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password, notificationToken = _req$body.notificationToken;
          _context.prev = 1;
          _signupSchema$validat = _validator.signupSchema.validate({
            email: email,
            password: password
          }), error = _signupSchema$validat.error, value = _signupSchema$validat.value;
          if (!error) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            success: false,
            message: error.details[0].message
          }));
        case 5:
          _context.next = 7;
          return _user["default"].findOne({
            email: email
          });
        case 7:
          existingUser = _context.sent;
          if (!existingUser) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", res.status(409).json({
            success: false,
            message: "User already exists!"
          }));
        case 10:
          _context.next = 12;
          return (0, _hashing.doHash)(value.password, 12);
        case 12:
          hashedPassword = _context.sent;
          // 12 es el salt rounds
          newUser = new _user["default"]({
            email: email,
            password: hashedPassword,
            notificationToken: notificationToken
          });
          _context.next = 16;
          return newUser.save();
        case 16:
          result = _context.sent;
          result.password = undefined; // No enviar la contraseña hasheada en la respuesta
          res.status(201).json({
            message: "Cuenta creada exitosamente",
            // Mensaje más descriptivo
            user: {
              // Puedes incluir información del usuario creado (sin la contraseña)
              email: result.email,
              id: result._id,
              token: result.notificationToken
              // ... otros campos que quieras enviar
            }
          });
          _context.next = 25;
          break;
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](1);
          console.error("Error en el registro:", _context.t0);
          res.status(500).json({
            success: false,
            message: "Error interno del servidor"
          });
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 21]]);
  }));
  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var signIn = exports.signIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, email, password, _signInSchema$validat, error, value, existingUser, result, token;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.prev = 1;
          _signInSchema$validat = _validator.signInSchema.validate({
            email: email,
            password: password
          }), error = _signInSchema$validat.error, value = _signInSchema$validat.value;
          if (!error) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", res.status(409).json({
            success: false,
            message: "User already exists!"
          }));
        case 5:
          _context2.next = 7;
          return _user["default"].findOne({
            email: email
          }).select("+password");
        case 7:
          existingUser = _context2.sent;
          if (existingUser) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(409).json({
            success: false,
            message: "User already exists!"
          }));
        case 10:
          _context2.next = 12;
          return (0, _hashing.doHashValidation)(password, existingUser.password);
        case 12:
          result = _context2.sent;
          if (result) {
            _context2.next = 15;
            break;
          }
          return _context2.abrupt("return", res.status(409).json({
            success: false,
            message: "User already exists!"
          }));
        case 15:
          token = _jsonwebtoken["default"].sign({
            userId: existingUser._id,
            email: existingUser.email,
            verified: existingUser.verified
          }, process.env.TOKEN_SECRET, {
            expiresIn: "5h"
          });
          res.cookie("Authorization", "Bearer " + token, {
            expires: new Date(Date.now() + 8 * 3600000),
            httpOnly: process.env.NODE_ENV === "production",
            secure: process.env.NODE_ENV === "production"
          }).json({
            token: token,
            message: "te logueaste",
            user: {
              // Puedes incluir información del usuario creado (sin la contraseña)
              email: existingUser.email,
              id: existingUser._id
            }
          });
          _context2.next = 21;
          break;
        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](1);
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 19]]);
  }));
  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var signOut = exports.signOut = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          res.clearCookie('Authorization').status(200).json({
            success: true,
            message: 'log Out exitoso'
          });
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function signOut(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var sendVerficationCode = exports.sendVerficationCode = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var email, existingUser, codeValue, info, hashedCodeValue;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          email = req.body.email;
          _context4.prev = 1;
          _context4.next = 4;
          return _user["default"].findOne({
            email: email
          });
        case 4:
          existingUser = _context4.sent;
          if (existingUser) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            success: false,
            message: "User not exists!"
          }));
        case 7:
          if (!existingUser.verified) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            success: false,
            message: 'You are already verified!'
          }));
        case 9:
          codeValue = Math.floor(Math.random() * 1000000).toString();
          _context4.next = 12;
          return _sendMail.transport.sendMail({
            from: 'healtyplus41@gmail.com',
            // Usa el mismo nombre que en la configuración
            to: existingUser.email,
            subject: "verification code",
            html: "<h1>".concat(codeValue, "</h1>")
          });
        case 12:
          info = _context4.sent;
          if (!(info.accepted[0] === existingUser.email)) {
            _context4.next = 21;
            break;
          }
          console.log('jola');
          hashedCodeValue = (0, _hashing.hmacProcess)(codeValue, 'secret');
          existingUser.verificationCode = hashedCodeValue;
          existingUser.verificationCodeValidation = Date.now(); // Guarda la fecha de validación
          _context4.next = 20;
          return existingUser.save();
        case 20:
          return _context4.abrupt("return", res.status(200).json({
            success: true,
            message: 'Code sent!'
          }));
        case 21:
          res.status(400).json({
            success: true,
            message: 'Code not sent!'
          });
          _context4.next = 28;
          break;
        case 24:
          _context4.prev = 24;
          _context4.t0 = _context4["catch"](1);
          console.error('Error en sendVerficationCode:', _context4.t0);
          res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: _context4.t0.message
          });
        case 28:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 24]]);
  }));
  return function sendVerficationCode(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateUser = exports.updateUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var userId, updates, existingUser;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          userId = req.params.userId; // Obtiene el ID desde los parámetros
          updates = req.body; // Obtiene los datos a actualizar
          _context5.prev = 2;
          _context5.next = 5;
          return _user["default"].findById(userId);
        case 5:
          existingUser = _context5.sent;
          if (existingUser) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            success: false,
            message: "User not found!"
          }));
        case 8:
          if (!updates.password) {
            _context5.next = 10;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            success: false,
            message: "Use a password update endpoint!"
          }));
        case 10:
          // 🔹 Actualiza solo los campos enviados en `req.body`
          Object.keys(updates).forEach(function (key) {
            existingUser[key] = updates[key];
          });
          _context5.next = 13;
          return existingUser.save();
        case 13:
          res.status(200).json({
            success: true,
            message: "User updated successfully!",
            user: _objectSpread({
              email: existingUser.email,
              id: existingUser._id,
              verified: existingUser.verified
            }, updates)
          });
          _context5.next = 20;
          break;
        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](2);
          console.error("Error updating user:", _context5.t0);
          res.status(500).json({
            success: false,
            message: "Internal server error"
          });
        case 20:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 16]]);
  }));
  return function updateUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();