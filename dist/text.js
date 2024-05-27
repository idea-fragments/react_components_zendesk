Object.defineProperty(exports, '__esModule', {
  value: true
});
var styled = require('styled-components');
function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var getColor = styled.css(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"
// const subTextStyling = css`
//   margin-top: 0;
// `
])), function (_a) {
  var color = _a.color,
    danger = _a.danger,
    theme = _a.theme;
  if (danger) return theme.styles.colorDanger;
  if (color) return color;
  return "inherit";
});
// const subTextStyling = css`
//   margin-top: 0;
// `
var subTextStyling = styled.css(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  margin-bottom: 0;\n\n  & + * {\n    margin-top: 0;\n  }\n"], ["\n  margin-bottom: 0;\n\n  & + * {\n    margin-top: 0;\n  }\n"])));
var Text = styled__default["default"].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  text-align: ", ";\n  width: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  text-align: ", ";\n  width: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
  var align = _a.align;
  return align;
}, function (_a) {
  var fluid = _a.fluid;
  return fluid ? "100%" : "unset";
}, function (_a) {
  var color = _a.color;
  return color ? getColor : "";
}, function (_a) {
  var hasSubText = _a.hasSubText;
  return hasSubText ? subTextStyling : "";
}, getColor, function (_a) {
  var _css = _a._css;
  return _css;
});
var templateObject_1$4, templateObject_2$2, templateObject_3$2;
var XXS$1 = ".8rem";
var XS$1 = ".9rem";
var SM = "1rem";
var MD$1 = "1.3rem";
var LG$1 = "1.7rem";
var XL$1 = "2.3rem";
var XXL = "3.3rem"; // h1
var XXXL = "4rem";
var XXXXL = "5rem";
var XXXXXL = "6rem";
var THIN = "100";
var LIGHT = "300";
var REGULAR = "400";
var MEDIUM = "500";
var BOLD = "700";
var BLACK = "800";
var DIV = "div";
var LABEL = "label";
var H1$1 = "h1";
var H2$1 = "h2";
var H3$1 = "h3";
var H4$1 = "h4";
var H5$1 = "h5";
var H6$1 = "h6";
var P = "p";
var SPAN = "span";
var FONT_TAGS = {
  DIV: DIV,
  LABEL: LABEL,
  H1: H1$1,
  H2: H2$1,
  H3: H3$1,
  H4: H4$1,
  H5: H5$1,
  H6: H6$1,
  P: P,
  SPAN: SPAN
};
var FONT_SIZES = {
  XXS: XXS$1,
  XS: XS$1,
  SM: SM,
  MD: MD$1,
  LG: LG$1,
  XL: XL$1,
  XXL: XXL,
  XXXL: XXXL,
  XXXXL: XXXXL,
  XXXXXL: XXXXXL
};
Object.freeze({
  XXS: XXS$1.replace("r", ""),
  XS: XS$1.replace("r", ""),
  SM: SM.replace("r", ""),
  MD: MD$1.replace("r", ""),
  LG: LG$1.replace("r", ""),
  XL: XL$1.replace("r", ""),
  XXL: XXL.replace("r", ""),
  XXXL: XXXL.replace("r", ""),
  XXXXL: XXXXL.replace("r", ""),
  XXXXXL: XXXXXL.replace("r", "")
});
var FONT_WEIGHTS = {
  THIN: THIN,
  LIGHT: LIGHT,
  REGULAR: REGULAR,
  MEDIUM: MEDIUM,
  BOLD: BOLD,
  BLACK: BLACK
};
var H1 = styled__default["default"](Text).attrs({
  as: FONT_TAGS.H1
})(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  font-weight: ", ";\n  font-size: ", ";\n"], ["\n  font-weight: ", ";\n  font-size: ", ";\n"])), FONT_WEIGHTS.BOLD, FONT_SIZES.XXL);
var H2 = styled__default["default"](Text).attrs({
  as: FONT_TAGS.H2
})(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  font-weight: ", ";\n  font-size: ", ";\n"], ["\n  font-weight: ", ";\n  font-size: ", ";\n"])), FONT_WEIGHTS.BOLD, FONT_SIZES.XL);
var H3 = styled__default["default"](Text).attrs({
  as: FONT_TAGS.H3
})(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  font-weight: ", ";\n  font-size: ", ";\n"], ["\n  font-weight: ", ";\n  font-size: ", ";\n"])), FONT_WEIGHTS.MEDIUM, FONT_SIZES.LG);
var H4 = styled__default["default"](Text).attrs({
  as: FONT_TAGS.H4
})(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  font-weight: ", ";\n  font-size: ", ";\n"], ["\n  font-weight: ", ";\n  font-size: ", ";\n"])), FONT_WEIGHTS.MEDIUM, FONT_SIZES.MD);
var H5 = styled__default["default"](Text).attrs({
  as: FONT_TAGS.H5
})(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  font-weight: ", ";\n  font-size: ", ";\n"], ["\n  font-weight: ", ";\n  font-size: ", ";\n"])), FONT_WEIGHTS.BOLD, FONT_SIZES.SM);
var H6 = styled__default["default"](Text).attrs({
  as: FONT_TAGS.H6
})(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  font-weight: ", ";\n  font-size: ", ";\n"], ["\n  font-weight: ", ";\n  font-size: ", ";\n"])), FONT_WEIGHTS.BOLD, FONT_SIZES.XS);
var templateObject_1$3, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1;
var Label = styled__default["default"](Text).attrs({
  as: FONT_TAGS.LABEL
})(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: 2.14286rem;\n"], ["\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: 2.14286rem;\n"])), FONT_WEIGHTS.MEDIUM, FONT_SIZES.SM);
var templateObject_1$2;
var Paragraph = styled__default["default"](Text).attrs({
  as: FONT_TAGS.P
})(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  font-weight: ", ";\n"], ["\n  font-weight: ", ";\n"])), FONT_WEIGHTS.REGULAR);
var XXS = styled__default["default"](Paragraph)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"])), FONT_SIZES.XXS);
var XS = styled__default["default"](Paragraph)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"])), FONT_SIZES.XS);
var MD = styled__default["default"](Paragraph)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"])), FONT_SIZES.MD);
var LG = styled__default["default"](Paragraph)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"])), FONT_SIZES.LG);
var XL = styled__default["default"](Paragraph)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"])), FONT_SIZES.XL);
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
var Hint = styled__default["default"](XS).attrs(function (_a) {
  var color = _a.color,
    danger = _a.danger,
    theme = _a.theme;
  var getTextColor = function () {
    if (color) return color;
    if (danger) return theme.styles.colorDanger;
    return theme.styles.textColorSecondary;
  };
  return {
    color: getTextColor()
  };
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: ", ";\n"], ["\n  color: ", ";\n  font-weight: ", ";\n"])), function (_a) {
  var color = _a.color;
  return color;
}, FONT_WEIGHTS.MEDIUM);
var templateObject_1;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports.Hint = Hint;
exports.LG = LG;
exports.Label = Label;
exports.MD = MD;
exports.Paragraph = Paragraph;
exports.Text = Text;
exports.XL = XL;
exports.XS = XS;
exports.XXS = XXS;
//# sourceMappingURL=text.js.map
