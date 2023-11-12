Object.defineProperty(exports, "__esModule", {
  value: true,
})
var jsxRuntime = require("react/jsx-runtime")
var styled = require("styled-components")
var React__default = require("react")
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e
    ? e
    : {
        default: e,
      }
}
function _interopNamespace(e) {
  if (e && e.__esModule) return e
  var n = Object.create(null)
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k)
        Object.defineProperty(
          n,
          k,
          d.get
            ? d
            : {
                enumerable: true,
                get: function () {
                  return e[k]
                },
              },
        )
      }
    })
  }
  n["default"] = e
  return Object.freeze(n)
}
var styled__default = /*#__PURE__*/ _interopDefaultLegacy(styled)
var React__default__namespace = /*#__PURE__*/ _interopNamespace(React__default)
var React__default__default =
  /*#__PURE__*/ _interopDefaultLegacy(React__default)

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
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i]
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
      }
      return t
    }
  return __assign.apply(this, arguments)
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw,
    })
  } else {
    cooked.raw = raw
  }
  return cooked
}
typeof SuppressedError === "function"
  ? SuppressedError
  : function (error, suppressed, message) {
      var e = new Error(message)
      return (
        (e.name = "SuppressedError"),
        (e.error = error),
        (e.suppressed = suppressed),
        e
      )
    }

/**
 * @reach/utils v0.18.0
 *
 * Copyright (c) 2018-2022, React Training LLC
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

// src/can-use-dom.ts
function canUseDOM() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  )
}
var useIsomorphicLayoutEffect = canUseDOM()
  ? React__default.useLayoutEffect
  : React__default.useEffect
var serverHandoffComplete = false
var id = 0
function genId() {
  return ++id
}
var maybeReactUseId = React__default__namespace["useId".toString()]
function useId$1(providedId) {
  if (maybeReactUseId !== void 0) {
    let generatedId = maybeReactUseId()
    return providedId ?? generatedId
  }
  let initialId = providedId ?? (serverHandoffComplete ? genId() : null)
  let [id2, setId] = React__default__namespace.useState(initialId)
  useIsomorphicLayoutEffect(() => {
    if (id2 === null) {
      setId(genId())
    }
  }, [])
  React__default__namespace.useEffect(() => {
    if (serverHandoffComplete === false) {
      serverHandoffComplete = true
    }
  }, [])
  return providedId ?? id2 ?? void 0
}

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

function composeEventHandlers() {
  for (
    var _len = arguments.length, fns = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    fns[_key] = arguments[_key]
  }
  return function (event) {
    for (
      var _len2 = arguments.length,
        args = new Array(_len2 > 1 ? _len2 - 1 : 0),
        _key2 = 1;
      _key2 < _len2;
      _key2++
    ) {
      args[_key2 - 1] = arguments[_key2]
    }
    return fns.some((fn) => {
      fn && fn(event, ...args)
      return event && event.defaultPrevented
    })
  }
}
function getControlledValue() {
  for (
    var _len = arguments.length, values = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    values[_key] = arguments[_key]
  }
  for (const value of values) {
    if (value !== undefined) {
      return value
    }
  }
  return undefined
}
const KEY_CODES = {
  ALT: 18,
  ASTERISK: 170,
  BACKSPACE: 8,
  COMMA: 188,
  DELETE: 46,
  DOWN: 40,
  END: 35,
  ENTER: 13,
  ESCAPE: 27,
  HOME: 36,
  LEFT: 37,
  NUMPAD_ADD: 107,
  NUMPAD_DECIMAL: 110,
  NUMPAD_DIVIDE: 111,
  NUMPAD_ENTER: 108,
  NUMPAD_MULTIPLY: 106,
  NUMPAD_SUBTRACT: 109,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  PERIOD: 190,
  RIGHT: 39,
  SHIFT: 16,
  SPACE: 32,
  TAB: 9,
  UP: 38,
}
var DocumentPosition
;(function (DocumentPosition) {
  DocumentPosition[(DocumentPosition["DISCONNECTED"] = 1)] = "DISCONNECTED"
  DocumentPosition[(DocumentPosition["PRECEDING"] = 2)] = "PRECEDING"
  DocumentPosition[(DocumentPosition["FOLLOWING"] = 4)] = "FOLLOWING"
  DocumentPosition[(DocumentPosition["CONTAINS"] = 8)] = "CONTAINS"
  DocumentPosition[(DocumentPosition["CONTAINED_BY"] = 16)] = "CONTAINED_BY"
  DocumentPosition[(DocumentPosition["IMPLEMENTATION_SPECIFIC"] = 32)] =
    "IMPLEMENTATION_SPECIFIC"
})(DocumentPosition || (DocumentPosition = {}))
let idCounter = 0
const useId = (id) => useId$1(id) || `id:${idCounter++}`
var commonjsGlobal =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : typeof self !== "undefined"
    ? self
    : {}
var propTypes = {
  exports: {},
}
var reactIs = {
  exports: {},
}
var reactIs_production_min = {}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min
  hasRequiredReactIs_production_min = 1
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
    y = b ? Symbol.for("react.scope") : 60119
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof
      switch (u) {
        case c:
          switch (((a = a.type), a)) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a
            default:
              switch (((a = a && a.$$typeof), a)) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a
                default:
                  return u
              }
          }
        case d:
          return u
      }
    }
  }
  function A(a) {
    return z(a) === m
  }
  reactIs_production_min.AsyncMode = l
  reactIs_production_min.ConcurrentMode = m
  reactIs_production_min.ContextConsumer = k
  reactIs_production_min.ContextProvider = h
  reactIs_production_min.Element = c
  reactIs_production_min.ForwardRef = n
  reactIs_production_min.Fragment = e
  reactIs_production_min.Lazy = t
  reactIs_production_min.Memo = r
  reactIs_production_min.Portal = d
  reactIs_production_min.Profiler = g
  reactIs_production_min.StrictMode = f
  reactIs_production_min.Suspense = p
  reactIs_production_min.isAsyncMode = function (a) {
    return A(a) || z(a) === l
  }
  reactIs_production_min.isConcurrentMode = A
  reactIs_production_min.isContextConsumer = function (a) {
    return z(a) === k
  }
  reactIs_production_min.isContextProvider = function (a) {
    return z(a) === h
  }
  reactIs_production_min.isElement = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c
  }
  reactIs_production_min.isForwardRef = function (a) {
    return z(a) === n
  }
  reactIs_production_min.isFragment = function (a) {
    return z(a) === e
  }
  reactIs_production_min.isLazy = function (a) {
    return z(a) === t
  }
  reactIs_production_min.isMemo = function (a) {
    return z(a) === r
  }
  reactIs_production_min.isPortal = function (a) {
    return z(a) === d
  }
  reactIs_production_min.isProfiler = function (a) {
    return z(a) === g
  }
  reactIs_production_min.isStrictMode = function (a) {
    return z(a) === f
  }
  reactIs_production_min.isSuspense = function (a) {
    return z(a) === p
  }
  reactIs_production_min.isValidElementType = function (a) {
    return (
      "string" === typeof a ||
      "function" === typeof a ||
      a === e ||
      a === m ||
      a === g ||
      a === f ||
      a === p ||
      a === q ||
      ("object" === typeof a &&
        null !== a &&
        (a.$$typeof === t ||
          a.$$typeof === r ||
          a.$$typeof === h ||
          a.$$typeof === k ||
          a.$$typeof === n ||
          a.$$typeof === w ||
          a.$$typeof === x ||
          a.$$typeof === y ||
          a.$$typeof === v))
    )
  }
  reactIs_production_min.typeOf = z
  return reactIs_production_min
}
var reactIs_development = {}

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development
function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development
  hasRequiredReactIs_development = 1
  if (process.env.NODE_ENV !== "production") {
    ;(function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === "function" && Symbol.for
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 0xeac7
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 0xeaca
      var REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol.for("react.fragment")
        : 0xeacb
      var REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.strict_mode")
        : 0xeacc
      var REACT_PROFILER_TYPE = hasSymbol
        ? Symbol.for("react.profiler")
        : 0xead2
      var REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol.for("react.provider")
        : 0xeacd
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 0xeace // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol
        ? Symbol.for("react.async_mode")
        : 0xeacf
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.concurrent_mode")
        : 0xeacf
      var REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol.for("react.forward_ref")
        : 0xead0
      var REACT_SUSPENSE_TYPE = hasSymbol
        ? Symbol.for("react.suspense")
        : 0xead1
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol
        ? Symbol.for("react.suspense_list")
        : 0xead8
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 0xead9
      var REACT_FUNDAMENTAL_TYPE = hasSymbol
        ? Symbol.for("react.fundamental")
        : 0xead5
      var REACT_RESPONDER_TYPE = hasSymbol
        ? Symbol.for("react.responder")
        : 0xead6
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 0xead7
      function isValidElementType(type) {
        return (
          typeof type === "string" ||
          typeof type === "function" ||
          // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === "object" &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        )
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type
                default:
                  var $$typeofType = type && type.$$typeof
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType
                    default:
                      return $$typeof
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof
          }
        }
        return undefined
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE
      var ContextConsumer = REACT_CONTEXT_TYPE
      var ContextProvider = REACT_PROVIDER_TYPE
      var Element = REACT_ELEMENT_TYPE
      var ForwardRef = REACT_FORWARD_REF_TYPE
      var Fragment = REACT_FRAGMENT_TYPE
      var Lazy = REACT_LAZY_TYPE
      var Memo = REACT_MEMO_TYPE
      var Portal = REACT_PORTAL_TYPE
      var Profiler = REACT_PROFILER_TYPE
      var StrictMode = REACT_STRICT_MODE_TYPE
      var Suspense = REACT_SUSPENSE_TYPE
      var hasWarnedAboutDeprecatedIsAsyncMode = false // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true // Using console['warn'] to evade Babel and ESLint

            console["warn"](
              "The ReactIs.isAsyncMode() alias has been deprecated, " +
                "and will be removed in React 17+. Update your code to use " +
                "ReactIs.isConcurrentMode() instead. It has the exact same API.",
            )
          }
        }
        return (
          isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
        )
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE
      }
      function isElement(object) {
        return (
          typeof object === "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        )
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE
      }
      reactIs_development.AsyncMode = AsyncMode
      reactIs_development.ConcurrentMode = ConcurrentMode
      reactIs_development.ContextConsumer = ContextConsumer
      reactIs_development.ContextProvider = ContextProvider
      reactIs_development.Element = Element
      reactIs_development.ForwardRef = ForwardRef
      reactIs_development.Fragment = Fragment
      reactIs_development.Lazy = Lazy
      reactIs_development.Memo = Memo
      reactIs_development.Portal = Portal
      reactIs_development.Profiler = Profiler
      reactIs_development.StrictMode = StrictMode
      reactIs_development.Suspense = Suspense
      reactIs_development.isAsyncMode = isAsyncMode
      reactIs_development.isConcurrentMode = isConcurrentMode
      reactIs_development.isContextConsumer = isContextConsumer
      reactIs_development.isContextProvider = isContextProvider
      reactIs_development.isElement = isElement
      reactIs_development.isForwardRef = isForwardRef
      reactIs_development.isFragment = isFragment
      reactIs_development.isLazy = isLazy
      reactIs_development.isMemo = isMemo
      reactIs_development.isPortal = isPortal
      reactIs_development.isProfiler = isProfiler
      reactIs_development.isStrictMode = isStrictMode
      reactIs_development.isSuspense = isSuspense
      reactIs_development.isValidElementType = isValidElementType
      reactIs_development.typeOf = typeOf
    })()
  }
  return reactIs_development
}
var hasRequiredReactIs
function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports
  hasRequiredReactIs = 1
  ;(function (module) {
    if (process.env.NODE_ENV === "production") {
      module.exports = requireReactIs_production_min()
    } else {
      module.exports = requireReactIs_development()
    }
  })(reactIs)
  return reactIs.exports
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign
var hasRequiredObjectAssign
function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign
  hasRequiredObjectAssign = 1
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols
  var hasOwnProperty = Object.prototype.hasOwnProperty
  var propIsEnumerable = Object.prototype.propertyIsEnumerable
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        "Object.assign cannot be called with null or undefined",
      )
    }
    return Object(val)
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String("abc") // eslint-disable-line no-new-wrappers
      test1[5] = "de"
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {}
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n]
      })
      if (order2.join("") !== "0123456789") {
        return false
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {}
      "abcdefghijklmnopqrst".split("").forEach(function (letter) {
        test3[letter] = letter
      })
      if (
        Object.keys(Object.assign({}, test3)).join("") !==
        "abcdefghijklmnopqrst"
      ) {
        return false
      }
      return true
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false
    }
  }
  objectAssign = shouldUseNative()
    ? Object.assign
    : function (target, source) {
        var from
        var to = toObject(target)
        var symbols
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s])
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key]
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from)
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]]
              }
            }
          }
        }
        return to
      }
  return objectAssign
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1
var hasRequiredReactPropTypesSecret
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1
  hasRequiredReactPropTypesSecret = 1
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  ReactPropTypesSecret_1 = ReactPropTypesSecret
  return ReactPropTypesSecret_1
}
var has
var hasRequiredHas
function requireHas() {
  if (hasRequiredHas) return has
  hasRequiredHas = 1
  has = Function.call.bind(Object.prototype.hasOwnProperty)
  return has
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1
var hasRequiredCheckPropTypes
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1
  hasRequiredCheckPropTypes = 1
  var printWarning = function () {}
  if (process.env.NODE_ENV !== "production") {
    var ReactPropTypesSecret = requireReactPropTypesSecret()
    var loggedTypeFailures = {}
    var has = requireHas()
    printWarning = function (text) {
      var message = "Warning: " + text
      if (typeof console !== "undefined") {
        console.error(message)
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {
        /**/
      }
    }
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
  function checkPropTypes(
    typeSpecs,
    values,
    location,
    componentName,
    getStack,
  ) {
    if (process.env.NODE_ENV !== "production") {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error(
                (componentName || "React class") +
                  ": " +
                  location +
                  " type `" +
                  typeSpecName +
                  "` is invalid; " +
                  "it must be a function, usually from the `prop-types` package, but received `" +
                  typeof typeSpecs[typeSpecName] +
                  "`." +
                  "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
              )
              err.name = "Invariant Violation"
              throw err
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret,
            )
          } catch (ex) {
            error = ex
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || "React class") +
                ": type specification of " +
                location +
                " `" +
                typeSpecName +
                "` is invalid; the type checker " +
                "function must return `null` or an `Error` but returned a " +
                typeof error +
                ". " +
                "You may have forgotten to pass an argument to the type checker " +
                "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
                "shape all require an argument).",
            )
          }
          if (
            error instanceof Error &&
            !(error.message in loggedTypeFailures)
          ) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true
            var stack = getStack ? getStack() : ""
            printWarning(
              "Failed " +
                location +
                " type: " +
                error.message +
                (stack != null ? stack : ""),
            )
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
    if (process.env.NODE_ENV !== "production") {
      loggedTypeFailures = {}
    }
  }
  checkPropTypes_1 = checkPropTypes
  return checkPropTypes_1
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers
var hasRequiredFactoryWithTypeCheckers
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers
  hasRequiredFactoryWithTypeCheckers = 1
  var ReactIs = requireReactIs()
  var assign = requireObjectAssign()
  var ReactPropTypesSecret = requireReactPropTypesSecret()
  var has = requireHas()
  var checkPropTypes = requireCheckPropTypes()
  var printWarning = function () {}
  if (process.env.NODE_ENV !== "production") {
    printWarning = function (text) {
      var message = "Warning: " + text
      if (typeof console !== "undefined") {
        console.error(message)
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {}
    }
  }
  function emptyFunctionThatReturnsNull() {
    return null
  }
  factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator
    var FAUX_ITERATOR_SYMBOL = "@@iterator" // Before Symbol spec.

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
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL])
      if (typeof iteratorFn === "function") {
        return iteratorFn
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

    var ANONYMOUS = "<<anonymous>>"

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker("array"),
      bigint: createPrimitiveTypeChecker("bigint"),
      bool: createPrimitiveTypeChecker("boolean"),
      func: createPrimitiveTypeChecker("function"),
      number: createPrimitiveTypeChecker("number"),
      object: createPrimitiveTypeChecker("object"),
      string: createPrimitiveTypeChecker("string"),
      symbol: createPrimitiveTypeChecker("symbol"),
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
      exact: createStrictShapeTypeChecker,
    }

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
        return x !== 0 || 1 / x === 1 / y
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y
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
      this.message = message
      this.data = data && typeof data === "object" ? data : {}
      this.stack = ""
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype
    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== "production") {
        var manualPropTypeCallCache = {}
        var manualPropTypeWarningCount = 0
      }
      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret,
      ) {
        componentName = componentName || ANONYMOUS
        propFullName = propFullName || propName
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                "Use `PropTypes.checkPropTypes()` to call them. " +
                "Read more at http://fb.me/use-check-prop-types",
            )
            err.name = "Invariant Violation"
            throw err
          } else if (
            process.env.NODE_ENV !== "production" &&
            typeof console !== "undefined"
          ) {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ":" + propName
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning(
                "You are manually calling a React.PropTypes validation " +
                  "function for the `" +
                  propFullName +
                  "` prop on `" +
                  componentName +
                  "`. This is deprecated " +
                  "and will throw in the standalone `prop-types` package. " +
                  "You may be seeing this warning due to a third-party PropTypes " +
                  "library. See https://fb.me/react-warning-dont-call-proptypes " +
                  "for details.",
              )
              manualPropTypeCallCache[cacheKey] = true
              manualPropTypeWarningCount++
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                "The " +
                  location +
                  " `" +
                  propFullName +
                  "` is marked as required " +
                  ("in `" + componentName + "`, but its value is `null`."),
              )
            }
            return new PropTypeError(
              "The " +
                location +
                " `" +
                propFullName +
                "` is marked as required in " +
                ("`" + componentName + "`, but its value is `undefined`."),
            )
          }
          return null
        } else {
          return validate(
            props,
            propName,
            componentName,
            location,
            propFullName,
          )
        }
      }
      var chainedCheckType = checkType.bind(null, false)
      chainedCheckType.isRequired = checkType.bind(null, true)
      return chainedCheckType
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret,
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue)
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                preciseType +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("`" + expectedType + "`."),
            {
              expectedType: expectedType,
            },
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull)
    }
    function createArrayOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside arrayOf.",
          )
        }
        var propValue = props[propName]
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an array."),
          )
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + "[" + i + "]",
            ReactPropTypesSecret,
          )
          if (error instanceof Error) {
            return error
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }
    function createElementTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName]
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement."),
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }
    function createElementTypeTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName]
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement type."),
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }
    function createInstanceTypeChecker(expectedClass) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS
          var actualClassName = getClassName(props[propName])
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                actualClassName +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("instance of `" + expectedClassName + "`."),
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== "production") {
          if (arguments.length > 1) {
            printWarning(
              "Invalid arguments supplied to oneOf, expected an array, got " +
                arguments.length +
                " arguments. " +
                "A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).",
            )
          } else {
            printWarning(
              "Invalid argument supplied to oneOf, expected an array.",
            )
          }
        }
        return emptyFunctionThatReturnsNull
      }
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName]
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null
          }
        }
        var valuesString = JSON.stringify(
          expectedValues,
          function replacer(key, value) {
            var type = getPreciseType(value)
            if (type === "symbol") {
              return String(value)
            }
            return value
          },
        )
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of value `" +
            String(propValue) +
            "` " +
            ("supplied to `" +
              componentName +
              "`, expected one of " +
              valuesString +
              "."),
        )
      }
      return createChainableTypeChecker(validate)
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside objectOf.",
          )
        }
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an object."),
          )
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret,
            )
            if (error instanceof Error) {
              return error
            }
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== "production"
          ? printWarning(
              "Invalid argument supplied to oneOfType, expected an instance of array.",
            )
          : void 0
        return emptyFunctionThatReturnsNull
      }
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i]
        if (typeof checker !== "function") {
          printWarning(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
              "received " +
              getPostfixForTypeWarning(checker) +
              " at index " +
              i +
              ".",
          )
          return emptyFunctionThatReturnsNull
        }
      }
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var expectedTypes = []
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i]
          var checkerResult = checker(
            props,
            propName,
            componentName,
            location,
            propFullName,
            ReactPropTypesSecret,
          )
          if (checkerResult == null) {
            return null
          }
          if (checkerResult.data && has(checkerResult.data, "expectedType")) {
            expectedTypes.push(checkerResult.data.expectedType)
          }
        }
        var expectedTypesMessage =
          expectedTypes.length > 0
            ? ", expected one of type [" + expectedTypes.join(", ") + "]"
            : ""
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` supplied to " +
            ("`" + componentName + "`" + expectedTypesMessage + "."),
        )
      }
      return createChainableTypeChecker(validate)
    }
    function createNodeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` supplied to " +
              ("`" + componentName + "`, expected a ReactNode."),
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }
    function invalidValidatorError(
      componentName,
      location,
      propFullName,
      key,
      type,
    ) {
      return new PropTypeError(
        (componentName || "React class") +
          ": " +
          location +
          " type `" +
          propFullName +
          "." +
          key +
          "` is invalid; " +
          "it must be a function, usually from the `prop-types` package, but received `" +
          type +
          "`.",
      )
    }
    function createShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" + componentName + "`, expected `object`."),
          )
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key]
          if (typeof checker !== "function") {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker),
            )
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret,
          )
          if (error) {
            return error
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" + componentName + "`, expected `object`."),
          )
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = assign({}, props[propName], shapeTypes)
        for (var key in allKeys) {
          var checker = shapeTypes[key]
          if (has(shapeTypes, key) && typeof checker !== "function") {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker),
            )
          }
          if (!checker) {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` key `" +
                key +
                "` supplied to `" +
                componentName +
                "`." +
                "\nBad object: " +
                JSON.stringify(props[propName], null, "  ") +
                "\nValid keys: " +
                JSON.stringify(Object.keys(shapeTypes), null, "  "),
            )
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret,
          )
          if (error) {
            return error
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }
    function isNode(propValue) {
      switch (typeof propValue) {
        case "number":
        case "string":
        case "undefined":
          return true
        case "boolean":
          return !propValue
        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode)
          }
          if (propValue === null || isValidElement(propValue)) {
            return true
          }
          var iteratorFn = getIteratorFn(propValue)
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue)
            var step
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false
                  }
                }
              }
            }
          } else {
            return false
          }
          return true
        default:
          return false
      }
    }
    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === "symbol") {
        return true
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue["@@toStringTag"] === "Symbol") {
        return true
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true
      }
      return false
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue
      if (Array.isArray(propValue)) {
        return "array"
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object"
      }
      if (isSymbol(propType, propValue)) {
        return "symbol"
      }
      return propType
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue
      }
      var propType = getPropType(propValue)
      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date"
        } else if (propValue instanceof RegExp) {
          return "regexp"
        }
      }
      return propType
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value)
      switch (type) {
        case "array":
        case "object":
          return "an " + type
        case "boolean":
        case "date":
        case "regexp":
          return "a " + type
        default:
          return type
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS
      }
      return propValue.constructor.name
    }
    ReactPropTypes.checkPropTypes = checkPropTypes
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache
    ReactPropTypes.PropTypes = ReactPropTypes
    return ReactPropTypes
  }
  return factoryWithTypeCheckers
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims
var hasRequiredFactoryWithThrowingShims
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims
  hasRequiredFactoryWithThrowingShims = 1
  var ReactPropTypesSecret = requireReactPropTypesSecret()
  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction
  factoryWithThrowingShims = function () {
    function shim(
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret,
    ) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
          "Use PropTypes.checkPropTypes() to call them. " +
          "Read more at http://fb.me/use-check-prop-types",
      )
      err.name = "Invariant Violation"
      throw err
    }
    shim.isRequired = shim
    function getShim() {
      return shim
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
      resetWarningCache: emptyFunction,
    }
    ReactPropTypes.PropTypes = ReactPropTypes
    return ReactPropTypes
  }
  return factoryWithThrowingShims
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== "production") {
  var ReactIs = requireReactIs()

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true
  propTypes.exports = requireFactoryWithTypeCheckers()(
    ReactIs.isElement,
    throwOnDirectAccess,
  )
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()()
}

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

