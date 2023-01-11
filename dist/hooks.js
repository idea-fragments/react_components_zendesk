Object.defineProperty(exports, '__esModule', {
  value: true
});

var jsxRuntime = require('react/jsx-runtime');

var styled = require('styled-components');

var React = require('react');

var mobx = require('mobx');

var mobxReact = require('mobx-react');

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

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
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
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
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

var logger$1 = new Logger("Loadable");
var Container$1 = styled__default["default"](FlexBox)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  //height: 100%;\n  width: 100%;\n  position: relative;\n"], ["\n  //height: 100%;\n  width: 100%;\n  position: relative;\n"])));
var LoaderContainer = styled__default["default"](FlexBox)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n"], ["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n"])));
var ChildrenContainer = styled__default["default"](FlexBox)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  width: 100%;\n  opacity: ", ";\n"], ["\n  width: 100%;\n  opacity: ", ";\n"])), function (_a) {
  var showSpinner = _a.showSpinner,
      opaqueSpinner = _a.opaqueSpinner;
  if (!showSpinner) return "1";
  return opaqueSpinner ? "0" : ".3";
});

var Loadable = function (_a) {
  var _b;

  var children = _a.children,
      className = _a.className,
      debugId = _a.debugId,
      _c = _a.opaqueSpinner,
      opaqueSpinner = _c === void 0 ? false : _c,
      _d = _a.showSpinner,
      showSpinner = _d === void 0 ? false : _d;
  logger$1.writeInfo("Rendering id:", debugId, "showSpinner", showSpinner);
  var isMounted = useIsMounted();
  var theme = React.useContext(styled.ThemeContext);
  var canHideSpinner = (_b = __read(React.useState(true), 2), _b[0]),
      setCanHideSpinner = _b[1];
  React.useEffect(function () {
    if (!showSpinner) return;
    setCanHideSpinner(false);
    setTimeout(function () {
      logger$1.writeInfo("setting setCanHideSpinner true id:", debugId);
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

Loadable = styled__default["default"](Loadable)(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4;

function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var moment$1 = {
  exports: {}
};

(function (module, exports) {
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function () {
    var hookCallback;

    function hooks() {
      return hookCallback.apply(null, arguments);
    } // This is done to register the method called with moment()
    // without creating circular dependencies.


    function setHookCallback(callback) {
      hookCallback = callback;
    }

    function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
      // IE8 will treat undefined and null as object if it wasn't for
      // input != null
      return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function hasOwnProp(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
      } else {
        var k;

        for (k in obj) {
          if (hasOwnProp(obj, k)) {
            return false;
          }
        }

        return true;
      }
    }

    function isUndefined(input) {
      return input === void 0;
    }

    function isNumber(input) {
      return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
      var res = [],
          i,
          arrLen = arr.length;

      for (i = 0; i < arrLen; ++i) {
        res.push(fn(arr[i], i));
      }

      return res;
    }

    function extend(a, b) {
      for (var i in b) {
        if (hasOwnProp(b, i)) {
          a[i] = b[i];
        }
      }

      if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
      }

      if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
      }

      return a;
    }

    function createUTC(input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
      // We need to deep clone this object.
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
      };
    }

    function getParsingFlags(m) {
      if (m._pf == null) {
        m._pf = defaultParsingFlags();
      }

      return m._pf;
    }

    var some;

    if (Array.prototype.some) {
      some = Array.prototype.some;
    } else {
      some = function (fun) {
        var t = Object(this),
            len = t.length >>> 0,
            i;

        for (i = 0; i < len; i++) {
          if (i in t && fun.call(this, t[i], i, t)) {
            return true;
          }
        }

        return false;
      };
    }

    function isValid(m) {
      if (m._isValid == null) {
        var flags = getParsingFlags(m),
            parsedParts = some.call(flags.parsedDateParts, function (i) {
          return i != null;
        }),
            isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

        if (m._strict) {
          isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
          m._isValid = isNowValid;
        } else {
          return isNowValid;
        }
      }

      return m._isValid;
    }

    function createInvalid(flags) {
      var m = createUTC(NaN);

      if (flags != null) {
        extend(getParsingFlags(m), flags);
      } else {
        getParsingFlags(m).userInvalidated = true;
      }

      return m;
    } // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.


    var momentProperties = hooks.momentProperties = [],
        updateInProgress = false;

    function copyConfig(to, from) {
      var i,
          prop,
          val,
          momentPropertiesLen = momentProperties.length;

      if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
      }

      if (!isUndefined(from._i)) {
        to._i = from._i;
      }

      if (!isUndefined(from._f)) {
        to._f = from._f;
      }

      if (!isUndefined(from._l)) {
        to._l = from._l;
      }

      if (!isUndefined(from._strict)) {
        to._strict = from._strict;
      }

      if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
      }

      if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
      }

      if (!isUndefined(from._offset)) {
        to._offset = from._offset;
      }

      if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
      }

      if (!isUndefined(from._locale)) {
        to._locale = from._locale;
      }

      if (momentPropertiesLen > 0) {
        for (i = 0; i < momentPropertiesLen; i++) {
          prop = momentProperties[i];
          val = from[prop];

          if (!isUndefined(val)) {
            to[prop] = val;
          }
        }
      }

      return to;
    } // Moment prototype object


    function Moment(config) {
      copyConfig(this, config);
      this._d = new Date(config._d != null ? config._d.getTime() : NaN);

      if (!this.isValid()) {
        this._d = new Date(NaN);
      } // Prevent infinite loop in case updateOffset creates new moment
      // objects.


      if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
      }
    }

    function isMoment(obj) {
      return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }

    function warn(msg) {
      if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
        console.warn('Deprecation warning: ' + msg);
      }
    }

    function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function () {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(null, msg);
        }

        if (firstTime) {
          var args = [],
              arg,
              i,
              key,
              argLen = arguments.length;

          for (i = 0; i < argLen; i++) {
            arg = '';

            if (typeof arguments[i] === 'object') {
              arg += '\n[' + i + '] ';

              for (key in arguments[0]) {
                if (hasOwnProp(arguments[0], key)) {
                  arg += key + ': ' + arguments[0][key] + ', ';
                }
              }

              arg = arg.slice(0, -2); // Remove trailing comma and space
            } else {
              arg = arguments[i];
            }

            args.push(arg);
          }

          warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
          firstTime = false;
        }

        return fn.apply(this, arguments);
      }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
      }

      if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
      }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
      return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set(config) {
      var prop, i;

      for (i in config) {
        if (hasOwnProp(config, i)) {
          prop = config[i];

          if (isFunction(prop)) {
            this[i] = prop;
          } else {
            this['_' + i] = prop;
          }
        }
      }

      this._config = config; // Lenient ordinal parsing accepts just a number in addition to
      // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
      // TODO: Remove "ordinalParse" fallback in next major release.

      this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }

    function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig),
          prop;

      for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
          if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
            res[prop] = {};
            extend(res[prop], parentConfig[prop]);
            extend(res[prop], childConfig[prop]);
          } else if (childConfig[prop] != null) {
            res[prop] = childConfig[prop];
          } else {
            delete res[prop];
          }
        }
      }

      for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
          // make sure changes to properties don't modify parent config
          res[prop] = extend({}, res[prop]);
        }
      }

      return res;
    }

    function Locale(config) {
      if (config != null) {
        this.set(config);
      }
    }

    var keys;

    if (Object.keys) {
      keys = Object.keys;
    } else {
      keys = function (obj) {
        var i,
            res = [];

        for (i in obj) {
          if (hasOwnProp(obj, i)) {
            res.push(i);
          }
        }

        return res;
      };
    }

    var defaultCalendar = {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    };

    function calendar(key, mom, now) {
      var output = this._calendar[key] || this._calendar['sameElse'];
      return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
      var absNumber = '' + Math.abs(number),
          zerosToFill = targetLength - absNumber.length,
          sign = number >= 0;
      return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {}; // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }

    function addFormatToken(token, padded, ordinal, callback) {
      var func = callback;

      if (typeof callback === 'string') {
        func = function () {
          return this[callback]();
        };
      }

      if (token) {
        formatTokenFunctions[token] = func;
      }

      if (padded) {
        formatTokenFunctions[padded[0]] = function () {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
      }

      if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
          return this.localeData().ordinal(func.apply(this, arguments), token);
        };
      }
    }

    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
      }

      return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
      var array = format.match(formattingTokens),
          i,
          length;

      for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }

      return function (mom) {
        var output = '',
            i;

        for (i = 0; i < length; i++) {
          output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }

        return output;
      };
    } // format date using native date object


    function formatMoment(m, format) {
      if (!m.isValid()) {
        return m.localeData().invalidDate();
      }

      format = expandFormat(format, m.localeData());
      formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
      return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
      var i = 5;

      function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
      }

      localFormattingTokens.lastIndex = 0;

      while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
      }

      return format;
    }

    var defaultLongDateFormat = {
      LTS: 'h:mm:ss A',
      LT: 'h:mm A',
      L: 'MM/DD/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat(key) {
      var format = this._longDateFormat[key],
          formatUpper = this._longDateFormat[key.toUpperCase()];

      if (format || !formatUpper) {
        return format;
      }

      this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function (tok) {
        if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') {
          return tok.slice(1);
        }

        return tok;
      }).join('');
      return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
      return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
      return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      w: 'a week',
      ww: '%d weeks',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
      var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
      return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
      var lowerCase = unit.toLowerCase();
      aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
      return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {},
          normalizedProp,
          prop;

      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);

          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }

      return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
      priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
      var units = [],
          u;

      for (u in unitsObj) {
        if (hasOwnProp(unitsObj, u)) {
          units.push({
            unit: u,
            priority: priorities[u]
          });
        }
      }

      units.sort(function (a, b) {
        return a.priority - b.priority;
      });
      return units;
    }

    function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }

    function absFloor(number) {
      if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
      } else {
        return Math.floor(number);
      }
    }

    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion,
          value = 0;

      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
      }

      return value;
    }

    function makeGetSet(unit, keepTime) {
      return function (value) {
        if (value != null) {
          set$1(this, unit, value);
          hooks.updateOffset(this, keepTime);
          return this;
        } else {
          return get(this, unit);
        }
      };
    }

    function get(mom, unit) {
      return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1(mom, unit, value) {
      if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
          value = toInt(value);

          mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        } else {
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
      }
    } // MOMENTS


    function stringGet(units) {
      units = normalizeUnits(units);

      if (isFunction(this[units])) {
        return this[units]();
      }

      return this;
    }

    function stringSet(units, value) {
      if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units),
            i,
            prioritizedLen = prioritized.length;

        for (i = 0; i < prioritizedLen; i++) {
          this[prioritized[i].unit](units[prioritized[i].unit]);
        }
      } else {
        units = normalizeUnits(units);

        if (isFunction(this[units])) {
          return this[units](value);
        }
      }

      return this;
    }

    var match1 = /\d/,
        //       0 - 9
    match2 = /\d\d/,
        //      00 - 99
    match3 = /\d{3}/,
        //     000 - 999
    match4 = /\d{4}/,
        //    0000 - 9999
    match6 = /[+-]?\d{6}/,
        // -999999 - 999999
    match1to2 = /\d\d?/,
        //       0 - 99
    match3to4 = /\d\d\d\d?/,
        //     999 - 9999
    match5to6 = /\d\d\d\d\d\d?/,
        //   99999 - 999999
    match1to3 = /\d{1,3}/,
        //       0 - 999
    match1to4 = /\d{1,4}/,
        //       0 - 9999
    match1to6 = /[+-]?\d{1,6}/,
        // -999999 - 999999
    matchUnsigned = /\d+/,
        //       0 - inf
    matchSigned = /[+-]?\d+/,
        //    -inf - inf
    matchOffset = /Z|[+-]\d\d:?\d\d/gi,
        // +00:00 -00:00 +0000 -0000 or Z
    matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi,
        // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
        // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        regexes;
    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
      regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return isStrict && strictRegex ? strictRegex : regex;
      };
    }

    function getParseRegexForToken(token, config) {
      if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
      }

      return regexes[token](config._strict, config._locale);
    } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


    function unescapeFormat(s) {
      return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
      }));
    }

    function regexEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
      var i,
          func = callback,
          tokenLen;

      if (typeof token === 'string') {
        token = [token];
      }

      if (isNumber(callback)) {
        func = function (input, array) {
          array[callback] = toInt(input);
        };
      }

      tokenLen = token.length;

      for (i = 0; i < tokenLen; i++) {
        tokens[token[i]] = func;
      }
    }

    function addWeekParseToken(token, callback) {
      addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
      });
    }

    function addTimeToArrayFromToken(token, input, config) {
      if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
      }
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    function mod(n, x) {
      return (n % x + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function (o) {
        // I know
        var i;

        for (i = 0; i < this.length; ++i) {
          if (this[i] === o) {
            return i;
          }
        }

        return -1;
      };
    }

    function daysInMonth(year, month) {
      if (isNaN(year) || isNaN(month)) {
        return NaN;
      }

      var modMonth = mod(month, 12);
      year += (month - modMonth) / 12;
      return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    } // FORMATTING


    addFormatToken('M', ['MM', 2], 'Mo', function () {
      return this.month() + 1;
    });
    addFormatToken('MMM', 0, 0, function (format) {
      return this.localeData().monthsShort(this, format);
    });
    addFormatToken('MMMM', 0, 0, function (format) {
      return this.localeData().months(this, format);
    }); // ALIASES

    addUnitAlias('month', 'M'); // PRIORITY

    addUnitPriority('month', 8); // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
      return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
      return locale.monthsRegex(isStrict);
    });
    addParseToken(['M', 'MM'], function (input, array) {
      array[MONTH] = toInt(input) - 1;
    });
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
      var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


      if (month != null) {
        array[MONTH] = month;
      } else {
        getParsingFlags(config).invalidMonth = input;
      }
    }); // LOCALES

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
      if (!m) {
        return isArray(this._months) ? this._months : this._months['standalone'];
      }

      return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    function localeMonthsShort(m, format) {
      if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
      }

      return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
      var i,
          ii,
          mom,
          llc = monthName.toLocaleLowerCase();

      if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];

        for (i = 0; i < 12; ++i) {
          mom = createUTC([2000, i]);
          this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
          this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
      }

      if (strict) {
        if (format === 'MMM') {
          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format === 'MMM') {
          ii = indexOf.call(this._shortMonthsParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }

    function localeMonthsParse(monthName, format, strict) {
      var i, mom, regex;

      if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
      }

      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      } // TODO: add sorting
      // Sorting makes sure if one month (or abbr) is a prefix of another
      // see sorting in computeMonthsParse


      for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);

        if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
          this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }

        if (!strict && !this._monthsParse[i]) {
          regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
          this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        } // test the regex


        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
          return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
          return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    } // MOMENTS


    function setMonth(mom, value) {
      var dayOfMonth;

      if (!mom.isValid()) {
        // No op
        return mom;
      }

      if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
          value = toInt(value);
        } else {
          value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

          if (!isNumber(value)) {
            return mom;
          }
        }
      }

      dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

      mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

      return mom;
    }

    function getSetMonth(value) {
      if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
      } else {
        return get(this, 'Month');
      }
    }

    function getDaysInMonth() {
      return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
        }

        if (isStrict) {
          return this._monthsShortStrictRegex;
        } else {
          return this._monthsShortRegex;
        }
      } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
          this._monthsShortRegex = defaultMonthsShortRegex;
        }

        return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
      }
    }

    function monthsRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
        }

        if (isStrict) {
          return this._monthsStrictRegex;
        } else {
          return this._monthsRegex;
        }
      } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
          this._monthsRegex = defaultMonthsRegex;
        }

        return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
      }
    }

    function computeMonthsParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }

      var shortPieces = [],
          longPieces = [],
          mixedPieces = [],
          i,
          mom;

      for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
      } // Sorting makes sure if one month (or abbr) is a prefix of another it
      // will match the longer piece.


      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);

      for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
      }

      for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
      this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    } // FORMATTING


    addFormatToken('Y', 0, 0, function () {
      var y = this.year();
      return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });
    addFormatToken(0, ['YY', 2], 0, function () {
      return this.year() % 100;
    });
    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

    addUnitAlias('year', 'y'); // PRIORITIES

    addUnitPriority('year', 1); // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
      array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
      array[YEAR] = parseInt(input, 10);
    }); // HELPERS

    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    } // HOOKS


    hooks.parseTwoDigitYear = function (input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    }; // MOMENTS


    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
      return isLeapYear(this.year());
    }

    function createDate(y, m, d, h, M, s, ms) {
      // can't just apply() to create a date:
      // https://stackoverflow.com/q/181348
      var date; // the date constructor remaps years 0-99 to 1900-1999

      if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        date = new Date(y + 400, m, d, h, M, s, ms);

        if (isFinite(date.getFullYear())) {
          date.setFullYear(y);
        }
      } else {
        date = new Date(y, m, d, h, M, s, ms);
      }

      return date;
    }

    function createUTCDate(y) {
      var date, args; // the Date.UTC function remaps years 0-99 to 1900-1999

      if (y < 100 && y >= 0) {
        args = Array.prototype.slice.call(arguments); // preserve leap years using a full 400 year cycle, then reset

        args[0] = y + 400;
        date = new Date(Date.UTC.apply(null, args));

        if (isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(y);
        }
      } else {
        date = new Date(Date.UTC.apply(null, arguments));
      }

      return date;
    } // start-of-first-week - start-of-year


    function firstWeekOffset(year, dow, doy) {
      var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
      fwd = 7 + dow - doy,
          // first-week day local weekday -- which local weekday is fwd
      fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7,
          weekOffset = firstWeekOffset(year, dow, doy),
          dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
          resYear,
          resDayOfYear;

      if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
      } else {
        resYear = year;
        resDayOfYear = dayOfYear;
      }

      return {
        year: resYear,
        dayOfYear: resDayOfYear
      };
    }

    function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy),
          week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
          resWeek,
          resYear;

      if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
      } else {
        resYear = mom.year();
        resWeek = week;
      }

      return {
        week: resWeek,
        year: resYear
      };
    }

    function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy),
          weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    } // FORMATTING


    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W'); // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5); // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
      week[token.substr(0, 1)] = toInt(input);
    }); // HELPERS
    // LOCALES

    function localeWeek(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.

    };

    function localeFirstDayOfWeek() {
      return this._week.dow;
    }

    function localeFirstDayOfYear() {
      return this._week.doy;
    } // MOMENTS


    function getSetWeek(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, 'd');
    } // FORMATTING


    addFormatToken('d', 0, 'do', 'day');
    addFormatToken('dd', 0, 0, function (format) {
      return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken('ddd', 0, 0, function (format) {
      return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken('dddd', 0, 0, function (format) {
      return this.localeData().weekdays(this, format);
    });
    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E'); // PRIORITY

    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11); // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
      return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
      return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
      return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
      var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


      if (weekday != null) {
        week.d = weekday;
      } else {
        getParsingFlags(config).invalidWeekday = input;
      }
    });
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
      week[token] = toInt(input);
    }); // HELPERS

    function parseWeekday(input, locale) {
      if (typeof input !== 'string') {
        return input;
      }

      if (!isNaN(input)) {
        return parseInt(input, 10);
      }

      input = locale.weekdaysParse(input);

      if (typeof input === 'number') {
        return input;
      }

      return null;
    }

    function parseIsoWeekday(input, locale) {
      if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
      }

      return isNaN(input) ? null : input;
    } // LOCALES


    function shiftWeekdays(ws, n) {
      return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
      var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
      return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
    }

    function localeWeekdaysShort(m) {
      return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
      return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
      var i,
          ii,
          mom,
          llc = weekdayName.toLocaleLowerCase();

      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
          mom = createUTC([2000, 1]).day(i);
          this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
          this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
          this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
      }

      if (strict) {
        if (format === 'dddd') {
          ii = indexOf.call(this._weekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format === 'dddd') {
          ii = indexOf.call(this._weekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._shortWeekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
          ii = indexOf.call(this._shortWeekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._weekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._weekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
      var i, mom, regex;

      if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
      }

      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
      }

      for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);

        if (strict && !this._fullWeekdaysParse[i]) {
          this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
          this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
          this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
        }

        if (!this._weekdaysParse[i]) {
          regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
          this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        } // test the regex


        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
          return i;
        }
      }
    } // MOMENTS


    function getSetDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
      } else {
        return day;
      }
    }

    function getSetLocaleDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      } // behaves the same as moment#day except
      // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
      // as a setter, sunday should belong to the previous week.


      if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
        return this.day() || 7;
      }
    }

    function weekdaysRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }

        if (isStrict) {
          return this._weekdaysStrictRegex;
        } else {
          return this._weekdaysRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          this._weekdaysRegex = defaultWeekdaysRegex;
        }

        return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
      }
    }

    function weekdaysShortRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }

        if (isStrict) {
          return this._weekdaysShortStrictRegex;
        } else {
          return this._weekdaysShortRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }

        return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
      }
    }

    function weekdaysMinRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }

        if (isStrict) {
          return this._weekdaysMinStrictRegex;
        } else {
          return this._weekdaysMinRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }

        return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
      }
    }

    function computeWeekdaysParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }

      var minPieces = [],
          shortPieces = [],
          longPieces = [],
          mixedPieces = [],
          i,
          mom,
          minp,
          shortp,
          longp;

      for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = regexEscape(this.weekdaysMin(mom, ''));
        shortp = regexEscape(this.weekdaysShort(mom, ''));
        longp = regexEscape(this.weekdays(mom, ''));
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
      } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
      // will match the longer piece.


      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;
      this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
      this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
      this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    } // FORMATTING


    function hFormat() {
      return this.hours() % 12 || 12;
    }

    function kFormat() {
      return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);
    addFormatToken('hmm', 0, 0, function () {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken('hmmss', 0, 0, function () {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken('Hmm', 0, 0, function () {
      return '' + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken('Hmmss', 0, 0, function () {
      return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });

    function meridiem(token, lowercase) {
      addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
      });
    }

    meridiem('a', true);
    meridiem('A', false); // ALIASES

    addUnitAlias('hour', 'h'); // PRIORITY

    addUnitPriority('hour', 13); // PARSING

    function matchMeridiem(isStrict, locale) {
      return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
      config._isPm = config._locale.isPM(input);
      config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
      array[HOUR] = toInt(input);
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
      var pos1 = input.length - 4,
          pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
      var pos1 = input.length - 4,
          pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
    }); // LOCALES

    function localeIsPM(input) {
      // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
      // Using charAt should be more compatible.
      return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'pm' : 'PM';
      } else {
        return isLower ? 'am' : 'AM';
      }
    }

    var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,
      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,
      week: defaultLocaleWeek,
      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,
      meridiemParse: defaultLocaleMeridiemParse
    }; // internal storage for locale config files

    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
      var i,
          minl = Math.min(arr1.length, arr2.length);

      for (i = 0; i < minl; i += 1) {
        if (arr1[i] !== arr2[i]) {
          return i;
        }
      }

      return minl;
    }

    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace('_', '-') : key;
    } // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


    function chooseLocale(names) {
      var i = 0,
          j,
          next,
          locale,
          split;

      while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;

        while (j > 0) {
          locale = loadLocale(split.slice(0, j).join('-'));

          if (locale) {
            return locale;
          }

          if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
            //the next array item is better than a shallower substring of this one
            break;
          }

          j--;
        }

        i++;
      }

      return globalLocale;
    }

    function isLocaleNameSane(name) {
      // Prevent names that look like filesystem paths, i.e contain '/' or '\'
      return name.match('^[^/\\\\]*$') != null;
    }

    function loadLocale(name) {
      var oldLocale = null,
          aliasedRequire; // TODO: Find a better way to register and load all the locales in Node

      if (locales[name] === undefined && 'object' !== 'undefined' && module && module.exports && isLocaleNameSane(name)) {
        try {
          oldLocale = globalLocale._abbr;
          aliasedRequire = commonjsRequire;
          aliasedRequire('./locale/' + name);
          getSetGlobalLocale(oldLocale);
        } catch (e) {
          // mark as not found to avoid repeating expensive file require call causing high CPU
          // when trying to find en-US, en_US, en-us for every format call
          locales[name] = null; // null means not found
        }
      }

      return locales[name];
    } // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.


    function getSetGlobalLocale(key, values) {
      var data;

      if (key) {
        if (isUndefined(values)) {
          data = getLocale(key);
        } else {
          data = defineLocale(key, values);
        }

        if (data) {
          // moment.duration._locale = moment._locale = data;
          globalLocale = data;
        } else {
          if (typeof console !== 'undefined' && console.warn) {
            //warn user if arguments are passed but the locale could not be set
            console.warn('Locale ' + key + ' not found. Did you forget to load it?');
          }
        }
      }

      return globalLocale._abbr;
    }

    function defineLocale(name, config) {
      if (config !== null) {
        var locale,
            parentConfig = baseConfig;
        config.abbr = name;

        if (locales[name] != null) {
          deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
          parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
          if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
          } else {
            locale = loadLocale(config.parentLocale);

            if (locale != null) {
              parentConfig = locale._config;
            } else {
              if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
              }

              localeFamilies[config.parentLocale].push({
                name: name,
                config: config
              });
              return null;
            }
          }
        }

        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
          localeFamilies[name].forEach(function (x) {
            defineLocale(x.name, x.config);
          });
        } // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.


        getSetGlobalLocale(name);
        return locales[name];
      } else {
        // useful for testing
        delete locales[name];
        return null;
      }
    }

    function updateLocale(name, config) {
      if (config != null) {
        var locale,
            tmpLocale,
            parentConfig = baseConfig;

        if (locales[name] != null && locales[name].parentLocale != null) {
          // Update existing child locale in-place to avoid memory-leaks
          locales[name].set(mergeConfigs(locales[name]._config, config));
        } else {
          // MERGE
          tmpLocale = loadLocale(name);

          if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
          }

          config = mergeConfigs(parentConfig, config);

          if (tmpLocale == null) {
            // updateLocale is called for creating a new locale
            // Set abbr so it will have a name (getters return
            // undefined otherwise).
            config.abbr = name;
          }

          locale = new Locale(config);
          locale.parentLocale = locales[name];
          locales[name] = locale;
        } // backwards compat for now: also set the locale


        getSetGlobalLocale(name);
      } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
            locales[name] = locales[name].parentLocale;

            if (name === getSetGlobalLocale()) {
              getSetGlobalLocale(name);
            }
          } else if (locales[name] != null) {
            delete locales[name];
          }
        }
      }

      return locales[name];
    } // returns locale data


    function getLocale(key) {
      var locale;

      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }

      if (!key) {
        return globalLocale;
      }

      if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);

        if (locale) {
          return locale;
        }

        key = [key];
      }

      return chooseLocale(key);
    }

    function listLocales() {
      return keys(locales);
    }

    function checkOverflow(m) {
      var overflow,
          a = m._a;

      if (a && getParsingFlags(m).overflow === -2) {
        overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
        }

        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
        }

        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
      }

      return m;
    } // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/], ['YYYYMM', /\d{6}/, false], ['YYYY', /\d{4}/, false]],
        // iso time formats and regexes
    isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    }; // date from iso format

    function configFromISO(config) {
      var i,
          l,
          string = config._i,
          match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
          allowTime,
          dateFormat,
          timeFormat,
          tzFormat,
          isoDatesLen = isoDates.length,
          isoTimesLen = isoTimes.length;

      if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDatesLen; i < l; i++) {
          if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
          }
        }

        if (dateFormat == null) {
          config._isValid = false;
          return;
        }

        if (match[3]) {
          for (i = 0, l = isoTimesLen; i < l; i++) {
            if (isoTimes[i][1].exec(match[3])) {
              // match[2] should be 'T' or space
              timeFormat = (match[2] || ' ') + isoTimes[i][0];
              break;
            }
          }

          if (timeFormat == null) {
            config._isValid = false;
            return;
          }
        }

        if (!allowTime && timeFormat != null) {
          config._isValid = false;
          return;
        }

        if (match[4]) {
          if (tzRegex.exec(match[4])) {
            tzFormat = 'Z';
          } else {
            config._isValid = false;
            return;
          }
        }

        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
      } else {
        config._isValid = false;
      }
    }

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

      if (secondStr) {
        result.push(parseInt(secondStr, 10));
      }

      return result;
    }

    function untruncateYear(yearStr) {
      var year = parseInt(yearStr, 10);

      if (year <= 49) {
        return 2000 + year;
      } else if (year <= 999) {
        return 1900 + year;
      }

      return year;
    }

    function preprocessRFC2822(s) {
      // Remove comments and folding whitespace and replace multiple-spaces with a single space
      return s.replace(/\([^()]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
      if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

        if (weekdayProvided !== weekdayActual) {
          getParsingFlags(config).weekdayMismatch = true;
          config._isValid = false;
          return false;
        }
      }

      return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
        return obsOffsets[obsOffset];
      } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
      } else {
        var hm = parseInt(numOffset, 10),
            m = hm % 100,
            h = (hm - m) / 100;
        return h * 60 + m;
      }
    } // date and time from ref 2822 format


    function configFromRFC2822(config) {
      var match = rfc2822.exec(preprocessRFC2822(config._i)),
          parsedArray;

      if (match) {
        parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

        if (!checkWeekday(match[1], parsedArray, config)) {
          return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);
        config._d = createUTCDate.apply(null, config._a);

        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
      } else {
        config._isValid = false;
      }
    } // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict


    function configFromString(config) {
      var matched = aspNetJsonRegex.exec(config._i);

      if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
      }

      configFromISO(config);

      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }

      configFromRFC2822(config);

      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }

      if (config._strict) {
        config._isValid = false;
      } else {
        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
      }
    }

    hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
      config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }); // Pick the first defined of two or three arguments.

    function defaults(a, b, c) {
      if (a != null) {
        return a;
      }

      if (b != null) {
        return b;
      }

      return c;
    }

    function currentDateArray(config) {
      // hooks is actually the exported moment object
      var nowValue = new Date(hooks.now());

      if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
      }

      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    } // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]


    function configFromArray(config) {
      var i,
          date,
          input = [],
          currentDate,
          expectedWeekday,
          yearToUse;

      if (config._d) {
        return;
      }

      currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
      } //if the day of the year is set, figure out what it is


      if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
          getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
      } // Default to current date.
      // * if no year, month, day of month are given, default to today
      // * if day of month is given, default month and year
      // * if month is given, default only year
      // * if year is given, don't default anything


      for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
      } // Zero out whatever was not defaulted, including time


      for (; i < 7; i++) {
        config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
      } // Check for 24:00:00.000


      if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
      }

      config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
      expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
      // with parseZone.

      if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }

      if (config._nextDay) {
        config._a[HOUR] = 24;
      } // check for mismatching day of week


      if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
      }
    }

    function dayOfYearFromWeekInfo(config) {
      var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
      w = config._w;

      if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).

        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);

        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        curWeek = weekOfYear(createLocal(), dow, doy);
        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
          // weekday -- low day numbers are considered next week
          weekday = w.d;

          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w.e != null) {
          // local weekday -- counting starts from beginning of week
          weekday = w.e + dow;

          if (w.e < 0 || w.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          // default to beginning of week
          weekday = dow;
        }
      }

      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
      } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
      }
    } // constant that refers to the ISO standard


    hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


    hooks.RFC_2822 = function () {}; // date from string and format string


    function configFromStringAndFormat(config) {
      // TODO: Move this to another part of the creation flow to prevent circular deps
      if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
      }

      if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
      }

      config._a = [];
      getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

      var string = '' + config._i,
          i,
          parsedInput,
          tokens,
          token,
          skipped,
          stringLength = string.length,
          totalParsedInputLength = 0,
          era,
          tokenLen;
      tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
      tokenLen = tokens.length;

      for (i = 0; i < tokenLen; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];

        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));

          if (skipped.length > 0) {
            getParsingFlags(config).unusedInput.push(skipped);
          }

          string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
          totalParsedInputLength += parsedInput.length;
        } // don't parse if it's not a known token


        if (formatTokenFunctions[token]) {
          if (parsedInput) {
            getParsingFlags(config).empty = false;
          } else {
            getParsingFlags(config).unusedTokens.push(token);
          }

          addTimeToArrayFromToken(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
          getParsingFlags(config).unusedTokens.push(token);
        }
      } // add remaining unparsed input length to the string


      getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

      if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
      } // clear _12h flag if hour is <= 12


      if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
      }

      getParsingFlags(config).parsedDateParts = config._a.slice(0);
      getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

      config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem); // handle era

      era = getParsingFlags(config).era;

      if (era !== null) {
        config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
      }

      configFromArray(config);
      checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
      var isPm;

      if (meridiem == null) {
        // nothing to do
        return hour;
      }

      if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
      } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);

        if (isPm && hour < 12) {
          hour += 12;
        }

        if (!isPm && hour === 12) {
          hour = 0;
        }

        return hour;
      } else {
        // this is not supposed to happen
        return hour;
      }
    } // date from string and array of format strings


    function configFromStringAndArray(config) {
      var tempConfig,
          bestMoment,
          scoreToBeat,
          i,
          currentScore,
          validFormatFound,
          bestFormatIsValid = false,
          configfLen = config._f.length;

      if (configfLen === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
      }

      for (i = 0; i < configfLen; i++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = copyConfig({}, config);

        if (config._useUTC != null) {
          tempConfig._useUTC = config._useUTC;
        }

        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (isValid(tempConfig)) {
          validFormatFound = true;
        } // if there is any input that was not parsed add a penalty for that format


        currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;

        if (!bestFormatIsValid) {
          if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;

            if (validFormatFound) {
              bestFormatIsValid = true;
            }
          }
        } else {
          if (currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
          }
        }
      }

      extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
      if (config._d) {
        return;
      }

      var i = normalizeObjectUnits(config._i),
          dayOrDate = i.day === undefined ? i.date : i.day;
      config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
      });
      configFromArray(config);
    }

    function createFromConfig(config) {
      var res = new Moment(checkOverflow(prepareConfig(config)));

      if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
      }

      return res;
    }

    function prepareConfig(config) {
      var input = config._i,
          format = config._f;
      config._locale = config._locale || getLocale(config._l);

      if (input === null || format === undefined && input === '') {
        return createInvalid({
          nullInput: true
        });
      }

      if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
      }

      if (isMoment(input)) {
        return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
        config._d = input;
      } else if (isArray(format)) {
        configFromStringAndArray(config);
      } else if (format) {
        configFromStringAndFormat(config);
      } else {
        configFromInput(config);
      }

      if (!isValid(config)) {
        config._d = null;
      }

      return config;
    }

    function configFromInput(config) {
      var input = config._i;

      if (isUndefined(input)) {
        config._d = new Date(hooks.now());
      } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
      } else if (typeof input === 'string') {
        configFromString(config);
      } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
          return parseInt(obj, 10);
        });
        configFromArray(config);
      } else if (isObject(input)) {
        configFromObject(config);
      } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
      } else {
        hooks.createFromInputFallback(config);
      }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
      var c = {};

      if (format === true || format === false) {
        strict = format;
        format = undefined;
      }

      if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
      }

      if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
        input = undefined;
      } // object construction must be done this way.
      // https://github.com/moment/moment/issues/1423


      c._isAMomentObject = true;
      c._useUTC = c._isUTC = isUTC;
      c._l = locale;
      c._i = input;
      c._f = format;
      c._strict = strict;
      return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
      var other = createLocal.apply(null, arguments);

      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return createInvalid();
      }
    }),
        prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
      var other = createLocal.apply(null, arguments);

      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return createInvalid();
      }
    }); // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.

    function pickBy(fn, moments) {
      var res, i;

      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }

      if (!moments.length) {
        return createLocal();
      }

      res = moments[0];

      for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
          res = moments[i];
        }
      }

      return res;
    } // TODO: Use [].sort instead?


    function min() {
      var args = [].slice.call(arguments, 0);
      return pickBy('isBefore', args);
    }

    function max() {
      var args = [].slice.call(arguments, 0);
      return pickBy('isAfter', args);
    }

    var now = function () {
      return Date.now ? Date.now() : +new Date();
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
      var key,
          unitHasDecimal = false,
          i,
          orderLen = ordering.length;

      for (key in m) {
        if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
          return false;
        }
      }

      for (i = 0; i < orderLen; ++i) {
        if (m[ordering[i]]) {
          if (unitHasDecimal) {
            return false; // only allow non-integers for smallest unit
          }

          if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
            unitHasDecimal = true;
          }
        }
      }

      return true;
    }

    function isValid$1() {
      return this._isValid;
    }

    function createInvalid$1() {
      return createDuration(NaN);
    }

    function Duration(duration) {
      var normalizedInput = normalizeObjectUnits(duration),
          years = normalizedInput.year || 0,
          quarters = normalizedInput.quarter || 0,
          months = normalizedInput.month || 0,
          weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
          days = normalizedInput.day || 0,
          hours = normalizedInput.hour || 0,
          minutes = normalizedInput.minute || 0,
          seconds = normalizedInput.second || 0,
          milliseconds = normalizedInput.millisecond || 0;
      this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

      this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
      minutes * 6e4 + // 1000 * 60
      hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
      // Because of dateAddRemove treats 24 hours as different from a
      // day when working around DST, we need to store them separately

      this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
      // which months you are are talking about, so we have to store
      // it separately.

      this._months = +months + quarters * 3 + years * 12;
      this._data = {};
      this._locale = getLocale();

      this._bubble();
    }

    function isDuration(obj) {
      return obj instanceof Duration;
    }

    function absRound(number) {
      if (number < 0) {
        return Math.round(-1 * number) * -1;
      } else {
        return Math.round(number);
      }
    } // compare two arrays, return the number of differences


    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length),
          lengthDiff = Math.abs(array1.length - array2.length),
          diffs = 0,
          i;

      for (i = 0; i < len; i++) {
        if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
          diffs++;
        }
      }

      return diffs + lengthDiff;
    } // FORMATTING


    function offset(token, separator) {
      addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset(),
            sign = '+';

        if (offset < 0) {
          offset = -offset;
          sign = '-';
        }

        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
      });
    }

    offset('Z', ':');
    offset('ZZ', ''); // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
      config._useUTC = true;
      config._tzm = offsetFromString(matchShortOffset, input);
    }); // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']

    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
      var matches = (string || '').match(matcher),
          chunk,
          parts,
          minutes;

      if (matches === null) {
        return null;
      }

      chunk = matches[matches.length - 1] || [];
      parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
      minutes = +(parts[1] * 60) + toInt(parts[2]);
      return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    } // Return a moment from input, that is local/utc/zone equivalent to model.


    function cloneWithOffset(input, model) {
      var res, diff;

      if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

        res._d.setTime(res._d.valueOf() + diff);

        hooks.updateOffset(res, false);
        return res;
      } else {
        return createLocal(input).local();
      }
    }

    function getDateOffset(m) {
      // On Firefox.24 Date#getTimezoneOffset returns a floating point.
      // https://github.com/moment/moment/pull/1871
      return -Math.round(m._d.getTimezoneOffset());
    } // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.


    hooks.updateOffset = function () {}; // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.


    function getSetOffset(input, keepLocalTime, keepMinutes) {
      var offset = this._offset || 0,
          localAdjust;

      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      if (input != null) {
        if (typeof input === 'string') {
          input = offsetFromString(matchShortOffset, input);

          if (input === null) {
            return this;
          }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
          input = input * 60;
        }

        if (!this._isUTC && keepLocalTime) {
          localAdjust = getDateOffset(this);
        }

        this._offset = input;
        this._isUTC = true;

        if (localAdjust != null) {
          this.add(localAdjust, 'm');
        }

        if (offset !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addSubtract(this, createDuration(input - offset, 'm'), 1, false);
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            hooks.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }

        return this;
      } else {
        return this._isUTC ? offset : getDateOffset(this);
      }
    }

    function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== 'string') {
          input = -input;
        }

        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }

    function setOffsetToUTC(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
          this.subtract(getDateOffset(this), 'm');
        }
      }

      return this;
    }

    function setOffsetToParsedOffset() {
      if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);

        if (tZone != null) {
          this.utcOffset(tZone);
        } else {
          this.utcOffset(0, true);
        }
      }

      return this;
    }

    function hasAlignedHourOffset(input) {
      if (!this.isValid()) {
        return false;
      }

      input = input ? createLocal(input).utcOffset() : 0;
      return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }

    function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }

      var c = {},
          other;
      copyConfig(c, this);
      c = prepareConfig(c);

      if (c._a) {
        other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }

      return this._isDSTShifted;
    }

    function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    } // ASP.NET json date format regex


    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
      var duration = input,
          // matching against regexp is expensive, do it on demand
      match = null,
          sign,
          ret,
          diffRes;

      if (isDuration(input)) {
        duration = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months
        };
      } else if (isNumber(input) || !isNaN(+input)) {
        duration = {};

        if (key) {
          duration[key] = +input;
        } else {
          duration.milliseconds = +input;
        }
      } else if (match = aspNetRegex.exec(input)) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
          y: 0,
          d: toInt(match[DATE]) * sign,
          h: toInt(match[HOUR]) * sign,
          m: toInt(match[MINUTE]) * sign,
          s: toInt(match[SECOND]) * sign,
          ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

        };
      } else if (match = isoRegex.exec(input)) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
          y: parseIso(match[2], sign),
          M: parseIso(match[3], sign),
          w: parseIso(match[4], sign),
          d: parseIso(match[5], sign),
          h: parseIso(match[6], sign),
          m: parseIso(match[7], sign),
          s: parseIso(match[8], sign)
        };
      } else if (duration == null) {
        // checks for null or undefined
        duration = {};
      } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
      }

      ret = new Duration(duration);

      if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
      }

      if (isDuration(input) && hasOwnProp(input, '_isValid')) {
        ret._isValid = input._isValid;
      }

      return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
      // We'd normally use ~~inp for this, but unfortunately it also
      // converts floats to ints.
      // inp may be undefined, so careful calling replace on it.
      var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

      return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
      var res = {};
      res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

      if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
      }

      res.milliseconds = +other - +base.clone().add(res.months, 'M');
      return res;
    }

    function momentsDifference(base, other) {
      var res;

      if (!(base.isValid() && other.isValid())) {
        return {
          milliseconds: 0,
          months: 0
        };
      }

      other = cloneWithOffset(other, base);

      if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
      } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }

      return res;
    } // TODO: remove 'name' arg after deprecation is removed


    function createAdder(direction, name) {
      return function (val, period) {
        var dur, tmp; //invert the arguments, but complain about it

        if (period !== null && !isNaN(+period)) {
          deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
          tmp = val;
          val = period;
          period = tmp;
        }

        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
      };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
      var milliseconds = duration._milliseconds,
          days = absRound(duration._days),
          months = absRound(duration._months);

      if (!mom.isValid()) {
        // No op
        return;
      }

      updateOffset = updateOffset == null ? true : updateOffset;

      if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
      }

      if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
      }

      if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
      }

      if (updateOffset) {
        hooks.updateOffset(mom, days || months);
      }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
      return typeof input === 'string' || input instanceof String;
    } // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined


    function isMomentInput(input) {
      return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
    }

    function isMomentInputObject(input) {
      var objectTest = isObject(input) && !isObjectEmpty(input),
          propertyTest = false,
          properties = ['years', 'year', 'y', 'months', 'month', 'M', 'days', 'day', 'd', 'dates', 'date', 'D', 'hours', 'hour', 'h', 'minutes', 'minute', 'm', 'seconds', 'second', 's', 'milliseconds', 'millisecond', 'ms'],
          i,
          property,
          propertyLen = properties.length;

      for (i = 0; i < propertyLen; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }

      return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
      var arrayTest = isArray(input),
          dataTypeTest = false;

      if (arrayTest) {
        dataTypeTest = input.filter(function (item) {
          return !isNumber(item) && isString(input);
        }).length === 0;
      }

      return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
      var objectTest = isObject(input) && !isObjectEmpty(input),
          propertyTest = false,
          properties = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
          i,
          property;

      for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }

      return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
      var diff = myMoment.diff(now, 'days', true);
      return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1(time, formats) {
      // Support for single parameter, formats only overload to the calendar function
      if (arguments.length === 1) {
        if (!arguments[0]) {
          time = undefined;
          formats = undefined;
        } else if (isMomentInput(arguments[0])) {
          time = arguments[0];
          formats = undefined;
        } else if (isCalendarSpec(arguments[0])) {
          formats = arguments[0];
          time = undefined;
        }
      } // We want to compare the start of today, vs this.
      // Getting start-of-today depends on whether we're local/utc/offset or not.


      var now = time || createLocal(),
          sod = cloneWithOffset(now, this).startOf('day'),
          format = hooks.calendarFormat(this, sod) || 'sameElse',
          output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
      return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone() {
      return new Moment(this);
    }

    function isAfter(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);

      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }

      units = normalizeUnits(units) || 'millisecond';

      if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
      } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
      }
    }

    function isBefore(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);

      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }

      units = normalizeUnits(units) || 'millisecond';

      if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
      } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
      }
    }

    function isBetween(from, to, units, inclusivity) {
      var localFrom = isMoment(from) ? from : createLocal(from),
          localTo = isMoment(to) ? to : createLocal(to);

      if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
      }

      inclusivity = inclusivity || '()';
      return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input),
          inputMs;

      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }

      units = normalizeUnits(units) || 'millisecond';

      if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
      } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
      }
    }

    function isSameOrAfter(input, units) {
      return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
      return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
      var that, zoneDelta, output;

      if (!this.isValid()) {
        return NaN;
      }

      that = cloneWithOffset(input, this);

      if (!that.isValid()) {
        return NaN;
      }

      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
      units = normalizeUnits(units);

      switch (units) {
        case 'year':
          output = monthDiff(this, that) / 12;
          break;

        case 'month':
          output = monthDiff(this, that);
          break;

        case 'quarter':
          output = monthDiff(this, that) / 3;
          break;

        case 'second':
          output = (this - that) / 1e3;
          break;
        // 1000

        case 'minute':
          output = (this - that) / 6e4;
          break;
        // 1000 * 60

        case 'hour':
          output = (this - that) / 36e5;
          break;
        // 1000 * 60 * 60

        case 'day':
          output = (this - that - zoneDelta) / 864e5;
          break;
        // 1000 * 60 * 60 * 24, negate dst

        case 'week':
          output = (this - that - zoneDelta) / 6048e5;
          break;
        // 1000 * 60 * 60 * 24 * 7, negate dst

        default:
          output = this - that;
      }

      return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
      if (a.date() < b.date()) {
        // end-of-month calculations work correct when the start month has more
        // days than the end month.
        return -monthDiff(b, a);
      } // difference in months


      var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
          // b is in (anchor - 1 month, anchor + 1 month)
      anchor = a.clone().add(wholeMonthDiff, 'months'),
          anchor2,
          adjust;

      if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

        adjust = (b - anchor) / (anchor - anchor2);
      } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

        adjust = (b - anchor) / (anchor2 - anchor);
      } //check for negative zero, return zero if negative zero


      return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
      return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
      if (!this.isValid()) {
        return null;
      }

      var utc = keepOffset !== true,
          m = utc ? this.clone().utc() : this;

      if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
      }

      if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
          return this.toDate().toISOString();
        } else {
          return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
      }

      return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */


    function inspect() {
      if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
      }

      var func = 'moment',
          zone = '',
          prefix,
          year,
          datetime,
          suffix;

      if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
      }

      prefix = '[' + func + '("]';
      year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
      datetime = '-MM-DD[T]HH:mm:ss.SSS';
      suffix = zone + '[")]';
      return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
      if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
      }

      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({
          to: this,
          from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }

    function fromNow(withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({
          from: this,
          to: time
        }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }

    function toNow(withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
    } // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.


    function locale(key) {
      var newLocaleData;

      if (key === undefined) {
        return this._locale._abbr;
      } else {
        newLocaleData = getLocale(key);

        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }

        return this;
      }
    }

    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
      if (key === undefined) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    });

    function localeData() {
      return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR; // actual modulo - handles negative numbers (for dates before 1970):

    function mod$1(dividend, divisor) {
      return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
      // the date constructor remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
      } else {
        return new Date(y, m, d).valueOf();
      }
    }

    function utcStartOfDate(y, m, d) {
      // Date.UTC remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
      } else {
        return Date.UTC(y, m, d);
      }
    }

    function startOf(units) {
      var time, startOfDate;
      units = normalizeUnits(units);

      if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
      }

      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

      switch (units) {
        case 'year':
          time = startOfDate(this.year(), 0, 1);
          break;

        case 'quarter':
          time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
          break;

        case 'month':
          time = startOfDate(this.year(), this.month(), 1);
          break;

        case 'week':
          time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
          break;

        case 'isoWeek':
          time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
          break;

        case 'day':
        case 'date':
          time = startOfDate(this.year(), this.month(), this.date());
          break;

        case 'hour':
          time = this._d.valueOf();
          time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
          break;

        case 'minute':
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_MINUTE);
          break;

        case 'second':
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_SECOND);
          break;
      }

      this._d.setTime(time);

      hooks.updateOffset(this, true);
      return this;
    }

    function endOf(units) {
      var time, startOfDate;
      units = normalizeUnits(units);

      if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
      }

      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

      switch (units) {
        case 'year':
          time = startOfDate(this.year() + 1, 0, 1) - 1;
          break;

        case 'quarter':
          time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
          break;

        case 'month':
          time = startOfDate(this.year(), this.month() + 1, 1) - 1;
          break;

        case 'week':
          time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;

        case 'isoWeek':
          time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
          break;

        case 'day':
        case 'date':
          time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
          break;

        case 'hour':
          time = this._d.valueOf();
          time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
          break;

        case 'minute':
          time = this._d.valueOf();
          time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
          break;

        case 'second':
          time = this._d.valueOf();
          time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
          break;
      }

      this._d.setTime(time);

      hooks.updateOffset(this, true);
      return this;
    }

    function valueOf() {
      return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
      return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
      return new Date(this.valueOf());
    }

    function toArray() {
      var m = this;
      return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject() {
      var m = this;
      return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
      };
    }

    function toJSON() {
      // new Date(NaN).toJSON() === null
      return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
      return isValid(this);
    }

    function parsingFlags() {
      return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
      return getParsingFlags(this).overflow;
    }

    function creationData() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');
    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');
    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);
    addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (input, array, config, token) {
      var era = config._locale.erasParse(input, token, config._strict);

      if (era) {
        getParsingFlags(config).era = era;
      } else {
        getParsingFlags(config).invalidEra = input;
      }
    });
    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);
    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
      var match;

      if (config._locale._eraYearOrdinalRegex) {
        match = input.match(config._locale._eraYearOrdinalRegex);
      }

      if (config._locale.eraYearOrdinalParse) {
        array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
      } else {
        array[YEAR] = parseInt(input, 10);
      }
    });

    function localeEras(m, format) {
      var i,
          l,
          date,
          eras = this._eras || getLocale('en')._eras;

      for (i = 0, l = eras.length; i < l; ++i) {
        switch (typeof eras[i].since) {
          case 'string':
            // truncate time
            date = hooks(eras[i].since).startOf('day');
            eras[i].since = date.valueOf();
            break;
        }

        switch (typeof eras[i].until) {
          case 'undefined':
            eras[i].until = +Infinity;
            break;

          case 'string':
            // truncate time
            date = hooks(eras[i].until).startOf('day').valueOf();
            eras[i].until = date.valueOf();
            break;
        }
      }

      return eras;
    }

    function localeErasParse(eraName, format, strict) {
      var i,
          l,
          eras = this.eras(),
          name,
          abbr,
          narrow;
      eraName = eraName.toUpperCase();

      for (i = 0, l = eras.length; i < l; ++i) {
        name = eras[i].name.toUpperCase();
        abbr = eras[i].abbr.toUpperCase();
        narrow = eras[i].narrow.toUpperCase();

        if (strict) {
          switch (format) {
            case 'N':
            case 'NN':
            case 'NNN':
              if (abbr === eraName) {
                return eras[i];
              }

              break;

            case 'NNNN':
              if (name === eraName) {
                return eras[i];
              }

              break;

            case 'NNNNN':
              if (narrow === eraName) {
                return eras[i];
              }

              break;
          }
        } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
          return eras[i];
        }
      }
    }

    function localeErasConvertYear(era, year) {
      var dir = era.since <= era.until ? +1 : -1;

      if (year === undefined) {
        return hooks(era.since).year();
      } else {
        return hooks(era.since).year() + (year - era.offset) * dir;
      }
    }

    function getEraName() {
      var i,
          l,
          val,
          eras = this.localeData().eras();

      for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.clone().startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].name;
        }

        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].name;
        }
      }

      return '';
    }

    function getEraNarrow() {
      var i,
          l,
          val,
          eras = this.localeData().eras();

      for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.clone().startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].narrow;
        }

        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].narrow;
        }
      }

      return '';
    }

    function getEraAbbr() {
      var i,
          l,
          val,
          eras = this.localeData().eras();

      for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.clone().startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
          return eras[i].abbr;
        }

        if (eras[i].until <= val && val <= eras[i].since) {
          return eras[i].abbr;
        }
      }

      return '';
    }

    function getEraYear() {
      var i,
          l,
          dir,
          val,
          eras = this.localeData().eras();

      for (i = 0, l = eras.length; i < l; ++i) {
        dir = eras[i].since <= eras[i].until ? +1 : -1; // truncate time

        val = this.clone().startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
          return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
        }
      }

      return this.year();
    }

    function erasNameRegex(isStrict) {
      if (!hasOwnProp(this, '_erasNameRegex')) {
        computeErasParse.call(this);
      }

      return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
      if (!hasOwnProp(this, '_erasAbbrRegex')) {
        computeErasParse.call(this);
      }

      return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
      if (!hasOwnProp(this, '_erasNarrowRegex')) {
        computeErasParse.call(this);
      }

      return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
      return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
      return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
      return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
      return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
      var abbrPieces = [],
          namePieces = [],
          narrowPieces = [],
          mixedPieces = [],
          i,
          l,
          eras = this.eras();

      for (i = 0, l = eras.length; i < l; ++i) {
        namePieces.push(regexEscape(eras[i].name));
        abbrPieces.push(regexEscape(eras[i].abbr));
        narrowPieces.push(regexEscape(eras[i].narrow));
        mixedPieces.push(regexEscape(eras[i].name));
        mixedPieces.push(regexEscape(eras[i].abbr));
        mixedPieces.push(regexEscape(eras[i].narrow));
      }

      this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
      this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
      this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
    } // FORMATTING


    addFormatToken(0, ['gg', 2], 0, function () {
      return this.weekYear() % 100;
    });
    addFormatToken(0, ['GG', 2], 0, function () {
      return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
      addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1); // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
      week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
      week[token] = hooks.parseTwoDigitYear(input);
    }); // MOMENTS

    function getSetWeekYear(input) {
      return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }

    function getSetISOWeekYear(input) {
      return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear() {
      return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
      return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
      var weekInfo = this.localeData()._week;

      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
      var weekInfo = this.localeData()._week;

      return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;

      if (input == null) {
        return weekOfYear(this, dow, doy).year;
      } else {
        weeksTarget = weeksInYear(input, dow, doy);

        if (week > weeksTarget) {
          week = weeksTarget;
        }

        return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
          date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
    } // FORMATTING


    addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

    addUnitAlias('quarter', 'Q'); // PRIORITY

    addUnitPriority('quarter', 7); // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
    }); // MOMENTS

    function getSetQuarter(input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    } // FORMATTING


    addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

    addUnitAlias('date', 'D'); // PRIORITY

    addUnitPriority('date', 9); // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
      // TODO: Remove "ordinalParse" fallback in next major release.
      return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
    });
    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
    }); // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

    addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

    addUnitPriority('dayOfYear', 4); // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
      config._dayOfYear = toInt(input);
    }); // HELPERS
    // MOMENTS

    function getSetDayOfYear(input) {
      var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    } // FORMATTING


    addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

    addUnitAlias('minute', 'm'); // PRIORITY

    addUnitPriority('minute', 14); // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE); // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

    addUnitAlias('second', 's'); // PRIORITY

    addUnitPriority('second', 15); // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND); // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

    addFormatToken('S', 0, 0, function () {
      return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, ['SS', 2], 0, function () {
      return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
      return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
      return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
      return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
      return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
      return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
      return this.millisecond() * 1000000;
    }); // ALIASES

    addUnitAlias('millisecond', 'ms'); // PRIORITY

    addUnitPriority('millisecond', 16); // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var token, getSetMillisecond;

    for (token = 'SSSS'; token.length <= 9; token += 'S') {
      addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
      array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
      addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

    function getZoneAbbr() {
      return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
      return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;

    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
      proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
        return 'Moment<' + this.format() + '>';
      };
    }

    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix(input) {
      return createLocal(input * 1000);
    }

    function createInZone() {
      return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
      return string;
    }

    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
      var locale = getLocale(),
          utc = createUTC().set(setter, index);
      return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';

      if (index != null) {
        return get$1(format, index, field, 'month');
      }

      var i,
          out = [];

      for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
      }

      return out;
    } // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)


    function listWeekdaysImpl(localeSorted, format, index, field) {
      if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';
      } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';
      }

      var locale = getLocale(),
          shift = localeSorted ? locale._week.dow : 0,
          i,
          out = [];

      if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
      }

      for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
      }

      return out;
    }

    function listMonths(format, index) {
      return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
      return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
      eras: [{
        since: '0001-01-01',
        until: +Infinity,
        offset: 1,
        name: 'Anno Domini',
        narrow: 'AD',
        abbr: 'AD'
      }, {
        since: '0000-12-31',
        until: -Infinity,
        offset: 1,
        name: 'Before Christ',
        narrow: 'BC',
        abbr: 'BC'
      }],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (number) {
        var b = number % 10,
            output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        return number + output;
      }
    }); // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
    var mathAbs = Math.abs;

    function abs() {
      var data = this._data;
      this._milliseconds = mathAbs(this._milliseconds);
      this._days = mathAbs(this._days);
      this._months = mathAbs(this._months);
      data.milliseconds = mathAbs(data.milliseconds);
      data.seconds = mathAbs(data.seconds);
      data.minutes = mathAbs(data.minutes);
      data.hours = mathAbs(data.hours);
      data.months = mathAbs(data.months);
      data.years = mathAbs(data.years);
      return this;
    }

    function addSubtract$1(duration, input, value, direction) {
      var other = createDuration(input, value);
      duration._milliseconds += direction * other._milliseconds;
      duration._days += direction * other._days;
      duration._months += direction * other._months;
      return duration._bubble();
    } // supports only 2.0-style add(1, 's') or add(duration)


    function add$1(input, value) {
      return addSubtract$1(this, input, value, 1);
    } // supports only 2.0-style subtract(1, 's') or subtract(duration)


    function subtract$1(input, value) {
      return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
      if (number < 0) {
        return Math.floor(number);
      } else {
        return Math.ceil(number);
      }
    }

    function bubble() {
      var milliseconds = this._milliseconds,
          days = this._days,
          months = this._months,
          data = this._data,
          seconds,
          minutes,
          hours,
          years,
          monthsFromDays; // if we have a mix of positive and negative values, bubble down first
      // check: https://github.com/moment/moment/issues/2166

      if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
      } // The following code bubbles up values, see the tests for
      // examples of what that means.


      data.milliseconds = milliseconds % 1000;
      seconds = absFloor(milliseconds / 1000);
      data.seconds = seconds % 60;
      minutes = absFloor(seconds / 60);
      data.minutes = minutes % 60;
      hours = absFloor(minutes / 60);
      data.hours = hours % 24;
      days += absFloor(hours / 24); // convert days to months

      monthsFromDays = absFloor(daysToMonths(days));
      months += monthsFromDays;
      days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

      years = absFloor(months / 12);
      months %= 12;
      data.days = days;
      data.months = months;
      data.years = years;
      return this;
    }

    function daysToMonths(days) {
      // 400 years have 146097 days (taking into account leap year rules)
      // 400 years have 12 months === 4800
      return days * 4800 / 146097;
    }

    function monthsToDays(months) {
      // the reverse of daysToMonths
      return months * 146097 / 4800;
    }

    function as(units) {
      if (!this.isValid()) {
        return NaN;
      }

      var days,
          months,
          milliseconds = this._milliseconds;
      units = normalizeUnits(units);

      if (units === 'month' || units === 'quarter' || units === 'year') {
        days = this._days + milliseconds / 864e5;
        months = this._months + daysToMonths(days);

        switch (units) {
          case 'month':
            return months;

          case 'quarter':
            return months / 3;

          case 'year':
            return months / 12;
        }
      } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));

        switch (units) {
          case 'week':
            return days / 7 + milliseconds / 6048e5;

          case 'day':
            return days + milliseconds / 864e5;

          case 'hour':
            return days * 24 + milliseconds / 36e5;

          case 'minute':
            return days * 1440 + milliseconds / 6e4;

          case 'second':
            return days * 86400 + milliseconds / 1000;
          // Math.floor prevents floating point math errors here

          case 'millisecond':
            return Math.floor(days * 864e5) + milliseconds;

          default:
            throw new Error('Unknown unit ' + units);
        }
      }
    } // TODO: Use this.as('ms')?


    function valueOf$1() {
      if (!this.isValid()) {
        return NaN;
      }

      return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
    }

    function makeAs(alias) {
      return function () {
        return this.as(alias);
      };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y');

    function clone$1() {
      return createDuration(this);
    }

    function get$2(units) {
      units = normalizeUnits(units);
      return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
      return function () {
        return this.isValid() ? this._data[name] : NaN;
      };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
      return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month/week
      w: null,
      // weeks to month
      M: 11 // months to year

    }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
      return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
      var duration = createDuration(posNegDuration).abs(),
          seconds = round(duration.as('s')),
          minutes = round(duration.as('m')),
          hours = round(duration.as('h')),
          days = round(duration.as('d')),
          months = round(duration.as('M')),
          weeks = round(duration.as('w')),
          years = round(duration.as('y')),
          a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days];

      if (thresholds.w != null) {
        a = a || weeks <= 1 && ['w'] || weeks < thresholds.w && ['ww', weeks];
      }

      a = a || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
      a[2] = withoutSuffix;
      a[3] = +posNegDuration > 0;
      a[4] = locale;
      return substituteTimeAgo.apply(null, a);
    } // This function allows you to set the rounding function for relative time strings


    function getSetRelativeTimeRounding(roundingFunction) {
      if (roundingFunction === undefined) {
        return round;
      }

      if (typeof roundingFunction === 'function') {
        round = roundingFunction;
        return true;
      }

      return false;
    } // This function allows you to set a threshold for relative time strings


    function getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === undefined) {
        return false;
      }

      if (limit === undefined) {
        return thresholds[threshold];
      }

      thresholds[threshold] = limit;

      if (threshold === 's') {
        thresholds.ss = limit - 1;
      }

      return true;
    }

    function humanize(argWithSuffix, argThresholds) {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }

      var withSuffix = false,
          th = thresholds,
          locale,
          output;

      if (typeof argWithSuffix === 'object') {
        argThresholds = argWithSuffix;
        argWithSuffix = false;
      }

      if (typeof argWithSuffix === 'boolean') {
        withSuffix = argWithSuffix;
      }

      if (typeof argThresholds === 'object') {
        th = Object.assign({}, thresholds, argThresholds);

        if (argThresholds.s != null && argThresholds.ss == null) {
          th.ss = argThresholds.s - 1;
        }
      }

      locale = this.localeData();
      output = relativeTime$1(this, !withSuffix, th, locale);

      if (withSuffix) {
        output = locale.pastFuture(+this, output);
      }

      return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
      return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
      // for ISO strings we do not use the normal bubbling rules:
      //  * milliseconds bubble up until they become hours
      //  * days do not bubble at all
      //  * months bubble up until they become years
      // This is because there is no context-free conversion between hours and days
      // (think of clock changes)
      // and also not between days and months (28-31 days per month)
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }

      var seconds = abs$1(this._milliseconds) / 1000,
          days = abs$1(this._days),
          months = abs$1(this._months),
          minutes,
          hours,
          years,
          s,
          total = this.asSeconds(),
          totalSign,
          ymSign,
          daysSign,
          hmsSign;

      if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
      } // 3600 seconds -> 60 minutes -> 1 hour


      minutes = absFloor(seconds / 60);
      hours = absFloor(minutes / 60);
      seconds %= 60;
      minutes %= 60; // 12 months -> 1 year

      years = absFloor(months / 12);
      months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

      s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
      totalSign = total < 0 ? '-' : '';
      ymSign = sign(this._months) !== sign(total) ? '-' : '';
      daysSign = sign(this._days) !== sign(total) ? '-' : '';
      hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
      return totalSign + 'P' + (years ? ymSign + years + 'Y' : '') + (months ? ymSign + months + 'M' : '') + (days ? daysSign + days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hmsSign + hours + 'H' : '') + (minutes ? hmsSign + minutes + 'M' : '') + (seconds ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang; // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf'); // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
      config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
      config._d = new Date(toInt(input));
    }); //! moment.js

    hooks.version = '2.29.4';
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

    hooks.HTML5_FMT = {
      DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
      // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
      // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
      // <input type="datetime-local" step="0.001" />
      DATE: 'YYYY-MM-DD',
      // <input type="date" />
      TIME: 'HH:mm',
      // <input type="time" />
      TIME_SECONDS: 'HH:mm:ss',
      // <input type="time" step="1" />
      TIME_MS: 'HH:mm:ss.SSS',
      // <input type="time" step="0.001" />
      WEEK: 'GGGG-[W]WW',
      // <input type="week" />
      MONTH: 'YYYY-MM' // <input type="month" />

    };
    return hooks;
  });
})(moment$1);

