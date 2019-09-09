(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = undefined;

var _flattenNames = __webpack_require__(133);

var _flattenNames2 = _interopRequireDefault(_flattenNames);

var _mergeClasses = __webpack_require__(205);

var _mergeClasses2 = _interopRequireDefault(_mergeClasses);

var _autoprefix = __webpack_require__(225);

var _autoprefix2 = _interopRequireDefault(_autoprefix);

var _hover2 = __webpack_require__(226);

var _hover3 = _interopRequireDefault(_hover2);

var _active = __webpack_require__(227);

var _active2 = _interopRequireDefault(_active);

var _loop2 = __webpack_require__(228);

var _loop3 = _interopRequireDefault(_loop2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.hover = _hover3.default;
exports.handleHover = _hover3.default;
exports.handleActive = _active2.default;
exports.loop = _loop3.default;
var ReactCSS = exports.ReactCSS = function ReactCSS(classes) {
  for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    activations[_key - 1] = arguments[_key];
  }

  var activeNames = (0, _flattenNames2.default)(activations);
  var merged = (0, _mergeClasses2.default)(classes, activeNames);
  return (0, _autoprefix2.default)(merged);
};

exports.default = ReactCSS;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Alpha = __webpack_require__(229);

Object.defineProperty(exports, 'Alpha', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alpha).default;
  }
});

var _Checkboard = __webpack_require__(50);

Object.defineProperty(exports, 'Checkboard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkboard).default;
  }
});

var _EditableInput = __webpack_require__(232);

Object.defineProperty(exports, 'EditableInput', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EditableInput).default;
  }
});

var _Hue = __webpack_require__(233);

Object.defineProperty(exports, 'Hue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hue).default;
  }
});

var _Raised = __webpack_require__(235);

Object.defineProperty(exports, 'Raised', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Raised).default;
  }
});

var _Saturation = __webpack_require__(251);

Object.defineProperty(exports, 'Saturation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Saturation).default;
  }
});

var _ColorWrap = __webpack_require__(91);

Object.defineProperty(exports, 'ColorWrap', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColorWrap).default;
  }
});

var _Swatch = __webpack_require__(259);

Object.defineProperty(exports, 'Swatch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Swatch).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(236)();
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(238),
    createAssigner = __webpack_require__(242);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(59);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.red = undefined;

var _each = __webpack_require__(256);

var _each2 = _interopRequireDefault(_each);

var _tinycolor = __webpack_require__(258);

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  simpleCheckForValidColor: function simpleCheckForValidColor(data) {
    var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
    var checked = 0;
    var passed = 0;
    (0, _each2.default)(keysToCheck, function (letter) {
      if (data[letter]) {
        checked += 1;
        if (!isNaN(data[letter])) {
          passed += 1;
        }
        if (letter === 's' || letter === 'l') {
          var percentPatt = /^\d+%$/;
          if (percentPatt.test(data[letter])) {
            passed += 1;
          }
        }
      }
    });
    return checked === passed ? data : false;
  },
  toState: function toState(data, oldHue) {
    var color = data.hex ? (0, _tinycolor2.default)(data.hex) : (0, _tinycolor2.default)(data);
    var hsl = color.toHsl();
    var hsv = color.toHsv();
    var rgb = color.toRgb();
    var hex = color.toHex();
    if (hsl.s === 0) {
      hsl.h = oldHue || 0;
      hsv.h = oldHue || 0;
    }
    var transparent = hex === '000000' && rgb.a === 0;

    return {
      hsl: hsl,
      hex: transparent ? 'transparent' : '#' + hex,
      rgb: rgb,
      hsv: hsv,
      oldHue: data.h || oldHue || hsl.h,
      source: data.source
    };
  },
  isValidHex: function isValidHex(hex) {
    // disable hex4 and hex8
    var lh = String(hex).charAt(0) === '#' ? 1 : 0;
    return hex.length !== 4 + lh && hex.length < 7 + lh && (0, _tinycolor2.default)(hex).isValid();
  },
  getContrastingColor: function getContrastingColor(data) {
    if (!data) {
      return '#fff';
    }
    var col = this.toState(data);
    if (col.hex === 'transparent') {
      return 'rgba(0,0,0,0.4)';
    }
    var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
    return yiq >= 128 ? '#000' : '#fff';
  }
};
var red = exports.red = {
  hsl: { a: 1, h: 0, l: 0.5, s: 1 },
  hex: '#ff0000',
  rgb: { r: 255, g: 0, b: 0, a: 1 },
  hsv: { h: 0, s: 1, v: 1, a: 1 }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(66),
    baseIteratee = __webpack_require__(145),
    baseMap = __webpack_require__(203),
    isArray = __webpack_require__(3);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14),
    getRawTag = __webpack_require__(136),
    objectToString = __webpack_require__(137);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(158),
    getValue = __webpack_require__(161);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(42),
    isLength = __webpack_require__(38);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(7);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(62),
    baseKeys = __webpack_require__(143),
    isArrayLike = __webpack_require__(13);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(81),
    baseAssignValue = __webpack_require__(48);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(0);

var TreeEditor = __webpack_require__(56);

var ModelEditor = __webpack_require__(19);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminVar',
      pid: 0
    };
  },
  getInitialState: function getInitialState() {
    return {
      items: this.props.fields || [],
      currItem: null
    };
  },
  __onTreeValueChange: function __onTreeValueChange(obj) {
    this.setState({
      currItem: obj
    });
    this.props.onItemClick && this.props.onItemClick(obj);
  },
  __renderRight: function __renderRight() {
    if (this.state.currItem) {
      var _result = this.props.rightRender && this.props.rightRender(this.state.currItem, this);

      if (_result) {
        return _result;
      } else {
        return React.createElement(ModelEditor, _extends({}, this.props, {
          data: this.state.currItem
        }));
      }
    } else {
      var _result = this.props.emptyRender && this.props.emptyRender(this);

      if (_result) {
        return _result;
      } else {
        return React.createElement("div", {
          className: "zr-center zr-empty-view"
        }, "\u8BF7\u9009\u62E9\u5DE6\u8FB9\u6570\u636E\u9879.");
      }
    }
  },
  __itemContentRender: function __itemContentRender(data, treeColumn, tree) {
    return this.props.itemContentRender && this.props.itemContentRender(data, treeColumn, tree);
  },
  render: function render() {
    return React.createElement(zn.react.Page, _extends({
      className: "zn-plugin-admin-tree-model-view"
    }, this.props), React.createElement("div", {
      className: "zr-flex-layout zn-plugin-admin-master-slave-flex-layout row"
    }, React.createElement("div", {
      className: "layout-header",
      style: {
        minWidth: 200,
        minHeight: 132
      }
    }, React.createElement(TreeEditor, _extends({}, this.props, {
      contentRender: this.__itemContentRender,
      onValueChange: this.__onTreeValueChange
    }))), React.createElement("div", {
      className: "layout-body"
    }, this.__renderRight())));
  }
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(117);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  __onSubmitSuccess: function __onSubmitSuccess() {
    zn.notification.success("编辑成功");

    if (this.props.data.treeitem.parent) {
      this.props.data.treeitem.parent.refresh();
    } else {
      this.props.data.tree.refresh();
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: "zn-plugin-admin-model-editor"
    }, this.props.data && React.createElement(zn.react.Form, {
      merge: "updates",
      action: "/zn.plugin.admin/model/update",
      exts: {
        model: this.props.model,
        where: {
          id: this.props.data.value
        }
      },
      value: zn.store.post("/zn.plugin.admin/model/selectOne", {
        model: this.props.model,
        where: {
          id: this.props.data.value
        }
      }),
      items: this.props.fields,
      onSubmitSuccess: this.__onSubmitSuccess
    }));
  }
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(7),
    stubFalse = __webpack_require__(141);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(23),
    stackClear = __webpack_require__(153),
    stackDelete = __webpack_require__(154),
    stackGet = __webpack_require__(155),
    stackHas = __webpack_require__(156),
    stackSet = __webpack_require__(157);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(148),
    listCacheDelete = __webpack_require__(149),
    listCacheGet = __webpack_require__(150),
    listCacheHas = __webpack_require__(151),
    listCacheSet = __webpack_require__(152);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(16);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(170);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(185),
    Map = __webpack_require__(44),
    Promise = __webpack_require__(186),
    Set = __webpack_require__(187),
    WeakMap = __webpack_require__(188),
    baseGetTag = __webpack_require__(11),
    toSource = __webpack_require__(67);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(11),
    isObjectLike = __webpack_require__(9);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(28);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(62),
    baseKeysIn = __webpack_require__(210),
    isArrayLike = __webpack_require__(13);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);

var React = __webpack_require__(0);

var CHARS = zn["char"].getUppercaseLetters();
module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      value: ',',
      mulitable: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      tag: null,
      user: null,
      users: []
    };
  },
  __onLetterClick: function __onLetterClick(item) {
    var _id = item + ',';

    if (this.state.value.indexOf(',' + _id) == -1) {
      this.state.value = this.state.value + _id;
    } else {
      this.state.value = this.state.value.replace(',' + _id, ',');
    }

    this.setValue(this.state.value);
  },
  setValue: function setValue(value) {
    this.setState({
      value: value
    });
    this.props.onChange && this.props.onChange(value);
  },
  __onCheck: function __onCheck(event, value) {
    if (value) {
      this.setValue(',' + CHARS.join(',') + ',');
    } else {
      this.setValue(',');
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: "zn-plugin-admin-letter-selector"
    }, React.createElement("ul", {
      className: "tags"
    }, CHARS.map(function (item, index) {
      var _this = this;

      return React.createElement("li", {
        key: index,
        className: 'tag ' + (this.state.value.indexOf(item) != -1 ? 'selected' : ''),
        onClick: function onClick() {
          return _this.__onLetterClick(item);
        }
      }, item);
    }.bind(this)), this.props.mulitable && React.createElement("li", null, React.createElement(zn.react.Checkbox, {
      text: "\u5168\u9009",
      onChange: this.__onCheck
    }))));
  }
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(119);

var React = __webpack_require__(0);

var TreeSelector = __webpack_require__(55);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      pid: 1,
      checkboxEnabled: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      text: this.props.text
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.value != this.props.value) {
      this.setValue(nextProps.value);
    }
  },
  __onValueChange: function __onValueChange(obj) {
    this.state.text = obj.text;
    this.state.value = obj.value;
    this.props.onChange && this.props.onChange(obj);
  },
  setValue: function setValue(value) {
    this.state.value = value;
    this.refs.treeselector.setValue(value);
  },
  getValue: function getValue() {
    return this.state.value;
  },
  __itemContentRender: function __itemContentRender(data) {
    var _icon = '';

    if (data.type == 1) {
      _icon = 'fa-sitemap';
    }

    if (data.type == 2) {
      _icon = 'fa-graduation-cap';
    }

    return React.createElement("span", null, React.createElement("i", {
      style: {
        margin: 5
      },
      className: 'fa ' + _icon
    }), data.zn_title);
  },
  render: function render() {
    return React.createElement(TreeSelector, _extends({
      ref: "treeselector"
    }, this.props, {
      model: "ZNPluginAdminRole",
      value: this.state.value,
      itemContentRender: this.__itemContentRender,
      className: zn.react.classname("zn-plugin-admin-role-selector", this.props.className),
      onValueChange: this.__onValueChange
    }));
  }
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(60),
    castFunction = __webpack_require__(64);

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, castFunction(iteratee));
}

module.exports = forOwn;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(140),
    isObjectLike = __webpack_require__(9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(142),
    baseUnary = __webpack_require__(39),
    nodeUtil = __webpack_require__(40);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(59);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(11),
    isObject = __webpack_require__(6);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(63);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12),
    root = __webpack_require__(7);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(162),
    mapCacheDelete = __webpack_require__(169),
    mapCacheGet = __webpack_require__(171),
    mapCacheHas = __webpack_require__(172),
    mapCacheSet = __webpack_require__(173);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(184),
    stubArray = __webpack_require__(74);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(28);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(82);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(70);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkboard = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _checkboard = __webpack_require__(231);

var checkboard = _interopRequireWildcard(_checkboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkboard = exports.Checkboard = function Checkboard(_ref) {
  var white = _ref.white,
      grey = _ref.grey,
      size = _ref.size,
      renderers = _ref.renderers,
      borderRadius = _ref.borderRadius,
      boxShadow = _ref.boxShadow;

  var styles = (0, _reactcss2.default)({
    'default': {
      grid: {
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        absolute: '0px 0px 0px 0px',
        background: 'url(' + checkboard.get(white, grey, size, renderers.canvas) + ') center left'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.grid });
};

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
  renderers: {}
};

exports.default = Checkboard;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['model'], function (value, index) {
  return __webpack_require__(110)("./" + value + ".js");
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['FormDesigner', 'LetterSelector', 'ModelEditor', 'NavigationBar', 'RoleSelector', 'TreeEditor', 'TreeSelector', 'UserSelector', 'UserSessionInfo'], function (value, index) {
  return __webpack_require__(112)("./" + value + ".js");
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      primaryTable: null,
      primaryFormItems: [{
        title: '名称',
        type: 'Input',
        name: 'zn_title'
      }, {
        title: '表名',
        type: 'Input',
        name: 'table_name'
      }, {
        title: '继承模型',
        type: 'CheckboxGroup',
        name: 'mixins',
        data: [{
          text: '基础模型',
          value: 'zn.db.common.model.Base'
        }, {
          text: '树模型',
          value: 'zn.db.common.model.Tree'
        }, {
          text: '权限模型',
          value: 'zn.db.common.model.Rights'
        }]
      }, {
        title: '说明',
        type: 'Textarea',
        name: 'zn_note'
      }],
      tableFieldFormItems: [{
        title: '字段类型',
        type: 'Input',
        name: 'field_type'
      }, {
        title: '字段函数',
        type: 'Input',
        name: 'field_convert'
      }, {
        title: '字段默认值',
        type: 'Input',
        name: 'field_default'
      }, //{ title: '字段描述', type: 'Textarea', name: 'field_detail' },
      {
        title: '表单名称(title)',
        type: 'Input',
        name: 'title'
      }, {
        title: '表单名(name)',
        type: 'Input',
        name: 'name'
      }, {
        title: '表单类型',
        type: 'Menu',
        name: 'type',
        data: ['Input', 'Select', 'Label', 'ImageUploader', 'FileUploader', 'Checkbox', 'CheckboxGroup', 'Radio', 'RadioGroup', 'Textarea', 'Richarea']
      }, {
        title: '资源ID(var_id)',
        type: 'Input',
        attrs: {
          type: 'number'
        },
        name: 'var_id'
      }, {
        title: '宽度(width)',
        type: 'Input',
        attrs: {
          type: 'number'
        },
        name: 'width'
      }, {
        title: '数据源(data)',
        type: 'Textarea',
        name: 'data'
      }, {
        title: '属性(props)',
        type: 'Textarea',
        name: 'props'
      }, {
        title: '说明',
        type: 'Textarea',
        name: 'zn_note'
      }],
      deputyTables: []
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadInfo(this.props.menuId);
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    if (prevProps.menuId != this.props.menuId) {
      this.__loadInfo(this.props.menuId);
    }
  },
  __parseData: function __parseData(data) {
    var _tables = data[0],
        _fields = data[1],
        _table_fields = {};
    this.state.primaryTable = null;
    this.state.deputyTables = [];

    _fields.forEach(function (field) {
      if (!_table_fields[field.table_id]) {
        _table_fields[field.table_id] = [];
      }

      _table_fields[field.table_id].push(field);
    });

    _tables.forEach(function (table) {
      table.fields = _table_fields[table.id] || [];

      if (table.parent_id) {
        this.state.deputyTables.push(table);
      } else {
        this.state.primaryTable = table;
      }
    }.bind(this));

    this.forceUpdate();
  },
  __loadInfo: function __loadInfo(menuId) {
    zn.http.post('/zn.plugin.admin/menu/getMenuForm', {
      menuId: menuId || this.props.menuId
    }).then(function (data) {
      if (data.status == 200) {
        this.__parseData(data.result);
      } else {
        zn.notification.error(data.result);
      }
    }.bind(this), function () {
      zn.notification.error('服务器错误：');
    });
  },
  __createTable: function __createTable(parent_id) {
    var _this = this;

    zn.dialog({
      title: '创建表',
      content: React.createElement(zn.react.Form, {
        merge: "values",
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: 'ZNPluginAdminMenuTable'
        },
        hiddens: {
          menu_id: this.props.menuId,
          parent_id: parent_id || 0
        },
        onSubmitSuccess: function onSubmitSuccess() {
          return _this.__loadInfo();
        },
        items: this.state.primaryFormItems
      })
    });
  },
  __editTable: function __editTable(table) {
    var _this2 = this;

    zn.dialog({
      title: '修改表信息',
      content: React.createElement(zn.react.Form, {
        merge: "updates",
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: 'ZNPluginAdminMenuTable',
          where: {
            id: table.id
          }
        },
        value: table,
        onSubmitSuccess: function onSubmitSuccess() {
          return _this2.__loadInfo();
        },
        items: this.state.primaryFormItems
      })
    });
  },
  __createField: function __createField(tableId) {
    var _this3 = this;

    zn.dialog({
      title: '创建字段',
      content: React.createElement(zn.react.Form, {
        merge: "values",
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: 'ZNPluginAdminMenuTableField'
        },
        hiddens: {
          table_id: tableId,
          menu_id: this.props.menuId
        },
        onSubmitSuccess: function onSubmitSuccess() {
          return _this3.__loadInfo();
        },
        items: this.state.tableFieldFormItems
      })
    });
  },
  __editField: function __editField(field) {
    var _this4 = this;

    zn.dialog({
      title: '修改字段',
      content: React.createElement(zn.react.Form, {
        merge: "updates",
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: 'ZNPluginAdminMenuTableField',
          where: {
            id: field.id
          }
        },
        value: zn.store.post('/zn.plugin.admin/model/selectOne', {
          model: 'ZNPluginWorkflowIndexTableField',
          where: {
            id: field.id
          }
        }),
        onSubmitSuccess: function onSubmitSuccess() {
          return _this4.__loadInfo();
        },
        items: this.state.tableFieldFormItems
      })
    });
  },
  __deleteField: function __deleteField(field) {
    var _self = this;

    zn.confirm('确定删除该字段吗？', '提示', function () {
      zn.preloader.open({
        title: '删除中...'
      });
      zn.http.post('/zn.plugin.admin/model/delete', {
        model: "ZNPluginAdminMenuTableField",
        where: {
          id: field.id
        }
      }).then(function (data) {
        if (data.status == 200) {
          zn.notification.success('删除成功');

          _self.__loadInfo();
        } else {
          zn.notification.error('删除失败：' + data.result);
        }

        zn.preloader.close();
      }, function () {
        zn.notification.error('服务器调用出错');
        zn.preloader.close();
      });
    }.bind(this));
  },
  __onGenerate: function __onGenerate(table) {
    var _self = this;

    zn.confirm('确定生成表(' + table.table_name + ')结构么？', '提示', function () {
      zn.preloader.open({
        title: '生成中...'
      });
      zn.http.post('/zn.plugin.admin/menu/generateTable', {
        tableId: table.id
      }).then(function (data) {
        if (data.status == 200) {
          zn.notification.success('生成成功');

          _self.__loadInfo();
        } else {
          zn.notification.error('生成失败：' + data.result);
        }

        zn.preloader.close();
      }, function () {
        zn.notification.error('服务器调用出错');
        zn.preloader.close();
      });
    }.bind(this));
  },
  __onRegenerate: function __onRegenerate(table) {
    zn.confirm('重新生成表结构将会抹掉已存在数据, 确认操作？', '警告！！！', function () {
      this.__onGenerate(table);
    }.bind(this));
  },
  __renderTable: function __renderTable(table) {
    var _this5 = this;

    var _isPrimary = !table.parent_id;

    return React.createElement("div", {
      className: "table"
    }, React.createElement("div", {
      className: "table-info"
    }, React.createElement("div", {
      className: ""
    }, React.createElement("span", {
      className: "name"
    }, (table.zn_title ? "【" + table.zn_title + "】" : '') + table.table_name, React.createElement("i", {
      onClick: function onClick() {
        return _this5.__editTable(table);
      },
      "data-tooltip": "\u4FEE\u6539\u8868\u4FE1\u606F",
      className: "fa fa-edit"
    })), _isPrimary && React.createElement("span", {
      className: "zr-tag"
    }, "\u4E3B\u8868(Primary Table)")), React.createElement("div", null, React.createElement("span", {
      className: "time"
    }, table.zn_create_time))), React.createElement("ul", {
      className: "table-fields"
    }, table.fields.map(function (field) {
      var _this6 = this;

      return React.createElement("li", {
        className: "table-field"
      }, React.createElement("span", {
        className: "name"
      }, "[ ", field.type, " ] ", field.title, "(", field.name, ") "), React.createElement("i", {
        onClick: function onClick() {
          return _this6.__editField(field);
        },
        "data-tooltip": "\u7F16\u8F91\u5B57\u6BB5",
        className: "fa fa-edit"
      }), React.createElement("i", {
        onClick: function onClick() {
          return _this6.__deleteField(field);
        },
        "data-tooltip": "\u5220\u9664\u5B57\u6BB5",
        className: "fa fa-trash-o"
      }));
    }.bind(this))), React.createElement("div", {
      className: "toolbar"
    }, React.createElement("div", null, React.createElement(zn.react.Button, {
      onClick: function onClick() {
        return _this5.__createField(table.id);
      },
      text: "\u6DFB\u52A0\u5B57\u6BB5",
      className: "plain"
    }), _isPrimary && React.createElement(zn.react.Button, {
      onClick: function onClick() {
        return _this5.__createTable(table.id);
      },
      text: "\u6DFB\u52A0\u9644\u8868",
      className: "plain"
    })), React.createElement("div", null, !!table.has_generated ? React.createElement("span", {
      onClick: function onClick() {
        return _this5.__onRegenerate(table);
      },
      "data-tooltip": "\u91CD\u65B0\u751F\u6210\u6570\u636E\u8868, \u9700\u6CE8\u610F(\u5DF2\u6709\u6570\u636E\u5C06\u88AB\u62B9\u6389).",
      className: "zr-tag hover primary"
    }, React.createElement("i", {
      className: "fa fa-check zr-padding-3"
    }), "\u5DF2\u751F\u6210") : React.createElement("span", {
      onClick: function onClick() {
        return _this5.__onGenerate(table);
      },
      "data-tooltip": "\u751F\u6210\u6570\u636E\u8868",
      className: "zr-tag hover orangle"
    }, React.createElement("i", {
      className: "fa fa-ban zr-padding-3"
    }), "\u672A\u751F\u6210"))));
  },
  __renderDeputyTables: function __renderDeputyTables() {
    var _len = this.state.deputyTables.length;
    return React.createElement("div", {
      className: "deputy-tables"
    }, React.createElement("div", {
      className: "title"
    }, React.createElement("span", null, "\u9644\u8868(", _len, ")")), this.state.deputyTables.map(function (table) {
      return this.__renderTable(table);
    }.bind(this)));
  },
  render: function render() {
    var _this7 = this;

    return React.createElement("div", {
      className: "zn-plugin-admin-form-designer"
    }, this.state.primaryTable ? this.__renderTable(this.state.primaryTable) : React.createElement("div", {
      className: "wf-button",
      onClick: function onClick() {
        return _this7.__createTable(0);
      }
    }, "\u521B\u5EFA\u4E3B\u8868"), this.__renderDeputyTables());
  }
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(118);

var React = __webpack_require__(0);

var MenuItem = React.createClass({
  displayName: "MenuItem",
  getInitialState: function getInitialState() {
    return {
      active: true
    };
  },
  __renderChildren: function __renderChildren(children) {
    return React.createElement("ul", {
      className: "sub-menu-list"
    }, children.map(function (item, index) {
      var _this = this;

      return React.createElement("li", {
        className: item.url && zn.react.session.containPath(item.url) ? 'active-item' : '',
        key: index,
        onClick: function onClick() {
          return _this.__onSubItemClick(item, index);
        }
      }, React.createElement("div", {
        className: "item-title"
      }, React.createElement("div", {
        className: "title"
      }, React.createElement("i", {
        className: "fa " + item.icon
      }), item.zn_title)));
    }.bind(this)));
  },
  __onSubItemClick: function __onSubItemClick(item, index) {
    if (item.url) {
      this.props.onMenuItemClick && this.props.onMenuItemClick(item, index);
      zn.react.session.relativeJump(item.url);
    } else {
      zn.http.get('/zn.plugin.admin/menu/getMenuPrimaryInfo?menuId=' + item.id).then(function (data) {
        if (data.status == 200) {
          zn.react.session.relativeJump("/znpluginadmin.setting.menupage", {
            menu: item.id
          });
        } else {
          zn.notification.error(data.result);
        }
      }, function () {
        zn.notification.error('请求出错');
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var item = this.props.item;
    return React.createElement("li", {
      className: "menu-item",
      "data-active": this.state.active
    }, React.createElement("div", {
      className: "item-title",
      onClick: function onClick() {
        return _this2.setState({
          active: !_this2.state.active
        });
      }
    }, React.createElement("span", {
      className: "title"
    }, React.createElement("i", {
      className: "fa " + item.icon
    }), item.zn_title), React.createElement("i", {
      className: "fa zr-padding-3 zn-fr " + (this.state.active ? 'fa-angle-down' : 'fa-angle-right')
    })), !!item.children && !!item.children.length && this.__renderChildren(item.children));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  __renderItem: function __renderItem(item, index) {
    return React.createElement(MenuItem, {
      onMenuItemClick: this.props.onMenuItemClick,
      item: item,
      index: index
    });
  },
  render: function render() {
    return React.createElement("div", {
      className: zn.react.classname("zn-plugin-admin-navigation-bar", this.props.className),
      style: this.props.style
    }, React.createElement("ul", {
      className: "menu-list"
    }, this.props.data.map(this.__renderItem)));
  }
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(120);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminVar',
      pid: 1,
      value: null,
      text: null,
      debug: false,
      disabled: false,
      cascade: false,
      activeAll: true,
      checkboxEnabled: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      data: zn.store.post('/zn.plugin.admin/model/getAllByPid', {
        model: this.props.model,
        pid: this.props.pid
      })
    };
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.value != this.props.value) {
      this.setState({
        value: this.props.value
      });
    }
  },
  setValue: function setValue(value) {
    this.setState({
      value: value
    });
  },
  getValue: function getValue() {
    return this.state.value;
  },
  __itemContentRender: function __itemContentRender(value, item) {
    var _result = this.props.itemContentRender && this.props.itemContentRender(value, item);

    if (!_result) {
      _result = React.createElement("span", null, value.icon && React.createElement("i", {
        style: {
          margin: 5
        },
        className: 'fa ' + value.icon
      }), (this.props.debug ? value.id + '、' : '') + value.zn_title);
    }

    return _result;
  },
  __onValueChange: function __onValueChange(obj) {
    this.state.value = obj.value;
    this.state.text = obj.text;
    this.forceUpdate();
    this.props.onValueChange && this.props.onValueChange(obj);
  },
  render: function render() {
    return React.createElement(zn.react.Tree, _extends({
      ref: "tree"
    }, this.props, {
      className: zn.react.classname("zn-plugin-admin-tree-selector", this.props.className),
      data: this.state.data,
      value: this.state.value,
      text: this.state.text,
      onValueChange: this.__onValueChange,
      contentRender: this.__itemContentRender
    }));
  }
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(121);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      editable: true,
      model: 'ZNPluginAdminVar',
      pid: 0,
      fields: [{
        title: '显示值',
        name: 'zn_title',
        type: 'Textarea'
      }]
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/model/getByPid', {
        model: this.props.model,
        pid: this.props.pid
      }),
      formItems: this.props.fields,
      mainToolbarItems: [{
        tooltip: '添加主项',
        value: 'addMain',
        icon: 'fa-plus-square'
      }],
      subToolbarItems: [{
        tooltip: '添加子项',
        value: 'addChild',
        icon: 'fa-plus'
      }, {
        tooltip: '删除当前项',
        value: 'delete',
        icon: 'fa-remove'
      }, {
        tooltip: '编辑当前项',
        value: 'edit',
        icon: 'fa-edit'
      }, {
        tooltip: '上移当前项',
        value: 'up',
        icon: 'fa-angle-up'
      }, {
        tooltip: '下移当前项',
        value: 'down',
        icon: 'fa-angle-down'
      }, {
        tooltip: '移动到',
        value: 'moveTo',
        icon: 'fa-retweet'
      }]
    };
  },
  editTreeColumn: function editTreeColumn(data, treeColumn) {
    if (!data || !treeColumn) {
      return zn.toast.error('请先选择要编辑的记录'), false;
    }

    zn.dialog({
      title: '编辑',
      content: React.createElement(zn.react.Form, {
        merge: "updates",
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: this.props.model,
          where: {
            id: data.id
          }
        },
        value: zn.store.post('/zn.plugin.admin/model/selectOne', {
          model: this.props.model,
          where: {
            id: data.id
          }
        }),
        items: this.state.formItems,
        onSubmitSuccess: function onSubmitSuccess() {
          return treeColumn.props.parent.refresh();
        }
      })
    });
  },
  addTreeColumn: function addTreeColumn(data, treeColumn) {
    var _where = {};

    for (var key in this._where) {
      _where[key] = this._where[key];
    }

    if (data) {
      _where['zn_tree_pid'] = data.id;
    }

    zn.dialog({
      title: data ? '添加子项: ' + data.zn_title : '添加主项',
      content: React.createElement(zn.react.Form, {
        merge: "values",
        action: "/zn.plugin.admin/model/insert",
        hiddens: _where,
        exts: {
          model: this.props.model
        },
        items: this.state.formItems,
        onSubmitSuccess: function () {
          if (treeColumn) {
            treeColumn.refresh();
          } else {
            this.state.data.refresh();
          }
        }.bind(this)
      })
    });
  },
  orderTreeColumn: function orderTreeColumn(order, data, treeColumn) {
    if (!data || !treeColumn) {
      return zn.toast.error('请先选择要排序的记录'), false;
    }

    zn.http.post('/zn.plugin.admin/model/orderTreeNode', {
      model: this.props.model,
      id: data.id,
      order: order
    }).then(function (data) {
      treeColumn.props.parent.refresh();
    }.bind(this), function (data) {
      zn.toast.error('操作出错: ' + data.result);
    });
  },
  deleteTreeColumn: function deleteTreeColumn(data, treeColumn) {
    if (!data || !treeColumn) {
      return zn.toast.error('请先选择要删除的记录'), false;
    }

    zn.confirm('确认删除该项吗？', '提示', function () {
      zn.http.post('/zn.plugin.admin/model/delete', {
        model: this.props.model,
        where: {
          id: data.id
        }
      }).then(function (data) {
        treeColumn.props.parent.refresh();
        zn.toast.success('删除成功！');
      }.bind(this), function (data) {
        zn.toast.error('删除出错: ' + data.result);
      });
    }.bind(this));
  },
  __onDataItemClick: function __onDataItemClick(curr, click, treeColumn) {
    if (curr.id == click.id) {
      return zn.notification.warning('目标节点不能跟原始节点一样'), false;
    } //zn.dialog.close();


    zn.preloader.open("正在提交中...");
    zn.http.post('/zn.plugin.admin/model/moveTreeNode', {
      model: this.props.model,
      source: curr.id,
      target: click.id
    }).then(function (data) {
      treeColumn.props.parent.refresh();
      zn.notification.success('移动成功！');
      zn.preloader.close();
    }.bind(this), function (data) {
      zn.notification.error('移动出错: ' + data.result);
      zn.preloader.close();
    });
  },
  moveTreeColumn: function moveTreeColumn(curr, treeColumn) {
    var _this = this;

    zn.dialog({
      title: "移动节点",
      content: React.createElement(zn.react.Tree, {
        data: this.state.data,
        onItemClick: function onItemClick(data) {
          return _this.__onDataItemClick(curr, data, treeColumn);
        },
        contentRender: this.__itemContentRender
      })
    });
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.value) {
      case 'addMain':
        this.addTreeColumn(null, null);
        break;

      case 'addChild':
        this.addTreeColumn(this.state.currData, this.state.treeColumn);
        break;

      case 'edit':
        this.editTreeColumn(this.state.currData, this.state.treeColumn);
        break;

      case 'up':
        this.orderTreeColumn('up', this.state.currData, this.state.treeColumn);
        break;

      case 'down':
        this.orderTreeColumn('down', this.state.currData, this.state.treeColumn);
        break;

      case 'delete':
        this.deleteTreeColumn(this.state.currData, this.state.treeColumn);
        break;

      case 'moveTo':
        this.moveTreeColumn(this.state.currData, this.state.treeColumn);
        break;
    }
  },
  __itemContentRender: function __itemContentRender(data, treeColumn) {
    var _result = this.props.contentRender && this.props.contentRender(data, treeColumn, this);

    if (_result) {
      return _result;
    } else {
      return React.createElement("div", {
        className: "item-content"
      }, data.icon && React.createElement(zn.react.Icon, {
        icon: data.icon
      }), React.createElement("span", {
        "data-tooltip": data.id
      }, data.zn_title));
    }
  },
  __onTreeItemClick: function __onTreeItemClick(data, treeColumn, tree, event) {
    this.state.currData = data;
    this.state.treeColumn = treeColumn;
    this.forceUpdate();
    this.props.onItemClick && this.props.onItemClick(data, treeColumn, tree, event);
  },
  render: function render() {
    return React.createElement("div", {
      className: zn.react.classname("zn-plugin-admin-tree-editor", this.props.className)
    }, this.props.editable && React.createElement("div", {
      className: "tool-bars"
    }, this.state.mainToolbarItems.map(function (item) {
      var _this2 = this;

      return React.createElement("i", {
        onClick: function onClick() {
          return _this2.__onToolbarClick(item);
        },
        "data-tooltip": item.tooltip,
        className: "fa " + item.icon
      });
    }.bind(this)), React.createElement("i", {
      className: "separator"
    }), this.state.currData && this.state.subToolbarItems.map(function (item) {
      var _this3 = this;

      return React.createElement("i", {
        onClick: function onClick() {
          return _this3.__onToolbarClick(item);
        },
        "data-tooltip": item.tooltip,
        className: "fa " + item.icon
      });
    }.bind(this))), React.createElement(zn.react.Tree, _extends({}, this.props, {
      data: this.state.data,
      onItemClick: this.__onTreeItemClick,
      contentRender: this.__itemContentRender
    })));
  }
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {},
  render: function render() {
    return React.createElement("div", {
      className: "zn-plugin-admin-user-session-info"
    });
  }
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['FontAwesomeIcons', 'ColorPicker'], function (value, index) {
  return __webpack_require__(128)("./" + value + ".js");
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(135)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(61),
    keys = __webpack_require__(15);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(138);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(139),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(20),
    isIndex = __webpack_require__(36),
    isTypedArray = __webpack_require__(37);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(21);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(11),
    getPrototype = __webpack_require__(43),
    isObjectLike = __webpack_require__(9);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(174),
    isObjectLike = __webpack_require__(9);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(175),
    arraySome = __webpack_require__(178),
    cacheHas = __webpack_require__(179);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(7);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(72),
    getSymbols = __webpack_require__(46),
    keys = __webpack_require__(15);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(73),
    isArray = __webpack_require__(3);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(78),
    toKey = __webpack_require__(29);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(3),
    isKey = __webpack_require__(47),
    stringToPath = __webpack_require__(192),
    toString = __webpack_require__(195);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(60),
    createBaseEach = __webpack_require__(204);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(48),
    eq = __webpack_require__(16);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(7);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))