function useAccordion(_ref) {
  let {
    idPrefix,
    sections = [],
    expandedSections,
    defaultExpandedSections,
    onChange = () => undefined,
    expandable = true,
    collapsible = true,
  } = _ref
  const prefix = useId(idPrefix)
  const TRIGGER_ID = `${prefix}--trigger`
  const PANEL_ID = `${prefix}--panel`
  const isControlled =
    expandedSections !== null && expandedSections !== undefined
  const [expandedState, setExpandedState] = React__default.useState(
    defaultExpandedSections || sections.slice(0, 1),
  )
  const [disabledState, setDisabledState] = React__default.useState(
    collapsible ? [] : expandedState,
  )
  const internalExpandedState = getControlledValue(
    expandedSections,
    expandedState,
  )
  const toggle = React__default.useCallback(
    (value) => {
      const expanded = []
      const disabled = []
      sections.forEach((sectionValue) => {
        let isExpanded = false
        if (sectionValue === value) {
          isExpanded = collapsible
            ? internalExpandedState.includes(sectionValue) === false
            : true
        } else if (expandable) {
          isExpanded = internalExpandedState.includes(sectionValue)
        }
        if (isExpanded) {
          expanded.push(sectionValue)
          if (!collapsible) {
            disabled.push(sectionValue)
          }
        }
      })
      onChange(value)
      if (isControlled === false) {
        setExpandedState(expanded)
      }
      setDisabledState(disabled)
    },
    [
      sections,
      internalExpandedState,
      collapsible,
      expandable,
      isControlled,
      onChange,
    ],
  )
  const getHeaderProps = React__default.useCallback((_ref2) => {
    let { role = "heading", "aria-level": ariaLevel, ...props } = _ref2
    return {
      role,
      "aria-level": ariaLevel,
      "data-garden-container-id": "containers.accordion",
      "data-garden-container-version": "3.0.2",
      ...props,
    }
  }, [])
  const getTriggerProps = React__default.useCallback(
    (_ref3) => {
      let { value, role = "button", tabIndex = 0, ...props } = _ref3
      return {
        id: `${TRIGGER_ID}:${value}`,
        role,
        tabIndex,
        "aria-controls": `${PANEL_ID}:${value}`,
        "aria-disabled": disabledState.includes(value) || null,
        "aria-expanded": internalExpandedState.includes(value),
        onClick: composeEventHandlers(props.onClick, () => toggle(value)),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (
            event.keyCode === KEY_CODES.SPACE ||
            event.keyCode === KEY_CODES.ENTER
          ) {
            toggle(value)
            event.preventDefault()
          }
        }),
        ...props,
      }
    },
    [PANEL_ID, TRIGGER_ID, internalExpandedState, disabledState, toggle],
  )
  const getPanelProps = React__default.useCallback(
    (_ref4) => {
      let { value, role = "region", ...props } = _ref4
      return {
        id: `${PANEL_ID}:${value}`,
        role,
        "aria-hidden": !internalExpandedState.includes(value),
        "aria-labelledby": `${TRIGGER_ID}:${value}`,
        ...props,
      }
    },
    [PANEL_ID, TRIGGER_ID, internalExpandedState],
  )
  return React__default.useMemo(
    () => ({
      getHeaderProps,
      getTriggerProps,
      getPanelProps,
      expandedSections: internalExpandedState,
      disabledSections: disabledState,
    }),
    [
      getHeaderProps,
      getTriggerProps,
      getPanelProps,
      internalExpandedState,
      disabledState,
    ],
  )
}
;({
  children: propTypes.exports.func,
  render: propTypes.exports.func,
  sections: propTypes.exports.array.isRequired,
  expandedSections: propTypes.exports.array,
  defaultExpandedSections: propTypes.exports.array,
  expandable: propTypes.exports.bool,
  collapsible: propTypes.exports.bool,
  idPrefix: propTypes.exports.string,
  onChange: propTypes.exports.func,
})

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
;({
  children: propTypes.exports.func,
  render: propTypes.exports.func,
  relativeDocument: propTypes.exports.object,
  className: propTypes.exports.string,
  dataAttribute: propTypes.exports.string,
})
function _extends$4() {
  _extends$4 = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      }
  return _extends$4.apply(this, arguments)
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    )
  }
  return self
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p
        return o
      }
  return _setPrototypeOf(o, p)
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype)
  subClass.prototype.constructor = subClass
  _setPrototypeOf(subClass, superClass)
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1
  } catch (e) {
    return typeof fn === "function"
  }
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false
  if (Reflect.construct.sham) return false
  if (typeof Proxy === "function") return true
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    )
    return true
  } catch (e) {
    return false
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind()
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null]
      a.push.apply(a, args)
      var Constructor = Function.bind.apply(Parent, a)
      var instance = new Constructor()
      if (Class) _setPrototypeOf(instance, Class.prototype)
      return instance
    }
  }
  return _construct.apply(null, arguments)
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function")
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class)
      _cache.set(Class, Wrapper)
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor)
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    return _setPrototypeOf(Wrapper, Class)
  }
  return _wrapNativeSuper(Class)
}
function last() {
  var _ref
  return (
    (_ref = arguments.length - 1),
    _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref]
  )
}
function negation(a) {
  return -a
}
function addition(a, b) {
  return a + b
}
function subtraction(a, b) {
  return a - b
}
function multiplication(a, b) {
  return a * b
}
function division(a, b) {
  return a / b
}
function max() {
  return Math.max.apply(Math, arguments)
}
function min() {
  return Math.min.apply(Math, arguments)
}
function comma() {
  return Array.of.apply(Array, arguments)
}
var defaultSymbols = {
  symbols: {
    "*": {
      infix: {
        symbol: "*",
        f: multiplication,
        notation: "infix",
        precedence: 4,
        rightToLeft: 0,
        argCount: 2,
      },
      symbol: "*",
      regSymbol: "\\*",
    },
    "/": {
      infix: {
        symbol: "/",
        f: division,
        notation: "infix",
        precedence: 4,
        rightToLeft: 0,
        argCount: 2,
      },
      symbol: "/",
      regSymbol: "/",
    },
    "+": {
      infix: {
        symbol: "+",
        f: addition,
        notation: "infix",
        precedence: 2,
        rightToLeft: 0,
        argCount: 2,
      },
      prefix: {
        symbol: "+",
        f: last,
        notation: "prefix",
        precedence: 3,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: "+",
      regSymbol: "\\+",
    },
    "-": {
      infix: {
        symbol: "-",
        f: subtraction,
        notation: "infix",
        precedence: 2,
        rightToLeft: 0,
        argCount: 2,
      },
      prefix: {
        symbol: "-",
        f: negation,
        notation: "prefix",
        precedence: 3,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: "-",
      regSymbol: "-",
    },
    ",": {
      infix: {
        symbol: ",",
        f: comma,
        notation: "infix",
        precedence: 1,
        rightToLeft: 0,
        argCount: 2,
      },
      symbol: ",",
      regSymbol: ",",
    },
    "(": {
      prefix: {
        symbol: "(",
        f: last,
        notation: "prefix",
        precedence: 0,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: "(",
      regSymbol: "\\(",
    },
    ")": {
      postfix: {
        symbol: ")",
        f: undefined,
        notation: "postfix",
        precedence: 0,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: ")",
      regSymbol: "\\)",
    },
    min: {
      func: {
        symbol: "min",
        f: min,
        notation: "func",
        precedence: 0,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: "min",
      regSymbol: "min\\b",
    },
    max: {
      func: {
        symbol: "max",
        f: max,
        notation: "func",
        precedence: 0,
        rightToLeft: 0,
        argCount: 1,
      },
      symbol: "max",
      regSymbol: "max\\b",
    },
  },
}
var defaultSymbolMap = defaultSymbols

// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */
var ERRORS = {
  1: "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  2: "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  3: "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  4: "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  5: "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  6: "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  7: "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  8: "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  9: "Please provide a number of steps to the modularScale helper.\n\n",
  10: "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  11: 'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',
  12: 'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',
  13: 'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',
  14: 'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
  15: 'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
  16: "You must provide a template to this method.\n\n",
  17: "You passed an unsupported selector state to this method.\n\n",
  18: "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  19: "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  20: "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: "fontFace expects a name of a font-family.\n\n",
  24: "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  25: "fontFace expects localFonts to be an array.\n\n",
  26: "fontFace expects fileFormats to be an array.\n\n",
  27: "radialGradient requries at least 2 color-stops to properly render.\n\n",
  28: "Please supply a filename to retinaImage() as the first argument.\n\n",
  29: "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  32: "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  33: "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  34: "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  35: 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
  36: "Property must be a string value.\n\n",
  37: "Syntax Error at %s.\n\n",
  38: "Formula contains a function that needs parentheses at %s.\n\n",
  39: "Formula is missing closing parenthesis at %s.\n\n",
  40: "Formula has too many closing parentheses at %s.\n\n",
  41: "All values in a formula must have the same unit or be unitless.\n\n",
  42: "Please provide a number of steps to the modularScale helper.\n\n",
  43: "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  44: "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  45: "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  46: "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  47: "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  48: "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  49: "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  50: "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  51: "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  52: "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  53: "fontFace expects localFonts to be an array.\n\n",
  54: "fontFace expects fileFormats to be an array.\n\n",
  55: "fontFace expects a name of a font-family.\n\n",
  56: "linearGradient requries at least 2 color-stops to properly render.\n\n",
  57: "radialGradient requries at least 2 color-stops to properly render.\n\n",
  58: "Please supply a filename to retinaImage() as the first argument.\n\n",
  59: "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: "Property must be a string value.\n\n",
  62: "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  63: 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
  64: "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  65: "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  66: "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  67: "You must provide a template to this method.\n\n",
  68: "You passed an unsupported selector state to this method.\n\n",
  69: 'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',
  70: 'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',
  71: 'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',
  72: 'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',
  73: "Please provide a valid CSS variable.\n\n",
  74: "CSS variable not found and no default was provided.\n\n",
  75: "important requires a valid style object, got a %s instead.\n\n",
  76: "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  77: 'remToPx expects a value in "rem" but you provided it in "%s".\n\n',
  78: 'base must be set in "px" or "%" but you set it in "%s".\n',
}
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key]
  }
  var a = args[0]
  var b = []
  var c
  for (c = 1; c < args.length; c += 1) {
    b.push(args[c])
  }
  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d)
  })
  return a
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */

var PolishedError = /*#__PURE__*/ (function (_Error) {
  _inheritsLoose(PolishedError, _Error)
  function PolishedError(code) {
    var _this
    if (process.env.NODE_ENV === "production") {
      _this =
        _Error.call(
          this,
          "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
            code +
            " for more information.",
        ) || this
    } else {
      for (
        var _len2 = arguments.length,
          args = new Array(_len2 > 1 ? _len2 - 1 : 0),
          _key2 = 1;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2 - 1] = arguments[_key2]
      }
      _this =
        _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) ||
        this
    }
    return _assertThisInitialized(_this)
  }
  return PolishedError
})(/*#__PURE__*/ _wrapNativeSuper(Error))
var unitRegExp =
  /((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g // Merges additional math functionality into the defaults.

function mergeSymbolMaps(additionalSymbols) {
  var symbolMap = {}
  symbolMap.symbols = additionalSymbols
    ? _extends$4({}, defaultSymbolMap.symbols, additionalSymbols.symbols)
    : _extends$4({}, defaultSymbolMap.symbols)
  return symbolMap
}
function exec(operators, values) {
  var _ref
  var op = operators.pop()
  values.push(
    op.f.apply(op, (_ref = []).concat.apply(_ref, values.splice(-op.argCount))),
  )
  return op.precedence
}
function calculate(expression, additionalSymbols) {
  var symbolMap = mergeSymbolMaps(additionalSymbols)
  var match
  var operators = [symbolMap.symbols["("].prefix]
  var values = []
  var pattern = new RegExp(
    // Pattern for numbers
    "\\d+(?:\\.\\d+)?|" +
      // ...and patterns for individual operators/function names
      Object.keys(symbolMap.symbols)
        .map(function (key) {
          return symbolMap.symbols[key]
        }) // longer symbols should be listed first
        // $FlowFixMe
        .sort(function (a, b) {
          return b.symbol.length - a.symbol.length
        }) // $FlowFixMe
        .map(function (val) {
          return val.regSymbol
        })
        .join("|") +
      "|(\\S)",
    "g",
  )
  pattern.lastIndex = 0 // Reset regular expression object

  var afterValue = false
  do {
    match = pattern.exec(expression)
    var _ref2 = match || [")", undefined],
      token = _ref2[0],
      bad = _ref2[1]
    var notNumber = symbolMap.symbols[token]
    var notNewValue = notNumber && !notNumber.prefix && !notNumber.func
    var notAfterValue = !notNumber || (!notNumber.postfix && !notNumber.infix) // Check for syntax errors:

    if (bad || (afterValue ? notAfterValue : notNewValue)) {
      throw new PolishedError(
        37,
        match ? match.index : expression.length,
        expression,
      )
    }
    if (afterValue) {
      // We either have an infix or postfix operator (they should be mutually exclusive)
      var curr = notNumber.postfix || notNumber.infix
      do {
        var prev = operators[operators.length - 1]
        if ((curr.precedence - prev.precedence || prev.rightToLeft) > 0) break // Apply previous operator, since it has precedence over current one
      } while (exec(operators, values)) // Exit loop after executing an opening parenthesis or function

      afterValue = curr.notation === "postfix"
      if (curr.symbol !== ")") {
        operators.push(curr) // Postfix always has precedence over any operator that follows after it

        if (afterValue) exec(operators, values)
      }
    } else if (notNumber) {
      // prefix operator or function
      operators.push(notNumber.prefix || notNumber.func)
      if (notNumber.func) {
        // Require an opening parenthesis
        match = pattern.exec(expression)
        if (!match || match[0] !== "(") {
          throw new PolishedError(
            38,
            match ? match.index : expression.length,
            expression,
          )
        }
      }
    } else {
      // number
      values.push(+token)
      afterValue = true
    }
  } while (match && operators.length)
  if (operators.length) {
    throw new PolishedError(
      39,
      match ? match.index : expression.length,
      expression,
    )
  } else if (match) {
    throw new PolishedError(
      40,
      match ? match.index : expression.length,
      expression,
    )
  } else {
    return values.pop()
  }
}
function reverseString(str) {
  return str.split("").reverse().join("")
}
/**
 * Helper for doing math with CSS Units. Accepts a formula as a string. All values in the formula must have the same unit (or be unitless). Supports complex formulas utliziing addition, subtraction, multiplication, division, square root, powers, factorial, min, max, as well as parentheses for order of operation.
 *
 *In cases where you need to do calculations with mixed units where one unit is a [relative length unit](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Relative_length_units), you will want to use [CSS Calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).
 *
 * *warning* While we've done everything possible to ensure math safely evalutes formulas expressed as strings, you should always use extreme caution when passing `math` user provided values.
 * @example
 * // Styles as object usage
 * const styles = {
 *   fontSize: math('12rem + 8rem'),
 *   fontSize: math('(12px + 2px) * 3'),
 *   fontSize: math('3px^2 + sqrt(4)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   fontSize: ${math('12rem + 8rem')};
 *   fontSize: ${math('(12px + 2px) * 3')};
 *   fontSize: ${math('3px^2 + sqrt(4)')};
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   fontSize: '20rem',
 *   fontSize: '42px',
 *   fontSize: '11px',
 * }
 */

function math(formula, additionalSymbols) {
  var reversedFormula = reverseString(formula)
  var formulaMatch = reversedFormula.match(unitRegExp) // Check that all units are the same

  if (
    formulaMatch &&
    !formulaMatch.every(function (unit) {
      return unit === formulaMatch[0]
    })
  ) {
    throw new PolishedError(41)
  }
  var cleanFormula = reverseString(reversedFormula.replace(unitRegExp, ""))
  return (
    "" +
    calculate(cleanFormula, additionalSymbols) +
    (formulaMatch ? reverseString(formulaMatch[0]) : "")
  )
}
var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
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
  if (typeof value !== "string") return [value, ""]
  var matchedValue = value.match(cssRegex)
  if (matchedValue) return [parseFloat(value), matchedValue[2]]
  return [value, undefined]
}
function colorToInt(color) {
  return Math.round(color * 255)
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue)
}
function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt
  }
  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness)
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV

  var huePrime = (((hue % 360) + 360) % 360) / 60
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation
  var secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1))
  var red = 0
  var green = 0
  var blue = 0
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma
    green = secondComponent
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent
    green = chroma
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma
    blue = secondComponent
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent
    blue = chroma
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent
    blue = chroma
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma
    blue = secondComponent
  }
  var lightnessModification = lightness - chroma / 2
  var finalRed = red + lightnessModification
  var finalGreen = green + lightnessModification
  var finalBlue = blue + lightnessModification
  return convert(finalRed, finalGreen, finalBlue)
}
var namedColorMap = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
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
  fuchsia: "ff00ff",
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
  rebeccapurple: "639",
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
  yellowgreen: "9acd32",
}
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== "string") return color
  var normalizedColorName = color.toLowerCase()
  return namedColorMap[normalizedColorName]
    ? "#" + namedColorMap[normalizedColorName]
    : color
}
var hexRegex = /^#[a-fA-F0-9]{6}$/
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/
var rgbRegex =
  /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i
