Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var stream = require('stream');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var stream__default = /*#__PURE__*/_interopDefaultLegacy(stream);

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

var __assign$3 = function() {
    __assign$3 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator$1(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read$2(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
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
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
  var f = n.default;
	if (typeof f == "function") {
		var a = function () {
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=React__default["default"],g=60103;reactJsxRuntime_production_min.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");reactJsxRuntime_production_min.Fragment=h("react.fragment");}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	(function (exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		var React = React__default["default"];

		// ATTENTION
		// When adding new symbols to this file,
		// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
		// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
		// nor polyfill, then a plain number is used for performance.
		var REACT_ELEMENT_TYPE = 0xeac7;
		var REACT_PORTAL_TYPE = 0xeaca;
		exports.Fragment = 0xeacb;
		var REACT_STRICT_MODE_TYPE = 0xeacc;
		var REACT_PROFILER_TYPE = 0xead2;
		var REACT_PROVIDER_TYPE = 0xeacd;
		var REACT_CONTEXT_TYPE = 0xeace;
		var REACT_FORWARD_REF_TYPE = 0xead0;
		var REACT_SUSPENSE_TYPE = 0xead1;
		var REACT_SUSPENSE_LIST_TYPE = 0xead8;
		var REACT_MEMO_TYPE = 0xead3;
		var REACT_LAZY_TYPE = 0xead4;
		var REACT_BLOCK_TYPE = 0xead9;
		var REACT_SERVER_BLOCK_TYPE = 0xeada;
		var REACT_FUNDAMENTAL_TYPE = 0xead5;
		var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
		var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

		if (typeof Symbol === 'function' && Symbol.for) {
		  var symbolFor = Symbol.for;
		  REACT_ELEMENT_TYPE = symbolFor('react.element');
		  REACT_PORTAL_TYPE = symbolFor('react.portal');
		  exports.Fragment = symbolFor('react.fragment');
		  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
		  REACT_PROFILER_TYPE = symbolFor('react.profiler');
		  REACT_PROVIDER_TYPE = symbolFor('react.provider');
		  REACT_CONTEXT_TYPE = symbolFor('react.context');
		  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
		  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
		  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
		  REACT_MEMO_TYPE = symbolFor('react.memo');
		  REACT_LAZY_TYPE = symbolFor('react.lazy');
		  REACT_BLOCK_TYPE = symbolFor('react.block');
		  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
		  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
		  symbolFor('react.scope');
		  symbolFor('react.opaque.id');
		  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
		  symbolFor('react.offscreen');
		  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
		}

		var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

		function error(format) {
		  {
		    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		      args[_key2 - 1] = arguments[_key2];
		    }

		    printWarning('error', format, args);
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = '';

		    if (currentlyValidatingElement) {
		      var name = getComponentName(currentlyValidatingElement.type);
		      var owner = currentlyValidatingElement._owner;
		      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
		    }

		    stack += ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    }

		    var argsWithFormat = args.map(function (item) {
		      return '' + item;
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

		var enableScopeAPI = false; // Experimental Create Event Handle API.

		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
		      return true;
		    }
		  }

		  return false;
		}


		var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
		function describeComponentFrame (name, source, ownerName) {
		  var sourceInfo = '';

		  if (source) {
		    var path = source.fileName;
		    var fileName = path.replace(BEFORE_SLASH_RE, '');

		    {
		      // In DEV, include code for a common special case:
		      // prefer "folder/index.js" instead of just "index.js".
		      if (/^index\./.test(fileName)) {
		        var match = path.match(BEFORE_SLASH_RE);

		        if (match) {
		          var pathBeforeSlash = match[1];

		          if (pathBeforeSlash) {
		            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
		            fileName = folderName + '/' + fileName;
		          }
		        }
		      }
		    }

		    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
		  } else if (ownerName) {
		    sourceInfo = ' (created by ' + ownerName + ')';
		  }

		  return '\n    in ' + (name || 'Unknown') + sourceInfo;
		}

		var Resolved = 1;
		function refineResolvedLazyComponent(lazyComponent) {
		  return lazyComponent._status === Resolved ? lazyComponent._result : null;
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var functionName = innerType.displayName || innerType.name || '';
		  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
		}

		function getComponentName(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case exports.Fragment:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return "Profiler";

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        return 'Context.Consumer';

		      case REACT_PROVIDER_TYPE:
		        return 'Context.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        return getComponentName(type.type);

		      case REACT_BLOCK_TYPE:
		        return getComponentName(type.render);

		      case REACT_LAZY_TYPE:
		        {
		          var thenable = type;
		          var resolvedThenable = refineResolvedLazyComponent(thenable);

		          if (resolvedThenable) {
		            return getComponentName(resolvedThenable);
		          }

		          break;
		        }
		    }
		  }

		  return null;
		}

		var loggedTypeFailures = {};
		ReactSharedInternals.ReactDebugCurrentFrame;
		var currentlyValidatingElement = null;

		function setCurrentlyValidatingElement(element) {
		  {
		    currentlyValidatingElement = element;
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(Object.prototype.hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
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

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown;
		var specialPropRefWarningShown;
		var didWarnAboutStringRefs;

		{
		  didWarnAboutStringRefs = {};
		}

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function warnIfStringRefCannotBeAutoConverted(config, self) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
		      var componentName = getComponentName(ReactCurrentOwner.current.type);

		      if (!didWarnAboutStringRefs[componentName]) {
		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

		        didWarnAboutStringRefs[componentName] = true;
		      }
		    }
		  }
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  {
		    var warnAboutAccessingKey = function () {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    };

		    warnAboutAccessingKey.isReactWarning = true;
		    Object.defineProperty(props, 'key', {
		      get: warnAboutAccessingKey,
		      configurable: true
		    });
		  }
		}

		function defineRefPropWarningGetter(props, displayName) {
		  {
		    var warnAboutAccessingRef = function () {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    };

		    warnAboutAccessingRef.isReactWarning = true;
		    Object.defineProperty(props, 'ref', {
		      get: warnAboutAccessingRef,
		      configurable: true
		    });
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * https://github.com/reactjs/rfcs/pull/107
		 * @param {*} type
		 * @param {object} props
		 * @param {string} key
		 */

		function jsxDEV(type, config, maybeKey, source, self) {
		  {
		    var propName; // Reserved names are extracted

		    var props = {};
		    var key = null;
		    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
		    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
		    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
		    // but as an intermediary step, we will use jsxDEV for everything except
		    // <div {...props} key="Hi" />, because we aren't currently able to tell if
		    // key is explicitly declared to be undefined or not.

		    if (maybeKey !== undefined) {
		      key = '' + maybeKey;
		    }

		    if (hasValidKey(config)) {
		      key = '' + config.key;
		    }

		    if (hasValidRef(config)) {
		      ref = config.ref;
		      warnIfStringRefCannotBeAutoConverted(config, self);
		    } // Remaining properties are added to a new props object


		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    } // Resolve default props


		    if (type && type.defaultProps) {
		      var defaultProps = type.defaultProps;

		      for (propName in defaultProps) {
		        if (props[propName] === undefined) {
		          props[propName] = defaultProps[propName];
		        }
		      }
		    }

		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }

		    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		  }
		}

		var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
		ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement$1(element) {
		  currentlyValidatingElement = element;
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */

		function isValidElement(object) {
		  {
		    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		  }
		}

		function getDeclarationErrorAddendum() {
		  {
		    if (ReactCurrentOwner$1.current) {
		      var name = getComponentName(ReactCurrentOwner$1.current.type);

		      if (name) {
		        return '\n\nCheck the render method of `' + name + '`.';
		      }
		    }

		    return '';
		  }
		}

		function getSourceInfoErrorAddendum(source) {
		  {
		    if (source !== undefined) {
		      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		      var lineNumber = source.lineNumber;
		      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		    }

		    return '';
		  }
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  {
		    var info = getDeclarationErrorAddendum();

		    if (!info) {
		      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		      if (parentName) {
		        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		      }
		    }

		    return info;
		  }
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  {
		    if (!element._store || element._store.validated || element.key != null) {
		      return;
		    }

		    element._store.validated = true;
		    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		      return;
		    }

		    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		    // property, it may be the creator of the child that's responsible for
		    // assigning it a key.

		    var childOwner = '';

		    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
		      // Give the component that originally created this child.
		      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
		    }

		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  {
		    if (typeof node !== 'object') {
		      return;
		    }

		    if (Array.isArray(node)) {
		      for (var i = 0; i < node.length; i++) {
		        var child = node[i];

		        if (isValidElement(child)) {
		          validateExplicitKey(child, parentType);
		        }
		      }
		    } else if (isValidElement(node)) {
		      // This element was passed in a valid location.
		      if (node._store) {
		        node._store.validated = true;
		      }
		    } else if (node) {
		      var iteratorFn = getIteratorFn(node);

		      if (typeof iteratorFn === 'function') {
		        // Entry iterators used to provide implicit keys,
		        // but now we print a separate warning for them later.
		        if (iteratorFn !== node.entries) {
		          var iterator = iteratorFn.call(node);
		          var step;

		          while (!(step = iterator.next()).done) {
		            if (isValidElement(step.value)) {
		              validateExplicitKey(step.value, parentType);
		            }
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentName(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentName(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}

		function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
		  {
		    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		    // succeed and there will likely be errors in render.

		    if (!validType) {
		      var info = '';

		      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		      }

		      var sourceInfo = getSourceInfoErrorAddendum(source);

		      if (sourceInfo) {
		        info += sourceInfo;
		      } else {
		        info += getDeclarationErrorAddendum();
		      }

		      var typeString;

		      if (type === null) {
		        typeString = 'null';
		      } else if (Array.isArray(type)) {
		        typeString = 'array';
		      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
		        info = ' Did you accidentally export a JSX literal instead of a component?';
		      } else {
		        typeString = typeof type;
		      }

		      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }

		    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
		    // TODO: Drop this when these are no longer allowed as the type argument.

		    if (element == null) {
		      return element;
		    } // Skip key warning if the type isn't valid since our key validation logic
		    // doesn't expect a non-string/function type and can throw confusing errors.
		    // We don't want exception behavior to differ between dev and prod.
		    // (Rendering will throw with a helpful message and as soon as the type is
		    // fixed, the key warnings will appear.)


		    if (validType) {
		      var children = props.children;

		      if (children !== undefined) {
		        if (isStaticChildren) {
		          if (Array.isArray(children)) {
		            for (var i = 0; i < children.length; i++) {
		              validateChildKeys(children[i], type);
		            }

		            if (Object.freeze) {
		              Object.freeze(children);
		            }
		          } else {
		            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
		          }
		        } else {
		          validateChildKeys(children, type);
		        }
		      }
		    }

		    if (type === exports.Fragment) {
		      validateFragmentProps(element);
		    } else {
		      validatePropTypes(element);
		    }

		    return element;
		  }
		} // These two functions exist to still get child warnings in dev
		// even with the prod transform. This means that jsxDEV is purely
		// opt-in behavior for better messages but that we won't stop
		// giving you warnings if you use production apis.

		function jsxWithValidationStatic(type, props, key) {
		  {
		    return jsxWithValidation(type, props, key, true);
		  }
		}
		function jsxWithValidationDynamic(type, props, key) {
		  {
		    return jsxWithValidation(type, props, key, false);
		  }
		}

		var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
		// for now we can ship identical prod functions

		var jsxs =  jsxWithValidationStatic ;

		exports.jsx = jsx;
		exports.jsxs = jsxs;
		  })();
		}
} (reactJsxRuntime_development));
	return reactJsxRuntime_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactJsxRuntime_production_min();
	} else {
	  module.exports = requireReactJsxRuntime_development();
	}
} (jsxRuntime));

var dist$1 = {};

var propTypes = {exports: {}};

var reactIs = {exports: {}};

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

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
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

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

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

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactIs_production_min();
	} else {
	  module.exports = requireReactIs_development();
	}
} (reactIs));

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
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
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
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

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
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

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
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
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
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
	checkPropTypes.resetWarningCache = function() {
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

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = reactIs.exports;
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
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

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
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

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
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
	    exact: createStrictShapeTypeChecker,
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
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
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
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
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

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
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
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
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
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
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
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
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
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
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
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
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
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
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
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
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
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
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
	  }

	  // Returns class name of the object, if any.
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

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
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
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
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
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var stylis_min = {exports: {}};

(function (module, exports) {
	!function(e){module.exports=e(null);}(function e(a){var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++;}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R);}C=W;}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze;}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s);}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++;}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe;}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue="";}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1);}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2));}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R);}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1;}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" ";}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m;}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1;}u++;}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T;}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0;}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0");}we=1;}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0";}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0";}}if(Te+=Re,C!==M&&C!==K)$=C;}}m=w,w=C,R++;}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" ";}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r;}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee;}n+=r;}i[s]=n.replace(c,"").trim();}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve;}ke=0;}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim();}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De;}}o[r++]=l;}s+=(0===i?"":",")+o.join(" ");}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h;}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o;}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r;}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a;}return e},Te.set=Re,void 0!==a)Re(a);return Te});
	
} (stylis_min));

var Stylis = stylis_min.exports;

var stylisRuleSheet = {exports: {}};

(function (module, exports) {
	(function (factory) {
		(module['exports'] = factory()) ;
	}(function () {

		return function (insertRule) {
			var delimiter = '/*|*/';
			var needle = delimiter+'}';

			function toSheet (block) {
				if (block)
					try {
						insertRule(block + '}');
					} catch (e) {}
			}

			return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
				switch (context) {
					// property
					case 1:
						// @import
						if (depth === 0 && content.charCodeAt(0) === 64)
							return insertRule(content+';'), ''
						break
					// selector
					case 2:
						if (ns === 0)
							return content + delimiter
						break
					// at-rule
					case 3:
						switch (ns) {
							// @font-face, @page
							case 102:
							case 112:
								return insertRule(selectors[0]+content), ''
							default:
								return content + (at === 0 ? delimiter : '')
						}
					case -2:
						content.split(needle).forEach(toSheet);
				}
			}
		}
	}));
} (stylisRuleSheet));

var _insertRulePlugin = stylisRuleSheet.exports;

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isPlainObject$2(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype;
}
/**
 * Returns whether the payload is an array
 *
 * @param {any} payload
 * @returns {payload is any[]}
 */
function isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
function isSymbol(payload) {
    return getType(payload) === 'Symbol';
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function assignProp(carry, key, newVal, originalObject) {
    var propType = originalObject.propertyIsEnumerable(key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!isPlainObject$2(newComer)) {
        // extend merge rules
        if (extensions && isArray(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = {};
    if (isPlainObject$2(origin)) {
        var props_1 = Object.getOwnPropertyNames(origin);
        var symbols_1 = Object.getOwnPropertySymbols(origin);
        newObject = __spreadArrays(props_1, symbols_1).reduce(function (carry, key) {
            // @ts-ignore
            var targetVal = origin[key];
            if ((!isSymbol(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                (isSymbol(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    var props = Object.getOwnPropertyNames(newComer);
    var symbols = Object.getOwnPropertySymbols(newComer);
    var result = __spreadArrays(props, symbols).reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = (isPlainObject$2(origin))
            // @ts-ignore
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && isArray(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && isPlainObject$2(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, extensions);
        }
        assignProp(carry, key, newVal, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function merge(origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if (isPlainObject$2(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends$1 = Object.assign || function (target) {
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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject$1 = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY$1 = Object.freeze([]);
var EMPTY_OBJECT$2 = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return (process.env.NODE_ENV !== 'production' ? typeof target === 'string' && target : false) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || process.env.NODE_ENV !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS = process.env.NODE_ENV !== 'production' ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : {};

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (process.env.NODE_ENV === 'production') {
      var _this = possibleConstructorReturn(this, _Error.call(this, 'An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#' + code + ' for more information.' + (interpolations.length > 0 ? ' Additional arguments: ' + interpolations.join(', ') : '')));
    } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new Stylis({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new Stylis({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = _insertRulePlugin(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends$1({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = tag.ownerDocument.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target) targetDocument = target.ownerDocument;else if (tagEl) targetDocument = tagEl.ownerDocument;

  var el = targetDocument.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.4.1");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(targetDocument.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.4.1" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.1", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return React__default["default"].createElement('style', _extends$1({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    // $FlowFixMe
    if (el.isConnected === false) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.4.1" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends$1({}, this.rehydratedNames);
    sheet.deferred = _extends$1({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return React.cloneElement(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in unitlessKeys)) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject$1(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if (process.env.NODE_ENV !== 'production' && reactIs.exports.isElement(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject$1(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject$1(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY$1, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT$2;

  if (!reactIs.exports.isValidElementType(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends$1({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends$1({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic = process.env.NODE_ENV === 'production' && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT$2;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && (process.env.NODE_ENV !== 'production' ? target.charAt(0) === target.charAt(0).toLowerCase() : true);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[reactIs.exports.ForwardRef] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once$1 = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = React.createContext();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = memoizeOne(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return React__default["default"].createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return React__default["default"].createElement(
      ThemeContext.Provider,
      { value: context },
      this.props.children
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if (process.env.NODE_ENV !== 'production' && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends$1({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(React.Component);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return React__default["default"].createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    if (IS_BROWSER) {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream__default["default"].Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = React.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = memoizeOne(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return React__default["default"].createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
      process.env.NODE_ENV !== 'production' ? React__default["default"].Children.only(children) : children
    );
  };

  return StyleSheetManager;
}(React.Component);
process.env.NODE_ENV !== "production" ? StyleSheetManager.propTypes = {
  sheet: propTypes.exports.oneOfType([propTypes.exports.instanceOf(StyleSheet), propTypes.exports.instanceOf(ServerStyleSheet)]),

  target: propTypes.exports.shape({
    appendChild: propTypes.exports.func.isRequired
  })
} : void 0;

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (process.env.NODE_ENV !== 'production') {
      _this.warnInnerRef = once$1(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once$1(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', '\n ' + new Error().stack)
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once$1(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return React__default["default"].createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return React__default["default"].createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT$2, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT$2, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends$1({}, this.props, this.attrs);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if (process.env.NODE_ENV !== 'production' && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || index(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends$1({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(' ');

    return React.createElement(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends$1({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (process.env.NODE_ENV !== 'production') {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if (process.env.NODE_ENV !== 'production' && React__default["default"].isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT$2, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if (process.env.NODE_ENV !== 'production' && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(React.Component);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY$1 : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return React__default["default"].createElement(ParentComponent, _extends$1({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = React__default["default"].forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY$1;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends$1({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? merge(target.defaultProps, obj) : obj;
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY$1);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if (process.env.NODE_ENV !== 'production' && React__default["default"].Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return React__default["default"].createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return React__default["default"].createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends$1({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(React__default["default"].Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if (process.env.NODE_ENV !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = React__default["default"].forwardRef(function (props, ref) {
    return React__default["default"].createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if (process.env.NODE_ENV !== 'production' && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
        }

        return React__default["default"].createElement(Component$$1, _extends$1({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if (process.env.NODE_ENV !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

var styledComponents_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': styled,
    createGlobalStyle: createGlobalStyle,
    css: css,
    isStyledComponent: isStyledComponent,
    keyframes: keyframes,
    ServerStyleSheet: ServerStyleSheet,
    StyleSheetConsumer: StyleSheetConsumer,
    StyleSheetContext: StyleSheetContext,
    StyleSheetManager: StyleSheetManager,
    ThemeConsumer: ThemeConsumer,
    ThemeContext: ThemeContext,
    ThemeProvider: ThemeProvider,
    withTheme: withTheme,
    __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS: __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(styledComponents_esm);

var dist = {};

/*!
 * Copyright Zendesk, Inc.
 * 
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0
 */

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist;
	hasRequiredDist = 1;
	(function (exports) {
		(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
		/******/ 	return __webpack_require__(__webpack_require__.s = 3);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ (function(module, exports) {

		module.exports = propTypes.exports;

		/***/ }),
		/* 1 */
		/***/ (function(module, exports) {

		module.exports = require$$2;

		/***/ }),
		/* 2 */
		/***/ (function(module, exports) {

		module.exports = React__default["default"];

		/***/ }),
		/* 3 */
		/***/ (function(module, __webpack_exports__, __webpack_require__) {
		__webpack_require__.r(__webpack_exports__);

		// EXTERNAL MODULE: external "prop-types"
		var external_prop_types_ = __webpack_require__(0);
		var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

		// EXTERNAL MODULE: external "react"
		var external_react_ = __webpack_require__(2);
		var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

		// EXTERNAL MODULE: external "styled-components"
		var external_styled_components_ = __webpack_require__(1);

		// CONCATENATED MODULE: ./src/ThemeProvider/ThemeProvider.js
		/**
		 * Copyright Zendesk, Inc.
		 *
		 * Use of this source code is governed under the Apache License, Version 2.0
		 * found at http://www.apache.org/licenses/LICENSE-2.0.
		 */




		var ThemeProvider_ThemeProvider = function ThemeProvider(props) {
		  var theme = {
		    rtl: props.rtl,
		    styles: props.theme,
		    document: props.document
		  };
		  return external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
		    theme: theme
		  }, props.children);
		};

		ThemeProvider_ThemeProvider.propTypes = {
		  children: external_prop_types_default.a.node,
		  rtl: external_prop_types_default.a.bool,
		  theme: external_prop_types_default.a.object,
		  document: external_prop_types_default.a.object
		};
		/** @component */

		/* harmony default export */ var src_ThemeProvider_ThemeProvider = (ThemeProvider_ThemeProvider);
		// CONCATENATED MODULE: ./src/utils/isRtl.js
		/**
		 * Copyright Zendesk, Inc.
		 *
		 * Use of this source code is governed under the Apache License, Version 2.0
		 * found at http://www.apache.org/licenses/LICENSE-2.0.
		 */

		/** @component */
		function isRtl() {
		  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		      theme = _ref.theme;

		  return Boolean(theme && theme.rtl);
		}
		// CONCATENATED MODULE: ./src/utils/retrieveTheme.js
		/**
		 * Copyright Zendesk, Inc.
		 *
		 * Use of this source code is governed under the Apache License, Version 2.0
		 * found at http://www.apache.org/licenses/LICENSE-2.0.
		 */

		/** @component */
		function retrieveTheme(componentId, props) {
		  var styles = props.theme.styles;

		  if (!styles) {
		    return undefined;
		  }

		  var componentStyles = styles[componentId];

		  if (typeof componentStyles === 'function') {
		    return componentStyles(props);
		  }

		  return componentStyles;
		}
		// CONCATENATED MODULE: ./src/utils/withTheme.js
		/**
		 * Copyright Zendesk, Inc.
		 *
		 * Use of this source code is governed under the Apache License, Version 2.0
		 * found at http://www.apache.org/licenses/LICENSE-2.0.
		 */

		/** @component */

		function withTheme(WrappedComponent) {
		  return Object(external_styled_components_["withTheme"])(WrappedComponent);
		}
		// CONCATENATED MODULE: ./src/utils/getDocument.js
		/**
		 * Copyright Zendesk, Inc.
		 *
		 * Use of this source code is governed under the Apache License, Version 2.0
		 * found at http://www.apache.org/licenses/LICENSE-2.0.
		 */

		/** @component */
		function getDocument() {
		  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		      theme = _ref.theme;

		  return theme && theme.document || document;
		}
		// CONCATENATED MODULE: ./src/index.js
		/* concated harmony reexport ThemeProvider */__webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return src_ThemeProvider_ThemeProvider; });
		/* concated harmony reexport isRtl */__webpack_require__.d(__webpack_exports__, "isRtl", function() { return isRtl; });
		/* concated harmony reexport retrieveTheme */__webpack_require__.d(__webpack_exports__, "retrieveTheme", function() { return retrieveTheme; });
		/* concated harmony reexport withTheme */__webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
		/* concated harmony reexport getDocument */__webpack_require__.d(__webpack_exports__, "getDocument", function() { return getDocument; });
		/**
		 * Copyright Zendesk, Inc.
		 *
		 * Use of this source code is governed under the Apache License, Version 2.0
		 * found at http://www.apache.org/licenses/LICENSE-2.0.
		 */






		/***/ })
		/******/ ])));
		
} (dist));
	return dist;
}

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

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

// @private
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var positionMap = ['Top', 'Right', 'Bottom', 'Left'];

function generateProperty(property, position) {
  if (!property) return position.toLowerCase();
  var splitProperty = property.split('-');

  if (splitProperty.length > 1) {
    splitProperty.splice(1, 0, position);
    return splitProperty.reduce(function (acc, val) {
      return "" + acc + capitalizeString(val);
    });
  }

  var joinedProperty = property.replace(/([a-z])([A-Z])/g, "$1" + position + "$2");
  return property === joinedProperty ? "" + property + position : joinedProperty;
}

function generateStyles(property, valuesWithDefaults) {
  var styles = {};

  for (var i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
      styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i];
    }
  }

  return styles;
}
/**
 * Enables shorthand for direction-based properties. It accepts a property (hyphenated or camelCased) and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can also optionally pass a null argument for a directional value to ignore it.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */


function directionalProperty(property) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  //  prettier-ignore
  var firstValue = values[0],
      _values$ = values[1],
      secondValue = _values$ === void 0 ? firstValue : _values$,
      _values$2 = values[2],
      thirdValue = _values$2 === void 0 ? firstValue : _values$2,
      _values$3 = values[3],
      fourthValue = _values$3 === void 0 ? secondValue : _values$3;
  var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
  return generateStyles(property, valuesWithDefaults);
}

function endsWith (string, suffix) {
  return string.substr(-suffix.length) === suffix;
}

/**
 * Returns a given CSS value minus its unit (or the original value if an invalid string is passed).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */
function stripUnit(value) {
  var unitlessValue = parseFloat(value);
  if (isNaN(unitlessValue)) return value;
  return unitlessValue;
}

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */

var pxtoFactory = function pxtoFactory(to) {
  return function (pxval, base) {
    if (base === void 0) {
      base = '16px';
    }

    var newPxval = pxval;
    var newBase = base;

    if (typeof pxval === 'string') {
      if (!endsWith(pxval, 'px')) {
        throw new Error("Expected a string ending in \"px\" or a number passed as the first argument to " + to + "(), got \"" + pxval + "\" instead.");
      }

      newPxval = stripUnit(pxval);
    }

    if (typeof base === 'string') {
      if (!endsWith(base, 'px')) {
        throw new Error("Expected a string ending in \"px\" or a number passed as the second argument to " + to + "(), got \"" + base + "\" instead.");
      }

      newBase = stripUnit(base);
    }

    if (typeof newPxval === 'string') {
      throw new Error("Passed invalid pixel value (\"" + pxval + "\") to " + to + "(), please pass a value like \"12px\" or 12.");
    }

    if (typeof newBase === 'string') {
      throw new Error("Passed invalid base value (\"" + base + "\") to " + to + "(), please pass a value like \"12px\" or 12.");
    }

    return "" + newPxval / newBase + to;
  };
};

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

var em =
/*#__PURE__*/
pxtoFactory('em');

var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value and its unit as elements of an array.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': getValueAndUnit('100px')[0]
 *   '--unit': getValueAndUnit('100px')[1]
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${getValueAndUnit('100px')[0]}
 *   --unit: ${getValueAndUnit('100px')[1]}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 *   '--unit': 'px'
 * }
 */

function getValueAndUnit(value) {
  if (typeof value !== 'string') return [value, ''];
  var matchedValue = value.match(cssRegex);
  if (matchedValue) return [parseFloat(value), matchedValue[2]];
  return [value, undefined];
}

var ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4
};

function getRatio(ratioName) {
  return ratioNames[ratioName];
}
/**
 * Establish consistent measurements and spacial relationships throughout your projects by incrementing up or down a defined scale. We provide a list of commonly used scales as pre-defined variables.
 * @example
 * // Styles as object usage
 * const styles = {
 *    // Increment two steps up the default scale
 *   'fontSize': modularScale(2)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *    // Increment two steps up the default scale
 *   fontSize: ${modularScale(2)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'fontSize': '1.77689em'
 * }
 */


function modularScale(steps, base, ratio) {
  if (base === void 0) {
    base = '1em';
  }

  if (ratio === void 0) {
    ratio = 'perfectFourth';
  }

  if (typeof steps !== 'number') {
    throw new Error('Please provide a number of steps to the modularScale helper.');
  }

  if (typeof ratio === 'string' && !ratioNames[ratio]) {
    throw new Error('Please pass a number or one of the predefined scales to the modularScale helper as the ratio.');
  }

  var realBase = typeof base === 'string' ? stripUnit(base) : base;
  var realRatio = typeof ratio === 'string' ? getRatio(ratio) : ratio;

  if (typeof realBase === 'string') {
    throw new Error("Invalid value passed as base to modularScale, expected number or em string but got \"" + base + "\"");
  }

  return realBase * Math.pow(realRatio, steps) + "em";
}

/**
 * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */

var rem =
/*#__PURE__*/
pxtoFactory('rem');

/**
 * Returns a CSS calc formula for linear interpolation of a property between two values. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px').
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   fontSize: between('20px', '100px', '400px', '1000px'),
 *   fontSize: between('20px', '100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   fontSize: ${between('20px', '100px', '400px', '1000px')};
 *   fontSize: ${between('20px', '100px')}
 * `
 *
 * // CSS as JS Output
 *
 * h1: {
 *   'fontSize': 'calc(-33.33333333333334px + 13.333333333333334vw)',
 *   'fontSize': 'calc(-9.090909090909093px + 9.090909090909092vw)'
 * }
 */

function between(fromSize, toSize, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = '320px';
  }

  if (maxScreen === void 0) {
    maxScreen = '1200px';
  }

  var _getValueAndUnit = getValueAndUnit(fromSize),
      unitlessFromSize = _getValueAndUnit[0],
      fromSizeUnit = _getValueAndUnit[1];

  var _getValueAndUnit2 = getValueAndUnit(toSize),
      unitlessToSize = _getValueAndUnit2[0],
      toSizeUnit = _getValueAndUnit2[1];

  var _getValueAndUnit3 = getValueAndUnit(minScreen),
      unitlessMinScreen = _getValueAndUnit3[0],
      minScreenUnit = _getValueAndUnit3[1];

  var _getValueAndUnit4 = getValueAndUnit(maxScreen),
      unitlessMaxScreen = _getValueAndUnit4[0],
      maxScreenUnit = _getValueAndUnit4[1];

  if (typeof unitlessMinScreen !== 'number' || typeof unitlessMaxScreen !== 'number' || !minScreenUnit || !maxScreenUnit || minScreenUnit !== maxScreenUnit) {
    throw new Error('minScreen and maxScreen must be provided as stringified numbers with the same units.');
  }

  if (typeof unitlessFromSize !== 'number' || typeof unitlessToSize !== 'number' || !fromSizeUnit || !toSizeUnit || fromSizeUnit !== toSizeUnit) {
    throw new Error('fromSize and toSize must be provided as stringified numbers with the same units.');
  }

  var slope = (unitlessFromSize - unitlessToSize) / (unitlessMinScreen - unitlessMaxScreen);
  var base = unitlessToSize - slope * unitlessMaxScreen;
  return "calc(" + base.toFixed(2) + fromSizeUnit + " + " + (100 * slope).toFixed(2) + "vw)";
}

/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */
function clearFix(parent) {
  var _ref;

  if (parent === void 0) {
    parent = '&';
  }

  var pseudoSelector = parent + "::after";
  return _ref = {}, _ref[pseudoSelector] = {
    clear: 'both',
    content: '""',
    display: 'table'
  }, _ref;
}

/**
 * CSS to fully cover an area. Can optionally be passed an offset to act as a "padding".
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...cover()
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${cover()}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'position': 'absolute',
 *   'top': '0',
 *   'right: '0',
 *   'bottom': '0',
 *   'left: '0'
 * }
 */
function cover(offset) {
  if (offset === void 0) {
    offset = 0;
  }

  return {
    position: 'absolute',
    top: offset,
    right: offset,
    bottom: offset,
    left: offset
  };
}

/**
 * CSS to represent truncated text with an ellipsis.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis('250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis('250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'maxWidth': '250px',
 *   'overflow': 'hidden',
 *   'textOverflow': 'ellipsis',
 *   'whiteSpace': 'nowrap',
 *   'wordWrap': 'normal'
 * }
 */
function ellipsis(width) {
  if (width === void 0) {
    width = '100%';
  }

  return {
    display: 'inline-block',
    maxWidth: width,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
  };
}

/**
 * Returns a set of media queries that resizes a property (or set of properties) between a provided fromSize and toSize. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px') to constrain the interpolation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...fluidRange(
 *    {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${fluidRange(
 *      {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   "@media (min-width: 1000px)": Object {
 *     "padding": "100px",
 *   },
 *   "@media (min-width: 400px)": Object {
 *     "padding": "calc(-33.33333333333334px + 13.333333333333334vw)",
 *   },
 *   "padding": "20px",
 * }
 */
function fluidRange(cssProp, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = '320px';
  }

  if (maxScreen === void 0) {
    maxScreen = '1200px';
  }

  if (!Array.isArray(cssProp) && typeof cssProp !== 'object' || cssProp === null) {
    throw new Error('expects either an array of objects or a single object with the properties prop, fromSize, and toSize.');
  }

  if (Array.isArray(cssProp)) {
    var mediaQueries = {};
    var fallbacks = {};

    for (var _iterator = cssProp, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _extends2, _extends3;

      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var obj = _ref;

      if (!obj.prop || !obj.fromSize || !obj.toSize) {
        throw new Error('expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.');
      }

      fallbacks[obj.prop] = obj.fromSize;
      mediaQueries["@media (min-width: " + minScreen + ")"] = _extends({}, mediaQueries["@media (min-width: " + minScreen + ")"], (_extends2 = {}, _extends2[obj.prop] = between(obj.fromSize, obj.toSize, minScreen, maxScreen), _extends2));
      mediaQueries["@media (min-width: " + maxScreen + ")"] = _extends({}, mediaQueries["@media (min-width: " + maxScreen + ")"], (_extends3 = {}, _extends3[obj.prop] = obj.toSize, _extends3));
    }

    return _extends({}, fallbacks, mediaQueries);
  } else {
    var _ref2, _ref3, _ref4;

    if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) {
      throw new Error('expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.');
    }

    return _ref4 = {}, _ref4[cssProp.prop] = cssProp.fromSize, _ref4["@media (min-width: " + minScreen + ")"] = (_ref2 = {}, _ref2[cssProp.prop] = between(cssProp.fromSize, cssProp.toSize, minScreen, maxScreen), _ref2), _ref4["@media (min-width: " + maxScreen + ")"] = (_ref3 = {}, _ref3[cssProp.prop] = cssProp.toSize, _ref3), _ref4;
  }
}

function generateFileReferences(fontFilePath, fileFormats) {
  var fileFontReferences = fileFormats.map(function (format) {
    return "url(\"" + fontFilePath + "." + format + "\")";
  });
  return fileFontReferences.join(', ');
}

function generateLocalReferences(localFonts) {
  var localFontReferences = localFonts.map(function (font) {
    return "local(\"" + font + "\")";
  });
  return localFontReferences.join(', ');
}

function generateSources(fontFilePath, localFonts, fileFormats) {
  var fontReferences = [];
  if (localFonts) fontReferences.push(generateLocalReferences(localFonts));

  if (fontFilePath) {
    fontReferences.push(generateFileReferences(fontFilePath, fileFormats));
  }

  return fontReferences.join(', ');
}
/**
 * CSS for a @font-face declaration.
 *
 * @example
 * // Styles as object basic usage
 * const styles = {
 *    ...fontFace({
 *      'fontFamily': 'Sans-Pro',
 *      'fontFilePath': 'path/to/file'
 *    })
 * }
 *
 * // styled-components basic usage
 * const GlobalStyle = createGlobalStyle`${
 *   fontFace({
 *     'fontFamily': 'Sans-Pro',
 *     'fontFilePath': 'path/to/file'
 *   }
 * )}`
 *
 * // CSS as JS Output
 *
 * '@font-face': {
 *   'fontFamily': 'Sans-Pro',
 *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
 * }
 */


function fontFace(_ref) {
  var fontFamily = _ref.fontFamily,
      fontFilePath = _ref.fontFilePath,
      fontStretch = _ref.fontStretch,
      fontStyle = _ref.fontStyle,
      fontVariant = _ref.fontVariant,
      fontWeight = _ref.fontWeight,
      _ref$fileFormats = _ref.fileFormats,
      fileFormats = _ref$fileFormats === void 0 ? ['eot', 'woff2', 'woff', 'ttf', 'svg'] : _ref$fileFormats,
      localFonts = _ref.localFonts,
      unicodeRange = _ref.unicodeRange,
      fontDisplay = _ref.fontDisplay,
      fontVariationSettings = _ref.fontVariationSettings,
      fontFeatureSettings = _ref.fontFeatureSettings;
  // Error Handling
  if (!fontFamily) throw new Error('fontFace expects a name of a font-family.');

  if (!fontFilePath && !localFonts) {
    throw new Error('fontFace expects either the path to the font file(s) or a name of a local copy.');
  }

  if (localFonts && !Array.isArray(localFonts)) {
    throw new Error('fontFace expects localFonts to be an array.');
  }

  if (!Array.isArray(fileFormats)) {
    throw new Error('fontFace expects fileFormats to be an array.');
  }

  var fontFaceDeclaration = {
    '@font-face': {
      fontFamily: fontFamily,
      src: generateSources(fontFilePath, localFonts, fileFormats),
      unicodeRange: unicodeRange,
      fontStretch: fontStretch,
      fontStyle: fontStyle,
      fontVariant: fontVariant,
      fontWeight: fontWeight,
      fontDisplay: fontDisplay,
      fontVariationSettings: fontVariationSettings,
      fontFeatureSettings: fontFeatureSettings
    } // Removes undefined fields for cleaner css object.

  };
  return JSON.parse(JSON.stringify(fontFaceDeclaration));
}

/**
 * CSS to hide text to show a background image in a SEO-friendly way.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'backgroundImage': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   backgroundImage: url(logo.png);
 *   ${hideText()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'backgroundImage': 'url(logo.png)',
 *   'textIndent': '101%',
 *   'overflow': 'hidden',
 *   'whiteSpace': 'nowrap',
 * }
 */
function hideText() {
  return {
    textIndent: '101%',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  };
}

/**
 * CSS to hide content visually but remain accessible to screen readers.
 * from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/9a176f57af1cfe8ec70300da4621fb9b07e5fa31/src/css/main.css#L121)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...hideVisually(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hideVisually()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'border': '0',
 *   'clip': 'rect(0 0 0 0)',
 *   'clipPath': 'inset(50%)',
 *   'height': '1px',
 *   'margin': '-1px',
 *   'overflow': 'hidden',
 *   'padding': '0',
 *   'position': 'absolute',
 *   'whiteSpace': 'nowrap',
 *   'width': '1px',
 * }
 */
function hideVisually() {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
}

/**
 * Generates a media query to target HiDPI devices.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  [hiDPI(1.5)]: {
 *    width: 200px;
 *  }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hiDPI(1.5)} {
 *     width: 200px;
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 *  only screen and (min--moz-device-pixel-ratio: 1.5),
 *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
 *  only screen and (min-resolution: 144dpi),
 *  only screen and (min-resolution: 1.5dppx)': {
 *   'width': '200px',
 * }
 */
function hiDPI(ratio) {
  if (ratio === void 0) {
    ratio = 1.3;
  }

  return "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + ratio + "),\n    only screen and (min--moz-device-pixel-ratio: " + ratio + "),\n    only screen and (-o-min-device-pixel-ratio: " + ratio + "/1),\n    only screen and (min-resolution: " + Math.round(ratio * 96) + "dpi),\n    only screen and (min-resolution: " + ratio + "dppx)\n  ";
}

/**
 * CSS to normalize abnormalities across browsers (normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * const GlobalStyle = createGlobalStyle`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */
function normalize() {
  var _ref;

  return [(_ref = {
    html: {
      lineHeight: '1.15',
      textSizeAdjust: '100%'
    },
    body: {
      margin: '0'
    },
    h1: {
      fontSize: '2em',
      margin: '0.67em 0'
    },
    hr: {
      boxSizing: 'content-box',
      height: '0',
      overflow: 'visible'
    },
    pre: {
      fontFamily: 'monospace, monospace',
      fontSize: '1em'
    },
    a: {
      backgroundColor: 'transparent'
    },
    'abbr[title]': {
      borderBottom: 'none',
      textDecoration: 'underline'
    }
  }, _ref["b,\n    strong"] = {
    fontWeight: 'bolder'
  }, _ref["code,\n    kbd,\n    samp"] = {
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
  }, _ref.small = {
    fontSize: '80%'
  }, _ref["sub,\n    sup"] = {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline'
  }, _ref.sub = {
    bottom: '-0.25em'
  }, _ref.sup = {
    top: '-0.5em'
  }, _ref.img = {
    borderStyle: 'none'
  }, _ref["button,\n    input,\n    optgroup,\n    select,\n    textarea"] = {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0'
  }, _ref["button,\n    input"] = {
    overflow: 'visible'
  }, _ref["button,\n    select"] = {
    textTransform: 'none'
  }, _ref["button,\n    html [type=\"button\"],\n    [type=\"reset\"],\n    [type=\"submit\"]"] = {
    WebkitAppearance: 'button'
  }, _ref["button::-moz-focus-inner,\n    [type=\"button\"]::-moz-focus-inner,\n    [type=\"reset\"]::-moz-focus-inner,\n    [type=\"submit\"]::-moz-focus-inner"] = {
    borderStyle: 'none',
    padding: '0'
  }, _ref["button:-moz-focusring,\n    [type=\"button\"]:-moz-focusring,\n    [type=\"reset\"]:-moz-focusring,\n    [type=\"submit\"]:-moz-focusring"] = {
    outline: '1px dotted ButtonText'
  }, _ref.fieldset = {
    padding: '0.35em 0.625em 0.75em'
  }, _ref.legend = {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal'
  }, _ref.progress = {
    verticalAlign: 'baseline'
  }, _ref.textarea = {
    overflow: 'auto'
  }, _ref["[type=\"checkbox\"],\n    [type=\"radio\"]"] = {
    boxSizing: 'border-box',
    padding: '0'
  }, _ref["[type=\"number\"]::-webkit-inner-spin-button,\n    [type=\"number\"]::-webkit-outer-spin-button"] = {
    height: 'auto'
  }, _ref['[type="search"]'] = {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px'
  }, _ref['[type="search"]::-webkit-search-decoration'] = {
    WebkitAppearance: 'none'
  }, _ref['::-webkit-file-upload-button'] = {
    WebkitAppearance: 'button',
    font: 'inherit'
  }, _ref.details = {
    display: 'block'
  }, _ref.summary = {
    display: 'list-item'
  }, _ref.template = {
    display: 'none'
  }, _ref['[hidden]'] = {
    display: 'none'
  }, _ref), {
    'abbr[title]': {
      textDecoration: 'underline dotted'
    }
  }];
}

/**
 * CSS to style the placeholder pseudo-element.
 *
 * @deprecated - placeholder has been marked for deprecation in polished 2.0 and will be fully deprecated in 3.0. It is no longer needed and can safely be replaced with the non-prefixed placeholder pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...placeholder({'color': 'blue'})
 * }
 *
 * // styled-components usage
 * const div = styled.input`
 *    ${placeholder({'color': 'blue'})}
 * `
 *
 * // CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'blue',
 *   },
 * },
 */
function placeholder(styles, parent) {
  var _ref;

  if (parent === void 0) {
    parent = '&';
  }

  return _ref = {}, _ref[parent + "::-webkit-input-placeholder"] = _extends({}, styles), _ref[parent + ":-moz-placeholder"] = _extends({}, styles), _ref[parent + "::-moz-placeholder"] = _extends({}, styles), _ref[parent + ":-ms-input-placeholder"] = _extends({}, styles), _ref;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["radial-gradient(", "", "", "", ")"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function parseFallback(colorStops) {
  return colorStops[0].split(' ')[0];
}

function constructGradientValue(literals) {
  var template = '';

  for (var i = 0; i < literals.length; i += 1) {
    template += literals[i]; // Adds leading coma if properties preceed color-stops

    if (i === 3 && (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) && ((arguments.length <= 1 ? undefined : arguments[1]) || (arguments.length <= 2 ? undefined : arguments[2]) || (arguments.length <= 3 ? undefined : arguments[3]))) {
      template = template.slice(0, -1);
      template += ", " + (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]); // No trailing space if color-stops is the only param provided
    } else if (i === 3 && (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) && !(arguments.length <= 1 ? undefined : arguments[1]) && !(arguments.length <= 2 ? undefined : arguments[2]) && !(arguments.length <= 3 ? undefined : arguments[3])) {
      template += "" + (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]); // Only adds substitution if it is defined
    } else if (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) {
      template += (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) + " ";
    }
  }

  return template.trim();
}
/**
 * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#00FFFF',
 *   'backgroundImage': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */


function radialGradient(_ref) {
  var colorStops = _ref.colorStops,
      extent = _ref.extent,
      fallback = _ref.fallback,
      position = _ref.position,
      shape = _ref.shape;

  if (!colorStops || colorStops.length < 2) {
    throw new Error('radialGradient requries at least 2 color-stops to properly render.');
  }

  return {
    backgroundColor: fallback || parseFallback(colorStops),
    backgroundImage: constructGradientValue(_templateObject(), position, shape, extent, colorStops.join(', '))
  };
}

/**
 * A helper to generate a retina background image and non-retina
 * background image. The retina background image will output to a HiDPI media query. The mixin uses
 * a _2x.png filename suffix by default.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  ...retinaImage('my-img')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${retinaImage('my-img')}
 * `
 *
 * // CSS as JS Output
 * div {
 *   backgroundImage: 'url(my-img.png)',
 *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
 *    only screen and (min--moz-device-pixel-ratio: 1.3),
 *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
 *    only screen and (min-resolution: 144dpi),
 *    only screen and (min-resolution: 1.5dppx)': {
 *     backgroundImage: 'url(my-img_2x.png)',
 *   }
 * }
 */
function retinaImage(filename, backgroundSize, extension, retinaFilename, retinaSuffix) {
  var _ref;

  if (extension === void 0) {
    extension = 'png';
  }

  if (retinaSuffix === void 0) {
    retinaSuffix = '_2x';
  }

  if (!filename) {
    throw new Error('Please supply a filename to retinaImage() as the first argument.');
  } // Replace the dot at the beginning of the passed extension if one exists


  var ext = extension.replace(/^\./, '');
  var rFilename = retinaFilename ? retinaFilename + "." + ext : "" + filename + retinaSuffix + "." + ext;
  return _ref = {
    backgroundImage: "url(" + filename + "." + ext + ")"
  }, _ref[hiDPI()] = _extends({
    backgroundImage: "url(" + rFilename + ")"
  }, backgroundSize ? {
    backgroundSize: backgroundSize
  } : {}), _ref;
}

/**
 * CSS to style the selection pseudo-element.
 *
 * @deprecated - selection has been marked for deprecation in polished 2.0 and will be fully deprecated in 3.0. It is no longer needed and can safely be replaced with the non-prefixed selection pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...selection({
 *     'backgroundColor': 'blue'
 *   }, 'section')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${selection({'backgroundColor': 'blue'}, 'section')}
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'section::-moz-selection': {
 *     'backgroundColor':'blue',
 *   },
 *   'section::selection': {
 *     'backgroundColor': 'blue',
 *   }
 * }
 */
function selection(styles, parent) {
  var _ref;

  if (parent === void 0) {
    parent = '';
  }

  return _ref = {}, _ref[parent + "::-moz-selection"] = _extends({}, styles), _ref[parent + "::selection"] = _extends({}, styles), _ref;
}

/* eslint-disable key-spacing */
var functionsMap = {
  easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  easeInCirc: 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
  easeInCubic: 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
  easeInExpo: 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
  easeInQuad: 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
  easeInQuart: 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
  easeInQuint: 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
  easeInSine: 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
  easeOutBack: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
  easeOutCubic: 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
  easeOutCirc: 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
  easeOutExpo: 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
  easeOutQuad: 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
  easeOutQuart: 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
  easeOutQuint: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
  easeOutSine: 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',
  easeInOutBack: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  easeInOutCirc: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
  easeInOutCubic: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
  easeInOutExpo: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
  easeInOutQuad: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
  easeInOutQuart: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
  easeInOutQuint: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
  easeInOutSine: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)'
  /* eslint-enable key-spacing */

};

function getTimingFunction(functionName) {
  return functionsMap[functionName];
}
/**
 * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transitionTimingFunction': timingFunctions('easeInQuad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transitionTimingFunction: ${timingFunctions('easeInQuad')};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'transitionTimingFunction': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
 * }
 */


function timingFunctions(timingFunction) {
  return getTimingFunction(timingFunction);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderColor('red', 'green', 'blue', 'yellow')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderColor('red', 'green', 'blue', 'yellow')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderRightColor': 'green',
 *   'borderBottomColor': 'blue',
 *   'borderLeftColor': 'yellow'
 * }
 */
function borderColor() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderColor'].concat(values));
}

var getBorderWidth = function getBorderWidth(pointingDirection, height, width) {
  switch (pointingDirection) {
    case 'top':
      return "0 " + width[0] / 2 + width[1] + " " + height[0] + height[1] + " " + width[0] / 2 + width[1];

    case 'left':
      return "" + height[0] / 2 + height[1] + " " + width[0] + width[1] + " " + height[0] / 2 + height[1] + " 0";

    case 'bottom':
      return "" + height[0] + height[1] + " " + width[0] / 2 + width[1] + " 0 " + width[0] / 2 + width[1];

    case 'right':
      return "" + height[0] / 2 + height[1] + " 0 " + height[0] / 2 + height[1] + " " + width[0] + width[1];

    default:
      throw new Error("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.");
  }
}; // needed for border-color


var reverseDirection = ['bottom', 'left', 'top', 'right'];
var NUMBER_AND_FLOAT = /(\d*\.?\d*)/;
/**
 * CSS to represent triangle with any pointing direction with an optional background color. Accepts number or px values for height and width.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *  'borderColor': 'transparent',
 *  'borderLeftColor': 'red !important',
 *  'borderStyle': 'solid',
 *  'borderWidth': '50px 0 50px 100px',
 *  'height': '0',
 *  'width': '0',
 * }
 */

function triangle(_ref) {
  var pointingDirection = _ref.pointingDirection,
      height = _ref.height,
      width = _ref.width,
      foregroundColor = _ref.foregroundColor,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? 'transparent' : _ref$backgroundColor;
  var widthAndUnit = [parseFloat(width), String(width).replace(NUMBER_AND_FLOAT, '') || 'px'];
  var heightAndUnit = [parseFloat(height), String(height).replace(NUMBER_AND_FLOAT, '') || 'px'];

  if (isNaN(heightAndUnit[0]) || isNaN(widthAndUnit[0])) {
    throw new Error('Passed an invalid value to `height` or `width`. Please provide a pixel based unit');
  }

  var reverseDirectionIndex = reverseDirection.indexOf(pointingDirection);
  return _extends({
    width: '0',
    height: '0',
    borderWidth: getBorderWidth(pointingDirection, heightAndUnit, widthAndUnit),
    borderStyle: 'solid'
  }, borderColor.apply(void 0, Array.from({
    length: 4
  }).map(function (_, index) {
    return index === reverseDirectionIndex ? foregroundColor : backgroundColor;
  })));
}

/**
 * Provides an easy way to change the `wordWrap` property.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...wordWrap('break-word')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-word')}
 * `
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflowWrap: 'break-word',
 *   wordWrap: 'break-word',
 *   wordBreak: 'break-all',
 * }
 */
function wordWrap(wrap) {
  if (wrap === void 0) {
    wrap = 'break-word';
  }

  var wordBreak = wrap === 'break-word' ? 'break-all' : wrap;
  return {
    overflowWrap: wrap,
    wordWrap: wrap,
    wordBreak: wordBreak
  };
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
  } // formular from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = hue % 360 / 60;
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
  /**
   * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
   * @private
   */

};

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
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
    throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
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

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
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
      throw new Error("Couldn't generate valid rgb string from " + normalizedColor + ", it returned " + rgbColorString + ".");
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new Error("Couldn't generate valid rgb string from " + normalizedColor + ", it returned " + _rgbColorString + ".");
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.");
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

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
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

  throw new Error('Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).');
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

  throw new Error('Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).');
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
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new Error('Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).');
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

  throw new Error('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).');
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

var errMsg = 'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.';
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
  if (typeof color !== 'object') throw new Error(errMsg);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new Error(errMsg);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
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

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue(180, '#448'),
 *   background: adjustHue('180', 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue(180, '#448')};
 *   background: ${adjustHue('180', 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#888844";
 *   background: "rgba(136,136,68,0.7)";
 * }
 */

function adjustHue(degree, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    hue: (hslColor.hue + parseFloat(degree)) % 360
  }));
} // prettier-ignore


var curriedAdjustHue =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(adjustHue);

/**
 * Returns the complement of the provided color. This is identical to adjustHue(180, <color>).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: complement('#448'),
 *   background: complement('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${complement('#448')};
 *   background: ${complement('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#884";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */

function complement(color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    hue: (hslColor.hue + 180) % 360
  }));
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
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(darken);

/**
 * Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */

function desaturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDesaturate =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(desaturate);

/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
 *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
 *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */

function getLuminance(color) {
  var rgbColor = parseToRgb(color);

  var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
    var channel = rgbColor[key] / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }),
      r = _Object$keys$map[0],
      g = _Object$keys$map[1],
      b = _Object$keys$map[2];

  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
}

/**
 * Converts the color to a grayscale, by reducing its saturation to 0.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: grayscale('#CCCD64'),
 *   background: grayscale('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${grayscale('#CCCD64')};
 *   background: ${grayscale('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#999";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */

function grayscale(color) {
  return toColorString(_extends({}, parseToHsl(color), {
    saturation: 0
  }));
}

/**
 * Inverts the red, green and blue values of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: invert('#CCCD64'),
 *   background: invert('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${invert('#CCCD64')};
 *   background: ${invert('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */

function invert(color) {
  // parse color string to rgb
  var value = parseToRgb(color);
  return toColorString(_extends({}, value, {
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue
  }));
}

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
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(lighten);

/**
 * Mixes the two provided colors together by calculating the average of each of the RGB components weighted to the first color by the provided weight.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */

function mix(weight, color, otherColor) {
  var parsedColor1 = parseToRgb(color);

  var color1 = _extends({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);

  var color2 = _extends({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1 // The formular is copied from the original Sass implementation:
    // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method

  });

  var alphaDelta = color1.alpha - color2.alpha;
  var x = parseFloat(weight) * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha + (color2.alpha - color1.alpha) * (parseFloat(weight) / 1.0)
  };
  return rgba(mixedColor);
} // prettier-ignore


var curriedMix =
/*#__PURE__*/
curry
/* ::<number | string, string, string, string> */
(mix);

/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */

function opacify(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedOpacify =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(opacify);

/**
 * Returns black or white for best contrast depending on the luminosity of the given color.
 * Follows W3C specs for readability at https://www.w3.org/TR/WCAG20-TECHS/G18.html
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('papayawhip'),
 *   color: readableColor('rgb(255,0,0)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('papayawhip')};
 *   color: ${readableColor('rgb(255,0,0)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   color: "#fff";
 *   color: "#fff";
 *   color: "#000";
 * }
 */

function readableColor(color) {
  return getLuminance(color) > 0.179 ? '#000' : '#fff';
}

/**
 * Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */

function saturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
} // prettier-ignore


var curriedSaturate =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(saturate);

/**
 * Sets the hue of a color to the provided value. The hue range can be
 * from 0 and 359.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setHue(42, '#CCCD64'),
 *   background: setHue('244', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setHue(42, '#CCCD64')};
 *   background: ${setHue('244', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#cdae64";
 *   background: "rgba(107,100,205,0.7)";
 * }
 */

function setHue(hue, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
} // prettier-ignore


var curriedSetHue =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(setHue);

/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */

function setLightness(lightness, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
} // prettier-ignore


var curriedSetLightness =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(setLightness);

/**
 * Sets the saturation of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */

function setSaturation(saturation, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
} // prettier-ignore


var curriedSetSaturation =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(setSaturation);

/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage, color) {
  return curriedMix(parseFloat(percentage), 'rgb(0, 0, 0)', color);
} // prettier-ignore


var curriedShade =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(shade);

/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  return curriedMix(parseFloat(percentage), 'rgb(255, 255, 255)', color);
} // prettier-ignore


var curriedTint =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(tint);

/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedTransparentize =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(transparentize);

/**
 * Shorthand for easily setting the animation property. Allows either multiple arrays with animations
 * or a single animation spread over the arguments.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out, colorchange 2s'
 * }
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation('rotate', '1s', 'ease-in-out')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation('rotate', '1s', 'ease-in-out')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out'
 * }
 */
function animation() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Allow single or multiple animations passed
  var multiMode = Array.isArray(args[0]);

  if (!multiMode && args.length > 8) {
    throw new Error('The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation');
  }

  var code = args.map(function (arg) {
    if (multiMode && !Array.isArray(arg) || !multiMode && Array.isArray(arg)) {
      throw new Error("To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')");
    }

    if (Array.isArray(arg) && arg.length > 8) {
      throw new Error('The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation');
    }

    return Array.isArray(arg) ? arg.join(' ') : arg;
  }).join(', ');
  return {
    animation: code
  };
}

/**
 * Shorthand that accepts any number of backgroundImage values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'backgroundImage': 'url("/image/background.jpg"), linear-gradient(red, green)'
 * }
 */
function backgroundImages() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    backgroundImage: properties.join(', ')
  };
}

/**
 * Shorthand that accepts any number of background values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'background': 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat'
 * }
 */
function backgrounds() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    background: properties.join(', ')
  };
}

var sideMap = ['top', 'right', 'bottom', 'left'];
/**
 * Shorthand for the border property that splits out individual properties for use with tools like Fela and Styletron. A side keyword can optionally be passed to target only one side's border properties.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...border('1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderColor': 'red',
 *   'borderStyle': 'solid',
 *   'borderWidth': `1px`,
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...border('top', '1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('top', '1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderTopStyle': 'solid',
 *   'borderTopWidth': `1px`,
 * }
 */

function border(sideKeyword) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (typeof sideKeyword === 'string' && sideMap.indexOf(sideKeyword) >= 0) {
    var _ref;

    return _ref = {}, _ref["border" + capitalizeString(sideKeyword) + "Width"] = values[0], _ref["border" + capitalizeString(sideKeyword) + "Style"] = values[1], _ref["border" + capitalizeString(sideKeyword) + "Color"] = values[2], _ref;
  } else {
    values.unshift(sideKeyword);
    return {
      borderWidth: values[0],
      borderStyle: values[1],
      borderColor: values[2]
    };
  }
}

/**
 * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopRightRadius': '5px',
 *   'borderTopLeftRadius': '5px',
 * }
 */
function borderRadius(side, radius) {
  var uppercaseSide = capitalizeString(side);

  if (!radius && radius !== 0) {
    throw new Error('borderRadius expects a radius value as a string or number as the second argument.');
  }

  if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
    var _ref;

    return _ref = {}, _ref["border" + uppercaseSide + "RightRadius"] = radius, _ref["border" + uppercaseSide + "LeftRadius"] = radius, _ref;
  }

  if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
    var _ref2;

    return _ref2 = {}, _ref2["borderTop" + uppercaseSide + "Radius"] = radius, _ref2["borderBottom" + uppercaseSide + "Radius"] = radius, _ref2;
  }

  throw new Error('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.');
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopStyle': 'solid',
 *   'borderRightStyle': 'dashed',
 *   'borderBottomStyle': 'dotted',
 *   'borderLeftStyle': 'double'
 * }
 */
function borderStyle() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderStyle'].concat(values));
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderWidth('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderWidth('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopWidth': '12px',
 *   'borderRightWidth': '24px',
 *   'borderBottomWidth': '36px',
 *   'borderLeftWidth': '48px'
 * }
 */
function borderWidth() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderWidth'].concat(values));
}

function generateSelectors(template, state) {
  var stateSuffix = state ? ":" + state : '';
  return template(stateSuffix);
}
/**
 * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
 * @private
 */


function statefulSelectors(states, template, stateMap) {
  if (!template) throw new Error('You must provide a template to this method.');
  if (states.length === 0) return generateSelectors(template, null);
  var selectors = [];

  for (var i = 0; i < states.length; i += 1) {
    if (stateMap && stateMap.indexOf(states[i]) < 0) {
      throw new Error('You passed an unsupported selector state to this method.');
    }

    selectors.push(generateSelectors(template, states[i]));
  }

  selectors = selectors.join(',');
  return selectors;
}

var stateMap = [undefined, null, 'active', 'focus', 'hover'];

function template(state) {
  return "button" + state + ",\n  input[type=\"button\"]" + state + ",\n  input[type=\"reset\"]" + state + ",\n  input[type=\"submit\"]" + state;
}
/**
 * Populates selectors that target all buttons. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [buttons('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${buttons('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'button:active,
 *  'input[type="button"]:active,
 *  'input[type=\"reset\"]:active,
 *  'input[type=\"submit\"]:active: {
 *   'border': 'none'
 * }
 */


function buttons() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template, stateMap);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...margin('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${margin('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'marginTop': '12px',
 *   'marginRight': '24px',
 *   'marginBottom': '36px',
 *   'marginLeft': '48px'
 * }
 */
function margin() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['margin'].concat(values));
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${padding('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */
function padding() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['padding'].concat(values));
}

var positionMap$1 = ['absolute', 'fixed', 'relative', 'static', 'sticky'];
/**
 * Shorthand accepts up to five values, including null to skip a value, and maps them to their respective directions. The first value can optionally be a position keyword.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...position('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...position('absolute', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('absolute', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'position': 'absolute',
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 */

function position(positionKeyword) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (positionMap$1.indexOf(positionKeyword) >= 0) {
    return _extends({
      position: positionKeyword
    }, directionalProperty.apply(void 0, [''].concat(values)));
  } else {
    var firstValue = positionKeyword; // in this case position is actually the first value

    return directionalProperty.apply(void 0, ['', firstValue].concat(values));
  }
}

/**
 * Shorthand to set the height and width properties in a single statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */
function size(height, width) {
  if (width === void 0) {
    width = height;
  }

  return {
    height: height,
    width: width
  };
}

var stateMap$1 = [undefined, null, 'active', 'focus', 'hover'];

function template$1(state) {
  return "input[type=\"color\"]" + state + ",\n    input[type=\"date\"]" + state + ",\n    input[type=\"datetime\"]" + state + ",\n    input[type=\"datetime-local\"]" + state + ",\n    input[type=\"email\"]" + state + ",\n    input[type=\"month\"]" + state + ",\n    input[type=\"number\"]" + state + ",\n    input[type=\"password\"]" + state + ",\n    input[type=\"search\"]" + state + ",\n    input[type=\"tel\"]" + state + ",\n    input[type=\"text\"]" + state + ",\n    input[type=\"time\"]" + state + ",\n    input[type=\"url\"]" + state + ",\n    input[type=\"week\"]" + state + ",\n    input:not([type])" + state + ",\n    textarea" + state;
}
/**
 * Populates selectors that target all text inputs. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [textInputs('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${textInputs('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'input[type="color"]:active,
 *  input[type="date"]:active,
 *  input[type="datetime"]:active,
 *  input[type="datetime-local"]:active,
 *  input[type="email"]:active,
 *  input[type="month"]:active,
 *  input[type="number"]:active,
 *  input[type="password"]:active,
 *  input[type="search"]:active,
 *  input[type="tel"]:active,
 *  input[type="text"]:active,
 *  input[type="time"]:active,
 *  input[type="url"]:active,
 *  input[type="week"]:active,
 *  input:not([type]):active,
 *  textarea:active': {
 *   'border': 'none'
 * }
 */


function textInputs() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template$1, stateMap$1);
}

/**
 * Accepts any number of transition values as parameters for creating a single transition statement. You may also pass an array of properties as the first parameter that you would like to apply the same tranisition values to (second parameter).
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s'),
 *   ...transitions(['color', 'background-color'], '2.0s ease-in 2s')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')};
 *   ${transitions(['color', 'background-color'], '2.0s ease-in 2s'),};
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
 *   'transition': 'color 2.0s ease-in 2s, background-color 2.0s ease-in 2s',
 * }
 */
function transitions() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  if (Array.isArray(properties[0]) && properties.length === 2) {
    var value = properties[1];

    if (typeof value !== 'string') {
      throw new Error('Property must be a string value.');
    }

    var transitionsString = properties[0].map(function (property) {
      return property + " " + value;
    }).join(', ');
    return {
      transition: transitionsString
    };
  } else {
    return {
      transition: properties.join(', ')
    };
  }
}

var polished_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    adjustHue: curriedAdjustHue,
    animation: animation,
    backgroundImages: backgroundImages,
    backgrounds: backgrounds,
    between: between,
    border: border,
    borderColor: borderColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    borderWidth: borderWidth,
    buttons: buttons,
    clearFix: clearFix,
    complement: complement,
    cover: cover,
    darken: curriedDarken,
    desaturate: curriedDesaturate,
    directionalProperty: directionalProperty,
    ellipsis: ellipsis,
    em: em,
    fluidRange: fluidRange,
    fontFace: fontFace,
    getLuminance: getLuminance,
    getValueAndUnit: getValueAndUnit,
    grayscale: grayscale,
    invert: invert,
    hideText: hideText,
    hideVisually: hideVisually,
    hiDPI: hiDPI,
    hsl: hsl,
    hsla: hsla,
    lighten: curriedLighten,
    margin: margin,
    mix: curriedMix,
    modularScale: modularScale,
    normalize: normalize,
    opacify: curriedOpacify,
    padding: padding,
    parseToHsl: parseToHsl,
    parseToRgb: parseToRgb,
    placeholder: placeholder,
    position: position,
    radialGradient: radialGradient,
    readableColor: readableColor,
    rem: rem,
    retinaImage: retinaImage,
    rgb: rgb,
    rgba: rgba,
    saturate: curriedSaturate,
    selection: selection,
    setHue: curriedSetHue,
    setLightness: curriedSetLightness,
    setSaturation: curriedSetSaturation,
    shade: curriedShade,
    size: size,
    stripUnit: stripUnit,
    textInputs: textInputs,
    timingFunctions: timingFunctions,
    tint: curriedTint,
    toColorString: toColorString,
    transitions: transitions,
    transparentize: curriedTransparentize,
    triangle: triangle,
    wordWrap: wordWrap
});

var require$$4 = /*@__PURE__*/getAugmentedNamespace(polished_es);

/*!
 * Copyright Zendesk, Inc.
 * 
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0
 */

(function (exports) {
	(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
	/******/ 	return __webpack_require__(__webpack_require__.s = 6);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports) {

	module.exports = propTypes.exports;

	/***/ }),
	/* 1 */
	/***/ (function(module, exports) {

	module.exports = React__default["default"];

	/***/ }),
	/* 2 */
	/***/ (function(module, exports) {

	module.exports = require$$2;

	/***/ }),
	/* 3 */
	/***/ (function(module, exports) {

	/**
	 * Copyright Zendesk, Inc.
	 *
	 * Use of this source code is governed under the Apache License, Version 2.0
	 * found at http://www.apache.org/licenses/LICENSE-2.0.
	 */

	module.exports = {
	  zdColorBlack: '#000',
	  zdColorGreen100: '#edf8f4',
	  zdColorGreen200: '#d1e8df',
	  zdColorGreen300: '#aecfc2',
	  zdColorGreen400: '#5eae91',
	  zdColorGreen500: '#228f67',
	  zdColorGreen600: '#038153',
	  zdColorGreen700: '#186146',
	  zdColorGreen800: '#0b3b29',
	  zdColorGrey100: '#f8f9f9',
	  zdColorGrey200: '#e9ebed',
	  zdColorGrey300: '#d8dcde',
	  zdColorGrey400: '#c2c8cc',
	  zdColorGrey500: '#87929d',
	  zdColorGrey600: '#68737d',
	  zdColorGrey700: '#49545c',
	  zdColorGrey800: '#2f3941',
	  zdColorBlue100: '#edf7ff',
	  zdColorBlue200: '#cee2f2',
	  zdColorBlue300: '#adcce4',
	  zdColorBlue400: '#5293c7',
	  zdColorBlue500: '#337fbd',
	  zdColorBlue600: '#1f73b7',
	  zdColorBlue700: '#144a75',
	  zdColorBlue800: '#0f3554',
	  zdColorKale100: '#f5fbfc',
	  zdColorKale200: '#c1d6d9',
	  zdColorKale300: '#819a9e',
	  zdColorKale400: '#56777a',
	  zdColorKale500: '#335d63',
	  zdColorKale600: '#04444d',
	  zdColorKale700: '#03363d',
	  zdColorKale800: '#012b30',
	  zdColorRed100: '#fff0f1',
	  zdColorRed200: '#f5d5d8',
	  zdColorRed300: '#f5b5ba',
	  zdColorRed400: '#e35b66',
	  zdColorRed500: '#d93f4c',
	  zdColorRed600: '#cc3340',
	  zdColorRed700: '#8c232c',
	  zdColorRed800: '#681219',
	  zdColorYellow100: '#fff8ed',
	  zdColorYellow200: '#fff0db',
	  zdColorYellow300: '#fcdba9',
	  zdColorYellow400: '#ffb648',
	  zdColorYellow500: '#f5a133',
	  zdColorYellow600: '#ed961c',
	  zdColorYellow700: '#ad5e18',
	  zdColorYellow800: '#703b15',
	  zdColorWhite: '#fff',
	  zdColorSecondaryAzure400: '#3091ec',
	  zdColorSecondaryAzure600: '#1371d6',
	  zdColorSecondaryCrimson400: '#e34f32',
	  zdColorSecondaryCrimson600: '#c72a1c',
	  zdColorSecondaryFuschia400: '#d653c2',
	  zdColorSecondaryFuschia600: '#a81897',
	  zdColorSecondaryLemon400: '#ffd424',
	  zdColorSecondaryLemon600: '#ffbb10',
	  zdColorSecondaryLime400: '#43b324',
	  zdColorSecondaryLime600: '#2e8200',
	  zdColorSecondaryMint400: '#00a656',
	  zdColorSecondaryMint600: '#058541',
	  zdColorSecondaryOrange400: '#de701d',
	  zdColorSecondaryOrange600: '#bf5000',
	  zdColorSecondaryPink400: '#ec4d63',
	  zdColorSecondaryPink600: '#d42054',
	  zdColorSecondaryPurple400: '#b552e2',
	  zdColorSecondaryPurple600: '#6a27b8',
	  zdColorSecondaryRoyal400: '#5d7df5',
	  zdColorSecondaryRoyal600: '#3353e2',
	  zdColorSecondaryTeal400: '#02a191',
	  zdColorSecondaryTeal600: '#028079',
	  zdColorSecondaryAzureM400: '#5f8dcf',
	  zdColorSecondaryAzureM600: '#3a70b2',
	  zdColorSecondaryCrimsonM400: '#cc6c5b',
	  zdColorSecondaryCrimsonM600: '#b24a3c',
	  zdColorSecondaryFuschiaM400: '#cf62a8',
	  zdColorSecondaryFuschiaM600: '#a8458c',
	  zdColorSecondaryLemonM400: '#e7a500',
	  zdColorSecondaryLemonM600: '#c38f00',
	  zdColorSecondaryLimeM400: '#519e2d',
	  zdColorSecondaryLimeM600: '#47782c',
	  zdColorSecondaryMintM400: '#299c66',
	  zdColorSecondaryMintM600: '#2e8057',
	  zdColorSecondaryOrangeM400: '#d4772c',
	  zdColorSecondaryOrangeM600: '#b35827',
	  zdColorSecondaryPinkM400: '#d57287',
	  zdColorSecondaryPinkM600: '#b23a5d',
	  zdColorSecondaryPurpleM400: '#b072cc',
	  zdColorSecondaryPurpleM600: '#9358b0',
	  zdColorSecondaryRoyalM400: '#7986d8',
	  zdColorSecondaryRoyalM600: '#4b61c3',
	  zdColorSecondaryTealM400: '#2d9e8f',
	  zdColorSecondaryTealM600: '#3c7873',
	  zdColorChatOrange: '#f79a3e',
	  zdColorConnectRed: '#eb6651',
	  zdColorExploreBlue: '#30aabc',
	  zdColorGatherPink: '#e7afa2',
	  zdColorGuidePink: '#eb4962',
	  zdColorMessageGreen: '#37b8af',
	  zdColorSellGold: '#d4ae5e',
	  zdColorSupportGreen: '#78a300',
	  zdColorTalkYellow: '#efc93d',
	  zdFontFamilyMonospace: 'SFMono-Regular,Consolas,"Liberation Mono",Menlo,Courier,monospace',
	  zdFontFamilySystem: 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",Arial,sans-serif',
	  zdFontSizeSm: '12px',
	  zdFontSizeMd: '14px',
	  zdFontSizeLg: '18px',
	  zdFontSizeXl: '22px',
	  zdFontSizeXxl: '26px',
	  zdFontSizeXxxl: '36px',
	  zdFontSizeSmMonospace: '11px',
	  zdFontSizeMdMonospace: '13px',
	  zdFontSizeLgMonospace: '17px',
	  zdFontWeightThin: '100',
	  zdFontWeightExtralight: '200',
	  zdFontWeightLight: '300',
	  zdFontWeightRegular: '400',
	  zdFontWeightMedium: '500',
	  zdFontWeightSemibold: '600',
	  zdFontWeightBold: '700',
	  zdFontWeightExtrabold: '800',
	  zdFontWeightBlack: '900',
	  zdFontWeightUltralight: '200',
	  zdFontWeightUltrabold: '800',
	  zdFontWeightHeavy: '900',
	  zdLineHeightSm: '16px',
	  zdLineHeightMd: '20px',
	  zdLineHeightLg: '24px',
	  zdLineHeightXl: '28px',
	  zdLineHeightXxl: '32px',
	  zdLineHeightXxxl: '44px',
	  zdSpacingXxs: '4px',
	  zdSpacingXs: '8px',
	  zdSpacingSm: '12px',
	  zdSpacing: '20px',
	  zdSpacingLg: '32px',
	  zdSpacingXl: '40px',
	  zdSpacingXxl: '48px'
	};


	/***/ }),
	/* 4 */
	/***/ (function(module, exports) {

	module.exports = requireDist();

	/***/ }),
	/* 5 */
	/***/ (function(module, exports) {

	module.exports = require$$4;

	/***/ }),
	/* 6 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	__webpack_require__.r(__webpack_exports__);

	// EXTERNAL MODULE: external "react"
	var external_react_ = __webpack_require__(1);
	var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

	// EXTERNAL MODULE: external "prop-types"
	var external_prop_types_ = __webpack_require__(0);
	var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

	// CONCATENATED MODULE: ./src/utils/animations.js
	/**
	 * Copyright Zendesk, Inc.
	 *
	 * Use of this source code is governed under the Apache License, Version 2.0
	 * found at http://www.apache.org/licenses/LICENSE-2.0.
	 */

	/**
	 * Accelerating from zero velocity
	 * @param {Number} time Time
	 */
	function easeInCubic(time) {
	  return time * time * time;
	}
	/**
	 * Decelerating to zero velocity
	 * @param {Number} time Time
	 */

	function easeOutCubic(time) {
	  var value = time - 1;
	  return value * value * value + 1;
	}
	/**
	 * Acceleration until halfway, then deceleration
	 * @param {Number} time Time
	 */

	function easeInOutCubic(time) {
	  return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
	}
	// CONCATENATED MODULE: ./src/utils/dot-coordinates.js
	/**
	 * Copyright Zendesk, Inc.
	 *
	 * Use of this source code is governed under the Apache License, Version 2.0
	 * found at http://www.apache.org/licenses/LICENSE-2.0.
	 */

	var KEYFRAME_1 = 0.166666667;
	var KEYFRAME_2 = 0.55;
	var KEYFRAME_3 = 1.166666667;
	var KEYFRAME_4 = 1.333333333;
	var KEYFRAME_5 = 1.533333333;
	var KEYFRAME_MAX = 1.766666667;
	var dot_coordinates_WIDTH = 80;
	var dot_coordinates_HEIGHT = dot_coordinates_WIDTH * 0.9;
	var CIRCLE_RADIUS = dot_coordinates_WIDTH * 0.1125;
	var MID_X = dot_coordinates_WIDTH / 2 - CIRCLE_RADIUS;
	var MID_Y = dot_coordinates_HEIGHT / 2 - CIRCLE_RADIUS;
	var BOTTOM = MID_Y + 5;
	/**
	 * Retrieve the X coordinate value
	 * @param {Number} frame The current frame
	 */

	function retrieveXCoordinate(frame) {
	  var retVal;

	  var _frame = frame % KEYFRAME_MAX;

	  if (_frame < KEYFRAME_1) {
	    return MID_X;
	  } else if (_frame < KEYFRAME_2) {
	    var frameValue = _frame - KEYFRAME_1;
	    var frameMaximum = KEYFRAME_2 - KEYFRAME_1;
	    var easeValue = easeInOutCubic(frameValue / frameMaximum);
	    retVal = MID_X - easeValue * MID_X;
	  } else if (_frame < KEYFRAME_4) {
	    retVal = 0;
	  } else {
	    var _frameValue = _frame - KEYFRAME_4;

	    var _frameMaximum = KEYFRAME_MAX - KEYFRAME_4;

	    retVal = MID_X * (_frameValue / _frameMaximum);
	  }

	  if (frame >= KEYFRAME_MAX) {
	    retVal = MID_X * 2 - retVal;
	  }

	  return retVal;
	}
	/**
	 * Retrieve the Y coordinate value
	 * @param {Number} frame The current frame
	 */

	function retrieveYCoordinate(frame) {
	  var _frame = frame % KEYFRAME_MAX;

	  if (_frame < KEYFRAME_1) {
	    return _frame / KEYFRAME_1 * -1 * (BOTTOM - MID_Y) + BOTTOM;
	  } else if (_frame < KEYFRAME_3) {
	    return MID_Y;
	  } else if (_frame < KEYFRAME_4) {
	    var _frameValue2 = _frame - KEYFRAME_3;

	    var _frameMaximum2 = KEYFRAME_4 - KEYFRAME_3;

	    return _frameValue2 / _frameMaximum2 * (BOTTOM - MID_Y) + MID_Y;
	  } else if (_frame < KEYFRAME_5) {
	    var _frameValue3 = _frame - KEYFRAME_4;

	    var _frameMaximum3 = KEYFRAME_5 - KEYFRAME_4;

	    var _easeValue = easeOutCubic(_frameValue3 / _frameMaximum3);

	    return BOTTOM - _easeValue * BOTTOM;
	  }

	  var frameValue = _frame - KEYFRAME_5;
	  var frameMaximum = KEYFRAME_MAX - KEYFRAME_5;
	  var easeValue = easeInCubic(frameValue / frameMaximum);
	  return easeValue * BOTTOM;
	}
	// EXTERNAL MODULE: external "styled-components"
	var external_styled_components_ = __webpack_require__(2);
	var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

	// EXTERNAL MODULE: external "@zendeskgarden/react-theming"
	var react_theming_ = __webpack_require__(4);

	// CONCATENATED MODULE: ./src/styled-elements.js
	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	/**
	 * Copyright Zendesk, Inc.
	 *
	 * Use of this source code is governed under the Apache License, Version 2.0
	 * found at http://www.apache.org/licenses/LICENSE-2.0.
	 */




	var DotsCircle = external_styled_components_default.a.circle.attrs(function (props) {
	  return {
	    cx: 9,
	    cy: 9,
	    r: 9,
	    transform: props.transform
	  };
	}).withConfig({
	  displayName: "styled-elements__DotsCircle",
	  componentId: "sc-19dhio6-0"
	})([""]);
	DotsCircle.propTypes = {
	  transform: external_prop_types_default.a.string
	};
	var SpinnerCircle = external_styled_components_default.a.circle.attrs(function (props) {
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
	  displayName: "styled-elements__SpinnerCircle",
	  componentId: "sc-19dhio6-1"
	})([""]);
	SpinnerCircle.propTypes = {
	  dasharrayValue: external_prop_types_default.a.number,
	  strokeWidthValue: external_prop_types_default.a.number,
	  transform: external_prop_types_default.a.string
	};
	var StyledSvg = external_styled_components_default.a.svg.attrs(function (props) {
	  return {
	    'data-garden-version': "6.8.0",
	    xmlns: 'http://www.w3.org/2000/svg',
	    width: props.width,
	    height: props.height,
	    focusable: 'false',
	    viewBox: "0 0 ".concat(props.width, " ").concat(props.height),
	    role: 'progressbar'
	  };
	}).withConfig({
	  displayName: "styled-elements__StyledSvg",
	  componentId: "sc-19dhio6-2"
	})(["width:1em;height:0.9em;color:", ";font-size:", ";", ";"], function (props) {
	  return props.color || 'inherit';
	}, function (props) {
	  return props.fontSize || 'inherit';
	}, function (props) {
	  return Object(react_theming_["retrieveTheme"])(props.dataGardenId, props);
	});
	StyledSvg.propTypes = {
	  color: external_prop_types_default.a.string,
	  fontSize: external_prop_types_default.a.any
	};
	var StyledSVG = external_react_default.a.forwardRef(function (_ref, ref) {
	  var children = _ref.children,
	      fontSize = _ref.fontSize,
	      width = _ref.width,
	      height = _ref.height,
	      other = _objectWithoutProperties(_ref, ["children", "fontSize", "width", "height"]);

	  return external_react_default.a.createElement(StyledSvg, _extends({
	    fontSize: fontSize,
	    width: width,
	    height: height,
	    ref: ref
	  }, other), children);
	});
	StyledSVG.propTypes = {
	  children: external_prop_types_default.a.node,
	  fontSize: external_prop_types_default.a.any,
	  height: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.number]),
	  width: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.number])
	};
	var LoadingPlaceholder = external_styled_components_default.a.div.attrs({
	  role: 'progressbar'
	}).withConfig({
	  displayName: "styled-elements__LoadingPlaceholder",
	  componentId: "sc-19dhio6-3"
	})(["display:inline;width:1em;height:0.9em;font-size:", ";"], function (props) {
	  return props.fontSize;
	});
	LoadingPlaceholder.propTypes = {
	  fontSize: external_prop_types_default.a.any
	};
	// CONCATENATED MODULE: ./src/containers/ScheduleContainer.js
	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Copyright Zendesk, Inc.
	 *
	 * Use of this source code is governed under the Apache License, Version 2.0
	 * found at http://www.apache.org/licenses/LICENSE-2.0.
	 */




	var ScheduleContainer_ScheduleContainer =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(ScheduleContainer, _Component);

	  function ScheduleContainer(props) {
	    var _this;

	    _classCallCheck(this, ScheduleContainer);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScheduleContainer).call(this, props));
	    _this.state = {
	      delayComplete: false
	    };
	    return _this;
	  }

	  _createClass(ScheduleContainer, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this2 = this;

	      var delayMS = this.props.delayMS;
	      this.renderingDelayTimeout = setTimeout(function () {
	        _this2.setState({
	          delayComplete: true
	        }, function () {
	          _this2.performAnimationFrame();
	        });
	      }, delayMS);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      clearTimeout(this.renderingDelayTimeout);
	      cancelAnimationFrame(this.tick);
	    }
	  }, {
	    key: "performAnimationFrame",
	    value: function performAnimationFrame() {
	      var _this3 = this;

	      this.tick = requestAnimationFrame(function (timestamp) {
	        _this3.props.tick(timestamp);

	        _this3.performAnimationFrame();
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props = this.props,
	          delayMS = _this$props.delayMS,
	          size = _this$props.size,
	          children = _this$props.children,
	          _this$props$render = _this$props.render,
	          render = _this$props$render === void 0 ? children : _this$props$render;
	      var delayComplete = this.state.delayComplete;

	      if (!delayComplete && delayMS !== 0) {
	        return external_react_default.a.createElement(LoadingPlaceholder, {
	          fontSize: size
	        }, "\xA0");
	      }

	      return render();
	    }
	  }]);

	  return ScheduleContainer;
	}(external_react_["Component"]);

	_defineProperty(ScheduleContainer_ScheduleContainer, "propTypes", {
	  /**
	   * Size of the loader. Can inherit from `font-size` styling.
	   **/
	  size: external_prop_types_default.a.any,

	  /**
	   * Delay in MS to begin loader rendering. This helps prevent
	   * quick flashes of the loader during normal loading times.
	   **/
	  delayMS: external_prop_types_default.a.number,

	  /**
	   * Function to call on each animation frame.
	   **/
	  tick: external_prop_types_default.a.func,
	  children: external_prop_types_default.a.func,

	  /**
	   * Identical to children
	   */
	  render: external_prop_types_default.a.func
	});

	_defineProperty(ScheduleContainer_ScheduleContainer, "defaultProps", {
	  delayMS: 750
	});


	// CONCATENATED MODULE: ./src/Dots.js
	function Dots_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Dots_typeof = function _typeof(obj) { return typeof obj; }; } else { Dots_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Dots_typeof(obj); }

	function Dots_extends() { Dots_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Dots_extends.apply(this, arguments); }

	function Dots_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Dots_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function Dots_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function Dots_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function Dots_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function Dots_createClass(Constructor, protoProps, staticProps) { if (protoProps) Dots_defineProperties(Constructor.prototype, protoProps); if (staticProps) Dots_defineProperties(Constructor, staticProps); return Constructor; }

	function Dots_possibleConstructorReturn(self, call) { if (call && (Dots_typeof(call) === "object" || typeof call === "function")) { return call; } return Dots_assertThisInitialized(self); }

	function Dots_getPrototypeOf(o) { Dots_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Dots_getPrototypeOf(o); }

	function Dots_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function Dots_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Dots_setPrototypeOf(subClass, superClass); }

	function Dots_setPrototypeOf(o, p) { Dots_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Dots_setPrototypeOf(o, p); }

	function Dots_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Copyright Zendesk, Inc.
	 *
	 * Use of this source code is governed under the Apache License, Version 2.0
	 * found at http://www.apache.org/licenses/LICENSE-2.0.
	 */





	var COMPONENT_ID = 'loaders.dots';

	var Dots_Dots =
	/*#__PURE__*/
	function (_React$Component) {
	  Dots_inherits(Dots, _React$Component);

	  function Dots() {
	    var _getPrototypeOf2;

	    var _this;

	    Dots_classCallCheck(this, Dots);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = Dots_possibleConstructorReturn(this, (_getPrototypeOf2 = Dots_getPrototypeOf(Dots)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    Dots_defineProperty(Dots_assertThisInitialized(_this), "state", {
	      frame: 0,
	      timestamp: 0
	    });

	    Dots_defineProperty(Dots_assertThisInitialized(_this), "performAnimationFrame", function () {
	      var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var velocity = _this.props.velocity;
	      var pinnedVelocity = velocity;

	      if (velocity < -1) {
	        pinnedVelocity = -0.9;
	      } else if (velocity > 1) {
	        pinnedVelocity = 1;
	      }

	      _this.setState(function (prevState) {
	        var factor = 1000 + 1000 * pinnedVelocity;
	        var elapsed = (timestamp - prevState.timestamp) / factor;
	        var frame = prevState.frame + elapsed % KEYFRAME_MAX;
	        return {
	          frame: frame,
	          timestamp: timestamp
	        };
	      });
	    });

	    Dots_defineProperty(Dots_assertThisInitialized(_this), "retrieveFrame", function (offset) {
	      var loop = KEYFRAME_MAX * 2;
	      return (_this.state.frame + offset * loop) % loop;
	    });

	    return _this;
	  }

	  Dots_createClass(Dots, [{
	    key: "render",
	    value: function render() {
	      var _this$props = this.props,
	          size = _this$props.size,
	          color = _this$props.color,
	          delayMS = _this$props.delayMS,
	          other = Dots_objectWithoutProperties(_this$props, ["size", "color", "delayMS"]);

	      var dotOneFrame = this.retrieveFrame(0);
	      var dotTwoFrame = this.retrieveFrame(1 / 3);
	      var dotThreeFrame = this.retrieveFrame(2 / 3);
	      return external_react_default.a.createElement(ScheduleContainer_ScheduleContainer, {
	        tick: this.performAnimationFrame,
	        size: size,
	        delayMS: delayMS
	      }, function () {
	        return external_react_default.a.createElement(StyledSVG, Dots_extends({
	          fontSize: size,
	          color: color,
	          width: "80",
	          height: "72",
	          "data-garden-id": COMPONENT_ID
	        }, other), external_react_default.a.createElement("g", {
	          fill: "currentColor"
	        }, external_react_default.a.createElement(DotsCircle, {
	          transform: "translate(".concat(retrieveXCoordinate(dotOneFrame), " ").concat(retrieveYCoordinate(dotOneFrame), ")")
	        }), external_react_default.a.createElement(DotsCircle, {
	          transform: "translate(".concat(retrieveXCoordinate(dotTwoFrame), " ").concat(retrieveYCoordinate(dotTwoFrame), ")")
	        }), external_react_default.a.createElement(DotsCircle, {
	          transform: "translate(".concat(retrieveXCoordinate(dotThreeFrame), " ").concat(retrieveYCoordinate(dotThreeFrame), ")")
	        })));
	      });
	    }
	  }]);

	  return Dots;
	}(external_react_default.a.Component);

	Dots_defineProperty(Dots_Dots, "propTypes", {
	  /**
	   * Size of the loader. Can inherit from `font-size` styling.
	   **/
	  size: external_prop_types_default.a.any,

	  /**
	   * Velocity (speed) of the animation. Between -1 and 1.
	   * This should only be maniuplated at extreme sizes.
	   **/
	  velocity: external_prop_types_default.a.number,

	  /**
	   * Color of the loader. Can inherit from `color` styling.
	   **/
	  color: external_prop_types_default.a.string,

	  /**
	   * Delay in MS to begin loader rendering. This helps prevent
	   * quick flashes of the loader during normal loading times.
	   **/
	  delayMS: external_prop_types_default.a.number
	});

	Dots_defineProperty(Dots_Dots, "defaultProps", {
	  size: 'inherit',
	  color: 'inherit',
	  velocity: 0.05,
	  delayMS: 750
	});


	// EXTERNAL MODULE: ./node_modules/@zendeskgarden/css-variables/dist/index.js
	var dist = __webpack_require__(3);

	// CONCATENATED MODULE: ./src/Progress.js
	function Progress_extends() { Progress_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Progress_extends.apply(this, arguments); }

	function Progress_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Progress_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function Progress_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	/**
	 * Copyright Zendesk, Inc.
	 *
	 * Use of this source code is governed under the Apache License, Version 2.0
	 * found at http://www.apache.org/licenses/LICENSE-2.0.
	 */




	var Progress_COMPONENT_ID = 'loaders.progress';
	var HEIGHTS = {
	  small: 2,
	  medium: 6,
	  large: 12
	};

	var sizeToBorderRadius = function sizeToBorderRadius(size) {
	  return HEIGHTS[size] / 2;
	};

	var ProgressBackground = external_styled_components_default.a.div.attrs(function (props) {
	  return {
	    borderRadius: sizeToBorderRadius(props.size)
	  };
	}).withConfig({
	  displayName: "Progress__ProgressBackground",
	  componentId: "sc-1yc1x61-0"
	})(["margin:", " 0;border-radius:", "px;background-color:", ";color:", ";"], dist["zdSpacingXs"], function (_ref) {
	  var borderRadius = _ref.borderRadius;
	  return borderRadius;
	}, dist["zdColorGrey200"], function (_ref2) {
	  var color = _ref2.color;
	  return color || dist["zdColorGreen600"];
	});
	var ProgressIndicator = external_styled_components_default.a.div.attrs(function (props) {
	  return {
	    height: HEIGHTS[props.size],
	    borderRadius: sizeToBorderRadius(props.size)
	  };
	}).withConfig({
	  displayName: "Progress__ProgressIndicator",
	  componentId: "sc-1yc1x61-1"
	})(["transition:width 0.1s ease-in-out;border-radius:", "px;background:currentColor;width:", "%;height:", "px;"], function (_ref3) {
	  var borderRadius = _ref3.borderRadius;
	  return borderRadius;
	}, function (_ref4) {
	  var value = _ref4.value;
	  return value;
	}, function (_ref5) {
	  var height = _ref5.height;
	  return height;
	});
	var Progress = Object(external_react_["forwardRef"])(function (_ref6, ref) {
	  var value = _ref6.value,
	      size = _ref6.size,
	      other = Progress_objectWithoutProperties(_ref6, ["value", "size"]);

	  var percentage = Math.max(0, Math.min(100, value));
	  return external_react_default.a.createElement(ProgressBackground, Progress_extends({
	    "data-garden-id": Progress_COMPONENT_ID,
	    "data-garden-version": "6.8.0",
	    "aria-valuemax": "100",
	    "aria-valuemin": "0",
	    "aria-valuenow": percentage,
	    ref: ref,
	    role: "progressbar",
	    size: size
	  }, other), external_react_default.a.createElement(ProgressIndicator, {
	    value: percentage,
	    size: size
	  }));
	});
	Progress.propTypes = {
	  color: external_prop_types_default.a.string,

	  /** The progress as a value between 0 and 100 */
	  value: external_prop_types_default.a.number.isRequired,
	  size: external_prop_types_default.a.oneOf(['small', 'medium', 'large'])
	};
	Progress.defaultProps = {
	  value: 0,
	  size: 'medium'
	};
	/* harmony default export */ var src_Progress = (Progress);
	// EXTERNAL MODULE: external "polished"
	var external_polished_ = __webpack_require__(5);

	// CONCATENATED MODULE: ./src/Skeleton.js
	function Skeleton_extends() { Skeleton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Skeleton_extends.apply(this, arguments); }

	function Skeleton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Skeleton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function Skeleton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	/**
	 * Copyright Zendesk, Inc.
	 *
	 * Use of this source code is governed under the Apache License, Version 2.0
	 * found at http://www.apache.org/licenses/LICENSE-2.0.
	 */






	var Skeleton_COMPONENT_ID = 'loaders.skeleton';
	var fadeInAnimation = Object(external_styled_components_["keyframes"])(["0%,60%{opacity:0;}100%{opacity:1;}"]);
	var skeletonAnimation = Object(external_styled_components_["keyframes"])(["100%{left:100%;}"]);
	var skeletonRtlAnimation = Object(external_styled_components_["keyframes"])(["100%{right:100%;}"]);
	var StyledSkeleton = external_styled_components_default.a.div.attrs({
	  'data-garden-id': Skeleton_COMPONENT_ID,
	  'data-garden-version': "6.8.0"
	}).withConfig({
	  displayName: "Skeleton__StyledSkeleton",
	  componentId: "sc-1uuy18r-0"
	})(["display:inline-block;position:relative;animation:", " 750ms linear;border-radius:", ";background-color:", ";width:", ";height:", ";overflow:hidden;line-height:0.6;&::before{position:absolute;top:0;", " background-image:linear-gradient(", ",transparent,", ",transparent);width:1000px;height:100%;content:'';}", ";"], fadeInAnimation, dist["zdSpacingXxs"], function (props) {
	  return props.dark ? Object(external_polished_["rgba"])(dist["zdColorWhite"], 0.2) : Object(external_polished_["rgba"])(dist["zdColorGrey800"], 0.1);
	}, function (props) {
	  return props.customWidth;
	}, function (props) {
	  return props.customHeight;
	}, function (props) {
	  return Object(react_theming_["isRtl"])(props) ? Object(external_styled_components_["css"])(["right:-1800px;animation:", " 1.5s ease-in-out 300ms infinite;"], skeletonRtlAnimation) : Object(external_styled_components_["css"])(["left:-1800px;animation:", " 1.5s ease-in-out 300ms infinite;"], skeletonAnimation);
	}, function (props) {
	  return Object(react_theming_["isRtl"])(props) ? '-45deg' : '45deg';
	}, function (props) {
	  return props.dark ? Object(external_polished_["rgba"])(dist["zdColorKale700"], 0.4) : Object(external_polished_["rgba"])(dist["zdColorWhite"], 0.6);
	}, function (props) {
	  return Object(react_theming_["retrieveTheme"])(Skeleton_COMPONENT_ID, props);
	});
	/* eslint-enable */

	/**
	 * Loader used to create Skeleton objects
	 */

	function Skeleton(_ref) {
	  var width = _ref.width,
	      height = _ref.height,
	      dark = _ref.dark,
	      other = Skeleton_objectWithoutProperties(_ref, ["width", "height", "dark"]);

	  return external_react_default.a.createElement(StyledSkeleton, Skeleton_extends({
	    dark: dark,
	    customWidth: width,
	    customHeight: height
	  }, other), "\xA0");
	}

	Skeleton.propTypes = {
	  width: external_prop_types_default.a.string,
	  height: external_prop_types_default.a.string,

	  /** Apply styling for use with dark backgrounds */
	  dark: external_prop_types_default.a.bool,

	  /** Apply inline styles to the loader */
	  style: external_prop_types_default.a.object
	};
	Skeleton.defaultProps = {
	  width: '100%',
	  height: '100%'
	};
	/** @component */

	/* harmony default export */ var src_Skeleton = (Skeleton);
	// CONCATENATED MODULE: ./src/utils/spinner-coordinates.js
	/**
	 * Copyright Zendesk, Inc.
	 *
	 * Use of this source code is governed under the Apache License, Version 2.0
	 * found at http://www.apache.org/licenses/LICENSE-2.0.
	 */
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
	// CONCATENATED MODULE: ./src/Spinner.js
	function Spinner_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Spinner_typeof = function _typeof(obj) { return typeof obj; }; } else { Spinner_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Spinner_typeof(obj); }

	function Spinner_extends() { Spinner_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Spinner_extends.apply(this, arguments); }

	function Spinner_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Spinner_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function Spinner_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

	function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

	function Spinner_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function Spinner_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function Spinner_createClass(Constructor, protoProps, staticProps) { if (protoProps) Spinner_defineProperties(Constructor.prototype, protoProps); if (staticProps) Spinner_defineProperties(Constructor, staticProps); return Constructor; }

	function Spinner_possibleConstructorReturn(self, call) { if (call && (Spinner_typeof(call) === "object" || typeof call === "function")) { return call; } return Spinner_assertThisInitialized(self); }

	function Spinner_getPrototypeOf(o) { Spinner_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Spinner_getPrototypeOf(o); }

	function Spinner_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function Spinner_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Spinner_setPrototypeOf(subClass, superClass); }

	function Spinner_setPrototypeOf(o, p) { Spinner_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Spinner_setPrototypeOf(o, p); }

	function Spinner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Copyright Zendesk, Inc.
	 *
	 * Use of this source code is governed under the Apache License, Version 2.0
	 * found at http://www.apache.org/licenses/LICENSE-2.0.
	 */





	var Spinner_COMPONENT_ID = 'loaders.spinner';

	var Spinner_Spinner =
	/*#__PURE__*/
	function (_React$Component) {
	  Spinner_inherits(Spinner, _React$Component);

	  function Spinner(props) {
	    var _this;

	    Spinner_classCallCheck(this, Spinner);

	    _this = Spinner_possibleConstructorReturn(this, Spinner_getPrototypeOf(Spinner).call(this, props));

	    Spinner_defineProperty(Spinner_assertThisInitialized(_this), "state", {
	      frame: 0,
	      rawFrame: 0,
	      totalFrames: 100,
	      delayComplete: false,
	      timestamp: 0
	    });

	    Spinner_defineProperty(Spinner_assertThisInitialized(_this), "computeFrames", function (frames) {
	      var duration = _this.props.duration;
	      var totalFrames = _this.state.totalFrames;
	      return Object.entries(frames).reduce(function (acc, item, index, arr) {
	        var _item = _slicedToArray(item, 2),
	            frame = _item[0],
	            value = _item[1];

	        var _ref = arr[index + 1] || [totalFrames, arr[0][1]],
	            _ref2 = _slicedToArray(_ref, 2),
	            nextFrame = _ref2[0],
	            nextValue = _ref2[1];

	        var diff = nextFrame - frame;
	        var frameHz = 1000 / 60;
	        var subDuration = duration / (totalFrames - 1) * diff;
	        var lastValue = value;
	        acc[frame] = value;

	        for (var idx = 0; idx < diff; idx++) {
	          lastValue = lastValue + (nextValue - lastValue) * (frameHz / subDuration);
	          subDuration = duration / (totalFrames - 1) * (diff - idx);
	          acc[parseInt(frame, 10) + idx + 1] = lastValue;
	        }

	        acc[nextFrame] = nextValue;
	        return acc;
	      }, {});
	    });

	    Spinner_defineProperty(Spinner_assertThisInitialized(_this), "performAnimationFrame", function () {
	      var nowTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var _this$state = _this.state,
	          totalFrames = _this$state.totalFrames,
	          rawFrame = _this$state.rawFrame,
	          timestamp = _this$state.timestamp;
	      var duration = _this.props.duration;
	      var elapsedTime = nowTime - timestamp;

	      _this.setState(function () {
	        var frameMultiplier = (totalFrames + 1) / duration;
	        var nextValue = rawFrame + elapsedTime * frameMultiplier;
	        var actualFrame = Math.floor(nextValue);
	        var frame = actualFrame % totalFrames;
	        var currentRawFrame = nextValue % totalFrames;
	        return {
	          frame: frame,
	          rawFrame: currentRawFrame,
	          timestamp: nowTime
	        };
	      });
	    });

	    _this.strokeWidthValues = _this.computeFrames(STROKE_WIDTH_FRAMES);
	    _this.rotationValues = _this.computeFrames(ROTATION_FRAMES);
	    _this.dasharrayValues = _this.computeFrames(DASHARRAY_FRAMES);
	    return _this;
	  }

	  Spinner_createClass(Spinner, [{
	    key: "render",
	    value: function render() {
	      var _this$props = this.props,
	          size = _this$props.size,
	          color = _this$props.color,
	          delayMS = _this$props.delayMS,
	          other = Spinner_objectWithoutProperties(_this$props, ["size", "color", "delayMS"]);

	      var frame = this.state.frame;
	      var strokeWidthValue = this.strokeWidthValues[frame];
	      var rotationValue = this.rotationValues[frame];
	      var dasharrayValue = this.dasharrayValues[frame];
	      var WIDTH = 80;
	      var HEIGHT = 80;
	      return external_react_default.a.createElement(ScheduleContainer_ScheduleContainer, {
	        tick: this.performAnimationFrame,
	        size: size,
	        delayMS: delayMS
	      }, function () {
	        return external_react_default.a.createElement(StyledSVG, Spinner_extends({
	          fontSize: size,
	          color: color,
	          width: WIDTH,
	          height: HEIGHT,
	          "data-garden-id": Spinner_COMPONENT_ID
	        }, other), external_react_default.a.createElement(SpinnerCircle, {
	          dasharrayValue: dasharrayValue,
	          strokeWidthValue: strokeWidthValue,
	          transform: "rotate(".concat(rotationValue, ", ").concat(WIDTH / 2, ", ").concat(HEIGHT / 2, ")")
	        }));
	      });
	    }
	  }]);

	  return Spinner;
	}(external_react_default.a.Component);

	Spinner_defineProperty(Spinner_Spinner, "propTypes", {
	  /**
	   * Size of the loader. Can inherit from `font-size` styling.
	   **/
	  size: external_prop_types_default.a.any,

	  /**
	   * Duration (ms) of the animation. Default is 1250ms.
	   **/
	  duration: external_prop_types_default.a.number,

	  /**
	   * Color of the loader. Can inherit from `color` styling.
	   **/
	  color: external_prop_types_default.a.string,

	  /**
	   * Delay in MS to begin loader rendering. This helps prevent
	   * quick flashes of the loader during normal loading times.
	   **/
	  delayMS: external_prop_types_default.a.number
	});

	Spinner_defineProperty(Spinner_Spinner, "defaultProps", {
	  size: 'inherit',
	  color: 'inherit',
	  delayMS: 750,
	  duration: 1250
	});


	// CONCATENATED MODULE: ./src/Inline.js
	function Inline_extends() { Inline_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Inline_extends.apply(this, arguments); }

	function Inline_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Inline_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function Inline_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	/**
	 * Copyright Zendesk, Inc.
	 *
	 * Use of this source code is governed under the Apache License, Version 2.0
	 * found at http://www.apache.org/licenses/LICENSE-2.0.
	 */




	var Inline_COMPONENT_ID = 'loaders.inline';
	var pulseAnimation = Object(external_styled_components_["keyframes"])(["0%,100%{opacity:.2;}50%{opacity:.8;}"]);
	var StyledCircle = external_styled_components_default.a.circle.attrs({
	  fill: 'currentColor',
	  cy: 2,
	  r: 2
	}).withConfig({
	  displayName: "Inline__StyledCircle",
	  componentId: "sc-1gjohp3-0"
	})([""]);
	var StyledTypingSvg = external_styled_components_default.a.svg.attrs(function (props) {
	  return {
	    'data-garden-id': Inline_COMPONENT_ID,
	    'data-garden-version': "6.8.0",
	    viewBox: '0 0 16 4',
	    width: props.size,
	    height: props.size * 0.25
	  };
	}).withConfig({
	  displayName: "Inline__StyledTypingSvg",
	  componentId: "sc-1gjohp3-1"
	})(["color:", ";", "{opacity:0.2;&:nth-child(1){animation:", " 1s infinite;animation-delay:", ";}&:nth-child(2){animation:", " 1s infinite;animation-delay:0.2s;}&:nth-child(3){animation:", " 1s infinite;animation-delay:", ";}}"], function (_ref) {
	  var color = _ref.color;
	  return color;
	}, StyledCircle, pulseAnimation, function (props) {
	  return Object(react_theming_["isRtl"])(props) ? 'unset' : '0.4s';
	}, pulseAnimation, pulseAnimation, function (props) {
	  return Object(react_theming_["isRtl"])(props) ? '0.4s' : 'unset';
	});
	/**
	 * All other props are spread onto the root `<svg>` element
	 */

	var Inline_Inline = function Inline(_ref2) {
	  var size = _ref2.size,
	      color = _ref2.color,
	      other = Inline_objectWithoutProperties(_ref2, ["size", "color"]);

	  return external_react_default.a.createElement(StyledTypingSvg, Inline_extends({
	    size: size,
	    color: color
	  }, other), external_react_default.a.createElement(StyledCircle, {
	    cx: "14"
	  }), external_react_default.a.createElement(StyledCircle, {
	    cx: "8"
	  }), external_react_default.a.createElement(StyledCircle, {
	    cx: "2"
	  }));
	};

	Inline_Inline.propTypes = {
	  /* Width of the loader in px */
	  size: external_prop_types_default.a.number,
	  color: external_prop_types_default.a.string
	};
	Inline_Inline.defaultProps = {
	  size: 16,
	  color: 'inherit'
	};
	/* harmony default export */ var src_Inline = (Inline_Inline);
	// CONCATENATED MODULE: ./src/index.js
	/* concated harmony reexport Dots */__webpack_require__.d(__webpack_exports__, "Dots", function() { return Dots_Dots; });
	/* concated harmony reexport Progress */__webpack_require__.d(__webpack_exports__, "Progress", function() { return src_Progress; });
	/* concated harmony reexport Skeleton */__webpack_require__.d(__webpack_exports__, "Skeleton", function() { return src_Skeleton; });
	/* concated harmony reexport Spinner */__webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner_Spinner; });
	/* concated harmony reexport Inline */__webpack_require__.d(__webpack_exports__, "Inline", function() { return src_Inline; });
	/**
	 * Copyright Zendesk, Inc.
	 *
	 * Use of this source code is governed under the Apache License, Version 2.0
	 * found at http://www.apache.org/licenses/LICENSE-2.0.
	 */






	/***/ })
	/******/ ])));
	
} (dist$1));

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
    XXXXL: XXXXL$1,
});
Object.freeze({
    DOWN: "down", RIGHT: "right",
});

var getFlexDirection = function (_a) {
    var withRows = _a.withRows;
    return withRows ? "column" : "row";
};
var FlexBox = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: ", ";\n  display: ", ";\n  flex: ", ";\n  flex-direction: ", ";\n  gap: ", ";\n  justify-content: ", ";\n  ", "\n\n  ", "\n"], ["\n  align-items: ", ";\n  display: ", ";\n  flex: ", ";\n  flex-direction: ", ";\n  gap: ", ";\n  justify-content: ", ";\n  ", "\n\n  ", "\n"])), function (_a) {
    var alignItems = _a.alignItems;
    return alignItems ? alignItems : "initial";
}, function (p) { return p.inline ? "inline-flex" : "flex"; }, function (_a) {
    var fluid = _a.fluid;
    return fluid ? 1 : "unset";
}, getFlexDirection, function (p) { return p.gap ? p.gap : SPACINGS.SM; }, function (p) { return p.justifyContent || "initial"; }, function (p) { return p.wrap ? wrappedStyling : ""; }, function (p) { return p.responsivePropsList ? responsiveStyles(p) : ""; });
FlexBox.defaultProps = { withRows: false };
var responsiveStyles = function (_a) {
    var responsivePropsList = _a.responsivePropsList, originalProps = __rest(_a, ["responsivePropsList"]);
    return (responsivePropsList === null || responsivePropsList === void 0 ? void 0 : responsivePropsList.map(function (_a) {
        var mediaQueryFunc = _a.mediaQueryFunc, rProps = _a.props;
        var props = __assign$3(__assign$3({}, originalProps), rProps);
        var alignItems = props.alignItems, gap = props.gap, inline = props.inline, justifyContent = props.justifyContent, fluid = props.fluid, wrap = props.wrap;
        return mediaQueryFunc(css(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n      align-items: ", ";\n      display: ", ";\n      flex: ", ";\n      flex-direction: ", ";\n      gap: ", ";\n      justify-content: ", ";\n      ", "\n    "], ["\n      align-items: ", ";\n      display: ", ";\n      flex: ", ";\n      flex-direction: ", ";\n      gap: ", ";\n      justify-content: ", ";\n      ", "\n    "])), alignItems ? alignItems : "initial", inline ? "inline-flex" : "flex", fluid ? 1 : "unset", getFlexDirection(props), gap ? gap : SPACINGS.SM, justifyContent || "initial", wrap ? wrappedStyling : "")).join("");
    }));
};
var wrappedStyling = css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  flex-wrap: wrap;\n"], ["\n  flex-wrap: wrap;\n"])));
var templateObject_1$2, templateObject_2$2, templateObject_3$1;

var useIsMounted = function () {
    var isMounted = React.useRef();
    React.useEffect(function () {
        isMounted.current = true;
        return function () { isMounted.current = false; };
    }, []);
    return function () { return !!isMounted.current; };
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
    XXXXXL: XXXXXL,
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
    XXXXXL: XXXXXL.replace("r", ""),
});

var LEVEL_STYLES = {
    info: "background: #499cc8; color: white;",
    error: "background: #c14a4f; color: white;",
    warn: "background: #e0a270; color: black;",
};
var Logger = /** @class */ (function () {
    function Logger(moduleName) {
        var _this = this;
        this.log = function (level) { return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (typeof window === "undefined" ||
                !window.DEBUG_MODULES.has(_this.moduleName))
                return;
            console[level].apply(console, __spreadArray(["%c".concat(_this.moduleName), "".concat(LEVEL_STYLES[level], " padding: 2px 6px;")], __read$2(args), false));
        }; };
        this.writeInfo = this.log("info");
        this.writeError = this.log("error");
        this.writeWarning = this.log("warn");
        this.moduleName = moduleName;
    }
    return Logger;
}());
if (typeof window !== "undefined") {
    window.DEBUG_MODULES = new Set();
}

var logger$1 = new Logger("Loadable");
var Container$1 = styled(FlexBox)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  //height: 100%;\n  width: 100%;\n  position: relative;\n"], ["\n  //height: 100%;\n  width: 100%;\n  position: relative;\n"])));
var LoaderContainer = styled(FlexBox)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n"], ["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n"])));
var ChildrenContainer = styled(FlexBox)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  opacity: ", ";\n"], ["\n  width: 100%;\n  opacity: ", ";\n"])), function (_a) {
    var showSpinner = _a.showSpinner, opaqueSpinner = _a.opaqueSpinner;
    if (!showSpinner)
        return "1";
    return opaqueSpinner ? "0" : ".3";
});
var Loadable = function (_a) {
    var _b;
    var children = _a.children, className = _a.className, debugId = _a.debugId, _c = _a.opaqueSpinner, opaqueSpinner = _c === void 0 ? false : _c, _d = _a.showSpinner, showSpinner = _d === void 0 ? false : _d;
    logger$1.writeInfo("Rendering id:", debugId, "showSpinner", showSpinner);
    var isMounted = useIsMounted();
    var theme = React.useContext(ThemeContext);
    var canHideSpinner = (_b = __read$2(React.useState(true), 2), _b[0]), setCanHideSpinner = _b[1];
    React.useEffect(function () {
        if (!showSpinner)
            return;
        setCanHideSpinner(false);
        setTimeout(function () {
            logger$1.writeInfo("setting setCanHideSpinner true id:", debugId);
            if (isMounted())
                setCanHideSpinner(true);
        }, 500);
    }, [debugId, isMounted, showSpinner]);
    var showingSpinner = showSpinner || !canHideSpinner;
    return jsxRuntime.exports.jsxs(Container$1, __assign$3({ justifyContent: "center", gap: "unset", alignItems: "center" }, { children: [jsxRuntime.exports.jsx(ChildrenContainer, __assign$3({ gap: "unset", className: className, opaqueSpinner: opaqueSpinner, showSpinner: showingSpinner, withRows: true }, { children: children })), showingSpinner
                ? jsxRuntime.exports.jsx(LoaderContainer, __assign$3({ justifyContent: "center", alignItems: "center", showSpinner: showingSpinner }, { children: jsxRuntime.exports.jsx(dist$1.Dots, { color: theme.styles.colorPrimary, size: FONT_SIZES.XXL, delayMS: 100, velocity: -.25 }) }))
                : null] }));
};
Loadable = styled(Loadable)(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var templateObject_1$1, templateObject_2$1, templateObject_3, templateObject_4;

/** MobX - (c) Michel Weststrate 2015 - 2020 - MIT Licensed */
var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is a production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT$1 = {};
Object.freeze(EMPTY_OBJECT$1);
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail$2(message) {
    invariant$1(false, message);
    throw "X"; // unreachable
}
function invariant$1(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (process.env.NODE_ENV === "production")
        return false;
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
        return dataStructure;
    }
    else if (Array.isArray(dataStructure)) {
        return new Map(dataStructure);
    }
    else if (isPlainObject(dataStructure)) {
        var map = new Map();
        for (var key in dataStructure) {
            map.set(key, dataStructure[key]);
        }
        return map;
    }
    else {
        return fail$2("Cannot convert to map from '" + dataStructure + "'");
    }
}
function addHiddenProp$1(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    if (process.env.NODE_ENV !== "production" && !isPropertyConfigurable(object, prop))
        fail$2("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
function isES6Map(thing) {
    return thing instanceof Map;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */
function getPlainObjectKeys(object) {
    var enumerables = new Set();
    for (var key in object)
        enumerables.add(key); // *all* enumerables
    Object.getOwnPropertySymbols(object).forEach(function (k) {
        if (Object.getOwnPropertyDescriptor(object, k).enumerable)
            enumerables.add(k);
    }); // *own* symbols
    // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
    // as there is no efficient iterator that returns *all* properties
    return Array.from(enumerables);
}
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys
    ? Reflect.ownKeys
    : Object.getOwnPropertySymbols
        ? function (obj) { return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)); }
        : /* istanbul ignore next */ Object.getOwnPropertyNames;

var $mobx = Symbol("mobx administration");
var Atom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    Atom.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) {
        onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer,
    shallow: shallowComparer
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends$1(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$2 = function() {
    __assign$2 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read$1(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read$1(arguments[i]));
    return ar;
}

var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    var e_1, _a;
    if (target[mobxDidRunLazyInitializersSymbol] === true)
        return;
    var decorators = target[mobxPendingDecorators];
    if (decorators) {
        addHiddenProp$1(target, mobxDidRunLazyInitializersSymbol, true);
        // Build property key array from both strings and symbols
        var keys = __spread(Object.getOwnPropertySymbols(decorators), Object.keys(decorators));
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                var d = decorators[key];
                d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if (process.env.NODE_ENV !== "production" && !quacksLikeADecorator(arguments))
                fail$2("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
                var inheritedDecorators = target[mobxPendingDecorators];
                addHiddenProp$1(target, mobxPendingDecorators, __assign$2({}, inheritedDecorators));
            }
            target[mobxPendingDecorators][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) &&
        (typeof args[1] === "string" || typeof args[1] === "symbol")) ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    if (isES6Set(v))
        return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    if (isES6Set(v))
        return observable.set(v, { name: name, deep: false });
    return fail$2(process.env.NODE_ENV !== "production" &&
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if (process.env.NODE_ENV !== "production" && isObservable(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant$1(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (process.env.NODE_ENV !== "production") {
            invariant$1(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + stringifyKey(propertyName) + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && process.env.NODE_ENV !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail$2("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
        fail$2("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (process.env.NODE_ENV !== "production") {
        if (typeof thing !== "object")
            return fail$2("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer
            : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string" || typeof arguments[1] === "symbol") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable.array(v, arg2)
            : isES6Map(v)
                ? observable.map(v, arg2)
                : isES6Set(v)
                    ? observable.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail$2(process.env.NODE_ENV !== "production" &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        if (o.proxy === false) {
            return extendObservable({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
            var base = extendObservable({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject(base);
            extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail$2(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    if (process.env.NODE_ENV !== "production") {
        invariant$1(descriptor && descriptor.get, "Trying to declare a computed value for unspecified getter '" + stringifyKey(propertyName) + "'");
    }
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject(instance).addComputedProp(instance, propertyName, __assign$2({ get: get,
        set: set, context: instance }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    if (process.env.NODE_ENV !== "production") {
        invariant$1(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant$1(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            // state propagation can occur outside of action/reactive context #2195
            var prevAllowStateReads = allowStateReadsStart(true);
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            allowStateReadsEnd(prevAllowStateReads);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        allowStateReadsEnd(prevAllowStateReads);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return false;
        }
    }
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers)
        fail$2(process.env.NODE_ENV !== "production" &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
        fail$2(process.env.NODE_ENV !== "production" &&
            (globalState.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
function checkIfStateReadsAreAllowed(observable) {
    if (process.env.NODE_ENV !== "production" &&
        !globalState.allowStateReads &&
        globalState.observableRequiresReaction) {
        console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
    }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (process.env.NODE_ENV === "production")
        return;
    if (derivation.observing.length !== 0)
        return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    try {
        return action();
    }
    finally {
        untrackedEnd(prev);
    }
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
var functionNameDescriptor = Object.getOwnPropertyDescriptor(function () { }, "name");
var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;
function createAction(actionName, fn, ref) {
    if (process.env.NODE_ENV !== "production") {
        invariant$1(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail$2("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    if (process.env.NODE_ENV !== "production") {
        if (isFunctionNameConfigurable) {
            Object.defineProperty(res, "name", { value: actionName });
        }
    }
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    }
    catch (err) {
        runInfo.error = err;
        throw err;
    }
    finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy && process.env.NODE_ENV !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: nextActionId++,
        parentActionId: currentActionId
    };
    currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId) {
        fail$2("invalid action stack. did you forget to finish an action?");
    }
    currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy && process.env.NODE_ENV !== "production") {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}

var ObservableValue = /** @class */ (function (_super) {
    __extends$1(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled() && process.env.NODE_ENV !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy && process.env.NODE_ENV !== "production") {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ObservableValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue;
}(Atom));
createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        invariant$1(options.get, "missing option for computed: get");
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail$2("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant$1(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant$1(false, process.env.NODE_ENV !== "production" &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled() && process.env.NODE_ENV !== "production") {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (process.env.NODE_ENV === "production")
            return;
        if (this.requiresReaction === true) {
            fail$2("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue;
}());
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals;
}());
var mockGlobal$1 = {};
function getGlobal$1() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal$1;
}
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal$1();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail$2("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail$2("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal$1().__mobxInstanceCount === 0)
            getGlobal$1().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers.add(node);
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers.delete(node);
    if (observable.observers.size === 0) {
        // deleting last observer
        queueForUnobservation(observable);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.size === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observable of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.size === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        if (requiresObservable === void 0) { requiresObservable = false; }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled() &&
                        process.env.NODE_ENV !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        if (this.isDisposed) {
            return;
            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
        }
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify && process.env.NODE_ENV !== "production") {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && process.env.NODE_ENV !== "production") {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx] = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled() {
    return process.env.NODE_ENV !== "production" && !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (process.env.NODE_ENV === "production")
        return; // dead code elimination can do the rest
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    if (process.env.NODE_ENV === "production")
        return;
    var change = __assign$2(__assign$2({}, event), { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (process.env.NODE_ENV === "production")
        return;
    if (change)
        spyReport(__assign$2(__assign$2({}, change), { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    if (process.env.NODE_ENV === "production") {
        console.warn("[mobx.spy] Is a no-op in production builds");
        return function () { };
    }
    else {
        globalState.spyListeners.push(listener);
        return once(function () {
            globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}

function dontReassignFields() {
    fail$2(process.env.NODE_ENV !== "production" && "@action fields are not reassignable");
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if (process.env.NODE_ENV !== "production" && descriptor.get !== undefined) {
                return fail$2("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp$1(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp$1(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
    }
    else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (process.env.NODE_ENV !== "production") {
        invariant$1(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail$2("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp$1(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT$1; }
    if (process.env.NODE_ENV !== "production") {
        invariant$1(typeof view === "function", "Autorun expects a function as first argument");
        invariant$1(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT$1; }
    if (process.env.NODE_ENV !== "production") {
        invariant$1(typeof expression === "function", "First argument to reaction should be a function");
        invariant$1(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer.structural
        : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    }
    else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail$2(process.env.NODE_ENV !== "production" && "Not an atom that can be (un)observed");
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail$2("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function extendObservable(target, properties, decorators, options) {
    if (process.env.NODE_ENV !== "production") {
        invariant$1(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant$1(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant$1(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
    initializeInstance(target); // Fixes #1740
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
}
function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
    var e_1, _a, e_2, _b;
    if (process.env.NODE_ENV !== "production") {
        invariant$1(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators) {
            var keys = getPlainObjectKeys(decorators);
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    if (!(key in properties))
                        fail$2("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    startBatch();
    try {
        var keys = ownKeys(properties);
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
                if (process.env.NODE_ENV !== "production") {
                    if (!isPlainObject(properties))
                        fail$2("'extendObservable' only accepts plain objects as second argument");
                    if (isComputed(descriptor.value))
                        fail$2("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
                }
                var decorator = decorators && key in decorators
                    ? decorators[key]
                    : descriptor.get
                        ? computedDecorator
                        : defaultDecorator;
                if (process.env.NODE_ENV !== "production" && typeof decorator !== "function")
                    fail$2("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
                var resultDescriptor = decorator(target, key, descriptor, true);
                if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
                )
                    Object.defineProperty(target, key, resultDescriptor);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    finally {
        endBatch();
    }
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value[$mobx].values.has(property))
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail$2(process.env.NODE_ENV !== "production" &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string")
        return fail$2(process.env.NODE_ENV !== "production" &&
            "isComputed expected a property name as second argument");
    return _isComputed(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (process.env.NODE_ENV !== "production" &&
            (isObservableMap(value) || isObservableArray(value)))
            return fail$2("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) {
            return value[$mobx].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value[$mobx] ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail$2(process.env.NODE_ENV !== "production" &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj[$mobx].getKeys();
    }
    if (isObservableMap(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail$2(process.env.NODE_ENV !== "production" &&
        "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj[$mobx];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableSet(obj)) {
        obj.add(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant$1(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail$2(process.env.NODE_ENV !== "production" &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail$2(process.env.NODE_ENV !== "production" &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

function getAdm(target) {
    return target[$mobx];
}
function isPropertyKey(val) {
    return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (isPropertyKey(name))
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return target[name];
        var adm = getAdm(target);
        var observable = adm.values.get(name);
        if (observable instanceof Atom) {
            var result = observable.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (isPropertyKey(name))
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (!isPropertyKey(name))
            return false;
        set(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (!isPropertyKey(name))
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail$2("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx].proxy = proxy;
    return proxy;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
        var interceptors = __spread((interceptable.interceptors || []));
        for (var i = 0, l = interceptors.length; i < l; i++) {
            change = interceptors[i](change);
            invariant$1(!change || change.type, "Intercept handlers should return nothing or a change object");
            if (!change)
                break;
        }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx)
            return target[$mobx];
        if (name === "length")
            return target[$mobx].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx].setArrayLength(value);
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
        }
        if (typeof name === "symbol" || isNaN(name)) {
            target[name] = value;
        }
        else {
            // numeric string
            arrayExtensions.set.call(target, parseInt(name), value);
        }
        return true;
    },
    preventExtensions: function (target) {
        fail$2("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp(adm.values, $mobx, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (process.env.NODE_ENV !== "production") {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportStart(__assign$2(__assign$2({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportStart(__assign$2(__assign$2({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (process.env.NODE_ENV !== "production") {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (process.env.NODE_ENV !== "production") {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx];
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: adm.proxy,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    }
};
[
    "concat",
    "flat",
    "includes",
    "indexOf",
    "join",
    "lastIndexOf",
    "slice",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    // Feature detection (eg flat may not be available)
    if (typeof Array.prototype[funcName] !== "function") {
        return;
    }
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var dehancedValues = adm.dehanceValues(adm.values);
        return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
});
["every", "filter", "find", "findIndex", "flatMap", "forEach", "map", "some"].forEach(function (funcName) {
    // Feature detection (eg flatMap may not be available)
    if (typeof Array.prototype[funcName] !== "function") {
        return;
    }
    arrayExtensions[funcName] = function (callback, thisArg) {
        var _this = this;
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var dehancedValues = adm.dehanceValues(adm.values);
        return dehancedValues[funcName](function (element, index) {
            return callback.call(thisArg, element, index, _this);
        }, thisArg);
    };
});
["reduce", "reduceRight"].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var _this = this;
        var adm = this[$mobx];
        adm.atom.reportObserved();
        // #2432 - reduce behavior depends on arguments.length
        var callback = arguments[0];
        arguments[0] = function (accumulator, currentValue, index) {
            currentValue = adm.dehanceValue(currentValue);
            return callback(accumulator, currentValue, index, _this);
        };
        return adm.values[funcName].apply(adm.values, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation)
            return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportStart(__assign$2(__assign$2({}, change), { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportStart(__assign$2(__assign$2({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportStart(__assign$2(__assign$2({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var keys = this.keys();
        return makeIterable({
            next: function () {
                var _b = keys.next(), done = _b.done, value = _b.value;
                return {
                    done: done,
                    value: done ? undefined : self.get(value)
                };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var keys = this.keys();
        return makeIterable({
            next: function () {
                var _b = keys.next(), done = _b.done, value = _b.value;
                return {
                    done: done,
                    value: done ? undefined : [value, self.get(value)]
                };
            }
        });
    };
    ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var e_1, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read$1(_d.value, 2), key = _e[0], value = _e[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            var prev = allowStateChangesStart(true);
            try {
                if (isPlainObject(other))
                    getPlainObjectKeys(other).forEach(function (key) {
                        return _this.set(key, other[key]);
                    });
                else if (Array.isArray(other))
                    other.forEach(function (_b) {
                        var _c = __read$1(_b, 2), key = _c[0], value = _c[1];
                        return _this.set(key, value);
                    });
                else if (isES6Map(other)) {
                    if (other.constructor !== Map)
                        fail$2("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                    other.forEach(function (value, key) { return _this.set(key, value); });
                }
                else if (other !== null && other !== undefined)
                    fail$2("Cannot initialize map from " + other);
            }
            finally {
                allowStateChangesEnd(prev);
            }
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_2, _b;
                try {
                    for (var _c = __values(_this.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var key = _d.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        // Implementation requirements:
        // - respect ordering of replacement map
        // - allow interceptors to run and potentially prevent individual operations
        // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
        // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
        // - note that result map may differ from replacement map due to the interceptors
        transaction(function () {
            var e_3, _b, e_4, _c;
            // Convert to map so we can do quick key lookups
            var replacementMap = convertToMap(values);
            var orderedData = new Map();
            // Used for optimization
            var keysReportChangedCalled = false;
            try {
                // Delete keys that don't exist in replacement map
                // if the key deletion is prevented by interceptor
                // add entry at the beginning of the result map
                for (var _d = __values(_this._data.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var key = _e.value;
                    // Concurrently iterating/deleting keys
                    // iterator should handle this correctly
                    if (!replacementMap.has(key)) {
                        var deleted = _this.delete(key);
                        // Was the key removed?
                        if (deleted) {
                            // _keysAtom.reportChanged() was already called
                            keysReportChangedCalled = true;
                        }
                        else {
                            // Delete prevented by interceptor
                            var value = _this._data.get(key);
                            orderedData.set(key, value);
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_3) throw e_3.error; }
            }
            try {
                // Merge entries
                for (var _f = __values(replacementMap.entries()), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var _h = __read$1(_g.value, 2), key = _h[0], value = _h[1];
                    // We will want to know whether a new key is added
                    var keyExisted = _this._data.has(key);
                    // Add or update value
                    _this.set(key, value);
                    // The addition could have been prevent by interceptor
                    if (_this._data.has(key)) {
                        // The update could have been prevented by interceptor
                        // and also we want to preserve existing values
                        // so use value from _data map (instead of replacement map)
                        var value_1 = _this._data.get(key);
                        orderedData.set(key, value_1);
                        // Was a new key added?
                        if (!keyExisted) {
                            // _keysAtom.reportChanged() was already called
                            keysReportChangedCalled = true;
                        }
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                }
                finally { if (e_4) throw e_4.error; }
            }
            // Check for possible key order change
            if (!keysReportChangedCalled) {
                if (_this._data.size !== orderedData.size) {
                    // If size differs, keys are definitely modified
                    _this._keysAtom.reportChanged();
                }
                else {
                    var iter1 = _this._data.keys();
                    var iter2 = orderedData.keys();
                    var next1 = iter1.next();
                    var next2 = iter2.next();
                    while (!next1.done) {
                        if (next1.value !== next2.value) {
                            _this._keysAtom.reportChanged();
                            break;
                        }
                        next1 = iter1.next();
                        next2 = iter2.next();
                    }
                }
            }
            // Use correctly ordered map
            _this._data = orderedData;
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var e_5, _b;
        var res = {};
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read$1(_d.value, 2), key = _e[0], value = _e[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
        process.env.NODE_ENV !== "production" &&
            invariant$1(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet = /** @class */ (function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_1, _b;
                try {
                    for (var _c = __values(_this._data.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var value = _d.value;
                        _this.delete(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var value = _d.value;
                callbackFn.call(thisArg, value, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportStart(change);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportStart(__assign$2(__assign$2({}, change), { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length
                    ? { value: [keys[index], values[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            var prev = allowStateChangesStart(true);
            try {
                if (Array.isArray(other)) {
                    _this.clear();
                    other.forEach(function (value) { return _this.add(value); });
                }
                else if (isES6Set(other)) {
                    _this.clear();
                    other.forEach(function (value) { return _this.add(value); });
                }
                else if (other !== null && other !== undefined) {
                    fail$2("Cannot initialize set from " + other);
                }
            }
            finally {
                allowStateChangesEnd(prev);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
        process.env.NODE_ENV !== "production" &&
            invariant$1(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet;
}());
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
        if (values === void 0) { values = new Map(); }
        this.target = target;
        this.values = values;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom(name + ".keys");
    }
    ObservableObjectAdministration.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable = this.values.get(key);
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportStart(__assign$2(__assign$2({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable(target, propName);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
        this.values.set(propName, observable);
        newValue = observable.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + stringifyKey(propName);
        this.values.set(propName, new ComputedValue(options));
        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportStart(__assign$2(__assign$2({}, change), { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
        process.env.NODE_ENV !== "production" &&
            invariant$1(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportStart(__assign$2(__assign$2({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportEnd();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read$1(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx))
        return target[$mobx];
    process.env.NODE_ENV !== "production" &&
        invariant$1(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
    addHiddenProp$1(target, $mobx, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx].read(propName);
            },
            set: function (v) {
                this[$mobx].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner[$mobx];
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: globalState.computedConfigurable,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail$2(process.env.NODE_ENV !== "production" &&
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx].atom;
        }
        if (isObservableSet(thing)) {
            return thing[$mobx];
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail$2(process.env.NODE_ENV !== "production" &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing[$mobx])
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail$2(process.env.NODE_ENV !== "production" && "please specify a property");
            var observable = thing[$mobx].values.get(property);
            if (!observable)
                fail$2(process.env.NODE_ENV !== "production" &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing[$mobx])) {
            // disposer function
            return thing[$mobx];
        }
    }
    return fail$2(process.env.NODE_ENV !== "production" && "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    if (!thing)
        fail$2("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing[$mobx])
        return thing[$mobx];
    fail$2(process.env.NODE_ENV !== "production" && "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) { depth = -1; }
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
        case "[object Map]":
        case "[object Set]":
            // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
            // Hide this extra level by increasing the depth.
            if (depth >= 0) {
                depth++;
            }
            break;
    }
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    if (depth === 0) {
        return false;
    }
    else if (depth < 0) {
        depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], depth - 1, aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.slice();
    if (isES6Map(a) || isObservableMap(a))
        return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
}
function getSelf() {
    return this;
}

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    process.env.NODE_ENV;
}
catch (e) {
    var g = getGlobal$1();
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        process.env.NODE_ENV !== "production" &&
        typeof process !== 'undefined' && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}

function fail$1(message) {
    throw new Error("[mobx-utils] " + message);
}
function invariant(cond, message) {
    if (message === void 0) { message = "Illegal state"; }
    if (!cond)
        fail$1(message);
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value,
    });
}
var deepFields = function (x) {
    return (x &&
        x !== Object.prototype &&
        Object.getOwnPropertyNames(x).concat(deepFields(Object.getPrototypeOf(x)) || []));
};
var distinctDeepFields = function (x) {
    var deepFieldsIndistinct = deepFields(x);
    var deepFieldsDistinct = deepFieldsIndistinct.filter(function (item, index) { return deepFieldsIndistinct.indexOf(item) === index; });
    return deepFieldsDistinct;
};
var getAllMethodsAndProperties = function (x) {
    return distinctDeepFields(x).filter(function (name) { return name !== "constructor" && !~name.indexOf("__"); });
};

var PENDING = "pending";
var FULFILLED = "fulfilled";
var REJECTED = "rejected";
function caseImpl(handlers) {
    switch (this.state) {
        case PENDING:
            return handlers.pending && handlers.pending(this.value);
        case REJECTED:
            return handlers.rejected && handlers.rejected(this.value);
        case FULFILLED:
            return handlers.fulfilled ? handlers.fulfilled(this.value) : this.value;
    }
}
/**
 * `fromPromise` takes a Promise, extends it with 2 observable properties that track
 * the status of the promise and returns it. The returned object has the following observable properties:
 *  - `value`: either the initial value, the value the Promise resolved to, or the value the Promise was rejected with. use `.state` if you need to be able to tell the difference.
 *  - `state`: one of `"pending"`, `"fulfilled"` or `"rejected"`
 *
 * And the following methods:
 * - `case({fulfilled, rejected, pending})`: maps over the result using the provided handlers, or returns `undefined` if a handler isn't available for the current promise state.
 * - `then((value: TValue) => TResult1 | PromiseLike<TResult1>, [(rejectReason: any) => any])`: chains additional handlers to the provided promise.
 *
 * The returned object implements `PromiseLike<TValue>`, so you can chain additional `Promise` handlers using `then`. You may also use it with `await` in `async` functions.
 *
 * Note that the status strings are available as constants:
 * `mobxUtils.PENDING`, `mobxUtils.REJECTED`, `mobxUtil.FULFILLED`
 *
 * fromPromise takes an optional second argument, a previously created `fromPromise` based observable.
 * This is useful to replace one promise based observable with another, without going back to an intermediate
 * "pending" promise state while fetching data. For example:
 *
 * @example
 * \@observer
 * class SearchResults extends React.Component {
 *   \@observable.ref searchResults
 *
 *   componentDidUpdate(nextProps) {
 *     if (nextProps.query !== this.props.query)
 *       this.searchResults = fromPromise(
 *         window.fetch("/search?q=" + nextProps.query),
 *         // by passing, we won't render a pending state if we had a successful search query before
 *         // rather, we will keep showing the previous search results, until the new promise resolves (or rejects)
 *         this.searchResults
 *       )
 *   }
 *
 *   render() {
 *     return this.searchResults.case({
 *        pending: (staleValue) => {
 *          return staleValue || "searching" // <- value might set to previous results while the promise is still pending
 *        },
 *        fulfilled: (value) => {
 *          return value // the fresh results
 *        },
 *        rejected: (error) => {
 *          return "Oops: " + error
 *        }
 *     })
 *   }
 * }
 *
 * Observable promises can be created immediately in a certain state using
 * `fromPromise.reject(reason)` or `fromPromise.resolve(value?)`.
 * The main advantage of `fromPromise.resolve(value)` over `fromPromise(Promise.resolve(value))` is that the first _synchronously_ starts in the desired state.
 *
 * It is possible to directly create a promise using a resolve, reject function:
 * `fromPromise((resolve, reject) => setTimeout(() => resolve(true), 1000))`
 *
 * @example
 * const fetchResult = fromPromise(fetch("http://someurl"))
 *
 * // combine with when..
 * when(
 *   () => fetchResult.state !== "pending",
 *   () => {
 *     console.log("Got ", fetchResult.value)
 *   }
 * )
 *
 * // or a mobx-react component..
 * const myComponent = observer(({ fetchResult }) => {
 *   switch(fetchResult.state) {
 *      case "pending": return <div>Loading...</div>
 *      case "rejected": return <div>Ooops... {fetchResult.value}</div>
 *      case "fulfilled": return <div>Gotcha: {fetchResult.value}</div>
 *   }
 * })
 *
 * // or using the case method instead of switch:
 *
 * const myComponent = observer(({ fetchResult }) =>
 *   fetchResult.case({
 *     pending:   () => <div>Loading...</div>,
 *     rejected:  error => <div>Ooops.. {error}</div>,
 *     fulfilled: value => <div>Gotcha: {value}</div>,
 *   }))
 *
 * // chain additional handler(s) to the resolve/reject:
 *
 * fetchResult.then(
 *   (result) =>  doSomeTransformation(result),
 *   (rejectReason) => console.error('fetchResult was rejected, reason: ' + rejectReason)
 * ).then(
 *   (transformedResult) => console.log('transformed fetchResult: ' + transformedResult)
 * )
 *
 * @param {IThenable<T>} promise The promise which will be observed
 * @param {IThenable<T>} oldPromise? The previously observed promise
 * @returns {IPromiseBasedObservable<T>}
 */
function fromPromise(origPromise, oldPromise) {
    invariant(arguments.length <= 2, "fromPromise expects up to two arguments");
    invariant(typeof origPromise === "function" ||
        (typeof origPromise === "object" &&
            origPromise &&
            typeof origPromise.then === "function"), "Please pass a promise or function to fromPromise");
    if (origPromise.isPromiseBasedObservable === true)
        return origPromise;
    if (typeof origPromise === "function") {
        // If it is a (reject, resolve function, wrap it)
        origPromise = new Promise(origPromise);
    }
    var promise = origPromise;
    origPromise.then(action("observableFromPromise-resolve", function (value) {
        promise.value = value;
        promise.state = FULFILLED;
    }), action("observableFromPromise-reject", function (reason) {
        promise.value = reason;
        promise.state = REJECTED;
    }));
    promise.isPromiseBasedObservable = true;
    promise.case = caseImpl;
    var oldData = oldPromise && oldPromise.state === FULFILLED
        ? oldPromise.value
        : undefined;
    extendObservable(promise, {
        value: oldData,
        state: PENDING,
    }, {}, { deep: false });
    return promise;
}
(function (fromPromise) {
    fromPromise.reject = action("fromPromise.reject", function (reason) {
        var p = fromPromise(Promise.reject(reason));
        p.state = REJECTED;
        p.value = reason;
        return p;
    });
    function resolveBase(value) {
        if (value === void 0) { value = undefined; }
        var p = fromPromise(Promise.resolve(value));
        p.state = FULFILLED;
        p.value = value;
        return p;
    }
    fromPromise.resolve = action("fromPromise.resolve", resolveBase);
})(fromPromise || (fromPromise = {}));

var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/** @class */ ((function () {
    function StreamListener(observable, initialValue) {
        var _this = this;
        runInAction(function () {
            _this.current = initialValue;
            _this.subscription = observable.subscribe(_this);
        });
    }
    StreamListener.prototype.dispose = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    StreamListener.prototype.next = function (value) {
        this.current = value;
    };
    StreamListener.prototype.complete = function () {
        this.dispose();
    };
    StreamListener.prototype.error = function (value) {
        this.current = value;
        this.dispose();
    };
    __decorate([
        observable.ref
    ], StreamListener.prototype, "current", void 0);
    __decorate([
        action.bound
    ], StreamListener.prototype, "next", null);
    __decorate([
        action.bound
    ], StreamListener.prototype, "complete", null);
    __decorate([
        action.bound
    ], StreamListener.prototype, "error", null);
    return StreamListener;
})());

var __assign$1 = function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var __decorate$1 = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RESERVED_NAMES = ["model", "reset", "submit", "isDirty", "isPropertyDirty", "resetProperty"];
/** @class */ ((function () {
    function ViewModel(model) {
        var _this = this;
        this.model = model;
        this.localValues = observable.map({});
        this.localComputedValues = observable.map({});
        this.isPropertyDirty = function (key) {
            return _this.localValues.has(key);
        };
        invariant(isObservableObject(model), "createViewModel expects an observable object");
        // use this helper as Object.getOwnPropertyNames doesn't return getters
        getAllMethodsAndProperties(model).forEach(function (key) {
            if (key === $mobx || key === "__mobxDidRunLazyInitializers") {
                return;
            }
            invariant(RESERVED_NAMES.indexOf(key) === -1, "The propertyname " + key + " is reserved and cannot be used with viewModels");
            if (isComputedProp(model, key)) {
                var derivation = getAdministration(model, key).derivation; // Fixme: there is no clear api to get the derivation
                _this.localComputedValues.set(key, computed(derivation.bind(_this)));
            }
            var descriptor = Object.getOwnPropertyDescriptor(model, key);
            var additionalDescriptor = descriptor ? { enumerable: descriptor.enumerable } : {};
            Object.defineProperty(_this, key, __assign$1(__assign$1({}, additionalDescriptor), { configurable: true, get: function () {
                    if (isComputedProp(model, key))
                        return _this.localComputedValues.get(key).get();
                    if (_this.isPropertyDirty(key))
                        return _this.localValues.get(key);
                    else
                        return _this.model[key];
                }, set: action(function (value) {
                    if (value !== _this.model[key]) {
                        _this.localValues.set(key, value);
                    }
                    else {
                        _this.localValues.delete(key);
                    }
                }) }));
        });
    }
    Object.defineProperty(ViewModel.prototype, "isDirty", {
        get: function () {
            return this.localValues.size > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "changedValues", {
        get: function () {
            return this.localValues.toJS();
        },
        enumerable: false,
        configurable: true
    });
    ViewModel.prototype.submit = function () {
        var _this = this;
        keys(this.localValues).forEach(function (key) {
            var source = _this.localValues.get(key);
            var destination = _this.model[key];
            if (isObservableArray(destination)) {
                destination.replace(source);
            }
            else if (isObservableMap(destination)) {
                destination.clear();
                destination.merge(source);
            }
            else if (!isComputed(source)) {
                _this.model[key] = source;
            }
        });
        this.localValues.clear();
    };
    ViewModel.prototype.reset = function () {
        this.localValues.clear();
    };
    ViewModel.prototype.resetProperty = function (key) {
        this.localValues.delete(key);
    };
    __decorate$1([
        computed
    ], ViewModel.prototype, "isDirty", null);
    __decorate$1([
        computed
    ], ViewModel.prototype, "changedValues", null);
    __decorate$1([
        action.bound
    ], ViewModel.prototype, "submit", null);
    __decorate$1([
        action.bound
    ], ViewModel.prototype, "reset", null);
    __decorate$1([
        action.bound
    ], ViewModel.prototype, "resetProperty", null);
    return ViewModel;
})());

var __extends = (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Reactively sorts a base observable array into multiple observable arrays based on the value of a
 * `groupBy: (item: T) => G` function.
 *
 * This observes the individual computed groupBy values and only updates the source and dest arrays
 * when there is an actual change, so this is far more efficient than, for example
 * `base.filter(i => groupBy(i) === 'we')`. Call #dispose() to stop tracking.
 *
 * No guarantees are made about the order of items in the grouped arrays.
 *
 * The resulting map of arrays is read-only. clear(), set(), delete() are not supported and
 * modifying the group arrays will lead to undefined behavior.
 *
 * NB: ObservableGroupMap relies on `Symbol`s. If you are targeting a platform which doesn't
 * support these natively, you will need to provide a polyfill.
 *
 * @param {array} base The array to sort into groups.
 * @param {function} groupBy The function used for grouping.
 * @param options Object with properties:
 *  `name`: Debug name of this ObservableGroupMap.
 *  `keyToName`: Function to create the debug names of the observable group arrays.
 *
 * @example
 * const slices = observable([
 *     { day: "mo", hours: 12 },
 *     { day: "tu", hours: 2 },
 * ])
 * const slicesByDay = new ObservableGroupMap(slices, (slice) => slice.day)
 * autorun(() => console.log(
 *     slicesByDay.get("mo")?.length ?? 0,
 *     slicesByDay.get("we"))) // outputs 1, undefined
 * slices[0].day = "we" // outputs 0, [{ day: "we", hours: 12 }]
 */
/** @class */ ((function (_super) {
    __extends(ObservableGroupMap, _super);
    function ObservableGroupMap(base, groupBy, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.name, name = _c === void 0 ? "ogm" + ((Math.random() * 1000) | 0) : _c, _d = _b.keyToName, keyToName = _d === void 0 ? function (x) { return "" + x; } : _d;
        var _this = _super.call(this) || this;
        _this._keyToName = keyToName;
        _this._groupBy = groupBy;
        _this._ogmInfoKey = Symbol("ogmInfo" + name);
        _this._base = base;
        for (var i = 0; i < base.length; i++) {
            _this._addItem(base[i]);
        }
        _this._disposeBaseObserver = observe(_this._base, function (change) {
            if ("splice" === change.type) {
                transaction(function () {
                    for (var _i = 0, _a = change.removed; _i < _a.length; _i++) {
                        var removed = _a[_i];
                        _this._removeItem(removed);
                    }
                    for (var _b = 0, _c = change.added; _b < _c.length; _b++) {
                        var added = _c[_b];
                        _this._addItem(added);
                    }
                });
            }
            else if ("update" === change.type) {
                transaction(function () {
                    _this._removeItem(change.oldValue);
                    _this._addItem(change.newValue);
                });
            }
            else {
                throw new Error("illegal state");
            }
        });
        return _this;
    }
    ObservableGroupMap.prototype.clear = function () {
        throw new Error("not supported");
    };
    ObservableGroupMap.prototype.delete = function (_key) {
        throw new Error("not supported");
    };
    ObservableGroupMap.prototype.set = function (_key, _value) {
        throw new Error("not supported");
    };
    /**
     * Disposes all observers created during construction and removes state added to base array
     * items.
     */
    ObservableGroupMap.prototype.dispose = function () {
        this._disposeBaseObserver();
        for (var i = 0; i < this._base.length; i++) {
            var item = this._base[i];
            var grouperItemInfo = item[this._ogmInfoKey];
            grouperItemInfo.reaction();
            delete item[this._ogmInfoKey];
        }
    };
    ObservableGroupMap.prototype._getGroupArr = function (key) {
        var result = _super.prototype.get.call(this, key);
        if (undefined === result) {
            result = observable([], { name: "GroupArray[" + this._keyToName(key) + "]", deep: false });
            _super.prototype.set.call(this, key, result);
        }
        return result;
    };
    ObservableGroupMap.prototype._removeFromGroupArr = function (key, itemIndex) {
        var arr = _super.prototype.get.call(this, key);
        if (1 === arr.length) {
            _super.prototype.delete.call(this, key);
        }
        else if (itemIndex === arr.length - 1) {
            // last position in array
            arr.length--;
        }
        else {
            arr[itemIndex] = arr[arr.length - 1];
            arr[itemIndex][this._ogmInfoKey].groupArrIndex = itemIndex;
            arr.length--;
        }
    };
    ObservableGroupMap.prototype._addItem = function (item) {
        var _this = this;
        var groupByValue = this._groupBy(item);
        var groupArr = this._getGroupArr(groupByValue);
        var value = {
            groupByValue: groupByValue,
            groupArrIndex: groupArr.length,
            reaction: reaction(function () { return _this._groupBy(item); }, function (newGroupByValue, _r) {
                var grouperItemInfo = item[_this._ogmInfoKey];
                _this._removeFromGroupArr(grouperItemInfo.groupByValue, grouperItemInfo.groupArrIndex);
                var newGroupArr = _this._getGroupArr(newGroupByValue);
                var newGroupArrIndex = newGroupArr.length;
                newGroupArr.push(item);
                grouperItemInfo.groupByValue = newGroupByValue;
                grouperItemInfo.groupArrIndex = newGroupArrIndex;
            }),
        };
        Object.defineProperty(item, this._ogmInfoKey, {
            configurable: true,
            enumerable: false,
            value: value,
        });
        groupArr.push(item);
    };
    ObservableGroupMap.prototype._removeItem = function (item) {
        var grouperItemInfo = item[this._ogmInfoKey];
        this._removeFromGroupArr(grouperItemInfo.groupByValue, grouperItemInfo.groupArrIndex);
        grouperItemInfo.reaction();
        delete item[this._ogmInfoKey];
    };
    return ObservableGroupMap;
})(ObservableMap));

function decorateMethodOrField(decoratorName, decorateFn, target, prop, descriptor) {
    if (descriptor) {
        return decorateMethod(decoratorName, decorateFn, prop, descriptor);
    }
    else {
        decorateField(decorateFn, target, prop);
    }
}
function decorateMethod(decoratorName, decorateFn, prop, descriptor) {
    if (descriptor.get !== undefined) {
        return fail(decoratorName + " cannot be used with getters");
    }
    // babel / typescript
    // @action method() { }
    if (descriptor.value) {
        // typescript
        return {
            value: decorateFn(prop, descriptor.value),
            enumerable: false,
            configurable: true,
            writable: true,
        };
    }
    // babel only: @action method = () => {}
    var initializer = descriptor.initializer;
    return {
        enumerable: false,
        configurable: true,
        writable: true,
        initializer: function () {
            // N.B: we can't immediately invoke initializer; this would be wrong
            return decorateFn(prop, initializer.call(this));
        },
    };
}
function decorateField(decorateFn, target, prop) {
    // Simple property that writes on first invocation to the current instance
    Object.defineProperty(target, prop, {
        configurable: true,
        enumerable: false,
        get: function () {
            return undefined;
        },
        set: function (value) {
            addHiddenProp(this, prop, decorateFn(prop, value));
        },
    });
}

var __awaiter = function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var runId = 0;
var unfinishedIds = new Set();
var currentlyActiveIds = new Set();
var inOrderExecution;
{
    var taskOrderPromise_1 = Promise.resolve();
    var queueMicrotaskPolyfill_1;
    if (typeof queueMicrotask !== "undefined") {
        // use real implementation if possible in modern browsers/node
        queueMicrotaskPolyfill_1 = queueMicrotask;
    }
    else if (typeof process !== "undefined" && process.nextTick) {
        // fallback to node's process.nextTick in node <= 10
        queueMicrotaskPolyfill_1 = function (cb) {
            process.nextTick(cb);
        };
    }
    else {
        // use setTimeout for old browsers
        queueMicrotaskPolyfill_1 = function (cb) {
            setTimeout(cb, 0);
        };
    }
    var idle_1 = function () {
        return new Promise(function (r) {
            queueMicrotaskPolyfill_1(r);
        });
    };
    // we use this trick to force a proper order of execution
    // even for immediately resolved promises
    inOrderExecution = function () {
        taskOrderPromise_1 = taskOrderPromise_1.then(idle_1);
        return taskOrderPromise_1;
    };
}
var actionAsyncContextStack = [];
function task(value) {
    return __awaiter(this, void 0, void 0, function () {
        var ctx, runId, actionName, args, scope, actionRunInfo, step, nextStep, ret, err_1, actionRunInfo_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ctx = actionAsyncContextStack[actionAsyncContextStack.length - 1];
                    if (!ctx) {
                        fail$1("'actionAsync' context not present when running 'task'. did you await inside an 'actionAsync' without using 'task(promise)'? did you forget to await the task?");
                    }
                    runId = ctx.runId, actionName = ctx.actionName, args = ctx.args, scope = ctx.scope, actionRunInfo = ctx.actionRunInfo, step = ctx.step;
                    nextStep = step + 1;
                    actionAsyncContextStack.pop();
                    _endAction(actionRunInfo);
                    currentlyActiveIds.delete(runId);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 6, 7]);
                    return [4 /*yield*/, value];
                case 2:
                    ret = _a.sent();
                    return [4 /*yield*/, inOrderExecution()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, ret];
                case 4:
                    err_1 = _a.sent();
                    return [4 /*yield*/, inOrderExecution()];
                case 5:
                    _a.sent();
                    throw err_1;
                case 6:
                    // only restart if it not a dangling promise (the action is not yet finished)
                    if (unfinishedIds.has(runId)) {
                        actionRunInfo_1 = _startAction(getActionAsyncName(actionName, runId, nextStep), this, args);
                        actionAsyncContextStack.push({
                            runId: runId,
                            step: nextStep,
                            actionRunInfo: actionRunInfo_1,
                            actionName: actionName,
                            args: args,
                            scope: scope,
                        });
                        currentlyActiveIds.add(runId);
                    }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    });
}
// base
/**
 * Alternative syntax for async actions, similar to `flow` but more compatible with
 * Typescript typings. Not to be confused with `asyncAction`, which is deprecated.
 *
 * `actionAsync` can be used either as a decorator or as a function.
 * It takes an async function that internally must use `await task(promise)` rather than
 * the standard `await promise`.
 *
 * When using the mobx devTools, an asyncAction will emit `action` events with names like:
 * * `"fetchUsers - runid 6 - step 0"`
 * * `"fetchUsers - runid 6 - step 1"`
 * * `"fetchUsers - runid 6 - step 2"`
 *
 * The `runId` represents the action instance. In other words, if `fetchUsers` is invoked
 * multiple times concurrently, the events with the same `runid` belong together.
 * The `step` number indicates the code block that is now being executed.
 *
 * @example
 * import {actionAsync, task} from "mobx-utils"
 *
 * let users = []
 *
 * const fetchUsers = actionAsync("fetchUsers", async (url) => {
 *   const start = Date.now()
 *   // note the use of task when awaiting!
 *   const data = await task(window.fetch(url))
 *   users = await task(data.json())
 *   return start - Date.now()
 * })
 *
 * const time = await fetchUsers("http://users.com")
 * console.log("Got users", users, "in ", time, "ms")
 *
 * @example
 * import {actionAsync, task} from "mobx-utils"
 *
 * mobx.configure({ enforceActions: "observed" }) // don't allow state modifications outside actions
 *
 * class Store {
 *   \@observable githubProjects = []
 *   \@observable = "pending" // "pending" / "done" / "error"
 *
 *   \@actionAsync
 *   async fetchProjects() {
 *     this.githubProjects = []
 *     this.state = "pending"
 *     try {
 *       // note the use of task when awaiting!
 *       const projects = await task(fetchGithubProjectsSomehow())
 *       const filteredProjects = somePreprocessing(projects)
 *       // the asynchronous blocks will automatically be wrapped actions
 *       this.state = "done"
 *       this.githubProjects = filteredProjects
 *     } catch (error) {
 *        this.state = "error"
 *     }
 *   }
 * }
 */
function actionAsync(arg1, arg2, arg3) {
    // decorator
    if (typeof arguments[1] === "string") {
        return decorateMethodOrField("@actionAsync", function (prop, v) {
            return actionAsyncFn(prop, v);
        }, arg1, arg2, arg3);
    }
    // direct invocation
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    return actionAsyncFn(actionName, fn);
}
function actionAsyncFn(actionName, fn) {
    if (!_startAction || !_endAction) {
        fail$1("'actionAsync' requires mobx >=5.13.1 or >=4.13.1");
    }
    invariant(typeof fn === "function", "'asyncAction' expects a function");
    if (typeof actionName !== "string" || !actionName)
        fail$1("actions should have valid names, got: '" + actionName + "'");
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var nextRunId, actionRunInfo, finish, promise, ret, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nextRunId = runId++;
                        unfinishedIds.add(nextRunId);
                        actionRunInfo = _startAction(getActionAsyncName(actionName, nextRunId, 0), this, args);
                        actionAsyncContextStack.push({
                            runId: nextRunId,
                            step: 0,
                            actionRunInfo: actionRunInfo,
                            actionName: actionName,
                            args: args,
                            scope: this,
                        });
                        currentlyActiveIds.add(nextRunId);
                        finish = function (err) {
                            unfinishedIds.delete(nextRunId);
                            var ctx = actionAsyncContextStack.pop();
                            if (!ctx || ctx.runId !== nextRunId) {
                                // push it back if invalid
                                if (ctx) {
                                    actionAsyncContextStack.push(ctx);
                                }
                                var msg = "invalid 'actionAsync' context when finishing action '" + actionName + "'.";
                                if (!ctx) {
                                    msg += " no action context could be found instead.";
                                }
                                else {
                                    msg += " an action context for '" + ctx.actionName + "' was found instead.";
                                }
                                msg +=
                                    " did you await inside an 'actionAsync' without using 'task(promise)'? did you forget to await the task?";
                                fail$1(msg);
                            }
                            ctx.actionRunInfo.error = err;
                            _endAction(ctx.actionRunInfo);
                            currentlyActiveIds.delete(nextRunId);
                            if (err) {
                                throw err;
                            }
                        };
                        try {
                            promise = fn.apply(this, args);
                        }
                        catch (err) {
                            finish(err);
                        }
                        // are we done sync? (no task run)
                        if (currentlyActiveIds.has(nextRunId)) {
                            finish(undefined);
                            return [2 /*return*/, promise];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, promise];
                    case 2:
                        ret = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        finish(err_2);
                        return [3 /*break*/, 4];
                    case 4:
                        finish(undefined);
                        return [2 /*return*/, ret];
                }
            });
        });
    };
}
function getActionAsyncName(actionName, runId, step) {
    return actionName + " - runid " + runId + " - step " + step;
}

if (!React.useState) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!spy) {
    throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}

var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function useForceUpdate() {
    var _a = __read(React.useState(0), 2), setTick = _a[1];
    var update = React.useCallback(function () {
        setTick(function (tick) { return tick + 1; });
    }, []);
    return update;
}
function getSymbol(name) {
    if (typeof Symbol === "function") {
        return Symbol.for(name);
    }
    return "__$mobx-react " + name + "__";
}
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}

var observerBatchingConfiguredSymbol = getSymbol("observerBatching");
function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if ("production" !== process.env.NODE_ENV) {
            console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native");
        }
    }
    configure({ reactionScheduler: reactionScheduler });
    getGlobal()[observerBatchingConfiguredSymbol] = true;
}

function printDebugValue(v) {
    return getDependencyTree(v);
}

function createTrackingData(reaction) {
    var trackingData = {
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS,
        reaction: reaction
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;
/**
 * Reactions created by components that have yet to be fully mounted.
 */
var uncommittedReactionRefs = new Set();
/**
 * Latest 'uncommitted reactions' cleanup timer handle.
 */
var reactionCleanupHandle;
function ensureCleanupTimerRunning() {
    if (reactionCleanupHandle === undefined) {
        reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
    }
}
function scheduleCleanupOfReactionIfLeaked(ref) {
    uncommittedReactionRefs.add(ref);
    ensureCleanupTimerRunning();
}
function recordReactionAsCommitted(reactionRef) {
    uncommittedReactionRefs.delete(reactionRef);
}
/**
 * Run by the cleanup timer to dispose any outstanding reactions
 */
function cleanUncommittedReactions() {
    reactionCleanupHandle = undefined;
    // Loop through all the candidate leaked reactions; those older
    // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
    var now = Date.now();
    uncommittedReactionRefs.forEach(function (ref) {
        var tracking = ref.current;
        if (tracking) {
            if (now >= tracking.cleanAt) {
                // It's time to tidy up this leaked reaction.
                tracking.reaction.dispose();
                ref.current = null;
                uncommittedReactionRefs.delete(ref);
            }
        }
    });
    if (uncommittedReactionRefs.size > 0) {
        // We've just finished a round of cleanups but there are still
        // some leak candidates outstanding.
        ensureCleanupTimerRunning();
    }
}

var insideRender = false;
var forceUpdateQueue = [];
function useQueuedForceUpdate(forceUpdate) {
    return function () {
        if (insideRender) {
            forceUpdateQueue.push(forceUpdate);
        }
        else {
            forceUpdate();
        }
    };
}
function useQueuedForceUpdateBlock(callback) {
    // start intercepting force-update calls
    insideRender = true;
    forceUpdateQueue = [];
    try {
        var result = callback();
        // stop intercepting force-update
        insideRender = false;
        // store queue or nothing if it was empty to execute useLayoutEffect only when necessary
        var queue_1 = forceUpdateQueue.length > 0 ? forceUpdateQueue : undefined;
        // run force-update queue in useLayoutEffect
        React__default["default"].useLayoutEffect(function () {
            if (queue_1) {
                queue_1.forEach(function (x) { return x(); });
            }
        }, [queue_1]);
        return result;
    }
    finally {
        insideRender = false;
    }
}

var EMPTY_OBJECT = {};
function observerComponentNameFor(baseComponentName) {
    return "observer" + baseComponentName;
}
function useObserver(fn, baseComponentName, options) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (options === void 0) { options = EMPTY_OBJECT; }
    var wantedForceUpdateHook = options.useForceUpdate || useForceUpdate;
    var forceUpdate = wantedForceUpdateHook();
    var queuedForceUpdate = useQueuedForceUpdate(forceUpdate);
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = React__default["default"].useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction_1 = new Reaction(observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                queuedForceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.  The easiest way to do that is just to
                // drop our current reaction and allow useEffect() to recreate it.
                newReaction_1.dispose();
                reactionTrackingRef.current = null;
            }
        });
        var trackingData_1 = createTrackingData(newReaction_1);
        reactionTrackingRef.current = trackingData_1;
        scheduleCleanupOfReactionIfLeaked(reactionTrackingRef);
    }
    var reaction = reactionTrackingRef.current.reaction;
    React__default["default"].useDebugValue(reaction, printDebugValue);
    React__default["default"].useEffect(function () {
        // Called on first mount only
        recordReactionAsCommitted(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This is either due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up, or we got a observable change
            // between render and useEffect
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new Reaction(observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    queuedForceUpdate();
                }),
                cleanAt: Infinity
            };
            queuedForceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // delay all force-update calls after rendering of this component
    return useQueuedForceUpdateBlock(function () {
        // render the original component, but have the
        // reaction track the observables, so that rendering
        // can be invalidated (see above) once a dependency changes
        var rendering;
        var exception;
        reaction.track(function () {
            try {
                rendering = fn();
            }
            catch (e) {
                exception = e;
            }
        });
        if (exception) {
            throw exception; // re-throw any exceptions caught during rendering
        }
        return rendering;
    });
}

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return useObserver(component);
}
ObserverComponent.propTypes = {
    children: ObserverPropsCheck,
    render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";
function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}

(undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

observerBatching(reactDom.unstable_batchedUpdates);

var hasSymbol = typeof Symbol === "function" && Symbol.for; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

hasSymbol ?
/*#__PURE__*/
Symbol.for("react.forward_ref") : typeof React.forwardRef === "function" &&

React.forwardRef(function (props) {
  return null;
})["$$typeof"];
hasSymbol ?
/*#__PURE__*/
Symbol.for("react.memo") : typeof React.memo === "function" &&

React.memo(function (props) {
  return null;
})["$$typeof"];

if (!React.Component) throw new Error("mobx-react requires React to be available");
if (!observable) throw new Error("mobx-react requires mobx to be available");

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var moment$1 = {exports: {}};

(function (module, exports) {
(function (global, factory) {
	    module.exports = factory() ;
	}(commonjsGlobal, (function () {
	    var hookCallback;

	    function hooks() {
	        return hookCallback.apply(null, arguments);
	    }

	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback(callback) {
	        hookCallback = callback;
	    }

	    function isArray(input) {
	        return (
	            input instanceof Array ||
	            Object.prototype.toString.call(input) === '[object Array]'
	        );
	    }

	    function isObject(input) {
	        // IE8 will treat undefined and null as object if it wasn't for
	        // input != null
	        return (
	            input != null &&
	            Object.prototype.toString.call(input) === '[object Object]'
	        );
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
	        return (
	            typeof input === 'number' ||
	            Object.prototype.toString.call(input) === '[object Number]'
	        );
	    }

	    function isDate(input) {
	        return (
	            input instanceof Date ||
	            Object.prototype.toString.call(input) === '[object Date]'
	        );
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
	            weekdayMismatch: false,
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
	                isNowValid =
	                    !isNaN(m._d.getTime()) &&
	                    flags.overflow < 0 &&
	                    !flags.empty &&
	                    !flags.invalidEra &&
	                    !flags.invalidMonth &&
	                    !flags.invalidWeekday &&
	                    !flags.weekdayMismatch &&
	                    !flags.nullInput &&
	                    !flags.invalidFormat &&
	                    !flags.userInvalidated &&
	                    (!flags.meridiem || (flags.meridiem && parsedParts));

	            if (m._strict) {
	                isNowValid =
	                    isNowValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
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
	    }

	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    var momentProperties = (hooks.momentProperties = []),
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
	    }

	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	        if (!this.isValid()) {
	            this._d = new Date(NaN);
	        }
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }

	    function isMoment(obj) {
	        return (
	            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
	        );
	    }

	    function warn(msg) {
	        if (
	            hooks.suppressDeprecationWarnings === false &&
	            typeof console !== 'undefined' &&
	            console.warn
	        ) {
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
	                warn(
	                    msg +
	                        '\nArguments: ' +
	                        Array.prototype.slice.call(args).join('') +
	                        '\n' +
	                        new Error().stack
	                );
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
	        return (
	            (typeof Function !== 'undefined' && input instanceof Function) ||
	            Object.prototype.toString.call(input) === '[object Function]'
	        );
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
	        this._config = config;
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
	        // TODO: Remove "ordinalParse" fallback in next major release.
	        this._dayOfMonthOrdinalParseLenient = new RegExp(
	            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
	                '|' +
	                /\d{1,2}/.source
	        );
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
	            if (
	                hasOwnProp(parentConfig, prop) &&
	                !hasOwnProp(childConfig, prop) &&
	                isObject(parentConfig[prop])
	            ) {
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
	        sameElse: 'L',
	    };

	    function calendar(key, mom, now) {
	        var output = this._calendar[key] || this._calendar['sameElse'];
	        return isFunction(output) ? output.call(mom, now) : output;
	    }

	    function zeroFill(number, targetLength, forceSign) {
	        var absNumber = '' + Math.abs(number),
	            zerosToFill = targetLength - absNumber.length,
	            sign = number >= 0;
	        return (
	            (sign ? (forceSign ? '+' : '') : '-') +
	            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
	            absNumber
	        );
	    }

	    var formattingTokens =
	            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
	        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
	        formatFunctions = {},
	        formatTokenFunctions = {};

	    // token:    'M'
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
	                return this.localeData().ordinal(
	                    func.apply(this, arguments),
	                    token
	                );
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
	                output += isFunction(array[i])
	                    ? array[i].call(mom, format)
	                    : array[i];
	            }
	            return output;
	        };
	    }

	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }

	        format = expandFormat(format, m.localeData());
	        formatFunctions[format] =
	            formatFunctions[format] || makeFormatFunction(format);

	        return formatFunctions[format](m);
	    }

	    function expandFormat(format, locale) {
	        var i = 5;

	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }

	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(
	                localFormattingTokens,
	                replaceLongDateFormatTokens
	            );
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
	        LLLL: 'dddd, MMMM D, YYYY h:mm A',
	    };

	    function longDateFormat(key) {
	        var format = this._longDateFormat[key],
	            formatUpper = this._longDateFormat[key.toUpperCase()];

	        if (format || !formatUpper) {
	            return format;
	        }

	        this._longDateFormat[key] = formatUpper
	            .match(formattingTokens)
	            .map(function (tok) {
	                if (
	                    tok === 'MMMM' ||
	                    tok === 'MM' ||
	                    tok === 'DD' ||
	                    tok === 'dddd'
	                ) {
	                    return tok.slice(1);
	                }
	                return tok;
	            })
	            .join('');

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
	        yy: '%d years',
	    };

	    function relativeTime(number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return isFunction(output)
	            ? output(number, withoutSuffix, string, isFuture)
	            : output.replace(/%d/i, number);
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
	        return typeof units === 'string'
	            ? aliases[units] || aliases[units.toLowerCase()]
	            : undefined;
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
	                units.push({ unit: u, priority: priorities[u] });
	            }
	        }
	        units.sort(function (a, b) {
	            return a.priority - b.priority;
	        });
	        return units;
	    }

	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
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
	        return mom.isValid()
	            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
	            : NaN;
	    }

	    function set$1(mom, unit, value) {
	        if (mom.isValid() && !isNaN(value)) {
	            if (
	                unit === 'FullYear' &&
	                isLeapYear(mom.year()) &&
	                mom.month() === 1 &&
	                mom.date() === 29
	            ) {
	                value = toInt(value);
	                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
	                    value,
	                    mom.month(),
	                    daysInMonth(value, mom.month())
	                );
	            } else {
	                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	            }
	        }
	    }

	    // MOMENTS

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

	    var match1 = /\d/, //       0 - 9
	        match2 = /\d\d/, //      00 - 99
	        match3 = /\d{3}/, //     000 - 999
	        match4 = /\d{4}/, //    0000 - 9999
	        match6 = /[+-]?\d{6}/, // -999999 - 999999
	        match1to2 = /\d\d?/, //       0 - 99
	        match3to4 = /\d\d\d\d?/, //     999 - 9999
	        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
	        match1to3 = /\d{1,3}/, //       0 - 999
	        match1to4 = /\d{1,4}/, //       0 - 9999
	        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
	        matchUnsigned = /\d+/, //       0 - inf
	        matchSigned = /[+-]?\d+/, //    -inf - inf
	        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
	        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
	        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
	        // any word (or two) characters or numbers including two/three word month in arabic.
	        // includes scottish gaelic two word and hyphenated months
	        matchWord =
	            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
	        regexes;

	    regexes = {};

	    function addRegexToken(token, regex, strictRegex) {
	        regexes[token] = isFunction(regex)
	            ? regex
	            : function (isStrict, localeData) {
	                  return isStrict && strictRegex ? strictRegex : regex;
	              };
	    }

	    function getParseRegexForToken(token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }

	        return regexes[token](config._strict, config._locale);
	    }

	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return regexEscape(
	            s
	                .replace('\\', '')
	                .replace(
	                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
	                    function (matched, p1, p2, p3, p4) {
	                        return p1 || p2 || p3 || p4;
	                    }
	                )
	        );
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
	        return ((n % x) + x) % x;
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
	        return modMonth === 1
	            ? isLeapYear(year)
	                ? 29
	                : 28
	            : 31 - ((modMonth % 7) % 2);
	    }

	    // FORMATTING

	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });

	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });

	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });

	    // ALIASES

	    addUnitAlias('month', 'M');

	    // PRIORITY

	    addUnitPriority('month', 8);

	    // PARSING

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
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });

	    // LOCALES

	    var defaultLocaleMonths =
	            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
	                '_'
	            ),
	        defaultLocaleMonthsShort =
	            'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
	        defaultMonthsShortRegex = matchWord,
	        defaultMonthsRegex = matchWord;

	    function localeMonths(m, format) {
	        if (!m) {
	            return isArray(this._months)
	                ? this._months
	                : this._months['standalone'];
	        }
	        return isArray(this._months)
	            ? this._months[m.month()]
	            : this._months[
	                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
	                      ? 'format'
	                      : 'standalone'
	              ][m.month()];
	    }

	    function localeMonthsShort(m, format) {
	        if (!m) {
	            return isArray(this._monthsShort)
	                ? this._monthsShort
	                : this._monthsShort['standalone'];
	        }
	        return isArray(this._monthsShort)
	            ? this._monthsShort[m.month()]
	            : this._monthsShort[
	                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
	              ][m.month()];
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
	                this._shortMonthsParse[i] = this.monthsShort(
	                    mom,
	                    ''
	                ).toLocaleLowerCase();
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
	        }

	        // TODO: add sorting
	        // Sorting makes sure if one month (or abbr) is a prefix of another
	        // see sorting in computeMonthsParse
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp(
	                    '^' + this.months(mom, '').replace('.', '') + '$',
	                    'i'
	                );
	                this._shortMonthsParse[i] = new RegExp(
	                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
	                    'i'
	                );
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex =
	                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (
	                strict &&
	                format === 'MMMM' &&
	                this._longMonthsParse[i].test(monthName)
	            ) {
	                return i;
	            } else if (
	                strict &&
	                format === 'MMM' &&
	                this._shortMonthsParse[i].test(monthName)
	            ) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

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
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
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
	            return this._monthsShortStrictRegex && isStrict
	                ? this._monthsShortStrictRegex
	                : this._monthsShortRegex;
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
	            return this._monthsStrictRegex && isStrict
	                ? this._monthsStrictRegex
	                : this._monthsRegex;
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
	        }
	        // Sorting makes sure if one month (or abbr) is a prefix of another it
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
	        this._monthsStrictRegex = new RegExp(
	            '^(' + longPieces.join('|') + ')',
	            'i'
	        );
	        this._monthsShortStrictRegex = new RegExp(
	            '^(' + shortPieces.join('|') + ')',
	            'i'
	        );
	    }

	    // FORMATTING

	    addFormatToken('Y', 0, 0, function () {
	        var y = this.year();
	        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
	    });

	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });

	    addFormatToken(0, ['YYYY', 4], 0, 'year');
	    addFormatToken(0, ['YYYYY', 5], 0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

	    // ALIASES

	    addUnitAlias('year', 'y');

	    // PRIORITIES

	    addUnitPriority('year', 1);

	    // PARSING

	    addRegexToken('Y', matchSigned);
	    addRegexToken('YY', match1to2, match2);
	    addRegexToken('YYYY', match1to4, match4);
	    addRegexToken('YYYYY', match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);

	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function (input, array) {
	        array[YEAR] =
	            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
	    });
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = hooks.parseTwoDigitYear(input);
	    });
	    addParseToken('Y', function (input, array) {
	        array[YEAR] = parseInt(input, 10);
	    });

	    // HELPERS

	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }

	    // HOOKS

	    hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };

	    // MOMENTS

	    var getSetYear = makeGetSet('FullYear', true);

	    function getIsLeapYear() {
	        return isLeapYear(this.year());
	    }

	    function createDate(y, m, d, h, M, s, ms) {
	        // can't just apply() to create a date:
	        // https://stackoverflow.com/q/181348
	        var date;
	        // the date constructor remaps years 0-99 to 1900-1999
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
	        var date, args;
	        // the Date.UTC function remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            args = Array.prototype.slice.call(arguments);
	            // preserve leap years using a full 400 year cycle, then reset
	            args[0] = y + 400;
	            date = new Date(Date.UTC.apply(null, args));
	            if (isFinite(date.getUTCFullYear())) {
	                date.setUTCFullYear(y);
	            }
	        } else {
	            date = new Date(Date.UTC.apply(null, arguments));
	        }

	        return date;
	    }

	    // start-of-first-week - start-of-year
	    function firstWeekOffset(year, dow, doy) {
	        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	            fwd = 7 + dow - doy,
	            // first-week day local weekday -- which local weekday is fwd
	            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

	        return -fwdlw + fwd - 1;
	    }

	    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
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
	            dayOfYear: resDayOfYear,
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
	            year: resYear,
	        };
	    }

	    function weeksInYear(year, dow, doy) {
	        var weekOffset = firstWeekOffset(year, dow, doy),
	            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }

	    // FORMATTING

	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

	    // ALIASES

	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');

	    // PRIORITIES

	    addUnitPriority('week', 5);
	    addUnitPriority('isoWeek', 5);

	    // PARSING

	    addRegexToken('w', match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W', match1to2);
	    addRegexToken('WW', match1to2, match2);

	    addWeekParseToken(
	        ['w', 'ww', 'W', 'WW'],
	        function (input, week, config, token) {
	            week[token.substr(0, 1)] = toInt(input);
	        }
	    );

	    // HELPERS

	    // LOCALES

	    function localeWeek(mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }

	    var defaultLocaleWeek = {
	        dow: 0, // Sunday is the first day of the week.
	        doy: 6, // The week that contains Jan 6th is the first week of the year.
	    };

	    function localeFirstDayOfWeek() {
	        return this._week.dow;
	    }

	    function localeFirstDayOfYear() {
	        return this._week.doy;
	    }

	    // MOMENTS

	    function getSetWeek(input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    function getSetISOWeek(input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    // FORMATTING

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
	    addFormatToken('E', 0, 0, 'isoWeekday');

	    // ALIASES

	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');

	    // PRIORITY
	    addUnitPriority('day', 11);
	    addUnitPriority('weekday', 11);
	    addUnitPriority('isoWeekday', 11);

	    // PARSING

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
	        var weekday = config._locale.weekdaysParse(input, token, config._strict);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });

	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });

	    // HELPERS

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
	    }

	    // LOCALES
	    function shiftWeekdays(ws, n) {
	        return ws.slice(n, 7).concat(ws.slice(0, n));
	    }

	    var defaultLocaleWeekdays =
	            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        defaultWeekdaysRegex = matchWord,
	        defaultWeekdaysShortRegex = matchWord,
	        defaultWeekdaysMinRegex = matchWord;

	    function localeWeekdays(m, format) {
	        var weekdays = isArray(this._weekdays)
	            ? this._weekdays
	            : this._weekdays[
	                  m && m !== true && this._weekdays.isFormat.test(format)
	                      ? 'format'
	                      : 'standalone'
	              ];
	        return m === true
	            ? shiftWeekdays(weekdays, this._week.dow)
	            : m
	            ? weekdays[m.day()]
	            : weekdays;
	    }

	    function localeWeekdaysShort(m) {
	        return m === true
	            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
	            : m
	            ? this._weekdaysShort[m.day()]
	            : this._weekdaysShort;
	    }

	    function localeWeekdaysMin(m) {
	        return m === true
	            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
	            : m
	            ? this._weekdaysMin[m.day()]
	            : this._weekdaysMin;
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
	                this._minWeekdaysParse[i] = this.weekdaysMin(
	                    mom,
	                    ''
	                ).toLocaleLowerCase();
	                this._shortWeekdaysParse[i] = this.weekdaysShort(
	                    mom,
	                    ''
	                ).toLocaleLowerCase();
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
	                this._fullWeekdaysParse[i] = new RegExp(
	                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
	                    'i'
	                );
	                this._shortWeekdaysParse[i] = new RegExp(
	                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
	                    'i'
	                );
	                this._minWeekdaysParse[i] = new RegExp(
	                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
	                    'i'
	                );
	            }
	            if (!this._weekdaysParse[i]) {
	                regex =
	                    '^' +
	                    this.weekdays(mom, '') +
	                    '|^' +
	                    this.weekdaysShort(mom, '') +
	                    '|^' +
	                    this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (
	                strict &&
	                format === 'dddd' &&
	                this._fullWeekdaysParse[i].test(weekdayName)
	            ) {
	                return i;
	            } else if (
	                strict &&
	                format === 'ddd' &&
	                this._shortWeekdaysParse[i].test(weekdayName)
	            ) {
	                return i;
	            } else if (
	                strict &&
	                format === 'dd' &&
	                this._minWeekdaysParse[i].test(weekdayName)
	            ) {
	                return i;
	            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

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
	        }

	        // behaves the same as moment#day except
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
	            return this._weekdaysStrictRegex && isStrict
	                ? this._weekdaysStrictRegex
	                : this._weekdaysRegex;
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
	            return this._weekdaysShortStrictRegex && isStrict
	                ? this._weekdaysShortStrictRegex
	                : this._weekdaysShortRegex;
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
	            return this._weekdaysMinStrictRegex && isStrict
	                ? this._weekdaysMinStrictRegex
	                : this._weekdaysMinRegex;
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
	        }
	        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	        // will match the longer piece.
	        minPieces.sort(cmpLenRev);
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);

	        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._weekdaysShortRegex = this._weekdaysRegex;
	        this._weekdaysMinRegex = this._weekdaysRegex;

	        this._weekdaysStrictRegex = new RegExp(
	            '^(' + longPieces.join('|') + ')',
	            'i'
	        );
	        this._weekdaysShortStrictRegex = new RegExp(
	            '^(' + shortPieces.join('|') + ')',
	            'i'
	        );
	        this._weekdaysMinStrictRegex = new RegExp(
	            '^(' + minPieces.join('|') + ')',
	            'i'
	        );
	    }

	    // FORMATTING

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
	        return (
	            '' +
	            hFormat.apply(this) +
	            zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2)
	        );
	    });

	    addFormatToken('Hmm', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });

	    addFormatToken('Hmmss', 0, 0, function () {
	        return (
	            '' +
	            this.hours() +
	            zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2)
	        );
	    });

	    function meridiem(token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(
	                this.hours(),
	                this.minutes(),
	                lowercase
	            );
	        });
	    }

	    meridiem('a', true);
	    meridiem('A', false);

	    // ALIASES

	    addUnitAlias('hour', 'h');

	    // PRIORITY
	    addUnitPriority('hour', 13);

	    // PARSING

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
	    });

	    // LOCALES

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

	        meridiemParse: defaultLocaleMeridiemParse,
	    };

	    // internal storage for locale config files
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
	    }

	    // pick the locale from the array
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
	                if (
	                    next &&
	                    next.length >= j &&
	                    commonPrefix(split, next) >= j - 1
	                ) {
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
	            aliasedRequire;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (
	            locales[name] === undefined &&
	            'object' !== 'undefined' &&
	            module &&
	            module.exports &&
	            isLocaleNameSane(name)
	        ) {
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
	    }

	    // This function will load locale and then set the global locale.  If
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
	                    console.warn(
	                        'Locale ' + key + ' not found. Did you forget to load it?'
	                    );
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
	                deprecateSimple(
	                    'defineLocaleOverride',
	                    'use moment.updateLocale(localeName, config) to change ' +
	                        'an existing locale. moment.defineLocale(localeName, ' +
	                        'config) should only be used for creating a new locale ' +
	                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
	                );
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
	                            config: config,
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
	            }

	            // backwards compat for now: also set the locale
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
	            }

	            // backwards compat for now: also set the locale
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
	    }

	    // returns locale data
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
	            overflow =
	                a[MONTH] < 0 || a[MONTH] > 11
	                    ? MONTH
	                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
	                    ? DATE
	                    : a[HOUR] < 0 ||
	                      a[HOUR] > 24 ||
	                      (a[HOUR] === 24 &&
	                          (a[MINUTE] !== 0 ||
	                              a[SECOND] !== 0 ||
	                              a[MILLISECOND] !== 0))
	                    ? HOUR
	                    : a[MINUTE] < 0 || a[MINUTE] > 59
	                    ? MINUTE
	                    : a[SECOND] < 0 || a[SECOND] > 59
	                    ? SECOND
	                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
	                    ? MILLISECOND
	                    : -1;

	            if (
	                getParsingFlags(m)._overflowDayOfYear &&
	                (overflow < YEAR || overflow > DATE)
	            ) {
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
	    }

	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    var extendedIsoRegex =
	            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
	        basicIsoRegex =
	            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
	        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
	        isoDates = [
	            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	            ['YYYY-DDD', /\d{4}-\d{3}/],
	            ['YYYY-MM', /\d{4}-\d\d/, false],
	            ['YYYYYYMMDD', /[+-]\d{10}/],
	            ['YYYYMMDD', /\d{8}/],
	            ['GGGG[W]WWE', /\d{4}W\d{3}/],
	            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	            ['YYYYDDD', /\d{7}/],
	            ['YYYYMM', /\d{6}/, false],
	            ['YYYY', /\d{4}/, false],
	        ],
	        // iso time formats and regexes
	        isoTimes = [
	            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	            ['HH:mm', /\d\d:\d\d/],
	            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	            ['HHmmss', /\d\d\d\d\d\d/],
	            ['HHmm', /\d\d\d\d/],
	            ['HH', /\d\d/],
	        ],
	        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
	        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
	        rfc2822 =
	            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
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
	            PST: -8 * 60,
	        };

	    // date from iso format
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

	    function extractFromRFC2822Strings(
	        yearStr,
	        monthStr,
	        dayStr,
	        hourStr,
	        minuteStr,
	        secondStr
	    ) {
	        var result = [
	            untruncateYear(yearStr),
	            defaultLocaleMonthsShort.indexOf(monthStr),
	            parseInt(dayStr, 10),
	            parseInt(hourStr, 10),
	            parseInt(minuteStr, 10),
	        ];

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
	        return s
	            .replace(/\([^)]*\)|[\n\t]/g, ' ')
	            .replace(/(\s\s+)/g, ' ')
	            .replace(/^\s\s*/, '')
	            .replace(/\s\s*$/, '');
	    }

	    function checkWeekday(weekdayStr, parsedInput, config) {
	        if (weekdayStr) {
	            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
	            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
	                weekdayActual = new Date(
	                    parsedInput[0],
	                    parsedInput[1],
	                    parsedInput[2]
	                ).getDay();
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
	    }

	    // date and time from ref 2822 format
	    function configFromRFC2822(config) {
	        var match = rfc2822.exec(preprocessRFC2822(config._i)),
	            parsedArray;
	        if (match) {
	            parsedArray = extractFromRFC2822Strings(
	                match[4],
	                match[3],
	                match[2],
	                match[5],
	                match[6],
	                match[7]
	            );
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
	    }

	    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
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

	    hooks.createFromInputFallback = deprecate(
	        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
	            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
	            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );

	    // Pick the first defined of two or three arguments.
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
	            return [
	                nowValue.getUTCFullYear(),
	                nowValue.getUTCMonth(),
	                nowValue.getUTCDate(),
	            ];
	        }
	        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }

	    // convert an array to a date.
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

	        currentDate = currentDateArray(config);

	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }

	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear != null) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

	            if (
	                config._dayOfYear > daysInYear(yearToUse) ||
	                config._dayOfYear === 0
	            ) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }

	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }

	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }

	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] =
	                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
	        }

	        // Check for 24:00:00.000
	        if (
	            config._a[HOUR] === 24 &&
	            config._a[MINUTE] === 0 &&
	            config._a[SECOND] === 0 &&
	            config._a[MILLISECOND] === 0
	        ) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }

	        config._d = (config._useUTC ? createUTCDate : createDate).apply(
	            null,
	            input
	        );
	        expectedWeekday = config._useUTC
	            ? config._d.getUTCDay()
	            : config._d.getDay();

	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }

	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }

	        // check for mismatching day of week
	        if (
	            config._w &&
	            typeof config._w.d !== 'undefined' &&
	            config._w.d !== expectedWeekday
	        ) {
	            getParsingFlags(config).weekdayMismatch = true;
	        }
	    }

	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;

	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(
	                w.GG,
	                config._a[YEAR],
	                weekOfYear(createLocal(), 1, 4).year
	            );
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	            if (weekday < 1 || weekday > 7) {
	                weekdayOverflow = true;
	            }
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;

	            curWeek = weekOfYear(createLocal(), dow, doy);

	            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

	            // Default to current week.
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
	    }

	    // constant that refers to the ISO standard
	    hooks.ISO_8601 = function () {};

	    // constant that refers to the RFC 2822 form
	    hooks.RFC_2822 = function () {};

	    // date from string and format string
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
	        getParsingFlags(config).empty = true;

	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
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

	        tokens =
	            expandFormat(config._f, config._locale).match(formattingTokens) || [];
	        tokenLen = tokens.length;
	        for (i = 0; i < tokenLen; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
	                [])[0];
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(
	                    string.indexOf(parsedInput) + parsedInput.length
	                );
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
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
	        }

	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver =
	            stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }

	        // clear _12h flag if hour is <= 12
	        if (
	            config._a[HOUR] <= 12 &&
	            getParsingFlags(config).bigHour === true &&
	            config._a[HOUR] > 0
	        ) {
	            getParsingFlags(config).bigHour = undefined;
	        }

	        getParsingFlags(config).parsedDateParts = config._a.slice(0);
	        getParsingFlags(config).meridiem = config._meridiem;
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(
	            config._locale,
	            config._a[HOUR],
	            config._meridiem
	        );

	        // handle era
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
	    }

	    // date from string and array of format strings
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
	            }

	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;

	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

	            getParsingFlags(tempConfig).score = currentScore;

	            if (!bestFormatIsValid) {
	                if (
	                    scoreToBeat == null ||
	                    currentScore < scoreToBeat ||
	                    validFormatFound
	                ) {
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
	        config._a = map(
	            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
	            function (obj) {
	                return obj && parseInt(obj, 10);
	            }
	        );

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

	        if (input === null || (format === undefined && input === '')) {
	            return createInvalid({ nullInput: true });
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

	        if (
	            (isObject(input) && isObjectEmpty(input)) ||
	            (isArray(input) && input.length === 0)
	        ) {
	            input = undefined;
	        }
	        // object construction must be done this way.
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

	    var prototypeMin = deprecate(
	            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
	            function () {
	                var other = createLocal.apply(null, arguments);
	                if (this.isValid() && other.isValid()) {
	                    return other < this ? this : other;
	                } else {
	                    return createInvalid();
	                }
	            }
	        ),
	        prototypeMax = deprecate(
	            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
	            function () {
	                var other = createLocal.apply(null, arguments);
	                if (this.isValid() && other.isValid()) {
	                    return other > this ? this : other;
	                } else {
	                    return createInvalid();
	                }
	            }
	        );

	    // Pick a moment m from moments so that m[fn](other) is true for all
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
	    }

	    // TODO: Use [].sort instead?
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

	    var ordering = [
	        'year',
	        'quarter',
	        'month',
	        'week',
	        'day',
	        'hour',
	        'minute',
	        'second',
	        'millisecond',
	    ];

	    function isDurationValid(m) {
	        var key,
	            unitHasDecimal = false,
	            i,
	            orderLen = ordering.length;
	        for (key in m) {
	            if (
	                hasOwnProp(m, key) &&
	                !(
	                    indexOf.call(ordering, key) !== -1 &&
	                    (m[key] == null || !isNaN(m[key]))
	                )
	            ) {
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

	        this._isValid = isDurationValid(normalizedInput);

	        // representation for dateAddRemove
	        this._milliseconds =
	            +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days + weeks * 7;
	        // It is impossible to translate months into days without knowing
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
	    }

	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if (
	                (dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
	            ) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }

	    // FORMATTING

	    function offset(token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset(),
	                sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return (
	                sign +
	                zeroFill(~~(offset / 60), 2) +
	                separator +
	                zeroFill(~~offset % 60, 2)
	            );
	        });
	    }

	    offset('Z', ':');
	    offset('ZZ', '');

	    // PARSING

	    addRegexToken('Z', matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(matchShortOffset, input);
	    });

	    // HELPERS

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
	    }

	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff =
	                (isMoment(input) || isDate(input)
	                    ? input.valueOf()
	                    : createLocal(input).valueOf()) - res.valueOf();
	            // Use low-level api, because this fn is low-level api.
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
	    }

	    // HOOKS

	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    hooks.updateOffset = function () {};

	    // MOMENTS

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
	                    addSubtract(
	                        this,
	                        createDuration(input - offset, 'm'),
	                        1,
	                        false
	                    );
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
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
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
	            this._isDSTShifted =
	                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
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
	    }

	    // ASP.NET json date format regex
	    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
	        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	        // and further modified to allow for strings containing both week and day
	        isoRegex =
	            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

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
	                M: input._months,
	            };
	        } else if (isNumber(input) || !isNaN(+input)) {
	            duration = {};
	            if (key) {
	                duration[key] = +input;
	            } else {
	                duration.milliseconds = +input;
	            }
	        } else if ((match = aspNetRegex.exec(input))) {
	            sign = match[1] === '-' ? -1 : 1;
	            duration = {
	                y: 0,
	                d: toInt(match[DATE]) * sign,
	                h: toInt(match[HOUR]) * sign,
	                m: toInt(match[MINUTE]) * sign,
	                s: toInt(match[SECOND]) * sign,
	                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
	            };
	        } else if ((match = isoRegex.exec(input))) {
	            sign = match[1] === '-' ? -1 : 1;
	            duration = {
	                y: parseIso(match[2], sign),
	                M: parseIso(match[3], sign),
	                w: parseIso(match[4], sign),
	                d: parseIso(match[5], sign),
	                h: parseIso(match[6], sign),
	                m: parseIso(match[7], sign),
	                s: parseIso(match[8], sign),
	            };
	        } else if (duration == null) {
	            // checks for null or undefined
	            duration = {};
	        } else if (
	            typeof duration === 'object' &&
	            ('from' in duration || 'to' in duration)
	        ) {
	            diffRes = momentsDifference(
	                createLocal(duration.from),
	                createLocal(duration.to)
	            );

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
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }

	    function positiveMomentsDifference(base, other) {
	        var res = {};

	        res.months =
	            other.month() - base.month() + (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }

	        res.milliseconds = +other - +base.clone().add(res.months, 'M');

	        return res;
	    }

	    function momentsDifference(base, other) {
	        var res;
	        if (!(base.isValid() && other.isValid())) {
	            return { milliseconds: 0, months: 0 };
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
	    }

	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(
	                    name,
	                    'moment().' +
	                        name +
	                        '(period, number) is deprecated. Please use moment().' +
	                        name +
	                        '(number, period). ' +
	                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
	                );
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
	    }

	    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
	    function isMomentInput(input) {
	        return (
	            isMoment(input) ||
	            isDate(input) ||
	            isString(input) ||
	            isNumber(input) ||
	            isNumberOrStringArray(input) ||
	            isMomentInputObject(input) ||
	            input === null ||
	            input === undefined
	        );
	    }

	    function isMomentInputObject(input) {
	        var objectTest = isObject(input) && !isObjectEmpty(input),
	            propertyTest = false,
	            properties = [
	                'years',
	                'year',
	                'y',
	                'months',
	                'month',
	                'M',
	                'days',
	                'day',
	                'd',
	                'dates',
	                'date',
	                'D',
	                'hours',
	                'hour',
	                'h',
	                'minutes',
	                'minute',
	                'm',
	                'seconds',
	                'second',
	                's',
	                'milliseconds',
	                'millisecond',
	                'ms',
	            ],
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
	            dataTypeTest =
	                input.filter(function (item) {
	                    return !isNumber(item) && isString(input);
	                }).length === 0;
	        }
	        return arrayTest && dataTypeTest;
	    }

	    function isCalendarSpec(input) {
	        var objectTest = isObject(input) && !isObjectEmpty(input),
	            propertyTest = false,
	            properties = [
	                'sameDay',
	                'nextDay',
	                'lastDay',
	                'nextWeek',
	                'lastWeek',
	                'sameElse',
	            ],
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
	        return diff < -6
	            ? 'sameElse'
	            : diff < -1
	            ? 'lastWeek'
	            : diff < 0
	            ? 'lastDay'
	            : diff < 1
	            ? 'sameDay'
	            : diff < 2
	            ? 'nextDay'
	            : diff < 7
	            ? 'nextWeek'
	            : 'sameElse';
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
	        }
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            format = hooks.calendarFormat(this, sod) || 'sameElse',
	            output =
	                formats &&
	                (isFunction(formats[format])
	                    ? formats[format].call(this, now)
	                    : formats[format]);

	        return this.format(
	            output || this.localeData().calendar(format, this, createLocal(now))
	        );
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
	        return (
	            (inclusivity[0] === '('
	                ? this.isAfter(localFrom, units)
	                : !this.isBefore(localFrom, units)) &&
	            (inclusivity[1] === ')'
	                ? this.isBefore(localTo, units)
	                : !this.isAfter(localTo, units))
	        );
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
	            return (
	                this.clone().startOf(units).valueOf() <= inputMs &&
	                inputMs <= this.clone().endOf(units).valueOf()
	            );
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
	                break; // 1000
	            case 'minute':
	                output = (this - that) / 6e4;
	                break; // 1000 * 60
	            case 'hour':
	                output = (this - that) / 36e5;
	                break; // 1000 * 60 * 60
	            case 'day':
	                output = (this - that - zoneDelta) / 864e5;
	                break; // 1000 * 60 * 60 * 24, negate dst
	            case 'week':
	                output = (this - that - zoneDelta) / 6048e5;
	                break; // 1000 * 60 * 60 * 24 * 7, negate dst
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
	        }
	        // difference in months
	        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2,
	            adjust;

	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }

	        //check for negative zero, return zero if negative zero
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
	            return formatMoment(
	                m,
	                utc
	                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
	                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
	            );
	        }
	        if (isFunction(Date.prototype.toISOString)) {
	            // native implementation is ~50x faster, use it when we can
	            if (utc) {
	                return this.toDate().toISOString();
	            } else {
	                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
	                    .toISOString()
	                    .replace('Z', formatMoment(m, 'Z'));
	            }
	        }
	        return formatMoment(
	            m,
	            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
	        );
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
	            inputString = this.isUtc()
	                ? hooks.defaultFormatUtc
	                : hooks.defaultFormat;
	        }
	        var output = formatMoment(this, inputString);
	        return this.localeData().postformat(output);
	    }

	    function from(time, withoutSuffix) {
	        if (
	            this.isValid() &&
	            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
	        ) {
	            return createDuration({ to: this, from: time })
	                .locale(this.locale())
	                .humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }

	    function fromNow(withoutSuffix) {
	        return this.from(createLocal(), withoutSuffix);
	    }

	    function to(time, withoutSuffix) {
	        if (
	            this.isValid() &&
	            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
	        ) {
	            return createDuration({ from: this, to: time })
	                .locale(this.locale())
	                .humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }

	    function toNow(withoutSuffix) {
	        return this.to(createLocal(), withoutSuffix);
	    }

	    // If passed a locale key, it will set the locale for this
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

	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );

	    function localeData() {
	        return this._locale;
	    }

	    var MS_PER_SECOND = 1000,
	        MS_PER_MINUTE = 60 * MS_PER_SECOND,
	        MS_PER_HOUR = 60 * MS_PER_MINUTE,
	        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

	    // actual modulo - handles negative numbers (for dates before 1970):
	    function mod$1(dividend, divisor) {
	        return ((dividend % divisor) + divisor) % divisor;
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
	                time = startOfDate(
	                    this.year(),
	                    this.month() - (this.month() % 3),
	                    1
	                );
	                break;
	            case 'month':
	                time = startOfDate(this.year(), this.month(), 1);
	                break;
	            case 'week':
	                time = startOfDate(
	                    this.year(),
	                    this.month(),
	                    this.date() - this.weekday()
	                );
	                break;
	            case 'isoWeek':
	                time = startOfDate(
	                    this.year(),
	                    this.month(),
	                    this.date() - (this.isoWeekday() - 1)
	                );
	                break;
	            case 'day':
	            case 'date':
	                time = startOfDate(this.year(), this.month(), this.date());
	                break;
	            case 'hour':
	                time = this._d.valueOf();
	                time -= mod$1(
	                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
	                    MS_PER_HOUR
	                );
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
	                time =
	                    startOfDate(
	                        this.year(),
	                        this.month() - (this.month() % 3) + 3,
	                        1
	                    ) - 1;
	                break;
	            case 'month':
	                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
	                break;
	            case 'week':
	                time =
	                    startOfDate(
	                        this.year(),
	                        this.month(),
	                        this.date() - this.weekday() + 7
	                    ) - 1;
	                break;
	            case 'isoWeek':
	                time =
	                    startOfDate(
	                        this.year(),
	                        this.month(),
	                        this.date() - (this.isoWeekday() - 1) + 7
	                    ) - 1;
	                break;
	            case 'day':
	            case 'date':
	                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
	                break;
	            case 'hour':
	                time = this._d.valueOf();
	                time +=
	                    MS_PER_HOUR -
	                    mod$1(
	                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
	                        MS_PER_HOUR
	                    ) -
	                    1;
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
	        return [
	            m.year(),
	            m.month(),
	            m.date(),
	            m.hour(),
	            m.minute(),
	            m.second(),
	            m.millisecond(),
	        ];
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
	            milliseconds: m.milliseconds(),
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
	            strict: this._strict,
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

	    addParseToken(
	        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
	        function (input, array, config, token) {
	            var era = config._locale.erasParse(input, token, config._strict);
	            if (era) {
	                getParsingFlags(config).era = era;
	            } else {
	                getParsingFlags(config).invalidEra = input;
	            }
	        }
	    );

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
	            dir = eras[i].since <= eras[i].until ? +1 : -1;

	            // truncate time
	            val = this.clone().startOf('day').valueOf();

	            if (
	                (eras[i].since <= val && val <= eras[i].until) ||
	                (eras[i].until <= val && val <= eras[i].since)
	            ) {
	                return (
	                    (this.year() - hooks(eras[i].since).year()) * dir +
	                    eras[i].offset
	                );
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
	        this._erasNarrowRegex = new RegExp(
	            '^(' + narrowPieces.join('|') + ')',
	            'i'
	        );
	    }

	    // FORMATTING

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
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

	    // ALIASES

	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');

	    // PRIORITY

	    addUnitPriority('weekYear', 1);
	    addUnitPriority('isoWeekYear', 1);

	    // PARSING

	    addRegexToken('G', matchSigned);
	    addRegexToken('g', matchSigned);
	    addRegexToken('GG', match1to2, match2);
	    addRegexToken('gg', match1to2, match2);
	    addRegexToken('GGGG', match1to4, match4);
	    addRegexToken('gggg', match1to4, match4);
	    addRegexToken('GGGGG', match1to6, match6);
	    addRegexToken('ggggg', match1to6, match6);

	    addWeekParseToken(
	        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
	        function (input, week, config, token) {
	            week[token.substr(0, 2)] = toInt(input);
	        }
	    );

	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = hooks.parseTwoDigitYear(input);
	    });

	    // MOMENTS

	    function getSetWeekYear(input) {
	        return getSetWeekYearHelper.call(
	            this,
	            input,
	            this.week(),
	            this.weekday(),
	            this.localeData()._week.dow,
	            this.localeData()._week.doy
	        );
	    }

	    function getSetISOWeekYear(input) {
	        return getSetWeekYearHelper.call(
	            this,
	            input,
	            this.isoWeek(),
	            this.isoWeekday(),
	            1,
	            4
	        );
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
	    }

	    // FORMATTING

	    addFormatToken('Q', 0, 'Qo', 'quarter');

	    // ALIASES

	    addUnitAlias('quarter', 'Q');

	    // PRIORITY

	    addUnitPriority('quarter', 7);

	    // PARSING

	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });

	    // MOMENTS

	    function getSetQuarter(input) {
	        return input == null
	            ? Math.ceil((this.month() + 1) / 3)
	            : this.month((input - 1) * 3 + (this.month() % 3));
	    }

	    // FORMATTING

	    addFormatToken('D', ['DD', 2], 'Do', 'date');

	    // ALIASES

	    addUnitAlias('date', 'D');

	    // PRIORITY
	    addUnitPriority('date', 9);

	    // PARSING

	    addRegexToken('D', match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        // TODO: Remove "ordinalParse" fallback in next major release.
	        return isStrict
	            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
	            : locale._dayOfMonthOrdinalParseLenient;
	    });

	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0]);
	    });

	    // MOMENTS

	    var getSetDayOfMonth = makeGetSet('Date', true);

	    // FORMATTING

	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

	    // ALIASES

	    addUnitAlias('dayOfYear', 'DDD');

	    // PRIORITY
	    addUnitPriority('dayOfYear', 4);

	    // PARSING

	    addRegexToken('DDD', match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });

	    // HELPERS

	    // MOMENTS

	    function getSetDayOfYear(input) {
	        var dayOfYear =
	            Math.round(
	                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
	            ) + 1;
	        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
	    }

	    // FORMATTING

	    addFormatToken('m', ['mm', 2], 0, 'minute');

	    // ALIASES

	    addUnitAlias('minute', 'm');

	    // PRIORITY

	    addUnitPriority('minute', 14);

	    // PARSING

	    addRegexToken('m', match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);

	    // MOMENTS

	    var getSetMinute = makeGetSet('Minutes', false);

	    // FORMATTING

	    addFormatToken('s', ['ss', 2], 0, 'second');

	    // ALIASES

	    addUnitAlias('second', 's');

	    // PRIORITY

	    addUnitPriority('second', 15);

	    // PARSING

	    addRegexToken('s', match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);

	    // MOMENTS

	    var getSetSecond = makeGetSet('Seconds', false);

	    // FORMATTING

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
	    });

	    // ALIASES

	    addUnitAlias('millisecond', 'ms');

	    // PRIORITY

	    addUnitPriority('millisecond', 16);

	    // PARSING

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

	    getSetMillisecond = makeGetSet('Milliseconds', false);

	    // FORMATTING

	    addFormatToken('z', 0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');

	    // MOMENTS

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
	    proto.dates = deprecate(
	        'dates accessor is deprecated. Use date instead.',
	        getSetDayOfMonth
	    );
	    proto.months = deprecate(
	        'months accessor is deprecated. Use month instead',
	        getSetMonth
	    );
	    proto.years = deprecate(
	        'years accessor is deprecated. Use year instead',
	        getSetYear
	    );
	    proto.zone = deprecate(
	        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
	        getSetZone
	    );
	    proto.isDSTShifted = deprecate(
	        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
	        isDaylightSavingTimeShifted
	    );

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
	    }

	    // ()
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
	        eras: [
	            {
	                since: '0001-01-01',
	                until: +Infinity,
	                offset: 1,
	                name: 'Anno Domini',
	                narrow: 'AD',
	                abbr: 'AD',
	            },
	            {
	                since: '0000-12-31',
	                until: -Infinity,
	                offset: 1,
	                name: 'Before Christ',
	                narrow: 'BC',
	                abbr: 'BC',
	            },
	        ],
	        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal: function (number) {
	            var b = number % 10,
	                output =
	                    toInt((number % 100) / 10) === 1
	                        ? 'th'
	                        : b === 1
	                        ? 'st'
	                        : b === 2
	                        ? 'nd'
	                        : b === 3
	                        ? 'rd'
	                        : 'th';
	            return number + output;
	        },
	    });

	    // Side effect imports

	    hooks.lang = deprecate(
	        'moment.lang is deprecated. Use moment.locale instead.',
	        getSetGlobalLocale
	    );
	    hooks.langData = deprecate(
	        'moment.langData is deprecated. Use moment.localeData instead.',
	        getLocale
	    );

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
	    }

	    // supports only 2.0-style add(1, 's') or add(duration)
	    function add$1(input, value) {
	        return addSubtract$1(this, input, value, 1);
	    }

	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
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
	            monthsFromDays;

	        // if we have a mix of positive and negative values, bubble down first
	        // check: https://github.com/moment/moment/issues/2166
	        if (
	            !(
	                (milliseconds >= 0 && days >= 0 && months >= 0) ||
	                (milliseconds <= 0 && days <= 0 && months <= 0)
	            )
	        ) {
	            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	            days = 0;
	            months = 0;
	        }

	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;

	        seconds = absFloor(milliseconds / 1000);
	        data.seconds = seconds % 60;

	        minutes = absFloor(seconds / 60);
	        data.minutes = minutes % 60;

	        hours = absFloor(minutes / 60);
	        data.hours = hours % 24;

	        days += absFloor(hours / 24);

	        // convert days to months
	        monthsFromDays = absFloor(daysToMonths(days));
	        months += monthsFromDays;
	        days -= absCeil(monthsToDays(monthsFromDays));

	        // 12 months -> 1 year
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
	        return (days * 4800) / 146097;
	    }

	    function monthsToDays(months) {
	        // the reverse of daysToMonths
	        return (months * 146097) / 4800;
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
	    }

	    // TODO: Use this.as('ms')?
	    function valueOf$1() {
	        if (!this.isValid()) {
	            return NaN;
	        }
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
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
	            ss: 44, // a few seconds to seconds
	            s: 45, // seconds to minute
	            m: 45, // minutes to hour
	            h: 22, // hours to day
	            d: 26, // days to month/week
	            w: null, // weeks to month
	            M: 11, // months to year
	        };

	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
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
	            a =
	                (seconds <= thresholds.ss && ['s', seconds]) ||
	                (seconds < thresholds.s && ['ss', seconds]) ||
	                (minutes <= 1 && ['m']) ||
	                (minutes < thresholds.m && ['mm', minutes]) ||
	                (hours <= 1 && ['h']) ||
	                (hours < thresholds.h && ['hh', hours]) ||
	                (days <= 1 && ['d']) ||
	                (days < thresholds.d && ['dd', days]);

	        if (thresholds.w != null) {
	            a =
	                a ||
	                (weeks <= 1 && ['w']) ||
	                (weeks < thresholds.w && ['ww', weeks]);
	        }
	        a = a ||
	            (months <= 1 && ['M']) ||
	            (months < thresholds.M && ['MM', months]) ||
	            (years <= 1 && ['y']) || ['yy', years];

	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }

	    // This function allows you to set the rounding function for relative time strings
	    function getSetRelativeTimeRounding(roundingFunction) {
	        if (roundingFunction === undefined) {
	            return round;
	        }
	        if (typeof roundingFunction === 'function') {
	            round = roundingFunction;
	            return true;
	        }
	        return false;
	    }

	    // This function allows you to set a threshold for relative time strings
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
	        }

	        // 3600 seconds -> 60 minutes -> 1 hour
	        minutes = absFloor(seconds / 60);
	        hours = absFloor(minutes / 60);
	        seconds %= 60;
	        minutes %= 60;

	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;

	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

	        totalSign = total < 0 ? '-' : '';
	        ymSign = sign(this._months) !== sign(total) ? '-' : '';
	        daysSign = sign(this._days) !== sign(total) ? '-' : '';
	        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

	        return (
	            totalSign +
	            'P' +
	            (years ? ymSign + years + 'Y' : '') +
	            (months ? ymSign + months + 'M' : '') +
	            (days ? daysSign + days + 'D' : '') +
	            (hours || minutes || seconds ? 'T' : '') +
	            (hours ? hmsSign + hours + 'H' : '') +
	            (minutes ? hmsSign + minutes + 'M' : '') +
	            (seconds ? hmsSign + s + 'S' : '')
	        );
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

	    proto$2.toIsoString = deprecate(
	        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
	        toISOString$1
	    );
	    proto$2.lang = lang;

	    // FORMATTING

	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');

	    // PARSING

	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });

	    //! moment.js

	    hooks.version = '2.29.3';

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
	    hooks.prototype = proto;

	    // currently HTML5 input type only supports 24-hour formats
	    hooks.HTML5_FMT = {
	        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
	        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
	        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
	        DATE: 'YYYY-MM-DD', // <input type="date" />
	        TIME: 'HH:mm', // <input type="time" />
	        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
	        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
	        WEEK: 'GGGG-[W]WW', // <input type="week" />
	        MONTH: 'YYYY-MM', // <input type="month" />
	    };

	    return hooks;

	})));
} (moment$1));

