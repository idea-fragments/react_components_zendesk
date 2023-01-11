Object.defineProperty(exports, '__esModule', {
  value: true
});

var jsxRuntime = require('react/jsx-runtime');

var styled = require('styled-components');

var React = require('react');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

var XS$1 = ".5rem";
var SM$1 = "1rem";
var MD$1 = "1.5rem";
var LG$1 = "2rem";
var XL$1 = "2.5rem";
var XXL$1 = "3rem";
var XXXL$1 = "4rem";
var XXXXL$1 = "5rem";
var SPACINGS = Object.freeze({
  XS: XS$1,
  SM: SM$1,
  MD: MD$1,
  LG: LG$1,
  XL: XL$1,
  XXL: XXL$1,
  XXXL: XXXL$1,
  XXXXL: XXXXL$1
});
Object.freeze({
  DOWN: "down",
  RIGHT: "right"
});

var getFlexDirection = function (_a) {
  var withRows = _a.withRows;
  return withRows ? "column" : "row";
};

var FlexBox = styled__default["default"].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: ", ";\n  display: ", ";\n  flex: ", ";\n  flex-direction: ", ";\n  gap: ", ";\n  justify-content: ", ";\n  ", "\n\n  ", "\n  ", "\n"], ["\n  align-items: ", ";\n  display: ", ";\n  flex: ", ";\n  flex-direction: ", ";\n  gap: ", ";\n  justify-content: ", ";\n  ", "\n\n  ", "\n  ", "\n"])), function (_a) {
  var alignItems = _a.alignItems;
  return alignItems ? alignItems : "initial";
}, function (p) {
  return p.inline ? "inline-flex" : "flex";
}, function (_a) {
  var fluid = _a.fluid;
  return fluid ? 1 : "unset";
}, getFlexDirection, function (p) {
  return p.gap ? p.gap : SPACINGS.SM;
}, function (p) {
  return p.justifyContent || "initial";
}, function (p) {
  return p.wrapped ? wrappedStyling : "";
}, function (p) {
  return p.responsivePropsList ? responsiveStyles(p) : "";
}, function (p) {
  return p._css;
});
FlexBox.defaultProps = {
  withRows: false
};

var responsiveStyles = function (_a) {
  var responsivePropsList = _a.responsivePropsList,
      originalProps = __rest(_a, ["responsivePropsList"]);

  return responsivePropsList === null || responsivePropsList === void 0 ? void 0 : responsivePropsList.map(function (_a) {
    var mediaQueryFunc = _a.mediaQueryFunc,
        rProps = _a.props;

    var props = __assign(__assign({}, originalProps), rProps);

    var alignItems = props.alignItems,
        gap = props.gap,
        inline = props.inline,
        justifyContent = props.justifyContent,
        fluid = props.fluid,
        wrapped = props.wrapped;
    return mediaQueryFunc(styled.css(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n      align-items: ", ";\n      display: ", ";\n      flex: ", ";\n      flex-direction: ", ";\n      gap: ", ";\n      justify-content: ", ";\n      ", "\n    "], ["\n      align-items: ", ";\n      display: ", ";\n      flex: ", ";\n      flex-direction: ", ";\n      gap: ", ";\n      justify-content: ", ";\n      ", "\n    "])), alignItems ? alignItems : "initial", inline ? "inline-flex" : "flex", fluid ? 1 : "unset", getFlexDirection(props), gap ? gap : SPACINGS.SM, justifyContent || "initial", wrapped ? wrappedStyling : "")).join("");
  });
};

var wrappedStyling = styled.css(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  flex-wrap: wrap;\n"], ["\n  flex-wrap: wrap;\n"])));
var templateObject_1$2, templateObject_2$2, templateObject_3$2;
var propTypes = {
  exports: {}
};
var reactIs = {
  exports: {}
};
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol.for,
      c = b ? Symbol.for("react.element") : 60103,
      d = b ? Symbol.for("react.portal") : 60106,
      e = b ? Symbol.for("react.fragment") : 60107,
      f = b ? Symbol.for("react.strict_mode") : 60108,
      g = b ? Symbol.for("react.profiler") : 60114,
      h = b ? Symbol.for("react.provider") : 60109,
      k = b ? Symbol.for("react.context") : 60110,
      l = b ? Symbol.for("react.async_mode") : 60111,
      m = b ? Symbol.for("react.concurrent_mode") : 60111,
      n = b ? Symbol.for("react.forward_ref") : 60112,
      p = b ? Symbol.for("react.suspense") : 60113,
      q = b ? Symbol.for("react.suspense_list") : 60120,
      r = b ? Symbol.for("react.memo") : 60115,
      t = b ? Symbol.for("react.lazy") : 60116,
      v = b ? Symbol.for("react.block") : 60121,
      w = b ? Symbol.for("react.fundamental") : 60117,
      x = b ? Symbol.for("react.responder") : 60118,
      y = b ? Symbol.for("react.scope") : 60119;

  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;

      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;

            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;

                default:
                  return u;
              }

          }

        case d:
          return u;
      }
    }
  }

  function A(a) {
    return z(a) === m;
  }

  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;

  reactIs_production_min.isAsyncMode = function (a) {
    return A(a) || z(a) === l;
  };

  reactIs_production_min.isConcurrentMode = A;

  reactIs_production_min.isContextConsumer = function (a) {
    return z(a) === k;
  };

  reactIs_production_min.isContextProvider = function (a) {
    return z(a) === h;
  };

  reactIs_production_min.isElement = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };

  reactIs_production_min.isForwardRef = function (a) {
    return z(a) === n;
  };

  reactIs_production_min.isFragment = function (a) {
    return z(a) === e;
  };

  reactIs_production_min.isLazy = function (a) {
    return z(a) === t;
  };

  reactIs_production_min.isMemo = function (a) {
    return z(a) === r;
  };

  reactIs_production_min.isPortal = function (a) {
    return z(a) === d;
  };

  reactIs_production_min.isProfiler = function (a) {
    return z(a) === g;
  };

  reactIs_production_min.isStrictMode = function (a) {
    return z(a) === f;
  };

  reactIs_production_min.isSuspense = function (a) {
    return z(a) === p;
  };

  reactIs_production_min.isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };

  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}