/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(73),
    getPrototype = __webpack_require__(43),
    getSymbols = __webpack_require__(46),
    stubArray = __webpack_require__(74);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(49);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(220),
    getPrototype = __webpack_require__(43),
    isPrototype = __webpack_require__(41);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(48),
    eq = __webpack_require__(16);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6),
    now = __webpack_require__(253),
    toNumber = __webpack_require__(254);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorWrap = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _debounce = __webpack_require__(90);

var _debounce2 = _interopRequireDefault(_debounce);

var _color = __webpack_require__(8);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorWrap = exports.ColorWrap = function ColorWrap(Picker) {
  var ColorPicker = function (_ref) {
    _inherits(ColorPicker, _ref);

    function ColorPicker(props) {
      _classCallCheck(this, ColorPicker);

      var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

      _this.handleChange = function (data, event) {
        var isValidColor = _color2.default.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
          _this.props.onChange && _this.props.onChange(colors, event);
        }
      };

      _this.handleSwatchHover = function (data, event) {
        var isValidColor = _color2.default.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onSwatchHover && _this.props.onSwatchHover(colors, event);
        }
      };

      _this.state = _extends({}, _color2.default.toState(props.color, 0));

      _this.debounce = (0, _debounce2.default)(function (fn, data, event) {
        fn(data, event);
      }, 100);
      return _this;
    }

    _createClass(ColorPicker, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setState(_extends({}, _color2.default.toState(nextProps.color, this.state.oldHue)));
      }
    }, {
      key: 'render',
      value: function render() {
        var optionalEvents = {};
        if (this.props.onSwatchHover) {
          optionalEvents.onSwatchHover = this.handleSwatchHover;
        }

        return _react2.default.createElement(Picker, _extends({}, this.props, this.state, {
          onChange: this.handleChange
        }, optionalEvents));
      }
    }]);

    return ColorPicker;
  }(_react.PureComponent || _react.Component);

  ColorPicker.propTypes = _extends({}, Picker.propTypes);

  ColorPicker.defaultProps = _extends({}, Picker.defaultProps, {
    color: {
      h: 250,
      s: 0.50,
      l: 0.20,
      a: 1
    }
  });

  return ColorPicker;
};

exports.default = ColorWrap;

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pink", function() { return pink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepPurple", function() { return deepPurple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indigo", function() { return indigo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightBlue", function() { return lightBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cyan", function() { return cyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teal", function() { return teal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightGreen", function() { return lightGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lime", function() { return lime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amber", function() { return amber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orange", function() { return orange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepOrange", function() { return deepOrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brown", function() { return brown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueGrey", function() { return blueGrey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkText", function() { return darkText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightText", function() { return lightText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkIcons", function() { return darkIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightIcons", function() { return lightIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
var red = {"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"};
var pink = {"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"};
var purple = {"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"};
var deepPurple = {"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"};
var indigo = {"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"};
var blue = {"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"};
var lightBlue = {"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"};
var cyan = {"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"};
var teal = {"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"};
var green = {"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"};
var lightGreen = {"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"};
var lime = {"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"};
var yellow = {"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"};
var amber = {"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"};
var orange = {"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"};
var deepOrange = {"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"};
var brown = {"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"};
var grey = {"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"};
var blueGrey = {"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"};
var darkText = {"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"};
var lightText = {"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"};
var darkIcons = {"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"};
var lightIcons = {"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"};
var white = "#ffffff";
var black = "#000000";

/* harmony default export */ __webpack_exports__["default"] = ({
  red: red,
  pink: pink,
  purple: purple,
  deepPurple: deepPurple,
  indigo: indigo,
  blue: blue,
  lightBlue: lightBlue,
  cyan: cyan,
  teal: teal,
  green: green,
  lightGreen: lightGreen,
  lime: lime,
  yellow: yellow,
  amber: amber,
  orange: orange,
  deepOrange: deepOrange,
  brown: brown,
  grey: grey,
  blueGrey: blueGrey,
  darkText: darkText,
  lightText: lightText,
  darkIcons: darkIcons,
  lightIcons: lightIcons,
  white: white,
  black: black
});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['TreeModelView'], function (value, index) {
  return __webpack_require__(300)("./" + value + ".js");
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      masterId: 0,
      title: '',
      model: '',
      where: {},
      formItems: [],
      toolbarItems: []
    };
  },
  getInitialState: function getInitialState() {
    var _where = this.props.where;

    if (this.props.masterId) {
      _where.masterId = this.props.masterId;
    }

    return {
      where: _where,
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model,
        where: _where
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.masterId !== this.props.masterId) {
      this.state.data._data.where = {
        masterId: nextProps.masterId
      };
      this.state.data.exec();
    }
  },
  __doSuccess: function __doSuccess() {
    zn.modal.close();
    zn.toast.success('操作成功！');
    this.state.data.refresh();
  },
  __addItem: function __addItem(pid) {
    zn.dialog({
      title: '添加',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: this.props.model
        },
        hiddens: this.state.where,
        merge: "values",
        onSubmitSuccess: this.__doSuccess,
        btns: [{
          text: '添加',
          icon: 'fa-plus',
          type: 'submit',
          "float": 'right',
          style: {
            marginRight: 0
          }
        }, {
          text: '取消',
          type: 'cancle',
          "float": 'right',
          status: 'danger'
        }],
        items: this.props.formItems
      })
    });
  },
  __updateItem: function __updateItem(data) {
    zn.dialog({
      title: '修改信息',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: this.props.model
        },
        merge: "updates",
        value: data,
        onSubmitSuccess: this.__doSuccess,
        btns: [{
          text: '修改',
          icon: 'fa-edit',
          type: 'submit',
          "float": 'right',
          style: {
            marginRight: 0
          }
        }, {
          text: '取消',
          type: 'cancle',
          status: 'danger',
          "float": 'right'
        }],
        items: this.props.formItems
      })
    });
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.name) {
      case 'addItem':
        return this.__addItem();

      case 'updateItem':
        return this.__updateItem(this.state.currItem);

      case 'deleteItems':
        zn.confirm('确认删除该项吗？', '提示', function () {
          zn.http.post('/zn.plugin.admin/model/delete', {
            model: this.props.model,
            where: 'in in (' + this._value.join(',') + ')'
          }).then(function (data) {
            this.state.data.refresh();
            zn.toast.error('删除成功！');
          }.bind(this), function (data) {
            zn.toast.error('删除出错: ' + data.result);
          });
        }.bind(this));
        break;
    }
  },
  render: function render() {
    var _this = this;

    return React.createElement(zn.react.Page, {
      title: this.props.title,
      toolbarItems: this.props.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "zr-list-view-border",
      ref: "listview",
      textKey: "name",
      valueKey: "id",
      selectMode: "checkbox",
      itemRender: this.props.itemRender,
      onClick: function onClick(value, rtitem) {
        return _this._value = value;
      },
      data: this.state.data
    }));
  }
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['DataModelManager', 'PageDebugger', 'ServerManager'], function (value, index) {
  return __webpack_require__(305)("./" + value + ".js");
});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['Dashboard', 'Info'], function (value, index) {
  return __webpack_require__(311)("./" + value + ".js");
});

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['Project'], function (value, index) {
  return __webpack_require__(316)("./" + value + ".js");
});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      data: null,
      model: 'ZNPluginAdminProjectBug'
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.state.data.extend({
        where: {
          project_id: nextProps.data.id
        }
      }).exec();
    }
  },
  getInitialState: function getInitialState() {
    var _where = {};

    if (this.props.data) {
      _where.project_id = this.props.data.id;
    }

    return {
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model,
        where: _where
      }),
      items: [{
        title: '操作',
        width: 60,
        textAlign: 'center'
      }, {
        title: '问题',
        name: 'zn_title',
        width: 220,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: '状态',
        name: 'state',
        width: 80,
        filter: {
          type: 'Menu',
          data: [{
            text: '待处理',
            value: 0
          }, {
            text: '处理中...',
            value: 2
          }, {
            text: '已经解决',
            value: 3
          }, {
            text: '已经确认',
            value: 3
          }],
          opts: ['=']
        }
      }, {
        title: '优先级',
        name: 'priority',
        width: 80,
        filter: {
          type: 'Menu',
          data: [{
            text: '正常',
            value: 1
          }, {
            text: '紧急',
            value: 2
          }, {
            text: '非常紧急',
            value: 3
          }],
          opts: ['=']
        }
      }, {
        title: '开始时间',
        name: 'begin_time',
        width: 140
      }, {
        title: '结束时间',
        name: 'end_time',
        width: 140
      }, {
        title: '完成时间',
        name: 'finished_time',
        width: 140
      }, {
        title: '提交时间',
        name: 'zn_create_time',
        width: 140
      }, {
        title: '描述',
        name: 'zn_note'
      }],
      formItems: [{
        title: '问题',
        name: 'zn_title',
        type: 'Textarea'
      }, {
        title: '版本号',
        type: 'Input',
        name: 'version'
      }, {
        title: '优先级',
        type: 'Select',
        name: 'priority',
        data: [{
          text: '正常',
          value: 1
        }, {
          text: '紧急',
          value: 2
        }, {
          text: '非常紧急',
          value: 3
        }]
      }, {
        title: '开始时间',
        name: 'begin_time',
        type: 'Timer'
      }, {
        title: '结束时间',
        name: 'end_time',
        type: 'Timer'
      }, {
        title: '附件',
        name: 'files',
        type: 'FileUploader',
        action: '/zn.plugin.admin/uploadFiles'
      }, {
        title: '问题描述',
        name: 'description',
        type: 'RichEditor'
      }, {
        title: '解决方案',
        name: 'solution',
        type: 'RichEditor'
      }],
      toolbarItems: [{
        text: '添加',
        icon: 'fa-plus'
      }]
    };
  },
  __onRowActions: function __onRowActions(value, data) {
    var _data = this.state.data;

    var _self = this;

    switch (value.item.icon) {
      case 'fa-remove':
        zn.confirm('确定删除该数据吗？', '提示', function () {
          zn.http.post('/zn.plugin.admin/model/delete', {
            model: _self.props.model,
            where: {
              id: data.id
            }
          }).then(function (data) {
            zn.toast.success('删除成功！');

            _data.refresh();
          });
        });
        break;

      case 'fa-edit':
        this.__updateItem(data);

        break;
    }
  },
  __onView: function __onView() {},
  __onTableColumnRender: function __onTableColumnRender(rowIndex, columnIndex, data, item, value) {
    var _this = this;

    switch (columnIndex) {
      case 0:
        return React.createElement(zn.react.ListView, {
          className: "zr-flex",
          data: [{
            text: '删除',
            icon: 'fa-remove'
          }, {
            text: '修改',
            icon: 'fa-edit'
          }],
          itemRender: function itemRender(item, index) {
            return React.createElement("i", {
              title: item.text,
              className: 'fa ' + item.icon,
              style: item.style
            });
          },
          onClick: function onClick(value) {
            return _this.__onRowActions(value, data);
          }
        });

      case 1:
        return React.createElement("a", {
          style: {
            textDecoration: 'underline'
          },
          onClick: function onClick() {
            return _this.__onView(data);
          }
        }, value);

      case 2:
        switch (+value) {
          case 0:
            return React.createElement("span", null, "\u7B49\u5F85\u5904\u7406");

          case 1:
            return React.createElement("span", {
              style: {
                color: 'yellow'
              }
            }, "\u5904\u7406\u4E2D");

          case 2:
            return React.createElement("span", {
              style: {
                color: 'red'
              }
            }, "\u5DF2\u7ECF\u89E3\u51B3");

          case 3:
            return React.createElement("span", {
              style: {
                color: 'red'
              }
            }, "\u5DF2\u7ECF\u786E\u8BA4");
        }

        return null;

      case 3:
        switch (+value) {
          case 1:
            return React.createElement("span", null, "\u6B63\u5E38");

          case 2:
            return React.createElement("span", {
              style: {
                color: '#F44336'
              }
            }, "\u7D27\u6025");

          case 3:
            return React.createElement("span", {
              style: {
                color: 'red'
              }
            }, "\u975E\u5E38\u7D27\u6025");
        }

        return null;
    }
  },
  __updateItem: function __updateItem(data) {
    zn.dialog({
      title: '修改',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: this.props.model,
          where: {
            id: data.id
          }
        },
        merge: "updates",
        value: zn.store.post('/zn.plugin.admin/model/selectOne', {
          model: this.props.model,
          where: {
            id: data.id
          }
        }),
        onSubmitSuccess: this.__doSuccess,
        items: this.state.formItems
      })
    });
  },
  __doSuccess: function __doSuccess() {
    zn.modal.close();
    zn.toast.success('操作成功');
    this.state.data.refresh();
  },
  __addItem: function __addItem(pid) {
    if (!this.props.data) {
      zn.toast.warning('请先选择左边商品类型项');
      return false;
    }

    zn.dialog({
      title: '添加',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: this.props.model
        },
        hiddens: {
          project_id: this.props.data.id
        },
        merge: "values",
        onSubmitSuccess: this.__doSuccess,
        btns: [{
          text: '添加',
          icon: 'fa-plus',
          type: 'submit',
          "float": 'right',
          style: {
            marginRight: 0
          }
        }, {
          text: '取消',
          type: 'cancle',
          status: 'danger',
          "float": 'right'
        }],
        items: this.state.formItems
      })
    });
  },
  __onToolbarClick: function __onToolbarClick(rtitem) {
    switch (rtitem.icon) {
      case 'fa-plus':
        this.__addItem();

        break;
    }
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u95EE\u9898\u5217\u8868",
      icon: "fa-list-ul",
      onToolbarClick: this.__onToolbarClick,
      toolbarItems: this.state.toolbarItems
    }, React.createElement(zn.react.PagerView, {
      view: "Table",
      checkbox: 0,
      enableFilter: true,
      showHeader: true,
      data: this.state.data,
      columnRender: this.__onTableColumnRender,
      onTableRowClick: this.__onTableRowClick,
      items: this.state.items
    }));
  }
});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['Base', 'Config', 'ConfigManager', 'Menu', 'MenuPage', 'Role', 'Var', 'UsersForRoles'], function (value, index) {
  return __webpack_require__(318)("./" + value + ".js");
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(326);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: 'ZNPluginAdminUser',
        where: this.props.roleId ? "locate('," + this.props.roleId + ",',role_ids) <> 0" : null
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.roleId != this.props.roleId) {
      this.state.data.extend({
        where: "locate('," + nextProps.roleId + ",',role_ids) <> 0"
      }).exec();
    }
  },
  __onUserClick: function __onUserClick(event, item, index) {
    event.stopPropagation();
    zn.react.session.relativeJump('/znpluginadmin.user.infoedit', {
      userId: item.id
    });
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    return React.createElement("div", {
      className: "user"
    }, React.createElement("img", {
      className: "avatar",
      src: item.avatar_img ? zn.http.fixURL(item.avatar_img) : "./images/DefaultAvatar.png"
    }), React.createElement("div", {
      className: "name",
      onClick: function onClick(event) {
        return _this.__onUserClick(event, item, index);
      }
    }, item.name));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "zn-plugin-admin-users-for-roles",
      textKey: "name",
      valueKey: "id",
      selectMode: "none",
      itemRender: this.__itemRender,
      data: this.state.data
    });
  }
});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.arrayValueToObject(['Info', 'InfoEdit', 'List', 'LoginLog'], function (value, index) {
  return __webpack_require__(328)("./" + value + ".js");
});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);

zn.plugin.admin = __webpack_require__(109);
module.exports = __webpack_require__(304);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);

__webpack_require__(106);

__webpack_require__(108);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var _exports = {};
zn.overwrite(_exports, __webpack_require__(51));
zn.overwrite(_exports, __webpack_require__(52));
zn.overwrite(_exports, __webpack_require__(58));
zn.overwrite(_exports, __webpack_require__(93));

_exports.getToken = function () {
  return zn.react.session.jsonKeyValue("WEB_LOGIN_SESSION");
};

module.exports = _exports;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": 51,
	"./model.js": 111
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 110;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = {
  dialogDelete: function dialogDelete(model, where, success, error) {
    zn.confirm('确定删除数据吗？', '提示', function () {
      zn.http.post('/zn.plugin.admin/model/delete', {
        model: model,
        where: where
      }).then(function (data) {
        zn.notification.success('删除成功！');
        callback && callback(data);
      }, function (data) {
        zn.notification.error('删除失败！');
        error && error(data);
      });
    });
  },
  dialogInsert: function dialogInsert(argv) {
    var _argv = zn.extend({
      title: '添加',
      hiddens: {}
    }, argv);

    zn.dialog({
      title: _argv.title,
      content: React.createElement(zn.react.Form, {
        merge: "values",
        action: "/zn.plugin.admin/model/insert",
        exts: zn.extend({
          model: _argv.model
        }, _argv.exts),
        hiddens: _argv.hiddens,
        onSubmitSuccess: _argv.success,
        onSubmitError: _argv.error,
        items: _argv.formItems
      })
    });
  },
  dialogUpdate: function dialogUpdate(argv) {
    var _argv = zn.extend({
      title: '修改'
    }, argv);

    zn.dialog({
      title: _argv.title,
      content: React.createElement(zn.react.Form, {
        merge: "updates",
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: _argv.model,
          where: _argv.where
        },
        value: _argv.value,
        items: _argv.formItems,
        onSubmitSuccess: _argv.success,
        onSubmitError: _argv.error
      })
    });
  }
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ErrorPage.js": 113,
	"./FormDesigner.js": 53,
	"./LetterSelector.js": 31,
	"./ModelEditor.js": 19,
	"./NavigationBar.js": 54,
	"./RoleSelector.js": 32,
	"./TreeEditor.js": 56,
	"./TreeSelector.js": 55,
	"./UserList.js": 122,
	"./UserSelector.js": 124,
	"./UserSessionInfo.js": 57,
	"./WapNavigationBar.js": 127,
	"./index.js": 52
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 112;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return React.createElement("div", {
      className: "zn-plugin-admin-error-page"
    }, React.createElement("div", {
      className: "alert"
    }, React.createElement("h1", null, React.createElement("div", {
      className: "l12n"
    }, "This Connection Is Not Private"))), React.createElement("div", {
      className: "alert-body"
    }), React.createElement("div", {
      className: "details"
    }, React.createElement("p", {
      id: "detailsText"
    }, React.createElement("p", null, "Safari warns you when a website has a certificate that is not valid. This may happen if the website is misconfigured or an attacker has compromised your connection."), React.createElement("p", null, "To learn more, you can", React.createElement("a", {
      role: "button",
      onclick: "CertificateWarningController.showCertificateInformation();"
    }, "view the certificate"), ". If you understand the risks involved, you can ", React.createElement("a", {
      role: "button",
      onclick: "CertificateWarningController.visitInsecureWebsite();"
    }, "visit this website"), "."))));
  }
});

/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);

var React = __webpack_require__(0);

var LetterSelector = __webpack_require__(31);

var RoleSelector = __webpack_require__(32);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      mulitable: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      currIndex: 0,
      search: '',
      loading: false,
      value: this.props.mulitable ? ',' : 0,
      users: []
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadUsers();
  },
  __onLetterChange: function __onLetterChange(value) {
    this.setState({
      loading: true
    });

    if (value.length > 2) {
      zn.http.get('/zn.plugin.admin/user/findUsersByChars?chars=' + value).then(function (data) {
        this.setState({
          loading: false,
          users: data.result
        });
      }.bind(this));
    } else {
      this.__loadUsers();
    }
  },
  __onRoleChange: function __onRoleChange(value) {
    this.setState({
      loading: true
    });
    zn.http.get('/zn.plugin.admin/role/getRoleUsers?role=' + value.value).then(function (data) {
      this.setState({
        loading: false,
        users: data.result
      });
    }.bind(this));
  },
  __loadUsers: function __loadUsers(where) {
    this.setState({
      loading: true
    });
    zn.http.post('/zn.plugin.admin/user/getAllUser').then(function (data) {
      this.setState({
        loading: false,
        users: data.result
      });
    }.bind(this));
  },
  __onSearch: function __onSearch(value) {
    this.setState({
      search: value
    });
  },
  __onUserClick: function __onUserClick(user) {
    var _id = user.value + ',';

    if (this.props.mulitable) {
      if (this.state.value.indexOf(',' + _id) == -1) {
        this.state.value = this.state.value + _id;
      } else {
        this.state.value = this.state.value.replace(',' + _id, ',');
      }
    } else {
      if (this.state.value == user.value) {
        this.state.value = null;
      } else {
        this.state.value = user.value;
      }
    }

    this.props.onUserClick && this.props.onUserClick(user);
    this.setValue(this.state.value);
  },
  __onUserCheckAll: function __onUserCheckAll(event, value) {
    if (value) {
      this.setValue(',' + this._users.join(',') + ',');
    } else {
      this.setValue(',');
    }
  },
  __renderUsers: function __renderUsers() {
    var _value = this.state.value,
        _search = this.state.search;
    this._users = [];
    return React.createElement("div", {
      className: "user-view"
    }, React.createElement(zn.react.Search, {
      onSearch: this.__onSearch
    }), !this.state.loading ? React.createElement("ul", {
      className: "users"
    }, this.state.users.map(function (user, index) {
      var _this = this;

      var _selected = false,
          _userId = user.value,
          _name = user.text;

      if (_search && _name.indexOf(_search) == -1) {
        return null;
      } else {
        if (_search) {
          _name = _name.replace(_search, '<span style="color:red">' + _search + '</span>');
        }
      }

      this._users.push(_userId);

      if (this.props.mulitable) {
        _selected = _value.toString().indexOf(',' + _userId + ',') != -1;
      } else {
        _selected = +_value === +_userId;
      }

      return React.createElement("li", {
        key: index,
        className: 'user ' + (_selected ? 'selected' : ''),
        onClick: function onClick() {
          return _this.__onUserClick(user);
        }
      }, user.avatar_img ? React.createElement("img", {
        className: "avatar",
        src: zn.http.fixURL(user.avatar_img) || './images/DefaultAvatar.png'
      }) : React.createElement("span", {
        className: "first-char"
      }, user.first_char), React.createElement("span", {
        className: "name",
        dangerouslySetInnerHTML: {
          __html: _name
        }
      }));
    }.bind(this)), this.props.mulitable && React.createElement("li", null, React.createElement(zn.react.Checkbox, {
      text: "\u5168\u9009",
      onChange: this.__onUserCheckAll
    }))) : React.createElement(zn.react.DataLoader, {
      content: "\u6B63\u5728\u52A0\u8F7D...",
      loader: "timer"
    }));
  },
  setValue: function setValue(value) {
    this.setState({
      value: value
    });
  },
  getValue: function getValue() {
    if (!this.props.mulitable && !this.state.value) {
      return 0;
    }

    return this.state.value;
  },
  __renderView: function __renderView() {
    switch (this.state.currIndex) {
      case 0:
        return React.createElement(LetterSelector, {
          onChange: this.__onLetterChange
        });

      case 1:
        return React.createElement(RoleSelector, {
          checkboxEnabled: false,
          onChange: this.__onRoleChange
        });
    }
  },
  render: function render() {
    var _this2 = this;

    return React.createElement("div", {
      className: "zn-plugin-admin-user-selector"
    }, React.createElement(zn.react.ListView, {
      className: "zr-tab-ios",
      selectMode: "radio",
      textKey: "text",
      valueKey: "index",
      onClick: function onClick(value) {
        return _this2.setState({
          currIndex: value.item.index
        });
      },
      value: this.state.currIndex,
      data: [{
        index: 0,
        text: '首字母',
        icon: 'fa-font'
      }, {
        index: 1,
        text: '所属部门',
        icon: 'fa-sitemap'
      }]
    }), React.createElement("div", {
      className: "user-selector"
    }, this.__renderView(), this.__renderUsers()));
  }
});

/***/ }),
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(125);

var React = __webpack_require__(0);

var LetterSelector = __webpack_require__(31);

var RoleSelector = __webpack_require__(32);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      mulitable: true
    };
  },
  getInitialState: function getInitialState() {
    return {
      currIndex: 0,
      search: '',
      loading: false,
      value: this.props.mulitable ? ',' : 0,
      users: []
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadUsers();
  },
  __onLetterChange: function __onLetterChange(value) {
    this.setState({
      loading: true
    });

    if (value.length > 2) {
      zn.http.get('/zn.plugin.admin/user/findUsersByChars?chars=' + value).then(function (data) {
        this.setState({
          loading: false,
          users: data.result
        });
      }.bind(this));
    } else {
      this.__loadUsers();
    }
  },
  __onRoleChange: function __onRoleChange(value) {
    this.setState({
      loading: true
    });
    zn.http.get('/zn.plugin.admin/role/getRoleUsers?role=' + value.value).then(function (data) {
      this.setState({
        loading: false,
        users: data.result
      });
    }.bind(this));
  },
  __loadUsers: function __loadUsers(where) {
    this.setState({
      loading: true
    });
    zn.http.post('/zn.plugin.admin/user/getAllUser').then(function (data) {
      this.setState({
        loading: false,
        users: data.result
      });
    }.bind(this));
  },
  __onSearch: function __onSearch(value) {
    this.setState({
      search: value
    });
  },
  __onUserClick: function __onUserClick(user) {
    var _id = user.value + ',';

    if (this.props.mulitable) {
      if (this.state.value.indexOf(',' + _id) == -1) {
        this.state.value = this.state.value + _id;
      } else {
        this.state.value = this.state.value.replace(',' + _id, ',');
      }
    } else {
      if (this.state.value == user.value) {
        this.state.value = null;
      } else {
        this.state.value = user.value;
      }
    }

    this.props.onUserClick && this.props.onUserClick(user);
    this.setValue(this.state.value);
  },
  __onUserCheckAll: function __onUserCheckAll(event, value) {
    if (value) {
      this.setValue(',' + this._users.join(',') + ',');
    } else {
      this.setValue(',');
    }
  },
  __renderUsers: function __renderUsers() {
    var _value = this.state.value,
        _search = this.state.search;
    this._users = [];
    return React.createElement("div", {
      className: "user-view"
    }, React.createElement(zn.react.Search, {
      onSearch: this.__onSearch
    }), !this.state.loading ? React.createElement("ul", {
      className: "users"
    }, this.state.users.map(function (user, index) {
      var _this = this;

      var _selected = false,
          _userId = user.value,
          _name = user.text;

      if (_search && _name.indexOf(_search) == -1) {
        return null;
      } else {
        if (_search) {
          _name = _name.replace(_search, '<span style="color:red">' + _search + '</span>');
        }
      }

      this._users.push(_userId);

      if (this.props.mulitable) {
        _selected = _value.toString().indexOf(',' + _userId + ',') != -1;
      } else {
        _selected = +_value === +_userId;
      }

      return React.createElement("li", {
        key: index,
        className: 'user ' + (_selected ? 'selected' : ''),
        onClick: function onClick() {
          return _this.__onUserClick(user);
        }
      }, user.avatar_img ? React.createElement("img", {
        className: "avatar",
        src: zn.http.fixURL(user.avatar_img) || './images/DefaultAvatar.png'
      }) : React.createElement("span", {
        className: "first-char"
      }, user.first_char), React.createElement("span", {
        className: "name",
        dangerouslySetInnerHTML: {
          __html: _name
        }
      }));
    }.bind(this)), this.props.mulitable && React.createElement("li", null, React.createElement(zn.react.Checkbox, {
      text: "\u5168\u9009",
      onChange: this.__onUserCheckAll
    }))) : React.createElement(zn.react.DataLoader, {
      content: "\u6B63\u5728\u52A0\u8F7D...",
      loader: "timer"
    }));
  },
  setValue: function setValue(value) {
    this.setState({
      value: value
    });
  },
  getValue: function getValue() {
    if (!this.props.mulitable && !this.state.value) {
      return 0;
    }

    return this.state.value;
  },
  __renderView: function __renderView() {
    switch (this.state.currIndex) {
      case 0:
        return React.createElement(LetterSelector, {
          onChange: this.__onLetterChange
        });

      case 1:
        return React.createElement(RoleSelector, {
          checkboxEnabled: false,
          onChange: this.__onRoleChange
        });
    }
  },
  render: function render() {
    var _this2 = this;

    return React.createElement("div", {
      className: "zn-plugin-admin-user-selector"
    }, React.createElement(zn.react.ListView, {
      className: "zr-tab-ios",
      selectMode: "radio",
      textKey: "text",
      valueKey: "index",
      onClick: function onClick(value) {
        return _this2.setState({
          currIndex: value.item.index
        });
      },
      value: this.state.currIndex,
      data: [{
        index: 0,
        text: '首字母',
        icon: 'fa-font'
      }, {
        index: 1,
        text: '所属部门',
        icon: 'fa-sitemap'
      }]
    }), React.createElement("div", {
      className: "user-selector"
    }, this.__renderView(), this.__renderUsers()));
  }
});

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  __renderItem: function __renderItem(item, index) {
    return React.createElement("li", {
      className: "menu-item"
    }, React.createElement("div", {
      className: "item-title"
    }, React.createElement("i", {
      className: "fa " + item.icon
    }), item.zn_title), !!item.children && !!item.children.length && this.__renderChildren(item.children));
  },
  __renderChildren: function __renderChildren(children) {
    return React.createElement("ul", {
      className: "sub-menu-list"
    }, children.map(function (item, index) {
      var _this = this;

      return React.createElement("li", {
        className: item.url && zn.react.session.containPath(item.url) ? 'active-item' : '',
        key: index,
        onClick: function onClick() {
          return _this.__onSubItemClick(item, index);
        }
      }, React.createElement("div", {
        className: "item-title"
      }, React.createElement("i", {
        className: "fa " + item.icon
      }), item.zn_title));
    }.bind(this)));
  },
  __onSubItemClick: function __onSubItemClick(item, index) {
    if (item.url) {
      this.props.onMenuItemClick && this.props.onMenuItemClick(item, index);
      zn.react.session.relativeJump(item.url);
    } else {
      zn.http.get('/zn.plugin.admin/menu/getMenuPrimaryInfo?menuId=' + item.id).then(function (data) {
        if (data.status == 200) {
          zn.react.session.relativeJump("/znpluginadmin.setting.menupage", {
            menu: item.id
          });
        } else {
          zn.notification.error(data.result);
        }
      }, function () {
        zn.notification.error('请求出错');
      });
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: "zn-plugin-admin-navigation-bar",
      style: this.props.style
    }, React.createElement("ul", {
      className: "menu-list"
    }, this.props.data.map(function (item, index) {
      return this.__renderItem(item, index);
    }.bind(this))));
  }
});

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ColorPicker.js": 129,
	"./FontAwesomeIcons.js": 297,
	"./Role.js": 299,
	"./index.js": 58
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 128;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);