var rgbaRegex =
  /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
var hslRegex =
  /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i
var hslaRegex =
  /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
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
  if (typeof color !== "string") {
    throw new PolishedError(3)
  }
  var normalizedColor = nameToHex(color)
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
    }
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat(
      (
        parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255
      ).toFixed(2),
    )
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha,
    }
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
    }
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat(
      (
        parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255
      ).toFixed(2),
    )
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha,
    }
  }
  var rgbMatched = rgbRegex.exec(normalizedColor)
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10),
    }
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50))
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha:
        parseFloat("" + rgbaMatched[4]) > 1
          ? parseFloat("" + rgbaMatched[4]) / 100
          : parseFloat("" + rgbaMatched[4]),
    }
  }
  var hslMatched = hslRegex.exec(normalizedColor)
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10)
    var saturation = parseInt("" + hslMatched[2], 10) / 100
    var lightness = parseInt("" + hslMatched[3], 10) / 100
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")"
    var hslRgbMatched = rgbRegex.exec(rgbColorString)
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString)
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10),
    }
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50))
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10)
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")"
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString)
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString)
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha:
        parseFloat("" + hslaMatched[4]) > 1
          ? parseFloat("" + hslaMatched[4]) / 100
          : parseFloat("" + hslaMatched[4]),
    }
  }
  throw new PolishedError(5)
}
function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255
  var green = color.green / 255
  var blue = color.blue / 255
  var max = Math.max(red, green, blue)
  var min = Math.min(red, green, blue)
  var lightness = (max + min) / 2
  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha,
      }
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
      }
    }
  }
  var hue
  var delta = max - min
  var saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0)
      break
    case green:
      hue = (blue - red) / delta + 2
      break
    default:
      // blue case
      hue = (red - green) / delta + 4
      break
  }
  hue *= 60
  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha,
    }
  }
  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness,
  }
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
  return rgbToHsl(parseToRgb(color))
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (
    value.length === 7 &&
    value[1] === value[2] &&
    value[3] === value[4] &&
    value[5] === value[6]
  ) {
    return "#" + value[1] + value[3] + value[5]
  }
  return value
}
var reduceHexValue$1 = reduceHexValue
function numberToHex(value) {
  var hex = value.toString(16)
  return hex.length === 1 ? "0" + hex : hex
}
function colorToHex(color) {
  return numberToHex(Math.round(color * 255))
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1(
    "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue),
  )
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex)
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
  if (
    typeof value === "number" &&
    typeof saturation === "number" &&
    typeof lightness === "number"
  ) {
    return hslToHex(value, saturation, lightness)
  } else if (
    typeof value === "object" &&
    saturation === undefined &&
    lightness === undefined
  ) {
    return hslToHex(value.hue, value.saturation, value.lightness)
  }
  throw new PolishedError(1)
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
  if (
    typeof value === "number" &&
    typeof saturation === "number" &&
    typeof lightness === "number" &&
    typeof alpha === "number"
  ) {
    return alpha >= 1
      ? hslToHex(value, saturation, lightness)
      : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")"
  } else if (
    typeof value === "object" &&
    saturation === undefined &&
    lightness === undefined &&
    alpha === undefined
  ) {
    return value.alpha >= 1
      ? hslToHex(value.hue, value.saturation, value.lightness)
      : "rgba(" +
          hslToRgb(value.hue, value.saturation, value.lightness) +
          "," +
          value.alpha +
          ")"
  }
  throw new PolishedError(2)
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
  if (
    typeof value === "number" &&
    typeof green === "number" &&
    typeof blue === "number"
  ) {
    return reduceHexValue$1(
      "#" + numberToHex(value) + numberToHex(green) + numberToHex(blue),
    )
  } else if (
    typeof value === "object" &&
    green === undefined &&
    blue === undefined
  ) {
    return reduceHexValue$1(
      "#" +
        numberToHex(value.red) +
        numberToHex(value.green) +
        numberToHex(value.blue),
    )
  }
  throw new PolishedError(6)
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
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    var rgbValue = parseToRgb(firstValue)
    return (
      "rgba(" +
      rgbValue.red +
      "," +
      rgbValue.green +
      "," +
      rgbValue.blue +
      "," +
      secondValue +
      ")"
    )
  } else if (
    typeof firstValue === "number" &&
    typeof secondValue === "number" &&
    typeof thirdValue === "number" &&
    typeof fourthValue === "number"
  ) {
    return fourthValue >= 1
      ? rgb(firstValue, secondValue, thirdValue)
      : "rgba(" +
          firstValue +
          "," +
          secondValue +
          "," +
          thirdValue +
          "," +
          fourthValue +
          ")"
  } else if (
    typeof firstValue === "object" &&
    secondValue === undefined &&
    thirdValue === undefined &&
    fourthValue === undefined
  ) {
    return firstValue.alpha >= 1
      ? rgb(firstValue.red, firstValue.green, firstValue.blue)
      : "rgba(" +
          firstValue.red +
          "," +
          firstValue.green +
          "," +
          firstValue.blue +
          "," +
          firstValue.alpha +
          ")"
  }
  throw new PolishedError(7)
}
var isRgb = function isRgb(color) {
  return (
    typeof color.red === "number" &&
    typeof color.green === "number" &&
    typeof color.blue === "number" &&
    (typeof color.alpha !== "number" || typeof color.alpha === "undefined")
  )
}
var isRgba = function isRgba(color) {
  return (
    typeof color.red === "number" &&
    typeof color.green === "number" &&
    typeof color.blue === "number" &&
    typeof color.alpha === "number"
  )
}
var isHsl = function isHsl(color) {
  return (
    typeof color.hue === "number" &&
    typeof color.saturation === "number" &&
    typeof color.lightness === "number" &&
    (typeof color.alpha !== "number" || typeof color.alpha === "undefined")
  )
}
var isHsla = function isHsla(color) {
  return (
    typeof color.hue === "number" &&
    typeof color.saturation === "number" &&
    typeof color.lightness === "number" &&
    typeof color.alpha === "number"
  )
}
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
  if (typeof color !== "object") throw new PolishedError(8)
  if (isRgba(color)) return rgba(color)
  if (isRgb(color)) return rgb(color)
  if (isHsla(color)) return hsla(color)
  if (isHsl(color)) return hsl(color)
  throw new PolishedError(8)
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments))
    return combined.length >= length
      ? f.apply(this, combined)
      : curried(f, length, combined)
  }
} // eslint-disable-next-line no-redeclare

