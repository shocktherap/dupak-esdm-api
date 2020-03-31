"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _FunctionalPositionController = _interopRequireDefault(require("../controllers/FunctionalPositionController"));

var router = (0, _express.Router)();
router.get('/', _FunctionalPositionController["default"].getAllFunctionalPositions);
router.post('/', _FunctionalPositionController["default"].addFunctionalPosition);
router.get('/:id', _FunctionalPositionController["default"].getAFunctionalPosition);
router.put('/:id', _FunctionalPositionController["default"].updatedFunctionalPosition);
router["delete"]('/:id', _FunctionalPositionController["default"].deleteFunctionalPosition);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=FunctionalPositionRoutes.js.map