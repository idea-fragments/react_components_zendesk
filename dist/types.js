Object.defineProperty(exports, '__esModule', {
  value: true
});
var Component_type = require('components/Component.type');
Object.keys(Component_type).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return Component_type[k];
    }
  });
});
//# sourceMappingURL=types.js.map