function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, [])
}
function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value))
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
  return toColorString(_extends$4({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore

var curriedDarken = /*#__PURE__*/ curry(
  /* ::<number | string, string, string> */ darken,
)
var curriedDarken$1 = curriedDarken

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
  return toColorString(_extends$4({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore

var curriedLighten = /*#__PURE__*/ curry(
  /* ::<number | string, string, string> */ lighten,
)
var curriedLighten$1 = curriedLighten

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = "Expected a function"

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = "__lodash_hash_undefined__"

/** `Object#toString` result references. */
var funcTag = "[object Function]",
  genTag = "[object GeneratorFunction]"

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/

/** Detect free variable `global` from Node.js. */
var freeGlobal =
  typeof commonjsGlobal == "object" &&
  commonjsGlobal &&
  commonjsGlobal.Object === Object &&
  commonjsGlobal

/** Detect free variable `self`. */
var freeSelf = typeof self == "object" && self && self.Object === Object && self

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function("return this")()

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key]
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false
  if (value != null && typeof value.toString != "function") {
    try {
      result = !!(value + "")
    } catch (e) {}
  }
  return result
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
  funcProto = Function.prototype,
  objectProto = Object.prototype

/** Used to detect overreaching core-js shims. */
var coreJsData = root["__core-js_shared__"]

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function () {
  var uid = /[^.]+$/.exec(
    (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || "",
  )
  return uid ? "Symbol(src)_1." + uid : ""
})()

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString

/** Used to detect if a method is native. */
var reIsNative = RegExp(
  "^" +
    funcToString
      .call(hasOwnProperty)
      .replace(reRegExpChar, "\\$&")
      .replace(
        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        "$1.*?",
      ) +
    "$",
)

/** Built-in value references. */
var splice = arrayProto.splice

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, "Map"),
  nativeCreate = getNative(Object, "create")

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries ? entries.length : 0
  this.clear()
  while (++index < length) {
    var entry = entries[index]
    this.set(entry[0], entry[1])
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {}
}

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
  return this.has(key) && delete this.__data__[key]
}

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
  var data = this.__data__
  if (nativeCreate) {
    var result = data[key]
    return result === HASH_UNDEFINED ? undefined : result
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined
}

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
  var data = this.__data__
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key)
}

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
  var data = this.__data__
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value
  return this
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear
Hash.prototype["delete"] = hashDelete
Hash.prototype.get = hashGet
Hash.prototype.has = hashHas
Hash.prototype.set = hashSet

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries ? entries.length : 0
  this.clear()
  while (++index < length) {
    var entry = entries[index]
    this.set(entry[0], entry[1])
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = []
}

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
    index = assocIndexOf(data, key)
  if (index < 0) {
    return false
  }
  var lastIndex = data.length - 1
  if (index == lastIndex) {
    data.pop()
  } else {
    splice.call(data, index, 1)
  }
  return true
}

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
    index = assocIndexOf(data, key)
  return index < 0 ? undefined : data[index][1]
}

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
  return assocIndexOf(this.__data__, key) > -1
}

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
    index = assocIndexOf(data, key)
  if (index < 0) {
    data.push([key, value])
  } else {
    data[index][1] = value
  }
  return this
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear
ListCache.prototype["delete"] = listCacheDelete
ListCache.prototype.get = listCacheGet
ListCache.prototype.has = listCacheHas
ListCache.prototype.set = listCacheSet

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries ? entries.length : 0
  this.clear()
  while (++index < length) {
    var entry = entries[index]
    this.set(entry[0], entry[1])
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map$1 || ListCache)(),
    string: new Hash(),
  }
}

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
  return getMapData(this, key)["delete"](key)
}

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
  return getMapData(this, key).get(key)
}

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
  return getMapData(this, key).has(key)
}

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
  getMapData(this, key).set(key, value)
  return this
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear
MapCache.prototype["delete"] = mapCacheDelete
MapCache.prototype.get = mapCacheGet
MapCache.prototype.has = mapCacheHas
MapCache.prototype.set = mapCacheSet

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length
  while (length--) {
    if (eq(array[length][0], key)) {
      return length
    }
  }
  return -1
}

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
    return false
  }
  var pattern =
    isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor
  return pattern.test(toSource(value))
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__
  return isKeyable(key)
    ? data[typeof key == "string" ? "string" : "hash"]
    : data.map
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key)
  return baseIsNative(value) ? value : undefined
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value
  return type == "string" ||
    type == "number" ||
    type == "symbol" ||
    type == "boolean"
    ? value !== "__proto__"
    : value === null
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func)
    } catch (e) {}
    try {
      return func + ""
    } catch (e) {}
  }
  return ""
}

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
 * method interface of `delete`, `get`, `has`, and `set`.
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
  if (
    typeof func != "function" ||
    (resolver && typeof resolver != "function")
  ) {
    throw new TypeError(FUNC_ERROR_TEXT)
  }
  var memoized = function () {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache
    if (cache.has(key)) {
      return cache.get(key)
    }
    var result = func.apply(this, args)
    memoized.cache = cache.set(key, result)
    return result
  }
  memoized.cache = new (memoize.Cache || MapCache)()
  return memoized
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache

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
  return value === other || (value !== value && other !== other)
}

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
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : ""
  return tag == funcTag || tag == genTag
}

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
  var type = typeof value
  return !!value && (type == "object" || type == "function")
}
var lodash_memoize = memoize

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const PALETTE = {
  black: "#000",
  white: "#fff",
  product: {
    support: "#00a656",
    message: "#37b8af",
    explore: "#30aabc",
    gather: "#f6c8be",
    guide: "#eb4962",
    connect: "#ff6224",
    chat: "#f79a3e",
    talk: "#efc93d",
    sell: "#c38f00",
  },
  grey: {
    100: "#f8f9f9",
    200: "#e9ebed",
    300: "#d8dcde",
    400: "#c2c8cc",
    500: "#87929d",
    600: "#68737d",
    700: "#49545c",
    800: "#2f3941",
  },
  blue: {
    100: "#edf7ff",
    200: "#cee2f2",
    300: "#adcce4",
    400: "#5293c7",
    500: "#337fbd",
    600: "#1f73b7",
    700: "#144a75",
    800: "#0f3554",
  },
  red: {
    100: "#fff0f1",
    200: "#f5d5d8",
    300: "#f5b5ba",
    400: "#e35b66",
    500: "#d93f4c",
    600: "#cc3340",
    700: "#8c232c",
    800: "#681219",
  },
  yellow: {
    100: "#fff7ed",
    200: "#ffeedb",
    300: "#fed6a8",
    400: "#ffb057",
    500: "#f79a3e",
    600: "#ed8f1c",
    700: "#ad5918",
    800: "#703815",
  },
  green: {
    100: "#edf8f4",
    200: "#d1e8df",
    300: "#aecfc2",
    400: "#5eae91",
    500: "#228f67",
    600: "#038153",
    700: "#186146",
    800: "#0b3b29",
  },
  kale: {
    100: "#f5fcfc",
    200: "#daeded",
    300: "#bdd9d7",
    400: "#90bbbb",
    500: "#498283",
    600: "#17494d",
    700: "#03363d",
    800: "#012b30",
  },
  fuschia: {
    400: "#d653c2",
    600: "#a81897",
    M400: "#cf62a8",
    M600: "#a8458c",
  },
  pink: {
    400: "#ec4d63",
    600: "#d42054",
    M400: "#d57287",
    M600: "#b23a5d",
  },
  crimson: {
    400: "#e34f32",
    600: "#c72a1c",
    M400: "#cc6c5b",
    M600: "#b24a3c",
  },
  orange: {
    400: "#de701d",
    600: "#bf5000",
    M400: "#d4772c",
    M600: "#b35827",
  },
  lemon: {
    400: "#ffd424",
    600: "#ffbb10",
    M400: "#e7a500",
    M600: "#c38f00",
  },
  lime: {
    400: "#43b324",
    600: "#2e8200",
    M400: "#519e2d",
    M600: "#47782c",
  },
  mint: {
    400: "#00a656",
    600: "#058541",
    M400: "#299c66",
    M600: "#2e8057",
  },
  teal: {
    400: "#02a191",
    600: "#028079",
    M400: "#2d9e8f",
    M600: "#3c7873",
  },
  azure: {
    400: "#3091ec",
    600: "#1371d6",
    M400: "#5f8dcf",
    M600: "#3a70b2",
  },
  royal: {
    400: "#5d7df5",
    600: "#3353e2",
    M400: "#7986d8",
    M600: "#4b61c3",
  },
  purple: {
    400: "#b552e2",
    600: "#6a27b8",
    M400: "#b072cc",
    M600: "#9358b0",
  },
}
const BASE = 4
const borderRadii = {
  sm: `${BASE / 2}px`,
  md: `${BASE}px`,
}
const borderStyles = {
  solid: "solid",
}
const borderWidths = {
  sm: "1px",
  md: "3px",
}
const borders = {
  sm: `${borderWidths.sm} ${borderStyles.solid}`,
  md: `${borderWidths.md} ${borderStyles.solid}`,
}
const breakpoints = {
  xs: "0px",
  sm: `${BASE * 144}px`,
  md: `${BASE * 192}px`,
  lg: `${BASE * 248}px`,
  xl: `${BASE * 300}px`,
}
const colors = {
  background: PALETTE.white,
  foreground: PALETTE.grey[800],
  primaryHue: "blue",
  dangerHue: "red",
  warningHue: "yellow",
  successHue: "green",
  neutralHue: "grey",
  chromeHue: "kale",
}
const fonts = {
  mono: [
    "SFMono-Regular",
    "Consolas",
    '"Liberation Mono"',
    "Menlo",
    "Courier",
    "monospace",
  ].join(","),
  system: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    "Oxygen-Sans",
    "Ubuntu",
    "Cantarell",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(","),
}
const fontSizes = {
  xs: "10px",
  sm: "12px",
  md: "14px",
  lg: "18px",
  xl: "22px",
  xxl: "26px",
  xxxl: "36px",
}
const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}
const iconSizes = {
  sm: "12px",
  md: "16px",
  lg: "26px",
}
const lineHeights = {
  sm: `${BASE * 4}px`,
  md: `${BASE * 5}px`,
  lg: `${BASE * 6}px`,
  xl: `${BASE * 7}px`,
  xxl: `${BASE * 8}px`,
  xxxl: `${BASE * 11}px`,
}
const palette = {
  ...PALETTE,
}
delete palette.product
const shadowWidths = {
  xs: "1px",
  sm: "2px",
  md: "3px",
}
const shadows = {
  xs: (color) => `0 0 0 ${shadowWidths.xs} ${color}`,
  sm: (color) => `0 0 0 ${shadowWidths.sm} ${color}`,
  md: (color) => `0 0 0 ${shadowWidths.md} ${color}`,
  lg: (offsetY, blurRadius, color) => `0 ${offsetY} ${blurRadius} 0 ${color}`,
}
const space = {
  base: BASE,
  xxs: `${BASE}px`,
  xs: `${BASE * 2}px`,
  sm: `${BASE * 3}px`,
  md: `${BASE * 5}px`,
  lg: `${BASE * 8}px`,
  xl: `${BASE * 10}px`,
  xxl: `${BASE * 12}px`,
}
const DEFAULT_THEME = {
  borders,
  borderRadii,
  borderStyles,
  borderWidths,
  breakpoints,
  colors: {
    base: "light",
    ...colors,
  },
  components: {},
  fonts,
  fontSizes,
  fontWeights,
  iconSizes,
  lineHeights,
  palette,
  rtl: false,
  shadowWidths,
  shadows,
  space,
}
function retrieveComponentStyles(componentId, props) {
  const components = props.theme && props.theme.components
  if (!components) {
    return undefined
  }
  const componentStyles = components[componentId]
  if (typeof componentStyles === "function") {
    return componentStyles(props)
  }
  return componentStyles
}
const DEFAULT_SHADE = 600
const adjust = (color, expected, actual) => {
  if (expected !== actual) {
    const amount = (Math.abs(expected - actual) / 100) * 0.05
    return expected > actual
      ? curriedDarken$1(amount, color)
      : curriedLighten$1(amount, color)
  }
  return color
}
const getColor$1 = lodash_memoize(
  function (hue) {
    let shade =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : DEFAULT_SHADE
    let theme = arguments.length > 2 ? arguments[2] : undefined
    let transparency = arguments.length > 3 ? arguments[3] : undefined
    let retVal
    if (isNaN(shade)) {
      return undefined
    }
    const palette =
      theme && theme.palette ? theme.palette : DEFAULT_THEME.palette
    const colors = theme && theme.colors ? theme.colors : DEFAULT_THEME.colors
    let _hue
    if (typeof hue === "string") {
      _hue = colors[hue] || hue
    } else {
      _hue = hue
    }
    if (Object.prototype.hasOwnProperty.call(palette, _hue)) {
      _hue = palette[_hue]
    }
    if (typeof _hue === "object") {
      retVal = _hue[shade]
      if (!retVal) {
        const _shade = Object.keys(_hue)
          .map((hueKey) => parseInt(hueKey, 10))
          .reduce((previous, current) => {
            return Math.abs(current - shade) < Math.abs(previous - shade)
              ? current
              : previous
          })
        retVal = adjust(_hue[_shade], shade, _shade)
      }
    } else {
      retVal = adjust(_hue, shade, DEFAULT_SHADE)
    }
    if (transparency) {
      retVal = rgba(retVal, transparency)
    }
    return retVal
  },
  (hue, shade, theme, transparency) =>
    JSON.stringify({
      hue,
      shade,
      palette: theme?.palette,
      colors: theme?.colors,
      transparency,
    }),
)
const getFocusBoxShadow = (_ref) => {
  let {
    boxShadow,
    inset = false,
    hue = "primaryHue",
    shade = DEFAULT_SHADE,
    shadowWidth = "md",
    spacerHue = "background",
    spacerShade = DEFAULT_SHADE,
    spacerWidth = "xs",
    theme = DEFAULT_THEME,
  } = _ref
  const color = getColor$1(hue, shade, theme)
  const shadow = theme.shadows[shadowWidth](color)
  if (spacerWidth === null) {
    return `${inset ? "inset" : ""} ${shadow}`
  }
  const spacerColor = getColor$1(spacerHue, spacerShade, theme)
  const retVal = `
    ${inset ? "inset" : ""} ${theme.shadows[spacerWidth](spacerColor)},
    ${inset ? "inset" : ""} ${shadow}`
  return boxShadow ? `${retVal}, ${boxShadow}` : retVal
}
function getLineHeight(height, fontSize) {
  const [heightValue, heightUnit] = getValueAndUnit(height.toString())
  const [fontSizeValue, fontSizeUnit] = getValueAndUnit(fontSize.toString())
  const PIXELS = "px"
  if (heightUnit && heightUnit !== PIXELS) {
    throw new Error(`Unexpected \`height\` with '${heightUnit}' units.`)
  }
  if (fontSizeUnit && fontSizeUnit !== PIXELS) {
    throw new Error(`Unexpected \`fontSize\` with '${fontSizeUnit}' units.`)
  }
  return heightValue / fontSizeValue
}
const SELECTOR_FOCUS_VISIBLE =
  '&:focus-visible, &[data-garden-focus-visible="true"]'
const focusStyles = (_ref) => {
  let {
    condition = true,
    selector = SELECTOR_FOCUS_VISIBLE,
    shadowWidth = "md",
    spacerWidth = "xs",
    styles: { boxShadow, ...styles } = {},
    theme,
    ...options
  } = _ref
  const _boxShadow = condition
    ? getFocusBoxShadow({
        boxShadow,
        shadowWidth,
        spacerWidth,
        theme,
        ...options,
      })
    : boxShadow
  let outline
  let outlineOffset
  if (spacerWidth === null) {
    outline = theme.shadowWidths[shadowWidth]
  } else {
    outline = `${math(
      `${theme.shadowWidths[shadowWidth]} - ${theme.shadowWidths[spacerWidth]}`,
    )} solid transparent`
    outlineOffset = theme.shadowWidths[spacerWidth]
  }
  return styled.css(
    [
      "&:focus{outline:none;}",
      "{outline:",
      ";outline-offset:",
      ";box-shadow:",
      ";",
      "}",
    ],
    selector,
    outline,
    outlineOffset,
    _boxShadow,
    styles,
  )
}

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