var reactIs_development = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;

  if (process.env.NODE_ENV !== "production") {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }

  return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;

  (function (module) {
    if (process.env.NODE_ENV === 'production') {
      module.exports = requireReactIs_production_min();
    } else {
      module.exports = requireReactIs_development();
    }
  })(reactIs);

  return reactIs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      } // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118


      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

      test1[5] = 'de';

      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });

      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);

        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };
  return objectAssign;
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;

  var printWarning = function () {};

  if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has = requireHas();

    printWarning = function (text) {
      var message = 'Warning: ' + text;

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {
        /**/
      }
    };
  }
  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */


  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error; // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.

          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
              err.name = 'Invariant Violation';
              throw err;
            }

            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }

          if (error && !(error instanceof Error)) {
            printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }

          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }
  /**
   * Resets warning cache when testing.
   *
   * @private
   */


  checkPropTypes.resetWarningCache = function () {
    if (process.env.NODE_ENV !== 'production') {
      loggedTypeFailures = {};
    }
  };

  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var ReactIs = requireReactIs();
  var assign = requireObjectAssign();
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  var has = requireHas();
  var checkPropTypes = requireCheckPropTypes();

  var printWarning = function () {};

  if (process.env.NODE_ENV !== 'production') {
    printWarning = function (text) {
      var message = 'Warning: ' + text;

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */

    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }
    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */


    var ANONYMOUS = '<<anonymous>>'; // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bigint: createPrimitiveTypeChecker('bigint'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */

    /*eslint-disable no-self-compare*/

    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */


    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && typeof data === 'object' ? data : {};
      this.stack = '';
    } // Make `instanceof Error` still work for returned errors.


    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }

      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;

            if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }

        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }

            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }

          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
            expectedType: expectedType
          });
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }

        var propValue = props[propName];

        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }

        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== 'production') {
          if (arguments.length > 1) {
            printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
          } else {
            printWarning('Invalid argument supplied to oneOf, expected an array.');
          }
        }

        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];

        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);

          if (type === 'symbol') {
            return String(value);
          }

          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }

      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }

        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }

        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

            if (error instanceof Error) {
              return error;
            }
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (typeof checker !== 'function') {
          printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        var expectedTypes = [];

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);

          if (checkerResult == null) {
            return null;
          }

          if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }

        var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
      }

      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function invalidValidatorError(componentName, location, propFullName, key, type) {
      return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }

        for (var key in shapeTypes) {
          var checker = shapeTypes[key];

          if (typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }

          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);

        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        } // We need to check all keys in case some are required but missing from props.


        var allKeys = assign({}, props[propName], shapeTypes);

        for (var key in allKeys) {
          var checker = shapeTypes[key];

          if (has(shapeTypes, key) && typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }

          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }

          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error) {
            return error;
          }
        }

        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;

        case 'boolean':
          return !propValue;

        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }

          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);

          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;

            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;

                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;

        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      } // falsy value can't be a Symbol


      if (!propValue) {
        return false;
      } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      } // Fallback for non-spec compliant Symbols which are polyfilled.


      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    } // Equivalent of `typeof` but with special handling for array and regexp.


    function getPropType(propValue) {
      var propType = typeof propValue;

      if (Array.isArray(propValue)) {
        return 'array';
      }

      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }

      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }

      return propType;
    } // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.


    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }

      var propType = getPropType(propValue);

      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }

      return propType;
    } // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"


    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);

      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;

        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;

        default:
          return type;
      }
    } // Returns class name of the object, if any.


    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }

      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  return factoryWithTypeCheckers;
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = requireReactPropTypesSecret();

  function emptyFunction() {}

  function emptyFunctionWithReset() {}

  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  factoryWithThrowingShims = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }

      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }

    shim.isRequired = shim;

    function getShim() {
      return shim;
    } // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.


    var ReactPropTypes = {
      array: shim,
      bigint: shim,
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

  return factoryWithThrowingShims;
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs(); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod

  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


var useSchedule = function useSchedule(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1250 : _ref$duration,
      _ref$delayMS = _ref.delayMS,
      delayMS = _ref$delayMS === void 0 ? 750 : _ref$delayMS,
      _ref$loop = _ref.loop,
      loop = _ref$loop === void 0 ? true : _ref$loop;

  var _useState = React.useState(0),
      elapsed = _useState[0],
      setTime = _useState[1];

  var _useState2 = React.useState(false),
      delayComplete = _useState2[0],
      setDelayComplete = _useState2[1];

  React.useLayoutEffect(function () {
    var raf;
    var start;
    var loopTimeout;
    var destroyed = false;

    var tick = function tick() {
      if (destroyed) {
        return;
      }

      raf = requestAnimationFrame(performAnimationFrame);
    };

    var performAnimationFrame = function performAnimationFrame() {
      setTime(Date.now() - start);
      tick();
    };

    var onStart = function onStart() {
      if (destroyed) {
        return;
      }

      loopTimeout = setTimeout(function () {
        cancelAnimationFrame(raf);
        setTime(Date.now() - start);
        if (loop) onStart();
      }, duration);
      start = Date.now();
      setDelayComplete(true);
      tick();
    };

    var renderingDelayTimeout = setTimeout(onStart, delayMS);
    return function () {
      destroyed = true;
      clearTimeout(renderingDelayTimeout);
      clearTimeout(loopTimeout);
      cancelAnimationFrame(raf);
    };
  }, [duration, delayMS, loop]);
  return {
    elapsed: Math.min(1, elapsed / duration),
    delayMS: delayMS,
    delayComplete: delayComplete
  };
};

({
  children: propTypes.exports.func,
  render: propTypes.exports.func,
  duration: propTypes.exports.number,
  loop: propTypes.exports.bool,
  delayMS: propTypes.exports.number
});
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

({
  children: propTypes.exports.func,
  render: propTypes.exports.func,
  relativeDocument: propTypes.exports.object,
  className: propTypes.exports.string,
  dataAttribute: propTypes.exports.string
});
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

var DocumentPosition;

(function (DocumentPosition) {
  DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
  DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
  DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
  DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
  DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
  DocumentPosition[DocumentPosition["IMPLEMENTATION_SPECIFIC"] = 32] = "IMPLEMENTATION_SPECIFIC";
})(DocumentPosition || (DocumentPosition = {}));

var ContainerOrientation;

(function (ContainerOrientation) {
  ContainerOrientation["HORIZONTAL"] = "horizontal";
  ContainerOrientation["VERTICAL"] = "vertical";
})(ContainerOrientation || (ContainerOrientation = {}));

function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends$1.apply(this, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
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

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
} // based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */


var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found and no default was provided.\n\n",
  "75": "important requires a valid style object, got a %s instead.\n\n",
  "76": "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  "77": "remToPx expects a value in \"rem\" but you provided it in \"%s\".\n\n",
  "78": "base must be set in \"px\" or \"%\" but you set it in \"%s\".\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (process.env.NODE_ENV === 'production') {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized(_this);
  }

  return PolishedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value and its unit as elements of an array.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': getValueAndUnit('100px')[0],
 *   '--unit': getValueAndUnit('100px')[1],
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${getValueAndUnit('100px')[0]};
 *   --unit: ${getValueAndUnit('100px')[1]};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100,
 *   '--unit': 'px',
 * }
 */