var React = __webpack_require__(0);

var ChromePicker = __webpack_require__(131).ChromePicker;

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      valueType: 'hex'
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },
  __onColorClick: function __onColorClick(value, event) {
    this.state.value = value[this.props.valueType];
    this.props.onChange && this.props.onChange(value, event);
  },
  setValue: function setValue(value) {
    this.setState({
      value: value
    });
  },
  getValue: function getValue() {
    return this.state.value;
  },
  render: function render() {
    return React.createElement("div", {
      className: zn.react.classname("zn-plugin-admin-color-picker", this.props.className)
    }, React.createElement(ChromePicker, {
      color: this.state.value,
      onChange: this.__onColorClick
    }));
  }
});

/***/ }),
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomPicker = exports.TwitterPicker = exports.SwatchesPicker = exports.SliderPicker = exports.SketchPicker = exports.PhotoshopPicker = exports.MaterialPicker = exports.HuePicker = exports.GithubPicker = exports.CompactPicker = exports.ChromePicker = exports.default = exports.CirclePicker = exports.BlockPicker = exports.AlphaPicker = undefined;

var _Alpha = __webpack_require__(132);

Object.defineProperty(exports, 'AlphaPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alpha).default;
  }
});

var _Block = __webpack_require__(262);

Object.defineProperty(exports, 'BlockPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Block).default;
  }
});

var _Circle = __webpack_require__(264);

Object.defineProperty(exports, 'CirclePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Circle).default;
  }
});

var _Chrome = __webpack_require__(266);

Object.defineProperty(exports, 'ChromePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Chrome).default;
  }
});

var _Compact = __webpack_require__(271);

Object.defineProperty(exports, 'CompactPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Compact).default;
  }
});

var _Github = __webpack_require__(274);

Object.defineProperty(exports, 'GithubPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Github).default;
  }
});

var _Hue = __webpack_require__(276);

Object.defineProperty(exports, 'HuePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hue).default;
  }
});

var _Material = __webpack_require__(278);

Object.defineProperty(exports, 'MaterialPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Material).default;
  }
});

var _Photoshop = __webpack_require__(279);

Object.defineProperty(exports, 'PhotoshopPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Photoshop).default;
  }
});

var _Sketch = __webpack_require__(285);

Object.defineProperty(exports, 'SketchPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sketch).default;
  }
});

var _Slider = __webpack_require__(288);

Object.defineProperty(exports, 'SliderPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Slider).default;
  }
});

var _Swatches = __webpack_require__(292);

Object.defineProperty(exports, 'SwatchesPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Swatches).default;
  }
});

var _Twitter = __webpack_require__(296);

Object.defineProperty(exports, 'TwitterPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Twitter).default;
  }
});

var _ColorWrap = __webpack_require__(91);

Object.defineProperty(exports, 'CustomPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColorWrap).default;
  }
});

var _Chrome2 = _interopRequireDefault(_Chrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Chrome2.default;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlphaPicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(2);

var _AlphaPointer = __webpack_require__(261);

var _AlphaPointer2 = _interopRequireDefault(_AlphaPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPicker = exports.AlphaPicker = function AlphaPicker(_ref) {
  var rgb = _ref.rgb,
      hsl = _ref.hsl,
      width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      direction = _ref.direction,
      style = _ref.style,
      renderers = _ref.renderers,
      pointer = _ref.pointer,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      alpha: {
        radius: '2px',
        style: style
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'alpha-picker ' + className },
    _react2.default.createElement(_common.Alpha, _extends({}, styles.alpha, {
      rgb: rgb,
      hsl: hsl,
      pointer: pointer,
      renderers: renderers,
      onChange: onChange,
      direction: direction
    }))
  );
};

AlphaPicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: _AlphaPointer2.default
};

exports.default = (0, _common.ColorWrap)(AlphaPicker);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenNames = undefined;

var _isString2 = __webpack_require__(134);

var _isString3 = _interopRequireDefault(_isString2);

var _forOwn2 = __webpack_require__(33);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _isPlainObject2 = __webpack_require__(65);

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _map2 = __webpack_require__(10);

var _map3 = _interopRequireDefault(_map2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flattenNames = exports.flattenNames = function flattenNames() {
  var things = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var names = [];

  (0, _map3.default)(things, function (thing) {
    if (Array.isArray(thing)) {
      flattenNames(thing).map(function (name) {
        return names.push(name);
      });
    } else if ((0, _isPlainObject3.default)(thing)) {
      (0, _forOwn3.default)(thing, function (value, key) {
        value === true && names.push(key);
        names.push(key + '-' + value);
      });
    } else if ((0, _isString3.default)(thing)) {
      names.push(thing);
    }
  });

  return names;
};

exports.default = flattenNames;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(11),
    isArray = __webpack_require__(3),
    isObjectLike = __webpack_require__(9);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(11),
    isObjectLike = __webpack_require__(9);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(11),
    isLength = __webpack_require__(38),
    isObjectLike = __webpack_require__(9);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(41),
    nativeKeys = __webpack_require__(144);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(63);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(146),
    baseMatchesProperty = __webpack_require__(190),
    identity = __webpack_require__(21),
    isArray = __webpack_require__(3),
    property = __webpack_require__(200);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(147),
    getMatchData = __webpack_require__(189),
    matchesStrictComparable = __webpack_require__(76);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(22),
    baseIsEqual = __webpack_require__(68);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(24);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(24);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(24);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(24);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(23);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 154 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 155 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 156 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(23),
    Map = __webpack_require__(44),
    MapCache = __webpack_require__(45);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(42),
    isMasked = __webpack_require__(159),
    isObject = __webpack_require__(6),
    toSource = __webpack_require__(67);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(160);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(7);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(163),
    ListCache = __webpack_require__(23),
    Map = __webpack_require__(44);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(164),
    hashDelete = __webpack_require__(165),
    hashGet = __webpack_require__(166),
    hashHas = __webpack_require__(167),
    hashSet = __webpack_require__(168);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(25);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 165 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(25);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(25);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(25);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(26);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 170 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(26);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(26);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(26);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(22),
    equalArrays = __webpack_require__(69),
    equalByTag = __webpack_require__(180),
    equalObjects = __webpack_require__(183),
    getTag = __webpack_require__(27),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(20),
    isTypedArray = __webpack_require__(37);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(45),
    setCacheAdd = __webpack_require__(176),
    setCacheHas = __webpack_require__(177);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 179 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14),
    Uint8Array = __webpack_require__(70),
    eq = __webpack_require__(16),
    equalArrays = __webpack_require__(69),
    mapToArray = __webpack_require__(181),
    setToArray = __webpack_require__(182);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 181 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 182 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(71);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 184 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12),
    root = __webpack_require__(7);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12),
    root = __webpack_require__(7);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12),
    root = __webpack_require__(7);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12),
    root = __webpack_require__(7);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(75),
    keys = __webpack_require__(15);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(68),
    get = __webpack_require__(191),
    hasIn = __webpack_require__(197),
    isKey = __webpack_require__(47),
    isStrictComparable = __webpack_require__(75),
    matchesStrictComparable = __webpack_require__(76),
    toKey = __webpack_require__(29);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(77);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(193);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(194);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(45);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(196);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14),
    arrayMap = __webpack_require__(66),
    isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(28);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(198),
    hasPath = __webpack_require__(199);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 198 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(78),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(3),
    isIndex = __webpack_require__(36),
    isLength = __webpack_require__(38),
    toKey = __webpack_require__(29);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(201),
    basePropertyDeep = __webpack_require__(202),
    isKey = __webpack_require__(47),
    toKey = __webpack_require__(29);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 201 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(77);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(79),
    isArrayLike = __webpack_require__(13);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(13);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeClasses = undefined;

var _forOwn2 = __webpack_require__(33);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _cloneDeep2 = __webpack_require__(206);

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mergeClasses = exports.mergeClasses = function mergeClasses(classes) {
  var activeNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var styles = classes.default && (0, _cloneDeep3.default)(classes.default) || {};
  activeNames.map(function (name) {
    var toMerge = classes[name];
    if (toMerge) {
      (0, _forOwn3.default)(toMerge, function (value, key) {
        if (!styles[key]) {
          styles[key] = {};
        }

        styles[key] = _extends({}, styles[key], toMerge[key]);
      });
    }

    return name;
  });
  return styles;
};

exports.default = mergeClasses;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(207);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(22),
    arrayEach = __webpack_require__(80),
    assignValue = __webpack_require__(81),
    baseAssign = __webpack_require__(208),
    baseAssignIn = __webpack_require__(209),
    cloneBuffer = __webpack_require__(83),
    copyArray = __webpack_require__(84),
    copySymbols = __webpack_require__(212),
    copySymbolsIn = __webpack_require__(213),
    getAllKeys = __webpack_require__(71),
    getAllKeysIn = __webpack_require__(214),
    getTag = __webpack_require__(27),
    initCloneArray = __webpack_require__(215),
    initCloneByTag = __webpack_require__(216),
    initCloneObject = __webpack_require__(87),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(20),
    isMap = __webpack_require__(221),
    isObject = __webpack_require__(6),
    isSet = __webpack_require__(223),
    keys = __webpack_require__(15);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(17),
    keys = __webpack_require__(15);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(17),
    keysIn = __webpack_require__(30);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6),
    isPrototype = __webpack_require__(41),
    nativeKeysIn = __webpack_require__(211);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(17),
    getSymbols = __webpack_require__(46);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(17),
    getSymbolsIn = __webpack_require__(85);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(72),
    getSymbolsIn = __webpack_require__(85),
    keysIn = __webpack_require__(30);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 215 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(49),
    cloneDataView = __webpack_require__(217),
    cloneRegExp = __webpack_require__(218),
    cloneSymbol = __webpack_require__(219),
    cloneTypedArray = __webpack_require__(86);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(49);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 218 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(222),
    baseUnary = __webpack_require__(39),
    nodeUtil = __webpack_require__(40);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(27),
    isObjectLike = __webpack_require__(9);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(224),
    baseUnary = __webpack_require__(39),
    nodeUtil = __webpack_require__(40);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(27),
    isObjectLike = __webpack_require__(9);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoprefix = undefined;

var _forOwn2 = __webpack_require__(33);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transforms = {
  borderRadius: function borderRadius(value) {
    return {
      msBorderRadius: value,
      MozBorderRadius: value,
      OBorderRadius: value,
      WebkitBorderRadius: value,
      borderRadius: value
    };
  },
  boxShadow: function boxShadow(value) {
    return {
      msBoxShadow: value,
      MozBoxShadow: value,
      OBoxShadow: value,
      WebkitBoxShadow: value,
      boxShadow: value
    };
  },
  userSelect: function userSelect(value) {
    return {
      WebkitTouchCallout: value,
      KhtmlUserSelect: value,
      MozUserSelect: value,
      msUserSelect: value,
      WebkitUserSelect: value,
      userSelect: value
    };
  },

  flex: function flex(value) {
    return {
      WebkitBoxFlex: value,
      MozBoxFlex: value,
      WebkitFlex: value,
      msFlex: value,
      flex: value
    };
  },
  flexBasis: function flexBasis(value) {
    return {
      WebkitFlexBasis: value,
      flexBasis: value
    };
  },
  justifyContent: function justifyContent(value) {
    return {
      WebkitJustifyContent: value,
      justifyContent: value
    };
  },

  transition: function transition(value) {
    return {
      msTransition: value,
      MozTransition: value,
      OTransition: value,
      WebkitTransition: value,
      transition: value
    };
  },

  transform: function transform(value) {
    return {
      msTransform: value,
      MozTransform: value,
      OTransform: value,
      WebkitTransform: value,
      transform: value
    };
  },
  absolute: function absolute(value) {
    var direction = value && value.split(' ');
    return {
      position: 'absolute',
      top: direction && direction[0],
      right: direction && direction[1],
      bottom: direction && direction[2],
      left: direction && direction[3]
    };
  },
  extend: function extend(name, otherElementStyles) {
    var otherStyle = otherElementStyles[name];
    if (otherStyle) {
      return otherStyle;
    }
    return {
      'extend': name
    };
  }
};

var autoprefix = exports.autoprefix = function autoprefix(elements) {
  var prefixed = {};
  (0, _forOwn3.default)(elements, function (styles, element) {
    var expanded = {};
    (0, _forOwn3.default)(styles, function (value, key) {
      var transform = transforms[key];
      if (transform) {
        expanded = _extends({}, expanded, transform(value));
      } else {
        expanded[key] = value;
      }
    });
    prefixed[element] = expanded;
  });
  return prefixed;
};

exports.default = autoprefix;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hover = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hover = exports.hover = function hover(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Hover, _React$Component);

    function Hover() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Hover);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hover: false }, _this.handleMouseOver = function () {
        return _this.setState({ hover: true });
      }, _this.handleMouseOut = function () {
        return _this.setState({ hover: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onMouseOver: _this.handleMouseOver, onMouseOut: _this.handleMouseOut },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Hover;
  }(_react2.default.Component);
};

exports.default = hover;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.active = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var active = exports.active = function active(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Active, _React$Component);

    function Active() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Active);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: false }, _this.handleMouseDown = function () {
        return _this.setState({ active: true });
      }, _this.handleMouseUp = function () {
        return _this.setState({ active: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onMouseDown: _this.handleMouseDown, onMouseUp: _this.handleMouseUp },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Active;
  }(_react2.default.Component);
};

exports.default = active;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var loopable = function loopable(i, length) {
  var props = {};
  var setProp = function setProp(name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    props[name] = value;
  };

  i === 0 && setProp('first-child');
  i === length - 1 && setProp('last-child');
  (i === 0 || i % 2 === 0) && setProp('even');
  Math.abs(i % 2) === 1 && setProp('odd');
  setProp('nth-child', i);

  return props;
};

exports.default = loopable;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alpha = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _alpha = __webpack_require__(230);

var alpha = _interopRequireWildcard(_alpha);

var _Checkboard = __webpack_require__(50);

var _Checkboard2 = _interopRequireDefault(_Checkboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alpha = exports.Alpha = function (_ref) {
  _inherits(Alpha, _ref);

  function Alpha() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Alpha);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e, skip) {
      var change = alpha.calculateChange(e, skip, _this.props, _this.container);
      change && _this.props.onChange && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleChange);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alpha, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rgb = this.props.rgb;
      var styles = (0, _reactcss2.default)({
        'default': {
          alpha: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: '0px 0px 0px 0px',
            overflow: 'hidden',
            borderRadius: this.props.radius
          },
          gradient: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: 'relative',
            height: '100%',
            margin: '0 3px'
          },
          pointer: {
            position: 'absolute',
            left: rgb.a * 100 + '%'
          },
          slider: {
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            marginTop: '1px',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          gradient: {
            background: 'linear-gradient(to bottom, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)'
          },
          pointer: {
            left: 0,
            top: rgb.a * 100 + '%'
          }
        },
        'overwrite': _extends({}, this.props.style)
      }, {
        vertical: this.props.direction === 'vertical',
        overwrite: true
      });

      return _react2.default.createElement(
        'div',
        { style: styles.alpha },
        _react2.default.createElement(
          'div',
          { style: styles.checkboard },
          _react2.default.createElement(_Checkboard2.default, { renderers: this.props.renderers })
        ),
        _react2.default.createElement('div', { style: styles.gradient }),
        _react2.default.createElement(
          'div',
          {
            style: styles.container,
            ref: function ref(container) {
              return _this2.container = container;
            },
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Alpha;
}(_react.PureComponent || _react.Component);

exports.default = Alpha;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var calculateChange = exports.calculateChange = function calculateChange(e, skip, props, container) {
  e.preventDefault();
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (props.direction === 'vertical') {
    var a = void 0;
    if (top < 0) {
      a = 0;
    } else if (top > containerHeight) {
      a = 1;
    } else {
      a = Math.round(top * 100 / containerHeight) / 100;
    }

    if (props.hsl.a !== a) {
      return {
        h: props.hsl.h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: a,
        source: 'rgb'
      };
    }
  } else {
    var _a = void 0;
    if (left < 0) {
      _a = 0;
    } else if (left > containerWidth) {
      _a = 1;
    } else {
      _a = Math.round(left * 100 / containerWidth) / 100;
    }

    if (props.a !== _a) {
      return {
        h: props.hsl.h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: _a,
        source: 'rgb'
      };
    }
  }
  return null;
};

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var checkboardCache = {};

var render = exports.render = function render(c1, c2, size, serverCanvas) {
  if (typeof document === 'undefined' && !serverCanvas) {
    return null;
  }
  var canvas = serverCanvas ? new serverCanvas() : document.createElement('canvas');
  canvas.width = size * 2;
  canvas.height = size * 2;
  var ctx = canvas.getContext('2d');
  if (!ctx) {
    return null;
  } // If no context can be found, return early.
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
};

var get = exports.get = function get(c1, c2, size, serverCanvas) {
  var key = c1 + '-' + c2 + '-' + size + (serverCanvas ? '-server' : '');
  var checkboard = render(c1, c2, size, serverCanvas);

  if (checkboardCache[key]) {
    return checkboardCache[key];
  }
  checkboardCache[key] = checkboard;
  return checkboard;
};

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditableInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableInput = exports.EditableInput = function (_ref) {
  _inherits(EditableInput, _ref);

  function EditableInput(props) {
    _classCallCheck(this, EditableInput);

    var _this = _possibleConstructorReturn(this, (EditableInput.__proto__ || Object.getPrototypeOf(EditableInput)).call(this));

    _this.handleBlur = function () {
      if (_this.state.blurValue) {
        _this.setState({ value: _this.state.blurValue, blurValue: null });
      }
    };

    _this.handleChange = function (e) {
      if (_this.props.label) {
        _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, e.target.value), e);
      } else {
        _this.props.onChange && _this.props.onChange(e.target.value, e);
      }

      _this.setState({ value: e.target.value });
    };

    _this.handleKeyDown = function (e) {
      // In case `e.target.value` is a percentage remove the `%` character
      // and update accordingly with a percentage
      // https://github.com/casesandberg/react-color/issues/383
      var stringValue = String(e.target.value);
      var isPercentage = stringValue.indexOf('%') > -1;
      var number = Number(stringValue.replace(/%/g, ''));
      if (!isNaN(number)) {
        var amount = _this.props.arrowOffset || 1;

        // Up
        if (e.keyCode === 38) {
          if (_this.props.label !== null) {
            _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, number + amount), e);
          } else {
            _this.props.onChange && _this.props.onChange(number + amount, e);
          }

          if (isPercentage) {
            _this.setState({ value: number + amount + '%' });
          } else {
            _this.setState({ value: number + amount });
          }
        }

        // Down
        if (e.keyCode === 40) {
          if (_this.props.label !== null) {
            _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, number - amount), e);
          } else {
            _this.props.onChange && _this.props.onChange(number - amount, e);
          }

          if (isPercentage) {
            _this.setState({ value: number - amount + '%' });
          } else {
            _this.setState({ value: number - amount });
          }
        }
      }
    };

    _this.handleDrag = function (e) {
      if (_this.props.dragLabel) {
        var newValue = Math.round(_this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= _this.props.dragMax) {
          _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, newValue), e);
        }
      }
    };

    _this.handleMouseDown = function (e) {
      if (_this.props.dragLabel) {
        e.preventDefault();
        _this.handleDrag(e);
        window.addEventListener('mousemove', _this.handleDrag);
        window.addEventListener('mouseup', _this.handleMouseUp);
      }
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleDrag);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    };

    _this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    };
    return _this;
  }

  _createClass(EditableInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var input = this.input;
      if (nextProps.value !== this.state.value) {
        if (input === document.activeElement) {
          this.setState({ blurValue: String(nextProps.value).toUpperCase() });
        } else {
          this.setState({ value: String(nextProps.value).toUpperCase(), blurValue: !this.state.blurValue && String(nextProps.value).toUpperCase() });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            position: 'relative'
          }
        },
        'user-override': {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        'dragLabel-true': {
          label: {
            cursor: 'ew-resize'
          }
        }
      }, {
        'user-override': true
      }, this.props);

      return _react2.default.createElement(
        'div',
        { style: styles.wrap },
        _react2.default.createElement('input', {
          style: styles.input,
          ref: function ref(input) {
            return _this2.input = input;
          },
          value: this.state.value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          placeholder: this.props.placeholder,
          spellCheck: 'false'
        }),
        this.props.label && !this.props.hideLabel ? _react2.default.createElement(
          'span',
          { style: styles.label, onMouseDown: this.handleMouseDown },
          this.props.label
        ) : null
      );
    }
  }]);

  return EditableInput;
}(_react.PureComponent || _react.Component);

exports.default = EditableInput;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hue = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _hue = __webpack_require__(234);

var hue = _interopRequireWildcard(_hue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hue = exports.Hue = function (_ref) {
  _inherits(Hue, _ref);

  function Hue() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Hue);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Hue.__proto__ || Object.getPrototypeOf(Hue)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e, skip) {
      var change = hue.calculateChange(e, skip, _this.props, _this.container);
      change && _this.props.onChange && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hue, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$direction = this.props.direction,
          direction = _props$direction === undefined ? 'horizontal' : _props$direction;


      var styles = (0, _reactcss2.default)({
        'default': {
          hue: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            padding: '0 2px',
            position: 'relative',
            height: '100%',
            borderRadius: this.props.radius
          },
          pointer: {
            position: 'absolute',
            left: this.props.hsl.h * 100 / 360 + '%'
          },
          slider: {
            marginTop: '1px',
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          pointer: {
            left: '0px',
            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
          }
        }
      }, { vertical: direction === 'vertical' });

      return _react2.default.createElement(
        'div',
        { style: styles.hue },
        _react2.default.createElement(
          'div',
          {
            className: 'hue-' + direction,
            style: styles.container,
            ref: function ref(container) {
              return _this2.container = container;
            },
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          _react2.default.createElement(
            'style',
            null,
            '\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '
          ),
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Hue;
}(_react.PureComponent || _react.Component);

exports.default = Hue;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var calculateChange = exports.calculateChange = function calculateChange(e, skip, props, container) {
  e.preventDefault();
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (props.direction === 'vertical') {
    var h = void 0;
    if (top < 0) {
      h = 359;
    } else if (top > containerHeight) {
      h = 0;
    } else {
      var percent = -(top * 100 / containerHeight) + 100;
      h = 360 * percent / 100;
    }

    if (props.hsl.h !== h) {
      return {
        h: h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: props.hsl.a,
        source: 'rgb'
      };
    }
  } else {
    var _h = void 0;
    if (left < 0) {
      _h = 0;
    } else if (left > containerWidth) {
      _h = 359;
    } else {
      var _percent = left * 100 / containerWidth;
      _h = 360 * _percent / 100;
    }

    if (props.hsl.h !== _h) {
      return {
        h: _h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: props.hsl.a,
        source: 'rgb'
      };
    }
  }
  return null;
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Raised = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Raised = exports.Raised = function Raised(_ref) {
  var zDepth = _ref.zDepth,
      radius = _ref.radius,
      background = _ref.background,
      children = _ref.children,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      wrap: {
        position: 'relative',
        display: 'inline-block'
      },
      content: {
        position: 'relative'
      },
      bg: {
        absolute: '0px 0px 0px 0px',
        boxShadow: '0 ' + zDepth + 'px ' + zDepth * 4 + 'px rgba(0,0,0,.24)',
        borderRadius: radius,
        background: background
      }
    },
    'zDepth-0': {
      bg: {
        boxShadow: 'none'
      }
    },

    'zDepth-1': {
      bg: {
        boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
      }
    },
    'zDepth-2': {
      bg: {
        boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
      }
    },
    'zDepth-3': {
      bg: {
        boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
      }
    },
    'zDepth-4': {
      bg: {
        boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
      }
    },
    'zDepth-5': {
      bg: {
        boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
      }
    },
    'square': {
      bg: {
        borderRadius: '0'
      }
    },
    'circle': {
      bg: {
        borderRadius: '50%'
      }
    }
  }, passedStyles), { 'zDepth-1': zDepth === 1 });

  return _react2.default.createElement(
    'div',
    { style: styles.wrap },
    _react2.default.createElement('div', { style: styles.bg }),
    _react2.default.createElement(
      'div',
      { style: styles.content },
      children
    )
  );
};

Raised.propTypes = {
  background: _propTypes2.default.string,
  zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5]),
  radius: _propTypes2.default.number,
  styles: _propTypes2.default.object
};

Raised.defaultProps = {
  background: '#fff',
  zDepth: 1,
  radius: 2,
  styles: {}
};

exports.default = Raised;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(237);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(22),
    assignMergeValue = __webpack_require__(88),
    baseFor = __webpack_require__(61),
    baseMergeDeep = __webpack_require__(239),
    isObject = __webpack_require__(6),
    keysIn = __webpack_require__(30),
    safeGet = __webpack_require__(89);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(88),
    cloneBuffer = __webpack_require__(83),
    cloneTypedArray = __webpack_require__(86),
    copyArray = __webpack_require__(84),
    initCloneObject = __webpack_require__(87),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(3),
    isArrayLikeObject = __webpack_require__(240),
    isBuffer = __webpack_require__(20),
    isFunction = __webpack_require__(42),
    isObject = __webpack_require__(6),
    isPlainObject = __webpack_require__(65),
    isTypedArray = __webpack_require__(37),
    safeGet = __webpack_require__(89),
    toPlainObject = __webpack_require__(241);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(13),
    isObjectLike = __webpack_require__(9);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(17),
    keysIn = __webpack_require__(30);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(243),
    isIterateeCall = __webpack_require__(250);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(21),
    overRest = __webpack_require__(244),
    setToString = __webpack_require__(246);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(245);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 245 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(247),
    shortOut = __webpack_require__(249);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(248),
    defineProperty = __webpack_require__(82),
    identity = __webpack_require__(21);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 248 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 249 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(16),
    isArrayLike = __webpack_require__(13),
    isIndex = __webpack_require__(36),
    isObject = __webpack_require__(6);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Saturation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _throttle = __webpack_require__(252);

var _throttle2 = _interopRequireDefault(_throttle);

var _saturation = __webpack_require__(255);

var saturation = _interopRequireWildcard(_saturation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Saturation = exports.Saturation = function (_ref) {
  _inherits(Saturation, _ref);

  function Saturation(props) {
    _classCallCheck(this, Saturation);

    var _this = _possibleConstructorReturn(this, (Saturation.__proto__ || Object.getPrototypeOf(Saturation)).call(this, props));

    _this.handleChange = function (e, skip) {
      _this.props.onChange && _this.throttle(_this.props.onChange, saturation.calculateChange(e, skip, _this.props, _this.container), e);
    };

    _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.throttle = (0, _throttle2.default)(function (fn, data, e) {
      fn(data, e);
    }, 50);
    return _this;
  }

  _createClass(Saturation, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.throttle.cancel();
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _ref2 = this.props.style || {},
          color = _ref2.color,
          white = _ref2.white,
          black = _ref2.black,
          pointer = _ref2.pointer,
          circle = _ref2.circle;

      var styles = (0, _reactcss2.default)({
        'default': {
          color: {
            absolute: '0px 0px 0px 0px',
            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
            borderRadius: this.props.radius
          },
          white: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          black: {
            absolute: '0px 0px 0px 0px',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          pointer: {
            position: 'absolute',
            top: -(this.props.hsv.v * 100) + 100 + '%',
            left: this.props.hsv.s * 100 + '%',
            cursor: 'default'
          },
          circle: {
            width: '4px',
            height: '4px',
            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
            borderRadius: '50%',
            cursor: 'hand',
            transform: 'translate(-2px, -2px)'
          }
        },
        'custom': {
          color: color,
          white: white,
          black: black,
          pointer: pointer,
          circle: circle
        }
      }, { 'custom': !!this.props.style });

      return _react2.default.createElement(
        'div',
        {
          style: styles.color,
          ref: function ref(container) {
            return _this2.container = container;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        },
        _react2.default.createElement(
          'style',
          null,
          '\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '
        ),
        _react2.default.createElement(
          'div',
          { style: styles.white, className: 'saturation-white' },
          _react2.default.createElement('div', { style: styles.black, className: 'saturation-black' }),
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.circle })
          )
        )
      );
    }
  }]);

  return Saturation;
}(_react.PureComponent || _react.Component);