function _extends$3() {
  _extends$3 = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      }
  return _extends$3.apply(this, arguments)
}
const COMPONENT_ID$k = "accordions.step_content"
const sizeStyles$2 = (props) => {
  const { rtl, space } = props.theme
  const paddingBottom = props.isActive ? space.base * 8 : space.base * 6
  const paddingRight = rtl ? space.base * 6 : space.base * 5
  const paddingLeft = rtl ? space.base * 5 : space.base * 6
  const marginRight = rtl ? space.base * 3 : "0"
  const marginLeft = rtl ? "0" : space.base * 3
  const marginVertical = space.base * 3
  return styled.css(
    [
      "margin:",
      "px ",
      "px ",
      "px ",
      "px;padding:0 ",
      "px ",
      "px ",
      "px;min-width:",
      "px;height:auto;",
    ],
    marginVertical,
    marginRight,
    marginVertical,
    marginLeft,
    paddingRight,
    paddingBottom,
    paddingLeft,
    space.base * 30,
  )
}
const StyledContent = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$k,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledContent",
    componentId: "sc-mazvvo-0",
  })(
  [
    "display:grid;grid-template-rows:",
    "fr;transition:grid-template-rows 0.25s ease-in-out;word-break:break-word;",
    " ",
    ";",
  ],
  (props) => (props.isActive ? 1 : 0),
  sizeStyles$2,
  (props) => retrieveComponentStyles(COMPONENT_ID$k, props),
)
StyledContent.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$j = "accordions.step_line"
const StyledLine = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$j,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledLine",
    componentId: "sc-1gkpjbr-0",
  })(
  [
    "display:block;position:absolute;top:",
    "px;right:",
    ";left:",
    ";flex:1;border-top:",
    ";border-color:",
    ";",
  ],
  (props) => props.theme.space.base * 3,
  (props) => `calc(50% + ${props.theme.space.base * 6}px)`,
  (props) => `calc(-50% + ${props.theme.space.base * 6}px)`,
  (props) => props.theme.borders.sm,
  (props) => getColor$1("neutralHue", 300, props.theme),
)
StyledLine.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$i = "accordions.step"
const StyledStep = styled__default["default"].li
  .attrs({
    "data-garden-id": COMPONENT_ID$i,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledStep",
    componentId: "sc-12fiwtz-0",
  })(
  [
    "position:",
    ";flex:",
    ";min-width:",
    ";&:last-of-type ",
    "{display:",
    ";}&:first-of-type ",
    "{display:",
    ";}&:not(:last-of-type) ",
    "{border-",
    ":",
    ";border-color:",
    ";}",
    ";",
  ],
  (props) => props.isHorizontal && "relative",
  (props) => props.isHorizontal && "1",
  (props) => props.isHorizontal && `${props.theme.space.base * 15}px`,
  StyledLine,
  (props) => props.theme.rtl && "none",
  StyledLine,
  (props) => !props.theme.rtl && "none",
  StyledContent,
  (props) => (props.theme.rtl ? "right" : "left"),
  (props) => props.theme.borders.sm,
  (props) => getColor$1("neutralHue", 300, props.theme),
  (props) => retrieveComponentStyles(COMPONENT_ID$i, props),
)
StyledStep.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$h = "accordions.step_inner_content"
const StyledInnerContent = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$h,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledInnerContent",
    componentId: "sc-1xs9fh7-0",
  })(
  ["overflow:hidden;line-height:", ";color:", ";font-size:", ";", ";"],
  (props) =>
    getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md),
  (props) => props.theme.colors.foreground,
  (props) => props.theme.fontSizes.md,
  (props) => retrieveComponentStyles(COMPONENT_ID$h, props),
)
StyledInnerContent.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$g = "accordions.stepper"
const StyledStepper = styled__default["default"].ol
  .attrs({
    "data-garden-id": COMPONENT_ID$g,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledStepper",
    componentId: "sc-dsxw0f-0",
  })(
  ["display:", ";margin:0;padding:0;list-style:none;", ";"],
  (props) => props.isHorizontal && "flex",
  (props) => retrieveComponentStyles(COMPONENT_ID$g, props),
)
StyledStepper.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$f = "accordions.step_icon"
const StyledIconFlexContainer = styled__default["default"].div.withConfig({
  displayName: "StyledIcon__StyledIconFlexContainer",
  componentId: "sc-v20nz9-0",
})(["display:flex;flex-basis:100%;justify-content:center;width:100%;"])
const sizeStyles$1 = (props) => {
  const size = `${props.theme.space.base * 6}px`
  const fontSize = props.theme.fontSizes.sm
  return styled.css(
    [
      "margin-bottom:",
      ";margin-",
      ":",
      ";width:",
      ";min-width:",
      ";height:",
      ";min-height:",
      ";line-height:",
      ";font-size:",
      ";",
    ],
    props.isHorizontal && `${props.theme.space.base * 2}px`,
    props.theme.rtl ? "left" : "right",
    !props.isHorizontal && `${props.theme.space.base * 3}px`,
    size,
    size,
    size,
    size,
    getLineHeight(size, fontSize),
    fontSize,
  )
}
const colorStyles$3 = (props) => {
  return styled.css(
    ["background:", ";color:", ";"],
    props.isActive
      ? getColor$1("neutralHue", 600, props.theme)
      : getColor$1("neutralHue", 200, props.theme),
    props.isActive
      ? props.theme.colors.background
      : props.theme.colors.foreground,
  )
}
const StyledIcon = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$f,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledIcon",
    componentId: "sc-v20nz9-1",
  })(
  [
    "display:flex;align-items:center;justify-content:center;transition:background 0.25s ease-in-out,color 0.25s ease-in-out;border-radius:100%;",
    " ",
    " ",
    ";",
  ],
  sizeStyles$1,
  colorStyles$3,
  (props) => retrieveComponentStyles(COMPONENT_ID$f, props),
)
StyledIconFlexContainer.defaultProps = {
  theme: DEFAULT_THEME,
}
StyledIcon.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$e = "accordions.step_label"
const StyledLabel = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$e,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledLabel",
    componentId: "sc-1o82llj-0",
  })(
  [
    "display:",
    ";align-items:",
    ";transition:color 0.25s ease-in-out,font-weight 0.25s ease-in-out;text-align:",
    ";line-height:",
    ";color:",
    ";font-size:",
    ";font-weight:",
    ";",
    ";",
  ],
  (props) => !props.isHorizontal && "flex",
  (props) => !props.isHorizontal && "center",
  (props) => props.isHorizontal && "center",
  (props) =>
    getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md),
  (props) =>
    props.isActive
      ? props.theme.colors.foreground
      : getColor$1("neutralHue", 600, props.theme),
  (props) => props.theme.fontSizes.md,
  (props) => props.isActive && 600,
  (props) => retrieveComponentStyles(COMPONENT_ID$e, props),
)
StyledLabel.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$d = "accordions.step_label_text"
const StyledLabelText = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$d,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledLabelText",
    componentId: "sc-111m5zo-0",
  })(
  ["display:", ";padding:", ";word-wrap:", ";"],
  (props) => props.isHidden && "none",
  (props) => props.isHorizontal && `0 ${props.theme.space.base * 3}px`,
  (props) => props.isHorizontal && "break-word",
)
StyledLabelText.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$c = "accordions.accordion"
const StyledAccordion = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$c,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledAccordion",
    componentId: "sc-niv9ic-0",
  })(["", ";"], (props) => retrieveComponentStyles(COMPONENT_ID$c, props))
