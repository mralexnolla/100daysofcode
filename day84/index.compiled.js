(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HemisphereDisplay = HemisphereDisplay;
    
    var _react = _interopRequireWildcard(require("react"));
    
    var _useGeolocation = require("../hooks/useGeolocation");
    
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    function HemisphereDisplay() {
      var currentLocation = (0, _useGeolocation.useGeolocation)(); // REPLACE ME!
    
      if (!currentLocation) {
        return /*#__PURE__*/_react["default"].createElement("p", null, 'Sorry, location is currently unavailable');
      } // currentLocation should have a .latitude property
    
    
      if (currentLocation.latitude === 0) {
        return /*#__PURE__*/_react["default"].createElement("p", null, "You are at the equator!");
      }
    
      var hemisphere = currentLocation.latitude > 0 ? 'northern' : 'southern';
      return /*#__PURE__*/_react["default"].createElement("p", null, "You are in the ", hemisphere, " hemisphere.");
    }
    
    },{"../hooks/useGeolocation":3,"react":undefined}],2:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LongitudeLatitudeDisplay = LongitudeLatitudeDisplay;
    
    var _react = _interopRequireWildcard(require("react"));
    
    var _useGeolocation = require("../hooks/useGeolocation");
    
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    function LongitudeLatitudeDisplay() {
      var currentLocation = (0, _useGeolocation.useGeolocation)(); // REPLACE ME!
    
      if (!currentLocation) {
        return /*#__PURE__*/_react["default"].createElement("p", null, 'Sorry, location is currently unavailable');
      } // currentLocation should have a .latitude and .longitude property
    
    
      var latitude = currentLocation.latitude,
          longitude = currentLocation.longitude;
      return /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("p", null, latitude, "\xB0 ", latitude > 0 ? "N" : "S"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("p", null, longitude, "\xB0 ", longitude > 0 ? "E" : "W"));
    }
    
    },{"../hooks/useGeolocation":3,"react":undefined}],3:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useGeolocation = void 0;
    
    var _react = require("react");
    
    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
    
    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
    
    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
    
    // Create your custom hook here!
    var useGeolocation = function useGeolocation() {
      var _useState = (0, _react.useState)({}),
          _useState2 = _slicedToArray(_useState, 2),
          currentLocation = _useState2[0],
          setCurrentLocation = _useState2[1];
    
      (0, _react.useEffect)(function () {
        var onSuccess = function onSuccess(e) {
          setCurrentLocation({
            latitude: e.coords.latitude.toFixed(3),
            longitude: e.coords.longitude.toFixed(3)
          });
        };
    
        navigator.geolocation.getCurrentPosition(onSuccess);
      }, []);
      return currentLocation;
    };
    
    exports.useGeolocation = useGeolocation;
    
    },{"react":undefined}],4:[function(require,module,exports){
    "use strict";
    
    var _reactDom = _interopRequireDefault(require("react-dom"));
    
    var _react = _interopRequireDefault(require("react"));
    
    var _LongitudeLatitudeDisplay = require("./components/LongitudeLatitudeDisplay.js");
    
    var _HemisphereDisplay = require("./components/HemisphereDisplay.js");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function App() {
      return /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Geo Locator"), /*#__PURE__*/_react["default"].createElement(_LongitudeLatitudeDisplay.LongitudeLatitudeDisplay, null), /*#__PURE__*/_react["default"].createElement(_HemisphereDisplay.HemisphereDisplay, null));
    }
    
    _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById('root'));
    
    },{"./components/HemisphereDisplay.js":1,"./components/LongitudeLatitudeDisplay.js":2,"react":undefined,"react-dom":undefined}]},{},[4]);
    