exports.default = Saturation;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(90),
    isObject = __webpack_require__(6);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(7);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6),
    isSymbol = __webpack_require__(28);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var calculateChange = exports.calculateChange = function calculateChange(e, skip, props, container) {
  e.preventDefault();

  var _container$getBoundin = container.getBoundingClientRect(),
      containerWidth = _container$getBoundin.width,
      containerHeight = _container$getBoundin.height;

  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  } else if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }

  var saturation = left * 100 / containerWidth;
  var bright = -(top * 100 / containerHeight) + 100;

  return {
    h: props.hsl.h,
    s: saturation,
    v: bright,
    a: props.hsl.a,
    source: 'rgb'
  };
};

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(257);


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(80),
    baseEach = __webpack_require__(79),
    castFunction = __webpack_require__(64),
    isArray = __webpack_require__(3);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swatch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _interaction = __webpack_require__(260);

var _Checkboard = __webpack_require__(50);

var _Checkboard2 = _interopRequireDefault(_Checkboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENTER = 13;

var Swatch = exports.Swatch = function Swatch(_ref) {
  var color = _ref.color,
      style = _ref.style,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onHover = _ref.onHover,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? color : _ref$title,
      children = _ref.children,
      focus = _ref.focus,
      _ref$focusStyle = _ref.focusStyle,
      focusStyle = _ref$focusStyle === undefined ? {} : _ref$focusStyle;

  var transparent = color === 'transparent';
  var styles = (0, _reactcss2.default)({
    default: {
      swatch: _extends({
        background: color,
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        position: 'relative',
        outline: 'none'
      }, style, focus ? focusStyle : {})
    }
  });

  var handleClick = function handleClick(e) {
    return onClick(color, e);
  };
  var handleKeyDown = function handleKeyDown(e) {
    return e.keyCode === ENTER && onClick(color, e);
  };
  var handleHover = function handleHover(e) {
    return onHover(color, e);
  };

  var optionalEvents = {};
  if (onHover) {
    optionalEvents.onMouseOver = handleHover;
  }

  return _react2.default.createElement(
    'div',
    _extends({
      style: styles.swatch,
      onClick: handleClick,
      title: title,
      tabIndex: 0,
      onKeyDown: handleKeyDown
    }, optionalEvents),
    children,
    transparent && _react2.default.createElement(_Checkboard2.default, {
      borderRadius: styles.swatch.borderRadius,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
    })
  );
};

exports.default = (0, _interaction.handleFocus)(Swatch);

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFocus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-invalid-this */


var handleFocus = exports.handleFocus = function handleFocus(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
  return function (_React$Component) {
    _inherits(Focus, _React$Component);

    function Focus() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Focus);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = { focus: false }, _this.handleFocus = function () {
        return _this.setState({ focus: true });
      }, _this.handleBlur = function () {
        return _this.setState({ focus: false });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Focus, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          Span,
          { onFocus: this.handleFocus, onBlur: this.handleBlur },
          _react2.default.createElement(Component, _extends({}, this.props, this.state))
        );
      }
    }]);

    return Focus;
  }(_react2.default.Component);
};

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlphaPointer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPointer = exports.AlphaPointer = function AlphaPointer(_ref) {
  var direction = _ref.direction;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, { vertical: direction === 'vertical' });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = AlphaPointer;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _color = __webpack_require__(8);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(2);

var _BlockSwatches = __webpack_require__(263);

var _BlockSwatches2 = _interopRequireDefault(_BlockSwatches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = exports.Block = function Block(_ref) {
  var onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      hex = _ref.hex,
      colors = _ref.colors,
      width = _ref.width,
      triangle = _ref.triangle,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var transparent = hex === 'transparent';
  var handleChange = function handleChange(hexCode, e) {
    _color2.default.isValidHex(hexCode) && onChange({
      hex: hexCode,
      source: 'hex'
    }, e);
  };

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        boxShadow: '0 1px rgba(0,0,0,.1)',
        borderRadius: '6px',
        position: 'relative'
      },
      head: {
        height: '110px',
        background: hex,
        borderRadius: '6px 6px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      },
      body: {
        padding: '10px'
      },
      label: {
        fontSize: '18px',
        color: _color2.default.getContrastingColor(hex),
        position: 'relative'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 10px 10px 10px',
        borderColor: 'transparent transparent ' + hex + ' transparent',
        position: 'absolute',
        top: '-10px',
        left: '50%',
        marginLeft: '-10px'
      },
      input: {
        width: '100%',
        fontSize: '12px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '22px',
        boxShadow: 'inset 0 0 0 1px #ddd',
        borderRadius: '4px',
        padding: '0 7px',
        boxSizing: 'border-box'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      }
    }
  }, passedStyles), { 'hide-triangle': triangle === 'hide' });

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'block-picker ' + className },
    _react2.default.createElement('div', { style: styles.triangle }),
    _react2.default.createElement(
      'div',
      { style: styles.head },
      transparent && _react2.default.createElement(_common.Checkboard, { borderRadius: '6px 6px 0 0' }),
      _react2.default.createElement(
        'div',
        { style: styles.label },
        hex
      )
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      _react2.default.createElement(_BlockSwatches2.default, { colors: colors, onClick: handleChange, onSwatchHover: onSwatchHover }),
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input },
        value: hex,
        onChange: handleChange
      })
    )
  );
};

Block.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  triangle: _propTypes2.default.oneOf(['top', 'hide']),
  styles: _propTypes2.default.object
};

Block.defaultProps = {
  width: 170,
  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],
  triangle: 'top',
  styles: {}
};

exports.default = (0, _common.ColorWrap)(Block);

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockSwatches = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(10);

var _map2 = _interopRequireDefault(_map);

var _common = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockSwatches = exports.BlockSwatches = function BlockSwatches(_ref) {
  var colors = _ref.colors,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        marginRight: '-10px'
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.swatches },
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_common.Swatch, {
        key: c,
        color: c,
        style: styles.swatch,
        onClick: onClick,
        onHover: onSwatchHover,
        focusStyle: {
          boxShadow: '0 0 4px ' + c
        }
      });
    }),
    _react2.default.createElement('div', { style: styles.clear })
  );
};

exports.default = BlockSwatches;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(10);

var _map2 = _interopRequireDefault(_map);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _materialColors = __webpack_require__(92);

var material = _interopRequireWildcard(_materialColors);

var _common = __webpack_require__(2);

var _CircleSwatch = __webpack_require__(265);

var _CircleSwatch2 = _interopRequireDefault(_CircleSwatch);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Circle = exports.Circle = function Circle(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      circleSize = _ref.circleSize,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      circleSpacing = _ref.circleSpacing,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      card: {
        width: width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(hexCode, e) {
    return onChange({ hex: hexCode, source: 'hex' }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'circle-picker ' + className },
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_CircleSwatch2.default, {
        key: c,
        color: c,
        onClick: handleChange,
        onSwatchHover: onSwatchHover,
        active: hex === c.toLowerCase(),
        circleSize: circleSize,
        circleSpacing: circleSpacing
      });
    })
  );
};

Circle.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  circleSize: _propTypes2.default.number,
  circleSpacing: _propTypes2.default.number,
  styles: _propTypes2.default.object
};

Circle.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [material.red['500'], material.pink['500'], material.purple['500'], material.deepPurple['500'], material.indigo['500'], material.blue['500'], material.lightBlue['500'], material.cyan['500'], material.teal['500'], material.green['500'], material.lightGreen['500'], material.lime['500'], material.yellow['500'], material.amber['500'], material.orange['500'], material.deepOrange['500'], material.brown['500'], material.blueGrey['500']],
  styles: {}
};

exports.default = (0, _common.ColorWrap)(Circle);

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircleSwatch = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleSwatch = exports.CircleSwatch = function CircleSwatch(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover,
      hover = _ref.hover,
      active = _ref.active,
      circleSize = _ref.circleSize,
      circleSpacing = _ref.circleSpacing;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: 'scale(1)',
        transition: '100ms transform ease'
      },
      Swatch: {
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: 'inset 0 0 0 ' + circleSize / 2 + 'px ' + color,
        transition: '100ms box-shadow ease'
      }
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)'
      }
    },
    'active': {
      Swatch: {
        boxShadow: 'inset 0 0 0 3px ' + color
      }
    }
  }, { hover: hover, active: active });

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, {
      style: styles.Swatch,
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: styles.Swatch.boxShadow + ', 0 0 5px ' + color }
    })
  );
};

CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};

exports.default = (0, _reactcss.handleHover)(CircleSwatch);

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chrome = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(2);

var _ChromeFields = __webpack_require__(267);

var _ChromeFields2 = _interopRequireDefault(_ChromeFields);

var _ChromePointer = __webpack_require__(269);

var _ChromePointer2 = _interopRequireDefault(_ChromePointer);

var _ChromePointerCircle = __webpack_require__(270);

var _ChromePointerCircle2 = _interopRequireDefault(_ChromePointerCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chrome = exports.Chrome = function Chrome(_ref) {
  var onChange = _ref.onChange,
      disableAlpha = _ref.disableAlpha,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hsv = _ref.hsv,
      hex = _ref.hex,
      renderers = _ref.renderers,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      picker: {
        background: '#fff',
        borderRadius: '2px',
        boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
        boxSizing: 'initial',
        width: '225px',
        fontFamily: 'Menlo'
      },
      saturation: {
        width: '100%',
        paddingBottom: '55%',
        position: 'relative',
        borderRadius: '2px 2px 0 0',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '2px 2px 0 0'
      },
      body: {
        padding: '16px 16px 12px'
      },
      controls: {
        display: 'flex'
      },
      color: {
        width: '32px'
      },
      swatch: {
        marginTop: '6px',
        width: '16px',
        height: '16px',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden'
      },
      active: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + rgb.a + ')',
        zIndex: '2'
      },
      toggles: {
        flex: '1'
      },
      hue: {
        height: '10px',
        position: 'relative',
        marginBottom: '8px'
      },
      Hue: {
        radius: '2px'
      },
      alpha: {
        height: '10px',
        position: 'relative'
      },
      Alpha: {
        radius: '2px'
      }
    },
    'disableAlpha': {
      color: {
        width: '22px'
      },
      alpha: {
        display: 'none'
      },
      hue: {
        marginBottom: '0px'
      },
      swatch: {
        width: '10px',
        height: '10px',
        marginTop: '0px'
      }
    }
  }, passedStyles), { disableAlpha: disableAlpha });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'chrome-picker ' + className },
    _react2.default.createElement(
      'div',
      { style: styles.saturation },
      _react2.default.createElement(_common.Saturation, {
        style: styles.Saturation,
        hsl: hsl,
        hsv: hsv,
        pointer: _ChromePointerCircle2.default,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      _react2.default.createElement(
        'div',
        { style: styles.controls, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.color },
          _react2.default.createElement(
            'div',
            { style: styles.swatch },
            _react2.default.createElement('div', { style: styles.active }),
            _react2.default.createElement(_common.Checkboard, { renderers: renderers })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.toggles },
          _react2.default.createElement(
            'div',
            { style: styles.hue },
            _react2.default.createElement(_common.Hue, {
              style: styles.Hue,
              hsl: hsl,
              pointer: _ChromePointer2.default,
              onChange: onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.Alpha, {
              style: styles.Alpha,
              rgb: rgb,
              hsl: hsl,
              pointer: _ChromePointer2.default,
              renderers: renderers,
              onChange: onChange
            })
          )
        )
      ),
      _react2.default.createElement(_ChromeFields2.default, {
        rgb: rgb,
        hsl: hsl,
        hex: hex,
        onChange: onChange,
        disableAlpha: disableAlpha
      })
    )
  );
};

Chrome.propTypes = {
  disableAlpha: _propTypes2.default.bool,
  styles: _propTypes2.default.object
};

Chrome.defaultProps = {
  disableAlpha: false,
  styles: {}
};

exports.default = (0, _common.ColorWrap)(Chrome);

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromeFields = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(8);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(2);

var _UnfoldMoreHorizontalIcon = __webpack_require__(268);

var _UnfoldMoreHorizontalIcon2 = _interopRequireDefault(_UnfoldMoreHorizontalIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-did-mount-set-state, no-param-reassign */

var ChromeFields = exports.ChromeFields = function (_React$Component) {
  _inherits(ChromeFields, _React$Component);

  function ChromeFields() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChromeFields);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChromeFields.__proto__ || Object.getPrototypeOf(ChromeFields)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: ''
    }, _this.toggleViews = function () {
      if (_this.state.view === 'hex') {
        _this.setState({ view: 'rgb' });
      } else if (_this.state.view === 'rgb') {
        _this.setState({ view: 'hsl' });
      } else if (_this.state.view === 'hsl') {
        if (_this.props.hsl.a === 1) {
          _this.setState({ view: 'hex' });
        } else {
          _this.setState({ view: 'rgb' });
        }
      }
    }, _this.handleChange = function (data, e) {
      if (data.hex) {
        _color2.default.isValidHex(data.hex) && _this.props.onChange({
          hex: data.hex,
          source: 'hex'
        }, e);
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: 'rgb'
        }, e);
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 1) {
          data.a = 1;
        }

        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: Math.round(data.a * 100) / 100,
          source: 'rgb'
        }, e);
      } else if (data.h || data.s || data.l) {
        // Remove any occurances of '%'.
        if (typeof data.s === 'string' && data.s.includes('%')) {
          data.s = data.s.replace('%', '');
        }
        if (typeof data.l === 'string' && data.l.includes('%')) {
          data.l = data.l.replace('%', '');
        }

        _this.props.onChange({
          h: data.h || _this.props.hsl.h,
          s: Number(data.s && data.s || _this.props.hsl.s),
          l: Number(data.l && data.l || _this.props.hsl.l),
          source: 'hsl'
        }, e);
      }
    }, _this.showHighlight = function (e) {
      e.currentTarget.style.background = '#eee';
    }, _this.hideHighlight = function (e) {
      e.currentTarget.style.background = 'transparent';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChromeFields, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.hsl.a === 1 && this.state.view !== 'hex') {
        this.setState({ view: 'hex' });
      } else if (this.state.view !== 'rgb' && this.state.view !== 'hsl') {
        this.setState({ view: 'rgb' });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hsl.a !== 1 && this.state.view === 'hex') {
        this.setState({ view: 'rgb' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            paddingTop: '16px',
            display: 'flex'
          },
          fields: {
            flex: '1',
            display: 'flex',
            marginLeft: '-6px'
          },
          field: {
            paddingLeft: '6px',
            width: '100%'
          },
          alpha: {
            paddingLeft: '6px',
            width: '100%'
          },
          toggle: {
            width: '32px',
            textAlign: 'right',
            position: 'relative'
          },
          icon: {
            marginRight: '-4px',
            marginTop: '12px',
            cursor: 'pointer',
            position: 'relative'
          },
          iconHighlight: {
            position: 'absolute',
            width: '24px',
            height: '28px',
            background: '#eee',
            borderRadius: '4px',
            top: '10px',
            left: '12px',
            display: 'none'
          },
          input: {
            fontSize: '11px',
            color: '#333',
            width: '100%',
            borderRadius: '2px',
            border: 'none',
            boxShadow: 'inset 0 0 0 1px #dadada',
            height: '21px',
            textAlign: 'center'
          },
          label: {
            textTransform: 'uppercase',
            fontSize: '11px',
            lineHeight: '11px',
            color: '#969696',
            textAlign: 'center',
            display: 'block',
            marginTop: '12px'
          },
          svg: {
            fill: '#333',
            width: '24px',
            height: '24px',
            border: '1px transparent solid',
            borderRadius: '5px'
          }
        },
        'disableAlpha': {
          alpha: {
            display: 'none'
          }
        }
      }, this.props, this.state);

      var fields = void 0;
      if (this.state.view === 'hex') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'hex', value: this.props.hex,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === 'rgb') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'r',
              value: this.props.rgb.r,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'g',
              value: this.props.rgb.g,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'b',
              value: this.props.rgb.b,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'a',
              value: this.props.rgb.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === 'hsl') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'h',
              value: Math.round(this.props.hsl.h),
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 's',
              value: Math.round(this.props.hsl.s * 100) + '%',
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'l',
              value: Math.round(this.props.hsl.l * 100) + '%',
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'a',
              value: this.props.hsl.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { style: styles.wrap, className: 'flexbox-fix' },
        fields,
        _react2.default.createElement(
          'div',
          { style: styles.toggle },
          _react2.default.createElement(
            'div',
            { style: styles.icon, onClick: this.toggleViews, ref: function ref(icon) {
                return _this2.icon = icon;
              } },
            _react2.default.createElement(_UnfoldMoreHorizontalIcon2.default, {
              style: styles.svg,
              onMouseOver: this.showHighlight,
              onMouseEnter: this.showHighlight,
              onMouseOut: this.hideHighlight
            })
          )
        )
      );
    }
  }]);

  return ChromeFields;
}(_react2.default.Component);

exports.default = ChromeFields;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_SIZE = 24;

exports.default = function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'currentColor' : _ref$fill,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? DEFAULT_SIZE : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? DEFAULT_SIZE : _ref$height,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = _objectWithoutProperties(_ref, ['fill', 'width', 'height', 'style']);

  return _react2.default.createElement(
    'svg',
    _extends({
      viewBox: '0 0 ' + DEFAULT_SIZE + ' ' + DEFAULT_SIZE,
      style: _extends({ fill: fill, width: width, height: height }, style)
    }, props),
    _react2.default.createElement('path', { d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' })
  );
};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromePointer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChromePointer = exports.ChromePointer = function ChromePointer() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        transform: 'translate(-6px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = ChromePointer;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromePointerCircle = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChromePointerCircle = exports.ChromePointerCircle = function ChromePointerCircle() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = ChromePointerCircle;

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Compact = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(10);

var _map2 = _interopRequireDefault(_map);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _color = __webpack_require__(8);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(2);

var _CompactColor = __webpack_require__(272);

var _CompactColor2 = _interopRequireDefault(_CompactColor);

var _CompactFields = __webpack_require__(273);

var _CompactFields2 = _interopRequireDefault(_CompactFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Compact = exports.Compact = function Compact(_ref) {
  var onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      rgb = _ref.rgb,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      Compact: {
        background: '#f6f6f6',
        radius: '4px'
      },
      compact: {
        paddingTop: '5px',
        paddingLeft: '5px',
        boxSizing: 'initial',
        width: '240px'
      },
      clear: {
        clear: 'both'
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _color2.default.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else {
      onChange(data, e);
    }
  };

  return _react2.default.createElement(
    _common.Raised,
    { style: styles.Compact, styles: passedStyles },
    _react2.default.createElement(
      'div',
      { style: styles.compact, className: 'compact-picker ' + className },
      _react2.default.createElement(
        'div',
        null,
        (0, _map2.default)(colors, function (c) {
          return _react2.default.createElement(_CompactColor2.default, {
            key: c,
            color: c,
            active: c.toLowerCase() === hex,
            onClick: handleChange,
            onSwatchHover: onSwatchHover
          });
        }),
        _react2.default.createElement('div', { style: styles.clear })
      ),
      _react2.default.createElement(_CompactFields2.default, { hex: hex, rgb: rgb, onChange: handleChange })
    )
  );
};

Compact.propTypes = {
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  styles: _propTypes2.default.object
};

Compact.defaultProps = {
  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'],
  styles: {}
};

exports.default = (0, _common.ColorWrap)(Compact);

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompactColor = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(8);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompactColor = exports.CompactColor = function CompactColor(_ref) {
  var color = _ref.color,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      color: {
        background: color,
        width: '15px',
        height: '15px',
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative',
        cursor: 'pointer'
      },
      dot: {
        absolute: '5px 5px 5px 5px',
        background: _color2.default.getContrastingColor(color),
        borderRadius: '50%',
        opacity: '0'
      }
    },
    'active': {
      dot: {
        opacity: '1'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      dot: {
        background: '#000'
      }
    },
    'transparent': {
      dot: {
        background: '#000'
      }
    }
  }, { active: active, 'color-#FFFFFF': color === '#FFFFFF', 'transparent': color === 'transparent' });

  return _react2.default.createElement(
    _common.Swatch,
    {
      style: styles.color,
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: '0 0 4px ' + color }
    },
    _react2.default.createElement('div', { style: styles.dot })
  );
};

exports.default = CompactColor;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompactFields = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompactFields = exports.CompactFields = function CompactFields(_ref) {
  var hex = _ref.hex,
      rgb = _ref.rgb,
      onChange = _ref.onChange;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        display: 'flex',
        paddingBottom: '6px',
        paddingRight: '5px',
        position: 'relative'
      },
      active: {
        position: 'absolute',
        top: '6px',
        left: '5px',
        height: '9px',
        width: '9px',
        background: hex
      },
      HEXwrap: {
        flex: '6',
        position: 'relative'
      },
      HEXinput: {
        width: '80%',
        padding: '0px',
        paddingLeft: '20%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      HEXlabel: {
        display: 'none'
      },
      RGBwrap: {
        flex: '3',
        position: 'relative'
      },
      RGBinput: {
        width: '70%',
        padding: '0px',
        paddingLeft: '30%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '3px',
        left: '0px',
        lineHeight: '16px',
        textTransform: 'uppercase',
        fontSize: '12px',
        color: '#999'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else {
      onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields, className: 'flexbox-fix' },
    _react2.default.createElement('div', { style: styles.active }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: 'hex',
      value: hex,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'r',
      value: rgb.r,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'g',
      value: rgb.g,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'b',
      value: rgb.b,
      onChange: handleChange
    })
  );
};

exports.default = CompactFields;

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Github = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(10);

var _map2 = _interopRequireDefault(_map);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(2);

var _GithubSwatch = __webpack_require__(275);

var _GithubSwatch2 = _interopRequireDefault(_GithubSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Github = exports.Github = function Github(_ref) {
  var width = _ref.width,
      colors = _ref.colors,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      triangle = _ref.triangle,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
        borderRadius: '4px',
        position: 'relative',
        padding: '5px',
        display: 'flex',
        flexWrap: 'wrap'
      },
      triangle: {
        position: 'absolute',
        border: '7px solid transparent',
        borderBottomColor: '#fff'
      },
      triangleShadow: {
        position: 'absolute',
        border: '8px solid transparent',
        borderBottomColor: 'rgba(0,0,0,0.15)'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-14px',
        left: '10px'
      },
      triangleShadow: {
        top: '-16px',
        left: '9px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-14px',
        right: '10px'
      },
      triangleShadow: {
        top: '-16px',
        right: '9px'
      }
    },
    'bottom-left-triangle': {
      triangle: {
        top: '35px',
        left: '10px',
        transform: 'rotate(180deg)'
      },
      triangleShadow: {
        top: '37px',
        left: '9px',
        transform: 'rotate(180deg)'
      }
    },
    'bottom-right-triangle': {
      triangle: {
        top: '35px',
        right: '10px',
        transform: 'rotate(180deg)'
      },
      triangleShadow: {
        top: '37px',
        right: '9px',
        transform: 'rotate(180deg)'
      }
    }
  }, passedStyles), {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right',
    'bottom-left-triangle': triangle == 'bottom-left',
    'bottom-right-triangle': triangle === 'bottom-right'
  });

  var handleChange = function handleChange(hex, e) {
    return onChange({ hex: hex, source: 'hex' }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'github-picker ' + className },
    _react2.default.createElement('div', { style: styles.triangleShadow }),
    _react2.default.createElement('div', { style: styles.triangle }),
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_GithubSwatch2.default, {
        color: c,
        key: c,
        onClick: handleChange,
        onSwatchHover: onSwatchHover
      });
    })
  );
};

Github.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  triangle: _propTypes2.default.oneOf(['hide', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  styles: _propTypes2.default.object
};

Github.defaultProps = {
  width: 200,
  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
  triangle: 'top-left',
  styles: {}
};

exports.default = (0, _common.ColorWrap)(Github);

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GithubSwatch = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubSwatch = exports.GithubSwatch = function GithubSwatch(_ref) {
  var hover = _ref.hover,
      color = _ref.color,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover;

  var hoverSwatch = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #fff',
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
  };

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: '25px',
        height: '25px',
        fontSize: '0'
      }
    },
    'hover': {
      swatch: hoverSwatch
    }
  }, { hover: hover });

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, {
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: hoverSwatch
    })
  );
};

exports.default = (0, _reactcss.handleHover)(GithubSwatch);

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HuePicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(2);

var _HuePointer = __webpack_require__(277);

var _HuePointer2 = _interopRequireDefault(_HuePointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HuePicker = exports.HuePicker = function HuePicker(_ref) {
  var width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      hsl = _ref.hsl,
      direction = _ref.direction,
      pointer = _ref.pointer,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      hue: {
        radius: '2px'
      }
    }
  }, passedStyles));

  // Overwrite to provide pure hue color
  var handleChange = function handleChange(data) {
    return onChange({ a: 1, h: data.h, l: 0.5, s: 1 });
  };

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'hue-picker ' + className },
    _react2.default.createElement(_common.Hue, _extends({}, styles.hue, {
      hsl: hsl,
      pointer: pointer,
      onChange: handleChange,
      direction: direction
    }))
  );
};

HuePicker.propTypes = {
  styles: _propTypes2.default.object
};
HuePicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: _HuePointer2.default,
  styles: {}
};

exports.default = (0, _common.ColorWrap)(HuePicker);

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderPointer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderPointer = exports.SliderPointer = function SliderPointer(_ref) {
  var direction = _ref.direction;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, { vertical: direction === 'vertical' });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = SliderPointer;

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Material = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _color = __webpack_require__(8);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Material = exports.Material = function Material(_ref) {
  var onChange = _ref.onChange,
      hex = _ref.hex,
      rgb = _ref.rgb,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      material: {
        width: '98px',
        height: '98px',
        padding: '16px',
        fontFamily: 'Roboto'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '2px solid ' + hex,
        outline: 'none',
        height: '30px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '1px solid #eee',
        outline: 'none',
        height: '30px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      split: {
        display: 'flex',
        marginRight: '-10px',
        paddingTop: '11px'
      },
      third: {
        flex: '1',
        paddingRight: '10px'
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _color2.default.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    }
  };

  return _react2.default.createElement(
    _common.Raised,
    { styles: passedStyles },
    _react2.default.createElement(
      'div',
      { style: styles.material, className: 'material-picker ' + className },
      _react2.default.createElement(_common.EditableInput, {
        style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
        label: 'hex',
        value: hex,
        onChange: handleChange
      }),
      _react2.default.createElement(
        'div',
        { style: styles.split, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'r', value: rgb.r,
            onChange: handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'g',
            value: rgb.g,
            onChange: handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'b',
            value: rgb.b,
            onChange: handleChange
          })
        )
      )
    )
  );
};

exports.default = (0, _common.ColorWrap)(Material);

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Photoshop = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(2);

var _PhotoshopFields = __webpack_require__(280);

var _PhotoshopFields2 = _interopRequireDefault(_PhotoshopFields);

var _PhotoshopPointerCircle = __webpack_require__(281);

var _PhotoshopPointerCircle2 = _interopRequireDefault(_PhotoshopPointerCircle);

var _PhotoshopPointer = __webpack_require__(282);

var _PhotoshopPointer2 = _interopRequireDefault(_PhotoshopPointer);

var _PhotoshopButton = __webpack_require__(283);

var _PhotoshopButton2 = _interopRequireDefault(_PhotoshopButton);

var _PhotoshopPreviews = __webpack_require__(284);

var _PhotoshopPreviews2 = _interopRequireDefault(_PhotoshopPreviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Photoshop = exports.Photoshop = function (_React$Component) {
  _inherits(Photoshop, _React$Component);

  function Photoshop(props) {
    _classCallCheck(this, Photoshop);

    var _this = _possibleConstructorReturn(this, (Photoshop.__proto__ || Object.getPrototypeOf(Photoshop)).call(this));

    _this.state = {
      currentColor: props.hex
    };
    return _this;
  }

  _createClass(Photoshop, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$styles = _props.styles,
          passedStyles = _props$styles === undefined ? {} : _props$styles,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className;

      var styles = (0, _reactcss2.default)((0, _merge2.default)({
        'default': {
          picker: {
            background: '#DCDCDC',
            borderRadius: '4px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
            boxSizing: 'initial',
            width: '513px'
          },
          head: {
            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
            borderBottom: '1px solid #B1B1B1',
            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
            height: '23px',
            lineHeight: '24px',
            borderRadius: '4px 4px 0 0',
            fontSize: '13px',
            color: '#4D4D4D',
            textAlign: 'center'
          },
          body: {
            padding: '15px 15px 0',
            display: 'flex'
          },
          saturation: {
            width: '256px',
            height: '256px',
            position: 'relative',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0',
            overflow: 'hidden'
          },
          hue: {
            position: 'relative',
            height: '256px',
            width: '19px',
            marginLeft: '10px',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0'
          },
          controls: {
            width: '180px',
            marginLeft: '10px'
          },
          top: {
            display: 'flex'
          },
          previews: {
            width: '60px'
          },
          actions: {
            flex: '1',
            marginLeft: '20px'
          }
        }
      }, passedStyles));

      return _react2.default.createElement(
        'div',
        { style: styles.picker, className: 'photoshop-picker ' + className },
        _react2.default.createElement(
          'div',
          { style: styles.head },
          this.props.header
        ),
        _react2.default.createElement(
          'div',
          { style: styles.body, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.saturation },
            _react2.default.createElement(_common.Saturation, {
              hsl: this.props.hsl,
              hsv: this.props.hsv,
              pointer: _PhotoshopPointerCircle2.default,
              onChange: this.props.onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.hue },
            _react2.default.createElement(_common.Hue, {
              direction: 'vertical',
              hsl: this.props.hsl,
              pointer: _PhotoshopPointer2.default,
              onChange: this.props.onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.controls },
            _react2.default.createElement(
              'div',
              { style: styles.top, className: 'flexbox-fix' },
              _react2.default.createElement(
                'div',
                { style: styles.previews },
                _react2.default.createElement(_PhotoshopPreviews2.default, {
                  rgb: this.props.rgb,
                  currentColor: this.state.currentColor
                })
              ),
              _react2.default.createElement(
                'div',
                { style: styles.actions },
                _react2.default.createElement(_PhotoshopButton2.default, { label: 'OK', onClick: this.props.onAccept, active: true }),
                _react2.default.createElement(_PhotoshopButton2.default, { label: 'Cancel', onClick: this.props.onCancel }),
                _react2.default.createElement(_PhotoshopFields2.default, {
                  onChange: this.props.onChange,
                  rgb: this.props.rgb,
                  hsv: this.props.hsv,
                  hex: this.props.hex
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Photoshop;
}(_react2.default.Component);

Photoshop.propTypes = {
  header: _propTypes2.default.string,
  styles: _propTypes2.default.object
};

Photoshop.defaultProps = {
  header: 'Color Picker',
  styles: {}
};

exports.default = (0, _common.ColorWrap)(Photoshop);

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPicker = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(8);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPicker = exports.PhotoshopPicker = function PhotoshopPicker(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsv = _ref.hsv,
      hex = _ref.hex;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        paddingTop: '5px',
        paddingBottom: '9px',
        width: '80px',
        position: 'relative'
      },
      divider: {
        height: '5px'
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        marginLeft: '40%',
        width: '40%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '5px',
        fontSize: '13px',
        paddingLeft: '3px',
        marginRight: '10px'
      },
      RGBlabel: {
        left: '0px',
        width: '34px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px',
        position: 'absolute'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        marginLeft: '20%',
        width: '80%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '6px',
        fontSize: '13px',
        paddingLeft: '3px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '14px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px'
      },
      fieldSymbols: {
        position: 'absolute',
        top: '5px',
        right: '-7px',
        fontSize: '13px'
      },
      symbol: {
        height: '20px',
        lineHeight: '22px',
        paddingBottom: '7px'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data['#']) {
      _color2.default.isValidHex(data['#']) && onChange({
        hex: data['#'],
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else if (data.h || data.s || data.v) {
      onChange({
        h: data.h || hsv.h,
        s: data.s || hsv.s,
        v: data.v || hsv.v,
        source: 'hsv'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields },
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'h',
      value: Math.round(hsv.h),
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 's',
      value: Math.round(hsv.s * 100),
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'v',
      value: Math.round(hsv.v * 100),
      onChange: handleChange
    }),
    _react2.default.createElement('div', { style: styles.divider }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'r',
      value: rgb.r,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'g',
      value: rgb.g,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'b',
      value: rgb.b,
      onChange: handleChange
    }),
    _react2.default.createElement('div', { style: styles.divider }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: '#',
      value: hex.replace('#', ''),
      onChange: handleChange
    }),
    _react2.default.createElement(
      'div',
      { style: styles.fieldSymbols },
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '\xB0'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '%'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '%'
      )
    )
  );
};

exports.default = PhotoshopPicker;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPointerCircle = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle(_ref) {
  var hsl = _ref.hsl;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    },
    'black-outline': {
      picker: {
        boxShadow: 'inset 0 0 0 1px #000'
      }
    }
  }, { 'black-outline': hsl.l > 0.5 });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = PhotoshopPointerCircle;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPointerCircle = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle() {
  var styles = (0, _reactcss2.default)({
    'default': {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '4px 0 4px 6px',
        borderColor: 'transparent transparent transparent #fff',
        position: 'absolute',
        top: '1px',
        left: '1px'
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '5px 0 5px 8px',
        borderColor: 'transparent transparent transparent #555'
      },

      left: {
        Extend: 'triangleBorder',
        transform: 'translate(-13px, -4px)'
      },
      leftInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      },

      right: {
        Extend: 'triangleBorder',
        transform: 'translate(20px, -14px) rotate(180deg)'
      },
      rightInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.pointer },
    _react2.default.createElement(
      'div',
      { style: styles.left },
      _react2.default.createElement('div', { style: styles.leftInside })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.right },
      _react2.default.createElement('div', { style: styles.rightInside })
    )
  );
};

exports.default = PhotoshopPointerCircle;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopBotton = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopBotton = exports.PhotoshopBotton = function PhotoshopBotton(_ref) {
  var onClick = _ref.onClick,
      label = _ref.label,
      children = _ref.children,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      button: {
        backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
        border: '1px solid #878787',
        borderRadius: '2px',
        height: '20px',
        boxShadow: '0 1px 0 0 #EAEAEA',
        fontSize: '14px',
        color: '#000',
        lineHeight: '20px',
        textAlign: 'center',
        marginBottom: '10px',
        cursor: 'pointer'
      }
    },
    'active': {
      button: {
        boxShadow: '0 0 0 1px #878787'
      }
    }
  }, { active: active });

  return _react2.default.createElement(
    'div',
    { style: styles.button, onClick: onClick },
    label || children
  );
};

exports.default = PhotoshopBotton;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopPreviews = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPreviews = exports.PhotoshopPreviews = function PhotoshopPreviews(_ref) {
  var rgb = _ref.rgb,
      currentColor = _ref.currentColor;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        border: '1px solid #B3B3B3',
        borderBottom: '1px solid #F0F0F0',
        marginBottom: '2px',
        marginTop: '1px'
      },
      new: {
        height: '34px',
        background: 'rgb(' + rgb.r + ',' + rgb.g + ', ' + rgb.b + ')',
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
      },
      current: {
        height: '34px',
        background: currentColor,
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
      },
      label: {
        fontSize: '14px',
        color: '#000',
        textAlign: 'center'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: styles.label },
      'new'
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatches },
      _react2.default.createElement('div', { style: styles.new }),
      _react2.default.createElement('div', { style: styles.current })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.label },
      'current'
    )
  );
};