function getValueAndUnit(value) {
  if (typeof value !== 'string') return [value, ''];
  var matchedValue = value.match(cssRegex);
  if (matchedValue) return [parseFloat(value), matchedValue[2]];
  return [value, undefined];
}

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}
/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */


function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}
/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */


var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

var reduceHexValue$1 = reduceHexValue;

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */


function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new PolishedError(1);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */


function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new PolishedError(2);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */


function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */


function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (typeof color !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
} // Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare


function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */


function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(darken);
var curriedDarken$1 = curriedDarken;
/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(lighten);
var curriedLighten$1 = curriedLighten;
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var PALETTE = {
  black: '#000',
  white: '#fff',
  product: {
    support: '#00a656',
    message: '#37b8af',
    explore: '#30aabc',
    gather: '#f6c8be',
    guide: '#ff6224',
    connect: '#ff6224',
    chat: '#f79a3e',
    talk: '#efc93d',
    sell: '#c38f00'
  },
  grey: {
    100: '#f8f9f9',
    200: '#e9ebed',
    300: '#d8dcde',
    400: '#c2c8cc',
    500: '#87929d',
    600: '#68737d',
    700: '#49545c',
    800: '#2f3941'
  },
  blue: {
    100: '#edf7ff',
    200: '#cee2f2',
    300: '#adcce4',
    400: '#5293c7',
    500: '#337fbd',
    600: '#1f73b7',
    700: '#144a75',
    800: '#0f3554'
  },
  red: {
    100: '#fff0f1',
    200: '#f5d5d8',
    300: '#f5b5ba',
    400: '#e35b66',
    500: '#d93f4c',
    600: '#cc3340',
    700: '#8c232c',
    800: '#681219'
  },
  yellow: {
    100: '#fff7ed',
    200: '#ffeedb',
    300: '#fed6a8',
    400: '#ffb057',
    500: '#f79a3e',
    600: '#ed8f1c',
    700: '#ad5918',
    800: '#703815'
  },
  green: {
    100: '#edf8f4',
    200: '#d1e8df',
    300: '#aecfc2',
    400: '#5eae91',
    500: '#228f67',
    600: '#038153',
    700: '#186146',
    800: '#0b3b29'
  },
  kale: {
    100: '#f5fcfc',
    200: '#daeded',
    300: '#bdd9d7',
    400: '#90bbbb',
    500: '#467b7c',
    600: '#17494d',
    700: '#03363d',
    800: '#012b30'
  },
  fuschia: {
    400: '#d653c2',
    600: '#a81897',
    M400: '#cf62a8',
    M600: '#a8458c'
  },
  pink: {
    400: '#ec4d63',
    600: '#d42054',
    M400: '#d57287',
    M600: '#b23a5d'
  },
  crimson: {
    400: '#e34f32',
    600: '#c72a1c',
    M400: '#cc6c5b',
    M600: '#b24a3c'
  },
  orange: {
    400: '#de701d',
    600: '#bf5000',
    M400: '#d4772c',
    M600: '#b35827'
  },
  lemon: {
    400: '#ffd424',
    600: '#ffbb10',
    M400: '#e7a500',
    M600: '#c38f00'
  },
  lime: {
    400: '#43b324',
    600: '#2e8200',
    M400: '#519e2d',
    M600: '#47782c'
  },
  mint: {
    400: '#00a656',
    600: '#058541',
    M400: '#299c66',
    M600: '#2e8057'
  },
  teal: {
    400: '#02a191',
    600: '#028079',
    M400: '#2d9e8f',
    M600: '#3c7873'
  },
  azure: {
    400: '#3091ec',
    600: '#1371d6',
    M400: '#5f8dcf',
    M600: '#3a70b2'
  },
  royal: {
    400: '#5d7df5',
    600: '#3353e2',
    M400: '#7986d8',
    M600: '#4b61c3'
  },
  purple: {
    400: '#b552e2',
    600: '#6a27b8',
    M400: '#b072cc',
    M600: '#9358b0'
  }
};
var BASE = 4;
var borderRadii = {
  sm: "".concat(BASE / 2, "px"),
  md: "".concat(BASE, "px")
};
var borderStyles = {
  solid: 'solid'
};
var borderWidths = {
  sm: '1px',
  md: '3px'
};
var borders = {
  sm: "".concat(borderWidths.sm, " ").concat(borderStyles.solid),
  md: "".concat(borderWidths.md, " ").concat(borderStyles.solid)
};
var breakpoints = {
  xs: '0px',
  sm: "".concat(BASE * 144, "px"),
  md: "".concat(BASE * 192, "px"),
  lg: "".concat(BASE * 248, "px"),
  xl: "".concat(BASE * 300, "px")
};
var colors = {
  background: PALETTE.white,
  foreground: PALETTE.grey[800],
  primaryHue: 'blue',
  dangerHue: 'red',
  warningHue: 'yellow',
  successHue: 'green',
  neutralHue: 'grey',
  chromeHue: 'kale'
};
var fonts = {
  mono: ['SFMono-Regular', 'Consolas', '"Liberation Mono"', 'Menlo', 'Courier', 'monospace'].join(','),
  system: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(',')
};
var fontSizes = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '22px',
  xxl: '26px',
  xxxl: '36px'
};
var fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};
var iconSizes = {
  sm: '12px',
  md: '16px',
  lg: '26px'
};
var lineHeights = {
  sm: "".concat(BASE * 4, "px"),
  md: "".concat(BASE * 5, "px"),
  lg: "".concat(BASE * 6, "px"),
  xl: "".concat(BASE * 7, "px"),
  xxl: "".concat(BASE * 8, "px"),
  xxxl: "".concat(BASE * 11, "px")
};

var palette = _objectSpread2({}, PALETTE);

delete palette.product;
var shadowWidths = {
  sm: '2px',
  md: '3px'
};
var shadows = {
  sm: function sm(color) {
    return "0 0 0 ".concat(shadowWidths.sm, " ").concat(color);
  },
  md: function md(color) {
    return "0 0 0 ".concat(shadowWidths.md, " ").concat(color);
  },
  lg: function lg(offsetY, blurRadius, color) {
    return "0 ".concat(offsetY, " ").concat(blurRadius, " 0 ").concat(color);
  }
};
var space = {
  base: BASE,
  xxs: "".concat(BASE, "px"),
  xs: "".concat(BASE * 2, "px"),
  sm: "".concat(BASE * 3, "px"),
  md: "".concat(BASE * 5, "px"),
  lg: "".concat(BASE * 8, "px"),
  xl: "".concat(BASE * 10, "px"),
  xxl: "".concat(BASE * 12, "px")
};
var DEFAULT_THEME = {
  borders: borders,
  borderRadii: borderRadii,
  borderStyles: borderStyles,
  borderWidths: borderWidths,
  breakpoints: breakpoints,
  colors: _objectSpread2({
    base: 'light'
  }, colors),
  components: {},
  fonts: fonts,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  iconSizes: iconSizes,
  lineHeights: lineHeights,
  palette: palette,
  rtl: false,
  shadowWidths: shadowWidths,
  shadows: shadows,
  space: space
};