StyledAccordion.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$b = "accordions.panel"
const colorStyles$2 = (props) => {
  const { theme, isBare } = props
  return styled.css(
    ["border-bottom-color:", ";"],
    isBare ? "transparent" : getColor$1("neutralHue", 300, theme),
  )
}
const sizeStyles = (props) => {
  const { theme, isCompact, isExpanded } = props
  const { base } = theme.space
  let paddingTop = base * 2
  let paddingHorizontal = base * 5
  let paddingBottom = base * 8
  if (isCompact) {
    paddingTop = base * 2
    paddingHorizontal = base * 3
    paddingBottom = base * 4
  }
  if (isExpanded === false) {
    paddingTop = 0
    paddingBottom = 0
  }
  return styled.css(
    [
      "grid-template-rows:",
      "fr;border-bottom-width:",
      ";border-bottom-style:solid;padding:",
      "px ",
      "px ",
      "px;line-height:",
      ";font-size:",
      ";",
    ],
    isExpanded ? 1 : 0,
    theme.borderWidths.sm,
    paddingTop,
    paddingHorizontal,
    paddingBottom,
    getLineHeight(base * 5, theme.fontSizes.md),
    theme.fontSizes.md,
  )
}
const StyledPanel = styled__default["default"].section
  .attrs({
    "data-garden-id": COMPONENT_ID$b,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledPanel",
    componentId: "sc-1piryze-0",
  })(
  ["display:grid;transition:", ";overflow:hidden;", " ", " ", ";"],
  (props) =>
    props.isAnimated &&
    "padding 0.25s ease-in-out, grid-template-rows 0.25s ease-in-out",
  sizeStyles,
  colorStyles$2,
  (props) => retrieveComponentStyles(COMPONENT_ID$b, props),
)
StyledPanel.defaultProps = {
  isAnimated: true,
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$a = "accordions.section"
const StyledSection = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$a,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledSection",
    componentId: "sc-v2t9bd-0",
  })(["&:last-child ", "{border:none;}", ";"], StyledPanel, (props) =>
  retrieveComponentStyles(COMPONENT_ID$a, props),
)
StyledSection.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$9 = "accordions.header"
const StyledHeader = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$9,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledHeader",
    componentId: "sc-2c6rbr-0",
  })(
  [
    "display:flex;align-items:center;transition:box-shadow 0.1s ease-in-out;font-size:",
    ";&:hover{cursor:",
    ";}",
    " ",
    ";",
  ],
  (props) => props.theme.fontSizes.md,
  (props) => (props.isCollapsible || !props.isExpanded) && "pointer",
  (props) =>
    focusStyles({
      theme: props.theme,
      inset: true,
      condition: props.isFocused,
      selector: "&:focus-within",
    }),
  (props) => retrieveComponentStyles(COMPONENT_ID$9, props),
)
StyledHeader.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$8 = "accordions.button"
const colorStyles$1 = (props) => {
  const showColor = props.isCollapsible || !props.isExpanded
  let color = props.theme.colors.foreground
  if (showColor && props.isHovered) {
    color = getColor$1("primaryHue", 600, props.theme)
  }
  return styled.css(
    ["color:", ";&:hover{cursor:", ";color:", ";}"],
    color,
    showColor && "pointer",
    showColor && color,
  )
}
const StyledButton = styled__default["default"].button
  .attrs({
    "data-garden-id": COMPONENT_ID$8,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledButton",
    componentId: "sc-xj3hy7-0",
  })(
  [
    "transition:color 0.1s ease-in-out;outline:none;border:none;background:transparent;padding:",
    ";width:100%;text-align:",
    ";line-height:",
    ";font-family:inherit;font-size:",
    ";font-weight:",
    ";",
    " &::-moz-focus-inner{border:0;}&:hover{cursor:",
    ";}",
    ";",
  ],
  (props) =>
    props.isCompact
      ? `${props.theme.space.base * 2}px ${props.theme.space.base * 3}px`
      : `${props.theme.space.base * 5}px`,
  (props) => (props.theme.rtl ? "right" : "left"),
  (props) =>
    getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md),
  (props) => props.theme.fontSizes.md,
  (props) => props.theme.fontWeights.semibold,
  colorStyles$1,
  (props) => (props.isCollapsible || !props.isExpanded) && "pointer",
  (props) => retrieveComponentStyles(COMPONENT_ID$8, props),
)
StyledButton.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$7 = "accordions.step_inner_panel"
const StyledInnerPanel = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$7,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledInnerPanel",
    componentId: "sc-8nbueg-0",
  })(["overflow:hidden;line-height:inherit;font-size:inherit;", ";"], (props) =>
  retrieveComponentStyles(COMPONENT_ID$7, props),
)
StyledInnerPanel.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$6 = "accordions.rotate_icon"
const colorStyles = (props) => {
  const showColor = props.isCollapsible || !props.isRotated
  let color = getColor$1("neutralHue", 600, props.theme)
  if (showColor && props.isHovered) {
    color = getColor$1("primaryHue", 600, props.theme)
  }
  return styled.css(
    ["color:", ";&:hover{color:", ";}"],
    color,
    showColor && color,
  )
}
const StyledRotateIcon = styled__default["default"]((_ref) => {
  let { children, isRotated, isHovered, isCompact, isCollapsible, ...props } =
    _ref
  return React__default.cloneElement(
    React__default.Children.only(children),
    props,
  )
})
  .attrs({
    "data-garden-id": COMPONENT_ID$6,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledRotateIcon",
    componentId: "sc-hp435q-0",
  })(
  [
    "transform:",
    ";transition:transform 0.25s ease-in-out,color 0.1s ease-in-out;box-sizing:content-box;padding:",
    ";width:",
    ";height:",
    ";vertical-align:middle;",
    " ",
    ";",
  ],
  (props) => props.isRotated && `rotate(${props.theme.rtl ? "-" : "+"}180deg)`,
  (props) =>
    props.isCompact
      ? `${props.theme.space.base * 1.5}px ${props.theme.space.base * 3}px`
      : `${props.theme.space.base * 5}px`,
  (props) => props.theme.iconSizes.md,
  (props) => props.theme.iconSizes.md,
  colorStyles,
  (props) => retrieveComponentStyles(COMPONENT_ID$6, props),
)
StyledRotateIcon.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$5 = "timeline"
const StyledTimeline = styled__default["default"].ol
  .attrs({
    "data-garden-id": COMPONENT_ID$5,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledTimeline",
    componentId: "sc-pig5kv-0",
  })(["margin:0;padding:0;list-style:none;", ";"], (props) =>
  retrieveComponentStyles(COMPONENT_ID$5, props),
)
StyledTimeline.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$4 = "timeline.content.separator"
const StyledSeparator = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$4,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledSeparator",
    componentId: "sc-fki51e-0",
  })(
  [
    "display:flex;position:relative;justify-content:center;padding:",
    ";&::after{position:absolute;border-left:",
    ";height:100%;content:'';}",
    ";",
  ],
  (props) => `${props.theme.space.base * 5}px ${props.theme.space.base}px`,
  (props) =>
    `${props.theme.borders.sm} ${getColor$1("neutralHue", 600, props.theme)}`,
  (props) => retrieveComponentStyles(COMPONENT_ID$4, props),
)
StyledSeparator.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$3 = "timeline.content"
const StyledTimelineContent = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$3,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledContent__StyledTimelineContent",
    componentId: "sc-19phgu1-0",
  })(
  ["flex:1;padding:", ";", ";"],
  (props) => `${props.theme.space.base * 5}px ${props.theme.space.base * 4}px`,
  (props) => retrieveComponentStyles(COMPONENT_ID$3, props),
)
StyledTimelineContent.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$2 = "timeline.opposite.content"
const StyledOppositeContent = styled__default["default"].div
  .attrs({
    "data-garden-id": COMPONENT_ID$2,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledOppositeContent",
    componentId: "sc-jurh2k-0",
  })(
  ["flex:1;padding:", ";text-align:", ";", ";"],
  (props) => `${props.theme.space.base * 5}px ${props.theme.space.base * 4}px`,
  (props) => (props.theme.rtl ? "left" : "right"),
  (props) => retrieveComponentStyles(COMPONENT_ID$2, props),
)
StyledOppositeContent.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID$1 = "timeline.item"
const StyledTimelineItem = styled__default["default"].li
  .attrs({
    "data-garden-id": COMPONENT_ID$1,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledItem__StyledTimelineItem",
    componentId: "sc-5mcnzm-0",
  })(
  [
    "display:flex;position:relative;line-height:",
    ";color:",
    ";font-size:",
    ";&:last-of-type ",
    "::after{display:none;}",
    " ",
    " ",
    ";",
  ],
  (props) =>
    getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md),
  (props) => props.theme.colors.foreground,
  (props) => props.theme.fontSizes.md,
  StyledSeparator,
  (props) =>
    !props.hasOppositeContent &&
    props.isAlternate &&
    styled.css(
      ["&::before{flex:1;padding:", "px;content:'';}"],
      props.theme.space.base * 4,
    ),
  (props) =>
    props.isAlternate &&
    styled.css(
      [
        "&:nth-child(even){flex-direction:row-reverse;",
        "{text-align:",
        ";}",
        "{text-align:",
        ";}}",
      ],
      StyledOppositeContent,
      props.theme.rtl ? "right" : "left",
      StyledTimelineContent,
      props.theme.rtl ? "left" : "right",
    ),
  (props) => retrieveComponentStyles(COMPONENT_ID$1, props),
)
StyledTimelineItem.defaultProps = {
  theme: DEFAULT_THEME,
}
const COMPONENT_ID = "timeline.icon"
const StyledItemIcon = styled__default["default"]((_ref) => {
  let { surfaceColor, children, ...props } = _ref
  return React__default.cloneElement(
    React__default.Children.only(children),
    props,
  )
})
  .attrs({
    "data-garden-id": COMPONENT_ID,
    "data-garden-version": "8.70.0",
  })
  .withConfig({
    displayName: "StyledItemIcon",
    componentId: "sc-vz2l6e-0",
  })(
  [
    "z-index:1;box-sizing:content-box;background-color:",
    ";padding:",
    "px 0;width:",
    ";height:",
    ";color:",
    ";",
    ";",
  ],
  (props) => props.surfaceColor || props.theme.colors.background,
  (props) => props.theme.space.base,
  (props) => math(`${props.theme.iconSizes.sm} + 1`),
  (props) => math(`${props.theme.iconSizes.sm} + 1`),
  (props) => getColor$1("neutralHue", 600, props.theme),
  (props) => retrieveComponentStyles(COMPONENT_ID, props),
)
StyledItemIcon.defaultProps = {
  theme: DEFAULT_THEME,
}
const StepperContext = React__default.createContext(undefined)
const useStepperContext = () => {
  const context = React__default.useContext(StepperContext)
  if (context === undefined) {
    throw new Error(
      "This component must be rendered within a Stepper component",
    )
  }
  return context
}
const StepContext = React__default.createContext(undefined)
const useStepContext = () => {
  const context = React__default.useContext(StepContext)
  if (context === undefined) {
    throw new Error(
      "This component must be rendered within a Stepper component",
    )
  }
  return context
}
const AccordionContext = React__default.createContext(undefined)
const useAccordionContext = () => {
  const context = React__default.useContext(AccordionContext)
  if (context === undefined) {
    throw new Error(
      "This component must be rendered within a Accordion component",
    )
  }
  return context
}
const SectionContext = React__default.createContext(undefined)
const useSectionContext = () => {
  const context = React__default.useContext(SectionContext)
  if (context === undefined) {
    throw new Error(
      "This component must be rendered within an Accordion component",
    )
  }
  return context
}
const HeaderContext = React__default.createContext(undefined)
const useHeaderContext = () => {
  const context = React__default.useContext(HeaderContext)
  if (context === undefined) {
    throw new Error(
      "This component must be rendered within a Accordion.Header component",
    )
  }
  return context
}
const TimelineContext = React__default.createContext(undefined)
const useTimelineContext = () => {
  const context = React__default.useContext(TimelineContext)
  if (context === undefined) {
    throw new Error(
      "This component must be rendered within a Timeline component",
    )
  }
  return context
}
const TimelineItemContext = React__default.createContext(undefined)
const useTimelineItemContext = () => {
  const context = React__default.useContext(TimelineItemContext)
  if (context === undefined) {
    throw new Error(
      "This component must be rendered within a Timeline.Item component",
    )
  }
  return context
}
const SectionComponent = React__default.forwardRef((props, ref) =>
  React__default__default["default"].createElement(
    StyledSection,
    _extends$3(
      {
        ref: ref,
      },
      props,
    ),
  ),
)
SectionComponent.displayName = "Accordion.Section"
const Section = SectionComponent
var _path$1
function _extends$2() {
  _extends$2 = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      }
  return _extends$2.apply(this, arguments)
}
var SvgChevronDownStroke = function SvgChevronDownStroke(props) {
  return /*#__PURE__*/ React__default__namespace.createElement(
    "svg",
    _extends$2(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        focusable: "false",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      props,
    ),
    _path$1 ||
      (_path$1 = /*#__PURE__*/ React__default__namespace.createElement("path", {
        fill: "currentColor",
        d: "M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z",
      })),
  )
}
const HeaderComponent = React__default.forwardRef((props, ref) => {
  const {
    onClick,
    onFocus,
    onBlur,
    onMouseOver,
    onMouseOut,
    role,
    children,
    ...other
  } = props
  const {
    level: ariaLevel,
    isCompact,
    isCollapsible,
    getHeaderProps,
    getTriggerProps,
    expandedSections,
  } = useAccordionContext()
  const sectionValue = useSectionContext()
  const [isFocused, setIsFocused] = React__default.useState(false)
  const [isHovered, setIsHovered] = React__default.useState(false)
  const isExpanded = expandedSections.includes(sectionValue)
  const {
    onClick: onTriggerClick,
    onKeyDown,
    ...otherTriggerProps
  } = getTriggerProps({
    type: "button",
    value: sectionValue,
  })
  const onHeaderFocus = (e) => {
    e.persist()
    setTimeout(() => {
      const isAccordionButton =
        e.target.getAttribute("data-garden-id") === COMPONENT_ID$8
      const isFocusVisible = e.target.getAttribute("data-garden-focus-visible")
      if (isAccordionButton && isFocusVisible) {
        setIsFocused(true)
      }
    }, 0)
  }
  const value = React__default.useMemo(
    () => ({
      isHovered,
      otherTriggerProps,
    }),
    [isHovered, otherTriggerProps],
  )
  return React__default__default["default"].createElement(
    HeaderContext.Provider,
    {
      value: value,
    },
    React__default__default["default"].createElement(
      StyledHeader,
      _extends$3(
        {
          isCollapsible: isCollapsible,
          isExpanded: isExpanded,
          isFocused: isFocused,
        },
        getHeaderProps({
          ref,
          "aria-level": ariaLevel,
          role: role === undefined || role === null ? role : "heading",
          onClick: composeEventHandlers(onClick, onTriggerClick),
          onFocus: composeEventHandlers(onFocus, onHeaderFocus),
          onBlur: composeEventHandlers(onBlur, () => setIsFocused(false)),
          onMouseOver: composeEventHandlers(onMouseOver, () =>
            setIsHovered(true),
          ),
          onMouseOut: composeEventHandlers(onMouseOut, () =>
            setIsHovered(false),
          ),
          ...other,
        }),
      ),
      children,
      React__default__default["default"].createElement(
        StyledRotateIcon,
        {
          isCompact: isCompact,
          isHovered: isHovered,
          isRotated: isExpanded,
          isCollapsible: isCollapsible,
          onMouseOver: composeEventHandlers(onMouseOver, () =>
            setIsHovered(true),
          ),
          onMouseOut: composeEventHandlers(onMouseOut, () =>
            setIsHovered(false),
          ),
        },
        React__default__default["default"].createElement(
          SvgChevronDownStroke,
          null,
        ),
      ),
    ),
  )
})
HeaderComponent.displayName = "Accordion.Header"
const Header = HeaderComponent
const LabelComponent$1 = React__default.forwardRef((props, ref) => {
  const sectionValue = useSectionContext()
  const { isCompact, isCollapsible, expandedSections } = useAccordionContext()
  const isExpanded = expandedSections.includes(sectionValue)
  const { isHovered, otherTriggerProps } = useHeaderContext()
  return React__default__default["default"].createElement(
    StyledButton,
    _extends$3(
      {
        ref: ref,
        isCompact: isCompact,
        isHovered: isHovered,
        isExpanded: isExpanded,
        isCollapsible: isCollapsible,
      },
      otherTriggerProps,
      props,
    ),
  )
})
LabelComponent$1.displayName = "Accordion.Label"
const Label$1 = LabelComponent$1
const PanelComponent = React__default.forwardRef((_ref, ref) => {
  let { role, children, ...props } = _ref
  const { isAnimated, isBare, isCompact, expandedSections, getPanelProps } =
    useAccordionContext()
  const sectionValue = useSectionContext()
  const isExpanded = expandedSections.includes(sectionValue)
  return React__default__default["default"].createElement(
    StyledPanel,
    _extends$3(
      {
        isAnimated: isAnimated,
        isBare: isBare,
        isCompact: isCompact,
        isExpanded: isExpanded,
      },
      getPanelProps({
        role: role === undefined ? null : "region",
        ref,
        value: sectionValue,
        ...props,
      }),
    ),
    React__default__default["default"].createElement(
      StyledInnerPanel,
      null,
      children,
    ),
  )
})
PanelComponent.displayName = "Accordion.Panel"
const Panel = PanelComponent
const AccordionComponent = React__default.forwardRef((_ref, ref) => {
  let {
    children,
    isBare,
    isCompact,
    isAnimated,
    isExpandable,
    isCollapsible,
    level,
    onChange,
    defaultExpandedSections,
    expandedSections: controlledExpandedSections,
    ...props
  } = _ref
  const { sections, sectionChildren } = React__default.useMemo(
    () =>
      React__default.Children.toArray(children)
        .filter(React__default.isValidElement)
        .map((child, index) =>
          React__default__default["default"].createElement(
            SectionContext.Provider,
            {
              key: index,
              value: index,
            },
            child,
          ),
        )
        .reduce(
          (acc, child, index) => {
            acc.sectionChildren.push(child)
            acc.sections.push(index)
            return acc
          },
          {
            sectionChildren: [],
            sections: [],
          },
        ),
    [children],
  )
  const { expandedSections, getHeaderProps, getTriggerProps, getPanelProps } =
    useAccordion({
      sections,
      defaultExpandedSections,
      expandedSections: controlledExpandedSections,
      collapsible: isCollapsible,
      expandable: isExpandable || false,
      onChange,
    })
  const accordionContextValue = React__default.useMemo(
    () => ({
      level,
      isBare,
      isCompact,
      isAnimated,
      isCollapsible,
      getPanelProps,
      getHeaderProps,
      getTriggerProps,
      expandedSections,
    }),
    [
      level,
      isBare,
      isCompact,
      isAnimated,
      isCollapsible,
      getPanelProps,
      getHeaderProps,
      getTriggerProps,
      expandedSections,
    ],
  )
  return React__default__default["default"].createElement(
    AccordionContext.Provider,
    {
      value: accordionContextValue,
    },
    React__default__default["default"].createElement(
      StyledAccordion,
      _extends$3(
        {
          ref: ref,
        },
        props,
      ),
      sectionChildren,
    ),
  )
})
AccordionComponent.displayName = "Accordion"
AccordionComponent.defaultProps = {
  isAnimated: true,
  isCollapsible: true,
}
const Accordion = AccordionComponent
Accordion.Header = Header
Accordion.Label = Label$1
Accordion.Panel = Panel
Accordion.Section = Section
const StepComponent = React__default.forwardRef((_ref, ref) => {
  let { children, ...props } = _ref
  const { isHorizontal } = useStepperContext()
  return React__default__default["default"].createElement(
    StyledStep,
    _extends$3(
      {
        ref: ref,
        isHorizontal: isHorizontal,
      },
      props,
    ),
    isHorizontal &&
      React__default__default["default"].createElement(StyledLine, null),
    children,
  )
})
StepComponent.displayName = "Stepper.Step"
const Step = StepComponent
var _path
function _extends$1() {
  _extends$1 = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      }
  return _extends$1.apply(this, arguments)
}
var SvgCheckSmStroke = function SvgCheckSmStroke(props) {
  return /*#__PURE__*/ React__default__namespace.createElement(
    "svg",
    _extends$1(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        focusable: "false",
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
      },
      props,
    ),
    _path ||
      (_path = /*#__PURE__*/ React__default__namespace.createElement("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.25,
        d: "M3 9l3 3 7-7",
      })),
  )
}
const LabelComponent = React__default.forwardRef((_ref, ref) => {
  let { icon, iconProps, isHidden, children, ...other } = _ref
  const { currentStepIndex, isActive, isCompleted, isHorizontal } =
    useStepContext()
  const numericStep = currentStepIndex + 1
  const stepIcon = icon || numericStep
  const styledIcon = React__default__default["default"].createElement(
    StyledIcon,
    {
      isActive: isActive,
      isHorizontal: isHorizontal,
    },
    isCompleted
      ? React__default__default["default"].createElement(
          SvgCheckSmStroke,
          iconProps,
        )
      : stepIcon,
  )
  return React__default__default["default"].createElement(
    StyledLabel,
    _extends$3(
      {
        ref: ref,
        isActive: isActive,
        isHorizontal: isHorizontal,
      },
      other,
    ),
    isHorizontal
      ? React__default__default["default"].createElement(
          StyledIconFlexContainer,
          null,
          styledIcon,
        )
      : styledIcon,
    React__default__default["default"].createElement(
      StyledLabelText,
      {
        isHidden: isHidden,
        isHorizontal: isHorizontal,
      },
      children,
    ),
  )
})
LabelComponent.displayName = "Stepper.Label"
LabelComponent.propTypes = {
  icon: propTypes.exports.node,
  iconProps: propTypes.exports.object,
  isHidden: propTypes.exports.bool,
}
const Label = LabelComponent
const ContentComponent$1 = React__default.forwardRef((props, ref) => {
  const { isActive, isHorizontal } = useStepContext()
  return isHorizontal === false
    ? React__default__default["default"].createElement(
        StyledContent,
        _extends$3(
          {
            ref: ref,
            isActive: isActive,
          },
          props,
        ),
        React__default__default["default"].createElement(
          StyledInnerContent,
          {
            "aria-hidden": !isActive,
          },
          props.children,
        ),
      )
    : null
})
ContentComponent$1.displayName = "Stepper.Content"
const Content$1 = ContentComponent$1
const DEFAULT_ACTIVE_INDEX = 0
const StepperComponent = React__default.forwardRef((_ref, ref) => {
  let {
    activeIndex = DEFAULT_ACTIVE_INDEX,
    isHorizontal,
    children,
    ...props
  } = _ref
  const stepperContext = React__default.useMemo(
    () => ({
      activeIndex,
      isHorizontal: isHorizontal || false,
    }),
    [activeIndex, isHorizontal],
  )
  return React__default__default["default"].createElement(
    StepperContext.Provider,
    {
      value: stepperContext,
    },
    React__default__default["default"].createElement(
      StyledStepper,
      _extends$3(
        {
          ref: ref,
          isHorizontal: isHorizontal,
        },
        props,
      ),
      React__default.useMemo(
        () =>
          React__default.Children.toArray(children)
            .filter(React__default.isValidElement)
            .map((child, index) =>
              React__default__default["default"].createElement(
                StepContext.Provider,
                {
                  key: index,
                  value: {
                    currentStepIndex: index,
                    isActive: stepperContext.activeIndex === index,
                    isCompleted: stepperContext.activeIndex > index,
                    isHorizontal: stepperContext.isHorizontal,
                  },
                },
                child,
              ),
            ),
        [children, stepperContext],
      ),
    ),
  )
})
StepperComponent.displayName = "Stepper"
StepperComponent.defaultProps = {
  activeIndex: DEFAULT_ACTIVE_INDEX,
}
const Stepper = StepperComponent
Stepper.Content = Content$1
Stepper.Label = Label
Stepper.Step = Step
const OppositeContentComponent = React__default.forwardRef((props, ref) =>
  React__default__default["default"].createElement(
    StyledOppositeContent,
    _extends$3(
      {
        ref: ref,
      },
      props,
    ),
  ),
)
OppositeContentComponent.displayName = "Timeline.OppositeContent"
const OppositeContent = OppositeContentComponent
const ItemComponent = React__default.forwardRef((_ref, ref) => {
  let { icon, surfaceColor, ...props } = _ref
  const value = React__default.useMemo(
    () => ({
      icon,
      surfaceColor,
    }),
    [icon, surfaceColor],
  )
  const { isAlternate } = useTimelineContext()
  let hasOppositeContent = false
  React__default.Children.forEach(props.children, (child) => {
    if (child) {
      if (child.type === OppositeContent) {
        hasOppositeContent = true
      }
    }
  })
  return React__default__default["default"].createElement(
    TimelineItemContext.Provider,
    {
      value: value,
    },
    React__default__default["default"].createElement(
      StyledTimelineItem,
      _extends$3(
        {
          ref: ref,
          isAlternate: isAlternate,
          hasOppositeContent: hasOppositeContent,
        },
        props,
      ),
    ),
  )
})
ItemComponent.displayName = "Timeline.Item"
const Item = ItemComponent
var _circle
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      }
  return _extends.apply(this, arguments)
}
var SvgCircleFullStroke = function SvgCircleFullStroke(props) {
  return /*#__PURE__*/ React__default__namespace.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 12,
        focusable: "false",
        viewBox: "0 0 12 12",
        "aria-hidden": "true",
      },
      props,
    ),
    _circle ||
      (_circle = /*#__PURE__*/ React__default__namespace.createElement(
        "circle",
        {
          cx: 6,
          cy: 6,
          r: 4.5,
          fill: "none",
          stroke: "currentColor",
        },
      )),
  )
}
const ContentComponent = React__default.forwardRef((props, ref) => {
  const { icon, surfaceColor } = useTimelineItemContext()
  return React__default__default["default"].createElement(
    React__default__default["default"].Fragment,
    null,
    React__default__default["default"].createElement(
      StyledSeparator,
      null,
      React__default__default["default"].createElement(
        StyledItemIcon,
        {
          surfaceColor: surfaceColor,
        },
        icon ||
          React__default__default["default"].createElement(
            SvgCircleFullStroke,
            null,
          ),
      ),
    ),
    React__default__default["default"].createElement(
      StyledTimelineContent,
      _extends$3(
        {
          ref: ref,
        },
        props,
      ),
    ),
  )
})
ContentComponent.displayName = "Timeline.Content"
const Content = ContentComponent
const TimelineComponent = React__default.forwardRef((_ref, ref) => {
  let { isAlternate, ...props } = _ref
  const value = React__default.useMemo(
    () => ({
      isAlternate,
    }),
    [isAlternate],
  )
  return React__default__default["default"].createElement(
    TimelineContext.Provider,
    {
      value: value,
    },
    React__default__default["default"].createElement(
      StyledTimeline,
      _extends$3(
        {
          ref: ref,
        },
        props,
      ),
    ),
  )
})
TimelineComponent.displayName = "Timeline"
const Timeline$1 = TimelineComponent
Timeline$1.Content = Content
Timeline$1.Item = Item
Timeline$1.OppositeContent = OppositeContent
var getColor = styled.css(
  templateObject_1$1 ||
    (templateObject_1$1 = __makeTemplateObject(
      ["\n  color: ", ";\n"],
      [
        "\n  color: ",
        ";\n",
        // const subTextStyling = css`
        //   margin-top: 0;
        // `
      ],
    )),
  function (_a) {
    var color = _a.color,
      danger = _a.danger,
      theme = _a.theme
    if (danger) return theme.styles.colorDanger
    if (color) return color
    return "inherit"
  },
)
// const subTextStyling = css`
//   margin-top: 0;
// `
var subTextStyling = styled.css(
  templateObject_2$1 ||
    (templateObject_2$1 = __makeTemplateObject(
      ["\n  margin-bottom: 0;\n\n  & + * {\n    margin-top: 0;\n  }\n"],
      ["\n  margin-bottom: 0;\n\n  & + * {\n    margin-top: 0;\n  }\n"],
    )),
)
var Text = styled__default["default"].div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  text-align: ",
        ";\n  width: ",
        ";\n  ",
        "\n  ",
        "\n  ",
        "\n  ",
        "\n",
      ],
      [
        "\n  text-align: ",
        ";\n  width: ",
        ";\n  ",
        "\n  ",
        "\n  ",
        "\n  ",
        "\n",
        // @ts-ignore
      ],
    )),
  function (_a) {
    var align = _a.align
    return align
  },
  function (_a) {
    var fluid = _a.fluid
    return fluid ? "100%" : "unset"
  },
  function (_a) {
    var color = _a.color
    return color ? getColor : ""
  },
  function (_a) {
    var hasSubText = _a.hasSubText
    return hasSubText ? subTextStyling : ""
  },
  getColor,
  function (_a) {
    var _css = _a._css
    return _css
  },
)
// @ts-ignore
Text.COMPONENT_NAME = "Text"
var templateObject_1$1, templateObject_2$1, templateObject_3
var useTheme = function () {
  return React__default.useContext(styled.ThemeContext)
}
// export const setThemeContext = (ctx :)