var moment = moment$1.exports;

new Intl.DateTimeFormat().resolvedOptions().locale;
var returnAfterMinimum = function (millisecs, f) {
    var fArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        fArgs[_i - 2] = arguments[_i];
    }
    return __awaiter$1(void 0, void 0, void 0, function () {
        var start, val, end, diff;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    start = moment();
                    return [4 /*yield*/, f.apply(void 0, __spreadArray([], __read$2(fArgs), false))];
                case 1:
                    val = _a.sent();
                    end = moment();
                    diff = end.diff(start, "milliseconds");
                    if (!(diff < millisecs)) return [3 /*break*/, 3];
                    return [4 /*yield*/, new Promise(function (resolve) {
                            setTimeout(resolve, millisecs - diff);
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, val];
            }
        });
    });
};

// @flow
function newIdGenerator() {
    var id;
    return __generator$1(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = 0;
                _a.label = 1;
            case 1:
                return [4 /*yield*/, id++];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var nextId = function (generator) { return generator.next().value; };

var gen = newIdGenerator();
var visibleLoaderIds = observable(new Set());
var logger = new Logger("useLoader");
var useLoader = function () {
    logger.writeInfo("Called");
    var Loader = React.useRef();
    var withLoading = React.useRef();
    if (!Loader.current || !withLoading.current) {
        var id_1 = nextId(gen);
        logger.writeInfo("Creating new loader id:", id_1);
        Loader.current = function (_a) {
            var cssStyles = _a.cssStyles, showSpinner = _a.showSpinner, props = __rest(_a, ["cssStyles", "showSpinner"]);
            return jsxRuntime.exports.jsx(ObserverComponent, { children: function () {
                    logger.writeInfo("Rendering Loader id:", id_1, "showSpinner", showSpinner, "visibleLoaderIds.has(id)", visibleLoaderIds.has(id_1));
                    return jsxRuntime.exports.jsx(Loadable, __assign$3({ debugId: id_1, showSpinner: showSpinner != null
                            ? showSpinner
                            : visibleLoaderIds.has(id_1) }, props, { css: cssStyles }));
                } });
        };
        withLoading.current = function (f) {
            return (actionAsync(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter$1(void 0, void 0, void 0, function () {
                    var val;
                    return __generator$1(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                visibleLoaderIds.add(id_1);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, , 3, 4]);
                                return [4 /*yield*/, task(returnAfterMinimum.apply(void 0, __spreadArray([500, f], __read$2(args), false)))];
                            case 2:
                                val = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                visibleLoaderIds.delete(id_1);
                                return [7 /*endfinally*/];
                            case 4: return [2 /*return*/, val];
                        }
                    });
                });
            }));
        };
    }
    return {
        withLoading: withLoading.current,
        Loader: Loader.current,
    };
};