var moment = moment$1.exports;
new Intl.DateTimeFormat().resolvedOptions().locale;

var returnAfterMinimum = function (millisecs, f) {
  var fArgs = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    fArgs[_i - 2] = arguments[_i];
  }

  return __awaiter(void 0, void 0, void 0, function () {
    var start, val, end, diff;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          start = moment();
          return [4
          /*yield*/
          , f.apply(void 0, __spreadArray([], __read(fArgs), false))];

        case 1:
          val = _a.sent();
          end = moment();
          diff = end.diff(start, "milliseconds");
          if (!(diff < millisecs)) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , new Promise(function (resolve) {
            setTimeout(resolve, millisecs - diff);
          })];

        case 2:
          _a.sent();

          _a.label = 3;

        case 3:
          return [2
          /*return*/
          , val];
      }
    });
  });
};

function newIdGenerator() {
  var id;
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        id = 0;
        _a.label = 1;

      case 1:
        return [4
        /*yield*/
        , id++];

      case 2:
        _a.sent();

        return [3
        /*break*/
        , 1];

      case 3:
        return [2
        /*return*/
        ];
    }
  });
}

var nextId = function (generator) {
  return generator.next().value;
};

var gen = newIdGenerator();
var visibleLoaderIds = mobx.observable(new Set());
var logger = new Logger("useLoader");