// @flow
var isString = function (o) {
  return typeof o === "string"
}
var Timeline = function (_a) {
  var _b = _a.isAlternate,
    isAlternate = _b === void 0 ? false : _b,
    data = _a.data
  var theme = useTheme()
  return jsxRuntime.jsx(
    Timeline$1,
    __assign(
      {
        isAlternate: isAlternate,
      },
      {
        children: data.map(function (_a) {
          var content = _a.content,
            dateTime = _a.dateTime,
            icon = _a.icon,
            key = _a.key
          return jsxRuntime.jsx(
            Timeline$1.Item,
            __assign(
              {
                icon: icon
                  ? jsxRuntime.jsx("div", {
                      children: icon,
                    })
                  : undefined,
              },
              {
                children: jsxRuntime.jsxs(Timeline$1.Content, {
                  children: [
                    isString(content)
                      ? jsxRuntime.jsx(
                          Text,
                          __assign(
                            {
                              _css: styled.css(
                                templateObject_1 ||
                                  (templateObject_1 = __makeTemplateObject(
                                    [
                                      "\n                    white-space: pre-wrap;\n                  ",
                                    ],
                                    [
                                      "\n                    white-space: pre-wrap;\n                  ",
                                    ],
                                  )),
                              ),
                            },
                            {
                              children: content,
                            },
                          ),
                        )
                      : content,
                    dateTime
                      ? jsxRuntime.jsx(
                          Text,
                          __assign(
                            {
                              _css: styled.css(
                                templateObject_2 ||
                                  (templateObject_2 = __makeTemplateObject(
                                    [
                                      "\n                    color: ",
                                      ";\n                  ",
                                    ],
                                    [
                                      "\n                    color: ",
                                      ";\n                  ",
                                    ],
                                  )),
                                theme.styles.textColorSecondary,
                              ),
                            },
                            {
                              children: dateTime,
                            },
                          ),
                        )
                      : null,
                  ],
                }),
              },
            ),
            key,
          )
        }),
      },
    ),
  )
}
var templateObject_1, templateObject_2
exports.Timeline = Timeline
//# sourceMappingURL=accordions.js.map
