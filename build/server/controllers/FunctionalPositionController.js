"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _FunctionalPositionService = _interopRequireDefault(require("../services/FunctionalPositionService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var FunctionalPositionController = /*#__PURE__*/function () {
  function FunctionalPositionController() {
    (0, _classCallCheck2["default"])(this, FunctionalPositionController);
  }

  (0, _createClass2["default"])(FunctionalPositionController, null, [{
    key: "getAllFunctionalPositions",
    value: function () {
      var _getAllFunctionalPositions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var allFunctionalPositions;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _FunctionalPositionService["default"].getAllFunctionalPositions();

              case 3:
                allFunctionalPositions = _context.sent;

                if (allFunctionalPositions.length > 0) {
                  util.setSuccess(200, 'FunctionalPositions retrieved', allFunctionalPositions);
                } else {
                  util.setSuccess(200, 'No FunctionalPosition found');
                }

                return _context.abrupt("return", util.send(res));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function getAllFunctionalPositions(_x, _x2) {
        return _getAllFunctionalPositions.apply(this, arguments);
      }

      return getAllFunctionalPositions;
    }()
  }, {
    key: "addFunctionalPosition",
    value: function () {
      var _addFunctionalPosition = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var newFunctionalPosition, createdFunctionalPosition;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!req.body.name || !req.body.first_semester_lock || !req.body.second_semester_lock)) {
                  _context2.next = 3;
                  break;
                }

                util.setError(400, 'Please provide complete details');
                return _context2.abrupt("return", util.send(res));

              case 3:
                newFunctionalPosition = req.body;
                _context2.prev = 4;
                _context2.next = 7;
                return _FunctionalPositionService["default"].addFunctionalPosition(newFunctionalPosition);

              case 7:
                createdFunctionalPosition = _context2.sent;
                util.setSuccess(201, 'FunctionalPosition Added!', createdFunctionalPosition);
                return _context2.abrupt("return", util.send(res));

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](4);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 12]]);
      }));

      function addFunctionalPosition(_x3, _x4) {
        return _addFunctionalPosition.apply(this, arguments);
      }

      return addFunctionalPosition;
    }()
  }, {
    key: "updatedFunctionalPosition",
    value: function () {
      var _updatedFunctionalPosition = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var alteredFunctionalPosition, id, updateFunctionalPosition;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alteredFunctionalPosition = req.body;
                id = req.params.id;

                if (Number(id)) {
                  _context3.next = 5;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context3.abrupt("return", util.send(res));

              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _FunctionalPositionService["default"].updateFunctionalPosition(id, alteredFunctionalPosition);

              case 8:
                updateFunctionalPosition = _context3.sent;

                if (!updateFunctionalPosition) {
                  util.setError(404, "Cannot find FunctionalPosition with the id: ".concat(id));
                } else {
                  util.setSuccess(200, 'FunctionalPosition updated', updateFunctionalPosition);
                }

                return _context3.abrupt("return", util.send(res));

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);
                util.setError(404, _context3.t0);
                return _context3.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13]]);
      }));

      function updatedFunctionalPosition(_x5, _x6) {
        return _updatedFunctionalPosition.apply(this, arguments);
      }

      return updatedFunctionalPosition;
    }()
  }, {
    key: "getAFunctionalPosition",
    value: function () {
      var _getAFunctionalPosition = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, theFunctionalPosition;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context4.next = 4;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context4.abrupt("return", util.send(res));

              case 4:
                _context4.prev = 4;
                _context4.next = 7;
                return _FunctionalPositionService["default"].getAFunctionalPosition(id);

              case 7:
                theFunctionalPosition = _context4.sent;

                if (!theFunctionalPosition) {
                  util.setError(404, "Cannot find FunctionalPosition with the id ".concat(id));
                } else {
                  util.setSuccess(200, 'Found FunctionalPosition', theFunctionalPosition);
                }

                return _context4.abrupt("return", util.send(res));

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](4);
                util.setError(404, _context4.t0);
                return _context4.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 12]]);
      }));

      function getAFunctionalPosition(_x7, _x8) {
        return _getAFunctionalPosition.apply(this, arguments);
      }

      return getAFunctionalPosition;
    }()
  }, {
    key: "deleteFunctionalPosition",
    value: function () {
      var _deleteFunctionalPosition = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id, FunctionalPositionToDelete;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context5.next = 4;
                  break;
                }

                util.setError(400, 'Please provide a numeric value');
                return _context5.abrupt("return", util.send(res));

              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return _FunctionalPositionService["default"].deleteFunctionalPosition(id);

              case 7:
                FunctionalPositionToDelete = _context5.sent;

                if (FunctionalPositionToDelete) {
                  util.setSuccess(200, 'FunctionalPosition deleted', {
                    id: id
                  });
                } else {
                  util.setError(404, "FunctionalPosition with the id ".concat(id, " cannot be found"));
                }

                return _context5.abrupt("return", util.send(res));

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](4);
                util.setError(400, _context5.t0);
                return _context5.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 12]]);
      }));

      function deleteFunctionalPosition(_x9, _x10) {
        return _deleteFunctionalPosition.apply(this, arguments);
      }

      return deleteFunctionalPosition;
    }()
  }]);
  return FunctionalPositionController;
}();

var _default = FunctionalPositionController;
exports["default"] = _default;
//# sourceMappingURL=FunctionalPositionController.js.map