var useLoader = function () {
  logger.writeInfo("Called");
  var Loader = React.useRef();
  var withLoading = React.useRef();

  if (!Loader.current || !withLoading.current) {
    var id_1 = nextId(gen);
    logger.writeInfo("Creating new loader id:", id_1);

    Loader.current = function (_a) {
      var cssStyles = _a.cssStyles,
          showSpinner = _a.showSpinner,
          props = __rest(_a, ["cssStyles", "showSpinner"]);

      return jsxRuntime.jsx(mobxReact.Observer, {
        children: function () {
          logger.writeInfo("Rendering Loader id:", id_1, "showSpinner", showSpinner, "visibleLoaderIds.has(id)", visibleLoaderIds.has(id_1));
          return jsxRuntime.jsx(Loadable, __assign({
            debugId: id_1,
            showSpinner: showSpinner != null ? showSpinner : visibleLoaderIds.has(id_1)
          }, props, {
            css: cssStyles
          }));
        }
      });
    };

    withLoading.current = function (f) {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            return [2
            /*return*/
            , new Promise(function (resolve) {
              mobx.action(function () {
                visibleLoaderIds.add(id_1);
                returnAfterMinimum.apply(void 0, __spreadArray([500, f], __read(args), false)).then(resolve).finally(function () {
                  visibleLoaderIds.delete(id_1);
                });
              });
            })];
          });
        });
      };
    };
  }

  return {
    withLoading: withLoading.current,
    Loader: Loader.current
  };
};