var useDocument = function useDocument(theme) {
  var _useState = React.useState(),
      _useState2 = _slicedToArray$1(_useState, 2),
      controlledDocument = _useState2[0],
      setControlledDocument = _useState2[1];

  React.useEffect(function () {
    if (theme && theme.document) {
      setControlledDocument(theme.document);
    } else {
      setControlledDocument(document);
    }
  }, [theme]);
  return controlledDocument;
};

function retrieveComponentStyles(componentId, props) {
  var components = props.theme && props.theme.components;

  if (!components) {
    return undefined;
  }

  var componentStyles = components[componentId];

  if (typeof componentStyles === 'function') {
    return componentStyles(props);
  }

  return componentStyles;
}

var DEFAULT_SHADE = 600;

var adjust = function adjust(color, expected, actual) {
  if (expected !== actual) {
    var amount = Math.abs(expected - actual) / 100 * 0.05;
    return expected > actual ? curriedDarken$1(amount, color) : curriedLighten$1(amount, color);
  }

  return color;
};

function getColor(hue) {
  var shade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_SHADE;
  var theme = arguments.length > 2 ? arguments[2] : undefined;
  var transparency = arguments.length > 3 ? arguments[3] : undefined;
  var retVal;

  if (isNaN(shade)) {
    return undefined;
  }

  var palette = theme && theme.palette ? theme.palette : DEFAULT_THEME.palette;
  var colors = theme && theme.colors ? theme.colors : DEFAULT_THEME.colors;

  var _hue;

  if (typeof hue === 'string') {
    _hue = colors[hue] || hue;
  } else {
    _hue = hue;
  }

  if (Object.prototype.hasOwnProperty.call(palette, _hue)) {
    _hue = palette[_hue];
  }

  if (_typeof(_hue) === 'object') {
    retVal = _hue[shade];

    if (!retVal) {
      var _shade = Object.keys(_hue).map(function (hueKey) {
        return parseInt(hueKey, 10);
      }).reduce(function (previous, current) {
        return Math.abs(current - shade) < Math.abs(previous - shade) ? current : previous;
      });

      retVal = adjust(_hue[_shade], shade, _shade);
    }
  } else {
    retVal = adjust(_hue, shade, DEFAULT_SHADE);
  }

  if (transparency) {
    retVal = rgba(retVal, transparency);
  }

  return retVal;
}

function getLineHeight(height, fontSize) {
  var _getValueAndUnit = getValueAndUnit(height.toString()),
      _getValueAndUnit2 = _slicedToArray$1(_getValueAndUnit, 2),
      heightValue = _getValueAndUnit2[0],
      heightUnit = _getValueAndUnit2[1];

  var _getValueAndUnit3 = getValueAndUnit(fontSize.toString()),
      _getValueAndUnit4 = _slicedToArray$1(_getValueAndUnit3, 2),
      fontSizeValue = _getValueAndUnit4[0],
      fontSizeUnit = _getValueAndUnit4[1];

  var PIXELS = 'px';

  if (heightUnit && heightUnit !== PIXELS) {
    throw new Error("Unexpected `height` with '".concat(heightUnit, "' units."));
  }

  if (fontSizeUnit && fontSizeUnit !== PIXELS) {
    throw new Error("Unexpected `fontSize` with '".concat(fontSizeUnit, "' units."));
  }

  return heightValue / fontSizeValue;
}
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var dotOneKeyframes = styled.keyframes(["0%{transform:translate(0,5px);}3%{transform:translate(1px,-5px);}6%{transform:translate(3px,-15px);}8%{transform:translate(5px,-18px);}9%{transform:translate(7px,-21px);}11%{transform:translate(8px,-22px);}13%{transform:translate(9px,-23px);}16%{transform:translate(12px,-25px);}18%{transform:translate(13px,-26px);}23%{transform:translate(18px,-26px);}24%{transform:translate(19px,-25px);}28%{transform:translate(22px,-23px);}31%{transform:translate(24px,-21px);}33%{transform:translate(26px,-18px);}34%{transform:translate(28px,-14px);}36%{transform:translate(29px,-12px);}38%{transform:translate(30px,-5px);}39%{transform:translate(31px,5px);}54%{transform:translate(31px,3px);}59%{transform:translate(33px);}61%{transform:translate(43px);}63%{transform:translate(48px);}64%{transform:translate(51px);}66%{transform:translate(53px);}68%{transform:translate(55px);}69%{transform:translate(57px);}76%{transform:translate(60px);}81%{transform:translate(61px);}83%,100%{transform:translate(62px);}"]);
var dotTwoKeyframes = styled.keyframes(["4%{transform:translate(0);}6%{transform:translate(-1px);}8%{transform:translate(-2px);}9%{transform:translate(-5px);}11%{transform:translate(-7px);}13%{transform:translate(-12px);}14%{transform:translate(-17px);}16%{transform:translate(-19px);}18%{transform:translate(-22px);}19%{transform:translate(-25px);}21%{transform:translate(-26px);}23%{transform:translate(-27px);}24%{transform:translate(-28px);}26%{transform:translate(-29px);}29%{transform:translate(-30px);}33%,89%{transform:translate(-31px);}91%{transform:translate(-31px,1px);}94%{transform:translate(-31px,2px);}98%{transform:translate(-31px,3px);}99%{transform:translate(-31px,4px);}100%{transform:translate(-31px,5px);}"]);
var dotThreeKeyframes = styled.keyframes(["39%{transform:translate(0);}44%{transform:translate(0,1px);}46%{transform:translate(0,2px);}48%{transform:translate(0,3px);}49%{transform:translate(0,4px);}51%{transform:translate(0,5px);}53%{transform:translate(-1px,-6px);}54%{transform:translate(-2px,-13px);}56%{transform:translate(-3px,-15px);}58%{transform:translate(-5px,-19px);}59%{transform:translate(-7px,-21px);}61%{transform:translate(-8px,-22px);}63%{transform:translate(-9px,-24px);}64%{transform:translate(-11px,-25px);}66%{transform:translate(-12px,-26px);}74%{transform:translate(-19px,-26px);}76%{transform:translate(-20px,-25px);}78%{transform:translate(-22px,-24px);}81%{transform:translate(-24px,-21px);}83%{transform:translate(-26px,-19px);}84%{transform:translate(-28px,-15px);}86%{transform:translate(-29px,-13px);}88%{transform:translate(-30px,-6px);}89%{transform:translate(-31px,5px);}91%{transform:translate(-31px,4px);}93%{transform:translate(-31px,3px);}94%{transform:translate(-31px,2px);}98%{transform:translate(-31px,1px);}100%{transform:translate(-31px);}"]);
var StyledDotsCircle = styled__default["default"].circle.attrs({
  cy: 36,
  r: 9
}).withConfig({
  displayName: "StyledDots__StyledDotsCircle",
  componentId: "sc-1ltah7e-0"
})([""]);
StyledDotsCircle.defaultProps = {
  theme: DEFAULT_THEME
};
var StyledDotsCircleOne = styled__default["default"](StyledDotsCircle).attrs({
  cx: 9
}).withConfig({
  displayName: "StyledDots__StyledDotsCircleOne",
  componentId: "sc-1ltah7e-1"
})(["animation:", ";"], function (_ref) {
  var duration = _ref.duration;
  return styled.css(["", " ", "ms linear infinite"], dotOneKeyframes, duration);
});
StyledDotsCircleOne.defaultProps = {
  theme: DEFAULT_THEME
};
var StyledDotsCircleTwo = styled__default["default"](StyledDotsCircle).attrs(function () {
  return {
    cx: 40
  };
}).withConfig({
  displayName: "StyledDots__StyledDotsCircleTwo",
  componentId: "sc-1ltah7e-2"
})(["animation:", ";"], function (_ref2) {
  var duration = _ref2.duration;
  return styled.css(["", " ", "ms linear infinite"], dotTwoKeyframes, duration);
});
StyledDotsCircleTwo.defaultProps = {
  theme: DEFAULT_THEME
};
var StyledDotsCircleThree = styled__default["default"](StyledDotsCircle).attrs(function () {
  return {
    cx: 71
  };
}).withConfig({
  displayName: "StyledDots__StyledDotsCircleThree",
  componentId: "sc-1ltah7e-3"
})(["animation:", ";"], function (_ref3) {
  var duration = _ref3.duration;
  return styled.css(["", " ", "ms linear infinite"], dotThreeKeyframes, duration);
});
StyledDotsCircleThree.defaultProps = {
  theme: DEFAULT_THEME
};
var COMPONENT_ID$5 = 'loaders.loading_placeholder';
var StyledLoadingPlaceholder = styled__default["default"].div.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '8.53.2',
  role: 'progressbar'
}).withConfig({
  displayName: "StyledLoadingPlaceholder",
  componentId: "sc-x3bwsx-0"
})(["display:inline-block;width:", ";height:", ";font-size:", ";", ""], function (props) {
  return props.width || '1em';
}, function (props) {
  return props.height || '0.9em';
}, function (props) {
  return props.fontSize;
}, function (props) {
  return retrieveComponentStyles(COMPONENT_ID$5, props);
});
StyledLoadingPlaceholder.defaultProps = {
  theme: DEFAULT_THEME
};