exports.default = PhotoshopPreviews;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sketch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(2);

var _SketchFields = __webpack_require__(286);

var _SketchFields2 = _interopRequireDefault(_SketchFields);

var _SketchPresetColors = __webpack_require__(287);

var _SketchPresetColors2 = _interopRequireDefault(_SketchPresetColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sketch = exports.Sketch = function Sketch(_ref) {
  var width = _ref.width,
      rgb = _ref.rgb,
      hex = _ref.hex,
      hsv = _ref.hsv,
      hsl = _ref.hsl,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      disableAlpha = _ref.disableAlpha,
      presetColors = _ref.presetColors,
      renderers = _ref.renderers,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': _extends({
      picker: {
        width: width,
        padding: '10px 10px 0',
        boxSizing: 'initial',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
      },
      saturation: {
        width: '100%',
        paddingBottom: '75%',
        position: 'relative',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '3px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      controls: {
        display: 'flex'
      },
      sliders: {
        padding: '4px 0',
        flex: '1'
      },
      color: {
        width: '24px',
        height: '24px',
        position: 'relative',
        marginTop: '4px',
        marginLeft: '4px',
        borderRadius: '3px'
      },
      activeColor: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '2px',
        background: 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      hue: {
        position: 'relative',
        height: '10px',
        overflow: 'hidden'
      },
      Hue: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },

      alpha: {
        position: 'relative',
        height: '10px',
        marginTop: '4px',
        overflow: 'hidden'
      },
      Alpha: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      }
    }, passedStyles),
    'disableAlpha': {
      color: {
        height: '10px'
      },
      hue: {
        height: '10px'
      },
      alpha: {
        display: 'none'
      }
    }
  }, passedStyles), { disableAlpha: disableAlpha });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'sketch-picker ' + className },
    _react2.default.createElement(
      'div',
      { style: styles.saturation },
      _react2.default.createElement(_common.Saturation, {
        style: styles.Saturation,
        hsl: hsl,
        hsv: hsv,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.controls, className: 'flexbox-fix' },
      _react2.default.createElement(
        'div',
        { style: styles.sliders },
        _react2.default.createElement(
          'div',
          { style: styles.hue },
          _react2.default.createElement(_common.Hue, {
            style: styles.Hue,
            hsl: hsl,
            onChange: onChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.alpha },
          _react2.default.createElement(_common.Alpha, {
            style: styles.Alpha,
            rgb: rgb,
            hsl: hsl,
            renderers: renderers,
            onChange: onChange
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.color },
        _react2.default.createElement(_common.Checkboard, null),
        _react2.default.createElement('div', { style: styles.activeColor })
      )
    ),
    _react2.default.createElement(_SketchFields2.default, {
      rgb: rgb,
      hsl: hsl,
      hex: hex,
      onChange: onChange,
      disableAlpha: disableAlpha
    }),
    _react2.default.createElement(_SketchPresetColors2.default, {
      colors: presetColors,
      onClick: onChange,
      onSwatchHover: onSwatchHover
    })
  );
};

Sketch.propTypes = {
  disableAlpha: _propTypes2.default.bool,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  styles: _propTypes2.default.object
};

Sketch.defaultProps = {
  disableAlpha: false,
  width: 200,
  styles: {},
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
};

exports.default = (0, _common.ColorWrap)(Sketch);

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SketchFields = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(8);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign */

var SketchFields = exports.SketchFields = function SketchFields(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hex = _ref.hex,
      disableAlpha = _ref.disableAlpha;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        display: 'flex',
        paddingTop: '4px'
      },
      single: {
        flex: '1',
        paddingLeft: '6px'
      },
      alpha: {
        flex: '1',
        paddingLeft: '6px'
      },
      double: {
        flex: '2'
      },
      input: {
        width: '80%',
        padding: '4px 10% 3px',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px #ccc',
        fontSize: '11px'
      },
      label: {
        display: 'block',
        textAlign: 'center',
        fontSize: '11px',
        color: '#222',
        paddingTop: '3px',
        paddingBottom: '4px',
        textTransform: 'capitalize'
      }
    },
    'disableAlpha': {
      alpha: {
        display: 'none'
      }
    }
  }, { disableAlpha: disableAlpha });

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _color2.default.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        a: rgb.a,
        source: 'rgb'
      }, e);
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 100) {
        data.a = 100;
      }

      data.a /= 100;
      onChange({
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: data.a,
        source: 'rgb'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields, className: 'flexbox-fix' },
    _react2.default.createElement(
      'div',
      { style: styles.double },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'hex',
        value: hex.replace('#', ''),
        onChange: handleChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'r',
        value: rgb.r,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'g',
        value: rgb.g,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'b',
        value: rgb.b,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.alpha },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'a',
        value: Math.round(rgb.a * 100),
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '100'
      })
    )
  );
};

exports.default = SketchFields;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SketchPresetColors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SketchPresetColors = exports.SketchPresetColors = function SketchPresetColors(_ref) {
  var colors = _ref.colors,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover;

  var styles = (0, _reactcss2.default)({
    'default': {
      colors: {
        margin: '0 -10px',
        padding: '10px 0 0 10px',
        borderTop: '1px solid #eee',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative'
      },
      swatchWrap: {
        width: '16px',
        height: '16px',
        margin: '0 10px 10px 0'
      },
      swatch: {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
      }
    },
    'no-presets': {
      colors: {
        display: 'none'
      }
    }
  }, {
    'no-presets': !colors || !colors.length
  });

  var handleClick = function handleClick(hex, e) {
    onClick({
      hex: hex,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.colors, className: 'flexbox-fix' },
    colors.map(function (colorObjOrString) {
      var c = typeof colorObjOrString === 'string' ? { color: colorObjOrString } : colorObjOrString;
      var key = '' + c.color + (c.title || '');
      return _react2.default.createElement(
        'div',
        { key: key, style: styles.swatchWrap },
        _react2.default.createElement(_common.Swatch, _extends({}, c, {
          style: styles.swatch,
          onClick: handleClick,
          onHover: onSwatchHover,
          focusStyle: {
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + c.color
          }
        }))
      );
    })
  );
};

SketchPresetColors.propTypes = {
  colors: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    color: _propTypes2.default.string,
    title: _propTypes2.default.string
  })])).isRequired
};

exports.default = SketchPresetColors;

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(2);

var _SliderSwatches = __webpack_require__(289);

var _SliderSwatches2 = _interopRequireDefault(_SliderSwatches);

var _SliderPointer = __webpack_require__(291);

var _SliderPointer2 = _interopRequireDefault(_SliderPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = exports.Slider = function Slider(_ref) {
  var hsl = _ref.hsl,
      onChange = _ref.onChange,
      pointer = _ref.pointer,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      hue: {
        height: '12px',
        position: 'relative'
      },
      Hue: {
        radius: '2px'
      }
    }
  }, passedStyles));

  return _react2.default.createElement(
    'div',
    { style: styles.wrap || '', className: 'slider-picker ' + className },
    _react2.default.createElement(
      'div',
      { style: styles.hue },
      _react2.default.createElement(_common.Hue, {
        style: styles.Hue,
        hsl: hsl,
        pointer: pointer,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatches },
      _react2.default.createElement(_SliderSwatches2.default, { hsl: hsl, onClick: onChange })
    )
  );
};

Slider.propTypes = {
  styles: _propTypes2.default.object
};
Slider.defaultProps = {
  pointer: _SliderPointer2.default,
  styles: {}
};

exports.default = (0, _common.ColorWrap)(Slider);

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderSwatches = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _SliderSwatch = __webpack_require__(290);

var _SliderSwatch2 = _interopRequireDefault(_SliderSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderSwatches = exports.SliderSwatches = function SliderSwatches(_ref) {
  var onClick = _ref.onClick,
      hsl = _ref.hsl;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        marginTop: '20px'
      },
      swatch: {
        boxSizing: 'border-box',
        width: '20%',
        paddingRight: '1px',
        float: 'left'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.swatches },
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.80',
        active: Math.round(hsl.l * 100) / 100 === 0.80 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick,
        first: true
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.65',
        active: Math.round(hsl.l * 100) / 100 === 0.65 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.50',
        active: Math.round(hsl.l * 100) / 100 === 0.50 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.35',
        active: Math.round(hsl.l * 100) / 100 === 0.35 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.20',
        active: Math.round(hsl.l * 100) / 100 === 0.20 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick,
        last: true
      })
    ),
    _react2.default.createElement('div', { style: styles.clear })
  );
};

exports.default = SliderSwatches;

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderSwatch = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderSwatch = exports.SliderSwatch = function SliderSwatch(_ref) {
  var hsl = _ref.hsl,
      offset = _ref.offset,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      active = _ref.active,
      first = _ref.first,
      last = _ref.last;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        height: '12px',
        background: 'hsl(' + hsl.h + ', 50%, ' + offset * 100 + '%)',
        cursor: 'pointer'
      }
    },
    'first': {
      swatch: {
        borderRadius: '2px 0 0 2px'
      }
    },
    'last': {
      swatch: {
        borderRadius: '0 2px 2px 0'
      }
    },
    'active': {
      swatch: {
        transform: 'scaleY(1.8)',
        borderRadius: '3.6px/2px'
      }
    }
  }, { active: active, first: first, last: last });

  var handleClick = function handleClick(e) {
    return onClick({
      h: hsl.h,
      s: 0.5,
      l: offset,
      source: 'hsl'
    }, e);
  };

  return _react2.default.createElement('div', { style: styles.swatch, onClick: handleClick });
};

exports.default = SliderSwatch;

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderPointer = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderPointer = exports.SliderPointer = function SliderPointer() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '14px',
        height: '14px',
        borderRadius: '6px',
        transform: 'translate(-7px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports.default = SliderPointer;

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swatches = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(10);

var _map2 = _interopRequireDefault(_map);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _color = __webpack_require__(8);

var _color2 = _interopRequireDefault(_color);

var _materialColors = __webpack_require__(92);

var material = _interopRequireWildcard(_materialColors);

var _common = __webpack_require__(2);

var _SwatchesGroup = __webpack_require__(293);

var _SwatchesGroup2 = _interopRequireDefault(_SwatchesGroup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swatches = exports.Swatches = function Swatches(_ref) {
  var width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      picker: {
        width: width,
        height: height
      },
      overflow: {
        height: height,
        overflowY: 'scroll'
      },
      body: {
        padding: '16px 0 6px 16px'
      },
      clear: {
        clear: 'both'
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(data, e) {
    _color2.default.isValidHex(data) && onChange({
      hex: data,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'swatches-picker ' + className },
    _react2.default.createElement(
      _common.Raised,
      null,
      _react2.default.createElement(
        'div',
        { style: styles.overflow },
        _react2.default.createElement(
          'div',
          { style: styles.body },
          (0, _map2.default)(colors, function (group) {
            return _react2.default.createElement(_SwatchesGroup2.default, {
              key: group.toString(),
              group: group,
              active: hex,
              onClick: handleChange,
              onSwatchHover: onSwatchHover
            });
          }),
          _react2.default.createElement('div', { style: styles.clear })
        )
      )
    )
  );
};

Swatches.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.string)),
  styles: _propTypes2.default.object

  /* eslint-disable max-len */
};Swatches.defaultProps = {
  width: 320,
  height: 240,
  colors: [[material.red['900'], material.red['700'], material.red['500'], material.red['300'], material.red['100']], [material.pink['900'], material.pink['700'], material.pink['500'], material.pink['300'], material.pink['100']], [material.purple['900'], material.purple['700'], material.purple['500'], material.purple['300'], material.purple['100']], [material.deepPurple['900'], material.deepPurple['700'], material.deepPurple['500'], material.deepPurple['300'], material.deepPurple['100']], [material.indigo['900'], material.indigo['700'], material.indigo['500'], material.indigo['300'], material.indigo['100']], [material.blue['900'], material.blue['700'], material.blue['500'], material.blue['300'], material.blue['100']], [material.lightBlue['900'], material.lightBlue['700'], material.lightBlue['500'], material.lightBlue['300'], material.lightBlue['100']], [material.cyan['900'], material.cyan['700'], material.cyan['500'], material.cyan['300'], material.cyan['100']], [material.teal['900'], material.teal['700'], material.teal['500'], material.teal['300'], material.teal['100']], ['#194D33', material.green['700'], material.green['500'], material.green['300'], material.green['100']], [material.lightGreen['900'], material.lightGreen['700'], material.lightGreen['500'], material.lightGreen['300'], material.lightGreen['100']], [material.lime['900'], material.lime['700'], material.lime['500'], material.lime['300'], material.lime['100']], [material.yellow['900'], material.yellow['700'], material.yellow['500'], material.yellow['300'], material.yellow['100']], [material.amber['900'], material.amber['700'], material.amber['500'], material.amber['300'], material.amber['100']], [material.orange['900'], material.orange['700'], material.orange['500'], material.orange['300'], material.orange['100']], [material.deepOrange['900'], material.deepOrange['700'], material.deepOrange['500'], material.deepOrange['300'], material.deepOrange['100']], [material.brown['900'], material.brown['700'], material.brown['500'], material.brown['300'], material.brown['100']], [material.blueGrey['900'], material.blueGrey['700'], material.blueGrey['500'], material.blueGrey['300'], material.blueGrey['100']], ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']],
  styles: {}
};

exports.default = (0, _common.ColorWrap)(Swatches);

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwatchesGroup = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(10);

var _map2 = _interopRequireDefault(_map);

var _SwatchesColor = __webpack_require__(294);

var _SwatchesColor2 = _interopRequireDefault(_SwatchesColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwatchesGroup = exports.SwatchesGroup = function SwatchesGroup(_ref) {
  var onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover,
      group = _ref.group,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      group: {
        paddingBottom: '10px',
        width: '40px',
        float: 'left',
        marginRight: '10px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.group },
    (0, _map2.default)(group, function (color, i) {
      return _react2.default.createElement(_SwatchesColor2.default, {
        key: color,
        color: color,
        active: color.toLowerCase() === active,
        first: i === 0,
        last: i === group.length - 1,
        onClick: onClick,
        onSwatchHover: onSwatchHover
      });
    })
  );
};

exports.default = SwatchesGroup;

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwatchesColor = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(8);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(2);

var _CheckIcon = __webpack_require__(295);

var _CheckIcon2 = _interopRequireDefault(_CheckIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwatchesColor = exports.SwatchesColor = function SwatchesColor(_ref) {
  var color = _ref.color,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover,
      first = _ref.first,
      last = _ref.last,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      color: {
        width: '40px',
        height: '24px',
        cursor: 'pointer',
        background: color,
        marginBottom: '1px'
      },
      check: {
        color: _color2.default.getContrastingColor(color),
        marginLeft: '8px',
        display: 'none'
      }
    },
    'first': {
      color: {
        overflow: 'hidden',
        borderRadius: '2px 2px 0 0'
      }
    },
    'last': {
      color: {
        overflow: 'hidden',
        borderRadius: '0 0 2px 2px'
      }
    },
    'active': {
      check: {
        display: 'block'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      check: {
        color: '#333'
      }
    },
    'transparent': {
      check: {
        color: '#333'
      }
    }
  }, {
    first: first,
    last: last,
    active: active,
    'color-#FFFFFF': color === '#FFFFFF',
    'transparent': color === 'transparent'
  });

  return _react2.default.createElement(
    _common.Swatch,
    {
      color: color,
      style: styles.color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: '0 0 4px ' + color }
    },
    _react2.default.createElement(
      'div',
      { style: styles.check },
      _react2.default.createElement(_CheckIcon2.default, null)
    )
  );
};

exports.default = SwatchesColor;

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_SIZE = 24;

exports.default = function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'currentColor' : _ref$fill,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? DEFAULT_SIZE : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? DEFAULT_SIZE : _ref$height,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = _objectWithoutProperties(_ref, ['fill', 'width', 'height', 'style']);

  return _react2.default.createElement(
    'svg',
    _extends({
      viewBox: '0 0 ' + DEFAULT_SIZE + ' ' + DEFAULT_SIZE,
      style: _extends({ fill: fill, width: width, height: height }, style)
    }, props),
    _react2.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
  );
};

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Twitter = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(1);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(10);

var _map2 = _interopRequireDefault(_map);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _color = __webpack_require__(8);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Twitter = exports.Twitter = function Twitter(_ref) {
  var onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      hex = _ref.hex,
      colors = _ref.colors,
      width = _ref.width,
      triangle = _ref.triangle,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '0 solid rgba(0,0,0,0.25)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        borderRadius: '4px',
        position: 'relative'
      },
      body: {
        padding: '15px 9px 9px 15px'
      },
      label: {
        fontSize: '18px',
        color: '#fff'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent #fff transparent',
        position: 'absolute'
      },
      triangleShadow: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
        position: 'absolute'
      },
      hash: {
        background: '#F0F0F0',
        height: '30px',
        width: '30px',
        borderRadius: '4px 0 0 4px',
        float: 'left',
        color: '#98A1A4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        width: '100px',
        fontSize: '14px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '28px',
        boxShadow: 'inset 0 0 0 1px #F0F0F0',
        boxSizing: 'content-box',
        borderRadius: '0 4px 4px 0',
        float: 'left',
        paddingLeft: '8px'
      },
      swatch: {
        width: '30px',
        height: '30px',
        float: 'left',
        borderRadius: '4px',
        margin: '0 6px 6px 0'
      },
      clear: {
        clear: 'both'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-10px',
        left: '12px'
      },
      triangleShadow: {
        top: '-11px',
        left: '12px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-10px',
        right: '12px'
      },
      triangleShadow: {
        top: '-11px',
        right: '12px'
      }
    }
  }, passedStyles), {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right'
  });

  var handleChange = function handleChange(hexcode, e) {
    _color2.default.isValidHex(hexcode) && onChange({
      hex: hexcode,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'twitter-picker ' + className },
    _react2.default.createElement('div', { style: styles.triangleShadow }),
    _react2.default.createElement('div', { style: styles.triangle }),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      (0, _map2.default)(colors, function (c, i) {
        return _react2.default.createElement(_common.Swatch, {
          key: i,
          color: c,
          hex: c,
          style: styles.swatch,
          onClick: handleChange,
          onHover: onSwatchHover,
          focusStyle: {
            boxShadow: '0 0 4px ' + c
          }
        });
      }),
      _react2.default.createElement(
        'div',
        { style: styles.hash },
        '#'
      ),
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input },
        value: hex.replace('#', ''),
        onChange: handleChange
      }),
      _react2.default.createElement('div', { style: styles.clear })
    )
  );
};

Twitter.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  triangle: _propTypes2.default.oneOf(['hide', 'top-left', 'top-right']),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  styles: _propTypes2.default.object
};

Twitter.defaultProps = {
  width: 276,
  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
  triangle: 'top-left',
  styles: {}
};

exports.default = (0, _common.ColorWrap)(Twitter);

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(298);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: []
    };
  },
  componentDidMount: function componentDidMount() {
    zn.http.get('/zn.plugin.admin/icon/getFontAwesomes').then(function (data) {
      if (data.status == 200) {
        this.setState({
          data: data.result
        });
      } else {
        zn.toast.error(data.result);
      }
    }.bind(this), function () {
      zn.toast.error('获取数据失败');
    });
  },
  __onIconClick: function __onIconClick(item, index) {
    this.props.onChange && this.props.onChange(item, item);
  },
  render: function render() {
    return React.createElement("div", {
      className: zn.react.classname("zn-plugin-admin-font-awesome-icons", this.props.className)
    }, this.state.data.map(function (item, index) {
      var _this = this;

      return React.createElement("i", {
        onClick: function onClick() {
          return _this.__onIconClick(item, index);
        },
        key: index,
        className: 'icon fa ' + item + ' ' + (this.props.value == item ? 'selected' : '')
      });
    }.bind(this)));
  }
});

