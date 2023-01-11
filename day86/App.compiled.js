(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    (function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
      typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
      (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactErrorBoundary = {}, global.React));
    })(this, (function (exports, React) { 'use strict';
    
      function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
          Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
              var d = Object.getOwnPropertyDescriptor(e, k);
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function () { return e[k]; }
              });
            }
          });
        }
        n["default"] = e;
        return Object.freeze(n);
      }
    
      var React__namespace = /*#__PURE__*/_interopNamespace(React);
    
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
    
        return _setPrototypeOf(o, p);
      }
    
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
    
      var changedArray = function changedArray(a, b) {
        if (a === void 0) {
          a = [];
        }
    
        if (b === void 0) {
          b = [];
        }
    
        return a.length !== b.length || a.some(function (item, index) {
          return !Object.is(item, b[index]);
        });
      };
    
      var initialState = {
        error: null
      };
    
      var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
        _inheritsLoose(ErrorBoundary, _React$Component);
    
        function ErrorBoundary() {
          var _this;
    
          for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
            _args[_key] = arguments[_key];
          }
    
          _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
          _this.state = initialState;
    
          _this.resetErrorBoundary = function () {
            var _this$props;
    
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
    
            _this.props.onReset == null ? void 0 : (_this$props = _this.props).onReset.apply(_this$props, args);
    
            _this.reset();
          };
    
          return _this;
        }
    
        ErrorBoundary.getDerivedStateFromError = function getDerivedStateFromError(error) {
          return {
            error: error
          };
        };
    
        var _proto = ErrorBoundary.prototype;
    
        _proto.reset = function reset() {
          this.setState(initialState);
        };
    
        _proto.componentDidCatch = function componentDidCatch(error, info) {
          var _this$props$onError, _this$props2;
    
          (_this$props$onError = (_this$props2 = this.props).onError) == null ? void 0 : _this$props$onError.call(_this$props2, error, info);
        };
    
        _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
          var error = this.state.error;
          var resetKeys = this.props.resetKeys; // There's an edge case where if the thing that triggered the error
          // happens to *also* be in the resetKeys array, we'd end up resetting
          // the error boundary immediately. This would likely trigger a second
          // error to be thrown.
          // So we make sure that we don't check the resetKeys on the first call
          // of cDU after the error is set
    
          if (error !== null && prevState.error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
            var _this$props$onResetKe, _this$props3;
    
            (_this$props$onResetKe = (_this$props3 = this.props).onResetKeysChange) == null ? void 0 : _this$props$onResetKe.call(_this$props3, prevProps.resetKeys, resetKeys);
            this.reset();
          }
        };
    
        _proto.render = function render() {
          var error = this.state.error;
          var _this$props4 = this.props,
              fallbackRender = _this$props4.fallbackRender,
              FallbackComponent = _this$props4.FallbackComponent,
              fallback = _this$props4.fallback;
    
          if (error !== null) {
            var _props = {
              error: error,
              resetErrorBoundary: this.resetErrorBoundary
            };
    
            if ( /*#__PURE__*/React__namespace.isValidElement(fallback)) {
              return fallback;
            } else if (typeof fallbackRender === 'function') {
              return fallbackRender(_props);
            } else if (FallbackComponent) {
              return /*#__PURE__*/React__namespace.createElement(FallbackComponent, _props);
            } else {
              throw new Error('react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop');
            }
          }
    
          return this.props.children;
        };
    
        return ErrorBoundary;
      }(React__namespace.Component);
    
      function withErrorBoundary(Component, errorBoundaryProps) {
        var Wrapped = function Wrapped(props) {
          return /*#__PURE__*/React__namespace.createElement(ErrorBoundary, errorBoundaryProps, /*#__PURE__*/React__namespace.createElement(Component, props));
        }; // Format for display in DevTools
    
    
        var name = Component.displayName || Component.name || 'Unknown';
        Wrapped.displayName = "withErrorBoundary(" + name + ")";
        return Wrapped;
      }
    
      function useErrorHandler(givenError) {
        var _React$useState = React__namespace.useState(null),
            error = _React$useState[0],
            setError = _React$useState[1];
    
        if (givenError != null) throw givenError;
        if (error != null) throw error;
        return setError;
      }
      /*
      eslint
        @typescript-eslint/sort-type-union-intersection-members: "off",
        @typescript-eslint/no-throw-literal: "off",
        @typescript-eslint/prefer-nullish-coalescing: "off"
      */
    
      exports.ErrorBoundary = ErrorBoundary;
      exports.useErrorHandler = useErrorHandler;
      exports.withErrorBoundary = withErrorBoundary;
    
      Object.defineProperty(exports, '__esModule', { value: true });
    
    }));
    
    
    },{"react":undefined}],2:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AddThoughtForm = AddThoughtForm;
    
    var _react = _interopRequireWildcard(require("react"));
    
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
    
    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
    
    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
    
    function AddThoughtForm(props) {
      var _useState = (0, _react.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          text = _useState2[0],
          setText = _useState2[1];
    
      var handleTextChange = function handleTextChange(_ref) {
        var target = _ref.target;
        var value = target.value;
        setText(value);
      };
    
      var handleSubmit = function handleSubmit() {
        event.preventDefault();
        props.addThought(text);
        setText('');
      };
    
      return /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: handleSubmit,
        className: "AddThoughtForm"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        "aria-label": "What's on your mind?",
        placeholder: "What's on your mind?",
        value: text,
        onChange: handleTextChange
      }), /*#__PURE__*/_react["default"].createElement("input", {
        type: "submit",
        value: "Add"
      }));
    }
    
    },{"react":undefined}],3:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    var _react = _interopRequireWildcard(require("react"));
    
    var _reactDom = _interopRequireDefault(require("react-dom"));
    
    var _AddThoughtForm = require("./AddThoughtForm");
    
    var _Thought = require("./Thought");
    
    var _utilities = require("./utilities");
    
    var _errorLoggingService = require("./error-logging-service");
    
    var _reactErrorBoundary = require("react-error-boundary");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
    
    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
    
    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
    
    var createThought = function createThought(text) {
      return {
        id: (0, _utilities.generateId)(),
        text: text,
        expiresAt: (0, _utilities.getNewExpirationTime)()
      };
    };
    
    function App() {
      var _useState = (0, _react.useState)([createThought("This is a place for your passing thoughts."), createThought("They'll be removed after 15 seconds.")]),
          _useState2 = _slicedToArray(_useState, 2),
          thoughts = _useState2[0],
          setThoughts = _useState2[1];
    
      var addThought = function addThought(text) {
        var thought = createThought(text);
        setThoughts(function (thoughts) {
          return [thought].concat(_toConsumableArray(thoughts));
        });
      };
    
      var removeThought = function removeThought(thoughtIdToRemove) {
        setThoughts(function (thoughts) {
          return thoughts.filter(function (thought) {
            return thought.id !== thoughtIdToRemove;
          });
        });
      }; // TODO: Upgrade this fallback component!
    
    
      var BlankThought = function BlankThought(_ref) {
        var error = _ref.error,
            resetErrorBoundary = _ref.resetErrorBoundary,
            thought = _ref.thought;
        thought.text = error.message;
    
        var removeAndReset = function removeAndReset() {
          removeThought(thought.id);
          resetErrorBoundary();
        };
    
        return /*#__PURE__*/_react["default"].createElement(_Thought.Thought, {
          removeThought: removeAndReset,
          key: thought.id,
          thought: thought
        });
      };
    
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "App"
      }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Passing Thoughts")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_AddThoughtForm.AddThoughtForm, {
        addThought: addThought
      }), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "thoughts"
      }, thoughts.map(function (thought) {
        return /*#__PURE__*/_react["default"].createElement(_reactErrorBoundary.ErrorBoundary, {
          onError: _errorLoggingService.logError,
          FallbackComponent: function FallbackComponent(props) {
            return /*#__PURE__*/_react["default"].createElement(BlankThought, _extends({}, props, {
              thought: thought
            }));
          }
        }, /*#__PURE__*/_react["default"].createElement(_Thought.Thought, {
          removeThought: removeThought,
          key: thought.id,
          thought: thought
        }));
      }))));
    }
    
    _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById("app"));
    
    },{"./AddThoughtForm":2,"./Thought":4,"./error-logging-service":5,"./utilities":6,"react":undefined,"react-dom":undefined,"react-error-boundary":1}],4:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Thought = Thought;
    
    var _react = _interopRequireWildcard(require("react"));
    
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    function Thought(props) {
      var thought = props.thought,
          removeThought = props.removeThought;
    
      if (!thought.text) {
        throw Error("No thoughts?");
      }
    
      var handleRemoveClick = function handleRemoveClick() {
        removeThought(thought.id);
      };
    
      (0, _react.useEffect)(function () {
        var timesUp = setTimeout(function () {
          removeThought(thought.id);
        }, thought.expiresAt - Date.now());
        return function () {
          clearTimeout(timesUp);
        };
      }, [thought]);
      return /*#__PURE__*/_react["default"].createElement("li", {
        className: "Thought"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        "aria-label": "Remove thought",
        className: "remove-button",
        onClick: handleRemoveClick
      }, "\xD7"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "text"
      }, thought.text));
    }
    
    },{"react":undefined}],5:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.logError = logError;
    
    function logError(error, errorInfo) {
      console.log("logError:", error.message, errorInfo.componentStack);
      displayErrorDisplay("Error: ".concat(error.message, " ").concat(errorInfo.componentStack));
    }
    
    function createErrorDisplayStyles() {
      var styleEl = document.createElement("style");
      document.head.appendChild(styleEl);
      styleEl.sheet.insertRule("\n  .cc-error-display {\n    display: flex;\n    cursor: pointer;\n    font-family: monospace;\n    position: fixed;\n    bottom: 1rem;\n    left: 1rem;\n    right: 1rem;\n    background-color: #be1809;\n    color: white;\n    border-radius: 3px;\n    padding: 0.25rem 0.5rem;\n    border: 2px solid #10162F;\n  }\n  ", 0);
      styleEl.sheet.insertRule("\n  .cc-error-display-close {\n    color: white;\n    right: 0.25rem;\n    margin-left: auto;\n    font-family: helvetica, arial, sans-serif;\n    font-weight: normal;\n  }\n  ", 1);
    }
    
    function getErrorEl() {
      return document.querySelector(".cc-error-display");
    }
    
    function removeErrorEl() {
      var errorEl = getErrorEl();
      if (errorEl) document.body.removeChild(errorEl);
    }
    
    function displayErrorDisplay(message) {
      removeErrorEl();
      var errorEl = document.createElement("div");
      var errorElClose = document.createElement("span");
      errorEl.className = "cc-error-display";
      errorEl.addEventListener("click", removeErrorEl);
      errorEl.setAttribute("aria-live", "polite");
      errorEl.innerText = message;
      errorElClose.className = "cc-error-display-close";
      errorElClose.innerHTML = String.fromCodePoint(0x2715);
      errorEl.appendChild(errorElClose);
      document.body.appendChild(errorEl);
    }
    
    createErrorDisplayStyles();
    
    },{}],6:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getNewExpirationTime = getNewExpirationTime;
    exports.generateId = generateId;
    
    function getNewExpirationTime() {
      return Date.now() + 45 * 1000;
    }
    
    var nextId = 0;
    
    function generateId() {
      var result = nextId;
      nextId += 1;
      return result;
    }
    
    },{}]},{},[3]);
    