var sizeToHeight = function sizeToHeight(size, theme) {
  switch (size) {
    case 'small':
      return theme.space.base / 2;

    case 'medium':
      return theme.space.base * 1.5;

    default:
      return theme.space.base * 3;
  }
};

var sizeToBorderRadius = function sizeToBorderRadius(size, theme) {
  return sizeToHeight(size, theme) / 2;
};

var PROGRESS_BACKGROUND_COMPONENT_ID = 'loaders.progress_background';
var StyledProgressBackground = styled__default["default"].div.attrs(function (props) {
  return {
    'data-garden-id': PROGRESS_BACKGROUND_COMPONENT_ID,
    'data-garden-version': '8.53.2',
    borderRadius: props.borderRadius || sizeToBorderRadius(props.size, props.theme)
  };
}).withConfig({
  displayName: "StyledProgress__StyledProgressBackground",
  componentId: "sc-2g8w4s-0"
})(["margin:", "px 0;border-radius:", "px;background-color:", ";color:", ";", ""], function (props) {
  return props.theme.space.base * 2;
}, function (props) {
  return props.borderRadius;
}, function (props) {
  return getColor('neutralHue', 200, props.theme);
}, function (props) {
  return props.color || getColor('successHue', 600, props.theme);
}, function (props) {
  return retrieveComponentStyles(PROGRESS_BACKGROUND_COMPONENT_ID, props);
});
StyledProgressBackground.defaultProps = {
  theme: DEFAULT_THEME
};
var PROGESS_INDICATOR_COMPONENT_ID = 'loaders.progress_indicator';
var StyledProgressIndicator = styled__default["default"].div.attrs(function (props) {
  return {
    'data-garden-id': PROGESS_INDICATOR_COMPONENT_ID,
    'data-garden-version': '8.53.2',
    height: props.height || sizeToHeight(props.size, props.theme),
    borderRadius: props.borderRadius || sizeToBorderRadius(props.size, props.theme)
  };
}).withConfig({
  displayName: "StyledProgress__StyledProgressIndicator",
  componentId: "sc-2g8w4s-1"
})(["transition:width 0.1s ease-in-out;border-radius:", "px;background:currentColor;width:", "%;height:", "px;", ""], function (props) {
  return props.borderRadius;
}, function (props) {
  return props.value;
}, function (props) {
  return props.height;
}, function (props) {
  return retrieveComponentStyles(PROGESS_INDICATOR_COMPONENT_ID, props);
});
StyledProgressIndicator.defaultProps = {
  theme: DEFAULT_THEME
};
var COMPONENT_ID$4 = 'loaders.skeleton';
var fadeInAnimation = styled.keyframes(["0%,60%{opacity:0;}100%{opacity:1;}"]);
var skeletonAnimation = styled.keyframes(["100%{left:100%;}"]);
var skeletonRtlAnimation = styled.keyframes(["100%{right:100%;}"]);

var retrieveSkeletonBackgroundColor = function retrieveSkeletonBackgroundColor(_ref) {
  var theme = _ref.theme,
      isLight = _ref.isLight;

  if (isLight) {
    return styled.css(["background-color:", ";"], rgba(theme.colors.background, 0.2));
  }

  return styled.css(["background-color:", ";"], getColor('neutralHue', 800, theme, 0.1));
};

var retrieveSkeletonAnimation = function retrieveSkeletonAnimation(_ref2) {
  var theme = _ref2.theme;

  if (theme.rtl) {
    return styled.css(["right:-1800px;animation:", " 1.5s ease-in-out 300ms infinite;"], skeletonRtlAnimation);
  }

  return styled.css(["left:-1800px;animation:", " 1.5s ease-in-out 300ms infinite;"], skeletonAnimation);
};

var retrieveSkeletonGradient = function retrieveSkeletonGradient(_ref3) {
  var theme = _ref3.theme,
      isLight = _ref3.isLight;
  return styled.css(["background-image:linear-gradient( ", ",transparent,", ",transparent );"], theme.rtl ? '-45deg' : '45deg', isLight ? getColor('chromeHue', 700, theme, 0.4) : rgba(theme.colors.background, 0.6));
};

