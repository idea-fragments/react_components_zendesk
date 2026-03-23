Object.defineProperty(exports, '__esModule', {
  value: true
});
var dist = {};
Object.defineProperty(dist, '__esModule', {
  value: true
});
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
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
var LEVEL_STYLES = {
  info: "background: #499cc8; color: white;",
  error: "background: #c14a4f; color: white;",
  warn: "background: #e0a270; color: black;"
};
var modules = new Set();
var Logger = /** @class */function () {
  function Logger(moduleName) {
    var _this = this;
    this.log = function (level) {
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (!modules.has(_this.moduleName)) return;
        console[level].apply(console, __spreadArray(["%c".concat(Logger.packagePrefix()).concat(_this.moduleName), "".concat(LEVEL_STYLES[level], " padding: 2px 6px;")], __read(args), false));
      };
    };
    this.writeInfo = this.log("info");
    this.writeError = this.log("error");
    this.writeWarning = this.log("warn");
    this.moduleName = moduleName;
  }
  var _a;
  _a = Logger;
  Logger.packageName = "";
  Logger.addModules = function (m) {
    m.forEach(function (name) {
      return modules.add(name);
    });
  };
  Logger.getModules = function () {
    return __spreadArray([], __read(modules), false);
  };
  Logger.packagePrefix = function () {
    return !!_a.packageName ? "".concat(_a.packageName, " : ") : "";
  };
  return Logger;
}();
if (typeof window !== "undefined") window.Logger = Logger;
var Logger_1 = dist.Logger = Logger;
var name = "@idea-fragments/react-components-zendesk";
var version = "0.1.77";
var files = ["dist/*.js", "dist/*.js.map", "dist/types"];
var exports$1 = {
  "./*": {
    types: "./dist/types/*.d.ts",
    "default": "./dist/*.js"
  }
};
var dependencies = {
  "@idea-fragments/logger-js": "^0.0.1",
  color: "^4.2.3",
  "jslib-html5-camera-photo": "^3.3.4",
  lodash: "^4.17.23",
  moment: "^2.29.3",
  "react-date-range": "^1.4.0",
  "react-list": "^0.8.18",
  "react-number-format": "^4.9.3",
  "tesseract.js": "^7.0.0"
};
var peerDependencies = {
  "@mdi/js": ">=6.7.96",
  "@mdi/react": ">=1.6.0",
  "babel-loader": ">=8.2.5",
  "babel-plugin-styled-components": ">=2.0.7",
  react: ">=18.2.0",
  "react-dom": ">=18.2.0",
  "styled-components": ">=5.3.5"
};
var devDependencies = {
  "@babel/core": "^7.18.0",
  "@mdi/js": "^6.7.96",
  "@mdi/react": "^1.6.0",
  "@mdx-js/react": "^1.6.22",
  "@rollup/plugin-babel": "^5.3.1",
  "@rollup/plugin-commonjs": "^22.0.0",
  "@rollup/plugin-json": "^6.1.0",
  "@rollup/plugin-node-resolve": "^13.3.0",
  "@rollup/plugin-typescript": "^8.3.2",
  "@storybook/addon-actions": "^7.5.3",
  "@storybook/addon-controls": "^7.5.3",
  "@storybook/addon-essentials": "^7.5.3",
  "@storybook/addon-interactions": "^7.5.3",
  "@storybook/addon-links": "^7.5.3",
  "@storybook/addon-mdx-gfm": "^7.5.3",
  "@storybook/preset-create-react-app": "^7.5.3",
  "@storybook/react": "^7.5.3",
  "@storybook/react-webpack5": "^7.5.3",
  "@tsconfig/create-react-app": "^1.0.2",
  "@types/color": "^3.0.3",
  "@types/jslib-html5-camera-photo": "^3.1.2",
  "@types/react-date-range": "^1.4.3",
  "@types/styled-components": "^5.1.25",
  "@typescript-eslint/eslint-plugin": "^5.25.0",
  "@typescript-eslint/parser": "^5.25.0",
  "@zendeskgarden/react-accordions": "^8.70.0",
  "@zendeskgarden/react-avatars": "^8.51.0",
  "@zendeskgarden/react-breadcrumbs": "^8.51.0",
  "@zendeskgarden/react-buttons": "^8.51.0",
  "@zendeskgarden/react-datepickers": "^8.51.0",
  "@zendeskgarden/react-dropdowns": "^8.51.0",
  "@zendeskgarden/react-forms": "^8.51.0",
  "@zendeskgarden/react-grid": "^8.51.0",
  "@zendeskgarden/react-loaders": "^8.51.0",
  "@zendeskgarden/react-modals": "^8.51.0",
  "@zendeskgarden/react-notifications": "^8.51.0",
  "@zendeskgarden/react-pagination": "^8.51.0",
  "@zendeskgarden/react-tables": "^8.51.0",
  "@zendeskgarden/react-tabs": "^8.51.0",
  "@zendeskgarden/react-tags": "^8.51.0",
  "@zendeskgarden/react-theming": "^8.51.0",
  "@zendeskgarden/react-tooltips": "^8.51.0",
  "@zendeskgarden/react-typography": "^8.51.0",
  "babel-loader": "^8.2.5",
  "babel-plugin-styled-components": "^2.0.7",
  eslint: "^8.16.0",
  "eslint-config-prettier": "^8.8.0",
  "eslint-config-react-app": "^7.0.1",
  "patch-package": "^8.0.1",
  "pre-commit": "^1.2.2",
  prettier: "^2.8.6",
  react: "18.2.0",
  "react-dom": "18.2.0",
  "react-easy-crop": "^4.7.4",
  "react-images-uploading": "^3.1.7",
  "react-player": "^2.12.0",
  "react-scripts": "^5.0.1",
  rollup: "^2.74.1",
  "rollup-plugin-dts": "^4.2.1",
  "rollup-plugin-peer-deps-external": "^2.2.4",
  "rollup-plugin-postcss": "^4.0.2",
  "rollup-plugin-typescript2": "^0.31.2",
  "source-map": "^0.8.0-beta.0",
  storybook: "^7.5.3",
  "styled-components": "^5.3.5",
  tslib: "^2.4.0",
  typescript: "^4.6.4",
  webpack: "^5.73.0"
};
var overrides = {
  "@mdx-js/react": {
    react: "18.2.0"
  },
  react: "18.2.0",
  "react-dom": "18.2.0"
};
var resolutions = {
  "source-map": "^0.8.0-beta.0"
};
var scripts = {
  build: "react-scripts build",
  "build-storybook": "storybook build",
  cleanup: "rm -rf dist",
  eject: "react-scripts eject",
  format: "./git_hooks/pre_commit/prettier.sh",
  lint: "eslint",
  postinstall: "patch-package",
  rollup: "node scripts/rollup-prompt.js",
  start: "react-scripts start",
  storybook: "storybook dev -p 6006",
  test: "react-scripts test"
};
var eslintConfig = {
  "extends": ["react-app", "prettier"],
  overrides: [{
    files: ["**/*.stories.*"],
    rules: {
      "import/no-anonymous-default-export": "off"
    }
  }, {
    files: ["*.ts"],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json"
    }
  }, {
    files: ["**/*.stories.*"],
    rules: {
      "import/no-anonymous-default-export": "off",
      "react-hooks/exhaustive-deps": "error"
    }
  }]
};
var browserslist = {
  production: [">0.2%", "not dead", "not op_mini all"],
  development: ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
};
var description = "Component library built on the V6 version of the Zendesk React components library.";
var repository = {
  type: "git",
  url: "git+https://github.com/idea-fragments/react_components_zendesk.git"
};
var keywords = ["react"];
var author = "IdeaFragments";
var license = "MIT";
var bugs = {
  url: "https://github.com/idea-fragments/react_components_zendesk/issues"
};
var homepage = "https://github.com/idea-fragments/react_components_zendesk#readme";
var types = "./dist/index.d.ts";
var packageJson = {
  name: name,
  version: version,
  "private": false,
  files: files,
  exports: exports$1,
  dependencies: dependencies,
  peerDependencies: peerDependencies,
  devDependencies: devDependencies,
  overrides: overrides,
  resolutions: resolutions,
  scripts: scripts,
  eslintConfig: eslintConfig,
  browserslist: browserslist,
  description: description,
  repository: repository,
  keywords: keywords,
  author: author,
  license: license,
  bugs: bugs,
  homepage: homepage,
  types: types,
  "pre-commit": {
    run: ["format", "lint"]
  }
};
var enableLogging = function () {
  return Logger_1.addModules(["DatePickerSelector", "DateRangePickerSelector", "Drawer", "Dropdown", "Loadable", "NavBarScrollWatcher", "PhotoBooth", "SearchableSelector", "TableFilter", "Toggles", "useTextQualityDetection"]);
};
Logger_1.packageName = packageJson.name;
var listeners = new Set();
var navBar;
var scrolledPassedNavBar;
var logger = new Logger_1("NavBarScrollWatcher");
var checkNavPosition = function () {
  if (!navBar) return;
  var bottomPixel = navBar.getBoundingClientRect().height;
  var isCurrentlyPassedBar = window.scrollY > bottomPixel;
  logger.writeInfo("window.scrollY", window.scrollY, "bottomPixel", bottomPixel, "scrolledPassedNavBar", scrolledPassedNavBar);
  if (scrolledPassedNavBar == null || !scrolledPassedNavBar && isCurrentlyPassedBar || scrolledPassedNavBar && !isCurrentlyPassedBar) {
    notifyListeners(isCurrentlyPassedBar);
  }
  scrolledPassedNavBar = isCurrentlyPassedBar;
};
var notifyListeners = function (b) {
  listeners.forEach(function (f) {
    f(b);
  });
};
var NavBarScrollWatcher = /** @class */function () {
  function NavBarScrollWatcher() {}
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
  NavBarScrollWatcher.setNavBar = function (n) {
    navBar = n;
  };
  NavBarScrollWatcher.setInitialState = function () {
    checkNavPosition();
  };
  return NavBarScrollWatcher;
}();
var VALIDATION_STATES = {
  ERROR: "error",
  WARNING: "warning",
  SUCCESS: "success",
  NONE: undefined
};
var validateFields = function (fieldLabels) {
  return function (invalidFields, field) {
    return invalidFields.hasOwnProperty(field) ? {
      validation: VALIDATION_STATES.ERROR,
      message: "".concat(fieldLabels[field], " ").concat(invalidFields[field][0])
    } : {
      validation: VALIDATION_STATES.NONE
    };
  };
};
exports.NavBarScrollWatcher = NavBarScrollWatcher;
exports.enableLogging = enableLogging;
exports.validateFields = validateFields;
//# sourceMappingURL=utilities.js.map
