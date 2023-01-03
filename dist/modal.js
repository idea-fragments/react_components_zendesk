Object.defineProperty(exports,'__esModule',{value:true});var jsxRuntime=require('react/jsx-runtime');var React=require('react');var ReactDOM=require('react-dom');var styled=require('styled-components');var MIcon=require('@mdi/react');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e};}function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k];}});}});}n["default"]=e;return Object.freeze(n);}var React__namespace=/*#__PURE__*/_interopNamespace(React);var React__default=/*#__PURE__*/_interopDefaultLegacy(React);var ReactDOM__namespace=/*#__PURE__*/_interopNamespace(ReactDOM);var ReactDOM__default=/*#__PURE__*/_interopDefaultLegacy(ReactDOM);var styled__default=/*#__PURE__*/_interopDefaultLegacy(styled);var MIcon__default=/*#__PURE__*/_interopDefaultLegacy(MIcon);/******************************************************************************
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
***************************************************************************** */var __assign=function(){__assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};function __rest(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;}function __awaiter(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});}function __generator(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}}function __read(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done)ar.push(r.value);}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;}function __makeTemplateObject(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw});}else{cooked.raw=raw;}return cooked;}var commonjsGlobal=typeof globalThis!=='undefined'?globalThis:typeof window!=='undefined'?window:typeof global!=='undefined'?global:typeof self!=='undefined'?self:{};var propTypes={exports:{}};var reactIs={exports:{}};var reactIs_production_min={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactIs_production_min;function requireReactIs_production_min(){if(hasRequiredReactIs_production_min)return reactIs_production_min;hasRequiredReactIs_production_min=1;var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u;}}case d:return u;}}}function A(a){return z(a)===m;}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l;};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k;};reactIs_production_min.isContextProvider=function(a){return z(a)===h;};reactIs_production_min.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c;};reactIs_production_min.isForwardRef=function(a){return z(a)===n;};reactIs_production_min.isFragment=function(a){return z(a)===e;};reactIs_production_min.isLazy=function(a){return z(a)===t;};reactIs_production_min.isMemo=function(a){return z(a)===r;};reactIs_production_min.isPortal=function(a){return z(a)===d;};reactIs_production_min.isProfiler=function(a){return z(a)===g;};reactIs_production_min.isStrictMode=function(a){return z(a)===f;};reactIs_production_min.isSuspense=function(a){return z(a)===p;};reactIs_production_min.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v);};reactIs_production_min.typeOf=z;return reactIs_production_min;}var reactIs_development={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactIs_development;function requireReactIs_development(){if(hasRequiredReactIs_development)return reactIs_development;hasRequiredReactIs_development=1;if(process.env.NODE_ENV!=="production"){(function(){// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol=typeof Symbol==='function'&&Symbol.for;var REACT_ELEMENT_TYPE=hasSymbol?Symbol.for('react.element'):0xeac7;var REACT_PORTAL_TYPE=hasSymbol?Symbol.for('react.portal'):0xeaca;var REACT_FRAGMENT_TYPE=hasSymbol?Symbol.for('react.fragment'):0xeacb;var REACT_STRICT_MODE_TYPE=hasSymbol?Symbol.for('react.strict_mode'):0xeacc;var REACT_PROFILER_TYPE=hasSymbol?Symbol.for('react.profiler'):0xead2;var REACT_PROVIDER_TYPE=hasSymbol?Symbol.for('react.provider'):0xeacd;var REACT_CONTEXT_TYPE=hasSymbol?Symbol.for('react.context'):0xeace;// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?
var REACT_ASYNC_MODE_TYPE=hasSymbol?Symbol.for('react.async_mode'):0xeacf;var REACT_CONCURRENT_MODE_TYPE=hasSymbol?Symbol.for('react.concurrent_mode'):0xeacf;var REACT_FORWARD_REF_TYPE=hasSymbol?Symbol.for('react.forward_ref'):0xead0;var REACT_SUSPENSE_TYPE=hasSymbol?Symbol.for('react.suspense'):0xead1;var REACT_SUSPENSE_LIST_TYPE=hasSymbol?Symbol.for('react.suspense_list'):0xead8;var REACT_MEMO_TYPE=hasSymbol?Symbol.for('react.memo'):0xead3;var REACT_LAZY_TYPE=hasSymbol?Symbol.for('react.lazy'):0xead4;var REACT_BLOCK_TYPE=hasSymbol?Symbol.for('react.block'):0xead9;var REACT_FUNDAMENTAL_TYPE=hasSymbol?Symbol.for('react.fundamental'):0xead5;var REACT_RESPONDER_TYPE=hasSymbol?Symbol.for('react.responder'):0xead6;var REACT_SCOPE_TYPE=hasSymbol?Symbol.for('react.scope'):0xead7;function isValidElementType(type){return typeof type==='string'||typeof type==='function'||// Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
type===REACT_FRAGMENT_TYPE||type===REACT_CONCURRENT_MODE_TYPE||type===REACT_PROFILER_TYPE||type===REACT_STRICT_MODE_TYPE||type===REACT_SUSPENSE_TYPE||type===REACT_SUSPENSE_LIST_TYPE||typeof type==='object'&&type!==null&&(type.$$typeof===REACT_LAZY_TYPE||type.$$typeof===REACT_MEMO_TYPE||type.$$typeof===REACT_PROVIDER_TYPE||type.$$typeof===REACT_CONTEXT_TYPE||type.$$typeof===REACT_FORWARD_REF_TYPE||type.$$typeof===REACT_FUNDAMENTAL_TYPE||type.$$typeof===REACT_RESPONDER_TYPE||type.$$typeof===REACT_SCOPE_TYPE||type.$$typeof===REACT_BLOCK_TYPE);}function typeOf(object){if(typeof object==='object'&&object!==null){var $$typeof=object.$$typeof;switch($$typeof){case REACT_ELEMENT_TYPE:var type=object.type;switch(type){case REACT_ASYNC_MODE_TYPE:case REACT_CONCURRENT_MODE_TYPE:case REACT_FRAGMENT_TYPE:case REACT_PROFILER_TYPE:case REACT_STRICT_MODE_TYPE:case REACT_SUSPENSE_TYPE:return type;default:var $$typeofType=type&&type.$$typeof;switch($$typeofType){case REACT_CONTEXT_TYPE:case REACT_FORWARD_REF_TYPE:case REACT_LAZY_TYPE:case REACT_MEMO_TYPE:case REACT_PROVIDER_TYPE:return $$typeofType;default:return $$typeof;}}case REACT_PORTAL_TYPE:return $$typeof;}}return undefined;}// AsyncMode is deprecated along with isAsyncMode
var AsyncMode=REACT_ASYNC_MODE_TYPE;var ConcurrentMode=REACT_CONCURRENT_MODE_TYPE;var ContextConsumer=REACT_CONTEXT_TYPE;var ContextProvider=REACT_PROVIDER_TYPE;var Element=REACT_ELEMENT_TYPE;var ForwardRef=REACT_FORWARD_REF_TYPE;var Fragment=REACT_FRAGMENT_TYPE;var Lazy=REACT_LAZY_TYPE;var Memo=REACT_MEMO_TYPE;var Portal=REACT_PORTAL_TYPE;var Profiler=REACT_PROFILER_TYPE;var StrictMode=REACT_STRICT_MODE_TYPE;var Suspense=REACT_SUSPENSE_TYPE;var hasWarnedAboutDeprecatedIsAsyncMode=false;// AsyncMode should be deprecated
function isAsyncMode(object){{if(!hasWarnedAboutDeprecatedIsAsyncMode){hasWarnedAboutDeprecatedIsAsyncMode=true;// Using console['warn'] to evade Babel and ESLint
console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, '+'and will be removed in React 17+. Update your code to use '+'ReactIs.isConcurrentMode() instead. It has the exact same API.');}}return isConcurrentMode(object)||typeOf(object)===REACT_ASYNC_MODE_TYPE;}function isConcurrentMode(object){return typeOf(object)===REACT_CONCURRENT_MODE_TYPE;}function isContextConsumer(object){return typeOf(object)===REACT_CONTEXT_TYPE;}function isContextProvider(object){return typeOf(object)===REACT_PROVIDER_TYPE;}function isElement(object){return typeof object==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;}function isForwardRef(object){return typeOf(object)===REACT_FORWARD_REF_TYPE;}function isFragment(object){return typeOf(object)===REACT_FRAGMENT_TYPE;}function isLazy(object){return typeOf(object)===REACT_LAZY_TYPE;}function isMemo(object){return typeOf(object)===REACT_MEMO_TYPE;}function isPortal(object){return typeOf(object)===REACT_PORTAL_TYPE;}function isProfiler(object){return typeOf(object)===REACT_PROFILER_TYPE;}function isStrictMode(object){return typeOf(object)===REACT_STRICT_MODE_TYPE;}function isSuspense(object){return typeOf(object)===REACT_SUSPENSE_TYPE;}reactIs_development.AsyncMode=AsyncMode;reactIs_development.ConcurrentMode=ConcurrentMode;reactIs_development.ContextConsumer=ContextConsumer;reactIs_development.ContextProvider=ContextProvider;reactIs_development.Element=Element;reactIs_development.ForwardRef=ForwardRef;reactIs_development.Fragment=Fragment;reactIs_development.Lazy=Lazy;reactIs_development.Memo=Memo;reactIs_development.Portal=Portal;reactIs_development.Profiler=Profiler;reactIs_development.StrictMode=StrictMode;reactIs_development.Suspense=Suspense;reactIs_development.isAsyncMode=isAsyncMode;reactIs_development.isConcurrentMode=isConcurrentMode;reactIs_development.isContextConsumer=isContextConsumer;reactIs_development.isContextProvider=isContextProvider;reactIs_development.isElement=isElement;reactIs_development.isForwardRef=isForwardRef;reactIs_development.isFragment=isFragment;reactIs_development.isLazy=isLazy;reactIs_development.isMemo=isMemo;reactIs_development.isPortal=isPortal;reactIs_development.isProfiler=isProfiler;reactIs_development.isStrictMode=isStrictMode;reactIs_development.isSuspense=isSuspense;reactIs_development.isValidElementType=isValidElementType;reactIs_development.typeOf=typeOf;})();}return reactIs_development;}var hasRequiredReactIs;function requireReactIs(){if(hasRequiredReactIs)return reactIs.exports;hasRequiredReactIs=1;(function(module){if(process.env.NODE_ENV==='production'){module.exports=requireReactIs_production_min();}else{module.exports=requireReactIs_development();}})(reactIs);return reactIs.exports;}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var objectAssign;var hasRequiredObjectAssign;function requireObjectAssign(){if(hasRequiredObjectAssign)return objectAssign;hasRequiredObjectAssign=1;/* eslint-disable no-unused-vars */var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var test1=new String('abc');// eslint-disable-line no-new-wrappers
test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys(Object.assign({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(err){// We don't expect any of the above to throw, but better to be safe.
return false;}}objectAssign=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};return objectAssign;}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ReactPropTypesSecret_1;var hasRequiredReactPropTypesSecret;function requireReactPropTypesSecret(){if(hasRequiredReactPropTypesSecret)return ReactPropTypesSecret_1;hasRequiredReactPropTypesSecret=1;var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';ReactPropTypesSecret_1=ReactPropTypesSecret;return ReactPropTypesSecret_1;}var has;var hasRequiredHas;function requireHas(){if(hasRequiredHas)return has;hasRequiredHas=1;has=Function.call.bind(Object.prototype.hasOwnProperty);return has;}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var checkPropTypes_1;var hasRequiredCheckPropTypes;function requireCheckPropTypes(){if(hasRequiredCheckPropTypes)return checkPropTypes_1;hasRequiredCheckPropTypes=1;var printWarning=function(){};if(process.env.NODE_ENV!=='production'){var ReactPropTypesSecret=requireReactPropTypesSecret();var loggedTypeFailures={};var has=requireHas();printWarning=function(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x){/**/}};}/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */function checkPropTypes(typeSpecs,values,location,componentName,getStack){if(process.env.NODE_ENV!=='production'){for(var typeSpecName in typeSpecs){if(has(typeSpecs,typeSpecName)){var error;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if(typeof typeSpecs[typeSpecName]!=='function'){var err=Error((componentName||'React class')+': '+location+' type `'+typeSpecName+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+typeof typeSpecs[typeSpecName]+'`.'+'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');err.name='Invariant Violation';throw err;}error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);}catch(ex){error=ex;}if(error&&!(error instanceof Error)){printWarning((componentName||'React class')+': type specification of '+location+' `'+typeSpecName+'` is invalid; the type checker '+'function must return `null` or an `Error` but returned a '+typeof error+'. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).');}if(error instanceof Error&&!(error.message in loggedTypeFailures)){// Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message]=true;var stack=getStack?getStack():'';printWarning('Failed '+location+' type: '+error.message+(stack!=null?stack:''));}}}}}/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */checkPropTypes.resetWarningCache=function(){if(process.env.NODE_ENV!=='production'){loggedTypeFailures={};}};checkPropTypes_1=checkPropTypes;return checkPropTypes_1;}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var factoryWithTypeCheckers;var hasRequiredFactoryWithTypeCheckers;function requireFactoryWithTypeCheckers(){if(hasRequiredFactoryWithTypeCheckers)return factoryWithTypeCheckers;hasRequiredFactoryWithTypeCheckers=1;var ReactIs=requireReactIs();var assign=requireObjectAssign();var ReactPropTypesSecret=requireReactPropTypesSecret();var has=requireHas();var checkPropTypes=requireCheckPropTypes();var printWarning=function(){};if(process.env.NODE_ENV!=='production'){printWarning=function(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x){}};}function emptyFunctionThatReturnsNull(){return null;}factoryWithTypeCheckers=function(isValidElement,throwOnDirectAccess){/* global Symbol */var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';// Before Symbol spec.
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
	   */function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}/**
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
	   */var ANONYMOUS='<<anonymous>>';// Important!
// Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bigint:createPrimitiveTypeChecker('bigint'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),symbol:createPrimitiveTypeChecker('symbol'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),elementType:createElementTypeTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,exact:createStrictShapeTypeChecker};/**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */ /*eslint-disable no-self-compare*/function is(x,y){// SameValue algorithm
if(x===y){// Steps 1-5, 7-10
// Steps 6.b-6.e: +0 != -0
return x!==0||1/x===1/y;}else{// Step 6.a: NaN == NaN
return x!==x&&y!==y;}}/*eslint-enable no-self-compare*/ /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */function PropTypeError(message,data){this.message=message;this.data=data&&typeof data==='object'?data:{};this.stack='';}// Make `instanceof Error` still work for returned errors.
PropTypeError.prototype=Error.prototype;function createChainableTypeChecker(validate){if(process.env.NODE_ENV!=='production'){var manualPropTypeCallCache={};var manualPropTypeWarningCount=0;}function checkType(isRequired,props,propName,componentName,location,propFullName,secret){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(secret!==ReactPropTypesSecret){if(throwOnDirectAccess){// New behavior only for users of `prop-types` package
var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use `PropTypes.checkPropTypes()` to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;}else if(process.env.NODE_ENV!=='production'&&typeof console!=='undefined'){// Old behavior for people using React.PropTypes
var cacheKey=componentName+':'+propName;if(!manualPropTypeCallCache[cacheKey]&&// Avoid spamming the console because they are often not actionable except for lib authors
manualPropTypeWarningCount<3){printWarning('You are manually calling a React.PropTypes validation '+'function for the `'+propFullName+'` prop on `'+componentName+'`. This is deprecated '+'and will throw in the standalone `prop-types` package. '+'You may be seeing this warning due to a third-party PropTypes '+'library. See https://fb.me/react-warning-dont-call-proptypes '+'for details.');manualPropTypeCallCache[cacheKey]=true;manualPropTypeWarningCount++;}}}if(props[propName]==null){if(isRequired){if(props[propName]===null){return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required '+('in `'+componentName+'`, but its value is `null`.'));}return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required in '+('`'+componentName+'`, but its value is `undefined`.'));}return null;}else{return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName,secret){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){// `propValue` being instance of, say, date/regexp, pass the 'object'
// check, but we can offer a more precise error message here rather than
// 'of type `object`'.
var preciseType=getPreciseType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'),{expectedType:expectedType});}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunctionThatReturnsNull);}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');}var propValue=props[propName];if(!Array.isArray(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret);if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!isValidElement(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createElementTypeTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!ReactIs.isValidElementType(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement type.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName]instanceof expectedClass)){var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){if(process.env.NODE_ENV!=='production'){if(arguments.length>1){printWarning('Invalid arguments supplied to oneOf, expected an array, got '+arguments.length+' arguments. '+'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');}else{printWarning('Invalid argument supplied to oneOf, expected an array.');}}return emptyFunctionThatReturnsNull;}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(is(propValue,expectedValues[i])){return null;}}var valuesString=JSON.stringify(expectedValues,function replacer(key,value){var type=getPreciseType(value);if(type==='symbol'){return String(value);}return value;});return new PropTypeError('Invalid '+location+' `'+propFullName+'` of value `'+String(propValue)+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');}var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(has(propValue,key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){process.env.NODE_ENV!=='production'?printWarning('Invalid argument supplied to oneOfType, expected an instance of array.'):void 0;return emptyFunctionThatReturnsNull;}for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(typeof checker!=='function'){printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but '+'received '+getPostfixForTypeWarning(checker)+' at index '+i+'.');return emptyFunctionThatReturnsNull;}}function validate(props,propName,componentName,location,propFullName){var expectedTypes=[];for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];var checkerResult=checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret);if(checkerResult==null){return null;}if(checkerResult.data&&has(checkerResult.data,'expectedType')){expectedTypes.push(checkerResult.data.expectedType);}}var expectedTypesMessage=expectedTypes.length>0?', expected one of type ['+expectedTypes.join(', ')+']':'';return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`'+expectedTypesMessage+'.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function invalidValidatorError(componentName,location,propFullName,key,type){return new PropTypeError((componentName||'React class')+': '+location+' type `'+propFullName+'.'+key+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+type+'`.');}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(typeof checker!=='function'){return invalidValidatorError(componentName,location,propFullName,key,getPreciseType(checker));}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function createStrictShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}// We need to check all keys in case some are required but missing from props.
var allKeys=assign({},props[propName],shapeTypes);for(var key in allKeys){var checker=shapeTypes[key];if(has(shapeTypes,key)&&typeof checker!=='function'){return invalidValidatorError(componentName,location,propFullName,key,getPreciseType(checker));}if(!checker){return new PropTypeError('Invalid '+location+' `'+propFullName+'` key `'+key+'` supplied to `'+componentName+'`.'+'\nBad object: '+JSON.stringify(props[propName],null,'  ')+'\nValid keys: '+JSON.stringify(Object.keys(shapeTypes),null,'  '));}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue){case'number':case'string':case'undefined':return true;case'boolean':return!propValue;case'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else{// Iterator will provide entry [k,v] tuples rather than values.
while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else{return false;}return true;default:return false;}}function isSymbol(propType,propValue){// Native Symbol.
if(propType==='symbol'){return true;}// falsy value can't be a Symbol
if(!propValue){return false;}// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
if(propValue['@@toStringTag']==='Symbol'){return true;}// Fallback for non-spec compliant Symbols which are polyfilled.
if(typeof Symbol==='function'&&propValue instanceof Symbol){return true;}return false;}// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue){var propType=typeof propValue;if(Array.isArray(propValue)){return'array';}if(propValue instanceof RegExp){// Old webkits (at least until Android 4.0) return 'function' rather than
// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
// passes PropTypes.object.
return'object';}if(isSymbol(propType,propValue)){return'symbol';}return propType;}// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue){if(typeof propValue==='undefined'||propValue===null){return''+propValue;}var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return'date';}else if(propValue instanceof RegExp){return'regexp';}}return propType;}// Returns a string that is postfixed to a warning about an invalid type.
// For example, "undefined" or "of type array"
function getPostfixForTypeWarning(value){var type=getPreciseType(value);switch(type){case'array':case'object':return'an '+type;case'boolean':case'date':case'regexp':return'a '+type;default:return type;}}// Returns class name of the object, if any.
function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return ANONYMOUS;}return propValue.constructor.name;}ReactPropTypes.checkPropTypes=checkPropTypes;ReactPropTypes.resetWarningCache=checkPropTypes.resetWarningCache;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};return factoryWithTypeCheckers;}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var factoryWithThrowingShims;var hasRequiredFactoryWithThrowingShims;function requireFactoryWithThrowingShims(){if(hasRequiredFactoryWithThrowingShims)return factoryWithThrowingShims;hasRequiredFactoryWithThrowingShims=1;var ReactPropTypesSecret=requireReactPropTypesSecret();function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;factoryWithThrowingShims=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){// It is still safe when called from React.
return;}var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use PropTypes.checkPropTypes() to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;}shim.isRequired=shim;function getShim(){return shim;}// Important!
// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};return factoryWithThrowingShims;}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if(process.env.NODE_ENV!=='production'){var ReactIs=requireReactIs();// By explicitly using `prop-types` you are opting into new development behavior.
// http://fb.me/prop-types-in-prod
var throwOnDirectAccess=true;propTypes.exports=requireFactoryWithTypeCheckers()(ReactIs.isElement,throwOnDirectAccess);}else{// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
propTypes.exports=requireFactoryWithThrowingShims()();}/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */({children:propTypes.exports.func,render:propTypes.exports.func,relativeDocument:propTypes.exports.object,className:propTypes.exports.string,dataAttribute:propTypes.exports.string});/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */function composeEventHandlers$2(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++){fns[_key]=arguments[_key];}return function(event){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}return fns.some(function(fn){fn&&fn.apply(void 0,[event].concat(args));return event&&event.defaultPrevented;});};}function getControlledValue(){for(var _len=arguments.length,values=new Array(_len),_key=0;_key<_len;_key++){values[_key]=arguments[_key];}for(var _i=0,_values=values;_i<_values.length;_i++){var value=_values[_i];if(value!==undefined){return value;}}return undefined;}var KEY_CODES={ALT:18,ASTERISK:170,BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38};var DocumentPosition$2;(function(DocumentPosition){DocumentPosition[DocumentPosition["DISCONNECTED"]=1]="DISCONNECTED";DocumentPosition[DocumentPosition["PRECEDING"]=2]="PRECEDING";DocumentPosition[DocumentPosition["FOLLOWING"]=4]="FOLLOWING";DocumentPosition[DocumentPosition["CONTAINS"]=8]="CONTAINS";DocumentPosition[DocumentPosition["CONTAINED_BY"]=16]="CONTAINED_BY";DocumentPosition[DocumentPosition["IMPLEMENTATION_SPECIFIC"]=32]="IMPLEMENTATION_SPECIFIC";})(DocumentPosition$2||(DocumentPosition$2={}));var ContainerOrientation;(function(ContainerOrientation){ContainerOrientation["HORIZONTAL"]="horizontal";ContainerOrientation["VERTICAL"]="vertical";})(ContainerOrientation||(ContainerOrientation={}));function _extends$a(){_extends$a=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$a.apply(this,arguments);}function _assertThisInitialized$1(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _inheritsLoose$1(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;_setPrototypeOf(subClass,superClass);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _construct(Parent,args,Class){if(_isNativeReflectConstruct()){_construct=Reflect.construct.bind();}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class);};return _wrapNativeSuper(Class);}function last(){var _ref;return _ref=arguments.length-1,_ref<0||arguments.length<=_ref?undefined:arguments[_ref];}function negation(a){return-a;}function addition(a,b){return a+b;}function subtraction(a,b){return a-b;}function multiplication(a,b){return a*b;}function division(a,b){return a/b;}function max$1(){return Math.max.apply(Math,arguments);}function min$1(){return Math.min.apply(Math,arguments);}function comma(){return Array.of.apply(Array,arguments);}var defaultSymbols={symbols:{'*':{infix:{symbol:'*',f:multiplication,notation:'infix',precedence:4,rightToLeft:0,argCount:2},symbol:'*',regSymbol:'\\*'},'/':{infix:{symbol:'/',f:division,notation:'infix',precedence:4,rightToLeft:0,argCount:2},symbol:'/',regSymbol:'/'},'+':{infix:{symbol:'+',f:addition,notation:'infix',precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:'+',f:last,notation:'prefix',precedence:3,rightToLeft:0,argCount:1},symbol:'+',regSymbol:'\\+'},'-':{infix:{symbol:'-',f:subtraction,notation:'infix',precedence:2,rightToLeft:0,argCount:2},prefix:{symbol:'-',f:negation,notation:'prefix',precedence:3,rightToLeft:0,argCount:1},symbol:'-',regSymbol:'-'},',':{infix:{symbol:',',f:comma,notation:'infix',precedence:1,rightToLeft:0,argCount:2},symbol:',',regSymbol:','},'(':{prefix:{symbol:'(',f:last,notation:'prefix',precedence:0,rightToLeft:0,argCount:1},symbol:'(',regSymbol:'\\('},')':{postfix:{symbol:')',f:undefined,notation:'postfix',precedence:0,rightToLeft:0,argCount:1},symbol:')',regSymbol:'\\)'},min:{func:{symbol:'min',f:min$1,notation:'func',precedence:0,rightToLeft:0,argCount:1},symbol:'min',regSymbol:'min\\b'},max:{func:{symbol:'max',f:max$1,notation:'func',precedence:0,rightToLeft:0,argCount:1},symbol:'max',regSymbol:'max\\b'}}};var defaultSymbolMap=defaultSymbols;// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js
/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */var ERRORS={"1":"Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n","2":"Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n","3":"Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n","4":"Couldn't generate valid rgb string from %s, it returned %s.\n\n","5":"Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n","6":"Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n","7":"Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n","8":"Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n","9":"Please provide a number of steps to the modularScale helper.\n\n","10":"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n","11":"Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n","12":"Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n","13":"Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n","14":"Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n","15":"Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n","16":"You must provide a template to this method.\n\n","17":"You passed an unsupported selector state to this method.\n\n","18":"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n","19":"fromSize and toSize must be provided as stringified numbers with the same units.\n\n","20":"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n","21":"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n","22":"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n","23":"fontFace expects a name of a font-family.\n\n","24":"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n","25":"fontFace expects localFonts to be an array.\n\n","26":"fontFace expects fileFormats to be an array.\n\n","27":"radialGradient requries at least 2 color-stops to properly render.\n\n","28":"Please supply a filename to retinaImage() as the first argument.\n\n","29":"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n","30":"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n","31":"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n","32":"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n","33":"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n","34":"borderRadius expects a radius value as a string or number as the second argument.\n\n","35":"borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n","36":"Property must be a string value.\n\n","37":"Syntax Error at %s.\n\n","38":"Formula contains a function that needs parentheses at %s.\n\n","39":"Formula is missing closing parenthesis at %s.\n\n","40":"Formula has too many closing parentheses at %s.\n\n","41":"All values in a formula must have the same unit or be unitless.\n\n","42":"Please provide a number of steps to the modularScale helper.\n\n","43":"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n","44":"Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n","45":"Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n","46":"Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n","47":"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n","48":"fromSize and toSize must be provided as stringified numbers with the same units.\n\n","49":"Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n","50":"Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n","51":"Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n","52":"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n","53":"fontFace expects localFonts to be an array.\n\n","54":"fontFace expects fileFormats to be an array.\n\n","55":"fontFace expects a name of a font-family.\n\n","56":"linearGradient requries at least 2 color-stops to properly render.\n\n","57":"radialGradient requries at least 2 color-stops to properly render.\n\n","58":"Please supply a filename to retinaImage() as the first argument.\n\n","59":"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n","60":"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n","61":"Property must be a string value.\n\n","62":"borderRadius expects a radius value as a string or number as the second argument.\n\n","63":"borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n","64":"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n","65":"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n","66":"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n","67":"You must provide a template to this method.\n\n","68":"You passed an unsupported selector state to this method.\n\n","69":"Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n","70":"Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n","71":"Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n","72":"Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n","73":"Please provide a valid CSS variable.\n\n","74":"CSS variable not found and no default was provided.\n\n","75":"important requires a valid style object, got a %s instead.\n\n","76":"fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n","77":"remToPx expects a value in \"rem\" but you provided it in \"%s\".\n\n","78":"base must be set in \"px\" or \"%\" but you set it in \"%s\".\n"};/**
 * super basic version of sprintf
 * @private
 */function format$1(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var a=args[0];var b=[];var c;for(c=1;c<args.length;c+=1){b.push(args[c]);}b.forEach(function(d){a=a.replace(/%[a-z]/,d);});return a;}/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */var PolishedError=/*#__PURE__*/function(_Error){_inheritsLoose$1(PolishedError,_Error);function PolishedError(code){var _this;if(process.env.NODE_ENV==='production'){_this=_Error.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+code+" for more information.")||this;}else{for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}_this=_Error.call(this,format$1.apply(void 0,[ERRORS[code]].concat(args)))||this;}return _assertThisInitialized$1(_this);}return PolishedError;}(/*#__PURE__*/_wrapNativeSuper(Error));var unitRegExp=/((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;// Merges additional math functionality into the defaults.
function mergeSymbolMaps(additionalSymbols){var symbolMap={};symbolMap.symbols=additionalSymbols?_extends$a({},defaultSymbolMap.symbols,additionalSymbols.symbols):_extends$a({},defaultSymbolMap.symbols);return symbolMap;}function exec(operators,values){var _ref;var op=operators.pop();values.push(op.f.apply(op,(_ref=[]).concat.apply(_ref,values.splice(-op.argCount))));return op.precedence;}function calculate(expression,additionalSymbols){var symbolMap=mergeSymbolMaps(additionalSymbols);var match;var operators=[symbolMap.symbols['('].prefix];var values=[];var pattern=new RegExp(// Pattern for numbers
"\\d+(?:\\.\\d+)?|"+// ...and patterns for individual operators/function names
Object.keys(symbolMap.symbols).map(function(key){return symbolMap.symbols[key];})// longer symbols should be listed first
// $FlowFixMe
.sort(function(a,b){return b.symbol.length-a.symbol.length;})// $FlowFixMe
.map(function(val){return val.regSymbol;}).join('|')+"|(\\S)",'g');pattern.lastIndex=0;// Reset regular expression object
var afterValue=false;do{match=pattern.exec(expression);var _ref2=match||[')',undefined],token=_ref2[0],bad=_ref2[1];var notNumber=symbolMap.symbols[token];var notNewValue=notNumber&&!notNumber.prefix&&!notNumber.func;var notAfterValue=!notNumber||!notNumber.postfix&&!notNumber.infix;// Check for syntax errors:
if(bad||(afterValue?notAfterValue:notNewValue)){throw new PolishedError(37,match?match.index:expression.length,expression);}if(afterValue){// We either have an infix or postfix operator (they should be mutually exclusive)
var curr=notNumber.postfix||notNumber.infix;do{var prev=operators[operators.length-1];if((curr.precedence-prev.precedence||prev.rightToLeft)>0)break;// Apply previous operator, since it has precedence over current one
}while(exec(operators,values));// Exit loop after executing an opening parenthesis or function
afterValue=curr.notation==='postfix';if(curr.symbol!==')'){operators.push(curr);// Postfix always has precedence over any operator that follows after it
if(afterValue)exec(operators,values);}}else if(notNumber){// prefix operator or function
operators.push(notNumber.prefix||notNumber.func);if(notNumber.func){// Require an opening parenthesis
match=pattern.exec(expression);if(!match||match[0]!=='('){throw new PolishedError(38,match?match.index:expression.length,expression);}}}else{// number
values.push(+token);afterValue=true;}}while(match&&operators.length);if(operators.length){throw new PolishedError(39,match?match.index:expression.length,expression);}else if(match){throw new PolishedError(40,match?match.index:expression.length,expression);}else{return values.pop();}}function reverseString(str){return str.split('').reverse().join('');}/**
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
 */function math(formula,additionalSymbols){var reversedFormula=reverseString(formula);var formulaMatch=reversedFormula.match(unitRegExp);// Check that all units are the same
if(formulaMatch&&!formulaMatch.every(function(unit){return unit===formulaMatch[0];})){throw new PolishedError(41);}var cleanFormula=reverseString(reversedFormula.replace(unitRegExp,''));return""+calculate(cleanFormula,additionalSymbols)+(formulaMatch?reverseString(formulaMatch[0]):'');}/**
 * Check if a string ends with something
 * @private
 */function endsWith(string,suffix){return string.substr(-suffix.length)===suffix;}var cssRegex$1=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;/**
 * Returns a given CSS value minus its unit of measure.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */function stripUnit(value){if(typeof value!=='string')return value;var matchedValue=value.match(cssRegex$1);return matchedValue?parseFloat(value):value;}/**
 * Factory function that creates pixel-to-x converters
 * @private
 */var pxtoFactory=function pxtoFactory(to){return function(pxval,base){if(base===void 0){base='16px';}var newPxval=pxval;var newBase=base;if(typeof pxval==='string'){if(!endsWith(pxval,'px')){throw new PolishedError(69,to,pxval);}newPxval=stripUnit(pxval);}if(typeof base==='string'){if(!endsWith(base,'px')){throw new PolishedError(70,to,base);}newBase=stripUnit(base);}if(typeof newPxval==='string'){throw new PolishedError(71,pxval,to);}if(typeof newBase==='string'){throw new PolishedError(72,base,to);}return""+newPxval/newBase+to;};};var pixelsto=pxtoFactory;/**
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
 */var em=/*#__PURE__*/pixelsto('em');var em$1=em;var cssRegex=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;/**
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
 */function getValueAndUnit(value){if(typeof value!=='string')return[value,''];var matchedValue=value.match(cssRegex);if(matchedValue)return[parseFloat(value),matchedValue[2]];return[value,undefined];}function colorToInt(color){return Math.round(color*255);}function convertToInt(red,green,blue){return colorToInt(red)+","+colorToInt(green)+","+colorToInt(blue);}function hslToRgb(hue,saturation,lightness,convert){if(convert===void 0){convert=convertToInt;}if(saturation===0){// achromatic
return convert(lightness,lightness,lightness);}// formulae from https://en.wikipedia.org/wiki/HSL_and_HSV
var huePrime=(hue%360+360)%360/60;var chroma=(1-Math.abs(2*lightness-1))*saturation;var secondComponent=chroma*(1-Math.abs(huePrime%2-1));var red=0;var green=0;var blue=0;if(huePrime>=0&&huePrime<1){red=chroma;green=secondComponent;}else if(huePrime>=1&&huePrime<2){red=secondComponent;green=chroma;}else if(huePrime>=2&&huePrime<3){green=chroma;blue=secondComponent;}else if(huePrime>=3&&huePrime<4){green=secondComponent;blue=chroma;}else if(huePrime>=4&&huePrime<5){red=secondComponent;blue=chroma;}else if(huePrime>=5&&huePrime<6){red=chroma;blue=secondComponent;}var lightnessModification=lightness-chroma/2;var finalRed=red+lightnessModification;var finalGreen=green+lightnessModification;var finalBlue=blue+lightnessModification;return convert(finalRed,finalGreen,finalBlue);}var namedColorMap={aliceblue:'f0f8ff',antiquewhite:'faebd7',aqua:'00ffff',aquamarine:'7fffd4',azure:'f0ffff',beige:'f5f5dc',bisque:'ffe4c4',black:'000',blanchedalmond:'ffebcd',blue:'0000ff',blueviolet:'8a2be2',brown:'a52a2a',burlywood:'deb887',cadetblue:'5f9ea0',chartreuse:'7fff00',chocolate:'d2691e',coral:'ff7f50',cornflowerblue:'6495ed',cornsilk:'fff8dc',crimson:'dc143c',cyan:'00ffff',darkblue:'00008b',darkcyan:'008b8b',darkgoldenrod:'b8860b',darkgray:'a9a9a9',darkgreen:'006400',darkgrey:'a9a9a9',darkkhaki:'bdb76b',darkmagenta:'8b008b',darkolivegreen:'556b2f',darkorange:'ff8c00',darkorchid:'9932cc',darkred:'8b0000',darksalmon:'e9967a',darkseagreen:'8fbc8f',darkslateblue:'483d8b',darkslategray:'2f4f4f',darkslategrey:'2f4f4f',darkturquoise:'00ced1',darkviolet:'9400d3',deeppink:'ff1493',deepskyblue:'00bfff',dimgray:'696969',dimgrey:'696969',dodgerblue:'1e90ff',firebrick:'b22222',floralwhite:'fffaf0',forestgreen:'228b22',fuchsia:'ff00ff',gainsboro:'dcdcdc',ghostwhite:'f8f8ff',gold:'ffd700',goldenrod:'daa520',gray:'808080',green:'008000',greenyellow:'adff2f',grey:'808080',honeydew:'f0fff0',hotpink:'ff69b4',indianred:'cd5c5c',indigo:'4b0082',ivory:'fffff0',khaki:'f0e68c',lavender:'e6e6fa',lavenderblush:'fff0f5',lawngreen:'7cfc00',lemonchiffon:'fffacd',lightblue:'add8e6',lightcoral:'f08080',lightcyan:'e0ffff',lightgoldenrodyellow:'fafad2',lightgray:'d3d3d3',lightgreen:'90ee90',lightgrey:'d3d3d3',lightpink:'ffb6c1',lightsalmon:'ffa07a',lightseagreen:'20b2aa',lightskyblue:'87cefa',lightslategray:'789',lightslategrey:'789',lightsteelblue:'b0c4de',lightyellow:'ffffe0',lime:'0f0',limegreen:'32cd32',linen:'faf0e6',magenta:'f0f',maroon:'800000',mediumaquamarine:'66cdaa',mediumblue:'0000cd',mediumorchid:'ba55d3',mediumpurple:'9370db',mediumseagreen:'3cb371',mediumslateblue:'7b68ee',mediumspringgreen:'00fa9a',mediumturquoise:'48d1cc',mediumvioletred:'c71585',midnightblue:'191970',mintcream:'f5fffa',mistyrose:'ffe4e1',moccasin:'ffe4b5',navajowhite:'ffdead',navy:'000080',oldlace:'fdf5e6',olive:'808000',olivedrab:'6b8e23',orange:'ffa500',orangered:'ff4500',orchid:'da70d6',palegoldenrod:'eee8aa',palegreen:'98fb98',paleturquoise:'afeeee',palevioletred:'db7093',papayawhip:'ffefd5',peachpuff:'ffdab9',peru:'cd853f',pink:'ffc0cb',plum:'dda0dd',powderblue:'b0e0e6',purple:'800080',rebeccapurple:'639',red:'f00',rosybrown:'bc8f8f',royalblue:'4169e1',saddlebrown:'8b4513',salmon:'fa8072',sandybrown:'f4a460',seagreen:'2e8b57',seashell:'fff5ee',sienna:'a0522d',silver:'c0c0c0',skyblue:'87ceeb',slateblue:'6a5acd',slategray:'708090',slategrey:'708090',snow:'fffafa',springgreen:'00ff7f',steelblue:'4682b4',tan:'d2b48c',teal:'008080',thistle:'d8bfd8',tomato:'ff6347',turquoise:'40e0d0',violet:'ee82ee',wheat:'f5deb3',white:'fff',whitesmoke:'f5f5f5',yellow:'ff0',yellowgreen:'9acd32'};/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */function nameToHex(color){if(typeof color!=='string')return color;var normalizedColorName=color.toLowerCase();return namedColorMap[normalizedColorName]?"#"+namedColorMap[normalizedColorName]:color;}var hexRegex=/^#[a-fA-F0-9]{6}$/;var hexRgbaRegex=/^#[a-fA-F0-9]{8}$/;var reducedHexRegex=/^#[a-fA-F0-9]{3}$/;var reducedRgbaHexRegex=/^#[a-fA-F0-9]{4}$/;var rgbRegex=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;var rgbaRegex=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;var hslRegex=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;var hslaRegex=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */function parseToRgb(color){if(typeof color!=='string'){throw new PolishedError(3);}var normalizedColor=nameToHex(color);if(normalizedColor.match(hexRegex)){return{red:parseInt(""+normalizedColor[1]+normalizedColor[2],16),green:parseInt(""+normalizedColor[3]+normalizedColor[4],16),blue:parseInt(""+normalizedColor[5]+normalizedColor[6],16)};}if(normalizedColor.match(hexRgbaRegex)){var alpha=parseFloat((parseInt(""+normalizedColor[7]+normalizedColor[8],16)/255).toFixed(2));return{red:parseInt(""+normalizedColor[1]+normalizedColor[2],16),green:parseInt(""+normalizedColor[3]+normalizedColor[4],16),blue:parseInt(""+normalizedColor[5]+normalizedColor[6],16),alpha:alpha};}if(normalizedColor.match(reducedHexRegex)){return{red:parseInt(""+normalizedColor[1]+normalizedColor[1],16),green:parseInt(""+normalizedColor[2]+normalizedColor[2],16),blue:parseInt(""+normalizedColor[3]+normalizedColor[3],16)};}if(normalizedColor.match(reducedRgbaHexRegex)){var _alpha=parseFloat((parseInt(""+normalizedColor[4]+normalizedColor[4],16)/255).toFixed(2));return{red:parseInt(""+normalizedColor[1]+normalizedColor[1],16),green:parseInt(""+normalizedColor[2]+normalizedColor[2],16),blue:parseInt(""+normalizedColor[3]+normalizedColor[3],16),alpha:_alpha};}var rgbMatched=rgbRegex.exec(normalizedColor);if(rgbMatched){return{red:parseInt(""+rgbMatched[1],10),green:parseInt(""+rgbMatched[2],10),blue:parseInt(""+rgbMatched[3],10)};}var rgbaMatched=rgbaRegex.exec(normalizedColor.substring(0,50));if(rgbaMatched){return{red:parseInt(""+rgbaMatched[1],10),green:parseInt(""+rgbaMatched[2],10),blue:parseInt(""+rgbaMatched[3],10),alpha:parseFloat(""+rgbaMatched[4])>1?parseFloat(""+rgbaMatched[4])/100:parseFloat(""+rgbaMatched[4])};}var hslMatched=hslRegex.exec(normalizedColor);if(hslMatched){var hue=parseInt(""+hslMatched[1],10);var saturation=parseInt(""+hslMatched[2],10)/100;var lightness=parseInt(""+hslMatched[3],10)/100;var rgbColorString="rgb("+hslToRgb(hue,saturation,lightness)+")";var hslRgbMatched=rgbRegex.exec(rgbColorString);if(!hslRgbMatched){throw new PolishedError(4,normalizedColor,rgbColorString);}return{red:parseInt(""+hslRgbMatched[1],10),green:parseInt(""+hslRgbMatched[2],10),blue:parseInt(""+hslRgbMatched[3],10)};}var hslaMatched=hslaRegex.exec(normalizedColor.substring(0,50));if(hslaMatched){var _hue=parseInt(""+hslaMatched[1],10);var _saturation=parseInt(""+hslaMatched[2],10)/100;var _lightness=parseInt(""+hslaMatched[3],10)/100;var _rgbColorString="rgb("+hslToRgb(_hue,_saturation,_lightness)+")";var _hslRgbMatched=rgbRegex.exec(_rgbColorString);if(!_hslRgbMatched){throw new PolishedError(4,normalizedColor,_rgbColorString);}return{red:parseInt(""+_hslRgbMatched[1],10),green:parseInt(""+_hslRgbMatched[2],10),blue:parseInt(""+_hslRgbMatched[3],10),alpha:parseFloat(""+hslaMatched[4])>1?parseFloat(""+hslaMatched[4])/100:parseFloat(""+hslaMatched[4])};}throw new PolishedError(5);}function rgbToHsl(color){// make sure rgb are contained in a set of [0, 255]
var red=color.red/255;var green=color.green/255;var blue=color.blue/255;var max=Math.max(red,green,blue);var min=Math.min(red,green,blue);var lightness=(max+min)/2;if(max===min){// achromatic
if(color.alpha!==undefined){return{hue:0,saturation:0,lightness:lightness,alpha:color.alpha};}else{return{hue:0,saturation:0,lightness:lightness};}}var hue;var delta=max-min;var saturation=lightness>0.5?delta/(2-max-min):delta/(max+min);switch(max){case red:hue=(green-blue)/delta+(green<blue?6:0);break;case green:hue=(blue-red)/delta+2;break;default:// blue case
hue=(red-green)/delta+4;break;}hue*=60;if(color.alpha!==undefined){return{hue:hue,saturation:saturation,lightness:lightness,alpha:color.alpha};}return{hue:hue,saturation:saturation,lightness:lightness};}/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */function parseToHsl(color){// Note: At a later stage we can optimize this function as right now a hsl
// color would be parsed converted to rgb values and converted back to hsl.
return rgbToHsl(parseToRgb(color));}/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */var reduceHexValue=function reduceHexValue(value){if(value.length===7&&value[1]===value[2]&&value[3]===value[4]&&value[5]===value[6]){return"#"+value[1]+value[3]+value[5];}return value;};var reduceHexValue$1=reduceHexValue;function numberToHex(value){var hex=value.toString(16);return hex.length===1?"0"+hex:hex;}function colorToHex(color){return numberToHex(Math.round(color*255));}function convertToHex(red,green,blue){return reduceHexValue$1("#"+colorToHex(red)+colorToHex(green)+colorToHex(blue));}function hslToHex(hue,saturation,lightness){return hslToRgb(hue,saturation,lightness,convertToHex);}/**
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
 */function hsl(value,saturation,lightness){if(typeof value==='number'&&typeof saturation==='number'&&typeof lightness==='number'){return hslToHex(value,saturation,lightness);}else if(typeof value==='object'&&saturation===undefined&&lightness===undefined){return hslToHex(value.hue,value.saturation,value.lightness);}throw new PolishedError(1);}/**
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
 */function hsla(value,saturation,lightness,alpha){if(typeof value==='number'&&typeof saturation==='number'&&typeof lightness==='number'&&typeof alpha==='number'){return alpha>=1?hslToHex(value,saturation,lightness):"rgba("+hslToRgb(value,saturation,lightness)+","+alpha+")";}else if(typeof value==='object'&&saturation===undefined&&lightness===undefined&&alpha===undefined){return value.alpha>=1?hslToHex(value.hue,value.saturation,value.lightness):"rgba("+hslToRgb(value.hue,value.saturation,value.lightness)+","+value.alpha+")";}throw new PolishedError(2);}/**
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
 */function rgb(value,green,blue){if(typeof value==='number'&&typeof green==='number'&&typeof blue==='number'){return reduceHexValue$1("#"+numberToHex(value)+numberToHex(green)+numberToHex(blue));}else if(typeof value==='object'&&green===undefined&&blue===undefined){return reduceHexValue$1("#"+numberToHex(value.red)+numberToHex(value.green)+numberToHex(value.blue));}throw new PolishedError(6);}/**
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
 */function rgba(firstValue,secondValue,thirdValue,fourthValue){if(typeof firstValue==='string'&&typeof secondValue==='number'){var rgbValue=parseToRgb(firstValue);return"rgba("+rgbValue.red+","+rgbValue.green+","+rgbValue.blue+","+secondValue+")";}else if(typeof firstValue==='number'&&typeof secondValue==='number'&&typeof thirdValue==='number'&&typeof fourthValue==='number'){return fourthValue>=1?rgb(firstValue,secondValue,thirdValue):"rgba("+firstValue+","+secondValue+","+thirdValue+","+fourthValue+")";}else if(typeof firstValue==='object'&&secondValue===undefined&&thirdValue===undefined&&fourthValue===undefined){return firstValue.alpha>=1?rgb(firstValue.red,firstValue.green,firstValue.blue):"rgba("+firstValue.red+","+firstValue.green+","+firstValue.blue+","+firstValue.alpha+")";}throw new PolishedError(7);}var isRgb=function isRgb(color){return typeof color.red==='number'&&typeof color.green==='number'&&typeof color.blue==='number'&&(typeof color.alpha!=='number'||typeof color.alpha==='undefined');};var isRgba=function isRgba(color){return typeof color.red==='number'&&typeof color.green==='number'&&typeof color.blue==='number'&&typeof color.alpha==='number';};var isHsl=function isHsl(color){return typeof color.hue==='number'&&typeof color.saturation==='number'&&typeof color.lightness==='number'&&(typeof color.alpha!=='number'||typeof color.alpha==='undefined');};var isHsla=function isHsla(color){return typeof color.hue==='number'&&typeof color.saturation==='number'&&typeof color.lightness==='number'&&typeof color.alpha==='number';};/**
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
 */function toColorString(color){if(typeof color!=='object')throw new PolishedError(8);if(isRgba(color))return rgba(color);if(isRgb(color))return rgb(color);if(isHsla(color))return hsla(color);if(isHsl(color))return hsl(color);throw new PolishedError(8);}// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f,length,acc){return function fn(){// eslint-disable-next-line prefer-rest-params
var combined=acc.concat(Array.prototype.slice.call(arguments));return combined.length>=length?f.apply(this,combined):curried(f,length,combined);};}// eslint-disable-next-line no-redeclare
function curry(f){// eslint-disable-line no-redeclare
return curried(f,f.length,[]);}function guard(lowerBoundary,upperBoundary,value){return Math.max(lowerBoundary,Math.min(upperBoundary,value));}/**
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
 */function darken(amount,color){if(color==='transparent')return color;var hslColor=parseToHsl(color);return toColorString(_extends$a({},hslColor,{lightness:guard(0,1,hslColor.lightness-parseFloat(amount))}));}// prettier-ignore
var curriedDarken=/*#__PURE__*/curry/* ::<number | string, string, string> */(darken);var curriedDarken$1=curriedDarken;/**
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
 */function lighten(amount,color){if(color==='transparent')return color;var hslColor=parseToHsl(color);return toColorString(_extends$a({},hslColor,{lightness:guard(0,1,hslColor.lightness+parseFloat(amount))}));}// prettier-ignore
var curriedLighten=/*#__PURE__*/curry/* ::<number | string, string, string> */(lighten);var curriedLighten$1=curriedLighten;/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */function ownKeys$2(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread2$2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys$2(Object(source),!0).forEach(function(key){_defineProperty$2(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys$2(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}function _defineProperty$2(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray$2(arr,i){return _arrayWithHoles$2(arr)||_iterableToArrayLimit$2(arr,i)||_unsupportedIterableToArray$2(arr,i)||_nonIterableRest$2();}function _arrayWithHoles$2(arr){if(Array.isArray(arr))return arr;}function _iterableToArrayLimit$2(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _unsupportedIterableToArray$2(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray$2(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray$2(o,minLen);}function _arrayLikeToArray$2(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}function _nonIterableRest$2(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var PALETTE={black:'#000',white:'#fff',product:{support:'#00a656',message:'#37b8af',explore:'#30aabc',gather:'#f6c8be',guide:'#ff6224',connect:'#ff6224',chat:'#f79a3e',talk:'#efc93d',sell:'#c38f00'},grey:{100:'#f8f9f9',200:'#e9ebed',300:'#d8dcde',400:'#c2c8cc',500:'#87929d',600:'#68737d',700:'#49545c',800:'#2f3941'},blue:{100:'#edf7ff',200:'#cee2f2',300:'#adcce4',400:'#5293c7',500:'#337fbd',600:'#1f73b7',700:'#144a75',800:'#0f3554'},red:{100:'#fff0f1',200:'#f5d5d8',300:'#f5b5ba',400:'#e35b66',500:'#d93f4c',600:'#cc3340',700:'#8c232c',800:'#681219'},yellow:{100:'#fff7ed',200:'#ffeedb',300:'#fed6a8',400:'#ffb057',500:'#f79a3e',600:'#ed8f1c',700:'#ad5918',800:'#703815'},green:{100:'#edf8f4',200:'#d1e8df',300:'#aecfc2',400:'#5eae91',500:'#228f67',600:'#038153',700:'#186146',800:'#0b3b29'},kale:{100:'#f5fcfc',200:'#daeded',300:'#bdd9d7',400:'#90bbbb',500:'#467b7c',600:'#17494d',700:'#03363d',800:'#012b30'},fuschia:{400:'#d653c2',600:'#a81897',M400:'#cf62a8',M600:'#a8458c'},pink:{400:'#ec4d63',600:'#d42054',M400:'#d57287',M600:'#b23a5d'},crimson:{400:'#e34f32',600:'#c72a1c',M400:'#cc6c5b',M600:'#b24a3c'},orange:{400:'#de701d',600:'#bf5000',M400:'#d4772c',M600:'#b35827'},lemon:{400:'#ffd424',600:'#ffbb10',M400:'#e7a500',M600:'#c38f00'},lime:{400:'#43b324',600:'#2e8200',M400:'#519e2d',M600:'#47782c'},mint:{400:'#00a656',600:'#058541',M400:'#299c66',M600:'#2e8057'},teal:{400:'#02a191',600:'#028079',M400:'#2d9e8f',M600:'#3c7873'},azure:{400:'#3091ec',600:'#1371d6',M400:'#5f8dcf',M600:'#3a70b2'},royal:{400:'#5d7df5',600:'#3353e2',M400:'#7986d8',M600:'#4b61c3'},purple:{400:'#b552e2',600:'#6a27b8',M400:'#b072cc',M600:'#9358b0'}};var BASE=4;var borderRadii={sm:"".concat(BASE/2,"px"),md:"".concat(BASE,"px")};var borderStyles={solid:'solid'};var borderWidths={sm:'1px',md:'3px'};var borders={sm:"".concat(borderWidths.sm," ").concat(borderStyles.solid),md:"".concat(borderWidths.md," ").concat(borderStyles.solid)};var breakpoints={xs:'0px',sm:"".concat(BASE*144,"px"),md:"".concat(BASE*192,"px"),lg:"".concat(BASE*248,"px"),xl:"".concat(BASE*300,"px")};var colors$1={background:PALETTE.white,foreground:PALETTE.grey[800],primaryHue:'blue',dangerHue:'red',warningHue:'yellow',successHue:'green',neutralHue:'grey',chromeHue:'kale'};var fonts={mono:['SFMono-Regular','Consolas','"Liberation Mono"','Menlo','Courier','monospace'].join(','),system:['system-ui','-apple-system','BlinkMacSystemFont','"Segoe UI"','Roboto','Oxygen-Sans','Ubuntu','Cantarell','"Helvetica Neue"','Arial','sans-serif'].join(',')};var fontSizes={xs:'10px',sm:'12px',md:'14px',lg:'18px',xl:'22px',xxl:'26px',xxxl:'36px'};var fontWeights={thin:100,extralight:200,light:300,regular:400,medium:500,semibold:600,bold:700,extrabold:800,black:900};var iconSizes={sm:'12px',md:'16px',lg:'26px'};var lineHeights={sm:"".concat(BASE*4,"px"),md:"".concat(BASE*5,"px"),lg:"".concat(BASE*6,"px"),xl:"".concat(BASE*7,"px"),xxl:"".concat(BASE*8,"px"),xxxl:"".concat(BASE*11,"px")};var palette=_objectSpread2$2({},PALETTE);delete palette.product;var shadowWidths={sm:'2px',md:'3px'};var shadows={sm:function sm(color){return"0 0 0 ".concat(shadowWidths.sm," ").concat(color);},md:function md(color){return"0 0 0 ".concat(shadowWidths.md," ").concat(color);},lg:function lg(offsetY,blurRadius,color){return"0 ".concat(offsetY," ").concat(blurRadius," 0 ").concat(color);}};var space={base:BASE,xxs:"".concat(BASE,"px"),xs:"".concat(BASE*2,"px"),sm:"".concat(BASE*3,"px"),md:"".concat(BASE*5,"px"),lg:"".concat(BASE*8,"px"),xl:"".concat(BASE*10,"px"),xxl:"".concat(BASE*12,"px")};var DEFAULT_THEME={borders:borders,borderRadii:borderRadii,borderStyles:borderStyles,borderWidths:borderWidths,breakpoints:breakpoints,colors:_objectSpread2$2({base:'light'},colors$1),components:{},fonts:fonts,fontSizes:fontSizes,fontWeights:fontWeights,iconSizes:iconSizes,lineHeights:lineHeights,palette:palette,rtl:false,shadowWidths:shadowWidths,shadows:shadows,space:space};var useDocument=function useDocument(theme){var _useState=React.useState(),_useState2=_slicedToArray$2(_useState,2),controlledDocument=_useState2[0],setControlledDocument=_useState2[1];React.useEffect(function(){if(theme&&theme.document){setControlledDocument(theme.document);}else{setControlledDocument(document);}},[theme]);return controlledDocument;};function retrieveComponentStyles(componentId,props){var components=props.theme&&props.theme.components;if(!components){return undefined;}var componentStyles=components[componentId];if(typeof componentStyles==='function'){return componentStyles(props);}return componentStyles;}var DEFAULT_SHADE=600;var adjust=function adjust(color,expected,actual){if(expected!==actual){var amount=Math.abs(expected-actual)/100*0.05;return expected>actual?curriedDarken$1(amount,color):curriedLighten$1(amount,color);}return color;};function getColor(hue){var shade=arguments.length>1&&arguments[1]!==undefined?arguments[1]:DEFAULT_SHADE;var theme=arguments.length>2?arguments[2]:undefined;var transparency=arguments.length>3?arguments[3]:undefined;var retVal;if(isNaN(shade)){return undefined;}var palette=theme&&theme.palette?theme.palette:DEFAULT_THEME.palette;var colors=theme&&theme.colors?theme.colors:DEFAULT_THEME.colors;var _hue;if(typeof hue==='string'){_hue=colors[hue]||hue;}else{_hue=hue;}if(Object.prototype.hasOwnProperty.call(palette,_hue)){_hue=palette[_hue];}if(_typeof(_hue)==='object'){retVal=_hue[shade];if(!retVal){var _shade=Object.keys(_hue).map(function(hueKey){return parseInt(hueKey,10);}).reduce(function(previous,current){return Math.abs(current-shade)<Math.abs(previous-shade)?current:previous;});retVal=adjust(_hue[_shade],shade,_shade);}}else{retVal=adjust(_hue,shade,DEFAULT_SHADE);}if(transparency){retVal=rgba(retVal,transparency);}return retVal;}function getLineHeight(height,fontSize){var _getValueAndUnit=getValueAndUnit(height.toString()),_getValueAndUnit2=_slicedToArray$2(_getValueAndUnit,2),heightValue=_getValueAndUnit2[0],heightUnit=_getValueAndUnit2[1];var _getValueAndUnit3=getValueAndUnit(fontSize.toString()),_getValueAndUnit4=_slicedToArray$2(_getValueAndUnit3,2),fontSizeValue=_getValueAndUnit4[0],fontSizeUnit=_getValueAndUnit4[1];var PIXELS='px';if(heightUnit&&heightUnit!==PIXELS){throw new Error("Unexpected `height` with '".concat(heightUnit,"' units."));}if(fontSizeUnit&&fontSizeUnit!==PIXELS){throw new Error("Unexpected `fontSize` with '".concat(fontSizeUnit,"' units."));}return heightValue/fontSizeValue;}var maxWidth=function maxWidth(breakpoints,breakpoint){var keys=Object.keys(breakpoints);var index=keys.indexOf(breakpoint)+1;if(keys[index]){var dimension=getValueAndUnit(breakpoints[keys[index]]);var value=dimension[0]-0.02;var unit=dimension[1];return"".concat(value).concat(unit);}return undefined;};function mediaQuery(query,breakpoint,theme){var retVal;var min;var max;var breakpoints=theme&&theme.breakpoints?theme.breakpoints:DEFAULT_THEME.breakpoints;if(typeof breakpoint==='string'){if(query==='up'){min=breakpoints[breakpoint];}else if(query==='down'){if(breakpoint==='xl'){min=DEFAULT_THEME.breakpoints.xs;}else{max=maxWidth(breakpoints,breakpoint);}}else if(query==='only'){min=breakpoints[breakpoint];max=maxWidth(breakpoints,breakpoint);}}else if(query==='between'){min=breakpoints[breakpoint[0]];max=maxWidth(breakpoints,breakpoint[1]);}if(min){retVal="@media (min-width: ".concat(min,")");if(max){retVal="".concat(retVal," and (max-width: ").concat(max,")");}}else if(max){retVal="@media (max-width: ".concat(max,")");}else{throw new Error("Unexpected query and breakpoint combination: '".concat(query,"', '").concat(breakpoint,"'."));}return retVal;}var exponentialSymbols={symbols:{sqrt:{func:{symbol:'sqrt',f:function f(a){return Math.sqrt(a);},notation:'func',precedence:0,rightToLeft:0,argCount:1},symbol:'sqrt',regSymbol:'sqrt\\b'}}};var animationStyles$1=function animationStyles(position,modifier){var property=position.split('-')[0];var animationName=styled.keyframes(["0%,66%{",":2px;border:transparent;}"],property);return styled.css(["&","::before,&","::after{animation:0.3s ease-in-out ",";}"],modifier,modifier,animationName);};var positionStyles=function positionStyles(position,size,inset){var margin=math("".concat(size," / -2"));var placement=math("".concat(margin," + ").concat(inset));var clipPath;var positionCss;var propertyRadius;if(position.startsWith('top')){propertyRadius='border-bottom-right-radius';clipPath='polygon(100% 0, 100% 1px, 1px 100%, 0 100%, 0 0)';positionCss=styled.css(["top:",";right:",";left:",";margin-left:",";"],placement,position==='top-right'&&size,position==='top'?'50%':position==='top-left'&&size,position==='top'&&margin);}else if(position.startsWith('right')){propertyRadius='border-bottom-left-radius';clipPath='polygon(100% 0, 100% 100%, calc(100% - 1px) 100%, 0 1px, 0 0)';positionCss=styled.css(["top:",";right:",";bottom:",";margin-top:",";"],position==='right'?'50%':position==='right-top'&&size,placement,position==='right-bottom'&&size,position==='right'&&margin);}else if(position.startsWith('bottom')){propertyRadius='border-top-left-radius';clipPath='polygon(100% 0, calc(100% - 1px) 0, 0 calc(100% - 1px), 0 100%, 100% 100%)';positionCss=styled.css(["right:",";bottom:",";left:",";margin-left:",";"],position==='bottom-right'&&size,placement,position==='bottom'?'50%':position==='bottom-left'&&size,position==='bottom'&&margin);}else if(position.startsWith('left')){propertyRadius='border-top-right-radius';clipPath='polygon(0 100%, 100% 100%, 100% calc(100% - 1px), 1px 0, 0 0)';positionCss=styled.css(["top:",";bottom:",";left:",";margin-top:",";"],position==='left'?'50%':position==='left-top'&&size,size,placement,position==='left'&&margin);}return styled.css(["&::before{",":100%;clip-path:",";}&::before,&::after{","}"],propertyRadius,clipPath,positionCss);};function arrowStyles(position){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var size=options.size||'6px';var inset=options.inset||'0';var squareSize=math("".concat(size," * 2 / sqrt(2)"),exponentialSymbols);return styled.css(["position:relative;&::before{border-width:inherit;border-style:inherit;border-color:transparent;background-clip:content-box;}&::after{z-index:-1;border:inherit;box-shadow:inherit;}&::before,&::after{position:absolute;transform:rotate(45deg);background-color:inherit;box-sizing:inherit;width:",";height:",";content:'';}",";",";"],squareSize,squareSize,positionStyles(position,squareSize,inset),options.animationModifier&&animationStyles$1(position,options.animationModifier));}var useText=function useText(component,props,name,text){var _useState=React.useState(props[name]),_useState2=_slicedToArray$2(_useState,2),value=_useState2[0],setValue=_useState2[1];React.useEffect(function(){if(name==='children'){throw new Error('Error: `children` is not a valid `getText` prop.');}else if(value===null||value===''){throw new Error(component.displayName?"Error: you must provide a valid `".concat(name,"` text value for <").concat(component.displayName,">."):"Error: you must provide a valid `".concat(name,"` text value."));}else if(value===undefined){if(process.env.NODE_ENV==='development'){console.warn(component.displayName?"Warning: you did not provide a customized/translated `".concat(name,"` text value for <").concat(component.displayName,">. Zendesk Garden is rendering <").concat(component.displayName," ").concat(name,"=\"").concat(text,"\"> by default."):"Warning: you did not provide a customized/translated `".concat(name,"` text value. Zendesk Garden is rendering ").concat(name,"=\"").concat(text,"\" by default."));}setValue(text);}},[name,value,component.displayName,text]);return value;};var animationStyles=function animationStyles(position,options){var theme=options.theme||DEFAULT_THEME;var translateValue="".concat(theme.space.base*5,"px");var transformFunction;if(position==='top'){transformFunction='translateY';}else if(position==='right'){transformFunction='translateX';translateValue="-".concat(translateValue);}else if(position==='bottom'){transformFunction='translateY';translateValue="-".concat(translateValue);}else{transformFunction='translateX';}var animationName=styled.keyframes(["0%{transform:","(",");}"],transformFunction,translateValue);return styled.css(["&"," ","{animation:0.2s cubic-bezier(0.15,0.85,0.35,1.2) ",";}"],options.animationModifier,options.childSelector||'> *',animationName);};var hiddenStyles=function hiddenStyles(options){var transition='opacity 0.2s ease-in-out, 0.2s visibility 0s linear';return styled.css(["transition:",";visibility:hidden;opacity:0;"],options.animationModifier&&transition);};function menuStyles(position){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var theme=options.theme||DEFAULT_THEME;var marginProperty;if(position==='top'){marginProperty='margin-bottom';}else if(position==='right'){marginProperty='margin-left';}else if(position==='bottom'){marginProperty='margin-top';}else{marginProperty='margin-right';}return styled.css(["position:absolute;z-index:",";",":",";line-height:0;font-size:0.01px;& ","{display:inline-block;position:relative;margin:0;box-sizing:border-box;border:"," ",";border-radius:",";box-shadow:",";background-color:",";cursor:default;padding:0;text-align:",";white-space:normal;font-size:",";font-weight:",";direction:",";:focus{outline:none;}}",";",";"],options.zIndex||0,marginProperty,options.margin,options.childSelector||'> *',theme.borders.sm,getColor('neutralHue',300,theme),theme.borderRadii.md,theme.shadows.lg("".concat(theme.space.base*5,"px"),"".concat(theme.space.base*7.5,"px"),getColor('chromeHue',600,theme,0.15)),theme.colors.background,theme.rtl?'right':'left',theme.fontSizes.md,theme.fontWeights.regular,theme.rtl&&'rtl',options.animationModifier&&animationStyles(position,options),options.hidden&&hiddenStyles(options));}function canUseDOM$1(){return!!(typeof window!=="undefined"&&window.document&&window.document.createElement);}/**
 * React currently throws a warning when using useLayoutEffect on the server. To
 * get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also
 * need affected components to render on the server. One example is when setting
 * a component's descendants to retrieve their index values.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered HTML to avoid
 * any server/client mismatch.
 *
 * If a useLayoutEffect is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */var useIsomorphicLayoutEffect$1=/*#__PURE__*/canUseDOM$1()?React.useLayoutEffect:React.useEffect;/*
 * Welcome to @reach/auto-id!

 * Let's see if we can make sense of why this hook exists and its
 * implementation.
 *
 * Some background:
 *   1. Accessibility APIs rely heavily on element IDs
 *   2. Requiring developers to put IDs on every element in Reach UI is both
 *      cumbersome and error-prone
 *   3. With a component model, we can generate IDs for them!
 *
 * Solution 1: Generate random IDs.
 *
 * This works great as long as you don't server render your app. When React (in
 * the client) tries to reuse the markup from the server, the IDs won't match
 * and React will then recreate the entire DOM tree.
 *
 * Solution 2: Increment an integer
 *
 * This sounds great. Since we're rendering the exact same tree on the server
 * and client, we can increment a counter and get a deterministic result between
 * client and server. Also, JS integers can go up to nine-quadrillion. I'm
 * pretty sure the tab will be closed before an app never needs
 * 10 quadrillion IDs!
 *
 * Problem solved, right?
 *
 * Ah, but there's a catch! React's concurrent rendering makes this approach
 * non-deterministic. While the client and server will end up with the same
 * elements in the end, depending on suspense boundaries (and possibly some user
 * input during the initial render) the incrementing integers won't always match
 * up.
 *
 * Solution 3: Don't use IDs at all on the server; patch after first render.
 *
 * What we've done here is solution 2 with some tricks. With this approach, the
 * ID returned is an empty string on the first render. This way the server and
 * client have the same markup no matter how wild the concurrent rendering may
 * have gotten.
 *
 * After the render, we patch up the components with an incremented ID. This
 * causes a double render on any components with `useId`. Shouldn't be a problem
 * since the components using this hook should be small, and we're only updating
 * the ID attribute on the DOM, nothing big is happening.
 *
 * It doesn't have to be an incremented number, though--we could do generate
 * random strings instead, but incrementing a number is probably the cheapest
 * thing we can do.
 *
 * Additionally, we only do this patchup on the very first client render ever.
 * Any calls to `useId` that happen dynamically in the client will be
 * populated immediately with a value. So, we only get the double render after
 * server hydration and never again, SO BACK OFF ALRIGHT?
 */var serverHandoffComplete=false;var id=0;function genId(){return++id;}/* eslint-disable react-hooks/rules-of-hooks */ /**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @see Docs https://reach.tech/auto-id
 */function useId(providedId){var _ref;// TODO: Remove error flag when updating internal deps to React 18. None of
// our tricks will play well with concurrent rendering anyway.
// @ts-expect-error
if(typeof React.useId==="function"){// @ts-expect-error
var _id=React.useId(providedId);return providedId!=null?providedId:_id;}// If this instance isn't part of the initial render, we don't have to do the
// double render/patch-up dance. We can just generate the ID and return it.
var initialId=providedId!=null?providedId:serverHandoffComplete?genId():null;var _React$useState=React.useState(initialId),id=_React$useState[0],setId=_React$useState[1];useIsomorphicLayoutEffect$1(function(){if(id===null){// Patch the ID after render. We do this in `useLayoutEffect` to avoid any
// rendering flicker, though it'll make the first render slower (unlikely
// to matter, but you're welcome to measure your app and let us know if
// it's a problem).
setId(genId());}// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);React.useEffect(function(){if(serverHandoffComplete===false){// Flag all future uses of `useId` to skip the update dance. This is in
// `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
// accidentally bail out of the patch-up dance prematurely.
serverHandoffComplete=true;}},[]);return(_ref=providedId!=null?providedId:id)!=null?_ref:undefined;}/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */function composeEventHandlers$1(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++){fns[_key]=arguments[_key];}return function(event){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}return fns.some(function(fn){fn&&fn.apply(void 0,[event].concat(args));return event&&event.defaultPrevented;});};}var KEYS$1={ALT:'Alt',ASTERISK:'*',BACKSPACE:'Backspace',COMMA:',',DELETE:'Delete',DOWN:'ArrowDown',END:'End',ENTER:'Enter',ESCAPE:'Escape',HOME:'Home',LEFT:'ArrowLeft',NUMPAD_ADD:'Add',NUMPAD_DECIMAL:'Decimal',NUMPAD_DIVIDE:'Divide',NUMPAD_ENTER:'Enter',NUMPAD_MULTIPLY:'Multiply',NUMPAD_SUBTRACT:'Subtract',PAGE_DOWN:'PageDown',PAGE_UP:'PageUp',PERIOD:'.',RIGHT:'ArrowRight',SHIFT:'Shift',SPACE:' ',TAB:'Tab',UNIDENTIFIED:'Unidentified',UP:'ArrowUp'};var DocumentPosition$1;(function(DocumentPosition){DocumentPosition[DocumentPosition["DISCONNECTED"]=1]="DISCONNECTED";DocumentPosition[DocumentPosition["PRECEDING"]=2]="PRECEDING";DocumentPosition[DocumentPosition["FOLLOWING"]=4]="FOLLOWING";DocumentPosition[DocumentPosition["CONTAINS"]=8]="CONTAINS";DocumentPosition[DocumentPosition["CONTAINED_BY"]=16]="CONTAINED_BY";DocumentPosition[DocumentPosition["IMPLEMENTATION_SPECIFIC"]=32]="IMPLEMENTATION_SPECIFIC";})(DocumentPosition$1||(DocumentPosition$1={}));/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */function composeEventHandlers(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++){fns[_key]=arguments[_key];}return function(event){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}return fns.some(function(fn){fn&&fn.apply(void 0,[event].concat(args));return event&&event.defaultPrevented;});};}var KEYS={ALT:'Alt',ASTERISK:'*',BACKSPACE:'Backspace',COMMA:',',DELETE:'Delete',DOWN:'ArrowDown',END:'End',ENTER:'Enter',ESCAPE:'Escape',HOME:'Home',LEFT:'ArrowLeft',NUMPAD_ADD:'Add',NUMPAD_DECIMAL:'Decimal',NUMPAD_DIVIDE:'Divide',NUMPAD_ENTER:'Enter',NUMPAD_MULTIPLY:'Multiply',NUMPAD_SUBTRACT:'Subtract',PAGE_DOWN:'PageDown',PAGE_UP:'PageUp',PERIOD:'.',RIGHT:'ArrowRight',SHIFT:'Shift',SPACE:' ',TAB:'Tab',UNIDENTIFIED:'Unidentified',UP:'ArrowUp'};var DocumentPosition;(function(DocumentPosition){DocumentPosition[DocumentPosition["DISCONNECTED"]=1]="DISCONNECTED";DocumentPosition[DocumentPosition["PRECEDING"]=2]="PRECEDING";DocumentPosition[DocumentPosition["FOLLOWING"]=4]="FOLLOWING";DocumentPosition[DocumentPosition["CONTAINS"]=8]="CONTAINS";DocumentPosition[DocumentPosition["CONTAINED_BY"]=16]="CONTAINED_BY";DocumentPosition[DocumentPosition["IMPLEMENTATION_SPECIFIC"]=32]="IMPLEMENTATION_SPECIFIC";})(DocumentPosition||(DocumentPosition={}));/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var candidateSelectors=['input','select','textarea','a[href]','button','[tabindex]:not(slot)','audio[controls]','video[controls]','[contenteditable]:not([contenteditable="false"])','details>summary:first-of-type','details'];var candidateSelector=/* #__PURE__ */candidateSelectors.join(',');var NoElement=typeof Element==='undefined';var matches=NoElement?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;var getRootNode=!NoElement&&Element.prototype.getRootNode?function(element){return element.getRootNode();}:function(element){return element.ownerDocument;};/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */var getCandidates=function getCandidates(el,includeContainer,filter){var candidates=Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));if(includeContainer&&matches.call(el,candidateSelector)){candidates.unshift(el);}candidates=candidates.filter(filter);return candidates;};/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */ /**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */ /**
 * @typedef {Object} CandidatesScope
 * @property {Element} scope contains inner candidates
 * @property {Element[]} candidates
 */ /**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidatesScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */ /**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidatesScope>}
 */var getCandidatesIteratively=function getCandidatesIteratively(elements,includeContainer,options){var candidates=[];var elementsToCheck=Array.from(elements);while(elementsToCheck.length){var element=elementsToCheck.shift();if(element.tagName==='SLOT'){// add shadow dom slot scope (slot itself cannot be focusable)
var assigned=element.assignedElements();var content=assigned.length?assigned:element.children;var nestedCandidates=getCandidatesIteratively(content,true,options);if(options.flatten){candidates.push.apply(candidates,nestedCandidates);}else{candidates.push({scope:element,candidates:nestedCandidates});}}else{// check candidate element
var validCandidate=matches.call(element,candidateSelector);if(validCandidate&&options.filter(element)&&(includeContainer||!elements.includes(element))){candidates.push(element);}// iterate over shadow content if possible
var shadowRoot=element.shadowRoot||// check for an undisclosed shadow
typeof options.getShadowRoot==='function'&&options.getShadowRoot(element);var validShadowRoot=!options.shadowRootFilter||options.shadowRootFilter(element);if(shadowRoot&&validShadowRoot){// add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
//  shadow exists, so look at light dom children as fallback BUT create a scope for any
//  child candidates found because they're likely slotted elements (elements that are
//  children of the web component element (which has the shadow), in the light dom, but
//  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
//  _after_ we return from this recursive call
var _nestedCandidates=getCandidatesIteratively(shadowRoot===true?element.children:shadowRoot.children,true,options);if(options.flatten){candidates.push.apply(candidates,_nestedCandidates);}else{candidates.push({scope:element,candidates:_nestedCandidates});}}else{// there's not shadow so just dig into the element's (light dom) children
//  __without__ giving the element special scope treatment
elementsToCheck.unshift.apply(elementsToCheck,element.children);}}}return candidates;};var getTabindex=function getTabindex(node,isScope){if(node.tabIndex<0){// in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
// `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
// yet they are still part of the regular tab order; in FF, they get a default
// `tabIndex` of 0; since Chrome still puts those elements in the regular tab
// order, consider their tab index to be 0.
// Also browsers do not return `tabIndex` correctly for contentEditable nodes;
// so if they don't have a tabindex attribute specifically set, assume it's 0.
//
// isScope is positive for custom element with shadow root or slot that by default
// have tabIndex -1, but need to be sorted by document order in order for their
// content to be inserted in the correct position
if((isScope||/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName)||node.isContentEditable)&&isNaN(parseInt(node.getAttribute('tabindex'),10))){return 0;}}return node.tabIndex;};var sortOrderedTabbables=function sortOrderedTabbables(a,b){return a.tabIndex===b.tabIndex?a.documentOrder-b.documentOrder:a.tabIndex-b.tabIndex;};var isInput=function isInput(node){return node.tagName==='INPUT';};var isHiddenInput=function isHiddenInput(node){return isInput(node)&&node.type==='hidden';};var isDetailsWithSummary=function isDetailsWithSummary(node){var r=node.tagName==='DETAILS'&&Array.prototype.slice.apply(node.children).some(function(child){return child.tagName==='SUMMARY';});return r;};var getCheckedRadio=function getCheckedRadio(nodes,form){for(var i=0;i<nodes.length;i++){if(nodes[i].checked&&nodes[i].form===form){return nodes[i];}}};var isTabbableRadio=function isTabbableRadio(node){if(!node.name){return true;}var radioScope=node.form||getRootNode(node);var queryRadios=function queryRadios(name){return radioScope.querySelectorAll('input[type="radio"][name="'+name+'"]');};var radioSet;if(typeof window!=='undefined'&&typeof window.CSS!=='undefined'&&typeof window.CSS.escape==='function'){radioSet=queryRadios(window.CSS.escape(node.name));}else{try{radioSet=queryRadios(node.name);}catch(err){// eslint-disable-next-line no-console
console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',err.message);return false;}}var checked=getCheckedRadio(radioSet,node.form);return!checked||checked===node;};var isRadio=function isRadio(node){return isInput(node)&&node.type==='radio';};var isNonTabbableRadio=function isNonTabbableRadio(node){return isRadio(node)&&!isTabbableRadio(node);};var isZeroArea=function isZeroArea(node){var _node$getBoundingClie=node.getBoundingClientRect(),width=_node$getBoundingClie.width,height=_node$getBoundingClie.height;return width===0&&height===0;};var isHidden=function isHidden(node,_ref){var displayCheck=_ref.displayCheck,getShadowRoot=_ref.getShadowRoot;// NOTE: visibility will be `undefined` if node is detached from the document
//  (see notes about this further down), which means we will consider it visible
//  (this is legacy behavior from a very long way back)
// NOTE: we check this regardless of `displayCheck="none"` because this is a
//  _visibility_ check, not a _display_ check
if(getComputedStyle(node).visibility==='hidden'){return true;}var isDirectSummary=matches.call(node,'details>summary:first-of-type');var nodeUnderDetails=isDirectSummary?node.parentElement:node;if(matches.call(nodeUnderDetails,'details:not([open]) *')){return true;}// The root node is the shadow root if the node is in a shadow DOM; some document otherwise
//  (but NOT _the_ document; see second 'If' comment below for more).
// If rootNode is shadow root, it'll have a host, which is the element to which the shadow
//  is attached, and the one we need to check if it's in the document or not (because the
//  shadow, and all nodes it contains, is never considered in the document since shadows
//  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
//  is hidden, or is not in the document itself but is detached, it will affect the shadow's
//  visibility, including all the nodes it contains). The host could be any normal node,
//  or a custom element (i.e. web component). Either way, that's the one that is considered
//  part of the document, not the shadow root, nor any of its children (i.e. the node being
//  tested).
// If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
//  document (per the docs) and while it's a Document-type object, that document does not
//  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
//  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
//  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
//  node is actually detached.
var nodeRootHost=getRootNode(node).host;var nodeIsAttached=(nodeRootHost===null||nodeRootHost===void 0?void 0:nodeRootHost.ownerDocument.contains(nodeRootHost))||node.ownerDocument.contains(node);if(!displayCheck||displayCheck==='full'){if(typeof getShadowRoot==='function'){// figure out if we should consider the node to be in an undisclosed shadow and use the
//  'non-zero-area' fallback
var originalNode=node;while(node){var parentElement=node.parentElement;var rootNode=getRootNode(node);if(parentElement&&!parentElement.shadowRoot&&getShadowRoot(parentElement)===true// check if there's an undisclosed shadow
){// node has an undisclosed shadow which means we can only treat it as a black box, so we
//  fall back to a non-zero-area test
return isZeroArea(node);}else if(node.assignedSlot){// iterate up slot
node=node.assignedSlot;}else if(!parentElement&&rootNode!==node.ownerDocument){// cross shadow boundary
node=rootNode.host;}else{// iterate up normal dom
node=parentElement;}}node=originalNode;}// else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
//  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
//  it might be a falsy value, which means shadow DOM support is disabled
// Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
//  now we can just test to see if it would normally be visible or not, provided it's
//  attached to the main document.
// NOTE: We must consider case where node is inside a shadow DOM and given directly to
//  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.
if(nodeIsAttached){// this works wherever the node is: if there's at least one client rect, it's
//  somehow displayed; it also covers the CSS 'display: contents' case where the
//  node itself is hidden in place of its contents; and there's no need to search
//  up the hierarchy either
return!node.getClientRects().length;}// Else, the node isn't attached to the document, which means the `getClientRects()`
//  API will __always__ return zero rects (this can happen, for example, if React
//  is used to render nodes onto a detached tree, as confirmed in this thread:
//  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
//
// It also means that even window.getComputedStyle(node).display will return `undefined`
//  because styles are only computed for nodes that are in the document.
//
// NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
//  somehow. Though it was never stated officially, anyone who has ever used tabbable
//  APIs on nodes in detached containers has actually implicitly used tabbable in what
//  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
//  considering __everything__ to be visible because of the innability to determine styles.
}else if(displayCheck==='non-zero-area'){// NOTE: Even though this tests that the node's client rect is non-zero to determine
//  whether it's displayed, and that a detached node will __always__ have a zero-area
//  client rect, we don't special-case for whether the node is attached or not. In
//  this mode, we do want to consider nodes that have a zero area to be hidden at all
//  times, and that includes attached or not.
return isZeroArea(node);}// visible, as far as we can tell, or per current `displayCheck` mode
return false;};// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset=function isDisabledFromFieldset(node){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)){var parentNode=node.parentElement;// check if `node` is contained in a disabled <fieldset>
while(parentNode){if(parentNode.tagName==='FIELDSET'&&parentNode.disabled){// look for the first <legend> among the children of the disabled <fieldset>
for(var i=0;i<parentNode.children.length;i++){var child=parentNode.children.item(i);// when the first <legend> (in document order) is found
if(child.tagName==='LEGEND'){// if its parent <fieldset> is not nested in another disabled <fieldset>,
// return whether `node` is a descendant of its first <legend>
return matches.call(parentNode,'fieldset[disabled] *')?true:!child.contains(node);}}// the disabled <fieldset> containing `node` has no <legend>
return true;}parentNode=parentNode.parentElement;}}// else, node's tabbable/focusable state should not be affected by a fieldset's
//  enabled/disabled state
return false;};var isNodeMatchingSelectorFocusable=function isNodeMatchingSelectorFocusable(options,node){if(node.disabled||isHiddenInput(node)||isHidden(node,options)||// For a details element with a summary, the summary element gets the focus
isDetailsWithSummary(node)||isDisabledFromFieldset(node)){return false;}return true;};var isNodeMatchingSelectorTabbable=function isNodeMatchingSelectorTabbable(options,node){if(isNonTabbableRadio(node)||getTabindex(node)<0||!isNodeMatchingSelectorFocusable(options,node)){return false;}return true;};var isValidShadowRootTabbable=function isValidShadowRootTabbable(shadowHostNode){var tabIndex=parseInt(shadowHostNode.getAttribute('tabindex'),10);if(isNaN(tabIndex)||tabIndex>=0){return true;}// If a custom element has an explicit negative tabindex,
// browsers will not allow tab targeting said element's children.
return false;};/**
 * @param {Array.<Element|CandidatesScope>} candidates
 * @returns Element[]
 */var sortByOrder=function sortByOrder(candidates){var regularTabbables=[];var orderedTabbables=[];candidates.forEach(function(item,i){var isScope=!!item.scope;var element=isScope?item.scope:item;var candidateTabindex=getTabindex(element,isScope);var elements=isScope?sortByOrder(item.candidates):element;if(candidateTabindex===0){isScope?regularTabbables.push.apply(regularTabbables,elements):regularTabbables.push(element);}else{orderedTabbables.push({documentOrder:i,tabIndex:candidateTabindex,item:item,isScope:isScope,content:elements});}});return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc,sortable){sortable.isScope?acc.push.apply(acc,sortable.content):acc.push(sortable.content);return acc;},[]).concat(regularTabbables);};var tabbable=function tabbable(el,options){options=options||{};var candidates;if(options.getShadowRoot){candidates=getCandidatesIteratively([el],options.includeContainer,{filter:isNodeMatchingSelectorTabbable.bind(null,options),flatten:false,getShadowRoot:options.getShadowRoot,shadowRootFilter:isValidShadowRootTabbable});}else{candidates=getCandidates(el,options.includeContainer,isNodeMatchingSelectorTabbable.bind(null,options));}return sortByOrder(candidates);};/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */function _extends$9(){_extends$9=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$9.apply(this,arguments);}function _objectWithoutPropertiesLoose$7(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function ownerDocument$1(node){return node&&node.ownerDocument||document;}function activeElement(doc){if(doc===void 0){doc=ownerDocument$1();}try{var active=doc.activeElement;if(!active||!active.nodeName)return null;return active;}catch(e){return doc.body;}}var _excluded$1$6=["onKeyDown"];var useFocusJail=function useFocusJail(_temp){var _ref=_temp===void 0?{containerRef:React.createRef()}:_temp,_ref$focusOnMount=_ref.focusOnMount,focusOnMount=_ref$focusOnMount===void 0?true:_ref$focusOnMount,_ref$restoreFocus=_ref.restoreFocus,restoreFocus=_ref$restoreFocus===void 0?true:_ref$restoreFocus,environment=_ref.environment,focusElem=_ref.focusElem,containerRef=_ref.containerRef;var restoreFocusElement=React.useRef(null);var _useState=React.useState(containerRef.current),currentRef=_useState[0],setCurrentRef=_useState[1];React.useEffect(function(){if(containerRef.current!==currentRef){setCurrentRef(containerRef.current);}});var focusElement=React.useCallback(function(element){if(focusElem){focusElem(element);}else{element&&element.focus();}},[focusElem]);var validateContainerRef=function validateContainerRef(){if(!currentRef){throw new Error('Accessibility Error: You must apply the ref prop to your containing element.');}};var getInitialFocusNode=function getInitialFocusNode(){var doc=environment?environment:document;var activeElem=activeElement(doc);var containerElem=currentRef;return containerElem.contains(activeElem)?activeElem:containerElem;};var getTabbableNodes=function getTabbableNodes(){var elements=tabbable(currentRef);return{firstItem:elements[0]||getInitialFocusNode(),lastItem:elements[elements.length-1]||getInitialFocusNode()};};var getContainerProps=function getContainerProps(_temp2){var _ref2=_temp2===void 0?{}:_temp2,onKeyDown=_ref2.onKeyDown,other=_objectWithoutPropertiesLoose$7(_ref2,_excluded$1$6);return _extends$9({onKeyDown:composeEventHandlers(onKeyDown,function(event){if(event.key!==KEYS.TAB){return;}validateContainerRef();var tabbableNodes=getTabbableNodes();if(event.shiftKey&&(event.target===tabbableNodes.firstItem||event.target===currentRef)){focusElement(tabbableNodes.lastItem);event.preventDefault();}if(!event.shiftKey&&event.target===tabbableNodes.lastItem){focusElement(tabbableNodes.firstItem);event.preventDefault();}}),'data-garden-container-id':'containers.focusjail','data-garden-container-version':'2.0.0'},other);};React.useEffect(function(){var doc=environment||document;restoreFocusElement.current=activeElement(doc);if(focusOnMount){focusElement(currentRef);}return function(){var isBodyInactive=restoreFocusElement.current!==doc.body;var hasActiveElement=restoreFocusElement.current!==null;if(isBodyInactive&&hasActiveElement&&restoreFocus){focusElement(restoreFocusElement.current);}};},[focusOnMount,restoreFocus,environment,focusElement,currentRef]);return{getContainerProps:getContainerProps,focusElement:focusElement};};({children:propTypes.exports.func,render:propTypes.exports.func,focusOnMount:propTypes.exports.bool,restoreFocus:propTypes.exports.bool,environment:propTypes.exports.any,containerRef:propTypes.exports.any.isRequired,focusElem:propTypes.exports.func});/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */function _extends$8(){_extends$8=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$8.apply(this,arguments);}function _objectWithoutPropertiesLoose$6(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var _excluded$1$5=["onMouseUp"],_excluded2$2=["role","onKeyDown","onMouseDown"],_excluded3=["id"],_excluded4=["id"],_excluded5=["onClick"];var useModal=function useModal(_ref){var onClose=_ref.onClose,modalRef=_ref.modalRef,idPrefix=_ref.idPrefix,focusOnMount=_ref.focusOnMount,restoreFocus=_ref.restoreFocus,environment=_ref.environment;var prefix=useId(idPrefix);var titleId=prefix+"__title";var contentId=prefix+"__content";var isModalMousedDownRef=React.useRef(false);var closeModal=function closeModal(event){onClose&&onClose(event);};var getBackdropProps=function getBackdropProps(_temp){var _ref2=_temp===void 0?{}:_temp,onMouseUp=_ref2.onMouseUp,other=_objectWithoutPropertiesLoose$6(_ref2,_excluded$1$5);var containerId='containers.modal';var handleMouseUp=function handleMouseUp(event){var target=event.target;var isModalContainer=containerId===target.getAttribute('data-garden-container-id');if(!isModalMousedDownRef.current&&isModalContainer){closeModal(event);}isModalMousedDownRef.current=false;};return _extends$8({onMouseUp:composeEventHandlers$1(onMouseUp,handleMouseUp),'data-garden-container-id':containerId,'data-garden-container-version':'1.0.0'},other);};var _getModalProps=function getModalProps(_temp2){var _ref3=_temp2===void 0?{}:_temp2,_ref3$role=_ref3.role,role=_ref3$role===void 0?'dialog':_ref3$role,onKeyDown=_ref3.onKeyDown,onMouseDown=_ref3.onMouseDown,other=_objectWithoutPropertiesLoose$6(_ref3,_excluded2$2);return _extends$8({role:role===null?undefined:role,tabIndex:-1,'aria-modal':true,'aria-labelledby':titleId,'aria-describedby':contentId,onMouseDown:composeEventHandlers$1(onMouseDown,function(){isModalMousedDownRef.current=true;}),onKeyDown:composeEventHandlers$1(onKeyDown,function(event){if(event.key===KEYS$1.ESCAPE){closeModal(event);}})},other);};var getTitleProps=function getTitleProps(_temp3){var _ref4=_temp3===void 0?{}:_temp3,_ref4$id=_ref4.id,id=_ref4$id===void 0?titleId:_ref4$id,other=_objectWithoutPropertiesLoose$6(_ref4,_excluded3);return _extends$8({id:id},other);};var getContentProps=function getContentProps(_temp4){var _ref5=_temp4===void 0?{}:_temp4,_ref5$id=_ref5.id,id=_ref5$id===void 0?contentId:_ref5$id,other=_objectWithoutPropertiesLoose$6(_ref5,_excluded4);return _extends$8({id:id},other);};var getCloseProps=function getCloseProps(_ref6){var onClick=_ref6.onClick,other=_objectWithoutPropertiesLoose$6(_ref6,_excluded5);return _extends$8({onClick:composeEventHandlers$1(onClick,function(event){closeModal(event);})},other);};var _useFocusJail=useFocusJail({containerRef:modalRef,focusOnMount:focusOnMount,restoreFocus:restoreFocus,environment:environment}),getContainerProps=_useFocusJail.getContainerProps;return{getBackdropProps:getBackdropProps,getModalProps:function getModalProps(props){return getContainerProps(_getModalProps(props));},getTitleProps:getTitleProps,getContentProps:getContentProps,getCloseProps:getCloseProps,closeModal:closeModal};};({children:propTypes.exports.func,render:propTypes.exports.func,onClose:propTypes.exports.func,modalRef:propTypes.exports.any.isRequired,idPrefix:propTypes.exports.string,focusOnMount:propTypes.exports.bool,restoreFocus:propTypes.exports.bool,environment:propTypes.exports.any});/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */var INPUT_TYPES_WHITE_LIST={text:true,search:true,url:true,tel:true,email:true,password:true,number:true,date:true,month:true,week:true,time:true,datetime:true,'datetime-local':true};function useFocusVisible(_temp){var _ref=_temp===void 0?{}:_temp,scope=_ref.scope,relativeDocument=_ref.relativeDocument,_ref$className=_ref.className,className=_ref$className===void 0?'garden-focus-visible':_ref$className,_ref$dataAttribute=_ref.dataAttribute,dataAttribute=_ref$dataAttribute===void 0?'data-garden-focus-visible':_ref$dataAttribute;if(!scope){throw new Error('Error: the useFocusVisible() hook requires a "scope" property');}var hadKeyboardEvent=React.useRef(false);var hadFocusVisibleRecently=React.useRef(false);var hadFocusVisibleRecentlyTimeout=React.useRef();React.useEffect(function(){var environment=relativeDocument;if(!environment){environment=document;}var isValidFocusTarget=function isValidFocusTarget(el){if(el&&el!==scope.current&&el.nodeName!=='HTML'&&el.nodeName!=='BODY'&&'classList'in el&&'contains'in el.classList){return true;}return false;};var focusTriggersKeyboardModality=function focusTriggersKeyboardModality(el){var type=el.type;var tagName=el.tagName;if(tagName==='INPUT'&&INPUT_TYPES_WHITE_LIST[type]&&!el.readOnly){return true;}if(tagName==='TEXTAREA'&&!el.readOnly){return true;}if(el.isContentEditable){return true;}return false;};var isFocused=function isFocused(el){if(el&&(el.classList.contains(className)||el.hasAttribute(dataAttribute))){return true;}return false;};var addFocusVisibleClass=function addFocusVisibleClass(el){if(isFocused(el)){return;}el&&el.classList.add(className);el&&el.setAttribute(dataAttribute,'true');};var removeFocusVisibleClass=function removeFocusVisibleClass(el){el.classList.remove(className);el.removeAttribute(dataAttribute);};var onKeyDown=function onKeyDown(e){if(e.metaKey||e.altKey||e.ctrlKey){return;}if(isValidFocusTarget(environment.activeElement)){addFocusVisibleClass(environment.activeElement);}hadKeyboardEvent.current=true;};var onPointerDown=function onPointerDown(){hadKeyboardEvent.current=false;};var onFocus=function onFocus(e){if(!isValidFocusTarget(e.target)){return;}if(hadKeyboardEvent.current||focusTriggersKeyboardModality(e.target)){addFocusVisibleClass(e.target);}};var onBlur=function onBlur(e){if(!isValidFocusTarget(e.target)){return;}if(isFocused(e.target)){hadFocusVisibleRecently.current=true;clearTimeout(hadFocusVisibleRecentlyTimeout.current);var timeoutId=setTimeout(function(){hadFocusVisibleRecently.current=false;clearTimeout(hadFocusVisibleRecentlyTimeout.current);},100);hadFocusVisibleRecentlyTimeout.current=Number(timeoutId);removeFocusVisibleClass(e.target);}};var onInitialPointerMove=function onInitialPointerMove(e){var nodeName=e.target.nodeName;if(nodeName&&nodeName.toLowerCase()==='html'){return;}hadKeyboardEvent.current=false;removeInitialPointerMoveListeners();};var addInitialPointerMoveListeners=function addInitialPointerMoveListeners(){environment.addEventListener('mousemove',onInitialPointerMove);environment.addEventListener('mousedown',onInitialPointerMove);environment.addEventListener('mouseup',onInitialPointerMove);environment.addEventListener('pointermove',onInitialPointerMove);environment.addEventListener('pointerdown',onInitialPointerMove);environment.addEventListener('pointerup',onInitialPointerMove);environment.addEventListener('touchmove',onInitialPointerMove);environment.addEventListener('touchstart',onInitialPointerMove);environment.addEventListener('touchend',onInitialPointerMove);};var removeInitialPointerMoveListeners=function removeInitialPointerMoveListeners(){environment.removeEventListener('mousemove',onInitialPointerMove);environment.removeEventListener('mousedown',onInitialPointerMove);environment.removeEventListener('mouseup',onInitialPointerMove);environment.removeEventListener('pointermove',onInitialPointerMove);environment.removeEventListener('pointerdown',onInitialPointerMove);environment.removeEventListener('pointerup',onInitialPointerMove);environment.removeEventListener('touchmove',onInitialPointerMove);environment.removeEventListener('touchstart',onInitialPointerMove);environment.removeEventListener('touchend',onInitialPointerMove);};var onVisibilityChange=function onVisibilityChange(){if(environment.visibilityState==='hidden'){if(hadFocusVisibleRecently.current){hadKeyboardEvent.current=true;}}};var currentScope=scope.current;if(!environment||!currentScope){return;}environment.addEventListener('keydown',onKeyDown,true);environment.addEventListener('mousedown',onPointerDown,true);environment.addEventListener('pointerdown',onPointerDown,true);environment.addEventListener('touchstart',onPointerDown,true);environment.addEventListener('visibilitychange',onVisibilityChange,true);addInitialPointerMoveListeners();currentScope&&currentScope.addEventListener('focus',onFocus,true);currentScope&&currentScope.addEventListener('blur',onBlur,true);return function(){environment.removeEventListener('keydown',onKeyDown);environment.removeEventListener('mousedown',onPointerDown);environment.removeEventListener('pointerdown',onPointerDown);environment.removeEventListener('touchstart',onPointerDown);environment.removeEventListener('visibilityChange',onVisibilityChange);removeInitialPointerMoveListeners();currentScope&&currentScope.removeEventListener('focus',onFocus);currentScope&&currentScope.removeEventListener('blur',onBlur);clearTimeout(hadFocusVisibleRecentlyTimeout.current);};},[relativeDocument,scope,className,dataAttribute]);}({children:propTypes.exports.func,render:propTypes.exports.func,relativeDocument:propTypes.exports.object,className:propTypes.exports.string,dataAttribute:propTypes.exports.string});function mergeRefs(refs){return function(value){refs.forEach(function(ref){if(typeof ref==="function"){ref(value);}else if(ref!=null){ref.current=value;}});};}React__namespace.createContext();React__namespace.createContext();/**
 * Simple ponyfill for Object.fromEntries
 */var fromEntries=function fromEntries(entries){return entries.reduce(function(acc,_ref){var key=_ref[0],value=_ref[1];acc[key]=value;return acc;},{});};/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */var useIsomorphicLayoutEffect=typeof window!=='undefined'&&window.document&&window.document.createElement?React__namespace.useLayoutEffect:React__namespace.useEffect;var top='top';var bottom='bottom';var right='right';var left='left';var auto='auto';var basePlacements=[top,bottom,right,left];var start='start';var end='end';var clippingParents='clippingParents';var viewport='viewport';var popper='popper';var reference='reference';var variationPlacements=/*#__PURE__*/basePlacements.reduce(function(acc,placement){return acc.concat([placement+"-"+start,placement+"-"+end]);},[]);var placements=/*#__PURE__*/[].concat(basePlacements,[auto]).reduce(function(acc,placement){return acc.concat([placement,placement+"-"+start,placement+"-"+end]);},[]);// modifiers that need to read the DOM
var beforeRead='beforeRead';var read='read';var afterRead='afterRead';// pure-logic modifiers
var beforeMain='beforeMain';var main='main';var afterMain='afterMain';// modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite='beforeWrite';var write='write';var afterWrite='afterWrite';var modifierPhases=[beforeRead,read,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];function getNodeName(element){return element?(element.nodeName||'').toLowerCase():null;}function getWindow(node){if(node==null){return window;}if(node.toString()!=='[object Window]'){var ownerDocument=node.ownerDocument;return ownerDocument?ownerDocument.defaultView||window:window;}return node;}function isElement(node){var OwnElement=getWindow(node).Element;return node instanceof OwnElement||node instanceof Element;}function isHTMLElement(node){var OwnElement=getWindow(node).HTMLElement;return node instanceof OwnElement||node instanceof HTMLElement;}function isShadowRoot(node){// IE 11 has no ShadowRoot
if(typeof ShadowRoot==='undefined'){return false;}var OwnElement=getWindow(node).ShadowRoot;return node instanceof OwnElement||node instanceof ShadowRoot;}// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref){var state=_ref.state;Object.keys(state.elements).forEach(function(name){var style=state.styles[name]||{};var attributes=state.attributes[name]||{};var element=state.elements[name];// arrow is optional + virtual elements
if(!isHTMLElement(element)||!getNodeName(element)){return;}// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(element.style,style);Object.keys(attributes).forEach(function(name){var value=attributes[name];if(value===false){element.removeAttribute(name);}else{element.setAttribute(name,value===true?'':value);}});});}function effect$2(_ref2){var state=_ref2.state;var initialStyles={popper:{position:state.options.strategy,left:'0',top:'0',margin:'0'},arrow:{position:'absolute'},reference:{}};Object.assign(state.elements.popper.style,initialStyles.popper);state.styles=initialStyles;if(state.elements.arrow){Object.assign(state.elements.arrow.style,initialStyles.arrow);}return function(){Object.keys(state.elements).forEach(function(name){var element=state.elements[name];var attributes=state.attributes[name]||{};var styleProperties=Object.keys(state.styles.hasOwnProperty(name)?state.styles[name]:initialStyles[name]);// Set all values to an empty string to unset them
var style=styleProperties.reduce(function(style,property){style[property]='';return style;},{});// arrow is optional + virtual elements
if(!isHTMLElement(element)||!getNodeName(element)){return;}Object.assign(element.style,style);Object.keys(attributes).forEach(function(attribute){element.removeAttribute(attribute);});});};}// eslint-disable-next-line import/no-unused-modules
var applyStyles$1={name:'applyStyles',enabled:true,phase:'write',fn:applyStyles,effect:effect$2,requires:['computeStyles']};function getBasePlacement(placement){return placement.split('-')[0];}var max=Math.max;var min=Math.min;var round=Math.round;function getBoundingClientRect(element,includeScale){if(includeScale===void 0){includeScale=false;}var rect=element.getBoundingClientRect();var scaleX=1;var scaleY=1;if(isHTMLElement(element)&&includeScale){var offsetHeight=element.offsetHeight;var offsetWidth=element.offsetWidth;// Do not attempt to divide by 0, otherwise we get `Infinity` as scale
// Fallback to 1 in case both values are `0`
if(offsetWidth>0){scaleX=round(rect.width)/offsetWidth||1;}if(offsetHeight>0){scaleY=round(rect.height)/offsetHeight||1;}}return{width:rect.width/scaleX,height:rect.height/scaleY,top:rect.top/scaleY,right:rect.right/scaleX,bottom:rect.bottom/scaleY,left:rect.left/scaleX,x:rect.left/scaleX,y:rect.top/scaleY};}// means it doesn't take into account transforms.
function getLayoutRect(element){var clientRect=getBoundingClientRect(element);// Use the clientRect sizes if it's not been transformed.
// Fixes https://github.com/popperjs/popper-core/issues/1223
var width=element.offsetWidth;var height=element.offsetHeight;if(Math.abs(clientRect.width-width)<=1){width=clientRect.width;}if(Math.abs(clientRect.height-height)<=1){height=clientRect.height;}return{x:element.offsetLeft,y:element.offsetTop,width:width,height:height};}function contains(parent,child){var rootNode=child.getRootNode&&child.getRootNode();// First, attempt with faster native method
if(parent.contains(child)){return true;}// then fallback to custom implementation with Shadow DOM support
else if(rootNode&&isShadowRoot(rootNode)){var next=child;do{if(next&&parent.isSameNode(next)){return true;}// $FlowFixMe[prop-missing]: need a better way to handle this...
next=next.parentNode||next.host;}while(next);}// Give up, the result is false
return false;}function getComputedStyle$2(element){return getWindow(element).getComputedStyle(element);}function isTableElement(element){return['table','td','th'].indexOf(getNodeName(element))>=0;}function getDocumentElement(element){// $FlowFixMe[incompatible-return]: assume body is always available
return((isElement(element)?element.ownerDocument:// $FlowFixMe[prop-missing]
element.document)||window.document).documentElement;}function getParentNode(element){if(getNodeName(element)==='html'){return element;}return(// this is a quicker (but less type safe) way to save quite some bytes from the bundle
// $FlowFixMe[incompatible-return]
// $FlowFixMe[prop-missing]
element.assignedSlot||// step into the shadow DOM of the parent of a slotted node
element.parentNode||(// DOM Element detected
isShadowRoot(element)?element.host:null)||// ShadowRoot detected
// $FlowFixMe[incompatible-call]: HTMLElement is a Node
getDocumentElement(element)// fallback
);}function getTrueOffsetParent(element){if(!isHTMLElement(element)||// https://github.com/popperjs/popper-core/issues/837
getComputedStyle$2(element).position==='fixed'){return null;}return element.offsetParent;}// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element){var isFirefox=navigator.userAgent.toLowerCase().indexOf('firefox')!==-1;var isIE=navigator.userAgent.indexOf('Trident')!==-1;if(isIE&&isHTMLElement(element)){// In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
var elementCss=getComputedStyle$2(element);if(elementCss.position==='fixed'){return null;}}var currentNode=getParentNode(element);if(isShadowRoot(currentNode)){currentNode=currentNode.host;}while(isHTMLElement(currentNode)&&['html','body'].indexOf(getNodeName(currentNode))<0){var css=getComputedStyle$2(currentNode);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if(css.transform!=='none'||css.perspective!=='none'||css.contain==='paint'||['transform','perspective'].indexOf(css.willChange)!==-1||isFirefox&&css.willChange==='filter'||isFirefox&&css.filter&&css.filter!=='none'){return currentNode;}else{currentNode=currentNode.parentNode;}}return null;}// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element){var window=getWindow(element);var offsetParent=getTrueOffsetParent(element);while(offsetParent&&isTableElement(offsetParent)&&getComputedStyle$2(offsetParent).position==='static'){offsetParent=getTrueOffsetParent(offsetParent);}if(offsetParent&&(getNodeName(offsetParent)==='html'||getNodeName(offsetParent)==='body'&&getComputedStyle$2(offsetParent).position==='static')){return window;}return offsetParent||getContainingBlock(element)||window;}function getMainAxisFromPlacement(placement){return['top','bottom'].indexOf(placement)>=0?'x':'y';}function within(min$1,value,max$1){return max(min$1,min(value,max$1));}function withinMaxClamp(min,value,max){var v=within(min,value,max);return v>max?max:v;}function getFreshSideObject(){return{top:0,right:0,bottom:0,left:0};}function mergePaddingObject(paddingObject){return Object.assign({},getFreshSideObject(),paddingObject);}function expandToHashMap(value,keys){return keys.reduce(function(hashMap,key){hashMap[key]=value;return hashMap;},{});}var toPaddingObject=function toPaddingObject(padding,state){padding=typeof padding==='function'?padding(Object.assign({},state.rects,{placement:state.placement})):padding;return mergePaddingObject(typeof padding!=='number'?padding:expandToHashMap(padding,basePlacements));};function arrow(_ref){var _state$modifiersData$;var state=_ref.state,name=_ref.name,options=_ref.options;var arrowElement=state.elements.arrow;var popperOffsets=state.modifiersData.popperOffsets;var basePlacement=getBasePlacement(state.placement);var axis=getMainAxisFromPlacement(basePlacement);var isVertical=[left,right].indexOf(basePlacement)>=0;var len=isVertical?'height':'width';if(!arrowElement||!popperOffsets){return;}var paddingObject=toPaddingObject(options.padding,state);var arrowRect=getLayoutRect(arrowElement);var minProp=axis==='y'?top:left;var maxProp=axis==='y'?bottom:right;var endDiff=state.rects.reference[len]+state.rects.reference[axis]-popperOffsets[axis]-state.rects.popper[len];var startDiff=popperOffsets[axis]-state.rects.reference[axis];var arrowOffsetParent=getOffsetParent(arrowElement);var clientSize=arrowOffsetParent?axis==='y'?arrowOffsetParent.clientHeight||0:arrowOffsetParent.clientWidth||0:0;var centerToReference=endDiff/2-startDiff/2;// Make sure the arrow doesn't overflow the popper if the center point is
// outside of the popper bounds
var min=paddingObject[minProp];var max=clientSize-arrowRect[len]-paddingObject[maxProp];var center=clientSize/2-arrowRect[len]/2+centerToReference;var offset=within(min,center,max);// Prevents breaking syntax highlighting...
var axisProp=axis;state.modifiersData[name]=(_state$modifiersData$={},_state$modifiersData$[axisProp]=offset,_state$modifiersData$.centerOffset=offset-center,_state$modifiersData$);}function effect$1(_ref2){var state=_ref2.state,options=_ref2.options;var _options$element=options.element,arrowElement=_options$element===void 0?'[data-popper-arrow]':_options$element;if(arrowElement==null){return;}// CSS selector
if(typeof arrowElement==='string'){arrowElement=state.elements.popper.querySelector(arrowElement);if(!arrowElement){return;}}if(process.env.NODE_ENV!=="production"){if(!isHTMLElement(arrowElement)){console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).','To use an SVG arrow, wrap it in an HTMLElement that will be used as','the arrow.'].join(' '));}}if(!contains(state.elements.popper,arrowElement)){if(process.env.NODE_ENV!=="production"){console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper','element.'].join(' '));}return;}state.elements.arrow=arrowElement;}// eslint-disable-next-line import/no-unused-modules
var arrow$1={name:'arrow',enabled:true,phase:'main',fn:arrow,effect:effect$1,requires:['popperOffsets'],requiresIfExists:['preventOverflow']};function getVariation(placement){return placement.split('-')[1];}var unsetSides={top:'auto',right:'auto',bottom:'auto',left:'auto'};// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref){var x=_ref.x,y=_ref.y;var win=window;var dpr=win.devicePixelRatio||1;return{x:round(x*dpr)/dpr||0,y:round(y*dpr)/dpr||0};}function mapToStyles(_ref2){var _Object$assign2;var popper=_ref2.popper,popperRect=_ref2.popperRect,placement=_ref2.placement,variation=_ref2.variation,offsets=_ref2.offsets,position=_ref2.position,gpuAcceleration=_ref2.gpuAcceleration,adaptive=_ref2.adaptive,roundOffsets=_ref2.roundOffsets,isFixed=_ref2.isFixed;var _offsets$x=offsets.x,x=_offsets$x===void 0?0:_offsets$x,_offsets$y=offsets.y,y=_offsets$y===void 0?0:_offsets$y;var _ref3=typeof roundOffsets==='function'?roundOffsets({x:x,y:y}):{x:x,y:y};x=_ref3.x;y=_ref3.y;var hasX=offsets.hasOwnProperty('x');var hasY=offsets.hasOwnProperty('y');var sideX=left;var sideY=top;var win=window;if(adaptive){var offsetParent=getOffsetParent(popper);var heightProp='clientHeight';var widthProp='clientWidth';if(offsetParent===getWindow(popper)){offsetParent=getDocumentElement(popper);if(getComputedStyle$2(offsetParent).position!=='static'&&position==='absolute'){heightProp='scrollHeight';widthProp='scrollWidth';}}// $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
offsetParent=offsetParent;if(placement===top||(placement===left||placement===right)&&variation===end){sideY=bottom;var offsetY=isFixed&&offsetParent===win&&win.visualViewport?win.visualViewport.height:// $FlowFixMe[prop-missing]
offsetParent[heightProp];y-=offsetY-popperRect.height;y*=gpuAcceleration?1:-1;}if(placement===left||(placement===top||placement===bottom)&&variation===end){sideX=right;var offsetX=isFixed&&offsetParent===win&&win.visualViewport?win.visualViewport.width:// $FlowFixMe[prop-missing]
offsetParent[widthProp];x-=offsetX-popperRect.width;x*=gpuAcceleration?1:-1;}}var commonStyles=Object.assign({position:position},adaptive&&unsetSides);var _ref4=roundOffsets===true?roundOffsetsByDPR({x:x,y:y}):{x:x,y:y};x=_ref4.x;y=_ref4.y;if(gpuAcceleration){var _Object$assign;return Object.assign({},commonStyles,(_Object$assign={},_Object$assign[sideY]=hasY?'0':'',_Object$assign[sideX]=hasX?'0':'',_Object$assign.transform=(win.devicePixelRatio||1)<=1?"translate("+x+"px, "+y+"px)":"translate3d("+x+"px, "+y+"px, 0)",_Object$assign));}return Object.assign({},commonStyles,(_Object$assign2={},_Object$assign2[sideY]=hasY?y+"px":'',_Object$assign2[sideX]=hasX?x+"px":'',_Object$assign2.transform='',_Object$assign2));}function computeStyles(_ref5){var state=_ref5.state,options=_ref5.options;var _options$gpuAccelerat=options.gpuAcceleration,gpuAcceleration=_options$gpuAccelerat===void 0?true:_options$gpuAccelerat,_options$adaptive=options.adaptive,adaptive=_options$adaptive===void 0?true:_options$adaptive,_options$roundOffsets=options.roundOffsets,roundOffsets=_options$roundOffsets===void 0?true:_options$roundOffsets;if(process.env.NODE_ENV!=="production"){var transitionProperty=getComputedStyle$2(state.elements.popper).transitionProperty||'';if(adaptive&&['transform','top','right','bottom','left'].some(function(property){return transitionProperty.indexOf(property)>=0;})){console.warn(['Popper: Detected CSS transitions on at least one of the following','CSS properties: "transform", "top", "right", "bottom", "left".','\n\n','Disable the "computeStyles" modifier\'s `adaptive` option to allow','for smooth transitions, or remove these properties from the CSS','transition declaration on the popper element if only transitioning','opacity or background-color for example.','\n\n','We recommend using the popper element as a wrapper around an inner','element that can have any CSS property transitioned for animations.'].join(' '));}}var commonStyles={placement:getBasePlacement(state.placement),variation:getVariation(state.placement),popper:state.elements.popper,popperRect:state.rects.popper,gpuAcceleration:gpuAcceleration,isFixed:state.options.strategy==='fixed'};if(state.modifiersData.popperOffsets!=null){state.styles.popper=Object.assign({},state.styles.popper,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.popperOffsets,position:state.options.strategy,adaptive:adaptive,roundOffsets:roundOffsets})));}if(state.modifiersData.arrow!=null){state.styles.arrow=Object.assign({},state.styles.arrow,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.arrow,position:'absolute',adaptive:false,roundOffsets:roundOffsets})));}state.attributes.popper=Object.assign({},state.attributes.popper,{'data-popper-placement':state.placement});}// eslint-disable-next-line import/no-unused-modules
var computeStyles$1={name:'computeStyles',enabled:true,phase:'beforeWrite',fn:computeStyles,data:{}};var passive={passive:true};function effect(_ref){var state=_ref.state,instance=_ref.instance,options=_ref.options;var _options$scroll=options.scroll,scroll=_options$scroll===void 0?true:_options$scroll,_options$resize=options.resize,resize=_options$resize===void 0?true:_options$resize;var window=getWindow(state.elements.popper);var scrollParents=[].concat(state.scrollParents.reference,state.scrollParents.popper);if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.addEventListener('scroll',instance.update,passive);});}if(resize){window.addEventListener('resize',instance.update,passive);}return function(){if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.removeEventListener('scroll',instance.update,passive);});}if(resize){window.removeEventListener('resize',instance.update,passive);}};}// eslint-disable-next-line import/no-unused-modules
var eventListeners={name:'eventListeners',enabled:true,phase:'write',fn:function fn(){},effect:effect,data:{}};var hash$1={left:'right',right:'left',bottom:'top',top:'bottom'};function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,function(matched){return hash$1[matched];});}var hash={start:'end',end:'start'};function getOppositeVariationPlacement(placement){return placement.replace(/start|end/g,function(matched){return hash[matched];});}function getWindowScroll(node){var win=getWindow(node);var scrollLeft=win.pageXOffset;var scrollTop=win.pageYOffset;return{scrollLeft:scrollLeft,scrollTop:scrollTop};}function getWindowScrollBarX(element){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return getBoundingClientRect(getDocumentElement(element)).left+getWindowScroll(element).scrollLeft;}function getViewportRect(element){var win=getWindow(element);var html=getDocumentElement(element);var visualViewport=win.visualViewport;var width=html.clientWidth;var height=html.clientHeight;var x=0;var y=0;// NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
// can be obscured underneath it.
// Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
// if it isn't open, so if this isn't available, the popper will be detected
// to overflow the bottom of the screen too early.
if(visualViewport){width=visualViewport.width;height=visualViewport.height;// Uses Layout Viewport (like Chrome; Safari does not currently)
// In Chrome, it returns a value very close to 0 (+/-) but contains rounding
// errors due to floating point numbers, so we need to check precision.
// Safari returns a number <= 0, usually < -1 when pinch-zoomed
// Feature detection fails in mobile emulation mode in Chrome.
// Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
// 0.001
// Fallback here: "Not Safari" userAgent
if(!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){x=visualViewport.offsetLeft;y=visualViewport.offsetTop;}}return{width:width,height:height,x:x+getWindowScrollBarX(element),y:y};}// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element){var _element$ownerDocumen;var html=getDocumentElement(element);var winScroll=getWindowScroll(element);var body=(_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body;var width=max(html.scrollWidth,html.clientWidth,body?body.scrollWidth:0,body?body.clientWidth:0);var height=max(html.scrollHeight,html.clientHeight,body?body.scrollHeight:0,body?body.clientHeight:0);var x=-winScroll.scrollLeft+getWindowScrollBarX(element);var y=-winScroll.scrollTop;if(getComputedStyle$2(body||html).direction==='rtl'){x+=max(html.clientWidth,body?body.clientWidth:0)-width;}return{width:width,height:height,x:x,y:y};}function isScrollParent(element){// Firefox wants us to check `-x` and `-y` variations as well
var _getComputedStyle=getComputedStyle$2(element),overflow=_getComputedStyle.overflow,overflowX=_getComputedStyle.overflowX,overflowY=_getComputedStyle.overflowY;return /auto|scroll|overlay|hidden/.test(overflow+overflowY+overflowX);}function getScrollParent(node){if(['html','body','#document'].indexOf(getNodeName(node))>=0){// $FlowFixMe[incompatible-return]: assume body is always available
return node.ownerDocument.body;}if(isHTMLElement(node)&&isScrollParent(node)){return node;}return getScrollParent(getParentNode(node));}/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/function listScrollParents(element,list){var _element$ownerDocumen;if(list===void 0){list=[];}var scrollParent=getScrollParent(element);var isBody=scrollParent===((_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body);var win=getWindow(scrollParent);var target=isBody?[win].concat(win.visualViewport||[],isScrollParent(scrollParent)?scrollParent:[]):scrollParent;var updatedList=list.concat(target);return isBody?updatedList:// $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
updatedList.concat(listScrollParents(getParentNode(target)));}function rectToClientRect(rect){return Object.assign({},rect,{left:rect.x,top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height});}function getInnerBoundingClientRect(element){var rect=getBoundingClientRect(element);rect.top=rect.top+element.clientTop;rect.left=rect.left+element.clientLeft;rect.bottom=rect.top+element.clientHeight;rect.right=rect.left+element.clientWidth;rect.width=element.clientWidth;rect.height=element.clientHeight;rect.x=rect.left;rect.y=rect.top;return rect;}function getClientRectFromMixedType(element,clippingParent){return clippingParent===viewport?rectToClientRect(getViewportRect(element)):isElement(clippingParent)?getInnerBoundingClientRect(clippingParent):rectToClientRect(getDocumentRect(getDocumentElement(element)));}// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element){var clippingParents=listScrollParents(getParentNode(element));var canEscapeClipping=['absolute','fixed'].indexOf(getComputedStyle$2(element).position)>=0;var clipperElement=canEscapeClipping&&isHTMLElement(element)?getOffsetParent(element):element;if(!isElement(clipperElement)){return[];}// $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
return clippingParents.filter(function(clippingParent){return isElement(clippingParent)&&contains(clippingParent,clipperElement)&&getNodeName(clippingParent)!=='body';});}// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function getClippingRect(element,boundary,rootBoundary){var mainClippingParents=boundary==='clippingParents'?getClippingParents(element):[].concat(boundary);var clippingParents=[].concat(mainClippingParents,[rootBoundary]);var firstClippingParent=clippingParents[0];var clippingRect=clippingParents.reduce(function(accRect,clippingParent){var rect=getClientRectFromMixedType(element,clippingParent);accRect.top=max(rect.top,accRect.top);accRect.right=min(rect.right,accRect.right);accRect.bottom=min(rect.bottom,accRect.bottom);accRect.left=max(rect.left,accRect.left);return accRect;},getClientRectFromMixedType(element,firstClippingParent));clippingRect.width=clippingRect.right-clippingRect.left;clippingRect.height=clippingRect.bottom-clippingRect.top;clippingRect.x=clippingRect.left;clippingRect.y=clippingRect.top;return clippingRect;}function computeOffsets(_ref){var reference=_ref.reference,element=_ref.element,placement=_ref.placement;var basePlacement=placement?getBasePlacement(placement):null;var variation=placement?getVariation(placement):null;var commonX=reference.x+reference.width/2-element.width/2;var commonY=reference.y+reference.height/2-element.height/2;var offsets;switch(basePlacement){case top:offsets={x:commonX,y:reference.y-element.height};break;case bottom:offsets={x:commonX,y:reference.y+reference.height};break;case right:offsets={x:reference.x+reference.width,y:commonY};break;case left:offsets={x:reference.x-element.width,y:commonY};break;default:offsets={x:reference.x,y:reference.y};}var mainAxis=basePlacement?getMainAxisFromPlacement(basePlacement):null;if(mainAxis!=null){var len=mainAxis==='y'?'height':'width';switch(variation){case start:offsets[mainAxis]=offsets[mainAxis]-(reference[len]/2-element[len]/2);break;case end:offsets[mainAxis]=offsets[mainAxis]+(reference[len]/2-element[len]/2);break;}}return offsets;}function detectOverflow(state,options){if(options===void 0){options={};}var _options=options,_options$placement=_options.placement,placement=_options$placement===void 0?state.placement:_options$placement,_options$boundary=_options.boundary,boundary=_options$boundary===void 0?clippingParents:_options$boundary,_options$rootBoundary=_options.rootBoundary,rootBoundary=_options$rootBoundary===void 0?viewport:_options$rootBoundary,_options$elementConte=_options.elementContext,elementContext=_options$elementConte===void 0?popper:_options$elementConte,_options$altBoundary=_options.altBoundary,altBoundary=_options$altBoundary===void 0?false:_options$altBoundary,_options$padding=_options.padding,padding=_options$padding===void 0?0:_options$padding;var paddingObject=mergePaddingObject(typeof padding!=='number'?padding:expandToHashMap(padding,basePlacements));var altContext=elementContext===popper?reference:popper;var popperRect=state.rects.popper;var element=state.elements[altBoundary?altContext:elementContext];var clippingClientRect=getClippingRect(isElement(element)?element:element.contextElement||getDocumentElement(state.elements.popper),boundary,rootBoundary);var referenceClientRect=getBoundingClientRect(state.elements.reference);var popperOffsets=computeOffsets({reference:referenceClientRect,element:popperRect,strategy:'absolute',placement:placement});var popperClientRect=rectToClientRect(Object.assign({},popperRect,popperOffsets));var elementClientRect=elementContext===popper?popperClientRect:referenceClientRect;// positive = overflowing the clipping rect
// 0 or negative = within the clipping rect
var overflowOffsets={top:clippingClientRect.top-elementClientRect.top+paddingObject.top,bottom:elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom,left:clippingClientRect.left-elementClientRect.left+paddingObject.left,right:elementClientRect.right-clippingClientRect.right+paddingObject.right};var offsetData=state.modifiersData.offset;// Offsets can be applied only to the popper element
if(elementContext===popper&&offsetData){var offset=offsetData[placement];Object.keys(overflowOffsets).forEach(function(key){var multiply=[right,bottom].indexOf(key)>=0?1:-1;var axis=[top,bottom].indexOf(key)>=0?'y':'x';overflowOffsets[key]+=offset[axis]*multiply;});}return overflowOffsets;}function computeAutoPlacement(state,options){if(options===void 0){options={};}var _options=options,placement=_options.placement,boundary=_options.boundary,rootBoundary=_options.rootBoundary,padding=_options.padding,flipVariations=_options.flipVariations,_options$allowedAutoP=_options.allowedAutoPlacements,allowedAutoPlacements=_options$allowedAutoP===void 0?placements:_options$allowedAutoP;var variation=getVariation(placement);var placements$1=variation?flipVariations?variationPlacements:variationPlacements.filter(function(placement){return getVariation(placement)===variation;}):basePlacements;var allowedPlacements=placements$1.filter(function(placement){return allowedAutoPlacements.indexOf(placement)>=0;});if(allowedPlacements.length===0){allowedPlacements=placements$1;if(process.env.NODE_ENV!=="production"){console.error(['Popper: The `allowedAutoPlacements` option did not allow any','placements. Ensure the `placement` option matches the variation','of the allowed placements.','For example, "auto" cannot be used to allow "bottom-start".','Use "auto-start" instead.'].join(' '));}}// $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
var overflows=allowedPlacements.reduce(function(acc,placement){acc[placement]=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding})[getBasePlacement(placement)];return acc;},{});return Object.keys(overflows).sort(function(a,b){return overflows[a]-overflows[b];});}function getExpandedFallbackPlacements(placement){if(getBasePlacement(placement)===auto){return[];}var oppositePlacement=getOppositePlacement(placement);return[getOppositeVariationPlacement(placement),oppositePlacement,getOppositeVariationPlacement(oppositePlacement)];}function flip(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;if(state.modifiersData[name]._skip){return;}var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?true:_options$altAxis,specifiedFallbackPlacements=options.fallbackPlacements,padding=options.padding,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,_options$flipVariatio=options.flipVariations,flipVariations=_options$flipVariatio===void 0?true:_options$flipVariatio,allowedAutoPlacements=options.allowedAutoPlacements;var preferredPlacement=state.options.placement;var basePlacement=getBasePlacement(preferredPlacement);var isBasePlacement=basePlacement===preferredPlacement;var fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipVariations?[getOppositePlacement(preferredPlacement)]:getExpandedFallbackPlacements(preferredPlacement));var placements=[preferredPlacement].concat(fallbackPlacements).reduce(function(acc,placement){return acc.concat(getBasePlacement(placement)===auto?computeAutoPlacement(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding,flipVariations:flipVariations,allowedAutoPlacements:allowedAutoPlacements}):placement);},[]);var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var checksMap=new Map();var makeFallbackChecks=true;var firstFittingPlacement=placements[0];for(var i=0;i<placements.length;i++){var placement=placements[i];var _basePlacement=getBasePlacement(placement);var isStartVariation=getVariation(placement)===start;var isVertical=[top,bottom].indexOf(_basePlacement)>=0;var len=isVertical?'width':'height';var overflow=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,altBoundary:altBoundary,padding:padding});var mainVariationSide=isVertical?isStartVariation?right:left:isStartVariation?bottom:top;if(referenceRect[len]>popperRect[len]){mainVariationSide=getOppositePlacement(mainVariationSide);}var altVariationSide=getOppositePlacement(mainVariationSide);var checks=[];if(checkMainAxis){checks.push(overflow[_basePlacement]<=0);}if(checkAltAxis){checks.push(overflow[mainVariationSide]<=0,overflow[altVariationSide]<=0);}if(checks.every(function(check){return check;})){firstFittingPlacement=placement;makeFallbackChecks=false;break;}checksMap.set(placement,checks);}if(makeFallbackChecks){// `2` may be desired in some cases – research later
var numberOfChecks=flipVariations?3:1;var _loop=function _loop(_i){var fittingPlacement=placements.find(function(placement){var checks=checksMap.get(placement);if(checks){return checks.slice(0,_i).every(function(check){return check;});}});if(fittingPlacement){firstFittingPlacement=fittingPlacement;return"break";}};for(var _i=numberOfChecks;_i>0;_i--){var _ret=_loop(_i);if(_ret==="break")break;}}if(state.placement!==firstFittingPlacement){state.modifiersData[name]._skip=true;state.placement=firstFittingPlacement;state.reset=true;}}// eslint-disable-next-line import/no-unused-modules
var flip$1={name:'flip',enabled:true,phase:'main',fn:flip,requiresIfExists:['offset'],data:{_skip:false}};function getSideOffsets(overflow,rect,preventedOffsets){if(preventedOffsets===void 0){preventedOffsets={x:0,y:0};}return{top:overflow.top-rect.height-preventedOffsets.y,right:overflow.right-rect.width+preventedOffsets.x,bottom:overflow.bottom-rect.height+preventedOffsets.y,left:overflow.left-rect.width-preventedOffsets.x};}function isAnySideFullyClipped(overflow){return[top,right,bottom,left].some(function(side){return overflow[side]>=0;});}function hide(_ref){var state=_ref.state,name=_ref.name;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var preventedOffsets=state.modifiersData.preventOverflow;var referenceOverflow=detectOverflow(state,{elementContext:'reference'});var popperAltOverflow=detectOverflow(state,{altBoundary:true});var referenceClippingOffsets=getSideOffsets(referenceOverflow,referenceRect);var popperEscapeOffsets=getSideOffsets(popperAltOverflow,popperRect,preventedOffsets);var isReferenceHidden=isAnySideFullyClipped(referenceClippingOffsets);var hasPopperEscaped=isAnySideFullyClipped(popperEscapeOffsets);state.modifiersData[name]={referenceClippingOffsets:referenceClippingOffsets,popperEscapeOffsets:popperEscapeOffsets,isReferenceHidden:isReferenceHidden,hasPopperEscaped:hasPopperEscaped};state.attributes.popper=Object.assign({},state.attributes.popper,{'data-popper-reference-hidden':isReferenceHidden,'data-popper-escaped':hasPopperEscaped});}// eslint-disable-next-line import/no-unused-modules
var hide$1={name:'hide',enabled:true,phase:'main',requiresIfExists:['preventOverflow'],fn:hide};function distanceAndSkiddingToXY(placement,rects,offset){var basePlacement=getBasePlacement(placement);var invertDistance=[left,top].indexOf(basePlacement)>=0?-1:1;var _ref=typeof offset==='function'?offset(Object.assign({},rects,{placement:placement})):offset,skidding=_ref[0],distance=_ref[1];skidding=skidding||0;distance=(distance||0)*invertDistance;return[left,right].indexOf(basePlacement)>=0?{x:distance,y:skidding}:{x:skidding,y:distance};}function offset(_ref2){var state=_ref2.state,options=_ref2.options,name=_ref2.name;var _options$offset=options.offset,offset=_options$offset===void 0?[0,0]:_options$offset;var data=placements.reduce(function(acc,placement){acc[placement]=distanceAndSkiddingToXY(placement,state.rects,offset);return acc;},{});var _data$state$placement=data[state.placement],x=_data$state$placement.x,y=_data$state$placement.y;if(state.modifiersData.popperOffsets!=null){state.modifiersData.popperOffsets.x+=x;state.modifiersData.popperOffsets.y+=y;}state.modifiersData[name]=data;}// eslint-disable-next-line import/no-unused-modules
var offset$1={name:'offset',enabled:true,phase:'main',requires:['popperOffsets'],fn:offset};function popperOffsets(_ref){var state=_ref.state,name=_ref.name;// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
state.modifiersData[name]=computeOffsets({reference:state.rects.reference,element:state.rects.popper,strategy:'absolute',placement:state.placement});}// eslint-disable-next-line import/no-unused-modules
var popperOffsets$1={name:'popperOffsets',enabled:true,phase:'read',fn:popperOffsets,data:{}};function getAltAxis(axis){return axis==='x'?'y':'x';}function preventOverflow(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?false:_options$altAxis,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,padding=options.padding,_options$tether=options.tether,tether=_options$tether===void 0?true:_options$tether,_options$tetherOffset=options.tetherOffset,tetherOffset=_options$tetherOffset===void 0?0:_options$tetherOffset;var overflow=detectOverflow(state,{boundary:boundary,rootBoundary:rootBoundary,padding:padding,altBoundary:altBoundary});var basePlacement=getBasePlacement(state.placement);var variation=getVariation(state.placement);var isBasePlacement=!variation;var mainAxis=getMainAxisFromPlacement(basePlacement);var altAxis=getAltAxis(mainAxis);var popperOffsets=state.modifiersData.popperOffsets;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var tetherOffsetValue=typeof tetherOffset==='function'?tetherOffset(Object.assign({},state.rects,{placement:state.placement})):tetherOffset;var normalizedTetherOffsetValue=typeof tetherOffsetValue==='number'?{mainAxis:tetherOffsetValue,altAxis:tetherOffsetValue}:Object.assign({mainAxis:0,altAxis:0},tetherOffsetValue);var offsetModifierState=state.modifiersData.offset?state.modifiersData.offset[state.placement]:null;var data={x:0,y:0};if(!popperOffsets){return;}if(checkMainAxis){var _offsetModifierState$;var mainSide=mainAxis==='y'?top:left;var altSide=mainAxis==='y'?bottom:right;var len=mainAxis==='y'?'height':'width';var offset=popperOffsets[mainAxis];var min$1=offset+overflow[mainSide];var max$1=offset-overflow[altSide];var additive=tether?-popperRect[len]/2:0;var minLen=variation===start?referenceRect[len]:popperRect[len];var maxLen=variation===start?-popperRect[len]:-referenceRect[len];// We need to include the arrow in the calculation so the arrow doesn't go
// outside the reference bounds
var arrowElement=state.elements.arrow;var arrowRect=tether&&arrowElement?getLayoutRect(arrowElement):{width:0,height:0};var arrowPaddingObject=state.modifiersData['arrow#persistent']?state.modifiersData['arrow#persistent'].padding:getFreshSideObject();var arrowPaddingMin=arrowPaddingObject[mainSide];var arrowPaddingMax=arrowPaddingObject[altSide];// If the reference length is smaller than the arrow length, we don't want
// to include its full size in the calculation. If the reference is small
// and near the edge of a boundary, the popper can overflow even if the
// reference is not overflowing as well (e.g. virtual elements with no
// width or height)
var arrowLen=within(0,referenceRect[len],arrowRect[len]);var minOffset=isBasePlacement?referenceRect[len]/2-additive-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis:minLen-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis;var maxOffset=isBasePlacement?-referenceRect[len]/2+additive+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis:maxLen+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis;var arrowOffsetParent=state.elements.arrow&&getOffsetParent(state.elements.arrow);var clientOffset=arrowOffsetParent?mainAxis==='y'?arrowOffsetParent.clientTop||0:arrowOffsetParent.clientLeft||0:0;var offsetModifierValue=(_offsetModifierState$=offsetModifierState==null?void 0:offsetModifierState[mainAxis])!=null?_offsetModifierState$:0;var tetherMin=offset+minOffset-offsetModifierValue-clientOffset;var tetherMax=offset+maxOffset-offsetModifierValue;var preventedOffset=within(tether?min(min$1,tetherMin):min$1,offset,tether?max(max$1,tetherMax):max$1);popperOffsets[mainAxis]=preventedOffset;data[mainAxis]=preventedOffset-offset;}if(checkAltAxis){var _offsetModifierState$2;var _mainSide=mainAxis==='x'?top:left;var _altSide=mainAxis==='x'?bottom:right;var _offset=popperOffsets[altAxis];var _len=altAxis==='y'?'height':'width';var _min=_offset+overflow[_mainSide];var _max=_offset-overflow[_altSide];var isOriginSide=[top,left].indexOf(basePlacement)!==-1;var _offsetModifierValue=(_offsetModifierState$2=offsetModifierState==null?void 0:offsetModifierState[altAxis])!=null?_offsetModifierState$2:0;var _tetherMin=isOriginSide?_min:_offset-referenceRect[_len]-popperRect[_len]-_offsetModifierValue+normalizedTetherOffsetValue.altAxis;var _tetherMax=isOriginSide?_offset+referenceRect[_len]+popperRect[_len]-_offsetModifierValue-normalizedTetherOffsetValue.altAxis:_max;var _preventedOffset=tether&&isOriginSide?withinMaxClamp(_tetherMin,_offset,_tetherMax):within(tether?_tetherMin:_min,_offset,tether?_tetherMax:_max);popperOffsets[altAxis]=_preventedOffset;data[altAxis]=_preventedOffset-_offset;}state.modifiersData[name]=data;}// eslint-disable-next-line import/no-unused-modules
var preventOverflow$1={name:'preventOverflow',enabled:true,phase:'main',fn:preventOverflow,requiresIfExists:['offset']};function getHTMLElementScroll(element){return{scrollLeft:element.scrollLeft,scrollTop:element.scrollTop};}function getNodeScroll(node){if(node===getWindow(node)||!isHTMLElement(node)){return getWindowScroll(node);}else{return getHTMLElementScroll(node);}}function isElementScaled(element){var rect=element.getBoundingClientRect();var scaleX=round(rect.width)/element.offsetWidth||1;var scaleY=round(rect.height)/element.offsetHeight||1;return scaleX!==1||scaleY!==1;}// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
function getCompositeRect(elementOrVirtualElement,offsetParent,isFixed){if(isFixed===void 0){isFixed=false;}var isOffsetParentAnElement=isHTMLElement(offsetParent);var offsetParentIsScaled=isHTMLElement(offsetParent)&&isElementScaled(offsetParent);var documentElement=getDocumentElement(offsetParent);var rect=getBoundingClientRect(elementOrVirtualElement,offsetParentIsScaled);var scroll={scrollLeft:0,scrollTop:0};var offsets={x:0,y:0};if(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed){if(getNodeName(offsetParent)!=='body'||// https://github.com/popperjs/popper-core/issues/1078
isScrollParent(documentElement)){scroll=getNodeScroll(offsetParent);}if(isHTMLElement(offsetParent)){offsets=getBoundingClientRect(offsetParent,true);offsets.x+=offsetParent.clientLeft;offsets.y+=offsetParent.clientTop;}else if(documentElement){offsets.x=getWindowScrollBarX(documentElement);}}return{x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height};}function order(modifiers){var map=new Map();var visited=new Set();var result=[];modifiers.forEach(function(modifier){map.set(modifier.name,modifier);});// On visiting object, check for its dependencies and visit them recursively
function sort(modifier){visited.add(modifier.name);var requires=[].concat(modifier.requires||[],modifier.requiresIfExists||[]);requires.forEach(function(dep){if(!visited.has(dep)){var depModifier=map.get(dep);if(depModifier){sort(depModifier);}}});result.push(modifier);}modifiers.forEach(function(modifier){if(!visited.has(modifier.name)){// check for visited object
sort(modifier);}});return result;}function orderModifiers(modifiers){// order based on dependencies
var orderedModifiers=order(modifiers);// order based on phase
return modifierPhases.reduce(function(acc,phase){return acc.concat(orderedModifiers.filter(function(modifier){return modifier.phase===phase;}));},[]);}function debounce(fn){var pending;return function(){if(!pending){pending=new Promise(function(resolve){Promise.resolve().then(function(){pending=undefined;resolve(fn());});});}return pending;};}function format(str){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}return[].concat(args).reduce(function(p,c){return p.replace(/%s/,c);},str);}var INVALID_MODIFIER_ERROR='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';var MISSING_DEPENDENCY_ERROR='Popper: modifier "%s" requires "%s", but "%s" modifier is not available';var VALID_PROPERTIES=['name','enabled','phase','fn','effect','requires','options'];function validateModifiers(modifiers){modifiers.forEach(function(modifier){[].concat(Object.keys(modifier),VALID_PROPERTIES)// IE11-compatible replacement for `new Set(iterable)`
.filter(function(value,index,self){return self.indexOf(value)===index;}).forEach(function(key){switch(key){case'name':if(typeof modifier.name!=='string'){console.error(format(INVALID_MODIFIER_ERROR,String(modifier.name),'"name"','"string"',"\""+String(modifier.name)+"\""));}break;case'enabled':if(typeof modifier.enabled!=='boolean'){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"enabled"','"boolean"',"\""+String(modifier.enabled)+"\""));}break;case'phase':if(modifierPhases.indexOf(modifier.phase)<0){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"phase"',"either "+modifierPhases.join(', '),"\""+String(modifier.phase)+"\""));}break;case'fn':if(typeof modifier.fn!=='function'){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"fn"','"function"',"\""+String(modifier.fn)+"\""));}break;case'effect':if(modifier.effect!=null&&typeof modifier.effect!=='function'){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"effect"','"function"',"\""+String(modifier.fn)+"\""));}break;case'requires':if(modifier.requires!=null&&!Array.isArray(modifier.requires)){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"requires"','"array"',"\""+String(modifier.requires)+"\""));}break;case'requiresIfExists':if(!Array.isArray(modifier.requiresIfExists)){console.error(format(INVALID_MODIFIER_ERROR,modifier.name,'"requiresIfExists"','"array"',"\""+String(modifier.requiresIfExists)+"\""));}break;case'options':case'data':break;default:console.error("PopperJS: an invalid property has been provided to the \""+modifier.name+"\" modifier, valid properties are "+VALID_PROPERTIES.map(function(s){return"\""+s+"\"";}).join(', ')+"; but \""+key+"\" was provided.");}modifier.requires&&modifier.requires.forEach(function(requirement){if(modifiers.find(function(mod){return mod.name===requirement;})==null){console.error(format(MISSING_DEPENDENCY_ERROR,String(modifier.name),requirement,requirement));}});});});}function uniqueBy(arr,fn){var identifiers=new Set();return arr.filter(function(item){var identifier=fn(item);if(!identifiers.has(identifier)){identifiers.add(identifier);return true;}});}function mergeByName(modifiers){var merged=modifiers.reduce(function(merged,current){var existing=merged[current.name];merged[current.name]=existing?Object.assign({},existing,current,{options:Object.assign({},existing.options,current.options),data:Object.assign({},existing.data,current.data)}):current;return merged;},{});// IE11 does not support Object.values
return Object.keys(merged).map(function(key){return merged[key];});}var INVALID_ELEMENT_ERROR='Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';var INFINITE_LOOP_ERROR='Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';var DEFAULT_OPTIONS={placement:'bottom',modifiers:[],strategy:'absolute'};function areValidElements(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return!args.some(function(element){return!(element&&typeof element.getBoundingClientRect==='function');});}function popperGenerator(generatorOptions){if(generatorOptions===void 0){generatorOptions={};}var _generatorOptions=generatorOptions,_generatorOptions$def=_generatorOptions.defaultModifiers,defaultModifiers=_generatorOptions$def===void 0?[]:_generatorOptions$def,_generatorOptions$def2=_generatorOptions.defaultOptions,defaultOptions=_generatorOptions$def2===void 0?DEFAULT_OPTIONS:_generatorOptions$def2;return function createPopper(reference,popper,options){if(options===void 0){options=defaultOptions;}var state={placement:'bottom',orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,defaultOptions),modifiersData:{},elements:{reference:reference,popper:popper},attributes:{},styles:{}};var effectCleanupFns=[];var isDestroyed=false;var instance={state:state,setOptions:function setOptions(setOptionsAction){var options=typeof setOptionsAction==='function'?setOptionsAction(state.options):setOptionsAction;cleanupModifierEffects();state.options=Object.assign({},defaultOptions,state.options,options);state.scrollParents={reference:isElement(reference)?listScrollParents(reference):reference.contextElement?listScrollParents(reference.contextElement):[],popper:listScrollParents(popper)};// Orders the modifiers based on their dependencies and `phase`
// properties
var orderedModifiers=orderModifiers(mergeByName([].concat(defaultModifiers,state.options.modifiers)));// Strip out disabled modifiers
state.orderedModifiers=orderedModifiers.filter(function(m){return m.enabled;});// Validate the provided modifiers so that the consumer will get warned
// if one of the modifiers is invalid for any reason
if(process.env.NODE_ENV!=="production"){var modifiers=uniqueBy([].concat(orderedModifiers,state.options.modifiers),function(_ref){var name=_ref.name;return name;});validateModifiers(modifiers);if(getBasePlacement(state.options.placement)===auto){var flipModifier=state.orderedModifiers.find(function(_ref2){var name=_ref2.name;return name==='flip';});if(!flipModifier){console.error(['Popper: "auto" placements require the "flip" modifier be','present and enabled to work.'].join(' '));}}var _getComputedStyle=getComputedStyle$2(popper),marginTop=_getComputedStyle.marginTop,marginRight=_getComputedStyle.marginRight,marginBottom=_getComputedStyle.marginBottom,marginLeft=_getComputedStyle.marginLeft;// We no longer take into account `margins` on the popper, and it can
// cause bugs with positioning, so we'll warn the consumer
if([marginTop,marginRight,marginBottom,marginLeft].some(function(margin){return parseFloat(margin);})){console.warn(['Popper: CSS "margin" styles cannot be used to apply padding','between the popper and its reference element or boundary.','To replicate margin, use the `offset` modifier, as well as','the `padding` option in the `preventOverflow` and `flip`','modifiers.'].join(' '));}}runModifierEffects();return instance.update();},// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function forceUpdate(){if(isDestroyed){return;}var _state$elements=state.elements,reference=_state$elements.reference,popper=_state$elements.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(!areValidElements(reference,popper)){if(process.env.NODE_ENV!=="production"){console.error(INVALID_ELEMENT_ERROR);}return;}// Store the reference and popper rects to be read by modifiers
state.rects={reference:getCompositeRect(reference,getOffsetParent(popper),state.options.strategy==='fixed'),popper:getLayoutRect(popper)};// Modifiers have the ability to reset the current update cycle. The
// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
state.reset=false;state.placement=state.options.placement;// On each update cycle, the `modifiersData` property for each modifier
// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
state.orderedModifiers.forEach(function(modifier){return state.modifiersData[modifier.name]=Object.assign({},modifier.data);});var __debug_loops__=0;for(var index=0;index<state.orderedModifiers.length;index++){if(process.env.NODE_ENV!=="production"){__debug_loops__+=1;if(__debug_loops__>100){console.error(INFINITE_LOOP_ERROR);break;}}if(state.reset===true){state.reset=false;index=-1;continue;}var _state$orderedModifie=state.orderedModifiers[index],fn=_state$orderedModifie.fn,_state$orderedModifie2=_state$orderedModifie.options,_options=_state$orderedModifie2===void 0?{}:_state$orderedModifie2,name=_state$orderedModifie.name;if(typeof fn==='function'){state=fn({state:state,options:_options,name:name,instance:instance})||state;}}},// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:debounce(function(){return new Promise(function(resolve){instance.forceUpdate();resolve(state);});}),destroy:function destroy(){cleanupModifierEffects();isDestroyed=true;}};if(!areValidElements(reference,popper)){if(process.env.NODE_ENV!=="production"){console.error(INVALID_ELEMENT_ERROR);}return instance;}instance.setOptions(options).then(function(state){if(!isDestroyed&&options.onFirstUpdate){options.onFirstUpdate(state);}});// Modifiers have the ability to execute arbitrary code before the first
// update cycle runs. They will be executed in the same order as the update
// cycle. This is useful when a modifier adds some persistent data that
// other modifiers need to use, but the modifier is run after the dependent
// one.
function runModifierEffects(){state.orderedModifiers.forEach(function(_ref3){var name=_ref3.name,_ref3$options=_ref3.options,options=_ref3$options===void 0?{}:_ref3$options,effect=_ref3.effect;if(typeof effect==='function'){var cleanupFn=effect({state:state,name:name,instance:instance,options:options});var noopFn=function noopFn(){};effectCleanupFns.push(cleanupFn||noopFn);}});}function cleanupModifierEffects(){effectCleanupFns.forEach(function(fn){return fn();});effectCleanupFns=[];}return instance;};}var defaultModifiers=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1,offset$1,flip$1,preventOverflow$1,arrow$1,hide$1];var createPopper=/*#__PURE__*/popperGenerator({defaultModifiers:defaultModifiers});// eslint-disable-next-line import/no-unused-modules
/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */var hasElementType=typeof Element!=='undefined';var hasMap=typeof Map==='function';var hasSet=typeof Set==='function';var hasArrayBuffer=typeof ArrayBuffer==='function'&&!!ArrayBuffer.isView;// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js
function equal(a,b){// START: fast-deep-equal es6/index.js 3.1.1
if(a===b)return true;if(a&&b&&typeof a=='object'&&typeof b=='object'){if(a.constructor!==b.constructor)return false;var length,i,keys;if(Array.isArray(a)){length=a.length;if(length!=b.length)return false;for(i=length;i--!==0;)if(!equal(a[i],b[i]))return false;return true;}// START: Modifications:
// 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
//    to co-exist with es5.
// 2. Replace `for of` with es5 compliant iteration using `for`.
//    Basically, take:
//
//    ```js
//    for (i of a.entries())
//      if (!b.has(i[0])) return false;
//    ```
//
//    ... and convert to:
//
//    ```js
//    it = a.entries();
//    while (!(i = it.next()).done)
//      if (!b.has(i.value[0])) return false;
//    ```
//
//    **Note**: `i` access switches to `i.value`.
var it;if(hasMap&&a instanceof Map&&b instanceof Map){if(a.size!==b.size)return false;it=a.entries();while(!(i=it.next()).done)if(!b.has(i.value[0]))return false;it=a.entries();while(!(i=it.next()).done)if(!equal(i.value[1],b.get(i.value[0])))return false;return true;}if(hasSet&&a instanceof Set&&b instanceof Set){if(a.size!==b.size)return false;it=a.entries();while(!(i=it.next()).done)if(!b.has(i.value[0]))return false;return true;}// END: Modifications
if(hasArrayBuffer&&ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){length=a.length;if(length!=b.length)return false;for(i=length;i--!==0;)if(a[i]!==b[i])return false;return true;}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();keys=Object.keys(a);length=keys.length;if(length!==Object.keys(b).length)return false;for(i=length;i--!==0;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return false;// END: fast-deep-equal
// START: react-fast-compare
// custom handling for DOM elements
if(hasElementType&&a instanceof Element)return false;// custom handling for React/Preact
for(i=length;i--!==0;){if((keys[i]==='_owner'||keys[i]==='__v'||keys[i]==='__o')&&a.$$typeof){// React-specific: avoid traversing React elements' _owner
// Preact-specific: avoid traversing Preact elements' __v and __o
//    __v = $_original / $_vnode
//    __o = $_owner
// These properties contain circular references and are not needed when
// comparing the actual elements (and not their owners)
// .$$typeof and ._store on just reasonable markers of elements
continue;}// all other properties should be traversed as usual
if(!equal(a[keys[i]],b[keys[i]]))return false;}// END: react-fast-compare
// START: fast-deep-equal
return true;}return a!==a&&b!==b;}// end fast-deep-equal
var reactFastCompare=function isEqual(a,b){try{return equal(a,b);}catch(error){if((error.message||'').match(/stack|recursion/i)){// warn on circular references, don't crash
// browsers give this different errors name and messages:
// chrome/safari: "RangeError", "Maximum call stack size exceeded"
// firefox: "InternalError", too much recursion"
// edge: "Error", "Out of stack space"
console.warn('react-fast-compare cannot handle circular refs');return false;}// some other error. we should definitely know about these
throw error;}};var EMPTY_MODIFIERS=[];var usePopper=function usePopper(referenceElement,popperElement,options){if(options===void 0){options={};}var prevOptions=React__namespace.useRef(null);var optionsWithDefaults={onFirstUpdate:options.onFirstUpdate,placement:options.placement||'bottom',strategy:options.strategy||'absolute',modifiers:options.modifiers||EMPTY_MODIFIERS};var _React$useState=React__namespace.useState({styles:{popper:{position:optionsWithDefaults.strategy,left:'0',top:'0'},arrow:{position:'absolute'}},attributes:{}}),state=_React$useState[0],setState=_React$useState[1];var updateStateModifier=React__namespace.useMemo(function(){return{name:'updateState',enabled:true,phase:'write',fn:function fn(_ref){var state=_ref.state;var elements=Object.keys(state.elements);ReactDOM__namespace.flushSync(function(){setState({styles:fromEntries(elements.map(function(element){return[element,state.styles[element]||{}];})),attributes:fromEntries(elements.map(function(element){return[element,state.attributes[element]];}))});});},requires:['computeStyles']};},[]);var popperOptions=React__namespace.useMemo(function(){var newOptions={onFirstUpdate:optionsWithDefaults.onFirstUpdate,placement:optionsWithDefaults.placement,strategy:optionsWithDefaults.strategy,modifiers:[].concat(optionsWithDefaults.modifiers,[updateStateModifier,{name:'applyStyles',enabled:false}])};if(reactFastCompare(prevOptions.current,newOptions)){return prevOptions.current||newOptions;}else{prevOptions.current=newOptions;return newOptions;}},[optionsWithDefaults.onFirstUpdate,optionsWithDefaults.placement,optionsWithDefaults.strategy,optionsWithDefaults.modifiers,updateStateModifier]);var popperInstanceRef=React__namespace.useRef();useIsomorphicLayoutEffect(function(){if(popperInstanceRef.current){popperInstanceRef.current.setOptions(popperOptions);}},[popperOptions]);useIsomorphicLayoutEffect(function(){if(referenceElement==null||popperElement==null){return;}var createPopper$1=options.createPopper||createPopper;var popperInstance=createPopper$1(referenceElement,popperElement,popperOptions);popperInstanceRef.current=popperInstance;return function(){popperInstance.destroy();popperInstanceRef.current=null;};},[referenceElement,popperElement,options.createPopper]);return{state:popperInstanceRef.current?popperInstanceRef.current.state:null,styles:state.styles,attributes:state.attributes,update:popperInstanceRef.current?popperInstanceRef.current.update:null,forceUpdate:popperInstanceRef.current?popperInstanceRef.current.forceUpdate:null};};/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */process.env.NODE_ENV!=='production';function _extends$7(){_extends$7=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$7.apply(this,arguments);}function _objectWithoutPropertiesLoose$5(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */function hasClass(element,className){if(element.classList)return!!className&&element.classList.contains(className);return(" "+(element.className.baseVal||element.className)+" ").indexOf(" "+className+" ")!==-1;}/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */function addClass(element,className){if(element.classList)element.classList.add(className);else if(!hasClass(element,className))if(typeof element.className==='string')element.className=element.className+" "+className;else element.setAttribute('class',(element.className&&element.className.baseVal||'')+" "+className);}function replaceClassName(origClass,classToRemove){return origClass.replace(new RegExp("(^|\\s)"+classToRemove+"(?:\\s|$)",'g'),'$1').replace(/\s+/g,' ').replace(/^\s*|\s*$/g,'');}/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */function removeClass$1(element,className){if(element.classList){element.classList.remove(className);}else if(typeof element.className==='string'){element.className=replaceClassName(element.className,className);}else{element.setAttribute('class',replaceClassName(element.className&&element.className.baseVal||'',className));}}var config={disabled:false};var timeoutsShape=process.env.NODE_ENV!=='production'?propTypes.exports.oneOfType([propTypes.exports.number,propTypes.exports.shape({enter:propTypes.exports.number,exit:propTypes.exports.number,appear:propTypes.exports.number}).isRequired]):null;var classNamesShape=process.env.NODE_ENV!=='production'?propTypes.exports.oneOfType([propTypes.exports.string,propTypes.exports.shape({enter:propTypes.exports.string,exit:propTypes.exports.string,active:propTypes.exports.string}),propTypes.exports.shape({enter:propTypes.exports.string,enterDone:propTypes.exports.string,enterActive:propTypes.exports.string,exit:propTypes.exports.string,exitDone:propTypes.exports.string,exitActive:propTypes.exports.string})]):null;var TransitionGroupContext=React__default["default"].createContext(null);var UNMOUNTED='unmounted';var EXITED='exited';var ENTERING='entering';var ENTERED='entered';var EXITING='exiting';/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */var Transition=/*#__PURE__*/function(_React$Component){_inheritsLoose(Transition,_React$Component);function Transition(props,context){var _this;_this=_React$Component.call(this,props,context)||this;var parentGroup=context;// In the context of a TransitionGroup all enters are really appears
var appear=parentGroup&&!parentGroup.isMounting?props.enter:props.appear;var initialStatus;_this.appearStatus=null;if(props.in){if(appear){initialStatus=EXITED;_this.appearStatus=ENTERING;}else{initialStatus=ENTERED;}}else{if(props.unmountOnExit||props.mountOnEnter){initialStatus=UNMOUNTED;}else{initialStatus=EXITED;}}_this.state={status:initialStatus};_this.nextCallback=null;return _this;}Transition.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){var nextIn=_ref.in;if(nextIn&&prevState.status===UNMOUNTED){return{status:EXITED};}return null;}// getSnapshotBeforeUpdate(prevProps) {
//   let nextStatus = null
//   if (prevProps !== this.props) {
//     const { status } = this.state
//     if (this.props.in) {
//       if (status !== ENTERING && status !== ENTERED) {
//         nextStatus = ENTERING
//       }
//     } else {
//       if (status === ENTERING || status === ENTERED) {
//         nextStatus = EXITING
//       }
//     }
//   }
//   return { nextStatus }
// }
;var _proto=Transition.prototype;_proto.componentDidMount=function componentDidMount(){this.updateStatus(true,this.appearStatus);};_proto.componentDidUpdate=function componentDidUpdate(prevProps){var nextStatus=null;if(prevProps!==this.props){var status=this.state.status;if(this.props.in){if(status!==ENTERING&&status!==ENTERED){nextStatus=ENTERING;}}else{if(status===ENTERING||status===ENTERED){nextStatus=EXITING;}}}this.updateStatus(false,nextStatus);};_proto.componentWillUnmount=function componentWillUnmount(){this.cancelNextCallback();};_proto.getTimeouts=function getTimeouts(){var timeout=this.props.timeout;var exit,enter,appear;exit=enter=appear=timeout;if(timeout!=null&&typeof timeout!=='number'){exit=timeout.exit;enter=timeout.enter;// TODO: remove fallback for next major
appear=timeout.appear!==undefined?timeout.appear:enter;}return{exit:exit,enter:enter,appear:appear};};_proto.updateStatus=function updateStatus(mounting,nextStatus){if(mounting===void 0){mounting=false;}if(nextStatus!==null){// nextStatus will always be ENTERING or EXITING.
this.cancelNextCallback();if(nextStatus===ENTERING){this.performEnter(mounting);}else{this.performExit();}}else if(this.props.unmountOnExit&&this.state.status===EXITED){this.setState({status:UNMOUNTED});}};_proto.performEnter=function performEnter(mounting){var _this2=this;var enter=this.props.enter;var appearing=this.context?this.context.isMounting:mounting;var _ref2=this.props.nodeRef?[appearing]:[ReactDOM__default["default"].findDOMNode(this),appearing],maybeNode=_ref2[0],maybeAppearing=_ref2[1];var timeouts=this.getTimeouts();var enterTimeout=appearing?timeouts.appear:timeouts.enter;// no enter animation skip right to ENTERED
// if we are mounting and running this it means appear _must_ be set
if(!mounting&&!enter||config.disabled){this.safeSetState({status:ENTERED},function(){_this2.props.onEntered(maybeNode);});return;}this.props.onEnter(maybeNode,maybeAppearing);this.safeSetState({status:ENTERING},function(){_this2.props.onEntering(maybeNode,maybeAppearing);_this2.onTransitionEnd(enterTimeout,function(){_this2.safeSetState({status:ENTERED},function(){_this2.props.onEntered(maybeNode,maybeAppearing);});});});};_proto.performExit=function performExit(){var _this3=this;var exit=this.props.exit;var timeouts=this.getTimeouts();var maybeNode=this.props.nodeRef?undefined:ReactDOM__default["default"].findDOMNode(this);// no exit animation skip right to EXITED
if(!exit||config.disabled){this.safeSetState({status:EXITED},function(){_this3.props.onExited(maybeNode);});return;}this.props.onExit(maybeNode);this.safeSetState({status:EXITING},function(){_this3.props.onExiting(maybeNode);_this3.onTransitionEnd(timeouts.exit,function(){_this3.safeSetState({status:EXITED},function(){_this3.props.onExited(maybeNode);});});});};_proto.cancelNextCallback=function cancelNextCallback(){if(this.nextCallback!==null){this.nextCallback.cancel();this.nextCallback=null;}};_proto.safeSetState=function safeSetState(nextState,callback){// This shouldn't be necessary, but there are weird race conditions with
// setState callbacks and unmounting in testing, so always make sure that
// we can cancel any pending setState callbacks after we unmount.
callback=this.setNextCallback(callback);this.setState(nextState,callback);};_proto.setNextCallback=function setNextCallback(callback){var _this4=this;var active=true;this.nextCallback=function(event){if(active){active=false;_this4.nextCallback=null;callback(event);}};this.nextCallback.cancel=function(){active=false;};return this.nextCallback;};_proto.onTransitionEnd=function onTransitionEnd(timeout,handler){this.setNextCallback(handler);var node=this.props.nodeRef?this.props.nodeRef.current:ReactDOM__default["default"].findDOMNode(this);var doesNotHaveTimeoutOrListener=timeout==null&&!this.props.addEndListener;if(!node||doesNotHaveTimeoutOrListener){setTimeout(this.nextCallback,0);return;}if(this.props.addEndListener){var _ref3=this.props.nodeRef?[this.nextCallback]:[node,this.nextCallback],maybeNode=_ref3[0],maybeNextCallback=_ref3[1];this.props.addEndListener(maybeNode,maybeNextCallback);}if(timeout!=null){setTimeout(this.nextCallback,timeout);}};_proto.render=function render(){var status=this.state.status;if(status===UNMOUNTED){return null;}var _this$props=this.props,children=_this$props.children;_this$props.in;_this$props.mountOnEnter;_this$props.unmountOnExit;_this$props.appear;_this$props.enter;_this$props.exit;_this$props.timeout;_this$props.addEndListener;_this$props.onEnter;_this$props.onEntering;_this$props.onEntered;_this$props.onExit;_this$props.onExiting;_this$props.onExited;_this$props.nodeRef;var childProps=_objectWithoutPropertiesLoose$5(_this$props,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return/*#__PURE__*/ (// allows for nested Transitions
React__default["default"].createElement(TransitionGroupContext.Provider,{value:null},typeof children==='function'?children(status,childProps):React__default["default"].cloneElement(React__default["default"].Children.only(children),childProps)));};return Transition;}(React__default["default"].Component);Transition.contextType=TransitionGroupContext;Transition.propTypes=process.env.NODE_ENV!=="production"?{/**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */nodeRef:propTypes.exports.shape({current:typeof Element==='undefined'?propTypes.exports.any:function(propValue,key,componentName,location,propFullName,secret){var value=propValue[key];return propTypes.exports.instanceOf(value&&'ownerDocument'in value?value.ownerDocument.defaultView.Element:Element)(propValue,key,componentName,location,propFullName,secret);}}),/**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */children:propTypes.exports.oneOfType([propTypes.exports.func.isRequired,propTypes.exports.element.isRequired]).isRequired,/**
   * Show the component; triggers the enter or exit states
   */in:propTypes.exports.bool,/**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */mountOnEnter:propTypes.exports.bool,/**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */unmountOnExit:propTypes.exports.bool,/**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */appear:propTypes.exports.bool,/**
   * Enable or disable enter transitions.
   */enter:propTypes.exports.bool,/**
   * Enable or disable exit transitions.
   */exit:propTypes.exports.bool,/**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */timeout:function timeout(props){var pt=timeoutsShape;if(!props.addEndListener)pt=pt.isRequired;for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}return pt.apply(void 0,[props].concat(args));},/**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */addEndListener:propTypes.exports.func,/**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */onEnter:propTypes.exports.func,/**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */onEntering:propTypes.exports.func,/**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */onEntered:propTypes.exports.func,/**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */onExit:propTypes.exports.func,/**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */onExiting:propTypes.exports.func,/**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */onExited:propTypes.exports.func}:{};// Name the function so it is clearer in the documentation
function noop(){}Transition.defaultProps={in:false,mountOnEnter:false,unmountOnExit:false,appear:false,enter:true,exit:true,onEnter:noop,onEntering:noop,onEntered:noop,onExit:noop,onExiting:noop,onExited:noop};Transition.UNMOUNTED=UNMOUNTED;Transition.EXITED=EXITED;Transition.ENTERING=ENTERING;Transition.ENTERED=ENTERED;Transition.EXITING=EXITING;var _addClass=function addClass$1(node,classes){return node&&classes&&classes.split(' ').forEach(function(c){return addClass(node,c);});};var removeClass=function removeClass(node,classes){return node&&classes&&classes.split(' ').forEach(function(c){return removeClass$1(node,c);});};/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */var CSSTransition=/*#__PURE__*/function(_React$Component){_inheritsLoose(CSSTransition,_React$Component);function CSSTransition(){var _this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this;_this.appliedClasses={appear:{},enter:{},exit:{}};_this.onEnter=function(maybeNode,maybeAppearing){var _this$resolveArgument=_this.resolveArguments(maybeNode,maybeAppearing),node=_this$resolveArgument[0],appearing=_this$resolveArgument[1];_this.removeClasses(node,'exit');_this.addClass(node,appearing?'appear':'enter','base');if(_this.props.onEnter){_this.props.onEnter(maybeNode,maybeAppearing);}};_this.onEntering=function(maybeNode,maybeAppearing){var _this$resolveArgument2=_this.resolveArguments(maybeNode,maybeAppearing),node=_this$resolveArgument2[0],appearing=_this$resolveArgument2[1];var type=appearing?'appear':'enter';_this.addClass(node,type,'active');if(_this.props.onEntering){_this.props.onEntering(maybeNode,maybeAppearing);}};_this.onEntered=function(maybeNode,maybeAppearing){var _this$resolveArgument3=_this.resolveArguments(maybeNode,maybeAppearing),node=_this$resolveArgument3[0],appearing=_this$resolveArgument3[1];var type=appearing?'appear':'enter';_this.removeClasses(node,type);_this.addClass(node,type,'done');if(_this.props.onEntered){_this.props.onEntered(maybeNode,maybeAppearing);}};_this.onExit=function(maybeNode){var _this$resolveArgument4=_this.resolveArguments(maybeNode),node=_this$resolveArgument4[0];_this.removeClasses(node,'appear');_this.removeClasses(node,'enter');_this.addClass(node,'exit','base');if(_this.props.onExit){_this.props.onExit(maybeNode);}};_this.onExiting=function(maybeNode){var _this$resolveArgument5=_this.resolveArguments(maybeNode),node=_this$resolveArgument5[0];_this.addClass(node,'exit','active');if(_this.props.onExiting){_this.props.onExiting(maybeNode);}};_this.onExited=function(maybeNode){var _this$resolveArgument6=_this.resolveArguments(maybeNode),node=_this$resolveArgument6[0];_this.removeClasses(node,'exit');_this.addClass(node,'exit','done');if(_this.props.onExited){_this.props.onExited(maybeNode);}};_this.resolveArguments=function(maybeNode,maybeAppearing){return _this.props.nodeRef?[_this.props.nodeRef.current,maybeNode]// here `maybeNode` is actually `appearing`
:[maybeNode,maybeAppearing];};_this.getClassNames=function(type){var classNames=_this.props.classNames;var isStringClassNames=typeof classNames==='string';var prefix=isStringClassNames&&classNames?classNames+"-":'';var baseClassName=isStringClassNames?""+prefix+type:classNames[type];var activeClassName=isStringClassNames?baseClassName+"-active":classNames[type+"Active"];var doneClassName=isStringClassNames?baseClassName+"-done":classNames[type+"Done"];return{baseClassName:baseClassName,activeClassName:activeClassName,doneClassName:doneClassName};};return _this;}var _proto=CSSTransition.prototype;_proto.addClass=function addClass(node,type,phase){var className=this.getClassNames(type)[phase+"ClassName"];var _this$getClassNames=this.getClassNames('enter'),doneClassName=_this$getClassNames.doneClassName;if(type==='appear'&&phase==='done'&&doneClassName){className+=" "+doneClassName;}// This is to force a repaint,
// which is necessary in order to transition styles when adding a class name.
if(phase==='active'){/* eslint-disable no-unused-expressions */node&&node.scrollTop;}if(className){this.appliedClasses[type][phase]=className;_addClass(node,className);}};_proto.removeClasses=function removeClasses(node,type){var _this$appliedClasses$=this.appliedClasses[type],baseClassName=_this$appliedClasses$.base,activeClassName=_this$appliedClasses$.active,doneClassName=_this$appliedClasses$.done;this.appliedClasses[type]={};if(baseClassName){removeClass(node,baseClassName);}if(activeClassName){removeClass(node,activeClassName);}if(doneClassName){removeClass(node,doneClassName);}};_proto.render=function render(){var _this$props=this.props;_this$props.classNames;var props=_objectWithoutPropertiesLoose$5(_this$props,["classNames"]);return/*#__PURE__*/React__default["default"].createElement(Transition,_extends$7({},props,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}));};return CSSTransition;}(React__default["default"].Component);CSSTransition.defaultProps={classNames:''};CSSTransition.propTypes=process.env.NODE_ENV!=="production"?_extends$7({},Transition.propTypes,{/**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */classNames:classNamesShape,/**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */onEnter:propTypes.exports.func,/**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */onEntering:propTypes.exports.func,/**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */onEntered:propTypes.exports.func,/**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */onExit:propTypes.exports.func,/**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */onExiting:propTypes.exports.func,/**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */onExited:propTypes.exports.func}):{};function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */function getChildMapping(children,mapFn){var mapper=function mapper(child){return mapFn&&React.isValidElement(child)?mapFn(child):child;};var result=Object.create(null);if(children)React.Children.map(children,function(c){return c;}).forEach(function(child){// run the map function here instead so that the key is the computed one
result[child.key]=mapper(child);});return result;}/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */function mergeChildMappings(prev,next){prev=prev||{};next=next||{};function getValueForKey(key){return key in next?next[key]:prev[key];}// For each key of `next`, the list of keys to insert before that key in
// the combined list
var nextKeysPending=Object.create(null);var pendingKeys=[];for(var prevKey in prev){if(prevKey in next){if(pendingKeys.length){nextKeysPending[prevKey]=pendingKeys;pendingKeys=[];}}else{pendingKeys.push(prevKey);}}var i;var childMapping={};for(var nextKey in next){if(nextKeysPending[nextKey]){for(i=0;i<nextKeysPending[nextKey].length;i++){var pendingNextKey=nextKeysPending[nextKey][i];childMapping[nextKeysPending[nextKey][i]]=getValueForKey(pendingNextKey);}}childMapping[nextKey]=getValueForKey(nextKey);}// Finally, add the keys which didn't appear before any key in `next`
for(i=0;i<pendingKeys.length;i++){childMapping[pendingKeys[i]]=getValueForKey(pendingKeys[i]);}return childMapping;}function getProp(child,prop,props){return props[prop]!=null?props[prop]:child.props[prop];}function getInitialChildMapping(props,onExited){return getChildMapping(props.children,function(child){return React.cloneElement(child,{onExited:onExited.bind(null,child),in:true,appear:getProp(child,'appear',props),enter:getProp(child,'enter',props),exit:getProp(child,'exit',props)});});}function getNextChildMapping(nextProps,prevChildMapping,onExited){var nextChildMapping=getChildMapping(nextProps.children);var children=mergeChildMappings(prevChildMapping,nextChildMapping);Object.keys(children).forEach(function(key){var child=children[key];if(!React.isValidElement(child))return;var hasPrev=(key in prevChildMapping);var hasNext=(key in nextChildMapping);var prevChild=prevChildMapping[key];var isLeaving=React.isValidElement(prevChild)&&!prevChild.props.in;// item is new (entering)
if(hasNext&&(!hasPrev||isLeaving)){// console.log('entering', key)
children[key]=React.cloneElement(child,{onExited:onExited.bind(null,child),in:true,exit:getProp(child,'exit',nextProps),enter:getProp(child,'enter',nextProps)});}else if(!hasNext&&hasPrev&&!isLeaving){// item is old (exiting)
// console.log('leaving', key)
children[key]=React.cloneElement(child,{in:false});}else if(hasNext&&hasPrev&&React.isValidElement(prevChild)){// item hasn't changed transition states
// copy over the last transition props;
// console.log('unchanged', key)
children[key]=React.cloneElement(child,{onExited:onExited.bind(null,child),in:prevChild.props.in,exit:getProp(child,'exit',nextProps),enter:getProp(child,'enter',nextProps)});}});return children;}var values=Object.values||function(obj){return Object.keys(obj).map(function(k){return obj[k];});};var defaultProps={component:'div',childFactory:function childFactory(child){return child;}};/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */var TransitionGroup=/*#__PURE__*/function(_React$Component){_inheritsLoose(TransitionGroup,_React$Component);function TransitionGroup(props,context){var _this;_this=_React$Component.call(this,props,context)||this;var handleExited=_this.handleExited.bind(_assertThisInitialized(_this));// Initial children should all be entering, dependent on appear
_this.state={contextValue:{isMounting:true},handleExited:handleExited,firstRender:true};return _this;}var _proto=TransitionGroup.prototype;_proto.componentDidMount=function componentDidMount(){this.mounted=true;this.setState({contextValue:{isMounting:false}});};_proto.componentWillUnmount=function componentWillUnmount(){this.mounted=false;};TransitionGroup.getDerivedStateFromProps=function getDerivedStateFromProps(nextProps,_ref){var prevChildMapping=_ref.children,handleExited=_ref.handleExited,firstRender=_ref.firstRender;return{children:firstRender?getInitialChildMapping(nextProps,handleExited):getNextChildMapping(nextProps,prevChildMapping,handleExited),firstRender:false};}// node is `undefined` when user provided `nodeRef` prop
;_proto.handleExited=function handleExited(child,node){var currentChildMapping=getChildMapping(this.props.children);if(child.key in currentChildMapping)return;if(child.props.onExited){child.props.onExited(node);}if(this.mounted){this.setState(function(state){var children=_extends$7({},state.children);delete children[child.key];return{children:children};});}};_proto.render=function render(){var _this$props=this.props,Component=_this$props.component,childFactory=_this$props.childFactory,props=_objectWithoutPropertiesLoose$5(_this$props,["component","childFactory"]);var contextValue=this.state.contextValue;var children=values(this.state.children).map(childFactory);delete props.appear;delete props.enter;delete props.exit;if(Component===null){return/*#__PURE__*/React__default["default"].createElement(TransitionGroupContext.Provider,{value:contextValue},children);}return/*#__PURE__*/React__default["default"].createElement(TransitionGroupContext.Provider,{value:contextValue},/*#__PURE__*/React__default["default"].createElement(Component,props,children));};return TransitionGroup;}(React__default["default"].Component);TransitionGroup.propTypes=process.env.NODE_ENV!=="production"?{/**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */component:propTypes.exports.any,/**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */children:propTypes.exports.node,/**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */appear:propTypes.exports.bool,/**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */enter:propTypes.exports.bool,/**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */exit:propTypes.exports.bool,/**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */childFactory:propTypes.exports.func}:{};TransitionGroup.defaultProps=defaultProps;/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */var ReplaceTransition=/*#__PURE__*/function(_React$Component){_inheritsLoose(ReplaceTransition,_React$Component);function ReplaceTransition(){var _this;for(var _len=arguments.length,_args=new Array(_len),_key=0;_key<_len;_key++){_args[_key]=arguments[_key];}_this=_React$Component.call.apply(_React$Component,[this].concat(_args))||this;_this.handleEnter=function(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return _this.handleLifecycle('onEnter',0,args);};_this.handleEntering=function(){for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}return _this.handleLifecycle('onEntering',0,args);};_this.handleEntered=function(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}return _this.handleLifecycle('onEntered',0,args);};_this.handleExit=function(){for(var _len5=arguments.length,args=new Array(_len5),_key5=0;_key5<_len5;_key5++){args[_key5]=arguments[_key5];}return _this.handleLifecycle('onExit',1,args);};_this.handleExiting=function(){for(var _len6=arguments.length,args=new Array(_len6),_key6=0;_key6<_len6;_key6++){args[_key6]=arguments[_key6];}return _this.handleLifecycle('onExiting',1,args);};_this.handleExited=function(){for(var _len7=arguments.length,args=new Array(_len7),_key7=0;_key7<_len7;_key7++){args[_key7]=arguments[_key7];}return _this.handleLifecycle('onExited',1,args);};return _this;}var _proto=ReplaceTransition.prototype;_proto.handleLifecycle=function handleLifecycle(handler,idx,originalArgs){var _child$props;var children=this.props.children;var child=React__default["default"].Children.toArray(children)[idx];if(child.props[handler])(_child$props=child.props)[handler].apply(_child$props,originalArgs);if(this.props[handler]){var maybeNode=child.props.nodeRef?undefined:ReactDOM__default["default"].findDOMNode(this);this.props[handler](maybeNode);}};_proto.render=function render(){var _this$props=this.props,children=_this$props.children,inProp=_this$props.in,props=_objectWithoutPropertiesLoose$5(_this$props,["children","in"]);var _React$Children$toArr=React__default["default"].Children.toArray(children),first=_React$Children$toArr[0],second=_React$Children$toArr[1];delete props.onEnter;delete props.onEntering;delete props.onEntered;delete props.onExit;delete props.onExiting;delete props.onExited;return/*#__PURE__*/React__default["default"].createElement(TransitionGroup,props,inProp?React__default["default"].cloneElement(first,{key:'first',onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):React__default["default"].cloneElement(second,{key:'second',onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}));};return ReplaceTransition;}(React__default["default"].Component);ReplaceTransition.propTypes=process.env.NODE_ENV!=="production"?{in:propTypes.exports.bool.isRequired,children:function children(props,propName){if(React__default["default"].Children.count(props[propName])!==2)return new Error("\""+propName+"\" must be exactly two transition components.");return null;}}:{};var _leaveRenders,_enterRenders;function areChildrenDifferent(oldChildren,newChildren){if(oldChildren===newChildren)return false;if(React__default["default"].isValidElement(oldChildren)&&React__default["default"].isValidElement(newChildren)&&oldChildren.key!=null&&oldChildren.key===newChildren.key){return false;}return true;}/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */var modes={out:'out-in',in:'in-out'};var callHook=function callHook(element,name,cb){return function(){var _element$props;element.props[name]&&(_element$props=element.props)[name].apply(_element$props,arguments);cb();};};var leaveRenders=(_leaveRenders={},_leaveRenders[modes.out]=function(_ref){var current=_ref.current,changeState=_ref.changeState;return React__default["default"].cloneElement(current,{in:false,onExited:callHook(current,'onExited',function(){changeState(ENTERING,null);})});},_leaveRenders[modes.in]=function(_ref2){var current=_ref2.current,changeState=_ref2.changeState,children=_ref2.children;return[current,React__default["default"].cloneElement(children,{in:true,onEntered:callHook(children,'onEntered',function(){changeState(ENTERING);})})];},_leaveRenders);var enterRenders=(_enterRenders={},_enterRenders[modes.out]=function(_ref3){var children=_ref3.children,changeState=_ref3.changeState;return React__default["default"].cloneElement(children,{in:true,onEntered:callHook(children,'onEntered',function(){changeState(ENTERED,React__default["default"].cloneElement(children,{in:true}));})});},_enterRenders[modes.in]=function(_ref4){var current=_ref4.current,children=_ref4.children,changeState=_ref4.changeState;return[React__default["default"].cloneElement(current,{in:false,onExited:callHook(current,'onExited',function(){changeState(ENTERED,React__default["default"].cloneElement(children,{in:true}));})}),React__default["default"].cloneElement(children,{in:true})];},_enterRenders);/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */var SwitchTransition=/*#__PURE__*/function(_React$Component){_inheritsLoose(SwitchTransition,_React$Component);function SwitchTransition(){var _this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this;_this.state={status:ENTERED,current:null};_this.appeared=false;_this.changeState=function(status,current){if(current===void 0){current=_this.state.current;}_this.setState({status:status,current:current});};return _this;}var _proto=SwitchTransition.prototype;_proto.componentDidMount=function componentDidMount(){this.appeared=true;};SwitchTransition.getDerivedStateFromProps=function getDerivedStateFromProps(props,state){if(props.children==null){return{current:null};}if(state.status===ENTERING&&props.mode===modes.in){return{status:ENTERING};}if(state.current&&areChildrenDifferent(state.current,props.children)){return{status:EXITING};}return{current:React__default["default"].cloneElement(props.children,{in:true})};};_proto.render=function render(){var _this$props=this.props,children=_this$props.children,mode=_this$props.mode,_this$state=this.state,status=_this$state.status,current=_this$state.current;var data={children:children,current:current,changeState:this.changeState,status:status};var component;switch(status){case ENTERING:component=enterRenders[mode](data);break;case EXITING:component=leaveRenders[mode](data);break;case ENTERED:component=current;}return/*#__PURE__*/React__default["default"].createElement(TransitionGroupContext.Provider,{value:{isMounting:!this.appeared}},component);};return SwitchTransition;}(React__default["default"].Component);SwitchTransition.propTypes=process.env.NODE_ENV!=="production"?{/**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */mode:propTypes.exports.oneOf([modes.in,modes.out]),/**
   * Any `Transition` or `CSSTransition` component.
   */children:propTypes.exports.oneOfType([propTypes.exports.element.isRequired])}:{};SwitchTransition.defaultProps={mode:modes.out};/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */function ownKeys$1(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread2$1(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys$1(Object(source),!0).forEach(function(key){_defineProperty$1(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys$1(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty$1(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _extends$2$1(){_extends$2$1=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$2$1.apply(this,arguments);}function _objectWithoutPropertiesLoose$4(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _objectWithoutProperties$2(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose$4(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _slicedToArray$1(arr,i){return _arrayWithHoles$1(arr)||_iterableToArrayLimit$1(arr,i)||_unsupportedIterableToArray$1(arr,i)||_nonIterableRest$1();}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray$1(arr)||_nonIterableSpread();}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray$1(arr);}function _arrayWithHoles$1(arr){if(Array.isArray(arr))return arr;}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _iterableToArrayLimit$1(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _unsupportedIterableToArray$1(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray$1(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray$1(o,minLen);}function _arrayLikeToArray$1(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _nonIterableRest$1(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function isDocument(element){return'nodeType'in element&&element.nodeType===document.DOCUMENT_NODE;}function isWindow(node){if('window'in node&&node.window===node)return node;if(isDocument(node))return node.defaultView||false;return false;}function ownerDocument(node){return node&&node.ownerDocument||document;}function ownerWindow(node){var doc=ownerDocument(node);return doc&&doc.defaultView||window;}function getComputedStyle$1(node,psuedoElement){return ownerWindow(node).getComputedStyle(node,psuedoElement);}var rUpper=/([A-Z])/g;function hyphenate(string){return string.replace(rUpper,'-$1').toLowerCase();}var msPattern=/^ms-/;function hyphenateStyleName(string){return hyphenate(string).replace(msPattern,'-ms-');}var supportedTransforms=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function isTransform(value){return!!(value&&supportedTransforms.test(value));}function style(node,property){var css='';var transforms='';if(typeof property==='string'){return node.style.getPropertyValue(hyphenateStyleName(property))||getComputedStyle$1(node).getPropertyValue(hyphenateStyleName(property));}Object.keys(property).forEach(function(key){var value=property[key];if(!value&&value!==0){node.style.removeProperty(hyphenateStyleName(key));}else if(isTransform(key)){transforms+=key+"("+value+") ";}else{css+=hyphenateStyleName(key)+": "+value+";";}});if(transforms){css+="transform: "+transforms+";";}node.style.cssText+=";"+css;}var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);var size;function scrollbarSize(recalc){if(!size&&size!==0||recalc){if(canUseDOM){var scrollDiv=document.createElement('div');scrollDiv.style.position='absolute';scrollDiv.style.top='-9999px';scrollDiv.style.width='50px';scrollDiv.style.height='50px';scrollDiv.style.overflow='scroll';document.body.appendChild(scrollDiv);size=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);}}return size;}var COMPONENT_ID$j='modals.backdrop';var animationName$1=styled.keyframes(["0%{opacity:0;}100%{opacity:1;}"]);var StyledBackdrop=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$j,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledBackdrop",componentId:"sc-mzdjpo-0"})(["display:flex;position:fixed;top:0;right:0;bottom:0;left:0;align-items:",";justify-content:",";z-index:400;background-color:",";overflow:auto;-webkit-overflow-scrolling:touch;font-family:",";direction:",";animation:",";",";"],function(props){return props.isCentered&&'center';},function(props){return props.isCentered&&'center';},function(props){return getColor('neutralHue',800,props.theme,0.85);},function(props){return props.theme.fonts.system;},function(props){return props.theme.rtl&&'rtl';},function(props){return props.isAnimated&&styled.css([""," 0.15s ease-in"],animationName$1);},function(props){return retrieveComponentStyles(COMPONENT_ID$j,props);});StyledBackdrop.defaultProps={theme:DEFAULT_THEME};StyledBackdrop.propTypes={isCentered:propTypes.exports.bool,isAnimated:propTypes.exports.bool};var COMPONENT_ID$i='modals.body';var StyledBody=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$i,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledBody",componentId:"sc-14rzecg-0"})(["display:block;margin:0;padding:",";height:100%;overflow:auto;line-height:",";color:",";font-size:",";",";"],function(props){return"".concat(props.theme.space.base*5,"px ").concat(props.theme.space.base*10,"px");},function(props){return getLineHeight(props.theme.lineHeights.md,props.theme.fontSizes.md);},function(props){return props.theme.colors.foreground;},function(props){return props.theme.fontSizes.md;},function(props){return retrieveComponentStyles(COMPONENT_ID$i,props);});StyledBody.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$h='modals.close';var colorStyles$1=function colorStyles(props){var backgroundColor='primaryHue';var foregroundColor='neutralHue';return styled.css(["background-color:transparent;color:",";&:hover{background-color:",";color:",";}&[data-garden-focus-visible]{box-shadow:",";}&:active{transition:background-color 0.1s ease-in-out,color 0.1s ease-in-out;background-color:",";color:",";}"],getColor(foregroundColor,600,props.theme),getColor(backgroundColor,600,props.theme,0.08),getColor(foregroundColor,700,props.theme),props.theme.shadows.md(getColor(backgroundColor,600,props.theme,0.35)),getColor(backgroundColor,600,props.theme,0.2),getColor(foregroundColor,800,props.theme));};var BASE_MULTIPLIERS$1={top:2.5,side:6.5,size:10};var StyledClose=styled__default["default"].button.attrs({'data-garden-id':COMPONENT_ID$h,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledClose",componentId:"sc-iseudj-0"})(["display:block;position:absolute;top:","px;",":",";transition:box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out;border:none;border-radius:50%;background-color:transparent;cursor:pointer;padding:0;width:","px;height:","px;overflow:hidden;text-decoration:none;font-size:0;user-select:none;&::-moz-focus-inner{border:0;}&:focus{outline:none;}"," & > svg{vertical-align:middle;}",";"],function(props){return props.theme.space.base*BASE_MULTIPLIERS$1.top;},function(props){return props.theme.rtl?'left':'right';},function(props){return"".concat(props.theme.space.base*BASE_MULTIPLIERS$1.side,"px");},function(props){return props.theme.space.base*BASE_MULTIPLIERS$1.size;},function(props){return props.theme.space.base*BASE_MULTIPLIERS$1.size;},function(props){return colorStyles$1(props);},function(props){return retrieveComponentStyles(COMPONENT_ID$h,props);});StyledClose.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$g='modals.footer';var StyledFooter=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$g,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledFooter",componentId:"sc-d8pfdu-0"})(["display:flex;flex-shrink:0;align-items:center;justify-content:flex-end;border-top:",";padding:",";",";"],function(props){return props.isLarge&&"".concat(props.theme.borders.sm," ").concat(getColor('neutralHue',200,props.theme));},function(props){return props.isLarge?"".concat(props.theme.space.base*8,"px ").concat(props.theme.space.base*10,"px"):"".concat(props.theme.space.base*5,"px ").concat(props.theme.space.base*10,"px ").concat(props.theme.space.base*8,"px");},function(props){return retrieveComponentStyles(COMPONENT_ID$g,props);});StyledFooter.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$f='modals.footer_item';var StyledFooterItem=styled__default["default"].span.attrs({'data-garden-id':COMPONENT_ID$f,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledFooterItem",componentId:"sc-1mb76hl-0"})(["display:flex;margin-",":","px;min-width:0;&:first-child{margin-",":0;}",";"],function(props){return props.theme.rtl?'right':'left';},function(props){return props.theme.space.base*5;},function(props){return props.theme.rtl?'right':'left';},function(props){return retrieveComponentStyles(COMPONENT_ID$f,props);});StyledFooterItem.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$e='modals.header';var StyledHeader=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$e,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledHeader",componentId:"sc-1787r9v-0"})(["display:block;position:",";margin:0;border-bottom:"," ",";padding:",";","  line-height:",";color:",";font-size:",";font-weight:",";",";"],function(props){return props.isDanger&&'relative';},function(props){return props.theme.borders.sm;},getColor('neutralHue',200),function(props){return"".concat(props.theme.space.base*5,"px ").concat(props.theme.space.base*10,"px");},function(props){return props.isCloseButtonPresent&&"padding-".concat(props.theme.rtl?'left':'right',": ").concat(props.theme.space.base*(BASE_MULTIPLIERS$1.size+BASE_MULTIPLIERS$1.side+2),"px;");},function(props){return getLineHeight(props.theme.lineHeights.md,props.theme.fontSizes.md);},function(props){return props.isDanger?getColor('dangerHue',600,props.theme):props.theme.colors.foreground;},function(props){return props.theme.fontSizes.md;},function(props){return props.theme.fontWeights.semibold;},function(props){return retrieveComponentStyles(COMPONENT_ID$e,props);});StyledHeader.defaultProps={theme:DEFAULT_THEME};var _g,_circle;function _extends$1$1(){_extends$1$1=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$1$1.apply(this,arguments);}var SvgAlertErrorStroke=function SvgAlertErrorStroke(props){return/*#__PURE__*/React__namespace.createElement("svg",_extends$1$1({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_g||(_g=/*#__PURE__*/React__namespace.createElement("g",{fill:"none",stroke:"currentColor"},/*#__PURE__*/React__namespace.createElement("circle",{cx:7.5,cy:8.5,r:7}),/*#__PURE__*/React__namespace.createElement("path",{strokeLinecap:"round",d:"M7.5 4.5V9"}))),_circle||(_circle=/*#__PURE__*/React__namespace.createElement("circle",{cx:7.5,cy:12,r:1,fill:"currentColor"})));};var StyledDangerIcon=styled__default["default"](SvgAlertErrorStroke).withConfig({displayName:"StyledDangerIcon",componentId:"sc-1kwbb39-0"})(["position:absolute;top:","px;",":",";"],function(props){return props.theme.space.base*5.5;},function(props){return props.theme.rtl?'right':'left';},function(props){return"".concat(props.theme.space.base*4,"px");});StyledDangerIcon.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$d='modals.modal';var animationName=styled.keyframes(["0%{transform:scale(0);opacity:0;}50%{transform:scale(1.05);}100%{opacity:1;}"]);var boxShadow$1=function boxShadow(props){var theme=props.theme;var space=theme.space,shadows=theme.shadows;var offsetY="".concat(space.base*5,"px");var blurRadius="".concat(space.base*7,"px");var color=getColor('neutralHue',800,theme,0.35);return shadows.lg(offsetY,blurRadius,color);};var sizeStyles$1$1=function sizeStyles(props){return styled.css(["","{width:",";}"],mediaQuery('up',props.isLarge?'md':'sm',props.theme),props.isLarge?props.theme.breakpoints.md:props.theme.breakpoints.sm);};var StyledModal=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$d,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledModal",componentId:"sc-1pe1axu-0"})(["display:flex;position:fixed;flex-direction:column;margin:",";border-radius:",";box-shadow:",";background-color:",";min-height:60px;max-height:calc(100vh - ","px);animation:",";animation-delay:0.01s;overflow:auto;direction:",";"," &:focus{outline:none;}@media (max-height:399px){top:","px;bottom:auto;margin-bottom:","px;max-height:none;}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){right:",";bottom:",";transform:",";}",";"],function(props){return props.isCentered?'0':"".concat(props.theme.space.base*12,"px");},function(props){return props.theme.borderRadii.md;},boxShadow$1,function(props){return props.theme.colors.background;},function(props){return props.theme.space.base*24;},function(props){return props.isAnimated&&styled.css([""," 0.3s ease-in-out"],animationName);},function(props){return props.theme.rtl&&'rtl';},sizeStyles$1$1,function(props){return props.theme.space.base*6;},function(props){return props.theme.space.base*6;},function(props){return props.isCentered&&'50%';},function(props){return props.isCentered&&'50%';},function(props){return props.isCentered&&'translate(50%, 50%)';},function(props){return retrieveComponentStyles(COMPONENT_ID$d,props);});StyledModal.propTypes={isLarge:propTypes.exports.bool,isAnimated:propTypes.exports.bool};StyledModal.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$c='modals.tooltip_modal.backdrop';var StyledTooltipModalBackdrop=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$c,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledTooltipModalBackdrop",componentId:"sc-1yaomgq-0"})(["position:fixed;top:0;right:0;bottom:0;left:0;z-index:400;overflow:hidden;-webkit-overflow-scrolling:touch;font-family:",";direction:",";&.garden-tooltip-modal-transition-exit-active{pointer-events:none;}&.garden-tooltip-modal-transition-exit-active div{transition:opacity 200ms;opacity:0;}",";"],function(props){return props.theme.fonts.system;},function(props){return props.theme.rtl&&'rtl';},function(props){return retrieveComponentStyles(COMPONENT_ID$c,props);});StyledTooltipModalBackdrop.defaultProps={theme:DEFAULT_THEME};function getPopperPlacement(gardenPlacement){var gardenToPopperMapping={auto:'auto',top:'top','top-start':'top-start','top-end':'top-end',bottom:'bottom','bottom-start':'bottom-start','bottom-end':'bottom-end',end:'right','end-top':'right-start','end-bottom':'right-end',start:'left','start-top':'left-start','start-bottom':'left-end'};return gardenToPopperMapping[gardenPlacement];}function getRtlPopperPlacement(gardenPlacement){var rtlPlacementMappings={left:'right','left-start':'right-start','left-end':'right-end','top-start':'top-end','top-end':'top-start',right:'left','right-start':'left-start','right-end':'left-end','bottom-start':'bottom-end','bottom-end':'bottom-start'};var popperPlacement=getPopperPlacement(gardenPlacement);return rtlPlacementMappings[popperPlacement]||popperPlacement;}function getArrowPosition(popperPlacement){var arrowPositionMappings={top:'bottom','top-start':'bottom-left','top-end':'bottom-right',right:'left','right-start':'left-top','right-end':'left-bottom',bottom:'top','bottom-start':'top-left','bottom-end':'top-right',left:'right','left-start':'right-top','left-end':'right-bottom'};return arrowPositionMappings[popperPlacement]||'top';}function getMenuPosition(popperPlacement){return popperPlacement?popperPlacement.split('-')[0]:'bottom';}var StyledTooltipWrapper=styled__default["default"].div.attrs(function(props){return{className:props.isAnimated&&'is-animated'};}).withConfig({displayName:"StyledTooltipWrapper",componentId:"sc-1xk05kf-0"})(["",";"],function(props){return menuStyles(getMenuPosition(props.placement),{theme:props.theme,hidden:false,margin:'0',zIndex:props.zIndex,animationModifier:'.is-animated'});});StyledTooltipWrapper.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$b='modals.tooltip_modal';var StyledTooltipModal=styled__default["default"].div.attrs(function(props){return{'data-garden-id':COMPONENT_ID$b,'data-garden-version':'8.53.2',className:props.isAnimated&&'is-animated'};}).withConfig({displayName:"StyledTooltipModal",componentId:"sc-42ubfr-0"})(["padding:","px;width:400px;",";",";"],function(props){return props.theme.space.base*5;},function(props){var computedArrowStyles=arrowStyles(getArrowPosition(props.placement),{size:"".concat(props.theme.space.base*2,"px"),inset:'1px',animationModifier:'.is-animated'});if(props.isAnimated){return props.hasArrow&&props.transitionState==='entered'&&computedArrowStyles;}return props.hasArrow&&computedArrowStyles;},function(props){return retrieveComponentStyles(COMPONENT_ID$b,props);});StyledTooltipModal.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$a='modals.tooltip_modal.title';var sizeStyles$2=function sizeStyles(props){return"\n  /* stylelint-disable-next-line property-no-unknown */\n  padding-".concat(props.theme.rtl?'left':'right',": ").concat(props.theme.space.base*8,"px;\n  line-height: ").concat(getLineHeight(props.theme.lineHeights.md,props.theme.fontSizes.md),";\n  font-size: ").concat(props.theme.fontSizes.md,";\n");};var StyledTooltipModalTitle=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$a,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledTooltipModalTitle",componentId:"sc-11xjgjs-0"})(["margin:0;color:",";font-weight:",";",";",";"],function(props){return props.theme.colors.foreground;},function(props){return props.theme.fontWeights.semibold;},function(props){return sizeStyles$2(props);},function(props){return retrieveComponentStyles(COMPONENT_ID$a,props);});StyledTooltipModalTitle.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$9='modals.tooltip_modal.body';var StyledTooltipModalBody=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$9,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledTooltipModalBody",componentId:"sc-195dkzj-0"})(["display:block;margin:0;padding-top:","px;line-height:",";color:",";font-size:",";",";"],function(props){return props.theme.space.base*1.5;},function(props){return getLineHeight(props.theme.lineHeights.md,props.theme.fontSizes.md);},function(props){return props.theme.colors.foreground;},function(props){return props.theme.fontSizes.md;},function(props){return retrieveComponentStyles(COMPONENT_ID$9,props);});StyledTooltipModalBody.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$8='modals.tooltip_modal.footer';var StyledTooltipModalFooter=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$8,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledTooltipModalFooter",componentId:"sc-fm36a9-0"})(["display:flex;flex-shrink:0;align-items:center;justify-content:flex-end;padding-top:","px;",";"],function(p){return p.theme.space.base*5;},function(props){return retrieveComponentStyles(COMPONENT_ID$8,props);});StyledTooltipModalFooter.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$7='modals.tooltip_modal.footer_item';var StyledTooltipModalFooterItem=styled__default["default"](StyledFooterItem).attrs({'data-garden-id':COMPONENT_ID$7,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledTooltipModalFooterItem",componentId:"sc-1nahj6p-0"})(["",";"],function(props){return retrieveComponentStyles(COMPONENT_ID$7,props);});StyledTooltipModalFooterItem.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$6$1='modals.tooltip_modal.close';var StyledTooltipModalClose=styled__default["default"](StyledClose).attrs({'data-garden-id':COMPONENT_ID$6$1,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledTooltipModalClose",componentId:"sc-1h2ke3q-0"})(["top:","px;",":",";width:","px;height:","px;",";"],function(props){return props.theme.space.base*3.5;},function(props){return props.theme.rtl?'left':'right';},function(props){return"".concat(props.theme.space.base*3,"px");},function(props){return props.theme.space.base*8;},function(props){return props.theme.space.base*8;},function(props){return retrieveComponentStyles(COMPONENT_ID$6$1,props);});StyledTooltipModalClose.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$5$2='modals.drawer_modal';var DRAWER_WIDTH=380;var boxShadow=function boxShadow(props){var theme=props.theme;var space=theme.space,shadows=theme.shadows;var offsetY="".concat(space.base*5,"px");var blurRadius="".concat(space.base*7,"px");var color=getColor('neutralHue',800,theme,0.35);return shadows.lg(offsetY,blurRadius,color);};var StyledDrawerModal=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$5$2,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledDrawerModal",componentId:"sc-i1sake-0"})(["display:flex;position:fixed;top:0;",":0;flex-direction:column;z-index:500;box-shadow:",";background:",";width:","px;height:100%;overflow:auto;-webkit-overflow-scrolling:touch;font-family:",";direction:",";&.garden-drawer-transition-enter{transform:translateX(","px);}&.garden-drawer-transition-enter-active{transform:translateX(0);transition:transform 0.25s ease-in-out;}&.garden-drawer-transition-exit-active{transform:translateX(","px);transition:transform 0.25s ease-in-out;}&:focus{outline:none;}",";"],function(props){return props.theme.rtl?'left':'right';},boxShadow,function(props){return props.theme.colors.background;},DRAWER_WIDTH,function(props){return props.theme.fonts.system;},function(props){return props.theme.rtl&&'rtl';},function(props){return props.theme.rtl?-DRAWER_WIDTH:DRAWER_WIDTH;},function(props){return props.theme.rtl?-DRAWER_WIDTH:DRAWER_WIDTH;},function(props){return retrieveComponentStyles(COMPONENT_ID$5$2,props);});StyledDrawerModal.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$4$2='modals.drawer_modal.close';var BASE_MULTIPLIERS={top:BASE_MULTIPLIERS$1.top,side:2,size:BASE_MULTIPLIERS$1.size};var StyledDrawerModalClose=styled__default["default"](StyledClose).attrs({'data-garden-id':COMPONENT_ID$4$2,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledDrawerModalClose",componentId:"sc-hrnaom-0"})(["",":",";",";"],function(props){return props.theme.rtl?'left':'right';},function(props){return"".concat(props.theme.space.base*BASE_MULTIPLIERS.side,"px");},function(props){return retrieveComponentStyles(COMPONENT_ID$4$2,props);});StyledDrawerModalClose.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$3$2='modals.drawer_modal.header';var StyledDrawerModalHeader=styled__default["default"](StyledHeader).attrs({'data-garden-id':COMPONENT_ID$3$2,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledDrawerModalHeader",componentId:"sc-1u04rqw-0"})(["padding:","px;","  ",";"],function(props){return props.theme.space.base*5;},function(props){return props.isCloseButtonPresent&&"padding-".concat(props.theme.rtl?'left':'right',": ").concat(props.theme.space.base*(BASE_MULTIPLIERS.size+BASE_MULTIPLIERS.side+2),"px;");},function(props){return retrieveComponentStyles(COMPONENT_ID$3$2,props);});StyledDrawerModalHeader.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$2$2='modals.drawer_modal.body';var StyledDrawerModalBody=styled__default["default"](StyledBody).attrs({'data-garden-id':COMPONENT_ID$2$2,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledDrawerModalBody",componentId:"sc-yafe2y-0"})(["padding:","px;",";"],function(props){return props.theme.space.base*5;},function(props){return retrieveComponentStyles(COMPONENT_ID$2$2,props);});StyledDrawerModalBody.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$1$2='modals.drawer_modal.footer';var StyledDrawerModalFooter=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$1$2,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledDrawerModalFooter",componentId:"sc-17if4ka-0"})(["display:flex;flex-shrink:0;justify-content:flex-end;border-top:",";padding:","px;",";"],function(props){return"".concat(props.theme.borders.sm," ").concat(getColor('neutralHue',200,props.theme));},function(props){return props.theme.space.base*5;},function(props){return retrieveComponentStyles(COMPONENT_ID$1$2,props);});StyledDrawerModalFooter.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$k='modals.drawer_modal.footer_item';var StyledDrawerModalFooterItem=styled__default["default"](StyledFooterItem).attrs({'data-garden-id':COMPONENT_ID$k,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledDrawerModalFooterItem",componentId:"sc-1vbl885-0"})(["",";"],function(props){return retrieveComponentStyles(COMPONENT_ID$k,props);});StyledDrawerModalFooterItem.defaultProps={theme:DEFAULT_THEME};var ModalsContext=React.createContext(undefined);var useModalContext=function useModalContext(){var context=React.useContext(ModalsContext);if(context===undefined){throw new Error('useModalContext must be used within a ModalsContext.Provider');}return context;};var _excluded$2$2=["backdropProps","children","onClose","isLarge","isCentered","isAnimated","id","appendToNode","focusOnMount","restoreFocus"];var isOverflowing=function isOverflowing(element){var doc=ownerDocument(element);var win=ownerWindow(doc);var isBody=element&&element.tagName.toLowerCase()==='body';if(!isWindow(doc)&&!isBody){return element.scrollHeight>element.clientHeight;}var style=win.getComputedStyle(doc.body);var marginLeft=parseInt(style.getPropertyValue('margin-left'),10);var marginRight=parseInt(style.getPropertyValue('margin-right'),10);return marginLeft+doc.body.clientWidth+marginRight<win.innerWidth;};var Modal=React.forwardRef(function(_ref,ref){var backdropProps=_ref.backdropProps,children=_ref.children,onClose=_ref.onClose,isLarge=_ref.isLarge,isCentered=_ref.isCentered,isAnimated=_ref.isAnimated,id=_ref.id,appendToNode=_ref.appendToNode,focusOnMount=_ref.focusOnMount,restoreFocus=_ref.restoreFocus,modalProps=_objectWithoutProperties$2(_ref,_excluded$2$2);var theme=React.useContext(styled.ThemeContext);var modalRef=React.useRef(null);var environment=useDocument(theme);var _useState=React.useState(false),_useState2=_slicedToArray$1(_useState,2),isCloseButtonPresent=_useState2[0],setIsCloseButtonPresent=_useState2[1];var _useModal=useModal({idPrefix:id,onClose:onClose,modalRef:modalRef,focusOnMount:focusOnMount,restoreFocus:restoreFocus}),getBackdropProps=_useModal.getBackdropProps,getModalProps=_useModal.getModalProps,getTitleProps=_useModal.getTitleProps,getContentProps=_useModal.getContentProps,getCloseProps=_useModal.getCloseProps;useFocusVisible({scope:modalRef,relativeDocument:environment});React.useEffect(function(){if(!environment){return undefined;}var htmlElement=environment.querySelector('html');var bodyElement=environment.querySelector('body');var previousHtmlOverflow;var previousBodyPaddingRight;if(bodyElement){if(isOverflowing(bodyElement)){var scrollbarSize$1=scrollbarSize();var bodyPaddingRight=parseInt(style(bodyElement,'paddingRight')||'0',10);previousBodyPaddingRight=bodyElement.style.paddingRight;bodyElement.style.paddingRight="".concat(bodyPaddingRight+scrollbarSize$1,"px");}if(htmlElement){previousHtmlOverflow=htmlElement.style.overflow;htmlElement.style.overflow='hidden';}return function(){if(htmlElement){htmlElement.style.overflow=previousHtmlOverflow;}bodyElement.style.paddingRight=previousBodyPaddingRight;};}return undefined;},[environment]);var rootNode=React.useMemo(function(){if(appendToNode){return appendToNode;}if(environment){return environment.body;}return undefined;},[appendToNode,environment]);var value=React.useMemo(function(){return{isLarge:isLarge,isCloseButtonPresent:isCloseButtonPresent,getTitleProps:getTitleProps,getContentProps:getContentProps,getCloseProps:getCloseProps,setIsCloseButtonPresent:setIsCloseButtonPresent};},[isLarge,isCloseButtonPresent,getTitleProps,getContentProps,getCloseProps]);if(!rootNode){return null;}return ReactDOM.createPortal(React__default["default"].createElement(ModalsContext.Provider,{value:value},React__default["default"].createElement(StyledBackdrop,_extends$2$1({isCentered:isCentered,isAnimated:isAnimated},getBackdropProps(backdropProps)),React__default["default"].createElement(StyledModal,_extends$2$1({isCentered:isCentered,isAnimated:isAnimated,isLarge:isLarge},getModalProps(),modalProps,{ref:mergeRefs([ref,modalRef])}),children))),rootNode);});Modal.displayName='Modal';Modal.propTypes={backdropProps:propTypes.exports.object,isLarge:propTypes.exports.bool,isAnimated:propTypes.exports.bool,isCentered:propTypes.exports.bool,focusOnMount:propTypes.exports.bool,restoreFocus:propTypes.exports.bool,onClose:propTypes.exports.func,appendToNode:propTypes.exports.any};Modal.defaultProps={isAnimated:true,isCentered:true};var Body$2=React.forwardRef(function(props,ref){var _useModalContext=useModalContext(),getContentProps=_useModalContext.getContentProps;return React__default["default"].createElement(StyledBody,_extends$2$1({},getContentProps(props),{ref:ref}));});Body$2.displayName='Body';var _path$2;function _extends$6(){_extends$6=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$6.apply(this,arguments);}var SvgXStroke=function SvgXStroke(props){return/*#__PURE__*/React__namespace.createElement("svg",_extends$6({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path$2||(_path$2=/*#__PURE__*/React__namespace.createElement("path",{stroke:"currentColor",strokeLinecap:"round",d:"M3 13L13 3m0 10L3 3"})));};var Close$2=React.forwardRef(function(props,ref){var _useModalContext=useModalContext(),getCloseProps=_useModalContext.getCloseProps,setIsCloseButtonPresent=_useModalContext.setIsCloseButtonPresent;React.useEffect(function(){setIsCloseButtonPresent(true);return function(){return setIsCloseButtonPresent(false);};});var ariaLabel=useText(Close$2,props,'aria-label','Close modal');return React__default["default"].createElement(StyledClose,_extends$2$1({},getCloseProps(_objectSpread2$1(_objectSpread2$1({},props),{},{'aria-label':ariaLabel})),{ref:ref}),React__default["default"].createElement(SvgXStroke,null));});Close$2.displayName='Close';var Footer$2=React__default["default"].forwardRef(function(props,ref){var _useModalContext=useModalContext(),isLarge=_useModalContext.isLarge;return React__default["default"].createElement(StyledFooter,_extends$2$1({ref:ref,isLarge:isLarge},props));});Footer$2.displayName='Footer';var FooterItem$2=React__default["default"].forwardRef(function(props,ref){return React__default["default"].createElement(StyledFooterItem,_extends$2$1({ref:ref},props));});FooterItem$2.displayName='FooterItem';var Header$1=React.forwardRef(function(props,ref){var _useModalContext=useModalContext(),isCloseButtonPresent=_useModalContext.isCloseButtonPresent,getTitleProps=_useModalContext.getTitleProps;return React__default["default"].createElement(StyledHeader,_extends$2$1({},getTitleProps(props),{isCloseButtonPresent:isCloseButtonPresent,ref:ref}),props.isDanger&&React__default["default"].createElement(StyledDangerIcon,null),props.children);});Header$1.displayName='Header';var TooltipModalContext=React.createContext(undefined);var useTooltipModalContext=function useTooltipModalContext(){var context=React.useContext(TooltipModalContext);if(context===undefined){throw new Error('Element must be used within a TooltipModal component.');}return context;};var TitleComponent=React.forwardRef(function(props,ref){var _useTooltipModalConte=useTooltipModalContext(),getTitleProps=_useTooltipModalConte.getTitleProps;return React__default["default"].createElement(StyledTooltipModalTitle,_extends$2$1({},getTitleProps(props),{ref:ref}),props.children);});TitleComponent.displayName='TooltipModal.Title';var Title=TitleComponent;var BodyComponent$1=React.forwardRef(function(props,ref){var _useTooltipModalConte=useTooltipModalContext(),getContentProps=_useTooltipModalConte.getContentProps;return React__default["default"].createElement(StyledTooltipModalBody,_extends$2$1({},getContentProps(props),{ref:ref}));});BodyComponent$1.displayName='TooltipModal.Body';var Body$1=BodyComponent$1;var CloseComponent$1=React.forwardRef(function(props,ref){var _useTooltipModalConte=useTooltipModalContext(),getCloseProps=_useTooltipModalConte.getCloseProps;var ariaLabel=useText(CloseComponent$1,props,'aria-label','Close tooltip');return React__default["default"].createElement(StyledTooltipModalClose,_extends$2$1({},getCloseProps(_objectSpread2$1(_objectSpread2$1({},props),{},{'aria-label':ariaLabel})),{ref:ref}),React__default["default"].createElement(SvgXStroke,null));});CloseComponent$1.displayName='TooltipModal.Close';var Close$1=CloseComponent$1;var FooterComponent$1=React.forwardRef(function(props,ref){return React__default["default"].createElement(StyledTooltipModalFooter,_extends$2$1({ref:ref},props));});FooterComponent$1.displayName='TooltipModal.Footer';var Footer$1=FooterComponent$1;var FooterItemComponent$1=React.forwardRef(function(props,ref){return React__default["default"].createElement(StyledTooltipModalFooterItem,_extends$2$1({ref:ref},props));});FooterItemComponent$1.displayName='TooltipModal.FooterItem';var FooterItem$1=FooterItemComponent$1;var _excluded$1$4=["referenceElement","popperModifiers","placement","onClose","hasArrow","isAnimated","zIndex","backdropProps","focusOnMount","restoreFocus","id"];var TooltipModalComponent=React__default["default"].forwardRef(function(_ref,ref){var referenceElement=_ref.referenceElement,popperModifiers=_ref.popperModifiers,placement=_ref.placement,onClose=_ref.onClose,hasArrow=_ref.hasArrow,isAnimated=_ref.isAnimated,zIndex=_ref.zIndex,backdropProps=_ref.backdropProps,focusOnMount=_ref.focusOnMount,restoreFocus=_ref.restoreFocus,id=_ref.id,props=_objectWithoutProperties$2(_ref,_excluded$1$4);var theme=React.useContext(styled.ThemeContext);var previousReferenceElementRef=React.useRef();var modalRef=React.useRef(null);var transitionRef=React.useRef(null);var _useState=React.useState(),_useState2=_slicedToArray$1(_useState,2),popperElement=_useState2[0],setPopperElement=_useState2[1];var _useModal=useModal({idPrefix:id,onClose:onClose,modalRef:modalRef,focusOnMount:focusOnMount,restoreFocus:false}),getTitleProps=_useModal.getTitleProps,getCloseProps=_useModal.getCloseProps,getContentProps=_useModal.getContentProps,getBackdropProps=_useModal.getBackdropProps,getModalProps=_useModal.getModalProps;React.useEffect(function(){if(!referenceElement&&previousReferenceElementRef.current&&restoreFocus){previousReferenceElementRef.current.focus();}previousReferenceElementRef.current=referenceElement;},[referenceElement,restoreFocus]);var popperPlacement=React.useMemo(function(){return theme.rtl?getRtlPopperPlacement(placement):getPopperPlacement(placement);},[placement,theme.rtl]);var _usePopper=usePopper(referenceElement,popperElement,{placement:popperPlacement,modifiers:[{name:'offset',options:{offset:[0,theme.space.base*3]}}].concat(_toConsumableArray(popperModifiers||[]))}),styles=_usePopper.styles,attributes=_usePopper.attributes,state=_usePopper.state;var value={getTitleProps:getTitleProps,getContentProps:getContentProps,getCloseProps:getCloseProps};return React__default["default"].createElement(CSSTransition,{unmountOnExit:true,timeout:isAnimated?200:0,in:Boolean(referenceElement),classNames:isAnimated?'garden-tooltip-modal-transition':'',nodeRef:transitionRef},function(transitionState){return React__default["default"].createElement(TooltipModalContext.Provider,{value:value},React__default["default"].createElement(StyledTooltipModalBackdrop,_extends$2$1({},getBackdropProps(),backdropProps,{ref:transitionRef}),React__default["default"].createElement(StyledTooltipWrapper,_extends$2$1({ref:setPopperElement,style:styles.popper,placement:state?state.placement:undefined,zIndex:zIndex,isAnimated:isAnimated},attributes.popper),React__default["default"].createElement(StyledTooltipModal,_extends$2$1({transitionState:transitionState,placement:state?state.placement:'top',hasArrow:hasArrow,isAnimated:isAnimated},getModalProps(),props,{ref:mergeRefs([modalRef,ref])})))));});});TooltipModalComponent.displayName='TooltipModal';TooltipModalComponent.defaultProps={placement:'auto',isAnimated:true,hasArrow:true,focusOnMount:true,restoreFocus:true};TooltipModalComponent.propTypes={referenceElement:propTypes.exports.any,popperModifiers:propTypes.exports.any,placement:propTypes.exports.any,isAnimated:propTypes.exports.bool,hasArrow:propTypes.exports.bool,zIndex:propTypes.exports.number,onClose:propTypes.exports.func,backdropProps:propTypes.exports.any,focusOnMount:propTypes.exports.bool,restoreFocus:propTypes.exports.bool};var TooltipModal=TooltipModalComponent;TooltipModal.Body=Body$1;TooltipModal.Close=Close$1;TooltipModal.Footer=Footer$1;TooltipModal.FooterItem=FooterItem$1;TooltipModal.Title=Title;var HeaderComponent=React.forwardRef(function(props,ref){var _useModalContext=useModalContext(),isCloseButtonPresent=_useModalContext.isCloseButtonPresent,getTitleProps=_useModalContext.getTitleProps;return React__default["default"].createElement(StyledDrawerModalHeader,_extends$2$1({},getTitleProps(props),{isCloseButtonPresent:isCloseButtonPresent,ref:ref}));});HeaderComponent.displayName='DrawerModal.Header';var Header$2=HeaderComponent;var BodyComponent=React.forwardRef(function(props,ref){var _useModalContext=useModalContext(),getContentProps=_useModalContext.getContentProps;return React__default["default"].createElement(StyledDrawerModalBody,_extends$2$1({},getContentProps(props),{ref:ref}),props.children);});BodyComponent.displayName='DrawerModal.Body';var Body$3=BodyComponent;var CloseComponent=React.forwardRef(function(props,ref){var _useModalContext=useModalContext(),getCloseProps=_useModalContext.getCloseProps,setIsCloseButtonPresent=_useModalContext.setIsCloseButtonPresent;React.useEffect(function(){setIsCloseButtonPresent(true);return function(){return setIsCloseButtonPresent(false);};});var ariaLabel=useText(CloseComponent,props,'aria-label','Close drawer');return React__default["default"].createElement(StyledDrawerModalClose,_extends$2$1({},getCloseProps(_objectSpread2$1(_objectSpread2$1({},props),{},{'aria-label':ariaLabel})),{ref:ref}),React__default["default"].createElement(SvgXStroke,null));});CloseComponent.displayName='DrawerModal.Close';var Close=CloseComponent;var FooterComponent=React.forwardRef(function(props,ref){return React__default["default"].createElement(StyledDrawerModalFooter,_extends$2$1({ref:ref},props));});FooterComponent.displayName='DrawerModal.Footer';var Footer=FooterComponent;var FooterItemComponent=React.forwardRef(function(props,ref){return React__default["default"].createElement(StyledDrawerModalFooterItem,_extends$2$1({ref:ref},props));});FooterItemComponent.displayName='DrawerModal.FooterItem';var FooterItem=FooterItemComponent;var _excluded$8=["id","isOpen","onClose","backdropProps","appendToNode","focusOnMount","restoreFocus"];var DrawerModalComponent=React.forwardRef(function(_ref,ref){var id=_ref.id,isOpen=_ref.isOpen,onClose=_ref.onClose,backdropProps=_ref.backdropProps,appendToNode=_ref.appendToNode,focusOnMount=_ref.focusOnMount,restoreFocus=_ref.restoreFocus,props=_objectWithoutProperties$2(_ref,_excluded$8);var modalRef=React.useRef(null);var transitionRef=React.useRef(null);var theme=React.useContext(styled.ThemeContext);var environment=useDocument(theme);var _useState=React.useState(false),_useState2=_slicedToArray$1(_useState,2),isCloseButtonPresent=_useState2[0],setIsCloseButtonPresent=_useState2[1];useFocusVisible({scope:modalRef,relativeDocument:modalRef.current});var _useModal=useModal({idPrefix:id,modalRef:modalRef,focusOnMount:focusOnMount,restoreFocus:restoreFocus,environment:environment,onClose:onClose}),getTitleProps=_useModal.getTitleProps,getCloseProps=_useModal.getCloseProps,getContentProps=_useModal.getContentProps,getBackdropProps=_useModal.getBackdropProps,getModalProps=_useModal.getModalProps;React.useEffect(function(){if(!environment){return undefined;}var htmlElement=environment.querySelector('html');var previousHtmlOverflow;if(htmlElement&&isOpen){previousHtmlOverflow=htmlElement.style.overflow;htmlElement.style.overflow='hidden';}return function(){if(htmlElement&&isOpen){htmlElement.style.overflow=previousHtmlOverflow;}};},[environment,isOpen]);var rootNode=React.useMemo(function(){if(appendToNode){return appendToNode;}if(environment){return environment.body;}return undefined;},[appendToNode,environment]);var value=React.useMemo(function(){return{isCloseButtonPresent:isCloseButtonPresent,getTitleProps:getTitleProps,getContentProps:getContentProps,getCloseProps:getCloseProps,setIsCloseButtonPresent:setIsCloseButtonPresent};},[isCloseButtonPresent,getTitleProps,getContentProps,getCloseProps]);if(!rootNode){return null;}return ReactDOM__default["default"].createPortal(React__default["default"].createElement(ModalsContext.Provider,{value:value},React__default["default"].createElement(CSSTransition,{in:isOpen,timeout:250,unmountOnExit:true,classNames:"garden-drawer-transition",nodeRef:transitionRef},React__default["default"].createElement(StyledBackdrop,_extends$2$1({isAnimated:true},getBackdropProps(backdropProps)),React__default["default"].createElement(StyledDrawerModal,_extends$2$1({},getModalProps(),props,{ref:mergeRefs([ref,modalRef,transitionRef])}))))),rootNode);});DrawerModalComponent.displayName='DrawerModal';DrawerModalComponent.propTypes={backdropProps:propTypes.exports.object,focusOnMount:propTypes.exports.bool,restoreFocus:propTypes.exports.bool,onClose:propTypes.exports.func,appendToNode:propTypes.exports.any,isOpen:propTypes.exports.bool};var DrawerModal=DrawerModalComponent;DrawerModal.Body=Body$3;DrawerModal.Close=Close;DrawerModal.Footer=Footer;DrawerModal.FooterItem=FooterItem;DrawerModal.Header=Header$2;/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */function _objectWithoutPropertiesLoose$3(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _extends$5(){_extends$5=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$5.apply(this,arguments);}var _excluded$1$3=["role"],_excluded2$1=["selectedAriaKey","role","onFocus","onKeyDown","onClick","item","focusRef","refKey"];function stateReducer(state,action){switch(action.type){case'END':case'HOME':case'FOCUS':case'INCREMENT':case'DECREMENT':{return _extends$5({},state,{focusedItem:action.payload});}case'MOUSE_SELECT':{return _extends$5({},state,{selectedItem:action.payload,focusedItem:undefined});}case'KEYBOARD_SELECT':{return _extends$5({},state,{selectedItem:action.payload});}case'EXIT_WIDGET':{return _extends$5({},state,{focusedItem:undefined});}default:return state;}}function useSelection(_temp){var _ref=_temp===void 0?{}:_temp,_ref$direction=_ref.direction,direction=_ref$direction===void 0?'horizontal':_ref$direction,_ref$defaultFocusedIn=_ref.defaultFocusedIndex,defaultFocusedIndex=_ref$defaultFocusedIn===void 0?0:_ref$defaultFocusedIn,defaultSelectedIndex=_ref.defaultSelectedIndex,rtl=_ref.rtl,selectedItem=_ref.selectedItem,focusedItem=_ref.focusedItem,onSelect=_ref.onSelect,onFocus=_ref.onFocus;var isSelectedItemControlled=selectedItem!==undefined;var isFocusedItemControlled=focusedItem!==undefined;var refs=[];var items=[];var _useReducer=React.useReducer(stateReducer,{selectedItem:selectedItem,focusedItem:focusedItem}),state=_useReducer[0],dispatch=_useReducer[1];var controlledFocusedItem=getControlledValue(focusedItem,state.focusedItem);var controlledSelectedItem=getControlledValue(selectedItem,state.selectedItem);React.useEffect(function(){if(controlledFocusedItem!==undefined){var focusedIndex=items.indexOf(controlledFocusedItem);refs[focusedIndex]&&refs[focusedIndex].current.focus();}},[controlledFocusedItem]);React.useEffect(function(){if(selectedItem===undefined&&defaultSelectedIndex!==undefined){onSelect&&onSelect(items[defaultSelectedIndex]);if(!isSelectedItemControlled){dispatch({type:'KEYBOARD_SELECT',payload:items[defaultSelectedIndex]});}}},[]);var getContainerProps=function getContainerProps(_temp2){var _ref2=_temp2===void 0?{}:_temp2,_ref2$role=_ref2.role,role=_ref2$role===void 0?'listbox':_ref2$role,other=_objectWithoutPropertiesLoose$3(_ref2,_excluded$1$3);return _extends$5({role:role,'data-garden-container-id':'containers.selection','data-garden-container-version':'1.3.18'},other);};var getItemProps=function getItemProps(_temp3,propGetterName){var _extends2;var _ref3=_temp3===void 0?{}:_temp3,_ref3$selectedAriaKey=_ref3.selectedAriaKey,selectedAriaKey=_ref3$selectedAriaKey===void 0?'aria-selected':_ref3$selectedAriaKey,_ref3$role=_ref3.role,role=_ref3$role===void 0?'option':_ref3$role,onFocusCallback=_ref3.onFocus,onKeyDown=_ref3.onKeyDown,onClick=_ref3.onClick,item=_ref3.item,focusRef=_ref3.focusRef,_ref3$refKey=_ref3.refKey,refKey=_ref3$refKey===void 0?'ref':_ref3$refKey,other=_objectWithoutPropertiesLoose$3(_ref3,_excluded2$1);if(propGetterName===void 0){propGetterName='getItemProps';}if(item===undefined){throw new Error("Accessibility Error: You must provide an \"item\" option to \""+propGetterName+"()\"");}if(focusRef===undefined){throw new Error("Accessibility Error: You must provide a \"focusRef\" option to \""+propGetterName+"()\"");}refs.push(focusRef);items.push(item);var isSelected=controlledSelectedItem===item;var isFocused=controlledFocusedItem===undefined?isSelected:controlledFocusedItem===item;var tabIndex=isFocused||controlledSelectedItem===undefined&&controlledFocusedItem===undefined&&items.indexOf(item)===defaultFocusedIndex?0:-1;var verticalDirection=direction==='vertical'||direction==='both';var horizontalDirection=direction==='horizontal'||direction==='both';return _extends$5((_extends2={role:role,tabIndex:tabIndex},_extends2[selectedAriaKey]=selectedAriaKey?isSelected:undefined,_extends2[refKey]=focusRef,_extends2.onFocus=composeEventHandlers$2(onFocusCallback,function(){onFocus&&onFocus(item);if(!isFocusedItemControlled){dispatch({type:'FOCUS',payload:item});}}),_extends2.onBlur=function onBlur(e){if(e.target.tabIndex===0){if(!isFocusedItemControlled){dispatch({type:'EXIT_WIDGET'});}onFocus&&onFocus();}},_extends2.onClick=composeEventHandlers$2(onClick,function(){onSelect&&onSelect(item);onFocus&&onFocus();if(!isSelectedItemControlled){dispatch({type:'MOUSE_SELECT',payload:item});}}),_extends2.onKeyDown=composeEventHandlers$2(onKeyDown,function(e){var nextIndex;var currentIndex;if(isFocusedItemControlled){currentIndex=items.indexOf(focusedItem);}else{currentIndex=items.indexOf(state.focusedItem||state.selectedItem);}var onIncrement=function onIncrement(){nextIndex=currentIndex+1;if(currentIndex===items.length-1){nextIndex=0;}!isFocusedItemControlled&&dispatch({type:'INCREMENT',payload:items[nextIndex]});onFocus&&onFocus(items[nextIndex]);};var onDecrement=function onDecrement(){nextIndex=currentIndex-1;if(currentIndex===0){nextIndex=items.length-1;}!isFocusedItemControlled&&dispatch({type:'DECREMENT',payload:items[nextIndex]});onFocus&&onFocus(items[nextIndex]);};var hasModifierKeyPressed=e.ctrlKey||e.metaKey||e.shiftKey||e.altKey;if(!hasModifierKeyPressed){if(e.keyCode===KEY_CODES.UP&&verticalDirection||e.keyCode===KEY_CODES.LEFT&&horizontalDirection){if(rtl&&horizontalDirection){onIncrement();}else{onDecrement();}e.preventDefault();}else if(e.keyCode===KEY_CODES.DOWN&&verticalDirection||e.keyCode===KEY_CODES.RIGHT&&horizontalDirection){if(rtl&&horizontalDirection){onDecrement();}else{onIncrement();}e.preventDefault();}else if(e.keyCode===KEY_CODES.HOME){if(!isFocusedItemControlled){dispatch({type:'HOME',payload:items[0]});}onFocus&&onFocus(items[0]);e.preventDefault();}else if(e.keyCode===KEY_CODES.END){if(!isFocusedItemControlled){dispatch({type:'END',payload:items[items.length-1]});}onFocus&&onFocus(items[items.length-1]);e.preventDefault();}else if(e.keyCode===KEY_CODES.SPACE||e.keyCode===KEY_CODES.ENTER){onSelect&&onSelect(item);if(!isSelectedItemControlled){dispatch({type:'KEYBOARD_SELECT',payload:item});}e.preventDefault();}}}),_extends2),other);};return{focusedItem:controlledFocusedItem,selectedItem:controlledSelectedItem,getItemProps:getItemProps,getContainerProps:getContainerProps};}({children:propTypes.exports.func,render:propTypes.exports.func,rtl:propTypes.exports.bool,direction:propTypes.exports.oneOf(['horizontal','vertical','both']),defaultFocusedIndex:propTypes.exports.number,defaultSelectedIndex:propTypes.exports.number,focusedItem:propTypes.exports.any,selectedItem:propTypes.exports.any,onSelect:propTypes.exports.func,onFocus:propTypes.exports.func});/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */function _extends$4(){_extends$4=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$4.apply(this,arguments);}function _objectWithoutPropertiesLoose$2(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var _excluded$1$2=["role"],_excluded2=["role","selectedAriaKey"];function useButtonGroup(options){var _useSelection=useSelection(options),selectedItem=_useSelection.selectedItem,focusedItem=_useSelection.focusedItem,getContainerProps=_useSelection.getContainerProps,getItemProps=_useSelection.getItemProps;var _getGroupProps=function getGroupProps(_temp){var _ref=_temp===void 0?{}:_temp,_ref$role=_ref.role,role=_ref$role===void 0?'group':_ref$role,other=_objectWithoutPropertiesLoose$2(_ref,_excluded$1$2);return _extends$4({role:role,'data-garden-container-id':'containers.buttongroup','data-garden-container-version':'0.3.18'},other);};var _getButtonProps=function getButtonProps(_temp2){var _ref2=_temp2===void 0?{}:_temp2,_ref2$role=_ref2.role,role=_ref2$role===void 0?'button':_ref2$role,_ref2$selectedAriaKey=_ref2.selectedAriaKey,selectedAriaKey=_ref2$selectedAriaKey===void 0?'aria-pressed':_ref2$selectedAriaKey,other=_objectWithoutPropertiesLoose$2(_ref2,_excluded2);return _extends$4({role:role,selectedAriaKey:selectedAriaKey},other);};return{selectedItem:selectedItem,focusedItem:focusedItem,getGroupProps:function getGroupProps(props){return getContainerProps(_getGroupProps(props));},getButtonProps:function getButtonProps(props){return getItemProps(_getButtonProps(props),'getButtonProps');}};}({children:propTypes.exports.func,render:propTypes.exports.func,focusedItem:propTypes.exports.any,selectedItem:propTypes.exports.any,onSelect:propTypes.exports.func,onFocus:propTypes.exports.func});/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _extends$2(){_extends$2=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$2.apply(this,arguments);}function _objectWithoutPropertiesLoose$1(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _objectWithoutProperties$1(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose$1(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}var SIZE$1=['small','medium','large'];var COMPONENT_ID$5$1='buttons.button_group_view';var StyledButtonGroup=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$5$1,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledButtonGroup",componentId:"sc-1fbpzef-0"})(["display:inline-flex;position:relative;z-index:0;direction:",";white-space:nowrap;:focus{outline:none;}",";"],function(props){return props.theme.rtl&&'rtl';},function(props){return retrieveComponentStyles(COMPONENT_ID$5$1,props);});StyledButtonGroup.defaultProps={theme:DEFAULT_THEME};var _excluded$6=["children","isRotated","theme"];var COMPONENT_ID$4$1='buttons.icon';var sizeStyles$1=function sizeStyles(props){var marginProperty;if(props.position==='start'){marginProperty="margin-".concat(props.theme.rtl?'left':'right');}else if(props.position==='end'){marginProperty="margin-".concat(props.theme.rtl?'right':'left');}return marginProperty&&styled.css(["",":","px;"],marginProperty,props.theme.space.base*2);};var StyledIcon=styled__default["default"](function(_ref){var children=_ref.children;_ref.isRotated;_ref.theme;var props=_objectWithoutProperties$1(_ref,_excluded$6);return React__default["default"].cloneElement(React.Children.only(children),props);}).attrs({'data-garden-id':COMPONENT_ID$4$1,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledIcon",componentId:"sc-19meqgg-0"})(["transform:",";transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;",";",";"],function(props){return props.isRotated&&"rotate(".concat(props.theme.rtl?'-':'+',"180deg)");},function(props){return sizeStyles$1(props);},function(props){return retrieveComponentStyles(COMPONENT_ID$4$1,props);});StyledIcon.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$3$1='buttons.button';var getBorderRadius=function getBorderRadius(props){if(props.isLink){return 0;}else if(props.isPill){return'100px';}return props.theme.borderRadii.md;};var getDisabledBackgroundColor=function getDisabledBackgroundColor(props){return getColor('neutralHue',200,props.theme);};var getHeight=function getHeight(props){if(props.size==='small'){return"".concat(props.theme.space.base*8,"px");}else if(props.size==='large'){return"".concat(props.theme.space.base*12,"px");}return"".concat(props.theme.space.base*10,"px");};var colorStyles=function colorStyles(props){var retVal;var hue;if(props.disabled||props.isNeutral&&(props.isPrimary||props.isSelected)&&!props.isDanger){hue='neutralHue';}else if(props.isDanger){hue='dangerHue';}else{hue='primaryHue';}var shade=600;var baseColor=getColor(hue,shade,props.theme);var hoverColor=getColor(hue,shade+100,props.theme);var activeColor=getColor(hue,shade+200,props.theme);var disabledBackgroundColor=getDisabledBackgroundColor(props);var disabledForegroundColor=getColor(hue,shade-200,props.theme);var boxShadowColor=props.focusInset&&(props.isPrimary||props.isSelected)?props.theme.palette.white:baseColor;var boxShadow="\n    ".concat(props.focusInset?'inset':'',"\n    ").concat(props.theme.shadows.md(rgba(boxShadowColor,0.35)));if(props.isLink){retVal=styled.css(["background-color:transparent;color:",";&:focus{color:",";}&:hover,&[data-garden-focus-visible]{color:",";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:",";}&:disabled{color:",";}"],baseColor,baseColor,hoverColor,activeColor,disabledForegroundColor);}else if(props.isPrimary||props.isSelected){retVal=styled.css(["background-color:",";color:",";&:hover{background-color:",";}&[data-garden-focus-visible]{box-shadow:",";}&:active{background-color:",";}&[aria-pressed='true'],&[aria-pressed='mixed']{background-color:",";}&:disabled{background-color:",";color:",";}"],props.isPrimary&&props.isSelected?activeColor:baseColor,props.theme.palette.white,hoverColor,boxShadow,activeColor,props.isPrimary&&activeColor,disabledBackgroundColor,disabledForegroundColor);}else{var borderColor=props.isNeutral&&!props.isDanger?getColor('neutralHue',300,props.theme):baseColor;var foregroundColor=props.isNeutral?props.theme.colors.foreground:baseColor;var hoverBorderColor=props.isNeutral&&!props.isDanger?baseColor:hoverColor;var hoverForegroundColor=props.isNeutral?foregroundColor:hoverColor;retVal=styled.css(["border-color:",";background-color:transparent;color:",";&:hover{border-color:",";background-color:",";color:",";}&[data-garden-focus-visible]{border-color:",";box-shadow:",";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{border-color:",";background-color:",";color:",";}&:disabled{border-color:transparent;background-color:",";color:",";}& ","{color:",";}&:hover ",",&[data-garden-focus-visible] ","{color:",";}&:active ","{color:",";}&:disabled ","{color:",";}"],!props.isBasic&&borderColor,foregroundColor,!props.isBasic&&hoverBorderColor,rgba(baseColor,0.08),hoverForegroundColor,props.isNeutral&&baseColor,boxShadow,!props.isBasic&&activeColor,rgba(baseColor,0.2),!props.isNeutral&&activeColor,disabledBackgroundColor,disabledForegroundColor,StyledIcon,props.isNeutral&&getColor('neutralHue',shade,props.theme),StyledIcon,StyledIcon,props.isNeutral&&getColor('neutralHue',shade+100,props.theme),StyledIcon,props.isNeutral&&foregroundColor,StyledIcon,disabledForegroundColor);}return retVal;};var groupStyles=function groupStyles(props){var isPrimary=props.isPrimary;var rtl=props.theme.rtl;var lightBorderColor=props.theme.colors.background;var disabledBackgroundColor=getDisabledBackgroundColor(props);return styled.css(["position:relative;margin-",":",";border-top-width:",";border-bottom-width:",";border-right-color:",";border-left-color:",";&:hover,&[data-garden-focus-visible],&:active{z-index:1;}&:disabled{z-index:-1;border-top-width:0;border-bottom-width:0;border-right-color:",";border-left-color:",";background-color:",";}&:first-of-type:not(:last-of-type){margin-",":0;border-top-","-radius:0;border-bottom-","-radius:0;border-","-width:",";}&:last-of-type:not(:first-of-type){border-top-","-radius:0;border-bottom-","-radius:0;border-","-width:",";}&:not(:first-of-type):not(:last-of-type){border-radius:0;}&:first-of-type:not(:last-of-type) ","{margin-",":",";}&:last-of-type:not(:first-of-type) ","{margin-",":",";}"],rtl?'right':'left',math("".concat(props.theme.borderWidths.sm," * -1")),isPrimary&&0,isPrimary&&0,isPrimary&&lightBorderColor,isPrimary&&lightBorderColor,lightBorderColor,lightBorderColor,!isPrimary&&disabledBackgroundColor,rtl?'right':'left',rtl?'left':'right',rtl?'left':'right',rtl?'right':'left',isPrimary&&0,rtl?'right':'left',rtl?'right':'left',rtl?'left':'right',isPrimary&&0,StyledIcon,rtl?'left':'right',props.isPill&&'-2px',StyledIcon,rtl?'right':'left',props.isPill&&'-2px');};var iconStyles$1=function iconStyles(props){var size=props.size==='small'?props.theme.iconSizes.sm:props.theme.iconSizes.md;return styled.css(["width:",";min-width:",";height:",";vertical-align:",";"],size,size,size,props.isLink&&'middle');};var sizeStyles=function sizeStyles(props){var retVal;if(props.isLink){retVal=styled.css(["padding:0;font-size:inherit;"]);}else{var height=getHeight(props);var lineHeight=math("".concat(height," - (").concat(props.theme.borderWidths.sm," * 2)"));var padding;var fontSize;if(props.size==='small'){fontSize=props.theme.fontSizes.sm;padding="".concat(props.theme.space.base*3,"px");}else{fontSize=props.theme.fontSizes.md;if(props.size==='large'){padding="".concat(props.theme.space.base*5,"px");}else{padding="".concat(props.theme.space.base*4,"px");}}retVal=styled.css(["padding:0 ",";height:",";line-height:",";font-size:",";"],em$1(math("".concat(padding," - ").concat(props.theme.borderWidths.sm)),fontSize),height,lineHeight,fontSize);}return retVal;};var StyledButton=styled__default["default"].button.attrs(function(props){return{'data-garden-id':COMPONENT_ID$3$1,'data-garden-version':'8.53.2',type:props.type||'button'};}).withConfig({displayName:"StyledButton",componentId:"sc-qe3ace-0"})(["display:",";align-items:",";justify-content:",";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;margin:0;border:",";border-radius:",";cursor:pointer;width:",";overflow:hidden;text-decoration:none;text-overflow:ellipsis;white-space:",";font-family:inherit;font-weight:",";-webkit-font-smoothing:subpixel-antialiased;box-sizing:border-box;user-select:",";-webkit-touch-callout:none;",";&::-moz-focus-inner{border:0;padding:0;}&:focus{outline:none;text-decoration:",";}&:hover{text-decoration:",";}&[data-garden-focus-visible]{text-decoration:",";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,color 0.1s ease-in-out,z-index 0.25s ease-in-out;text-decoration:",";}",";&:disabled{cursor:default;text-decoration:",";}& ","{","}"," &&{",";}",";"],function(props){return props.isLink?'inline':'inline-flex';},function(props){return!props.isLink&&'center';},function(props){return!props.isLink&&'center';},function(props){return props.isLink?'none':"".concat(props.theme.borders.sm," transparent");},function(props){return getBorderRadius(props);},function(props){return props.isStretched?'100%':'';},function(props){return!props.isLink&&'nowrap';},function(props){return props.isLink?'inherit':props.theme.fontWeights.regular;},function(props){return!props.isLink&&'none';},function(props){return sizeStyles(props);},function(props){return props.isLink&&'none';},function(props){return props.isLink?'underline':'none';},function(props){return props.isLink?'underline':'none';},function(props){return props.isLink?'underline':'none';},function(props){return colorStyles(props);},function(props){return props.isLink&&'none';},StyledIcon,function(props){return iconStyles$1(props);},StyledButtonGroup,function(props){return groupStyles(props);},function(props){return retrieveComponentStyles(COMPONENT_ID$3$1,props);});StyledButton.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$2$1='buttons.anchor';var StyledAnchor=styled__default["default"](StyledButton).attrs(function(props){return{'data-garden-id':COMPONENT_ID$2$1,'data-garden-version':'8.53.2',as:'a',dir:props.theme.rtl?'rtl':undefined,isLink:true,type:undefined};}).withConfig({displayName:"StyledAnchor",componentId:"sc-xshgmo-0"})(["direction:",";",";"],function(props){return props.theme.rtl&&'rtl';},function(props){return retrieveComponentStyles(COMPONENT_ID$2$1,props);});StyledAnchor.defaultProps={theme:DEFAULT_THEME};var _path$1;function _extends$1(){_extends$1=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$1.apply(this,arguments);}var SvgNewWindowStroke=function SvgNewWindowStroke(props){return/*#__PURE__*/React__namespace.createElement("svg",_extends$1({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,focusable:"false",viewBox:"0 0 12 12","aria-hidden":"true"},props),_path$1||(_path$1=/*#__PURE__*/React__namespace.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",d:"M10.5 8.5V10c0 .3-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5V2c0-.3.2-.5.5-.5h1.5M6 6l4-4m-3.5-.5H10c.3 0 .5.2.5.5v3.5"})));};var COMPONENT_ID$1$1='buttons.external_icon';var StyledExternalIcon=styled__default["default"](SvgNewWindowStroke).attrs({'data-garden-id':COMPONENT_ID$1$1,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledExternalIcon",componentId:"sc-16oz07e-0"})(["transform:",";margin-bottom:-0.085em;padding-left:0.25em;box-sizing:content-box;width:0.85em;height:0.85em;",";"],function(props){return props.theme.rtl&&'scaleX(-1)';},function(props){return retrieveComponentStyles(COMPONENT_ID$1$1,props);});StyledExternalIcon.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$6='buttons.icon_button';var iconColorStyles=function iconColorStyles(props){var shade=600;var baseColor=getColor('neutralHue',shade,props.theme);var hoverColor=getColor('neutralHue',shade+100,props.theme);var activeColor=getColor('neutralHue',shade+200,props.theme);return styled.css(["color:",";&:hover{color:",";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:",";}"],baseColor,hoverColor,activeColor);};var iconButtonStyles=function iconButtonStyles(props){var width=getHeight(props);return styled.css(["border:",";padding:0;width:",";min-width:",";",";&:disabled{background-color:",";}"],props.isBasic&&'none',width,width,props.isBasic&&!(props.isPrimary||props.isDanger||props.disabled)&&iconColorStyles(props),!props.isPrimary&&'transparent');};var iconStyles=function iconStyles(props){var size=props.theme.iconSizes.md;return styled.css(["width:",";height:",";& > svg{transition:opacity 0.15s ease-in-out;}"],size,size);};var StyledIconButton=styled__default["default"](StyledButton).attrs({'data-garden-id':COMPONENT_ID$6,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledIconButton",componentId:"sc-1t0ughp-0"})(["",";& ","{","}",";"],function(props){return iconButtonStyles(props);},StyledIcon,function(props){return iconStyles(props);},function(props){return retrieveComponentStyles(COMPONENT_ID$6,props);});StyledIconButton.defaultProps={theme:DEFAULT_THEME};var ButtonGroupContext=React.createContext(undefined);var useButtonGroupContext=function useButtonGroupContext(){return React.useContext(ButtonGroupContext);};var SplitButtonContext=React.createContext(undefined);var useSplitButtonContext=function useSplitButtonContext(){return React.useContext(SplitButtonContext);};var StartIconComponent=function StartIconComponent(props){return React__default["default"].createElement(StyledIcon,_extends$2({position:"start"},props));};StartIconComponent.displayName='Button.StartIcon';var StartIcon=StartIconComponent;var EndIconComponent=function EndIconComponent(props){return React__default["default"].createElement(StyledIcon,_extends$2({position:"end"},props));};EndIconComponent.displayName='Button.EndIcon';var EndIcon=EndIconComponent;var ButtonComponent=React.forwardRef(function(props,ref){var buttonGroupContext=useButtonGroupContext();var splitButtonContext=useSplitButtonContext();var computedProps=_objectSpread2(_objectSpread2({},props),{},{focusInset:props.focusInset||buttonGroupContext!==undefined||splitButtonContext});if(buttonGroupContext&&!props.disabled){if(!props.value){throw new Error('"value" prop must be provided to Button when used within a ButtonGroup');}computedProps=buttonGroupContext.getButtonProps(_objectSpread2({item:props.value,focusRef:React__default["default"].createRef(),isSelected:props.value===buttonGroupContext.selectedItem},computedProps));}return React__default["default"].createElement(StyledButton,_extends$2({ref:ref},computedProps));});ButtonComponent.displayName='Button';ButtonComponent.propTypes={isNeutral:propTypes.exports.bool,isPrimary:propTypes.exports.bool,isDanger:propTypes.exports.bool,isPill:propTypes.exports.bool,isBasic:propTypes.exports.bool,focusInset:propTypes.exports.bool,isLink:propTypes.exports.bool,isStretched:propTypes.exports.bool,isSelected:propTypes.exports.bool,size:propTypes.exports.oneOf(SIZE$1)};ButtonComponent.defaultProps={size:'medium'};var Button$1=ButtonComponent;Button$1.EndIcon=EndIcon;Button$1.StartIcon=StartIcon;var _excluded$5=["children","isExternal"];var Anchor=React.forwardRef(function(_ref,ref){var children=_ref.children,isExternal=_ref.isExternal,otherProps=_objectWithoutProperties$1(_ref,_excluded$5);var anchorProps=otherProps;if(isExternal){anchorProps=_objectSpread2({target:'_blank',rel:'noopener noreferrer'},anchorProps);}return React__default["default"].createElement(StyledAnchor,_extends$2({ref:ref},anchorProps),children,isExternal&&React__default["default"].createElement(StyledExternalIcon,null));});Anchor.displayName='Anchor';Anchor.propTypes={isExternal:propTypes.exports.bool,isDanger:propTypes.exports.bool};var _excluded$4$1=["children","onSelect","selectedItem"];var ButtonGroup=React.forwardRef(function(_ref,ref){var children=_ref.children,onSelect=_ref.onSelect,controlledSelectedItem=_ref.selectedItem,otherProps=_objectWithoutProperties$1(_ref,_excluded$4$1);var _useButtonGroup=useButtonGroup({selectedItem:controlledSelectedItem,defaultSelectedIndex:0,onSelect:onSelect}),selectedItem=_useButtonGroup.selectedItem,getButtonProps=_useButtonGroup.getButtonProps,getGroupProps=_useButtonGroup.getGroupProps;var contextValue=React.useMemo(function(){return{selectedItem:selectedItem,getButtonProps:getButtonProps};},[selectedItem,getButtonProps]);return React__default["default"].createElement(ButtonGroupContext.Provider,{value:contextValue},React__default["default"].createElement(StyledButtonGroup,_extends$2({ref:ref},getGroupProps(otherProps)),children));});ButtonGroup.displayName='ButtonGroup';ButtonGroup.propTypes={selectedItem:propTypes.exports.any,onSelect:propTypes.exports.func};var _excluded$3$1=["children","isRotated"];var IconButton=React.forwardRef(function(_ref,ref){var children=_ref.children,isRotated=_ref.isRotated,otherProps=_objectWithoutProperties$1(_ref,_excluded$3$1);var focusInset=useSplitButtonContext();return React__default["default"].createElement(StyledIconButton,_extends$2({ref:ref},otherProps,{focusInset:otherProps.focusInset||focusInset}),React__default["default"].createElement(StyledIcon,{isRotated:isRotated},children));});IconButton.displayName='IconButton';IconButton.propTypes={isDanger:propTypes.exports.bool,size:propTypes.exports.oneOf(SIZE$1),isNeutral:propTypes.exports.bool,isPrimary:propTypes.exports.bool,isBasic:propTypes.exports.bool,isPill:propTypes.exports.bool,focusInset:propTypes.exports.bool,isRotated:propTypes.exports.bool};IconButton.defaultProps={isPill:true,isBasic:true,size:'medium'};var _path;function _extends$3(){_extends$3=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends$3.apply(this,arguments);}var SvgChevronDownStroke=function SvgChevronDownStroke(props){return/*#__PURE__*/React__namespace.createElement("svg",_extends$3({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true"},props),_path||(_path=/*#__PURE__*/React__namespace.createElement("path",{fill:"currentColor",d:"M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"})));};var ChevronButton=React.forwardRef(function(_ref,ref){var buttonProps=_extends$2({},_ref);return React__default["default"].createElement(IconButton,_extends$2({ref:ref},buttonProps),React__default["default"].createElement(SvgChevronDownStroke,null));});ChevronButton.displayName='ChevronButton';ChevronButton.propTypes=IconButton.propTypes;ChevronButton.defaultProps={isBasic:false,isPill:false,size:'medium'};var _excluded$2$1=["children"];var SplitButton=React.forwardRef(function(_ref,ref){var children=_ref.children,other=_objectWithoutProperties$1(_ref,_excluded$2$1);return React__default["default"].createElement(SplitButtonContext.Provider,{value:true},React__default["default"].createElement(StyledButtonGroup,_extends$2({ref:ref},other),children));});SplitButton.displayName='SplitButton';var _excluded$1$1=["isPressed"];var ToggleButton=React.forwardRef(function(_ref,ref){var isPressed=_ref.isPressed,otherProps=_objectWithoutProperties$1(_ref,_excluded$1$1);return React__default["default"].createElement(Button$1,_extends$2({"aria-pressed":isPressed,ref:ref},otherProps));});ToggleButton.displayName='ToggleButton';ToggleButton.propTypes=_objectSpread2(_objectSpread2({},Button$1.propTypes),{},{isPressed:propTypes.exports.oneOf([true,false,'mixed'])});ToggleButton.defaultProps={size:'medium'};var _excluded$7=["isPressed"];var ToggleIconButton=React.forwardRef(function(_ref,ref){var isPressed=_ref.isPressed,otherProps=_objectWithoutProperties$1(_ref,_excluded$7);return React__default["default"].createElement(IconButton,_extends$2({"aria-pressed":isPressed,ref:ref},otherProps));});ToggleIconButton.displayName='ToggleIconButton';ToggleIconButton.propTypes=_objectSpread2(_objectSpread2({},IconButton.propTypes),{},{isPressed:propTypes.exports.oneOf([true,false,'mixed'])});ToggleIconButton.defaultProps={isPill:true,isBasic:true,size:'medium'};var colorString$1={exports:{}};var colorName$1={"aliceblue":[240,248,255],"antiquewhite":[250,235,215],"aqua":[0,255,255],"aquamarine":[127,255,212],"azure":[240,255,255],"beige":[245,245,220],"bisque":[255,228,196],"black":[0,0,0],"blanchedalmond":[255,235,205],"blue":[0,0,255],"blueviolet":[138,43,226],"brown":[165,42,42],"burlywood":[222,184,135],"cadetblue":[95,158,160],"chartreuse":[127,255,0],"chocolate":[210,105,30],"coral":[255,127,80],"cornflowerblue":[100,149,237],"cornsilk":[255,248,220],"crimson":[220,20,60],"cyan":[0,255,255],"darkblue":[0,0,139],"darkcyan":[0,139,139],"darkgoldenrod":[184,134,11],"darkgray":[169,169,169],"darkgreen":[0,100,0],"darkgrey":[169,169,169],"darkkhaki":[189,183,107],"darkmagenta":[139,0,139],"darkolivegreen":[85,107,47],"darkorange":[255,140,0],"darkorchid":[153,50,204],"darkred":[139,0,0],"darksalmon":[233,150,122],"darkseagreen":[143,188,143],"darkslateblue":[72,61,139],"darkslategray":[47,79,79],"darkslategrey":[47,79,79],"darkturquoise":[0,206,209],"darkviolet":[148,0,211],"deeppink":[255,20,147],"deepskyblue":[0,191,255],"dimgray":[105,105,105],"dimgrey":[105,105,105],"dodgerblue":[30,144,255],"firebrick":[178,34,34],"floralwhite":[255,250,240],"forestgreen":[34,139,34],"fuchsia":[255,0,255],"gainsboro":[220,220,220],"ghostwhite":[248,248,255],"gold":[255,215,0],"goldenrod":[218,165,32],"gray":[128,128,128],"green":[0,128,0],"greenyellow":[173,255,47],"grey":[128,128,128],"honeydew":[240,255,240],"hotpink":[255,105,180],"indianred":[205,92,92],"indigo":[75,0,130],"ivory":[255,255,240],"khaki":[240,230,140],"lavender":[230,230,250],"lavenderblush":[255,240,245],"lawngreen":[124,252,0],"lemonchiffon":[255,250,205],"lightblue":[173,216,230],"lightcoral":[240,128,128],"lightcyan":[224,255,255],"lightgoldenrodyellow":[250,250,210],"lightgray":[211,211,211],"lightgreen":[144,238,144],"lightgrey":[211,211,211],"lightpink":[255,182,193],"lightsalmon":[255,160,122],"lightseagreen":[32,178,170],"lightskyblue":[135,206,250],"lightslategray":[119,136,153],"lightslategrey":[119,136,153],"lightsteelblue":[176,196,222],"lightyellow":[255,255,224],"lime":[0,255,0],"limegreen":[50,205,50],"linen":[250,240,230],"magenta":[255,0,255],"maroon":[128,0,0],"mediumaquamarine":[102,205,170],"mediumblue":[0,0,205],"mediumorchid":[186,85,211],"mediumpurple":[147,112,219],"mediumseagreen":[60,179,113],"mediumslateblue":[123,104,238],"mediumspringgreen":[0,250,154],"mediumturquoise":[72,209,204],"mediumvioletred":[199,21,133],"midnightblue":[25,25,112],"mintcream":[245,255,250],"mistyrose":[255,228,225],"moccasin":[255,228,181],"navajowhite":[255,222,173],"navy":[0,0,128],"oldlace":[253,245,230],"olive":[128,128,0],"olivedrab":[107,142,35],"orange":[255,165,0],"orangered":[255,69,0],"orchid":[218,112,214],"palegoldenrod":[238,232,170],"palegreen":[152,251,152],"paleturquoise":[175,238,238],"palevioletred":[219,112,147],"papayawhip":[255,239,213],"peachpuff":[255,218,185],"peru":[205,133,63],"pink":[255,192,203],"plum":[221,160,221],"powderblue":[176,224,230],"purple":[128,0,128],"rebeccapurple":[102,51,153],"red":[255,0,0],"rosybrown":[188,143,143],"royalblue":[65,105,225],"saddlebrown":[139,69,19],"salmon":[250,128,114],"sandybrown":[244,164,96],"seagreen":[46,139,87],"seashell":[255,245,238],"sienna":[160,82,45],"silver":[192,192,192],"skyblue":[135,206,235],"slateblue":[106,90,205],"slategray":[112,128,144],"slategrey":[112,128,144],"snow":[255,250,250],"springgreen":[0,255,127],"steelblue":[70,130,180],"tan":[210,180,140],"teal":[0,128,128],"thistle":[216,191,216],"tomato":[255,99,71],"turquoise":[64,224,208],"violet":[238,130,238],"wheat":[245,222,179],"white":[255,255,255],"whitesmoke":[245,245,245],"yellow":[255,255,0],"yellowgreen":[154,205,50]};var simpleSwizzle={exports:{}};var isArrayish$1=function isArrayish(obj){if(!obj||typeof obj==='string'){return false;}return obj instanceof Array||Array.isArray(obj)||obj.length>=0&&(obj.splice instanceof Function||Object.getOwnPropertyDescriptor(obj,obj.length-1)&&obj.constructor.name!=='String');};var isArrayish=isArrayish$1;var concat=Array.prototype.concat;var slice=Array.prototype.slice;var swizzle$1=simpleSwizzle.exports=function swizzle(args){var results=[];for(var i=0,len=args.length;i<len;i++){var arg=args[i];if(isArrayish(arg)){// http://jsperf.com/javascript-array-concat-vs-push/98
results=concat.call(results,slice.call(arg));}else{results.push(arg);}}return results;};swizzle$1.wrap=function(fn){return function(){return fn(swizzle$1(arguments));};};/* MIT license */var colorNames=colorName$1;var swizzle=simpleSwizzle.exports;var hasOwnProperty=Object.hasOwnProperty;var reverseNames=Object.create(null);// create a list of reverse color names
for(var name in colorNames){if(hasOwnProperty.call(colorNames,name)){reverseNames[colorNames[name]]=name;}}var cs=colorString$1.exports={to:{},get:{}};cs.get=function(string){var prefix=string.substring(0,3).toLowerCase();var val;var model;switch(prefix){case'hsl':val=cs.get.hsl(string);model='hsl';break;case'hwb':val=cs.get.hwb(string);model='hwb';break;default:val=cs.get.rgb(string);model='rgb';break;}if(!val){return null;}return{model:model,value:val};};cs.get.rgb=function(string){if(!string){return null;}var abbr=/^#([a-f0-9]{3,4})$/i;var hex=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i;var rgba=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;var per=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;var keyword=/^(\w+)$/;var rgb=[0,0,0,1];var match;var i;var hexAlpha;if(match=string.match(hex)){hexAlpha=match[2];match=match[1];for(i=0;i<3;i++){// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
var i2=i*2;rgb[i]=parseInt(match.slice(i2,i2+2),16);}if(hexAlpha){rgb[3]=parseInt(hexAlpha,16)/255;}}else if(match=string.match(abbr)){match=match[1];hexAlpha=match[3];for(i=0;i<3;i++){rgb[i]=parseInt(match[i]+match[i],16);}if(hexAlpha){rgb[3]=parseInt(hexAlpha+hexAlpha,16)/255;}}else if(match=string.match(rgba)){for(i=0;i<3;i++){rgb[i]=parseInt(match[i+1],0);}if(match[4]){if(match[5]){rgb[3]=parseFloat(match[4])*0.01;}else{rgb[3]=parseFloat(match[4]);}}}else if(match=string.match(per)){for(i=0;i<3;i++){rgb[i]=Math.round(parseFloat(match[i+1])*2.55);}if(match[4]){if(match[5]){rgb[3]=parseFloat(match[4])*0.01;}else{rgb[3]=parseFloat(match[4]);}}}else if(match=string.match(keyword)){if(match[1]==='transparent'){return[0,0,0,0];}if(!hasOwnProperty.call(colorNames,match[1])){return null;}rgb=colorNames[match[1]];rgb[3]=1;return rgb;}else{return null;}for(i=0;i<3;i++){rgb[i]=clamp(rgb[i],0,255);}rgb[3]=clamp(rgb[3],0,1);return rgb;};cs.get.hsl=function(string){if(!string){return null;}var hsl=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;var match=string.match(hsl);if(match){var alpha=parseFloat(match[4]);var h=(parseFloat(match[1])%360+360)%360;var s=clamp(parseFloat(match[2]),0,100);var l=clamp(parseFloat(match[3]),0,100);var a=clamp(isNaN(alpha)?1:alpha,0,1);return[h,s,l,a];}return null;};cs.get.hwb=function(string){if(!string){return null;}var hwb=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;var match=string.match(hwb);if(match){var alpha=parseFloat(match[4]);var h=(parseFloat(match[1])%360+360)%360;var w=clamp(parseFloat(match[2]),0,100);var b=clamp(parseFloat(match[3]),0,100);var a=clamp(isNaN(alpha)?1:alpha,0,1);return[h,w,b,a];}return null;};cs.to.hex=function(){var rgba=swizzle(arguments);return'#'+hexDouble(rgba[0])+hexDouble(rgba[1])+hexDouble(rgba[2])+(rgba[3]<1?hexDouble(Math.round(rgba[3]*255)):'');};cs.to.rgb=function(){var rgba=swizzle(arguments);return rgba.length<4||rgba[3]===1?'rgb('+Math.round(rgba[0])+', '+Math.round(rgba[1])+', '+Math.round(rgba[2])+')':'rgba('+Math.round(rgba[0])+', '+Math.round(rgba[1])+', '+Math.round(rgba[2])+', '+rgba[3]+')';};cs.to.rgb.percent=function(){var rgba=swizzle(arguments);var r=Math.round(rgba[0]/255*100);var g=Math.round(rgba[1]/255*100);var b=Math.round(rgba[2]/255*100);return rgba.length<4||rgba[3]===1?'rgb('+r+'%, '+g+'%, '+b+'%)':'rgba('+r+'%, '+g+'%, '+b+'%, '+rgba[3]+')';};cs.to.hsl=function(){var hsla=swizzle(arguments);return hsla.length<4||hsla[3]===1?'hsl('+hsla[0]+', '+hsla[1]+'%, '+hsla[2]+'%)':'hsla('+hsla[0]+', '+hsla[1]+'%, '+hsla[2]+'%, '+hsla[3]+')';};// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb=function(){var hwba=swizzle(arguments);var a='';if(hwba.length>=4&&hwba[3]!==1){a=', '+hwba[3];}return'hwb('+hwba[0]+', '+hwba[1]+'%, '+hwba[2]+'%'+a+')';};cs.to.keyword=function(rgb){return reverseNames[rgb.slice(0,3)];};// helpers
function clamp(num,min,max){return Math.min(Math.max(min,num),max);}function hexDouble(num){var str=Math.round(num).toString(16).toUpperCase();return str.length<2?'0'+str:str;}var colorName={"aliceblue":[240,248,255],"antiquewhite":[250,235,215],"aqua":[0,255,255],"aquamarine":[127,255,212],"azure":[240,255,255],"beige":[245,245,220],"bisque":[255,228,196],"black":[0,0,0],"blanchedalmond":[255,235,205],"blue":[0,0,255],"blueviolet":[138,43,226],"brown":[165,42,42],"burlywood":[222,184,135],"cadetblue":[95,158,160],"chartreuse":[127,255,0],"chocolate":[210,105,30],"coral":[255,127,80],"cornflowerblue":[100,149,237],"cornsilk":[255,248,220],"crimson":[220,20,60],"cyan":[0,255,255],"darkblue":[0,0,139],"darkcyan":[0,139,139],"darkgoldenrod":[184,134,11],"darkgray":[169,169,169],"darkgreen":[0,100,0],"darkgrey":[169,169,169],"darkkhaki":[189,183,107],"darkmagenta":[139,0,139],"darkolivegreen":[85,107,47],"darkorange":[255,140,0],"darkorchid":[153,50,204],"darkred":[139,0,0],"darksalmon":[233,150,122],"darkseagreen":[143,188,143],"darkslateblue":[72,61,139],"darkslategray":[47,79,79],"darkslategrey":[47,79,79],"darkturquoise":[0,206,209],"darkviolet":[148,0,211],"deeppink":[255,20,147],"deepskyblue":[0,191,255],"dimgray":[105,105,105],"dimgrey":[105,105,105],"dodgerblue":[30,144,255],"firebrick":[178,34,34],"floralwhite":[255,250,240],"forestgreen":[34,139,34],"fuchsia":[255,0,255],"gainsboro":[220,220,220],"ghostwhite":[248,248,255],"gold":[255,215,0],"goldenrod":[218,165,32],"gray":[128,128,128],"green":[0,128,0],"greenyellow":[173,255,47],"grey":[128,128,128],"honeydew":[240,255,240],"hotpink":[255,105,180],"indianred":[205,92,92],"indigo":[75,0,130],"ivory":[255,255,240],"khaki":[240,230,140],"lavender":[230,230,250],"lavenderblush":[255,240,245],"lawngreen":[124,252,0],"lemonchiffon":[255,250,205],"lightblue":[173,216,230],"lightcoral":[240,128,128],"lightcyan":[224,255,255],"lightgoldenrodyellow":[250,250,210],"lightgray":[211,211,211],"lightgreen":[144,238,144],"lightgrey":[211,211,211],"lightpink":[255,182,193],"lightsalmon":[255,160,122],"lightseagreen":[32,178,170],"lightskyblue":[135,206,250],"lightslategray":[119,136,153],"lightslategrey":[119,136,153],"lightsteelblue":[176,196,222],"lightyellow":[255,255,224],"lime":[0,255,0],"limegreen":[50,205,50],"linen":[250,240,230],"magenta":[255,0,255],"maroon":[128,0,0],"mediumaquamarine":[102,205,170],"mediumblue":[0,0,205],"mediumorchid":[186,85,211],"mediumpurple":[147,112,219],"mediumseagreen":[60,179,113],"mediumslateblue":[123,104,238],"mediumspringgreen":[0,250,154],"mediumturquoise":[72,209,204],"mediumvioletred":[199,21,133],"midnightblue":[25,25,112],"mintcream":[245,255,250],"mistyrose":[255,228,225],"moccasin":[255,228,181],"navajowhite":[255,222,173],"navy":[0,0,128],"oldlace":[253,245,230],"olive":[128,128,0],"olivedrab":[107,142,35],"orange":[255,165,0],"orangered":[255,69,0],"orchid":[218,112,214],"palegoldenrod":[238,232,170],"palegreen":[152,251,152],"paleturquoise":[175,238,238],"palevioletred":[219,112,147],"papayawhip":[255,239,213],"peachpuff":[255,218,185],"peru":[205,133,63],"pink":[255,192,203],"plum":[221,160,221],"powderblue":[176,224,230],"purple":[128,0,128],"rebeccapurple":[102,51,153],"red":[255,0,0],"rosybrown":[188,143,143],"royalblue":[65,105,225],"saddlebrown":[139,69,19],"salmon":[250,128,114],"sandybrown":[244,164,96],"seagreen":[46,139,87],"seashell":[255,245,238],"sienna":[160,82,45],"silver":[192,192,192],"skyblue":[135,206,235],"slateblue":[106,90,205],"slategray":[112,128,144],"slategrey":[112,128,144],"snow":[255,250,250],"springgreen":[0,255,127],"steelblue":[70,130,180],"tan":[210,180,140],"teal":[0,128,128],"thistle":[216,191,216],"tomato":[255,99,71],"turquoise":[64,224,208],"violet":[238,130,238],"wheat":[245,222,179],"white":[255,255,255],"whitesmoke":[245,245,245],"yellow":[255,255,0],"yellowgreen":[154,205,50]};/* MIT license */ /* eslint-disable no-mixed-operators */const cssKeywords=colorName;// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)
const reverseKeywords={};for(const key of Object.keys(cssKeywords)){reverseKeywords[cssKeywords[key]]=key;}const convert$2={rgb:{channels:3,labels:'rgb'},hsl:{channels:3,labels:'hsl'},hsv:{channels:3,labels:'hsv'},hwb:{channels:3,labels:'hwb'},cmyk:{channels:4,labels:'cmyk'},xyz:{channels:3,labels:'xyz'},lab:{channels:3,labels:'lab'},lch:{channels:3,labels:'lch'},hex:{channels:1,labels:['hex']},keyword:{channels:1,labels:['keyword']},ansi16:{channels:1,labels:['ansi16']},ansi256:{channels:1,labels:['ansi256']},hcg:{channels:3,labels:['h','c','g']},apple:{channels:3,labels:['r16','g16','b16']},gray:{channels:1,labels:['gray']}};var conversions$2=convert$2;// Hide .channels and .labels properties
for(const model of Object.keys(convert$2)){if(!('channels'in convert$2[model])){throw new Error('missing channels property: '+model);}if(!('labels'in convert$2[model])){throw new Error('missing channel labels property: '+model);}if(convert$2[model].labels.length!==convert$2[model].channels){throw new Error('channel and label counts mismatch: '+model);}const{channels,labels}=convert$2[model];delete convert$2[model].channels;delete convert$2[model].labels;Object.defineProperty(convert$2[model],'channels',{value:channels});Object.defineProperty(convert$2[model],'labels',{value:labels});}convert$2.rgb.hsl=function(rgb){const r=rgb[0]/255;const g=rgb[1]/255;const b=rgb[2]/255;const min=Math.min(r,g,b);const max=Math.max(r,g,b);const delta=max-min;let h;let s;if(max===min){h=0;}else if(r===max){h=(g-b)/delta;}else if(g===max){h=2+(b-r)/delta;}else if(b===max){h=4+(r-g)/delta;}h=Math.min(h*60,360);if(h<0){h+=360;}const l=(min+max)/2;if(max===min){s=0;}else if(l<=0.5){s=delta/(max+min);}else{s=delta/(2-max-min);}return[h,s*100,l*100];};convert$2.rgb.hsv=function(rgb){let rdif;let gdif;let bdif;let h;let s;const r=rgb[0]/255;const g=rgb[1]/255;const b=rgb[2]/255;const v=Math.max(r,g,b);const diff=v-Math.min(r,g,b);const diffc=function(c){return(v-c)/6/diff+1/2;};if(diff===0){h=0;s=0;}else{s=diff/v;rdif=diffc(r);gdif=diffc(g);bdif=diffc(b);if(r===v){h=bdif-gdif;}else if(g===v){h=1/3+rdif-bdif;}else if(b===v){h=2/3+gdif-rdif;}if(h<0){h+=1;}else if(h>1){h-=1;}}return[h*360,s*100,v*100];};convert$2.rgb.hwb=function(rgb){const r=rgb[0];const g=rgb[1];let b=rgb[2];const h=convert$2.rgb.hsl(rgb)[0];const w=1/255*Math.min(r,Math.min(g,b));b=1-1/255*Math.max(r,Math.max(g,b));return[h,w*100,b*100];};convert$2.rgb.cmyk=function(rgb){const r=rgb[0]/255;const g=rgb[1]/255;const b=rgb[2]/255;const k=Math.min(1-r,1-g,1-b);const c=(1-r-k)/(1-k)||0;const m=(1-g-k)/(1-k)||0;const y=(1-b-k)/(1-k)||0;return[c*100,m*100,y*100,k*100];};function comparativeDistance(x,y){/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/return(x[0]-y[0])**2+(x[1]-y[1])**2+(x[2]-y[2])**2;}convert$2.rgb.keyword=function(rgb){const reversed=reverseKeywords[rgb];if(reversed){return reversed;}let currentClosestDistance=Infinity;let currentClosestKeyword;for(const keyword of Object.keys(cssKeywords)){const value=cssKeywords[keyword];// Compute comparative distance
const distance=comparativeDistance(rgb,value);// Check if its less, if so set as closest
if(distance<currentClosestDistance){currentClosestDistance=distance;currentClosestKeyword=keyword;}}return currentClosestKeyword;};convert$2.keyword.rgb=function(keyword){return cssKeywords[keyword];};convert$2.rgb.xyz=function(rgb){let r=rgb[0]/255;let g=rgb[1]/255;let b=rgb[2]/255;// Assume sRGB
r=r>0.04045?((r+0.055)/1.055)**2.4:r/12.92;g=g>0.04045?((g+0.055)/1.055)**2.4:g/12.92;b=b>0.04045?((b+0.055)/1.055)**2.4:b/12.92;const x=r*0.4124+g*0.3576+b*0.1805;const y=r*0.2126+g*0.7152+b*0.0722;const z=r*0.0193+g*0.1192+b*0.9505;return[x*100,y*100,z*100];};convert$2.rgb.lab=function(rgb){const xyz=convert$2.rgb.xyz(rgb);let x=xyz[0];let y=xyz[1];let z=xyz[2];x/=95.047;y/=100;z/=108.883;x=x>0.008856?x**(1/3):7.787*x+16/116;y=y>0.008856?y**(1/3):7.787*y+16/116;z=z>0.008856?z**(1/3):7.787*z+16/116;const l=116*y-16;const a=500*(x-y);const b=200*(y-z);return[l,a,b];};convert$2.hsl.rgb=function(hsl){const h=hsl[0]/360;const s=hsl[1]/100;const l=hsl[2]/100;let t2;let t3;let val;if(s===0){val=l*255;return[val,val,val];}if(l<0.5){t2=l*(1+s);}else{t2=l+s-l*s;}const t1=2*l-t2;const rgb=[0,0,0];for(let i=0;i<3;i++){t3=h+1/3*-(i-1);if(t3<0){t3++;}if(t3>1){t3--;}if(6*t3<1){val=t1+(t2-t1)*6*t3;}else if(2*t3<1){val=t2;}else if(3*t3<2){val=t1+(t2-t1)*(2/3-t3)*6;}else{val=t1;}rgb[i]=val*255;}return rgb;};convert$2.hsl.hsv=function(hsl){const h=hsl[0];let s=hsl[1]/100;let l=hsl[2]/100;let smin=s;const lmin=Math.max(l,0.01);l*=2;s*=l<=1?l:2-l;smin*=lmin<=1?lmin:2-lmin;const v=(l+s)/2;const sv=l===0?2*smin/(lmin+smin):2*s/(l+s);return[h,sv*100,v*100];};convert$2.hsv.rgb=function(hsv){const h=hsv[0]/60;const s=hsv[1]/100;let v=hsv[2]/100;const hi=Math.floor(h)%6;const f=h-Math.floor(h);const p=255*v*(1-s);const q=255*v*(1-s*f);const t=255*v*(1-s*(1-f));v*=255;switch(hi){case 0:return[v,t,p];case 1:return[q,v,p];case 2:return[p,v,t];case 3:return[p,q,v];case 4:return[t,p,v];case 5:return[v,p,q];}};convert$2.hsv.hsl=function(hsv){const h=hsv[0];const s=hsv[1]/100;const v=hsv[2]/100;const vmin=Math.max(v,0.01);let sl;let l;l=(2-s)*v;const lmin=(2-s)*vmin;sl=s*vmin;sl/=lmin<=1?lmin:2-lmin;sl=sl||0;l/=2;return[h,sl*100,l*100];};// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert$2.hwb.rgb=function(hwb){const h=hwb[0]/360;let wh=hwb[1]/100;let bl=hwb[2]/100;const ratio=wh+bl;let f;// Wh + bl cant be > 1
if(ratio>1){wh/=ratio;bl/=ratio;}const i=Math.floor(6*h);const v=1-bl;f=6*h-i;if((i&0x01)!==0){f=1-f;}const n=wh+f*(v-wh);// Linear interpolation
let r;let g;let b;/* eslint-disable max-statements-per-line,no-multi-spaces */switch(i){default:case 6:case 0:r=v;g=n;b=wh;break;case 1:r=n;g=v;b=wh;break;case 2:r=wh;g=v;b=n;break;case 3:r=wh;g=n;b=v;break;case 4:r=n;g=wh;b=v;break;case 5:r=v;g=wh;b=n;break;}/* eslint-enable max-statements-per-line,no-multi-spaces */return[r*255,g*255,b*255];};convert$2.cmyk.rgb=function(cmyk){const c=cmyk[0]/100;const m=cmyk[1]/100;const y=cmyk[2]/100;const k=cmyk[3]/100;const r=1-Math.min(1,c*(1-k)+k);const g=1-Math.min(1,m*(1-k)+k);const b=1-Math.min(1,y*(1-k)+k);return[r*255,g*255,b*255];};convert$2.xyz.rgb=function(xyz){const x=xyz[0]/100;const y=xyz[1]/100;const z=xyz[2]/100;let r;let g;let b;r=x*3.2406+y*-1.5372+z*-0.4986;g=x*-0.9689+y*1.8758+z*0.0415;b=x*0.0557+y*-0.2040+z*1.0570;// Assume sRGB
r=r>0.0031308?1.055*r**(1.0/2.4)-0.055:r*12.92;g=g>0.0031308?1.055*g**(1.0/2.4)-0.055:g*12.92;b=b>0.0031308?1.055*b**(1.0/2.4)-0.055:b*12.92;r=Math.min(Math.max(0,r),1);g=Math.min(Math.max(0,g),1);b=Math.min(Math.max(0,b),1);return[r*255,g*255,b*255];};convert$2.xyz.lab=function(xyz){let x=xyz[0];let y=xyz[1];let z=xyz[2];x/=95.047;y/=100;z/=108.883;x=x>0.008856?x**(1/3):7.787*x+16/116;y=y>0.008856?y**(1/3):7.787*y+16/116;z=z>0.008856?z**(1/3):7.787*z+16/116;const l=116*y-16;const a=500*(x-y);const b=200*(y-z);return[l,a,b];};convert$2.lab.xyz=function(lab){const l=lab[0];const a=lab[1];const b=lab[2];let x;let y;let z;y=(l+16)/116;x=a/500+y;z=y-b/200;const y2=y**3;const x2=x**3;const z2=z**3;y=y2>0.008856?y2:(y-16/116)/7.787;x=x2>0.008856?x2:(x-16/116)/7.787;z=z2>0.008856?z2:(z-16/116)/7.787;x*=95.047;y*=100;z*=108.883;return[x,y,z];};convert$2.lab.lch=function(lab){const l=lab[0];const a=lab[1];const b=lab[2];let h;const hr=Math.atan2(b,a);h=hr*360/2/Math.PI;if(h<0){h+=360;}const c=Math.sqrt(a*a+b*b);return[l,c,h];};convert$2.lch.lab=function(lch){const l=lch[0];const c=lch[1];const h=lch[2];const hr=h/360*2*Math.PI;const a=c*Math.cos(hr);const b=c*Math.sin(hr);return[l,a,b];};convert$2.rgb.ansi16=function(args,saturation=null){const[r,g,b]=args;let value=saturation===null?convert$2.rgb.hsv(args)[2]:saturation;// Hsv -> ansi16 optimization
value=Math.round(value/50);if(value===0){return 30;}let ansi=30+(Math.round(b/255)<<2|Math.round(g/255)<<1|Math.round(r/255));if(value===2){ansi+=60;}return ansi;};convert$2.hsv.ansi16=function(args){// Optimization here; we already know the value and don't need to get
// it converted for us.
return convert$2.rgb.ansi16(convert$2.hsv.rgb(args),args[2]);};convert$2.rgb.ansi256=function(args){const r=args[0];const g=args[1];const b=args[2];// We use the extended greyscale palette here, with the exception of
// black and white. normal palette only has 4 greyscale shades.
if(r===g&&g===b){if(r<8){return 16;}if(r>248){return 231;}return Math.round((r-8)/247*24)+232;}const ansi=16+36*Math.round(r/255*5)+6*Math.round(g/255*5)+Math.round(b/255*5);return ansi;};convert$2.ansi16.rgb=function(args){let color=args%10;// Handle greyscale
if(color===0||color===7){if(args>50){color+=3.5;}color=color/10.5*255;return[color,color,color];}const mult=(~~(args>50)+1)*0.5;const r=(color&1)*mult*255;const g=(color>>1&1)*mult*255;const b=(color>>2&1)*mult*255;return[r,g,b];};convert$2.ansi256.rgb=function(args){// Handle greyscale
if(args>=232){const c=(args-232)*10+8;return[c,c,c];}args-=16;let rem;const r=Math.floor(args/36)/5*255;const g=Math.floor((rem=args%36)/6)/5*255;const b=rem%6/5*255;return[r,g,b];};convert$2.rgb.hex=function(args){const integer=((Math.round(args[0])&0xFF)<<16)+((Math.round(args[1])&0xFF)<<8)+(Math.round(args[2])&0xFF);const string=integer.toString(16).toUpperCase();return'000000'.substring(string.length)+string;};convert$2.hex.rgb=function(args){const match=args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!match){return[0,0,0];}let colorString=match[0];if(match[0].length===3){colorString=colorString.split('').map(char=>{return char+char;}).join('');}const integer=parseInt(colorString,16);const r=integer>>16&0xFF;const g=integer>>8&0xFF;const b=integer&0xFF;return[r,g,b];};convert$2.rgb.hcg=function(rgb){const r=rgb[0]/255;const g=rgb[1]/255;const b=rgb[2]/255;const max=Math.max(Math.max(r,g),b);const min=Math.min(Math.min(r,g),b);const chroma=max-min;let grayscale;let hue;if(chroma<1){grayscale=min/(1-chroma);}else{grayscale=0;}if(chroma<=0){hue=0;}else if(max===r){hue=(g-b)/chroma%6;}else if(max===g){hue=2+(b-r)/chroma;}else{hue=4+(r-g)/chroma;}hue/=6;hue%=1;return[hue*360,chroma*100,grayscale*100];};convert$2.hsl.hcg=function(hsl){const s=hsl[1]/100;const l=hsl[2]/100;const c=l<0.5?2.0*s*l:2.0*s*(1.0-l);let f=0;if(c<1.0){f=(l-0.5*c)/(1.0-c);}return[hsl[0],c*100,f*100];};convert$2.hsv.hcg=function(hsv){const s=hsv[1]/100;const v=hsv[2]/100;const c=s*v;let f=0;if(c<1.0){f=(v-c)/(1-c);}return[hsv[0],c*100,f*100];};convert$2.hcg.rgb=function(hcg){const h=hcg[0]/360;const c=hcg[1]/100;const g=hcg[2]/100;if(c===0.0){return[g*255,g*255,g*255];}const pure=[0,0,0];const hi=h%1*6;const v=hi%1;const w=1-v;let mg=0;/* eslint-disable max-statements-per-line */switch(Math.floor(hi)){case 0:pure[0]=1;pure[1]=v;pure[2]=0;break;case 1:pure[0]=w;pure[1]=1;pure[2]=0;break;case 2:pure[0]=0;pure[1]=1;pure[2]=v;break;case 3:pure[0]=0;pure[1]=w;pure[2]=1;break;case 4:pure[0]=v;pure[1]=0;pure[2]=1;break;default:pure[0]=1;pure[1]=0;pure[2]=w;}/* eslint-enable max-statements-per-line */mg=(1.0-c)*g;return[(c*pure[0]+mg)*255,(c*pure[1]+mg)*255,(c*pure[2]+mg)*255];};convert$2.hcg.hsv=function(hcg){const c=hcg[1]/100;const g=hcg[2]/100;const v=c+g*(1.0-c);let f=0;if(v>0.0){f=c/v;}return[hcg[0],f*100,v*100];};convert$2.hcg.hsl=function(hcg){const c=hcg[1]/100;const g=hcg[2]/100;const l=g*(1.0-c)+0.5*c;let s=0;if(l>0.0&&l<0.5){s=c/(2*l);}else if(l>=0.5&&l<1.0){s=c/(2*(1-l));}return[hcg[0],s*100,l*100];};convert$2.hcg.hwb=function(hcg){const c=hcg[1]/100;const g=hcg[2]/100;const v=c+g*(1.0-c);return[hcg[0],(v-c)*100,(1-v)*100];};convert$2.hwb.hcg=function(hwb){const w=hwb[1]/100;const b=hwb[2]/100;const v=1-b;const c=v-w;let g=0;if(c<1){g=(v-c)/(1-c);}return[hwb[0],c*100,g*100];};convert$2.apple.rgb=function(apple){return[apple[0]/65535*255,apple[1]/65535*255,apple[2]/65535*255];};convert$2.rgb.apple=function(rgb){return[rgb[0]/255*65535,rgb[1]/255*65535,rgb[2]/255*65535];};convert$2.gray.rgb=function(args){return[args[0]/100*255,args[0]/100*255,args[0]/100*255];};convert$2.gray.hsl=function(args){return[0,0,args[0]];};convert$2.gray.hsv=convert$2.gray.hsl;convert$2.gray.hwb=function(gray){return[0,100,gray[0]];};convert$2.gray.cmyk=function(gray){return[0,0,0,gray[0]];};convert$2.gray.lab=function(gray){return[gray[0],0,0];};convert$2.gray.hex=function(gray){const val=Math.round(gray[0]/100*255)&0xFF;const integer=(val<<16)+(val<<8)+val;const string=integer.toString(16).toUpperCase();return'000000'.substring(string.length)+string;};convert$2.rgb.gray=function(rgb){const val=(rgb[0]+rgb[1]+rgb[2])/3;return[val/255*100];};const conversions$1=conversions$2;/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/function buildGraph(){const graph={};// https://jsperf.com/object-keys-vs-for-in-with-closure/3
const models=Object.keys(conversions$1);for(let len=models.length,i=0;i<len;i++){graph[models[i]]={// http://jsperf.com/1-vs-infinity
// micro-opt, but this is simple.
distance:-1,parent:null};}return graph;}// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel){const graph=buildGraph();const queue=[fromModel];// Unshift -> queue -> pop
graph[fromModel].distance=0;while(queue.length){const current=queue.pop();const adjacents=Object.keys(conversions$1[current]);for(let len=adjacents.length,i=0;i<len;i++){const adjacent=adjacents[i];const node=graph[adjacent];if(node.distance===-1){node.distance=graph[current].distance+1;node.parent=current;queue.unshift(adjacent);}}}return graph;}function link(from,to){return function(args){return to(from(args));};}function wrapConversion(toModel,graph){const path=[graph[toModel].parent,toModel];let fn=conversions$1[graph[toModel].parent][toModel];let cur=graph[toModel].parent;while(graph[cur].parent){path.unshift(graph[cur].parent);fn=link(conversions$1[graph[cur].parent][cur],fn);cur=graph[cur].parent;}fn.conversion=path;return fn;}var route$1=function(fromModel){const graph=deriveBFS(fromModel);const conversion={};const models=Object.keys(graph);for(let len=models.length,i=0;i<len;i++){const toModel=models[i];const node=graph[toModel];if(node.parent===null){// No possible conversion, or this node is the source model.
continue;}conversion[toModel]=wrapConversion(toModel,graph);}return conversion;};const conversions=conversions$2;const route=route$1;const convert$1={};const models=Object.keys(conversions);function wrapRaw(fn){const wrappedFn=function(...args){const arg0=args[0];if(arg0===undefined||arg0===null){return arg0;}if(arg0.length>1){args=arg0;}return fn(args);};// Preserve .conversion property if there is one
if('conversion'in fn){wrappedFn.conversion=fn.conversion;}return wrappedFn;}function wrapRounded(fn){const wrappedFn=function(...args){const arg0=args[0];if(arg0===undefined||arg0===null){return arg0;}if(arg0.length>1){args=arg0;}const result=fn(args);// We're assuming the result is an array here.
// see notice in conversions.js; don't use box types
// in conversion functions.
if(typeof result==='object'){for(let len=result.length,i=0;i<len;i++){result[i]=Math.round(result[i]);}}return result;};// Preserve .conversion property if there is one
if('conversion'in fn){wrappedFn.conversion=fn.conversion;}return wrappedFn;}models.forEach(fromModel=>{convert$1[fromModel]={};Object.defineProperty(convert$1[fromModel],'channels',{value:conversions[fromModel].channels});Object.defineProperty(convert$1[fromModel],'labels',{value:conversions[fromModel].labels});const routes=route(fromModel);const routeModels=Object.keys(routes);routeModels.forEach(toModel=>{const fn=routes[toModel];convert$1[fromModel][toModel]=wrapRounded(fn);convert$1[fromModel][toModel].raw=wrapRaw(fn);});});var colorConvert=convert$1;const colorString=colorString$1.exports;const convert=colorConvert;const skippedModels=[// To be honest, I don't really feel like keyword belongs in color convert, but eh.
'keyword',// Gray conflicts with some method names, and has its own method defined.
'gray',// Shouldn't really be in color-convert either...
'hex'];const hashedModelKeys={};for(const model of Object.keys(convert)){hashedModelKeys[[...convert[model].labels].sort().join('')]=model;}const limiters={};function Color(object,model){if(!(this instanceof Color)){return new Color(object,model);}if(model&&model in skippedModels){model=null;}if(model&&!(model in convert)){throw new Error('Unknown model: '+model);}let i;let channels;if(object==null){// eslint-disable-line no-eq-null,eqeqeq
this.model='rgb';this.color=[0,0,0];this.valpha=1;}else if(object instanceof Color){this.model=object.model;this.color=[...object.color];this.valpha=object.valpha;}else if(typeof object==='string'){const result=colorString.get(object);if(result===null){throw new Error('Unable to parse color from string: '+object);}this.model=result.model;channels=convert[this.model].channels;this.color=result.value.slice(0,channels);this.valpha=typeof result.value[channels]==='number'?result.value[channels]:1;}else if(object.length>0){this.model=model||'rgb';channels=convert[this.model].channels;const newArray=Array.prototype.slice.call(object,0,channels);this.color=zeroArray(newArray,channels);this.valpha=typeof object[channels]==='number'?object[channels]:1;}else if(typeof object==='number'){// This is always RGB - can be converted later on.
this.model='rgb';this.color=[object>>16&0xFF,object>>8&0xFF,object&0xFF];this.valpha=1;}else{this.valpha=1;const keys=Object.keys(object);if('alpha'in object){keys.splice(keys.indexOf('alpha'),1);this.valpha=typeof object.alpha==='number'?object.alpha:0;}const hashedKeys=keys.sort().join('');if(!(hashedKeys in hashedModelKeys)){throw new Error('Unable to parse color from object: '+JSON.stringify(object));}this.model=hashedModelKeys[hashedKeys];const{labels}=convert[this.model];const color=[];for(i=0;i<labels.length;i++){color.push(object[labels[i]]);}this.color=zeroArray(color);}// Perform limitations (clamping, etc.)
if(limiters[this.model]){channels=convert[this.model].channels;for(i=0;i<channels;i++){const limit=limiters[this.model][i];if(limit){this.color[i]=limit(this.color[i]);}}}this.valpha=Math.max(0,Math.min(1,this.valpha));if(Object.freeze){Object.freeze(this);}}Color.prototype={toString(){return this.string();},toJSON(){return this[this.model]();},string(places){let self=this.model in colorString.to?this:this.rgb();self=self.round(typeof places==='number'?places:1);const args=self.valpha===1?self.color:[...self.color,this.valpha];return colorString.to[self.model](args);},percentString(places){const self=this.rgb().round(typeof places==='number'?places:1);const args=self.valpha===1?self.color:[...self.color,this.valpha];return colorString.to.rgb.percent(args);},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha];},object(){const result={};const{channels}=convert[this.model];const{labels}=convert[this.model];for(let i=0;i<channels;i++){result[labels[i]]=this.color[i];}if(this.valpha!==1){result.alpha=this.valpha;}return result;},unitArray(){const rgb=this.rgb().color;rgb[0]/=255;rgb[1]/=255;rgb[2]/=255;if(this.valpha!==1){rgb.push(this.valpha);}return rgb;},unitObject(){const rgb=this.rgb().object();rgb.r/=255;rgb.g/=255;rgb.b/=255;if(this.valpha!==1){rgb.alpha=this.valpha;}return rgb;},round(places){places=Math.max(places||0,0);return new Color([...this.color.map(roundToPlace(places)),this.valpha],this.model);},alpha(value){if(value!==undefined){return new Color([...this.color,Math.max(0,Math.min(1,value))],this.model);}return this.valpha;},// Rgb
red:getset('rgb',0,maxfn(255)),green:getset('rgb',1,maxfn(255)),blue:getset('rgb',2,maxfn(255)),hue:getset(['hsl','hsv','hsl','hwb','hcg'],0,value=>(value%360+360)%360),saturationl:getset('hsl',1,maxfn(100)),lightness:getset('hsl',2,maxfn(100)),saturationv:getset('hsv',1,maxfn(100)),value:getset('hsv',2,maxfn(100)),chroma:getset('hcg',1,maxfn(100)),gray:getset('hcg',2,maxfn(100)),white:getset('hwb',1,maxfn(100)),wblack:getset('hwb',2,maxfn(100)),cyan:getset('cmyk',0,maxfn(100)),magenta:getset('cmyk',1,maxfn(100)),yellow:getset('cmyk',2,maxfn(100)),black:getset('cmyk',3,maxfn(100)),x:getset('xyz',0,maxfn(95.047)),y:getset('xyz',1,maxfn(100)),z:getset('xyz',2,maxfn(108.833)),l:getset('lab',0,maxfn(100)),a:getset('lab',1),b:getset('lab',2),keyword(value){if(value!==undefined){return new Color(value);}return convert[this.model].keyword(this.color);},hex(value){if(value!==undefined){return new Color(value);}return colorString.to.hex(this.rgb().round().color);},hexa(value){if(value!==undefined){return new Color(value);}const rgbArray=this.rgb().round().color;let alphaHex=Math.round(this.valpha*255).toString(16).toUpperCase();if(alphaHex.length===1){alphaHex='0'+alphaHex;}return colorString.to.hex(rgbArray)+alphaHex;},rgbNumber(){const rgb=this.rgb().color;return(rgb[0]&0xFF)<<16|(rgb[1]&0xFF)<<8|rgb[2]&0xFF;},luminosity(){// http://www.w3.org/TR/WCAG20/#relativeluminancedef
const rgb=this.rgb().color;const lum=[];for(const[i,element]of rgb.entries()){const chan=element/255;lum[i]=chan<=0.04045?chan/12.92:((chan+0.055)/1.055)**2.4;}return 0.2126*lum[0]+0.7152*lum[1]+0.0722*lum[2];},contrast(color2){// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
const lum1=this.luminosity();const lum2=color2.luminosity();if(lum1>lum2){return(lum1+0.05)/(lum2+0.05);}return(lum2+0.05)/(lum1+0.05);},level(color2){// https://www.w3.org/TR/WCAG/#contrast-enhanced
const contrastRatio=this.contrast(color2);if(contrastRatio>=7){return'AAA';}return contrastRatio>=4.5?'AA':'';},isDark(){// YIQ equation from http://24ways.org/2010/calculating-color-contrast
const rgb=this.rgb().color;const yiq=(rgb[0]*2126+rgb[1]*7152+rgb[2]*722)/10000;return yiq<128;},isLight(){return!this.isDark();},negate(){const rgb=this.rgb();for(let i=0;i<3;i++){rgb.color[i]=255-rgb.color[i];}return rgb;},lighten(ratio){const hsl=this.hsl();hsl.color[2]+=hsl.color[2]*ratio;return hsl;},darken(ratio){const hsl=this.hsl();hsl.color[2]-=hsl.color[2]*ratio;return hsl;},saturate(ratio){const hsl=this.hsl();hsl.color[1]+=hsl.color[1]*ratio;return hsl;},desaturate(ratio){const hsl=this.hsl();hsl.color[1]-=hsl.color[1]*ratio;return hsl;},whiten(ratio){const hwb=this.hwb();hwb.color[1]+=hwb.color[1]*ratio;return hwb;},blacken(ratio){const hwb=this.hwb();hwb.color[2]+=hwb.color[2]*ratio;return hwb;},grayscale(){// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
const rgb=this.rgb().color;const value=rgb[0]*0.3+rgb[1]*0.59+rgb[2]*0.11;return Color.rgb(value,value,value);},fade(ratio){return this.alpha(this.valpha-this.valpha*ratio);},opaquer(ratio){return this.alpha(this.valpha+this.valpha*ratio);},rotate(degrees){const hsl=this.hsl();let hue=hsl.color[0];hue=(hue+degrees)%360;hue=hue<0?360+hue:hue;hsl.color[0]=hue;return hsl;},mix(mixinColor,weight){// Ported from sass implementation in C
// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
if(!mixinColor||!mixinColor.rgb){throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof mixinColor);}const color1=mixinColor.rgb();const color2=this.rgb();const p=weight===undefined?0.5:weight;const w=2*p-1;const a=color1.alpha()-color2.alpha();const w1=((w*a===-1?w:(w+a)/(1+w*a))+1)/2;const w2=1-w1;return Color.rgb(w1*color1.red()+w2*color2.red(),w1*color1.green()+w2*color2.green(),w1*color1.blue()+w2*color2.blue(),color1.alpha()*p+color2.alpha()*(1-p));}};// Model conversion methods and static constructors
for(const model of Object.keys(convert)){if(skippedModels.includes(model)){continue;}const{channels}=convert[model];// Conversion methods
Color.prototype[model]=function(...args){if(this.model===model){return new Color(this);}if(args.length>0){return new Color(args,model);}return new Color([...assertArray(convert[this.model][model].raw(this.color)),this.valpha],model);};// 'static' construction methods
Color[model]=function(...args){let color=args[0];if(typeof color==='number'){color=zeroArray(args,channels);}return new Color(color,model);};}function roundTo(number,places){return Number(number.toFixed(places));}function roundToPlace(places){return function(number){return roundTo(number,places);};}function getset(model,channel,modifier){model=Array.isArray(model)?model:[model];for(const m of model){(limiters[m]||(limiters[m]=[]))[channel]=modifier;}model=model[0];return function(value){let result;if(value!==undefined){if(modifier){value=modifier(value);}result=this[model]();result.color[channel]=value;return result;}result=this[model]().color[channel];if(modifier){result=modifier(result);}return result;};}function maxfn(max){return function(v){return Math.max(0,Math.min(max,v));};}function assertArray(value){return Array.isArray(value)?value:[value];}function zeroArray(array,length){for(let i=0;i<length;i++){if(typeof array[i]!=='number'){array[i]=0;}}return array;}var color=Color;var COLORS={RED:"#e35b66",PALE_PINK:"#cfa0b6",PURPLE:"#8f749c",MIDNIGHT_PURPLE:"#4f4f64",LIGHT_BLUE:"#5293c7",BLUE:"#3271A4",JAZZ_MAN_BLUE:"#4a5965",// JAZZ_MAN_BLUE      : "#2f3941",
MIDNIGHT_BLUE:"#2a2b30",BLUE_GREEN:"#419eb6",// TEAL             : "#51a9ab",
TEAL:"#4dc0b5",// GREEN            : "#56ba8b",
GREEN:"#57ad8b",// YELLOW             : "#ffc855",
YELLOW:"#ffbe6d",// YELLOW           : "#f1bc71",
ORANGE:"#ff9369",HUB_SPOT_ORANGE:"rgb(255, 122, 89)",MIDNIGHT_BLACK:"#1d1e21",BLACK:"#1f1f1f",WHITE:"#ffffff",GREY_NOT_QUITE_BLUE:"#b0b7bd",GREY:"#919292",VERY_LIGHT_GREY:"#F7F7F7",LIGHT_GREY:"#dddddd",TRANSPARENT:"#00000000"};Object.freeze(COLORS);var light=function(c,amount){if(amount===void 0){amount=0.15;}var newColor=color(c).lighten(amount).hex();// console.log("lightening to:", newColor)
// console.log("luminosity old:", Color(c).luminosity())
// console.log("luminosity new:", Color(newColor).luminosity())
return newColor;};var lighter=function(c){return light(c,0.25);};var lightness=function(c,amount){if(amount===void 0){amount=95;}return color(c).lightness(amount).hex();};var lightnessDelta=function(c,delta){var currentColor=color(c);var currentLightness=currentColor.lightness();var newLightness=currentLightness+delta;var isTooBlackOrWhite=newLightness===0||newLightness===100;if(isTooBlackOrWhite)newLightness=currentLightness+delta/2;return currentColor.lightness(newLightness).hex();};var dark=function(c,amount){if(amount===void 0){amount=0.2;}return color(c).darken(amount).hex();};var darker=function(c){return dark(c,0.3);};styled.css(templateObject_1$4||(templateObject_1$4=__makeTemplateObject(["\n  background: ",";\n  color: ",";\n"],["\n  background: ",";\n  color: ",";\n"])),function(_a){var theme=_a.theme;return theme.styles.colorPrimary;},function(_a){var theme=_a.theme;var _b=theme.styles,getTextColorForBackground=_b.getTextColorForBackground,colorPrimary=_b.colorPrimary;return getTextColorForBackground({color:colorPrimary,theme:theme});});var textColorForBackground=styled.css(templateObject_2$4||(templateObject_2$4=__makeTemplateObject(["\n  color: ",";\n"],["\n  color: ",";\n"])),function(props){return props.theme.styles.getTextColorForBackground(props);});styled.css(templateObject_3$4||(templateObject_3$4=__makeTemplateObject(["\n  color: ",";\n"],["\n  color: ",";\n"])),function(_a){var theme=_a.theme;return theme.styles.textColorPrimary;});var textWithColor=styled.css(templateObject_4$3||(templateObject_4$3=__makeTemplateObject(["\n  color: ",";\n"],["\n  color: ",";\n"])),function(_a){var color=_a.color;return color===COLORS.YELLOW?darker(color):color;});var templateObject_1$4,templateObject_2$4,templateObject_3$4,templateObject_4$3;var getInlineStyling=styled.css(templateObject_1$3||(templateObject_1$3=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),function(_a){var inline=_a.inline;return inline?inlineWithText:"";});var inlineWithText=styled.css(templateObject_2$3||(templateObject_2$3=__makeTemplateObject(["\n  padding: 0;\n  //width: unset;\n  min-width: auto;\n  line-height: normal;\n"],["\n  padding: 0;\n  //width: unset;\n  min-width: auto;\n  line-height: normal;\n"])));var textColorForButton=styled.css(templateObject_3$3||(templateObject_3$3=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),function(_a){var flat=_a.flat,inline=_a.inline,primary=_a.primary;return flat||inline||!primary?textColorForFlatButton:textColorForBackground;});var textColorForFlatButton=styled.css(templateObject_4$2||(templateObject_4$2=__makeTemplateObject(["\n  ","\n  ","\n"],["\n  ","\n  ","\n"])),textWithColor,function(_a){var inline=_a.inline;return inline?inlineButtonStates:flatButtonStates;});var buttonLikeHoverable=styled.css(templateObject_5$1||(templateObject_5$1=__makeTemplateObject(["\n  background: ",";\n\n  :hover {\n    background: ",";\n  }\n\n  :active {\n    background: ",";\n  }\n\n  ","\n"],["\n  background: ",";\n\n  :hover {\n    background: ",";\n  }\n\n  :active {\n    background: ",";\n  }\n\n  ","\n"])),function(_a){var flat=_a.flat,primary=_a.primary,inline=_a.inline,color=_a.color;return flat||!primary||inline?"transparent":color;},function(_a){var primary=_a.primary,color=_a.color;return primary?lightnessDelta(color,10):lightness(color,95);},function(_a){var primary=_a.primary,color=_a.color;return primary?dark(color):lightness(color,85);},textColorForButton);var flatButtonStates=styled.css(templateObject_6$1||(templateObject_6$1=__makeTemplateObject(["\n  :hover, :active {\n    color: ",";\n  }\n"],["\n  :hover, :active {\n    color: ",";\n  }\n"])),function(_a){var color=_a.color;return dark(color);});var inlineButtonStates=styled.css(templateObject_7$1||(templateObject_7$1=__makeTemplateObject(["\n  :hover:hover, :focus:focus {\n    color: ",";\n    background-color: unset;\n  }\n\n  :active:active {\n    color: ",";\n    background-color: unset;\n  }\n"],["\n  :hover:hover, :focus:focus {\n    color: ",";\n    background-color: unset;\n  }\n\n  :active:active {\n    color: ",";\n    background-color: unset;\n  }\n"])),function(props){return lighter(props.color);},function(props){return dark(props.color);});var templateObject_1$3,templateObject_2$3,templateObject_3$3,templateObject_4$2,templateObject_5$1,templateObject_6$1,templateObject_7$1;var lodash={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(module,exports){(function(){/** Used as a safe reference for `undefined` in pre-ES5 environments. */var undefined$1;/** Used as the semantic version number. */var VERSION='4.17.21';/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Error message constants. */var CORE_ERROR_TEXT='Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',FUNC_ERROR_TEXT='Expected a function',INVALID_TEMPL_VAR_ERROR_TEXT='Invalid `variable` option passed into `_.template`';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/** Used as the internal argument placeholder. */var PLACEHOLDER='__lodash_placeholder__';/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** Used to compose bitmasks for function metadata. */var WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_BOUND_FLAG=4,WRAP_CURRY_FLAG=8,WRAP_CURRY_RIGHT_FLAG=16,WRAP_PARTIAL_FLAG=32,WRAP_PARTIAL_RIGHT_FLAG=64,WRAP_ARY_FLAG=128,WRAP_REARG_FLAG=256,WRAP_FLIP_FLAG=512;/** Used as default options for `_.truncate`. */var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION='...';/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/** Used to indicate the type of lazy iteratees. */var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;/** Used to associate wrap methods with their bit flags. */var wrapFlags=[['ary',WRAP_ARY_FLAG],['bind',WRAP_BIND_FLAG],['bindKey',WRAP_BIND_KEY_FLAG],['curry',WRAP_CURRY_FLAG],['curryRight',WRAP_CURRY_RIGHT_FLAG],['flip',WRAP_FLIP_FLAG],['partial',WRAP_PARTIAL_FLAG],['partialRight',WRAP_PARTIAL_RIGHT_FLAG],['rearg',WRAP_REARG_FLAG]];/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',asyncTag='[object AsyncFunction]',boolTag='[object Boolean]',dateTag='[object Date]',domExcTag='[object DOMException]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',nullTag='[object Null]',objectTag='[object Object]',promiseTag='[object Promise]',proxyTag='[object Proxy]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',undefinedTag='[object Undefined]',weakMapTag='[object WeakMap]',weakSetTag='[object WeakSet]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to match empty string literals in compiled template source. */var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;/** Used to match HTML entities and HTML characters. */var reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml=/[&<>"']/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
	   * Used to match `RegExp`
	   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);/** Used to match leading whitespace. */var reTrimStart=/^\s+/;/** Used to match a single whitespace character. */var reWhitespace=/\s/;/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;/** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;/**
	   * Used to validate the `validate` option in `_.template` variable.
	   *
	   * Forbids characters which could potentially change the meaning of the function argument definition:
	   * - "()," (modification of function parameters)
	   * - "=" (default value)
	   * - "[]{}" (destructuring of function parameters)
	   * - "/" (beginning of a comment)
	   * - whitespace
	   */var reForbiddenIdentifierChars=/[()=,{}\[\]\/\s]/;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
	   * Used to match
	   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
	   */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to match Latin Unicode letters (excluding mathematical operators). */var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;/** Used to compose unicode character classes. */var rsAstralRange='\\ud800-\\udfff',rsComboMarksRange='\\u0300-\\u036f',reComboHalfMarksRange='\\ufe20-\\ufe2f',rsComboSymbolsRange='\\u20d0-\\u20ff',rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange='\\u2700-\\u27bf',rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff',rsMathOpRange='\\xac\\xb1\\xd7\\xf7',rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',rsPunctuationRange='\\u2000-\\u206f',rsSpaceRange=' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde',rsVarRange='\\ufe0e\\ufe0f',rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;/** Used to compose unicode capture groups. */var rsApos="['\u2019]",rsAstral='['+rsAstralRange+']',rsBreak='['+rsBreakRange+']',rsCombo='['+rsComboRange+']',rsDigits='\\d+',rsDingbat='['+rsDingbatRange+']',rsLower='['+rsLowerRange+']',rsMisc='[^'+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']',rsFitz='\\ud83c[\\udffb-\\udfff]',rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional='(?:\\ud83c[\\udde6-\\uddff]){2}',rsSurrPair='[\\ud800-\\udbff][\\udc00-\\udfff]',rsUpper='['+rsUpperRange+']',rsZWJ='\\u200d';/** Used to compose unicode regexes. */var rsMiscLower='(?:'+rsLower+'|'+rsMisc+')',rsMiscUpper='(?:'+rsUpper+'|'+rsMisc+')',rsOptContrLower='(?:'+rsApos+'(?:d|ll|m|re|s|t|ve))?',rsOptContrUpper='(?:'+rsApos+'(?:D|LL|M|RE|S|T|VE))?',reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsOrdLower='\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',rsOrdUpper='\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji='(?:'+[rsDingbat,rsRegional,rsSurrPair].join('|')+')'+rsSeq,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';/** Used to match apostrophes. */var reApos=RegExp(rsApos,'g');/**
	   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	   */var reComboMark=RegExp(rsCombo,'g');/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');/** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper+'?'+rsLower+'+'+rsOptContrLower+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',rsMiscUpper+'+'+rsOptContrUpper+'(?='+[rsBreak,rsUpper+rsMiscLower,'$'].join('|')+')',rsUpper+'?'+rsMiscLower+'+'+rsOptContrLower,rsUpper+'+'+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join('|'),'g');/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('['+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+']');/** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;/** Used to assign default `context` object properties. */var contextProps=['Array','Buffer','DataView','Date','Error','Float32Array','Float64Array','Function','Int8Array','Int16Array','Int32Array','Map','Math','Object','Promise','RegExp','Set','String','Symbol','TypeError','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap','_','clearTimeout','isFinite','parseInt','setTimeout'];/** Used to make template sourceURLs easier to identify. */var templateCounter=-1;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Used to map Latin Unicode letters to basic Latin letters. */var deburredLetters={// Latin-1 Supplement block.
'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcc':'I','\xcd':'I','\xce':'I','\xcf':'I','\xec':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss',// Latin Extended-A block.
'\u0100':'A','\u0102':'A','\u0104':'A','\u0101':'a','\u0103':'a','\u0105':'a','\u0106':'C','\u0108':'C','\u010a':'C','\u010c':'C','\u0107':'c','\u0109':'c','\u010b':'c','\u010d':'c','\u010e':'D','\u0110':'D','\u010f':'d','\u0111':'d','\u0112':'E','\u0114':'E','\u0116':'E','\u0118':'E','\u011a':'E','\u0113':'e','\u0115':'e','\u0117':'e','\u0119':'e','\u011b':'e','\u011c':'G','\u011e':'G','\u0120':'G','\u0122':'G','\u011d':'g','\u011f':'g','\u0121':'g','\u0123':'g','\u0124':'H','\u0126':'H','\u0125':'h','\u0127':'h','\u0128':'I','\u012a':'I','\u012c':'I','\u012e':'I','\u0130':'I','\u0129':'i','\u012b':'i','\u012d':'i','\u012f':'i','\u0131':'i','\u0134':'J','\u0135':'j','\u0136':'K','\u0137':'k','\u0138':'k','\u0139':'L','\u013b':'L','\u013d':'L','\u013f':'L','\u0141':'L','\u013a':'l','\u013c':'l','\u013e':'l','\u0140':'l','\u0142':'l','\u0143':'N','\u0145':'N','\u0147':'N','\u014a':'N','\u0144':'n','\u0146':'n','\u0148':'n','\u014b':'n','\u014c':'O','\u014e':'O','\u0150':'O','\u014d':'o','\u014f':'o','\u0151':'o','\u0154':'R','\u0156':'R','\u0158':'R','\u0155':'r','\u0157':'r','\u0159':'r','\u015a':'S','\u015c':'S','\u015e':'S','\u0160':'S','\u015b':'s','\u015d':'s','\u015f':'s','\u0161':'s','\u0162':'T','\u0164':'T','\u0166':'T','\u0163':'t','\u0165':'t','\u0167':'t','\u0168':'U','\u016a':'U','\u016c':'U','\u016e':'U','\u0170':'U','\u0172':'U','\u0169':'u','\u016b':'u','\u016d':'u','\u016f':'u','\u0171':'u','\u0173':'u','\u0174':'W','\u0175':'w','\u0176':'Y','\u0177':'y','\u0178':'Y','\u0179':'Z','\u017b':'Z','\u017d':'Z','\u017a':'z','\u017c':'z','\u017e':'z','\u0132':'IJ','\u0133':'ij','\u0152':'Oe','\u0153':'oe','\u0149':"'n",'\u017f':'s'};/** Used to map characters to HTML entities. */var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};/** Used to map HTML entities to characters. */var htmlUnescapes={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"};/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r','\u2028':'u2028','\u2029':'u2029'};/** Built-in method references without a dependency on `root`. */var freeParseFloat=parseFloat,freeParseInt=parseInt;/** Detect free variable `global` from Node.js. */var freeGlobal=typeof commonjsGlobal=='object'&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;/** Detect free variable `self`. */var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&'object'=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer,nodeIsDate=nodeUtil&&nodeUtil.isDate,nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/*--------------------------------------------------------------------------*/ /**
	   * A faster alternative to `Function#apply`, this function invokes `func`
	   * with the `this` binding of `thisArg` and the arguments of `args`.
	   *
	   * @private
	   * @param {Function} func The function to invoke.
	   * @param {*} thisArg The `this` binding of `func`.
	   * @param {Array} args The arguments to invoke `func` with.
	   * @returns {*} Returns the result of `func`.
	   */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
	   * A specialized version of `baseAggregator` for arrays.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} setter The function to set `accumulator` values.
	   * @param {Function} iteratee The iteratee to transform keys.
	   * @param {Object} accumulator The initial aggregated object.
	   * @returns {Function} Returns `accumulator`.
	   */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array==null?0:array.length;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}return accumulator;}/**
	   * A specialized version of `_.forEach` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
	   * A specialized version of `_.forEachRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */function arrayEachRight(array,iteratee){var length=array==null?0:array.length;while(length--){if(iteratee(array[length],length,array)===false){break;}}return array;}/**
	   * A specialized version of `_.every` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if all elements pass the predicate check,
	   *  else `false`.
	   */function arrayEvery(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(!predicate(array[index],index,array)){return false;}}return true;}/**
	   * A specialized version of `_.filter` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {Array} Returns the new filtered array.
	   */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}/**
	   * A specialized version of `_.includes` for arrays without support for
	   * specifying an index to search from.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */function arrayIncludes(array,value){var length=array==null?0:array.length;return!!length&&baseIndexOf(array,value,0)>-1;}/**
	   * This function is like `arrayIncludes` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}/**
	   * A specialized version of `_.map` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the new mapped array.
	   */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
	   * Appends the elements of `values` to `array`.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {Array} values The values to append.
	   * @returns {Array} Returns `array`.
	   */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
	   * A specialized version of `_.reduce` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the first element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array==null?0:array.length;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
	   * A specialized version of `_.reduceRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the last element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array==null?0:array.length;if(initAccum&&length){accumulator=array[--length];}while(length--){accumulator=iteratee(accumulator,array[length],length,array);}return accumulator;}/**
	   * A specialized version of `_.some` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
	   * Gets the size of an ASCII `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */var asciiSize=baseProperty('length');/**
	   * Converts an ASCII `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */function asciiToArray(string){return string.split('');}/**
	   * Splits an ASCII `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */function asciiWords(string){return string.match(reAsciiWord)||[];}/**
	   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
	   * without support for iteratee shorthands, which iterates over `collection`
	   * using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the found element or its key, else `undefined`.
	   */function baseFindKey(collection,predicate,eachFunc){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=key;return false;}});return result;}/**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}/**
	   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}/**
	   * This function is like `baseIndexOf` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index;}}return-1;}/**
	   * The base implementation of `_.isNaN` without support for number objects.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	   */function baseIsNaN(value){return value!==value;}/**
	   * The base implementation of `_.mean` and `_.meanBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the mean.
	   */function baseMean(array,iteratee){var length=array==null?0:array.length;return length?baseSum(array,iteratee)/length:NAN;}/**
	   * The base implementation of `_.property` without support for deep paths.
	   *
	   * @private
	   * @param {string} key The key of the property to get.
	   * @returns {Function} Returns the new accessor function.
	   */function baseProperty(key){return function(object){return object==null?undefined$1:object[key];};}/**
	   * The base implementation of `_.propertyOf` without support for deep paths.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Function} Returns the new accessor function.
	   */function basePropertyOf(object){return function(key){return object==null?undefined$1:object[key];};}/**
	   * The base implementation of `_.reduce` and `_.reduceRight`, without support
	   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} accumulator The initial value.
	   * @param {boolean} initAccum Specify using the first or last element of
	   *  `collection` as the initial value.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the accumulated value.
	   */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}/**
	   * The base implementation of `_.sortBy` which uses `comparer` to define the
	   * sort order of `array` and replaces criteria objects with their corresponding
	   * values.
	   *
	   * @private
	   * @param {Array} array The array to sort.
	   * @param {Function} comparer The function to define sort order.
	   * @returns {Array} Returns `array`.
	   */function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}return array;}/**
	   * The base implementation of `_.sum` and `_.sumBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the sum.
	   */function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined$1){result=result===undefined$1?current:result+current;}}return result;}/**
	   * The base implementation of `_.times` without support for iteratee shorthands
	   * or max array length checks.
	   *
	   * @private
	   * @param {number} n The number of times to invoke `iteratee`.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the array of results.
	   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
	   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	   * of key-value pairs for `object` corresponding to the property names of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the key-value pairs.
	   */function baseToPairs(object,props){return arrayMap(props,function(key){return[key,object[key]];});}/**
	   * The base implementation of `_.trim`.
	   *
	   * @private
	   * @param {string} string The string to trim.
	   * @returns {string} Returns the trimmed string.
	   */function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,''):string;}/**
	   * The base implementation of `_.unary` without support for storing metadata.
	   *
	   * @private
	   * @param {Function} func The function to cap arguments for.
	   * @returns {Function} Returns the new capped function.
	   */function baseUnary(func){return function(value){return func(value);};}/**
	   * The base implementation of `_.values` and `_.valuesIn` which creates an
	   * array of `object` property values corresponding to the property names
	   * of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the array of property values.
	   */function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}/**
	   * Checks if a `cache` value for `key` exists.
	   *
	   * @private
	   * @param {Object} cache The cache to query.
	   * @param {string} key The key of the entry to check.
	   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	   */function cacheHas(cache,key){return cache.has(key);}/**
	   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the first unmatched string symbol.
	   */function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
	   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the last unmatched string symbol.
	   */function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
	   * Gets the number of `placeholder` occurrences in `array`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} placeholder The placeholder to search for.
	   * @returns {number} Returns the placeholder count.
	   */function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){++result;}}return result;}/**
	   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	   * letters to basic Latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */var deburrLetter=basePropertyOf(deburredLetters);/**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */var escapeHtmlChar=basePropertyOf(htmlEscapes);/**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */function escapeStringChar(chr){return'\\'+stringEscapes[chr];}/**
	   * Gets the value at `key` of `object`.
	   *
	   * @private
	   * @param {Object} [object] The object to query.
	   * @param {string} key The key of the property to get.
	   * @returns {*} Returns the property value.
	   */function getValue(object,key){return object==null?undefined$1:object[key];}/**
	   * Checks if `string` contains Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	   */function hasUnicode(string){return reHasUnicode.test(string);}/**
	   * Checks if `string` contains a word composed of Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a word is found, else `false`.
	   */function hasUnicodeWord(string){return reHasUnicodeWord.test(string);}/**
	   * Converts `iterator` to an array.
	   *
	   * @private
	   * @param {Object} iterator The iterator to convert.
	   * @returns {Array} Returns the converted array.
	   */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}return result;}/**
	   * Converts `map` to its key-value pairs.
	   *
	   * @private
	   * @param {Object} map The map to convert.
	   * @returns {Array} Returns the key-value pairs.
	   */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
	   * Creates a unary function that invokes `func` with its argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}return result;}/**
	   * Converts `set` to an array of its values.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the values.
	   */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/**
	   * Converts `set` to its value-value pairs.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the value-value pairs.
	   */function setToPairs(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=[value,value];});return result;}/**
	   * A specialized version of `_.indexOf` which performs strict equality
	   * comparisons of values, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}/**
	   * A specialized version of `_.lastIndexOf` which performs strict equality
	   * comparisons of values, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function strictLastIndexOf(array,value,fromIndex){var index=fromIndex+1;while(index--){if(array[index]===value){return index;}}return index;}/**
	   * Gets the number of symbols in `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the string size.
	   */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}/**
	   * Converts `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);}/**
	   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the last non-whitespace character.
	   */function trimmedEndIndex(string){var index=string.length;while(index--&&reWhitespace.test(string.charAt(index))){}return index;}/**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */var unescapeHtmlChar=basePropertyOf(htmlUnescapes);/**
	   * Gets the size of a Unicode `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){++result;}return result;}/**
	   * Converts a Unicode `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */function unicodeToArray(string){return string.match(reUnicode)||[];}/**
	   * Splits a Unicode `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */function unicodeWords(string){return string.match(reUnicodeWord)||[];}/*--------------------------------------------------------------------------*/ /**
	   * Create a new pristine `lodash` function using the `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 1.1.0
	   * @category Util
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // Create a suped-up `defer` in Node.js.
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */var runInContext=function runInContext(context){context=context==null?root:_.defaults(root.Object(),context,_.pick(root,contextProps));/** Built-in constructor references. */var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=context['__core-js_shared__'];/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to generate unique IDs. */var idCounter=0;/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	     * of values.
	     */var nativeObjectToString=objectProto.toString;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/** Used to restore the original `_` reference in `_.noConflict`. */var oldDash=root._;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?context.Buffer:undefined$1,Symbol=context.Symbol,Uint8Array=context.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined$1,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=Symbol?Symbol.isConcatSpreadable:undefined$1,symIterator=Symbol?Symbol.iterator:undefined$1,symToStringTag=Symbol?Symbol.toStringTag:undefined$1;var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();/** Mocked built-ins. */var ctxClearTimeout=context.clearTimeout!==root.clearTimeout&&context.clearTimeout,ctxNow=Date&&Date.now!==root.Date.now&&Date.now,ctxSetTimeout=context.setTimeout!==root.setTimeout&&context.setTimeout;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined$1,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeNow=Date.now,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse;/* Built-in method references that are verified to be native. */var DataView=getNative(context,'DataView'),Map=getNative(context,'Map'),Promise=getNative(context,'Promise'),Set=getNative(context,'Set'),WeakMap=getNative(context,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to store function metadata. */var metaMap=WeakMap&&new WeakMap();/** Used to lookup unminified function names. */var realNames={};/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined$1,symbolValueOf=symbolProto?symbolProto.valueOf:undefined$1,symbolToString=symbolProto?symbolProto.toString:undefined$1;/*------------------------------------------------------------------------*/ /**
	     * Creates a `lodash` object which wraps `value` to enable implicit method
	     * chain sequences. Methods that operate on and return arrays, collections,
	     * and functions can be chained together. Methods that retrieve a single value
	     * or may return a primitive value will automatically end the chain sequence
	     * and return the unwrapped value. Otherwise, the value must be unwrapped
	     * with `_#value`.
	     *
	     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	     * enabled using `_.chain`.
	     *
	     * The execution of chained methods is lazy, that is, it's deferred until
	     * `_#value` is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion.
	     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	     * the creation of intermediate arrays and can greatly reduce the number of
	     * iteratee executions. Sections of a chain sequence qualify for shortcut
	     * fusion if the section is applied to an array and iteratees accept only
	     * one argument. The heuristic for whether a section qualifies for shortcut
	     * fusion is subject to change.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	     * `zipObject`, `zipObjectDeep`, and `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	     * `upperFirst`, `value`, and `words`
	     *
	     * @name _
	     * @constructor
	     * @category Seq
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // Returns an unwrapped value.
	     * wrapped.reduce(_.add);
	     * // => 6
	     *
	     * // Returns a wrapped value.
	     * var squares = wrapped.map(square);
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value;}if(hasOwnProperty.call(value,'__wrapped__')){return wrapperClone(value);}}return new LodashWrapper(value);}/**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} proto The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined$1;return result;};}();/**
	     * The function whose prototype chain sequence wrappers inherit from.
	     *
	     * @private
	     */function baseLodash(){// No operation performed.
}/**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable explicit method chain sequences.
	     */function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined$1;}/**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
	     * following template settings to use alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type {Object}
	     */lodash.templateSettings={/**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */'escape':reEscape,/**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */'evaluate':reEvaluate,/**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */'interpolate':reInterpolate,/**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type {string}
	       */'variable':'',/**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type {Object}
	       */'imports':{/**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type {Function}
	         */'_':lodash}};// Ensure wrappers are instances of `baseLodash`.
lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;/*------------------------------------------------------------------------*/ /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @constructor
	     * @param {*} value The value to wrap.
	     */function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}/**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result;}/**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;}else{result=this.clone();result.__dir__*=-1;}return result;}/**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:start-1,iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);if(!isArr||!isRight&&arrLength==length&&takeCount==length){return baseWrapperValue(array,this.__actions__);}var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer;}else{break outer;}}}result[resIndex++]=value;}return result;}// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;/*------------------------------------------------------------------------*/ /**
	     * Creates a hash object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
	     * Removes all key-value entries from the hash.
	     *
	     * @private
	     * @name clear
	     * @memberOf Hash
	     */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}/**
	     * Removes `key` and its value from the hash.
	     *
	     * @private
	     * @name delete
	     * @memberOf Hash
	     * @param {Object} hash The hash to modify.
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}/**
	     * Gets the hash value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Hash
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined$1:result;}return hasOwnProperty.call(data,key)?data[key]:undefined$1;}/**
	     * Checks if a hash value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Hash
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined$1:hasOwnProperty.call(data,key);}/**
	     * Sets the hash `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Hash
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the hash instance.
	     */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined$1?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/*------------------------------------------------------------------------*/ /**
	     * Creates an list cache object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
	     * Removes all key-value entries from the list cache.
	     *
	     * @private
	     * @name clear
	     * @memberOf ListCache
	     */function listCacheClear(){this.__data__=[];this.size=0;}/**
	     * Removes `key` and its value from the list cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf ListCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}/**
	     * Gets the list cache value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf ListCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined$1:data[index][1];}/**
	     * Checks if a list cache value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf ListCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
	     * Sets the list cache `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf ListCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the list cache instance.
	     */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/*------------------------------------------------------------------------*/ /**
	     * Creates a map cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
	     * Removes all key-value entries from the map.
	     *
	     * @private
	     * @name clear
	     * @memberOf MapCache
	     */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
	     * Removes `key` and its value from the map.
	     *
	     * @private
	     * @name delete
	     * @memberOf MapCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}/**
	     * Gets the map value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf MapCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
	     * Checks if a map value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf MapCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
	     * Sets the map `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf MapCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the map cache instance.
	     */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/*------------------------------------------------------------------------*/ /**
	     *
	     * Creates an array cache object to store unique values.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [values] The values to cache.
	     */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}/**
	     * Adds `value` to the array cache.
	     *
	     * @private
	     * @name add
	     * @memberOf SetCache
	     * @alias push
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache instance.
	     */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
	     * Checks if `value` is in the array cache.
	     *
	     * @private
	     * @name has
	     * @memberOf SetCache
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `true` if `value` is found, else `false`.
	     */function setCacheHas(value){return this.__data__.has(value);}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/*------------------------------------------------------------------------*/ /**
	     * Creates a stack cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}/**
	     * Removes all key-value entries from the stack.
	     *
	     * @private
	     * @name clear
	     * @memberOf Stack
	     */function stackClear(){this.__data__=new ListCache();this.size=0;}/**
	     * Removes `key` and its value from the stack.
	     *
	     * @private
	     * @name delete
	     * @memberOf Stack
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}/**
	     * Gets the stack value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Stack
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function stackGet(key){return this.__data__.get(key);}/**
	     * Checks if a stack value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Stack
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function stackHas(key){return this.__data__.has(key);}/**
	     * Sets the stack `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Stack
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the stack cache instance.
	     */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/*------------------------------------------------------------------------*/ /**
	     * Creates an array of the enumerable property names of the array-like `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @param {boolean} inherited Specify returning inherited property names.
	     * @returns {Array} Returns the array of property names.
	     */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}/**
	     * A specialized version of `_.sample` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to sample.
	     * @returns {*} Returns the random element.
	     */function arraySample(array){var length=array.length;return length?array[baseRandom(0,length-1)]:undefined$1;}/**
	     * A specialized version of `_.sampleSize` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to sample.
	     * @param {number} n The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     */function arraySampleSize(array,n){return shuffleSelf(copyArray(array),baseClamp(n,0,array.length));}/**
	     * A specialized version of `_.shuffle` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     */function arrayShuffle(array){return shuffleSelf(copyArray(array));}/**
	     * This function is like `assignValue` except that it doesn't assign
	     * `undefined` values.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */function assignMergeValue(object,key,value){if(value!==undefined$1&&!eq(object[key],value)||value===undefined$1&&!(key in object)){baseAssignValue(object,key,value);}}/**
	     * Assigns `value` to `key` of `object` if the existing value is not equivalent
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined$1&&!(key in object)){baseAssignValue(object,key,value);}}/**
	     * Gets the index at which the `key` is found in `array` of key-value pairs.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {*} key The key to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
	     * Aggregates elements of `collection` on `accumulator` with keys transformed
	     * by `iteratee` and values set by `setter`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform keys.
	     * @param {Object} accumulator The initial aggregated object.
	     * @returns {Function} Returns `accumulator`.
	     */function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}/**
	     * The base implementation of `_.assign` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
	     * The base implementation of `_.assignIn` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object);}/**
	     * The base implementation of `assignValue` and `assignMergeValue` without
	     * value checks.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}/**
	     * The base implementation of `_.at` without support for individual paths.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {string[]} paths The property paths to pick.
	     * @returns {Array} Returns the picked elements.
	     */function baseAt(object,paths){var index=-1,length=paths.length,result=Array(length),skip=object==null;while(++index<length){result[index]=skip?undefined$1:get(object,paths[index]);}return result;}/**
	     * The base implementation of `_.clamp` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     */function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined$1){number=number<=upper?number:upper;}if(lower!==undefined$1){number=number>=lower?number:lower;}}return number;}/**
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
	     */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined$1){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(isSet(value)){value.forEach(function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack));});}else if(isMap(value)){value.forEach(function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack));});}var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined$1:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}/**
	     * The base implementation of `_.conforms` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     */function baseConforms(source){var props=keys(source);return function(object){return baseConformsTo(object,source,props);};}/**
	     * The base implementation of `_.conformsTo` which accepts `props` to check.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     */function baseConformsTo(object,source,props){var length=props.length;if(object==null){return!length;}object=Object(object);while(length--){var key=props[length],predicate=source[key],value=object[key];if(value===undefined$1&&!(key in object)||!predicate(value)){return false;}}return true;}/**
	     * The base implementation of `_.delay` and `_.defer` which accepts `args`
	     * to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Array} args The arguments to provide to `func`.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */function baseDelay(func,wait,args){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return setTimeout(function(){func.apply(undefined$1,args);},wait);}/**
	     * The base implementation of methods like `_.difference` without support
	     * for excluding multiple arrays or iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee==null?value:iteratee(value);value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}/**
	     * The base implementation of `_.forEach` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */var baseEach=createBaseEach(baseForOwn);/**
	     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */var baseEachRight=createBaseEach(baseForOwnRight,true);/**
	     * The base implementation of `_.every` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}/**
	     * The base implementation of methods like `_.max` and `_.min` which accepts a
	     * `comparator` to determine the extremum value.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The iteratee invoked per iteration.
	     * @param {Function} comparator The comparator used to compare values.
	     * @returns {*} Returns the extremum value.
	     */function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined$1?current===current&&!isSymbol(current):comparator(current,computed))){var computed=current,result=value;}}return result;}/**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:length+start;}end=end===undefined$1||end>length?length:toInteger(end);if(end<0){end+=length;}end=start>end?0:toLength(end);while(start<end){array[start++]=value;}return array;}/**
	     * The base implementation of `_.filter` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}/**
	     * The base implementation of `_.flatten` with support for restricting flattening.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {number} depth The maximum recursion depth.
	     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}/**
	     * The base implementation of `baseForOwn` which iterates over `object`
	     * properties returned by `keysFunc` and invokes `iteratee` for each property.
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */var baseFor=createBaseFor();/**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */var baseForRight=createBaseFor(true);/**
	     * The base implementation of `_.forOwn` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}/**
	     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys);}/**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from `props`.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the function names.
	     */function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key]);});}/**
	     * The base implementation of `_.get` without support for default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @returns {*} Returns the resolved value.
	     */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined$1;}/**
	     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @param {Function} symbolsFunc The function to get the symbols of `object`.
	     * @returns {Array} Returns the array of property names and symbols.
	     */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
	     * The base implementation of `getTag` without fallbacks for buggy environments.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */function baseGetTag(value){if(value==null){return value===undefined$1?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
	     * The base implementation of `_.gt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     */function baseGt(value,other){return value>other;}/**
	     * The base implementation of `_.has` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */function baseHas(object,key){return object!=null&&hasOwnProperty.call(object,key);}/**
	     * The base implementation of `_.hasIn` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
	     * The base implementation of `_.inRange` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to check.
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     */function baseInRange(number,start,end){return number>=nativeMin(start,end)&&number<nativeMax(start,end);}/**
	     * The base implementation of methods like `_.intersection`, without support
	     * for iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of shared values.
	     */function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?new SetCache(othIndex&&array):undefined$1;}array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer;}}if(seen){seen.push(computed);}result.push(value);}}return result;}/**
	     * The base implementation of `_.invert` and `_.invertBy` which inverts
	     * `object` with values transformed by `iteratee` and set by `setter`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform values.
	     * @param {Object} accumulator The initial inverted object.
	     * @returns {Function} Returns `accumulator`.
	     */function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator;}/**
	     * The base implementation of `_.invoke` without support for individual
	     * method arguments.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */function baseInvoke(object,path,args){path=castPath(path,object);object=parent(object,path);var func=object==null?object:object[toKey(last(path))];return func==null?undefined$1:apply(func,object,args);}/**
	     * The base implementation of `_.isArguments`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}/**
	     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     */function baseIsArrayBuffer(value){return isObjectLike(value)&&baseGetTag(value)==arrayBufferTag;}/**
	     * The base implementation of `_.isDate` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     */function baseIsDate(value){return isObjectLike(value)&&baseGetTag(value)==dateTag;}/**
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
	     */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}/**
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
	     */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}/**
	     * The base implementation of `_.isMap` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}/**
	     * The base implementation of `_.isMatch` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Array} matchData The property names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined$1&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined$1?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}return true;}/**
	     * The base implementation of `_.isNative` without bad shim checks.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
	     * The base implementation of `_.isRegExp` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag;}/**
	     * The base implementation of `_.isSet` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}/**
	     * The base implementation of `_.isTypedArray` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
	     * The base implementation of `_.iteratee`.
	     *
	     * @private
	     * @param {*} [value=_.identity] The value to convert to an iteratee.
	     * @returns {Function} Returns the iteratee.
	     */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if(typeof value=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/**
	     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
	     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
	     * The base implementation of `_.lt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     */function baseLt(value,other){return value<other;}/**
	     * The base implementation of `_.map` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}/**
	     * The base implementation of `_.matches` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
	     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined$1&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}/**
	     * The base implementation of `_.merge` without support for multiple sources.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}baseFor(source,function(srcValue,key){stack||(stack=new Stack());if(isObject(srcValue)){baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(safeGet(object,key),srcValue,key+'',object,source,stack):undefined$1;if(newValue===undefined$1){newValue=srcValue;}assignMergeValue(object,key,newValue);}},keysIn);}/**
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
	     */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=safeGet(object,key),srcValue=safeGet(source,key),stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined$1;var isCommon=newValue===undefined$1;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true);}else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true);}else{newValue=[];}}else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||isFunction(objValue)){newValue=initCloneObject(srcValue);}}else{isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}/**
	     * The base implementation of `_.nth` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {number} n The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     */function baseNth(array,n){var length=array.length;if(!length){return;}n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined$1;}/**
	     * The base implementation of `_.orderBy` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {string[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */function baseOrderBy(collection,iteratees,orders){if(iteratees.length){iteratees=arrayMap(iteratees,function(iteratee){if(isArray(iteratee)){return function(value){return baseGet(value,iteratee.length===1?iteratee[0]:iteratee);};}return iteratee;});}else{iteratees=[identity];}var index=-1;iteratees=arrayMap(iteratees,baseUnary(getIteratee()));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);});return{'criteria':criteria,'index':++index,'value':value};});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);});}/**
	     * The base implementation of `_.pick` without support for individual
	     * property identifiers.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} paths The property paths to pick.
	     * @returns {Object} Returns the new object.
	     */function basePick(object,paths){return basePickBy(object,paths,function(value,path){return hasIn(object,path);});}/**
	     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} paths The property paths to pick.
	     * @param {Function} predicate The function invoked per property.
	     * @returns {Object} Returns the new object.
	     */function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value);}}return result;}/**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
	     * The base implementation of `_.pullAllBy` without support for iteratee
	     * shorthands.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     */function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(array===values){values=copyArray(values);}if(iteratee){seen=arrayMap(array,baseUnary(iteratee));}while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice.call(seen,fromIndex,1);}splice.call(array,fromIndex,1);}}return array;}/**
	     * The base implementation of `_.pullAt` without support for individual
	     * indexes or capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}else{baseUnset(array,index);}}}return array;}/**
	     * The base implementation of `_.random` without support for returning
	     * floating-point numbers.
	     *
	     * @private
	     * @param {number} lower The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the random number.
	     */function baseRandom(lower,upper){return lower+nativeFloor(nativeRandom()*(upper-lower+1));}/**
	     * The base implementation of `_.range` and `_.rangeRight` which doesn't
	     * coerce arguments.
	     *
	     * @private
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} step The value to increment or decrement by.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the range of numbers.
	     */function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}return result;}/**
	     * The base implementation of `_.repeat` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {string} string The string to repeat.
	     * @param {number} n The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     */function baseRepeat(string,n){var result='';if(!string||n<1||n>MAX_SAFE_INTEGER){return result;}// Leverage the exponentiation by squaring algorithm for a faster repeat.
// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
do{if(n%2){result+=string;}n=nativeFloor(n/2);if(n){string+=string;}}while(n);return result;}/**
	     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     */function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}/**
	     * The base implementation of `_.sample`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     */function baseSample(collection){return arraySample(values(collection));}/**
	     * The base implementation of `_.sampleSize` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} n The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     */function baseSampleSize(collection,n){var array=values(collection);return shuffleSelf(array,baseClamp(n,0,array.length));}/**
	     * The base implementation of `_.set`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */function baseSet(object,path,value,customizer){if(!isObject(object)){return object;}path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(key==='__proto__'||key==='constructor'||key==='prototype'){return object;}if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined$1;if(newValue===undefined$1){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object;}/**
	     * The base implementation of `setData` without support for hot loop shorting.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func;};/**
	     * The base implementation of `setToString` without support for hot loop shorting.
	     *
	     * @private
	     * @param {Function} func The function to modify.
	     * @param {Function} string The `toString` result.
	     * @returns {Function} Returns `func`.
	     */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};/**
	     * The base implementation of `_.shuffle`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     */function baseShuffle(collection){return shuffleSelf(values(collection));}/**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}/**
	     * The base implementation of `_.some` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return!result;});return!!result;}/**
	     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
	     * performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */function baseSortedIndex(array,value,retHighest){var low=0,high=array==null?low:array.length;if(typeof value=='number'&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=low+high>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?computed<=value:computed<value)){low=mid+1;}else{high=mid;}}return high;}return baseSortedIndexBy(array,value,identity,retHighest);}/**
	     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
	     * which invokes `iteratee` for `value` and each element of `array` to compute
	     * their sort ranking. The iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The iteratee invoked per element.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */function baseSortedIndexBy(array,value,iteratee,retHighest){var low=0,high=array==null?0:array.length;if(high===0){return 0;}value=iteratee(value);var valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined$1;while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined$1,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive;}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined);}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);}else if(othIsNull||othIsSymbol){setLow=false;}else{setLow=retHighest?computed<=value:computed<value;}if(setLow){low=mid+1;}else{high=mid;}}return nativeMin(high,MAX_ARRAY_INDEX);}/**
	     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
	     * support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value;}}return result;}/**
	     * The base implementation of `_.toNumber` which doesn't ensure correct
	     * conversions of binary, hexadecimal, or octal string values.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     */function baseToNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}return+value;}/**
	     * The base implementation of `_.toString` which doesn't convert nullish
	     * values to empty strings.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
	     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}/**
	     * The base implementation of `_.unset`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The property path to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     */function baseUnset(object,path){path=castPath(path,object);object=parent(object,path);return object==null||delete object[toKey(last(path))];}/**
	     * The base implementation of `_.update`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to update.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer);}/**
	     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
	     * without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}return isDrop?baseSlice(array,fromRight?0:index,fromRight?index+1:length):baseSlice(array,fromRight?index+1:0,fromRight?length:index);}/**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to perform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value();}return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args));},result);}/**
	     * The base implementation of methods like `_.xor`, without support for
	     * iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of values.
	     */function baseXor(arrays,iteratee,comparator){var length=arrays.length;if(length<2){return length?baseUniq(arrays[0]):[];}var index=-1,result=Array(length);while(++index<length){var array=arrays[index],othIndex=-1;while(++othIndex<length){if(othIndex!=index){result[index]=baseDifference(result[index]||array,arrays[othIndex],iteratee,comparator);}}}return baseUniq(baseFlatten(result,1),iteratee,comparator);}/**
	     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
	     *
	     * @private
	     * @param {Array} props The property identifiers.
	     * @param {Array} values The property values.
	     * @param {Function} assignFunc The function to assign values.
	     * @returns {Object} Returns the new object.
	     */function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined$1;assignFunc(result,props[index],value);}return result;}/**
	     * Casts `value` to an empty array if it's not an array like object.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array|Object} Returns the cast array-like object.
	     */function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[];}/**
	     * Casts `value` to `identity` if it's not a function.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Function} Returns cast function.
	     */function castFunction(value){return typeof value=='function'?value:identity;}/**
	     * Casts `value` to a path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {Array} Returns the cast property path array.
	     */function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}/**
	     * A `baseRest` alias which can be replaced with `identity` by module
	     * replacement plugins.
	     *
	     * @private
	     * @type {Function}
	     * @param {Function} func The function to apply a rest parameter to.
	     * @returns {Function} Returns the new function.
	     */var castRest=baseRest;/**
	     * Casts `array` to a slice if it's needed.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {number} start The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the cast slice.
	     */function castSlice(array,start,end){var length=array.length;end=end===undefined$1?length:end;return!start&&end>=length?array:baseSlice(array,start,end);}/**
	     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
	     *
	     * @private
	     * @param {number|Object} id The timer id or timeout object of the timer to clear.
	     */var clearTimeout=ctxClearTimeout||function(id){return root.clearTimeout(id);};/**
	     * Creates a clone of  `buffer`.
	     *
	     * @private
	     * @param {Buffer} buffer The buffer to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Buffer} Returns the cloned buffer.
	     */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}/**
	     * Creates a clone of `arrayBuffer`.
	     *
	     * @private
	     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
	     * Creates a clone of `dataView`.
	     *
	     * @private
	     * @param {Object} dataView The data view to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned data view.
	     */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
	     * Creates a clone of `regexp`.
	     *
	     * @private
	     * @param {Object} regexp The regexp to clone.
	     * @returns {Object} Returns the cloned regexp.
	     */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
	     * Creates a clone of the `symbol` object.
	     *
	     * @private
	     * @param {Object} symbol The symbol object to clone.
	     * @returns {Object} Returns the cloned symbol object.
	     */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
	     * Creates a clone of `typedArray`.
	     *
	     * @private
	     * @param {Object} typedArray The typed array to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned typed array.
	     */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
	     * Compares values to sort them in ascending order.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {number} Returns the sort order indicator for `value`.
	     */function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined$1,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined$1,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||valIsNull&&othIsDefined&&othIsReflexive||!valIsDefined&&othIsReflexive||!valIsReflexive){return 1;}if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||othIsNull&&valIsDefined&&valIsReflexive||!othIsDefined&&valIsReflexive||!othIsReflexive){return-1;}}return 0;}/**
	     * Used by `_.orderBy` to compare multiple properties of a value to another
	     * and stable sort them.
	     *
	     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	     * specify an order of "desc" for descending or "asc" for ascending sort order
	     * of corresponding values.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {boolean[]|string[]} orders The order to sort by for each property.
	     * @returns {number} Returns the sort order indicator for `object`.
	     */function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result;}var order=orders[index];return result*(order=='desc'?-1:1);}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return object.index-other.index;}/**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}while(rangeLength--){result[leftIndex++]=args[argsIndex++];}return result;}/**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}return result;}/**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property identifiers to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @param {Function} [customizer] The function to customize copied values.
	     * @returns {Object} Returns `object`.
	     */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined$1;if(newValue===undefined$1){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}/**
	     * Copies own symbols of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
	     * Copies own and inherited symbols of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object);}/**
	     * Creates a function like `_.groupBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} [initializer] The accumulator object initializer.
	     * @returns {Function} Returns the new aggregator function.
	     */function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,getIteratee(iteratee,2),accumulator);};}/**
	     * Creates a function like `_.assign`.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined$1,guard=length>2?sources[2]:undefined$1;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined$1;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined$1:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}/**
	     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}/**
	     * Creates a function that wraps `func` to invoke it with the optional `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createBind(func,bitmask,thisArg){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return fn.apply(isBind?thisArg:this,arguments);}return wrapper;}/**
	     * Creates a function like `_.lowerFirst`.
	     *
	     * @private
	     * @param {string} methodName The name of the `String` case method to use.
	     * @returns {Function} Returns the new case function.
	     */function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined$1;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(''):string.slice(1);return chr[methodName]()+trailing;};}/**
	     * Creates a function like `_.camelCase`.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');};}/**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */function createCtor(Ctor){return function(){// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var args=arguments;switch(args.length){case 0:return new Ctor();case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return isObject(result)?result:thisBinding;};}/**
	     * Creates a function that wraps `func` to enable currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {number} arity The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index];}var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined$1,args,holders,undefined$1,undefined$1,arity-length);}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return apply(fn,this,args);}return wrapper;}/**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} findIndexFunc The function to find the collection index.
	     * @returns {Function} Returns the new find function.
	     */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=getIteratee(predicate,3);collection=keys(collection);predicate=function(key){return iteratee(iterable[key],key,iterable);};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined$1;};}/**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */function createFlow(fromRight){return flatRest(function(funcs){var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse();}while(index--){var func=funcs[index];if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(prereq&&!wrapper&&getFuncName(func)=='wrapper'){var wrapper=new LodashWrapper([],true);}}index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=='wrapper'?getData(func):undefined$1;if(data&&isLaziable(data[0])&&data[1]==(WRAP_ARY_FLAG|WRAP_CURRY_FLAG|WRAP_PARTIAL_FLAG|WRAP_REARG_FLAG)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);}else{wrapper=func.length==1&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func);}}return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)){return wrapper.plant(value).value();}var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);}return result;};});}/**
	     * Creates a function that wraps `func` to invoke it with optional `this`
	     * binding of `thisArg`, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided
	     *  to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&WRAP_ARY_FLAG,isBind=bitmask&WRAP_BIND_FLAG,isBindKey=bitmask&WRAP_BIND_KEY_FLAG,isCurried=bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG),isFlip=bitmask&WRAP_FLIP_FLAG,Ctor=isBindKey?undefined$1:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index];}if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder);}if(partials){args=composeArgs(args,partials,holders,isCurried);}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length);}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}if(isAry&&ary<length){args.length=ary;}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn);}return fn.apply(thisBinding,args);}return wrapper;}/**
	     * Creates a function like `_.invertBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} toIteratee The function to resolve iteratees.
	     * @returns {Function} Returns the new inverter function.
	     */function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{});};}/**
	     * Creates a function that performs a mathematical operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @param {number} [defaultValue] The value used for `undefined` arguments.
	     * @returns {Function} Returns the new mathematical operation function.
	     */function createMathOperation(operator,defaultValue){return function(value,other){var result;if(value===undefined$1&&other===undefined$1){return defaultValue;}if(value!==undefined$1){result=value;}if(other!==undefined$1){if(result===undefined$1){return other;}if(typeof value=='string'||typeof other=='string'){value=baseToString(value);other=baseToString(other);}else{value=baseToNumber(value);other=baseToNumber(other);}result=operator(value,other);}return result;};}/**
	     * Creates a function like `_.over`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over iteratees.
	     * @returns {Function} Returns the new over function.
	     */function createOver(arrayFunc){return flatRest(function(iteratees){iteratees=arrayMap(iteratees,baseUnary(getIteratee()));return baseRest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args);});});});}/**
	     * Creates the padding for `string` based on `length`. The `chars` string
	     * is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {number} length The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padding for `string`.
	     */function createPadding(length,chars){chars=chars===undefined$1?' ':baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars;}var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(''):result.slice(0,length);}/**
	     * Creates a function that wraps `func` to invoke it with the `this` binding
	     * of `thisArg` and `partials` prepended to the arguments it receives.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to
	     *  the new function.
	     * @returns {Function} Returns the new wrapped function.
	     */function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=this&&this!==root&&this instanceof wrapper?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}return apply(fn,isBind?thisArg:this,args);}return wrapper;}/**
	     * Creates a `_.range` or `_.rangeRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new range function.
	     */function createRange(fromRight){return function(start,end,step){if(step&&typeof step!='number'&&isIterateeCall(start,end,step)){end=step=undefined$1;}// Ensure the sign of `-0` is preserved.
start=toFinite(start);if(end===undefined$1){end=start;start=0;}else{end=toFinite(end);}step=step===undefined$1?start<end?1:-1:toFinite(step);return baseRange(start,end,step,fromRight);};}/**
	     * Creates a function that performs a relational operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @returns {Function} Returns the new relational operation function.
	     */function createRelationalOperation(operator){return function(value,other){if(!(typeof value=='string'&&typeof other=='string')){value=toNumber(value);other=toNumber(other);}return operator(value,other);};}/**
	     * Creates a function that wraps `func` to continue currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {Function} wrapFunc The function to create the `func` wrapper.
	     * @param {*} placeholder The placeholder value.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&WRAP_CURRY_FLAG,newHolders=isCurry?holders:undefined$1,newHoldersRight=isCurry?undefined$1:holders,newPartials=isCurry?partials:undefined$1,newPartialsRight=isCurry?undefined$1:partials;bitmask|=isCurry?WRAP_PARTIAL_FLAG:WRAP_PARTIAL_RIGHT_FLAG;bitmask&=~(isCurry?WRAP_PARTIAL_RIGHT_FLAG:WRAP_PARTIAL_FLAG);if(!(bitmask&WRAP_CURRY_BOUND_FLAG)){bitmask&=~(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG);}var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined$1,newData);if(isLaziable(func)){setData(result,newData);}result.placeholder=placeholder;return setWrapToString(result,func,bitmask);}/**
	     * Creates a function like `_.round`.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=precision==null?0:nativeMin(toInteger(precision),292);if(precision&&nativeIsFinite(number)){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var pair=(toString(number)+'e').split('e'),value=func(pair[0]+'e'+(+pair[1]+precision));pair=(toString(value)+'e').split('e');return+(pair[0]+'e'+(+pair[1]-precision));}return func(number);};}/**
	     * Creates a set object of `values`.
	     *
	     * @private
	     * @param {Array} values The values to add to the set.
	     * @returns {Object} Returns the new set.
	     */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values);};/**
	     * Creates a `_.toPairs` or `_.toPairsIn` function.
	     *
	     * @private
	     * @param {Function} keysFunc The function to get the keys of a given object.
	     * @returns {Function} Returns the new pairs function.
	     */function createToPairs(keysFunc){return function(object){var tag=getTag(object);if(tag==mapTag){return mapToArray(object);}if(tag==setTag){return setToPairs(object);}return baseToPairs(object,keysFunc(object));};}/**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags.
	     *    1 - `_.bind`
	     *    2 - `_.bindKey`
	     *    4 - `_.curry` or `_.curryRight` of a bound function
	     *    8 - `_.curry`
	     *   16 - `_.curryRight`
	     *   32 - `_.partial`
	     *   64 - `_.partialRight`
	     *  128 - `_.rearg`
	     *  256 - `_.ary`
	     *  512 - `_.flip`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&WRAP_BIND_KEY_FLAG;if(!isBindKey&&typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var length=partials?partials.length:0;if(!length){bitmask&=~(WRAP_PARTIAL_FLAG|WRAP_PARTIAL_RIGHT_FLAG);partials=holders=undefined$1;}ary=ary===undefined$1?ary:nativeMax(toInteger(ary),0);arity=arity===undefined$1?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&WRAP_PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined$1;}var data=isBindKey?undefined$1:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data);}func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]===undefined$1?isBindKey?0:func.length:nativeMax(newData[9]-length,0);if(!arity&&bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG)){bitmask&=~(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG);}if(!bitmask||bitmask==WRAP_BIND_FLAG){var result=createBind(func,bitmask,thisArg);}else if(bitmask==WRAP_CURRY_FLAG||bitmask==WRAP_CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity);}else if((bitmask==WRAP_PARTIAL_FLAG||bitmask==(WRAP_BIND_FLAG|WRAP_PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials);}else{result=createHybrid.apply(undefined$1,newData);}var setter=data?baseSetData:setData;return setWrapToString(setter(result,newData),func,bitmask);}/**
	     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
	     * of source objects to the destination object for all destination properties
	     * that resolve to `undefined`.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to assign.
	     * @param {Object} object The parent object of `objValue`.
	     * @returns {*} Returns the value to assign.
	     */function customDefaultsAssignIn(objValue,srcValue,key,object){if(objValue===undefined$1||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue;}return objValue;}/**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
	     * objects into destination objects that are passed thru.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to merge.
	     * @param {Object} object The parent object of `objValue`.
	     * @param {Object} source The parent object of `srcValue`.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     * @returns {*} Returns the value to assign.
	     */function customDefaultsMerge(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,objValue);baseMerge(objValue,srcValue,undefined$1,customDefaultsMerge,stack);stack['delete'](srcValue);}return objValue;}/**
	     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
	     * objects.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @param {string} key The key of the property to inspect.
	     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
	     */function customOmitClone(value){return isPlainObject(value)?undefined$1:value;}/**
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
	     */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Check that cyclic values are equal.
var arrStacked=stack.get(array);var othStacked=stack.get(other);if(arrStacked&&othStacked){return arrStacked==other&&othStacked==array;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined$1;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined$1){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
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
	     */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/**
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
	     */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Check that cyclic values are equal.
var objStacked=stack.get(object);var othStacked=stack.get(other);if(objStacked&&othStacked){return objStacked==other&&othStacked==object;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined$1?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/**
	     * A specialized version of `baseRest` which flattens the rest array.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @returns {Function} Returns the new function.
	     */function flatRest(func){return setToString(overRest(func,undefined$1,flatten),func+'');}/**
	     * Creates an array of own enumerable property names and symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
	     * Creates an array of own and inherited enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}/**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */var getData=!metaMap?noop:function(func){return metaMap.get(func);};/**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */function getFuncName(func){var result=func.name+'',array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name;}}return result;}/**
	     * Gets the argument placeholder value for `func`.
	     *
	     * @private
	     * @param {Function} func The function to inspect.
	     * @returns {*} Returns the placeholder value.
	     */function getHolder(func){var object=hasOwnProperty.call(lodash,'placeholder')?lodash:func;return object.placeholder;}/**
	     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
	     * this function returns the custom method, otherwise it returns `baseIteratee`.
	     * If arguments are provided, the chosen function is invoked with them and
	     * its result is returned.
	     *
	     * @private
	     * @param {*} [value] The value to convert to an iteratee.
	     * @param {number} [arity] The arity of the created iteratee.
	     * @returns {Function} Returns the chosen function or its result.
	     */function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result;}/**
	     * Gets the data for `map`.
	     *
	     * @private
	     * @param {Object} map The map to query.
	     * @param {string} key The reference key.
	     * @returns {*} Returns the map data.
	     */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
	     * Gets the property names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined$1;}/**
	     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the raw `toStringTag`.
	     */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined$1;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}/**
	     * Creates an array of the own enumerable symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};/**
	     * Creates an array of the own and inherited enumerable symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};/**
	     * Gets the `toStringTag` of `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined$1,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case'drop':start+=size;break;case'dropRight':end-=size;break;case'take':end=nativeMin(end,start+size);break;case'takeRight':start=nativeMax(start,end-size);break;}}return{'start':start,'end':end};}/**
	     * Extracts wrapper details from the `source` body comment.
	     *
	     * @private
	     * @param {string} source The source to inspect.
	     * @returns {Array} Returns the wrapper details.
	     */function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[];}/**
	     * Checks if `path` exists on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @param {Function} hasFunc The function to check properties.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}/**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */function initCloneArray(array){var length=array.length,result=new array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
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
	     */function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return new Ctor();case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return new Ctor();case symbolTag:return cloneSymbol(object);}}/**
	     * Inserts wrapper `details` in a comment at the top of the `source` body.
	     *
	     * @private
	     * @param {string} source The source to modify.
	     * @returns {Array} details The details to insert.
	     * @returns {string} Returns the modified source.
	     */function insertWrapDetails(source,details){var length=details.length;if(!length){return source;}var lastIndex=length-1;details[lastIndex]=(length>1?'& ':'')+details[lastIndex];details=details.join(length>2?', ':' ');return source.replace(reWrapComment,'{\n/* [wrapped with '+details+'] */\n');}/**
	     * Checks if `value` is a flattenable `arguments` object or array.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	     */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}/**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */function isIndex(value,length){var type=typeof value;length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
	     * Checks if the given arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	     *  else `false`.
	     */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index;if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value;if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/**
	     * Checks if `value` is suitable for use as unique object key.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	     */function isKeyable(value){var type=typeof value;return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	     *  else `false`.
	     */function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!='function'||!(funcName in LazyWrapper.prototype)){return false;}if(func===other){return true;}var data=getData(other);return!!data&&func===data[0];}/**
	     * Checks if `func` has its source masked.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	     */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
	     * Checks if `func` is capable of being masked.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
	     */var isMaskable=coreJsData?isFunction:stubFalse;/**
	     * Checks if `value` is likely a prototype object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	     */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */function isStrictComparable(value){return value===value&&!isObject(value);}/**
	     * A specialized version of `matchesProperty` for source values suitable
	     * for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined$1||key in Object(object));};}/**
	     * A specialized version of `_.memoize` which clears the memoized function's
	     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	     *
	     * @private
	     * @param {Function} func The function to have its output memoized.
	     * @returns {Function} Returns the new memoized function.
	     */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}/**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers used to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and
	     * `_.rearg` modify function arguments, making the order in which they are
	     * executed important, preventing the merging of metadata. However, we make
	     * an exception for a safe combined case where curried functions have `_.ary`
	     * and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG|WRAP_ARY_FLAG);var isCombo=srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_CURRY_FLAG||srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_REARG_FLAG&&data[7].length<=source[8]||srcBitmask==(WRAP_ARY_FLAG|WRAP_REARG_FLAG)&&source[7].length<=source[8]&&bitmask==WRAP_CURRY_FLAG;// Exit early if metadata can't be merged.
if(!(isCommon||isCombo)){return data;}// Use source `thisArg` if available.
if(srcBitmask&WRAP_BIND_FLAG){data[2]=source[2];// Set when currying a bound function.
newBitmask|=bitmask&WRAP_BIND_FLAG?0:WRAP_CURRY_BOUND_FLAG;}// Compose partial arguments.
var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4];}// Compose partial right arguments.
value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6];}// Use source `argPos` if available.
value=source[7];if(value){data[7]=value;}// Use source `ary` if it's smaller.
if(srcBitmask&WRAP_ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);}// Use source `arity` if one is not provided.
if(data[9]==null){data[9]=source[9];}// Use source `func` and merge bitmasks.
data[0]=source[0];data[1]=newBitmask;return data;}/**
	     * This function is like
	     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * except that it includes inherited enumerable properties.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
	     * Converts `value` to a string using `Object.prototype.toString`.
	     *
	     * @private
	     * @param {*} value The value to convert.
	     * @returns {string} Returns the converted string.
	     */function objectToString(value){return nativeObjectToString.call(value);}/**
	     * A specialized version of `baseRest` which transforms the rest array.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @param {Function} transform The rest array transform.
	     * @returns {Function} Returns the new function.
	     */function overRest(func,start,transform){start=nativeMax(start===undefined$1?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}/**
	     * Gets the parent value at `path` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path to get the parent value of.
	     * @returns {*} Returns the parent value.
	     */function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1));}/**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined$1;}return array;}/**
	     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the property to get.
	     * @returns {*} Returns the property value.
	     */function safeGet(object,key){if(key==='constructor'&&typeof object[key]==='function'){return;}if(key=='__proto__'){return;}return object[key];}/**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity
	     * function to avoid garbage collection pauses in V8. See
	     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */var setData=shortOut(baseSetData);/**
	     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */var setTimeout=ctxSetTimeout||function(func,wait){return root.setTimeout(func,wait);};/**
	     * Sets the `toString` method of `func` to return `string`.
	     *
	     * @private
	     * @param {Function} func The function to modify.
	     * @param {Function} string The `toString` result.
	     * @returns {Function} Returns `func`.
	     */var setToString=shortOut(baseSetToString);/**
	     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	     * with wrapper details in a comment at the top of the source body.
	     *
	     * @private
	     * @param {Function} wrapper The function to modify.
	     * @param {Function} reference The reference function.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Function} Returns `wrapper`.
	     */function setWrapToString(wrapper,reference,bitmask){var source=reference+'';return setToString(wrapper,insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)));}/**
	     * Creates a function that'll short out and invoke `identity` instead
	     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	     * milliseconds.
	     *
	     * @private
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new shortable function.
	     */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined$1,arguments);};}/**
	     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
	     *
	     * @private
	     * @param {Array} array The array to shuffle.
	     * @param {number} [size=array.length] The size of `array`.
	     * @returns {Array} Returns `array`.
	     */function shuffleSelf(array,size){var index=-1,length=array.length,lastIndex=length-1;size=size===undefined$1?length:size;while(++index<size){var rand=baseRandom(index,lastIndex),value=array[rand];array[rand]=array[index];array[index]=value;}array.length=size;return array;}/**
	     * Converts `string` to a property path array.
	     *
	     * @private
	     * @param {string} string The string to convert.
	     * @returns {Array} Returns the property path array.
	     */var stringToPath=memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46/* . */){result.push('');}string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,'$1'):number||match);});return result;});/**
	     * Converts `value` to a string key if it's not a string or symbol.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {string|symbol} Returns the key.
	     */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
	     * Converts `func` to its source code.
	     *
	     * @private
	     * @param {Function} func The function to convert.
	     * @returns {string} Returns the source code.
	     */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
	     * Updates wrapper `details` based on `bitmask` flags.
	     *
	     * @private
	     * @returns {Array} details The details to modify.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Array} Returns `details`.
	     */function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value='_.'+pair[0];if(bitmask&pair[1]&&!arrayIncludes(details,value)){details.push(value);}});return details.sort();}/**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone();}var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result;}/*------------------------------------------------------------------------*/ /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `array` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the new array of chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */function chunk(array,size,guard){if(guard?isIterateeCall(array,size,guard):size===undefined$1){size=1;}else{size=nativeMax(toInteger(size),0);}var length=array==null?0:array.length;if(!length||size<1){return[];}var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,index+=size);}return result;}/**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */function compact(array){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}return result;}/**
	     * Creates a new array concatenating `array` with any additional arrays
	     * and/or values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to concatenate.
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var other = _.concat(array, 2, [3], [[4]]);
	     *
	     * console.log(other);
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */function concat(){var length=arguments.length;if(!length){return[];}var args=Array(length-1),array=arguments[0],index=length;while(index--){args[index-1]=arguments[index];}return arrayPush(isArray(array)?copyArray(array):[array],baseFlatten(args,1));}/**
	     * Creates an array of `array` values not included in the other given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order and references of result values are
	     * determined by the first array.
	     *
	     * **Note:** Unlike `_.pullAll`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.without, _.xor
	     * @example
	     *
	     * _.difference([2, 1], [2, 3]);
	     * // => [1]
	     */var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});/**
	     * This method is like `_.difference` except that it accepts `iteratee` which
	     * is invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The order and references of result values are
	     * determined by the first array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */var differenceBy=baseRest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined$1;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee,2)):[];});/**
	     * This method is like `_.difference` except that it accepts `comparator`
	     * which is invoked to compare elements of `array` to `values`. The order and
	     * references of result values are determined by the first array. The comparator
	     * is invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     *
	     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }]
	     */var differenceWith=baseRest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined$1;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined$1,comparator):[];});/**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */function drop(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined$1?1:toInteger(n);return baseSlice(array,n<0?0:n,length);}/**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */function dropRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined$1?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}/**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.dropRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropRightWhile(users, ['active', false]);
	     * // => objects for ['barney']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropRightWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */function dropRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true,true):[];}/**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.dropWhile(users, function(o) { return !o.active; });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropWhile(users, ['active', false]);
	     * // => objects for ['pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */function dropWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true):[];}/**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8, 10], '*', 1, 3);
	     * // => [4, '*', '*', 10]
	     */function fill(array,value,start,end){var length=array==null?0:array.length;if(!length){return[];}if(start&&typeof start!='number'&&isIterateeCall(array,value,start)){start=0;end=length;}return baseFill(array,value,start,end);}/**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(o) { return o.user == 'barney'; });
	     * // => 0
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findIndex(users, ['active', false]);
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findIndex(users, 'active');
	     * // => 2
	     */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,getIteratee(predicate,3),index);}/**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
	     * // => 2
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastIndex(users, ['active', false]);
	     * // => 2
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */function findLastIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=length-1;if(fromIndex!==undefined$1){index=toInteger(fromIndex);index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1);}return baseFindIndex(array,getIteratee(predicate,3),index,true);}/**
	     * Flattens `array` a single level deep.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, [3, [4]], 5]
	     */function flatten(array){var length=array==null?0:array.length;return length?baseFlatten(array,1):[];}/**
	     * Recursively flattens `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, 3, 4, 5]
	     */function flattenDeep(array){var length=array==null?0:array.length;return length?baseFlatten(array,INFINITY):[];}/**
	     * Recursively flatten `array` up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * var array = [1, [2, [3, [4]], 5]];
	     *
	     * _.flattenDepth(array, 1);
	     * // => [1, 2, [3, [4]], 5]
	     *
	     * _.flattenDepth(array, 2);
	     * // => [1, 2, 3, [4], 5]
	     */function flattenDepth(array,depth){var length=array==null?0:array.length;if(!length){return[];}depth=depth===undefined$1?1:toInteger(depth);return baseFlatten(array,depth);}/**
	     * The inverse of `_.toPairs`; this method returns an object composed
	     * from key-value `pairs`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} pairs The key-value pairs.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.fromPairs([['a', 1], ['b', 2]]);
	     * // => { 'a': 1, 'b': 2 }
	     */function fromPairs(pairs){var index=-1,length=pairs==null?0:pairs.length,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1];}return result;}/**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias first
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.head([1, 2, 3]);
	     * // => 1
	     *
	     * _.head([]);
	     * // => undefined
	     */function head(array){return array&&array.length?array[0]:undefined$1;}/**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it's used as the
	     * offset from the end of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // Search from the `fromIndex`.
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     */function indexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseIndexOf(array,value,index);}/**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */function initial(array){var length=array==null?0:array.length;return length?baseSlice(array,0,-1):[];}/**
	     * Creates an array of unique values that are included in all given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order and references of result values are
	     * determined by the first array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersection([2, 1], [2, 3]);
	     * // => [2]
	     */var intersection=baseRest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped):[];});/**
	     * This method is like `_.intersection` except that it accepts `iteratee`
	     * which is invoked for each element of each `arrays` to generate the criterion
	     * by which they're compared. The order and references of result values are
	     * determined by the first array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [2.1]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }]
	     */var intersectionBy=baseRest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined$1;}else{mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,getIteratee(iteratee,2)):[];});/**
	     * This method is like `_.intersection` except that it accepts `comparator`
	     * which is invoked to compare elements of `arrays`. The order and references
	     * of result values are determined by the first array. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.intersectionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }]
	     */var intersectionWith=baseRest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);comparator=typeof comparator=='function'?comparator:undefined$1;if(comparator){mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,undefined$1,comparator):[];});/**
	     * Converts all elements in `array` into a string separated by `separator`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to convert.
	     * @param {string} [separator=','] The element separator.
	     * @returns {string} Returns the joined string.
	     * @example
	     *
	     * _.join(['a', 'b', 'c'], '~');
	     * // => 'a~b~c'
	     */function join(array,separator){return array==null?'':nativeJoin.call(array,separator);}/**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined$1;}/**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // Search from the `fromIndex`.
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     */function lastIndexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=length;if(fromIndex!==undefined$1){index=toInteger(fromIndex);index=index<0?nativeMax(length+index,0):nativeMin(index,length-1);}return value===value?strictLastIndexOf(array,value,index):baseFindIndex(array,baseIsNaN,index,true);}/**
	     * Gets the element at index `n` of `array`. If `n` is negative, the nth
	     * element from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.11.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=0] The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     *
	     * _.nth(array, 1);
	     * // => 'b'
	     *
	     * _.nth(array, -2);
	     * // => 'c';
	     */function nth(array,n){return array&&array.length?baseNth(array,toInteger(n)):undefined$1;}/**
	     * Removes all given values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
	     * to remove elements from an array by predicate.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pull(array, 'a', 'c');
	     * console.log(array);
	     * // => ['b', 'b']
	     */var pull=baseRest(pullAll);/**
	     * This method is like `_.pull` except that it accepts an array of values to remove.
	     *
	     * **Note:** Unlike `_.difference`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pullAll(array, ['a', 'c']);
	     * console.log(array);
	     * // => ['b', 'b']
	     */function pullAll(array,values){return array&&array.length&&values&&values.length?basePullAll(array,values):array;}/**
	     * This method is like `_.pullAll` except that it accepts `iteratee` which is
	     * invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The iteratee is invoked with one argument: (value).
	     *
	     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
	     *
	     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
	     * console.log(array);
	     * // => [{ 'x': 2 }]
	     */function pullAllBy(array,values,iteratee){return array&&array.length&&values&&values.length?basePullAll(array,values,getIteratee(iteratee,2)):array;}/**
	     * This method is like `_.pullAll` except that it accepts `comparator` which
	     * is invoked to compare elements of `array` to `values`. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
	     *
	     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
	     * console.log(array);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
	     */function pullAllWith(array,values,comparator){return array&&array.length&&values&&values.length?basePullAll(array,values,undefined$1,comparator):array;}/**
	     * Removes elements from `array` corresponding to `indexes` and returns an
	     * array of removed elements.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     * var pulled = _.pullAt(array, [1, 3]);
	     *
	     * console.log(array);
	     * // => ['a', 'c']
	     *
	     * console.log(pulled);
	     * // => ['b', 'd']
	     */var pullAt=flatRest(function(array,indexes){var length=array==null?0:array.length,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index;}).sort(compareAscending));return result;});/**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is invoked
	     * with three arguments: (value, index, array).
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
	     * to pull elements from an array by value.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}var index=-1,indexes=[],length=array.length;predicate=getIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}basePullAt(array,indexes);return result;}/**
	     * Reverses `array` so that the first element becomes the last, the second
	     * element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates `array` and is based on
	     * [`Array#reverse`](https://mdn.io/Array/reverse).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.reverse(array);
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */function reverse(array){return array==null?array:nativeReverse.call(array);}/**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of
	     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
	     * returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */function slice(array,start,end){var length=array==null?0:array.length;if(!length){return[];}if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){start=0;end=length;}else{start=start==null?0:toInteger(start);end=end===undefined$1?length:toInteger(end);}return baseSlice(array,start,end);}/**
	     * Uses a binary search to determine the lowest index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     */function sortedIndex(array,value){return baseSortedIndex(array,value);}/**
	     * This method is like `_.sortedIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 0
	     */function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2));}/**
	     * This method is like `_.indexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 1
	     */function sortedIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index;}}return-1;}/**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
	     * // => 4
	     */function sortedLastIndex(array,value){return baseSortedIndex(array,value,true);}/**
	     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 1
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 1
	     */function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2),true);}/**
	     * This method is like `_.lastIndexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 3
	     */function sortedLastIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index;}}return-1;}/**
	     * This method is like `_.uniq` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniq([1, 1, 2]);
	     * // => [1, 2]
	     */function sortedUniq(array){return array&&array.length?baseSortedUniq(array):[];}/**
	     * This method is like `_.uniqBy` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
	     * // => [1.1, 2.3]
	     */function sortedUniqBy(array,iteratee){return array&&array.length?baseSortedUniq(array,getIteratee(iteratee,2)):[];}/**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.tail([1, 2, 3]);
	     * // => [2, 3]
	     */function tail(array){var length=array==null?0:array.length;return length?baseSlice(array,1,length):[];}/**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */function take(array,n,guard){if(!(array&&array.length)){return[];}n=guard||n===undefined$1?1:toInteger(n);return baseSlice(array,0,n<0?0:n);}/**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */function takeRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined$1?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length);}/**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.takeRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeRightWhile(users, ['active', false]);
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeRightWhile(users, 'active');
	     * // => []
	     */function takeRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),false,true):[];}/**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.takeWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeWhile(users, ['active', false]);
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeWhile(users, 'active');
	     * // => []
	     */function takeWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3)):[];}/**
	     * Creates an array of unique values, in order, from all given arrays using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([2], [1, 2]);
	     * // => [2, 1]
	     */var union=baseRest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});/**
	     * This method is like `_.union` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which uniqueness is computed. Result values are chosen from the first
	     * array in which the value occurs. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */var unionBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined$1;}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee,2));});/**
	     * This method is like `_.union` except that it accepts `comparator` which
	     * is invoked to compare elements of `arrays`. Result values are chosen from
	     * the first array in which the value occurs. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.unionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */var unionWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined$1;return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined$1,comparator);});/**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurrence of each element
	     * is kept. The order of result values is determined by the order they occur
	     * in the array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     */function uniq(array){return array&&array.length?baseUniq(array):[];}/**
	     * This method is like `_.uniq` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * uniqueness is computed. The order of result values is determined by the
	     * order they occur in the array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */function uniqBy(array,iteratee){return array&&array.length?baseUniq(array,getIteratee(iteratee,2)):[];}/**
	     * This method is like `_.uniq` except that it accepts `comparator` which
	     * is invoked to compare elements of `array`. The order of result values is
	     * determined by the order they occur in the array.The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.uniqWith(objects, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
	     */function uniqWith(array,comparator){comparator=typeof comparator=='function'?comparator:undefined$1;return array&&array.length?baseUniq(array,undefined$1,comparator):[];}/**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.2.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['a', 'b'], [1, 2], [true, false]]
	     */function unzip(array){if(!(array&&array.length)){return[];}var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax(group.length,length);return true;}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index));});}/**
	     * This method is like `_.unzip` except that it accepts `iteratee` to specify
	     * how regrouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  regrouped values.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */function unzipWith(array,iteratee){if(!(array&&array.length)){return[];}var result=unzip(array);if(iteratee==null){return result;}return arrayMap(result,function(group){return apply(iteratee,undefined$1,group);});}/**
	     * Creates an array excluding all given values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.pull`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.xor
	     * @example
	     *
	     * _.without([2, 1, 2, 3], 1, 2);
	     * // => [3]
	     */var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});/**
	     * Creates an array of unique values that is the
	     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the given arrays. The order of result values is determined by the order
	     * they occur in the arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.without
	     * @example
	     *
	     * _.xor([2, 1], [2, 3]);
	     * // => [1, 3]
	     */var xor=baseRest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject));});/**
	     * This method is like `_.xor` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which by which they're compared. The order of result values is determined
	     * by the order they occur in the arrays. The iteratee is invoked with one
	     * argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2, 3.4]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */var xorBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined$1;}return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee,2));});/**
	     * This method is like `_.xor` except that it accepts `comparator` which is
	     * invoked to compare elements of `arrays`. The order of result values is
	     * determined by the order they occur in the arrays. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.xorWith(objects, others, _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */var xorWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined$1;return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined$1,comparator);});/**
	     * Creates an array of grouped elements, the first of which contains the
	     * first elements of the given arrays, the second of which contains the
	     * second elements of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     */var zip=baseRest(unzip);/**
	     * This method is like `_.fromPairs` except that it accepts two arrays,
	     * one of property identifiers and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.4.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject(['a', 'b'], [1, 2]);
	     * // => { 'a': 1, 'b': 2 }
	     */function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue);}/**
	     * This method is like `_.zipObject` except that it supports property paths.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
	     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
	     */function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet);}/**
	     * This method is like `_.zip` except that it accepts `iteratee` to specify
	     * how grouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  grouped values.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
	     *   return a + b + c;
	     * });
	     * // => [111, 222]
	     */var zipWith=baseRest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined$1;iteratee=typeof iteratee=='function'?(arrays.pop(),iteratee):undefined$1;return unzipWith(arrays,iteratee);});/*------------------------------------------------------------------------*/ /**
	     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
	     * chain sequences enabled. The result of such sequences must be unwrapped
	     * with `_#value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Seq
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _
	     *   .chain(users)
	     *   .sortBy('age')
	     *   .map(function(o) {
	     *     return o.user + ' is ' + o.age;
	     *   })
	     *   .head()
	     *   .value();
	     * // => 'pebbles is 1'
	     */function chain(value){var result=lodash(value);result.__chain__=true;return result;}/**
	     * This method invokes `interceptor` and returns `value`. The interceptor
	     * is invoked with one argument; (value). The purpose of this method is to
	     * "tap into" a method chain sequence in order to modify intermediate results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    // Mutate input array.
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */function tap(value,interceptor){interceptor(value);return value;}/**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     * The purpose of this method is to "pass thru" values replacing intermediate
	     * results in a method chain sequence.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */function thru(value,interceptor){return interceptor(value);}/**
	     * This method is the wrapper version of `_.at`.
	     *
	     * @name at
	     * @memberOf _
	     * @since 1.0.0
	     * @category Seq
	     * @param {...(string|string[])} [paths] The property paths to pick.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _(object).at(['a[0].b.c', 'a[1]']).value();
	     * // => [3, 4]
	     */var wrapperAt=flatRest(function(paths){var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function(object){return baseAt(object,paths);};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor);}value=value.slice(start,+start+(length?1:0));value.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined$1});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined$1);}return array;});});/**
	     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
	     *
	     * @name chain
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // A sequence without explicit chaining.
	     * _(users).head();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // A sequence with explicit chaining.
	     * _(users)
	     *   .chain()
	     *   .head()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */function wrapperChain(){return chain(this);}/**
	     * Executes the chain sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__);}/**
	     * Gets the next value on a wrapped object following the
	     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
	     *
	     * @name next
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the next iterator value.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 1 }
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 2 }
	     *
	     * wrapped.next();
	     * // => { 'done': true, 'value': undefined }
	     */function wrapperNext(){if(this.__values__===undefined$1){this.__values__=toArray(this.value());}var done=this.__index__>=this.__values__.length,value=done?undefined$1:this.__values__[this.__index__++];return{'done':done,'value':value};}/**
	     * Enables the wrapper to be iterable.
	     *
	     * @name Symbol.iterator
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the wrapper object.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped[Symbol.iterator]() === wrapped;
	     * // => true
	     *
	     * Array.from(wrapped);
	     * // => [1, 2]
	     */function wrapperToIterator(){return this;}/**
	     * Creates a clone of the chain sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @param {*} value The value to plant.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2]).map(square);
	     * var other = wrapped.plant([3, 4]);
	     *
	     * other.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined$1;if(result){previous.__wrapped__=clone;}else{result=clone;}var previous=clone;parent=parent.__wrapped__;}previous.__wrapped__=value;return result;}/**
	     * This method is the wrapper version of `_.reverse`.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this);}wrapped=wrapped.reverse();wrapped.__actions__.push({'func':thru,'args':[reverse],'thisArg':undefined$1});return new LodashWrapper(wrapped,this.__chain__);}return this.thru(reverse);}/**
	     * Executes the chain sequence to resolve the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @since 0.1.0
	     * @alias toJSON, valueOf
	     * @category Seq
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__);}/*------------------------------------------------------------------------*/ /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the number of times the key was returned by `iteratee`. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': 1, '6': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */var countBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){++result[key];}else{baseAssignValue(result,key,1);}});/**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * Iteration is stopped once `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * **Note:** This method returns `true` for
	     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	     * elements of empty collections.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.every(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.every(users, 'active');
	     * // => false
	     */function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined$1;}return func(collection,getIteratee(predicate,3));}/**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * **Note:** Unlike `_.remove`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.reject
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, { 'age': 36, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.filter(users, 'active');
	     * // => objects for ['barney']
	     *
	     * // Combining several predicates using `_.overEvery` or `_.overSome`.
	     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
	     * // => objects for ['fred', 'barney']
	     */function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3));}/**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.find(users, function(o) { return o.age < 40; });
	     * // => object for 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.find(users, { 'age': 1, 'active': true });
	     * // => object for 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.find(users, ['active', false]);
	     * // => object for 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.find(users, 'active');
	     * // => object for 'barney'
	     */var find=createFind(findIndex);/**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=collection.length-1] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */var findLast=createFind(findLastIndex);/**
	     * Creates a flattened array of values by running each element in `collection`
	     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [n, n];
	     * }
	     *
	     * _.flatMap([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1);}/**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDeep([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY);}/**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDepth([1, 2], duplicate, 2);
	     * // => [[1, 1], [2, 2]]
	     */function flatMapDepth(collection,iteratee,depth){depth=depth===undefined$1?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth);}/**
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
	     */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,getIteratee(iteratee,3));}/**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEach
	     * @example
	     *
	     * _.forEachRight([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `2` then `1`.
	     */function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,getIteratee(iteratee,3));}/**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The order of grouped values
	     * is determined by the order they occur in `collection`. The corresponding
	     * value of each key is an array of elements responsible for generating the
	     * key. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': [4.2], '6': [6.1, 6.3] }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value);}else{baseAssignValue(result,key,[value]);}});/**
	     * Checks if `value` is in `collection`. If `collection` is a string, it's
	     * checked for a substring of `value`, otherwise
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * is used for equality comparisons. If `fromIndex` is negative, it's used as
	     * the offset from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {boolean} Returns `true` if `value` is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'a': 1, 'b': 2 }, 1);
	     * // => true
	     *
	     * _.includes('abcd', 'bc');
	     * // => true
	     */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1;}/**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `path` is a function, it's invoked
	     * for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke each method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invokeMap([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */var invokeMap=baseRest(function(collection,path,args){var index=-1,isFunc=typeof path=='function',result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){result[++index]=isFunc?apply(path,value,args):baseInvoke(value,path,args);});return result;});/**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the last element responsible for generating the key. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var array = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.keyBy(array, function(o) {
	     *   return String.fromCharCode(o.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.keyBy(array, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     */var keyBy=createAggregator(function(result,value,key){baseAssignValue(result,key,value);});/**
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
	     */function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,getIteratee(iteratee,3));}/**
	     * This method is like `_.sortBy` except that it allows specifying the sort
	     * orders of the iteratees to sort by. If `orders` is unspecified, all values
	     * are sorted in ascending order. Otherwise, specify an order of "desc" for
	     * descending or "asc" for ascending sort order of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @param {string[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // Sort by `user` in ascending order and by `age` in descending order.
	     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     */function orderBy(collection,iteratees,orders,guard){if(collection==null){return[];}if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees];}orders=guard?undefined$1:orders;if(!isArray(orders)){orders=orders==null?[]:[orders];}return baseOrderBy(collection,iteratees,orders);}/**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, the second of which
	     * contains elements `predicate` returns falsey for. The predicate is
	     * invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * _.partition(users, function(o) { return o.active; });
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.partition(users, { 'age': 1, 'active': false });
	     * // => objects for [['pebbles'], ['barney', 'fred']]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.partition(users, ['active', false]);
	     * // => objects for [['barney', 'pebbles'], ['fred']]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.partition(users, 'active');
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     */var partition=createAggregator(function(result,value,key){result[key?0:1].push(value);},function(){return[[],[]];});/**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` thru `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not given, the first element of `collection` is used as the initial
	     * value. The iteratee is invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	     * and `sortBy`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduceRight
	     * @example
	     *
	     * _.reduce([1, 2], function(sum, n) {
	     *   return sum + n;
	     * }, 0);
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     *   return result;
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	     */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach);}/**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduce
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight);}/**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.filter
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * _.reject(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.reject(users, { 'age': 40, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.reject(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.reject(users, 'active');
	     * // => objects for ['barney']
	     */function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,negate(getIteratee(predicate,3)));}/**
	     * Gets a random element from `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     */function sample(collection){var func=isArray(collection)?arraySample:baseSample;return func(collection);}/**
	     * Gets `n` random elements at unique keys from `collection` up to the
	     * size of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} [n=1] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the random elements.
	     * @example
	     *
	     * _.sampleSize([1, 2, 3], 2);
	     * // => [3, 1]
	     *
	     * _.sampleSize([1, 2, 3], 4);
	     * // => [2, 3, 1]
	     */function sampleSize(collection,n,guard){if(guard?isIterateeCall(collection,n,guard):n===undefined$1){n=1;}else{n=toInteger(n);}var func=isArray(collection)?arraySampleSize:baseSampleSize;return func(collection,n);}/**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */function shuffle(collection){var func=isArray(collection)?arrayShuffle:baseShuffle;return func(collection);}/**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable string keyed properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the collection size.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */function size(collection){if(collection==null){return 0;}if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length;}var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size;}return baseKeys(collection).length;}/**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * Iteration is stopped once `predicate` returns truthy. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.some(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.some(users, 'active');
	     * // => true
	     */function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined$1;}return func(collection,getIteratee(predicate,3));}/**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection thru each iteratee. This method
	     * performs a stable sort, that is, it preserves the original sort order of
	     * equal elements. The iteratees are invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 30 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.sortBy(users, [function(o) { return o.user; }]);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
	     *
	     * _.sortBy(users, ['user', 'age']);
	     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
	     */var sortBy=baseRest(function(collection,iteratees){if(collection==null){return[];}var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}return baseOrderBy(collection,baseFlatten(iteratees,1),[]);});/*------------------------------------------------------------------------*/ /**
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
	     */var now=ctxNow||function(){return root.Date.now();};/*------------------------------------------------------------------------*/ /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it's called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => Logs 'done saving!' after the two async saves have completed.
	     */function after(n,func){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments);}};}/**
	     * Creates a function that invokes `func`, with up to `n` arguments,
	     * ignoring any additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */function ary(func,n,guard){n=guard?undefined$1:n;n=func&&n==null?func.length:n;return createWrap(func,WRAP_ARY_FLAG,undefined$1,undefined$1,undefined$1,undefined$1,n);}/**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it's called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery(element).on('click', _.before(5, addContactToList));
	     * // => Allows adding up to 4 contacts to the list.
	     */function before(n,func){var result;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments);}if(n<=1){func=undefined$1;}return result;};}/**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and `partials` prepended to the arguments it receives.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * function greet(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * }
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */var bind=baseRest(function(func,thisArg,partials){var bitmask=WRAP_BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(func,bitmask,thisArg,partials,holders);});/**
	     * Creates a function that invokes the method at `object[key]` with `partials`
	     * prepended to the arguments it receives.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist. See
	     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Function
	     * @param {Object} object The object to invoke the method on.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */var bindKey=baseRest(function(object,key,partials){var bitmask=WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bindKey));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(key,bitmask,object,partials,holders);});/**
	     * Creates a function that accepts arguments of `func` and either invokes
	     * `func` returning its result, if at least `arity` number of arguments have
	     * been provided, or returns a function that accepts the remaining `func`
	     * arguments, and so on. The arity of `func` may be specified if `func.length`
	     * is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */function curry(func,arity,guard){arity=guard?undefined$1:arity;var result=createWrap(func,WRAP_CURRY_FLAG,undefined$1,undefined$1,undefined$1,undefined$1,undefined$1,arity);result.placeholder=curry.placeholder;return result;}/**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */function curryRight(func,arity,guard){arity=guard?undefined$1:arity;var result=createWrap(func,WRAP_CURRY_RIGHT_FLAG,undefined$1,undefined$1,undefined$1,undefined$1,undefined$1,arity);result.placeholder=curryRight.placeholder;return result;}/**
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
	     */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined$1;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
lastInvokeTime=time;// Start the timer for the trailing edge.
timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall;return maxing?nativeMin(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined$1||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined$1;// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined$1;return result;}function cancel(){if(timerId!==undefined$1){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined$1;}function flush(){return timerId===undefined$1?result:trailingEdge(now());}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined$1){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
clearTimeout(timerId);timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined$1){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}/**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // => Logs 'deferred' after one millisecond.
	     */var defer=baseRest(function(func,args){return baseDelay(func,1,args);});/**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => Logs 'later' after one second.
	     */var delay=baseRest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args);});/**
	     * Creates a function that invokes `func` with arguments reversed.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to flip arguments for.
	     * @returns {Function} Returns the new flipped function.
	     * @example
	     *
	     * var flipped = _.flip(function() {
	     *   return _.toArray(arguments);
	     * });
	     *
	     * flipped('a', 'b', 'c', 'd');
	     * // => ['d', 'c', 'b', 'a']
	     */function flip(func){return createWrap(func,WRAP_FLIP_FLAG);}/**
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
	     */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;/**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new negated function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return function(){var args=arguments;switch(args.length){case 0:return!predicate.call(this);case 1:return!predicate.call(this,args[0]);case 2:return!predicate.call(this,args[0],args[1]);case 3:return!predicate.call(this,args[0],args[1],args[2]);}return!predicate.apply(this,args);};}/**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first invocation. The `func` is
	     * invoked with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // => `createApplication` is invoked once
	     */function once(func){return before(2,func);}/**
	     * Creates a function that invokes `func` with its arguments transformed.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms=[_.identity]]
	     *  The argument transforms.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var func = _.overArgs(function(x, y) {
	     *   return [x, y];
	     * }, [square, doubled]);
	     *
	     * func(9, 3);
	     * // => [81, 6]
	     *
	     * func(10, 5);
	     * // => [100, 10]
	     */var overArgs=castRest(function(func,transforms){transforms=transforms.length==1&&isArray(transforms[0])?arrayMap(transforms[0],baseUnary(getIteratee())):arrayMap(baseFlatten(transforms,1),baseUnary(getIteratee()));var funcsLength=transforms.length;return baseRest(function(args){var index=-1,length=nativeMin(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index]);}return apply(func,this,args);});});/**
	     * Creates a function that invokes `func` with `partials` prepended to the
	     * arguments it receives. This method is like `_.bind` except it does **not**
	     * alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.2.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * function greet(greeting, name) {
	     *   return greeting + ' ' + name;
	     * }
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // Partially applied with placeholders.
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,WRAP_PARTIAL_FLAG,undefined$1,partials,holders);});/**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to the arguments it receives.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * function greet(greeting, name) {
	     *   return greeting + ' ' + name;
	     * }
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // Partially applied with placeholders.
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */var partialRight=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partialRight));return createWrap(func,WRAP_PARTIAL_RIGHT_FLAG,undefined$1,partials,holders);});/**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified `indexes` where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, [2, 0, 1]);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     */var rearg=flatRest(function(func,indexes){return createWrap(func,WRAP_REARG_FLAG,undefined$1,undefined$1,undefined$1,indexes);});/**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as
	     * an array.
	     *
	     * **Note:** This method is based on the
	     * [rest parameter](https://mdn.io/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.rest(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start===undefined$1?start:toInteger(start);return baseRest(func,start);}/**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * create function and an array of arguments much like
	     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
	     *
	     * **Note:** This method is based on the
	     * [spread operator](https://mdn.io/spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @param {number} [start=0] The start position of the spread.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */function spread(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start==null?0:nativeMax(toInteger(start),0);return baseRest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array);}return apply(func,this,otherArgs);});}/**
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
	     */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}/**
	     * Creates a function that accepts up to one argument, ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.unary(parseInt));
	     * // => [6, 8, 10]
	     */function unary(func){return ary(func,1);}/**
	     * Creates a function that provides `value` to `wrapper` as its first
	     * argument. Any additional arguments provided to the function are appended
	     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
	     * binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} [wrapper=identity] The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */function wrap(value,wrapper){return partial(castFunction(wrapper),value);}/*------------------------------------------------------------------------*/ /**
	     * Casts `value` as an array if it's not one.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Lang
	     * @param {*} value The value to inspect.
	     * @returns {Array} Returns the cast array.
	     * @example
	     *
	     * _.castArray(1);
	     * // => [1]
	     *
	     * _.castArray({ 'a': 1 });
	     * // => [{ 'a': 1 }]
	     *
	     * _.castArray('abc');
	     * // => ['abc']
	     *
	     * _.castArray(null);
	     * // => [null]
	     *
	     * _.castArray(undefined);
	     * // => [undefined]
	     *
	     * _.castArray();
	     * // => []
	     *
	     * var array = [1, 2, 3];
	     * console.log(_.castArray(array) === array);
	     * // => true
	     */function castArray(){if(!arguments.length){return[];}var value=arguments[0];return isArray(value)?value:[value];}/**
	     * Creates a shallow clone of `value`.
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	     * and supports cloning arrays, array buffers, booleans, date objects, maps,
	     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	     * arrays. The own enumerable properties of `arguments` objects are cloned
	     * as plain objects. An empty object is returned for uncloneable values such
	     * as error objects, functions, DOM nodes, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeep
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var shallow = _.clone(objects);
	     * console.log(shallow[0] === objects[0]);
	     * // => true
	     */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG);}/**
	     * This method is like `_.clone` except that it accepts `customizer` which
	     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
	     * cloning is handled by the method instead. The `customizer` is invoked with
	     * up to four arguments; (value [, index|key, object, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeepWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * }
	     *
	     * var el = _.cloneWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 0
	     */function cloneWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined$1;return baseClone(value,CLONE_SYMBOLS_FLAG,customizer);}/**
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
	     */function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG);}/**
	     * This method is like `_.cloneWith` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.cloneWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * }
	     *
	     * var el = _.cloneDeepWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 20
	     */function cloneDeepWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined$1;return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG,customizer);}/**
	     * Checks if `object` conforms to `source` by invoking the predicate
	     * properties of `source` with the corresponding property values of `object`.
	     *
	     * **Note:** This method is equivalent to `_.conforms` when `source` is
	     * partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
	     * // => true
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
	     * // => false
	     */function conformsTo(object,source){return source==null||baseConformsTo(object,source,keys(source));}/**
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
	     */function eq(value,other){return value===other||value!==value&&other!==other;}/**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     * @see _.lt
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */var gt=createRelationalOperation(baseGt);/**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to
	     *  `other`, else `false`.
	     * @see _.lte
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */var gte=createRelationalOperation(function(value,other){return value>=other;});/**
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
	     */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};/**
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
	     */var isArray=Array.isArray;/**
	     * Checks if `value` is classified as an `ArrayBuffer` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     * @example
	     *
	     * _.isArrayBuffer(new ArrayBuffer(2));
	     * // => true
	     *
	     * _.isArrayBuffer(new Array(2));
	     * // => false
	     */var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;/**
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
	     */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
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
	     */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */function isBoolean(value){return value===true||value===false||isObjectLike(value)&&baseGetTag(value)==boolTag;}/**
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
	     */var isBuffer=nativeIsBuffer||stubFalse;/**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;/**
	     * Checks if `value` is likely a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */function isElement(value){return isObjectLike(value)&&value.nodeType===1&&!isPlainObject(value);}/**
	     * Checks if `value` is an empty object, collection, map, or set.
	     *
	     * Objects are considered empty if they have no own enumerable string keyed
	     * properties.
	     *
	     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	     * jQuery-like collections are considered empty if they have a `length` of `0`.
	     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */function isEmpty(value){if(value==null){return true;}if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isTypedArray(value)||isArguments(value))){return!value.length;}var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}if(isPrototype(value)){return!baseKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}/**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent.
	     *
	     * **Note:** This method supports comparing arrays, array buffers, booleans,
	     * date objects, error objects, maps, numbers, `Object` objects, regexes,
	     * sets, strings, symbols, and typed arrays. `Object` objects are compared
	     * by their own, not inherited, enumerable properties. Functions and DOM
	     * nodes are compared by strict equality, i.e. `===`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * object === other;
	     * // => false
	     */function isEqual(value,other){return baseIsEqual(value,other);}/**
	     * This method is like `_.isEqual` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with up to
	     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, othValue) {
	     *   if (isGreeting(objValue) && isGreeting(othValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqualWith(array, other, customizer);
	     * // => true
	     */function isEqualWith(value,other,customizer){customizer=typeof customizer=='function'?customizer:undefined$1;var result=customizer?customizer(value,other):undefined$1;return result===undefined$1?baseIsEqual(value,other,undefined$1,customizer):!!result;}/**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */function isError(value){if(!isObjectLike(value)){return false;}var tag=baseGetTag(value);return tag==errorTag||tag==domExcTag||typeof value.message=='string'&&typeof value.name=='string'&&!isPlainObject(value);}/**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on
	     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(3);
	     * // => true
	     *
	     * _.isFinite(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     *
	     * _.isFinite('3');
	     * // => false
	     */function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}/**
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
	     */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}/**
	     * Checks if `value` is an integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
	     * @example
	     *
	     * _.isInteger(3);
	     * // => true
	     *
	     * _.isInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isInteger(Infinity);
	     * // => false
	     *
	     * _.isInteger('3');
	     * // => false
	     */function isInteger(value){return typeof value=='number'&&value==toInteger(value);}/**
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
	     */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
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
	     */function isObject(value){var type=typeof value;return value!=null&&(type=='object'||type=='function');}/**
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
	     */function isObjectLike(value){return value!=null&&typeof value=='object';}/**
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
	     */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;/**
	     * Performs a partial deep comparison between `object` and `source` to
	     * determine if `object` contains equivalent property values.
	     *
	     * **Note:** This method is equivalent to `_.matches` when `source` is
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.isMatch(object, { 'b': 2 });
	     * // => true
	     *
	     * _.isMatch(object, { 'b': 1 });
	     * // => false
	     */function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source));}/**
	     * This method is like `_.isMatch` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with five
	     * arguments: (objValue, srcValue, index|key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatchWith(object, source, customizer);
	     * // => true
	     */function isMatchWith(object,source,customizer){customizer=typeof customizer=='function'?customizer:undefined$1;return baseIsMatch(object,source,getMatchData(source),customizer);}/**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is based on
	     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
	     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
	     * `undefined` and other non-number values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */function isNaN(value){// An `NaN` primitive is the only value that is not equal to itself.
// Perform the `toStringTag` check first to avoid errors with some
// ActiveX objects in IE.
return isNumber(value)&&value!=+value;}/**
	     * Checks if `value` is a pristine native function.
	     *
	     * **Note:** This method can't reliably detect native functions in the presence
	     * of the core-js package because core-js circumvents this kind of detection.
	     * Despite multiple requests, the core-js maintainer has made it clear: any
	     * attempt to fix the detection will be obstructed. As a result, we're left
	     * with little choice but to throw an error. Unfortunately, this also affects
	     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
	     * which rely on core-js.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */function isNative(value){if(isMaskable(value)){throw new Error(CORE_ERROR_TEXT);}return baseIsNative(value);}/**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */function isNull(value){return value===null;}/**
	     * Checks if `value` is `null` or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	     * @example
	     *
	     * _.isNil(null);
	     * // => true
	     *
	     * _.isNil(void 0);
	     * // => true
	     *
	     * _.isNil(NaN);
	     * // => false
	     */function isNil(value){return value==null;}/**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	     * classified as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	     * @example
	     *
	     * _.isNumber(3);
	     * // => true
	     *
	     * _.isNumber(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isNumber(Infinity);
	     * // => true
	     *
	     * _.isNumber('3');
	     * // => false
	     */function isNumber(value){return typeof value=='number'||isObjectLike(value)&&baseGetTag(value)==numberTag;}/**
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
	     */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;/**
	     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
	     * double precision number which isn't the result of a rounded unsafe integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
	     * @example
	     *
	     * _.isSafeInteger(3);
	     * // => true
	     *
	     * _.isSafeInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isSafeInteger(Infinity);
	     * // => false
	     *
	     * _.isSafeInteger('3');
	     * // => false
	     */function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER;}/**
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
	     */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;/**
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
	     */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag;}/**
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
	     */function isSymbol(value){return typeof value=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}/**
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
	     */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */function isUndefined(value){return value===undefined$1;}/**
	     * Checks if `value` is classified as a `WeakMap` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
	     * @example
	     *
	     * _.isWeakMap(new WeakMap);
	     * // => true
	     *
	     * _.isWeakMap(new Map);
	     * // => false
	     */function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag;}/**
	     * Checks if `value` is classified as a `WeakSet` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
	     * @example
	     *
	     * _.isWeakSet(new WeakSet);
	     * // => true
	     *
	     * _.isWeakSet(new Set);
	     * // => false
	     */function isWeakSet(value){return isObjectLike(value)&&baseGetTag(value)==weakSetTag;}/**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     * @see _.gt
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */var lt=createRelationalOperation(baseLt);/**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to
	     *  `other`, else `false`.
	     * @see _.gte
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */var lte=createRelationalOperation(function(value,other){return value<=other;});/**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * _.toArray({ 'a': 1, 'b': 2 });
	     * // => [1, 2]
	     *
	     * _.toArray('abc');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toArray(1);
	     * // => []
	     *
	     * _.toArray(null);
	     * // => []
	     */function toArray(value){if(!value){return[];}if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value);}if(symIterator&&value[symIterator]){return iteratorToArray(value[symIterator]());}var tag=getTag(value),func=tag==mapTag?mapToArray:tag==setTag?setToArray:values;return func(value);}/**
	     * Converts `value` to a finite number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.12.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted number.
	     * @example
	     *
	     * _.toFinite(3.2);
	     * // => 3.2
	     *
	     * _.toFinite(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toFinite(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toFinite('3.2');
	     * // => 3.2
	     */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}/**
	     * Converts `value` to an integer.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toInteger(3.2);
	     * // => 3
	     *
	     * _.toInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toInteger(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toInteger('3.2');
	     * // => 3
	     */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}/**
	     * Converts `value` to an integer suitable for use as the length of an
	     * array-like object.
	     *
	     * **Note:** This method is based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toLength(3.2);
	     * // => 3
	     *
	     * _.toLength(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toLength(Infinity);
	     * // => 4294967295
	     *
	     * _.toLength('3.2');
	     * // => 3
	     */function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0;}/**
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
	     */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/**
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
	     */function toPlainObject(value){return copyObject(value,keysIn(value));}/**
	     * Converts `value` to a safe integer. A safe integer can be compared and
	     * represented correctly.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toSafeInteger(3.2);
	     * // => 3
	     *
	     * _.toSafeInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toSafeInteger(Infinity);
	     * // => 9007199254740991
	     *
	     * _.toSafeInteger('3.2');
	     * // => 3
	     */function toSafeInteger(value){return value?baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER):value===0?value:0;}/**
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
	     */function toString(value){return value==null?'':baseToString(value);}/*------------------------------------------------------------------------*/ /**
	     * Assigns own enumerable string keyed properties of source objects to the
	     * destination object. Source objects are applied from left to right.
	     * Subsequent sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object` and is loosely based on
	     * [`Object.assign`](https://mdn.io/Object/assign).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.assignIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * function Bar() {
	     *   this.c = 3;
	     * }
	     *
	     * Foo.prototype.b = 2;
	     * Bar.prototype.d = 4;
	     *
	     * _.assign({ 'a': 0 }, new Foo, new Bar);
	     * // => { 'a': 1, 'c': 3 }
	     */var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});/**
	     * This method is like `_.assign` except that it iterates over own and
	     * inherited source properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.assign
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * function Bar() {
	     *   this.c = 3;
	     * }
	     *
	     * Foo.prototype.b = 2;
	     * Bar.prototype.d = 4;
	     *
	     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	     */var assignIn=createAssigner(function(object,source){copyObject(source,keysIn(source),object);});/**
	     * This method is like `_.assignIn` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined`, assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extendWith
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @see _.assignWith
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignInWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});/**
	     * This method is like `_.assign` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined`, assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @see _.assignInWith
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer);});/**
	     * Creates an array of values corresponding to `paths` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {...(string|string[])} [paths] The property paths to pick.
	     * @returns {Array} Returns the picked values.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _.at(object, ['a[0].b.c', 'a[1]']);
	     * // => [3, 4]
	     */var at=flatRest(baseAt);/**
	     * Creates an object that inherits from the `prototype` object. If a
	     * `properties` object is given, its own enumerable string keyed properties
	     * are assigned to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */function create(prototype,properties){var result=baseCreate(prototype);return properties==null?result:baseAssign(result,properties);}/**
	     * Assigns own and inherited enumerable string keyed properties of source
	     * objects to the destination object for all destination properties that
	     * resolve to `undefined`. Source objects are applied from left to right.
	     * Once a property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.defaultsDeep
	     * @example
	     *
	     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */var defaults=baseRest(function(object,sources){object=Object(object);var index=-1;var length=sources.length;var guard=length>2?sources[2]:undefined$1;if(guard&&isIterateeCall(sources[0],sources[1],guard)){length=1;}while(++index<length){var source=sources[index];var props=keysIn(source);var propsIndex=-1;var propsLength=props.length;while(++propsIndex<propsLength){var key=props[propsIndex];var value=object[key];if(value===undefined$1||eq(value,objectProto[key])&&!hasOwnProperty.call(object,key)){object[key]=source[key];}}}return object;});/**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.defaults
	     * @example
	     *
	     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
	     * // => { 'a': { 'b': 2, 'c': 3 } }
	     */var defaultsDeep=baseRest(function(args){args.push(undefined$1,customDefaultsMerge);return apply(mergeWith,undefined$1,args);});/**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(o) { return o.age < 40; });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */function findKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwn);}/**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(o) { return o.age < 40; });
	     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */function findLastKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwnRight);}/**
	     * Iterates over own and inherited enumerable string keyed properties of an
	     * object and invokes `iteratee` for each property. The iteratee is invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forInRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
	     */function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee,3),keysIn);}/**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
	     */function forInRight(object,iteratee){return object==null?object:baseForRight(object,getIteratee(iteratee,3),keysIn);}/**
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
	     */function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee,3));}/**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
	     */function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,getIteratee(iteratee,3));}/**
	     * Creates an array of function property names from own enumerable properties
	     * of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functionsIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functions(new Foo);
	     * // => ['a', 'b']
	     */function functions(object){return object==null?[]:baseFunctions(object,keys(object));}/**
	     * Creates an array of function property names from own and inherited
	     * enumerable properties of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functions
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functionsIn(new Foo);
	     * // => ['a', 'b', 'c']
	     */function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object));}/**
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
	     */function get(object,path,defaultValue){var result=object==null?undefined$1:baseGet(object,path);return result===undefined$1?defaultValue:result;}/**
	     * Checks if `path` is a direct property of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': 2 } };
	     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b');
	     * // => true
	     *
	     * _.has(object, ['a', 'b']);
	     * // => true
	     *
	     * _.has(other, 'a');
	     * // => false
	     */function has(object,path){return object!=null&&hasPath(object,path,baseHas);}/**
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
	     */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite
	     * property assignments of previous values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     */var invert=createInverter(function(result,value,key){if(value!=null&&typeof value.toString!='function'){value=nativeObjectToString.call(value);}result[value]=key;},constant(identity));/**
	     * This method is like `_.invert` except that the inverted object is generated
	     * from the results of running each element of `object` thru `iteratee`. The
	     * corresponding inverted value of each inverted key is an array of keys
	     * responsible for generating the inverted value. The iteratee is invoked
	     * with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invertBy(object);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     *
	     * _.invertBy(object, function(value) {
	     *   return 'group' + value;
	     * });
	     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
	     */var invertBy=createInverter(function(result,value,key){if(value!=null&&typeof value.toString!='function'){value=nativeObjectToString.call(value);}if(hasOwnProperty.call(result,value)){result[value].push(key);}else{result[value]=[key];}},getIteratee);/**
	     * Invokes the method at `path` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
	     *
	     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
	     * // => [2, 3]
	     */var invoke=baseRest(baseInvoke);/**
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
	     */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
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
	     */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
	     * with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapValues
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */function mapKeys(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,iteratee(value,key,object),value);});return result;}/**
	     * Creates an object with the same keys as `object` and values generated
	     * by running each own enumerable string keyed property of `object` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapKeys
	     * @example
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * _.mapValues(users, function(o) { return o.age; });
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */function mapValues(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,key,iteratee(value,key,object));});return result;}/**
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
	     */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});/**
	     * This method is like `_.merge` except that it accepts `customizer` which
	     * is invoked to produce the merged values of the destination and source
	     * properties. If `customizer` returns `undefined`, merging is handled by the
	     * method instead. The `customizer` is invoked with six arguments:
	     * (objValue, srcValue, key, object, source, stack).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (_.isArray(objValue)) {
	     *     return objValue.concat(srcValue);
	     *   }
	     * }
	     *
	     * var object = { 'a': [1], 'b': [2] };
	     * var other = { 'a': [3], 'b': [4] };
	     *
	     * _.mergeWith(object, other, customizer);
	     * // => { 'a': [1, 3], 'b': [2, 4] }
	     */var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});/**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable property paths of `object` that are not omitted.
	     *
	     * **Note:** This method is considerably slower than `_.pick`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [paths] The property paths to omit.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omit(object, ['a', 'c']);
	     * // => { 'b': '2' }
	     */var omit=flatRest(function(object,paths){var result={};if(object==null){return result;}var isDeep=false;paths=arrayMap(paths,function(path){path=castPath(path,object);isDeep||(isDeep=path.length>1);return path;});copyObject(object,getAllKeysIn(object),result);if(isDeep){result=baseClone(result,CLONE_DEEP_FLAG|CLONE_FLAT_FLAG|CLONE_SYMBOLS_FLAG,customOmitClone);}var length=paths.length;while(length--){baseUnset(result,paths[length]);}return result;});/**
	     * The opposite of `_.pickBy`; this method creates an object composed of
	     * the own and inherited enumerable string keyed properties of `object` that
	     * `predicate` doesn't return truthy for. The predicate is invoked with two
	     * arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omitBy(object, _.isNumber);
	     * // => { 'b': '2' }
	     */function omitBy(object,predicate){return pickBy(object,negate(getIteratee(predicate)));}/**
	     * Creates an object composed of the picked `object` properties.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [paths] The property paths to pick.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pick(object, ['a', 'c']);
	     * // => { 'a': 1, 'c': 3 }
	     */var pick=flatRest(function(object,paths){return object==null?{}:basePick(object,paths);});/**
	     * Creates an object composed of the `object` properties `predicate` returns
	     * truthy for. The predicate is invoked with two arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pickBy(object, _.isNumber);
	     * // => { 'a': 1, 'c': 3 }
	     */function pickBy(object,predicate){if(object==null){return{};}var props=arrayMap(getAllKeysIn(object),function(prop){return[prop];});predicate=getIteratee(predicate);return basePickBy(object,props,function(value,path){return predicate(value,path[0]);});}/**
	     * This method is like `_.get` except that if the resolved value is a
	     * function it's invoked with the `this` binding of its parent object and
	     * its result is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a[0].b.c3', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a[0].b.c3', _.constant('default'));
	     * // => 'default'
	     */function result(object,path,defaultValue){path=castPath(path,object);var index=-1,length=path.length;// Ensure the loop is entered when path is empty.
if(!length){length=1;object=undefined$1;}while(++index<length){var value=object==null?undefined$1:object[toKey(path[index])];if(value===undefined$1){index=length;value=defaultValue;}object=isFunction(value)?value.call(object):value;}return object;}/**
	     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	     * it's created. Arrays are created for missing index properties while objects
	     * are created for all other missing properties. Use `_.setWith` to customize
	     * `path` creation.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, ['x', '0', 'y', 'z'], 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */function set(object,path,value){return object==null?object:baseSet(object,path,value);}/**
	     * This method is like `_.set` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.setWith(object, '[0][1]', 'a', Object);
	     * // => { '0': { '1': 'a' } }
	     */function setWith(object,path,value,customizer){customizer=typeof customizer=='function'?customizer:undefined$1;return object==null?object:baseSet(object,path,value,customizer);}/**
	     * Creates an array of own enumerable string keyed-value pairs for `object`
	     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
	     * entries are returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entries
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairs(new Foo);
	     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	     */var toPairs=createToPairs(keys);/**
	     * Creates an array of own and inherited enumerable string keyed-value pairs
	     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
	     * or set, its entries are returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entriesIn
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairsIn(new Foo);
	     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
	     */var toPairsIn=createToPairs(keysIn);/**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own
	     * enumerable string keyed properties thru `iteratee`, with each invocation
	     * potentially mutating the `accumulator` object. If `accumulator` is not
	     * provided, a new object with the same `[[Prototype]]` will be used. The
	     * iteratee is invoked with four arguments: (accumulator, value, key, object).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * }, []);
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */function transform(object,iteratee,accumulator){var isArr=isArray(object),isArrLike=isArr||isBuffer(object)||isTypedArray(object);iteratee=getIteratee(iteratee,4);if(accumulator==null){var Ctor=object&&object.constructor;if(isArrLike){accumulator=isArr?new Ctor():[];}else if(isObject(object)){accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};}else{accumulator={};}}(isArrLike?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object);});return accumulator;}/**
	     * Removes the property at `path` of `object`.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
	     * _.unset(object, 'a[0].b.c');
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     *
	     * _.unset(object, ['a', '0', 'b', 'c']);
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     */function unset(object,path){return object==null?true:baseUnset(object,path);}/**
	     * This method is like `_.set` except that accepts `updater` to produce the
	     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
	     * is invoked with one argument: (value).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
	     * console.log(object.a[0].b.c);
	     * // => 9
	     *
	     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
	     * console.log(object.x[0].y.z);
	     * // => 0
	     */function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater));}/**
	     * This method is like `_.update` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
	     * // => { '0': { '1': 'a' } }
	     */function updateWith(object,path,updater,customizer){customizer=typeof customizer=='function'?customizer:undefined$1;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer);}/**
	     * Creates an array of the own enumerable string keyed property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */function values(object){return object==null?[]:baseValues(object,keys(object));}/**
	     * Creates an array of the own and inherited enumerable string keyed property
	     * values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */function valuesIn(object){return object==null?[]:baseValues(object,keysIn(object));}/*------------------------------------------------------------------------*/ /**
	     * Clamps `number` within the inclusive `lower` and `upper` bounds.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Number
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     * @example
	     *
	     * _.clamp(-10, -5, 5);
	     * // => -5
	     *
	     * _.clamp(10, -5, 5);
	     * // => 5
	     */function clamp(number,lower,upper){if(upper===undefined$1){upper=lower;lower=undefined$1;}if(upper!==undefined$1){upper=toNumber(upper);upper=upper===upper?upper:0;}if(lower!==undefined$1){lower=toNumber(lower);lower=lower===lower?lower:0;}return baseClamp(toNumber(number),lower,upper);}/**
	     * Checks if `n` is between `start` and up to, but not including, `end`. If
	     * `end` is not specified, it's set to `start` with `start` then set to `0`.
	     * If `start` is greater than `end` the params are swapped to support
	     * negative ranges.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.3.0
	     * @category Number
	     * @param {number} number The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     * @see _.range, _.rangeRight
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     *
	     * _.inRange(-3, -2, -6);
	     * // => true
	     */function inRange(number,start,end){start=toFinite(start);if(end===undefined$1){end=start;start=0;}else{end=toFinite(end);}number=toNumber(number);return baseInRange(number,start,end);}/**
	     * Produces a random number between the inclusive `lower` and `upper` bounds.
	     * If only one argument is provided a number between `0` and the given number
	     * is returned. If `floating` is `true`, or either `lower` or `upper` are
	     * floats, a floating-point number is returned instead of an integer.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Number
	     * @param {number} [lower=0] The lower bound.
	     * @param {number} [upper=1] The upper bound.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */function random(lower,upper,floating){if(floating&&typeof floating!='boolean'&&isIterateeCall(lower,upper,floating)){upper=floating=undefined$1;}if(floating===undefined$1){if(typeof upper=='boolean'){floating=upper;upper=undefined$1;}else if(typeof lower=='boolean'){floating=lower;lower=undefined$1;}}if(lower===undefined$1&&upper===undefined$1){lower=0;upper=1;}else{lower=toFinite(lower);if(upper===undefined$1){upper=lower;lower=0;}else{upper=toFinite(upper);}}if(lower>upper){var temp=lower;lower=upper;upper=temp;}if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin(lower+rand*(upper-lower+freeParseFloat('1e-'+((rand+'').length-1))),upper);}return baseRandom(lower,upper);}/*------------------------------------------------------------------------*/ /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar--');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__FOO_BAR__');
	     * // => 'fooBar'
	     */var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word);});/**
	     * Converts the first character of `string` to upper case and the remaining
	     * to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('FRED');
	     * // => 'Fred'
	     */function capitalize(string){return upperFirst(toString(string).toLowerCase());}/**
	     * Deburrs `string` by converting
	     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	     * letters to basic Latin letters and removing
	     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */function deburr(string){string=toString(string);return string&&string.replace(reLatin,deburrLetter).replace(reComboMark,'');}/**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search up to.
	     * @returns {boolean} Returns `true` if `string` ends with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined$1?length:baseClamp(toInteger(position),0,length);var end=position;position-=target.length;return position>=0&&string.slice(position,end)==target;}/**
	     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
	     * corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional
	     * characters use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value. See
	     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * When working with HTML you should always
	     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
	     * XSS vectors.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string;}/**
	     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
	     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https://lodash\.com/\)'
	     */function escapeRegExp(string){string=toString(string);return string&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,'\\$&'):string;}/**
	     * Converts `string` to
	     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__FOO_BAR__');
	     * // => 'foo-bar'
	     */var kebabCase=createCompounder(function(result,word,index){return result+(index?'-':'')+word.toLowerCase();});/**
	     * Converts `string`, as space separated words, to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.lowerCase('--Foo-Bar--');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('fooBar');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('__FOO_BAR__');
	     * // => 'foo bar'
	     */var lowerCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toLowerCase();});/**
	     * Converts the first character of `string` to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.lowerFirst('Fred');
	     * // => 'fred'
	     *
	     * _.lowerFirst('FRED');
	     * // => 'fRED'
	     */var lowerFirst=createCaseFirst('toLowerCase');/**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string;}var mid=(length-strLength)/2;return createPadding(nativeFloor(mid),chars)+string+createPadding(nativeCeil(mid),chars);}/**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padEnd('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padEnd('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padEnd('abc', 3);
	     * // => 'abc'
	     */function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?string+createPadding(length-strLength,chars):string;}/**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padStart('abc', 6);
	     * // => '   abc'
	     *
	     * _.padStart('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padStart('abc', 3);
	     * // => 'abc'
	     */function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?createPadding(length-strLength,chars)+string:string;}/**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
	     * hexadecimal, in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the
	     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix=10] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */function parseInt(string,radix,guard){if(guard||radix==null){radix=0;}else if(radix){radix=+radix;}return nativeParseInt(toString(string).replace(reTrimStart,''),radix||0);}/**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=1] The number of times to repeat the string.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */function repeat(string,n,guard){if(guard?isIterateeCall(string,n,guard):n===undefined$1){n=1;}else{n=toInteger(n);}return baseRepeat(toString(string),n);}/**
	     * Replaces matches for `pattern` in `string` with `replacement`.
	     *
	     * **Note:** This method is based on
	     * [`String#replace`](https://mdn.io/String/replace).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to modify.
	     * @param {RegExp|string} pattern The pattern to replace.
	     * @param {Function|string} replacement The match replacement.
	     * @returns {string} Returns the modified string.
	     * @example
	     *
	     * _.replace('Hi Fred', 'Fred', 'Barney');
	     * // => 'Hi Barney'
	     */function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:string.replace(args[1],args[2]);}/**
	     * Converts `string` to
	     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--FOO-BAR--');
	     * // => 'foo_bar'
	     */var snakeCase=createCompounder(function(result,word,index){return result+(index?'_':'')+word.toLowerCase();});/**
	     * Splits `string` by `separator`.
	     *
	     * **Note:** This method is based on
	     * [`String#split`](https://mdn.io/String/split).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to split.
	     * @param {RegExp|string} separator The separator pattern to split by.
	     * @param {number} [limit] The length to truncate results to.
	     * @returns {Array} Returns the string segments.
	     * @example
	     *
	     * _.split('a-b-c', '-', 2);
	     * // => ['a', 'b']
	     */function split(string,separator,limit){if(limit&&typeof limit!='number'&&isIterateeCall(string,separator,limit)){separator=limit=undefined$1;}limit=limit===undefined$1?MAX_ARRAY_LENGTH:limit>>>0;if(!limit){return[];}string=toString(string);if(string&&(typeof separator=='string'||separator!=null&&!isRegExp(separator))){separator=baseToString(separator);if(!separator&&hasUnicode(string)){return castSlice(stringToArray(string),0,limit);}}return string.split(separator,limit);}/**
	     * Converts `string` to
	     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.1.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar--');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__FOO_BAR__');
	     * // => 'FOO BAR'
	     */var startCase=createCompounder(function(result,word,index){return result+(index?' ':'')+upperFirst(word);});/**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */function startsWith(string,target,position){string=toString(string);position=position==null?0:baseClamp(toInteger(position),0,string.length);target=baseToString(target);return string.slice(position,position+target.length)==target;}/**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is given, it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options={}] The options object.
	     * @param {RegExp} [options.escape=_.templateSettings.escape]
	     *  The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
	     *  The "evaluate" delimiter.
	     * @param {Object} [options.imports=_.templateSettings.imports]
	     *  An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
	     *  The "interpolate" delimiter.
	     * @param {string} [options.sourceURL='lodash.templateSources[n]']
	     *  The sourceURL of the compiled template.
	     * @param {string} [options.variable='obj']
	     *  The data object variable name.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // Use the "interpolate" delimiter to create a compiled template.
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // Use the HTML "escape" delimiter to escape data property values.
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the internal `print` function in "evaluate" delimiters.
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // Use the ES template literal delimiter as an "interpolate" delimiter.
	     * // Disable support by replacing the "interpolate" delimiter.
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // Use backslashes to treat delimiters as plain text.
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // Use the `imports` option to import `jQuery` as `jq`.
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
	     *
	     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // Use custom template delimiters.
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // Use the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and stack traces.
	     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */function template(string,options,guard){// Based on John Resig's `tmpl` implementation
// (http://ejohn.org/blog/javascript-micro-templating/)
// and Laura Doktorova's doT.js (https://github.com/olado/doT).
var settings=lodash.templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined$1;}string=toString(string);options=assignInWith({},options,settings,customDefaultsAssignIn);var imports=assignInWith({},options.imports,settings.imports,customDefaultsAssignIn),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";// Compile the regexp to match each delimiter.
var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+interpolate.source+'|'+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+(options.evaluate||reNoMatch).source+'|$','g');// Use a sourceURL for easier debugging.
// The sourceURL gets injected into the source that's eval-ed, so be careful
// to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
// and escape the comment, thus injecting code that gets evaled.
var sourceURL='//# sourceURL='+(hasOwnProperty.call(options,'sourceURL')?(options.sourceURL+'').replace(/\s/g,' '):'lodash.templateSources['+ ++templateCounter+']')+'\n';string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);// Escape characters that can't be included in string literals.
source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);// Replace delimiters with snippets.
if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}index=offset+match.length;// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
return match;});source+="';\n";// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
var variable=hasOwnProperty.call(options,'variable')&&options.variable;if(!variable){source='with (obj) {\n'+source+'\n}\n';}// Throw an error if a forbidden character was found in `variable`, to prevent
// potential command injection attacks.
else if(reForbiddenIdentifierChars.test(variable)){throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);}// Cleanup code by stripping empty strings.
source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');// Frame code as the function body.
source='function('+(variable||'obj')+') {\n'+(variable?'':'obj || (obj = {});\n')+"var __t, __p = ''"+(isEscaping?', __e = _.escape':'')+(isEvaluating?', __j = Array.prototype.join;\n'+"function print() { __p += __j.call(arguments, '') }\n":';\n')+source+'return __p\n}';var result=attempt(function(){return Function(importsKeys,sourceURL+'return '+source).apply(undefined$1,importsValues);});// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
result.source=source;if(isError(result)){throw result;}return result;}/**
	     * Converts `string`, as a whole, to lower case just like
	     * [String#toLowerCase](https://mdn.io/toLowerCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.toLower('--Foo-Bar--');
	     * // => '--foo-bar--'
	     *
	     * _.toLower('fooBar');
	     * // => 'foobar'
	     *
	     * _.toLower('__FOO_BAR__');
	     * // => '__foo_bar__'
	     */function toLower(value){return toString(value).toLowerCase();}/**
	     * Converts `string`, as a whole, to upper case just like
	     * [String#toUpperCase](https://mdn.io/toUpperCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.toUpper('--foo-bar--');
	     * // => '--FOO-BAR--'
	     *
	     * _.toUpper('fooBar');
	     * // => 'FOOBAR'
	     *
	     * _.toUpper('__foo_bar__');
	     * // => '__FOO_BAR__'
	     */function toUpper(value){return toString(value).toUpperCase();}/**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined$1)){return baseTrim(string);}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join('');}/**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimEnd('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimEnd('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined$1)){return string.slice(0,trimmedEndIndex(string)+1);}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join('');}/**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimStart('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimStart('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined$1)){return string.replace(reTrimStart,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join('');}/**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object} [options={}] The options object.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.truncate('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator='separator'in options?options.separator:separator;length='length'in options?toInteger(options.length):length;omission='omission'in options?baseToString(options.omission):omission;}string=toString(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}if(length>=strLength){return string;}var end=length-stringSize(omission);if(end<1){return omission;}var result=strSymbols?castSlice(strSymbols,0,end).join(''):string.slice(0,end);if(separator===undefined$1){return result+omission;}if(strSymbols){end+=result.length-end;}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags.exec(separator))+'g');}separator.lastIndex=0;while(match=separator.exec(substring)){var newEnd=match.index;}result=result.slice(0,newEnd===undefined$1?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}return result+omission;}/**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
	     * their corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional
	     * HTML entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.6.0
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */function unescape(string){string=toString(string);return string&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string;}/**
	     * Converts `string`, as space separated words, to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.upperCase('--foo-bar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('fooBar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('__foo_bar__');
	     * // => 'FOO BAR'
	     */var upperCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toUpperCase();});/**
	     * Converts the first character of `string` to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.upperFirst('fred');
	     * // => 'Fred'
	     *
	     * _.upperFirst('FRED');
	     * // => 'FRED'
	     */var upperFirst=createCaseFirst('toUpperCase');/**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */function words(string,pattern,guard){string=toString(string);pattern=guard?undefined$1:pattern;if(pattern===undefined$1){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string);}return string.match(pattern)||[];}/*------------------------------------------------------------------------*/ /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Function} func The function to attempt.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // Avoid throwing errors for invalid selectors.
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */var attempt=baseRest(function(func,args){try{return apply(func,undefined$1,args);}catch(e){return isError(e)?e:new Error(e);}});/**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method.
	     *
	     * **Note:** This method doesn't set the "length" property of bound functions.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} methodNames The object method names to bind.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'click': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view, ['click']);
	     * jQuery(element).on('click', view.click);
	     * // => Logs 'clicked docs' when clicked.
	     */var bindAll=flatRest(function(object,methodNames){arrayEach(methodNames,function(key){key=toKey(key);baseAssignValue(object,key,bind(object[key],object));});return object;});/**
	     * Creates a function that iterates over `pairs` and invokes the corresponding
	     * function of the first predicate to return truthy. The predicate-function
	     * pairs are invoked with the `this` binding and arguments of the created
	     * function.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Array} pairs The predicate-function pairs.
	     * @returns {Function} Returns the new composite function.
	     * @example
	     *
	     * var func = _.cond([
	     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
	     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
	     *   [_.stubTrue,                      _.constant('no match')]
	     * ]);
	     *
	     * func({ 'a': 1, 'b': 2 });
	     * // => 'matches A'
	     *
	     * func({ 'a': 0, 'b': 1 });
	     * // => 'matches B'
	     *
	     * func({ 'a': '1', 'b': '2' });
	     * // => 'no match'
	     */function cond(pairs){var length=pairs==null?0:pairs.length,toIteratee=getIteratee();pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return[toIteratee(pair[0]),pair[1]];});return baseRest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args);}}});}/**
	     * Creates a function that invokes the predicate properties of `source` with
	     * the corresponding property values of a given object, returning `true` if
	     * all predicates return truthy, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.conformsTo` with
	     * `source` partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 2, 'b': 1 },
	     *   { 'a': 1, 'b': 2 }
	     * ];
	     *
	     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
	     * // => [{ 'a': 1, 'b': 2 }]
	     */function conforms(source){return baseConforms(baseClone(source,CLONE_DEEP_FLAG));}/**
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
	     */function constant(value){return function(){return value;};}/**
	     * Checks `value` to determine whether a default value should be returned in
	     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
	     * or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Util
	     * @param {*} value The value to check.
	     * @param {*} defaultValue The default value.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * _.defaultTo(1, 10);
	     * // => 1
	     *
	     * _.defaultTo(undefined, 10);
	     * // => 10
	     */function defaultTo(value,defaultValue){return value==null||value!==value?defaultValue:value;}/**
	     * Creates a function that returns the result of invoking the given functions
	     * with the `this` binding of the created function, where each successive
	     * invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] The functions to invoke.
	     * @returns {Function} Returns the new composite function.
	     * @see _.flowRight
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow([_.add, square]);
	     * addSquare(1, 2);
	     * // => 9
	     */var flow=createFlow();/**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the given functions from right to left.
	     *
	     * @static
	     * @since 3.0.0
	     * @memberOf _
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] The functions to invoke.
	     * @returns {Function} Returns the new composite function.
	     * @see _.flow
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight([square, _.add]);
	     * addSquare(1, 2);
	     * // => 9
	     */var flowRight=createFlow(true);/**
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
	     */function identity(value){return value;}/**
	     * Creates a function that invokes `func` with the arguments of the created
	     * function. If `func` is a property name, the created function returns the
	     * property value for a given element. If `func` is an array or object, the
	     * created function returns `true` for elements that contain the equivalent
	     * source properties, otherwise it returns `false`.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Util
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, _.iteratee(['user', 'fred']));
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, _.iteratee('user'));
	     * // => ['barney', 'fred']
	     *
	     * // Create custom iteratee shorthands.
	     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	     *     return func.test(string);
	     *   };
	     * });
	     *
	     * _.filter(['abc', 'def'], /ef/);
	     * // => ['def']
	     */function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,CLONE_DEEP_FLAG));}/**
	     * Creates a function that performs a partial deep comparison between a given
	     * object and `source`, returning `true` if the given object has equivalent
	     * property values, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.isMatch` with `source`
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * **Note:** Multiple values can be checked by combining several matchers
	     * using `_.overSome`
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
	     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
	     *
	     * // Checking for several possible values
	     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
	     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
	     */function matches(source){return baseMatches(baseClone(source,CLONE_DEEP_FLAG));}/**
	     * Creates a function that performs a partial deep comparison between the
	     * value at `path` of a given object to `srcValue`, returning `true` if the
	     * object value is equivalent, else `false`.
	     *
	     * **Note:** Partial comparisons will match empty array and empty object
	     * `srcValue` values against any array or object value, respectively. See
	     * `_.isEqual` for a list of supported value comparisons.
	     *
	     * **Note:** Multiple values can be checked by combining several matchers
	     * using `_.overSome`
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.find(objects, _.matchesProperty('a', 4));
	     * // => { 'a': 4, 'b': 5, 'c': 6 }
	     *
	     * // Checking for several possible values
	     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
	     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
	     */function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,CLONE_DEEP_FLAG));}/**
	     * Creates a function that invokes the method at `path` of a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new invoker function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': _.constant(2) } },
	     *   { 'a': { 'b': _.constant(1) } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b'));
	     * // => [2, 1]
	     *
	     * _.map(objects, _.method(['a', 'b']));
	     * // => [2, 1]
	     */var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args);};});/**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path of `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new invoker function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */var methodOf=baseRest(function(object,args){return function(path){return baseInvoke(object,path,args);};});/**
	     * Adds all own enumerable string keyed function properties of a source
	     * object to the destination object. If `object` is a function, then methods
	     * are added to its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);if(options==null&&!(isObject(source)&&(methodNames.length||!props.length))){options=source;source=object;object=this;methodNames=baseFunctions(source,keys(source));}var chain=!(isObject(options)&&'chain'in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({'func':func,'args':arguments,'thisArg':object});result.__chain__=chainAll;return result;}return func.apply(object,arrayPush([this.value()],arguments));};}});return object;}/**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */function noConflict(){if(root._===this){root._=oldDash;}return this;}/**
	     * This method returns `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Util
	     * @example
	     *
	     * _.times(2, _.noop);
	     * // => [undefined, undefined]
	     */function noop(){// No operation performed.
}/**
	     * Creates a function that gets the argument at index `n`. If `n` is negative,
	     * the nth argument from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [n=0] The index of the argument to return.
	     * @returns {Function} Returns the new pass-thru function.
	     * @example
	     *
	     * var func = _.nthArg(1);
	     * func('a', 'b', 'c', 'd');
	     * // => 'b'
	     *
	     * var func = _.nthArg(-2);
	     * func('a', 'b', 'c', 'd');
	     * // => 'c'
	     */function nthArg(n){n=toInteger(n);return baseRest(function(args){return baseNth(args,n);});}/**
	     * Creates a function that invokes `iteratees` with the arguments it receives
	     * and returns their results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.over([Math.max, Math.min]);
	     *
	     * func(1, 2, 3, 4);
	     * // => [4, 1]
	     */var over=createOver(arrayMap);/**
	     * Creates a function that checks if **all** of the `predicates` return
	     * truthy when invoked with the arguments it receives.
	     *
	     * Following shorthands are possible for providing predicates.
	     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
	     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [predicates=[_.identity]]
	     *  The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overEvery([Boolean, isFinite]);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => false
	     *
	     * func(NaN);
	     * // => false
	     */var overEvery=createOver(arrayEvery);/**
	     * Creates a function that checks if **any** of the `predicates` return
	     * truthy when invoked with the arguments it receives.
	     *
	     * Following shorthands are possible for providing predicates.
	     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
	     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [predicates=[_.identity]]
	     *  The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overSome([Boolean, isFinite]);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => true
	     *
	     * func(NaN);
	     * // => false
	     *
	     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
	     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
	     */var overSome=createOver(arraySome);/**
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
	     */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the value at a given path of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */function propertyOf(object){return function(path){return object==null?undefined$1:baseGet(object,path);};}/**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	     * `start` is specified without an `end` or `step`. If `end` is not specified,
	     * it's set to `start` with `start` then set to `0`.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the range of numbers.
	     * @see _.inRange, _.rangeRight
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(-4);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */var range=createRange();/**
	     * This method is like `_.range` except that it populates values in
	     * descending order.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the range of numbers.
	     * @see _.inRange, _.range
	     * @example
	     *
	     * _.rangeRight(4);
	     * // => [3, 2, 1, 0]
	     *
	     * _.rangeRight(-4);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 5);
	     * // => [4, 3, 2, 1]
	     *
	     * _.rangeRight(0, 20, 5);
	     * // => [15, 10, 5, 0]
	     *
	     * _.rangeRight(0, -4, -1);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.rangeRight(0);
	     * // => []
	     */var rangeRight=createRange(true);/**
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
	     */function stubArray(){return[];}/**
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
	     */function stubFalse(){return false;}/**
	     * This method returns a new empty object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Object} Returns the new empty object.
	     * @example
	     *
	     * var objects = _.times(2, _.stubObject);
	     *
	     * console.log(objects);
	     * // => [{}, {}]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => false
	     */function stubObject(){return{};}/**
	     * This method returns an empty string.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {string} Returns the empty string.
	     * @example
	     *
	     * _.times(2, _.stubString);
	     * // => ['', '']
	     */function stubString(){return'';}/**
	     * This method returns `true`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `true`.
	     * @example
	     *
	     * _.times(2, _.stubTrue);
	     * // => [true, true]
	     */function stubTrue(){return true;}/**
	     * Invokes the iteratee `n` times, returning an array of the results of
	     * each invocation. The iteratee is invoked with one argument; (index).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.times(3, String);
	     * // => ['0', '1', '2']
	     *
	     *  _.times(4, _.constant(0));
	     * // => [0, 0, 0, 0]
	     */function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER){return[];}var index=MAX_ARRAY_LENGTH,length=nativeMin(n,MAX_ARRAY_LENGTH);iteratee=getIteratee(iteratee);n-=MAX_ARRAY_LENGTH;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index);}return result;}/**
	     * Converts `value` to a property path array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the new property path array.
	     * @example
	     *
	     * _.toPath('a.b.c');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toPath('a[0].b.c');
	     * // => ['a', '0', 'b', 'c']
	     */function toPath(value){if(isArray(value)){return arrayMap(value,toKey);}return isSymbol(value)?[value]:copyArray(stringToPath(toString(value)));}/**
	     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {string} [prefix=''] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id;}/*------------------------------------------------------------------------*/ /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {number} augend The first number in an addition.
	     * @param {number} addend The second number in an addition.
	     * @returns {number} Returns the total.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */var add=createMathOperation(function(augend,addend){return augend+addend;},0);/**
	     * Computes `number` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */var ceil=createRound('ceil');/**
	     * Divide two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} dividend The first number in a division.
	     * @param {number} divisor The second number in a division.
	     * @returns {number} Returns the quotient.
	     * @example
	     *
	     * _.divide(6, 4);
	     * // => 1.5
	     */var divide=createMathOperation(function(dividend,divisor){return dividend/divisor;},1);/**
	     * Computes `number` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */var floor=createRound('floor');/**
	     * Computes the maximum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => undefined
	     */function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined$1;}/**
	     * This method is like `_.max` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.maxBy(objects, function(o) { return o.n; });
	     * // => { 'n': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.maxBy(objects, 'n');
	     * // => { 'n': 2 }
	     */function maxBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseGt):undefined$1;}/**
	     * Computes the mean of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * _.mean([4, 2, 8, 6]);
	     * // => 5
	     */function mean(array){return baseMean(array,identity);}/**
	     * This method is like `_.mean` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be averaged.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.meanBy(objects, function(o) { return o.n; });
	     * // => 5
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.meanBy(objects, 'n');
	     * // => 5
	     */function meanBy(array,iteratee){return baseMean(array,getIteratee(iteratee,2));}/**
	     * Computes the minimum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => undefined
	     */function min(array){return array&&array.length?baseExtremum(array,identity,baseLt):undefined$1;}/**
	     * This method is like `_.min` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.minBy(objects, function(o) { return o.n; });
	     * // => { 'n': 1 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.minBy(objects, 'n');
	     * // => { 'n': 1 }
	     */function minBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseLt):undefined$1;}/**
	     * Multiply two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} multiplier The first number in a multiplication.
	     * @param {number} multiplicand The second number in a multiplication.
	     * @returns {number} Returns the product.
	     * @example
	     *
	     * _.multiply(6, 4);
	     * // => 24
	     */var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand;},1);/**
	     * Computes `number` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */var round=createRound('round');/**
	     * Subtract two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {number} minuend The first number in a subtraction.
	     * @param {number} subtrahend The second number in a subtraction.
	     * @returns {number} Returns the difference.
	     * @example
	     *
	     * _.subtract(6, 4);
	     * // => 2
	     */var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend;},0);/**
	     * Computes the sum of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 2, 8, 6]);
	     * // => 20
	     */function sum(array){return array&&array.length?baseSum(array,identity):0;}/**
	     * This method is like `_.sum` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be summed.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.sumBy(objects, function(o) { return o.n; });
	     * // => 20
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sumBy(objects, 'n');
	     * // => 20
	     */function sumBy(array,iteratee){return array&&array.length?baseSum(array,getIteratee(iteratee,2)):0;}/*------------------------------------------------------------------------*/ // Add methods that return wrapped values in chain sequences.
lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;// Add aliases.
lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;// Add methods to `lodash.prototype`.
mixin(lodash,lodash);/*------------------------------------------------------------------------*/ // Add methods that return unwrapped values in chain sequences.
lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.conformsTo=conformsTo;lodash.deburr=deburr;lodash.defaultTo=defaultTo;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.stubObject=stubObject;lodash.stubString=stubString;lodash.stubTrue=stubTrue;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;// Add aliases.
lodash.each=forEach;lodash.eachRight=forEachRight;lodash.first=head;mixin(lodash,function(){var source={};baseForOwn(lodash,function(func,methodName){if(!hasOwnProperty.call(lodash.prototype,methodName)){source[methodName]=func;}});return source;}(),{'chain':false});/*------------------------------------------------------------------------*/ /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type {string}
	     */lodash.VERSION=VERSION;// Assign default placeholders.
arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){lodash[methodName].placeholder=lodash;});// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
arrayEach(['drop','take'],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){n=n===undefined$1?1:nativeMax(toInteger(n),0);var result=this.__filtered__&&!index?new LazyWrapper(this):this.clone();if(result.__filtered__){result.__takeCount__=nativeMin(n,result.__takeCount__);}else{result.__views__.push({'size':nativeMin(n,MAX_ARRAY_LENGTH),'type':methodName+(result.__dir__<0?'Right':'')});}return result;};LazyWrapper.prototype[methodName+'Right']=function(n){return this.reverse()[methodName](n).reverse();};});// Add `LazyWrapper` methods that accept an `iteratee` value.
arrayEach(['filter','map','takeWhile'],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee){var result=this.clone();result.__iteratees__.push({'iteratee':getIteratee(iteratee,3),'type':type});result.__filtered__=result.__filtered__||isFilter;return result;};});// Add `LazyWrapper` methods for `_.head` and `_.last`.
arrayEach(['head','last'],function(methodName,index){var takeName='take'+(index?'Right':'');LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0];};});// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
arrayEach(['initial','tail'],function(methodName,index){var dropName='drop'+(index?'':'Right');LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1);};});LazyWrapper.prototype.compact=function(){return this.filter(identity);};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head();};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate);};LazyWrapper.prototype.invokeMap=baseRest(function(path,args){if(typeof path=='function'){return new LazyWrapper(this);}return this.map(function(value){return baseInvoke(value,path,args);});});LazyWrapper.prototype.reject=function(predicate){return this.filter(negate(getIteratee(predicate)));};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result);}if(start<0){result=result.takeRight(-start);}else if(start){result=result.drop(start);}if(end!==undefined$1){end=toInteger(end);result=end<0?result.dropRight(-end):result.take(end-start);}return result;};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse();};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH);};// Add `LazyWrapper` methods to `lodash.prototype`.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?'take'+(methodName=='last'?'Right':''):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return;}lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);var interceptor=function(value){var result=lodashFunc.apply(lodash,arrayPush([value],args));return isTaker&&chainAll?result[0]:result;};if(useLazy&&checkIteratee&&typeof iteratee=='function'&&iteratee.length!=1){// Avoid lazy use if the iteratee has a "length" value other than `1`.
isLazy=useLazy=false;}var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result=func.apply(value,args);result.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined$1});return new LodashWrapper(result,chainAll);}if(isUnwrapped&&onlyLazy){return func.apply(this,args);}result=this.thru(interceptor);return isUnwrapped?isTaker?result.value()[0]:result.value():result;};});// Add `Array` methods to `lodash.prototype`.
arrayEach(['pop','push','shift','sort','splice','unshift'],function(methodName){var func=arrayProto[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?'tap':'thru',retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func.apply(isArray(value)?value:[],args);}return this[chainName](function(value){return func.apply(isArray(value)?value:[],args);});};});// Map minified method names to their real names.
baseForOwn(LazyWrapper.prototype,function(func,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name+'';if(!hasOwnProperty.call(realNames,key)){realNames[key]=[];}realNames[key].push({'name':methodName,'func':lodashFunc});}});realNames[createHybrid(undefined$1,WRAP_BIND_KEY_FLAG).name]=[{'name':'wrapper','func':undefined$1}];// Add methods to `LazyWrapper`.
LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;// Add chain sequence methods to the `lodash` wrapper.
lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;// Add lazy aliases.
lodash.prototype.first=lodash.prototype.head;if(symIterator){lodash.prototype[symIterator]=wrapperToIterator;}return lodash;};/*--------------------------------------------------------------------------*/ // Export lodash.
var _=runInContext();// Some AMD build optimizers, like r.js, check for condition patterns like:
if(freeModule){// Export for Node.js.
(freeModule.exports=_)._=_;// Export for CommonJS support.
freeExports._=_;}else{// Export to the global object.
root._=_;}}).call(commonjsGlobal);})(lodash,lodash.exports);var DO_NOTHING=function(){};// @flow
var isArray=function(o){return o instanceof Array;};var isString=function(o){return typeof o==="string";};var COMPONENT_NAME="Icon";var Icon=function(_a){var color=_a.color,_b=_a.size,size=_b===void 0?1:_b,SVG=_a.svg,title=_a.title,_c=_a.onClick,onClick=_c===void 0?DO_NOTHING:_c;return isArray(SVG)// @ts-ignore
?jsxRuntime.jsx(MIcon.Stack,__assign({onClick:onClick,size:size,title:title,color:color||"currentColor","data-component-name":COMPONENT_NAME},{children:SVG.map(function(s,i){return jsxRuntime.jsx(MIcon__default["default"],{path:s},i);})})):isString(SVG)?jsxRuntime.jsx(MIcon__default["default"],{path:SVG,// @ts-ignore
onClick:onClick,size:size,title:title,color:color||"currentColor","data-component-name":COMPONENT_NAME})// @ts-ignore
:jsxRuntime.jsx(SVG,{fill:color||"currentColor","data-component-name":COMPONENT_NAME,height:size,onClick:onClick,width:size,title:title});};Icon.COMPONENT_NAME=COMPONENT_NAME;var XS$1=".5rem";var SM$1="1rem";var MD$1="1.5rem";var LG$1="2rem";var XL$1="2.5rem";var XXL$1="3rem";var XXXL$1="4rem";var XXXXL$1="5rem";var SPACINGS=Object.freeze({XS:XS$1,SM:SM$1,MD:MD$1,LG:LG$1,XL:XL$1,XXL:XXL$1,XXXL:XXXL$1,XXXXL:XXXXL$1});Object.freeze({DOWN:"down",RIGHT:"right"});var getFlexDirection=function(_a){var withRows=_a.withRows;return withRows?"column":"row";};var FlexBox=styled__default["default"].div(templateObject_1$2||(templateObject_1$2=__makeTemplateObject(["\n  align-items: ",";\n  display: ",";\n  flex: ",";\n  flex-direction: ",";\n  gap: ",";\n  justify-content: ",";\n  ","\n\n  ","\n  ","\n"],["\n  align-items: ",";\n  display: ",";\n  flex: ",";\n  flex-direction: ",";\n  gap: ",";\n  justify-content: ",";\n  ","\n\n  ","\n  ","\n"])),function(_a){var alignItems=_a.alignItems;return alignItems?alignItems:"initial";},function(p){return p.inline?"inline-flex":"flex";},function(_a){var fluid=_a.fluid;return fluid?1:"unset";},getFlexDirection,function(p){return p.gap?p.gap:SPACINGS.SM;},function(p){return p.justifyContent||"initial";},function(p){return p.wrapped?wrappedStyling:"";},function(p){return p.responsivePropsList?responsiveStyles(p):"";},function(p){return p._css;});FlexBox.defaultProps={withRows:false};var responsiveStyles=function(_a){var responsivePropsList=_a.responsivePropsList,originalProps=__rest(_a,["responsivePropsList"]);return responsivePropsList===null||responsivePropsList===void 0?void 0:responsivePropsList.map(function(_a){var mediaQueryFunc=_a.mediaQueryFunc,rProps=_a.props;var props=__assign(__assign({},originalProps),rProps);var alignItems=props.alignItems,gap=props.gap,inline=props.inline,justifyContent=props.justifyContent,fluid=props.fluid,wrapped=props.wrapped;return mediaQueryFunc(styled.css(templateObject_2$2||(templateObject_2$2=__makeTemplateObject(["\n      align-items: ",";\n      display: ",";\n      flex: ",";\n      flex-direction: ",";\n      gap: ",";\n      justify-content: ",";\n      ","\n    "],["\n      align-items: ",";\n      display: ",";\n      flex: ",";\n      flex-direction: ",";\n      gap: ",";\n      justify-content: ",";\n      ","\n    "])),alignItems?alignItems:"initial",inline?"inline-flex":"flex",fluid?1:"unset",getFlexDirection(props),gap?gap:SPACINGS.SM,justifyContent||"initial",wrapped?wrappedStyling:"")).join("");});};var wrappedStyling=styled.css(templateObject_3$2||(templateObject_3$2=__makeTemplateObject(["\n  flex-wrap: wrap;\n"],["\n  flex-wrap: wrap;\n"])));var templateObject_1$2,templateObject_2$2,templateObject_3$2;/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */var useSchedule=function useSchedule(_temp){var _ref=_temp===void 0?{}:_temp,_ref$duration=_ref.duration,duration=_ref$duration===void 0?1250:_ref$duration,_ref$delayMS=_ref.delayMS,delayMS=_ref$delayMS===void 0?750:_ref$delayMS,_ref$loop=_ref.loop,loop=_ref$loop===void 0?true:_ref$loop;var _useState=React.useState(0),elapsed=_useState[0],setTime=_useState[1];var _useState2=React.useState(false),delayComplete=_useState2[0],setDelayComplete=_useState2[1];React.useLayoutEffect(function(){var raf;var start;var loopTimeout;var destroyed=false;var tick=function tick(){if(destroyed){return;}raf=requestAnimationFrame(performAnimationFrame);};var performAnimationFrame=function performAnimationFrame(){setTime(Date.now()-start);tick();};var onStart=function onStart(){if(destroyed){return;}loopTimeout=setTimeout(function(){cancelAnimationFrame(raf);setTime(Date.now()-start);if(loop)onStart();},duration);start=Date.now();setDelayComplete(true);tick();};var renderingDelayTimeout=setTimeout(onStart,delayMS);return function(){destroyed=true;clearTimeout(renderingDelayTimeout);clearTimeout(loopTimeout);cancelAnimationFrame(raf);};},[duration,delayMS,loop]);return{elapsed:Math.min(1,elapsed/duration),delayMS:delayMS,delayComplete:delayComplete};};({children:propTypes.exports.func,render:propTypes.exports.func,duration:propTypes.exports.number,loop:propTypes.exports.bool,delayMS:propTypes.exports.number});/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var dotOneKeyframes=styled.keyframes(["0%{transform:translate(0,5px);}3%{transform:translate(1px,-5px);}6%{transform:translate(3px,-15px);}8%{transform:translate(5px,-18px);}9%{transform:translate(7px,-21px);}11%{transform:translate(8px,-22px);}13%{transform:translate(9px,-23px);}16%{transform:translate(12px,-25px);}18%{transform:translate(13px,-26px);}23%{transform:translate(18px,-26px);}24%{transform:translate(19px,-25px);}28%{transform:translate(22px,-23px);}31%{transform:translate(24px,-21px);}33%{transform:translate(26px,-18px);}34%{transform:translate(28px,-14px);}36%{transform:translate(29px,-12px);}38%{transform:translate(30px,-5px);}39%{transform:translate(31px,5px);}54%{transform:translate(31px,3px);}59%{transform:translate(33px);}61%{transform:translate(43px);}63%{transform:translate(48px);}64%{transform:translate(51px);}66%{transform:translate(53px);}68%{transform:translate(55px);}69%{transform:translate(57px);}76%{transform:translate(60px);}81%{transform:translate(61px);}83%,100%{transform:translate(62px);}"]);var dotTwoKeyframes=styled.keyframes(["4%{transform:translate(0);}6%{transform:translate(-1px);}8%{transform:translate(-2px);}9%{transform:translate(-5px);}11%{transform:translate(-7px);}13%{transform:translate(-12px);}14%{transform:translate(-17px);}16%{transform:translate(-19px);}18%{transform:translate(-22px);}19%{transform:translate(-25px);}21%{transform:translate(-26px);}23%{transform:translate(-27px);}24%{transform:translate(-28px);}26%{transform:translate(-29px);}29%{transform:translate(-30px);}33%,89%{transform:translate(-31px);}91%{transform:translate(-31px,1px);}94%{transform:translate(-31px,2px);}98%{transform:translate(-31px,3px);}99%{transform:translate(-31px,4px);}100%{transform:translate(-31px,5px);}"]);var dotThreeKeyframes=styled.keyframes(["39%{transform:translate(0);}44%{transform:translate(0,1px);}46%{transform:translate(0,2px);}48%{transform:translate(0,3px);}49%{transform:translate(0,4px);}51%{transform:translate(0,5px);}53%{transform:translate(-1px,-6px);}54%{transform:translate(-2px,-13px);}56%{transform:translate(-3px,-15px);}58%{transform:translate(-5px,-19px);}59%{transform:translate(-7px,-21px);}61%{transform:translate(-8px,-22px);}63%{transform:translate(-9px,-24px);}64%{transform:translate(-11px,-25px);}66%{transform:translate(-12px,-26px);}74%{transform:translate(-19px,-26px);}76%{transform:translate(-20px,-25px);}78%{transform:translate(-22px,-24px);}81%{transform:translate(-24px,-21px);}83%{transform:translate(-26px,-19px);}84%{transform:translate(-28px,-15px);}86%{transform:translate(-29px,-13px);}88%{transform:translate(-30px,-6px);}89%{transform:translate(-31px,5px);}91%{transform:translate(-31px,4px);}93%{transform:translate(-31px,3px);}94%{transform:translate(-31px,2px);}98%{transform:translate(-31px,1px);}100%{transform:translate(-31px);}"]);var StyledDotsCircle=styled__default["default"].circle.attrs({cy:36,r:9}).withConfig({displayName:"StyledDots__StyledDotsCircle",componentId:"sc-1ltah7e-0"})([""]);StyledDotsCircle.defaultProps={theme:DEFAULT_THEME};var StyledDotsCircleOne=styled__default["default"](StyledDotsCircle).attrs({cx:9}).withConfig({displayName:"StyledDots__StyledDotsCircleOne",componentId:"sc-1ltah7e-1"})(["animation:",";"],function(_ref){var duration=_ref.duration;return styled.css([""," ","ms linear infinite"],dotOneKeyframes,duration);});StyledDotsCircleOne.defaultProps={theme:DEFAULT_THEME};var StyledDotsCircleTwo=styled__default["default"](StyledDotsCircle).attrs(function(){return{cx:40};}).withConfig({displayName:"StyledDots__StyledDotsCircleTwo",componentId:"sc-1ltah7e-2"})(["animation:",";"],function(_ref2){var duration=_ref2.duration;return styled.css([""," ","ms linear infinite"],dotTwoKeyframes,duration);});StyledDotsCircleTwo.defaultProps={theme:DEFAULT_THEME};var StyledDotsCircleThree=styled__default["default"](StyledDotsCircle).attrs(function(){return{cx:71};}).withConfig({displayName:"StyledDots__StyledDotsCircleThree",componentId:"sc-1ltah7e-3"})(["animation:",";"],function(_ref3){var duration=_ref3.duration;return styled.css([""," ","ms linear infinite"],dotThreeKeyframes,duration);});StyledDotsCircleThree.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$5='loaders.loading_placeholder';var StyledLoadingPlaceholder=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$5,'data-garden-version':'8.53.2',role:'progressbar'}).withConfig({displayName:"StyledLoadingPlaceholder",componentId:"sc-x3bwsx-0"})(["display:inline-block;width:",";height:",";font-size:",";",""],function(props){return props.width||'1em';},function(props){return props.height||'0.9em';},function(props){return props.fontSize;},function(props){return retrieveComponentStyles(COMPONENT_ID$5,props);});StyledLoadingPlaceholder.defaultProps={theme:DEFAULT_THEME};var sizeToHeight=function sizeToHeight(size,theme){switch(size){case'small':return theme.space.base/2;case'medium':return theme.space.base*1.5;default:return theme.space.base*3;}};var sizeToBorderRadius=function sizeToBorderRadius(size,theme){return sizeToHeight(size,theme)/2;};var PROGRESS_BACKGROUND_COMPONENT_ID='loaders.progress_background';var StyledProgressBackground=styled__default["default"].div.attrs(function(props){return{'data-garden-id':PROGRESS_BACKGROUND_COMPONENT_ID,'data-garden-version':'8.53.2',borderRadius:props.borderRadius||sizeToBorderRadius(props.size,props.theme)};}).withConfig({displayName:"StyledProgress__StyledProgressBackground",componentId:"sc-2g8w4s-0"})(["margin:","px 0;border-radius:","px;background-color:",";color:",";",""],function(props){return props.theme.space.base*2;},function(props){return props.borderRadius;},function(props){return getColor('neutralHue',200,props.theme);},function(props){return props.color||getColor('successHue',600,props.theme);},function(props){return retrieveComponentStyles(PROGRESS_BACKGROUND_COMPONENT_ID,props);});StyledProgressBackground.defaultProps={theme:DEFAULT_THEME};var PROGESS_INDICATOR_COMPONENT_ID='loaders.progress_indicator';var StyledProgressIndicator=styled__default["default"].div.attrs(function(props){return{'data-garden-id':PROGESS_INDICATOR_COMPONENT_ID,'data-garden-version':'8.53.2',height:props.height||sizeToHeight(props.size,props.theme),borderRadius:props.borderRadius||sizeToBorderRadius(props.size,props.theme)};}).withConfig({displayName:"StyledProgress__StyledProgressIndicator",componentId:"sc-2g8w4s-1"})(["transition:width 0.1s ease-in-out;border-radius:","px;background:currentColor;width:","%;height:","px;",""],function(props){return props.borderRadius;},function(props){return props.value;},function(props){return props.height;},function(props){return retrieveComponentStyles(PROGESS_INDICATOR_COMPONENT_ID,props);});StyledProgressIndicator.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$4='loaders.skeleton';var fadeInAnimation=styled.keyframes(["0%,60%{opacity:0;}100%{opacity:1;}"]);var skeletonAnimation=styled.keyframes(["100%{left:100%;}"]);var skeletonRtlAnimation=styled.keyframes(["100%{right:100%;}"]);var retrieveSkeletonBackgroundColor=function retrieveSkeletonBackgroundColor(_ref){var theme=_ref.theme,isLight=_ref.isLight;if(isLight){return styled.css(["background-color:",";"],rgba(theme.colors.background,0.2));}return styled.css(["background-color:",";"],getColor('neutralHue',800,theme,0.1));};var retrieveSkeletonAnimation=function retrieveSkeletonAnimation(_ref2){var theme=_ref2.theme;if(theme.rtl){return styled.css(["right:-1800px;animation:"," 1.5s ease-in-out 300ms infinite;"],skeletonRtlAnimation);}return styled.css(["left:-1800px;animation:"," 1.5s ease-in-out 300ms infinite;"],skeletonAnimation);};var retrieveSkeletonGradient=function retrieveSkeletonGradient(_ref3){var theme=_ref3.theme,isLight=_ref3.isLight;return styled.css(["background-image:linear-gradient( ",",transparent,",",transparent );"],theme.rtl?'-45deg':'45deg',isLight?getColor('chromeHue',700,theme,0.4):rgba(theme.colors.background,0.6));};var StyledSkeleton=styled__default["default"].div.attrs({'data-garden-id':COMPONENT_ID$4,'data-garden-version':'8.53.2'}).withConfig({displayName:"StyledSkeleton",componentId:"sc-1raozze-0"})(["display:inline-block;position:relative;animation:"," 750ms linear;border-radius:",";width:",";height:",";overflow:hidden;line-height:",";"," &::before{position:absolute;top:0;width:1000px;height:100%;content:'';"," ","}",";"],fadeInAnimation,function(props){return props.theme.borderRadii.md;},function(props){return props.customWidth;},function(props){return props.customHeight;},function(props){return getLineHeight(props.theme.fontSizes.sm,props.theme.space.base*5);},retrieveSkeletonBackgroundColor,retrieveSkeletonAnimation,retrieveSkeletonGradient,function(props){return retrieveComponentStyles(COMPONENT_ID$4,props);});StyledSkeleton.defaultProps={theme:DEFAULT_THEME};var StyledSpinnerCircle=styled__default["default"].circle.attrs(function(props){return{cx:40,cy:40,r:34,fill:'none',stroke:'currentColor',strokeLinecap:'round',strokeWidth:props.strokeWidthValue,strokeDasharray:"".concat(props.dasharrayValue," 250"),transform:props.transform};}).withConfig({displayName:"StyledSpinnerCircle",componentId:"sc-o4kd70-0"})([""]);StyledSpinnerCircle.defaultProps={theme:DEFAULT_THEME};var StyledSVG=styled__default["default"].svg.attrs(function(props){return{'data-garden-version':'8.53.2',xmlns:'http://www.w3.org/2000/svg',width:props.width,height:props.height,focusable:'false',viewBox:"0 0 ".concat(props.width," ").concat(props.height),role:'progressbar'};}).withConfig({displayName:"StyledSVG",componentId:"sc-1xtc3kx-0"})(["width:",";height:",";color:",";font-size:",";",";"],function(props){return props.containerWidth||'1em';},function(props){return props.containerHeight||'0.9em';},function(props){return props.color||'inherit';},function(props){return props.fontSize||'inherit';},function(props){return retrieveComponentStyles(props.dataGardenId,props);});StyledSVG.defaultProps={theme:DEFAULT_THEME};var COMPONENT_ID$3='loaders.inline';var PULSE_ANIMATION=styled.keyframes(["0%,100%{opacity:.2;}50%{opacity:.8;}"]);var StyledCircle=styled__default["default"].circle.attrs({fill:'currentColor',cy:2,r:2}).withConfig({displayName:"StyledInline__StyledCircle",componentId:"sc-fxsb9l-0"})([""]);StyledCircle.defaultProps={theme:DEFAULT_THEME};var StyledInline=styled__default["default"].svg.attrs(function(props){return{'data-garden-id':COMPONENT_ID$3,'data-garden-version':'8.53.2',viewBox:'0 0 16 4',width:props.size,height:props.size*0.25};}).withConfig({displayName:"StyledInline",componentId:"sc-fxsb9l-1"})(["color:",";","{opacity:0.2;&:nth-child(1){animation:"," 1s infinite;animation-delay:",";}&:nth-child(2){animation:"," 1s infinite;animation-delay:0.2s;}&:nth-child(3){animation:"," 1s infinite;animation-delay:",";}}",""],function(props){return props.color;},StyledCircle,PULSE_ANIMATION,function(props){return props.theme.rtl?'unset':'0.4s';},PULSE_ANIMATION,PULSE_ANIMATION,function(props){return props.theme.rtl?'0.4s':'unset';},function(props){return retrieveComponentStyles(COMPONENT_ID$3,props);});StyledInline.defaultProps={theme:DEFAULT_THEME};var _excluded$4=["size","color","duration","delayMS"];var COMPONENT_ID$2='loaders.dots';var Dots$1=React.forwardRef(function(_ref,ref){var size=_ref.size,color=_ref.color,duration=_ref.duration,delayMS=_ref.delayMS,other=_objectWithoutProperties(_ref,_excluded$4);var theme=React.useContext(styled.ThemeContext);var environment=useDocument(theme);var canTransformSVG=React.useRef(null);if(environment&&canTransformSVG.current===null){var svg=environment.createElementNS('http://www.w3.org/2000/svg','svg');canTransformSVG.current='transform'in svg;}var _useSchedule=useSchedule({duration:duration,delayMS:delayMS,loop:true}),delayComplete=_useSchedule.delayComplete;var dotOne=React.useRef(null);var dotTwo=React.useRef(null);var dotThree=React.useRef(null);React.useEffect(function(){if(!canTransformSVG.current&&delayComplete){var transforms=[window.getComputedStyle(dotOne.current).getPropertyValue('transform'),window.getComputedStyle(dotTwo.current).getPropertyValue('transform'),window.getComputedStyle(dotThree.current).getPropertyValue('transform')];dotOne.current.setAttribute('transform',transforms[0]);dotTwo.current.setAttribute('transform',transforms[1]);dotThree.current.setAttribute('transform',transforms[2]);}});if(!delayComplete&&delayMS!==0){return React__default["default"].createElement(StyledLoadingPlaceholder,{fontSize:size},"\xA0");}return React__default["default"].createElement(StyledSVG,_extends({ref:ref,fontSize:size,color:color,width:"80",height:"72",dataGardenId:COMPONENT_ID$2},other),React__default["default"].createElement("g",{fill:"currentColor"},React__default["default"].createElement(StyledDotsCircleOne,{duration:duration,ref:dotOne}),React__default["default"].createElement(StyledDotsCircleTwo,{duration:duration,ref:dotTwo}),React__default["default"].createElement(StyledDotsCircleThree,{duration:duration,ref:dotThree})));});Dots$1.displayName='Dots';Dots$1.propTypes={size:propTypes.exports.any,duration:propTypes.exports.number,color:propTypes.exports.string,delayMS:propTypes.exports.number};Dots$1.defaultProps={size:'inherit',color:'inherit',duration:1250,delayMS:750};var SIZE=['small','medium','large'];var _excluded$3=["value","size"];var COMPONENT_ID$1='loaders.progress';var Progress=React__default["default"].forwardRef(function(_ref,ref){var value=_ref.value,size=_ref.size,other=_objectWithoutProperties(_ref,_excluded$3);var percentage=Math.max(0,Math.min(100,value));return React__default["default"].createElement(StyledProgressBackground,_extends({"data-garden-id":COMPONENT_ID$1,"data-garden-version":'8.53.2',"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":percentage,role:"progressbar",size:size,ref:ref},other),React__default["default"].createElement(StyledProgressIndicator,{value:percentage,size:size}));});Progress.displayName='Progress';Progress.propTypes={color:propTypes.exports.string,value:propTypes.exports.number.isRequired,size:propTypes.exports.oneOf(SIZE)};Progress.defaultProps={value:0,size:'medium'};var _excluded$2=["width","height","isLight"];var Skeleton=React.forwardRef(function(_ref,ref){var width=_ref.width,height=_ref.height,isLight=_ref.isLight,other=_objectWithoutProperties(_ref,_excluded$2);return React__default["default"].createElement(StyledSkeleton,_extends({ref:ref,isLight:isLight,customWidth:width,customHeight:height},other),"\xA0");});Skeleton.displayName='Skeleton';Skeleton.propTypes={width:propTypes.exports.string,height:propTypes.exports.string,isLight:propTypes.exports.bool};Skeleton.defaultProps={width:'100%',height:'100%'};var STROKE_WIDTH_FRAMES={0:6,14:5,26:4,36:3,46:2,58:3,70:4,80:5,91:6};var ROTATION_FRAMES={0:-90,8:-81,36:-30,41:-18,44:-8,48:0,55:22,63:53,64:62,66:67,68:78,69:90,71:99,73:112,74:129,76:138,78:159,79:180,81:190,83:207,84:221,86:226,88:235,90:243,99:270};var DASHARRAY_FRAMES={0:0,13:2,26:13,53:86,58:90,63:89,64:88,66:86,68:83,69:81,71:76,73:70,74:62,76:58,78:47,79:37,81:31,83:23,84:16,88:10,89:7,98:1,99:0};var _excluded$1=["size","duration","color","delayMS"];var COMPONENT_ID='loaders.spinner';var TOTAL_FRAMES=100;var computeFrames=function computeFrames(frames,duration){return Object.entries(frames).reduce(function(acc,item,index,arr){var _item=_slicedToArray(item,2),frame=_item[0],value=_item[1];var _ref=arr[index+1]||[TOTAL_FRAMES,arr[0][1]],_ref2=_slicedToArray(_ref,2),nextFrame=_ref2[0],nextValue=_ref2[1];var diff=parseInt(nextFrame,10)-parseInt(frame,10);var frameHz=1000/60;var subDuration=duration/(TOTAL_FRAMES-1)*diff;var lastValue=value;acc[frame]=value;for(var idx=0;idx<diff;idx++){lastValue=lastValue+(nextValue-lastValue)*(frameHz/subDuration);subDuration=duration/(TOTAL_FRAMES-1)*(diff-idx);acc[parseInt(frame,10)+idx+1]=lastValue;}acc[nextFrame]=nextValue;return acc;},{});};var Spinner=React.forwardRef(function(_ref3,ref){var size=_ref3.size,duration=_ref3.duration,color=_ref3.color,delayMS=_ref3.delayMS,other=_objectWithoutProperties(_ref3,_excluded$1);var strokeWidthValues=computeFrames(STROKE_WIDTH_FRAMES,duration);var rotationValues=computeFrames(ROTATION_FRAMES,duration);var dasharrayValues=computeFrames(DASHARRAY_FRAMES,duration);var _useSchedule=useSchedule({duration:duration,delayMS:delayMS}),elapsed=_useSchedule.elapsed,delayComplete=_useSchedule.delayComplete;var frame=(elapsed*100).toFixed(0);var strokeWidthValue=strokeWidthValues[frame];var rotationValue=rotationValues[frame];var dasharrayValue=dasharrayValues[frame];var WIDTH=80;var HEIGHT=80;if(!delayComplete&&delayMS!==0){return React__default["default"].createElement(StyledLoadingPlaceholder,{width:"1em",height:"1em",fontSize:size},"\xA0");}return React__default["default"].createElement(StyledSVG,_extends({ref:ref,fontSize:size,color:color,width:WIDTH,height:HEIGHT,dataGardenId:COMPONENT_ID,containerHeight:"1em",containerWidth:"1em"},other),React__default["default"].createElement(StyledSpinnerCircle,{dasharrayValue:dasharrayValue,strokeWidthValue:strokeWidthValue,transform:"rotate(".concat(rotationValue,", ").concat(WIDTH/2,", ").concat(HEIGHT/2,")")}));});Spinner.displayName='Spinner';Spinner.propTypes={size:propTypes.exports.any,duration:propTypes.exports.number,color:propTypes.exports.string,delayMS:propTypes.exports.number};Spinner.defaultProps={size:'inherit',duration:1250,color:'inherit',delayMS:750};var _excluded=["size","color"];var Inline=React.forwardRef(function(_ref,ref){var size=_ref.size,color=_ref.color,other=_objectWithoutProperties(_ref,_excluded);return React__default["default"].createElement(StyledInline,_extends({ref:ref,size:size,color:color},other),React__default["default"].createElement(StyledCircle,{cx:"14"}),React__default["default"].createElement(StyledCircle,{cx:"8"}),React__default["default"].createElement(StyledCircle,{cx:"2"}));});Inline.displayName='Inline';Inline.propTypes={size:propTypes.exports.number,color:propTypes.exports.string};Inline.defaultProps={size:16,color:'inherit'};var XXS=".8rem";var XS=".9rem";var SM="1rem";var MD="1.3rem";var LG="1.7rem";var XL="2.3rem";var XXL="3.3rem";// h1
var XXXL="4rem";var XXXXL="5rem";var XXXXXL="6rem";var FONT_SIZES={XXS:XXS,XS:XS,SM:SM,MD:MD,LG:LG,XL:XL,XXL:XXL,XXXL:XXXL,XXXXL:XXXXL,XXXXXL:XXXXXL};Object.freeze({XXS:XXS.replace("r",""),XS:XS.replace("r",""),SM:SM.replace("r",""),MD:MD.replace("r",""),LG:LG.replace("r",""),XL:XL.replace("r",""),XXL:XXL.replace("r",""),XXXL:XXXL.replace("r",""),XXXXL:XXXXL.replace("r",""),XXXXXL:XXXXXL.replace("r","")});var Dots=function(_a){var color=_a.color,_b=_a.size,size=_b===void 0?FONT_SIZES.XXL:_b;return jsxRuntime.jsx(Dots$1,{color:color,size:size,delayMS:100,duration:1000});};var useIsMounted=function(){var isMounted=React.useRef();React.useEffect(function(){isMounted.current=true;return function(){isMounted.current=false;};},[]);return function(){return!!isMounted.current;};};var fitContent=styled.css(templateObject_1$1||(templateObject_1$1=__makeTemplateObject(["\n  width: fit-content;\n  ","\n"],["\n  width: fit-content;\n  ","\n"])),function(_a){var compact=_a.compact;return compact?"min-width: fit-content; padding: 0 1em;":"";});var fitContainer=styled.css(templateObject_2$1||(templateObject_2$1=__makeTemplateObject(["width: 100%;"],["width: 100%;"])));var colors=styled.css(templateObject_3$1||(templateObject_3$1=__makeTemplateObject(["\n  ",";\n  border-color: ",";\n\n  ","\n  :hover, :active {\n    border-color: transparent;\n  }\n"],["\n  ",";\n  border-color: ",";\n\n  ","\n  :hover, :active {\n    border-color: transparent;\n  }\n"])),buttonLikeHoverable,function(_a){var flat=_a.flat,primary=_a.primary,inline=_a.inline,color=_a.color;return!flat&&!primary&&!inline?color:"transparent";},getInlineStyling);var alignment=function(_a){var alignSelf=_a.alignSelf;return alignSelf?styled.css(templateObject_4$1||(templateObject_4$1=__makeTemplateObject(["align-self: ",";"],["align-self: ",";"])),alignSelf):"";};var casing=function(_a){var theme=_a.theme;var casing=theme.styles.buttons.textTransform;return casing?styled.css(templateObject_5||(templateObject_5=__makeTemplateObject(["text-transform: ",";"],["text-transform: ",";"])),casing):"";};var baseColor=function(_a){var color=_a.color,danger=_a.danger,neutral=_a.neutral,success=_a.success,theme=_a.theme,warning=_a.warning;if(color)return color;if(danger)return theme.styles.colorDanger;if(neutral)return COLORS.LIGHT_GREY;if(success)return theme.styles.colorSuccess;if(warning)return theme.styles.colorWarning;return theme.styles.colorPrimary;};var ButtonBase=styled__default["default"](function(_a){var children=_a.children,disabled=_a.disabled;_a.groupKey;var icon=_a.icon,iconSize=_a.iconSize,innerAs=_a.innerAs,innerRef=_a.innerRef,iconPosition=_a.iconPosition,loading=_a.loading,onClick=_a.onClick,pill=_a.pill,props=__rest(_a,["children","disabled","groupKey","icon","iconSize","innerAs","innerRef","iconPosition","loading","onClick","pill"]);// @ts-ignore
return jsxRuntime.jsx(Button$1,__assign({as:innerAs,disabled:disabled,isPill:pill,ref:innerRef,onClick:onClick},props,{children:loading?jsxRuntime.jsx(LoaderContainer,__assign({alignItems:"center",justifyContent:"center"},{children:jsxRuntime.jsx(Dots,{size:FONT_SIZES.MD})})):icon?jsxRuntime.jsxs(FlexBox,__assign({alignItems:"center",gap:SPACINGS.XS,justifyContent:"center"},{children:[iconPosition==="left"&&jsxRuntime.jsx(Icon,{color:"currentColor",svg:icon,size:iconSize}),children?jsxRuntime.jsx("span",{children:children}):undefined,iconPosition==="right"&&jsxRuntime.jsx(Icon,{color:"currentColor",svg:icon,size:iconSize})]})):jsxRuntime.jsx("span",{children:children})}));}).attrs(function(props){return __assign(__assign({},props),{color:baseColor(props)});})(templateObject_6||(templateObject_6=__makeTemplateObject(["\n  &&&& {\n    font-size: inherit;\n    font-weight: bold;\n    ","\n    ","\n    ","\n    ","\n    ","\n  }\n"],["\n  &&&& {\n    font-size: inherit;\n    font-weight: bold;\n    ","\n    ","\n    ","\n    ","\n    ","\n  }\n"])),function(_a){var fluid=_a.fluid;return!fluid?fitContent:fitContainer;},alignment,casing,function(_a){var disabled=_a.disabled;return!disabled?colors:"";},function(_a){var _css=_a._css;return _css;});var Button=styled__default["default"](React.forwardRef(function(_a,ref){var _b=_a.autoLoadable,autoLoadable=_b===void 0?false:_b,disabled=_a.disabled,_c=_a.loading,loadingProp=_c===void 0?false:_c,onClick=_a.onClick,props=__rest(_a,["autoLoadable","disabled","loading","onClick"]);var _d=__read(React.useState(false),2),isLoading=_d[0],setIsLoadingTo=_d[1];var isMounted=useIsMounted();var computedIsLoading=React.useCallback(function(){return autoLoadable?isLoading:loadingProp;},[autoLoadable,isLoading,loadingProp]);var processClick=function(e){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(_b){switch(_b.label){case 0:setIsLoadingTo(true);_b.label=1;case 1:_b.trys.push([1,3,,4]);return[4/*yield*/,onClick(e)];case 2:_b.sent();return[3/*break*/,4];case 3:_b.sent();return[3/*break*/,4];case 4:if(isMounted())setIsLoadingTo(false);return[2/*return*/];}});});};return jsxRuntime.jsx(ButtonBase,__assign({},props,{disabled:disabled||computedIsLoading(),innerRef:ref,loading:computedIsLoading(),// @ts-ignore
onClick:autoLoadable?processClick:onClick}));}))(templateObject_7||(templateObject_7=__makeTemplateObject([""],[""// @ts-ignore
])));// @ts-ignore
Button.COMPONENT_NAME="Button";// @ts-ignore
Button.defaultProps={fluid:false,flat:false,iconPosition:"left",primary:true,disabled:false};var LoaderContainer=styled__default["default"](FlexBox)(templateObject_8||(templateObject_8=__makeTemplateObject(["\n  min-height: 30px;\n"],["\n  min-height: 30px;\n"])));var templateObject_1$1,templateObject_2$1,templateObject_3$1,templateObject_4$1,templateObject_5,templateObject_6,templateObject_7,templateObject_8;var Header=styled__default["default"](Header$1).attrs(function(_a){var danger=_a.danger,success=_a.success,warning=_a.warning,theme=_a.theme;// Color is overwritten by a class style from zendesk :(
var color=theme.styles.textColorPrimary;if(danger)color=theme.styles.colorDanger;if(success)color=theme.styles.colorSuccess;if(warning)color=theme.styles.colorWarning;return{color:color};})(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  ","\n"],["\n  ","\n"])),textWithColor);var createButtons=function(buttons,closeModal,shouldDisable,autoClose,adjustModalState){return buttons.map(function(b){var _a=b.props,onClick=_a.onClick,disabled=_a.disabled,disableable=_a.disableable;return jsxRuntime.jsx(FooterItem$2,{children:React__default["default"].cloneElement(b,{onClick:function(){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:adjustModalState();return[4/*yield*/,onClick()];case 1:_a.sent();if(autoClose)closeModal();return[2/*return*/];}});});},disabled:disableable?shouldDisable:disabled})},b.key);});};exports.Modal=function(_a){var _b,_c;var isVisible=_a.isVisible,closeModal=_a.closeModal,disableActions=_a.disableActions,modalContent=_a.modalContent,className=_a.className;var isProcessing=(_b=__read(React.useState(false),2),_b[0]),setIsProcessingTo=_b[1];if(!isVisible)return null;if(!modalContent)throw new Error("Modal found null modal content");var autoClose=(_c=modalContent.autoClose,_c===void 0?true:_c),body=modalContent.body,buttons=modalContent.buttons,danger=modalContent.danger,isLarge=modalContent.isLarge,success=modalContent.success,title=modalContent.title,warning=modalContent.warning,withCancelButton=modalContent.withCancelButton,withNoActions=modalContent.withNoActions,onClose=modalContent.onClose;var handleClose=function(){closeModal();setIsProcessingTo(false);if(onClose)onClose();};var setProcessingState=function(){return setIsProcessingTo(true);};var footerItems=function(){return buttons?createButtons(buttons,handleClose,disableActions,autoClose,setProcessingState):jsxRuntime.jsx(FooterItem$2,{children:jsxRuntime.jsx(Button,__assign({onClick:handleClose,primary:true,disabled:disableActions,success:success,danger:danger,warning:warning},{children:"OK"}))});};return jsxRuntime.jsxs(Modal,__assign({onClose:handleClose,className:className,isAnimated:true,isLarge:isLarge,backdropProps:{onClick:function(e){e.preventDefault();},style:{fontFamily:"inherit"}}},{children:[title// @ts-ignore
?jsxRuntime.jsx(Header,__assign({danger:danger,success:success,warning:warning},{children:title})):null,jsxRuntime.jsx(Body,{children:body}),withNoActions?null:jsxRuntime.jsxs(Footer$2,{children:[withCancelButton?jsxRuntime.jsx(FooterItem$2,{children:jsxRuntime.jsx(Button,__assign({onClick:handleClose,flat:true,loading:isProcessing,success:success,danger:danger,warning:warning},{children:"Cancel"}))}):null,footerItems()]}),jsxRuntime.jsx(Close$2,{"aria-label":"Close modal"})]}));};var hideCloseButton=styled.css(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  button[data-garden-id=\"modals.close\"] {\n    display: none;\n  }\n"],["\n  button[data-garden-id=\"modals.close\"] {\n    display: none;\n  }\n"])));var Body=styled__default["default"](Body$2)(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  font-size: inherit;\n"],["\n  font-size: inherit;\n"])));exports.Modal=styled__default["default"](exports.Modal)(templateObject_4||(templateObject_4=__makeTemplateObject(["\n  &&&& {\n    color: ",";\n\n    ","\n  }\n"],["\n  &&&& {\n    color: ",";\n\n    ","\n  }\n"])),function(_a){var theme=_a.theme;return theme.styles.textColorPrimary;},function(_a){var modalContent=_a.modalContent;return(modalContent===null||modalContent===void 0?void 0:modalContent.isNotDismissible)?hideCloseButton:"";});var templateObject_1,templateObject_2,templateObject_3,templateObject_4;
//# sourceMappingURL=modal.js.map