var StyledSkeleton = styled__default["default"].div.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '8.53.2'
}).withConfig({
  displayName: "StyledSkeleton",
  componentId: "sc-1raozze-0"
})(["display:inline-block;position:relative;animation:", " 750ms linear;border-radius:", ";width:", ";height:", ";overflow:hidden;line-height:", ";", " &::before{position:absolute;top:0;width:1000px;height:100%;content:'';", " ", "}", ";"], fadeInAnimation, function (props) {
  return props.theme.borderRadii.md;
}, function (props) {
  return props.customWidth;
}, function (props) {
  return props.customHeight;
}, function (props) {
  return getLineHeight(props.theme.fontSizes.sm, props.theme.space.base * 5);
}, retrieveSkeletonBackgroundColor, retrieveSkeletonAnimation, retrieveSkeletonGradient, function (props) {
  return retrieveComponentStyles(COMPONENT_ID$4, props);
});
StyledSkeleton.defaultProps = {
  theme: DEFAULT_THEME
};
var StyledSpinnerCircle = styled__default["default"].circle.attrs(function (props) {
  return {
    cx: 40,
    cy: 40,
    r: 34,
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeWidth: props.strokeWidthValue,
    strokeDasharray: "".concat(props.dasharrayValue, " 250"),
    transform: props.transform
  };
}).withConfig({
  displayName: "StyledSpinnerCircle",
  componentId: "sc-o4kd70-0"
})([""]);
StyledSpinnerCircle.defaultProps = {
  theme: DEFAULT_THEME
};
var StyledSVG = styled__default["default"].svg.attrs(function (props) {
  return {
    'data-garden-version': '8.53.2',
    xmlns: 'http://www.w3.org/2000/svg',
    width: props.width,
    height: props.height,
    focusable: 'false',
    viewBox: "0 0 ".concat(props.width, " ").concat(props.height),
    role: 'progressbar'
  };
}).withConfig({
  displayName: "StyledSVG",
  componentId: "sc-1xtc3kx-0"
})(["width:", ";height:", ";color:", ";font-size:", ";", ";"], function (props) {
  return props.containerWidth || '1em';
}, function (props) {
  return props.containerHeight || '0.9em';
}, function (props) {
  return props.color || 'inherit';
}, function (props) {
  return props.fontSize || 'inherit';
}, function (props) {
  return retrieveComponentStyles(props.dataGardenId, props);
});
StyledSVG.defaultProps = {
  theme: DEFAULT_THEME
};
var COMPONENT_ID$3 = 'loaders.inline';
var PULSE_ANIMATION = styled.keyframes(["0%,100%{opacity:.2;}50%{opacity:.8;}"]);
var StyledCircle = styled__default["default"].circle.attrs({
  fill: 'currentColor',
  cy: 2,
  r: 2
}).withConfig({
  displayName: "StyledInline__StyledCircle",
  componentId: "sc-fxsb9l-0"
})([""]);
StyledCircle.defaultProps = {
  theme: DEFAULT_THEME
};
var StyledInline = styled__default["default"].svg.attrs(function (props) {
  return {
    'data-garden-id': COMPONENT_ID$3,
    'data-garden-version': '8.53.2',
    viewBox: '0 0 16 4',
    width: props.size,
    height: props.size * 0.25
  };
}).withConfig({
  displayName: "StyledInline",
  componentId: "sc-fxsb9l-1"
})(["color:", ";", "{opacity:0.2;&:nth-child(1){animation:", " 1s infinite;animation-delay:", ";}&:nth-child(2){animation:", " 1s infinite;animation-delay:0.2s;}&:nth-child(3){animation:", " 1s infinite;animation-delay:", ";}}", ""], function (props) {
  return props.color;
}, StyledCircle, PULSE_ANIMATION, function (props) {
  return props.theme.rtl ? 'unset' : '0.4s';
}, PULSE_ANIMATION, PULSE_ANIMATION, function (props) {
  return props.theme.rtl ? '0.4s' : 'unset';
}, function (props) {
  return retrieveComponentStyles(COMPONENT_ID$3, props);
});
StyledInline.defaultProps = {
  theme: DEFAULT_THEME
};
var _excluded$4 = ["size", "color", "duration", "delayMS"];
var COMPONENT_ID$2 = 'loaders.dots';
var Dots$1 = React.forwardRef(function (_ref, ref) {
  var size = _ref.size,
      color = _ref.color,
      duration = _ref.duration,
      delayMS = _ref.delayMS,
      other = _objectWithoutProperties(_ref, _excluded$4);

  var theme = React.useContext(styled.ThemeContext);
  var environment = useDocument(theme);
  var canTransformSVG = React.useRef(null);

  if (environment && canTransformSVG.current === null) {
    var svg = environment.createElementNS('http://www.w3.org/2000/svg', 'svg');
    canTransformSVG.current = 'transform' in svg;
  }

  var _useSchedule = useSchedule({
    duration: duration,
    delayMS: delayMS,
    loop: true
  }),
      delayComplete = _useSchedule.delayComplete;

  var dotOne = React.useRef(null);
  var dotTwo = React.useRef(null);
  var dotThree = React.useRef(null);
  React.useEffect(function () {
    if (!canTransformSVG.current && delayComplete) {
      var transforms = [window.getComputedStyle(dotOne.current).getPropertyValue('transform'), window.getComputedStyle(dotTwo.current).getPropertyValue('transform'), window.getComputedStyle(dotThree.current).getPropertyValue('transform')];
      dotOne.current.setAttribute('transform', transforms[0]);
      dotTwo.current.setAttribute('transform', transforms[1]);
      dotThree.current.setAttribute('transform', transforms[2]);
    }
  });

  if (!delayComplete && delayMS !== 0) {
    return React__default["default"].createElement(StyledLoadingPlaceholder, {
      fontSize: size
    }, "\xA0");
  }

  return React__default["default"].createElement(StyledSVG, _extends({
    ref: ref,
    fontSize: size,
    color: color,
    width: "80",
    height: "72",
    dataGardenId: COMPONENT_ID$2
  }, other), React__default["default"].createElement("g", {
    fill: "currentColor"
  }, React__default["default"].createElement(StyledDotsCircleOne, {
    duration: duration,
    ref: dotOne
  }), React__default["default"].createElement(StyledDotsCircleTwo, {
    duration: duration,
    ref: dotTwo
  }), React__default["default"].createElement(StyledDotsCircleThree, {
    duration: duration,
    ref: dotThree
  })));
});
Dots$1.displayName = 'Dots';
Dots$1.propTypes = {
  size: propTypes.exports.any,
  duration: propTypes.exports.number,
  color: propTypes.exports.string,
  delayMS: propTypes.exports.number
};
Dots$1.defaultProps = {
  size: 'inherit',
  color: 'inherit',
  duration: 1250,
  delayMS: 750
};
var SIZE = ['small', 'medium', 'large'];
var _excluded$3 = ["value", "size"];
var COMPONENT_ID$1 = 'loaders.progress';
var Progress = React__default["default"].forwardRef(function (_ref, ref) {
  var value = _ref.value,
      size = _ref.size,
      other = _objectWithoutProperties(_ref, _excluded$3);

  var percentage = Math.max(0, Math.min(100, value));
  return React__default["default"].createElement(StyledProgressBackground, _extends({
    "data-garden-id": COMPONENT_ID$1,
    "data-garden-version": '8.53.2',
    "aria-valuemax": 100,
    "aria-valuemin": 0,
    "aria-valuenow": percentage,
    role: "progressbar",
    size: size,
    ref: ref
  }, other), React__default["default"].createElement(StyledProgressIndicator, {
    value: percentage,
    size: size
  }));
});
Progress.displayName = 'Progress';
Progress.propTypes = {
  color: propTypes.exports.string,
  value: propTypes.exports.number.isRequired,
  size: propTypes.exports.oneOf(SIZE)
};
Progress.defaultProps = {
  value: 0,
  size: 'medium'
};
var _excluded$2 = ["width", "height", "isLight"];
var Skeleton = React.forwardRef(function (_ref, ref) {
  var width = _ref.width,
      height = _ref.height,
      isLight = _ref.isLight,
      other = _objectWithoutProperties(_ref, _excluded$2);

  return React__default["default"].createElement(StyledSkeleton, _extends({
    ref: ref,
    isLight: isLight,
    customWidth: width,
    customHeight: height
  }, other), "\xA0");
});
Skeleton.displayName = 'Skeleton';
Skeleton.propTypes = {
  width: propTypes.exports.string,
  height: propTypes.exports.string,
  isLight: propTypes.exports.bool
};
Skeleton.defaultProps = {
  width: '100%',
  height: '100%'
};
var STROKE_WIDTH_FRAMES = {
  0: 6,
  14: 5,
  26: 4,
  36: 3,
  46: 2,
  58: 3,
  70: 4,
  80: 5,
  91: 6
};
var ROTATION_FRAMES = {
  0: -90,
  8: -81,
  36: -30,
  41: -18,
  44: -8,
  48: 0,
  55: 22,
  63: 53,
  64: 62,
  66: 67,
  68: 78,
  69: 90,
  71: 99,
  73: 112,
  74: 129,
  76: 138,
  78: 159,
  79: 180,
  81: 190,
  83: 207,
  84: 221,
  86: 226,
  88: 235,
  90: 243,
  99: 270
};
var DASHARRAY_FRAMES = {
  0: 0,
  13: 2,
  26: 13,
  53: 86,
  58: 90,
  63: 89,
  64: 88,
  66: 86,
  68: 83,
  69: 81,
  71: 76,
  73: 70,
  74: 62,
  76: 58,
  78: 47,
  79: 37,
  81: 31,
  83: 23,
  84: 16,
  88: 10,
  89: 7,
  98: 1,
  99: 0
};
var _excluded$1 = ["size", "duration", "color", "delayMS"];
var COMPONENT_ID = 'loaders.spinner';
var TOTAL_FRAMES = 100;

