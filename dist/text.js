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

var getColor = styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n" // const subTextStyling = css`
//   margin-top: 0;
// `
])), function (_a) {
  var color = _a.color;
  return color;
}); // const subTextStyling = css`
//   margin-top: 0;
// `

var subTextStyling = styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 0;\n\n  & + * {\n    margin-top: 0;\n  }\n"], ["\n  margin-bottom: 0;\n\n  & + * {\n    margin-top: 0;\n  }\n"])));
var Text = styled__default["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: ", ";\n  width: ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  text-align: ", ";\n  width: ", ";\n  ", "\n  ", "\n  ", "\n" // @ts-ignore
])), function (_a) {
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
}, function (_a) {
  var _css = _a._css;
  return _css;
}); // @ts-ignore

Text.COMPONENT_NAME = "Text";
var templateObject_1, templateObject_2, templateObject_3;
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
var H1$1 = "h1";
var H2$1 = "h2";
var H3$1 = "h3";
var H4$1 = "h4";
var H5$1 = "h5";
var H6$1 = "h6";
var P = "p";
var SPAN = "span";
var DIV = "div";
var FONT_TAGS = {
  H1: H1$1,
  H2: H2$1,
  H3: H3$1,
  H4: H4$1,
  H5: H5$1,
  H6: H6$1,
  P: P,
  SPAN: SPAN,
  DIV: DIV
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
}; // @flow

const H1 = styled__default["default"](Text).attrs({
  as: FONT_TAGS.H1
})`
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: ${FONT_SIZES.XXL};
`;
const H2 = styled__default["default"](Text).attrs({
  as: FONT_TAGS.H2
})`
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: ${FONT_SIZES.XL};
`;
const H3 = styled__default["default"](Text).attrs({
  as: FONT_TAGS.H3
})`
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  font-size: ${FONT_SIZES.LG};
`;
const H4 = styled__default["default"](Text).attrs({
  as: FONT_TAGS.H4
})`
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  font-size: ${FONT_SIZES.MD};
`;
const H5 = styled__default["default"](Text).attrs({
  as: FONT_TAGS.H5
})`
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: ${FONT_SIZES.SM};
`;
const H6 = styled__default["default"](Text).attrs({
  as: FONT_TAGS.H6
})`
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: ${FONT_SIZES.XS};
`;
H1.COMPONENT_NAME = "H1";
H2.COMPONENT_NAME = "H2";
H3.COMPONENT_NAME = "H3";
H4.COMPONENT_NAME = "H4";
H5.COMPONENT_NAME = "H5";
H6.COMPONENT_NAME = "H6"; // @flow

const COMPONENT_NAME$2 = "Label";
const Label = styled__default["default"](Text).attrs({
  as: FONT_TAGS.LABEL,
  "data-component-name": COMPONENT_NAME$2
})`
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  font-size: ${FONT_SIZES.SM};
  line-height: 2.14286rem;
`;
Label.COMPONENT_NAME = COMPONENT_NAME$2; // @flow

const COMPONENT_NAME$1 = "Paragraph";
const Paragraph = styled__default["default"](Text).attrs({
  as: FONT_TAGS.P,
  "data-component-name": COMPONENT_NAME$1
})`
  font-weight: ${FONT_WEIGHTS.REGULAR};
`;
Paragraph.COMPONENT_NAME = COMPONENT_NAME$1;
const XXS = styled__default["default"](Paragraph)`
  font-size: ${FONT_SIZES.XXS};
`;
const XS = styled__default["default"](Paragraph)`
  font-size: ${FONT_SIZES.XS};
`;
const MD = styled__default["default"](Paragraph)`
  font-size: ${FONT_SIZES.MD};
`;
const LG = styled__default["default"](Paragraph)`
  font-size: ${FONT_SIZES.LG};
`;
const XL = styled__default["default"](Paragraph)`
  font-size: ${FONT_SIZES.XL};
`; // @flow

const COMPONENT_NAME = "Hint";
const Hint = styled__default["default"](XS).attrs(({
  color,
  danger,
  theme
}) => {
  const getTextColor = () => {
    if (color) return color;
    if (danger) return theme.styles.colorDanger;
    return theme.styles.textColorSecondary;
  };

  return {
    "data-component-name": COMPONENT_NAME,
    color: getTextColor()
  };
})`
  color: ${({
  color
}) => color};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
`;
Hint.COMPONENT_NAME = COMPONENT_NAME;
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