/***/ }),
/* 298 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {},
  __renderItem: function __renderItem(item, index) {
    return React.createElement("li", {
      className: "menu-item"
    }, React.createElement("div", {
      className: "item-title"
    }, React.createElement("i", {
      className: "fa " + item.icon
    }), item.zn_title), !!item.children && !!item.children.length && this.__renderChildren(item.children));
  },
  __renderChildren: function __renderChildren(children) {
    return React.createElement("ul", {
      className: "sub-menu-list"
    }, children.map(function (item, index) {
      var _this = this;

      return React.createElement("li", {
        className: zn.react.session.isPath(item.url) ? 'active-item' : '',
        key: index,
        onClick: function onClick() {
          return _this.__onSubItemClick(item, index);
        }
      }, React.createElement("div", {
        className: "item-title"
      }, React.createElement("i", {
        className: "fa " + item.icon
      }), item.zn_title));
    }.bind(this)));
  },
  __onSubItemClick: function __onSubItemClick(item, index) {
    if (item.url) {
      zn.react.session.relativeJump(item.url);
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: "zn-plugin-admin-widget-navigation-bar"
    }, React.createElement("ul", {
      className: "menu-list"
    }, this.props.data.map(function (item, index) {
      return this.__renderItem(item, index);
    }.bind(this))));
  }
});

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./BaseBusinessView.js": 301,
	"./BaseModelView.js": 302,
	"./MasterSlave.js": 303,
	"./Slave.js": 94,
	"./TreeModelView.js": 18,
	"./index.js": 93
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 300;

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: '',
      headers: [],
      insertInputs: [],
      updateInputs: []
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model
      }),
      currItem: null,
      toolbarItems: [{
        text: '新建项目',
        name: 'addItem',
        icon: 'fa-plus'
      }, {
        text: '编辑项目',
        name: 'updateItem',
        icon: 'fa-edit'
      }, {
        text: '删除项目',
        name: 'deleteItem',
        icon: 'fa-remove'
      }]
    };
  },
  __onTableRowClick: function __onTableRowClick(event, data, row, table) {
    this.state.currItem = data;
  },
  __doSuccess: function __doSuccess() {
    zn.modal.close();
    zn.toast.success('操作成功！');
    this.state.data.refresh();
  },
  __addItem: function __addItem(pid) {
    zn.dialog({
      title: '添加项',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: this.props.model
        },
        merge: "values",
        onSubmitSuccess: this.__doSuccess,
        btns: [{
          text: '新建项目',
          icon: 'fa-plus',
          type: 'submit',
          "float": 'right',
          style: {
            marginRight: 0
          }
        }, {
          text: '取消',
          type: 'cancle',
          status: 'danger',
          "float": 'right'
        }],
        items: this.props.insertInputs
      })
    });
  },
  __updateItem: function __updateItem(data) {
    zn.dialog({
      title: '更新项目信息',
      content: React.createElement(zn.react.Form, {
        method: "POST",
        layout: "stacked",
        action: "/zn.plugin.admin/model/updates",
        exts: {
          model: this.props.model
        },
        merge: "updates",
        data: data,
        onSubmitSuccess: this.__doSuccess,
        btns: [{
          text: '更新',
          icon: 'fa-edit',
          type: 'submit',
          "float": 'right',
          style: {
            marginRight: 0
          }
        }, {
          text: '取消',
          type: 'cancle',
          status: 'danger',
          "float": 'right'
        }],
        items: this.props.updateInputs
      })
    });
  },
  __onToolbarClick: function __onToolbarClick(item) {
    if (item.name == 'addItem') {
      this.__addItem();

      return;
    }

    if (!this.state.currItem) {
      zn.toast.warning('必须选择主项');
      return false;
    }

    switch (item.name) {
      case 'updateItem':
        this.__updateItem(this.state.currItem);

        break;

      case 'deleteItem':
        zn.confirm('确认删除该项吗？', '提示', function () {
          zn.http.post('/zn.plugin.admin/model/delete', {
            model: this.props.model,
            where: {
              id: this.state.currItem.id
            }
          }).then(function (data) {
            this.state.data.refresh();
            zn.toast.success('删除成功！');
          }.bind(this), function (data) {
            zn.toast.error('删除出错: ' + data.result);
          });
        }.bind(this));
        break;
    }
  },
  render: function render() {
    return React.createElement(zn.react.ActivityLayout, {
      direction: "top-bottoom",
      begin: 35,
      barWidth: 3
    }, React.createElement(zn.react.ButtonGroup, {
      "float": "right",
      items: this.state.toolbarItems,
      onClick: this.__onToolbarClick
    }), React.createElement(zn.react.PagerView, {
      view: "Table",
      enableFilter: false,
      checkbox: 50,
      showHeader: true,
      data: this.state.data,
      onTableRowClick: this.__onTableRowClick,
      items: this.props.headers
    }));
  }
});

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model
      }),
      items: [],
      currItem: null,
      toolbarItems: [{
        text: '添加项',
        name: 'addItem',
        icon: 'fa-plus',
        style: {
          marginRight: 0
        }
      }, {
        text: '编辑项',
        name: 'updateItem',
        icon: 'fa-edit'
      }, {
        text: '删除项',
        name: 'deleteItem',
        icon: 'fa-remove'
      }]
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadTableHeaders();
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.model != this.props.model) {
      this.props.model = nextProps.model;

      this.__loadTableHeaders(function () {
        this.state.data.extend({
          model: nextProps.model
        }).refresh();
      }.bind(this));
    }
  },
  __loadTableHeaders: function __loadTableHeaders(callback) {
    zn.http.get('/zn.plugin.admin/model/getModelProps?model=' + this.props.model).then(function (data) {
      this.setState({
        items: data.result
      });
      callback && callback(data);
    }.bind(this));
  },
  __onTableRowClick: function __onTableRowClick(event, data, row, table) {
    this._currItem = data;
  },
  __addItemSuccess: function __addItemSuccess() {
    zn.modal.close();
    zn.toast.success('添加成功！');
  },
  __addItem: function __addItem(pid) {
    var _this = this;

    zn.dialog({
      title: '添加项',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: this.props.model
        },
        merge: "values",
        onSubmitSuccess: function onSubmitSuccess() {
          return _this.state.data.refresh();
        },
        btns: [{
          text: '添加',
          icon: 'fa-plus',
          type: 'submit',
          "float": 'right',
          style: {
            marginRight: 0
          }
        }, {
          text: '取消',
          type: 'cancle',
          status: 'danger',
          "float": 'right'
        }],
        items: [{
          name: 'title',
          title: 'title',
          type: 'text',
          required: true
        }]
      })
    });
  },
  __updateItem: function __updateItem(data) {
    var _this2 = this;

    zn.dialog({
      title: '修改项',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: this.props.model
        },
        merge: "updates",
        data: data,
        onSubmitSuccess: function onSubmitSuccess() {
          return _this2.state.data.refresh();
        },
        btns: [{
          text: '添加',
          icon: 'fa-plus',
          type: 'submit',
          "float": 'right',
          style: {
            marginRight: 0
          }
        }, {
          text: '取消',
          type: 'cancle',
          status: 'danger',
          "float": 'right'
        }],
        items: [{
          name: 'title',
          title: 'title',
          type: 'text',
          required: true
        }]
      })
    });
  },
  __onToolbarClick: function __onToolbarClick(item) {
    if (item.name == 'addItem') {
      this.__addItem();

      return;
    }

    if (!this.state.currItem) {
      zn.toast.warning('必须选择主项');
      return false;
    }

    switch (item.name) {
      case 'updateItem':
        this.__updateItem(this.state.currItem);

        break;

      case 'deleteItem':
        zn.confirm('确认删除该项吗？', '提示', function () {
          zn.http.post('/zn.plugin.admin/model/delete', {
            model: this.props.model,
            where: {
              id: this.state.currItem.id
            }
          }).then(function (data) {
            this.state.data.refresh();
            zn.toast.success('删除成功！');
          }.bind(this), function (data) {
            zn.toast.error('删除出错: ' + data.result);
          });
        }.bind(this));
        break;
    }
  },
  render: function render() {
    return React.createElement(zn.react.ActivityLayout, {
      direction: "top-bottoom",
      begin: 35,
      barWidth: 3
    }, React.createElement(zn.react.ButtonGroup, {
      "float": "right",
      items: this.state.toolbarItems,
      onClick: this.__onToolbarClick
    }), React.createElement(zn.react.PagerView, {
      view: "Table",
      enableFilter: false,
      checkbox: 50,
      showHeader: true,
      data: this.state.data,
      items: this.state.items
    }));
  }
});

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(0);

var Slave = __webpack_require__(94);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      model: '',
      where: {},
      formItems: [],
      toolbarItems: [],
      slave: {
        title: '',
        model: '',
        where: {},
        formItems: [],
        toolbarItems: []
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      masterId: null,
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model,
        where: this.props.where
      })
    };
  },
  __doSuccess: function __doSuccess() {
    zn.modal.close();
    zn.toast.success('操作成功！');
    this.state.data.refresh();
  },
  __addItem: function __addItem() {
    zn.dialog({
      title: '添加',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: this.props.model
        },
        hiddens: this.props.where,
        merge: "values",
        onSubmitSuccess: this.__doSuccess,
        btns: [{
          text: '添加',
          icon: 'fa-plus',
          type: 'submit',
          "float": 'right',
          style: {
            marginRight: 0
          }
        }, {
          text: '取消',
          type: 'cancle',
          status: 'danger',
          "float": 'right'
        }],
        items: this.props.formItems
      })
    });
  },
  __removeItems: function __removeItems(data) {
    zn.confirm('确认删除该项吗？', '提醒', function () {
      zn.http.post('/zn.plugin.admin/model/delete', {
        model: this.props.model,
        where: {
          id: data.id
        }
      }).then(function (data) {
        this.state.data.refresh();
        zn.toast.warning('删除成功！');
      }.bind(this), function (data) {
        zn.toast.error('删除出错: ' + data.result);
      });
    }.bind(this));
  },
  __removeItem: function __removeItem() {
    if (this.state.masterId) {
      zn.confirm('确认删除该项吗？', '提醒', function () {
        zn.http.post('/zn.plugin.admin/model/delete', {
          model: this.props.model,
          where: {
            id: this.state.masterId
          }
        }).then(function (data) {
          this.state.data.refresh();
          zn.toast.warning('删除成功！');
        }.bind(this), function (data) {
          zn.toast.error('删除出错: ' + data.result);
        });
      }.bind(this));
    } else {
      zn.toast.warning('请先选择待删除数据项！');
    }
  },
  __updateItem: function __updateItem(data) {
    zn.dialog({
      title: '更新项目信息',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: this.props.model
        },
        merge: "updates",
        data: data,
        onSubmitSuccess: this.__doSuccess,
        btns: [{
          text: '更新',
          icon: 'fa-edit',
          type: 'submit',
          "float": 'right',
          style: {
            marginRight: 0
          }
        }, {
          text: '取消',
          type: 'cancle',
          status: 'danger',
          "float": 'right'
        }],
        items: this.props.formItems
      })
    });
  },
  __onToolbarClick: function __onToolbarClick(props) {
    switch (props.name) {
      case 'addItem':
        this.__addItem();

        break;

      case 'removeItem':
        this.__removeItem();

        break;

      case 'removeItems':
        this.__removeItems();

        break;
    }
  },
  __onPagerListViewClick: function __onPagerListViewClick(value, rtitem, rtlist, event) {
    this.setState({
      masterId: value
    });
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      toolbarItems: this.props.toolbarItems,
      onToolbarClick: this.__onToolbarClick,
      title: this.props.title
    }, React.createElement(zn.react.ActivityLayout, {
      direction: "left-right",
      begin: this.props.leftWidth || 250
    }, React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "zr-list-view-border",
      textKey: "name",
      valueKey: "id",
      selectMode: "radio",
      fireIndex: 0,
      onItemClick: this.__onPagerListViewClick,
      itemRender: this.props.itemRender,
      itemClassName: this.props.itemClassName,
      data: this.state.data
    }), !!this.state.masterId ? React.createElement(Slave, _extends({}, this.props.slave, {
      masterId: this.state.masterId
    })) : React.createElement("div", null, "\u8BF7\u9009\u62E9\u4E3B\u8868\u6570\u636E\u8BB0\u5F55")));
  }
});

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var _exports = {},
    _subs = {},
    _path = null,
    _export = null;
var _data = {
  devtool: __webpack_require__(95),
  my: __webpack_require__(96),
  project: __webpack_require__(97),
  setting: __webpack_require__(99),
  user: __webpack_require__(101)
};
Object.keys(_data).map(function (path) {
  _export = _data[path];

  for (var key in _export) {
    _subs[('/znpluginadmin.' + path + '.' + key).toLowerCase()] = _export[key];
  }
});
_data = {
  Login: __webpack_require__(335),
  Main: __webpack_require__(337),
  UserActive: __webpack_require__(339)
};
Object.keys(_data).map(function (path) {
  _path = './' + path + '.js';
  _exports[('/znpluginadmin.' + path).toLowerCase()] = _data[path];
}); //_subs['/'] = require('./Main.js');
//_exports['/main'] = _subs;

module.exports = [_subs, _exports];

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./DataModelManager.js": 306,
	"./PageDebugger.js": 308,
	"./ServerManager.js": 309,
	"./index.js": 95
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 305;

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(307);

var React = __webpack_require__(0);

var API = React.createClass({
  displayName: "API",
  getInitialState: function getInitialState() {
    return {
      data: null
    };
  },
  __renderArgvForm: function __renderArgvForm() {
    var _this = this;

    if (this.props.method) {
      var _items = [],
          _argv = this.props.argv || {};

      for (var key in _argv) {
        _items.push({
          title: key,
          name: key,
          type: 'Input',
          required: true,
          value: _argv[key]
        });
      }

      if (_items.length) {
        return React.createElement(zn.react.Group, {
          title: "\u8BF7\u6C42\u53C2\u6570"
        }, React.createElement(zn.react.Form, {
          items: _items,
          buttons: [{
            text: '发送请求',
            type: 'submit',
            status: 'primary'
          }],
          onSubmitBefore: this.__onFormSubmitBefore
        }));
      } else {
        return React.createElement(zn.react.Button, {
          onClick: function onClick() {
            return _this.__submit();
          },
          "float": "right",
          text: "\u53D1\u9001\u8BF7\u6C42"
        });
      }
    } else {
      return null;
    }
  },
  __renderData: function __renderData() {
    if (this.state.data) {
      return React.createElement(zn.react.Group, {
        title: "\u8FD4\u56DE\u7ED3\u679C"
      }, React.createElement("code", {
        style: {
          padding: 5
        }
      }, JSON.stringify(this.state.data)));
    } else {
      return null;
    }
  },
  __onFormSubmitBefore: function __onFormSubmitBefore(data) {
    return this.__submit(data), false;
  },
  __submit: function __submit(data) {
    zn.confirm('对【' + this.props.router + '】发起请求？', '提示', function () {
      var _method = this.props.method.split('/')[0].toLowerCase();

      zn.preloader.open({
        content: '正在请求中...'
      });

      zn.http[_method](this.props.router, data || {}).then(function (data) {
        if (data.status == 200) {
          this.setState({
            data: data
          });
        } else {
          zn.notification.error(data.result);
        }

        zn.preloader.close();
      }.bind(this), function () {
        zn.notification.error('提交失败');
        zn.preloader.close();
      });
    }.bind(this));
  },
  render: function render() {
    var _this2 = this;

    return React.createElement("li", {
      className: "api"
    }, React.createElement("div", {
      className: "info"
    }, React.createElement("div", {
      className: "i-header"
    }, this.props.method && React.createElement("span", {
      className: "method"
    }, this.props.method), React.createElement("span", null, this.props.router), React.createElement("i", {
      "data-tooltip": "\u590D\u5236\u94FE\u63A5",
      onClick: function onClick() {
        return zn.react.copyToClipboard(_this2.props.router);
      },
      className: "fa fa-clipboard zr-padding-3"
    })), React.createElement("div", {
      className: "i-body"
    }, this.__renderArgvForm(), this.__renderData())));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      apps: [],
      apis: [],
      app: null,
      toolbarItems: [{
        text: '更新代码',
        name: 'update.code',
        icon: 'fa-cloud-download',
        style: {
          marginRight: 5
        }
      }, {
        text: '重启',
        name: 'restart',
        status: 'danger',
        icon: 'fa-play-circle',
        style: {
          marginRight: 5
        }
      }]
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadApps();
  },
  __loadApps: function __loadApps() {
    zn.http.get('/$/apps').then(function (data) {
      if (data.status == 200) {
        this.setState({
          apps: data.result
        });
      } else {
        zn.notification.error(data.result);
      }
    }.bind(this));
  },
  __onAppClick: function __onAppClick(app) {
    zn.preloader.open({
      content: '正在加载中...'
    });
    zn.http.get('/' + app + '/apis').then(function (data) {
      if (data.status == 200) {
        this.setState({
          app: app,
          apis: data.result
        });
      } else {
        zn.notification.error(data.result);
      }

      zn.preloader.close();
    }.bind(this), function () {
      zn.notification.error('服务器请求失败');
      zn.preloader.close();
    });
  },
  __renderApps: function __renderApps() {
    return React.createElement("ul", {
      className: "apps"
    }, this.state.apps.map(function (app, index) {
      var _this3 = this;

      return React.createElement("li", {
        key: index,
        className: "app " + (this.state.app == app ? 'curr' : ''),
        onClick: function onClick() {
          return _this3.__onAppClick(app);
        }
      }, React.createElement("a", null, app));
    }.bind(this)));
  },
  __renderApis: function __renderApis() {
    return React.createElement("ul", {
      className: "apis"
    }, this.state.apis.map(function (api, index) {
      return React.createElement(API, _extends({
        key: index
      }, api));
    }.bind(this)));
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.name) {
      case 'update.code':
        zn.confirm('更新后台服务代码？', '提示', function () {
          zn.preloader.open({
            content: '正在更新中...'
          });
          zn.http.get('/$/pull').then(function (data) {
            if (data.status == 200) {
              zn.notification.success('更新完成');
            } else {
              zn.notification.error(data.result);
            }

            zn.preloader.close();
          }.bind(this), function () {
            zn.notification.error('更新失败');
            zn.preloader.close();
          });
        }.bind(this));
        break;

      case 'restart':
        zn.confirm('重启后台服务？', '提示', function () {
          zn.preloader.open({
            content: '正在请求中...'
          });
          zn.http.get('/$/redeploy').then(function (data) {
            if (data.status == 200) {
              zn.notification.success('重启完成');
            } else {
              zn.notification.error(data.result);
            }

            zn.preloader.close();
          }.bind(this), function () {
            zn.notification.error('重启失败');
            zn.preloader.close();
          });
        }.bind(this));
        break;
    }
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      className: "zn-plugin-admin-devtool-server-manager",
      title: "\u670D\u52A1\u5668API\u7BA1\u7406",
      toolbarItems: this.state.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, React.createElement("div", {
      className: "zr-flex-layout zn-plugin-admin-master-slave-flex-layout row"
    }, React.createElement("div", {
      className: "layout-header",
      style: {
        minWidth: 200
      }
    }, this.__renderApps()), React.createElement("div", {
      className: "layout-body"
    }, this.__renderApis())));
  }
});

/***/ }),
/* 307 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  __renderPages: function __renderPages() {
    var _routers = zn.react.app._routers;
    return React.createElement("ul", null, Object.keys(_routers).map(function (router, index) {
      return React.createElement("li", {
        style: {
          padding: 3
        }
      }, React.createElement("i", {
        "data-tooltip": "\u590D\u5236\u94FE\u63A5",
        onClick: function onClick() {
          return zn.react.copyToClipboard(router);
        },
        className: "fa fa-clipboard zr-padding-3"
      }), React.createElement("a", {
        href: '#' + router
      }, router));
    }));
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      className: "zn-plugin-admin-devtool-page-debuger",
      title: "\u9875\u9762\u8C03\u8BD5\u5668"
    }, this.__renderPages());
  }
});

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(310);

var React = __webpack_require__(0);

var API = React.createClass({
  displayName: "API",
  getInitialState: function getInitialState() {
    return {
      data: null
    };
  },
  __renderArgvForm: function __renderArgvForm() {
    var _this = this;

    if (this.props.method) {
      var _items = [],
          _argv = this.props.argv || {};

      for (var key in _argv) {
        _items.push({
          title: key,
          name: key,
          type: 'Input',
          required: true,
          value: _argv[key]
        });
      }

      if (_items.length) {
        return React.createElement(zn.react.Group, {
          title: "\u8BF7\u6C42\u53C2\u6570"
        }, React.createElement(zn.react.Form, {
          items: _items,
          buttons: [{
            text: '发送请求',
            type: 'submit',
            status: 'primary'
          }],
          onSubmitBefore: this.__onFormSubmitBefore
        }));
      } else {
        return React.createElement(zn.react.Button, {
          onClick: function onClick() {
            return _this.__submit();
          },
          "float": "right",
          text: "\u53D1\u9001\u8BF7\u6C42"
        });
      }
    } else {
      return null;
    }
  },
  __renderData: function __renderData() {
    if (this.state.data) {
      return React.createElement(zn.react.Group, {
        title: "\u8FD4\u56DE\u7ED3\u679C"
      }, React.createElement("code", {
        style: {
          padding: 5
        }
      }, JSON.stringify(this.state.data)));
    } else {
      return null;
    }
  },
  __onFormSubmitBefore: function __onFormSubmitBefore(data) {
    return this.__submit(data), false;
  },
  __submit: function __submit(data) {
    zn.confirm('对【' + this.props.router + '】发起请求？', '提示', function () {
      var _method = this.props.method.toLowerCase() == 'get' ? 'get' : 'post';

      zn.preloader.open({
        content: '正在请求中...'
      });

      zn.http[_method](this.props.router, data || {}).then(function (data) {
        if (data.status == 200) {
          this.setState({
            data: data
          });
        } else {
          zn.notification.error(data.result);
        }

        zn.preloader.close();
      }.bind(this), function () {
        zn.notification.error('提交失败');
        zn.preloader.close();
      });
    }.bind(this));
  },
  render: function render() {
    var _this2 = this;

    return React.createElement("li", {
      className: "api"
    }, React.createElement("div", {
      className: "info"
    }, React.createElement("div", {
      className: "i-header"
    }, this.props.method && React.createElement("span", {
      className: "method"
    }, this.props.method), React.createElement("span", null, this.props.router), React.createElement("i", {
      "data-tooltip": "\u590D\u5236\u94FE\u63A5",
      onClick: function onClick() {
        return zn.react.copyToClipboard(_this2.props.router);
      },
      className: "fa fa-clipboard zr-padding-3"
    })), React.createElement("div", {
      className: "i-body"
    }, this.__renderArgvForm(), this.__renderData())));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      apps: [],
      apis: [],
      app: null,
      toolbarItems: [{
        text: '更新代码',
        name: 'update.code',
        icon: 'fa-cloud-download',
        style: {
          marginRight: 5
        }
      }, {
        text: '重启',
        name: 'restart',
        status: 'danger',
        icon: 'fa-play-circle',
        style: {
          marginRight: 5
        }
      }]
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadApps();
  },
  __loadApps: function __loadApps() {
    zn.http.get('/$/apps').then(function (data) {
      if (data.status == 200) {
        this.setState({
          apps: data.result
        });
      } else {
        zn.notification.error(data.result);
      }
    }.bind(this));
  },
  __onAppClick: function __onAppClick(app) {
    zn.preloader.open({
      content: '正在加载中...'
    });
    zn.http.get('/' + app + '/apis').then(function (data) {
      if (data.status == 200) {
        this.setState({
          app: app,
          apis: data.result
        });
      } else {
        zn.notification.error(data.result);
      }

      zn.preloader.close();
    }.bind(this), function () {
      zn.notification.error('服务器请求失败');
      zn.preloader.close();
    });
  },
  __renderApps: function __renderApps() {
    return React.createElement("ul", {
      className: "apps"
    }, this.state.apps.map(function (app, index) {
      var _this3 = this;

      return React.createElement("li", {
        key: index,
        className: "app " + (this.state.app == app ? 'curr' : ''),
        onClick: function onClick() {
          return _this3.__onAppClick(app);
        }
      }, React.createElement("a", null, app));
    }.bind(this)));
  },
  __renderApis: function __renderApis() {
    return React.createElement("ul", {
      className: "apis"
    }, this.state.apis.map(function (api, index) {
      return React.createElement(API, _extends({
        key: index
      }, api));
    }.bind(this)));
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.name) {
      case 'update.code':
        zn.confirm('更新后台服务代码？', '提示', function () {
          zn.preloader.open({
            content: '正在更新中...'
          });
          zn.http.get('/$/pull').then(function (data) {
            if (data.status == 200) {
              zn.notification.success('更新完成');
            } else {
              zn.notification.error(data.result);
            }

            zn.preloader.close();
          }.bind(this), function () {
            zn.notification.error('更新失败');
            zn.preloader.close();
          });
        }.bind(this));
        break;

      case 'restart':
        zn.confirm('重启后台服务？', '提示', function () {
          zn.preloader.open({
            content: '正在请求中...'
          });
          zn.http.get('/$/redeploy').then(function (data) {
            if (data.status == 200) {
              zn.notification.success('重启完成');
            } else {
              zn.notification.error(data.result);
            }

            zn.preloader.close();
          }.bind(this), function () {
            zn.notification.error('重启失败');
            zn.preloader.close();
          });
        }.bind(this));
        break;
    }
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      className: "zn-plugin-admin-devtool-server-manager",
      title: "\u670D\u52A1\u5668\u7BA1\u7406",
      toolbarItems: this.state.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, React.createElement("div", {
      className: "zr-flex-layout zn-plugin-admin-master-slave-flex-layout row"
    }, React.createElement("div", {
      className: "layout-header",
      style: {
        minWidth: 200
      }
    }, this.__renderApps()), React.createElement("div", {
      className: "layout-body"
    }, this.__renderApis())));
  }
});

/***/ }),
/* 310 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Dashboard.js": 312,
	"./Info.js": 314,
	"./index.js": 96
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 311;

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(313);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    if (!zn.react.session.json()) {
      zn.react.session.doLogin();
    }

    return {
      userId: zn.react.session.json().id,
      info: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadUserInfo();
  },
  __loadUserInfo: function __loadUserInfo() {
    zn.http.post('/zn.plugin.admin/user/findUserById', {
      userId: this.state.userId
    }).then(function (data) {
      this.setState({
        info: data.result
      });
    }.bind(this));
  },
  render: function render() {
    if (!this.state.info) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
        loader: "timer"
      });
    }

    return React.createElement("div", {
      className: "zn-plugin-admin-my-dashboard"
    }, React.createElement("div", null, React.createElement("span", null, "\u6211\u7684\u5DE5\u4F5C\u53F0")), React.createElement("div", null));
  }
});

/***/ }),
/* 313 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(315);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      userId: this.props.userId || zn.react.session.json().id,
      toolbarItems: this.props.userId ? [] : [{
        icon: 'fa-edit',
        text: '修改个人信息',
        onClick: this.__onEdit
      }],
      info: null,
      formItems: [{
        title: '头像',
        name: 'avatar_img',
        type: 'ImageUploader',
        action: '/zn.plugin.admin/uploadFiles'
      }, {
        title: '用户名',
        name: 'name',
        type: 'Input',
        required: true,
        error: '用户名必填项!'
      }, {
        title: '密码',
        name: 'password',
        type: 'Input',
        attrs: {
          type: 'password'
        },
        required: true,
        error: '密码必填项!'
      }, {
        title: '邮箱',
        name: 'email',
        type: 'Input',
        required: true,
        error: '邮箱必填项!'
      }, {
        title: '手机号',
        name: 'phone',
        type: 'Input',
        required: true,
        error: '手机号必填项!'
      }, {
        title: '地址',
        name: 'address',
        type: 'Input'
      }, {
        title: '说明',
        name: 'zn_note',
        type: 'Textarea'
      }],
      data: zn.store.post('/zn.plugin.admin/model/select', {
        model: 'ZNPluginAdminRole',
        where: {
          zn_tree_pid: 0
        }
      })
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadUserInfo();
  },
  __doSuccess: function __doSuccess() {
    this.__loadUserInfo();
  },
  __onEdit: function __onEdit(data) {
    zn.dialog({
      title: '修改个人信息',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: 'ZNPluginAdminUser',
          where: {
            id: this.state.info.id
          }
        },
        merge: "updates",
        value: this.state.info,
        onSubmitSuccess: this.__doSuccess,
        items: this.state.formItems
      })
    });
  },
  __loadUserInfo: function __loadUserInfo() {
    zn.http.post('/zn.plugin.admin/user/findUserById', {
      userId: this.state.userId
    }).then(function (data) {
      this.setState({
        info: data.result
      });
    }.bind(this));
  },
  __onTreeMenuItemCheckboxChange: function __onTreeMenuItemCheckboxChange(value) {
    zn.http.post('/zn.plugin.admin/user/updateUser', {
      data: {
        role_ids: value
      },
      userId: this.state.info.id
    }).then(function (data) {
      zn.toast.success('保存成功');
    });
  },
  __itemContentRender: function __itemContentRender(props) {
    var _icon = '';

    if (props.data.type == 1) {
      _icon = 'fa-sitemap';
    }

    if (props.data.type == 2) {
      _icon = 'fa-graduation-cap';
    }

    return React.createElement("span", null, React.createElement("i", {
      style: {
        margin: 5
      },
      className: 'fa ' + _icon
    }), props.data.id + '、' + props.data.zn_title);
  },
  render: function render() {
    if (!this.state.info) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
        loader: "timer"
      });
    }

    return React.createElement(zn.react.Page, {
      className: "zn-plugin-admin-my-info",
      title: this.state.info.name,
      toolbarItems: this.state.toolbarItems
    }, React.createElement("div", {
      className: "user-info"
    }, React.createElement("div", {
      className: "info-form user-item"
    }, React.createElement("img", {
      className: "avatar",
      src: zn.http.fixURL(this.state.info.avatar_img) || './images/DefaultAvatar.png'
    }), React.createElement("div", {
      className: "details"
    }, React.createElement("span", {
      className: "last-logintime"
    }, "\u6700\u8FD1\u4E00\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A", this.state.info.last_login_time || '还未登陆'), React.createElement("div", {
      className: "name"
    }, this.state.info.name), React.createElement("div", null, React.createElement("i", {
      className: "fa fa-clock-o"
    }), "\u521B\u5EFA\u65F6\u95F4\uFF1A", this.state.info.zn_create_time), React.createElement("div", null, React.createElement("i", {
      className: "fa fa-envelope"
    }), "\u90AE\u7BB1\uFF1A", this.state.info.email), React.createElement("div", null, React.createElement("i", {
      className: "fa fa-phone"
    }), "\u624B\u673A\u53F7\uFF1A", this.state.info.phone), React.createElement("div", null, React.createElement("i", {
      className: "fa fa-qq"
    }), "QQ\u53F7\uFF1A", this.state.info.qq), React.createElement("div", null, React.createElement("i", {
      className: "fa fa-weixin"
    }), "\u5FAE\u4FE1\u53F7\uFF1A", this.state.info.wechat), React.createElement("div", null, this.state.info.zn_note))), React.createElement(zn.react.Card, {
      title: "\u90E8\u95E8\u53CA\u89D2\u8272"
    }, React.createElement(zn.react.TreeListView, {
      disabled: true,
      cascade: false,
      enableCheckbox: true,
      onItemCheckboxChange: this.__onTreeMenuItemCheckboxChange,
      value: this.state.info.roleIds,
      itemContentRender: this.__itemContentRender,
      ref: "maintreemenu",
      activeAll: true,
      data: this.state.data
    }))));
  }
});

/***/ }),
/* 315 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Project.js": 317,
	"./ProjectBug.js": 98,
	"./index.js": 97
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 316;

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(0);

var TreeModelView = __webpack_require__(18);

var ProjectBug = __webpack_require__(98);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminProject',
      title: '项目管理',
      leftWidth: 20,
      pid: 0,
      fields: [{
        title: '模块名称',
        type: 'Input',
        name: 'zn_title'
      }, {
        title: '版本号',
        type: 'Input',
        name: 'version'
      }, {
        title: '优先级',
        type: 'Select',
        name: 'priority',
        data: [{
          text: '正常',
          value: 1
        }, {
          text: '紧急',
          value: 2
        }, {
          text: '非常紧急',
          value: 3
        }]
      }, {
        title: '开始时间',
        name: 'begin_time',
        type: 'Timer'
      }, {
        title: '结束时间',
        name: 'end_time',
        type: 'Timer'
      }, {
        title: '文件',
        name: 'files',
        type: 'FileUploader',
        action: '/zn.plugin.admin/uploadFiles'
      }, {
        title: '功能表述',
        type: 'RichEditor',
        name: 'description'
      }, {
        title: '备注',
        type: 'Textarea',
        name: 'zn_note'
      }]
    };
  },
  __rightRender: function __rightRender(tree) {
    var _currItem = tree.state.currItem;
    return React.createElement(ProjectBug, {
      data: _currItem ? _currItem.props.data : null
    });
  },
  __itemContentRender: function __itemContentRender(item) {
    //console.log(item);
    return React.createElement("div", {
      style: {
        display: 'inline-flex',
        lineHeight: '25px'
      }
    }, React.createElement("span", {
      className: "title"
    }, item.data.zn_title), React.createElement("span", {
      className: "version"
    }, "(", item.data.version, ")"));
  },
  render: function render() {
    return React.createElement(TreeModelView, _extends({
      itemContentRender: this.__itemContentRender
    }, this.props, {
      rightRender: this.__rightRender
    }));
  }
});

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Base.js": 319,
	"./Config.js": 320,
	"./ConfigManager.js": 321,
	"./Menu.js": 323,
	"./MenuPage.js": 324,
	"./Role.js": 325,
	"./UsersForRoles.js": 100,
	"./Var.js": 327,
	"./index.js": 99
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 318;

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      _id: this.props.request.search._id || 'zn.plugin.admin.base',
      items: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__getData();
  },
  __getData: function __getData() {
    zn.http.post('/zn.plugin.admin/config/selectBy_id', {
      _id: this.state._id
    }).then(function (data) {
      var _items = [],
          _item = null;
      zn.each(data.result, function (value, key) {
        _item = {
          name: key,
          title: value._title,
          type: value.input_type,
          value: value._value || value._rich_value
        };

        if (_item.type == 'ImageUploader') {
          _item.action = '/zn.plugin.admin/uploadFiles';
        }

        _items.push(_item);
      });
      this.setState({
        items: _items
      });
    }.bind(this));
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      loading: !this.state.items,
      title: '参数设置: ' + this.state._id
    }, React.createElement("div", {
      style: {
        backgroundColor: '#FFF',
        padding: 5
      }
    }, this.state.items && React.createElement(zn.react.Form, {
      items: this.state.items,
      action: "/zn.plugin.admin/config/updateBy_id",
      merge: "updates",
      exts: {
        _id: this.state._id
      }
    })));
  }
});

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminConfig'
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model
      }),
      items: [{
        title: '_id',
        name: '_id',
        width: 200
      }, {
        title: '_title',
        name: '_title',
        width: 200
      }, {
        title: '_key',
        name: '_key',
        width: 140
      }, {
        title: '_value',
        name: '_value',
        width: 250
      }, {
        title: 'ref_id',
        name: 'ref_id',
        width: 80
      }, {
        title: 'var_id',
        name: 'var_id',
        width: 80
      }, {
        title: 'InputType',
        name: 'input_type',
        width: 120
      }, {
        title: 'DataType',
        name: 'data_type',
        width: 100
      }, {
        title: 'RichValue',
        name: '_rich_value'
      }],
      formItems: [{
        title: '_id',
        name: '_id',
        type: 'AutoComplete',
        data: zn.store.get('/zn.plugin.admin/config/get_ids'),
        required: true,
        error: '_id必填'
      }, {
        title: '_title',
        name: '_title',
        type: 'Input'
      }, {
        title: '_key',
        name: '_key',
        type: 'Input'
      }, {
        title: '_value',
        name: '_value',
        type: 'Input'
      }, {
        title: 'ref_id',
        name: 'ref_id',
        type: 'Input'
      }, {
        title: 'var_id',
        name: 'var_id',
        type: 'Input'
      }, {
        title: 'InputType',
        name: 'input_type',
        type: 'Menu',
        data: ['Input', 'ImageUploader', 'FileUploader', 'Textarea', 'RichEditor']
      }, {
        title: 'DataType',
        name: 'data_type',
        type: 'Input'
      }, {
        title: 'RichValue',
        name: '_rich_value',
        type: 'Textarea'
      }],
      toolbarItems: [{
        text: '添加',
        name: 'add',
        icon: 'fa-plus',
        style: {
          marginRight: 5
        }
      }, {
        text: '删除',
        name: 'remove',
        status: 'danger',
        icon: 'fa-remove',
        style: {
          marginRight: 5
        }
      }]
    };
  },
  __doSuccess: function __doSuccess() {
    this.state.data.refresh();
  },
  __addItem: function __addItem() {
    zn.dialog({
      title: '新增',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        merge: "values",
        exts: {
          model: this.props.model
        },
        onSubmitSuccess: this.__doSuccess,
        items: this.state.formItems
      })
    });
  },
  __updateItem: function __updateItem(data) {
    zn.dialog({
      title: '更新',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: this.props.model,
          where: {
            id: data.id
          }
        },
        merge: "updates",
        value: data,
        onSubmitSuccess: this.__doSuccess,
        items: this.state.formItems
      })
    });
  },
  __removeItems: function __removeItems() {
    var _self = this,
        _values = this.refs.table.getValue();

    if (_values && _values.length) {
      zn.confirm('确认删除这' + _values.length + '个值吗？', '提示', function () {
        zn.http.post('/zn.plugin.admin/model/delete', {
          model: this.props.model,
          where: "id in (" + _values.join(',') + ")"
        }).then(function () {
          zn.toast.success('删除成功');

          _self.state.data.refresh();
        }, function (data) {
          zn.toast.error('删除失败: ' + data.result);
        });
      }.bind(this));
    } else {
      zn.toast.warning('请先选择要删除的用户');
    }
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.name) {
      case 'add':
        this.__addItem();

        break;

      case 'remove':
        this.__removeItems();

        break;
    }
  },
  __onTableColumnRender: function __onTableColumnRender(rowIndex, columnIndex, data, item, value) {
    var _this = this;

    switch (columnIndex) {
      case 1:
        return React.createElement("div", null, React.createElement("i", {
          className: "fa fa-edit",
          onClick: function onClick() {
            return _this.__updateItem(data);
          },
          style: {
            padding: 5
          }
        }), React.createElement("a", {
          href: '#' + zn.react.session.fixPath('/znpluginadmin.setting.base') + '?_id=' + data._id
        }, value));
    }
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u7CFB\u7EDF\u53C2\u6570\u914D\u7F6E",
      toolbarItems: this.state.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, React.createElement(zn.react.PagerView, {
      ref: "table",
      view: "Table",
      enableFilter: true,
      checkbox: 50,
      showHeader: true,
      columnRender: this.__onTableColumnRender,
      data: this.state.data,
      items: this.state.items
    }));
  }
});

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

__webpack_require__(322);

var React = __webpack_require__(0);

var Config = React.createClass({
  displayName: "Config",
  getInitialState: function getInitialState() {
    return {
      data: null
    };
  },
  __renderArgvForm: function __renderArgvForm() {
    var _this = this;

    if (this.props.method) {
      var _items = [],
          _argv = this.props.argv || {};

      for (var key in _argv) {
        _items.push({
          title: key,
          name: key,
          type: 'Input',
          required: true,
          value: _argv[key]
        });
      }

      if (_items.length) {
        return React.createElement(zn.react.Group, {
          title: "\u8BF7\u6C42\u53C2\u6570"
        }, React.createElement(zn.react.Form, {
          items: _items,
          buttons: [{
            text: '发送请求',
            type: 'submit',
            status: 'primary'
          }],
          onSubmitBefore: this.__onFormSubmitBefore
        }));
      } else {
        return React.createElement(zn.react.Button, {
          onClick: function onClick() {
            return _this.__submit();
          },
          "float": "right",
          text: "\u53D1\u9001\u8BF7\u6C42"
        });
      }
    } else {
      return null;
    }
  },
  __renderData: function __renderData() {
    if (this.state.data) {
      return React.createElement(zn.react.Group, {
        title: "\u8FD4\u56DE\u7ED3\u679C"
      }, React.createElement("code", {
        style: {
          padding: 5
        }
      }, JSON.stringify(this.state.data)));
    } else {
      return null;
    }
  },
  __onFormSubmitBefore: function __onFormSubmitBefore(data) {
    return this.__submit(data), false;
  },
  __submit: function __submit(data) {
    zn.confirm('对【' + this.props.router + '】发起请求？', '提示', function () {
      var _method = this.props.method.toLowerCase() == 'get' ? 'get' : 'post';

      zn.preloader.open({
        content: '正在请求中...'
      });

      zn.http[_method](this.props.router, data || {}).then(function (data) {
        if (data.status == 200) {
          this.setState({
            data: data
          });
        } else {
          zn.notification.error(data.result);
        }

        zn.preloader.close();
      }.bind(this), function () {
        zn.notification.error('提交失败');
        zn.preloader.close();
      });
    }.bind(this));
  },
  __onRemove: function __onRemove() {
    zn.confirm('确定删除该参数？', '提示', function () {
      zn.preloader.open({
        content: '正在删除中...'
      });
      zn.http.post('/zn.plugin.admin/config/deleteById', {
        id: this.props.id
      }).then(function (data) {
        if (data.status == 200) {
          zn.notification.success('删除完成');
          this.props.onRemoveSuccess && this.props.onRemoveSuccess();
        } else {
          zn.notification.error(data.result);
        }

        zn.preloader.close();
      }.bind(this), function () {
        zn.notification.error('重启失败');
        zn.preloader.close();
      });
    }.bind(this));
  },
  __onEdit: function __onEdit() {},
  __onSave: function __onSave() {
    zn.confirm('确定保存改参数值？', '提示', function () {
      zn.preloader.open({
        content: '正在保存中...'
      });
      zn.http.post('/zn.plugin.admin/config/deleteById', {
        id: this.props.id
      }).then(function (data) {
        if (data.status == 200) {
          zn.notification.success('保存完成');
          this.props.onRemoveSuccess && this.props.onRemoveSuccess();
        } else {
          zn.notification.error(data.result);
        }

        zn.preloader.close();
      }.bind(this), function () {
        zn.notification.error('保存失败');
        zn.preloader.close();
      });
    }.bind(this));
  },
  render: function render() {
    var _this2 = this;

    var _Input = zn.react[this.props.input_type];
    return React.createElement("li", {
      className: "api"
    }, React.createElement("div", {
      className: "info"
    }, React.createElement("div", {
      className: "i-header"
    }, React.createElement("div", {
      className: "head-left"
    }, this.props.input_type && React.createElement("span", {
      className: "method"
    }, this.props.input_type), React.createElement("span", null, this.props._key), React.createElement("i", {
      "data-tooltip": "\u590D\u5236\u94FE\u63A5",
      onClick: function onClick() {
        return zn.react.copyToClipboard(_this2.props._key);
      },
      className: "fa fa-clipboard zr-padding-3"
    })), React.createElement("div", {
      className: "head-right"
    }, React.createElement("span", {
      onClick: this.__onSave,
      className: "method"
    }, React.createElement("i", {
      className: "fa fa-save zr-padding-3"
    }), "\u4FDD\u5B58"), React.createElement("span", {
      onClick: this.__onEdit,
      className: "method"
    }, React.createElement("i", {
      className: "fa fa-edit zr-padding-3"
    }), "\u7F16\u8F91"), React.createElement("i", {
      onClick: this.__onRemove,
      className: "fa fa-remove zr-padding-3"
    }))), React.createElement("div", {
      className: "i-body"
    }, React.createElement(zn.react.FormItem, {
      type: _Input,
      title: this.props._title,
      value: this.props._value
    }))));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      configKeys: [],
      key: null,
      configs: [],
      toolbarItems: [{
        text: '配置查询',
        name: 'config.list',
        icon: 'fa-list',
        style: {
          marginRight: 5
        }
      }, {
        text: '添加',
        name: 'config.add',
        icon: 'fa-plus',
        style: {
          marginRight: 5
        }
      }, {
        text: '删除',
        name: 'config.delete',
        status: 'danger',
        icon: 'fa-trash',
        style: {
          marginRight: 5
        }
      }]
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadConfigKeys();
  },
  __loadConfigKeys: function __loadConfigKeys() {
    zn.http.get('/zn.plugin.admin/config/get_ids').then(function (data) {
      if (data.status == 200) {
        this.setState({
          configKeys: data.result
        });
      } else {
        zn.notification.error(data.result);
      }
    }.bind(this));
  },
  __onAppClick: function __onAppClick(key) {
    key = key || this.state.key;
    zn.preloader.open({
      content: '正在加载中...'
    });
    zn.http.get("/zn.plugin.admin/config/selectBy_id", {
      _id: key.value
    }).then(function (data) {
      if (data.status == 200) {
        this.setState({
          key: key,
          configs: data.result
        });
      } else {
        zn.notification.error(data.result);
      }

      zn.preloader.close();
    }.bind(this), function () {
      zn.notification.error('服务器请求失败');
      zn.preloader.close();
    });
  },
  __renderConfigKey: function __renderConfigKey() {
    return React.createElement("ul", {
      className: "apps"
    }, this.state.configKeys.map(function (key, index) {
      var _this3 = this;

      return React.createElement("li", {
        key: index,
        className: "app " + (this.state.key == key ? 'curr' : ''),
        onClick: function onClick() {
          return _this3.__onAppClick(key);
        }
      }, React.createElement("a", null, key.text));
    }.bind(this)));
  },
  __addArgument: function __addArgument() {
    var _this4 = this;

    zn.dialog({
      title: '添加参数',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        merge: "values",
        exts: {
          model: 'ZNPluginAdminConfig'
        },
        hiddens: {
          _id: this.state.key.value
        },
        onSubmitSuccess: function onSubmitSuccess() {
          return _this4.__onAppClick();
        },
        items: [{
          title: '_title',
          name: '_title',
          type: 'Input'
        }, {
          title: '_key',
          name: '_key',
          type: 'Input'
        }, {
          title: '_value',
          name: '_value',
          type: 'Input'
        }, {
          title: 'ref_id',
          name: 'ref_id',
          type: 'Input'
        }, {
          title: 'var_id',
          name: 'var_id',
          type: 'Input'
        }, {
          title: 'InputType',
          name: 'input_type',
          type: 'Menu',
          data: ['Input', 'ImageUploader', 'FileUploader', 'Textarea', 'RichEditor']
        }, {
          title: 'DataType',
          name: 'data_type',
          type: 'Input'
        }, {
          title: 'RichValue',
          name: '_rich_value',
          type: 'Textarea'
        }]
      })
    });
  },
  __renderConfigs: function __renderConfigs() {
    return React.createElement("div", null, this.state.key && React.createElement("div", {
      style: {
        padding: 5
      }
    }, React.createElement(zn.react.Button, {
      onClick: this.__addArgument,
      text: "\u6DFB\u52A0\u53C2\u6570",
      icon: "fa-plus"
    })), React.createElement("ul", {
      className: "apis"
    }, Object.keys(this.state.configs).map(function (key, index) {
      var _this5 = this;

      return React.createElement(Config, _extends({
        key: index
      }, this.state.configs[key], {
        onRemoveSuccess: function onRemoveSuccess() {
          return _this5.__onAppClick(_this5.state.key);
        }
      }));
    }.bind(this))));
  },
  __onToolbarClick: function __onToolbarClick(item) {
    var _this6 = this;

    switch (item.name) {
      case 'config.list':
        zn.react.session.relativeJump('/znpluginadmin.setting.config');
        break;

      case 'config.add':
        zn.dialog({
          title: '新增配置',
          content: React.createElement(zn.react.Form, {
            action: "/zn.plugin.admin/model/insert",
            merge: "values",
            exts: {
              model: 'ZNPluginAdminConfig'
            },
            onSubmitSuccess: function onSubmitSuccess() {
              return _this6.__loadConfigKeys();
            },
            items: [{
              title: '_id',
              name: '_id',
              type: 'AutoComplete',
              data: zn.store.get('/zn.plugin.admin/config/get_ids'),
              required: true,
              error: '_id必填'
            }, {
              title: '_title',
              name: '_title',
              type: 'Input'
            }, {
              title: '_key',
              name: '_key',
              type: 'Input'
            }, {
              title: '_value',
              name: '_value',
              type: 'Input'
            }, {
              title: 'ref_id',
              name: 'ref_id',
              type: 'Input'
            }, {
              title: 'var_id',
              name: 'var_id',
              type: 'Input'
            }, {
              title: 'InputType',
              name: 'input_type',
              type: 'Menu',
              data: ['Input', 'ImageUploader', 'FileUploader', 'Textarea', 'RichEditor']
            }, {
              title: 'DataType',
              name: 'data_type',
              type: 'Input'
            }, {
              title: 'RichValue',
              name: '_rich_value',
              type: 'Textarea'
            }]
          })
        });
        break;

      case 'config.delete':
        zn.confirm('确定删除该配置么？', '提示', function () {
          zn.preloader.open({
            content: '正在请求中...'
          });
          zn.http.post('/zn.plugin.admin/config/deleteBy_id', {
            _id: this.state.key._id
          }).then(function (data) {
            if (data.status == 200) {
              zn.notification.success('删除完成');
              this.setState({
                configs: {}
              });

              this.__loadConfigKeys();
            } else {
              zn.notification.error(data.result);
            }

            zn.preloader.close();
          }.bind(this), function () {
            zn.notification.error('删除失败');
            zn.preloader.close();
          });
        }.bind(this));
        break;
    }
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      className: "zn-plugin-admin-setting-config-manager",
      title: "\u914D\u7F6E\u7BA1\u7406",
      toolbarItems: this.state.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, React.createElement("div", {
      className: "zr-flex-layout zn-plugin-admin-master-slave-flex-layout row"
    }, React.createElement("div", {
      className: "layout-header",
      style: {
        minWidth: 200
      }
    }, this.__renderConfigKey()), React.createElement("div", {
      className: "layout-body"
    }, this.__renderConfigs())));
  }
});

/***/ }),
/* 322 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(0);

var TreeModelView = __webpack_require__(18);

var ModelEditor = __webpack_require__(19);

var FormDesigner = __webpack_require__(53);

var MenuInfo = React.createClass({
  displayName: "MenuInfo",
  getInitialState: function getInitialState() {
    return {
      currIndex: 0
    };
  },
  __renderBody: function __renderBody() {
    switch (this.state.currIndex) {
      case 0:
        return React.createElement(ModelEditor, this.props);

      case 1:
        return React.createElement("div", {
          style: {
            textAlign: 'center'
          }
        }, "\u8FD8\u5728\u5F00\u53D1\u4E2D...");

      case 2:
        return React.createElement(FormDesigner, {
          menuId: this.props.data.value
        });
    }
  },
  render: function render() {
    var _this = this;

    return React.createElement("div", {
      className: "zr-flex-layout"
    }, React.createElement(zn.react.ListView, {
      className: "layout-header zr-tab-ios",
      style: {
        margin: 5
      },
      selectMode: "radio",
      textKey: "text",
      valueKey: "index",
      onClick: function onClick(value) {
        return _this.setState({
          currIndex: value.item.index
        });
      },
      value: this.state.currIndex,
      data: [{
        index: 0,
        text: '基本信息',
        icon: 'fa-list-alt'
      }, {
        index: 1,
        text: '资源管理',
        icon: 'fa-table'
      }, {
        index: 2,
        text: '表单定义',
        icon: 'fa-server'
      }]
    }), React.createElement("div", {
      className: "layout-body"
    }, this.__renderBody()));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      model: 'ZNPluginAdminMenu',
      title: '菜单管理',
      leftWidth: 30,
      pid: 0,
      fields: [{
        title: '标题',
        type: 'Input',
        name: 'zn_title'
      }, {
        title: '类型',
        type: 'Radio',
        name: 'zn_tree_type',
        value: 0,
        data: [{
          text: '分类',
          value: 0
        }, {
          text: '功能菜单',
          value: 1
        }]
      }, {
        title: '链接',
        type: 'Menu',
        data: Object.keys(zn.react.app._relativeRouters),
        name: 'url'
      }, {
        title: '路径',
        type: 'Input',
        name: 'path'
      }, {
        title: '图标',
        type: 'RichSelector',
        selector: zn.plugin.admin.FontAwesomeIcons,
        textRender: function textRender(text) {
          return React.createElement("i", {
            className: "fa " + text
          });
        },
        name: 'icon'
      }, {
        title: '是否启用权限',
        type: 'Radio',
        name: 'zn_rights_enabled',
        value: 0,
        data: [{
          text: '禁止',
          value: 0
        }, {
          text: '启用',
          value: 1
        }]
      }, //{ title: '拥有者', type: zn.plugin.admin.UserSelector, mulitable: false, name: 'zn_rights_owner_id' },
      {
        title: '操作用户',
        type: zn.plugin.admin.UserSelector,
        mulitable: true,
        name: 'zn_rights_users'
      }, //{ title: '查看用户', type: zn.plugin.admin.UserSelector, mulitable: true, name: 'zn_rights_observe_users' },
      {
        title: '操作角色',
        type: zn.plugin.admin.RoleSelector,
        name: 'zn_rights_roles'
      }, //{ title: '查看角色', type: zn.plugin.admin.RoleSelector, name: 'zn_rights_observe_roles' },
      {
        title: '扩展',
        type: 'Textarea',
        name: 'zn_tree_extend'
      }]
    };
  },
  __rightRender: function __rightRender(data) {
    if (!data.data.zn_tree_type) {
      return null;
    }

    return React.createElement(MenuInfo, _extends({}, this.state, {
      data: data
    }));
  },
  render: function render() {
    return React.createElement(TreeModelView, _extends({}, this.state, {
      rightRender: this.__rightRender
    }));
  }
});

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/menu/paging', {
        menu: this.props.request.search.menu
      }),
      items: [{
        title: '用户名',
        name: 'name',
        width: 120
      }, {
        title: '邮箱',
        name: 'email',
        width: 140
      }, {
        title: '手机号',
        name: 'phone',
        width: 120
      }, {
        title: '角色',
        name: 'role_ids_convert',
        width: 120
      }, {
        title: '代理人',
        name: 'agents_convert',
        width: 120
      }, {
        title: '地址',
        name: 'address',
        width: 200
      }, {
        title: '说明',
        name: 'zn_note'
      }],
      formItems: [{
        title: '头像',
        name: 'avatar_img',
        type: 'ImageUploader'
      }, {
        title: '用户名',
        name: 'name',
        type: 'Input',
        required: true,
        error: '用户名必填项!'
      }, {
        title: '邮箱',
        name: 'email',
        type: 'Input'
      }, {
        title: '手机号',
        name: 'phone',
        type: 'Input'
      }, {
        title: '地址',
        name: 'address',
        type: 'Input'
      }, {
        title: '说明',
        name: 'zn_note',
        type: 'Textarea'
      }],
      toolbarItems: [{
        text: '添加',
        name: 'add',
        icon: 'fa-plus',
        style: {
          marginRight: 5
        }
      }, {
        text: '删除',
        name: 'remove',
        status: 'danger',
        icon: 'fa-remove',
        style: {
          marginRight: 5
        }
      }]
    };
  },
  componentDidMount: function componentDidMount() {},
  __doSuccess: function __doSuccess() {
    this.state.data.refresh();
  },
  __addItem: function __addItem() {
    zn.dialog({
      title: '新增用户',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        merge: "values",
        exts: {
          model: this.props.model
        },
        onSubmitSuccess: this.__doSuccess,
        items: this.state.formItems
      })
    });
  },
  __updateItem: function __updateItem(data) {
    zn.dialog({
      title: '更新用户信息',
      content: React.createElement(zn.react.Form, {
        merge: "updates",
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: this.props.model,
          where: {
            id: data.id
          }
        },
        value: zn.store.post('/zn.plugin.admin/model/selectOne', {
          model: this.props.model,
          where: {
            id: data.id
          }
        }),
        onSubmitSuccess: this.__doSuccess,
        items: this.state.formItems
      })
    });
  },
  __removeItems: function __removeItems() {
    var _self = this,
        _values = this.refs.table.getValue();

    if (_values && _values.length) {
      zn.confirm('确认删除这' + _values.length + '个用户吗？', '提示', function () {
        zn.http.post('/zn.plugin.admin/model/delete', {
          model: this.props.model,
          where: "id in (" + _values.join(',') + ")"
        }).then(function () {
          zn.toast.success('删除成功');

          _self.state.data.refresh();
        }, function (data) {
          zn.toast.error('删除失败: ' + data.result);
        });
      }.bind(this));
    } else {
      zn.toast.warning('请先选择要删除的用户');
    }
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.name) {
      case 'add':
        this.__addItem();

        break;

      case 'remove':
        this.__removeItems();

        break;
    }
  },
  __onTableColumnRender: function __onTableColumnRender(rowIndex, columnIndex, data, item, value) {
    var _this = this;

    switch (columnIndex) {
      case 1:
        return React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center'
          }
        }, React.createElement("i", {
          onClick: function onClick() {
            return _this.__updateItem(data);
          },
          className: "fa fa-edit zr-padding-3"
        }), data.avatar_img && React.createElement("img", {
          className: "avatar",
          style: {
            width: 16,
            height: 16,
            margin: 5,
            borderRadius: 16
          },
          src: data.avatar_img
        }), React.createElement("a", {
          href: '#' + zn.react.session.fixPath('/znpluginadmin.user.infoedit') + '?userId=' + data.id
        }, value));
    }
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u7CFB\u7EDF\u8D26\u6237\u7BA1\u7406",
      toolbarItems: this.state.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, React.createElement(zn.react.PagerView, {
      ref: "table",
      view: "Table",
      enableFilter: true,
      checkbox: 50,
      showHeader: true,
      columnRender: this.__onTableColumnRender,
      data: this.state.data,
      items: this.state.items
    }));
  }
});

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(0);

var TreeModelView = __webpack_require__(18);

var ModelEditor = __webpack_require__(19);

var UsersForRoles = __webpack_require__(100);

var Info = React.createClass({
  displayName: "Info",
  getInitialState: function getInitialState() {
    return {
      currIndex: 0
    };
  },
  __renderBody: function __renderBody() {
    switch (this.state.currIndex) {
      case 0:
        var _fields = this.props.fields.slice(0);

        if (this.props.data.data.type == 1) {
          _fields.splice(1, 0, {
            title: '负责人',
            type: "CheckboxGroup",
            data: zn.store.post('/zn.plugin.admin/model/select', {
              model: 'ZNPluginAdminUser',
              fields: ['id as value', 'name as text'],
              where: "locate('," + this.props.data.value + ",',role_ids) <> 0"
            }),
            name: 'owners'
          });
        }

        return React.createElement(ModelEditor, _extends({}, this.props, {
          fields: _fields
        }));

      case 1:
        return React.createElement(UsersForRoles, {
          roleId: this.props.data.value
        });
    }
  },
  render: function render() {
    var _this = this;

    return React.createElement("div", {
      className: "zr-flex-layout"
    }, React.createElement(zn.react.ListView, {
      className: "layout-header zr-tab-ios",
      style: {
        margin: 5
      },
      selectMode: "radio",
      textKey: "text",
      valueKey: "index",
      onClick: function onClick(value) {
        return _this.setState({
          currIndex: value.item.index
        });
      },
      value: this.state.currIndex,
      data: [{
        index: 0,
        text: '基本信息',
        icon: 'fa-list-alt'
      }, {
        index: 1,
        text: '用户列表',
        icon: 'fa-users'
      }]
    }), React.createElement("div", {
      className: "layout-body"
    }, this.__renderBody()));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminRole',
      pid: 0,
      title: '部门及角色管理',
      menuId: 0,
      fields: [{
        title: '名称',
        type: 'Input',
        name: 'zn_title'
      }, {
        title: '类型',
        type: 'Radio',
        name: 'type',
        value: 0,
        data: [{
          text: '分类',
          value: 0
        }, {
          text: '部门',
          value: 1
        }, {
          text: '角色',
          value: 2
        }]
      }, {
        title: '扩展',
        type: 'Textarea',
        name: 'zn_tree_extend'
      }, {
        title: '说明',
        type: 'Textarea',
        name: 'zn_note'
      }]
    };
  },
  __rightRender: function __rightRender(data) {
    if (!data.data.type) {
      return null;
    }

    return React.createElement(Info, _extends({}, this.props, {
      data: data
    }));
  },
  __itemContentRender: function __itemContentRender(item) {
    var _data = item;

    switch (_data.type) {
      case 0:
        return React.createElement("span", null, _data.zn_title);

      case 1:
        return React.createElement("span", null, React.createElement("i", {
          title: "\u8FD9\u662F\u90E8\u95E8",
          className: "fa fa-sitemap",
          style: {
            margin: 5,
            color: '#d9534f'
          }
        }), _data.zn_title);

      case 2:
        return React.createElement("span", null, React.createElement("i", {
          title: "\u8FD9\u662F\u89D2\u8272",
          className: "fa fa-graduation-cap",
          style: {
            margin: 5
          }
        }), _data.zn_title);
    }
  },
  render: function render() {
    return React.createElement(TreeModelView, _extends({}, this.props, {
      rightRender: this.__rightRender,
      itemContentRender: this.__itemContentRender
    }));
  }
});

/***/ }),
/* 326 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(0);

var TreeModelView = __webpack_require__(18);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminVar',
      pid: 0,
      title: '资源管理',
      menuId: 0,
      fields: [{
        title: '标题',
        type: 'Input',
        name: 'zn_title'
      }, {
        title: '类型',
        type: 'Radio',
        name: 'zn_tree_type',
        value: 0,
        data: [{
          text: '分类',
          value: 0
        }, {
          text: '按钮',
          value: 1
        }, {
          text: '常量',
          value: 2
        }, {
          text: '标签',
          value: 3
        }, {
          text: '标签',
          value: 4
        }]
      }, {
        title: '图片',
        type: 'ImageUploader',
        name: 'img',
        action: '/zn.plugin.admin/uploadFiles'
      }, {
        title: '链接',
        type: 'Input',
        name: 'url'
      }, {
        title: '路径',
        type: 'Input',
        name: 'path'
      }, {
        title: '图标',
        type: 'RichSelector',
        selector: zn.plugin.admin.FontAwesomeIcons,
        textRender: function textRender(text) {
          return React.createElement("i", {
            className: "fa " + text
          });
        },
        name: 'icon'
      }, {
        title: '是否启用权限',
        type: 'Radio',
        name: 'zn_rights_enabled',
        value: 0,
        data: [{
          text: '禁止',
          value: 0
        }, {
          text: '启用',
          value: 1
        }]
      }, {
        title: '拥有者',
        type: zn.plugin.admin.UserSelector,
        mulitable: false,
        name: 'zn_rights_owner_id'
      }, {
        title: '操作用户',
        type: zn.plugin.admin.UserSelector,
        mulitable: true,
        name: 'zn_rights_users'
      }, {
        title: '查看用户',
        type: zn.plugin.admin.UserSelector,
        mulitable: true,
        name: 'zn_rights_observe_users'
      }, {
        title: '操作角色',
        type: zn.plugin.admin.RoleSelector,
        name: 'zn_rights_roles'
      }, {
        title: '查看角色',
        type: zn.plugin.admin.RoleSelector,
        name: 'zn_rights_observe_roles'
      }, {
        title: '扩展',
        type: 'Textarea',
        name: 'zn_tree_extend'
      }]
    };
  },
  __itemContentRender: function __itemContentRender(item) {
    var _data = item;

    switch (_data.type) {
      case 1:
        return React.createElement("span", null, React.createElement("i", {
          title: "\u8FD9\u662F\u64CD\u4F5C\u6309\u94AE",
          className: "fa fa-hand-o-up",
          style: {
            margin: 5,
            color: '#0B72A5'
          }
        }), React.createElement("i", {
          className: 'fa ' + _data.icon,
          style: {
            marginRight: 5
          }
        }), _data.id + '、' + _data.zn_title);

      case 2:
        return React.createElement("span", null, React.createElement("i", {
          title: "\u8FD9\u662F\u9759\u6001\u5E38\u91CF",
          className: "fa fa-text-width",
          style: {
            margin: 5,
            color: '#d9534f'
          }
        }), React.createElement("i", {
          className: 'fa ' + _data.icon,
          style: {
            marginRight: 5
          }
        }), _data.id + '、' + _data.zn_title);

      case 3:
        return React.createElement("span", null, React.createElement("i", {
          title: "\u8FD9\u662F\u6807\u7B7E\u7C7B\u522B",
          className: "fa fa-tag",
          style: {
            margin: 5
          }
        }), React.createElement("i", {
          className: 'fa ' + _data.icon,
          style: {
            marginRight: 5
          }
        }), _data.id + '、' + _data.zn_title);
    }
  },
  render: function render() {
    return React.createElement(TreeModelView, _extends({}, this.props, {
      where: {
        menu_id: this.props.menuId
      },
      itemContentRender: this.__itemContentRender,
      leftWidth: 300
    }));
  }
});

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Info.js": 329,
	"./InfoEdit.js": 331,
	"./List.js": 333,
	"./LoginLog.js": 334,
	"./index.js": 101
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 328;

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(330);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    var _id = this.props.userId || this.props.request.search.userId,
        _isSelf = false;

    if (!_id) {
      _id = zn.react.session.json().id;
      _isSelf = true;
    }

    return {
      userId: _id,
      isSelf: _isSelf,
      info: null,
      formItems: [{
        title: '头像',
        name: 'avatar_img',
        type: 'ImageUploader'
      }, {
        title: '用户名',
        name: 'name',
        type: 'Label'
      }, {
        title: '密码',
        name: 'password',
        type: 'Input',
        attrs: {
          type: 'password'
        }
      }, {
        title: '代理人',
        type: zn.plugin.admin.UserSelector,
        mulitable: true,
        name: 'agents'
      }, {
        title: '邮箱',
        name: 'email',
        type: 'Input'
      }, {
        title: 'QQ',
        name: 'qq',
        type: 'Input'
      }, {
        title: '微信号',
        name: 'wechat',
        type: 'Input'
      }, {
        title: '手机号',
        name: 'phone',
        required: true,
        type: 'Input'
      }, {
        title: '地址',
        name: 'address',
        type: 'Input'
      }, {
        title: '备注',
        name: 'zn_note',
        type: 'Textarea'
      }],
      data: zn.store.post('/zn.plugin.admin/model/select', {
        model: 'ZNPluginAdminRole',
        where: {
          zn_tree_pid: 0
        }
      })
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadUserInfo();
  },
  __loadUserInfo: function __loadUserInfo() {
    zn.http.post('/zn.plugin.admin/user/findUserById', {
      userId: this.state.userId
    }).then(function (data) {
      this.setState({
        info: data.result
      });
    }.bind(this));
  },
  __itemContentRender: function __itemContentRender(props) {
    var _icon = '';

    if (props.data.type == 1) {
      _icon = 'fa-sitemap';
    }

    if (props.data.type == 2) {
      _icon = 'fa-graduation-cap';
    }

    return React.createElement("span", null, React.createElement("i", {
      style: {
        margin: 5
      },
      className: 'fa ' + _icon
    }), props.data.zn_title);
  },
  __update: function __update() {
    zn.dialog({
      title: '修改信息',
      content: React.createElement(zn.react.Form, {
        merge: "updates",
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: 'ZNPluginAdminUser',
          where: {
            id: this.state.userId
          }
        },
        value: zn.store.post('/zn.plugin.admin/model/selectOne', {
          model: 'ZNPluginAdminUser',
          where: {
            id: this.state.userId
          }
        }),
        onSubmitSuccess: this.__loadUserInfo,
        items: this.state.formItems
      })
    });
  },
  render: function render() {
    if (!this.state.info) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
        loader: "timer"
      });
    }

    return React.createElement(zn.react.Page, {
      title: this.state.info.name,
      icon: "fa-newspaper-o",
      toolbarItems: this.state.toolbarItems
    }, React.createElement("div", {
      className: "zn-plugin-admin-user-info"
    }, React.createElement("div", {
      className: "info-form user-item"
    }, React.createElement("img", {
      className: "avatar",
      src: zn.http.fixURL(this.state.info.avatar_img) || './images/DefaultAvatar.png'
    }), React.createElement("div", {
      className: "details"
    }, this.state.isSelf && React.createElement("span", {
      onClick: this.__update,
      className: "last-logintime"
    }, React.createElement("i", {
      className: "fa fa-edit zr-padding-3"
    }), "\u4FEE\u6539\u4FE1\u606F"), React.createElement("div", {
      className: "name"
    }, this.state.info.name), React.createElement("div", {
      className: "item"
    }, React.createElement("i", {
      className: "fa fa-phone"
    }), "\u7535\u8BDD\uFF1A", this.state.info.phone), React.createElement("div", {
      className: "item"
    }, React.createElement("i", {
      className: "fa fa-qq"
    }), "QQ\u53F7\uFF1A", this.state.info.qq), React.createElement("div", {
      className: "item"
    }, React.createElement("i", {
      className: "fa fa-weixin"
    }), "\u5FAE\u4FE1\u53F7\uFF1A", this.state.info.wechat), React.createElement("div", {
      className: "item"
    }, React.createElement("i", {
      className: "fa fa-envelope"
    }), "\u90AE\u7BB1\uFF1A", this.state.info.email), this.state.isSelf && React.createElement("div", {
      className: "item"
    }, React.createElement("i", {
      className: "fa fa-users"
    }), "\u4EE3\u7406\u4EBA\uFF1A", this.state.info.agents_convert), this.state.info.zn_note && React.createElement("div", {
      className: "item"
    }, this.state.info.zn_note))), zn.plugin.wechat && zn.plugin.wechat.ZNPluginAdminUserWechatInfo && React.createElement(zn.react.Card, {
      className: "wechat-info",
      title: "\u5FAE\u4FE1\u7ED1\u5B9A\u53CA\u67E5\u770B"
    }, React.createElement(zn.plugin.wechat.ZNPluginAdminUserWechatInfo, {
      openid: this.state.info.zn_plugin_wechat_open_id
    })), React.createElement(zn.react.Card, {
      title: "\u90E8\u95E8\u53CA\u89D2\u8272"
    }, React.createElement(zn.plugin.admin.RoleSelector, {
      disabled: true,
      value: this.state.info.role_ids
    }))));
  }
});

/***/ }),
/* 330 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(332);

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      userId: this.props.userId || this.props.request.search.userId,
      info: null,
      data: zn.store.post('/zn.plugin.admin/model/select', {
        model: 'ZNPluginAdminRole',
        where: {
          zn_tree_pid: 0
        }
      })
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadUserInfo();
  },
  __loadUserInfo: function __loadUserInfo() {
    zn.http.post('/zn.plugin.admin/user/findUserById', {
      userId: this.state.userId
    }).then(function (data) {
      this.setState({
        info: data.result
      });
    }.bind(this));
  },
  __onRoleChange: function __onRoleChange(obj) {
    zn.http.post('/zn.plugin.admin/user/updateUser', {
      data: {
        role_ids: obj.value
      },
      userId: this.state.userId
    }).then(function (data) {
      if (data.status == 200) {
        zn.toast.success('保存成功!');
      } else {
        zn.toast.error(data.result);
      }
    }, function () {
      zn.toast.error("服务器调用错误.");
    });
  },
  __itemContentRender: function __itemContentRender(props) {
    var _icon = '';

    if (props.data.type == 1) {
      _icon = 'fa-sitemap';
    }

    if (props.data.type == 2) {
      _icon = 'fa-graduation-cap';
    }

    return React.createElement("span", null, React.createElement("i", {
      style: {
        margin: 5
      },
      className: 'fa ' + _icon
    }), props.data.zn_title);
  },
  __onLoginTimeClick: function __onLoginTimeClick() {
    zn.react.session.relativeJump('/znpluginadmin.user.loginlog?userId=' + this.state.info.id);
  },
  render: function render() {
    if (!this.state.info) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
        loader: "timer"
      });
    }

    return React.createElement(zn.react.Page, {
      title: this.state.info.name,
      toolbarItems: this.state.toolbarItems
    }, React.createElement("div", {
      className: "zn-plugin-admin-user-info"
    }, React.createElement("div", {
      className: "info-form user-item"
    }, React.createElement("img", {
      className: "avatar",
      src: zn.http.fixURL(this.state.info.avatar_img) || './images/DefaultAvatar.png'
    }), React.createElement("div", {
      className: "details"
    }, React.createElement("span", {
      "data-tooltip": "\u67E5\u770B\u767B\u5F55\u65E5\u5FD7\u8BB0\u5F55",
      onClick: this.__onLoginTimeClick,
      className: "last-logintime"
    }, "\u6700\u8FD1\u4E00\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A", this.state.info.last_login_time || '还未登陆'), React.createElement("div", {
      className: "name"
    }, this.state.info.name), React.createElement("div", {
      className: "item"
    }, React.createElement("i", {
      className: "fa fa-clock-o"
    }), "\u6CE8\u518C\u65F6\u95F4\uFF1A", this.state.info.zn_create_time), React.createElement("div", {
      className: "item"
    }, React.createElement("i", {
      className: "fa fa-envelope"
    }), "\u90AE\u7BB1\uFF1A", this.state.info.email), React.createElement("div", {
      className: "item"
    }, React.createElement("i", {
      className: "fa fa-phone"
    }), "\u624B\u673A\u53F7\uFF1A", this.state.info.phone), React.createElement("div", {
      className: "item"
    }, React.createElement("i", {
      className: "fa fa-wechat"
    }), "\u5FAE\u4FE1\u53F7\uFF1A", this.state.info.wechat), React.createElement("div", {
      className: "item"
    }, React.createElement("i", {
      className: "fa fa-qq"
    }), "QQ\u53F7\uFF1A", this.state.info.qq), React.createElement("div", {
      className: "item"
    }, this.state.info.zn_note))), React.createElement(zn.react.Card, {
      title: "\u90E8\u95E8\u53CA\u89D2\u8272"
    }, React.createElement(zn.plugin.admin.RoleSelector, {
      value: this.state.info.role_ids,
      onChange: this.__onRoleChange
    }))));
  }
});

/***/ }),
/* 332 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminUser'
    };
  },
  getInitialState: function getInitialState() {
    return {
      status: 1,
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model,
        where: {
          status: 1
        }
      }),
      items: [{
        title: '用户名',
        name: 'name',
        width: 120,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: '状态',
        name: 'status',
        width: 80
      }, {
        title: '绑定微信',
        name: 'zn_plugin_wechat_open_id',
        width: 100
      }, {
        title: '邮箱',
        name: 'email',
        width: 180,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: 'QQ',
        name: 'qq',
        width: 120,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: '微信号',
        name: 'wechat',
        width: 120,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: '手机号',
        name: 'phone',
        width: 120,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: '角色',
        name: 'role_ids_convert',
        width: 120
      }, {
        title: '代理人',
        name: 'agents_convert',
        width: 120
      }, {
        title: '地址',
        name: 'address',
        width: 200,
        filter: {
          type: 'Input',
          opts: ['like']
        }
      }, {
        title: '说明',
        name: 'zn_note'
      }],
      formItems: [{
        title: '头像',
        name: 'avatar_img',
        type: 'ImageUploader'
      }, {
        title: '用户名',
        name: 'name',
        type: 'Input',
        required: true,
        error: '用户名必填项!'
      }, {
        title: '状态',
        name: 'status',
        type: 'Select',
        data: [{
          text: '待激活',
          value: 0
        }, {
          text: '正常',
          value: 1
        }, {
          text: '已锁定',
          value: -1
        }],
        required: true
      }, {
        title: '邮箱',
        name: 'email',
        type: 'Input'
      }, {
        title: 'QQ',
        name: 'qq',
        type: 'Input'
      }, {
        title: '微信号',
        name: 'wechat',
        type: 'Input'
      }, {
        title: '手机号',
        name: 'phone',
        required: true,
        type: 'Input'
      }, {
        title: '部门/角色',
        type: zn.plugin.admin.RoleSelector,
        name: 'role_ids'
      }, {
        title: '地址',
        name: 'address',
        type: 'Input'
      }, {
        title: '说明',
        name: 'zn_note',
        type: 'Textarea'
      }],
      toolbarItems: [//{ text: '一键重置密码', name: 'resetpassword', icon: 'fa-plus', style: { marginRight: 5 } },
      {
        text: '添加',
        name: 'add',
        icon: 'fa-plus',
        style: {
          marginRight: 5
        }
      }, {
        text: '删除',
        name: 'remove',
        status: 'danger',
        icon: 'fa-remove',
        style: {
          marginRight: 5
        }
      }]
    };
  },
  __doSuccess: function __doSuccess() {
    this.state.data.refresh();
  },
  __addItem: function __addItem() {
    zn.dialog({
      title: '新增用户',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        merge: "values",
        exts: {
          model: this.props.model
        },
        onSubmitSuccess: this.__doSuccess,
        items: this.state.formItems
      })
    });
  },
  __updateItem: function __updateItem(data) {
    zn.dialog({
      title: '更新用户信息',
      content: React.createElement(zn.react.Form, {
        merge: "updates",
        action: "/zn.plugin.admin/model/update",
        exts: {
          model: this.props.model,
          where: {
            id: data.id
          }
        },
        value: zn.store.post('/zn.plugin.admin/model/selectOne', {
          model: this.props.model,
          where: {
            id: data.id
          }
        }),
        onSubmitSuccess: this.__doSuccess,
        items: this.state.formItems
      })
    });
  },
  __viewWechatUserInfo: function __viewWechatUserInfo(value) {
    zn.dialog({
      title: 'OPENID: ' + value,
      content: React.createElement(zn.plugin.wechat.UserInfo, {
        openid: value
      })
    });
  },
  __removeItems: function __removeItems() {
    var _self = this,
        _values = this.refs.table.getValue();

    if (_values && _values.length) {
      zn.confirm('确认删除这' + _values.length + '个用户吗？', '提示', function () {
        zn.http.post('/zn.plugin.admin/model/delete', {
          model: this.props.model,
          where: "id in (" + _values.join(',') + ")"
        }).then(function () {
          zn.toast.success('删除成功');

          _self.state.data.refresh();
        }, function (data) {
          zn.toast.error('删除失败: ' + data.result);
        });
      }.bind(this));
    } else {
      zn.toast.warning('请先选择要删除的用户');
    }
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.name) {
      case 'add':
        this.__addItem();

        break;

      case 'remove':
        this.__removeItems();

        break;
    }
  },
  __onActiveUser: function __onActiveUser(data, type, btn) {
    zn.modal.close();
    zn.preloader.open({
      title: '请求中...'
    });
    zn.http.post('/zn.plugin.admin/user/active', {
      type: type,
      url: encodeURIComponent(window.location.origin + window.location.pathname),
      znid: data.zn_id
    }).then(function (data) {
      if (data.status == 200) {
        zn.notification.success("发送成功");

        if (type == 'sms') {
          this.state.data.refresh();
        }
      } else {
        zn.notification.error("激活失败：" + data.result);
      }

      zn.preloader.close();
    }.bind(this), function () {
      zn.notification.error('网络请求失败');
      zn.preloader.close();
    });
  },
  __onActive: function __onActive(data) {
    var _this = this;

    zn.dialog({
      title: "激活用户: " + data.name,
      content: React.createElement("div", {
        style: {
          padding: 20
        }
      }, React.createElement(zn.react.Button, {
        onClick: function onClick(props, btn) {
          return _this.__onActiveUser(data, 'sms', btn);
        },
        text: "\u624B\u673A\u77ED\u4FE1\u6FC0\u6D3B",
        icon: "fa-phone zr-padding-3",
        tooltip: "\u7CFB\u7EDF\u76F4\u63A5\u4EE5\u77ED\u4FE1\u65B9\u5F0F\u53D1\u9001\u8D26\u53F7\u5BC6\u7801\u5230\u624B\u673A\u4E0A"
      }), React.createElement(zn.react.Button, {
        onClick: function onClick(props, btn) {
          return _this.__onActiveUser(data, 'email', btn);
        },
        text: "\u90AE\u7BB1\u6FC0\u6D3B",
        icon: "fa-envelope zr-padding-3",
        tooltip: "\u7CFB\u7EDF\u76F4\u63A5\u4EE5\u90AE\u4EF6\u65B9\u5F0F\u53D1\u9001\u6FC0\u6D3B\u94FE\u63A5\u5230\u90AE\u7BB1\u4E2D",
        status: "warning",
        style: {
          marginTop: 20
        }
      }))
    });
  },
  __onTableColumnRender: function __onTableColumnRender(rowIndex, columnIndex, data, item, value) {
    var _this2 = this;

    switch (item.name) {
      case 'status':
        switch (value) {
          case 0:
            return React.createElement("span", {
              style: {
                color: '#1d18184d'
              }
            }, React.createElement("i", {
              onClick: function onClick() {
                return _this2.__onActive(data);
              },
              "data-tooltip": "\u70B9\u51FB\u6FC0\u6D3B\u7528\u6237",
              className: "fa fa-eye zr-padding-3"
            }), "\u5F85\u6FC0\u6D3B");

          case 1:
            return React.createElement("span", {
              style: {
                color: '#008000'
              }
            }, "\u6B63\u5E38");

          case -1:
            return React.createElement("span", {
              style: {
                color: '#d9534f'
              }
            }, "\u5DF2\u9501\u5B9A");
        }

      case 'name':
        return React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center'
          }
        }, React.createElement("i", {
          onClick: function onClick() {
            return _this2.__updateItem(data);
          },
          className: "fa fa-edit zr-padding-3"
        }), data.avatar_img && React.createElement("img", {
          className: "avatar",
          style: {
            width: 16,
            height: 16,
            margin: 5,
            borderRadius: 16
          },
          src: data.avatar_img
        }), React.createElement("a", {
          href: '#' + zn.react.session.fixPath('/znpluginadmin.user.infoedit') + '?userId=' + data.id
        }, value));

      case 'zn_plugin_wechat_open_id':
        if (value) {
          return React.createElement("a", {
            onClick: function onClick() {
              return _this2.__viewWechatUserInfo(value);
            },
            "data-tooltip": "\u67E5\u770B\u5FAE\u4FE1\u4FE1\u606F",
            style: {
              color: 'green',
              fontWeight: 'bold'
            }
          }, React.createElement("i", {
            className: "fa fa-eye zr-padding-3"
          }), "\u5DF2\u7ED1\u5B9A");
        } else {
          return React.createElement("span", null, "\u672A\u7ED1\u5B9A");
        }

      case 'qq':
        if (value) {
          return React.createElement("img", {
            "data-tooltip": value,
            style: {
              cursor: 'point'
            },
            border: "0",
            alt: "\u70B9\u51FB\u8FD9\u91CC\u53D1\u6D88\u606F",
            onClick: function onClick() {
              return window.open("http://b.qq.com/webc.htm?new=0&sid=" + value + "&o=www.kylinpop.com&q=7", '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
            },
            src: "http://wpa.qq.com/pa?p=1:" + value + ":1"
          });
        }

    }
  },
  __onStatusChange: function __onStatusChange(value) {
    this.setState({
      status: value.value
    });
    this.state.data.extend({
      where: {
        status: value.value
      }
    }).refresh();
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u7CFB\u7EDF\u8D26\u6237\u7BA1\u7406",
      headerCenter: React.createElement(zn.react.ListView, {
        className: "zr-tab-ios",
        selectMode: "radio",
        valueKey: "status",
        onClick: this.__onStatusChange,
        value: this.state.status,
        data: [{
          status: 1,
          text: '正常'
        }, {
          status: 0,
          text: '待激活'
        }, {
          status: -1,
          text: '锁定'
        }]
      }),
      toolbarItems: this.state.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, React.createElement(zn.react.PagerView, {
      ref: "table",
      view: "Table",
      enableFilter: true,
      checkbox: 50,
      showHeader: true,
      columnRender: this.__onTableColumnRender,
      data: this.state.data,
      items: this.state.items
    }));
  }
});

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getDefaultProps: function getDefaultProps() {
    return {
      model: 'ZNPluginAdminUserLog'
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: this.props.model,
        where: {
          user_id: this.props.request.search.userId
        }
      }),
      items: [{
        title: '操作人',
        name: 'user_id_convert',
        width: 100
      }, {
        title: '操作时间',
        name: 'zn_create_time',
        width: 180
      }, {
        title: '类型',
        name: 'type',
        width: 80
      }, {
        title: '说明',
        name: 'zn_note'
      }]
    };
  },
  render: function render() {
    return React.createElement(zn.react.Page, {
      toolbarItems: [{
        text: '导出'
      }],
      onToolbarClick: this.__onToolbarClick,
      title: "\u7CFB\u7EDF\u8D26\u6237\u767B\u5F55\u65E5\u5FD7"
    }, React.createElement(zn.react.PagerView, {
      view: "Table",
      enableFilter: false,
      checkbox: 0,
      showHeader: true,
      data: this.state.data,
      items: this.state.items
    }));
  }
});

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(336);

var React = __webpack_require__(0); //var QRCode = require('qrcode.react');


var exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      base: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadBaseSetting();
  },
  __loadBaseSetting: function __loadBaseSetting() {
    zn.http.post("/zn.plugin.admin/config/selectBy_id", {
      _id: 'zn.plugin.admin.base',
      valueKey: '_value'
    }).then(function (data) {
      if (data.status == 200) {
        var _base = data.result;
        var _base = data.result;

        if (_base.main_background_image.indexOf('/') == 0) {
          _base.company_logo = zn.http.fixURL(_base.company_logo);
          _base.login_background_image = zn.http.fixURL(_base.login_background_image);
          _base.main_background_image = zn.http.fixURL(_base.main_background_image);
        }

        window.document.title = _base.company_title;
        this.setState({
          base: _base
        });
      } else {
        this.setState({
          base: {
            "company_title": "上海佑洋信息科技有限公司",
            "company_logo": "./images/logo.png",
            "company_website": "http://www.youyangit.com",
            "company_tm": "上海佑洋信息科技有限公司 @2016 - @2017",
            "main": "/znpluginadmin.dashboard",
            "main_background_image": "./images/login_background/starry_sky_12.jpg",
            "login_background_image": "./images/login_background/starry_sky_11.jpg"
          }
        });
      }
    }.bind(this), function (err) {
      zn.notification.error('获取基础信息失败： ' + err.message);
    });
  },
  __onLogin: function __onLogin(event) {
    event.preventDefault();
    var _form = event.target.form;
    var _name = _form['name'].value,
        _password = _form['password'].value;

    if (!_name || _name.length < 2) {
      zn.alert('请输入长度不少于2位的用户名');

      _form['name'].focus();

      return false;
    }

    if (!_password || _password.length < 2) {
      zn.alert('请输入长度不少于2位的密码');

      _form['password'].focus();

      return false;
    }

    zn.preloader.open({
      content: '正在登陆中...'
    });
    zn.http.post("/zn.plugin.admin/user/login", {
      name: _name,
      password: _password
    }).then(function (data) {
      if (data.status == 200) {
        zn.react.session.doMain(data.result);
      } else {
        zn.notification.error('登录失败： ' + data.result);
      }

      zn.preloader.close();
    }, function (err) {
      zn.notification.error("网络请求失败");
      zn.preloader.close();
    });
  },
  render: function render() {
    if (!this.state.base) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u57FA\u7840\u4FE1\u606F...",
        loader: "timer"
      });
    }

    return React.createElement("div", {
      className: "zn-plugin-admin-login"
    }, React.createElement("img", {
      className: "background-image",
      src: this.state.base.login_background_image
    }), React.createElement("div", {
      className: "section-head"
    }, React.createElement("div", {
      className: "warp"
    }, React.createElement("div", {
      className: "head-left"
    }, React.createElement("img", {
      className: "company-logo",
      src: this.state.base.company_logo
    }), React.createElement("div", {
      className: "company-title"
    }, this.state.base.company_title)), React.createElement("div", {
      className: "head-right"
    }, React.createElement("ul", {
      className: "link-nav"
    }, React.createElement("li", null, React.createElement("a", {
      href: this.state.base.company_website
    }, "\u5B98\u7F51")))))), React.createElement("div", {
      className: "section-body zr-scroll-webkit"
    }, React.createElement("div", {
      className: "warp",
      style: {
        width: 640
      }
    }, React.createElement("div", {
      className: "intro"
    }), React.createElement("div", {
      className: "form-dialog"
    }, React.createElement("form", {
      className: "form"
    }, React.createElement("div", {
      className: "dialog-title"
    }, "\u7528\u6237\u767B\u5F55"), React.createElement("div", {
      className: "form-item"
    }, React.createElement("i", {
      className: "fa fa-user"
    }), React.createElement("input", {
      name: "name",
      type: "input",
      placeholder: "\u767B\u5F55\u7528\u6237\u540D",
      required: true
    })), React.createElement("div", {
      className: "form-item"
    }, React.createElement("i", {
      className: "fa fa-lock"
    }), React.createElement("input", {
      name: "password",
      type: "password",
      placeholder: "\u5BC6\u7801",
      required: true
    })), React.createElement("button", {
      onClick: this.__onLogin,
      className: "btn-login"
    }, "\u767B \u5F55"))))), React.createElement("div", {
      className: "section-foot"
    }, React.createElement("div", {
      className: "warp"
    }, React.createElement("div", {
      className: "TM"
    }, React.createElement("a", {
      href: ""
    }, "\u4E0A\u6D77\u4F51\u6D0B\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8"), " \u63D0\u4F9B\u6280\u672F\u652F\u6301"))));
  }
});
module.exports = exports;

/***/ }),
/* 336 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(338);

var React = __webpack_require__(0);

var NavigationBar = __webpack_require__(54);

var UserSessionInfo = __webpack_require__(57);

var _exports = React.createClass({
  displayName: "_exports",
  getInitialState: function getInitialState() {
    return {
      menus: [],
      base: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadBaseSetting();

    this.__loadUserRights();
  },
  __loadBaseSetting: function __loadBaseSetting() {
    zn.http.post("/zn.plugin.admin/config/selectBy_id", {
      _id: 'zn.plugin.admin.base',
      valueKey: '_value'
    }).then(function (data) {
      if (data.status == 200) {
        var _base = data.result;

        if (_base.main_background_image.indexOf('/') == 0) {
          _base.company_logo = zn.http.fixURL(_base.company_logo);
          _base.login_background_image = zn.http.fixURL(_base.login_background_image);
          _base.main_background_image = zn.http.fixURL(_base.main_background_image);
        }

        window.document.title = _base.company_title;

        if (this.isMounted()) {
          this.setState({
            base: _base
          });
        }
      } else {
        if (this.isMounted()) {
          this.setState({
            base: {
              "company_title": "上海佑洋信息科技有限公司",
              "company_logo": "./images/logo.png",
              "company_website": "http://www.youyangit.com",
              "company_tm": "上海佑洋信息科技有限公司 @2016 - @2017",
              "main": "/znpluginadmin.dashboard",
              "main_background_image": "./images/login_background/starry_sky_12.jpg",
              "login_background_image": "./images/login_background/starry_sky_11.jpg"
            }
          });
        }
      }
    }.bind(this), function (err) {
      zn.toast.error('获取基础信息失败： ' + err.message);
    });
  },
  __loadUserRights: function __loadUserRights() {
    zn.http.get('/zn.plugin.admin/user/getUserRightsMenus').then(function (data) {
      if (data.status == 200) {
        this.setState({
          menus: data.result
        });
      } else {
        zn.notification.error('Session失效请重新登录, 谢谢！');
        zn.react.session.doHome();
      }
    }.bind(this));
  },
  __onSessionClick: function __onSessionClick() {
    zn.modal.open(React.createElement(UserSessionInfo, null), {
      modalStyle: {
        overflow: 'hidden'
      },
      className: 'modal-right',
      isMode: true,
      removeSelf: false
    });
  },
  __onSignOut: function __onSignOut() {
    zn.confirm('确定要退出系统？', '提示', function () {
      zn.http.post('/zn.plugin.admin/user/logout').then(function () {
        zn.react.session.doHome();
      });
    });
  },
  __onMenuClick: function __onMenuClick() {
    zn.modal.open(React.createElement(NavigationBar, {
      onMenuItemClick: function onMenuItemClick() {
        return zn.modal.close();
      },
      style: {
        backgroundColor: '#000',
        overflow: 'auto'
      },
      data: this.state.menus
    }), {
      modalStyle: {
        overflow: 'auto'
      },
      className: 'modal-left',
      isMode: true,
      removeSelf: false
    });
  },
  __onCompanyClick: function __onCompanyClick() {
    zn.react.session.doMain();
  },
  __onUserClick: function __onUserClick(user) {
    zn.preloader.open({
      content: '账号切换中...'
    });
    zn.http.post("/zn.plugin.admin/user/exchange", {
      uid: user.value
    }).then(function (data) {
      if (data.status == 200) {
        zn.react.session.doMain(data.result);
        window.location.reload();
      } else {
        zn.notification.error('登录失败： ' + data.result);
      }

      zn.preloader.close();
    }, function (err) {
      zn.notification.error('登录失败： ' + err.message);
      zn.preloader.close();
    });
  },
  __onExchangeAccount: function __onExchangeAccount() {
    zn.dialog({
      title: '账号快速切换',
      content: React.createElement(zn.plugin.admin.UserSelector, {
        onUserClick: this.__onUserClick
      })
    });
  },
  render: function render() {
    if (!zn.react.session.validate()) {
      return false;
    }

    if (!this.state.base) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
        loader: "timer"
      });
    }

    return React.createElement("div", {
      className: "zn-plugin-admin-main"
    }, React.createElement("img", {
      className: "background-image",
      src: this.state.base.main_background_image
    }), React.createElement("div", {
      className: "section-head"
    }, React.createElement("div", {
      className: "warp"
    }, React.createElement("div", {
      className: "head-left"
    }, React.createElement("div", {
      className: "wap"
    }, React.createElement("i", {
      onClick: this.__onMenuClick,
      className: "fa fa-bars"
    }), React.createElement("img", {
      className: "company-logo",
      title: "\u8DF3\u8F6C\u4E3B\u9875\u9762",
      onClick: this.__onCompanyClick,
      src: this.state.base.company_logo
    })), React.createElement("div", {
      className: "web",
      title: "\u8DF3\u8F6C\u4E3B\u9875\u9762",
      onClick: this.__onCompanyClick
    }, React.createElement("img", {
      className: "company-logo",
      src: this.state.base.company_logo
    }), React.createElement("div", {
      className: "company-title"
    }, this.state.base.company_title))), React.createElement("div", {
      className: "head-right"
    }, React.createElement("ul", {
      className: "link-nav"
    }, zn.DEBUG && React.createElement("li", {
      onClick: this.__onExchangeAccount
    }, React.createElement("span", null, React.createElement("i", {
      className: "fa fa-exchange zr-padding-3"
    }), "\u8D26\u53F7\u5FEB\u901F\u5207\u6362"))), React.createElement("div", {
      className: "user-session"
    }, React.createElement("figure", {
      className: "avatar",
      onClick: function onClick() {
        return zn.react.session.relativeJump('/znpluginadmin.user.info');
      }
    }, React.createElement("img", {
      "data-tooltip": "\u67E5\u770B\u6211\u7684\u4E2A\u4EBA\u4FE1\u606F",
      src: zn.http.fixURL(zn.react.session.json().avatar_img) || './images/DefaultAvatar.png'
    })), React.createElement("span", {
      className: "name"
    }, zn.react.session.json().name), React.createElement("i", {
      className: "fa fa-angle-down",
      onClick: this.__onSessionClick
    })), React.createElement("div", {
      className: "icons"
    }, React.createElement("i", {
      onClick: this.__onMessage,
      className: "fa fa-comment-o",
      title: "\u6D88\u606F"
    }), React.createElement("i", {
      onClick: this.__onSetting,
      className: "fa fa-gear",
      title: "\u8BBE\u7F6E"
    }), React.createElement("i", {
      onClick: this.__onSignOut,
      className: "sign-out fa fa-sign-out",
      title: "\u6CE8\u9500"
    }))))), React.createElement("div", {
      className: "section-body"
    }, React.createElement("div", {
      className: "warp inner-content"
    }, React.createElement("div", {
      className: "navigation-view zr-scroll-webkit"
    }, React.createElement(NavigationBar, {
      data: this.state.menus
    })), React.createElement("div", {
      className: "page-view"
    }, this.props.view && React.createElement(this.props.view, {
      request: this.props.request
    })))), React.createElement("div", {
      className: "section-foot"
    }, React.createElement("div", {
      className: "warp"
    }, React.createElement("div", {
      className: "TM"
    }, React.createElement("a", {
      href: ""
    }, "\u4E0A\u6D77\u4F51\u6D0B\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8"), " \u63D0\u4F9B\u6280\u672F\u652F\u6301"))));
  }
});

module.exports = _exports;

/***/ }),
/* 338 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(340);

var React = __webpack_require__(0); //var QRCode = require('qrcode.react');


var exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      base: null,
      user: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadBaseSetting();

    this.__emailActive();
  },
  __emailActive: function __emailActive() {
    var _znid = this.props.request.search.znid;

    if (!_znid) {
      return zn.notification.error('无效的激活链接');
    }

    zn.http.post("/zn.plugin.admin/user/emailActive", {
      znid: _znid,
      url: encodeURIComponent(window.location.origin + window.location.pathname)
    }).then(function (data) {
      if (data.status == 200) {
        this.setState({
          user: data.result
        });
      } else {
        zn.notification.error(data.result);
      }
    }.bind(this), function (err) {
      zn.notification.error('网络请求失败');
    });
  },
  __loadBaseSetting: function __loadBaseSetting() {
    zn.http.post("/zn.plugin.admin/config/selectBy_id", {
      _id: 'zn.plugin.admin.base',
      valueKey: '_value'
    }).then(function (data) {
      if (data.status == 200) {
        var _base = data.result;
        var _base = data.result;

        if (_base.main_background_image.indexOf('/') == 0) {
          _base.company_logo = zn.http.fixURL(_base.company_logo);
          _base.login_background_image = zn.http.fixURL(_base.login_background_image);
          _base.main_background_image = zn.http.fixURL(_base.main_background_image);
        }

        window.document.title = _base.company_title;
        this.setState({
          base: _base
        });
      } else {
        this.setState({
          base: {
            "company_title": "上海佑洋信息科技有限公司",
            "company_logo": "./images/logo.png",
            "company_website": "http://www.youyangit.com",
            "company_tm": "上海佑洋信息科技有限公司 @2016 - @2017",
            "main": "/znpluginadmin.dashboard",
            "main_background_image": "./images/login_background/starry_sky_12.jpg",
            "login_background_image": "./images/login_background/starry_sky_11.jpg"
          }
        });
      }
    }.bind(this), function (err) {
      zn.notification.error('获取基础信息失败');
    });
  },
  render: function render() {
    if (!this.state.base) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u57FA\u7840\u4FE1\u606F...",
        loader: "timer"
      });
    }

    return React.createElement("div", {
      className: "zn-plugin-admin-user-active"
    }, React.createElement("img", {
      className: "background-image",
      src: this.state.base.login_background_image
    }), React.createElement("div", {
      className: "section-head"
    }, React.createElement("div", {
      className: "warp"
    }, React.createElement("div", {
      className: "head-left"
    }, React.createElement("img", {
      className: "company-logo",
      src: this.state.base.company_logo
    }), React.createElement("div", {
      className: "company-title"
    }, this.state.base.company_title)), React.createElement("div", {
      className: "head-right"
    }, React.createElement("ul", {
      className: "link-nav"
    }, React.createElement("li", null, React.createElement("a", {
      href: this.state.base.company_website
    }, "\u5B98\u7F51")), React.createElement("li", null, "\u4E0B\u8F7D"))))), React.createElement("div", {
      className: "section-body zr-scroll-webkit"
    }, React.createElement("div", {
      className: "warp",
      style: {
        width: 640,
        backgroundColor: '#FFF',
        padding: 20
      }
    }, this.state.user ? React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }
    }, React.createElement("div", {
      style: {
        padding: 10
      }
    }, "hi ", this.state.user.name), this.state.user.actived ? React.createElement("div", {
      style: {
        padding: 10
      }
    }, "\u60A8\u8D26\u53F7\u5DF2\u7ECF\u6FC0\u6D3B, \u8BF7\u52FF\u91CD\u590D\u64CD\u4F5C\u3002") : React.createElement("div", {
      style: {
        padding: 10
      }
    }, "\u606D\u559C\u60A8, \u60A8\u7684\u8D26\u53F7\u6210\u529F\u6FC0\u6D3B\uFF0C\u7CFB\u7EDF\u5DF2\u628A\u767B\u5F55\u4FE1\u606F\u53D1\u9001\u5230\u60A8\u6FC0\u6D3B\u90AE\u7BB1(", this.state.user.email, ")\u3002"), React.createElement(zn.react.Button, {
      onClick: function onClick() {
        return zn.react.session.jump('/zn.plugin.admin/login');
      },
      style: {
        margin: 10
      },
      text: "\u70B9\u51FB\u767B\u5F55"
    })) : React.createElement("div", null, React.createElement(zn.react.DataLoader, {
      content: "\u9A8C\u8BC1\u4E2D...",
      loader: "timer"
    })))), React.createElement("div", {
      className: "section-foot"
    }, React.createElement("div", {
      className: "warp"
    }, React.createElement("div", {
      className: "TM"
    }, React.createElement("a", {
      href: "http://www.youyangit.com"
    }, React.createElement("img", {
      src: "./images/youyangit-logo.png"
    }), "\u4E0A\u6D77\u4F51\u6D0B\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8"), " \u63D0\u4F9B\u6280\u672F\u652F\u6301"))));
  }
});
module.exports = exports;

/***/ }),
/* 340 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ])));