var computeFrames = function computeFrames(frames, duration) {
  return Object.entries(frames).reduce(function (acc, item, index, arr) {
    var _item = _slicedToArray(item, 2),
        frame = _item[0],
        value = _item[1];

    var _ref = arr[index + 1] || [TOTAL_FRAMES, arr[0][1]],
        _ref2 = _slicedToArray(_ref, 2),
        nextFrame = _ref2[0],
        nextValue = _ref2[1];

    var diff = parseInt(nextFrame, 10) - parseInt(frame, 10);
    var frameHz = 1000 / 60;
    var subDuration = duration / (TOTAL_FRAMES - 1) * diff;
    var lastValue = value;
    acc[frame] = value;

    for (var idx = 0; idx < diff; idx++) {
      lastValue = lastValue + (nextValue - lastValue) * (frameHz / subDuration);
      subDuration = duration / (TOTAL_FRAMES - 1) * (diff - idx);
      acc[parseInt(frame, 10) + idx + 1] = lastValue;
    }

    acc[nextFrame] = nextValue;
    return acc;
  }, {});
};

var Spinner = React.forwardRef(function (_ref3, ref) {
  var size = _ref3.size,
      duration = _ref3.duration,
      color = _ref3.color,
      delayMS = _ref3.delayMS,
      other = _objectWithoutProperties(_ref3, _excluded$1);

  var strokeWidthValues = computeFrames(STROKE_WIDTH_FRAMES, duration);
  var rotationValues = computeFrames(ROTATION_FRAMES, duration);
  var dasharrayValues = computeFrames(DASHARRAY_FRAMES, duration);

  var _useSchedule = useSchedule({
    duration: duration,
    delayMS: delayMS
  }),
      elapsed = _useSchedule.elapsed,
      delayComplete = _useSchedule.delayComplete;

  var frame = (elapsed * 100).toFixed(0);
  var strokeWidthValue = strokeWidthValues[frame];
  var rotationValue = rotationValues[frame];
  var dasharrayValue = dasharrayValues[frame];
  var WIDTH = 80;
  var HEIGHT = 80;

  if (!delayComplete && delayMS !== 0) {
    return React__default["default"].createElement(StyledLoadingPlaceholder, {
      width: "1em",
      height: "1em",
      fontSize: size
    }, "\xA0");
  }

  return React__default["default"].createElement(StyledSVG, _extends({
    ref: ref,
    fontSize: size,
    color: color,
    width: WIDTH,
    height: HEIGHT,
    dataGardenId: COMPONENT_ID,
    containerHeight: "1em",
    containerWidth: "1em"
  }, other), React__default["default"].createElement(StyledSpinnerCircle, {
    dasharrayValue: dasharrayValue,
    strokeWidthValue: strokeWidthValue,
    transform: "rotate(".concat(rotationValue, ", ").concat(WIDTH / 2, ", ").concat(HEIGHT / 2, ")")
  }));
});
Spinner.displayName = 'Spinner';
Spinner.propTypes = {
  size: propTypes.exports.any,
  duration: propTypes.exports.number,
  color: propTypes.exports.string,
  delayMS: propTypes.exports.number
};
Spinner.defaultProps = {
  size: 'inherit',
  duration: 1250,
  color: 'inherit',
  delayMS: 750
};
var _excluded = ["size", "color"];
var Inline = React.forwardRef(function (_ref, ref) {
  var size = _ref.size,
      color = _ref.color,
      other = _objectWithoutProperties(_ref, _excluded);

  return React__default["default"].createElement(StyledInline, _extends({
    ref: ref,
    size: size,
    color: color
  }, other), React__default["default"].createElement(StyledCircle, {
    cx: "14"
  }), React__default["default"].createElement(StyledCircle, {
    cx: "8"
  }), React__default["default"].createElement(StyledCircle, {
    cx: "2"
  }));
});
Inline.displayName = 'Inline';
Inline.propTypes = {
  size: propTypes.exports.number,
  color: propTypes.exports.string
};
Inline.defaultProps = {
  size: 16,
  color: 'inherit'
};
var XXS = ".8rem";
var XS = ".9rem";
var SM = "1rem";
var MD = "1.3rem";
var LG = "1.7rem";
var XL = "2.3rem";
var XXL = "3.3rem"; // h1

