Object.defineProperty(exports, '__esModule', { value: true });

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

function __read(o, n) {
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
            console[level].apply(console, __spreadArray(["%c".concat(_this.moduleName), "".concat(LEVEL_STYLES[level], " padding: 2px 6px;")], __read(args), false));
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

var listeners = new Set();
var navBar;
var scrolledPassedNavBar;
var logger = new Logger("NavBarScrollWatcher");
var checkNavPosition = function () {
    if (!navBar)
        return;
    var bottomPixel = navBar.getBoundingClientRect().height;
    var isCurrentlyPassedBar = window.scrollY > bottomPixel;
    logger.writeInfo("window.scrollY", window.scrollY, "bottomPixel", bottomPixel, "scrolledPassedNavBar", scrolledPassedNavBar);
    if ((scrolledPassedNavBar == null) ||
        (!scrolledPassedNavBar && isCurrentlyPassedBar) ||
        (scrolledPassedNavBar && !isCurrentlyPassedBar)) {
        notifyListeners(isCurrentlyPassedBar);
    }
    scrolledPassedNavBar = isCurrentlyPassedBar;
};
var notifyListeners = function (b) {
    listeners.forEach(function (f) { f(b); });
};
var NavBarScrollWatcher = /** @class */ (function () {
    function NavBarScrollWatcher() {
    }
    NavBarScrollWatcher.onScrollPassedNavBar = function (f) {
        listeners.add(f);
        if (listeners.size === 1) {
            window.addEventListener("scroll", checkNavPosition);
        }
        return function () {
            listeners.delete(f);
            if (listeners.size === 0) {
                window.removeEventListener("scroll", checkNavPosition);
            }
        };
    };
    NavBarScrollWatcher.setNavBar = function (n) { navBar = n; };
    NavBarScrollWatcher.setInitialState = function () { checkNavPosition(); };
    return NavBarScrollWatcher;
}());

var VALIDATION_STATES = {
    ERROR: "error",
    WARNING: "warning",
    SUCCESS: "success",
    NONE: null,
};

var validateFields = function (fieldLabels) { return (function (invalidFields, field) { return (invalidFields.hasOwnProperty(field)
    ? {
        validation: VALIDATION_STATES.ERROR,
        message: "".concat(fieldLabels[field], " ").concat(invalidFields[field][0]),
    }
    : { validation: VALIDATION_STATES.NONE }); }); };

exports.NavBarScrollWatcher = NavBarScrollWatcher;
exports.validateFields = validateFields;
//# sourceMappingURL=utils.js.map