var TranslucentLoader = function (_a) {
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

TranslucentLoader = styled__default["default"](TranslucentLoader)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var Container = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  ", "\n"], ["\n  position: relative;\n  ", "\n"])), function (_a) {
  var _css = _a._css;
  return _css ? _css : "";
});
var SpinnerContainer = styled__default["default"](FlexBox)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: white;\n  opacity: .7;\n  top: 0;\n  left: 0;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n"], ["\n  background: white;\n  opacity: .7;\n  top: 0;\n  left: 0;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n"])));
var templateObject_1, templateObject_2, templateObject_3;

var useLoaderV2 = function () {
  var _a = __read(React.useState(false), 2),
      loading = _a[0],
      setLoading = _a[1];

  var withLoading = React.useMemo(function () {
    return function (p) {
      return __awaiter(void 0, void 0, void 0, function () {
        var val;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              setLoading(true);
              _a.label = 1;

            case 1:
              _a.trys.push([1,, 3, 4]);

              return [4
              /*yield*/
              , p];

            case 2:
              val = _a.sent();
              return [3
              /*break*/
              , 4];

            case 3:
              setLoading(false);
              return [7
              /*endfinally*/
              ];

            case 4:
              return [2
              /*return*/
              , val];
          }
        });
      });
    };
  }, []);
  var Loader = React.useMemo(function () {
    return function (_a) {
      var as = _a.as,
          props = __rest(_a, ["as"]);

      return jsxRuntime.jsx(TranslucentLoader, __assign({}, props, {
        innerAs: as,
        isLoading: loading
      }));
    };
  }, [loading]);
  return {
    isLoading: loading,
    Loader: Loader,
    withLoading: withLoading
  };
};

var useTheme = function () {
  return React.useContext(styled.ThemeContext);
}; // export const setThemeContext = (ctx :)


exports.useLoader = useLoader;
exports.useLoaderV2 = useLoaderV2;
exports.useTheme = useTheme;
//# sourceMappingURL=hooks.js.map
