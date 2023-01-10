(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _react = _interopRequireDefault(require("react"));
    
    var _Header = _interopRequireDefault(require("./Header/Header"));
    
    var _Todos = _interopRequireDefault(require("./Todos/Todos"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function App() {
      return /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement(_Todos["default"], null));
    }
    
    var _default = App;
    exports["default"] = _default;
    
    },{"./Header/Header":2,"./Todos/Todos":3,"react":undefined}],2:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _react = _interopRequireDefault(require("react"));
    
    var _useTheme2 = require("../hooks/useTheme");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    var Header = function Header() {
      var _useTheme = (0, _useTheme2.useTheme)(),
          onToggleTheme = _useTheme.onToggleTheme,
          isDarkTheme = _useTheme.isDarkTheme;
    
      return /*#__PURE__*/_react["default"].createElement("header", {
        className: "header"
      }, /*#__PURE__*/_react["default"].createElement("h2", null, "Todos"), /*#__PURE__*/_react["default"].createElement("section", {
        className: "actionsContainer"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: onToggleTheme
      }, isDarkTheme ? "Change to 🌞 mode" : "Change to 🌚 mode")));
    };
    
    var _default = Header;
    exports["default"] = _default;
    
    },{"../hooks/useTheme":4,"react":undefined}],3:[function(require,module,exports){
    "use strict";
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    
    var _react = _interopRequireWildcard(require("react"));
    
    var _utils = require("../utils/utils.js");
    
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
    
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
    
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    
    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
    
    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
    
    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
    
    var Todos = function Todos() {
      var _useState = (0, _react.useState)(""),
          _useState2 = _slicedToArray(_useState, 2),
          newTodoText = _useState2[0],
          setNewTodoText = _useState2[1];
    
      var _useReducer = (0, _react.useReducer)(todosReducer, (0, _utils.generateRandomTodos)(10)),
          _useReducer2 = _slicedToArray(_useReducer, 2),
          todos = _useReducer2[0],
          dispatch = _useReducer2[1];
    
      var onAddNewTodo = function onAddNewTodo(e) {
        e.preventDefault();
        dispatch({
          type: "add",
          // For this demo, we'll use the current timestamp as the id. In a production application, you would use a ID generator to ensure uniqueness.
          id: Date.now().toString(),
          text: newTodoText,
          user: {
            name: "User1",
            icon: "🐿"
          }
        });
        setNewTodoText("");
      };
    
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement("section", {
        className: "newTodoSection"
      }, /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: onAddNewTodo
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "newTodo"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        name: "newTodo",
        id: "newTodo",
        value: newTodoText,
        onChange: function onChange(e) {
          setNewTodoText(e.target.value);
        },
        placeholder: "What do you have to do today?"
      })))), /*#__PURE__*/_react["default"].createElement("ol", {
        className: "list"
      }, todos.map(function (todo) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: "todo",
          key: todo.id
        }, /*#__PURE__*/_react["default"].createElement("section", {
          className: "author"
        }, /*#__PURE__*/_react["default"].createElement("span", {
          title: todo.user.name,
          "aria-label": "Created by ".concat(todo.user.name)
        }, /*#__PURE__*/_react["default"].createElement("div", null, todo.user.icon), /*#__PURE__*/_react["default"].createElement("div", null, todo.user.name))), /*#__PURE__*/_react["default"].createElement("span", null, todo.text.toLowerCase()), /*#__PURE__*/_react["default"].createElement("div", {
          className: "actionsContainer"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          "aria-label": todo.done ? "Mark as todo" : "Mark as done",
          onClick: function onClick() {
            var nextDoneState = !todo.done;
            dispatch({
              type: "update",
              todo: _objectSpread(_objectSpread({}, todo), {}, {
                done: nextDoneState
              })
            });
          }
        }, todo.done ? "✅" : "⚪️"), /*#__PURE__*/_react["default"].createElement("button", {
          "aria-label": "Delete task",
          onClick: function onClick() {
            dispatch({
              type: "delete",
              id: todo.id
            });
          }
        }, "\uD83D\uDDD1")));
      })));
    };
    
    var _default = Todos;
    exports["default"] = _default;
    
    var todosReducer = function todosReducer(todos, action) {
      switch (action.type) {
        case "add":
          {
            return [].concat(_toConsumableArray(todos), [{
              id: action.id,
              text: action.text,
              done: false,
              user: action.user
            }]);
          }
        // This action is just for demo purposes. Dispatching this action will cause an error to be thrown. The Error Boundary should then appear.
    
        case "add-error-todo":
          {
            return [].concat(_toConsumableArray(todos), [{
              id: "bad-todo",
              text: undefined,
              done: false,
              user: action.user
            }]);
          }
    
        case "update":
          {
            return todos.map(function (t) {
              if (t.id === action.todo.id) {
                return action.todo;
              } else {
                return t;
              }
            });
          }
    
        case "delete":
          {
            return todos.filter(function (t) {
              return t.id !== action.id;
            });
          }
    
        default:
          {
            throw Error("Unknown action: " + action.type);
          }
      }
    };
    
    },{"../utils/utils.js":6,"react":undefined}],4:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useTheme = void 0;
    
    var _react = require("react");
    
    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
    
    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
    
    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
    
    var useTheme = function useTheme() {
      var _useState = (0, _react.useState)('light'),
          _useState2 = _slicedToArray(_useState, 2),
          theme = _useState2[0],
          setTheme = _useState2[1];
    
      (0, _react.useEffect)(function () {
        document.documentElement.setAttribute("data-theme", theme);
      }, [theme]);
    
      var onToggleTheme = function onToggleTheme() {
        setTheme(function (prev) {
          return prev === 'light' ? 'dark' : 'light';
        });
      };
    
      var isDarkTheme = theme === 'dark';
      return {
        onToggleTheme: onToggleTheme,
        isDarkTheme: isDarkTheme
      };
    };
    
    exports.useTheme = useTheme;
    
    },{"react":undefined}],5:[function(require,module,exports){
    "use strict";
    
    var _react = _interopRequireDefault(require("react"));
    
    var _reactDom = _interopRequireDefault(require("react-dom"));
    
    var _App = _interopRequireDefault(require("./App"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_App["default"], null), document.getElementById("root"));
    
    },{"./App":1,"react":undefined,"react-dom":undefined}],6:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.generateRandomTodos = void 0;
    
    // This file should be ignored. It is used to mock data in this project. You don't have to know how any of this works.
    // Helper function that generates some random todos.
    var generateRandomTodos = function generateRandomTodos(count) {
      return Array.from(new Array(count)).map(function (_) {
        return {
          id: Math.random().toString(36).substring(2),
          text: getRandomSentence(),
          done: Math.floor(Math.random() * 2) === 1,
          user: {
            name: RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)],
            icon: RANDOM_ICONS[Math.floor(Math.random() * RANDOM_ICONS.length)]
          }
        };
      });
    };
    
    exports.generateRandomTodos = generateRandomTodos;
    var RANDOM_ICONS = ["✈️", "🌸", "🐿", "🍣", "🐤", "🍩"];
    var RANDOM_NAMES = ["Lou", "Cecelia", "John", "Maria", "Sabine"];
    var nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
    var verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
    var adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
    var adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
    var preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];
    
    var getRandomSentence = function getRandomSentence() {
      var rand1 = Math.floor(Math.random() * 10);
      var rand2 = Math.floor(Math.random() * 10);
      var rand3 = Math.floor(Math.random() * 10);
      var rand4 = Math.floor(Math.random() * 10);
      var rand5 = Math.floor(Math.random() * 10);
      var rand6 = Math.floor(Math.random() * 10);
      var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";
      return content;
    };
    
    },{}]},{},[5]);
    