var Dots = function (_a) {
    var color = _a.color, _b = _a.size, size = _b === void 0 ? FONT_SIZES.XXL : _b;
    return jsxRuntime.exports.jsx(dist$1.Dots, { color: color, size: size, delayMS: 100, velocity: -.25 });
};

var TranslucentLoader = function (_a) {
    var children = _a.children, className = _a.className, innerAs = _a.innerAs, _b = _a.isLoading, isLoading = _b === void 0 ? true : _b;
    var theme = React.useContext(ThemeContext);
    return (jsxRuntime.exports.jsxs(Container, __assign$3({ as: innerAs, className: className }, { children: [children, isLoading
                ? jsxRuntime.exports.jsx(FlexBox, __assign$3({ alignItems: "center", justifyContent: "center", css: "\n                     background: white;\n                     opacity: .7;\n                     top: 0;\n                     left: 0;\n                     position: absolute;\n                     height: 100%;\n                     width: 100%;\n                   " }, { children: jsxRuntime.exports.jsx(Dots, { color: theme.styles.colorPrimary }) }))
                : null] })));
};
TranslucentLoader = styled(TranslucentLoader)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var templateObject_1, templateObject_2;

var useLoaderV2 = function () {
    var _a = __read$2(React.useState(false), 2), loading = _a[0], setLoading = _a[1];
    var withLoading = React.useMemo(function () { return (function (p) { return __awaiter$1(void 0, void 0, void 0, function () {
        var val;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, p];
                case 2:
                    val = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/, val];
            }
        });
    }); }); }, []);
    var Loader = React.useMemo(function () {
        return (function (_a) {
            var as = _a.as, cssStyles = _a.cssStyles, props = __rest(_a, ["as", "cssStyles"]);
            return jsxRuntime.exports.jsx(TranslucentLoader, __assign$3({}, props, { css: cssStyles, innerAs: as, isLoading: loading }));
        });
    }, [loading]);
    return {
        isLoading: loading,
        Loader: Loader,
        withLoading: withLoading,
    };
};

var useTheme = function () { return React.useContext(ThemeContext); };

exports.useLoader = useLoader;
exports.useLoaderV2 = useLoaderV2;
exports.useTheme = useTheme;
//# sourceMappingURL=hooks.js.map