var XXXL = "4rem";
var XXXXL = "5rem";
var XXXXXL = "6rem";
var FONT_SIZES = {
  XXS: XXS,
  XS: XS,
  SM: SM,
  MD: MD,
  LG: LG,
  XL: XL,
  XXL: XXL,
  XXXL: XXXL,
  XXXXL: XXXXL,
  XXXXXL: XXXXXL
};
Object.freeze({
  XXS: XXS.replace("r", ""),
  XS: XS.replace("r", ""),
  SM: SM.replace("r", ""),
  MD: MD.replace("r", ""),
  LG: LG.replace("r", ""),
  XL: XL.replace("r", ""),
  XXL: XXL.replace("r", ""),
  XXXL: XXXL.replace("r", ""),
  XXXXL: XXXXL.replace("r", ""),
  XXXXXL: XXXXXL.replace("r", "")
});

var Dots = function (_a) {
  var color = _a.color,
      _b = _a.size,
      size = _b === void 0 ? FONT_SIZES.XXL : _b;
  return jsxRuntime.jsx(Dots$1, {
    color: color,
    size: size,
    delayMS: 100,
    duration: 1000
  });
};

var useIsMounted = function () {
  var isMounted = React.useRef();
  React.useEffect(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  return function () {
    return !!isMounted.current;
  };
};

var LEVEL_STYLES = {
  info: "background: #499cc8; color: white;",
  error: "background: #c14a4f; color: white;",
  warn: "background: #e0a270; color: black;"
};

var Logger =
/** @class */
function () {
  function Logger(moduleName) {
    var _this = this;

    this.log = function (level) {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (typeof window === "undefined" || !window.DEBUG_MODULES.has(_this.moduleName)) return;
        console[level].apply(console, __spreadArray(["%c".concat(_this.moduleName), "".concat(LEVEL_STYLES[level], " padding: 2px 6px;")], __read(args), false));
      };
    };

    this.writeInfo = this.log("info");
    this.writeError = this.log("error");
    this.writeWarning = this.log("warn");
    this.moduleName = moduleName;
  }

  return Logger;
}();

if (typeof window !== "undefined") {
  window.DEBUG_MODULES = new Set([// "Dropdown",
    // "SearchableSelector",
  ]);
}

var logger = new Logger("Loadable");
var Container$1 = styled__default["default"](FlexBox)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  //height: 100%;\n  width: 100%;\n  position: relative;\n"], ["\n  //height: 100%;\n  width: 100%;\n  position: relative;\n"])));
var LoaderContainer = styled__default["default"](FlexBox)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n"], ["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n"])));
var ChildrenContainer = styled__default["default"](FlexBox)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  width: 100%;\n  opacity: ", ";\n"], ["\n  width: 100%;\n  opacity: ", ";\n"])), function (_a) {
  var showSpinner = _a.showSpinner,
      opaqueSpinner = _a.opaqueSpinner;
  if (!showSpinner) return "1";
  return opaqueSpinner ? "0" : ".3";
});

exports.Loadable = function (_a) {
  var _b;

  var children = _a.children,
      className = _a.className,
      debugId = _a.debugId,
      _c = _a.opaqueSpinner,
      opaqueSpinner = _c === void 0 ? false : _c,
      _d = _a.showSpinner,
      showSpinner = _d === void 0 ? false : _d;
  logger.writeInfo("Rendering id:", debugId, "showSpinner", showSpinner);
  var isMounted = useIsMounted();
  var theme = React.useContext(styled.ThemeContext);
  var canHideSpinner = (_b = __read(React.useState(true), 2), _b[0]),
      setCanHideSpinner = _b[1];
  React.useEffect(function () {
    if (!showSpinner) return;
    setCanHideSpinner(false);
    setTimeout(function () {
      logger.writeInfo("setting setCanHideSpinner true id:", debugId);
      if (isMounted()) setCanHideSpinner(true);
    }, 500);
  }, [debugId, isMounted, showSpinner]);
  var showingSpinner = showSpinner || !canHideSpinner;
  return jsxRuntime.jsxs(Container$1, __assign({
    justifyContent: "center",
    gap: "unset",
    alignItems: "center"
  }, {
    children: [jsxRuntime.jsx(ChildrenContainer, __assign({
      gap: "unset",
      className: className,
      opaqueSpinner: opaqueSpinner,
      showSpinner: showingSpinner,
      withRows: true
    }, {
      children: children
    })), showingSpinner ? jsxRuntime.jsx(LoaderContainer, __assign({
      justifyContent: "center",
      alignItems: "center",
      showSpinner: showingSpinner
    }, {
      children: jsxRuntime.jsx(Dots, {
        color: theme.styles.colorPrimary,
        size: FONT_SIZES.XXL
      })
    })) : null]
  }));
};

exports.Loadable = styled__default["default"](exports.Loadable)(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4;

exports.TranslucentLoader = function (_a) {
  var _css = _a._css,
      children = _a.children,
      className = _a.className,
      innerAs = _a.innerAs,
      _b = _a.isLoading,
      isLoading = _b === void 0 ? true : _b;
  var theme = React.useContext(styled.ThemeContext);
  return jsxRuntime.jsxs(Container, __assign({
    as: innerAs,
    className: className,
    _css: _css
  }, {
    children: [children, isLoading ? jsxRuntime.jsx(SpinnerContainer, __assign({
      alignItems: "center",
      justifyContent: "center"
    }, {
      children: jsxRuntime.jsx(Dots, {
        color: theme.styles.colorPrimary
      })
    })) : null]
  }));
};

exports.TranslucentLoader = styled__default["default"](exports.TranslucentLoader)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var Container = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  ", "\n"], ["\n  position: relative;\n  ", "\n"])), function (_a) {
  var _css = _a._css;
  return _css ? _css : "";
});
var SpinnerContainer = styled__default["default"](FlexBox)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: white;\n  opacity: .7;\n  top: 0;\n  left: 0;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n"], ["\n  background: white;\n  opacity: .7;\n  top: 0;\n  left: 0;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
exports.Dots = Dots;
//# sourceMappingURL=loaders.js.map
